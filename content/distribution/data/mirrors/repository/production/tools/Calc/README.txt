Directly getting the latest sites.xml into Calc

Preparation 1
  1. Download a XSLT import filter for OpenOffice.org: convert_sites_xml_into_Calc.xml
     e.g.
       http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/tools/Calc/convert_sites_xml_into_Calc.xml
  2. Start OpenOffice.org 2.x or 3.x
  3. Tools - XML Filter Settings...
  4. New...
  5. Fill the fields in the tab General:
     e.g.
       Filter name:       sites
       Application:       OpenOffice.org Calc (.ods)
       Name of file type: sites
       File extension:    xml
  6. Fill fileds in the tab Transformation
     e.g.
       XSLT for import:   convert_sites_xml_into_Calc.xml
  7. OK
  8. Close


Preparation 2 (non-Windows)
  1. Tools - Options...
  2. Internet - Proxy
  3. Apply settings for your site.


Loading the latest sites.xml into Calc
  1. File - Open...
  2. Fill the fields:
     e.g.
       File name: http://distribution.openoffice.org/source/browse/%2Acheckout%2A/distribution/mirrors/repository/production/data/sites.xml
       Version:   
       File type: sites (*.xml)
  3. Open
