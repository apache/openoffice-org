/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:	"Download Apache OpenOffice"
 * Correct:	l10n.dl_green_box_headline_text
 */



// Object that contains all following variables.
// var l10n = new Object();

// The following variables are used in the "index.html" file:

// Set a specific language ISO code to force to assemble a download link with a certain language.
DL.NL_LANG					= "de";

// General:
l10n.dl_headline_text				= "Apache OpenOffice herunterladen";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Apache OpenOffice herunterladen";
l10n.dl_green_box_headline_title		= "Herunterladen von Apache OpenOffice für das gewünschte Betriebssystem, Sprache und Version";
l10n.dl_green_box_subtext1_text			= "Bereitgestellt von SourceForge.net - Eine vertrauenswürdige Webseite";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice Installationsdateien werden von SourceForge.net bereitgestellt - Eine vertrauenswürdige Webseite";
l10n.dl_green_box_subtext2_text			= "Wähle das gewünschte Betriebssystem, Sprache und Version";
l10n.dl_green_box_subtext2_title		= "Wähle das gewünschte Betriebssystem, Sprache und Version";
l10n.dl_green_box_selectbox_os_title		= "Wähle das gewünschte Betriebssystem";
l10n.dl_green_box_selectbox_lang_title		= "Wähle die gewünschte Sprache";
l10n.dl_green_box_selectbox_ver_title		= "Wähle die gewünschte Version";

//These strings require updates per version. Leave them empty is you want to just take the default in English.

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines above the 3 following variables)!
// Leaving as default will result in the download box for any OS, language, or release shown on:
// https://www.openoffice.org/download/index.html
// Customizations to each of these arrays will require ongoing maintenance for new releases.

// l10n.dl_green_box_select_box_os_values	= [ "" ];
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
						    "Linux 64-Bit (x86-64) (DEB)",
						    "Linux 64-Bit (x86-64) (RPM)",
						    "Linux 32-Bit (x86) (DEB)",
						    "Linux 32-Bit (x86) (RPM)",
						    "OS X (version >= 10.7) (DMG)",
						    "OS X (version <= 10.6) (DMG)",
						    "Andere Betriebssysteme" ];

// l10n.dl_green_box_select_box_language_values	= [ "" ];
l10n.dl_green_box_select_box_language_values	= [ "" ];

// l10n.dl_green_box_select_box_lang_values_custom = [ "" ];
//						    Value	Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom	= [ "ast",	"Asturisch",				"Asturianu",
						    "eu",	"Baskisch",				"Euskara",
						    "bg",	"Bulgarisch",				"български език",
						    "zh-TW",	"Chinesisch [Traditionell]",		"正體中文",
						    "zh-CN",	"Chinesisch [Vereinfacht]",		"简体中文",
						    "da",	"Dänisch",				"Dansk",
						    "de",	"Deutsch",				"Deutsch",
						    "en-GB",	"Englisch [Britisch]",			"English [British]",
						    "en-US",	"Englisch [US]",			"English [US]",
						    "fi",	"Finnisch",				"Suomi",
						    "fr",	"Französisch",				"Français",
						    "gl",	"Galicisch",				"Galego",
						    "el",	"Griechisch",				"ελληνικά",
						    "he",	"Hebräisch",				"עברית",
						    "hi",	"Hindi",				"हिन्दी",
						    "it",	"Italienisch",				"Italiano",
						    "ja",	"Japanisch",				"日本語",
						    "ca",	"Katalanisch",				"Català",
						    "ca-XV",	"Katalanisch [Valencianisch AVL]",	"València (AVL)",
						    "ca-XR",	"Katalanisch [Valencianisch RACV]",	"València (RACV)",
						    "km",	"Khmer",				"ភាសាខ្មែរ",
						    "ko",	"Koreanisch",				"한국어",
						    "lt",	"Litauisch",				"Lietuvių",
						    "nl",	"Niederländisch",			"Nederlands",
						    "nb",	"Norwegisch [Bokmål]",			"Norsk [Bokmål]",
						    "pl",	"Polnisch",				"Polski",
						    "pt-BR",	"Portugiesisch [Brasilianisch]",	"Português [do Brasil]",
						    "pt",	"Portugiesisch [Europäisch]",		"Português [Europeu]",
						    "ru",	"Russisch",				"Русский",
						    "gd",	"Schottisch [Gälisch]",			"Gàidhlig",
						    "sv",	"Schwedisch",				"Svenska",
						    "sr",	"Serbisch [Kyrillisch]",		"Cрпски [ћирилицом]",
						    "sk",	"Slowakisch",				"Slovenský jazyk [slovenčina]",
						    "sl",	"Slowenisch",				"Slovenski jezik [slovenščina]",
						    "es",	"Spanisch",				"Español",
						    "ta",	"Tamilisch",				"தமிழ்",
						    "th",	"Thailändisch",				"ภาษาไทย",
						    "cs",	"Tschechisch",				"Čeština",
						    "tr",	"Türkisch",				"Türkçe",
						    "hu",	"Ungarisch",				"Magyar",
						    "vi",	"Vietnamesisch",			"Tiếng Việt" ];

