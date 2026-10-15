/* SiteCatalyst code version: H.14. Copyright Omniture, Inc. More info available at http://www.omniture.com */
/* Author: Neil Evans */
/************************** CONFIG SECTION ****************************************/
/* Specify the Report Suite(s) */
var s_account="sunopenofficedev";
var sun_dynamicAccountSelection=true;
var sun_dynamicAccountList="sunglobal,sunopenoffice=openoffice.bouncer.osuosl.org;sunglobal,sunopenoffice=openoffice.org;sunopenofficedev=.";  
/* Specify the Report Suite ID */
var s_siteid="ooo:";
/* Settings for pageName */
if(typeof s_pageType=='undefined'){
  
  var s_channel=location.hostname;
  s_channel=s_channel.replace(".openoffice.org",":");
  s_channel=s_channel.replace("openoffice.bouncer.osuosl.org","bouncer:");
  
  var s_pageName=location.hostname+window.location.pathname;    
  s_pageName=s_pageName.replace(".openoffice.org",":");
  s_pageName=s_pageName.replace("openoffice.bouncer.osuosl.org","bouncer:");
}
/* Remote Omniture JS call  */
var sun_ssl=(window.location.protocol.toLowerCase().indexOf("https")!=-1);
  if(sun_ssl == true) { var fullURL = "https://www.sun.com/share/metrics/metrics_group1.js"; }
    else { var fullURL= "http://www-cdn.sun.com/share/metrics/metrics_group1.js"; }
document.write("<sc" + "ript language=\"JavaScript\" src=\""+fullURL+"\"></sc" + "ript>");
/************************** END CONFIG SECTION **************************************/