/*
 * get array for language
 */
function getArray() {
	if (navigator.language)
    	language = navigator.language;
  	else if (navigator.userLanguage)
    	language = navigator.userLanguage;
  	else if (navigator.systemLanguage)
    	language = navigator.systemLanguage;

  	// Convert "en" to "en-US" as well since en-US build is the canonical
  	// translation, and thus better tested.
  	if (language == "" || language == "null" || language == "en") language = "en-US";

  	// Konqueror uses '_' where other browsers use '-'.
  	if (language.indexOf("_") != -1) {
		language = language.split("_").join("-");
	}

  	language = language.toLowerCase();
  	var languageCode = language.split("-")[0];
  	var regionCode = language.split("-")[1];

	var thisLanguageSet  = languages[languageCode];
	if ( thisLanguageSet == null ) {
		// language code not found inside array
  		languageCode = "en";
  		regionCode = "us";
		thisLanguageSet  = languages[languageCode];
	}

	if ( regionCode != null ) {
		// found additional region code
    	if (thisLanguageSet[regionCode] != null) {
			// choose langCode-regionCode
			thisLanguage = thisLanguageSet[regionCode];
		} else {
			// choose default
			thisLanguage = thisLanguageSet["-"];
			if ( languageCode == "en" ) {
				// special case, default is en-US for en-XX
  				regionCode = "us";
				thisLanguageSet  = languages[languageCode];
				thisLanguage = thisLanguageSet[regionCode];
			}
		}
	} else {
		// choose default for none given region code
		thisLanguage = thisLanguageSet["-"];
	};
	return thisLanguage;
}

/*
 * get language for user-language
 */
function getLanguage() {
	var a = getArray();
  	return a[1];
}

/*
 * get language for user-language in ISO format
 */
function getLanguageISO() {
	if (navigator.language)
    	language = navigator.language;
  	else if (navigator.userLanguage)
    	language = navigator.userLanguage;
  	else if (navigator.systemLanguage)
    	language = navigator.systemLanguage;

  	// Convert "en" to "en-US" as well since en-US build is the canonical
  	// translation, and thus better tested.
  	if (language == "" || language == "null" || language == "en") language = "en-US";
	if (language == "pt") language = "pt-PT";

  	// Konqueror uses '_' where other browsers use '-'.
  	if (language.indexOf("_") != -1) language = language.split("_").join("-");

  	language = language.toLowerCase();
  	var languageCode = language.split("-")[0];
  	var regionCode = language.split("-")[1];

	var thisLanguageSet  = languages[languageCode];
	if ( thisLanguageSet == null ) {
		return "en-US";
	} else if ( regionCode != null ) {
		if ( regionCode == "pt" && languageCode == "pt" ) {
			// fix for Port. pt-PT downloads named only pt without region code!
			return languageCode;
		}
    	if (thisLanguageSet[regionCode] != null) {
			// choose langCode-regionCode
			return languageCode + "-" + regionCode.toUpperCase();
		} else {
			// choose default
			if ( languageCode == "en" ) {
				// special case, default is en-US for en-XX
  				return "en-US";
			} else
			   return languageCode;
		}
	} else {
		// choose default
		return languageCode;
	};
}

/*
 * get flag for mirror link
 * was old bouncer flag
 * depends on array-list
 */
