/* first element: redir will redirect to contributing page, then to url, here
 * will offer the download here and skip will directly go to the NL-page
 * (nl-group has its own contributing page */


/* skip for all, since contributing-page doesn't redirect anymore... */
/* ISO-short with array of 'skip/here' (old, not used), */
/* language name in en-US, */
/* link to native-lang-page, */
/* flag for bouncer, flag for bouncer for MAC ( only in combination with previous flag! ) */
var languages = {
"ar": {"-": ['skip', 'Arabic',              'http://ar.openoffice.org/about-downloads.html','n','n']},
"eu": {"-": ['skip', 'Basque',              'http://eu.openoffice.org/index.html','n','n']},
"bn": {"-": ['skip', 'Bengali',             'http://bn.openoffice.org/index.html','n','n']},
"bg": {"-": ['skip', 'Bulgarian',           'http://bg.openoffice.org/index.html','n','n']},
"ca": {"-": ['skip', 'Catalan',             'http://www.softcatala.org/projectes/openoffice/','n','n']},
"cs": {"-": ['skip', 'Cesky',               'http://cs.openoffice.org/','n','n']},
"zh": {"-": ['skip', 'Chinese',             'http://zh.openoffice.org/downloads.html','n','n']},
"hr": {"-": ['skip', 'Croatian',            'http://hr.openoffice.org/','n','n']},
"da": {"-": ['skip', 'Danish',              'http://da.openoffice.org/','n','n']},
"nl": {"-": ['skip', 'Dutch',               'http://nl.openoffice.org/downloaden.html','y','y']},
"en": {"-": ['here', 'US English',          'http://test.html','y','y'],
       "us": ['here','US English',          'http://test.html','y','y']},
"et": {"-": ['skip', 'Estonian',            'http://openoffice.offline.ee','n','n']},
"fr": {"-": ['skip', 'French',              'http://fr.openoffice.org/about-downloads.html','y','n']},
"de": {"-": ['skip', 'German',              'http://de.openoffice.org/downloads/quick.html','y','y']},
"el": {"-": ['skip', 'Greek',               'http://el.openoffice.org','n','n']},
"he": {"-": ['skip', 'Hebrew',              'http://www.openoffice.org.il/','n','n']},
"hi": {"-": ['skip', 'Hindi',               'http://hi.openoffice.org/about-downloads.html','n','n']},
"hu": {"-": ['skip', 'Hungarian',           'http://hu.openoffice.org/about-downloads.html','n','n']},
"it": {"-": ['skip', 'Italian',             'http://it.openoffice.org/download/','y','n']},
"ja": {"-": ['skip', 'Japanese',            'http://ja.openoffice.org/','y','n']},
"km": {"-": ['skip', 'Khmer',               'http://km.openoffice.org/','n','n']},
"ko": {"-": ['skip', 'Korean',              'http://ko.openoffice.org/','n','n']},
"lo": {"-": ['skip', 'Laotian',             'http://lo.openoffice.org/','n','n']},
"mk": {"-": ['skip', 'Macedonian',          'http://mk.openoffice.org/','n','n']},
"ms": {"-": ['skip', 'Malaysian',           'http://ms.openoffice.org/','n','n']},
"mn": {"-": ['skip', 'Mongolian',           'http://mn.openoffice.org/','n','n']},
"no": {"-": ['skip', 'Norwegian',           'http://no.openoffice.org/','n','n']},
"pl": {"-": ['skip', 'Polish',              'http://pl.openoffice.org/product.download.html','y','n']},
"pt": {"-":  ['skip','Português',          'http://pt.openoffice.org/download/download.htm','n','n'],
       "pt": ['skip','Português',          'http://pt.openoffice.org/download/download.htm','n','n'],
       "br": ['skip','Português do Brasil','http://br-pt.openoffice.org/','n','n']},
"ro": {"-": ['skip', 'Romana',              'http://ro.openoffice.org/','n','n']},
"ru": {"-": ['skip', 'Russian',             'http://ru.openoffice.org/about-downloads.html','y','n']},
"sr": {"-": ['skip', 'Serbian',             'http://sr.openoffice.org/','n','n']},
"sk": {"-": ['skip', 'Slovak',              'http://sk.openoffice.org/','n','n']},
"sl": {"-": ['skip', 'Slovenian',           'http://sl.openoffice.org/','n','n']},
"fi": {"-": ['skip', 'Suomi',               'http://fi.openoffice.org/lataa.html','n','n']},
"es": {"-": ['skip', 'Spanish',             'http://es.openoffice.org/programa/','y','n']},
"sv": {"-": ['skip', 'Swedish',             'http://sv.openoffice.org/','y','y']},
"ta": {"-": ['skip', 'Tamil',               'http://ta.openoffice.org/','n','n']},
"th": {"-": ['skip', 'Thai',                'http://th.openoffice.org/about-downloads.html','n','n']},
"tr": {"-": ['skip', 'Turkish',             'http://tr.openoffice.org/about-downloads.html','n','n']},
"vi": {"-": ['skip', 'Vietnamese',          'http://vi.openoffice.org','n','n']},
"cy": {"-": ['skip', 'Welsh',               'http://cy.openoffice.org/index.html','n','n']}
};

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
    if (language == "" || language == "en") language = "en-US";

    // Konqueror uses '_' where other browsers use '-'.
    if (language.indexOf("_") != -1) language = language.split("_").join("-");

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
    return 'en-US';
    if (navigator.language)
        language = navigator.language;
    else if (navigator.userLanguage)
        language = navigator.userLanguage;
    else if (navigator.systemLanguage)
        language = navigator.systemLanguage;

    // Convert "en" to "en-US" as well since en-US build is the canonical
    // translation, and thus better tested.
    if (language == "" || language == "en") language = "en-US";

    // Konqueror uses '_' where other browsers use '-'.
    if (language.indexOf("_") != -1) language = language.split("_").join("-");

    language = language.toLowerCase();
    var languageCode = language.split("-")[0];
    var regionCode = language.split("-")[1];

    var thisLanguageSet  = languages[languageCode];
    if ( thisLanguageSet == null ) {
        return "en-US";
    } else if ( regionCode != null ) {
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
 * get flag for bouncer link
 * depends on array-list
 */
function hasBouncerLink() {
    var a = getArray();
    var platformBouncer = getPlatformForBouncer();

    if ( a[3] == 'y' ) {
        // special handling for MAC-Bouncer links in combination with bouncer general flag a[3]
        if ( platformBouncer.indexOf( "mac" ) == -1 || a[4] == 'y' ) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/*
 * get flag for bouncer link
 * depends on array-list
 */
function getLink( version ) {
    return "http://openoffice.bouncer.osuosl.org/?product=OpenOffice.org&os=" + getPlatformForBouncer() + "&lang=en-US&version=" + version;
}

/*
 * get platform for browser
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
            return "Linux";
        } else if ( navigator.platform.indexOf( "SunOS i86pc" ) != -1 ) {
            return "Solaris x86";
        } else if ( navigator.platform.indexOf( "SunOS sun4u" ) != -1 ) {
            return "Solaris SPARC";
        } else if ( navigator.platform.indexOf( "SunOS" ) != -1 ) {
            return "Solaris SPARC";
        } else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "Intel" ) != -1 ) {
            return "Mac OSX Intel";
        } else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "PPC" ) != -1 ) {
            return "Mac OSX PPC";
        } else if ( navigator.platform.indexOf( "Mac" ) != -1 ) {
            return "Mac OSX" ;
        } else
            return navigator.platform;
    }
    return "Windows";
}

/*
 * get platform for bouncer-link
 */
function getPlatformForBouncer() {
    if ( navigator.platform != null ) {
        if ( navigator.platform.indexOf( "Win32" ) != -1 ) {
            return "winwjre";
        } else if ( navigator.platform.indexOf( "Win64" ) != -1 ) {
            return "winwjre";
        } else if ( navigator.platform.indexOf( "Win" ) != -1 ) {
            return "winwjre";
        } else if ( navigator.platform.indexOf( "Linux" ) != -1 ) {
            return "linuxintelwjre";
        } else if ( navigator.platform.indexOf( "SunOS i86pc" ) != -1 ) {
            return "solarisx86wjre";
        } else if ( navigator.platform.indexOf( "SunOS sun4u" ) != -1 ) {
            return "solarissparcwjre";
        } else if ( navigator.platform.indexOf( "SunOS" ) != -1 ) {
            return "solarissparcwjre";
        } else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "Intel" ) != -1 ) {
            return "macosxintel";
        } else if ( navigator.platform.indexOf( "Mac" ) != -1 && navigator.platform.indexOf( "PPC" ) != -1 ) {
            return "macosxppc";
        } else if ( navigator.platform.indexOf( "Mac" ) != -1 ) {
            return "macosxintel";
        } else
            return navigator.platform;
    }
    return "winwjre";
}

function getTupel( href ) {
    var retVal;
    if ( href.indexOf( "?" ) > 0 && href.indexOf( "http://openoffice.bouncer.osuosl.org/" ) == 0 ) {
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

function getProduct( href ) {
    var retVal = "";
    if ( href.indexOf( "?" ) > 0 && href.indexOf( "http://openoffice.bouncer.osuosl.org/" ) == 0 ) {
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

function getLang( href ) {
    return 'en-US';
    var retVal = "";
    if ( href.indexOf( "?" ) > 0 && href.indexOf( "http://openoffice.bouncer.osuosl.org/" ) == 0 ) {
        if ( href.indexOf( "product=" ) > 0 && href.indexOf( "os=" ) > 0 && href.indexOf( "lang=" ) > 0 && href.indexOf( "version=" ) > 0 ) {
            var s = (href.split( "?" )[1]).split( "&" );
            for (var i=0; i < s.length; i++ ) {
                if ( s[i].indexOf( "lang=" ) == 0 ) {
                    retVal = s[i].split( "=" )[1];
                }
            }
        }
    }
    return 'en-US';
}

function getOS( href ) {
    var retVal = "";
    if ( href.indexOf( "?" ) > 0 && href.indexOf( "http://openoffice.bouncer.osuosl.org/" ) == 0 ) {
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

function getVersion( href ) {
    var retVal = "";
    if ( href.indexOf( "?" ) > 0 && href.indexOf( "http://openoffice.bouncer.osuosl.org/" ) == 0 ) {
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

function writeJavaSelector() {
    document.write( "<form action=\"\" method=\"\" name=\"downloadSettings\"><p style=\"\">" );
    document.write( "<label for=\"cbIncludeJRE\">Include the Java JRE with this download (This option is not available for Linux DEB and Mac OSX)</label>" );
    document.write( "&nbsp;<input type=\"checkbox\" onclick=\"updateHREFs()\" checked=\"checked\" name=\"cbIncludeJRE\" id=\"cbIncludeJRE\"/>" );
    document.write( "</p>" );
    document.write( "</form>" );
}

function updateHREFs() {
  var qabuildsul = document.getElementById("qabuilds");
  var anchorsToBouncer = document.getElementsByTagName("a");

  if (document.downloadSettings.cbIncludeJRE.checked == false) {
    for (var i = 0; i < anchorsToBouncer.length; i++) {
        if ( anchorsToBouncer[i].href.indexOf( "os=linuxinteldeb" ) == -1
            && anchorsToBouncer[i].href.indexOf( "os=macosx" ) == -1
        ) {
            anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("wjre&amp;lang=","&amp;lang=");
            anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("wjre&lang=","&lang=");
        }
    }
  } else {
    for (var i = 0; i < anchorsToBouncer.length; i++) {
        if ( anchorsToBouncer[i].href.indexOf( "os=linuxinteldeb" ) == -1
            && anchorsToBouncer[i].href.indexOf( "os=macosx" ) == -1
        ) {
            //we cannot assume that it is always right, and in order to prevent wjrewjrewjre&... this (should) solve(s) it...
            anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("wjre&amp;lang=","&amp;lang=");
            anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("wjre&lang=","&lang=");
            //and now we add them :)
            anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("&amp;lang=","wjre&amp;lang=");
            anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("&lang=","wjre&lang=");
        }
    }
  }
}

function continueToDownload(uri) {
  uri=uri.replace("http://openoffice.bouncer.osuosl.org/","");
  //bonuscheck... noone gets hurt...
  if (document.downloadSettings.cbIncludeJRE.checked == false) {
    uri = uri.replace("wjre","");
  }
  document.location = "http://download.openoffice.org/contribute.html" + uri; //absolute to for use at other subdomains
}

function continueToDownloadTwo(uri) {
  uri=uri.replace("http://openoffice.bouncer.osuosl.org/","");
  //bonuscheck... noone gets hurt...
  if (document.downloadSettings.cbIncludeJRE.checked == false) {
    uri = uri.replace("wjre","");
  }
  document.location = "http://download.openoffice.org/contribute.html" + uri;
}

function openItem(itemid,uri) {
    var thisDocument = document.getElementById("downloadextendedtext");
    var thisDocument = document.getElementById(itemid);

    if ( itemid=="optionitem1" && uri.indexOf( "http://openoffice.bouncer.osuosl.org" ) > -1) {
        uri = uri.replace("http://openoffice.bouncer.osuosl.org/?","");
        uri = "http://download.openoffice.org/contribute.html?download=bouncer&" + escape( uri );
    }

    document.location = uri;

  //return false;
};

function makeDownloadLIintoButtons() {
    var downloadextendedtext = document.getElementById("downloadextendedtext");
    var liItems = downloadextendedtext.getElementsByTagName("li");

    for (var i = 0; i < liItems.length; i++) {
        var liItemsAnchors = liItems[i].getElementsByTagName("a");
        if (liItemsAnchors.length == 1) {
            var hrefcontents = liItemsAnchors[0].href;
            if (hrefcontents.search("bouncer") > -1) {
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
    alert( 'Go OOo' + uri );

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
        uri = unescape( s.split( "download=bouncer" )[1] );
        uri = "http://openoffice.bouncer.osuosl.org/?" + uri;
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
        //document.location = uri;
        return false;
    }
}
