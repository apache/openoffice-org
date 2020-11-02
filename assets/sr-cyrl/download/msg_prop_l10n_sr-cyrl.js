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
DL.NL_LANG					= "sr";

// General:
l10n.dl_headline_text				= "Преузмите Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Преузмите Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Преузмите Apache OpenOffice према вашем оперативном систему, језику и верзији";
l10n.dl_green_box_subtext1_text			= "Хостовано од стране Sourceforge.net - веб локација од поверења";
l10n.dl_green_box_subtext1_title		= "Бинарне датотеке Apache OpenOffice-a су хостоване од стране Sourceforge.net - веб локација од поверења";
l10n.dl_green_box_subtext2_text			= "Изаберите жељени оперативни систем, језик и верзију";
l10n.dl_green_box_subtext2_title		= "Изаберите жељени оперативни систем, језик и верзију";
l10n.dl_green_box_selectbox_os_title		= "Изаберите жељени оперативни систем";
l10n.dl_green_box_selectbox_lang_title		= "Изаберите жељени језик";
l10n.dl_green_box_selectbox_ver_title		= "Изаберите жељену верзију издања";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines below the 3 following variables)!
/* l10n.dl_green_box_select_box_os_values	= [ "" ]; */
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
				    		    "Linux 64-bit (x86-64) (DEB)",
						    "Linux 64-bit (x86-64) (RPM)",
						    "Linux 32-bit (x86) (DEB)",
						    "Linux 32-bit (x86) (RPM)",
						    "OS X 64-bit (x86-64) (DMG)",
						    "OS X 32-bit (x86) (DMG)",
						    "Још платформи / оперативни системи" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "Asturian (Asturianu)",
						    "Basque (Euskara)",
						    "Bulgarian (български език)",
						    "Chinese [simplified] (简体中文)",
						    "Chinese [traditional] (正體中文)",
						    "Czech (Čeština)",
						    "Danish (Dansk)",
						    "Dutch (Nederlands)",
						    "English [British]",
						    "English [US]",
						    "Finnish (Suomi)",
						    "French (Français)",
						    "Galician (Galego)",
						    "German (Deutsch)",
						    "Greek (ελληνικά)",
						    "Hebrew (עברית)",
						    "Hindi (हिन्दी)",
						    "Hungarian (Magyar)",
						    "Italian (Italiano)",
						    "Japanese (日本語)",
						    "Khmer (ភាសាខ្មែរ)",
						    "Korean (한국어)",
						    "Lithuanian (Lietuvių)",
						    "Norwegian [Bokmal] (Norsk [Bokmål])",
						    "Polish (Polski)",
						    "Portuguese [Brazilian] (Português [do Brasil])",
						    "Portuguese [European] (Português [Europeu])",
						    "Russian (Русский)",
						    "Scottish [Gaelic] (Gàidhlig)",
						    "Serbian [Cyrillic] (Cрпски [ћирилицом])",
						    "Slovak (Slovenský jazyk [slovenčina])",
						    "Slovenian (Slovenski jezik [slovenščina])",
						    "Spanish (Español)",
						    "Swedish (Svenska)",
						    "Tamil (தமிழ்)",
						    "Thai (ภาษาไทย)",
						    "Turkish (Türkçe)",
						    "Vietnamese (Tiếng Việt)" ];

// l10n.dl_green_box_select_box_lang_values_custom = [ "" ];
l10n.dl_green_box_select_box_lang_values_custom	= [ "" ];

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
						    "Старија издања" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Помозите ширењу приче";
