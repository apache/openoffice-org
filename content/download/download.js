/*
 * Overview of all methods (functions) of the global object "DL"
 * -------------------------------------------------------------
 * function DL.init			( release_mode )
 * function DL.initVariables		( init_all )
 * function DL.getLanguage		()
 * function DL.fillOSSelection		()
 * function DL.fillLanguageSelection	()
 * function DL.fillVersionSelection	()
 * function DL.getOSSelection		()
 * function DL.getLanguageSelection	()
 * function DL.getVersionSelection	()
 * function DL.setOSSelection		()
 * function DL.setLanguageSelection	()
 * function DL.setVersionSelection	()
 * function DL.hideElements		()
 * function DL.showWindow		( target_link )
 * function DL.showErrorMessage		( error_text )
 * function DL.isLanguageSupported	()
 * function DL.checkForLinkExceptions	()
 * function DL.getLinkSelection		()
 * function DL.getPlatform		()
 * function DL.getReleaseMatrixPosition	()
 * function DL.getFileData		()
 * function DL.debug			( location )
 *
 * Overview of global functions
 * ----------------------------------------------------
 * function openItem			( itemid, uri )
 */

/*
 * Init function
 * @param:  release_mode - The release mode (stable, beta, etc.) that the scriping should work with
 * @return: None
 */
DL.init = function( release_mode ) {
	// Set global variables.
	DL.initVariables( 1 );

	// Fill the OS, language and version select boxes.
	DL.fillOSSelection();
	DL.fillLanguageSelection();
	DL.fillVersionSelection();

	// Get the language and platform from the browser data.
	DL.getLanguage();
	DL.getPlatform();

	// Set the recognized platform and language as default.
	DL.setOSSelection();
	DL.setLanguageSelection();
	DL.setVersionSelection();
	
	// When release mode = 2, it is a beta release. Otherwise assume "stable release" as default.
	if( release_mode === 2 ) {
		DL.RELEASE_MODE = mode;
	}

	DL.getLinkSelection();

	return;
}

/*
 * Define all global variables with default values
 * @param:  init_all - Should all variables initialized or just a part?
 * @return: None
 */
DL.initVariables = function( init_all ) {
	// Define variables without "var" to make them globally available.
	// The following are used in "download.js". and "index.html".

	// All elements with ID in the sub-box.
	DL.ID_SUB_BOX = [ "dl_rel_info", "dl_f_info", "dl_f_chk_keys", "space1", "dl_f_chk_asc", "space2", "dl_f_chk_sha256", "space3",
	"dl_f_chk_sha512", "space4", "dl_f_chk_md5", "dl_lp_info", "dl_lp_chk_keys", "space5", "dl_lp_chk_asc", "space6", "dl_lp_chk_sha256",
	"space7", "dl_lp_chk_sha512", "space8", "dl_lp_chk_md5", "dl_hlp_img", "dl_hlp", "dl_chk_img", "dl_chk", "dl_rpt_img",
	"dl_rpt" ];

	// All elements with ID in the box and sub-box that have a link.
	DL.ID_LINKS = [ "dl_f_link", "dl_lp_link", "dl_rel_notes", "dl_f_chk_keys", "dl_f_chk_asc", "dl_f_chk_sha256", "dl_f_chk_sha512",
	"dl_f_chk_md5", "dl_lp_chk_keys", "dl_lp_chk_asc", "dl_lp_chk_sha256", "dl_lp_chk_sha512", "dl_lp_chk_md5", "dl_hlp", "dl_chk",
	"dl_rpt" ];

	// The following are used in "download.js" only.

	// All global variables.
	if( init_all === 1 ) {
		DL.RELEASE_MODE		= 1;	 // The release mode (1 = stable release (default), 2 = beta release, etc.).
		DL.LANG_ISO		= "";	 // The language as ISO code.
		DL.LANG_SEL		= "";	 // The selected language as ISO code from select box.
		DL.UI_PLATFORM_NO_SUP	= "";	 // The platform as readable string, if not supported.
		DL.PLATFORM_SEL		= "";	 // The selected platform from select box.
		DL.VERSION_SEL		= "";	 // The selected version from select box.
		DL.VERSION_SEL_RAW	= "";	 // The selected version from select box without dots.
	}

	DL.UI_PLATFORM			= "";	 // The platform as readable string.
	DL.PLATFORM			= "";	 // The platform in short form.
	DL.PLATFORM_FULL		= "";	 // The platform as part of the download URL (full install).
	DL.PLATFORM_LP			= "";	 // The platform as part of the download URL (langpack).
	DL.RELEASE_PLATFORM_POS_FULL	= -1;	 // The position of the platform in the release matrix array (full install).
	DL.RELEASE_PLATFORM_POS_LP	= -1;	 // The position of the platform in the release matrix array (langpack).
	DL.RELEASE_PLATFORM		= "";	 // The platform in the release matrix array.
	DL.RELEASE_LANG			= "";	 // The language specific data depending on LANG_ISO.
	DL.REL_TEXT			= "";	 // The release data (milestone, build ID, svn rev, release date).
	DL.REL_NOTES			= "";	 // The complete URL for the release notes (depends on version).
	DL.FILENAME_FULL		= "";	 // The complete filename of the download URL (full install).
	DL.FILENAME_LP			= "";	 // The complete filename of the download URL (langpack).
	DL.FILESIZE_FULL		= -1;	 // The filesize of the download file (full install).
	DL.FILESIZE_LP			= -1;	 // The filesize of the download file (langpack).
	DL.EXTENSION			= "";	 // The file extension of the download URL.
	DL.INSTALL_EXTENSION		= "";	 // The file extension of the installation.
	DL.SF_BASE_URL			= "";	 // The base URL for all binary files on Sourceforge.
	DL.SF_PREV_URL			= "";	 // The base URL for all binary files (prev. version) on Sourceforge.
	DL.ASF_ARC_BASE_URL		= "";	 // The base URL for all checksum files on Apache Archive server.
	DL.ASF_ARC_PREV_URL		= "";	 // The base URL for all checksum files (prev. version) on Apache Archive server.
	DL.ASF_WIKI_URL			= "";	 // The base URL for all release notes on Apache Wiki.
	DL.LINK_FULL			= "";	 // The complete download URL (full install).
	DL.LINK_LP			= "";	 // The complete download URL (langpack).
	DL.LINK_CHK_BASE_URL		= "";	 // The base URL for the checksum files.
	DL.LINK_CHK_KEYS		= "";	 // The KEYS file as download URL.
	DL.LINK_CHK_ASC_FULL		= "";	 // The ASC file as download URL (full install).
	DL.LINK_CHK_SHA256_FULL		= "";	 // The SHA256 file as download URL (full install).
	DL.LINK_CHK_SHA512_FULL		= "";	 // The SHA512 file as download URL (full install).
	DL.LINK_CHK_MD5_FULL		= "";	 // The MD5 file as download URL (full install).
	DL.LINK_CHK_ASC_LP		= "";	 // The ASC file as download URL (langpack).
	DL.LINK_CHK_SHA256_LP		= "";	 // The SHA256 file as download URL (langpack).
	DL.LINK_CHK_SHA512_LP		= "";	 // The SHA512 file as download URL (langpack).
	DL.LINK_CHK_MD5_LP		= "";	 // The MD5 file as download URL (langpack).
	DL.SHOW_SUB_BOX			= true;	 // Is the download URL OK to show the sub-box (true) or not (false)?
	DL.ERROR			= false; // Is the download URL in general OK (false) or not (true)?

	// Check if all option names in the selection box for languages are localized.
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	// Otherwise use the default names.
	if ( l10n.dl_green_box_select_box_lang_values_custom[ 0 ].length > 0 ) {
		DL.SEL_LANG = l10n.dl_green_box_select_box_lang_values_custom;
	}

	return;
}

/*
 * Get array and ISO code for language
 * @param:  None
 * @return: DL.LANG_ISO - The language as ISO code
 */
