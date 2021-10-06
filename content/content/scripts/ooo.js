/*
 * Overview of all methods (functions) of the global object "INDEX"
 * ----------------------------------------------------------------
 * function INDEX.checkReferrer ()
 * function INDEX.createIndexOf	()
 * function INDEX.getURLQuery	()
 * function INDEX.follow	( platform )
 * function INDEX.showEventBox	()
 * function INDEX.showAlertBox	()
 * function INDEX.setRedirect 	()
 */



// Object that contains all following methods (functions) and properties (variables).
var INDEX = new Object();

/*
 * Create the "indexOf" function when the browser does not support it
 * @param:  None
 * @return: i - The value from the index position of the array
 */
INDEX.createIndexOf = function() {
	// Add ECMA262-5 array methods if not supported natively.
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
}

/*
 * Get the value from an browser URL query
 * @param:  None
 * @return: q_value - The value from the browser URL query
 */
INDEX.getURLQuery = function() {
	// Parse the URL for a query if it contains a value that should be used as an language ISO code.

	// Does the browser URL contain a query with "?" and "=" characters at all?
	if( decodeURI( window.location ).indexOf( "?" ) == -1 &&
	    decodeURI( window.location ).indexOf( "=" ) == -1 ) {
		// If not return an empty string and exit.
		return "";
	}

	// Create the "indexOf" function when the browser does not support it.
	INDEX.createIndexOf();

	var query		= new Object();
	var q_pair		= window.location.search.substring( 1 ).split( "?" );
	var position		= 0;
	var q_name, q_value	= "";

 	for ( var i = 0; i < q_pair.length; i++ ) {
		// Assign the position of the "=" character, so where the name ends and the value starts.
 		position = q_pair[ i ].indexOf( "=" );

		// If the position is not found (-1) then just go on.
		if ( position === -1 ) {
			continue;
		}

		// Assign the name of the query pair.
		q_name		= q_pair[ i ].substring( 0, position );
		// Assign the value of the query pair.
		q_value		= q_pair[ i ].substring( position + 1 );
		query[ q_name ]	= decodeURI( q_value );
	}
/*
	alert( ""
	+ "Query pair: "  + "\t" + q_pair  + "\n"
	+ "Query name: "  + "\t" + q_name  + "\n"
	+ "Query value: " + "\t" + q_value + "\n"
	+ "" );
*/
	// Return the query value.
	return q_value;
}

/*
 * Link AOO to a social media
 * @param:  platform - The social media (Apache Blog, Facebook, Twitter, Google+) that the scriping should link to
 * @return: None
 */
INDEX.follow = function( platform ) {
	_gaq.push( ['_trackEvent', 'social', 'followUs', platform] ); 

	if ( platform == 'ApacheBlog' ) {
		window.open( "https://blogs.apache.org/OOo/", "_blank" );
	} else if ( platform == 'Facebook' ) {
		window.open( "https://www.facebook.com/ApacheOO", "_blank" );
	} else if ( platform == 'Twitter' ) {
		window.open( "https://twitter.com/ApacheOO", "_blank" );
	} else if ( platform == 'GooglePlus' ) {
		window.open( "https://plus.google.com/+openoffice", "_blank" );
	}

	return;
}

/*
 * Show a dialog box helping text and set the document referrer to another webpage to do a redirect.
 * @param:  None
 * @return: None
 */
INDEX.checkReferrer = function() {
	// Check the origin of the website visit (document referrer) and decide if there is a need to notify the user and
	// do a website redirect.

	// Example from 2014-12-03:
	// Send the support link of the "Quickoffice - Pro" app to a special webpage with explaination.
	// http://mail-archives.apache.org/mod_mbox/openoffice-dev/201412.mbox/%3C547E3D52.5070309%40apache.org%3E

	// TODO: Finished the work and test if it is working.
	
	// Backup the original document referrer.
	var ref_backup = document.referrer;

	// Check if the user comes from a problematic webpage (document referrer).
	if ( document.referrer.indexOf( "itunes.apple.com/gb/app/quickoffice-pro/id889011512" ) != -1 ) {
		// Set a new website to do the redirect.
//		location.href = "http://www.openoffice.org/new-special-page.html";

		// Notify the user about the reason for the redirect.
		alert( ""
			+ "Dear Quickoffice - Pro user"
			+ "\n\n That app claims to come from Apache OpenOffice, but this is not true. "
			+ "It is totally unrelated to the Apache OpenOffice project \"http://www.openoffice.org\" and "
			+ "therefore we cannot help you in any way. Please report the app back to the App Store. "
			+ "\n\n Thank you very much for your understanding."
		+ "");
	}

	return;
}

/*
 * Show an event box with colored background (e.g., to announce the Apache Conference Europe)
 * @param:  None
 * @return: None
 */
INDEX.showEventBox = function() {
	// The text is defined in "/msg_prop_l10n.js".

	// Show the event box or not?
	if( l10n.index_event_box_show ) {
		// Show the banner logo and text with link and cursor as poiner.
		document.write( "<div id='event_box' onclick='window.open( \"" + l10n.index_event_box_text_href
			+ "\", \"_blank\" ); return false;'>"
			+ "<ul>"
			  + "<li>"
			    // Event banner logo on the left hand side.
			    + "<p style='float: left;'>"
			      + "<a href='" + l10n.index_event_box_graphic_href
				+ "' title='" + l10n.index_event_box_graphic_title + "' target='_blank'>"
				  + "<img src='" + l10n.index_event_box_graphic_src + "'"
				  + "alt='" + l10n.index_event_box_graphic_alt + "'"
				  + "height='" + l10n.index_event_box_graphic_height + "'"
				  + "width='" + l10n.index_event_box_graphic_width + "' />"
			      + "</a>"
			    + "</p>"

			    // Event text on the right hand side.
			    + "<p>"
			      + "<a style='color: black; text-decoration: none;'"
				+ "' title='" + l10n.index_event_box_text_title + "' target='_blank'>"
				+ l10n.index_event_box_text_text
			      + "</a>"
			    + "</p>"
			  + "</li>"
			+ "</ul>"
		+ "</div>" );
	}

	return;
}

