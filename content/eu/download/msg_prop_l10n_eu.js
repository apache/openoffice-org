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
DL.NL_LANG					= "eu";

// General:
l10n.dl_headline_text				= "Apache OpenOffice-ren jaitsiera";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Jaitsi Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Jaitsi nahi duzun sistema eragile, hizkuntz eta bertsioko Apache OpenOffice";
l10n.dl_green_box_subtext1_text			= "Sourceforge.net-ek ostatu emana - Webgune fidagarria";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice-ren fitxategi bitarrei Sourceforge.net-ek ematen die ostatu - Webgune fidagarria";
l10n.dl_green_box_subtext2_text			= "Aukera itzazu sistema eragilea, hizkuntza eta bertsioa";
l10n.dl_green_box_subtext2_title		= "Aukera itzazu sistema eragilea, hizkuntza eta bertsioa";
l10n.dl_green_box_selectbox_os_title		= "Aukera ezazu sistema eragilea";
l10n.dl_green_box_selectbox_lang_title		= "Aukera ezazu hizkuntza";
l10n.dl_green_box_selectbox_ver_title		= "Aukera ezazu argitaratze-bertsioa";

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
						    "eu",	"Euskara",				"Euskara",
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
												"Bertsio zaharragoak" ];

// Download: Strings in the sub-green box (used in "index.html").

// Download: Strings in the yellow box (used in "index.html").

