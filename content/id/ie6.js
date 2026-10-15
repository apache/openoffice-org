var browser=navigator.appName;
 var b_version=navigator.appVersion;
 var version=parseFloat(b_version);
 if ((browser=="Microsoft Internet Explorer") && (version=6))
 {
   document.write('  <link rel="stylesheet" href="ie6.css" type="text/css" />');
   alert("Your browser cannot display this site correctly - please ask your vendor for an upgrade");
}