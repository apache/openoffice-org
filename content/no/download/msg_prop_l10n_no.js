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
// Change xx to a valid ISO lang code.
DL.NL_LANG					= "nb";

// General:
l10n.dl_headline_text				= "Apache OpenOffice nedlasting";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Last ned Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Last ned Apache OpenOffice for et annet operativsystem, språk eller versjon";
l10n.dl_green_box_subtext1_text			= "Nedlasting fra Sourceforge.net - en tiltrodd nettside";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice binær-filer hentes fra Sourceforge.net - en tiltrodd nettside";
l10n.dl_green_box_subtext2_text			= "Velg ditt operativsystem, språk og versjon";
l10n.dl_green_box_subtext2_title		= "Velg ditt operativsystem, språk og versjon";
l10n.dl_green_box_selectbox_os_title		= "Velg ditt operativsystem";
l10n.dl_green_box_selectbox_lang_title		= "Velg ditt språk";
l10n.dl_green_box_selectbox_ver_title		= "Velg produkt-versjon";

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
						    "OS X (versjon >= 10.7) (DMG)",
						    "OS X (versjon <= 10.6) (DMG)",
						    "Flere plattformer / operativsystem" ];
 
/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "" ];

/* l10n.dl_green_box_select_box_lang_values_custom = [ "" ]; */
						    // Value	Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom = [ "ast",	"Asturisk",				"Asturianu",
						    "eu",	"Baskisk",				"Euskara",
						    "bg",	"Bulgarsk",				"български език",
						    "da",	"Dansk",				"Dansk",
						    "en-GB",	"Engelsk [British]",			"English [British]",
						    "en-US",	"Engelsk [US]",				"English [US]",
						    "fi",	"Finsk",				"Suomi",
						    "fr",	"Fransk",				"Français",
						    "gl",	"Galisisk",				"Galego",
						    "el",	"Gresk",				"ελληνικά",
						    "he",	"Hebraisk",				"עברית",
						    "hi",	"Hindi",				"हिन्दी",
						    "it",	"Italiensk",				"Italiano",
						    "ja",	"Japansk",				"日本語",
						    "ca",	"Katalansk",				"Català",
						    "ca-XV",	"Katalansk [Valencia AVL]",		"València (AVL)",
						    "ca-XR",	"Katalansk [Valencia RACV]",		"València (RACV)",
						    "km",	"Khmer",				"ភាសាខ្មែរ",
						    "zh-CN",	"Kinesisk [forenklet]",			"简体中文",
						    "zh-TW",	"Kinesisk [tradisjonelt]",		"正體中文",
						    "ko",	"Koreansk",				"한국어",
						    "lt",	"Litauisk",				"Lietuvių",
						    "nl",	"Nederlandsk",				"Nederlands",
						    "nb",	"Norsk",				"Norsk [Bokmål]",
						    "pl",	"Polsk",				"Polski",
						    "pt-BR",	"Portugisisk [Brasil]",			"Português [do Brasil]",
						    "pt",	"Portugisisk [Europa]",			"Português [Europeu]",
						    "ru",	"Russisk",				"Русский",
						    "gd",	"Skotsk [Gaelic]",			"Gàidhlig",
						    "sr",	"Serbisk [Cyrillic]",			"Cрпски [ћирилицом]",
						    "sk",	"Slovakisk",				"Slovenský jazyk [slovenčina]",
						    "sl",	"Slovensk",				"Slovenski jezik [slovenščina]",
						    "es",	"Spansk",				"Español",
						    "sv",	"Svensk",				"Svenska",
						    "ta",	"Tamilsk",				"தமிழ்",
						    "th",	"Thai",					"ภาษาไทย",
						    "cs",	"Tsjekkisk",				"Čeština",
						    "tr",	"Tyrkisk",				"Türkçe",
						    "de",	"Tysk",					"Deutsch",
						    "hu",	"Ungarsk",				"Magyar",
						    "vi",	"Vietnamesisk",				"Tiếng Việt" ];

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
						    "Eldre versjoner" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Hjelp å spre budskapet";