l10n.dl_green_box_select_box_version_values	= [ "" ];

l10n.dl_green_box_select_box_version_older	= "Ältere Versionen";

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Bitte weitersagen!";
l10n.dl_share_light_blue_box_headline_title	= "Bitte weitersagen! Erzähle Deinen Freunden von Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Erzähle Deinen Freunden von Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Bitte weitersagen! Erzähle Deinen Freunden von Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Offizieller Blog";
l10n.dl_share_light_blue_box_blog_title		= "Weblog von OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog von OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Erzähle Deinen Freunden von Apache OpenOffice auf Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Weitersagen auf Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Erzähle Deinen Freunden von Apache OpenOffice auf Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Weitersagen auf Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Erweiterungen/Wörterbücher für Apache OpenOffice";
l10n.dl_ext_blue_box_headline_title		= "Wähle aus einem breiten Angebot an zusätzlicher und individueller Funktionalität";
l10n.dl_ext_blue_box_text_text			= "Erweitere Deine Apache OpenOffice Funktionalität mit einer großen und stetig wachsenden Sammlung von Erweiterungen und Wörterbüchern von anderen Anwendern.";
l10n.dl_ext_blue_box_text_title			= "Wähle aus einem breiten Angebot an zusätzlicher und individueller Funktionalität";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Vorlagen für Apache OpenOffice";
l10n.dl_tlp_blue_box_headline_title		= "Wähle aus einem breiten Angebot an zusätzlichen und individuellen Vorlagen";
l10n.dl_tlp_blue_box_text_text			= "Erweitere Deine Apache OpenOffice Funktionalität mit einer großen und stetig wachsenden Sammlung von Vorlagen von anderen Anwendern.";
l10n.dl_tlp_blue_box_text_title			= "Wähle aus einem breiten Angebot an zusätzlichen und individuellen Vorlagen";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Release Informationen";
l10n.dl_nav_sysreq_text				= "Systemvoraussetzungen";
l10n.dl_nav_sysreq_title			= "Festplatte: ~300MB frei - Speicher: &gt;128MB - Prozessor: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Lizenz";
l10n.dl_nav_license_title			= "Lizenz von Apache OpenOffice";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Quellcode";
l10n.dl_nav_source_title			= "Für Entwickler und Power-User: Der Quellcode von Apache OpenOffice";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Anleitung zum Bauen";
l10n.dl_nav_build_title				= "Für Entwickler und Power-User: Anleitung zum Bauen von Apache OpenOffice";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "Für Entwickler: Software Development Kit (SDK)";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Entwickler-Builds";
l10n.dl_nav_devbuilds_title			= "Für QA-Freiwillige: Entwickler-Builds";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Dokumentation";
l10n.dl_nav_schedule_text			= "Release-Planung";
l10n.dl_nav_schedule_title			= "Wann ist ein neues Release geplant?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Historische Release-Planung";
l10n.dl_nav_hist_schedule_title			= "Wann wurden alte Releases geplant?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Installationsanleitungen";
l10n.dl_nav_inst_guide_title			= "Installationsanleitungen für Apache OpenOffice auf Windows, macOS (OS&nbsp;X) und Linux";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Handbücher";
l10n.dl_nav_user_guide_title			= "Ausführliche Handbücher für die tägliche Arbeit";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java und Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Informationen über Java: Was ist Java und wofür wird es gebraucht?";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Eingestellte Versionen (End-Of-Life)";
l10n.dl_nav_eol_title				= "Eingestellte und nicht weiter gepflegte Versionen (End-Of-Life)";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Weitere Ressourcen";
l10n.dl_nav_support_text			= "Unterstützung (Support)";
l10n.dl_nav_support_title			= "Hier gibt es kostenlose und kostenpflichtige Unterstützungen!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Lokalisierungen";
l10n.dl_nav_local_title				= "Informationen und Unterstützung für Deine gewünschte Sprache";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Download-Statistiken";
l10n.dl_nav_stat_title				= "Download und andere Statistiken";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternative Spiegel-Server #1";
l10n.dl_nav_mirrors1_title			= "Herunterladen über SourceForge Spiegel-Server";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternative Spiegel-Server #2";
l10n.dl_nav_mirrors2_title			= "Herunterladen über Apache Spiegel-Server";
l10n.dl_nav_mirrors2_href			= "https://downloads.apache.org/openoffice/" + DL.VERSION + "/binaries/";
l10n.dl_nav_porting_text			= "Andere Portierungen und Distributionen";
l10n.dl_nav_porting_title			= "Portierungen und Distributionen von Drittanbieter";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Archivierte und Legacy-Versionen";
l10n.dl_nav_archive_title			= "Herunterladen von archivierten und Legacy-Versionen";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Release Notes";
l10n.dl_nav_release_notes_title			= "Was ist neu, was wurde verbessert in Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Download verifizieren?";
l10n.dl_nav_checksum_title			= "Wie kann die heruntergeladene Datei mit Signaturen und Hashwerten verifiziert werden?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "SourceForge - Download, Develop and Publish Free Open Source Software";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "SourceForge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service - Check the markup (HTML, XHTML, ...) of Web documents";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Herunterladen: Vollinstallation";
l10n.dl_full_link_title				= "Klicken zum Herunterladen: ";
l10n.dl_langpack_link_text			= "Herunterladen: Sprachpaket";
l10n.dl_langpack_link_title			= "Klicken zum Herunterladen: ";
l10n.dl_win_info_text				= "Wichtiger Hinweis: 32-bit, 64-bit und Java - Was soll ich wählen?";
l10n.dl_win_info_title				= "Derzeit wird nur eine 32-bit (x86) Version für Windows angeboten. Es funktioniert aber auch mit einem Windows 64-bit (x86-64).\nBitte beachten Sie, dass Sie für zusätzliche Funktionen Java mit 32-bit benötigen, das einmalig ausgewählt werden muss (siehe Menü 'Extras - Einstellungen - OpenOffice - Java').\n\nFür weitere Informationen über OpenOffice und Java klicken Sie bitte rechts auf den Link 'Java und Apache OpenOffice'.";
l10n.dl_linux_info_text				= "Wichtiger Hinweis: RPM oder DEB - Was soll ich wählen?";
l10n.dl_linux_info_title			= "RPM wird benutzt in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB wird benutzt in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
//l10n.dl_mac_info_text				= "macOS : Text";
//l10n.dl_mac_info_title			= "macOS : Titel";

