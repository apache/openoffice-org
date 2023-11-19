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

# tools/migration2git.sh ${1}
# ${1} Site folder to migrate

if test "$#" != 0; then
  echo "USAGE: $0"
  exit 1
fi

cd ${SVNPATH}
echo 'Migrating '${SVNPATH}'/ to '${GITPATH}
# 3 - Assets
echo 'copy assets not (html and mdtext) to assets tree'
find . -type f -mtime -1 ! -name "*.html" ! -name "*.mdtext" -exec cp -p {} ${GITPATH}/assets/{} \;
# commit
${GITPATH}/tools/commit2git.sh assets ${1} 'assets'
echo
# 4 - HTML
echo 'copy html to content tree'
find .  -type f -name "*.html" -mtime -1 -exec cp -p {} ${GITPATH}/content/{} \;
# commit
${GITPATH}/tools/commit2git.sh content ${1} 'html content'
echo
# 5 - Brand
echo 'Convert brand'
find . -name "brand.mdtext" -mtime -1 -type f -exec ${GITPATH}/tools/convert2md.sh brand {} \;
# commit and push
${GITPATH}/tools/commit2git.sh content ${1} 'Brand'
echo
# 8 - Push to git
echo 'Push to Gitbox'
${GITPATH}/tools/push2git.sh
echo
