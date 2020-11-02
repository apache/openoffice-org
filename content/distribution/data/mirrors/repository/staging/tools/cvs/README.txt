Directly getting the latest sites.xml in CVS format

1. Downloading sites.xml
    Production: http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/data/sites.xml
    Staging:    http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/staging/data/sites.xml
    Experiment: http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/experiment/sites.xml

    e.g.
     $ wget http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/data/sites.xml

2. Downloading a XSLT file
    Production: http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/tools/cvs/convert_sites_xml_into_csv.xml
    Staging:    http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/staging/tools/cvs/convert_sites_xml_into_csv.xml
    Experiment: http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/experiment/convert_sites_xml_into_csv.xml

    e.g.
     $ wget http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/tools/cvs/convert_sites_xml_into_csv.xml

3. Converting the sites.xml into Calc
    e.g.
     $ xsltproc convert_sites_xml_into_csv.xml sites.xml > sites.csv

    sites.csv is encoded in UTF-8.
