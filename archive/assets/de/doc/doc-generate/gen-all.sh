#!/bin/bash

echo "Generating JS-Version..."
./doc-generate.pl index.tt > ../index.html

echo "Generating Non-JS-Version"
./doc-generate.pl index-nojs.tt > ../index-nojs.html