function hasMirrorLink() {
	var a = getArray();
	var platform = getPlatform();

	if ( a[4] == 'y' ) {
		// special handling for MAC, links in combination with general flag a[4]
		if ( platform.indexOf( "Mac" ) == -1 || a[5] == 'y' ) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

/*
 * get link
 * depends on array-list
 */
function getLink( version ) {
	return bouncer_getLink( version );
}

/*
 * get link
 * depends on array-list
 */
function getLink( version, mirror ) {
	if ( null != mirror ) {
		return bouncer_getLink( version, mirror, "old" );
	}
}

/*
 * get link
 * depends on array-list and download-set nameschema
 */
function getLink( version, mirror, schema ) {
	if ( null != mirror ) {
		if ( mirror.indexOf( "bouncer" ) > -1 ) {
			return bouncer_getLink( version );
		} else if ( mirror.indexOf( "mirrorbrain" ) > -1 ) {
			return mirrorbrain_getLink( version, schema );
		} else if ( mirror.indexOf( "sourceforge" ) > -1 ) {
			return sourceforge_getLink( version, schema );
		} else {
			return bouncer_getLink( version );
		}
	}
}

/*
 * get platform of browser
 * independant from mirror-system
 */
function getPlatform() {
	if ( navigator.platform != null ) {
		if ( navigator.platform.indexOf( "Win32" ) != -1 ) {
			return "Windows";
		} else if ( navigator.platform.indexOf( "Win64" ) != -1 ) {
			return "Windows";
		} else if ( navigator.platform.indexOf( "Win" ) != -1 ) {
			return "Windows";
		} else if ( navigator.platform.indexOf( "Linux" ) != -1 ) {
			if ( navigator.platform.indexOf( "64" ) != -1 ) {
				if ( navigator.userAgent != null ) {
					if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 ||
					     navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
						return "Linux Debian 64-bit";
					} else {
						return "Linux 64-bit";
					}
				} else {
					return "Linux 64-bit";
				}
			} else {
				if ( navigator.userAgent != null ) {
					if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 ||
					     navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
						return "Linux Debian";
					} else {
						return "Linux";
					}
				} else {
					return "Linux";
				}
			}
		} else if ( navigator.platform.indexOf( "SunOS i86pc" ) != -1 ) {
			return "Solaris x86";
		} else if ( navigator.platform.indexOf( "SunOS sun4u" ) != -1 ) {
			return "Solaris SPARC";
		} else if ( navigator.platform.indexOf( "SunOS" ) != -1 ) {
			return "Solaris SPARC";
		} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "Intel" ) != -1 ) {
			return "Mac OS Intel";
		} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "PPC" ) != -1 ) {
			return "Mac OS PPC";
		} else if ( navigator.platform.indexOf( "Mac" ) != -1 ) {
			return "Mac OS Intel" ;
		} else if ( navigator.platform.indexOf( "iPad" ) != -1 || navigator.platform.indexOf( "iPhone" ) != -1 ||
			    navigator.platform.indexOf( "iPod" ) != -1 ) {
			// this code will redirect the iPad, iPhone and iPod entries
			return "Mac OS Intel" ;
		} else if ( navigator.platform.indexOf( "Series60" ) != -1 ) {
			// this code will redirect the Series60 entries
			return "Windows" ;
		} else if ( navigator.platform.indexOf( "null" ) != -1 ) {
			return "Windows" ;
		} else {
			// return platform name
			return navigator.platform;
		}
	}
	return "Windows";
}

/*
 * get platform for bouncer-link
 * must be changed
 */
function getPlatformForMirror() {
	return bouncer_getPlatformForMirror();
}

/*
 * deprecated
 * must be changed
 */
function getPlatformForBouncer() {
	return getPlatformForMirror();
}

/*
 * get tupel for tracking
 */
function getTupel( href ) {
    if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) > -1 ) {
		return bouncer_getTupel( href );
	} else if ( href.indexOf( MIRROR_MIRRORBRAIN_URL + "files/" ) > -1 ) {
		return mirrorbrain_getTupel( href );
	}
	return "";
}

/*
 * get product name for tracking
 */
function getProduct( href ) {
    var retVal = "";

	if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) > -1 ) {
		return bouncer_getProduct( href );
	} else if ( href.indexOf( MIRROR_MIRRORBRAIN_URL + "files/" ) > -1 ) {
		return mirrorbrain_getProduct( href );
	}
	return retVal;
}

/*
 * get language code for tracking
 */
function getLang( href ) {
    var retVal = "";

	if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) > -1 ) {
		return bouncer_getLang( href );
	} else if ( href.indexOf( MIRROR_MIRRORBRAIN_URL + "files/" ) > -1 ) {
		return mirrorbrain_getLang( href );
	}
	return retVal;
}

/*
 * get os for tracking
 */
