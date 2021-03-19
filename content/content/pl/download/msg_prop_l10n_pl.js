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
DL.NL_LANG								= "pl";

// General:
l10n.dl_headline_text					= "Pobierz Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Pobierz Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Pobierz Apache OpenOffice dla swojego ulubionego systemu operacyjnego, języka i wersji";
l10n.dl_green_box_subtext1_text			= "Hostowany przez SourceForge.net – Zaufana strona internetowa";
l10n.dl_green_box_subtext1_title		= "Pliki binarne Apache OpenOffice hostowane przez SourceForge.net – Zaufana strona internetowa";
l10n.dl_green_box_subtext2_text			= "Wybierz swój ulubiony system operacyjny, język i wersję";
l10n.dl_green_box_subtext2_title		= "Wybierz swój ulubiony system operacyjny, język i wersję";
l10n.dl_green_box_selectbox_os_title	= "Wybierz swój ulubiony system operacyjny";
l10n.dl_green_box_selectbox_lang_title	= "Wybierz swój ulubiony język";
l10n.dl_green_box_selectbox_ver_title	= "Wybierz swoją ulubioną wydaną wersję";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines below the 3 following variables)!
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
												"Linux 64-bit (x86-64) (DEB)",
												"Linux 64-bit (x86-64) (RPM)",
												"Linux 32-bit (x86) (DEB)",
												"Linux 32-bit (x86) (RPM)",
												"OS X (wersja >= 10.7) (DMG)",
												"OS X (wersja <= 10.6) (DMG)",
												"Więcej platform / systemów operacyjnych" ];
/* l10n.dl_green_box_select_box_os_values	= [ "" ]; */

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "" ];

/* l10n.dl_green_box_select_box_lang_values_custom = [ "" ]; */
												 // Value		Visible text					Tool tip
l10n.dl_green_box_select_box_lang_values_custom = [ "en-US",	"Angielski [USA]",				"English [US]",
													"en-GB",	"Angielski [Wielka Brytania]",	"English [British]",
													"ast",		"Asturyjski",					"Asturianu",
													"eu",		"Baskijski",					"Euskara",
													"bg",		"Bułgarski",					"български език",
													"zh-TW",	"Chiński [tradycyjny]",			"正體中文",
													"zh-CN",	"Chiński [uproszczony]",		"简体中文",
													"cs",		"Czeski",						"Čeština",
													"da",		"Duński",						"Dansk",
													"fi",		"Fiński",						"Suomi",
													"fr",		"Francuski",					"Français",
													"gl",		"Galicyjski",					"Galego",
													"el",		"Grecki",						"ελληνικά",
													"he",		"Hebrajski",					"עברית",
													"hi",		"Hindi",						"हिन्दी",
													"es",		"Hiszpański",					"Español",
													"nl",		"Holenderski",					"Nederlands",
													"ja",		"Japoński",						"日本語",
													"ca",		"Kataloński",					"Català",
													"ca-XV",	"Kataloński [Walencja AVL]",	"València (AVL)",
													"ca-XR",	"Kataloński [Walencja RACV]",	"València (RACV)",
													"km",		"Khmerski",						"ភាសាខ្មែរ",
													"ko",		"Koreański",					"한국어",
													"lt",		"Litewski",						"Lietuvių",
													"de",		"Niemiecki",					"Deutsch",
													"nb",		"Norweski [Bokmal]",			"Norsk [Bokmål]",
													"pl",		"Polski",						"Polski",
													"pt-BR",	"Portugalski [Brazylijski]",	"Português [do Brasil]",
													"pt",		"Portugalski [Europejski]",		"Português [Europeu]",
													"ru",		"Rosyjski",						"Русский",
													"sr",		"Serbski [Cyrylica]",			"Cрпски [ћирилицом]",
													"sk",		"Słowacki",						"Slovenský jazyk [slovenčina]",
													"sl",		"Słoweński",					"Slovenski jezik [slovenščina]",
													"gd",		"Szkocki Gaelicki",				"Gàidhlig",
													"sv",		"Szwedzki",						"Svenska",
													"th",		"Tajski",						"ภาษาไทย",
													"ta",		"Tamilski",						"தமிழ்",
													"tr",		"Turecki",						"Türkçe",
													"hu",		"Węgierski",					"Magyar",
													"vi",		"Wietnamski",					"Tiếng Việt",
													"it",		"Włoski",						"Italiano" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */

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
												"Starsze wersje" ];

