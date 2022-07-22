#!/bin/bash

export PATH=/bin:/usr/bin

dir=/var/tmp/mirmonlist
mirrorlist=mirrorlist-ooo

#export http_proxy=http://server:port/
wget_options="--timeout=30 --tries=1"

uri_base=http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution
uri_repository=$uri_base/mirrors/repository/production
uri_sites=$uri_repository/data/sites.xml
 uri_xslt=$uri_repository/tools/mirmon/convert_sites_xml_into_mirmon.xml

 xslt_xml=convert_sites_xml_into_mirmon.xml
sites_xml=sites.xml

mirmon_txt=mirmon.txt

if [ ! -d $dir ]
then
    mkdir $dir || exit 1
fi

cd $dir || exit 2

echo ""
echo -n "Start: " ; /bin/date
echo ""

echo wget $uri_xslt
wget $wget_options -O $xslt_xml $uri_xslt || exit 3

echo ""
echo wget $uri_sites
wget $wget_options -O $sites_xml $uri_sites || exit 4

echo xsltproc $xslt_xml $sites_xml
xsltproc $xslt_xml $sites_xml > $mirmon_txt || exit 5

if [ -f $mirrorlist ]
then
    echo ""
    echo "Differences:"
    diff -U 0 $mirrorlist $mirmon_txt
fi

echo ""
echo "The number of URIs:"
echo -n " ftp:   " ; grep 'ftp://'   $mirmon_txt | /usr/bin/wc -l
echo -n " http:  " ; grep 'http://'  $mirmon_txt | /usr/bin/wc -l
echo -n " rsync: " ; grep 'rsync://' $mirmon_txt | /usr/bin/wc -l
echo -n " Total: " ; cat $mirmon_txt | wc -l

mv $mirmon_txt $mirrorlist || exit 6

echo ""
echo "Successfully finished."
echo ""

exit 0
