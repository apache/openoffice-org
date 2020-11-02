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
DL.NL_LANG					= "da";

// General:
l10n.dl_headline_text				= "Hent Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Hent Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Hent Apache OpenOffice til dit opetativ system, sprog og version";
l10n.dl_green_box_subtext1_text			= "Hosted af Sourceforge.net - en troværdig website";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice binary files er  hosted af Sourceforge.net - en troværdig website";
l10n.dl_green_box_subtext2_text			= "Vælg dit opetativsystem, sprog og version";
l10n.dl_green_box_subtext2_title		= "Vælg dit opetativsystem, sprog og version";
l10n.dl_green_box_selectbox_os_title		= "Vælg dit opetativsystem";
l10n.dl_green_box_selectbox_lang_title		= "Vælg dit sprog";
l10n.dl_green_box_selectbox_ver_title		= "Vælg dit udgivet version";

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
						    "Flere platforme / operativsystemer" ];

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
						    "da",	"Dansk",				"Dansk",
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
l10n.dl_share_light_blue_box_headline_text	= "Hjælp med at udbrede kendskabet";
l10n.dl_share_light_blue_box_headline_title	= "Hjælp med at udbrede kendskabet til Apache OpenOffice og fortæl dine venner om os";
l10n.dl_share_light_blue_box_text_text		= "Vær venlig at fortælle dine venner om Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Hjælp med at udbrede kendskabet til Apache OpenOffice og fortæl dine venner om os";
l10n.dl_share_light_blue_box_blog_text		= "Officielle Blog";
l10n.dl_share_light_blue_box_blog_title		= "OpenOffices weblog";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "OpenOffices weblog";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Fortæl dine venner om Apache OpenOffice på Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Del på Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Fortæl dine venner om Apache OpenOffice på Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Del på Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Hent udvidelser og ordbøger til Apache OpenOffice";
l10n.dl_ext_blue_box_headline_title		= "Vælg mellem et stort udvalg af tilføjelser og individuelle funktioner";
l10n.dl_ext_blue_box_text_text			= "Udvid din Apache OpenOffice funktionalitet med et stort og voksende bibliotek af udvidelser og ordbøger fra andre brugere.";
l10n.dl_ext_blue_box_text_title			= "Vælg mellem et stort udvalg af tilføjelser og individuelle funktioner";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Hent Apache OpenOffice skabeloner";
l10n.dl_tlp_blue_box_headline_title		= "Vælg mellem en bred vifte af ekstra skabeloner";
l10n.dl_tlp_blue_box_text_text			= "Udvid din Apache OpenOffice kreativitet med et stort og voksende bibliotek af skabeloner fra andre brugere.";
l10n.dl_tlp_blue_box_text_title			= "Vælg mellem en bred vifte af ekstra skabeloner";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Udgivelses informationer";
l10n.dl_nav_sysreq_text				= "Betingelser for systemet";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB fri - Memory: &gt;128MB - Processor: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "License";
l10n.dl_nav_license_title			= "Apache OpenOffice License";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Kilde";
l10n.dl_nav_source_title			= "For udviklere og power users: Hent kildekoden for at kode til Apache OpenOffice fra bunden";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Guide til at kode";
l10n.dl_nav_build_title				= "For udviklere and power users: Hvordan koder man til Apache OpenOffice fra bunden";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software udviklingskit Kit (SDK)";
l10n.dl_nav_sdk_title				= "For udviklere: Software udviklingskit Kit";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Udviklings byggesæt";
l10n.dl_nav_devbuilds_title			= "For QA frivillige: Udviklings byggesæt";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Dokumentation";
l10n.dl_nav_schedule_text			= "Skema for udgivelser";
l10n.dl_nav_schedule_title			= "Hvornår er nye udgivelser planlagt?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Skema over tidligere udgivelser";
l10n.dl_nav_hist_schedule_title			= "Hvornår var ældre udgivelser planlagt?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Installationsvejledning";
l10n.dl_nav_inst_guide_title			= "Sådan installerer du Apache OpenOffice på Windows, macOS (OS&nbsp;X) og Linux maskiner";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Bruger manual";
l10n.dl_nav_user_guide_title			= "Udvidet manual for den daglige brug af Apache OpenOffice";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java og Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Forklarer hvorfor man skla bruge Java og hvad det er";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Opdateringer der ophørt ";
l10n.dl_nav_eol_title				= "Informationer om udgivelser, der ikke længere bliver vedligeholdt";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Mere materiale";
l10n.dl_nav_support_text			= "Support";
l10n.dl_nav_support_title			= "Hvis den ovenstående information ikke kunne besvare dit spørgsmål, kan du læse om gratis og betalt supoort her!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Lokaliseringer";
l10n.dl_nav_local_title				= "Information og support i dit fortrukne sprog";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Download statistikker";
l10n.dl_nav_stat_title				= "Download og andre statistikker";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternativ download-kilde #1";
l10n.dl_nav_mirrors1_title			= "Brug Sourceforge til at downloade Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternativ download-kilde #2";
l10n.dl_nav_mirrors2_title			= "Brug Apache til at downloade Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "3. parts distributører";
l10n.dl_nav_porting_title			= "3. parts distrbutører";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Arkiverede og ældre udgivelser";
l10n.dl_nav_archive_title			= "Download arkiverede og ældre udgivelser";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Udgivelses noter";
l10n.dl_nav_release_notes_title			= "Hvad er nyt, hvad er blevet forbedret i Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Bekræft den hentede fil";
l10n.dl_nav_checksum_title			= "Hvordan bekræfter man den hentede fil med signatur og algoritme?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Download, Udvikeling og Publisering af gratis Open Source Software";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C Markup Validerings Service - Kontroller markups (HTML, XHTML, ...) på Websites";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Download fuld installation";
l10n.dl_full_link_title				= "Klik for at downloade: ";
l10n.dl_langpack_link_text			= "Download sprogpakke";
l10n.dl_langpack_link_title			= "Klik for at downloade: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Porting: Klik for at vælge fra 3. parts distrutører";
l10n.dl_full_link_porting_title			= "Klik for at skifte side komme til download fra 3. parts distributører";
l10n.dl_full_link_archive_text			= "Arkiv: Klik for at vælge fra ældre udgivelser";
l10n.dl_full_link_archive_title			= "Klik for at skifte til arkivet med ældre udgivelser og downloads.";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Udgivelse: ";
l10n.dl_rel_info_milestone_text			= "Milestone ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Udgivet ";
l10n.dl_rel_notes_text				= "Udgivelsesnoter";
l10n.dl_rel_notes_title				= "Udgivelsesnoter for Apache OpenOffice ";