function getOS( href ) {
    var retVal = "";

	if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) > -1 ) {
		return bouncer_getOS( href );
	} else if ( href.indexOf( MIRROR_MIRRORBRAIN_URL + "files/" ) > -1 ) {
		return mirrorbrain_getOS( href );
	}
	return retVal;
}

/*
 * get version for tracking
 */
function getVersion( href ) {
	var retVal = "";

	if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) > -1 ) {
		return bouncer_getVersion( href );
	} else if ( href.indexOf( MIRROR_MIRRORBRAIN_URL + "files/" ) > -1 ) {
		return mirrorbrain_getVersion( href );
	}
	return retVal;
}

/*
 * this function is used on the "download.openoffice.org/other.html" website
 */
function writeJavaSelector() {
	document.write( "<form action=\"\" method=\"\" name=\"downloadSettings\">" );
	document.write( "<input type=\"checkbox\" onclick=\"updateHREFs()\" checked=\"checked\" name=\"cbIncludeJRE\" id=\"cbIncludeJRE\">&nbsp;" );
	//document.write( "<label for=\"cbIncludeJRE\">Include the JRE to the download (this option is not available for Linux 32/64-bit Debian and Mac OS).</label></input>" );
	document.write( "Include the JRE to the download (switching is only available for Windows and Linux 32-bit RPM full installation sets).</input>" );
	document.write( "<br/>" );
	document.write( "</form>" );
}

/*
 * this function is used on the "download.openoffice.org/all_rc.html" website
 */
function writeJavaSelectorRC() {
	document.write( "<form action=\"\" method=\"\" name=\"downloadSettings\">" );
        document.write( "<input type=\"checkbox\" onclick=\"updateHREFs()\" checked=\"checked\" name=\"cbIncludeJRE\" id=\"cbIncludeJRE\">&nbsp;" );
	//document.write( "<label for=\"cbIncludeJRE\">Include the JRE to the download (this option is not available for Linux 32/64-bit Debian and Mac OS).</label></input>" );
	document.write( "Include the JRE to the download (switching is only available for Windows and Linux 32-bit RPM full installation sets).</input>" );
	document.write( "<br/>" );
	document.write( "</form>" );
}

