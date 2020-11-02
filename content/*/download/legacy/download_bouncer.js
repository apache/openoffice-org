/*
 * get link to mirror system
 * depends on array-list
 */
function bouncer_getLink( version ) {
	var a = getArray();
	var platformMirror = bouncer_getPlatformForMirror();

	if ( hasMirrorLink() ) {
		// use OSUOSL-bouncer link
		return MIRROR_BOUNCER_URL + "?product=OpenOffice.org&os=" + bouncer_getPlatformForMirror() + "&lang=" + getLanguageISO() + "&version=" + version;
	} else {
		// The following lines are no longer valid and commented out as the porting is done and Mac an official build
		// if ( platformMirror.indexOf( "mac" ) != -1 ) {
		// send MAC requests to porting.o.o
		//	return "http://porting.openoffice.org/mac/download/";
		// } else {
			// use direct link
			return a[2];
		// }
	}
}

/*
 * get flag for bouncer link of Dev-Builds
 * depends on array-list
 */
function bouncer_getLinkDevBuild( version ) {
	var a = getArray();
	var platformMirror = bouncer_getPlatformForMirror();

	if ( hasMirrorLink() ) {
		// use OSUOSL-bouncer link
		return MIRROR_BOUNCER_URL + "?product=OOo-Dev&os=" + bouncer_getPlatformForMirror() + "&lang=" + getLanguageISO() + "&version=" + version;
	} else {
		// The following lines are no longer valid and commented out as the porting is done and Mac an official build
		// if ( platformMirror.indexOf( "mac" ) != -1 ) {
		// send MAC requests to porting.o.o
		//	return "http://porting.openoffice.org/mac/download/";
		// } else {
			// use direct link
			return a[2];
		// }
	}
}

/*
 * get platform for mirror-link
 */
function bouncer_getPlatformForMirror() {
	var a = getArray();
	if ( navigator.platform != null ) {
		if ( navigator.platform.indexOf( "Win32" ) != -1 ) {
			return ( a[3] == 'y' ) ? "winwjre" : "win";
		} else if ( navigator.platform.indexOf( "Win64" ) != -1 ) {
			return ( a[3] == 'y' ) ? "winwjre" : "win";
		} else if ( navigator.platform.indexOf( "Win" ) != -1 ) {
			return ( a[3] == 'y' ) ? "winwjre" : "win";
		} else if ( navigator.platform.indexOf( "Linux" ) != -1 ) {
			if ( navigator.userAgent != null ) {
				if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 || navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
					return "linuxinteldeb";
				} else {
					return ( a[3] == 'y' ) ? "linuxintelwjre" : "linuxintel";
				}
			} else {
				return ( a[3] == 'y' ) ? "linuxintelwjre" : "linuxintel";
			}
		} else if ( navigator.platform.indexOf( "SunOS i86pc" ) != -1 ) {
			return ( a[3] == 'y' ) ? "solarisx86wjre" : "solarisx86";
		} else if ( navigator.platform.indexOf( "SunOS sun4u" ) != -1 ) {
			return ( a[3] == 'y' ) ? "solarissparcwjre" : "solarissparc";
		} else if ( navigator.platform.indexOf( "SunOS" ) != -1 ) {
			return ( a[3] == 'y' ) ? "solarissparcwjre" : "solarissparc";
		} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "Intel" ) != -1 ) {
			return "macosxintel";
		} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "PPC" ) != -1 ) {
			return "macosxppc";
		} else if ( navigator.platform.indexOf( "Mac" ) != -1 ) {
			return "macosxintel";
		} else {
			// return ( a[3] == 'y' ) ? "winwjre" : "win";
			return navigator.platform;
		}
	}
	return ( a[3] == 'y' ) ? "winwjre" : "win";
}

/*
 *
 * tupel for measurement
 */
