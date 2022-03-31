/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:	"Download Apache OpenOffice"
 * Correct:	l10n.dl_green_box_headline_text
 */



// Object that contains all following variables.
var l10n = new Object();

// The following variables are used in the "index.html" file:

// Set a specific language ISO code to force to assemble a download link with a certain language.
DL.NL_LANG							= "fr";

// General:
l10n.dl_headline_text				= "Apache OpenOffice Download";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Télécharger Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Téléchargez Apache OpenOffice pour votre système d'exploitation, votre langue et votre version préférés";
l10n.dl_green_box_subtext1_text			= "Hébergé par SourceForge.net - Un site de confiance";
l10n.dl_green_box_subtext1_title		= "Les fichiers binaires Apache OpenOffice sont hébergés par SourceForge.net - Un site Web de confiance";
l10n.dl_green_box_subtext2_text			= "Sélectionnez votre système d'exploitation, votre langue et votre version préférés";
l10n.dl_green_box_subtext2_title		= "Sélectionnez votre système d\'exploitation, votre langue et votre version préférés";
l10n.dl_green_box_selectbox_os_title	= "Sélectionnez votre système d exploitation préféré";
l10n.dl_green_box_selectbox_lang_title	= "Sélectionnez votre langue préférée";
l10n.dl_green_box_selectbox_ver_title	= "Sélectionnez votre version préférée";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines below the 3 following variables)!
/* l10n.dl_green_box_select_box_os_values	= [ "" ]; */
l10n.dl_green_box_select_box_os_values		= [ "" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "" ];

/* l10n.dl_green_box_select_box_lang_values_custom = [ "" ]; */
//													Value		Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom = [ "ast",		"Asturian",					"Asturianu",
													"eu",		"Basque",					"Euskara",
													"bg",		"Bulgarian",				"български език",
													"ca",		"Catalan",					"Català",
													"ca-XV",	"Catalan [Valencia AVL]",	"València (AVL)",
													"ca-XR",	"Catalan [Valencia RACV]",	"València (RACV)",
													"zh-CN",	"Chinese [simplified]",		"简体中文",
													"zh-TW",	"Chinese [traditional]",	"正體中文",
													"cs",		"Czech",					"Čeština",
													"da",		"Danish",					"Dansk",
													"nl",		"Dutch",					"Nederlands",
													"en-GB",	"English [British]",		"English [British]",
													"en-US",	"English [US]",				"English [US]",
													"fi",		"Finnish",					"Suomi",
													"fr",		"French",					"Français",
													"gl",		"Galician",					"Galego",
													"de",		"German",					"Deutsch",
													"el",		"Greek",					"ελληνικά",
													"he",		"Hebrew",					"עברית",
													"hi",		"Hindi",					"हिन्दी",
													"hu",		"Hungarian",				"Magyar",
													"it",		"Italian",					"Italiano",
													"ja",		"Japanese",					"日本語",
													"km",		"Khmer",					"ភាសាខ្មែរ",
													"ko",		"Korean",					"한국어",
													"lt",		"Lithuanian",				"Lietuvių",
													"nb",		"Norwegian [Bokmal]",		"Norsk [Bokmål]",
													"pl",		"Polish",					"Polski",
													"pt-BR",	"Portuguese [Brazilian]",	"Português [do Brasil]",
													"pt",		"Portuguese [European]",	"Português [Europeu]",
													"ru",		"Russian",					"Русский",
													"gd",		"Scottish [Gaelic]",		"Gàidhlig",
													"sr",		"Serbian [Cyrillic]",		"Cрпски [ћирилицом]",
													"sk",		"Slovak",					"Slovenský jazyk [slovenčina]",
													"sl",		"Slovenian",				"Slovenski jezik [slovenščina]",
													"es",		"Spanish",					"Español",
													"sv",		"Swedish",					"Svenska",
													"ta",		"Tamil",					"தமிழ்",
													"th",		"Thai",						"ภาษาไทย",
													"tr",		"Turkish",					"Türkçe",
													"vi",		"Vietnamese",				"Tiếng Việt" ];

l10n.dl_green_box_select_box_version_values	= [ "" ];

