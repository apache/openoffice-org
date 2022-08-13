/*
 * Overview of all functions defined below
 * function write_table     ()
 * function write_empty_row ()
 * function write_top       ()
 * function write_header    ( FIRST_HEADER )
 * function write_build     ( URL_AOO,          URL_HASH,          PLATFORM, INSTALL_LANG, i, k, VERSION, AOO, TYPE )
 * function write_lang      ( URL_AOO,          URL_HASH,          PLATFORM, FULL_LANG, LP_LANG, VERSION, AOO )
 * function write_sdk       ( URL_SDK, URL_SRC, URL_HASH, AOO_SRC, PLATFORM, SDK_LANG,           VERSION, AOO_SDK )
 */

/*
 * Define global variables
 */
var COLSPAN		= 9;	// Defines the default number of columns for the table (default = 9)
var ROW_COUNT		= 1;	// Counts the number of rows (start = 1)
var FULL_LANG_COUNT	= 1;	// Counts the max number of languages for full install sets (start = 1)
var LP_LANG_COUNT	= 1;	// Counts the max number of languages for language packs (start = 1)

/*
 * Define base variables
 * The main entry for writing the table into the webpage
 */
function write_table( rel_mode ) {
	if ( rel_mode == 1 ) {
		// Release mode
		var AOO		= "Apache_OpenOffice_";
		var AOO_SDK	= "Apache_OpenOffice-SDK_";
		var AOO_SRC	= "/source/apache-openoffice-" + DL.VERSION + "-" + DL.SVN_REV + "-src";
		var URL_AOO	= DL.SF      + DL.VERSION + "/binaries/";
		var URL_SDK	= DL.SF      + DL.VERSION + "/binaries/" + "SDK/" + AOO_SDK + DL.VERSION;
		var URL_SRC	= DL.ASF_ARC + DL.VERSION + AOO_SRC;
		var URL_HASH	= DL.ASF_ARC + DL.VERSION;

// Debug: Uncomment to use different base URLs
/*
		var URL_AOO	= PEOPLE_BASE_URL + "/binaries/";
		var URL_SDK	= PEOPLE_BASE_URL + "/binaries/SDK/" + AOO_SDK + VERSION;
		var URL_SRC	= PEOPLE_BASE_URL + "/source/" + AOO_SRC + VERSION + "-beta-" + SVN_REV + "-src";
*/
	} else if ( rel_mode == 2 ) {
		// Beta release mode
		var BETA_VERSION = "4.1.0";
		var VERSION	= DL_BETA.BETA_VERSION;
		var SVN_REV	= DL_BETA.BETA_SVN_REV;
		var PLATFORM	= DL_BETA.BETA_PLATFORM;
		var FULL_LANG	= DL_BETA.BETA_FULL_LANG;
		var LP_LANG	= DL_BETA.BETA_LP_LANG;
		var SDK_LANG	= DL_BETA.BETA_SDK_LANG;
		var AOO		= "Apache_OpenOffice_Beta_";
		var AOO_SDK	= "Apache_OpenOffice_Beta-SDK_";
		var AOO_SRC	= "/source/apache-openoffice-" + DL_BETA.BETA_VERSION + "-beta-" + DL_BETA.SVN_REV + "-src";
		var URL_AOO	= BETA_SOURCEFORGE_BASE_URL;
		var URL_SDK	= BETA_SOURCEFORGE_BASE_URL + "SDK/" + AOO_SDK + DL_BETA.BETA_VERSION;
		var URL_SRC	= DL_BETA.BETA_ASF_DIST + AOO_SRC;
		var URL_HASH	= DL_BETA.BETA_ASF_DIST;

// Debug: Uncomment to use different base URLs
/*
		var URL_AOO	= PEOPLE_BASE_URL + "/binaries/";
		var URL_SDK	= PEOPLE_BASE_URL + "/binaries/SDK/" + AOO_SDK + BETA_VERSION;
		var URL_SRC	= PEOPLE_BASE_URL + "/source/" + AOO_SRC + BETA_VERSION + "-beta-" + SVN_REV + "-src";
*/
	}

	document.write( "<table class='builds' cellpadding='2' cellspacing='2'>" );

	write_header( rel_mode, 1 );
	document.write( "<tbody>" );
	write_lang( rel_mode, URL_AOO,                   URL_HASH,          DL.REL_PLATFORM, DL.REL_FULL_LANG, DL.REL_LP_LANG, DL.VERSION, AOO     );
	write_sdk(  rel_mode,          URL_SDK, URL_SRC, URL_HASH, AOO_SRC, DL.REL_PLATFORM, DL.REL_SDK_LANG,                  DL.VERSION, AOO_SDK );
	write_top();

	document.write( "</tbody>" );
	document.write( "</table>" );
}

/*
 * This writes an empty row
 */
function write_empty_row() {
	if ( ROW_COUNT ==  1 || ROW_COUNT ==  3 || ROW_COUNT ==  5 || ROW_COUNT ==  7 || ROW_COUNT ==  9 ||
	     ROW_COUNT == 11 || ROW_COUNT == 13 || ROW_COUNT == 15 || ROW_COUNT == 17 || ROW_COUNT == 19 ) {

// Debug: Uncomment to get output inside the table
		document.write( "<tr class='a'><td class='footer' colspan='" + COLSPAN + "'>&nbsp;</td></tr>" );
//		document.write( "<tr class='a'><td class='footer' colspan='" + COLSPAN + "'>" + ROW_COUNT + "&nbsp;</td></tr>" );
	} else {
		document.write( "<tr class='b'><td class='footer' colspan='" + COLSPAN + "'>&nbsp;</td></tr>" );
//		document.write( "<tr class='b'><td class='footer' colspan='" + COLSPAN + "'>" + ROW_COUNT + "&nbsp;</td></tr>" );
		ROW_COUNT++;
	}
}

/*
 * This writes the "Start of page" link within the table
 */
function write_top() {
	document.write( "<tr><td class='footer' colspan='" + COLSPAN + "'>&nbsp;" );
	document.write( "<div><small><a href='#' title='Go to the start of the page'>Start of page</a></small></div>" );
	document.write( "&nbsp;</td></tr>" );
}

/*
 * This writes the header row with the OS headlines
 */
