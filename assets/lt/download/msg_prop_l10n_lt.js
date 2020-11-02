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
DL.NL_LANG					= "lt";

// General:
l10n.dl_headline_text				= "Gauti „Apache OpenOffice“";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Gauti „Apache OpenOffice“";
l10n.dl_green_box_headline_title		= "Gauti „Apache OpenOffice“, pasirinkus operacinę sistemą, kalbą ir laidą";
l10n.dl_green_box_subtext1_text			= "Diegimo bylos saugomos tinklavietėje „Sourceforge.net“";
l10n.dl_green_box_subtext1_title		= "„Apache OpenOffice“ dvejetainės bylos saugomos tinklavietėje „Sourceforge.net“";
l10n.dl_green_box_subtext2_text			= "Rinktis operacinę sistemą, kalbą ir laidą";
l10n.dl_green_box_subtext2_title		= "Rinktis operacinę sistemą, kalbą ir laidą";
l10n.dl_green_box_selectbox_os_title	= "Rinktis operacinę sistemą";
l10n.dl_green_box_selectbox_lang_title	= "Rinktis kalbą";
l10n.dl_green_box_selectbox_ver_title	= "Rinktis laidą";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines below the 3 following variables)!
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
							"Linux 64-bit (x86-64) (DEB)",
							"Linux 64-bit (x86-64) (RPM)",
							"Linux 32-bit (x86) (DEB)",
							"Linux 32-bit (x86) (RPM)",
							"OS X (version >= 10.7) (DMG)",
							"OS X (version <= 10.6) (DMG)",
							"Daugiau platformų arba operacinių sistemų" ];

// l10n.dl_green_box_select_box_language_values	= [ "" ];
l10n.dl_green_box_select_box_language_values	= [ "" ];

// l10n.dl_green_box_select_box_lang_values_custom = [ "" ];
						 // Value	Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom	= [ "en-US",		"Anglų (JAV)",				"English [US]",
							"en-GB",	"Anglų (JK)",				"English [British]",
							"ast",		"Astūrų",					"Asturianu",
							"eu",		"Baskų",					"Euskara",
							"bg",		"Bulgarų",					"български език",
							"cs",		"Čekų",						"Čeština",
							"da",		"Danų",						"Dansk",
							"gl",		"Galų",						"Galego",
							"el",		"Graikų",					"ελληνικά",
							"he",		"Hebrajų",					"עברית",
							"hi",		"Hindi",					"हिन्दी",
							"es",		"Ispanų",					"Español",
							"it",		"Italų",					"Italiano",
							"ja",		"Japonų",					"日本語",
							"ca",		"Katalonų",					"Català",
							"zh-CN",	"Kinų (supaprastinta)",		"简体中文",
							"zh-TW",	"Kinų (tradicinė)",			"正體中文",
							"km",		"Kmerų",					"ភាសាខ្មែរ",
							"ko",		"Korėjiečių",				"한국어",
							"pl",		"Lenkų",					"Polski",
							"lt",		"Lietuvių",					"Lietuvių",
							"nb",		"Norvegų (Bokmål)",			"Norsk [Bokmål]",
							"nl",		"Olandų",					"Nederlands",
							"pt-BR",	"Portugalų (Brazilija)",	"Português [do Brasil]",
							"pt",		"Portugalų (Portugalija)",	"Português [Europeu]",
							"fr",		"Prancūzų",					"Français",
							"ru",		"Rusų",						"Русский",
							"sr",		"Serbų (kirilica)",			"Cрпски [ћирилицом]",
							"sk",		"Slovakų",					"Slovenský jazyk [slovenčina]",
							"sl",		"Slovėnų",					"Slovenski jezik [slovenščina]",
							"fi",		"Suomių",					"Suomi",
							"gd",		"Škotų (gėlų)",				"Gàidhlig",
							"sv",		"Švedų",					"Svenska",
							"th",		"Tajų",						"ภาษาไทย",
							"ta",		"Tamilų",					"தமிழ்",
							"tr",		"Turkų",					"Türkçe",
							"ca-XV",	"Valensų (AVL)",			"València (AVL)",
							"ca-XR",	"Valensų (RACV)",			"València (RACV)",
							"hu",		"Vengrų",					"Magyar",
							"vi",		"Vietnamiečių",				"Tiếng Việt",
							"de",		"Vokiečių",					"Deutsch" ];

// l10n.dl_green_box_select_box_version_values  = [ "" ];
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
							"Senesnės laidos" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text		= "Skleisti žinią";