/* l10n.dl_green_box_select_box_version_values	= [ "" ]; */

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Pomóż rozpowszechniać na świecie";
l10n.dl_share_light_blue_box_headline_title	= "Pomóż rozpowszechniać na świecie i powiedz znajomym o Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Powiedz znajomym o Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Pomóż rozpowszechniać na świecie i powiedz znajomym o Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Oficjalny Blog";
l10n.dl_share_light_blue_box_blog_title		= "Weblog o OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog o OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Powiedz znajomym o Apache OpenOffice przez Facebook'a";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Udostępnij na Facebook'u";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Powiedz znajomym o Apache OpenOffice przez Twitter'a";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Udostępnij na Twitterze";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Zdobądź dodatki i słowniki do Apache OpenOffice";
l10n.dl_ext_blue_box_headline_title		= "Wybierz z szerokiego zakresu dodatkowych i indywidualnych funkcjonalności";
l10n.dl_ext_blue_box_text_text			= "Rozszerz funkcje swojego Apache OpenOffice z dużą i powiększającą się biblioteką dodatków i słowników od innych użytkowników.";
l10n.dl_ext_blue_box_text_title			= "Wybierz z szerokiego zakresu dodatkowych i indywidualnych funkcjonalności";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Zdobądź szablony Apache OpenOffice";
l10n.dl_tlp_blue_box_headline_title		= "Wybierz z szerokiego zakresu dodatkowych i indywidualnych dokumentów";
l10n.dl_tlp_blue_box_text_text			= "Rozszerz swoją kreatywność Apache OpenOffice z dużą i powiększającą się biblioteką z szablonami od innych użytkowników.";
l10n.dl_tlp_blue_box_text_title			= "Wybierz z szerokiego zakresu dodatkowych i indywidualnych dokumentów";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Informacje o wydaniu";
l10n.dl_nav_sysreq_text				= "Wymagania sprzętowe";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB wolnej przestrzeni - Pamięć: &gt;128MB - Procesor: &gt;500MHz - System operacyjny: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Licencja";
l10n.dl_nav_license_title			= "Apache OpenOffice Licencja";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Źródło";
l10n.dl_nav_source_title			= "Dla developerów i zaawansowanych użytkowników: Zdobądź źródło do zbudowania Apache OpenOffice od podstaw";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Instrukcja budowy";
l10n.dl_nav_build_title				= "Dla developerów i zaawansowanych użytkowników: Jak zbudować Apache OpenOffice od podstaw";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Zestaw narzędzi dla programistów (SDK)";
l10n.dl_nav_sdk_title				= "Dla developerów: zestaw narzędzi dla deweloperów";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Rozwój budowy";
l10n.dl_nav_devbuilds_title			= "Dla wolontariuszy z zakresu QA: Rozwój budowy";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Dokumentacja";
l10n.dl_nav_schedule_text			= "Lista Wydań";
l10n.dl_nav_schedule_title			= "Kiedy planowane jest nowe wydanie?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text		= "Historyczny harmonogram wydania";
l10n.dl_nav_hist_schedule_title		= "Kiedy były planowane stare wydania?";
l10n.dl_nav_hist_schedule_href		= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Instrukcje Instalacji";
l10n.dl_nav_inst_guide_title		= "Instrukcje instalacji Apache OpenOffice na Windows, macOS (OS&nbsp;X) i maszyny Linux";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Instrukcje Obsługi";
l10n.dl_nav_user_guide_title		= "Rozwinięte instrukcje obsługi do codziennego użytku";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java i Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Wyjaśnienia, dlaczego należy używać Javy i co to jest";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Informacja End-Of-Life";
l10n.dl_nav_eol_title				= "Informacja o wydaniach, które zdobyły status End-Of-Life";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Dodatkowe zasoby";
l10n.dl_nav_support_text			= "Pomoc";
l10n.dl_nav_support_title			= "Jeśli te informacje nie odpowiedzą na Twoje pytanie: Bezpłatne i opłacone wsparcie!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Lokalizacje";
l10n.dl_nav_local_title				= "Informacje i pomoc w Twoim ulubionym języku";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Statystyki pobrań";
l10n.dl_nav_stat_title				= "Pobieranie i inne statystyki";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternatywny link do pobrania #1";
l10n.dl_nav_mirrors1_title			= "Użyj łącza SourceForge, aby pobrać Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternatywny link do pobrania #2";
l10n.dl_nav_mirrors2_title			= "Użyj łącza Apache, aby pobrać Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "Inne porty i dystrybucje innych firm";
l10n.dl_nav_porting_title			= "Porty i dystrybucje od firm trzecich";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Archiwalne i starsze wydania";
l10n.dl_nav_archive_title			= "Pobierz starsze i zarchiwizowane wydania";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text		= "Notatki Wydania";
l10n.dl_nav_release_notes_title		= "Co nowego, co zostało poprawione w Apache OpenOffice?";
l10n.dl_nav_release_notes_href		= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Zweryfikuj pobrany plik";
l10n.dl_nav_checksum_title			= "Jak sprawdzić pobrany plik z podpisami i hasłami?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title		= "SourceForge - Pobierz Opracowany i Opublikowany Darmowy Zestaw Produktów";
l10n.dl_img_sourceforge_href		= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "https://www.openoffice.org/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "SourceForge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service - Sprawdź znaczniki (HTML, XHTML, ...) dokumentów sieci Web";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src					= "https://www.openoffice.org/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt					= "Weryfikator W3C";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Pobierz pełną wersję instalatora";
l10n.dl_full_link_title				= "Kliknij, aby pobrać: ";
l10n.dl_langpack_link_text			= "Pobierz pakiet językowy";
l10n.dl_langpack_link_title			= "Kliknij, aby pobrać: ";
l10n.dl_win_info_text				= "Important hint: 32-bit, 64-bit and Java - What to choose?";
l10n.dl_win_info_title				= "At the moment we offer a 32-bit (x86) version for Windows. However, it installs and runs also on Windows 64-bit (x86-64).\nPlease note that you may need Java in 32-bit for additional functionality which must then be selected only once (see menu 'Tools - Options - OpenOffice - Java').\n\nFor more information about OpenOffice and Java please see the link on the right 'Java and Apache OpenOffice'.";
l10n.dl_linux_info_text				= "Important hint: RPM vs. DEB = Co wybrać";
l10n.dl_linux_info_title			= "RPM jest używany w:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB jest używany w:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
//l10n.dl_mac_info_text				= "macOS : Text";
//l10n.dl_mac_info_title			= "macOS : Title";

