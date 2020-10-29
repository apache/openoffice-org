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
# This file contains a list of every project's webcontent currently
# hosted on Oracle's Kenai svn repository at:
#   https://svn.openoffice.org/svn/<$projectname>~webcontent
#
# The webcontent repositories that should not be pulled are commented out,
# with a short explanation why.
#
# Note: for automated processing of this file, use only lines that
# begin with "./".
#

This directory contains the scripts used in converting content on the OOo websites.

kenai2website.sh <project>
==========================

This is used to pull a Kenai project webrepos to a /tmp directory.
dos2unix is applied to certain files. And either the directory moved to
ooo/site/trunk/content/openofficeorg/<project>/. or the two directories compared.

fetch-all-web.sh <project-list>
===============================

This is used to call kenai2website for a list of projects.

web-list.txt
============

This is a list of OOo projects from Kenai that have been moved into AOOo's repros.

urlrewrite.sh
=============

This script is used to rewrite urls in the project's html to fit the AOOo scheme.

urlrewrite.sed
==============

This contains the url rewrite rules. Used by urlrewrite.sh.

