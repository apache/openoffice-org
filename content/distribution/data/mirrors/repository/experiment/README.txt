
Mirror server list 
  sites.xml - holds mirror sites of the OpenOffice.org mirror network

Sample XSLT files
  convert_sites_xml_into_tsv.xml      converts sites.xml into TAB separated file (.csv)
  convert_sites_xml_into_mirmon.xml   converts sites.xml into mirror_list format of 'mirmon'
  convert_sites_xml_into_Calc.xml     XSLT import filter for OpenOffice.org 

Examples
 To get a list of servers in .csv format encoded in UTF-8
  $ wget http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/data/sites.xml
  $ xsltproc convert_sites_xml_into_tsv.xml sites.xml > sites.csv

 or
  $ wget -O - http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/data/sites.xml | xsltproc convert_sites_xml_into_tsv.xml - > sites.csv

 To get a list of servers in 'mirmon' format encoded in UTF-8
  $ wget -O sites.xml http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/data/sites.xml
  $ xsltproc convert_sites_xml_into_mirmon.xml sites.xml | sort > mirmon.csv

 or
  $ wget -O - http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/data/sites.xml | xsltproc convert_sites_xml_into_mirmon.xml - | sort > mirmon.csv

If your machine is located behind a http proxy server, set an environment variable 'http_proxy' to instruct the 'wget' command.
e.g. http_proxy='http://server:8888'


References

 CVS repositories
  Production: http://distribution.openoffice.org/source/browse/distribution/mirrors/repository/production/
  Staging:    http://distribution.openoffice.org/source/browse/distribution/mirrors/repository/staging/
  Experiment: http://distribution.openoffice.org/source/browse/distribution/mirrors/repository/experiment/

 ISO 3166 code lists 
  http://www.iso.org/iso/country_codes/iso_3166_code_lists.htm

 XSLT
  http://www.w3.org/TR/xslt
  http://www.w3schools.com/xsl/

 Mirmon
  http://people.cs.uu.nl/henkp/mirmon/
  http://people.cs.uu.nl/henkp/mirmon/src/mirmon.html#mirror_list__file_name_

 Create XSLT filters for import and export
  http://user.services.openoffice.org/en/forum/viewtopic.php?f=45&t=3490