function updateHREFs() {
  var qabuildsul = document.getElementById("qabuilds");
  var anchorsToMirror = document.getElementsByTagName("a");

  if (document.downloadSettings.cbIncludeJRE.checked == false) {
	for (var i = 0; i < anchorsToMirror.length; i++) {
	   	if ( anchorsToMirror[i].href.indexOf( "os=linuxinteldeb" ) == -1
			&& anchorsToMirror[i].href.indexOf( "os=macosx" ) == -1
		) {
			if ( anchorsToMirror[i].href.indexOf( "?" ) > 0 && anchorsToMirror[i].href.indexOf( MIRROR_BOUNCER_URL ) > -1 ) {
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("wjre&amp;lang=","&amp;lang=");
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("wjre&lang=","&lang=");
			} else if ( anchorsToMirror[i].href.indexOf( MIRROR_MIRRORBRAIN_URL + "files/" ) > -1 ) {
				if ( anchorsToMirror[i].href.indexOf( "_install-" ) > -1 ||
					( anchorsToMirror[i].href.indexOf( "_install_" ) > -1 &&
						( anchorsToMirror[i].href.indexOf( "_Linux_" ) > -1 || anchorsToMirror[i].href.indexOf( "_MacOS_" ) > -1 ||
						  anchorsToMirror[i].href.indexOf( "_Win_" ) > -1 ) ) ) {
					// new schema
	   				anchorsToMirror[i].href = anchorsToMirror[i].href.replace("-wJRE_","_");
				} else {
					// old schema
	   				anchorsToMirror[i].href = anchorsToMirror[i].href.replace("install_wJRE_","install_");
				}
			} else {
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("wjre&amp;lang=","&amp;lang=");
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("wjre&lang=","&lang=");
			}
		}
		if ( anchorsToMirror[i].href.indexOf( "_Linux_x86-64_install-rpm_" ) > -1 || anchorsToMirror[i].href.indexOf( "_Solaris_" ) > -1) {
			// do not include Linux x86-64 RPM, Solaris in the JRE switching as only wJRE builds are available
			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("_install-rpm_","_install-rpm-wJRE_");
			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("_install_","_install-wJRE_");
		}
		if ( anchorsToMirror[i].href.indexOf( "OOo-SDK_" ) > -1 ) {
			// do not include SDK in the JRE switching as only non-JRE builds are available
			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("_install-wJRE_","_install_");
			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("_install-rpm-wJRE_","_install-rpm_");
		}
	}
  } else {
	for (var i = 0; i < anchorsToMirror.length; i++) {
		if ( anchorsToMirror[i].href.indexOf( "os=linuxinteldeb" ) == -1
			&& anchorsToMirror[i].href.indexOf( "os=macosx" ) == -1
		) {
			if ( anchorsToMirror[i].href.indexOf( "?" ) > 0 && anchorsToMirror[i].href.indexOf( MIRROR_BOUNCER_URL ) > -1 ) {
	   			// we cannot assume that it is always right, and in order to prevent wjrewjrewjre&... this (should) solve(s) it...
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("wjre&amp;lang=","&amp;lang=");
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("wjre&lang=","&lang=");
	   			// and now we add them :)
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("&amp;lang=","wjre&amp;lang=");
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("&lang=","wjre&lang=");
			} else if ( anchorsToMirror[i].href.indexOf( MIRROR_MIRRORBRAIN_URL + "files/" ) > -1 ) {
				if ( anchorsToMirror[i].href.indexOf( "_install" ) > -1 &&
					( anchorsToMirror[i].href.indexOf( "_MacOS" ) > -1 || anchorsToMirror[i].href.indexOf( "_deb" ) > -1 ||
					  anchorsToMirror[i].href.indexOf( "_HPPA" ) > -1 || anchorsToMirror[i].href.indexOf( "_IA64" ) > -1 ||
					  anchorsToMirror[i].href.indexOf( "_PPC" ) > -1 || anchorsToMirror[i].href.indexOf( "_S390X" ) > -1 ||
					  anchorsToMirror[i].href.indexOf( "OOo-SDK_" ) > -1 ) ) {
					// do nothing for MAC, _deb, Linux HPPA, IA64, PPC, S390X and OOo-SDK
				} else if ( anchorsToMirror[i].href.indexOf( "_install-" ) > -1 || (
					anchorsToMirror[i].href.indexOf( "_install_" ) > -1 && (
					anchorsToMirror[i].href.indexOf( "_Linux_" ) > -1 || anchorsToMirror[i].href.indexOf( "_Win_" ) > -1 ||
					anchorsToMirror[i].href.indexOf( "_Solaris_" ) > -1
					)
        		) ) {
					// new schema
	   				anchorsToMirror[i].href = anchorsToMirror[i].href.replace("_install_","_install-wJRE_");
					anchorsToMirror[i].href = anchorsToMirror[i].href.replace("_install-rpm_","_install-rpm-wJRE_");
				} else {
					// old schema
	   				anchorsToMirror[i].href = anchorsToMirror[i].href.replace("install_wJRE_","install_");
					anchorsToMirror[i].href = anchorsToMirror[i].href.replace("install_","install_wJRE_");
				}
			} else {
				// we cannot assume that it is always right, and in order to prevent wjrewjrewjre&... this (should) solve(s) it...
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("wjre&amp;lang=","&amp;lang=");
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("wjre&lang=","&lang=");
	   			// and now we add them :)
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("&amp;lang=","wjre&amp;lang=");
	   			anchorsToMirror[i].href = anchorsToMirror[i].href.replace("&lang=","wjre&lang=");
			}
		}
	}
  }
}

function continueToDownload( uri ) {
  uri = uri.replace( MIRROR_BOUNCER_URL, "" );
  // bonuscheck... noone gets hurt...
  if (document.downloadSettings.cbIncludeJRE.checked == false) {
	uri = uri.replace("wjre","");
  }
  document.location = "http://download.openoffice.org/contribute.html" + uri; //absolute to for use at other subdomains
}

