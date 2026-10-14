/*
 * get link to mirror system
 * depends on array-list
 */
function mirrorbrain_getLink( version ) {
	return mirrorbrain_getLink( version, "old" );
}

/*
 * get link to mirror system in combination with schema for download-set
 * depends on array-list
 */
function mirrorbrain_getLink( version, schema ) {
	var a = getArray();
	var platform = getPlatform();
	var link = null;

	if ( hasMirrorLink() ) {
		// use mirror link
		if ( version == VERSION ) {
			link = MIRROR_MIRRORBRAIN_URL + "files/";
			if ( getLanguageISO().indexOf( "en-US" ) > -1 ) {
				link = link + "stable/" + version + "/";
			} else {
				link = link + "localized/" + getLanguageISO() + "/" + version + "/";
			}
			return link + mirrorbrain_getFileName( version, schema );
		} else if ( version == OLD_VERSION ) {
			link = MIRROR_MIRRORBRAIN_URL + "files/";
			if ( getLanguageISO().indexOf( "en-US" ) > -1 ) {
				link = link + "stable/" + version + "/";
			} else {
				link = link + "localized/" + getLanguageISO() + "/" + version + "/";
			}
			return link + mirrorbrain_getFileName( version, schema );
		} else if ( version == RC_VERSION ) {
			link = MIRROR_MIRRORBRAIN_URL + "files/extended/" + mirrorbrain_getVersionForDownloadFolder( version ) + "/";
			return link + mirrorbrain_getFileName( version, schema );
		} else if ( version == BETA_VERSION ) {
			link = MIRROR_MIRRORBRAIN_URL + "files/extended/" + version + "/";
			return link + mirrorbrain_getFileName( version, schema );
		} else if ( version == DEV1_VERSION ) {
			link = MIRROR_MIRRORBRAIN_URL + "files/extended/developer/" + version + "/";
			return link + mirrorbrain_getFileName( version, schema );
		} else if ( version == DEV2_VERSION ) {
			link = MIRROR_MIRRORBRAIN_URL + "files/extended/developer/" + version + "/";
			return link + mirrorbrain_getFileName( version, schema );
		} else if ( version == DEVB_VERSION ) {
			link = MIRROR_MIRRORBRAIN_URL + "files/extended/developer/" + version + "/";
			return link + mirrorbrain_getFileName( version, schema );
		} else if ( version == TEST_VERSION ) {
			link = MIRROR_MIRRORBRAIN_URL + "files/";
			if ( getLanguageISO().indexOf( "en-US" ) > -1 ) {
				link = link + "stable/" + version + "/";
			} else {
				link = link + "localized/" + getLanguageISO() + "/" + version + "/";
			}
			return link + mirrorbrain_getFileName( version, schema );
		}
		// error
		return null;
	} else {
		// The following lines are no longer valid and commented out as the porting is done and Mac an official build
		// if ( platform.indexOf( "Mac" ) != -1 ) {
		// send MAC requests to porting.o.o
		//	return "http://porting.openoffice.org/mac/download/";
		// } else {
			// use direct link
			return a[2];
		// }
	}
}

/*
 * special tupel for tracking
 */
function mirrorbrain_getTupel( href ) {
	var retVal = "";
	var file;
	file = mirrorbrain_getTagFileName( href );
    if ( file != null ) {
		var product, os, lang, version;
		product = mirrorbrain_getTagProduct( file );
		version = mirrorbrain_getTagVersion( file );
		os = mirrorbrain_getTagOS( file );
		lang = mirrorbrain_getTagLang( file );
		retVal = product + " " + version + "-" + os + "-" + lang + "-" + version;
    }
    return retVal;
}

/*
 * extract file name from url
 */
function mirrorbrain_getTagFileName( href ) {
	var retVal;
    if ( href.indexOf( MIRROR_MIRRORBRAIN_URL + "files/" ) > -1 ) {
		var s = href.split( "/" );
		retVal = s[s.length-1];
    }
    return retVal;
}

