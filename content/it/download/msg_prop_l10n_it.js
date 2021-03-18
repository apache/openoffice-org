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
DL.NL_LANG					= "it";

// General:
l10n.dl_headline_text				= "Download Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Download Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Scarica Apache OpenOffice scegliendo sistema operativo, lingua e versione";
l10n.dl_green_box_subtext1_text			= "Download ufficiale, dai server di Sourceforge";
l10n.dl_green_box_subtext1_title		= "I file ufficiali di OpenOffice sono serviti dai mirror di Sourceforge.net";
l10n.dl_green_box_subtext2_text			= "Selezionare sistema operativo, lingua e versione";
l10n.dl_green_box_subtext2_title		= "Selezionare sistema operativo, lingua e versione";
l10n.dl_green_box_selectbox_os_title		= "Selezionare il sistema operativo";
l10n.dl_green_box_selectbox_lang_title		= "Selezionare la lingua";
l10n.dl_green_box_selectbox_ver_title		= "Selezionare la versione";

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
//						    Value	Visible text				Tool tip
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
						    "it",	"Italiano",				"Italiano",
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
l10n.dl_share_light_blue_box_headline_text	= "Parlate di OpenOffice";
l10n.dl_share_light_blue_box_headline_title	= "Condividete OpenOffice con i vostri amici";
l10n.dl_share_light_blue_box_text_text		= "Parlate ai vostri amici di Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Aiutateci a diffondere Apache OpenOffice parlandone ai vostri amici";
l10n.dl_share_light_blue_box_blog_text		= "Official Blog";
l10n.dl_share_light_blue_box_blog_title		= "Weblog of OpenOffice.";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog of OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Parlate di OpenOffice ai vostri amici su Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Condividi su Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Parlate di OpenOffice ai vostri amici su Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Condividi su Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Estensioni e dizionari per Apache OpenOffice";
l10n.dl_ext_blue_box_headline_title		= "Funzionalità aggiuntive per il programma";
l10n.dl_ext_blue_box_text_text			= "Per estendere OpenOffice con un'ampia gamma di funzioni aggiuntive disponibili come estensioni";
l10n.dl_ext_blue_box_text_title			= "Funzionalità aggiuntive per il programma";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Modelli per Apache OpenOffice";
l10n.dl_tlp_blue_box_headline_title		= "Modelli di documento aggiuntivi";
l10n.dl_tlp_blue_box_text_text			= "Per usufruire di una vasta scelta di modelli di documento per OpenOffice in varie lingue.";
l10n.dl_tlp_blue_box_text_title			= "Modelli di documento aggiuntivi";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Informazioni";
l10n.dl_nav_sysreq_text				= "Requisiti di sistema";
l10n.dl_nav_sysreq_title			= "Disco: ~300MB free - Memoria: &gt;128MB - Processore: &gt;500MHz - OS: Win, Linux, Mac OS, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo40.html";
l10n.dl_nav_license_text			= "Licenza";
l10n.dl_nav_license_title			= "Licenza di Apache OpenOffice";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Codice sorgente";
l10n.dl_nav_source_title			= "Per sviluppatori ed esperti: compilate Apache OpenOffice dal codice sorgente.";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Guida alla compilazione";
l10n.dl_nav_build_title				= "Per sviluppatori ed esperti: compilate Apache OpenOffice dal codice sorgente.";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "Per sviluppatori: Software Development Kit.";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Development Builds";
l10n.dl_nav_devbuilds_title			= "For QA volunteers: Development Builds";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Documentation";
l10n.dl_nav_schedule_text			= "Release Schedules";
l10n.dl_nav_schedule_title			= "When are new releases planned?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Historic Release Schedule";
l10n.dl_nav_hist_schedule_title			= "When were old releases planned?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Installation Guides";
l10n.dl_nav_inst_guide_title			= "Instructions for installing Apache OpenOffice on Windows, Linux and Mac OS machines";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "User Guides";
l10n.dl_nav_user_guide_title			= "Extensive user manuals for every day use";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java and Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Explains why to use Java and what it is";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "End-Of-Life Information";
l10n.dl_nav_eol_title				= "Information about releases that have reached End-Of-Life status";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Additional Resources";
l10n.dl_nav_support_text			= "Support";
l10n.dl_nav_support_title			= "If the information above did not answer your question: Free and paid support!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Localizations";
l10n.dl_nav_local_title				= "Information and support in your favorite language";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Download Statistics";
l10n.dl_nav_stat_title				= "Download and other statistics";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternative download mirrors #1";
l10n.dl_nav_mirrors1_title			= "Use Apache mirrors to download Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternative download mirrors #2";
l10n.dl_nav_mirrors2_title			= "Use Apache mirrors to download Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "3rd party ports and distributions";
l10n.dl_nav_porting_title			= "Ports and distributions from 3rd party vendors";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Archived and legacy releases";
l10n.dl_nav_archive_title			= "Download legacy and archived releases";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Caratteristiche e funzionalità";
l10n.dl_nav_release_notes_title			= "Novità e miglioramenti dell'ultima versione";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Verifica i file scaricati";
l10n.dl_nav_checksum_title			= "Come controllare firme e checksum dei file scaricati";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Download, Develop and Publish Free Open Source Software";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service - Check the markup (HTML, XHTML, ...) of Web documents";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Scarica versione completa (consigliato)";
l10n.dl_full_link_title				= "Fare clic per scaricare: ";
l10n.dl_langpack_link_text			= "Scarica solo language pack";
l10n.dl_langpack_link_title			= "Fare clic per scaricare: ";
l10n.dl_win_info_text				= "Important hint: 32-bit, 64-bit and Java - What to choose?";
l10n.dl_win_info_title				= "At the moment we offer a 32-bit (x86) version for Windows. However, it installs and runs also on Windows 64-bit (x86-64).\nPlease note that you may need Java in 32-bit for additional functionality which must then be selected only once (see menu 'Tools - Options - OpenOffice - Java').\n\nFor more information about OpenOffice and Java please see the link on the right 'Java and Apache OpenOffice'.";
l10n.dl_linux_info_text				= "Important hint: RPM vs. DEB = What to choose?";
l10n.dl_linux_info_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
//l10n.dl_mac_info_text				= "macOS : Text";
//l10n.dl_mac_info_title			= "macOS : Title";