function write_header( rel_mode, FIRST_HEADER ) {
	// Add ECMA262-5 Array methods if not supported natively
	// To workaround that MSIE 8 and older do not support this function
	if ( !( 'indexOf' in Array.prototype ) ) {
	  Array.prototype.indexOf= function( find, i /*opt*/ ) {
	    if ( i === undefined )
	      i = 0;
	    if ( i < 0 )
	      i+= this.length;
	    if ( i < 0 )
	      i = 0;
	    for ( var n = this.length; i < n; i++ ) {
	      if ( i in this && this[ i ] === find )
		return i;
	    }
	    return -1;
	  };
	}

	// If it's the first header at the top of a table use a normal font size
	// But use a smaller font size for further headers within the table
	if ( FIRST_HEADER == 1 ) {
		var SMALL1 = "";
		var SMALL2 = "";
	} else {
		var SMALL1 = "<small>";
		var SMALL2 = "</small>";
	}

	document.write( "<thead><tr>" );
	document.write( "<th colspan='2' style='text-align: center'>"                  + SMALL1 + "Language<br />The names do not refer to countries<br />&nbsp;" + SMALL2 + "</th>" );
	document.write( "<th><span style='text-align: center' class='builds'>"         + SMALL1 + "Type<br />&nbsp;<br />&nbsp;"     + SMALL2 + "</span></th>" );
	if ( DL.REL_PLATFORM.indexOf( "Win_x86" ) > -1 )
		document.write( "<th><span style='text-align: center' class='builds'>" + SMALL1 + "Windows    <br />x86 <br />EXE" + SMALL2 + "</span></th>" );
	if ( DL.REL_PLATFORM.indexOf( "Linux_x86_rpm" ) > -1 )
		document.write( "<th><span style='text-align: center' class='builds'>" + SMALL1 + "Linux      <br />x86 <br />RPM" + SMALL2 + "</span></th>" );
	if ( DL.REL_PLATFORM.indexOf( "Linux_x86_deb" ) > -1 )
		document.write( "<th><span style='text-align: center' class='builds'>" + SMALL1 + "Linux      <br />x86 <br />DEB" + SMALL2 + "</span></th>" );
	if ( DL.REL_PLATFORM.indexOf( "Linux_x86-64_rpm" ) > -1 )
		document.write( "<th><span style='text-align: center' class='builds'>" + SMALL1 + "Linux      <br />x86-64<br />RPM" + SMALL2 + "</span></th>" );
	if ( DL.REL_PLATFORM.indexOf( "Linux_x86-64_deb" ) > -1 )
		document.write( "<th><span style='text-align: center' class='builds'>" + SMALL1 + "Linux      <br />x86-64<br />DEB" + SMALL2 + "</span></th>" );
	if ( rel_mode == 1 ) {
		// Release mode
		if ( DL.REL_PLATFORM.indexOf( "MacOS_x86-64" ) > -1 )
			document.write( "<th><span style='text-align: center' class='builds'>" + SMALL1 + "macOS  <br />x86-64<br />DMG" + SMALL2 + "</span></th>" );
	} else if ( rel_mode == 2 ) {
		// Beta release mode
		DL.REL_PLATFORM = DL_BETA.BETA_REL_PLATFORM;
		if ( DL.REL_PLATFORM.indexOf( "MacOS_x86-64" ) > -1 )
			document.write( "<th><span style='text-align: center' class='builds'>" + SMALL1 + "macOS  <br />x86-64<br />DMG" + SMALL2 + "</span></th>" );
	}
	document.write( "</tr></thead>" );
}

/*
 * This writes the build rows (full install, langpack, SDK)
 */
