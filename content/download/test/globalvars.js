/* This file is to maintain version information that can be used on all websites via JavaScript when including this file.
 *
 * Instead of hard coded version data please use these variables. Example:
 *
 * Wrong:   "We are proud to announce the availability of the new Apache OpenOffice 4.1.0 release."
 * Correct: "We are proud to announce the availability of the new Apache OpenOffice " + VERSION + " release."
 *
 * VERSION: Set the release version (e.g., "4.1.0") that is currently on the mirrors.
 */

// Stable release: Object that contains all following properties.
var DL = new Object();

// Stable release: General properties.
DL.VERSION			= "4.1.4";		// Release version in full format "x.y.z".
DL.VERSION_SHORT		= DL.VERSION;		// Release version in short format "x.y".
DL.MILESTONE			= "AOO414m5";		// Milestone ID (from AOO build system).
DL.BUILD			= "9788";		// Build ID (from AOO build system).
DL.SVN_REV			= "r1811857";		// SVN revision.
DL.REL_DATE			= "2017-Oct-19";	// Date of the public announced release.
DL.PREV_VERSION			= "4.1.3";		// Release of the previous version.
DL.OLDVERSION			= "3.4.1";		// Old version (last stable release of 3.x series).
DL.LEGACYVERSION		= "3.3.0";		// Old legacy version (last stable none-Apache release).

// Version can be written as "x.y" instead of "x.y.z" if z is 0.
// Example: If DL.VERSION is "4.1.0", then DL.VERSION_SHORT is "4.1".
// If last char ( 4 to 5 ) of DL.VERSION === 0 then assign only the first 3 chars ( 0 to 3 ) to DL.VERSION_SHORT.
if ( DL.VERSION.slice( 4, 5 ) === "0" )
	DL.VERSION_SHORT = DL.VERSION.substring( 0, 3 );

// Data for the <select> element "os".
				    // Value  Visible text				Not used for the options
DL.SEL_OS			= [ "win32",  "Windows (EXE)",			    	".exe",
				    "lnx64d", "Linux 64-bit (x86-64) (DEB)",	    	".tar.gz",
				    "lnx64r", "Linux 64-bit (x86-64) (RPM)",	    	".tar.gz",
				    "lnx32d", "Linux 32-bit (x86) (DEB)",	    	".tar.gz",
				    "lnx32r", "Linux 32-bit (x86) (RPM)",	    	".tar.gz",
				    "mac64",  "OS X (version >= 10.7) (DMG)",	    	".dmg",
				    "mac32",  "OS X (version <= 10.6) (DMG)",	    	".dmg",
				    "other",  "More platforms / operating systems",	"" ];

// Data for the <select> element "lang".
				    // Value	Visible text			Tool tip
