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
DL.NL_LANG					= "nl";

// General:
l10n.dl_headline_text				= "Apache OpenOffice downloaden";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Download Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Download Apache OpenOffice voor uw favoriete besturingssysteem, taal en versie";
l10n.dl_green_box_subtext1_text			= "Gehost door Sourceforge.net - Een vertrouwde website";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice binaire bestanden worden gehost door Sourceforge.net - Een vertrouwde website";
l10n.dl_green_box_subtext2_text			= "Selecteer uw favoriete besturingssysteem, taal en versie";
l10n.dl_green_box_subtext2_title		= "Selecteer uw favoriete besturingssysteem, taal en versie";
l10n.dl_green_box_selectbox_os_title		= "Selecteer uw favoriete besturingssysteem";
l10n.dl_green_box_selectbox_lang_title		= "Selecteer uw favoriete taal";
l10n.dl_green_box_selectbox_ver_title		= "Selecteer uw favoriete versie";

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
						    "Meer platformen / besturingssystemen" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "" ];

/* l10n.dl_green_box_select_box_lang_values_custom = [ "" ]; */
						    // Value	Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom = [ "ast",	"Asturisch",				"Asturianu",
						    "eu",	"Baskisch",				"Euskara",
						    "bg",	"Bulgaars",				"български език",
						    "ca",	"Catalaans",				"Català",
						    "ca-XV",	"Catalaans Valencia AVL",		"Català València (AVL)",
						    "ca-XR",	"Catalaans Valencia RACV",		"Català València (RACV)",
						    "zh-TW",	"Chinees [traditioneel]",		"正體中文",
						    "zh-CN",	"Chinees [vereenvoudigd]",		"简体中文",
						    "da",	"Deens",				"Dansk",
						    "de",	"Duits",				"Deutsch",
						    "en-GB",	"Engels [Brits]",			"English [British]",
						    "en-US",	"Engels [US]",				"English [US]",
						    "fi",	"Fins",					"Suomi",
						    "fr",	"Frans",				"Français",
						    "gl",	"Galiciaans",				"Galego",
						    "el",	"Grieks",				"ελληνικά",
						    "he",	"Hebreeuws",				"עברית",
						    "hi",	"Hindi",				"हिन्दी",
						    "hu",	"Hongaars",				"Magyar",
						    "it",	"Italiaans",				"Italiano",
						    "ja",	"Japans",				"日本語",
						    "km",	"Khmer",				"ភាសាខ្មែរ",
						    "ko",	"Koreaans",				"한국어",
						    "lt",	"Litouws",				"Lietuvių",
						    "nl",	"Nederlands",				"Nederlands",
						    "nb",	"Noors [Bokmal]",			"Norsk [Bokmål]",
						    "pl",	"Pools",				"Polski",
						    "pt-BR",	"Portugees [Braziliaans]",		"Português [do Brasil]",
						    "pt",	"Portugees [Europeaans]",		"Português [Europeu]",
						    "ru",	"Russisch",				"Русский",
						    "gd",	"Schots [Gaelic]",			"Gàidhlig",
						    "sr",	"Servisch [Cyrillic]",			"Cрпски [ћирилицом]",
						    "sl",	"Sloveens",				"Slovenski jezik [slovenščina]",
						    "sk",	"Slowaaks",				"Slovenský jazyk [slovenčina]",
						    "es",	"Spaans",				"Español",
						    "ta",	"Tamil",				"தமிழ்",
						    "th",	"Thais",				"ภาษาไทย",
						    "cs",	"Tsjechisch",				"Čeština",
						    "tr",	"Turks",				"Türkçe",
						    "vi",	"Vietnamees",				"Tiếng Việt",
						    "sv",	"Zweeds",				"Svenska" ];

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
												"Oudere uitgaven" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Help het nieuws te verspreiden";
