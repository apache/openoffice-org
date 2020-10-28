<%
String[] dirs = content.uri.split("/")
def breadcrumbs = "<a href=\"/\">home</a>"
def path = "/"
def n = dirs.length - 1;
if (n > 0) {
   for (int i=0; i < n; i++) {
       path += dirs[i]+"/";
       breadcrumbs += "&nbsp;&raquo;&nbsp;<a href=\"${path}\">${dirs[i]}</a>";
   }
}
content.dirs=dirs;
content.breadcrumbs=breadcrumbs;
%>