/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:   "Download Apache OpenOffice"
 * Correct: l10n.dl_green_box_headline_text
 */



// Object that contains all following variables.
var l10n = new Object();

// The following variables are used in the "index.html" file:

// Set a specific language ISO code to force to assemble a download link with a certain language.
DL.NL_LANG					= "hu";

// General:
l10n.dl_headline_text						= "Apache OpenOffice letöltése";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text				= "Apache OpenOffice letöltése";
l10n.dl_green_box_headline_title			= "Töltse le az Apache OpenOffice programot a választott operációs rendszer, nyelv és verzió szerint";
l10n.dl_green_box_subtext1_text				= "A Sourceforge.net hostolásával - Egy megbízható forrás";
l10n.dl_green_box_subtext1_title			= "Az Apache OpenOffice bináris fájlokat a Sourceforge.net hostolja - Egy megbízható forrás";
l10n.dl_green_box_subtext2_text				= "Válassza ki az operációs rendszert, nyelvet és verziót";
l10n.dl_green_box_subtext2_title			= "Válassza ki az operációs rendszert, nyelvet és verziót";
l10n.dl_green_box_selectbox_os_title		= "Válassza ki az operációs rendszert";
l10n.dl_green_box_selectbox_lang_title		= "Válassza ki a nyelvet";
l10n.dl_green_box_selectbox_ver_title		= "Válassza ki a verziót";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines above the 3 following variables)!
// Leaving as default will result in the download box for any OS, language, or release shown on:
// http://www.openoffice.org/download/index.html
// Custominzations to each of these arrays will require ongoing maintenance for new releases.
// l10n.dl_green_box_select_box_os_values	= [ "" ];
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
												"Linux 64-bit (x86-64) (DEB)",
												"Linux 64-bit (x86-64) (RPM)",
												"Linux 32-bit (x86) (DEB)",
												"Linux 32-bit (x86) (RPM)",
												"OS X (version >= 10.7) (DMG)",
												"OS X (version <= 10.6) (DMG)",
												"További platformok / operációs rendszerek" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "" ];

/* l10n.dl_green_box_select_box_lang_values_custom = [ "" ]; */
						    // Value	Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom = [ "ast",	"Asturian",				"Asturianu",
						    "eu",	"Basque",				"Euskara",
						    "bg",	"Bulgarian",				"български език",
						    "ca",	"Catalan",				"Català",
						    "ca-XV",	"Catalan [Valencia AVL]",		"València (AVL)",
						    "ca-XR",	"Catalan [Valencia RACV]",		"València (RACV)",
						    "zh-CN",	"Chinese [simplified]",			"简体中文",
						    "zh-TW",	"Chinese [traditional]",		"正體中文",
						    "cs",	"Czech",				"Čeština",
						    "da",	"Danish",				"Dansk",
						    "nl",	"Dutch",				"Nederlands",
						    "en-GB",	"English [British]",			"English [British]",
						    "en-US",	"English [US]",				"English [US]",
						    "fi",	"Finnish",				"Suomi",
						    "fr",	"French",				"Français",
						    "gl",	"Galician",				"Galego",
						    "de",	"German",				"Deutsch",
						    "el",	"Greek",				"ελληνικά",
						    "he",	"Hebrew",				"עברית",
						    "hi",	"Hindi",				"हिन्दी",
						    "hu",	"Magyar",				"Magyar",
						    "it",	"Italian",				"Italiano",
						    "ja",	"Japanese",				"日本語",
						    "km",	"Khmer",				"ភាសាខ្មែរ",
						    "ko",	"Korean",				"한국어",
						    "lt",	"Lithuanian",				"Lietuvių",
						    "nb",	"Norwegian [Bokmal]",			"Norsk [Bokmål]",
						    "pl",	"Polish",				"Polski",
						    "pt-BR",	"Portuguese [Brazilian]",		"Português [do Brasil]",
						    "pt",	"Portuguese [European]",		"Português [Europeu]",
						    "ru",	"Russian",				"Русский",
						    "gd",	"Scottish [Gaelic]",			"Gàidhlig",
						    "sr",	"Serbian [Cyrillic]",			"Cрпски [ћирилицом]",
						    "sk",	"Slovak",				"Slovenský jazyk [slovenčina]",
						    "sl",	"Slovenian",				"Slovenski jezik [slovenščina]",
						    "es",	"Spanish",				"Español",
						    "sv",	"Swedish",				"Svenska",
						    "ta",	"Tamil",				"தமிழ்",
						    "th",	"Thai",					"ภาษาไทย",
						    "tr",	"Turkish",				"Türkçe",
						    "vi",	"Vietnamese",				"Tiếng Việt" ];

