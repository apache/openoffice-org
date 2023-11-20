# OpenOffice.org Templates

This describes the Simple Groovy templates (GSP) that are used to build the site.

## Templates that Generate HTML

1. `page.gsp`
   This template is used to generate html pages from both html and md files. It uses the following steps.

```
<%
  // from jbake - content.file, content.uri and content.body
  // from page metadata - content.title and content.css
  if ( content.file.endsWith(".html") ) {
    // using content.body if html get content.header, content.bodytag, and content.extracted_body
    include "html_extract.gsp"
  }
  // insert breadcrumbs and ssi logic
  // using content.uri get content.breadcrumbs and content.ssi[]
  include "breadcrumbs.gsp"
  // using content.ssi[] get content.brand, content.topnav, content.leftnav and content.rightnav
  include "ssi_paths.gsp"
  // adjust css from markdown output
  if (content.image_css || content.list_css) {
     include "markdown_css.gsp";
  }
%>
```
   The html skeleton may use any of the following content model properties
   - content.header (optional)
   - content.title (optional)
   - content.css (optional)
   - content.css2 (optional)
   - content.image_css (optional)
   - content.list_css (optional)
   - content.bodytag
   - content.brand
   - content.topnav
   - content.breadcrumbs
   - content.leftnav (optional)
   - content.rightnav (optional)
   - content.extracted_body (html)
   - content.body (md)

   The following SSI files may be used.
   - `/doctype.html`
   - content.brand
   - content.topnav
   - content.leftnav (optional)
   - content.rightnav (optional)
   - `/footer.html`

   The CSS file that is used for these pages is `/css/ooo.css`. If provided then `content.css` and `content.css2` are included afterwards allowing for classes to be overridden.
   
1. `brand.gsp`
   This template is used to generate the top / branding portion of each page, and is included with SSI.
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

1. `navigator.gsp`
   This template is used to generate navigator SSI. These come in three flavors:
   * `topnav.md`
   * `leftnav.md`
   * `rightnav.md`

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

## Helper Templates

1. `html_extract.gsp`
   This template is to extract content model data from an html file.
   * `content.header` is the portion of the html between <head>...</head>
   * `content.bodytag` is any attributes with the <body...> tag.
   * `content.extracted_body` is the page content within <body>...</body> or after <body>...$ 

```
<%
  // Extract the body attributes as content.bodytag
  def matcher0 = content.body =~ "<body(.*?)>";
  assert matcher0 instanceof java.util.regex.Matcher;
  if (!matcher0) {
    // bare html not wrapped in a <body> tag
    content.extracted_body = content.body
    content.bodytag = null
    content.header = null
  } else {
    //assert matcher0.matches();
    content.bodytag = matcher0.group(1);

    // Extract the head content as content.header
    def matcher1 = content.body =~ "<head.*?>([\\S\\s]*?)</head>";
    assert matcher1 instanceof java.util.regex.Matcher;
    if (!matcher1) {
      // no head found.
      content.header = null
    } else {
      //assert matcher1.matches();
      content.header = matcher1.group(1);
    }

    // Extract the body content as content.extracted_body
    def matcher2 = content.body =~ "<body.*?>([\\S\\s]*?)</body>";
    assert matcher2 instanceof java.util.regex.Matcher;
    if (!matcher2) {
      matcher2 = content.body =~ "<body.*?>([\\S\\s]*?)";
      if (!matcher2) {
        throw new RuntimeException("content body not found");
      }
    }
    //assert matcher2.matches();
    content.extracted_body= matcher2.group(1);
  }
%>
```

1. `breadcrumbs.gsp`
   This template processes the content's uri to create breadcrumbs and a set of paths.
   * `content.breadcrumbs` is html for the page's breadcrumbs.
   * `content.ssi` is an array of paths for the breadcrumbs and ssi includes.

```
<%
String[] dirs = content.uri.split("/")
// start the breadcrumbs
def path = "/"
def breadcrumbs = "<a href=\"${path}\">home</a>"
// save each breadcrumb path for ssi analysis
def ssi = new String[dirs.length]
ssi[0] = path
def n = dirs.length - 1;
// only proceed if the page is in a directory
if (n > 0) {
   for (int i=0; i < n; i++) {
       // breadcrumb and path for each directory
       path += dirs[i]+"/";
       breadcrumbs += "&nbsp;&raquo;&nbsp;<a href=\"${path}\">${dirs[i]}</a>";
       ssi[i+1] = path
   }
}
content.breadcrumbs=breadcrumbs;
content.ssi=ssi;
%>
```

1. `ssi_paths.gsp`
   This template determines the ssi paths to include for branding and navigation.
   If you add either type of content then you will need to update this template.

```
<%
  // default values
  content.brand='/brand.html';
  content.topnav='/topnav.html';
  content.leftnav=null;
  content.rightnav=null;

  def brand = [:]
	brand["/"] = "/brand.html"
	brand["/af/"] = "/af/brand.html"
	...
	brand["/zh/"] = "/zh/brand.html"

  def topnav = [:]
	topnav["/"] = "/topnav.html"
	topnav["/af/"] = "/af/topnav.html"
	...
	topnav["/zh/"] = "/zh/topnav.html"

  def leftnav = [:]
	leftnav["/api/"] = "/api/leftnav.html"
	leftnav["/da/product/"] = "/da/product/leftnav.html"
	leftnav["/da/why/"] = "/da/why/leftnav.html"
	...
	leftnav["/xx/product/"] = "/xx/product/leftnav.html"
	leftnav["/xx/why/"] = "/xx/why/leftnav.html"

  def rightnav = [:]
	rightnav["/l10n/"]="/l10n/rightnav.html"

  def n=content.ssi.length;
  for (int i=0; i<n; i++ ) {
      def key = content.ssi[i]
      if ( brand[key] ) content.brand = brand[key];
      if ( topnav[key] ) content.topnav = topnav[key];
      if ( leftnav[key] ) content.leftnav = leftnav[key];
      if ( rightnav[key] ) content.rightnav = rightnav[key];
  }
%>
```
1. `markdown_css.gsp`
    This template is used to insert css classes for image paragraphs
    and product list items. This is due to no obvious support in JBake for
    Markdown Extra.

```
<%
  content.extracted_body = content.body
  if ( content.image_css ) {
     content.extracted_body = content.extracted_body.replaceAll("(<p><img)") {
         it[0] = "<p class=\"${content.image_css}\"><img"
     }
     content.extracted_body = content.extracted_body.replaceAll("(<p><a href=\"/product)") {
         it[0] = "<p class=\"${content.image_css}\"><a href=\"/product"
     }
  }
  if ( content.list_css ) {
     String[] list_css = ["${content.list_css}-writer",
     	      	       	  "${content.list_css}-calc",
			  "${content.list_css}-impress",
			  "${content.list_css}-draw",
			  "${content.list_css}-base",
			  "${content.list_css}-math"]
     def n=list_css.length;
     for (int i=0; i<n; i++) {
     	 content.extracted_body =  content.extracted_body.replaceFirst("(\\<li\\>)") {
            it[0] = "<li class=\"${list_css[i]}\">"
         }
     }
  }
%>
```