DL.getLanguage = function() {
	var language = "";

	// If available, use the manual set ISO code (see "index.html") that overrides $LANG_ISO.
	if( DL.NL_LANG !== "" ) {
		language = DL.NL_LANG;

	// Else if available, use the selected language from select box.
	} else if( DL.LANG_SEL !== "" ) {
		language = DL.LANG_SEL;

	// Else try to recognize the language from browser data.
	} else if( navigator.language ) {
		language = navigator.language;
	} else if( navigator.userLanguage ) {
		language = navigator.userLanguage;
	} else if( navigator.browserLanguage ) {
		language = navigator.browserLanguage;
	} else if( navigator.systemLanguage ) {
		language = navigator.systemLanguage;
	}

	// Assign "en-US" as fall-back language if only "en" is set or nothing at all.
	if( !language || language === "" || language == null || language === "en" ) {
		language = "en-US";
	}
/*
	// Assign "pt-PT" if only "pt" is set.
	if( language === "pt" ) {
		language = "pt-PT";
	}
*/
	// Konqueror uses '_' where other browsers use '-'.
	if( language.indexOf( "_" ) !== -1 ) {
		// Change a contained '_' into a '-'.
		language = language.split( "_" ).join( "-" );
	}

	language		= language.toLowerCase();		// Change the language into lower case.
	var languageCode	= language.split( "-" )[ 0 ];		// Part before "-" is the language code.
	var regionCode		= language.split( "-" )[ 1 ];		// Part behind "-" is the region code.
	var thisLanguageSet	= DL.language_matrix[ languageCode ];	// Assign complete lang data of the lang code.

	if( thisLanguageSet == null ) {
		// Assign "en-US" when the language code was not found inside array.
		language	= "en-US";
		languageCode	= "en";
		regionCode	= "us";
		thisLanguageSet	= DL.language_matrix[ languageCode ];
	}

	if( regionCode != null ) {
/*
		// Fix for Portuguese (European) downloads as they are named only "pt" without region code!
		if( languageCode === "pt" && regionCode === "pt" ) {
			language = languageCode;
		}
*/
		// If an additional region code was found.
		if( thisLanguageSet[ regionCode ] != null ) {
			// Assign langCode-regionCode.
			language     = languageCode + "-" + regionCode.toUpperCase();
			thisLanguage = thisLanguageSet[ regionCode ];
		} else {
			// Choose the default languageCode.
			var thisLanguage = thisLanguageSet[ "-" ];
			if( languageCode === "en" ) {
				// Special case: If language code is "en" then assign "en-US" for all "en-XX" cases.
				language	= "en-US";
				regionCode	= "us";
				thisLanguageSet	= DL.language_matrix[ languageCode ];
				thisLanguage	= thisLanguageSet[ regionCode ];
			} else {
				// Else assign the language code as language.
				language	= languageCode;
			}
		}
	} else {
		// Choose the default for none given region code.
		thisLanguage = thisLanguageSet[ "-" ];
	}

	DL.LANG_ISO = language;
	return DL.LANG_ISO;
}

/*
 * Set values into the <select> element for OS (select box)
 * @param:  None
 * @return: None
 */
DL.fillOSSelection = function() {
	var selection = document.getElementById( "os" );
	var option    = "";

	// Fill the <select> element until all OS's are used.
	for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
		option	     = document.createElement( "option" );
		// Assign the platform abbreviation as index value.
		option.value = DL.SEL_OS[ i ];
		// Assign the UI platform name.
		option.text  = DL.SEL_OS[ i + 1 ];
		// Add the new option to the already existing ones.
		selection.appendChild( option );
	}

	// Check if the option names are localized. 
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	if ( l10n.dl_green_box_select_box_os_values[ 0 ].length > 0 ) {
		// Search through the localized names.
		for( i = 0, j = l10n.dl_green_box_select_box_os_values.length; i < j; i++ ) {
			// Exchange the English UI platform name with the localized one.
			selection.options[ i ].text = l10n.dl_green_box_select_box_os_values[ i ];
		}
	}

	return;
}

/*
 * Set values into the <select> element for language (select box)
 * @param:  None
 * @return: None
 */
DL.fillLanguageSelection = function() {
	var selection = document.getElementById( "language" );
	var option    = "";

	// Fill the <select> element until all languages are used.
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
		option       = document.createElement( "option" );
		// Assign the language ISO code as index value.
		option.value = DL.SEL_LANG[ i ];
/*
		// Assign the language ISO code as title.
		option.title = DL.SEL_LANG[ i ];
		// Assign the language name as "English name (Native name)".
		option.text  = DL.SEL_LANG[ i + 1 ];
*/
		// Assign the language name as "English name".
		option.text  = DL.SEL_LANG[ i + 1 ];
		// Assign the language name as "Native name (ISO code)" to show as mouse over title.
		option.title = DL.SEL_LANG[ i + 2 ] + " (" + DL.SEL_LANG[ i ] + ")";
		// Add the new option to the already existing ones.
		selection.appendChild( option );
	}

	// Check if only the option names are localized.
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	if ( l10n.dl_green_box_select_box_language_values[ 0 ].length > 0 ) {
		// Search through the localized names.
		for( i = 0, j = l10n.dl_green_box_select_box_language_values.length; i < j; i++ ) {
			// Exchange the English language name with the localized one.
			selection.options[ i ].text = l10n.dl_green_box_select_box_language_values[ i ];
/*
			alert( "i:              \t\t"	+ i + "\n"
				+ "Localized:	\t"     + l10n.dl_green_box_select_box_language_values[ i ]	+ "\n"
				+ "Text:	\t\t"   + selection.options[ i ].text				+ "\n"
				+ "Title:	\t\t"   + selection.options[ i ].title );
*/
		}
	}

	return;
}

/*
 * Set values into the <select> element for version (select box)
 * @param:  None
 * @return: None
 */
DL.fillVersionSelection = function() {
	var selection = document.getElementById( "version" );
	var option    = "";

	// Fill the <select> element until all versions are used.
	for( var i = 0, j = DL.SEL_VER.length; i < j; i = i + 2 ) {
		option       = document.createElement( "option" );
		// Assign the version as index value.
		option.value = DL.SEL_VER[ i ];
		// Assign the UI version.
		option.text  = DL.SEL_VER[ i + 1 ];
		// Add the new option to the already existing ones.
		selection.appendChild( option );
	}

	// Check if the option names are localized. 
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	if ( l10n.dl_green_box_select_box_version_values[ 0 ].length > 0 ) {
		// Search through the localized names.
		for( i = 0, j = l10n.dl_green_box_select_box_version_values.length; i < j; i++ ) {
			// Exchange the version name with the localized one.
			selection.options[ i ].text = l10n.dl_green_box_select_box_version_values[ i ];
		}
	}

	return;
}

/*
 * Set value in the <select> element for OS (select box)
 * @param:  None
 * @return: DL.PLATFORM_SEL - The platform as short code that was set as selected in the drop-down box
 */
DL.setOSSelection = function() {
	// Depending on $DL.PLATFORM assign the platform string of the release matrix.

	var selection = document.getElementById( "os" );

	// Set the recognized browser platform as default for the select box.
	for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
		// If the platform was found, set it as pre-selected.
		if( DL.SEL_OS[ i ] === DL.PLATFORM ) {
			selection.selectedIndex = i / 3;
			break;
		}
	}

	// If no selected platform for was set in the select box because it was not recognized from browser data,
	// assign "Windows" as default.
	if( selection.selectedIndex === 0 ) {
		// Default: Assign "Windows".
		for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
			// If the platform was found, set it as pre-selected.
			if( DL.SEL_OS[ i ] === "win32" ) {
				selection.selectedIndex = i / 3;
				break;
			}
		}
	}

	DL.PLATFORM_SEL = selection.value;
	return DL.PLATFORM_SEL;
}

/*
 * Set value in the <select> element for language (select box)
 * @param:  None
 * @return: DL.LANG_SEL - The language as ISO code that was set as selected in the drop-down box
 */
DL.setLanguageSelection = function() {
	// Depending on $DL.LANG_ISO assign the language position of the release matrix.

	var selection = document.getElementById( "language" );

	// Set the recognized browser language as default for the select box.
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
		// If the language was found, set it as pre-selected.
		if( DL.SEL_LANG[ i ] === DL.LANG_ISO ) {
			selection.selectedIndex = i / 3;
			break;
		}
	}

	// If the selected language is already the first in the select box and LANG_ISO === "ast" is also true,
	// use "ast" as language.
	if( selection.selectedIndex === 0 && DL.LANG_ISO === "ast" ) {
		// Leave "ast" as selected language and don't change this.
		// Empty by intention.

	} else if( selection.selectedIndex === 0 ) {
	// If no selected language was set in the select box because it was not recognized from browser data,
	// assign "en-US" as default.
		// Default: Assign "en-US".
		for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 2 ) {
			// If the language was found, set it as pre-selected.
			if( DL.SEL_LANG[ i ] === "en-US" ) {
				selection.selectedIndex = i / 2;
				break;
			}
		}
	}

	DL.LANG_SEL = selection.value;
	return DL.LANG_SEL;
}