l10n.dl_full_link_porting_text			= "Portierungen: Klicken zum Wählen von Drittanbietern";
l10n.dl_full_link_porting_title			= "Klicken zum Aufrufen der Portierungswebseite und Herunterladen von Drittanbietern";
l10n.dl_full_link_archive_text			= "Archiv: Klicken zum Wählen von älteren Releases";
l10n.dl_full_link_archive_title			= "Klicken zum Aufrufen der Archivwebseite und Herunterladen von älteren Releases";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Release: ";
l10n.dl_rel_info_milestone_text			= "Milestone ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Veröffentlicht ";
l10n.dl_rel_notes_text				= "Release Notes";
l10n.dl_rel_notes_title				= "Release Notes für Apache OpenOffice ";

l10n.dl_headline_full_text			= "Vollinstallation: ";
l10n.dl_headline_langpack_text			= "Sprachpaket: ";
l10n.dl_filesize_text				= "Dateigröße ~";
l10n.dl_megabyte_text				= " MB";
l10n.dl_checksum_headline_text			= "Signaturen und Hashwerte: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS Signaturdatei";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC Signatur für: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 Hashwert für: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 Hashwert für: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 Hashwert für: ";

l10n.dl_help_img_title				= "Was ist der Unterschied zwischen einer Vollinstallation und einem Sprachpaket?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Install info";
l10n.dl_help_text				= "Was ist ein Sprachpaket?";
l10n.dl_help_title				= "Was ist der Unterschied zwischen einer Vollinstallation und einem Sprachpaket?";
l10n.dl_checksum_img_title			= "Wie kann man die heruntergeladene Datei mit Prüfsummen verifizieren?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Prüfsummen verifizieren";
l10n.dl_checksum_text				= "Download verifizieren?";
l10n.dl_checksum_title				= "Wie kann man die heruntergeladene Datei mit Prüfsummen verifizieren?";
l10n.dl_report_img_title			= "Kaputter Download-Link? Hier klicken zum Melden.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Broken link";
l10n.dl_report_text				= "Kaputten Link melden";
l10n.dl_report_title				= "Kaputter Download-Link? Hier klicken zum Melden.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Keine Vollinstallation verfügbar";
l10n.dl_full_link_error_title			= "Bitte ein anderes Betriebssystem, Sprache oder Version wählen.";
l10n.dl_langpack_link_error_text		= "Kein Sprachpaket verfügbar";
l10n.dl_langpack_link_error_title		= "Bitte ein anderes Betriebssystem, Sprache oder Version wählen.";