/*
 * get product name for tracking, external used method
 */
function mirrorbrain_getProduct( href ) {
	var file;
	file = mirrorbrain_getTagFileName( href );
	return mirrorbrain_getTagProduct( file ) + " " + mirrorbrain_getTagVersion( file );
}

/*
 * get version for tracking, external used method
 */
function mirrorbrain_getVersion( href ) {
	var file;
	file = mirrorbrain_getTagFileName( href );
	return mirrorbrain_getTagVersion( file );
}

/*
 * get os for tracking, external used method
 */
function mirrorbrain_getOS( href ) {
	var file;
	file = mirrorbrain_getTagFileName( href );
	return mirrorbrain_getTagOS( file );
}

/*
 * get language code for tracking, external used method
 */
function mirrorbrain_getLang( href ) {
	var file;
	file = mirrorbrain_getTagFileName( href );
	return mirrorbrain_getTagLang( file );
}

/*
 * get language code for tracking, internal method
 */
function mirrorbrain_getTagLang( file ) {
    var retVal;
    if ( file != null && (
		file.indexOf( "_install-" ) > -1 || (
			file.indexOf( "_install_" ) > -1 && (
				file.indexOf( "_Linux_" ) > -1 || file.indexOf( "_MacOS_" ) > -1 || file.indexOf( "_Win_" ) > -1 || file.indexOf( "_Solaris_" ) > -1
			)
        ) ) ) {

		var s = file.split( "_install" );
		s = s[1].split( "." );
		s = s[0].split( "_" );
		retVal = s[s.length-1];

	} else if ( file != null && file.indexOf( "_install_" ) > -1 ) {
		var s = file.split( "_install_" );
		s = s[1].split( "." );
		s = s[0].split( "_" );
		if ( s[s.length-1].indexOf( "deb" ) > -1 ) {
			retVal = s[s.length-2];
		} else {
			retVal = s[s.length-1];
		}
	}
    return retVal;
}

/*
 * get os name for tracking, internal method
 */
function mirrorbrain_getTagOS( file ) {
	var retVal;
    if ( file != null && (
		file.indexOf( "_install-" ) > -1 || (
			file.indexOf( "_install_" ) > -1 && (
				file.indexOf( "_Linux_" ) > -1 || file.indexOf( "_MacOS_" ) > -1 || file.indexOf( "_Win_" ) > -1 || file.indexOf( "_Solaris_" ) > -1
			)
        ) ) ) {

		var s = file.split( "_install" );
		s = s[0].split( "_" );
		retVal = s[ s.length -2 ] + s[ s.length -1 ];
		retVal = retVal.toLowerCase();
		if ( retVal.indexOf( "winx86" ) > -1 ) {
			retVal = "win";
		} else if ( retVal == "linuxx86" ) {
			retVal = "linuxintel";
		} else if ( retVal == "macosx86" ) {
			retVal = "macosxintel";
		} else if ( retVal == "macosppc" ) {
			retVal = "macosxppc";
		}
		if ( file.toLowerCase().indexOf( "wjre" ) > -1 ) {
			retVal = retVal + "wjre";
		} else if ( file.indexOf( "install-deb" ) > -1 ) {
			retVal = retVal + "deb";
		}
	} else if ( file != null && file.indexOf( "_install_" ) > -1 ) {
		var s = file.split( "_install_" );
		s = s[0].split( "_" );
		retVal = s[ s.length -1 ];
		retVal = retVal.toLowerCase();
		if ( retVal.indexOf( "win32intel" ) > -1 ) {
			retVal = "win";
		}
		if ( file.toLowerCase().indexOf( "wjre" ) > -1 ) {
			retVal = retVal + "wjre";
		} else if ( file.indexOf( "_deb" ) > -1 ) {
			retVal = retVal + "deb";
		} else if ( file.indexOf( "install-deb" ) > -1 ) {
			retVal = retVal + "deb";
		}
	}
	return retVal;
}