l10n.dl_full_link_porting_text			= "Porting: Versioni di terze parti (portable, Android...)";
l10n.dl_full_link_porting_title			= "Fare clic per le versioni di terze parti";
l10n.dl_full_link_archive_text			= "Archivio: Versioni precedenti";
l10n.dl_full_link_archive_title			= "Fare clic per le versioni precedenti";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Release: ";
l10n.dl_rel_info_milestone_text			= "Milestone ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Data di rilascio ";
l10n.dl_rel_notes_text				= "Informazioni";
l10n.dl_rel_notes_title				= "Informazioni su Apache OpenOffice ";

l10n.dl_headline_full_text			= "Installazione completa: ";
l10n.dl_headline_langpack_text			= "Language pack: ";
l10n.dl_filesize_text				= "Dimensione ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Firme e checksum: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS signature file";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC signature for: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 hash for: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 hash for: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 hash for: ";

l10n.dl_help_img_title				= "Differenza tra installazione completa e language pack";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Informazioni di installazione";
l10n.dl_help_text				= "Cos'è un language pack?";
l10n.dl_help_title				= "Differenza tra installazione completa e language pack";
l10n.dl_checksum_img_title			= "Come verificare firme e checksum?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Verifica";
l10n.dl_checksum_text				= "Come verificare il download?";
l10n.dl_checksum_title				= "Verifica delle checksum";
l10n.dl_report_img_title			= "Il link di download non funziona? Segnalatelo qui.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Link non funzionante";
l10n.dl_report_text				= "Segnalate un link non funzionante";
l10n.dl_report_title				= "Segnalate un link non funzionante.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Installazione completa non disponibile";
l10n.dl_full_link_error_title			= "Cambiate lingua, piattaforma o versione.";
l10n.dl_langpack_link_error_text		= "Language pack non disponibile";
l10n.dl_langpack_link_error_title		= "Cambiate lingua, piattaforma o versione.";

l10n.dl_error_problem_img_title			= "Il file selezionato non è disponibile";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Errore";
l10n.dl_error_problem_text			= "Problema: ";
l10n.dl_error_solution_text			= "Soluzione: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " non è disponibile per ";
l10n.dl_error_please_select_1_text		= "Provate con la versione 4.0.1.";
l10n.dl_error_please_select_2_text		= "Provate a scegliere la versione 4.1.0 (o successiva).";
l10n.dl_error_please_select_3_text		= "Provate a scegliere una versione per Windows, Linux or OS X.";
l10n.dl_error_please_select_4_text		= "Provate a scegliere un'altra lingua o versione.";

l10n.dl_unknown_platform_text			= "sistema operativo sconosciuto";

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
l10n.dl_rel_notes_aoo418_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=165225298";
l10n.dl_rel_notes_aoo417_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.7+Release+Notes";
l10n.dl_rel_notes_aoo416_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.6+Release+Notes";
l10n.dl_rel_notes_aoo415_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=74692088";
l10n.dl_rel_notes_aoo414_link			= "https://s.apache.org/openoffice-414-it";
l10n.dl_rel_notes_aoo413_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Informazioni+su+Apache+OpenOffice+4.1.3+-+Italiano";
l10n.dl_rel_notes_aoo412_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=61326082";
l10n.dl_rel_notes_aoo411_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.1+Release+Notes";
l10n.dl_rel_notes_aoo410_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Informazioni+su+Apache+OpenOffice+4.1+-+IT";
l10n.dl_rel_notes_aoo401_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Informazioni+su+OpenOffice+4.0.1+IT";
l10n.dl_rel_notes_aoo400_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Informazioni+su+OpenOffice+4.0+-+it";
l10n.dl_help_link				= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link				= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link				= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link				= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/other-341.html";