l10n.dl_share_light_blue_box_headline_title	= "Hjelp å spre budskapet og fortell dine venner om Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Vennligst fortell dine venner om Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Hjelp å spre budskapet og fortell dine venner om Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Offisiell Blogg";
l10n.dl_share_light_blue_box_blog_title		= "OpenOffice Blogg";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "OpenOffice Blogg";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Vennligst fortell dine venner om Apache OpenOffice via Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Del på Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Vennligst fortell dine venner om Apache OpenOffice via Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Del på Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Få Apache Openoffice Utvidelser og ordlister";
l10n.dl_ext_blue_box_headline_title		= "Velg fra et stort utvalg ekstra og individuell funksjonalitet";
l10n.dl_ext_blue_box_text_text			= "Utvid Apache OpenOffice med ny funksjonalitet fra et stort og voksende bibliotek av utvidelser og ordlister fra andre brukere.";
l10n.dl_ext_blue_box_text_title			= "Velg fra et bredt utvalg av ekstra og individuelt tilpasset funksjonalitet";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Få Apache OpenOffice maler";
l10n.dl_tlp_blue_box_headline_title		= "Velg fra et bredt utvalg av ekstra og individuelle dokumenter";
l10n.dl_tlp_blue_box_text_text			= "Utvid din Apache OpenOffice kreativitet med et stort og voksende bibliotek av maler fra andre brukere.";
l10n.dl_tlp_blue_box_text_title			= "Velg fra et bredt utvalg av ekstra og individuelle dokumenter";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Informasjon om utgivelsen";
l10n.dl_nav_sysreq_text				= "Systemkrav";
l10n.dl_nav_sysreq_title			= "Disk: ~300MB free - Minne: &gt;128MB - Prosessor: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Lisens";
l10n.dl_nav_license_title			= "Apache OpenOffice Lisens";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Kildekode";
l10n.dl_nav_source_title			= "For utviklere og avanserte brukere: Hent kildekoden for å bygge Apache OpenOffice self";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Instruksjoner for bygging";
l10n.dl_nav_build_title				= "For utviklere og avanserte brukere: Dokumentasjon på hvordan bygge Apache OpenOffice fra kilden";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "For utviklere: Software Development Kit";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Utvikler-bygg";
l10n.dl_nav_devbuilds_title			= "For frivillige testere: Utvikler-bygg";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Dokumentasjon";
l10n.dl_nav_schedule_text			= "Tidsplan for utgivelser";
l10n.dl_nav_schedule_title			= "Når planlegges nye versjoner?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Historisk utgivelses-tidsplan";
l10n.dl_nav_hist_schedule_title			= "Når var historiske utgivelser planlagt?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Installasjons-håndbok";
l10n.dl_nav_inst_guide_title			= "Instruksjoner for installering av Apache OpenOffice på Windows, macOS (OS&nbsp;X) og Linux maskiner";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Bruker-håndbok";
l10n.dl_nav_user_guide_title			= "Utfyllende brukerhåndbok for hverdagsbruk";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java og Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Forklarer hvorfor du bør bruke Java og hva det er";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Informasjon om End-of-life";
l10n.dl_nav_eol_title				= "Informasjon om utvgivelser som har nånn slutten av sin livssyklus";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Andre ressurser";
l10n.dl_nav_support_text			= "Brukerstøtte";
l10n.dl_nav_support_title			= "Hvis informasjoner over ikke svarte på dine spørsmål: Gratis og betalt brukerstøtte!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Lokale språk";
l10n.dl_nav_local_title				= "Informasjon og støtte på ditt favorittspråk";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Nedlastings-statistikk";
l10n.dl_nav_stat_title				= "Statistikk over nedlastinger og annet";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternativ nedlastings-lenke #1";
l10n.dl_nav_mirrors1_title			= "Bruk Sourceforge sitt nettsted å laste ned Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternativ nedlastings-lenke #2";
l10n.dl_nav_mirrors2_title			= "Bruk Apache sitt nettsted for å laste ned Apache OpenOffice kildekode";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "3dje parts versjoner og distribusjoner";
l10n.dl_nav_porting_title			= "Tilpasninger og distribusjoner fra 3dje parts leverandører";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Arkiverte og historiske utgivelser";
l10n.dl_nav_archive_title			= "Last ned arkiverte og historiske utgivelser";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Produktmerknader";
l10n.dl_nav_release_notes_title			= "Hva er nytt og hva er forbedret i Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Verifiser den nedlastede filen";
l10n.dl_nav_checksum_title			= "Hvordan verifisere den nedlastede filen med signaturer og hasher?";
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
l10n.dl_full_link_text				= "Last ned full installasjon";
l10n.dl_full_link_title				= "Klikk for å laste ned: ";
l10n.dl_langpack_link_text			= "Last ned språkpakke";
l10n.dl_langpack_link_title			= "Klikk for å laste ned: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Porting: Click to choose from 3rd party vendors";
l10n.dl_full_link_porting_title			= "Click to browse to the porting webpage and download from 3rd party vendors";
l10n.dl_full_link_archive_text			= "Archive: Click to choose from legacy releases";
l10n.dl_full_link_archive_title			= "Click to browse to the archive and download legacy releases";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Utgivelse: ";
l10n.dl_rel_info_milestone_text			= "Milepæl ";
l10n.dl_rel_info_buildid_text			= "Bygg ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Utgitt ";
l10n.dl_rel_notes_text				= "Produktmerknader";
l10n.dl_rel_notes_title				= "Produktmerknader for Apache OpenOffice ";

l10n.dl_headline_full_text			= "Full installasjon: ";
l10n.dl_headline_langpack_text			= "Språkpakke: ";
l10n.dl_filesize_text				= "Filstørrelse ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Signaturer og hasher: ";
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

