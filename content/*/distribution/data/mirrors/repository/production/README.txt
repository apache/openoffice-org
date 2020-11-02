
This repository keeps configuration data of the OpenOffice.org mirror network 
and consists of three layers: production, staging, and experiment.

Both production and staging layers have the same directory structures.

 data/
  sites.xml                           a list of mirror sites

 tools/
  convert_sites_xml_into_Calc.xml     XSLT import filter for OpenOffice.org 
  convert_sites_xml_into_csv.xml      converts sites.xml into TAB separated file (.csv)
  convert_sites_xml_into_mirmon.xml   converts sites.xml into mirror_list format of 'mirmon'

  |
  |-- data
  |   `-- sites.xml
  |
  `-- tools
      |-- Calc
      |   `-- convert_sites_xml_into_Calc.xml
      |
      |-- cvs
      |   `-- convert_sites_xml_into_csv.xml
      |
      `-- mirmon
          `-- convert_sites_xml_into_mirmon.xml


Experiment layer has files under development.

Each layer can be directory accessed through your web browser:
 production: http://distribution.openoffice.org/source/browse/distribution/mirrors/repository/production/
 staging:    http://distribution.openoffice.org/source/browse/distribution/mirrors/repository/staging/
 experiment: http://distribution.openoffice.org/source/browse/distribution/mirrors/repository/experiment/

