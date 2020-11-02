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
DL.NL_LANG					= "es";

// General:
l10n.dl_headline_text				= "Descargar Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Descargar Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Descargar Apache OpenOffice";
l10n.dl_green_box_subtext1_text			= "Alojado en Sourceforge.net - Un sitio de confianza";
l10n.dl_green_box_subtext1_title		= "Los archivos binarios de Apache OpenOffice están alojados en Sourceforge.net -Un sitio de confianza";
l10n.dl_green_box_subtext2_text			= "Seleccione su sistema operativo favorito, idioma y versión ";
l10n.dl_green_box_subtext2_title		= "Seleccione su sistema operativo favorito, idioma y versión ";
l10n.dl_green_box_selectbox_os_title		= "Seleccione su sistema operativo favorito";
l10n.dl_green_box_selectbox_lang_title		= "Seleccione su idioma preferido";
l10n.dl_green_box_selectbox_ver_title		= "Seleccione su versión favorita";

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
						    "Más plataformas / sistemas operativos" ];

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
						    "es",	"Español",				"Español",
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
						    "sv",	"Swedish",				"Svenska",
						    "ta",	"Tamil",				"தமிழ்",
						    "th",	"Thai",					"ภาษาไทย",
						    "tr",	"Turkish",				"Türkçe",
						    "vi",	"Vietnamese",				"Tiếng Việt" ];

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
												"Versiones anteriores" ];

/* l10n.dl_green_box_select_box_version_values	= [ "" ]; */

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// kls -- satrted on thsi than decided not to use it. 
// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Ayude a correr la voz";
l10n.dl_share_light_blue_box_headline_title	= "Ayude a correr la voz";
l10n.dl_share_light_blue_box_text_text		= "Hable a sus amigos sobre Apache OpenOffice";
l10n.dl_share_light_blue_box_text_title		= "Hable a sus amigos sobre Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Blog oficial";
l10n.dl_share_light_blue_box_blog_title		= "Blog de OpenOffice.";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Blog de OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Hable a sus amigos sobre Apache OpenOffice a través de Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Compartir en Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Hable a sus amigos sobre Apache OpenOffice a través de Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Compartir en Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Obtenga extensiones y diccionarios para Apache OpenOffice"
l10n.dl_ext_blue_box_headline_title		= "Obtenga una amplia gama de funcionalidad extra para Apache OpenOffice";
l10n.dl_ext_blue_box_text_text			= "Amplie Apache OpenOffice con componentes que otros usuarios comparten en nuestra amplia bibliteca de extensiones y diccionarios";
l10n.dl_ext_blue_box_text_title			= "Obtenga una amplia gama de funcionalidad extra para Apache OpenOffice";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Obtenga plantillas para Apache OpenOffice";
l10n.dl_tlp_blue_box_headline_title		= "Seleccione un amplio rango de documentos adicionales.";
l10n.dl_tlp_blue_box_text_text			= "Incremente su colección de plantillas con la amplia y creciente biblioteca de plantillas creadas y compartidas por otros usuarios";
l10n.dl_tlp_blue_box_text_title			= "Seleccione un amplio rango de funciones adicionales.";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Informacion de la versión";
l10n.dl_nav_sysreq_text				= "Requisitos del sistema";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB libres - Memoria: &gt;128MB - Procesador: &gt;500MHz - SO: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Licencia";
l10n.dl_nav_license_title			= "Licencia de Apache OpenOffice";
l10n.dl_nav_license_href			= "/license.html";
l10n.dl_nav_source_text				= "Fuente";
l10n.dl_nav_source_title			= "Para desarrolladores y usuarios avanzados: obtenga el código fuente para generar Apache OpenOffice desde cero";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Guía de Compilado";
l10n.dl_nav_build_title				= "Para desarrolladores y usuarios avanzados: Guía Cómo compilar Apache OpenOffice desde cero";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "Para desarrolladores: Software Development Kit";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Versiones de Desarrollo";
l10n.dl_nav_devbuilds_title			= "Para voluntarios de QA: Versiones de Desarrollo";
l10n.dl_nav_devbuilds_href			= "/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Documentación";
l10n.dl_nav_schedule_text			= "Fechas de lanzamiento";
l10n.dl_nav_schedule_title			= "¿Cuando están previstos los nuevos lanzamientos";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Fechas de lanzamientos anteriores";
l10n.dl_nav_hist_schedule_title			= "¿Cuando fueron planeados los lanzamientos anteriores?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Guías de instalación";
l10n.dl_nav_inst_guide_title			= "Instrucciones para la instalaciónd de Apache OpenOffice en equipos con Windows, macOS (OS&nbsp;X) y Linux";
l10n.dl_nav_inst_guide_href			= "/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Guías de usuario";
l10n.dl_nav_user_guide_title			= "Manuales de usuario para el uso cotidiano";
l10n.dl_nav_user_guide_href			= "/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java y Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Explica por qué usar u qué es Java";
l10n.dl_nav_why_java_href			= "/download/common/java.html";
l10n.dl_nav_eol_text				= "Información sobre el final del ciclo de vida";
l10n.dl_nav_eol_title				= "Información sobre lanzamientos que han alcanzado el estado de final del ciclo de vida";
l10n.dl_nav_eol_href				= "/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Recursos adicionales";
l10n.dl_nav_support_text			= "Soprte";
l10n.dl_nav_support_title			= "Si la información anterior no responde a sus preguntas obtenga soprte gratuito y de pago";
l10n.dl_nav_support_href			= "/support/index.html";
l10n.dl_nav_local_text				= "Traducciones";
l10n.dl_nav_local_title				= "Información y soporte en su idioma favorito";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Estadísticas de descargas";
l10n.dl_nav_stat_title				= "Estadísticas de descargas y otras estadísticas";
l10n.dl_nav_stat_href				= "/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Descargas alternativas espejo #1";
l10n.dl_nav_mirrors1_title			= "Use los espejos de Apache para descargar Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Descargas alternativas espejo #2";
l10n.dl_nav_mirrors2_title			= "Use los espejos de Apache para descargar Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "Versiones de terceros";
l10n.dl_nav_porting_title			= "Versiones de terceros";
l10n.dl_nav_porting_href			= "/porting/index.html";
l10n.dl_nav_archive_text			= "Versiones antiguas y archivadas";
l10n.dl_nav_archive_title			= "Descargue versiones antiguas y archivadas";
l10n.dl_nav_archive_href			= "/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Notas de la versión";
l10n.dl_nav_release_notes_title			= "¿Qué es nuevo y que se ha mejorado en Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Verificar la descarga";
l10n.dl_nav_checksum_title			= "Cómo verificar la descarga con firmas y hashes";
l10n.dl_nav_checksum_href			= "/download/checksums.html";

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
l10n.dl_full_link_text				= "Descargar la instalación completa";
l10n.dl_full_link_title				= "Haga clic para descargar: ";
l10n.dl_langpack_link_text			= "Descargar paquete de idioma";
l10n.dl_langpack_link_title			= "Haga clic para descargar: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Porting: Click to choose from 3rd party vendors";
l10n.dl_full_link_porting_title			= "Click to browse to the porting webpage and download from 3rd party vendors";
l10n.dl_full_link_archive_text			= "Archive: Click to choose from legacy releases";
l10n.dl_full_link_archive_title			= "Click to browse to the archive and download legacy releases";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Versión: ";
l10n.dl_rel_info_milestone_text			= "Milestone ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Liberado ";
l10n.dl_rel_notes_text				= "Notas de la versión";
l10n.dl_rel_notes_title				= "Notas de la versión de Apache OpenOffice ";

