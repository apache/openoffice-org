/* This file is to maintain version information that can be used
   on all websites via JavaScript when including this file.

   Instead of hard coded version data please use these variables.
   Example:

   Wrong:   "We are proud to announce the availability of our new
             OpenOffice.org 3.0.0 release."
   Correct: "We are proud to announce the availability of our new
             OpenOffice.org " + VERSION + " release."

   MIRROR:  should be "bouncer" or "mirrorbrain"
   SCHEMA:  reflects the download-set naming-schema with "old" or "new"
*/

// The most recent stable release
var VERSION        = "3.3.0";
var MIRROR         = "mirrorbrain";
var SCHEMA         = "new";

// The minimal needed JRE version for the stable release
var JRE_VERSION    = "1.5";

// The previously major release
var OLD_VERSION    = "2.4.3";
var OLD_MIRROR     = "mirrorbrain";
var OLD_SCHEMA     = "old";

// The latest legacy release
var LEGACY_VERSION = "1.1.5";

// The maximal available number of languages
var LANG_MAX       = 133;

// Data for the most recent Release Candidate
var RC_NAME        = "3.3.0 RC ";
var RC_BUILD       = "3.3.0rc10";
var RC_DATE        = "20110118";
var RC_VERSION     = "OOO330m20";
var RC_NUMBER      = 10;
var RC_ACTIVE      = 1;
var RC_PPC         = 1;
var RC_FREEBSD     = 0;
var RC_FULL_LANG   = new Array( "ar","bg","bn","ca","ca-XV","cs","da","de","el","en-GB","en-US","es","et","eu","fi","fr","ga","gl","he","hu","it","ja","km","ko","lt","mk","nb","nl","om","pl","pt","pt-BR","ru","sh","sl","sr","sv","tr","vi","zh-CN","zh-TW" );
var RC_LP_LANG     = new Array( "ar","as","ast","be-BY","bg","bn","ca","ca-XV","cs","da","de","dz","el","en-GB","en-US","eo","es","et","eu","fi","fr","ga","gl","gu","he","hi","hu","id","is","it","ja","ka","km","kn","ko","ku","lt","lv","mk","ml","mr","my","nb","nl","nn","oc","om","or","pa-IN","pl","pt","pt-BR","ro","ru","sh","si","sk","sl","sr","sv","ta","te","th","tr","ug","uk","uz","vi","zh-CN","zh-TW" );
var RC_SDK_LANG    = new Array( "en-US" );
var RC_MIRROR      = "mirrorbrain";
var RC_SCHEMA      = "new";

// Data for the most recent Beta Release
var BETA_NAME      = "3.4 Beta ";
var BETA_BUILD     = "3.4beta";
var BETA_DATE      = "20110411";
var BETA_VERSION   = "OOO340m0";
var BETA_NUMBER    = 1;
var BETA_ACTIVE    = 1;
var BETA_PPC       = 0;
var BETA_FREEBSD   = 0;
var BETA_FULL_LANG = new Array( "en-US" );
var BETA_LP_LANG   = new Array( "ar","as","ast","be-BY","bg","bn","ca","ca-XV","cs","da","de","dz","el","en-GB","eo","es","et","eu","fi","fr","ga","gl","gu","he","hi","hu","id","is","it","ja","ka","km","kn","ko","ku","lt","lv","mk","ml","mr","my","nb","nl","nn","oc","om","or","pa-IN","pl","pt","pt-BR","ro","ru","sh","si","sk","sl","sr","sv","ta","te","th","tr","ug","uk","uz","vi","zh-CN","zh-TW" );
var BETA_SDK_LANG  = new Array( "en-US" );
var BETA_MIRROR    = "mirrorbrain";
var BETA_SCHEMA    = "new";

// Data for the most recent Dev Build from the release codeline
var DEV1_TEXT      = "OOO340";
var DEV1_BUILD     = "OOo-Dev 3.4";
var DEV1_VERSION   = "";
var DEV1_PPC       = 0;
var DEV1_FREEBSD   = 0;
var DEV1_FULL_LANG = new Array( "en-US" );
var DEV1_LP_LANG   = new Array( "ar","de","fr","ja","ru" );
var DEV1_SDK_LANG  = new Array( "en-US" );
var DEV1_MIRROR    = "mirrorbrain";
var DEV1_SCHEMA    = "new";

// Data for the most recent Dev Build from the unstable codeline
var DEV2_TEXT      = "DEV300";
var DEV2_BUILD     = "OOo-Dev 3.x";
var DEV2_VERSION   = "DEV300m106";
var DEV2_PPC       = 0;
var DEV2_FREEBSD   = 0;
var DEV2_FULL_LANG = new Array( "en-US" );
var DEV2_LP_LANG   = new Array( "ar","de","fr","ja","ru" );
var DEV2_SDK_LANG  = new Array( "en-US" );
var DEV2_MIRROR    = "mirrorbrain";
var DEV2_SCHEMA    = "new";

// The test release for the mirror system
var TEST_VERSION   = "3.1.0";
var TEST_MIRROR    = "mirrorbrain";
var TEST_SCHEMA    = "old";

// Exchange the variables resp. its content to switch the MirrorBrain server
var MIRROR_BOUNCER_URL      = "http://openoffice.bouncer.osuosl.org/";
var MIRROR_MIRRORBRAIN_URL  = "http://openoffice.mirrorbrain.org/";
var MIRROR_MIRRORBRAIN2_URL = "http://download.services.openoffice.org/";

// Variables to shortcut long URLs
var MIRROR_MAC_PPC_URL      = "http://ooopackages.good-day.net/pub/OpenOffice.org/contrib/macosppc/";
var MIRROR_FREEBSD32_URL    = "http://ooopackages.good-day.net/pub/OpenOffice.org/contrib/freebsdx86/";
var MIRROR_FREEBSD64_URL    = "http://ooopackages.good-day.net/pub/OpenOffice.org/contrib/freebsdx86-64/";
var MIRROR_EXT_URL          = MIRROR_MIRRORBRAIN_URL + "files/extended/";
var MIRROR_LOC_URL          = MIRROR_MIRRORBRAIN_URL + "files/localized/";
var MIRROR_STABLE_URL       = MIRROR_MIRRORBRAIN_URL + "files/stable/";