l10n.dl_headline_full_text			= "Fuld installation: ";
l10n.dl_headline_langpack_text			= "Sprogpakke: ";
l10n.dl_filesize_text				= "Fil størrelse ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Signatur and algoritmer: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS signaturfil";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC signatur for: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 hash for: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 hash for: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 hash for: ";

l10n.dl_help_img_title				= "Hvad er forskellen mellem fuld installation og sprogpakken?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Installations information";
l10n.dl_help_text				= "Hvad er en sprogpakke?";
l10n.dl_help_title				= "Hvad er forskellen mellem fuld installation og sprogpakken?";
l10n.dl_checksum_img_title			= "Hvordan verificerer man den hentede fil med checksum?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Checksum verify";
l10n.dl_checksum_text				= "Hvordan verificere man downloaden?";
l10n.dl_checksum_title				= "Hvordan verificerer man den hentede fil med checksum?";
l10n.dl_report_img_title			= "Ødelagt download link? Klik her for at give os besked.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Ødelagt link";
l10n.dl_report_text				= "Rapporter Ødelagt link";
l10n.dl_report_title				= "Ødelagt download link? Klik her for at give os besked.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Ingen fuld installation tilgængelig";
l10n.dl_full_link_error_title			= "Vælg venligst et andet sprog, platform eller version.";
l10n.dl_langpack_link_error_text		= "Ingen sprogpakke tilgængelig";
l10n.dl_langpack_link_error_title		= "Vælg venligst et andet sprog, platform eller version.";