function bouncer_getTupel( href ) {
    var retVal;
    if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) == 0 ) {
    	if ( href.indexOf( "product=" ) > 0 && href.indexOf( "os=" ) > 0 && href.indexOf( "lang=" ) > 0 && href.indexOf( "version=" ) > 0 ) {
        	var s = (href.split( "?" )[1]).split( "&" );
        	var product, os, lang, version;
        	for (var i=0; i < s.length; i++ ) {
        		if ( s[i].indexOf( "product=" ) == 0 ) {
            		product = s[i].split( "=" )[1];
            		if ( product.indexOf( "OpenOffice.org" ) == 0 ) {
            		product = "OOo";
            		}
        		} else if ( s[i].indexOf( "os=" ) == 0 ) {
            		os = s[i].split( "=" )[1];
        		} else if ( s[i].indexOf( "lang=" ) == 0 ) {
            		lang = s[i].split( "=" )[1];
        		} else if ( s[i].indexOf( "version=" ) == 0 ) {
            		version = s[i].split( "=" )[1];
        		}
        	}
        	retVal = product + " " + version + "-" + os + "-" + lang + "-" + version;
    	}
    }
    return retVal;
}

/*
 * get product name for tracking
 */
function bouncer_getProduct( href ) {
    var retVal = "";
    if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) == 0 ) {
    	if ( href.indexOf( "product=" ) > 0 && href.indexOf( "os=" ) > 0 && href.indexOf( "lang=" ) > 0 && href.indexOf( "version=" ) > 0 ) {
        	var s = (href.split( "?" )[1]).split( "&" );
        	var product, version;
        	for (var i=0; i < s.length; i++ ) {
        		if ( s[i].indexOf( "product=" ) == 0 ) {
            		product = s[i].split( "=" )[1];
            		if ( product.indexOf( "OpenOffice.org" ) == 0 ) {
                		product = "OOo";
            		}
        		} else if ( s[i].indexOf( "version=" ) == 0 ) {
            		version = s[i].split( "=" )[1];
        		}
        	}
        	retVal = product + " " + version;
    	}
    }
    return retVal;
}

/*
 * get language code for tracking
 */
function bouncer_getLang( href ) {
    var retVal = "";
    if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) == 0 ) {
    	if ( href.indexOf( "product=" ) > 0 && href.indexOf( "os=" ) > 0 && href.indexOf( "lang=" ) > 0 && href.indexOf( "version=" ) > 0 ) {
        	var s = (href.split( "?" )[1]).split( "&" );
        	for (var i=0; i < s.length; i++ ) {
        		if ( s[i].indexOf( "lang=" ) == 0 ) {
            		retVal = s[i].split( "=" )[1];
        		}
        	}
    	}
    }
    return retVal;
}

/*
 * get os for tracking
 */
function bouncer_getOS( href ) {
    var retVal = "";
    if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) == 0 ) {
    	if ( href.indexOf( "product=" ) > 0 && href.indexOf( "os=" ) > 0 && href.indexOf( "lang=" ) > 0 && href.indexOf( "version=" ) > 0 ) {
        	var s = (href.split( "?" )[1]).split( "&" );
        	for (var i=0; i < s.length; i++ ) {
        		if ( s[i].indexOf( "os=" ) == 0 ) {
            		retVal = s[i].split( "=" )[1];
        		}
        	}
    	}
    }
    return retVal;
}

/*
 * get version for tracking
 */
function bouncer_getVersion( href ) {
    var retVal = "";
    if ( href.indexOf( "?" ) > 0 && href.indexOf( MIRROR_BOUNCER_URL ) == 0 ) {
    	if ( href.indexOf( "product=" ) > 0 && href.indexOf( "os=" ) > 0 && href.indexOf( "lang=" ) > 0 && href.indexOf( "version=" ) > 0 ) {
        	var s = (href.split( "?" )[1]).split( "&" );
        	for (var i=0; i < s.length; i++ ) {
        		if ( s[i].indexOf( "version=" ) == 0 ) {
            		retVal = s[i].split( "=" )[1];
        		}
        	}
    	}
    }
    return retVal;
}