/*
 * Show an alert box with colored background (e.g., to announce an outage of an AOO service)
 * @param:  None
 * @return: None
 */
INDEX.showAlertBox = function() {
	// The text is defined in "/msg_prop_l10n.js".

	// Show the alert box or not?
	if( l10n.index_alert_box_show ) {
		// Depending if link is available, make the whole DIV clickable or not.
		if( l10n.index_alert_box_href ) {
			// Show the text with link and cursor as poiner.
			document.write( "<div id='alert_box' onclick='window.open( \"" + l10n.index_alert_box_href
			+ "\", \"_blank\" ); return false;'><ul><li>" );

			// Show headline.
			document.write( "<h2 style='cursor: pointer;'>"
			+ l10n.index_alert_box_headline_text + "</h2>" );

			// Show text.
			if( l10n.index_alert_box_text_text ) {
				document.write( "<p style='cursor: pointer;'>"
				+ l10n.index_alert_box_text_text + "</p>" );
			}
		} else {
			// Show the text without link and normal cursor.
			document.write( "<div id='alert_box'><ul><li>" );

			// Show headline.
			document.write( "<h2 style='cursor: default;'>"
			+ l10n.index_alert_box_headline_text + "</h2>" );

			// Show text.
			if( l10n.index_alert_box_text_text ) {
				document.write( "<p style='cursor: default;'>"
				+ l10n.index_alert_box_text_text + "</p>" );
			}
		}
		document.write( "</li></ul></div>" ); // Alert box.

	return;
	}
}

/*
 * Show a redirect box with colored background to give the user a message that a localized NL webpage is available
 * @param:  None
 * @return: None
 */

INDEX.setRedirect = function() {
	// The text is defined in "/msg_prop_l10n.js".

	DL.NL_LANG	= "";					// Set to empty as both variables ...
	DL.LANG_SEL	= "";					// ... must not be used in following function.
	var lang_iso	= DL.getLanguage();			// Get the language ISO code from browser guessed data.
	var lang_mode	= "";					// Customized redirect mode.
	var lang_text	= "";					// Customized message text that can be shown.
	var link	= "";					// Override redirect mode.

	// Create the "indexOf" function when the browser does not support it.
	INDEX.createIndexOf();

	// Add ECMA262-5 Array methods if not supported natively.
	// To workaround that MSIE 8 and older do not support this function.
	if( !( 'indexOf' in Array.prototype ) ) {
		Array.prototype.indexOf= function( find, i ) {	// 'i' is an optional parameter.
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

	// Fix for Portuguese (European) as they are named only "pt" without region code!
	if( lang_iso === "pt-pt" || lang_iso === "pt-PT" ) {
		lang_iso = "pt";
	}

	// Query if the browser language is one of the released languages.
	// The array has 3 elements per language (defined in "/download/globalvars.js"
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
	  // If the ISO code is found in the language array.
	  if( DL.SEL_LANG[ i ] === lang_iso ) {
	    // Query for the redirect method (defined in "/msg_prop_l10n.js", column 0).
	    lang_mode	= l10n.index_redirect_text[ i / 3 * 2 ];
	    lang_text	= l10n.index_redirect_text[ i / 3 * 2 + 1 ];
	    break;
	  }
	}

	// Convert the browser URL into a string.
	link = String( document.location );

	// Does the browser URL contain already a redirect mode?
	// If yes, set the new redirect mode to override the customized mode.
	if( link.indexOf( "hard" ) !== -1 ) {
	    lang_mode = "hard";
	} else if( link.indexOf( "soft" ) !== -1 ) {
	    lang_mode = "soft";
	} else if( link.indexOf( "none" ) !== -1 ) {
	    lang_mode = "none";
	}

	// Fix for English as main language for the website, it does not need a language code.
	if( lang_iso === "en-us" || lang_iso === "en-gb" || lang_iso === "en-uk" || lang_iso === "en" ||
	    lang_iso === "en-US" || lang_iso === "en-GB" || lang_iso === "en-UK" ) {
		lang_iso = "";
	}

	switch( lang_mode ) {
		case "hard":
			// Do not show a message, just redirect. 
			window.open( "http://www.openoffice.org/" + lang_iso , "_self" );
			break;
		case "soft":
			// Show a message and redirect only on user's click.
			// Assign the message text that is defined in:
			// "/msg_prop_l10n.js", array "l10n.index_redirect_text", column 1),
			document.write( "<div id='redirect_box'"
			+ " onclick='window.open( \"http://www.openoffice.org/" + lang_iso + "\", \"_self\" );"
			+ "return false;'>"
			+ "<ul><li>"
			+ "<p>" + lang_text + "</p>"
			+ "</li></ul>"
			+ "</div>" ); // Redirect box.
			break;
		case "none":
		default:
			// Do nothing and show nothing.
	}

	return;
}