// Download: Strings in the sub-yellow box (used in "index.html").

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Lagundu Apache OpenOffice zabaltzen";
l10n.dl_share_light_blue_box_headline_title	= "Lagun ezazu Apache OpenOffice zabaltzen, zure lagunei haren berri emanez";
l10n.dl_share_light_blue_box_text_text		= "Mesedez, aurkeztu Apache OpenOffice lagunei:";
l10n.dl_share_light_blue_box_text_title   	= "Lagun ezazu Apache OpenOffice zabaltzen, zure lagunei haren berri emanez";
l10n.dl_share_light_blue_box_blog_text		= "Blog ofiziala";
l10n.dl_share_light_blue_box_blog_title		= "OpenOffice-ren bloga";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "OpenOffice-ren bloga";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Mesedez, aurkeztu Apache OpenOffice lagunei Facebook-en bidez";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Partekatu Facebook-ean";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Mesedez, aurkeztu Apache OpenOffice lagunei Twitter-en bidez";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Partekatu Twitter-ean";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Lortu Apache OpenOffice-ren gehigarri eta hiztegiak";
l10n.dl_ext_blue_box_headline_title		= "Aukeratu funtzionaltasun gehigarri askoren artean";
l10n.dl_ext_blue_box_text_text			= "Zabaldu Apache OpenOffice-ren funtzionaltasuna handia den eta handituz doan beste erabiltzaile batzuek osatutako gehigarri- eta hiztegi-liburutegien bidez.";
l10n.dl_ext_blue_box_text_title			= "Aukera ezazu funtzionaltasun gehigarri askoren artean";
l10n.dl_ext_blue_box_text_href			= "http://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Lortu Apache OpenOffice-ren Txantilioiak";
l10n.dl_tlp_blue_box_headline_title		= "Aukera ezazu dokumentu gehigarri askoren artean";
l10n.dl_tlp_blue_box_text_text			= "Zabaldu Apache OpenOffice-ren kreazio-ahalmena handia den eta handituz doan beste erabiltzaile batzuek eratutako txantiloi-liburutegiaren bidez.";
l10n.dl_tlp_blue_box_text_title			= "Aukera ezazu dokumentu gehigarri askoren artean";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Informazio gehigarria";
l10n.dl_nav_release_notes_text			= "Argitaratze oharrak";
l10n.dl_nav_release_notes_title			= "Apache OpenOffice-an berriki hobetu eta gehitutakoa";
l10n.dl_nav_sysreq_text				= "Sistema-baldintzak";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB erabilgarri - Memoria: &gt;128MB - Prozesadorea: &gt;500MHz - SE: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "/dev_docs/source/sys_reqs_aoo40.html";
l10n.dl_nav_checksum_text			= "Egiaztatu jaitsitako fitxategia";
l10n.dl_nav_checksum_title			= "Zelan egiaztatu jaitsitako fitxategiak sinadurez eta hash-ez?";
l10n.dl_nav_license_text			= "Lizentzia";
l10n.dl_nav_license_title			= "Apache OpenOffice-ren Lizentzia";
l10n.dl_nav_license_href			= "/license.html";
l10n.dl_nav_source_text				= "Iturri-kodea";
l10n.dl_nav_source_title			= "Garatzaile eta erabiltzaile aurreratuentzat: Lortu iturri-kodea, Apache OpenOffice eraikitzeko zerotik hasita.";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Eraikitzeko laguntza";
l10n.dl_nav_build_title				= "Garatzaile eta erabiltzaile aurreratuentzat: Apache OpenOffice zerotik hasita eraikitzeko gida.";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Softwarea garatzeko tresnak (SDK)";
l10n.dl_nav_sdk_title				= "Garatzailerentzat: Softwarea garatzeko tresnak";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "garatzen dauden bertsioak";
l10n.dl_nav_devbuilds_title			= "QA-tarako bolondresentzat: Garatzen dauden bertsioak";
l10n.dl_nav_devbuilds_href			= "/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Dokumentazioa";
l10n.dl_nav_schedule_text			= "Argitaratze aurreikuspena";
l10n.dl_nav_schedule_title			= "Noizko itxaroten dira aurreikusitako argitaratze berriak?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Argitaratze historikoen ikuspena";
l10n.dl_nav_hist_schedule_title			= "Noiz egin ziren aurreko argitaratzeak?";
l10n.dl_nav_inst_guide_text			= "Jartzeko gidak";
l10n.dl_nav_inst_guide_title			= "OpenOffice Windows, macOS (OS&nbsp;X) eta Linux makinetan jartzeko argibideak";
l10n.dl_nav_user_guide_text			= "Erabiltzailearen gidak";
l10n.dl_nav_user_guide_title			= "Eguneko lanean erabil daitezkeen erabiltzaileentzako gidak";
l10n.dl_nav_why_java_text			= "Java eta Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Java zergatik erabili eta zer den azalduta";
l10n.dl_nav_eol_text				= "Iraungitzearen informazioa";
l10n.dl_nav_eol_title				= "Iraungi diren bertsioei buruzko informazioa";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Beste baliabide batzuk";
l10n.dl_nav_support_text			= "Laguntza";
l10n.dl_nav_support_title			= "Goian aipatutako informazioa nahikoa ez baduzu: doako eta ordaindutako laguntza!";
l10n.dl_nav_support_href			= "/support/index.html";
l10n.dl_nav_local_text				= "Bertakotzeak";
l10n.dl_nav_local_title				= "Argibideak eta laguntza hizkuntza askotan";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Deskarga-estatistikak";
l10n.dl_nav_stat_title				= "Deskarga-estatistikak eta beste estatistika batzuk";
l10n.dl_nav_mirrors1_text			= "Deskargatarako 1. ordezko gunea";
l10n.dl_nav_mirrors1_title			= "Erabil itzazu Apache-ren ordezko guneak Apache OpenOffice jaisteko";
l10n.dl_nav_mirrors2_text			= "Deskargatarako 2. ordezko gunea";
l10n.dl_nav_mirrors2_title			= "Erabil itzazu Apache-ren ordezko guneak Apache OpenOffice jaisteko";
l10n.dl_nav_porting_text			= "Beste banaketa eta moldaketa batzuk";
l10n.dl_nav_porting_title			= "USB-tik zuzenean egikaritzeko banaketak eta beste SE-tarako moldaketak beste saltzaile batzuengandik";
l10n.dl_nav_archive_text			= "Artxibatutako bertsioak";
l10n.dl_nav_archive_title			= "Jaitsi artxibatutako aurreko bertsioak";
l10n.dl_nav_devbuilds_text			= "Garapen eraikuntzak";
l10n.dl_nav_devbuilds_title			= "Kalitatea ziurtatzerako (KZ/QA) boluntarioentzako garapen eraikuntzak";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Software askea jaitsi, garatu eta argitaratzeko gunea";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C-ren markatzearen egiaztatze zerbitzua - Egiaztatu web-eko dokumentuen markatzea (HTML, XHTML, ...)";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C-ren egiaztatzailea";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Jaitsi eraketa osoa";
l10n.dl_full_link_title				= "Egizu klik jaisteko: ";
l10n.dl_langpack_link_text			= "Jaitsi hizkuntz paketea";
l10n.dl_langpack_link_title			= "Egizu klik jaisteko: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Moldaketak: Egin klik aukeratzeko beste saltzaile batzuengandik";;
l10n.dl_full_link_porting_title			= "Egizu klik moldaketen web-orria arakatzeko eta beste saltzaile batzuen moldaketak jaisteko";
l10n.dl_full_link_archive_text			= "Artxibategia: Egin klik hautatzeko aurreko bertsioen artean";
l10n.dl_full_link_archive_title			= "Egizu klik artxibatutako aurreko bertsioak arakatzeko edo/eta jaisteko";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Argitaratzea: ";
l10n.dl_rel_info_milestone_text			= "Gertaera garrantzitsu ";
l10n.dl_rel_info_buildid_text			= "Eraikiaren IDa ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Argitaratua ";
l10n.dl_rel_notes_text				= "Argitaratze oharrak";
l10n.dl_rel_notes_title				= "Apache OpenOffice-ren argitaratze oharrak ";

