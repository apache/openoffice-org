Some thoughts and documentation.

(1) SSI within the templates and produced html remains a good idea.

(2) SSI directory structure could be replaced could be replaced by a json file.

- footer is always the same.
  Path to the footer file to include. Always the same.
- doctype is always the same.
  Path to the doctype file to use. Ought to eliminate this hack.
- home is always the same.
  The name to use for the first breadcrumb which will take you to "/".
- brand for the top of the page.
  Path to the brand file to include. Varies according the language site.
- topnav for the upper navigation bar.
  Path to the top nav menu to include. Varies according the language site.
- leftnav is optional and special.
  Path to a left nav menu to include. Varies according the language site or "project" site.
- rightnav is optional and only used once for l10n where there is also a leftnav.
  Path to a right nav menu to include. Varies according the language site or "project" site.

(3) ssi.json is a directory of directories.

Note this actitivty should also build the breadrcumb list. See (5)

For each template key look up the subpath and then look for the ssi element name.
If missing then go up a level on the subpath.

e.g. if you are looking in "/api/some/deep/path/"
then you look into "/api/some/deep/", "/api/some/", "/api/", and "/"

ssi[path][key]

For api:
    "/api/": {
	"leftnav":"/api/leftnav.html"
    }
    "/": {
	"doctype":"/doctype.html",
	"footer":"/footer.html",
	"brand":"/brand.html",
	"topnav":"/topnav.html",
	"home":"home"
    }


For de:
    "/de/product/": {
	"leftnav":"/de/product/leftnav.html"
    }
    "/de/": {
	"brand":"/de/brand.html",
	"topnav":"/de/topnav.html"
    }
    "/": {
	"doctype":"/doctype.html",
	"footer":"/footer.html",
	"brand":"/brand.html",
	"topnav":"/topnav.html",
	"home":"home"
    }

For xx:
    "/xx/why/": {
	"leftnav":"/xx/why/leftnav.html"
    }
    "/xx/product/": {
	"leftnav":"/xx/product/leftnav.html"
    }
    "/xx/": {
	"topnav":"/xx/topnav.html",
	"brand":"/xx/brand.html"
    }
    "/": {
	"doctype":"/doctype.html",
	"footer":"/footer.html",
	"brand":"/brand.html",
	"topnav":"/topnav.html",
	"home":"home"
    }

(4) List of templates:

See lib/path.pm

- brand.html
  - brand.mdtext
- footer.html
  - footer.mdtext
- doctype.html
  - doctype.mdtext
- navigator.html
  - topnav.mdtext
  - leftnav.mdtext
  - rightnav.mdtext
- html_page.html
  - *.html
  - *.htm
  - extends skeleton.html
  - replaces block content with content extracted from html
- single_narrative.html
  - *.mdtext thats not already covered by above.
  - extends skeleton.html
  
- skeleton.html
  - this is the page design:

<!--#include virtual="{{ ssi.headers.doctype }}" -->
<html>
<head>
<link href="/css/ooo.css" rel="stylesheet" type="text/css">
{% if head %}{{ head|safe }}{% else %}
<title>{% block title %}{{ headers.title }}{% endblock %}</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
{% if headers.css %}<link href="{{ headers.css }}" rel="stylesheet" type="text/css">{% endif %}
{% endif %}
<!--#include virtual="/scripts/google-analytics.js" --> 
<!--#include virtual="/scripts/entourage.js" -->
</head>
<body{% if bodytag %} {{ bodytag|safe }}{% endif %}>
<!--#include virtual="{{ ssi.headers.brand }}" -->
  <div id="topbara">
    {% if ssi.headers.topnav %}<!--#include virtual="{{ ssi.headers.topnav }}" -->{% endif %}
    <div id="breadcrumbsa">{% block breaddcrumbs %}{{ breadcrumbs|safe }}{% endblock %}</div>
  </div>
  <div id="clear"></div>
  {% if ssi.headers.leftnav %}<!--#include virtual="{{ ssi.headers.leftnav }}" -->{% endif %}
  {% if ssi.headers.rightnav %}<!--#include virtual="{{ ssi.headers.rightnav }}" -->{% endif %}
  <div id="content">
    {% block legacy %}{% if ssi.headers.legacy %}<div class="legacy">{{ ssi.headers.legacy }}</div>{% endif %}{% endblock %}
    {% block title %}{% if headers.title %}<h1 class="title">{{ headers.title }}</h1>{% endif %}{% endblock %}
    {% block content %}{{ content|markdown }}{% endblock %}
  </div>
<!--#include virtual="{{ ssi.headers.footer }}" -->
</body>
</html>

(5) Breadcrumbs

sub breadcrumbs {
    my @path = split m!/!, shift;
    pop @path;
    my @rv;
    my $relpath = "";
    for (@path) {
        $relpath .= "$_/";
        $_ ||= "home";
        push @rv, qq(<a href="$relpath">$_</a>);
    }
    return join "&nbsp;&raquo;&nbsp;", @rv;
}

Consider converting into an ul / li structure

Combine with ssi processing.

(6) HTML file rewriting.

In lib/view.pm see the html_page function:

The following match is done on the html source:

    if ($args{content} =~ m!<head.*?>(.*?)</head>(?:.*?<body(.*?)>)?(.*?)(?:</body>|\Z)!si) {
        @args{qw/head bodytag content/} = ($1, $2, $3);
    }

Head attributes are ignored.
All head content is copied.
Any body attributes are preserved.
All of the body content is copied.

If a python framework is used then suggest that re.find be used.

(7) CSS

/css/ooo.css - Skeleton css
/css/exceptions.css - Original exceptions - Home page and downloads
/css/home.css - Home page
/css/styles.css - original css - Home page and Downloads

Lots of css scattered throughout the site.

Navigator inserted css which seems to be worthless.
<style type="text/css">
/* The following code is added by mdx_elementid.py
   It was originally lifted from http://subversion.apache.org/style/site.css */
/*
 * Hide class="elementid-permalink", except when an enclosing heading
 * has the :hover property.
 */
.headerlink, .elementid-permalink {
  visibility: hidden;
}
h2:hover > .headerlink, h3:hover > .headerlink, h1:hover > .headerlink, h6:hover > .headerlink, h4:hover > .headerlink, h5:hover > .headerlink, dt:hover > .elementid-permalink { visibility: visible }</style>

(8) Javascript

/scripts/
api.simile-widgets.org - used for stats time plots.
entourage.js - ssi included tracking downloads somehow.
google-analytics.js - ssi included
jquery-1.11.2.min.js - upgrade?
ooo.js
sorttable.js - other copies used
tableDecorate.js - other copies used

scripts are not optimized and not really normalized.
ssi including entourage.js on all pages is a little silly. It only makes sense on download pages.

We need to determine google-analytics vs. ASF foundation policy.

