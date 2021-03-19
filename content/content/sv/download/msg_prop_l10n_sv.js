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
DL.NL_LANG					= "sv";

// General:
l10n.dl_headline_text				= "Apache OpenOffice Download";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Ladda ner Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Ladda ner Apache OpenOffice till ditt favoritoperativsystem, språk och version";
l10n.dl_green_box_subtext1_text			= "Hosted av Sourceforge.net - En berodd webbplats";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice binära filer är hostade av Sourceforge.net - En pålitlig webbplats";
l10n.dl_green_box_subtext2_text			= "Välj ditt favoritoperativsystem, språk och version";
l10n.dl_green_box_subtext2_title		= "Välj ditt favoritoperativsystem, språk och version";
l10n.dl_green_box_selectbox_os_title		= "Välj ditt favoritoperativsystem";
l10n.dl_green_box_selectbox_lang_title		= "Välj ditt favoritspråk";
l10n.dl_green_box_selectbox_ver_title		= "Välj din favoritrelease";

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
l10n.dl_green_box_select_box_version_values	= [ "4.1.9",
												"4.1.8",
												"4.1.7",
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
l10n.dl_share_light_blue_box_headline_text	= "Berätta för andra";
l10n.dl_share_light_blue_box_headline_title	= "Hjälp oss sprida information och berätta för dina vänner om Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Berätta för dina vänner om Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Hjälp oss sprida information och berätta för dina vänner om Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Officiell Blogg";
l10n.dl_share_light_blue_box_blog_title		= "Weblog för OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Berätta för dina vänner om Apache OpenOffice via Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Berätta för dina vänner om Apache OpenOffice via Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Hämta Apache OpenOffice tillägg och ordböcker";
l10n.dl_ext_blue_box_headline_title		= "Välj från ett brett utbud av utökade och individuella funktioner";
l10n.dl_ext_blue_box_text_text			= "Utöka dina Apache OpenOffice-funktioner med ett stort och växande bibliotek med tillägg och ordböcker från andra användare.";
l10n.dl_ext_blue_box_text_title			= "Välj från ett brett utbud av utökade och individuella funktioner";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Hämta Apache OpenOffice mallar";
l10n.dl_tlp_blue_box_headline_title		= "Välj från ett brett utbud av utökade och individuella dokument";
l10n.dl_tlp_blue_box_text_text			= "Utöka din Apache OpenOffice-kreativitet med ett stort och växande bibliotek med mallar från andra användare.";
l10n.dl_tlp_blue_box_text_title			= "Välj från ett brett utbud av utökade och individuella dokument";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Versionsinformation";
l10n.dl_nav_sysreq_text				= "Systemkrav";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB free - Memory: &gt;128MB - Processor: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Licens";
l10n.dl_nav_license_title			= "Apache OpenOffice Licens";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Källa";
l10n.dl_nav_source_title			= "För utvecklare och kvalificerade användare: Få möjligeheten att bygga OpenOffive från grunden";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Bygguide";
l10n.dl_nav_build_title				= "För utvecklare och kvalificerade användare: Handledning till att bygga OpenOffice från grunden";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Utvecklingskit (SDK)";
l10n.dl_nav_sdk_title				= "För utvecklare: Utvecklingskit";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Utvecklingsversioner";
l10n.dl_nav_devbuilds_title			= "För QA-volontärer: Utvecklingsversioner";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Dokumentation";
l10n.dl_nav_schedule_text			= "Releaseschema";
l10n.dl_nav_schedule_title			= "När är nya versioner planerade?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Tidigare releaseschema";
l10n.dl_nav_hist_schedule_title			= "När var tidigare versioner planerade?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Installationsguide";
l10n.dl_nav_inst_guide_title			= "Instruktion för installation av Apache OpenOffice på Windows-, macOS- (OS&nbsp;X) and Linuxdatorer";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Användarguide";
l10n.dl_nav_user_guide_title			= "Omfattande användarmaualer för dagligt bruk";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java och Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Förklaringar varför använda Java och vad det är";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Inte-längre-möjligt-information";
l10n.dl_nav_eol_title				= "Information om versioner som har slutat stödjas";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Ytterligare resurser";
l10n.dl_nav_support_text			= "Support";
l10n.dl_nav_support_title			= "Om informationen ovan inte svarade på din fråga: Gratis och avgiftsbelagt support!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Lokaliseringar";
l10n.dl_nav_local_title				= "Information och support på ditt favoritspråk";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Ladda ner statistik";
l10n.dl_nav_stat_title				= "Nedladdning och annan statistik";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternativ nerladdningslänk #1";
l10n.dl_nav_mirrors1_title			= "Använd Sourceforge-speglingar för att ladda ner Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternativ nerladdningslänk #2";
l10n.dl_nav_mirrors2_title			= "Använd Apache-speglingar för att ladda ner Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "Portningar från tredjepart och distribution";
l10n.dl_nav_porting_title			= "Portningar och distribution från tredjepartsförsäljare";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Arkiverade och äldre releaser";
l10n.dl_nav_archive_title			= "Hämta äldre och arkiverade releaser";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Versionsanteckningar";
l10n.dl_nav_release_notes_title			= "Vad är nytt, vad har förbättrats i Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Verifiera nerladdningsfien";
l10n.dl_nav_checksum_title			= "Hur verifierar du den nedladdade filen med signaturer och haschar?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Hämta, utveckla och publicera gratis öppen källkodsprogramvara";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "https://www.openoffice.org/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C Markup Valideringsservice - Kontrollera markeringen (HTML, XHTML, ...) av webbdokument";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "https://www.openoffice.org/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Ladda ner full installation";
l10n.dl_full_link_title				= "Klicka för nerladning: ";
l10n.dl_langpack_link_text			= "Ladda ner språkpaket";
l10n.dl_langpack_link_title			= "Klicka för nerladning: ";
l10n.dl_win_info_text				= "Important hint: 32-bit, 64-bit and Java - What to choose?";
l10n.dl_win_info_title				= "At the moment we offer a 32-bit (x86) version for Windows. However, it installs and runs also on Windows 64-bit (x86-64).\nPlease note that you may need Java in 32-bit for additional functionality which must then be selected only once (see menu 'Tools - Options - OpenOffice - Java').\n\nFor more information about OpenOffice and Java please see the link on the right 'Java and Apache OpenOffice'.";
l10n.dl_linux_info_text				= "Important hint: RPM vs. DEB = What to choose?";
l10n.dl_linux_info_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
//l10n.dl_mac_info_text				= "macOS : Text";
//l10n.dl_mac_info_title			= "macOS : Title";

l10n.dl_full_link_porting_text			= "Portning: Klicka för val av tredjepartsåterförsäljare";
l10n.dl_full_link_porting_title			= "Klicka för att bläddra till portningssidan och ladda ner från tredjepartleverantörer";
l10n.dl_full_link_archive_text			= "Arkiv: Klicka för att välja bland tidigare versioner";
l10n.dl_full_link_archive_title			= "Klicka för att bläddra i arkivet och ladda ner tidigare versioner";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Version: ";
l10n.dl_rel_info_milestone_text			= "Milsten ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Lanserad ";
l10n.dl_rel_notes_text				= "Versionsnoteringar";
l10n.dl_rel_notes_title				= "Versionsnoteringar för Apache OpenOffice ";

l10n.dl_headline_full_text			= "Full installation: ";
l10n.dl_headline_langpack_text			= "Språkpaket: ";
l10n.dl_filesize_text				= "Filstorlek ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Signaturer och hashar: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS signaturfil";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC signatur för: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 hach för: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 hash för: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 hash för: ";

l10n.dl_help_img_title				= "Vad är skillnaden mellan fullständig installation och språkpaket?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Installationsinfo";
l10n.dl_help_text				= "Vad är ett språkpaket?";
l10n.dl_help_title				= "Vad är skillnaden mellan fullständig installation och språkpaket?";
l10n.dl_checksum_img_title			= "Hur kontrollerar du den nedladdade filen med checksummor?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Checksumkontrollera";
l10n.dl_checksum_text				= "Hur kontrollerar du nedladdningen?";
l10n.dl_checksum_title				= "Hur kontrollerar du den nedladdade filen med checksummor?";
l10n.dl_report_img_title			= "Bruten nedladdningslänk? Klicka här för att rapportera.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Bruten länk";
l10n.dl_report_text				= "Rapportera bruten länk";
l10n.dl_report_title				= "Bruten nedladdningslänk? Klicka här för att rapportera.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Ingen full installation tillgänglig";
l10n.dl_full_link_error_title			= "Vänligen välj ett annat språk, plattform eller version.";
l10n.dl_langpack_link_error_text		= "Inger språkpaket tillgängligt";
l10n.dl_langpack_link_error_title		= "Vänligen välj ett annat språk, plattform eller version.";

l10n.dl_error_problem_img_title			= "Den valda nedladdningsfilen är inte tillgänglig";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Errortext";
l10n.dl_error_problem_text			= "Problem: ";
l10n.dl_error_solution_text			= "Lösning: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " är inte tillgänglig för ";
l10n.dl_error_please_select_1_text		= "Vänligen välj version 4.0.1.";
l10n.dl_error_please_select_2_text		= "Vänligen välj version 4.1.0 eller nyare.";
l10n.dl_error_please_select_3_text		= "Vänligen välj nedladdning för Windows, macOS (OS&nbsp;X) eller Linux.";
l10n.dl_error_please_select_4_text		= "Vänligen välj ett annat språk eller version.";

l10n.dl_unknown_platform_text			= "okänt operativsystem / plattform";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "How to report a broken download link?";
l10n.dl_analyze_instruction_select_text		= "<b>Select your favorites</b>: Operating system, language and version in the green below.";
l10n.dl_analyze_instruction_verify_text		= "Verify that these options <b>still do not</b> lead to valid download links.";
l10n.dl_analyze_instruction_click_text		= "Click on the button below the green box: ";
l10n.dl_analyze_instruction_copy_text		= "Copy the selected table data into the clipboard: ";
l10n.dl_analyze_instruction_new_mail_text	= "Create a new mail.";
l10n.dl_analyze_instruction_problem_text	= "<b>Write a problem description</b> (what does not work and what do you expect).";
l10n.dl_analyze_instruction_details_text	= "Please also add <b>details about the used operating system</b>.";
l10n.dl_analyze_instruction_paste_text		= "Paste the copied data at the end of the mail.";
l10n.dl_analyze_instruction_only_download_text	= "Please <b>send the mail only in case of download problems</b> and not if you cannot install.";
l10n.dl_analyze_instruction_no_install_text	= "This webpage cannot help at all with installation problems.";
l10n.dl_analyze_instruction_send_mail_text	= "Finally, <b>send the mail</b> to the: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice Development Mailing List";
l10n.dl_analyze_instruction_mailing_list_title	= "Send the report to the Apache OpenOffice developers mailing list";
l10n.dl_analyze_instruction_learn_more_text	= "Click here to learn more about what a mailing list is";
l10n.dl_analyze_instruction_learn_more_title	= "Learn more about what a mailing list is";
l10n.dl_analyze_instruction_answer_text		= "We will try to answer as soon as we get the mail and the problem analyzed.";
l10n.dl_analyze_instruction_thanks_text		= "Thank you for your report.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Click to update the table";
l10n.dl_analyze_update_button_title		= "Put the selected options as values into the table below";
l10n.dl_analyze_select_button_text		= "Click to select the table";
l10n.dl_analyze_select_button_title		= "Select all data in the table below";
l10n.dl_analyze_copy_button_text		= "Copy with [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Copy the selected table data via [ Ctrl ] + [ C ] or [ &#8984; ] + [ C ] into the clipboard";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text		= "Browser variables";
l10n.dl_analyze_table_values_text		= "Values";
l10n.dl_analyze_table_yes_text			= "Yes";
l10n.dl_analyze_table_no_text			= "No";
l10n.dl_analyze_table_stable_release_text	= "Stable Release";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;functions/variables";



// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo419_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.9+Release+Notes";
l10n.dl_rel_notes_aoo418_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.8+Release+Notes";
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
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/archive.html";
