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
DL.NL_LANG					= "sk";

// General:
l10n.dl_headline_text				= "Stiahnuť Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Stiahnuť Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Stiahnite si Apache OpenOffice pre váš operačný systém vo vašom obľúbenom jazyku a verzii";
l10n.dl_green_box_subtext1_text			= "Poskytuje Sourceforge.net - dôveryhodná stránka";
l10n.dl_green_box_subtext1_title		= "Binárne súbory Apache OpenOffice sú dostupné zo stránky Sourceforge.net - dôveryhodná stránka";
l10n.dl_green_box_subtext2_text			= "Vyberte váš obľúbený operačný systém, jazyk a verziu";
l10n.dl_green_box_subtext2_title		= "Vyberte váš obľúbený operačný systém, jazyk a verziu";
l10n.dl_green_box_selectbox_os_title		= "Vyberte váš obľúbený operačný systém";
l10n.dl_green_box_selectbox_lang_title		= "Vyberte váš obľúbený jazyk";
l10n.dl_green_box_selectbox_ver_title		= "Vyberte vašu obľúbenú verziu";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines below the 3 following variables)!
/* l10n.dl_green_box_select_box_os_values	= [ "" ]; */
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
				    		    "Linux 64-bit (x86-64) (DEB)",
						    "Linux 64-bit (x86-64) (RPM)",
						    "Linux 32-bit (x86) (DEB)",
						    "Linux 32-bit (x86) (RPM)",
						    "OS X (version >= 10.7) (DMG)",
						    "OS X (version <= 10.6) (DMG)",
						    "More platforms / operating systems" ];

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
						    "hu",	"Hungarian",				"Magyar",
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

/* l10n.dl_green_box_select_box_version_values	= [ "" ]; */
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
							"Older releases" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Pomôžte šíriť";
l10n.dl_share_light_blue_box_headline_title	= "Pomôžte šíriť Apache OpenOffice a povedzte o ňom svojím priateľom";
l10n.dl_share_light_blue_box_text_text		= "Prosím povedzte svojím priateľom o Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Pomôžte šíriť Apache OpenOffice a povedzte o ňom svojím priateľom";
l10n.dl_share_light_blue_box_blog_text		= "Official Blog";
l10n.dl_share_light_blue_box_blog_title		= "Weblog of OpenOffice.";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog of OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Prosím povedzte svojím priateľom o Apache OpenOffice cez Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Zdieľať na Facebooku";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Prosím povedzte svojím priateľom o Apache OpenOffice cez Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Zdieľať na Twitteri";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Získať Apache OpenOffice rozšírenia a slovníky";
l10n.dl_ext_blue_box_headline_title		= "Vyberte si zo širokej škály prídavných a originálnych funkcií";
l10n.dl_ext_blue_box_text_text			= "Rozšírte funkcie svojho Apache OpenOffice s veľkou a stále sa rozrastajúcou knižnicou rozšírení a slovníkov od ostatných používateľov.";
l10n.dl_ext_blue_box_text_title			= "Vyberte si zo širokej škály prídavných a originálnych funkcií";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Získať Apache OpenOffice šablóny";
l10n.dl_tlp_blue_box_headline_title		= "Vyberte si zo širokej škály prídavných a originálnych dokumentov";
l10n.dl_tlp_blue_box_text_text			= "Rozšírte kreativitu svojho Apache OpenOffice s veľkou a stále sa rozrastajúcou knižnicou šablón od ostatných používateľov.";
l10n.dl_tlp_blue_box_text_title			= "Vyberte si zo širokej škály prídavných a originálnych dokumentov";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Informácie o vydaní";
l10n.dl_nav_sysreq_text				= "Systémové požiadavky";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB voľných - Pamäť: &gt;128MB - Procesor: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo40.html";
l10n.dl_nav_license_text			= "Licencia";
l10n.dl_nav_license_title			= "Apache OpenOffice licencia";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Zdrojový kód";
l10n.dl_nav_source_title			= "Pre vývojárov a pokročilých používateľov: Získať zdrojový kód a skompilovať Apache OpenOffice od nuly.";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Príručka ku kompilácii";
l10n.dl_nav_build_title				= "Pre vývojárov a pokročilých používateľov: Príručka ako skompilovať Apache OpenOffice od nuly.";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "Pre vývojárov: Software Development Kit.";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Vývojové verzie";
l10n.dl_nav_devbuilds_title			= "Pre QA testerov: Vývojové verzie";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Dokumentácia";
l10n.dl_nav_schedule_text			= "Plány vydaní";
l10n.dl_nav_schedule_title			= "Kedy sú plánované vydania nových verzií?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Historický plán vydaní";
l10n.dl_nav_hist_schedule_title			= "Kedy boli plánované vydania starých verzií?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Inštalačné príručky";
l10n.dl_nav_inst_guide_title			= "Návody pre inštaláciu Apache OpenOffice na strojoch s Windows, macOS (OS&nbsp;X) a Linux";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Užívateľské príručky";
l10n.dl_nav_user_guide_title			= "Rozsiahle užívateľské manuály pre každodenné použitie";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java a Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Vysvetľuje čo je to Java a prečo ju používať";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Informácie o ukončení podpory";
l10n.dl_nav_eol_title				= "Informácie o vydaniach, ktoré už nie sú podporované";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Ďalšie zdroje";
l10n.dl_nav_support_text			= "Podpora";
l10n.dl_nav_support_title			= "Ak vám vyššie uvedené informácie nedali odpovede na vaše otázky: Podpora zadarmo aj platená!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Lokalizácie";
l10n.dl_nav_local_title				= "Informácie a podpora vo vašom obľúbenom jazyku";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Štatistiky stiahnutí";
l10n.dl_nav_stat_title				= "Štatistiky o počte stiahnutí a inom";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternatívne zrkadlo pre stiahnutie #1";
l10n.dl_nav_mirrors1_title			= "Použiť Sourceforge zrkadlá pre stiahnutie Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternatívne zrkadlo pre stiahnutie #2";
l10n.dl_nav_mirrors2_title			= "Použiť Apache zrkadlá pre stiahnutie Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "Porty a distribúcie tretích strán";
l10n.dl_nav_porting_title			= "Porty a distribúcie od vydavateľov tretích strán";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Archívne a staré vydania";
l10n.dl_nav_archive_title			= "Stiahnuť staré a archivované vydania";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Poznámky k vydaniu";
l10n.dl_nav_release_notes_title			= "Čo je nové, čo bolo vylepšené v Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Skontrolovať stiahnutý súbor";
l10n.dl_nav_checksum_title			= "Ako skontrolovať stiahnutý súbor pomocou podpisov a odtlačkov?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Download, Develop and Publish Free Open Source Software";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "https://www.openoffice.org/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service - Check the markup (HTML, XHTML, ...) of Web documents";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "https://www.openoffice.org/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Stiahnuť úplnú inštaláciu";
l10n.dl_full_link_title				= "Kliknite pre stiahnutie: ";
l10n.dl_langpack_link_text			= "Stiahnuť jazykový balíček";
l10n.dl_langpack_link_title			= "Kliknite pre stiahnutie: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Porty: Kliknite pre výber od vydavateľov tretích strán";
l10n.dl_full_link_porting_title			= "Kliknite pre prehliadanie stránky s portami, ktoré sú dostupné na stiahnutie od vydavateľov tretích strán";
l10n.dl_full_link_archive_text			= "Archív: Kliknite pre výber zo starých verzií";
l10n.dl_full_link_archive_title			= "Kliknite pre prehliadanie archívu starých verzií dostupných na stiahnutie";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Vydanie: ";
l10n.dl_rel_info_milestone_text			= "Míľnik ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Vydané ";
l10n.dl_rel_notes_text				= "Poznámky k vydaniu";
l10n.dl_rel_notes_title				= "Poznámky k vydaniu pre Apache OpenOffice ";

