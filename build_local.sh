#!/bin/bash

CURRENTDIR=`pwd`
WORKDIR=/tmp/ooo-site

rm -rf $WORKDIR
mkdir -p $WORKDIR

# just bake and serve the site
./bake.sh -b -s . $WORKDIR