function continueToDownloadTwo( uri ) {
  uri = uri.replace("http://openoffice.bouncer.osuosl.org/","");
  // bonuscheck... noone gets hurt...
  if (document.downloadSettings.cbIncludeJRE.checked == false) {
	uri = uri.replace("wjre","");
  }
  document.location = "http://download.openoffice.org/contribute.html" + uri;
}

function openItem( itemid, uri ) {
	var thisDocument = document.getElementById("downloadextendedtext");
	var thisDocument = document.getElementById(itemid);

	if ( ( itemid=="optionitem1" || itemid=="optionitem5" || itemid=="optionitem6" || itemid=="optionitem7" || itemid=="optionitem8" ) && uri.indexOf( MIRROR_BOUNCER_URL ) > -1 ) {
		uri = uri.replace( MIRROR_BOUNCER_URL + "?","");
		uri = "http://download.openoffice.org/contribute.html?download=bouncer&" + escape( uri );
	} else if ( ( itemid=="optionitem1" || itemid=="optionitem5" || itemid=="optionitem6" || itemid=="optionitem7" || itemid=="optionitem8" ) && uri.indexOf( MIRROR_MIRRORBRAIN_URL ) > -1 ) {
		uri = uri.replace( MIRROR_MIRRORBRAIN_URL, "");
		uri = "http://download.openoffice.org/contribute.html?download=mirrorbrain&" + escape( uri );
	}
	document.location = uri;
	// start( uri );
};

function makeDownloadLIintoButtons() {
	var downloadextendedtext = document.getElementById( "downloadextendedtext" );
	var liItems = downloadextendedtext.getElementsByTagName("li");

	for (var i = 0; i < liItems.length; i++) {
		var liItemsAnchors = liItems[i].getElementsByTagName("a");
		if (liItemsAnchors.length == 1) {
			var hrefcontents = liItemsAnchors[0].href;
			if (hrefcontents.search( "bouncer" ) > -1 || hrefcontents.search( MIRROR_MIRRORBRAIN_URL ) > -1) {
				liItems[i].onclick = function () {
					var myHref = this.getElementsByTagName("a")[0].href;
					continueToDownload(myHref);
					return false;
				};
			} else {
				liItems[i].onclick = function () {
					var myHref = this.getElementsByTagName("a")[0].href;
					document.location = myHref;
					return false;
				};
			}
			liItems[i].style.cursor = "pointer";
		}
	}
}

function start( uri ) {
	alert( 'Go to OpenOffice.org ' + uri );

}
function doLoad( uri ) {
	// the timeout value should be the same as in the "refresh" meta-tag
	setTimeout( "download('" + uri + "')", 2*1000 );
}

function download( uri ) {
	// starting the download
	window.location.href = uri;
}

function startDownload() {
	var s = window.location.search;
	i = s.indexOf( "download=" );
	if ( i > -1 ) {
		if ( s.indexOf( "download=bouncer" ) > -1 ) {
			uri = unescape( s.split( "download=bouncer" )[1] );
			uri = MIRROR_BOUNCER_URL + "?" + uri;
		} else if ( s.indexOf( "download=mirrorbrain&" ) > -1 ) {
			uri = unescape( s.split( "download=mirrorbrain&" )[1] );
			uri = MIRROR_MIRRORBRAIN_URL + uri;
		}
  		s_linkType = "d";
  		s_linkTrackVars = "events,products,eVar3,eVar8,prop19,prop20,prop21";
  		s_linkTrackEvents = "event7";
		s_events = "event7";
  		s_eVar3 = "ooo";
		s_linkName = "ooo:" + getTupel( uri );
  		s_products = "Downloaded Products;" + getProduct( uri ) + " Download";
  		s_eVar8 = getTupel( uri );
  		s_prop19 = getOS( uri );
  		s_prop20 = getLang( uri );
  		s_prop21 = getVersion( uri );
		if ( uri != null ) {
			document.write( "Starting download from <a onClick='s_lnk=s_co(this);s_gs(s_account);' href='" + uri + "'>" + uri + "</a>." );
			doLoad( uri );
		}
		// document.location = uri;
		return false;
	}
}