l10n.dl_headline_full_text			= "Úplná inštalácia: ";
l10n.dl_headline_langpack_text			= "Jazykový balíček: ";
l10n.dl_filesize_text				= "Veľkosť súboru ~ ";
l10n.dl_megabyte_text				= " MB";
l10n.dl_checksum_headline_text			= "Podpisy a odtlačky: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS súbor s podpisom";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC podpis pre: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 odtlačok pre: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 odtlačok pre: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 odtlačok pre: ";

l10n.dl_help_img_title				= "Aký je rozdiel medzi úplnou inštaláciou a jazykovým balíčkom?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Informácie o inštalácii";
l10n.dl_help_text				= "Čo je jazykový balíček?";
l10n.dl_help_title				= "Aký je rozdiel medzi úplnou inštaláciou a jazykovým balíčkom?";
l10n.dl_checksum_img_title			= "Ako overiť stiahnutý súbor pomocou kontrólnych súčtov?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Overenie kontrólnym súčtom";
l10n.dl_checksum_text				= "Ako overiť stiahnutý súbor?";
l10n.dl_checksum_title				= "Ako overiť stiahnutý súbor pomocou kontrólnych súčtov?";
l10n.dl_report_img_title			= "Nefunkčný odkaz pre sťahovanie? Kliknite sem pre nahlásenie.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Nefunkčný odkaz";
l10n.dl_report_text				= "Nahlásiť nefunkčný odkaz";
l10n.dl_report_title				= "Nefunkčný odkaz pre sťahovanie? Kliknite sem pre nahlásenie";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Úplná inštalácia nie je dostupná";
l10n.dl_full_link_error_title			= "Prosím vyberte iný jazyk, platformu alebo verziu.";
l10n.dl_langpack_link_error_text		= "Jazykový balíček nie je dostupný";
l10n.dl_langpack_link_error_title		= "Prosím vyberte iný jazyk, platformu alebo verziu.";

