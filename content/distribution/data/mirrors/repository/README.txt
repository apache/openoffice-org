This repository keeps configuration data of the OpenOffice.org mirror network.

This consists of three layers: production, staging, and experiment.
Data in the production layer are for the servers that serve users.
Data in the staging layer are for the servers for testers.
Both production and staging layers have the same directory structures.

|-- README.txt
|
|-- production
|   |-- README.txt
|   |-- data
|   |   `-- sites.xml
|   `-- tools
|       |-- Calc
|       |   |-- README.txt
|       |   `-- convert_sites_xml_into_Calc.xml
|       |-- cvs
|       |   |-- README.txt
|       |   `-- convert_sites_xml_into_csv.xml
|       `-- mirmon
|           |-- README.txt
|           `-- convert_sites_xml_into_mirmon.xml
`-- staging
    |-- ...
    ...


Data in the experiment layer are for development.

`-- experiment
    |-- ...
    ...

References
 http://en.wikipedia.org/wiki/Staging_site