l10n.dl_green_box_select_box_version_older	= "Older releases";

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Get developers: Strings in the orange box (used in "index.html").
l10n.dl_getdev_orange_box_headline_text		= "Aide requise";
l10n.dl_getdev_orange_box_headline_title	= "Le projet Apache OpenOffice recherche des développeurs pour participer à l'expansion de ses activités";
l10n.dl_getdev_orange_box_text_text			= "Êtes-vous un développeur de logiciels avec des compétences en C++ ? Avez-vous une expertise dans la construction de logiciels ? Êtes-vous un rédacteur technique expérimenté ? Êtes-vous compétent en anglais ? Vous aimez contribuer à des projets open source ? Rejoignez-nous pour aider Apache OpenOffice à prospérer.";
l10n.dl_getdev_orange_box_text_title		= "Le projet Apache OpenOffice recherche des développeurs pour participer à l'expansion de ses activités";
l10n.dl_getdev_orange_box_text_href			= "https://openoffice.apache.org/get-involved.html";

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Aidez à la diffusion";
l10n.dl_share_light_blue_box_headline_title	= "Aidez à faire passer le mot et parlez à vos amis d Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Veuillez parler d'Apache OpenOffice à vos amis :";
l10n.dl_share_light_blue_box_text_title		= "Aidez à faire passer le mot et parlez à vos amis d Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Blog officiel";
l10n.dl_share_light_blue_box_blog_title		= "Weblog de OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog de OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Veuillez parler d Apache OpenOffice à vos amis via Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Share on Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Veuillez parler d Apache OpenOffice à vos amis via Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Partager sur Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Obtenez les extensions et dictionnaires Apache OpenOffice";
l10n.dl_ext_blue_box_headline_title		= "Choisissez parmi une large gamme de fonctionnalités supplémentaires et individuelles";
l10n.dl_ext_blue_box_text_text			= "Étendez vos fonctionnalités Apache OpenOffice avec une bibliothèque importante et croissante d'extensions et de dictionnaires d'autres utilisateurs.";
l10n.dl_ext_blue_box_text_title			= "Choisissez parmi une large gamme de fonctionnalités supplémentaires et individuelles";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Obtenez des modèles Apache OpenOffice";
l10n.dl_tlp_blue_box_headline_title		= "Choisissez parmi une large gamme de documents supplémentaires et individuels";
l10n.dl_tlp_blue_box_text_text			= "Étendez votre créativité Apache OpenOffice avec une bibliothèque importante et croissante de modèles d'autres utilisateurs.";
l10n.dl_tlp_blue_box_text_title			= "Choisissez parmi une large gamme de documents supplémentaires et individuels";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Informations de version";
l10n.dl_nav_sysreq_text				= "Configuration requise";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB free - Mémoire: &gt;128MB - Processeur: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "License";
l10n.dl_nav_license_title			= "License Apache OpenOffice";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Source";
l10n.dl_nav_source_title			= "Pour les développeurs et les utilisateurs expérimentés : obtenez la source pour créer Apache OpenOffice à partir de zéro";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Guide de construction";
l10n.dl_nav_build_title				= "Pour les développeurs et les utilisateurs expérimentés : guide pratique pour créer Apache OpenOffice à partir de zéro";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit SDK)";
l10n.dl_nav_sdk_title				= "Pour les développeurs : Kit de développement logiciel";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Development Builds";
l10n.dl_nav_devbuilds_title			= "For QA volunteers: Development Builds";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Documentation";
l10n.dl_nav_schedule_text			= "Calendriers de publication";
l10n.dl_nav_schedule_title			= "Quand les nouvelles versions sont-elles prévues ?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text		= "Historique du calendrier de sortie";
l10n.dl_nav_hist_schedule_title		= "Quand les anciennes versions étaient-elles prévues ?";
l10n.dl_nav_hist_schedule_href		= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Guides d'Installation";
l10n.dl_nav_inst_guide_title		= "Instructions d installation d Apache OpenOffice sur Windows, macOS (OS&nbsp;X) et Linux";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Guides de l'utilisateur";
l10n.dl_nav_user_guide_title		= "Manuels d'utilisation complets pour une utilisation quotidienne";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java et Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Explique ce qu'est Java et pourquoi l utiliser ";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Informations de fin de vie";
l10n.dl_nav_eol_title				= "Informations sur les versions qui ont atteint le statut de fin de vie";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Ressources additionnelles";
l10n.dl_nav_support_text			= "Support";
l10n.dl_nav_support_title			= "Si les informations ci-dessus ne répondent pas à votre question : Support gratuit et payant !";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Localisations (traductions)";
l10n.dl_nav_local_title				= "Informations et assistance dans votre langue préférée";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Statistiques de téléchargements";
l10n.dl_nav_stat_title				= "Téléchargement et autres statistiques";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Lien de téléchargement alternatif #1";
l10n.dl_nav_mirrors1_title			= "Utiliser les miroirs SourceForge pour télécharger Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Lien de téléchargement alternatif #2";
l10n.dl_nav_mirrors2_title			= "Utiliser les miroirs Apache pour télécharger Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://downloads.apache.org/openoffice/" + DL.VERSION + "/binaries/";
l10n.dl_nav_porting_text			= "Portagess et distributions tierce partie";
l10n.dl_nav_porting_title			= "Portages et distributions de fournisseurs tierss";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Versions archivées et héritées";
l10n.dl_nav_archive_title			= "Download legacy and archived releases";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text		= "Release Notes";
l10n.dl_nav_release_notes_title		= "What is new, what has been improved in Apache OpenOffice?";
l10n.dl_nav_release_notes_href		= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Verify the downloaded file";
l10n.dl_nav_checksum_title			= "How to verify the downloaded file with signatures and hashes?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title		= "SourceForge - Téléchargez, développez et publiez des logiciels open source gratuits";
l10n.dl_img_sourceforge_href		= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "SourceForge";
l10n.dl_img_w3c_title				= "Service de validation de balisage W3C - Vérifie le balisage (HTML, XHTML, ...) des documents Web" ;
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src					= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt					= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text					= "Télécharger installation complète";
l10n.dl_full_link_title					= "Cliquez pour télécharger : ";
l10n.dl_langpack_link_text				= "Télécharger le pack de langue";
l10n.dl_langpack_link_title				= "Cliquez pour télécharger : ";

