#!/bin/sh
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#

#
# Use this script to fetch all a project's webcontent for the projects
# listed in the specified file (typically, webcontent-list.txt).
#
# See https://cwiki.apache.org/confluence/display/OOOUSERS/OOo-Sitemap
# for a note on the checkout from the Kenai svn repository.
#
# USAGE:
#   $ ./kenai2website.sh PROJECT
#
#     PROJECT is the name of the project to convert.
#
#     Here are the steps performed.
#
#     1. svn export.
#     2. dos2unix fixup. Change DOS2UNIX to fit your OS.
#     3. compare with AOOo site. Either
#        a) if project exists in AOOo site then find out what differs
#        b) if project does not exist then moves the directory into the AOOo site content.
#           The contents are tested to see what url fixups may be needed.
#           Additional steps are manual. Do test site builds, image url cleanup, other fixups.
#           Once satisfied then do "svn add PROJECT"
#

if test "$#" != 1; then
  echo "USAGE: $0 PROJECT"
  exit 1
fi

REPOS='https://svn.openoffice.org/svn/'
REPOS2='~webcontent'
toolsdir=`pwd`
DOS2UNIX=${toolsdir}/dos2unix.pl
contentdir=${toolsdir}/../content/

webproject=$1

cd /tmp
rm -rf ${webproject}

webrepos=${REPOS}${webproject}${REPOS2}

echo "============ '$webproject' is being exported ..."
svn export ${webrepos} ${webproject}
find ${webproject} -name "*.html" -exec ${DOS2UNIX} {} \;
find ${webproject} -name "*.css" -exec ${DOS2UNIX} {} \;
find ${webproject} -name "*.js" -exec ${DOS2UNIX} {} \;
find ${webproject} -name "*.svg" -exec ${DOS2UNIX} {} \;
if test -d ${contentdir}${webproject}; then
    echo "============ '$webproject' looking for differences ..."
    diff -rqw ${webproject} ${contentdir}/${webproject} | grep differ
    echo "The files above differ. This can be from changes in either repository."
else
    echo "============ installing '$webproject' ..."
    mv ${webproject} ${contentdir}/.
    cd ${contentdir}/.
    echo "============ '$webproject' is installed ..."
    echo "Need to change urls - possibly with sed."
    find ${webproject} -name "*.html" -exec grep -o "http://.*openoffice.org/" {} \;
    echo "suggest local build until satisified."
    echo "remove unneeded files before svn add ${webproject}"
fi
echo " "
