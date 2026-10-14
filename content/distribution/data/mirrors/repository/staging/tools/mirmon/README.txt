Directly getting the latest sites.xml in mirmon format

1. Downloading sites.xml
    Production: http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/data/sites.xml
    Staging:    http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/staging/data/sites.xml
    Experiment: http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/experiment/sites.xml

    e.g.
     $ wget http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/data/sites.xml

2. Downloading a XSLT file
    Production: http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/tools/mirmon/convert_sites_xml_into_mirmon.xml
    Staging:    http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/staging/tools/mirmon/convert_sites_xml_into_mirmon.xml
    Experiment: http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/experiment/convert_sites_xml_into_mirmon.xml

    e.g.
     $ wget http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/tools/mirmon/convert_sites_xml_into_mirmon.xml

3. Converting the sites.xml into mirrorlist
    e.g.
     $ xsltproc convert_sites_xml_into_mirmon.xml sites.xml > mirror_list.csv

    mirror_list.csv is encoded in UTF-8.


4. Utilizing cron to automatically update a mirrorlist

For an ordinal user who has a write permission to /var/tmp
e.g.
3 0,12 * * * /usr/local/bin/download_sites_xml_for_mirmon.sh >> /var/tmp/mirmon_sites.log 2>&1

If you want to receive an error notification email:
e.g.
3 0,12 * * * /usr/local/bin/download_sites_xml_for_mirmon.sh >> /var/tmp/mirmon_sites.log 2>&1 || echo An error occurred.

For a user who has a write permission to /var/log
(This, however, is not recommended for security reasons since 
 downloading sites.xml does not require special privileges.)
e.g.
3 0,12 * * * /usr/local/bin/download_sites_xml_for_mirmon.sh >> /var/log/mirmon_sites.log 2>&1