l10n.dl_platform_info_text				= "Conseils importants pour ";
l10n.dl_platform_info_title				= "Cliquez ici pour obtenir des conseils importants pour ";
l10n.dl_platform_info_link				= "platform_hints.html";
l10n.dl_platform_info_headline			= "Apache OpenOffice - Conseils importants pour la plateforme choisie";
l10n.dl_platform_info_win_headline		= "Windows";
l10n.dl_platform_info_win_text			= "<h5> 32-bit, 64-bit and Java - Que choisir? </h5> <p> Pour le moment, nous proposons une version 32 bits (x86) pour Windows. Cependant, il s'installe et s'exécute également sur Windows 64 bits (x86-64). Veuillez noter que vous pouvez avoir besoin de Java en 32 bits pour des fonctionnalités supplémentaires qui ne doivent alors être sélectionnées qu'une seule fois (voir menu 'Outils - Options - OpenOffice - Java'). <br /><br /> Pour plus d'informations sur OpenOffice et Java, veuillez consulter : <a target='_blank' href=https://www.openoffice.org/download/common/java.html>https://www.openoffice.org/download/common/java.html</a>.</p>";
l10n.dl_platform_info_mac_headline		= "macOS";
l10n.dl_platform_info_mac_text			= "<h5> Bientôt disponible </h5>";
l10n.dl_platform_info_linux_headline	= "Linux";
l10n.dl_platform_info_linux_text		= "<h5> RPM vs. DEB - What to choose? </h5> <p> RPM is used in: <br/> CentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server <br /><br /> DEB is used in: <br/> Debian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu </p> <h5> Installation instructions </h5> <p>For installation instruction please see here: <a target='_blank' href=https://www.openoffice.org/download/common/instructions.html#linux>https://www.openoffice.org/download/common/instructions.html#linux</a>.</p>";