l10n.dl_share_light_blue_box_headline_title		= "Skleisti žinią apie „Apache OpenOffice“, papasakojant savo draugams";
l10n.dl_share_light_blue_box_text_text			= "Papasakoti apie „Apache OpenOffice“ savo draugams!";
l10n.dl_share_light_blue_box_text_title			= "Skleisti žinią apie „Apache OpenOffice“, papasakojant savo draugams";
l10n.dl_share_light_blue_box_blog_text			= "Tarnybinis tinklaraštis";
l10n.dl_share_light_blue_box_blog_title			= "„Apache OpenOffice“ tinklaraštis";
l10n.dl_share_light_blue_box_blog_src			= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt			= "„Apache OpenOffice“ tinklaraštis";
l10n.dl_share_light_blue_box_facebook_text		= "„Facebook“";
l10n.dl_share_light_blue_box_facebook_title		= "Papasakoti apie „Apache OpenOffice“ savo draugams, pasitelkiant „Facebook“";
l10n.dl_share_light_blue_box_facebook_src		= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt		= "Skleisti žinią, pasitelkiant „Facebook“";
l10n.dl_share_light_blue_box_twitter_text		= "„Twitter“";
l10n.dl_share_light_blue_box_twitter_title		= "Papasakoti apie „Apache OpenOffice“ savo draugams, pasitelkiant „Twitter“";
l10n.dl_share_light_blue_box_twitter_src		= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt		= "Skleisti žinią, pasitelkiant „Twitter“";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Gauti „Apache OpenOffice“ plėtinių ir žodynų";
l10n.dl_ext_blue_box_headline_title		= "Rinktis iš daugybės papildomų priemonių";
l10n.dl_ext_blue_box_text_text			= "Plėsti „Apache OpenOffice“ galimybes, pasitelkiant naudotojų sukauptą turtingą ir nuolat gausinamą plėtinių ir žodynų biblioteką.";
l10n.dl_ext_blue_box_text_title			= "Rinktis iš daugybės papildomų priemonių";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Gauti „Apache OpenOffice“ ruošinių";
l10n.dl_tlp_blue_box_headline_title		= "Rinktis iš daugybės papildomų dokumentų";
l10n.dl_tlp_blue_box_text_text			= "Plėsti „Apache OpenOffice“ galimybes, pasitelkiant naudotojų sukauptą turtingą ir nuolat gausinamą ruošinių biblioteką.";
l10n.dl_tlp_blue_box_text_title			= "Rinktis iš daugybės papildomų dokumentų";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Leidyba";
l10n.dl_nav_sysreq_text				= "Sistemos reikalavimai";
l10n.dl_nav_sysreq_title			= "Kaupiklis: ~300MB laisvos vietos - Atmintis: &gt;128MB - Procesorius: &gt;500MHz - OS: „Win“, „Linux“, „macOS“, „Solaris“, „FreeBSD“...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Licencija";
l10n.dl_nav_license_title			= "„Apache OpenOffice“ licencija";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Pirminis tekstas";
l10n.dl_nav_source_title			= "Skirta programuotojams ir įgudusiems naudotojams, norintiems gauti pirminį tekstą „Apache OpenOffice“ sudarymui.";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Programinės įrangos sudarymo vadovėlis";
l10n.dl_nav_build_title				= "Skirta programuotojams ir įgudusiems naudotojams, norintiems sudaryti „Apache OpenOffice“";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Programavimo priemonių rinkinys (SDK)";
l10n.dl_nav_sdk_title				= "Programuotojams skirtas programavimo priemonių rinkinys.";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Programinės įrangos dariniai";
l10n.dl_nav_devbuilds_title			= "Programinės įrangos dariniai programavimo kokybei tikrinti";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Žinynas";
l10n.dl_nav_schedule_text			= "Laidų tvarkaraščiai";
l10n.dl_nav_schedule_title			= "Kada numatomos naujos laidos?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Senųjų laidų tvarkaraštis";
l10n.dl_nav_hist_schedule_title			= "Kada buvo numatytos senosios laidos?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Diegimo vadovėliai";
l10n.dl_nav_inst_guide_title			= "Kaip diegti „Apache OpenOffice“ operacinėse sistemose „Windows“, „Linux“ ir „Mac OS“?";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Naudojimo vadovėliai";
l10n.dl_nav_user_guide_title			= "Išsamūs kasdienio „Apache OpenOffice“ naudojimo vadovėliai";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java ir „Apache OpenOffice“";
l10n.dl_nav_why_java_title			= "Kas yra javos kalba ir kodėl ji naudotina?";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Pasenusi programinė įranga";
l10n.dl_nav_eol_title				= "Žinios apie pasenusias laidas";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Kiti ištekliai";
l10n.dl_nav_support_text			= "Pagalba";
l10n.dl_nav_support_title			= "Nemokama ir mokama pagalba, jei klausimui išspręsti čia skelbiamos informacijos vis dėlto nepakako";
l10n.dl_nav_support_href			= "https://www.openoffice.org/lt/support/";
l10n.dl_nav_local_text				= "Vertimai";
l10n.dl_nav_local_title				= "Žinios ir pagalba pageidaujama kalba";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Platinimo statistika";
l10n.dl_nav_stat_title				= "Platinimo ir kitokia statistika";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Antrinės platinimo stotys nr. 1";
l10n.dl_nav_mirrors1_title			= "Gauti „Apache OpenOffice“ iš antrinių „Apache“ stočių";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Antrinės platinimo stotys nr. 2";
l10n.dl_nav_mirrors2_title			= "Gauti „Apache OpenOffice“ iš antrinių „Apache“ stočių";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/aoo-closer.cgi/openoffice/";
l10n.dl_nav_porting_text			= "Trečiųjų šalių perkėlimo ir platinimo paketai";
l10n.dl_nav_porting_title			= "Trečiųjų šalių įrangos platintojų parengti perkėlimo ir platinimo paketai";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Archyvinės ir pasenusios laidos";
l10n.dl_nav_archive_title			= "Gauti archyvines ir pasenusias laidas";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text		= "Laidos apžvalga";
l10n.dl_nav_release_notes_title		= "Kas „Apache OpenOffice“ nauja arba patobulinta?";
l10n.dl_nav_release_notes_href		= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Tikrinti gautą bylą";
l10n.dl_nav_checksum_title			= "Kaip tikrinti gautą bylą parašais ir maišomis?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title		= "„Sourceforge“ – gauti, plėtoti ir skelbti nemokamą atvirąją programinę įrangą";
l10n.dl_img_sourceforge_href		= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "„Sourceforge“";
l10n.dl_img_w3c_title				= "W3C ženklinimo patikros paslauga – tikrinti tinklo dokumentų (HTML, XHTML, ...) ženklinimą";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src					= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt					= "W3C tikrintuvas";

// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Gauti visą dienginį";
l10n.dl_full_link_title				= "Spustelėjus gauti: ";
l10n.dl_langpack_link_text			= "Gauti kalbos paketą";
l10n.dl_langpack_link_title			= "Spustelėjus gauti: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text		= "Perkėlimo paketai: spustelėjus rinktis trečiųjų šalių įrangos platintoją";
l10n.dl_full_link_porting_title		= "Spustelėjus naršyti perkėlimo paketų tinklalapį ir gauti įrangą iš trečiųjų šalių platintojų";
l10n.dl_full_link_archive_text		= "Archyvas: spustelėjus rinktis pasenusias laidas";
l10n.dl_full_link_archive_title		= "Spustelėjus naršyti archyvą ir gauti pasenusias laidas";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text		= "Laida: ";
l10n.dl_rel_info_milestone_text		= "įvykis – ";
l10n.dl_rel_info_buildid_text		= "darinys – ID ";
l10n.dl_rel_info_svn_text			= "SVN – "
l10n.dl_rel_info_rel_date_text		= "išleista ";
l10n.dl_rel_notes_text				= "laidos apžvalga";
l10n.dl_rel_notes_title				= "„Apache OpenOffice“ laidos apžvalga ";

l10n.dl_headline_full_text			= "Visas dieginys: ";
l10n.dl_headline_langpack_text		= "Kalbos paketas: ";
l10n.dl_filesize_text				= "bylos dydis ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text		= "parašai ir maišos: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS parašo byla";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC parašas, skirtas: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 maiša, skirta: ";
l10n.dl_checksum_sha256_text		= "SHA256";
l10n.dl_checksum_sha256_title		= "SHA256 maiša, skirta: ";
l10n.dl_checksum_sha512_text		= "SHA512";
l10n.dl_checksum_sha512_title		= "SHA512 maiša, skirta: ";

l10n.dl_help_img_title				= "Kuo skiriasi visas dieginys nuo kalbos paketo?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Diegimo informacija";
l10n.dl_help_text					= "Kas yra kalbos paketas?";
l10n.dl_help_title					= "Kuo skiriasi visas dieginys nuo kalbos paketo?";
l10n.dl_checksum_img_title			= "Kaip tikrinti gautą bylą kontrolinėmis sumomis?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Tikrinti kontrolinėmis sumomis";
l10n.dl_checksum_text				= "Kaip tikrinti gautus duomenis?";
l10n.dl_checksum_title				= "Kaip tikrinti gautą bylą kontrolinėmis sumomis?";
l10n.dl_report_img_title			= "Neveikia gavimo saitas? Spustelėjus pranešti.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Neveikiantis saitas";
l10n.dl_report_text					= "Pranešti apie neveikiantį saitą";
l10n.dl_report_title				= "Neveikia gavimo saitas? Spustelėjus pranešti.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text		= "Viso dieginio nėra";
l10n.dl_full_link_error_title		= "Rinktis kitą kalbą, platformą, arba laidą.";
l10n.dl_langpack_link_error_text	= "Kalbos paketo nėra";
l10n.dl_langpack_link_error_title	= "Rinktis kitą kalbą, platformą, arba laidą.";