l10n.dl_headline_full_text			= "Eraketa osoa: ";
l10n.dl_headline_langpack_text			= "Hizkuntz paketea: ";
l10n.dl_filesize_text				= "Fitxategiaren tamaina ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Sinadurak eta hash-ak: ";
l10n.dl_checksum_keys_text			= "GILTZAK";
l10n.dl_checksum_keys_title			= "GILTZEN sinadura-fitxategia";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC sinadura hurrengo fitxategirako: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 hash-a hurrengo fitxategirako: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 hash-a hurrengo fitxategirako: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 hash-a hurrengo fitxategirako: ";

l10n.dl_help_img_title				= "Zein da eraketa oso bat eta hizkuntz pakete baten arteko ezberdintasuna?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Jartzeko informazioa";
l10n.dl_help_text				= "Zer da hizkuntz pakete bat?";
l10n.dl_help_title				= "Zein da eraketa oso bat eta hizkuntz pakete baten arteko ezberdintasuna?";
l10n.dl_checksum_img_title			= "Zelan egiaztatu jaitsitako fitxategia egiaztatze-baturen bidez?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Egiaztatze-baturen bidezko egiaztatzea";
l10n.dl_checksum_text				= "Zelan egiaztatu jaitsitakoa?";
l10n.dl_checksum_title				= "Nola egiaztatu jaitsitako fitxategia egiaztatze-baturen bidez?";
l10n.dl_report_img_title			= "Jaisteko esteka ezegokia? Egizu klik hemen horren berri emateko.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Esteka ezegokia";
l10n.dl_report_text				= "Esteka ezegoki baten berria eman";
l10n.dl_report_title				= "Esteka ezegoki bat dago? Egizu klik hemen berria emateko.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Ez dago eskuragarri eraketa oso hori";
l10n.dl_full_link_error_title			= "Mesedez aukera ezazu beste hizkuntza, plataforma edo bertsio bat.";
l10n.dl_langpack_link_error_text		= "Ez dago eskuragarri hizkuntz pakete hori";
l10n.dl_langpack_link_error_title		= "Mesedez aukera ezazu beste hizkuntza, plataforma edo bertsio bat.";

l10n.dl_error_problem_img_title			= "Jaisteko aukeratutako fitxategia ez dago erabilgarri";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Akatsaren testua";
l10n.dl_error_problem_text			= "Arazoa: ";
l10n.dl_error_solution_text			= "Konponbidea: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " ez gago eskuragarri XXXXXXX-(e)tarako ";
l10n.dl_error_please_select_1_text		= "Mesedez aukera ezazu 4.0.1 bertsioa";
l10n.dl_error_please_select_2_text		= "Mesedez aukera ezazu 4.1.0 bertsioa edo berriagoa.";
l10n.dl_error_please_select_3_text		= "Mesedez aukera ezazu Windows, macOS (OS&nbsp;X) edo Linux-etarako fitxategi bat.";
l10n.dl_error_please_select_4_text		= "Mesedez aukera ezazu beste hizkuntza edo bertsio bat.";

