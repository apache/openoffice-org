#!/bin/bash

CURRENTDIR=`pwd`
WORKDIR=/tmp/ooo-site

rm -rf $WORKDIR
mkdir -p $WORKDIR
cp assets/.htaccess $WORKDIR

# we twice bake because we have more files to precess than 16384
# bake part2 content first.
cd part2
../bake.sh -b . $WORKDIR
cd ..

# just bake and serve the site
./bake.sh -b -s . $WORKDIR