l10n.dl_full_link_porting_text		= "Portowanie: Kliknij, aby wybrać dostawców firm trzecich";
l10n.dl_full_link_porting_title		= "Kliknij, aby przejść na stronę i pobrać od zewnętrznych stron";
l10n.dl_full_link_archive_text		= "Archiwum: Kliknij, aby wybrać starsze wersje";
l10n.dl_full_link_archive_title		= "Kliknij, aby przejść do archiwum i pobrać starszą wersję";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text		= "Wydanie: ";
l10n.dl_rel_info_milestone_text		= "Milowy kamień ";
l10n.dl_rel_info_buildid_text		= "ID wydania ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text		= "Wydanie ";
l10n.dl_rel_notes_text				= "Notatki Wydania";
l10n.dl_rel_notes_title				= "Notatki Wydania dla Apache OpenOffice ";

l10n.dl_headline_full_text			= "Pełna instalacja: ";
l10n.dl_headline_langpack_text		= "Pakiet językowy: ";
l10n.dl_filesize_text				= "Wielkość pliku ~ ";
l10n.dl_megabyte_text				= " MB";
l10n.dl_checksum_headline_text		= "Podpisy i hasła: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS podpisów pliku";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "Podpis ASC dla: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "Klucz MD5 dla: ";
l10n.dl_checksum_sha256_text		= "SHA256";
l10n.dl_checksum_sha256_title		= "Klucz SHA256 dla: ";
l10n.dl_checksum_sha512_text		= "SHA512";
l10n.dl_checksum_sha512_title		= "Klucz SHA512 dla: ";

l10n.dl_help_img_title				= "Jaka jest różnica między pełną instalacją a pakietem językowym?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Informacje o instalacji";
l10n.dl_help_text					= "Co to pakiet językowy?";
l10n.dl_help_title					= "Jaka jest różnica między pełną instalacją a pakietem językowym?";
l10n.dl_checksum_img_title			= "Jak zweryfikować pobrany plik z sumą kontrolną?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Weryfikacja sumy kontrolnej";
l10n.dl_checksum_text				= "Jak sprawdzić pobranie?";
l10n.dl_checksum_title				= "Jak zweryfikować pobrany plik z sumą kontrolną?";
l10n.dl_report_img_title			= "Niedziałający link do pobrania? Kliknij tutaj, aby zgłosić.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Niedziałający link";
l10n.dl_report_text					= "Zgłoś niedziałający link";
l10n.dl_report_title				= "Niedziałający link do pobrania? Kliknij tutaj, aby zgłosić.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Brak pełnej instalacji";
l10n.dl_full_link_error_title			= "Proszę wybierz inny język, platformę lub wersję.";
l10n.dl_langpack_link_error_text		= "Brak paczki językowej.";
l10n.dl_langpack_link_error_title		= "Proszę wybierz inny język, platformę lub wersję.";