function write_build( rel_mode, URL_AOO, URL_HASH, PLATFORM, INSTALL_LANG, i, k, VERSION, AOO, TYPE ) {
	// Show the checksum links in smaller font size than the binary links
	var SMALL = "style='font-size: x-small'";

	if ( ROW_COUNT ==  1 || ROW_COUNT ==  2 || ROW_COUNT ==  5 || ROW_COUNT == 6  || ROW_COUNT == 9 ||
	     ROW_COUNT == 10 || ROW_COUNT == 13 || ROW_COUNT == 14 || ROW_COUNT == 17 || ROW_COUNT == 18 )
		document.write( "<tr class='a'>" );
	else
		document.write( "<tr class='b'>" );

// Debug: uncomment to get output inside the table
	if ( URL_AOO.indexOf( "SDK" ) < 0 ) {
		if ( TYPE == "install" ) {
			document.write( "<td><small>" + LANG[ i ][ "EN" ] + "</small></td><td><small>" + LANG[ i ][ "NATIVE" ] + "</small></td><td><small>Full&nbsp;Install</small></td>" );
//			document.write( "<td><small>" + ROW_COUNT + "&nbsp;:&nbsp;" + FULL_LANG_COUNT + "&nbsp;:&nbsp;" + i + "&nbsp;:&nbsp;" + k + "&nbsp;" + LANG[ i ][ "EN" ] + "</small></td><td><small>" + LANG[ i ][ "NATIVE" ] + "</small></td><td><small>Full&nbsp;Install</small></td>" );
		} else {
			document.write( "<td>                                        </td><td>                                            </td><td><small>Langpack</small></td>" );
//			document.write( "<td><small>" + ROW_COUNT + "&nbsp;:&nbsp;" + LP_LANG_COUNT + "&nbsp;:&nbsp;" + i + "&nbsp;:&nbsp;" + k + "&nbsp;" + LANG[ i ][ "EN" ] + "</small></td><td><small>" + LANG[ i ][ "NATIVE" ] + "</small></td><td><small>Langpack</small></td>" );
		}
	} else {
		document.write( "<td id='source'><small>" + LANG[ i ][ "EN" ] + "</small></td><td><small>" + LANG[ i ][ "NATIVE" ] + "</small></td><td><small><a href='#notes' title='What is a SDK?'>SDK</a></small></td>" );
//		document.write( "<td><small>" + ROW_COUNT + "&nbsp;:&nbsp;" + FULL_LANG_COUNT + "&nbsp;:&nbsp;" + i + "&nbsp;:&nbsp;" + k + "&nbsp;" + LANG[ i ][ "EN" ] + "</small></td><td><small>" + LANG[ i ][ "NATIVE" ] + "</small></td><td><small>SDK</small></td>" );
	}

	if ( URL_AOO.indexOf( "SDK" ) < 0 ) {
		// Write download links for binary builds and its checksums
		if ( PLATFORM.indexOf( "Win_x86" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO                 + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Win_x86_"      + TYPE          + "_" + INSTALL_LANG[ k ] + ".exe/download'><b>exe</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Win_x86_"      + TYPE          + "_" + INSTALL_LANG[ k ] + ".exe.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Win_x86_"      + TYPE          + "_" + INSTALL_LANG[ k ] + ".exe.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Win_x86_"      + TYPE          + "_" + INSTALL_LANG[ k ] + ".exe.sha512'>SHA512</a></td>" );
		}
		if ( PLATFORM.indexOf( "Linux_x86_rpm" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO                 + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz/download'><b>rpm</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha512'>SHA512</a></td>" );
		}
		if ( PLATFORM.indexOf( "Linux_x86_deb" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO                 + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz/download'><b>deb</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha512'>SHA512</a></td>" );
		}
		if ( PLATFORM.indexOf( "Linux_x86-64_rpm" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO                 + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz/download'><b>rpm</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha512'>SHA512</a></td>" );
		}
		if ( PLATFORM.indexOf( "Linux_x86-64_deb" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO                 + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz/download'><b>deb</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha512'>SHA512</a></td>" );
		}
		if ( rel_mode == 1 ) {
			// Release mode
			if ( PLATFORM.indexOf( "MacOS_x86-64" ) > -1 ) {
				document.write( "<td style='text-align: center'><a href='"              + URL_AOO                 + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg/download'><b>dmg</b></a><br /><br />" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.asc'>ASC</a><br />" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.sha256'>SHA256</a>" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.sha512'>SHA512</a></td>" );
			}
		} else if ( rel_mode == 2 ) {
			// Beta release mode
			if ( PLATFORM.indexOf( "MacOS_x86-64" ) > -1 ) {
				document.write( "<td style='text-align: center'><a href='"              + URL_AOO                 + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg/download'><b>dmg</b></a><br /><br />" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.asc'>ASC</a><br />" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.sha256'>SHA256</a>" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/" + INSTALL_LANG[ k ] + "/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.sha512'>SHA512</a></td>" );
			}
		}
	} else {
		// Write download links for SDK builds and its checksums
		if ( PLATFORM.indexOf( "Win_x86" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO  +                                    "_Win_x86_"      + TYPE          + "_" + INSTALL_LANG[ k ] + ".exe/download'><b>exe</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Win_x86_"      + TYPE          + "_" + INSTALL_LANG[ k ] + ".exe.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Win_x86_"      + TYPE          + "_" + INSTALL_LANG[ k ] + ".exe.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Win_x86_"      + TYPE          + "_" + INSTALL_LANG[ k ] + ".exe.sha512'>SHA512</a></td>" );
		}
		if ( PLATFORM.indexOf( "Linux_x86_rpm" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO  +                                    "_Linux_x86_"    + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz/download'><b>rpm</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha512'>SHA512</a></td>" );
		}
		if ( PLATFORM.indexOf( "Linux_x86_deb" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO  +                                    "_Linux_x86_"    + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz/download'><b>deb</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86_"    + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha512'>SHA512</a></td>" );
		}
		if ( PLATFORM.indexOf( "Linux_x86-64_rpm" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO  +                                    "_Linux_x86-64_" + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz/download'><b>rpm</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-rpm" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha512'>SHA512</a></td>" );
		}
		if ( PLATFORM.indexOf( "Linux_x86-64_deb" ) > -1 ) {
			document.write( "<td style='text-align: center'><a href='"              + URL_AOO  +                                    "_Linux_x86-64_" + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz/download'><b>deb</b></a><br /><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.asc'>ASC</a><br />" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha256'>SHA256</a>" );
			document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_Linux_x86-64_" + TYPE + "-deb" + "_" + INSTALL_LANG[ k ] + ".tar.gz.sha512'>SHA512</a></td>" );
		}
		if ( rel_mode == 1 ) {
			// Release mode
			if ( PLATFORM.indexOf( "MacOS_x86-64" ) > -1 ) {
				document.write( "<td style='text-align: center'><a href='"              + URL_AOO  +                                    "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg/download'><b>dmg</b></a><br /><br />" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.asc'>ASC</a><br />" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.sha256'>SHA256</a>" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.sha512'>SHA512</a></td>" );
			}
		} else if ( rel_mode == 2 ) {
			// Beta release mode
			if ( PLATFORM.indexOf( "MacOS_x86-64" ) > -1 ) {
				document.write( "<td style='text-align: center'><a href='"              + URL_AOO  +                                    "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg/download'><b>dmg</b></a><br /><br />" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.asc'>ASC</a><br />" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.sha256'>SHA256</a>" );
				document.write( "                               <a " + SMALL + "href='" + URL_HASH + "/binaries/SDK/" + AOO + VERSION + "_MacOS_x86-64_" + TYPE  + "_" + INSTALL_LANG[ k ] + ".dmg.sha512'>SHA512</a></td>" );
			}
		}
	}

	document.write( "</tr>" );

	// When enough rows are on the screen then write a small header for better visual orientation
	ROW_COUNT++;
	if ( ROW_COUNT == 9 ) {
		write_top();
		write_header( rel_mode, 0 );
		ROW_COUNT = 1;
	}
}

/*
 * This writes the English and native name of a language and all download links
 */
function write_lang( rel_mode, URL_AOO, URL_HASH, PLATFORM, FULL_LANG, LP_LANG, VERSION, AOO ) {
	ROW_COUNT	= 1;
	FULL_LANG_COUNT	= 1;
	LP_LANG_COUNT	= 1;

// Debug: Uncomment to get output at the beginning of the table
/*
	for ( var i = 0; i < FULL_LANG.length; i++ ) {
		document.write( i + ": " + FULL_LANG[i] + " " );
	}
	document.write( "<br />" );
	for ( var i = 0; i < LP_LANG.length; i++ ) {
		document.write( i + ": " + LP_LANG[i] + " " );
	}
	document.write( "<br />" );
*/
	if ( FULL_LANG.length == 1 ) {
		for ( var i = 0; i < DL.LANG_MAX; i++ ) {
			for ( var k = 0; k < FULL_LANG.length; k++ ) {
				if ( FULL_LANG[ k ] == LANG[ i ][ "ISO" ] ) {
					if ( FULL_LANG[ k ] == "en-US" ) {
						write_build( rel_mode, URL_AOO, URL_HASH, PLATFORM, FULL_LANG, i, k, VERSION, AOO, "install" );
					}
					FULL_LANG_COUNT++;

					if ( URL_AOO.indexOf( "SDK" ) == -1 ) {
						write_empty_row();
					}
				}
			}
		}
	}

	for ( var i = 0; i < DL.LANG_MAX; i++ ) {
		for ( var j = 0; j < LP_LANG.length; j++ ) {
			if ( LP_LANG[ j ] == LANG[ i ][ "ISO" ] ) {
				for ( var k = 0; k < FULL_LANG.length; k++ ) {
					if ( FULL_LANG.length > 1 && FULL_LANG[ k ] == LANG[ i ][ "ISO" ] ) {
						write_build( rel_mode, URL_AOO, URL_HASH, PLATFORM, FULL_LANG, i, k, VERSION, AOO, "install" );
						FULL_LANG_COUNT++;
					}
				}
				if ( URL_AOO.indexOf( "SDK" ) == -1 ) {
					write_build( rel_mode, URL_AOO, URL_HASH, PLATFORM, LP_LANG, i, j, VERSION, AOO, "langpack" );
					LP_LANG_COUNT++;
				}
			}
		}
	}

// Debug: uncomment to get output at the beginning of the table
//	document.write( ( FULL_LANG_COUNT - 1 ) + " " + ( LP_LANG_COUNT - 1 ) + "<br />" );
}

/*
 * This writes the column names and download links for SDK builds, source tarballs and other files
 */
function write_sdk( rel_mode, URL_SDK, URL_SRC, URL_HASH, AOO_SRC, PLATFORM, SDK_LANG, VERSION, AOO_SDK ) {
	// Show the checksum links in smaller font size than the binary links
	var SMALL = "style='font-size: x-small'";

	// First write one or two empty rows (depending on the previous row, odd or even row number --> class a or b)
	if ( ROW_COUNT ==  1 || ROW_COUNT ==  3 || ROW_COUNT ==  5 || ROW_COUNT ==  7 || ROW_COUNT ==  9 ||
	     ROW_COUNT == 11 || ROW_COUNT == 13 || ROW_COUNT == 15 || ROW_COUNT == 17 || ROW_COUNT == 19 )
		document.write( "<tr id='source' class='b'><td class='footer' colspan='" + COLSPAN + "'>&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;</td></tr>" );
	else
		document.write( "<tr id='source' class='a'><td class='footer' colspan='" + COLSPAN + "'>&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;</td></tr>" );

	// Then write the row with the SDK builds
	write_lang( rel_mode, URL_SDK, URL_HASH, PLATFORM, SDK_LANG, SDK_LANG, VERSION, AOO_SDK );

	// Then write the row with the source tarballs
	if ( ROW_COUNT ==  1 || ROW_COUNT ==  3 || ROW_COUNT ==  5 || ROW_COUNT ==  7 || ROW_COUNT ==  9 ||
	     ROW_COUNT == 11 || ROW_COUNT == 13 || ROW_COUNT == 15 || ROW_COUNT == 17 || ROW_COUNT == 19 )
		document.write( "<tr class='a'><td>-</td><td>-</td><td><small><a href='#notes'" + "title='What are source tarballs?'>Source<br />tarballs</a></small></td>" );
	else
		document.write( "<tr class='b'><td>-</td><td>-</td><td><small><a href='#notes'" + "title='What are source tarballs?'>Source<br />tarballs</a></small></td>" );

	if ( rel_mode == 1 ) {
		// Release mode
		document.write( "<td style='text-align: center'><a href='"              + URL_SRC            + ".tar.bz2'><b>tar.bz2</b></a><br /><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.bz2.asc'>ASC</a><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.bz2.sha256'>SHA256</a>" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.bz2.sha512'>SHA512</a></td>" );
		document.write( "<td>&nbsp;</td>" );
		document.write( "<td style='text-align: center'><a href='"              + URL_SRC            + ".tar.gz'><b>tar.gz</b></a><br /><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.gz.asc'>ASC</a><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.gz.sha256'>SHA256</a>" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.gz.sha512'>SHA512</a></td>" );
		document.write( "<td>&nbsp;</td>" );
		document.write( "<td style='text-align: center'><a href='"              + URL_SRC            + ".zip'><b>zip</b></a><br /><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".zip.asc'>ASC</a><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".zip.sha256'>SHA256</a>" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".zip.sha512'>SHA512</a></td>" );
		document.write( "<td>&nbsp;</td>" );
	} else if ( rel_mode == 2 ) {
		// Beta release mode
		document.write( "<td style='text-align: center'><a href='"              + URL_SRC            + ".tar.bz2'><b>tar.bz2</b></a><br /><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.bz2.asc'>ASC</a><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.bz2.sha256'>SHA256</a>" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.bz2.sha512'>SHA512</a></td>" );
		document.write( "<td>&nbsp;</td>" );
		document.write( "<td style='text-align: center'><a href='"              + URL_SRC            + ".tar.gz'><b>tar.gz</b></a><br /><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.gz.asc'>ASC</a><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.gz.sha256'>SHA256</a>" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".tar.gz.sha512'>SHA512</a></td>" );
		document.write( "<td>&nbsp;</td>" );
		document.write( "<td style='text-align: center'><a href='"              + URL_SRC            + ".zip'><b>zip</b></a><br /><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".zip.asc'>ASC</a><br />" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".zip.sha256'>SHA256</a>" );
		document.write( "                               <a " + SMALL + "href='" + URL_HASH + AOO_SRC + ".zip.sha512'>SHA512</a></td>" );
		document.write( "<td>&nbsp;</td>" );
	}
	document.write( "</tr>" );
	ROW_COUNT++;

	// At last write the row with the other files (release notes)
	document.write( "<tr class='a'><td>-</td><td>-</td><td><small>Other&nbsp;files</small></td>" );
	if ( rel_mode == 1 ) {
		// Release mode
		document.write( "<td style='text-align: center'><a href='../development/releases/" + VERSION + ".html' title='Apache OpenOffice Release Notes'>AOO<br />Release<br />Notes</a></td>" );
	} else if ( rel_mode == 2 ) {
		// Beta release mode
//		document.write( "<td style='text-align: center'><a href='../development/releases/" + BETA_VERSION + "_Beta.html' title='Apache OpenOffice Release Notes'>AOO<br />Release<br />Notes</a></td>" );
		document.write( "<td style='text-align: center'><a href='https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes'>AOO<br />Release<br />Notes</a></td>" );
	}
	document.write( "<td>&nbsp;</td>" );
	document.write( "<td style='text-align: center'><a href='checksums.html' title='How to verify the download with checksums?'>How to<br />verify the<br />download?</a></td>" );
	document.write( "<td>&nbsp;</td>" );
	document.write( "<td>&nbsp;</td>" );
	document.write( "<td>&nbsp;</td>" );

	document.write( "</tr>" );
}

/*
 * Define languages with ISO code, en-US name and native name
 * All language names were taken from Wikipedia (http://en.wikipedia.org)
 *
 * Important:
 * When new languages where added please increase the value appropriate in the "LANG_MAX" at the top.
 */
var LANG  = new Array();
LANG[0]   = new Array(); LANG[0]["ISO"]   = "ISO";   LANG[0]["EN"]   = "en-US name";  LANG[0]["NATIVE"]   = "Native name";
LANG[1]   = new Array(); LANG[1]["ISO"]   = "af";    LANG[1]["EN"]   = "Afrikaans";   LANG[1]["NATIVE"]   = "Afrikaans";
LANG[2]   = new Array(); LANG[2]["ISO"]   = "sq";    LANG[2]["EN"]   = "Albanian";    LANG[2]["NATIVE"]   = "Gjuha&nbsp;shqipe";
LANG[3]   = new Array(); LANG[3]["ISO"]   = "am";    LANG[3]["EN"]   = "Amharic";     LANG[3]["NATIVE"]   = "አማርኛ";
LANG[4]   = new Array(); LANG[4]["ISO"]   = "ar";    LANG[4]["EN"]   = "Arabic";      LANG[4]["NATIVE"]   = "عربي";
LANG[5]   = new Array(); LANG[5]["ISO"]   = "hy";    LANG[5]["EN"]   = "Armenian";    LANG[5]["NATIVE"]   = "Հայերէն";
LANG[6]   = new Array(); LANG[6]["ISO"]   = "as";    LANG[6]["EN"]   = "Assamese";    LANG[6]["NATIVE"]   = "অসমীয়া";
LANG[7]   = new Array(); LANG[7]["ISO"]   = "ast";   LANG[7]["EN"]   = "Asturian";    LANG[7]["NATIVE"]   = "Asturianu";
LANG[8]   = new Array(); LANG[8]["ISO"]   = "az";    LANG[8]["EN"]   = "Azerbaijani"; LANG[8]["NATIVE"]   = "Азәрбајҹан&nbsp;дили";
LANG[9]   = new Array(); LANG[9]["ISO"]   = "bal";   LANG[9]["EN"]   = "Balochi";     LANG[9]["NATIVE"]   = "بلوچی";
LANG[10]  = new Array(); LANG[10]["ISO"]  = "eu";    LANG[10]["EN"]  = "Basque";      LANG[10]["NATIVE"]  = "Euskara";
LANG[11]  = new Array(); LANG[11]["ISO"]  = "be-BY"; LANG[11]["EN"]  = "Belarusian";  LANG[11]["NATIVE"]  = "Беларуская&nbsp;мова";
LANG[12]  = new Array(); LANG[12]["ISO"]  = "bn";    LANG[12]["EN"]  = "Bengali";     LANG[12]["NATIVE"]  = "বাংলা";
LANG[13]  = new Array(); LANG[13]["ISO"]  = "brx";   LANG[13]["EN"]  = "Bodo";        LANG[13]["NATIVE"]  = "बड़ो";
LANG[14]  = new Array(); LANG[14]["ISO"]  = "bs";    LANG[14]["EN"]  = "Bosnian<br />(Cyrillic)";      LANG[14]["NATIVE"] = "босански<br />(ћирилицом)";
LANG[15]  = new Array(); LANG[15]["ISO"]  = "br";    LANG[15]["EN"]  = "Breton";      LANG[15]["NATIVE"]  = "Brezhoneg";
LANG[16]  = new Array(); LANG[16]["ISO"]  = "bg";    LANG[16]["EN"]  = "Bulgarian";   LANG[16]["NATIVE"]  = "български&nbsp;език";
LANG[17]  = new Array(); LANG[17]["ISO"]  = "my";    LANG[17]["EN"]  = "Burmese";     LANG[17]["NATIVE"]  = "မြန်မာဘာသာ";
LANG[18]  = new Array(); LANG[18]["ISO"]  = "ca";    LANG[18]["EN"]  = "Catalan";     LANG[18]["NATIVE"]  = "Català";
LANG[19]  = new Array(); LANG[19]["ISO"]  = "ca-XV"; LANG[19]["EN"]  = "Catalan<br />(Valencian)";     LANG[19]["NATIVE"] = "Català<br />(Valencià)";
LANG[20]  = new Array(); LANG[20]["ISO"]  = "zh-CN"; LANG[20]["EN"]  = "Chinese&nbsp;(simplified)";    LANG[20]["NATIVE"] = "简体中文";
LANG[21]  = new Array(); LANG[21]["ISO"]  = "zh-TW"; LANG[21]["EN"]  = "Chinese&nbsp;(traditional)";   LANG[21]["NATIVE"] = "正體中文";
LANG[22]  = new Array(); LANG[22]["ISO"]  = "hr";    LANG[22]["EN"]  = "Croatian";    LANG[22]["NATIVE"]  = "hrvatski";
LANG[23]  = new Array(); LANG[23]["ISO"]  = "cs";    LANG[23]["EN"]  = "Czech";       LANG[23]["NATIVE"]  = "Čeština";
LANG[24]  = new Array(); LANG[24]["ISO"]  = "da";    LANG[24]["EN"]  = "Danish";      LANG[24]["NATIVE"]  = "Dansk";
LANG[25]  = new Array(); LANG[25]["ISO"]  = "dgo";   LANG[25]["EN"]  = "Dogri";       LANG[25]["NATIVE"]  = "डोगरी";
LANG[26]  = new Array(); LANG[26]["ISO"]  = "nl";    LANG[26]["EN"]  = "Dutch";       LANG[26]["NATIVE"]  = "Nederlands";
LANG[27]  = new Array(); LANG[27]["ISO"]  = "dz";    LANG[27]["EN"]  = "Dzongkha";    LANG[27]["NATIVE"]  = "རྫོང་ཁ";
LANG[28]  = new Array(); LANG[28]["ISO"]  = "en-GB"; LANG[28]["EN"]  = "English&nbsp;(GB)";            LANG[28]["NATIVE"] = "English&nbsp;(British)";
LANG[29]  = new Array(); LANG[29]["ISO"]  = "en-ZA"; LANG[29]["EN"]  = "English&nbsp;(ZA)";            LANG[29]["NATIVE"] = "English<br />(Zuid-Afrikaans)";
LANG[30]  = new Array(); LANG[30]["ISO"]  = "en-US"; LANG[30]["EN"]  = "English&nbsp;(US)";            LANG[30]["NATIVE"] = "English&nbsp;(US)";
LANG[31]  = new Array(); LANG[31]["ISO"]  = "eo";    LANG[31]["EN"]  = "Esperanto";   LANG[31]["NATIVE"]  = "Esperanto";
LANG[32]  = new Array(); LANG[32]["ISO"]  = "et";    LANG[32]["EN"]  = "Estonian";    LANG[32]["NATIVE"]  = "Eesti&nbsp;keel";
LANG[33]  = new Array(); LANG[33]["ISO"]  = "fi";    LANG[33]["EN"]  = "Finnish";     LANG[33]["NATIVE"]  = "Suomi";
LANG[34]  = new Array(); LANG[34]["ISO"]  = "fr";    LANG[34]["EN"]  = "French";      LANG[34]["NATIVE"]  = "Fran&ccedil;ais";
LANG[35]  = new Array(); LANG[35]["ISO"]  = "fr-CA"; LANG[35]["EN"]  = "French<br />(Canadian)";       LANG[35]["NATIVE"] = "Fran&ccedil;ais<br />(Canadien)";
LANG[36]  = new Array(); LANG[36]["ISO"]  = "fur";   LANG[36]["EN"]  = "Friulian";    LANG[36]["NATIVE"]  = "Furlan";
LANG[37]  = new Array(); LANG[37]["ISO"]  = "gd";    LANG[37]["EN"]  = "Gaelic<br />(Scottish)";       LANG[37]["NATIVE"] = "Gàidhlig";
LANG[38]  = new Array(); LANG[38]["ISO"]  = "gl";    LANG[38]["EN"]  = "Galician";    LANG[38]["NATIVE"]  = "Galego";
LANG[39]  = new Array(); LANG[39]["ISO"]  = "ka";    LANG[39]["EN"]  = "Georgian";    LANG[39]["NATIVE"]  = "ქართული&nbsp;ენა";
LANG[40]  = new Array(); LANG[40]["ISO"]  = "de";    LANG[40]["EN"]  = "German";      LANG[40]["NATIVE"]  = "Deutsch";
LANG[41]  = new Array(); LANG[41]["ISO"]  = "el";    LANG[41]["EN"]  = "Greek";       LANG[41]["NATIVE"]  = "&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;ά";
LANG[42]  = new Array(); LANG[42]["ISO"]  = "gn";    LANG[42]["EN"]  = "Guarani";     LANG[42]["NATIVE"]  = "Avañe'ẽ";
LANG[43]  = new Array(); LANG[43]["ISO"]  = "gu";    LANG[43]["EN"]  = "Gujarati";    LANG[43]["NATIVE"]  = "ગુજરાતી";
LANG[44]  = new Array(); LANG[44]["ISO"]  = "he";    LANG[44]["EN"]  = "Hebrew";      LANG[44]["NATIVE"]  = "עִבְרִית";
LANG[45]  = new Array(); LANG[45]["ISO"]  = "hi";    LANG[45]["EN"]  = "Hindi";       LANG[45]["NATIVE"]  = "हिन्दी";
LANG[46]  = new Array(); LANG[46]["ISO"]  = "hu";    LANG[46]["EN"]  = "Hungarian";   LANG[46]["NATIVE"]  = "Magyar";
LANG[47]  = new Array(); LANG[47]["ISO"]  = "is";    LANG[47]["EN"]  = "Icelandic";   LANG[47]["NATIVE"]  = "Íslenska";
LANG[48]  = new Array(); LANG[48]["ISO"]  = "id";    LANG[48]["EN"]  = "Indonesian";  LANG[48]["NATIVE"]  = "Bahasa&nbsp;Indonesia";
LANG[49]  = new Array(); LANG[49]["ISO"]  = "ga";    LANG[49]["EN"]  = "Irish";       LANG[49]["NATIVE"]  = "Gaeilge";
LANG[50]  = new Array(); LANG[50]["ISO"]  = "it";    LANG[50]["EN"]  = "Italian";     LANG[50]["NATIVE"]  = "Italiano";
LANG[51]  = new Array(); LANG[51]["ISO"]  = "ja";    LANG[51]["EN"]  = "Japanese";    LANG[51]["NATIVE"]  = "日本語";
LANG[52]  = new Array(); LANG[52]["ISO"]  = "kab";   LANG[52]["EN"]  = "Kabyle";      LANG[52]["NATIVE"]  = "Taqbaylit";
LANG[53]  = new Array(); LANG[53]["ISO"]  = "kn";    LANG[53]["EN"]  = "Kannada";     LANG[53]["NATIVE"]  = "ಕನ್ನಡ";
LANG[54]  = new Array(); LANG[54]["ISO"]  = "ks";    LANG[54]["EN"]  = "Kashmiri";    LANG[54]["NATIVE"]  = "कॉशुर";
LANG[55]  = new Array(); LANG[55]["ISO"]  = "kk";    LANG[55]["EN"]  = "Kazakh";      LANG[55]["NATIVE"]  = "Қазақ&nbsp;тілі";
LANG[56]  = new Array(); LANG[56]["ISO"]  = "km";    LANG[56]["EN"]  = "Khmer";       LANG[56]["NATIVE"]  = "ភាសាខ្មែរ";
LANG[57]  = new Array(); LANG[57]["ISO"]  = "rw";    LANG[57]["EN"]  = "Kinyarwanda"; LANG[57]["NATIVE"]  = "Kinyarwanda";
LANG[58]  = new Array(); LANG[58]["ISO"]  = "kok";   LANG[58]["EN"]  = "Konkani";     LANG[58]["NATIVE"]  = "कोंकणी";
LANG[59]  = new Array(); LANG[59]["ISO"]  = "ko";    LANG[59]["EN"]  = "Korean";      LANG[59]["NATIVE"]  = "한국어";
LANG[60]  = new Array(); LANG[60]["ISO"]  = "kid";   LANG[60]["EN"]  = "Koshin";      LANG[60]["NATIVE"]  = "Koshin";
LANG[61]  = new Array(); LANG[61]["ISO"]  = "ku";    LANG[61]["EN"]  = "Kurdish";     LANG[61]["NATIVE"]  = "Kurdî";
LANG[62]  = new Array(); LANG[62]["ISO"]  = "ky";    LANG[62]["EN"]  = "Kyrgyz";      LANG[62]["NATIVE"]  = "Кыргыз&nbsp;тили";
LANG[63]  = new Array(); LANG[63]["ISO"]  = "lo";    LANG[63]["EN"]  = "Laotian";     LANG[63]["NATIVE"]  = "ພາສາລາວ";
LANG[64]  = new Array(); LANG[64]["ISO"]  = "lv";    LANG[64]["EN"]  = "Latvian";     LANG[64]["NATIVE"]  = "Latviešu&nbsp;valoda";
LANG[65]  = new Array(); LANG[65]["ISO"]  = "lt";    LANG[65]["EN"]  = "Lithuanian";  LANG[65]["NATIVE"]  = "Lietuvių";
LANG[66]  = new Array(); LANG[66]["ISO"]  = "jbo";   LANG[66]["EN"]  = "Lojban";      LANG[66]["NATIVE"]  = "Lojban";
LANG[67]  = new Array(); LANG[67]["ISO"]  = "mk";    LANG[67]["EN"]  = "Macedonian";  LANG[67]["NATIVE"]  = "Македонски";
LANG[68]  = new Array(); LANG[68]["ISO"]  = "mai";   LANG[68]["EN"]  = "Maithili";    LANG[68]["NATIVE"]  = "मैथिली";
LANG[69]  = new Array(); LANG[69]["ISO"]  = "mg";    LANG[69]["EN"]  = "Malagasy";    LANG[69]["NATIVE"]  = "Malagasy";
LANG[70]  = new Array(); LANG[70]["ISO"]  = "ms";    LANG[70]["EN"]  = "Malay";       LANG[70]["NATIVE"]  = "بهاس ملايو";
LANG[71]  = new Array(); LANG[71]["ISO"]  = "ml";    LANG[71]["EN"]  = "Malayalam";   LANG[71]["NATIVE"]  = "മലയാളം";
LANG[72]  = new Array(); LANG[72]["ISO"]  = "mni";   LANG[72]["EN"]  = "Manipuri";    LANG[72]["NATIVE"]  = "মণিপুরি";
LANG[73]  = new Array(); LANG[73]["ISO"]  = "mr";    LANG[73]["EN"]  = "Marathi";     LANG[73]["NATIVE"]  = "मराठी";
LANG[74]  = new Array(); LANG[74]["ISO"]  = "miq";   LANG[74]["EN"]  = "Miskito";     LANG[74]["NATIVE"]  = "Mískitu";
LANG[75]  = new Array(); LANG[75]["ISO"]  = "mn";    LANG[75]["EN"]  = "Mongolian";   LANG[75]["NATIVE"]  = "Монгол&nbsp;хэл";
LANG[76]  = new Array(); LANG[76]["ISO"]  = "ne";    LANG[76]["EN"]  = "Nepali";      LANG[76]["NATIVE"]  = "नेपाली";
LANG[77]  = new Array(); LANG[77]["ISO"]  = "nb";    LANG[77]["EN"]  = "Norwegian<br />(Bokmal)";      LANG[77]["NATIVE"] = "Norsk<br />(Bokmål)";
LANG[78]  = new Array(); LANG[78]["ISO"]  = "nn";    LANG[78]["EN"]  = "Norwegian<br />(Nynorsk)";     LANG[78]["NATIVE"] = "Norsk<br />(Nynorsk)";
LANG[79]  = new Array(); LANG[79]["ISO"]  = "nd";    LANG[79]["EN"]  = "Ndebele<br />(North)";         LANG[79]["NATIVE"] = "isiNdebele";
LANG[80]  = new Array(); LANG[80]["ISO"]  = "nr";    LANG[80]["EN"]  = "Ndebele<br />(South)";         LANG[80]["NATIVE"] = "isiNdebele";
LANG[81]  = new Array(); LANG[81]["ISO"]  = "oc";    LANG[81]["EN"]  = "Occitan";     LANG[81]["NATIVE"]  = "Occitan";
LANG[82]  = new Array(); LANG[82]["ISO"]  = "or";    LANG[82]["EN"]  = "Oriya";       LANG[82]["NATIVE"]  = "ଓଡ଼ିଆ";
LANG[83]  = new Array(); LANG[83]["ISO"]  = "om";    LANG[83]["EN"]  = "Oromo";       LANG[83]["NATIVE"]  = "ኦሮሚኛ";
LANG[84]  = new Array(); LANG[84]["ISO"]  = "pap";   LANG[84]["EN"]  = "Papmiento";   LANG[84]["NATIVE"]  = "Papiamentu";
LANG[85]  = new Array(); LANG[85]["ISO"]  = "ps";    LANG[85]["EN"]  = "Pashto";      LANG[85]["NATIVE"]  = "پښتو";
LANG[86]  = new Array(); LANG[86]["ISO"]  = "fa";    LANG[86]["EN"]  = "Persian<br />(Farsi)";         LANG[86]["NATIVE"] = "فارسی";
LANG[87]  = new Array(); LANG[87]["ISO"]  = "pl";    LANG[87]["EN"]  = "Polish";      LANG[87]["NATIVE"]  = "Polski";
LANG[88]  = new Array(); LANG[88]["ISO"]  = "pt-BR"; LANG[88]["EN"]  = "Portuguese&nbsp;(Brazilian)";  LANG[88]["NATIVE"] = "Portugu&ecirc;s&nbsp;(do Brasil)";
LANG[89]  = new Array(); LANG[89]["ISO"]  = "pt";    LANG[89]["EN"]  = "Portuguese&nbsp;(European)";   LANG[89]["NATIVE"] = "Portugu&ecirc;s&nbsp;(Europeu)";
LANG[90]  = new Array(); LANG[90]["ISO"]  = "pa-IN"; LANG[90]["EN"]  = "Punjabi";     LANG[90]["NATIVE"]  = "ਪੰਜਾਬੀ";
LANG[91]  = new Array(); LANG[91]["ISO"]  = "ro";    LANG[91]["EN"]  = "Romanian";    LANG[91]["NATIVE"]  = "Română";
LANG[92]  = new Array(); LANG[92]["ISO"]  = "ru";    LANG[92]["EN"]  = "Russian";     LANG[92]["NATIVE"]  = "Русский";
LANG[93]  = new Array(); LANG[93]["ISO"]  = "sg";    LANG[93]["EN"]  = "Sango";       LANG[93]["NATIVE"]  = "yângâ&nbsp;tî&nbsp;sängö";
LANG[94]  = new Array(); LANG[94]["ISO"]  = "sa";    LANG[94]["EN"]  = "Sanskrit";    LANG[94]["NATIVE"]  = "संस्कृतम्";
LANG[95]  = new Array(); LANG[95]["ISO"]  = "sat";   LANG[95]["EN"]  = "Santali";     LANG[95]["NATIVE"]  = "Santali";
LANG[96]  = new Array(); LANG[96]["ISO"]  = "sc";    LANG[96]["EN"]  = "Sardinian";   LANG[96]["NATIVE"]  = "Sardu";
LANG[97]  = new Array(); LANG[97]["ISO"]  = "sr";    LANG[97]["EN"]  = "Serbian<br />(Cyrillic)";      LANG[97]["NATIVE"] = "Cрпски<br />(ћирилицом)";
LANG[98]  = new Array(); LANG[98]["ISO"]  = "sh";    LANG[98]["EN"]  = "Serbian<br />(Latin)";         LANG[98]["NATIVE"] = "Srpski<br />(latinicom)";
LANG[99]  = new Array(); LANG[99]["ISO"]  = "shs";   LANG[99]["EN"]  = "Shuswap";     LANG[99]["NATIVE"]  = "ʃəxwəpəmxˈtʃin";
LANG[100] = new Array(); LANG[100]["ISO"] = "sd";    LANG[100]["EN"] = "Sindhi";      LANG[100]["NATIVE"] = "سنڌي";
LANG[101] = new Array(); LANG[101]["ISO"] = "si";    LANG[101]["EN"] = "Sinhala";     LANG[101]["NATIVE"] = "සිංහල";
LANG[102] = new Array(); LANG[102]["ISO"] = "sk";    LANG[102]["EN"] = "Slovak";      LANG[102]["NATIVE"] = "Slovenský<br />jazyk (slovenčina)";
LANG[103] = new Array(); LANG[103]["ISO"] = "sl";    LANG[103]["EN"] = "Slovenian";   LANG[103]["NATIVE"] = "Slovenski<br />jezik (slovenščina)";
LANG[104] = new Array(); LANG[104]["ISO"] = "dsb";   LANG[104]["EN"] = "Sorbian<br />(Lower Sorbian)"; LANG[104]["NATIVE"] = "Dolnoserbski";
LANG[105] = new Array(); LANG[105]["ISO"] = "hsb";   LANG[105]["EN"] = "Sorbian<br />(Upper Sorbian)"; LANG[105]["NATIVE"] = "Hornjoserbšćina";
LANG[106] = new Array(); LANG[106]["ISO"] = "ns";    LANG[106]["EN"] = "Sotho<br />(Northern)";        LANG[106]["NATIVE"] = "Sesotho&nbsp;sa&nbsp;Leboa";
LANG[107] = new Array(); LANG[107]["ISO"] = "st";    LANG[107]["EN"] = "Sotho<br />(Southern)";        LANG[107]["NATIVE"] = "sɪ̀sʊ́tʰʊ̀";
LANG[108] = new Array(); LANG[108]["ISO"] = "es";    LANG[108]["EN"] = "Spanish";     LANG[108]["NATIVE"] = "Espa&ntilde;ol";
LANG[109] = new Array(); LANG[109]["ISO"] = "sw";    LANG[109]["EN"] = "Swahili";     LANG[109]["NATIVE"] = "Kiswahili";
LANG[110] = new Array(); LANG[110]["ISO"] = "ss";    LANG[110]["EN"] = "Swati";       LANG[110]["NATIVE"] = "siSwati";
LANG[111] = new Array(); LANG[111]["ISO"] = "sv";    LANG[111]["EN"] = "Swedish";     LANG[111]["NATIVE"] = "Svenska";
LANG[112] = new Array(); LANG[112]["ISO"] = "tg";    LANG[112]["EN"] = "Tajik";       LANG[112]["NATIVE"] = "تاجیکی‎";
LANG[113] = new Array(); LANG[113]["ISO"] = "ta";    LANG[113]["EN"] = "Tamil";       LANG[113]["NATIVE"] = "தமிழ்";
LANG[114] = new Array(); LANG[114]["ISO"] = "tt";    LANG[114]["EN"] = "Tatar";       LANG[114]["NATIVE"] = "Татарча";
LANG[115] = new Array(); LANG[115]["ISO"] = "te";    LANG[115]["EN"] = "Telugu";      LANG[115]["NATIVE"] = "తెలుగు";
LANG[116] = new Array(); LANG[116]["ISO"] = "tet";   LANG[116]["EN"] = "Tetum";       LANG[116]["NATIVE"] = "Tetun";
LANG[117] = new Array(); LANG[117]["ISO"] = "th";    LANG[117]["EN"] = "Thai";        LANG[117]["NATIVE"] = "ภาษาไทย";
LANG[118] = new Array(); LANG[118]["ISO"] = "bo";    LANG[118]["EN"] = "Tibetan";     LANG[118]["NATIVE"] = "བོད་སྐད་";
LANG[119] = new Array(); LANG[119]["ISO"] = "tr";    LANG[119]["EN"] = "Turkish";     LANG[119]["NATIVE"] = "T&uuml;rk&ccedil;e";
LANG[120] = new Array(); LANG[120]["ISO"] = "tk";    LANG[120]["EN"] = "Turkmen";     LANG[120]["NATIVE"] = "T&uuml;rkmen&ccedil;e";
LANG[121] = new Array(); LANG[121]["ISO"] = "ts";    LANG[121]["EN"] = "Tsonga";      LANG[121]["NATIVE"] = "Xitsonga";
LANG[122] = new Array(); LANG[122]["ISO"] = "tn";    LANG[122]["EN"] = "Tswana";      LANG[122]["NATIVE"] = "Setswana";
LANG[123] = new Array(); LANG[123]["ISO"] = "ti";    LANG[123]["EN"] = "Tigrinya";    LANG[123]["NATIVE"] = "ትግርኛ";
LANG[124] = new Array(); LANG[124]["ISO"] = "uk";    LANG[124]["EN"] = "Ukrainian";   LANG[124]["NATIVE"] = "Yкраї́нська&nbsp;мо́ва";
LANG[125] = new Array(); LANG[125]["ISO"] = "ur";    LANG[125]["EN"] = "Urdu";        LANG[125]["NATIVE"] = "اردو";
LANG[126] = new Array(); LANG[126]["ISO"] = "ug";    LANG[126]["EN"] = "Uyghur";      LANG[126]["NATIVE"] = "ئۇيغۇرچە‎";
LANG[127] = new Array(); LANG[127]["ISO"] = "uz";    LANG[127]["EN"] = "Uzbek";       LANG[127]["NATIVE"] = "Ўзбек";
LANG[128] = new Array(); LANG[128]["ISO"] = "ve";    LANG[128]["EN"] = "Venda";       LANG[128]["NATIVE"] = "Tshivenḓa";
LANG[129] = new Array(); LANG[129]["ISO"] = "vi";    LANG[129]["EN"] = "Vietnamese";  LANG[129]["NATIVE"] = "Tiếng&nbsp;Việt";
LANG[130] = new Array(); LANG[130]["ISO"] = "wa";    LANG[130]["EN"] = "Walloon";     LANG[130]["NATIVE"] = "Walon";
LANG[131] = new Array(); LANG[131]["ISO"] = "cy";    LANG[131]["EN"] = "Welsh";       LANG[131]["NATIVE"] = "Cymraeg";
LANG[132] = new Array(); LANG[132]["ISO"] = "xh";    LANG[132]["EN"] = "Xhosa";       LANG[132]["NATIVE"] = "isiXhosa";
LANG[133] = new Array(); LANG[133]["ISO"] = "zu";    LANG[133]["EN"] = "Zulu";        LANG[133]["NATIVE"] = "isiZulu";