// l10n.dl_green_box_select_box_version_values	= [ "" ]; 
l10n.dl_green_box_select_box_version_values	= [ "4.1.7",
												"4.1.6",
												"4.1.5",
												"4.1.4",
												"4.1.3",
												"4.1.2",
												"4.1.1",
												"4.1.0",
												"4.0.1",
												"4.0.0",
												"3.4.1",
												"Korábbi kiadások" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Segítsen megismertetni a programot";
l10n.dl_share_light_blue_box_headline_title	= "Segítsen megismertetni a programot, beszéljen barátainak az Apache OpenOffice-ról";
l10n.dl_share_light_blue_box_text_text		= "Beszéljen barátainak az Apache OpenOffice-ról:";
l10n.dl_share_light_blue_box_text_title		= "Segítsen megismertetni a programot, beszéljen barátainak az Apache OpenOffice-ról";
l10n.dl_share_light_blue_box_blog_text		= "Hivatalos blog";
l10n.dl_share_light_blue_box_blog_title		= "Az OpenOffice blogja.";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Az OpenOffice blogja";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Beszéljen barátainak az Apache OpenOffice-ról a Facebookon";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Ossza meg Facebookon";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Beszéljen barátainak az Apache OpenOffice-ról a Twitteren";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Ossza meg Twitteren";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Apache OpenOffice kiegészítők és szótárak";
l10n.dl_ext_blue_box_headline_title		= "Böngésszen a további kiegészítők széles választékában";
l10n.dl_ext_blue_box_text_text			= "Bővítse az Apache OpenOffice program funkcióit más felhasználók által írt kiterjesztések és szótárak egyre növekvő gyűjteményéből.";
l10n.dl_ext_blue_box_text_title			= "Böngésszen a további funkciók széles választékában";
l10n.dl_ext_blue_box_text_href			= "http://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Apache OpenOffice sablonok";
l10n.dl_tlp_blue_box_headline_title		= "Böngésszen a további dokumentumok széles választékában";
l10n.dl_tlp_blue_box_text_text			= "Bővítse az Apache OpenOffice program kreativitását a más felhasználók által írt sablonok egyre növekvő gyűjteményéből.";
l10n.dl_tlp_blue_box_text_title			= "Böngésszen a további dokumentumok széles választékában";
l10n.dl_tlp_blue_box_text_href			= "http://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Kiadási információk";
l10n.dl_nav_sysreq_text				= "Rendszerkövetelmények";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB szabad hely - Memória: &gt;128MB - Processzor: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Licensz";
l10n.dl_nav_license_title			= "Apache OpenOffice licensz";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Forrás";
l10n.dl_nav_source_title			= "Fejlesztőknek és profi felhasználóknak: Forrás az Apache OpenOffice nulláról történő felépítéséhez.";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Fejlesztői útmutató";
l10n.dl_nav_build_title				= "Fejlesztőknek és profi felhasználóknak: HogyanKell útmutató az Apache OpenOffice nulláról történő felépítéséhez.";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Szoftverfejlesztő készlet (SDK)";
l10n.dl_nav_sdk_title				= "Fejlesztőknek: Szoftverfejlesztő készlet.";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Fejlesztések";
l10n.dl_nav_devbuilds_title			= "Minőségbiztosítási önkénteseknek: fejlesztések";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Dokumentáció";
l10n.dl_nav_schedule_text			= "Kiadási előjegyzések";
l10n.dl_nav_schedule_title			= "Mikorra vannak tervezve az új kiadások?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Történelmi kiadási előjegyzések";
l10n.dl_nav_hist_schedule_title			= "Mikorra voltak tervezve a korábbi kiadások?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Telepítési útmutatók";
l10n.dl_nav_inst_guide_title			= "Útmutatók az Apache OpenOffice Windows, Linux és Mac OS rendszerekre történő telepítéséhez";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Felhasználói útmutatók";
l10n.dl_nav_user_guide_title			= "Átfogó használati útmutatók a mindennapos használatra";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "A Java és az Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Magyarázat, miért kellene használni és mi is az a Java";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Élettartam információk";
l10n.dl_nav_eol_title				= "Információk az életidejüket kitöltött kiadásokról";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "További anyagok";
l10n.dl_nav_support_text			= "Támogatás";
l10n.dl_nav_support_title			= "Amennyiben a fenti információ nem válaszolta meg a kérdéseit: Ingyenes és fizetős támogatás!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Fordítások";
l10n.dl_nav_local_title				= "Információ és támogatás az Ön által választott nyelven";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Letöltési mutatók";
l10n.dl_nav_stat_title				= "Letöltési és egyéb statisztikák";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternatív letöltési helyek #1";
l10n.dl_nav_mirrors1_title			= "SourceForge szervere használata az Apache OpenOffice letöltéséhez";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternatív letöltési helyek #2";
l10n.dl_nav_mirrors2_title			= "Apache szerver használata az Apache OpenOffice letöltéséhez";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "Harmadik féltől származó helyek és kiadások";
l10n.dl_nav_porting_title			= "Harmadik féltől származó helyek és kiadások";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Archivált és örökölt kiadások";
l10n.dl_nav_archive_title			= "Archivált és örökölt kiadások letöltése";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Kiadási megjegyzések";
l10n.dl_nav_release_notes_title			= "Újdonságok, fejlesztések az Apache OpenOffice programban";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Letöltött fájl ellenőrzése";
l10n.dl_nav_checksum_title			= "Hogyan ellenőrízheti a letöltött fájl aláírások és hash segítségével?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "SourceForge - Töltsön le, fejlesszen és publikáljon ingyenes, nyílt forráskódú szoftvereket";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "https://www.openoffice.org/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "SourceForge";
l10n.dl_img_w3c_title				= "W3C jelzés érvényesítő szolgáltatás - Ellenőrizze a weboldal formátumát (HTML, XHTML, ...)";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "https://www.openoffice.org/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C érvényesítő";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Teljes telepítő letöltése";
l10n.dl_full_link_title				= "Letöltés: ";
l10n.dl_langpack_link_text			= "Nyelvi csomag letöltése";
l10n.dl_langpack_link_title			= "Letöltés: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Porting: Kattintson ide harmadik féltől való letöltéshez";
l10n.dl_full_link_porting_title			= "Kattintson ide a weboldal eléréséhez és a harmadik féltől történő letöltéshez";
l10n.dl_full_link_archive_text			= "Archívum: Kattintson ide az örökölt kiadásokból való választáshoz";
l10n.dl_full_link_archive_title			= "Kattintson ide az archívumban való böngészéshez és örökölt kiadás letöltéséhez";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Kiadás: ";
l10n.dl_rel_info_milestone_text			= "Mérföldkő ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Kiadási dátum ";
l10n.dl_rel_notes_text				= "Kiadási megjegyzések";
l10n.dl_rel_notes_title				= "Apache OpenOffice kiadási megjegyzések. Verzió: ";

l10n.dl_headline_full_text			= "Teljes telepítő: ";
l10n.dl_headline_langpack_text			= "Nyelvi csomag: ";
l10n.dl_filesize_text				= "Fájl mérete ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Aláírások és hash: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS aláírási fájl";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC aláírás: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 hash: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 hash: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 hash: ";

l10n.dl_help_img_title				= "Mi a különbség a teljes telepítő és a nyelvi csomag között?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Telepítési információ";
l10n.dl_help_text				= "Mi az a nyelvi csomag?";
l10n.dl_help_title				= "Mi a különbség a teljes telepítő és a nyelvi csomag között?";
l10n.dl_checksum_img_title			= "Hogyan ellenőrizze a letöltött fájlt ellenőrző összeggel?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Ellenőrzés";
l10n.dl_checksum_text				= "Hogyan ellenőrizze a letöltött fájlt?";
l10n.dl_checksum_title				= "Hogyan ellenőrizze a letöltött fájlt ellenőrző összeggel?";
l10n.dl_report_img_title			= "Hibás letöltési hivatkozás? Kattintson ide a jelentéséhez!";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Hibás hivatkozás";
l10n.dl_report_text				= "Hibás hivatkozás jelentése";
l10n.dl_report_title				= "Hibás letöltési hivatkozás? Kattintson ide a jelentéséhez!";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Teljes telepítő nem érhető el";
l10n.dl_full_link_error_title			= "Kérem válasszon másik nyelvet, operációs rendszert vagy verziót!";
l10n.dl_langpack_link_error_text		= "Nyelvi csomag nem érhető el";
l10n.dl_langpack_link_error_title		= "Kérem válasszon másik nyelvet, operációs rendszert vagy verziót!";

l10n.dl_error_problem_img_title			= "A választott fájl nem elérhető letöltésre";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Hiba szövege";
l10n.dl_error_problem_text			= "Probléma: ";
l10n.dl_error_solution_text			= "Megoldás: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " nem érhető el ";
l10n.dl_error_please_select_1_text		= "Kérem válassza a 4.0.1 verziót!";
l10n.dl_error_please_select_2_text		= "Kérem válassza a 4.0.1 vagy annál újabb verziót!";
l10n.dl_error_please_select_3_text		= "Kérem válasszon Windows, macOS (OS;nbsp;X) vagy Linux letöltést!";
l10n.dl_error_please_select_4_text		= "Kérem válasszon másik nyelvet vagy verziót!";

l10n.dl_unknown_platform_text			= "ismeretlen operációs rendszer / platform";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Hogyan jelentsen egy nem működő letöltési hivatkozást?";
l10n.dl_analyze_instruction_select_text		= "<b>Válassza ki</b>: az Önnek megfelelő operációs rendszert, nyelvet és verziót a zöld legördülő listákból.";
l10n.dl_analyze_instruction_verify_text		= "Győződjön meg róla, hogy ezek a beállítások <b>még mindig nem</b> állnak össze érvényes letöltési hivatkozássá.";
l10n.dl_analyze_instruction_click_text		= "Kattintson a zöld keret alatti gombra: ";
l10n.dl_analyze_instruction_copy_text		= "Másolja a kiválasztott táblázat adatait a vágólapra: ";
l10n.dl_analyze_instruction_new_mail_text	= "Hozzon létre egy új emailt.";
l10n.dl_analyze_instruction_problem_text	= "<b>Írjon hibabejelentést</b> (mi nem működik és hogyan kellene működnie Ön szerint).";
l10n.dl_analyze_instruction_details_text	= "Írjon részleteket <b>az ön által használt operációs rendszerről</b>.";
l10n.dl_analyze_instruction_paste_text		= "Illessze a vágólapra helyezett táblázat adatait az email végére.";
l10n.dl_analyze_instruction_only_download_text	= "<b>Csak letöltési probléma esetén küldjön emailt</b>, ne telepítési hibánál.";
l10n.dl_analyze_instruction_no_install_text	= "Telepítési problémákkal kapcsolatban ez az oldal egyáltalán nem tud segítségére lenni.";
l10n.dl_analyze_instruction_send_mail_text	= "Végezetül pedig, <b>küldjön az emailt</b> az: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice fejlesztői levelezési listájára";
l10n.dl_analyze_instruction_mailing_list_title	= "Jelentés küldése az Apache OpenOffice fejlesztői levelezési listájára";
l10n.dl_analyze_instruction_learn_more_text	= "Kattintson ide, hogy többet tudjon meg a levelezési listákról";
l10n.dl_analyze_instruction_learn_more_title	= "Tudjon meg többet a levelezési listákról";
l10n.dl_analyze_instruction_answer_text		= "Megpróbálunk válaszolni, ahogy az emailt megkaptuk és a problémát elemeztük.";
l10n.dl_analyze_instruction_thanks_text		= "Hibajelentését köszönjük!";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Kattintson a táblázat frissítéséhez";
l10n.dl_analyze_update_button_title		= "Helyezze a választott opciókat értékként az alábbi táblázatba";
l10n.dl_analyze_select_button_text		= "Kattintson a tábla kiválasztásához";
l10n.dl_analyze_select_button_title		= "Válassza ki az alábbi tábla összes adatát";
l10n.dl_analyze_copy_button_text		= "Másolás [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Másolja a kiválasztott tábla adatait a [ Ctrl ] + [ C ] vagy [ &#8984; ] + [ C ] billentyűkkel a vágólapra";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text		= "Böngésző változók";
l10n.dl_analyze_table_values_text		= "Értékek";
l10n.dl_analyze_table_yes_text			= "Igen";
l10n.dl_analyze_table_no_text			= "Nem";
l10n.dl_analyze_table_stable_release_text	= "Stabil kiadás";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;függvények/változók";

// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo417_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.7+Release+Notes";
l10n.dl_rel_notes_aoo416_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.6+Release+Notes";
l10n.dl_rel_notes_aoo415_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.5+Release+Notes";
l10n.dl_rel_notes_aoo414_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.4+Release+Notes";
l10n.dl_rel_notes_aoo413_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.3+Release+Notes";
l10n.dl_rel_notes_aoo412_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.2+Release+Notes";
l10n.dl_rel_notes_aoo411_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=44995866";
l10n.dl_rel_notes_aoo410_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes";
l10n.dl_rel_notes_aoo401_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes";
l10n.dl_rel_notes_aoo400_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0+Release+Notes";
l10n.dl_help_link				= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link				= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link				= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link				= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/other-341.html";