DL.SEL_LANG			= [ "ast",	"Asturian",			"Asturianu",
				    "eu",	"Basque",			"Euskara",
				    "bg",	"Bulgarian",			"български език",
				    "ca",	"Catalan",			"Català",
				    "ca-XV",	"Catalan [Valencia AVL]",	"València (AVL)",
				    "ca-XR",	"Catalan [Valencia RACV]",	"València (RACV)",
				    "zh-CN",	"Chinese [simplified]",		"简体中文",
				    "zh-TW",	"Chinese [traditional]",	"正體中文",
				    "cs",	"Czech",			"Čeština",
				    "da",	"Danish",			"Dansk",
				    "nl",	"Dutch",			"Nederlands",
				    "en-GB",	"English [British]",		"English [British]",
				    "en-US",	"English [US]",			"English [US]",
				    "fi",	"Finnish",			"Suomi",
				    "fr",	"French",			"Français",
				    "gl",	"Galician",			"Galego",
				    "de",	"German",			"Deutsch",
				    "el",	"Greek",			"ελληνικά",
				    "he",	"Hebrew",			"עברית",
				    "hi",	"Hindi",			"हिन्दी",
				    "hu",	"Hungarian",			"Magyar",
				    "it",	"Italian",			"Italiano",
				    "ja",	"Japanese",			"日本語",
				    "km",	"Khmer",			"ភាសាខ្មែរ",
				    "ko",	"Korean",			"한국어",
				    "lt",	"Lithuanian",			"Lietuvių",
				    "nb",	"Norwegian [Bokmal]",		"Norsk [Bokmål]",
				    "pl",	"Polish",			"Polski",
				    "pt-BR",	"Portuguese [Brazilian]",	"Português [do Brasil]",
				    "pt",	"Portuguese [European]",	"Português [Europeu]",
				    "ru",	"Russian",			"Русский",
				    "gd",	"Scottish [Gaelic]",		"Gàidhlig",
				    "sr",	"Serbian [Cyrillic]",		"Cрпски [ћирилицом]",
				    "sk",	"Slovak",			"Slovenský jazyk [slovenčina]",
				    "sl",	"Slovenian",			"Slovenski jezik [slovenščina]",
				    "es",	"Spanish",			"Español",
				    "sv",	"Swedish",			"Svenska",
				    "ta",	"Tamil",			"தமிழ்",
				    "th",	"Thai",				"ภาษาไทย",
				    "tr",	"Turkish",			"Türkçe",
				    "vi",	"Vietnamese",			"Tiếng Việt" ];

// Data for the <select> element "ver".
				    // Value  Visible text
DL.SEL_VER			= [ "4.1.4",  "4.1.4",
				    "4.1.3",  "4.1.3",
				    "4.1.2",  "4.1.2",
				    "4.1.1",  "4.1.1",
				    "4.1.0",  "4.1.0",
				    "4.0.1",  "4.0.1",
				    "4.0.0",  "4.0.0",
				    "3.4.1",  "3.4.1",
				    "older",  "Older releases" ];

// Base URLs to the Sourceforge and Apache mirror server.
DL.SF				= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
DL.ASF				= "https://www.apache.org/dyn/aoo-closer.cgi/openoffice/";
DL.ASF_DIST			= "https://downloads.apache.org/openoffice/";
DL.ASF_ARC			= "https://archive.apache.org/dist/openoffice/";

// Only used in "download_other.js".
DL.REL_PLATFORM			= [ "Win_x86", "Linux_x86_rpm", "Linux_x86_deb", "Linux_x86-64_rpm", "Linux_x86-64_deb",
				    "MacOS_x86-64" ];
DL.REL_FULL_LANG		= [ "ast", "bg", "ca", "ca-XV", "ca-XR", "cs", "da", "de", "el", "en-GB", "en-US", "es",
				    "eu", "fi", "fr", "gd", "gl", "he", "hi", "hu", "it", "ja", "km", "ko", "lt", "nb",
				    "nl", "pl", "pt", "pt-BR", "ru", "sk", "sl", "sr", "sv", "ta", "th", "tr", "vi",
				    "zh-CN", "zh-TW" ];
DL.REL_LP_LANG			= [ "ast", "bg", "ca", "ca-XV", "ca-XR", "cs", "da", "de", "el", "en-GB", "en-US", "es",
				    "eu", "fi", "fr", "gd", "gl", "he", "hi", "hu", "it", "ja", "km", "ko", "lt", "nb",
				    "nl", "pl", "pt", "pt-BR", "ru", "sk", "sl", "sr", "sv", "ta", "th", "tr", "vi",
				    "zh-CN", "zh-TW" ];
DL.REL_SDK_LANG			= [ "en-US" ]

// The maximal number of available languages in "download_other.js".
DL.LANG_MAX			= 133;

// Beta release: Object that contains all general properties.
var DL_BETA = new Object();

// Beta Release: General properties.
DL_BETA.VERSION			= "4.1.0-beta";
DL_BETA.NAME			= "4.1.0 Beta";
DL_BETA.MILESTONE		= "AOO410m14";
DL_BETA.BUILD			= "9760";
DL_BETA.SVN_REV			= "r1573601";
DL_BETA.REL_DATE		= "2014-Mar-10";
DL_BETA.ACTIVE			= -1;		// 1 = activate download, 0 = display "coming soon", -1 = display nothing

