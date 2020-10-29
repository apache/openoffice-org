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
#   $ ./urlrewrite.sh WEB-PROJECT
#
#     WEB-PROJECT - the name of the project to apply the urlrewrite rules.
#
#  This is used to change html according the rules in urlrewrite.sed
#  The project directory is scanned at the end for other urls which eventually
#  need fixup when the new url is known.
#
#  Fixups may be needed for css, js and other types of files.
#

if test "$#" != 2; then
  echo "USAGE: $0 PROJECT SUFFIX"
  exit 1
fi

toolsdir=`pwd`
sedscripts=${toolsdir}/urlrewrite2.sed
contentdir=${toolsdir}/../content/

webproject=$1
suffixmatch=$2

if test -d ${contentdir}${webproject}; then
    echo "============ '$webproject' performing url fixups ..."
    cd ${contentdir}${webproject}
    for htmlfile in `find . -name "${suffixmatch}"` ; do
	echo ${htmlfile}
	mv ${htmlfile} ${htmlfile}.bak
	sed -f ${sedscripts} ${htmlfile}.bak > ${htmlfile}
	diff -q ${htmlfile}.bak ${htmlfile}
	rm ${htmlfile}.bak
    done
    echo "============ '$webproject' performing url fixups ..."
    find . -name "${suffixmatch}" -exec grep -o "https://.*openoffice.org/" {} \;
fi
echo " "
