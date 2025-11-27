#!/bin/sh

for i in *.html;
do
    cat top.inc $i bottom.inc > ../$i ;
done