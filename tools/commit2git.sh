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

# tools/commit2git.sh ${1} ${2} ${3}
# ${1} Category 'assets','content'
# ${2} Path to commit
# ${3} Description for commit message - 'assets','large asset','html content','Markdown pages','brand','navigator'

if test "$#" != 3; then
  echo "USAGE: $0 Category Path Description"
  exit 1
fi

cd ${GITPATH}
git add ${1}/${2}
git commit -m "Migration of $2 $3"