l10n.dl_headline_full_text			= "Instalación completa: ";
l10n.dl_headline_langpack_text			= "Paquete de idioma: ";
l10n.dl_filesize_text				= "Tamaño de archivo ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Firmas y hashes: ";
l10n.dl_checksum_keys_text			= "Claves";
l10n.dl_checksum_keys_title			= "Archivo de claves de firma";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "Firma para ASC: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "Has para MD5: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "Has para SHA256: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "Has para SHA512: ";

l10n.dl_help_img_title				= "¿Cuál es la diferencia entre instalación completa y paquete de idioma?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Información de instalación";
l10n.dl_help_text				= "¿Qué es un paquete de idioma?";
l10n.dl_help_title				= "¿Cuál es la diferencia entre instalación completa y paquete de idioma?";
l10n.dl_checksum_img_title			= "Cómo comprobar los archivos descargados mediante checksums?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Comprobar checksum";
l10n.dl_checksum_text				= "¿Cómo comprobar la descarga?";
l10n.dl_checksum_title				= "Cómo comprobar el archivo descargado mediante checksums?";
l10n.dl_report_img_title			= "Haga clic para informar de enlace de descarga roto";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Enlace roto";
l10n.dl_report_text				= "Informar de enlace roto";
l10n.dl_report_title				= "Haga clic para informar de enlace de descarga roto";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Instalación completa no disponible";
l10n.dl_full_link_error_title			= "Por favor, seleccione otro idioma, plataforma o versión";
l10n.dl_langpack_link_error_text		= "Paquete de idioma no disponible";
l10n.dl_langpack_link_error_title		= "Por favor, seleccione otro idioma, plataforma o versión";

l10n.dl_error_problem_img_title			= "El archivo seleccionado para la descarga no está disponible";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Texto erroneo";
l10n.dl_error_problem_text			= "Problema: ";
l10n.dl_error_solution_text			= "Solución: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " no está disponible para ";
l10n.dl_error_please_select_1_text		= "Por favor, seleccione la versión 4.0.1.";
l10n.dl_error_please_select_2_text		= "Por favor, seleccione la versión 4.1.0 o más nueva.";
l10n.dl_error_please_select_3_text		= "Por favor, seleccione una descarga para Windows, macOS (OS&nbsp;X) or Linux.";
l10n.dl_error_please_select_4_text		= "Por favor seleccione otro idioma o versión.";

l10n.dl_unknown_platform_text			= "Sistema operativo o plataforma desconocidos";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Cómo informar de un enlace roto";
l10n.dl_analyze_instruction_select_text		= "<b>Select your favorites</b>: Operating system, language and version in the green below.";
l10n.dl_analyze_instruction_verify_text		= "Verify that these options <b>still do not</b> lead to valid download links.";
l10n.dl_analyze_instruction_click_text		= "Click on the button below the green box:";
l10n.dl_analyze_instruction_copy_text		= "Copy the selected table data into the clipboard:";
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
l10n.dl_help_link				= "/download/full_vs_lp.html";
l10n.dl_checksum_link				= "/download/checksums.html";
l10n.dl_report_link				= "/download/analyze.html";
l10n.dl_porting_link				= "/porting/index.html";
l10n.dl_archive_link				= "/download/archive.html";
l10n.dl_aoo341_link				= "/download/archive.html";