l10n.dl_share_light_blue_box_headline_title	= "Help het nieuws te verspreiden en vertel uw vrienden over Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Vertel uw vrienden over Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Help het nieuws te verspreiden en vertel uw vrienden over Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Officiële Blog";
l10n.dl_share_light_blue_box_blog_title		= "Weblog van OpenOffice.";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog van OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Vertel uw vrienden over Apache OpenOffice via Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Delen op Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Vertel uw vrienden over Apache OpenOffice via Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Delen op Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Apache OpenOffice extensies en woordenboeken ophalen";
l10n.dl_ext_blue_box_headline_title		= "Kies uit een groot bereik aan aanvullende en individuele functionaliteit";
l10n.dl_ext_blue_box_text_text			= "Breid uw functionaliteit voor Apache OpenOffice uit met een grote en groeiende bibliotheek van extensies en woordenboeken van andere gebruikers.";
l10n.dl_ext_blue_box_text_title			= "Kies uit een groot bereik aan aanvullende en individuele functionaliteit";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Apache OpenOffice sjablonen ophalen";
l10n.dl_tlp_blue_box_headline_title		= "Kies uit een groot bereik aan aanvullende en individuele documenten";
l10n.dl_tlp_blue_box_text_text			= "Breid uw creativiteit voor Apache OpenOffice uit met een grote en groeiende bibliotheek van sjablonen van andere gebruikers.";
l10n.dl_tlp_blue_box_text_title			= "Kies uit een groot bereik aan aanvullende en individuele documenten";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Informatie over uitgave";
l10n.dl_nav_sysreq_text				= "Systeemvereisten";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB vrije ruimte - Geheugen: &gt;128MB - Processor: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Licentie";
l10n.dl_nav_license_title			= "Apache OpenOffice licentie";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Bron";
l10n.dl_nav_source_title			= "Voor ontwikkelaars en gevorderde gebruikers: haal de bron op om Apache OpenOffice vanaf niets te bouwen.";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Bouwgids";
l10n.dl_nav_build_title				= "Voor ontwikkelaars en gevorderde gebruikers: HowTo-gids om Apache OpenOffice vanaf niets te bouwen.";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "Voor ontwikkelaars: Software Development Kit.";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Ontwikkelingspakketten";
l10n.dl_nav_devbuilds_title			= "Voor QA-vrijwilligers: Ontwikkelingspakketten";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Documentatie";
l10n.dl_nav_schedule_text			= "Uitgaveschema's";
l10n.dl_nav_schedule_title			= "Wanneer zijn nieuwe uitgaven gepland?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Historisch uitgaveschema";
l10n.dl_nav_hist_schedule_title			= "Wanneer werden oude uitgaven gepland?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Installatie-gidsen";
l10n.dl_nav_inst_guide_title			= "Instructies voor het installeren van Apache OpenOffice op machines voor Windows, macOS (OS&nbsp;X) en Linux";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Gebruikersgidsen";
l10n.dl_nav_user_guide_title			= "uitgebreide gebruikershandleidingen voor elke dag";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java en Apache OpenOffice";
l10n.dl_nav_why_java_title			= "legt uit waarom Java te gebruiken en wat het is";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Informatie over Einde-leven";
l10n.dl_nav_eol_title				= "Informatie over uitgaven die de status Einde-leven hebben bereikt";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Aanvullende bronnen";
l10n.dl_nav_support_text			= "Ondersteuning";
l10n.dl_nav_support_title			= "Als de informatie hierboven uw vraag niet beantwoordde: gratis en betaalde ondersteuning!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Vertalingen";
l10n.dl_nav_local_title				= "Informatie en ondersteuning in uw favoriete taal";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Downloadstatistieken";
l10n.dl_nav_stat_title				= "Download en andere statistieken";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternatieve download mirrors #1";
l10n.dl_nav_mirrors1_title			= "Gebruik Sourceforge-mirrors om Apache OpenOffice te downloaden";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternatieve download mirrors #2";
l10n.dl_nav_mirrors2_title			= "Gebruik Apache-mirrors om Apache OpenOffice te downloaden";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "3e-partij ports en distributies";
l10n.dl_nav_porting_title			= "Ports en distributies van 3e partij-verkopers";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Gearchiveerde en oudere uitgaven";
l10n.dl_nav_archive_title			= "Download oudere en gearchiveerde uitgaven";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Opmerkingen over uitgave";
l10n.dl_nav_release_notes_title			= "Wat is er nieuw, wat is er verbeterd in Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Verifieer het gedownloade bestand";
l10n.dl_nav_checksum_title			= "Hoe het gedownloade bestand te verifieren met handtekeningen en hashes?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Downloaden, ontwikkelen en publiceren van gratis Open bron-software";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "https://www.openoffice.org/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service - Controleer de opmaak (HTML, XHTML, ...) van webdocumenten";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "https://www.openoffice.org/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Download volledige installatie";
l10n.dl_full_link_title				= "Klik hier om te downloaden: ";
l10n.dl_langpack_link_text			= "Download taalpakket";
l10n.dl_langpack_link_title			= "Klik hier om te downloaden: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Porting: Klik hier om te kiezen uit 3e-partij-verkopers";
l10n.dl_full_link_porting_title			= "Klik hier om te bladeren naar de webpagina Porting en download van 3e-partij-verkopers";
l10n.dl_full_link_archive_text			= "Archief: Klik hier om te kiezen uit oudere uitgaven";
l10n.dl_full_link_archive_title			= "Klik hier om te bladeren door het archief en oudere uitgaven te downloaden";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Uitgave: ";
l10n.dl_rel_info_milestone_text			= "Milestone ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Uitgegeven ";
l10n.dl_rel_notes_text				= "Opmerkingen over uitgave";
l10n.dl_rel_notes_title				= "Opmerkingen over uitgaven van Apache OpenOffice ";