l10n.dl_error_problem_img_title			= "Wybrany plik do pobrania nie jest dostępny";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Tekst błędu";
l10n.dl_error_problem_text				= "Problem: ";
l10n.dl_error_solution_text				= "Rozwiązanie: ";
l10n.dl_error_aoo_text					= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text	= " nie jest dostępny dla ";
l10n.dl_error_please_select_1_text		= "Proszę wybierz wersję 4.0.1.";
l10n.dl_error_please_select_2_text		= "Proszę wybierz wersję 4.1.0 lub nowszą.";
l10n.dl_error_please_select_3_text		= "Proszę wybierz pobieranie dla Windows'a, MacOS'a (OS&nbsb;X) lub Linux'a.";
l10n.dl_error_please_select_4_text		= "Proszę wybierz inny język lub wersję.";

l10n.dl_unknown_platform_text			= "Nie znany system operacyjny / platforma";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text					= "How to report a broken download link?";
l10n.dl_analyze_instruction_select_text			= "<b>Select your favorites</b>: Operating system, language and version in the green below.";
l10n.dl_analyze_instruction_verify_text			= "Verify that these options <b>still do not</b> lead to valid download links.";
l10n.dl_analyze_instruction_click_text			= "Click on the button below the green box: ";
l10n.dl_analyze_instruction_copy_text			= "Copy the selected table data into the clipboard: ";
l10n.dl_analyze_instruction_new_mail_text		= "Create a new mail.";
l10n.dl_analyze_instruction_problem_text		= "<b>Write a problem description</b> (what does not work and what do you expect).";
l10n.dl_analyze_instruction_details_text		= "Please also add <b>details about the used operating system</b>.";
l10n.dl_analyze_instruction_paste_text			= "Paste the copied data at the end of the mail.";
l10n.dl_analyze_instruction_only_download_text	= "Please <b>send the mail only in case of download problems</b> and not if you cannot install.";
l10n.dl_analyze_instruction_no_install_text		= "This webpage cannot help at all with installation problems.";
l10n.dl_analyze_instruction_send_mail_text		= "Finally, <b>send the mail</b> to the: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice Development Mailing List";
l10n.dl_analyze_instruction_mailing_list_title	= "Send the report to the Apache OpenOffice developers mailing list";
l10n.dl_analyze_instruction_learn_more_text		= "Click here to learn more about what a mailing list is";
l10n.dl_analyze_instruction_learn_more_title	= "Learn more about what a mailing list is";
l10n.dl_analyze_instruction_answer_text			= "We will try to answer as soon as we get the mail and the problem analyzed.";
l10n.dl_analyze_instruction_thanks_text			= "Thank you for your report.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Click to update the table";
l10n.dl_analyze_update_button_title		= "Put the selected options as values into the table below";
l10n.dl_analyze_select_button_text		= "Click to select the table";
l10n.dl_analyze_select_button_title		= "Select all data in the table below";
l10n.dl_analyze_copy_button_text		= "Copy with [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Copy the selected table data via [ Ctrl ] + [ C ] or [ &#8984; ] + [ C ] into the clipboard";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text			= "Browser variables";
l10n.dl_analyze_table_values_text			= "Values";
l10n.dl_analyze_table_yes_text				= "Yes";
l10n.dl_analyze_table_no_text				= "No";
l10n.dl_analyze_table_stable_release_text	= "Stable Release";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;functions/variables";



// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo419_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=173086030";
l10n.dl_rel_notes_aoo418_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=165225766";
l10n.dl_rel_notes_aoo417_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.7+Release+Notes";
l10n.dl_rel_notes_aoo416_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.6+Release+Notes";
l10n.dl_rel_notes_aoo415_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=74691895";
l10n.dl_rel_notes_aoo414_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.4+Release+Notes";
l10n.dl_rel_notes_aoo413_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.3+Release+Notes";
l10n.dl_rel_notes_aoo412_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.2+Release+Notes";
l10n.dl_rel_notes_aoo411_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.1+Release+Notes";
l10n.dl_rel_notes_aoo410_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes";
l10n.dl_rel_notes_aoo401_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes";
l10n.dl_rel_notes_aoo400_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0+Release+Notes";
l10n.dl_help_link						= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link					= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link						= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link					= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link					= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link						= "https://www.openoffice.org/download/archive.html";