l10n.dl_error_problem_img_title			= "Vybratý súbor na stiahnutie nie je dostupný";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Chybový text";
l10n.dl_error_problem_text			= "Problém: ";
l10n.dl_error_solution_text			= "Riešenie: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " nie je dostupný pre ";
l10n.dl_error_please_select_1_text		= "Prosím vyberte verziu 4.0.1.";
l10n.dl_error_please_select_2_text		= "Prosím vyberte verziu 4.1.0 alebo novšiu.";
l10n.dl_error_please_select_3_text		= "Prosím vyberte verziu na stiahnuitie pre Windows, macOS (OS&nbsp;X) alebo Linux.";
l10n.dl_error_please_select_4_text		= "Prosím vyberte iný jazyk alebo verziu.";

l10n.dl_unknown_platform_text			= "neznámy operačný systém / platforma";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Ako nahlásiť nefunkčný odkaz pre sťahovanie?";
l10n.dl_analyze_instruction_select_text		= "<b>Vyberte vaše obľúbené</b>: Operačný systém, jazyk a verziu v nasledujúcom zelenom poli.";
l10n.dl_analyze_instruction_verify_text		= "Overte, že tieto voľby <b>stále</b> nevedú na platné odkazy na stiahnutie.";
l10n.dl_analyze_instruction_click_text		= "Kliknite na nasledujúce tlačítko v zelenom poli:";
l10n.dl_analyze_instruction_copy_text		= "Skopírujte vybraté dáta z tabuľky do schránky:";
l10n.dl_analyze_instruction_new_mail_text	= "Vytvorte nový email.";
l10n.dl_analyze_instruction_problem_text	= "<b>Popíšte problém</b> (čo nefunguje a čo očakávate).";
l10n.dl_analyze_instruction_details_text	= "Prosím tiež pridajte <b>detaily o operačnom systéme, ktorý používate</b>.";
l10n.dl_analyze_instruction_paste_text		= "Vložte skopírované dáta na koniec emailu.";
l10n.dl_analyze_instruction_only_download_text	= "Prosím <b>mail pošlite iba v prípade problémov so stiahnutím</b>, nie ak sa vám nepodarí inštalácia.";
l10n.dl_analyze_instruction_no_install_text	= "Táto webstránka nedokáže pomôcť v prípade problémov s inštaláciou.";
l10n.dl_analyze_instruction_send_mail_text	= "Konečne, <b>odošlite email</b> na: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice Development Mailing List";
l10n.dl_analyze_instruction_mailing_list_title	= "Odoslať správu do vývojárskeho mailing listu Apache OpenOffice";
l10n.dl_analyze_instruction_learn_more_text	= "Kliknite sem a zistite viac o tom, čo to mailing list je";
l10n.dl_analyze_instruction_learn_more_title	= "Zistiť viac o tom, čo je mailing list";
l10n.dl_analyze_instruction_answer_text		= "Budeme sa snažiť odpovedať, čo najskôr ako dostaneme mail a analyzujeme problém.";
l10n.dl_analyze_instruction_thanks_text		= "Ďakujeme za vašu správu.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Kliknite pre aktualizáciu tabuľky";
l10n.dl_analyze_update_button_title		= "Vložiť vybraté voľby ako hodnoty do nasledujúcej tabuľky";
l10n.dl_analyze_select_button_text		= "Kliknite pre výber tabuľky";
l10n.dl_analyze_select_button_title		= "V nasledujúcej tabuľke vyberte všetky dáta";
l10n.dl_analyze_copy_button_text		= "Skopírujte pomocou [Ctrl] + [C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Skopírovať vybraté dáta v tabuľke pomocou [ Ctrl ] + [ C ] / [ &#8984; ] + [ C ] do schránky";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text		= "Premenné prehliadača";
l10n.dl_analyze_table_values_text		= "Hodnoty";
l10n.dl_analyze_table_yes_text			= "Áno";
l10n.dl_analyze_table_no_text			= "Nie";
l10n.dl_analyze_table_stable_release_text	= "Stabilné vydanie";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;funkcie/premenné";



// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo417_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.7+Release+Notes";
l10n.dl_rel_notes_aoo416_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.6+Release+Notes";
l10n.dl_rel_notes_aoo415_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.5+Release+Notes";
l10n.dl_rel_notes_aoo414_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.4+Release+Notes";
l10n.dl_rel_notes_aoo413_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.3+Release+Notes";
l10n.dl_rel_notes_aoo412_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.2+Release+Notes";
l10n.dl_rel_notes_aoo411_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.1+Release+Notes";
l10n.dl_rel_notes_aoo410_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes";
l10n.dl_rel_notes_aoo401_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes";
l10n.dl_rel_notes_aoo400_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0+Release+Notes";
l10n.dl_help_link				= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link				= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link				= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link				= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/other-341.html";
