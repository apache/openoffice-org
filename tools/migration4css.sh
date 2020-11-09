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

# tools/migration4css.sh ${1}
# ${1} Site folder to migrate

if test "$#" != 1; then
  echo "USAGE: $0 Folder"
  exit 1
fi

cd ${SVNPATH}
echo 'Migrating ${SVNPATH}/${1} to ${GITPATH}'
echo
# 7 - Markdown
echo 'Convert markdown pages'
find ${1} -name "*.mdtext" ! -name "brand.mdtext" ! -name "*nav.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh page {} \;
# commit and push
${GITPATH}/tools/commit2git.sh content ${1} 'Markdown pages'
echo