l10n.dl_share_light_blue_box_headline_title	= "Помозите ширењу приче и реците вашим пријатељима за Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Реците вашим пријатељима за Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Помозите ширењу приче и реците вашим пријатељима за Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Званични блог";
l10n.dl_share_light_blue_box_blog_title		= "OpenOffice-ов дневник на Вебу.";
l10n.dl_share_light_blue_box_blog_src		= "https://www.openoffice.org/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "OpenOffice-ов дневник на Вебу";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Реците вашим пријатељима за Apache OpenOffice преко Facebook-a";
l10n.dl_share_light_blue_box_facebook_src	= "https://www.openoffice.org/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Делите преко Facebook-a";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Реците вашим пријатељима за Apache OpenOffice преко Twitter-a";
l10n.dl_share_light_blue_box_twitter_src	= "https://www.openoffice.org/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Делите преко Twitter-a";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Набавите проширења и речнике за Apache OpenOffice";
l10n.dl_ext_blue_box_headline_title		= "Изаберите из широког спектра додатних и индивидуалних функционалности";
l10n.dl_ext_blue_box_text_text			= "Проширите функционалност Apache OpenOffice-а са великом и растућом библиотеком проширења и речницима од других корисника.";
l10n.dl_ext_blue_box_text_title			= "Изаберите из широког спектра додатних и индивидуалних функционалности";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Набавите шаблоне за Apache OpenOffice";
l10n.dl_tlp_blue_box_headline_title		= "Изаберите из широког спектра додатних и индивидуалних докумената";
l10n.dl_tlp_blue_box_text_text			= "Проширите креативност Apache OpenOffice-a са великом и растућом библиотеком шаблона од других корисника.";
l10n.dl_tlp_blue_box_text_title			= "Изаберите из широког спектра додатних и индивидуалних докумената";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Напоменe уз издање";
l10n.dl_nav_sysreq_text				= "Системски захтеви";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB слободна меморија: &gt;128MB - Процесор: &gt;500MHz - OS: Win, Linux, Mac OS, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Лиценца";
l10n.dl_nav_license_title			= "Apache OpenOffice лиценца";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Извор";
l10n.dl_nav_source_title			= "За програмере и напредне кориснике: Преузмите изворни код да градите Apache OpenOffice од нуле.";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Упутство за изградњу апликације";
l10n.dl_nav_build_title				= "За програмере и напредне кориснике: Упутство како да градите Apache OpenOffice од нуле.";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Алати за развој софтвера (СДК)";
l10n.dl_nav_sdk_title				= "За програмере: Алати за развој софтвера.";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Развојна изградња";
l10n.dl_nav_devbuilds_title			= "За QA волонтере: Развојна изградња";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Документација";
l10n.dl_nav_schedule_text			= "Тренутни распоред објављивања";
l10n.dl_nav_schedule_title			= "Када се планира ново издање?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Хронолошки распоред објављивања";
l10n.dl_nav_hist_schedule_title			= "Када су старија издања планирана?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.services.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Упутства за инсталацију";
l10n.dl_nav_inst_guide_title			= "Инструкције за инсталирање Apache OpenOffice-а на Windows-у, Linux-у и Mac OS машинама";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Упутства за употребу";
l10n.dl_nav_user_guide_title			= "Свеобухватно упутство за коришћење за свакодневну употребу";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java и Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Објашњења зашто да се користи Java и шта је то";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Информација о застарелости производа";
l10n.dl_nav_eol_title				= "Информације у вези издања која су достигла статус застарелости";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Додатни извори информација";
l10n.dl_nav_support_text			= "Подршка";
l10n.dl_nav_support_title			= "Ако претходне информације нису дале одговор на ваше питање: Бесплатна и плаћена подршка!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Локализације";
l10n.dl_nav_local_title				= "Информације и подршка за ваш преферирани језик";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Статистика преузимања";
l10n.dl_nav_stat_title				= "Статистика преузимања и остала статистика";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Алтернативнe пресликане локације за преузимање #1";
l10n.dl_nav_mirrors1_title			= "Користите Sourceforge-ове preslikane lokacije за преузимање Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Алтернативнe пресликане локације за преузимање #2";
l10n.dl_nav_mirrors2_title			= "Користите Apache-ove preslikane lokacije за преузимање Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/aoo-closer.cgi/openoffice/";
l10n.dl_nav_porting_text			= "Портови и дистрибуције самосталних произвођача (3rd party)";
l10n.dl_nav_porting_title			= "Портови и дистрибуције од стране самосталних (3rd party) добављача";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Архивирана и стара издања";
l10n.dl_nav_archive_title			= "Преузмите архивирана и стара издања";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Напомене уз издање";
l10n.dl_nav_release_notes_title			= "Шта је ново, шта шта је побољшано у Apache OpenOffice-u?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Верификујте преузету датотеку";
l10n.dl_nav_checksum_title			= "Како да верификујете преузету датотеку са потписом и хешом?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Преузимање, развој и објављивање бесплатног софтвера отвореног кода";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "https://www.openoffice.org/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service - Check the markup (HTML, XHTML, ...) of Web documents";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "https://www.openoffice.org/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Преузмите целу инсталацију";
l10n.dl_full_link_title				= "Кликните за преузимање: ";
l10n.dl_langpack_link_text			= "Преузмите језички пакет";
l10n.dl_langpack_link_title			= "Кликните за преузимање: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Портовање: Кликните да изаберете од самосталних добављача.";
l10n.dl_full_link_porting_title			= "Кликните да потражите веб страницу портирања и преузмите од самосталних (3rd party) добављача";
l10n.dl_full_link_archive_text			= "Архива: кликните да изаберете стара издања";
l10n.dl_full_link_archive_title			= "Кликните да потражите у архиви и преузмите стара издања";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Release: ";
l10n.dl_rel_info_milestone_text			= "Milestone ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Released ";
l10n.dl_rel_notes_text				= "Напомене уз издање";
l10n.dl_rel_notes_title				= "Напомене уз издање за Apache OpenOffice ";

l10n.dl_headline_full_text			= "Пуна инсталација: ";
l10n.dl_headline_langpack_text			= "Језички пакет: ";
l10n.dl_filesize_text				= "Датотека величине ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Потписи и хешеви: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS датотека са потписом";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC потпис за: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 хеш за: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 хеш за: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 хеш за: ";