l10n.dl_headline_full_text			= "Volledige installatie: ";
l10n.dl_headline_langpack_text			= "Taalpakket: ";
l10n.dl_filesize_text				= "Bestandsgrootte ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Handtekeningen en hashes: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS handtekeningenbestand";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC handtekening voor: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 hash voor: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 hash voor: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 hash voor: ";

l10n.dl_help_img_title				= "Wat is het verschil tussen een volledige installatie en een taalpakket?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Informatie voor installeren";
l10n.dl_help_text				   = "Wat is een taalpakket?";
l10n.dl_help_title			      = "Wat is het verschil tussen een volledige installatie en een taalpakket?";
l10n.dl_checksum_img_title			= "Hoe het gedownloade bestand te verifieren met controlegetallen?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Verifieren met controlegetallen";
l10n.dl_checksum_text				= "Hoe de download te verifieren?";
l10n.dl_checksum_title				= "Hoe het gedownloade bestand te verifieren met controlegetallen?";
l10n.dl_report_img_title			= "Verbroken downloadkoppeling? Klik hier om die te rapporteren.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Verbroken koppeling";
l10n.dl_report_text				= "Verbroken koppeling rapporteren";
l10n.dl_report_title				= "Verbroken downloadkoppeling? Klik hier om die te rapporteren.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Geen volledige installatie beschikbaar";
l10n.dl_full_link_error_title			= "Selecteer een andere taal, platform of versie.";
l10n.dl_langpack_link_error_text		= "Geen taalpakket beschikbaar";
l10n.dl_langpack_link_error_title		= "Selecteer een andere taal, platform of versie.";

l10n.dl_error_problem_img_title			= "Het geselecteerde downloadbestand is niet beschikbaar";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Tekst fout";
l10n.dl_error_problem_text			= "Probleem: ";
l10n.dl_error_solution_text			= "Oplossing: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " is niet beschikbaar voor ";
l10n.dl_error_please_select_1_text		= "Selecteer versie 4.0.1.";
l10n.dl_error_please_select_2_text		= "Selecteer versie 4.1.0 of nieuwer.";
l10n.dl_error_please_select_3_text		= "Selecteer een download voor Windows, macOS (OS&nbsp;X) of Linux.";
l10n.dl_error_please_select_4_text		= "Selecteer een andere taal of versie.";