l10n.dl_full_link_porting_text			= "Porting: Click to choose from 3rd party vendors";
l10n.dl_full_link_porting_title			= "Click to browse to the porting webpage and download from 3rd party vendors";
l10n.dl_full_link_archive_text			= "Archive: Click to choose from legacy releases";
l10n.dl_full_link_archive_title			= "Click to browse to the archive and download legacy releases";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text		= "Version : ";
l10n.dl_rel_info_milestone_text		= "Milestone ";
l10n.dl_rel_info_buildid_text		= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text		= "Publié ";
l10n.dl_rel_notes_text				= "Notes de version";
l10n.dl_rel_notes_title				= "Notes de version pour Apache OpenOffice ";

l10n.dl_headline_full_text			= "Installation complète: ";
l10n.dl_headline_langpack_text		= "Pack de langue: ";
l10n.dl_filesize_text				= "Taille fichier ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text		= "Signatures et hachages: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS signature file";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC signature for: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 hash for: ";
l10n.dl_checksum_sha256_text		= "SHA256";
l10n.dl_checksum_sha256_title		= "SHA256 hash for: ";
l10n.dl_checksum_sha512_text		= "SHA512";
l10n.dl_checksum_sha512_title		= "SHA512 hash for: ";

l10n.dl_help_img_title				= "Quelle est la différence entre l'installation complète et le pack de langue?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Informations sur l'installation";
l10n.dl_help_text					= "Qu'est-ce qu'un pack de langue?";
l10n.dl_help_title					= "Quelle est la différence entre l'installation complète et le pack de langue?";
l10n.dl_checksum_img_title			= "Comment vérifier le fichier téléchargé avec des sommes de contrôle?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Vérifier la somme de contrôle ";
l10n.dl_checksum_text				= "Comment vérifier le téléchargement?";
l10n.dl_checksum_title				= "How to verify the downloaded file with checksums?";
l10n.dl_report_img_title			= "Broken download link? Click here to report.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Lien brisé";
l10n.dl_report_text					= "Signaler un lien rompu";
l10n.dl_report_title				= "Lien de téléchargement rompu ? Cliquez ici pour signaler.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "No full installation available";
l10n.dl_full_link_error_title			= "Please select another language, platform or version.";
l10n.dl_langpack_link_error_text		= "No language pack available";
l10n.dl_langpack_link_error_title		= "Please select another language, platform or version.";

l10n.dl_error_problem_img_title			= "The selected download file is not available";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Error text";
l10n.dl_error_problem_text				= "Problem: ";
l10n.dl_error_solution_text				= "Solution: ";
l10n.dl_error_aoo_text					= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text	= " is not available for ";
l10n.dl_error_please_select_1_text		= "Please select version 4.0.1.";
l10n.dl_error_please_select_2_text		= "Please select version 4.1.0 or newer.";
l10n.dl_error_please_select_3_text		= "Please select a download for Windows, macOS (OS&nbsp;X) or Linux.";
l10n.dl_error_please_select_4_text		= "Please select another language or version.";

l10n.dl_unknown_platform_text			= "unknown operating system / platform";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text					= "How to report a broken download link?";
l10n.dl_analyze_instruction_select_text			= "<b>Select your favorites</b>: Operating system, language and version in the green box below.";
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
l10n.dl_analyze_table_problem_text1			= "Problem description";
l10n.dl_analyze_table_problem_text2			= "Exchange this text to describe the problem <br /><br />(What does not work? What do you expect?)";
l10n.dl_analyze_table_browser_text			= "Browser variables";
l10n.dl_analyze_table_values_text			= "Values";
l10n.dl_analyze_table_yes_text				= "Yes";
l10n.dl_analyze_table_no_text				= "No";
l10n.dl_analyze_table_stable_release_text	= "Stable Release";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;functions/variables";



// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo4111_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=191334515";
l10n.dl_rel_notes_aoo4110_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=181305702";
l10n.dl_rel_notes_aoo419_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=173086426";
l10n.dl_rel_notes_aoo418_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=165225735";
l10n.dl_rel_notes_aoo417_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=130028674";
l10n.dl_rel_notes_aoo416_link			= "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=97550888";
l10n.dl_rel_notes_aoo415_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.5+Release+Notes";
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
