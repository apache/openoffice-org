<%
String[] dirs = content.uri.split("/")
// start the breadcrumbs
def path = "/"
def breadcrumbs = "<a href=\"${path}\">home</a>"
// the site is baked in two halves (root and part2); a directory index can live in either
def cwd = new File(".").getCanonicalFile()
def roots = [cwd, new File(cwd, "part2")]
if (cwd.getName() == "part2") roots << cwd.getParentFile()
def hasIndex = { String dir ->
   roots.any { r ->
      ["content", "assets"].any { base ->
         ["html", "htm", "md"].any { ext -> new File(r, base + dir + "index." + ext).exists() }
      }
   }
}
// save each breadcrumb path for ssi analysis
def ssi = new String[dirs.length]
ssi[0] = path
def n = dirs.length - 1;
// only proceed if the page is in a directory
if (n > 0) {
   for (int i=0; i < n; i++) {
       // breadcrumb and path for each directory
       path += dirs[i]+"/";
       if (hasIndex(path)) {
          breadcrumbs += "&nbsp;&raquo;&nbsp;<a href=\"${path}\">${dirs[i]}</a>";
       } else {
          breadcrumbs += "&nbsp;&raquo;&nbsp;${dirs[i]}";
       }
       ssi[i+1] = path
   }
}
content.breadcrumbs=breadcrumbs;
content.ssi=ssi;
%>