// Only used in "all_beta.html".
DL_BETA.PLATFORM		= [ "Win_x86", "Linux_x86_rpm", "Linux_x86_deb", "Linux_x86-64_rpm", "Linux_x86-64_deb",
				    "MacOS_x86-64" ];
DL_BETA.FULL_LANG		= [ "ast", "bg", "ca", "ca-XV", "ca-XR", "cs", "da", "de", "el", "en-GB", "en-US", "es",
				    "eu", "fi", "fr", "gd", "gl", "he", "hi", "hu", "it", "ja", "km", "ko", "lt", "nb",
				    "nl", "pl", "pt", "pt-BR", "ru", "sk", "sl", "sr", "sv", "ta", "th", "tr", "vi",
				    "zh-CN", "zh-TW" ];
DL_BETA.LP_LANG			= [ "ast", "bg", "ca", "ca-XV", "ca-XR", "cs", "da", "de", "el", "en-GB", "en-US", "es",
				    "eu", "fi", "fr", "gd", "gl", "he", "hi", "hu", "it", "ja", "km", "ko", "lt", "nb",
				    "nl", "pl", "pt", "pt-BR", "ru", "sk", "sl", "sr", "sv", "ta", "th", "tr", "vi",
				    "zh-CN", "zh-TW" ];
DL_BETA.SDK_LANG		= [ "en-US" ];

// Base URLs to the Sourceforge and Apache mirror server.
DL_BETA.SOURCEFORGE		= "https://sourceforge.net/projects/openofficeorg.mirror/files/milestones/" + DL_BETA.VERSION;
DL_BETA.SOURCEFORGE		= DL_BETA.SOURCEFORGE + "/binaries/";
DL_BETA.ASF			= "https://www.apache.org/dyn/aoo-closer.cgi/openoffice/"		   + DL_BETA.VERSION;
DL_BETA.ASF_DIST		= "https://downloads.apache.org/openoffice/"				   + DL_BETA.VERSION;
DL_BETA.ASF_ARC			= "https://archive.apache.org/dist/openoffice/"				   + DL_BETA.VERSION;

// Debug: Uncomment to use different base URLs.
// var DL.PEOPLE_BASE_URL	= "http://people.apache.org/~marcus/aoo/"				   + DL.VERSION;

DL.RELEASE_MODE			= 1;

DL.LANG_ISO, DL.LANG_SEL, DL.UI_PLATFORM_NO_SUP, DL.PLATFORM_SEL, DL.VERSION_SEL, DL.UI_PLATFORM, DL.PLATFORM,
DL.PLATFORM_FULL, DL.PLATFORM_LP, DL.RELEASE_PLATFORM, DL.RELEASE_LANG, DL.REL_TEXT, DL.REL_NOTES, DL.FILENAME_FULL,
DL.FILENAME_LP, DL.EXTENSION, DL.SOURCEFORGE_BASE_URL, DL.SOURCEFORGE_PREV_URL, DL.ASF_ARC_BASE_URL, DL.ASF_ARC_PREV_URL,
DL.ASF_WIKI_URL, DL.LINK_FULL, DL.LINK_LP, DL.LINK_CHK_KEYS, DL.LINK_CHK_ASC_FULL, DL.LINK_CHK_MD5_FULL,
DL.LINK_CHK_SHA256_FULL, DL.LINK_CHK_ASC_LP, DL.LINK_CHK_MD5_LP,
DL.LINK_CHK_SHA256_LP		= "";

DL.RELEASE_PLATFORM_POS_FULL, DL.RELEASE_PLATFORM_POS_LP, DL.FILESIZE_FULL,
DL.FILESIZE_LP			= -1;

DL.SHOW_SUB_BOX			= true;
DL.ERROR			= false;
DL.ID_SUB_BOX			= "";
DL.ID_LINKS			= "";