l10n.dl_help_img_title				= "Која је разлика између пуне инсталације и језичког пакета?";
l10n.dl_help_img_src				= "https://www.openoffice.org/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Инфо у вези инсталирања";
l10n.dl_help_text				= "Шта је језички пакет?";
l10n.dl_help_title				= "Која је разлика између пуне инсталације и језичког пакета?";
l10n.dl_checksum_img_title			= "Како да верификујем преузету датотеку са контролним збиром?";
l10n.dl_checksum_img_src			= "https://www.openoffice.org/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Провера контролног збира";
l10n.dl_checksum_text				= "Како да верификујем ово преузимање?";
l10n.dl_checksum_title				= "Како да верификујем преузету датотеку са контролним збиром?";
l10n.dl_report_img_title			= "Линк за преузимање је неисправан? Кликните овде да пријавите.";
l10n.dl_report_img_src				= "https://www.openoffice.org/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Неисправан линк";
l10n.dl_report_text				= "Пријавите неисправан линк";
l10n.dl_report_title				= "Линк за преузимање је неисправан? Кликните овде да пријавите.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Пуна инсталације није доступна";
l10n.dl_full_link_error_title			= "Изаберите други језик, платформу или верзију.";
l10n.dl_langpack_link_error_text		= "Није доступан језички пакет";
l10n.dl_langpack_link_error_title		= "Изаберите други језик, платформу или верзију.";

l10n.dl_error_problem_img_title			= "Изабрана датотека за преузимање није доступна";
l10n.dl_error_problem_img_src			= "https://www.openoffice.org/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Текст грешке";
l10n.dl_error_problem_text			= "Проблем: ";
l10n.dl_error_solution_text			= "Решење: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " није достпуан за ";
l10n.dl_error_please_select_1_text		= "Молимо изаберите верзију 4.0.1.";
l10n.dl_error_please_select_2_text		= "Молимо изаберите верзију 4.1.0 или новију.";
l10n.dl_error_please_select_3_text		= "Молимо изаберите преузимање за Windows, Linux или OS X.";
l10n.dl_error_please_select_4_text		= "Молимо изаберите други језик или верзију.";

l10n.dl_unknown_platform_text			= "непознат оперативни систем / платформа";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Како пријавим неисправан линк за преузимање?";
l10n.dl_analyze_instruction_select_text		= "<b>Изаберите ваше фаворите</b>: Оперативни систем, језик и верзију у зеленом испод.";
l10n.dl_analyze_instruction_verify_text		= "Верификуј да ове опције <b>још увек не воде</b>до валидних линкова за преузимање.";
l10n.dl_analyze_instruction_click_text		= "Клинките на дугме испод зелене кутије: ";
l10n.dl_analyze_instruction_copy_text		= " Копирајте изабрану табелу података у привремену меморију: ";
l10n.dl_analyze_instruction_new_mail_text	= "Креирајте нови мејл.";
l10n.dl_analyze_instruction_problem_text	= "<b>Напишите опис проблема</b> (шта не ради и која су ваша очекивања).";
l10n.dl_analyze_instruction_details_text	= "Молимо такође да додате <b>детаље у вези коришћеног оперативног система</b>.";
l10n.dl_analyze_instruction_paste_text		= "Уметните копиране податке на крају мејла.";
l10n.dl_analyze_instruction_only_download_text	= "Молимо да <b>пошаљете мејл само у случају проблема код преузимања</b> а не ако не можете да урадите инсталацију.";
l10n.dl_analyze_instruction_no_install_text	= "Ова веб страница не може да помогне код проблема при инсталирању.";
l10n.dl_analyze_instruction_send_mail_text	= "На крају, <b>пошаљите мејл</b> на: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Развојна дописна листа Apache OpenOffice-а";
l10n.dl_analyze_instruction_mailing_list_title	= "Пошаљите извештај Apache OpenOffice-овој развојној дописној листи";
l10n.dl_analyze_instruction_learn_more_text	= "Кликните овде да сазнате више о дописним листама";
l10n.dl_analyze_instruction_learn_more_title	= "Сазнајте више о дописним листама";
l10n.dl_analyze_instruction_answer_text		= "Покушаћемо да одговоримо чим добијемо мејл и анализирамо проблем.";
l10n.dl_analyze_instruction_thanks_text		= "Хвала вам на вашем извештају.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Кликните да ажурирате табелу";
l10n.dl_analyze_update_button_title		= "Ставите изабране опције као вредности унутар табеле испод";
l10n.dl_analyze_select_button_text		= "Кликните да изаберете табелу";
l10n.dl_analyze_select_button_title		= "Кликните све податке у табели испод";
l10n.dl_analyze_copy_button_text		= "Копирајте са [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Копирајте изабрану табелу са подацима преко [ Ctrl ] + [ C ] или [ &#8984; ] + [ C ] унутар привремене меморије";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text		= "Променљиве претраживача";
l10n.dl_analyze_table_values_text		= "Вредности";
l10n.dl_analyze_table_yes_text			= "Да";
l10n.dl_analyze_table_no_text			= "Не";
l10n.dl_analyze_table_stable_release_text	= "Стабилно издање";
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
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/other-341.html";