l10n.dl_unknown_platform_text			= "onbekend besturingssysteem / platform";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Hoe een verbroken downloadkoppeling te rapporteren?";
l10n.dl_analyze_instruction_select_text		= "<b>Selecteer uw favorieten</b>: Besturingssysteem, taal en versie in het groene gedeelte hieronder.";
l10n.dl_analyze_instruction_verify_text		= "Verifieer dat deze opties <b>nog steeds niet</b> leiden naar geldige downloadkoppelingen.";
l10n.dl_analyze_instruction_click_text		= "Klik op de knop onder het groene vak:";
l10n.dl_analyze_instruction_copy_text		= "Kopieer de geselecteerde tabelgegevens naar het klembord:";
l10n.dl_analyze_instruction_new_mail_text	= "Maak een nieuw mailbericht.";
l10n.dl_analyze_instruction_problem_text	= "<b>Schrijf een omschrijving van het probleem</b> (wat werkt niet en wat verwachtte u).";
l10n.dl_analyze_instruction_details_text	= "Voeg ook <b>details over het gebruikte besturingssysteem</b> toe.";
l10n.dl_analyze_instruction_paste_text		= "Plak de gekopieerde gegevens aan het einde van de mail.";
l10n.dl_analyze_instruction_only_download_text	= "<b>Verzend de mail alleen in geval van problemen met downloaden</b> en niet als u niet kunt installeren.";
l10n.dl_analyze_instruction_no_install_text	= "Deze webpagina kan u echt niet helpen met problemen bij het installeren.";
l10n.dl_analyze_instruction_send_mail_text	= "Tenslotte, <b>verzend de mail</b> naar de: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice Development Mailing List";
l10n.dl_analyze_instruction_mailing_list_title	= "Verzend het rapport naar de mailinglijst voor ontwikkelaars van Apache OpenOffice";
l10n.dl_analyze_instruction_learn_more_text	= "Klik hier om meer te weten te komen over wat een mailinglijst is";
l10n.dl_analyze_instruction_learn_more_title	= "Meer te weten komen over wat een mailinglijst is";
l10n.dl_analyze_instruction_answer_text		= "We zullen proberen te antwoorden zodra wij de mail hebben ontvangen en het probleem hebben geanalyseerd.";
l10n.dl_analyze_instruction_thanks_text		= "Dank u wel voor het rapport.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Klik om de tabel bij te werken";
l10n.dl_analyze_update_button_title		= "Plaats de geselecteerde opties als waarden in de tabel hieronder";
l10n.dl_analyze_select_button_text		= "Klik om de tabel te selecteren";
l10n.dl_analyze_select_button_title		= "Selecteer alle gegevens naar de tabel hieronder";
l10n.dl_analyze_copy_button_text		= "Kopieer met [Ctrl] + [C]";
l10n.dl_analyze_copy_button_title		= "Kopieer de geselecteerde tabelgegevens via [Ctrl] + [C] naar het klembord";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text		= "Browser-variabelen";
l10n.dl_analyze_table_values_text		= "Waarden";
l10n.dl_analyze_table_yes_text			= "Ja";
l10n.dl_analyze_table_no_text			= "Nee";
l10n.dl_analyze_table_stable_release_text	= "Stabiele uitgave";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;functies/variabelen";



// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo417_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=130026910";
l10n.dl_rel_notes_aoo416_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=97550676";
l10n.dl_rel_notes_aoo415_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=74690996";
l10n.dl_rel_notes_aoo414_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=74681780";
l10n.dl_rel_notes_aoo413_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=65873709";
l10n.dl_rel_notes_aoo412_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=61325896";
l10n.dl_rel_notes_aoo411_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=44995930";
l10n.dl_rel_notes_aoo410_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes+Dutch";
l10n.dl_rel_notes_aoo401_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes+%28Dutch%29";
l10n.dl_rel_notes_aoo400_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=33297309";
l10n.dl_help_link				= "https://www.openoffice.org/nl/download/full_vs_lp.html";
l10n.dl_checksum_link				= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link				= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link				= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/other-341.html";
