# OpenOffice.org Templates

This describes the Simple Groovy templates (GSP) that are used to build the site.

## Templates that Generate HTML

1. page.gsp
   This template is used to generate html pages from both html and md files. It uses the following steps.
   * If an html file then html_extract.gsp is included to parse the html into the header, bodytag, and body.
   * breadcrumbs.gsp is included to generate the breadcrumbs and save the uri path to each directory on that content's path.
   * ssi_paths.gsp is included to determine which brand, topnav, leftnav, and rightnav SSIs to include. leftnav and rightnav are optional.
   * the html skeleton is then filled in with the data model.

1. brand.gsp
   This template is used to generate the top / branding portion of each page included with SSI.
   These files are used to provide translated versions of the brand.
   brand.md files cause the creation of these html SSIs using metadata to be filled into the template.

```
type=brand
search=search
selectedlang=en
language=Language
name=Apache OpenOffice
tagline=The Free and Open Productivity Suite
logo=AOO_logos/AOO4_website_logo.png
domain=https://www.openoffice.org
divid=bannera
announce=Apache OpenOffice 4.1.7 released
announceurl=https://blogs.apache.org/OOo/entry/announcing-apache-openoffice-4-13
announcetip=Apache OpenOffice 4.1.7 released
~~~~~~
```

1. navigator.gsp
   This template is used to generate navigator SSI. These come in three flavors:
   * topnav.md
   * leftnav.md
   * rightnav.md

```
type=navigator
divid=topnava
~~~~~~
    
- [Product][m0]
- [Download][m1]
- [Support][m2]
- [Blog][m3]
- [Extend][m4]
- [Develop][m5]
- [Focus Areas][m6]
- [Native Language][m7]
    
    
[m0]: /product/index.html				"Apache OpenOffice product description"
[m1]: /download/index.html				"Download OpenOffice"
[m2]: /support/index.html 			     	"Find Support for OpenOffice"
[m3]: https://blogs.apache.org/ooo/			"Apache OpenOffice Blog"
[m4]: /extensions/index.html				"Extensions and Templates for OpenOffice"
[m5]: https://openoffice.apache.org/get-involved.html	"Get involved in Apache OpenOffice"
[m6]: /projects/accepted.html				"Apache OpenOffice development focus areas"
[m7]: /projects/native-lang.html		 	"Apache OpenOffice in your Native Language"
```