l10n.dl_error_problem_img_title			= "Den valgte fil til download er ikke tilgængelig";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Error text";
l10n.dl_error_problem_text			= "Problem: ";
l10n.dl_error_solution_text			= "Løsning: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " Er ikke tilgængelig for ";
l10n.dl_error_please_select_1_text		= "Vælg venligst version 4.0.1.";
l10n.dl_error_please_select_2_text		= "Vælg venligst version 4.1.0 eller nyere.";
l10n.dl_error_please_select_3_text		= "Vælg venligst en download for  Windows, macOS (OS&nbsp;X) or Linux.";
l10n.dl_error_please_select_4_text		= "Vælg venligst et andet sporg eller version.";

l10n.dl_unknown_platform_text			= "Ukendt operativsystem (OS)/ platform";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Hvordan indrapporter man et ødelagt link?";
l10n.dl_analyze_instruction_select_text		= "<b>Vælg dit favorit</b>: Operativsystem, sprog og version i det grønne felt herunder.";
l10n.dl_analyze_instruction_verify_text		= "Bekræft at disse optioner <b>stadig ikket</b> fører til et gyldigt download link.";
l10n.dl_analyze_instruction_click_text		= "Klik på knappen under den grønne box: ";
l10n.dl_analyze_instruction_copy_text		= "Kopier de valgte tabel data in i clipboardet: ";
l10n.dl_analyze_instruction_new_mail_text	= "Opret ny mail.";
l10n.dl_analyze_instruction_problem_text	= "<b>Beskriv problemet</b> (hvad virker ikke og hvad forventede du, der ville ske).";
l10n.dl_analyze_instruction_details_text	= "Oplys gerne <b>information om det nrugte opetativsystem</b>.";
l10n.dl_analyze_instruction_paste_text		= "Indsæt de kopierede data i slutningen af denne mail.";
l10n.dl_analyze_instruction_only_download_text	= "Vær venlig <b>kun at sende denne email i forbindelse med problemer med download</b> og ikke, hvis problemerne omhandler selve instllationen eller andet.";
l10n.dl_analyze_instruction_no_install_text	= "Denne site kan ikke hjælpe alle med installationsproblemer...";
l10n.dl_analyze_instruction_send_mail_text	= "Til sidst, <b>send email</b> til: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice developers mail-liste";
l10n.dl_analyze_instruction_mailing_list_title	= "Send rapporten til Apache OpenOffice developers mail-liste";
l10n.dl_analyze_instruction_learn_more_text	= "Klik her for at lære mere om hvad en mail-liste er";
l10n.dl_analyze_instruction_learn_more_title	= "Lær mere om hvad en mail-liste er";
l10n.dl_analyze_instruction_answer_text		= "Vi vil vende tilbage med et svar når vi har fået kigget på problemet problemet og fundet en løsning.";
l10n.dl_analyze_instruction_thanks_text		= "Tak for din tilbagemelding.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Klik for at opdatere tabellen";
l10n.dl_analyze_update_button_title		= "Indsæt den valgte option som værdi i tabellen herunder";
l10n.dl_analyze_select_button_text		= "Klik for at vælge tabel";
l10n.dl_analyze_select_button_title		= "Vælg alle data i tabellen nedenunder";
l10n.dl_analyze_copy_button_text		= "Copier med  [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Kopier de valgte tabel data med  [ Ctrl ] + [ C ] or [ &#8984; ] + [ C ] ind i clipboardet";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text		= "Browser variabler";
l10n.dl_analyze_table_values_text		= "Værdier";
l10n.dl_analyze_table_yes_text			= "Yes";
l10n.dl_analyze_table_no_text			= "No";
l10n.dl_analyze_table_stable_release_text	= "Stabile udgivelser";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;functions/variables";



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
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/archive.html";