/*
 * get product name for tracking, internal method
 */
function mirrorbrain_getTagProduct( file ) {
	var retVal = null;
	if ( file != null ) {
		var s = file.split( "_" );
		retVal = s[0];
    }
	return retVal;
}

/*
 * get version for tracking, internal method
 */
function mirrorbrain_getTagVersion( file ) {
	var retVal = null;
	if ( file != null ) {
		var s = file.split( "_" );
		retVal = s[1];
		if ( s[0] == "OOo-Dev" ) {
			if ( file.indexOf( "_install-" ) > -1 || (
				file.indexOf( "_install_" ) > -1 && (
					file.indexOf( "_Linux_" ) > -1 || file.indexOf( "_MacOS_" ) > -1 || file.indexOf( "_Win_" ) > -1 || file.indexOf( "_Solaris_" ) > -1
				)
        	) ) {
				// new schema
				if ( s[1].indexOf( "_m" ) > -1 ) {
					retVal = s[1];
				} else if ( s[1].indexOf( "m" ) > -1 ) {
					var s2 = s[1].split( "m" );
					retVal = s2[0] + "_m" + s2[1];
				} else {
					retVal = s[1];
				}
			} else {
				// old schema
				retVal = s[1] + "_" + s[2];
			}
		}
    }
	return retVal;
}

/*
 * method trim timestamp from version, required for RC, requested by MLA
 */
function mirrorbrain_getVersionForDownloadFolder( version ) {
	var s = null;
	if ( version.indexOf( "_" ) > -1 ) {
		s = version.split( "_" )[0];
	} else {
		s = version;
	}

	if ( version == VERSION ) {
		return version;
	} else if ( version == OLD_VERSION ) {
		return version;
	} else if ( version == RC_VERSION ) {
		return s;
	} else if ( version == BETA_VERSION ) {
		return version;
	} else if ( version == DEV1_VERSION ) {
		return version;
	} else if ( version == DEV2_VERSION ) {
		return version;
	} else if ( version == TEST_VERSION ) {
		return version;
	}
	// error
	return null;
}

function mirrorbrain_getFileName( version, schema ) {
	var a = getArray();
	var platform = getPlatform();
	var fileName = null;

	if ( hasMirrorLink() ) {
		// use mirror link
		if ( schema == "old" ) {
			if ( version == VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == OLD_VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == RC_VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == BETA_VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == DEV1_VERSION ) {
				fileName = "OOo-Dev_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == DEV2_VERSION ) {
				fileName = "OOo-Dev_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == DEVB_VERSION ) {
				fileName = "OOo-Dev_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == TEST_VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else {
				fileName = null;
			}
		} else if ( schema == "new" ) {
			if ( version == VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == OLD_VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == RC_VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == BETA_VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == DEV1_VERSION ) {
				fileName = "OOo-Dev_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == DEV2_VERSION ) {
				fileName = "OOo-Dev_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == DEVB_VERSION ) {
				fileName = "OOo-Dev_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else if ( version == TEST_VERSION ) {
				fileName = "OOo_" + version + "_" + mirrorbrain_getPlatformForMirror( schema ) + "_" + getLanguageISO() + mirrorbrain_getExtension( schema );
			} else {
				fileName = null;
			}
		}
		return fileName;
	}
	// error
	return null;
}

/*
 * get platform for mirror-link
 */