l10n.dl_error_problem_img_title			= "Die ausgewählte Installationsdatei ist nicht verfügbar";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Error text";
l10n.dl_error_problem_text			= "Problem: ";
l10n.dl_error_solution_text			= "Lösung: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " ist nicht verfügbar für ";
l10n.dl_error_please_select_1_text		= "Bitte wähle Version 4.0.1.";
l10n.dl_error_please_select_2_text		= "Bitte wähle Version 4.1.0 oder neuer.";
l10n.dl_error_please_select_3_text		= "Bitte wähle eine Installationsdatei für Windows, macOS (OS&nbsp;X) oder Linux.";
l10n.dl_error_please_select_4_text		= "Bitte wähle eine andere Sprache oder Version.";

l10n.dl_unknown_platform_text			= "unbekanntes Betriebssystem / Plattform";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Wie wird ein kaputter Download-Link gemeldet?";
l10n.dl_analyze_instruction_select_text		= "<b>Wähle die gewünschten Optionen</b>: Betriebssystem, Sprache und Version in dem unteren grünen Kasten.";
l10n.dl_analyze_instruction_verify_text		= "Sicherstellen, dass diese Optionen <b>noch immer nicht</b> zu funktionierenden Download-Links führen.";
l10n.dl_analyze_instruction_click_text		= "Auf den Button unterhalb des grünen Kastens drücken: ";
l10n.dl_analyze_instruction_copy_text		= "Kopieren der ausgewählten Tabellendaten in die Zwischenablage: ";
l10n.dl_analyze_instruction_new_mail_text	= "Neue E-Mail erstellen.";
l10n.dl_analyze_instruction_problem_text	= "<b>Beschreibung des Problems</b> (was funktioniert nicht und was wird erwartet).";
l10n.dl_analyze_instruction_details_text	= "Bitte auch <b>Details über das benutzte Betriebssystem</b> hinzufügen.";
l10n.dl_analyze_instruction_paste_text		= "Die kopierten Daten ans Ende der E-Mail einfügen.";
l10n.dl_analyze_instruction_only_download_text	= "Bitte <b>die E-Mail nur in dem Fall senden, wenn es um Probleme beim Herunterladen geht</b> und nicht beim Installieren.";
l10n.dl_analyze_instruction_no_install_text	= "Diese Webseite kann überhaupt nicht bei Installationsproblemen helfen.";
l10n.dl_analyze_instruction_send_mail_text	= "Schließlich, <b>senden der E-Mail</b> an die: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice Entwickler-Mailing Liste";
l10n.dl_analyze_instruction_mailing_list_title	= "Senden des Reports an die Apache OpenOffice Entwickler-Mailing Liste";
l10n.dl_analyze_instruction_learn_more_text	= "Was ist eine Mailing Liste?";
l10n.dl_analyze_instruction_learn_more_title	= "Hier klicken für weitere Informationen zu Mailing Listen";
l10n.dl_analyze_instruction_answer_text		= "Wir werden versuchen, nach Erhalt der E-Mail und Analyse schnellstmöglich eine Antwort zu geben.";
l10n.dl_analyze_instruction_thanks_text		= "Vielen Dank für den Report.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Klicken zum Aktualisieren der Tabelle";
l10n.dl_analyze_update_button_title		= "Packt die selektierten Optionen als Werte in die untere Tabelle";
l10n.dl_analyze_select_button_text		= "Klicken zum Auswählen der Tabelle";
l10n.dl_analyze_select_button_title		= "Auswählen aller Daten in der unteren Tabelle";
l10n.dl_analyze_copy_button_text		= "Kopieren mit [Strg] + [C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Kopieren der ausgewählten Tabellendaten mit [ Strg ] + [ C ] oder [ &#8984; ] + [ C ] in die Zwischenablage";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_problem_text1		= "Problembeschreibung";
l10n.dl_analyze_table_problem_text2		= "Ersetze diesen Text und beschreibe das Problem <br /><br />(Was funktioniert nicht? Was wird erwartet?)";
l10n.dl_analyze_table_browser_text		= "Browser Variablen";
l10n.dl_analyze_table_values_text		= "Werte";
l10n.dl_analyze_table_yes_text			= "Ja";
l10n.dl_analyze_table_no_text			= "Nein";
l10n.dl_analyze_table_stable_release_text	= "Stabiles Release";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;Funktionen/Variablen";



// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo419_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=173081636";
l10n.dl_rel_notes_aoo418_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=165224926";
l10n.dl_rel_notes_aoo417_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.7+Release+Notes";
l10n.dl_rel_notes_aoo416_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=97550579";
l10n.dl_rel_notes_aoo415_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=74691663";
l10n.dl_rel_notes_aoo414_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=73632410";
l10n.dl_rel_notes_aoo413_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=65873798";
l10n.dl_rel_notes_aoo412_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=61318804";
l10n.dl_rel_notes_aoo411_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=44995874";
l10n.dl_rel_notes_aoo410_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=40507525";
l10n.dl_rel_notes_aoo401_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes+%28Deutsch%29";
l10n.dl_rel_notes_aoo400_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0+Release+Notes+%28Deutsch%29";
l10n.dl_help_link				= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link				= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link				= "https://www.openoffice.org/de/download/analyze.html";
l10n.dl_porting_link				= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/archive.html";