l10n.dl_error_problem_img_title		= "Pasirinktos bylos nėra";
l10n.dl_error_problem_img_src		= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt		= "Klaidos tekstas";
l10n.dl_error_problem_text			= "Problema: ";
l10n.dl_error_solution_text			= "Sprendinys: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text	= " nėra ";
l10n.dl_error_please_select_1_text		= "Rinktis laidą 4.0.1.";
l10n.dl_error_please_select_2_text		= "Rinktis laidą 4.1.0 arba naujesnę.";
l10n.dl_error_please_select_3_text		= "Rinktis operacinėms sistemoms „Windows“, „Linux“, arba „OS X“ skirtą dieginį.";
l10n.dl_error_please_select_4_text		= "Rinktis kitą kalbą arba laidą.";

l10n.dl_unknown_platform_text			= "nežinoma operacinė sistema arba platforma";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";

// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text					= "Kaip pranešti apie neveikiantį saitą?";
l10n.dl_analyze_instruction_select_text			= "<b>Rinktis</b>: operacinę sistemą, kalbą ir laidą žemiau esančioje žaliojoje juostoje.";
l10n.dl_analyze_instruction_verify_text			= "Tikrinti, ar pažymėtos nuostatos <b>vis tiek</b> nenukreipia į veikiančius gavimo saitus.";
l10n.dl_analyze_instruction_click_text			= "Spustelėti mygtuką po žaliąja juosta: ";
l10n.dl_analyze_instruction_copy_text			= "Kopijuoti pažymėtus lentelės duomenis į iškarpinę: ";
l10n.dl_analyze_instruction_new_mail_text		= "Kurti naują laišką.";
l10n.dl_analyze_instruction_problem_text		= "<b><b>Aprašyti problemą</b> (ko veiksmu siekiama ir kas neveikia).";
l10n.dl_analyze_instruction_details_text		= "Pateikti <b>smulkesnius duomenis apie naudojamą operacinę sistemą</b>.";
l10n.dl_analyze_instruction_paste_text			= "Įklijuoti nukopijuotus duomenis laiško gale.";
l10n.dl_analyze_instruction_only_download_text	= "Laiškus siųsti, tik susidūrus su <b>gavimo</b>, o ne diegimo nesklandumais.";
l10n.dl_analyze_instruction_no_install_text		= "Šis tinklalapis diegimo nesklandumų spręsti nepadės.";
l10n.dl_analyze_instruction_send_mail_text		= "Galiausiai <b>siųsti laišką</b>: ";
l10n.dl_analyze_instruction_mailing_list_text	= "„Apache OpenOffice“ plėtojimui skirtai susirašinėjimo grupei";
l10n.dl_analyze_instruction_mailing_list_title	= "Siųsti pranešimą „Apache OpenOffice“ plėtotojų susirašinėjimo grupei";
l10n.dl_analyze_instruction_learn_more_text		= "Spustelėjus sužinoti daugiau apie susirašinėjimo grupes";
l10n.dl_analyze_instruction_learn_more_title	= "Sužinoti daugiau apie susirašinėjimo grupes";
l10n.dl_analyze_instruction_answer_text			= "Atsakymas bus išsiųstas, gavus laišką ir išnagrinėjus nesklandumą.";
l10n.dl_analyze_instruction_thanks_text			= "Ačiū už pranešimą.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Spustelėjus naujinti lentelę";
l10n.dl_analyze_update_button_title		= "Į žemiau esančią lentelę pažymėtas nuostatas įvesti reikšmėmis";
l10n.dl_analyze_select_button_text		= "Spustelėjus rinktis lentelę";
l10n.dl_analyze_select_button_title		= "Rinktis visus duomenis žemiau esančioje lentelėje";
l10n.dl_analyze_copy_button_text		= "Kopijuoti klavišų deriniu [Vald] + [C]";
l10n.dl_analyze_copy_button_title		= "Kopijuoti pažymėtus lentelės duomenis į iškaprinę klavišų deriniu [Vald] + [C]";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text			= "Naršyklės kintamieji";
l10n.dl_analyze_table_values_text			= "Reikšmės";
l10n.dl_analyze_table_yes_text				= "Taip";
l10n.dl_analyze_table_no_text				= "Ne";
l10n.dl_analyze_table_stable_release_text	= "Patikima laida";
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
l10n.dl_help_link						= "https://www.openoffice.org/lt/download/full_vs_lp.html";
l10n.dl_checksum_link					= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link						= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link					= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link					= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link						= "https://www.openoffice.org/download/archive.html";