function mirrorbrain_getPlatformForMirror( schema ) {
	var a = getArray();
	if ( navigator.platform != null ) {
		if ( schema == "old" ) {
			if ( navigator.platform.indexOf( "Win32" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Win32Intel_install_wJRE" : "Win32Intel_install";
			} else if ( navigator.platform.indexOf( "Win64" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Win32Intel_install_wJRE" : "Win32Intel_install";
			} else if ( navigator.platform.indexOf( "Win" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Win32Intel_install_wJRE" : "Win32Intel_install";
			} else if ( navigator.platform.indexOf( "Linux" ) != -1 ) {
				if ( navigator.platform.indexOf( "64" ) != -1 ) {
					if ( navigator.userAgent != null ) {
						if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 || navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
							return "LinuxX86-64_install";
						} else {
							return ( a[3] == 'y' ) ? "LinuxX86-64_install_wJRE" : "LinuxX86-64_install";
						}
					} else {
						return ( a[3] == 'y' ) ? "LinuxX86-64_install_wJRE" : "LinuxX86-64_install";
					}
				} else {
					if ( navigator.userAgent != null ) {
						if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 || navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
							return ( a[3] == 'y' ) ? "LinuxIntel_install_wJRE" : "LinuxIntel_install";
						} else {
							return ( a[3] == 'y' ) ? "LinuxIntel_install_wJRE" : "LinuxIntel_install";
						}
					} else {
						return ( a[3] == 'y' ) ? "LinuxIntel_install_wJRE" : "LinuxIntel_install";
					}
				}

				if ( navigator.userAgent != null ) {
					if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 || navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
						return ( a[3] == 'y' ) ? "LinuxIntel_install_wJRE" : "LinuxIntel_install";
					} else {
						return ( a[3] == 'y' ) ? "LinuxIntel_install_wJRE" : "LinuxIntel_install";
					}
				} else {
					return ( a[3] == 'y' ) ? "LinuxIntel_install_wJRE" : "LinuxIntel_install";
				}
			} else if ( navigator.platform.indexOf( "SunOS i86pc" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Solarisx86_install_wJRE" : "Solarisx86_install";
			} else if ( navigator.platform.indexOf( "SunOS sun4u" ) != -1 ) {
				return ( a[3] == 'y' ) ? "SolarisSparc_install_wJRE" : "SolarisSparc_install";
			} else if ( navigator.platform.indexOf( "SunOS" ) != -1 ) {
				return ( a[3] == 'y' ) ? "SolarisSparc_install_wJRE" : "SolarisSparc_install";
			} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "Intel" ) != -1 ) {
				return "MacOSXIntel_install";
			} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "PPC" ) != -1 ) {
				return "MacOSXPPC_install";
			} else if ( navigator.platform.indexOf( "Mac" ) != -1 ) {
				return "MacOSXIntel_install";
			// testing if this code will help to redirect the iPad, iPhone, iPod entries
			} else if ( navigator.platform.indexOf( "iPad" ) != -1 || navigator.platform.indexOf( "iPhone" ) != -1 || navigator.platform.indexOf( "iPod" ) != -1 ) {
				return "MacOSXIntel_install" ;
			} else {
				// return plain platform
				return navigator.platform;
			}
		} else if ( schema == "new" ) {
			if ( navigator.platform.indexOf( "Win32" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Win_x86_install-wJRE" : "Win_x86_install";
			} else if ( navigator.platform.indexOf( "Win64" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Win_x86_install-wJRE" : "Win_x86_install";
			} else if ( navigator.platform.indexOf( "Win" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Win_x86_install-wJRE" : "Win_x86_install";
			} else if ( navigator.platform.indexOf( "Linux" ) != -1 ) {
				if ( navigator.platform.indexOf( "64" ) != -1 ) {
					if ( navigator.userAgent != null ) {
						if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 || navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
							return "Linux_x86-64_install-deb";
						} else {
							return ( a[3] == 'y' ) ? "Linux_x86-64_install-rpm-wJRE" : "Linux_x86-64_install-rpm";
						}
					} else {
						return ( a[3] == 'y' ) ? "Linux_x86-64_install-rpm-wJRE" : "Linux_x86-64_install-rpm";
					}
				} else {
					if ( navigator.userAgent != null ) {
						if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 || navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
							return "Linux_x86_install-deb";
						} else {
							return ( a[3] == 'y' ) ? "Linux_x86_install-rpm-wJRE" : "Linux_x86_install-rpm";
						}
					} else {
						return ( a[3] == 'y' ) ? "Linux_x86_install-rpm-wJRE" : "Linux_x86_install-rpm";
					}
				}

				if ( navigator.userAgent != null ) {
					if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 || navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
						return "Linux_x86_install-deb";
					} else {
						return ( a[3] == 'y' ) ? "Linux_x86_install-rpm-wJRE" : "Linux_x86_install-rpm";
					}
				} else {
					return ( a[3] == 'y' ) ? "Linux_x86_install-rpm-wJRE" : "Linux_x86_install-rpm";
				}
			} else if ( navigator.platform.indexOf( "SunOS i86pc" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Solaris_x86_install-wJRE" : "Solaris_x86_install";
			} else if ( navigator.platform.indexOf( "SunOS sun4u" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Solaris_Sparc_install-wJRE" : "Solaris_Sparc_install";
			} else if ( navigator.platform.indexOf( "SunOS" ) != -1 ) {
				return ( a[3] == 'y' ) ? "Solaris_Sparc_install-wJRE" : "Solaris_Sparc_install";
			} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "Intel" ) != -1 ) {
				return "MacOS_x86_install";
			} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "PPC" ) != -1 ) {
				return "MacOS_PPC_install";
			} else if ( navigator.platform.indexOf( "Mac" ) != -1 ) {
				return "MacOS_x86_install";
			// testing if this code will help to redirect the iPad, iPhone, iPod entries
			} else if ( navigator.platform.indexOf( "iPad" ) != -1 || navigator.platform.indexOf( "iPhone" ) != -1 || navigator.platform.indexOf( "iPod" ) != -1 ) {
				return "MacOS_x86_install" ;
			} else {
				// return plain platform
				return navigator.platform;
			}
		}
	}
	return ( a[3] == 'y' ) ? "Win_x86_install-wJRE" : "Win_x86_install";
}