l10n.dl_help_img_title				= "Hva er forskjellen mellom full installasjon og språkpakke?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Installasjons-info";
l10n.dl_help_text				= "Hva er en språkpakke?";
l10n.dl_help_title				= "Hva er forskjellen mellom full installasjon og språkpakke?";
l10n.dl_checksum_img_title			= "Hvordan verifisere nedlastingen med sjekksummer?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Checksum verify";
l10n.dl_checksum_text				= "Hvordan verifisere nedlastingen?";
l10n.dl_checksum_title				= "Hvordan verifisere nedlastingen med sjekksummer?";
l10n.dl_report_img_title			= "Virker ikke nedlastings-lenken? Klikk her for å rapportere.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Brutt lenke";
l10n.dl_report_text				= "Rapporter brutt lenke";
l10n.dl_report_title				= "Virker ikke nedlastings-lenken? Klikk her for å rapportere.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Ingen full installasjon tilgjengelig";
l10n.dl_full_link_error_title			= "Vennligst velg et annet språk, plattform eller versjon.";
l10n.dl_langpack_link_error_text		= "Ingen språkpakke tilgjengelig";
l10n.dl_langpack_link_error_title		= "Vennligst velg et annet språk, plattform eller versjon.";

l10n.dl_error_problem_img_title			= "Den valgte nedlastingen er ikke tilgjengelig";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Feilmelding";
l10n.dl_error_problem_text			= "Problem: ";
l10n.dl_error_solution_text			= "Løsning: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " er ikke tilgjengelig for ";
l10n.dl_error_please_select_1_text		= "Vennligst velg versjon 4.0.1.";
l10n.dl_error_please_select_2_text		= "Vennligst velg versjon 4.1.0 eller nyere.";
l10n.dl_error_please_select_3_text		= "Vennligst velg en nedlasting for Windows, macOS (OS&nbsp;X) eller Linux";
l10n.dl_error_please_select_4_text		= "Vennligst velg et annet språk eller versjon.";

l10n.dl_unknown_platform_text			= "ukjent operativsystem / plattform";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Hvordan melde om en ugyldig nedlastings-lenke?";
l10n.dl_analyze_instruction_select_text		= "<b>Velg dine favoritter</b>: Operativsystem, språk og versjon i det grønne feltet nedenfor.";
l10n.dl_analyze_instruction_verify_text		= "Bekreft at disse valgene <b>fortsatt ikke</b> fører til en gyldig nedlastings-lenke.";
l10n.dl_analyze_instruction_click_text		= "Klikk på knappen under den grønne boksen: ";
l10n.dl_analyze_instruction_copy_text		= "Kopier de valgte tabell-dataene til utklippstavlen: ";
l10n.dl_analyze_instruction_new_mail_text	= "Opprett en ny e-post.";
l10n.dl_analyze_instruction_problem_text	= "<b>Skriv en problembeskrivelse</b> (hva fungerer ikke og hva forventet du).";
l10n.dl_analyze_instruction_details_text	= "Vennligst også oppgi <b>detaljer om operativsystemet du bruker</b>.";
l10n.dl_analyze_instruction_paste_text		= "Lim inn den kopierte teksten på slutten av e-posten.";
l10n.dl_analyze_instruction_only_download_text	= "Vennligst <b>send e-posten kun ved nedlastings-problemer</b> og ikke ved installasjons-problemer.";
l10n.dl_analyze_instruction_no_install_text	= "Denne nettsiden kan ikke tilby noen hjelp angående installasjonsproblemer.";
l10n.dl_analyze_instruction_send_mail_text	= "Til slutt, <b>send e-posten</b> til: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice Development epost-liste";
l10n.dl_analyze_instruction_mailing_list_title	= "Send rapporten til epost-listen for Apache OpenOffice utviklere";
l10n.dl_analyze_instruction_learn_more_text	= "Klikk her for å lære mer om hva en epost-liste er ";
l10n.dl_analyze_instruction_learn_more_title	= "Lær om hva en epost-liste er ";
l10n.dl_analyze_instruction_answer_text		= "Vi vil forsøke å svare så fort vi får eposten og har analysert problemet.";
l10n.dl_analyze_instruction_thanks_text		= "Takk for din rapport.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Klikk for å oppdatere tabellen";
l10n.dl_analyze_update_button_title		= "Tilføy de valgte opsjonene som verdier i tabellen nedenfor";
l10n.dl_analyze_select_button_text		= "Klikk for å velge tabellen";
l10n.dl_analyze_select_button_title		= "Velg alle data i tabellen nedenfor";
l10n.dl_analyze_copy_button_text		= "Kopiere med [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Kopier de markerte tabell-dataene ved å klikke [ Ctrl ] + [ C ] or [ &#8984; ] + [ C ] til utklippstavlen";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text		= "Nettleser-variabler";
l10n.dl_analyze_table_values_text		= "Verdier";
l10n.dl_analyze_table_yes_text			= "Ja";
l10n.dl_analyze_table_no_text			= "Nei";
l10n.dl_analyze_table_stable_release_text	= "Stabil utgivelse";
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