/*
 * Set value in the <select> element for version (select box)
 * @param:  None
 * @return: DL.VERSION_SEL - The version that was set as selected in the drop-down box
 */
DL.setVersionSelection = function() {
	// Depending on $DL.VERSION assign the version.

	var selection = document.getElementById( "version" );

	// Set the value of $DL.VERSION as default for the select box.
	for( var i = 0, j = DL.SEL_VER.length; i < j; i = i + 2 ) {
		// If the version was found, set it as pre-selected.
		if( DL.SEL_VER[ i ] === DL.VERSION ) {
			selection.selectedIndex = i/2;
			break;
		}
	}

	// No need to assign a default version because the propery "DL.VERSION" must always exist.

	DL.VERSION_SEL = selection.value;
	return DL.VERSION_SEL;
}

/*
 * Get values from the <select> element for OS (select box)
 * @param:  None
 * @return: DL.PLATFORM_SEL - The platform as short code that was selected from the drop-down box
 */
DL.getOSSelection = function() {
	var os_value = document[ "download" ]["os" ].options[ document[ "download" ][ "os" ].selectedIndex ].value;

	// Search through the <select> element until the chosen OS is found.
	for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
		if( DL.SEL_OS[ i ] === os_value ) {
			DL.PLATFORM_SEL = DL.SEL_OS[ i ];
			DL.UI_PLATFORM  = DL.SEL_OS[ i + 1 ];
			DL.EXTENSION    = DL.SEL_OS[ i + 2 ];

			if( DL.UI_PLATFORM.indexOf( "EXE" ) !== -1 ) DL.INSTALL_EXTENSION = "EXE";
			if( DL.UI_PLATFORM.indexOf( "RPM" ) !== -1 ) DL.INSTALL_EXTENSION = "RPM";
			if( DL.UI_PLATFORM.indexOf( "DEB" ) !== -1 ) DL.INSTALL_EXTENSION = "DEB";
			if( DL.UI_PLATFORM.indexOf( "DMG" ) !== -1 ) DL.INSTALL_EXTENSION = "DMG";

			break;
		}
	}

	DL.PLATFORM = DL.PLATFORM_SEL;
	return DL.PLATFORM_SEL;
}

/*
 * Get values from the <select> element for language (select box)
 * @param:  None
 * @return: DL.LANG_SEL - The language as ISO code that was selected from the drop-down box
 */
DL.getLanguageSelection = function() {
	var language_value = document[ "download" ][ "language" ].options[ document[ "download" ][ "language" ].selectedIndex ].value;

	// Search through the <select> element until the chosen language is found.
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
		if( DL.SEL_LANG[ i ] === language_value ) {
			DL.SEL_LANG = language_value;
			break;
		}
	}

	DL.LANG_ISO = DL.SEL_LANG;
	DL.LANG_SEL = DL.SEL_LANG;
	return DL.SEL_LANG;
}

/*
 * Get values from the <select> element for version (select box)
 * @param:  None
 * @return: DL.VERSION_SEL - The version that was selected from the drop-down box
 */
DL.getVersionSelection = function() {
	var version_value = document[ "download" ][ "version" ].options[ document[ "download" ][ "version" ].selectedIndex ].value;

	// Search through the <select> element until the chosen version is found.
	for( var i = 0, j = DL.SEL_VER.length; i < j; i = i + 2 ) {
		if( DL.SEL_VER[ i ] === version_value ) {
			DL.VERSION_SEL = version_value;
			break;
		}
	}

	// Get the version number without dots (e.g., "413" instead of "4.1.3").
	DL.VERSION_SEL_RAW = DL.VERSION_SEL.replace( /\./g,'' );

	return DL.VERSION_SEL;
}

/*
 * Hide CSS style for all elements with ID to make them invisible
 * @param:  None
 * @return: None
 */
DL.hideElements = function() {
	// Change CSS styles for all elements with ID in the green and sub-green colored boxes.
	// Emtpy the values for all elements, make them invisible.

	for( var i = 0, j = DL.ID_SUB_BOX.length; i < j; i++ ) {
		document.getElementById( DL.ID_SUB_BOX[ i ] ).style.display = "none";
	}

	for( var i = 0, j = DL.ID_LINKS.length; i < j; i++ ) {
		document.getElementById( DL.ID_LINKS[ i ] ).style.display   = "none";
	}

	return;
}

/*
 * Show a popup window
 * @param:  target_link - The URL that should be opened as popup window
 * @return: None
 */
DL.showWindow = function( target_link ) {
	// Open a popup window with specific parameters to show the file from "target_link".

 	var popup_window = "";

	popup_window = window.open( target_link, "_blank", "location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, titlebar=no, toolbar=no, left=100, top=250, width=800, height=550" );
	if (window.focus) {
	    popup_window.focus;
	}

	return;
}

/*
 * Show error message
 * @param:  error_text   - The text should should be shown as error message
 * @return: DL.ERROR - Set the general error flag to "true"
 */
DL.showErrorMessage = function( error_text ) {
	// The chosen items from select boxes lead to no download link, show an error message about reason + alternative.

	// In general, hide the data for link, text and title of all elements.
	DL.hideElements();

	// Now set again the values for all elements that should be shown with changed data.
	document.getElementById( "dl_f_link"	).style.display	 = "inline";
	document.getElementById( "dl_f_link"	).style.cursor	 = "not-allowed";
	document.getElementById( "dl_f_link"	).href		 = "javascript:void( 0 )";
	document.getElementById( "dl_f_link"	).innerHTML	 = l10n.dl_full_link_error_text;
	document.getElementById( "dl_f_link"	).title		 = l10n.dl_full_link_error_title;
	document.getElementById( "dl_lp_link"	).style.display	 = "inline";
	document.getElementById( "dl_lp_link"	).style.cursor	 = "not-allowed";
	document.getElementById( "dl_lp_link"	).href		 = "javascript:void( 0 )";
	document.getElementById( "dl_lp_link"	).innerHTML	 = l10n.dl_langpack_link_error_text;
	document.getElementById( "dl_lp_link"	).title		 = l10n.dl_langpack_link_error_title;

	document.getElementById( "dl_err_img"   ).src		 = l10n.dl_error_problem_img_src;
	document.getElementById( "dl_err_img"   ).title		 = l10n.dl_error_problem_img_title;
	document.getElementById( "dl_err_img"   ).alt		 = l10n.dl_error_problem_img_alt;
	document.getElementById( "dl_err_img"	).style.display	 = "inline-block";
	document.getElementById( "dl_err"	).innerHTML	 = "<br />" + error_text;
	document.getElementById( "dl_err"	).style.fontSize = "1.2em";
	document.getElementById( "dl_err"	).style.cursor	 = "default";
	document.getElementById( "dl_err"	).style.display	 = "inline-block";

	document.getElementById( "sub_box"	).className	 = "sub-green-sel_error";
	document.getElementById( "sub_box"	).style.display	 = "block";

	// Delete previously set strings to avoid to show them.
	document.getElementById( "dl_rpm_vs_deb" ).style.cursor	= "default";
	document.getElementById( "dl_rpm_vs_deb" ).title	= "";
	document.getElementById( "dl_rpm_vs_deb" ).text		= "";
	
	// Delete previously set strings to get the possibility back to choose a different platform
	// and then to assemble a new download link.
	DL.UI_PLATFORM_NO_SUP	= "";
	DL.SHOW_SUB_BOX		= true;
	DL.ERROR		= true;
	return DL.ERROR;
}

/*
 * Is support flag set for chosen language and version (y/n)?
 * @param:  None
 * @return: DL.ERROR - Depending on if the language is supported set the general error flag to "true" or "false"
 */