/*
 * get extension for mirror-link
 */
function mirrorbrain_getExtension( schema ) {
	var a = getArray();
	if ( navigator.platform != null ) {
		if ( navigator.platform.indexOf( "Win32" ) != -1 ) {
			return ".exe";
		} else if ( navigator.platform.indexOf( "Win64" ) != -1 ) {
			return ".exe";
		} else if ( navigator.platform.indexOf( "Win" ) != -1 ) {
			return ".exe";
		} else if ( navigator.platform.indexOf( "Linux" ) != -1 ) {
			if ( navigator.userAgent != null ) {
				if ( navigator.userAgent.toLowerCase().indexOf( "debian" ) != -1 || navigator.userAgent.toLowerCase().indexOf( "ubuntu" ) != -1 ) {
					if ( schema == "old" ) {
						return "_deb.tar.gz";
					} else if ( schema == "new" ) {
						return ".tar.gz";
					} else {
						return ".tar.gz";
					}
				} else {
					return ".tar.gz";
				}
			} else {
				return ".tar.gz";
			}
		} else if ( navigator.platform.indexOf( "SunOS i86pc" ) != -1 ) {
			return ".tar.gz";
		} else if ( navigator.platform.indexOf( "SunOS sun4u" ) != -1 ) {
			return ".tar.gz";
		} else if ( navigator.platform.indexOf( "SunOS" ) != -1 ) {
			return ".tar.gz";
		} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "Intel" ) != -1 ) {
			return ".dmg";
		} else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "PPC" ) != -1 ) {
			return ".dmg";
		} else if ( navigator.platform.indexOf( "Mac" ) != -1 ) {
			return ".dmg";
		// this code provides working entries for iPad, iPhone, iPod
		} else if ( navigator.platform.indexOf( "iPad" ) != -1 || navigator.platform.indexOf( "iPhone" ) != -1 || navigator.platform.indexOf( "iPod" ) != -1 ) {
			return ".dmg" ;
		} else {
			return navigator.platform;
		}
	}
	return null;
}
