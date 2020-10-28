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