l10n.dl_unknown_platform_text			= "sistema eragile edo plataforma ezezaguna";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Nola eman esteka ezegoki baten berri?";
l10n.dl_analyze_instruction_select_text		= "<b>Aukera ezazu</b> hizkuntza, sistema eragilea eta bertsioa behek orlegietan.";
l10n.dl_analyze_instruction_verify_text		= "Egiaztatu aukera horiek <b>oraindik</b> esteka egokitara bideratzn ez dutela.";
l10n.dl_analyze_instruction_click_text		= "Egizu klik lauki orlegiaren beheko botoian:";
l10n.dl_analyze_instruction_copy_text		= "Kopia ezazu hautatutako taula-datuak arbelean:";
l10n.dl_analyze_instruction_new_mail_text	= "Mezu berria sortu.";
l10n.dl_analyze_instruction_problem_text	= "<b>Idatzi arazoari buruzko azalpenak</b> (zer ez dabil ondo eta zer itxaroten duzu).";
l10n.dl_analyze_instruction_details_text	= "Mesedez gehitu ezazu <b>sistema eragileari buruzko informazioa</b> ere.";
l10n.dl_analyze_instruction_paste_text		= "Itsatsi kopiatutako datuak mezuaren amaieran.";
l10n.dl_analyze_instruction_only_download_text	= "Mesedez <b>bidali mezua jaisteko arazoak izanez gero bakarrik,</b> ez programa ordenagailuan jartzeko.";
l10n.dl_analyze_instruction_no_install_text	= "Web-orri honek ezin du lagundu programa ordenagailuan jartzeko arazoetan.";
l10n.dl_analyze_instruction_send_mail_text	= "Azkenez, <b>bidali mezua</b> hona: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice-ren garapenerako posta-zerrenda";
l10n.dl_analyze_instruction_mailing_list_title	= "Bidali mezua Apache OpenOffice-ren garatzaileen posta zerrendara";
l10n.dl_analyze_instruction_learn_more_text	= "Egin klik hemen posta-zerrendei buruz gehiago jakiteko";
l10n.dl_analyze_instruction_learn_more_title	= "Ikasi gehiago posta-zerrendei buruz";
l10n.dl_analyze_instruction_answer_text		= "Saiatuko gara erantzuten mezua jaso eta arazoa aztertu bezain laster.";
l10n.dl_analyze_instruction_thanks_text		= "Eskerrik asko berri emateagatik.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Egizu klik taula eguneratzeko";
l10n.dl_analyze_update_button_title		= "Jarri hautatutako aukerak beheko taularen balio legez";
l10n.dl_analyze_select_button_text		= "Egizu klik taula hautatzeko";
l10n.dl_analyze_select_button_title		= "Hautatu beheko taularen datu guztiak";
l10n.dl_analyze_copy_button_text		= "Kopiatu [Ctrl] + [C]-z";
l10n.dl_analyze_copy_button_title		= "Kopiatu hautatutako taula-datuak arbelean [Ctrl] + [C]-ren bidez";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text		= "Nabigatzailearen aldagaiak";
l10n.dl_analyze_table_values_text		= "Balioak";
l10n.dl_analyze_table_yes_text			= "Bai";
l10n.dl_analyze_table_no_text			= "Ez";
l10n.dl_analyze_table_stable_release_text	= "Argitaratze egonkorra";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;functions/variables";



// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo417_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.7+Release+Notes";
l10n.dl_rel_notes_aoo416_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.6+Release+Notes";
l10n.dl_rel_notes_aoo415_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.5+Release+Notes";
l10n.dl_rel_notes_aoo414_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.4+Release+Notes";
l10n.dl_rel_notes_aoo413_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.3+Release+Notes";
l10n.dl_rel_notes_aoo412_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.2+Release+Notes";
l10n.dl_rel_notes_aoo411_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.1+Release+Notes";
l10n.dl_rel_notes_aoo410_link			= "http://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes";
l10n.dl_rel_notes_aoo401_link			= "http://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes";
l10n.dl_rel_notes_aoo400_link			= "http://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0+Release+Notes";
//l10n.dl_help_link				= "http://www.openoffice.org/download/eu/full_vs_lp.html";
l10n.dl_help_link				= "http://www.openoffice.org/eu/download/full_vs_lp.html";
l10n.dl_checksum_link				= "http://www.openoffice.org/download/checksums.html";
l10n.dl_report_link				= "http://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link				= "http://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "http://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "/download/other-341.html";