DL.isLanguageSupported = function() {
	// Check if the language in "release_matrix.js" is a release language depending on the version.

	// If no VERSION was selected, assume the default version.
	if( DL.VERSION_SEL === undefined || DL.VERSION_SEL === "" ) {
		DL.VERSION_SEL = DL.VERSION;
	}

	// If VERSION != "4.x.y" then exit.
	if( DL.VERSION_SEL === "3.4.1" || DL.VERSION_SEL === "older" || DL.VERSION_SEL === "other" ) {
		DL.ERROR = false;
		return false;
	}

	// Assign the language data of the selected version depending on the ISO code.
	// Generate variable name: release_matrix_ + version number without dots (e.g., "413" instead of "4.1.3").
	DL.RELEASE_LANG = DL[ "release_matrix_" + DL.VERSION_SEL_RAW ][ DL.LANG_ISO ][ 0 ];

	// If the flag = 'y' then the language is supported, otherwise not.
	if( DL.RELEASE_LANG[ 3 ] === 'y' ) {
		DL.ERROR = false;
		return true;
	} else {
		DL.ERROR = true;
		return false;
	}
}

/*
 * Check links that should be assembled in getLinkSelection() for expections that do not lead to real download links
 * @param:  None
 * @return: None
 */
DL.checkForLinkExceptions = function() {
	// If recognized resp. selected platform, language or version does not lead to a normal download link,
	// show the none-availability to the user.

	DL.SHOW_SUB_BOX	= true;
	DL.ERROR	= false;

	// If language is not supported, show the none-availability to the user.
	if( ! DL.isLanguageSupported() ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_4_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.RELEASE_LANG[ 1 ]
					+ " (" + DL.RELEASE_LANG[ 2 ] + ") (" + DL.LANG_SEL + ")</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_4_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_4_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If the browser-guessed platform is not supported, show the none-availability to the user.
	if( DL.UI_PLATFORM_NO_SUP !== "" ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_3_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.UI_PLATFORM_NO_SUP + "</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_3_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_3_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If version is '4.1.0' (or newer) and platform is 'Mac OS X <= 10.6', show the none-availability to the user.
	if( ( DL.VERSION_SEL === "4.1.7" || DL.VERSION_SEL === "4.1.6" || DL.VERSION_SEL === "4.1.5" || DL.VERSION_SEL === "4.1.4" || DL.VERSION_SEL === "4.1.3" || DL.VERSION_SEL === "4.1.2" || DL.VERSION_SEL === "4.1.1" || DL.VERSION_SEL === "4.1.0" ) && DL.PLATFORM === "mac32" ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_1_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.UI_PLATFORM + "</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_1_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_1_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If version is '4.0.1' (or older) and platform is 'Mac OS X >= 10.7', show the none-availability to the user.
	if( ( DL.VERSION_SEL === "4.0.1" || DL.VERSION_SEL === "4.0.0" ) && DL.PLATFORM === "mac64" ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_2_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.UI_PLATFORM + "</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_2_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_2_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If version is '3.4.1', create a download link that leads to the "other-3.4.1.html" webpage.
	if( DL.VERSION_SEL === "3.4.1" ) {
		// In general, hide the data for link, text and title of all elements.
		DL.hideElements();

		// Set the values for the single download text button.
		document.getElementById( "dl_f_link"	).href		= l10n.dl_aoo341_link;
		document.getElementById( "dl_f_link"	).innerHTML	= l10n.dl_full_link_archive_text;
		document.getElementById( "dl_f_link"	).title		= l10n.dl_full_link_archive_title;
		document.getElementById( "dl_f_link"	).style.cursor	= "pointer";
		document.getElementById( "dl_f_link"	).style.display = "inline";
		document.getElementById( "dl_lp_link"	).style.display = "none";
		document.getElementById( "sub_box"	).style.display = "none";

		DL.SHOW_SUB_BOX = false;
	}

	// If platform is 'other', create a download link that leads to the Porting webpage.
	if( DL.PLATFORM_SEL === "other" ) {
		// In general, hide the data for link, text and title of all elements.
		DL.hideElements();

		// Set the values for the single download text button.
		document.getElementById( "dl_f_link"	).href		= l10n.dl_porting_link;
		document.getElementById( "dl_f_link"	).innerHTML	= l10n.dl_full_link_porting_text;
		document.getElementById( "dl_f_link"	).title		= l10n.dl_full_link_porting_title;
		document.getElementById( "dl_f_link"	).style.cursor	= "pointer";
		document.getElementById( "dl_f_link"	).style.display = "inline";
		document.getElementById( "dl_lp_link"	).style.display = "none";
		document.getElementById( "sub_box"	).style.display = "none";

		DL.SHOW_SUB_BOX = false;
	}

	// If version is 'older', create a download link that leads to the archive webpage.
	if( DL.VERSION_SEL === "older" ) {
		// In general, hide the data for link, text and title of all elements.
		DL.hideElements();

		// Set the values for the single download text button.
		document.getElementById( "dl_f_link"	).href		= l10n.dl_archive_link;
		document.getElementById( "dl_f_link"	).innerHTML	= l10n.dl_full_link_archive_text;
		document.getElementById( "dl_f_link"	).title		= l10n.dl_full_link_archive_title;
		document.getElementById( "dl_f_link"	).style.cursor	= "pointer";
		document.getElementById( "dl_f_link"	).style.display = "inline";
		document.getElementById( "dl_lp_link"	).style.display = "none";
		document.getElementById( "sub_box"	).style.display = "none";

		DL.SHOW_SUB_BOX = false;
	}

	return;
}

/*
 * Get link to mirror system for download file and checksum file
 * @param:  None
 * @return: None
 */
DL.getLinkSelection = function() {
	// Reset all variables that could have been set until now.
	DL.initVariables( 0 );

	// Get the selected data from the select boxes.
	DL.getOSSelection();
	DL.getLanguageSelection();
	DL.getVersionSelection();

	// First check for expections that do not lead to real download links.
	DL.checkForLinkExceptions();

	// If the selected options lead to no download URL, should the sub-box shown anyway?
	// Yes when SHOW_SUB_BOX = "true" and ERROR = "false".
	if( DL.SHOW_SUB_BOX && ! DL.ERROR ) {
		// Assemble the filenames and text for download and checksums.

		DL.getReleaseMatrixPosition();
		DL.getFileData();

		// Assign the base links: Base link + version.
		DL.SF_BASE_URL		= DL.SF       + DL.VERSION_SEL + "/binaries/";
		DL.ASF_DIST_BASE_URL	= DL.ASF_DIST + DL.VERSION_SEL;
		DL.ASF_ARC_BASE_URL	= DL.ASF_ARC  + DL.VERSION_SEL;

		// Assign the download links: Base link + language + file name.
		DL.LINK_FULL		= DL.SF_BASE_URL		     + DL.LANG_SEL + "/" + DL.FILENAME_FULL + "/download";
		DL.LINK_LP		= DL.SF_BASE_URL		     + DL.LANG_SEL + "/" + DL.FILENAME_LP   + "/download";

		// If the selected version is the current release, match the checksum files from ASF Dist, otherwise from the ASF Archive.
		if( DL.VERSION_SEL === DL.VERSION ) {
			DL.LINK_CHK_BASE_URL = DL.ASF_DIST_BASE_URL;
		} else {
			DL.LINK_CHK_BASE_URL = DL.ASF_ARC_BASE_URL;
		}

		// Assign the checksum links: Base link + language + file name.
		DL.LINK_CHK_KEYS	= DL.ASF_DIST + "KEYS";
		DL.LINK_CHK_ASC_FULL    = DL.LINK_CHK_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".asc";
		DL.LINK_CHK_SHA256_FULL = DL.LINK_CHK_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".sha256";
		DL.LINK_CHK_SHA512_FULL = DL.LINK_CHK_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".sha512";

		DL.LINK_CHK_ASC_LP	= DL.LINK_CHK_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".asc";
		DL.LINK_CHK_SHA256_LP	= DL.LINK_CHK_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".sha256";
		DL.LINK_CHK_SHA512_LP	= DL.LINK_CHK_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".sha512";

		// Indicate that a download will successfull.
		DL.SHOW_SUB_BOX		= true;
		DL.ERROR		= false;

		// If a Linux file is selected, then set the values for the RPM vs. DEB text link. Otherwise no text.
		if( DL.INSTALL_EXTENSION === "RPM" || DL.INSTALL_EXTENSION === "DEB" ) {
			document.getElementById( "dl_rpm_vs_deb" ).style.cursor	= "help";
			document.getElementById( "dl_rpm_vs_deb" ).title	= l10n.dl_rpm_vs_deb_title;
			document.getElementById( "dl_rpm_vs_deb" ).text		= l10n.dl_rpm_vs_deb_text;
		} else {
			document.getElementById( "dl_rpm_vs_deb" ).style.cursor	= "default";
			document.getElementById( "dl_rpm_vs_deb" ).title	= "";
			document.getElementById( "dl_rpm_vs_deb" ).text		= "";
		}

		// Set the values for both download text buttons and set the focus to the "full install".
		document.getElementById( "dl_f_link"	    ).href	= DL.LINK_FULL;
		document.getElementById( "dl_f_link"	    ).innerHTML	= l10n.dl_full_link_text;
		document.getElementById( "dl_f_link"	    ).title	= l10n.dl_full_link_title + DL.FILENAME_FULL;
		document.getElementById( "dl_f_link"	    ).focus()
		document.getElementById( "dl_lp_link"	    ).href	= DL.LINK_LP;
		document.getElementById( "dl_lp_link"	    ).innerHTML	= l10n.dl_langpack_link_text;
		document.getElementById( "dl_lp_link"	    ).title	= l10n.dl_langpack_link_title + DL.FILENAME_LP;

		// Set the values in the sub-box for the 4 text lines.
		// #1 Release data and link to release notes.
		document.getElementById( "dl_rel_info"      ).innerHTML	= "<b>" + l10n.dl_rel_info_headline_text
									+ "</b> " + DL.REL_TEXT + " | ";
		document.getElementById( "dl_rel_notes"	    ).href	= DL.REL_NOTES;
		document.getElementById( "dl_rel_notes"	    ).innerHTML	= l10n.dl_rel_notes_text;
		document.getElementById( "dl_rel_notes"	    ).title	= l10n.dl_rel_notes_title + DL.VERSION_SEL;

		// #2 Full install: Data and links
		document.getElementById( "dl_f_info"	    ).innerHTML = "<b>" + l10n.dl_headline_full_text + "</b>"
									+ l10n.dl_filesize_text + DL.FILESIZE_FULL
									+ l10n.dl_megabyte_text + " | "
									+ l10n.dl_checksum_headline_text;
		document.getElementById( "dl_f_chk_keys"    ).href	= DL.LINK_CHK_KEYS;
		document.getElementById( "dl_f_chk_keys"    ).innerHTML	= l10n.dl_checksum_keys_text;
		document.getElementById( "dl_f_chk_keys"    ).title	= l10n.dl_checksum_keys_title;
		document.getElementById( "space1"	    ).innerHTML	= " , ";
		document.getElementById( "dl_f_chk_asc"	    ).href	= DL.LINK_CHK_ASC_FULL;
		document.getElementById( "dl_f_chk_asc"	    ).innerHTML	= l10n.dl_checksum_asc_text;
		document.getElementById( "dl_f_chk_asc"	    ).title	= l10n.dl_checksum_asc_title + DL.FILENAME_FULL;
		document.getElementById( "space2"	    ).innerHTML	= " , ";
		document.getElementById( "dl_f_chk_sha256"  ).href	= DL.LINK_CHK_SHA256_FULL;
		document.getElementById( "dl_f_chk_sha256"  ).innerHTML	= l10n.dl_checksum_sha256_text;
		document.getElementById( "dl_f_chk_sha256"  ).title	= l10n.dl_checksum_sha256_title + DL.FILENAME_FULL;
		document.getElementById( "space3"	    ).innerHTML	= " , ";
		document.getElementById( "dl_f_chk_sha512"  ).href	= DL.LINK_CHK_SHA512_FULL;
		document.getElementById( "dl_f_chk_sha512"  ).innerHTML	= l10n.dl_checksum_sha512_text;
		document.getElementById( "dl_f_chk_sha512"  ).title	= l10n.dl_checksum_sha512_title + DL.FILENAME_FULL;

		// #3 Langpack: Data and links
		document.getElementById( "dl_lp_info"	    ).innerHTML	= "<b>" + l10n.dl_headline_langpack_text
									+ "</b>" + l10n.dl_filesize_text
									+ DL.FILESIZE_LP + l10n.dl_megabyte_text
									+ " | " + l10n.dl_checksum_headline_text;
		document.getElementById( "dl_lp_chk_keys"   ).href	= DL.LINK_CHK_KEYS;
		document.getElementById( "dl_lp_chk_keys"   ).innerHTML	= l10n.dl_checksum_keys_text;
		document.getElementById( "dl_lp_chk_keys"   ).title	= l10n.dl_checksum_keys_title;
		document.getElementById( "space5"	    ).innerHTML	= " , ";
		document.getElementById( "dl_lp_chk_asc"    ).href	= DL.LINK_CHK_ASC_LP;
		document.getElementById( "dl_lp_chk_asc"    ).innerHTML	= l10n.dl_checksum_asc_text;
		document.getElementById( "dl_lp_chk_asc"    ).title	= l10n.dl_checksum_asc_title + DL.FILENAME_LP;
		document.getElementById( "space6"	    ).innerHTML	= " , ";
		document.getElementById( "dl_lp_chk_sha256" ).href	= DL.LINK_CHK_SHA256_LP;
		document.getElementById( "dl_lp_chk_sha256" ).innerHTML	= l10n.dl_checksum_sha256_text;
		document.getElementById( "dl_lp_chk_sha256" ).title	= l10n.dl_checksum_sha256_title + DL.FILENAME_LP;
		document.getElementById( "space7"	    ).innerHTML	= " , ";
		document.getElementById( "dl_lp_chk_sha512" ).href	= DL.LINK_CHK_SHA512_LP;
		document.getElementById( "dl_lp_chk_sha512" ).innerHTML	= l10n.dl_checksum_sha512_text;
		document.getElementById( "dl_lp_chk_sha512" ).title	= l10n.dl_checksum_sha512_title + DL.FILENAME_LP;

		// #4 Links: Full vs. lp + verify checksums + report broken link.
		document.getElementById( "dl_hlp_img"	    ).src	= l10n.dl_help_img_src;
		document.getElementById( "dl_hlp_img"	    ).title	= l10n.dl_help_img_title;
		document.getElementById( "dl_hlp_img"	    ).alt	= l10n.dl_help_img_alt;
		document.getElementById( "dl_hlp"	    ).href	= l10n.dl_help_link;
		document.getElementById( "dl_hlp"	    ).innerHTML	= l10n.dl_help_text;
		document.getElementById( "dl_hlp"	    ).title	= l10n.dl_help_title;
		document.getElementById( "dl_chk_img"	    ).src	= l10n.dl_checksum_img_src;
		document.getElementById( "dl_chk_img"	    ).title	= l10n.dl_checksum_img_title;
		document.getElementById( "dl_chk_img"	    ).alt	= l10n.dl_checksum_img_alt;
		document.getElementById( "dl_chk"	    ).href	= l10n.dl_checksum_link;
		document.getElementById( "dl_chk"	    ).innerHTML	= l10n.dl_checksum_text;
		document.getElementById( "dl_chk"	    ).title	= l10n.dl_checksum_title;
		document.getElementById( "dl_rpt_img"	    ).src	= l10n.dl_report_img_src;
		document.getElementById( "dl_rpt_img"	    ).title	= l10n.dl_report_img_title;
		document.getElementById( "dl_rpt_img"	    ).alt	= l10n.dl_report_img_alt;
		document.getElementById( "dl_rpt"	    ).href	= l10n.dl_report_link;
		document.getElementById( "dl_rpt"	    ).innerHTML	= l10n.dl_report_text;
		document.getElementById( "dl_rpt"	    ).title	= l10n.dl_report_title;

		// New Apache release policy since March 2018: Do not provide any MD5 checksums anymore as it is understood as too insecure.
		if( ( DL.VERSION_SEL === "4.1.7" || DL.VERSION_SEL === "4.1.6" || DL.VERSION_SEL === "4.2.0" ) ) {
			// If version is '4.1.6' (or newer), do not show any MD5 checksum file links.
			document.getElementById( "space4"	    ).innerHTML	= "";
			document.getElementById( "dl_f_chk_md5"	    ).href	= "";
			document.getElementById( "dl_f_chk_md5"	    ).innerHTML	= "";
			document.getElementById( "dl_f_chk_md5"	    ).title	= "";

			document.getElementById( "space8"	    ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_md5"    ).href	= "";
			document.getElementById( "dl_lp_chk_md5"    ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_md5"    ).title	= "";
		} else {
			// If version is '4.1.5' (or older), it's OK to show the MD5 checksum file links.
			DL.LINK_CHK_MD5_FULL = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".md5";
			DL.LINK_CHK_MD5_LP   = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".md5";

			document.getElementById( "space3"	    ).innerHTML	= "";
			document.getElementById( "dl_f_chk_sha512"  ).href	= "";
			document.getElementById( "dl_f_chk_sha512"  ).innerHTML	= "";
			document.getElementById( "dl_f_chk_sha512"  ).title	= "";

			document.getElementById( "space7"	    ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_sha512" ).href	= "";
			document.getElementById( "dl_lp_chk_sha512" ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_sha512" ).title	= "";

			document.getElementById( "space4"	    ).innerHTML	= " , ";
			document.getElementById( "dl_f_chk_md5"	    ).href	= DL.LINK_CHK_MD5_FULL;
			document.getElementById( "dl_f_chk_md5"	    ).innerHTML	= l10n.dl_checksum_md5_text;
			document.getElementById( "dl_f_chk_md5"	    ).title	= l10n.dl_checksum_md5_title + DL.FILENAME_FULL;

			document.getElementById( "space8"	    ).innerHTML	= " , ";
			document.getElementById( "dl_lp_chk_md5"    ).href	= DL.LINK_CHK_MD5_LP;
			document.getElementById( "dl_lp_chk_md5"    ).innerHTML	= l10n.dl_checksum_md5_text;
			document.getElementById( "dl_lp_chk_md5"    ).title	= l10n.dl_checksum_md5_title + DL.FILENAME_LP;
		}

		// Show the CSS style for the normal sub-box and hide all elements for error text.
		document.getElementById( "sub_box"	    ).className	    = "sub-green-sel";
		document.getElementById( "dl_err_img"	    ).style.display = "none";
		document.getElementById( "dl_err"	    ).style.display = "none";

		// Show all elements with ID in the box and sub-box.
		// Set the cursor style for elements to default and make the elements visible.
		for( var i = 0, j = DL.ID_SUB_BOX.length; i < j; i++ ) {
			document.getElementById( DL.ID_SUB_BOX[ i ] ).style.display = "inline";
			document.getElementById( DL.ID_SUB_BOX[ i ] ).style.cursor  = "default";
		}

		// Show all elements with link in the box and sub-box.
		// Set the cursor style for elements with links to pointer and make the elements visible.
		for( var i = 0, j = DL.ID_LINKS.length; i < j; i++ ) {
			document.getElementById( DL.ID_LINKS[ i ] ).style.display   = "inline";
			document.getElementById( DL.ID_LINKS[ i ] ).style.cursor    = "pointer";
		}

		// Set the cursor style for the 3 links with icon to a help sign.
		document.getElementById( "dl_hlp_img"	    ).style.cursor  = "help";
		document.getElementById( "dl_hlp"	    ).style.cursor  = "help";
		document.getElementById( "dl_chk_img"	    ).style.cursor  = "help";
		document.getElementById( "dl_chk"	    ).style.cursor  = "help";
		document.getElementById( "dl_rpt_img"	    ).style.cursor  = "help";
		document.getElementById( "dl_rpt"	    ).style.cursor  = "help";

		// Make the sub-box and therefore all elements visible.
		document.getElementById( "sub_box"	    ).style.display = "block";
	}

	return;
}

/*
 * Get platform of browser
 * @param:  None
 * @return: None
 */
DL.getPlatform = function() {
	// For more help or data see: "http://www.useragentstring.com".

	var av, os, ua, ve = "";

	if( navigator.appVersion ) {
		av		= navigator.appVersion.toLowerCase();	// Get the application version in lower case.
	}
	if( navigator.platform ) {
		os		= navigator.platform.toLowerCase();	// Get the platform string in lower case.
	}
	if( navigator.userAgent ) {
		ua		= navigator.userAgent.toLowerCase();	// Get the user agent string in lower case.
	}
	if( navigator.vendor ) {
		ve		= navigator.vendor.toLowerCase();	// Get the vendor string in lower case.
	}

	DL.UI_PLATFORM		= "";					// Delete previously set string.
	DL.UI_PLATFORM_NO_SUP	= "";					// Delete previously set string.
	DL.PLATFORM		= "";					// Delete previously set string.
	DL.EXTENSION		= "";					// Delete previously set string.

	// Add ECMA262-5 Array methods if not supported natively.
	// To workaround that MSIE 8 and older do not support this function.
	if( !( 'indexOf' in Array.prototype ) ) {
		Array.prototype.indexOf= function( find, i ) {		// 'i' is an optional parameter.
			if( i === undefined ) {
				i = 0;
			}
			if( i < 0 ) {
				i+= this.length;
			}
			if( i < 0 ) {
				i = 0;
			}
			for( var n = this.length; i < n; i++ ) {
				if( i in this && this[ i ] === find ) {
					return i;
				}
			}
			return -1;
		};
	}

	// If the browser's user agent string is set with something, try to recognize its content.
	if( ua !== "" ) {
		// Recognized but *not supported* platforms/OS, set $DL.UI_PLATFORM_NO_SUP to show it to the user.

		// Mobile devices.
		if( ve ) {
		    if( ua.indexOf( "android"		) !== -1 )
			if( ua.indexOf( "nexus"		) !== -1 &&
			    ve.indexOf( "google"	) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Google Nexus";
		}

		if( ua.indexOf( "android"		) !== -1 ) {
		    if( ua.indexOf( "mobile"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Devices (Android)";
		}

		if( os.indexOf( "arm"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Devices (ARM processor)";
		if( ua.indexOf( "blackberry"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Blackberry Smartphones";
		if( ua.indexOf( "brew"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Smartphones (BREW)";
		if( ua.indexOf( "ce.net"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Windows CE)";
		if( ua.indexOf( "galaxy"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Samsung Galaxy";
		if( ua.indexOf( "hiptop"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Smartphones (Hiptop)";
		if( ua.indexOf( "htc"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "HTC Mobile Devices";
		if( ua.indexOf( "ipad"			) !== -1 ||
		    ua.indexOf( "iphone"		) !== -1 ||
		    ua.indexOf( "ipod"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Apple iPhone/iPad/iPod";
		if( ua.indexOf( "kindle"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Amazon Kindle";
		if( ua.indexOf( "lg"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "LG Mobile Devices";
		if( ua.indexOf( "nokia"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Nokia)";
		if( ua.indexOf( "palm"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Palm OS)";
		if( ua.indexOf( "pike"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Pike)";
		if( ua.indexOf( "s60"	        	) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (S60)";
		if( ua.indexOf( "sonyericsson"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Sony/Ericsson Mobile Devices";
		if( ua.indexOf( "symbian"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Symbian OS)";
		if( ua.indexOf( "symbos"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Symbian OS)";
		if( ua.indexOf( "webos"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Palm webOS)";
		if( ua.indexOf( "widerweb"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (WiderWeb)";
		if( os.indexOf( "win"			) !== -1 ||
		    os.indexOf( "windows"		) !== -1 ) {
			if( ua.indexOf( "mobile"	) !== -1 ||
			    ua.indexOf( "phone"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Smartphones (Windows Phone)";
		}

		// Other platforms.
		if( os.indexOf( "aix"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "IBM AIX";
		if( os.indexOf( "alphaserver"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "AlphaServer";
		if( os.indexOf( "amiga"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "AmigaOS";
		if( os.indexOf( "darwin"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Darwin";
		if( os.indexOf( "dragonfly"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "DragonFly BSD";
		if( os.indexOf( "freebsd"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "FreeBSD (PKG)";
		if( os.indexOf( "irix"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "IRIX";
		if( os.indexOf( "netbsd"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "NetBSD";
		if( ua.indexOf( "nintendo"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Nintendo Game Console";
		if( os.indexOf( "openbsd"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "OpenBSD";
		if( os.indexOf( "os/2"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "OS/2";
		if( os.indexOf( "pcbsd"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "PC-BSD";
		if( ua.indexOf( "playstation"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Sony Playstation";
		if( ua.indexOf( "psp"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Sony Playstation Portable";
		if( os.indexOf( "qnx"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "QNX";
		if( os.indexOf( "vms"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "OpenVMS";
		if( ua.indexOf( "wii"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Nintendo Wii Game Console";
		if( os.indexOf( "x11"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "unknown OS (X11 support)";

		// Legacy, no longer supported platforms.
		if( ua.indexOf( "power_pc"		) !== -1 ||
		    ua.indexOf( "ppc"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mac OS PPC (DMG)";
		if( ua.indexOf( "sun4u"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Solaris SPARC (PKG)";
		if( os.indexOf( "sunos"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Solaris x86 (PKG)";

		// If $DL.UI_PLATFORM_NO_SUP is already filled, something was recognized and no more work is needed.
		if( DL.UI_PLATFORM_NO_SUP !== "" ) {
			ERROR = true;
			return DL.UI_PLATFORM_NO_SUP;
		}

		// Recognized and *supported* platforms/OS, set $DL.UI_PLATFORM to show it to the user.

		// Windows?
		if( os.indexOf( "win"			) !== -1 ||
		    os.indexOf( "windows"		) !== -1 ) {	DL.UI_PLATFORM		= "Windows (EXE)";
									DL.PLATFORM		= "win32";
									DL.EXTENSION		= ".exe";
		}

		// Linux: x86 or x86-64, DEB or RPM?
		if( os.indexOf( "linux"			) !== -1 ) {
			// 32-bit: DEB or RPM?
			if( os.indexOf( "x86"		) !== -1 ||
			    os.indexOf( "i686"		) !== -1 ||
			    os.indexOf( "i586"		) !== -1 ||
			    os.indexOf( "i486"		) !== -1 ||
			    os.indexOf( "i386"		) !== -1 ||
			    av.indexOf( "x86"		) !== -1 ||
			    av.indexOf( "i686"		) !== -1 ||
			    av.indexOf( "i586"		) !== -1 ||
			    av.indexOf( "i486"		) !== -1 ||
			    av.indexOf( "i386"		) !== -1 ) {	DL.UI_PLATFORM		= "Linux 32-bit (x86) (RPM)";
									DL.PLATFORM		= "lnx32r";
									DL.EXTENSION		= ".tar.gz";
			     if( ua.indexOf( "debian"	 ) !== -1 ||
				 ua.indexOf( "iceweasel" ) !== -1 ||
				 ua.indexOf( "ubuntu"	 ) !== -1 ) {	DL.UI_PLATFORM		= "Linux Debian 32-bit (x86) (DEB)";
									DL.PLATFORM		= "lnx32d";
									DL.EXTENSION		= ".tar.gz";
			     }
			}

			// 64-bit: DEB or RPM?
			if( os.indexOf( "_64"		) !== -1 ||
			    os.indexOf( "-64"		) !== -1 ||
			    os.indexOf( "x64"		) !== -1 ||
			    os.indexOf( "amd64"		) !== -1 ||
			    av.indexOf( "_64"		) !== -1 ||
			    av.indexOf( "-64"		) !== -1 ||
			    av.indexOf( "x64"		) !== -1 ||
			    av.indexOf( "amd64"		) !== -1 ) {	DL.UI_PLATFORM		= "Linux 64-bit (x86-64) (RPM)";
									DL.PLATFORM		= "lnx64r";
									DL.EXTENSION		= ".tar.gz";
			     if( ua.indexOf( "debian"	 ) !== -1 ||
				 ua.indexOf( "iceweasel" ) !== -1 ||
				 ua.indexOf( "ubuntu"	 ) !== -1 ) {	DL.UI_PLATFORM		= "Linux Debian 64-bit (x86-64) (DEB)";
									DL.PLATFORM		= "lnx64d";
									DL.EXTENSION		= ".tar.gz";
			     }
			}
		}

		// Mac OS X?
		if( os.indexOf( "mac"			) !== -1 ) {	DL.UI_PLATFORM		= "OS X (version >= 10.7) (DMG)";
									DL.PLATFORM		= "mac64";
									DL.EXTENSION		= ".dmg";

			// OS X: 10.6 or older?
			if( ua.indexOf( " 10.6"		) !== -1 ||
			    ua.indexOf( " 10_6"		) !== -1 ||
			    ua.indexOf( " 10.5"		) !== -1 ||
			    ua.indexOf( " 10_5"		) !== -1 ||
			    ua.indexOf( " 10.4"		) !== -1 ||
			    ua.indexOf( " 10_4"		) !== -1 ||
			    ua.indexOf( " 10.3"		) !== -1 ||
			    ua.indexOf( " 10_3"		) !== -1 ) {	DL.UI_PLATFORM		= "OS X (version <= 10.6) (DMG)";
									DL.PLATFORM		= "mac32";
			}

			// OS X: 10.7 or newer?
			if( ua.indexOf( " 10.12"	) !== -1 ||
			    ua.indexOf( " 10_12"	) !== -1 ||
			    ua.indexOf( " 10.11"	) !== -1 ||
			    ua.indexOf( " 10_11"	) !== -1 ||
			    ua.indexOf( " 10.10"	) !== -1 ||
			    ua.indexOf( " 10_10"	) !== -1 ||
			    ua.indexOf( " 10.9"		) !== -1 ||
			    ua.indexOf( " 10_9"		) !== -1 ||
			    ua.indexOf( " 10.8"		) !== -1 ||
			    ua.indexOf( " 10_8"		) !== -1 ||
			    ua.indexOf( " 10.7"		) !== -1 ||
			    ua.indexOf( " 10_7"		) !== -1 ) {	DL.UI_PLATFORM		= "OS X (version >= 10.7) (DMG)";
									DL.PLATFORM		= "mac64";
			}
		} 
	} 

	// If nothing was recognized until now, set $DL.UI_PLATFORM_NO_SUP to show it to the user.
	if( DL.UI_PLATFORM === "" ) {
		DL.UI_PLATFORM_NO_SUP = l10n.dl_unknown_platform_text;
		DL.ERROR	      = true;
	}

	return;
}

/*
 * Get positions of platform in release matrix
 * @param:  None
 * @return: None
 */
DL.getReleaseMatrixPosition = function() {
	// Depending on $PLATFORM, assign the platform position from the release matrix.

	switch( DL.PLATFORM ) {
		case "lnx64d":
			DL.RELEASE_PLATFORM_POS_FULL	= 1;
			DL.RELEASE_PLATFORM_POS_LP	= 2;
			DL.PLATFORM_FULL		= "Linux_x86-64_install-deb";
			DL.PLATFORM_LP			= "Linux_x86-64_langpack-deb";
			break;
		case "lnx64r":
			DL.RELEASE_PLATFORM_POS_FULL	= 3;
			DL.RELEASE_PLATFORM_POS_LP	= 4;
			DL.PLATFORM_FULL		= "Linux_x86-64_install-rpm";
			DL.PLATFORM_LP			= "Linux_x86-64_langpack-rpm";
			break;
		case "lnx32d":
			DL.RELEASE_PLATFORM_POS_FULL	= 5;
			DL.RELEASE_PLATFORM_POS_LP	= 6;
			DL.PLATFORM_FULL		= "Linux_x86_install-deb";
			DL.PLATFORM_LP			= "Linux_x86_langpack-deb";
			break;
		case "lnx32r":
			DL.RELEASE_PLATFORM_POS_FULL	= 7;
			DL.RELEASE_PLATFORM_POS_LP	= 8;
			DL.PLATFORM_FULL		= "Linux_x86_install-rpm";
			DL.PLATFORM_LP			= "Linux_x86_langpack-rpm";
			break;
		case "mac64":
			DL.RELEASE_PLATFORM_POS_FULL	= 9;
			DL.RELEASE_PLATFORM_POS_LP	= 10;
			DL.PLATFORM_FULL		= "MacOS_x86-64_install";
			DL.PLATFORM_LP			= "MacOS_x86-64_langpack";
			break;
		case "mac32":
			DL.RELEASE_PLATFORM_POS_FULL	= 9;
			DL.RELEASE_PLATFORM_POS_LP	= 10;
			DL.PLATFORM_FULL		= "MacOS_x86_install";
			DL.PLATFORM_LP			= "MacOS_x86_langpack";
			break;
		case "win32":
			DL.RELEASE_PLATFORM_POS_FULL	= 11;
			DL.RELEASE_PLATFORM_POS_LP	= 12;
			DL.PLATFORM_FULL		= "Win_x86_install";
			DL.PLATFORM_LP			= "Win_x86_langpack";
			break;
		default:
			DL.RELEASE_PLATFORM_POS_FULL	= -1;
			DL.RELEASE_PLATFORM_POS_LP	= -1;
			DL.ERROR			= true;
	}

	return;
}

/*
 * Get file name for download file
 * @param:  version - The version to use to get the file data
 * @return: None
 */
DL.getFileData = function() {
	// Depending on $ver, a different release matrix has to be used to assemble the download filenames.

	// Generate variable name: string + version number without dots (e.g., "413" instead of "4.1.3").
	var release_matrix_version = "release_matrix_" + DL.VERSION_SEL_RAW;

	// Assign all values from the release matrix of language and platform.
	DL.RELEASE_PLATFORM	= DL[ release_matrix_version ][ DL.LANG_ISO ][ DL.RELEASE_PLATFORM_POS_FULL ];

	// Assemble filename: Product name + version + platform as URL part + language ISO + file extension.
	DL.FILENAME_FULL	= "Apache_OpenOffice_" + DL.VERSION_SEL + "_" + DL.PLATFORM_FULL + "_" + DL.LANG_ISO + DL.EXTENSION;
	DL.FILENAME_LP		= "Apache_OpenOffice_" + DL.VERSION_SEL + "_" + DL.PLATFORM_LP   + "_" + DL.LANG_ISO + DL.EXTENSION;

	// Assign the file size (column 2) from the release matrix of language and platform.
	DL.FILESIZE_FULL	= DL[ release_matrix_version ][ DL.LANG_ISO ][ DL.RELEASE_PLATFORM_POS_FULL ][ 1 ];
	DL.FILESIZE_LP		= DL[ release_matrix_version ][ DL.LANG_ISO ][ DL.RELEASE_PLATFORM_POS_LP   ][ 1 ];

	// Assign all values from the release data.

	// TODO: Rewrite this part together with text items "l10n.dl_rel_info_svn_text" in "msg_prop_l10n_en.js" and all other languages to make it independent from SVN, Git or other systems.
	/*
	DL.REL_TEXT		= l10n.dl_rel_info_milestone_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 0 ]
				+ " | " + l10n.dl_rel_info_buildid_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 1 ]
				+ " | " + l10n.dl_rel_info_svn_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 2 ]
				+ " | " + l10n.dl_rel_info_rel_date_text + DL[ release_matrix_version ][ "src" ][ 1 ][ 3 ];
	*/

	DL.REL_TEXT		= l10n.dl_rel_info_milestone_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 0 ]
				+ " | " + l10n.dl_rel_info_buildid_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 1 ]
				+ " | "                                  + DL[ release_matrix_version ][ "src" ][ 1 ][ 2 ]
				+ " | " + l10n.dl_rel_info_rel_date_text + DL[ release_matrix_version ][ "src" ][ 1 ][ 3 ];

	// Assign the link for release notes, depending on the version.
	// Generate variable name: string + version number without dots (e.g., "413" instead of "4.1.3").
	DL.REL_NOTES = l10n[ "dl_rel_notes_aoo" + DL.VERSION_SEL_RAW + "_link" ];

	return;
}

/*
 * Set document.location to start the download
 * @param:  itemid, uri - The ID of the colored box and the URI that should be opened
 * @return: None
 */
function openItem( itemid, uri ) {
//	var thisDocument  = document.getElementById( "downloadextendedtext" );
//	var thisDocument  = document.getElementById( itemid );
	document.location = uri;
}

/*
 * Output values of variables for debugging
 * @param:  location - The location where the debug utput should take place
 * @return: None
 */
DL.debug = function( location ) {
	// Depending on the current position in the code, show the values for the variables as alert box.
	// If the alert box is too large, just comment out the lines that are not needed at the moment.
	// Usage:
	// Call the function in the code position you want to debug.
	// Example:
	// DL.debug( "name the exact code position");

	if( location === "" ) {
		location = "No location named!";
	}

	alert( location											+ "\n"
	+ "RELEASE_MODE: "			+ "\t\t\t\t\t\t"	+ DL.RELEASE_MODE		+ "\n"
	+ "NL_LANG: "				+ "\t\t\t\t\t\t\t"	+ DL.NL_LANG			+ "\n"
	+ "LANG_ISO: "				+ "\t\t\t\t\t\t"	+ DL.LANG_ISO			+ "\n"
	+ "LANG_SEL: "				+ "\t\t\t\t\t\t"	+ DL.LANG_SEL			+ "\n"
	+ "UI_PLATFORM: "			+ "\t\t\t\t\t\t"	+ DL.UI_PLATFORM		+ "\n"
	+ "UI_PLATFORM_NO_SUP: "		+ "\t\t\t\t"		+ DL.UI_PLATFORM_NO_SUP		+ "\n"
	+ "PLATFORM: "				+ "\t\t\t\t\t\t"	+ DL.PLATFORM			+ "\n"
	+ "PLATFORM_FULL: "			+ "\t\t\t\t\t"		+ DL.PLATFORM_FULL		+ "\n"
	+ "PLATFORM_LP: "			+ "\t\t\t\t\t\t"	+ DL.PLATFORM_LP		+ "\n"
	+ "PLATFORM_SEL: "			+ "\t\t\t\t\t\t"	+ DL.PLATFORM_SEL		+ "\n"
	+ "RELEASE_PLATFORM_POS_FULL: "		+ "\t\t\t"		+ DL.RELEASE_PLATFORM_POS_FULL	+ "\n"
	+ "RELEASE_PLATFORM_POS_LP: "		+ "\t\t\t"		+ DL.RELEASE_PLATFORM_POS_LP	+ "\n"
	+ "RELEASE_PLATFORM: "			+ "\t\t\t\t\t"		+ DL.RELEASE_PLATFORM		+ "\n"
	+ "RELEASE_LANG: "			+ "\t\t\t\t\t\t"	+ DL.RELEASE_LANG		+ "\n"
	+ "REL_TEXT: "				+ "\t\t\t\t\t\t\t"	+ DL.REL_TEXT			+ "\n"
	+ "REL_NOTES: "				+ "\t\t\t\t\t\t"	+ DL.REL_NOTES			+ "\n"
	+ "VERSION_SEL: "			+ "\t\t\t\t\t\t"	+ DL.VERSION_SEL		+ "\n"
	+ "VERSION_SEL_RAW: "			+ "\t\t\t\t\t"		+ DL.VERSION_SEL_RAW		+ "\n"
	+ "FILENAME_FULL: "			+ "\t\t\t\t\t"		+ DL.FILENAME_FULL		+ "\n"
	+ "FILENAME_LP: "			+ "\t\t\t\t\t\t"	+ DL.FILENAME_LP		+ "\n"
	+ "FILESIZE_FULL: "			+ "\t\t\t\t\t\t"	+ DL.FILESIZE_FULL		+ "\n"
	+ "FILESIZE_LP: "			+ "\t\t\t\t\t\t"	+ DL.FILESIZE_LP		+ "\n"
	+ "EXTENSION: "				+ "\t\t\t\t\t\t"	+ DL.EXTENSION			+ "\n"
	+ "INSTALL_EXTENSION: "			+ "\t\t\t\t\t\t"	+ DL.INSTALL_EXTENSION		+ "\n"
	+ "LINK_FULL: "				+ "\t\t\t\t\t\t"	+ DL.LINK_FULL			+ "\n"
	+ "LINK_LP: "				+ "\t\t\t\t\t\t\t"	+ DL.LINK_LP			+ "\n"
	+ "LINK_CHK_BASE_URL: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_BASE_URL		+ "\n"
	+ "LINK_CHK_ASC_FULL: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_ASC_FULL		+ "\n"
	+ "LINK_CHK_SHA256_FULL: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA256_FULL	+ "\n"
	+ "LINK_CHK_SHA512_FULL: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA512_FULL	+ "\n"
	+ "LINK_CHK_MD5_FULL: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_MD5_FULL		+ "\n"
	+ "LINK_CHK_ASC_LP: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_ASC_LP		+ "\n"
	+ "LINK_CHK_SHA256_LP: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA256_LP		+ "\n"
	+ "LINK_CHK_SHA512_LP: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA512_LP		+ "\n"
	+ "LINK_CHK_MD5_LP: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_MD5_LP		+ "\n"
	+ "SHOW_SUB_BOX: "			+ "\t\t\t\t\t"		+ DL.SHOW_SUB_BOX		+ "\n"
	+ "ERROR: "				+ "\t\t\t\t\t\t\t"	+ DL.ERROR			+ "\n" );

	return;
}

