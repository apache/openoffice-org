#!/bin/bash

CURRENTDIR=`pwd`
WORKDIR=/tmp/ooo-site
ME=`basename $0`

rm -rf $WORKDIR
mkdir -p $WORKDIR

# copy the staging site
git checkout asf-staging
git pull origin asf-staging
cp -rp content $WORKDIR

# push all of the results to asf-site
git checkout asf-site
git clean -f -d
git pull origin asf-site
rm -rf content
cp -rp $WORKDIR/content .
git add -f content
git commit -m "git-site-role commit from $ME"
git push -f origin asf-site
