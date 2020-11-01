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

if test "$#" != 1; then
  echo "USAGE: $0 Folder"
  exit 1
fi

cd ${SVNPATH}
echo 'Migrating ${SVNPATH}/${1} to ${GITPATH}'
echo
# 1 - Tree structure
echo 'copy directory structure to assets and content trees'
find ${1} -type d ! -empty -exec mkdir -p ${GITPATH}/assets/{} \; -exec mkdir -p ${GITPATH}/content/{} \;
# git does not commit empty directories
echo
# 2 - Large Assets
echo 'copy assets larger than 3M as separate commits'
find ${1} -type f -size +3M -exec cp {} ${GITPATH}/assets/{} \; -exec ${GITPATH}/tools/push2git.sh assets {} 'large asset'\; 	
echo
# 3 - Assets
echo 'copy assets not (html and mdtext) to assets tree'
find ${1} -type f ! -name "*.html" ! -name "*.htm" ! -name "*.mdtext" ! -size +3M -exec cp -p {} ${GITPATH}/assets/{} \;
# commit and push
${GITPATH}/tools/push2git.sh assets ${1} 'assets'
echo
# 4 - HTML
echo 'copy html to content tree'
find ${1}  -type f \( -name "*.html" -or -name "*.htm" \) ! -size +3M -exec cp -p {} ${GITPATH}/content/{} \;
# commit and push
${GITPATH}/tools/push2git.sh content ${1} 'html content'
echo
# 5 - Brand
echo 'Convert brand'
find ${1} -name "brand.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh brand {} \; -exec ${GITPATH}/tools/push2git.sh content {} 'brand'\;
echo
# 6 - Navigators
echo 'Convert navigators'
find ${1} -name "*nav.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh navigator {} \; -exec ${GITPATH}/tools/push2git.sh content {} 'navigator'\;
echo
# 7 - Markdown
echo 'Convert markdown pages'
find ${1} -name "*.mdtext" ! -name "brand.mdtext" ! -name "*nav.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh page {} \;
# commit and push
${GITPATH}/tools/push2git.sh content ${1} 'Markdown pages'
echo

