/* SiteCatalyst code version: H.14. Copyright Omniture, Inc. More info available at http://www.omniture.com */
/* Owner: Neil Evans */
/************************** CONFIG SECTION ****************************************/
/* Specify the Report Suite(s) */
var s_account="sunopenofficedev";
var sun_dynamicAccountSelection=true;
var sun_dynamicAccountList="sunglobal,sunopenoffice=openoffice.bouncer.osuosl.org;sunglobal,sunopenoffice=openoffice.org;sunopenofficedev=.";	
/* Specify the Report Suite ID */
var s_siteid="ooo:";
/* Settings for pageName */
var oo_host=location.hostname;
if(typeof s_pageType=='undefined'){
	if (oo_host!='download.openoffice.org' && oo_host!='www.openoffice.org' && oo_host!='extensions.services.openoffice.org' && oo_host!='templates.services.openoffice.org' && oo_host!='update.services.openoffice.org' && oo_host!='support.openoffice.org') {
		var s_pageName=location.hostname+window.location.pathname;
		s_pageName=s_pageName.replace(".openoffice.org",":");
		var s_prop31=s_siteid+s_pageName;
		var s_channel=location.hostname;
		s_channel=s_channel.replace(".openoffice.org",":");
		s_channel=s_channel.replace("openoffice.bouncer.osuosl.org","bouncer:");
		s_pageName=s_channel+" (site section)";
	}	
	else {
		var s_pageName=location.hostname+window.location.pathname;		
		s_pageName=s_pageName.replace(".openoffice.org",":");
		s_pageName=s_pageName.replace("openoffice.bouncer.osuosl.org","bouncer:");
		var s_prop31=s_siteid+s_pageName;
		var s_channel=location.hostname;
		s_channel=s_channel.replace(".openoffice.org",":");
		s_channel=s_channel.replace("openoffice.bouncer.osuosl.org","bouncer:");
		
	}
	
}	
	
// Prevent search pages from setting unique pageNames

if (oo_host=='extensions.services.openoffice.org') {
	var oo_url=window.location.pathname.toLowerCase();
	var oo_split=oo_url.split("/");
	var oo_endVal=oo_split.pop()
	if (oo_split[1]=="search") {
		s_pageName=location.hostname+window.location.pathname.toLowerCase();		
		s_pageName=s_pageName.replace(".openoffice.org",":");
		s_pageName=s_pageName.replace(oo_endVal,"")
	}
}	
if (oo_host=='templates.services.openoffice.org') {
	var oo_url1=window.location.pathname.toLowerCase();
	var oo_split1=oo_url1.split("/");
	var oo_endVal1=oo_split1.pop()
	if (oo_split1[2]=="search") {
		s_pageName=location.hostname+window.location.pathname.toLowerCase();	
		s_pageName=s_pageName.replace(".openoffice.org",":");
		s_pageName=s_pageName.replace(oo_endVal1,"")
	}
}
/* Remote Omniture JS call  */
var sun_ssl=(window.location.protocol.toLowerCase().indexOf("https")!=-1);
	if(sun_ssl == true) { var fullURL = "https://www.sun.com/share/metrics/metrics_group1.js"; }
		else { var fullURL= "http://www-cdn.sun.com/share/metrics/metrics_group1.js"; }
document.write("<sc" + "ript type=\"text/javascript\" src=\""+fullURL+"\"></sc" + "ript>");
/************************** END CONFIG SECTION **************************************/

