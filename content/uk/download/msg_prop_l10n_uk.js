/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:	"Download Apache OpenOffice"
 * Correct:	l10n.dl_green_box_headline_text
 */

/* Цей файл призначений для збереження текстової інформації, яку можна використовувати на веб-сторінці завантаження за допомогою JavaScript
* включаючи цей файл.
*
* Замість жорстко закодованого тексту в зеленому полі, будь ласка, використовуйте ці змінні та перекладіть його на вашу улюблену мову.
*
* Неправильно: "Завантажити Apache OpenOffice"
* Правильно: l10n.dl_green_box_headline_text
*/


// Object that contains all following variables.
// Об'єкт, що містить всі наступні змінні.
//var l10n = new Object();

// The following variables are used in the "index.html" file:
// Наступні змінні використовуються у файлі "index.html":

// Set a specific language ISO code to force to assemble a download link with a certain language.
// Установіть ISO-код певної мови, щоб примусово компонувати посилання для завантаження певною мовою.
DL.NL_LANG = "en-US";

// General:
// Загальне:
l10n.dl_headline_text = "Завантаження Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
// Завантаження: рядки в зеленому полі (викоритовується у "index.html").
l10n.dl_green_box_headline_text			= "Завантаження Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Завантаження Apache OpenOffice для певних операційної системи, мови і версії";
l10n.dl_green_box_subtext1_text			= "Розміщено на Sourceforge.net - надійному веб-сайті";
l10n.dl_green_box_subtext1_title		= "Двійкові файли Apache OpenOffice розміщено на SourceForge.net - надійному веб сайті";
l10n.dl_green_box_subtext2_text			= "Виберіть бажані операційну систему, мову і версію";
l10n.dl_green_box_subtext2_title		= "Виберіть бажані операційну систему, мову і версію";
l10n.dl_green_box_selectbox_os_title		= "Виберіть бажану операційну систему";
l10n.dl_green_box_selectbox_lang_title		= "Виберіть бажану мову";
l10n.dl_green_box_selectbox_ver_title		= "Виберіть бажану версію";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines below the 3 following variables)!
/* l10n.dl_green_box_select_box_os_values	= [ "" ]; */
// Рядки, які відображатимуться в розкривних полях вибору ОС, мови та версії.
// Ви повинні залишити принаймні один порожній рядок (дивіться рядки коментарів над 3 наступними змінними)!
// l10n.dl_green_box_select_box_os_values	= [ "" ]; 
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
												"Linux 64-bit (x86-64) (DEB)",
												"Linux 64-bit (x86-64) (RPM)",
												"Linux 32-bit (x86) (DEB)",
												"Linux 32-bit (x86) (RPM)",
												"OS X (version >= 10.7) (DMG)",
												"OS X (version <= 10.6) (DMG)",
												"Інші платформи / операційні системи" ];
 
// l10n.dl_green_box_select_box_language_values	= [ "" ]; 
l10n.dl_green_box_select_box_language_values	= [ "" ];

// l10n.dl_green_box_select_box_lang_values_custom = [ "" ];
//						    							Value		Visible text				Tool tip
// 													Значення	Текст відображення			Спливна підказка
l10n.dl_green_box_select_box_lang_values_custom	= [							"ast",		"Asturian",				"Asturianu",
													"eu",		"Basque",				"Euskara",
													"bg",		"Bulgarian",				"български език",
													"ca",		"Catalan",				"Català",
													"ca-XV",	"Catalan [Valencia AVL]",		"València (AVL)",
													"ca-XR",	"Catalan [Valencia RACV]",		"València (RACV)",
													"zh-CN",	"Chinese [simplified]",			"简体中文",
													"zh-TW",	"Chinese [traditional]",		"正體中文",
													"cs",		"Czech",				"Čeština",
													"da",		"Danish",				"Dansk",
													"nl",		"Dutch",				"Nederlands",
													"en-GB",	"English [British]",			"English [British]",
													"en-US",	"English [US]",				"English [US]",
													"fi",		"Finnish",				"Suomi",
													"fr",		"French",				"Français",
													"gl",		"Galician",				"Galego",
													"de",		"German",				"Deutsch",
													"el",		"Greek",				"ελληνικά",
													"he",		"Hebrew",				"עברית",
													"hi",		"Hindi",				"हिन्दी",
													"hu",		"Hungarian",				"Magyar",
													"it",		"Italian",				"Italiano",
													"ja",		"Japanese",				"日本語",
													"km",		"Khmer",				"ភាសាខ្មែរ",
													"ko",		"Korean",				"한국어",
													"lt",		"Lithuanian",				"Lietuvių",
													"nb",		"Norwegian [Bokmal]",			"Norsk [Bokmål]",
													"pl",		"Polish",				"Polski",
													"pt-BR",	"Portuguese [Brazilian]",		"Português [do Brasil]",
													"pt",		"Portuguese [European]",		"Português [Europeu]",
													"ru",		"Russian",				"Русский",
													"gd",		"Scottish [Gaelic]",			"Gàidhlig",
													"sr",		"Serbian [Cyrillic]",			"Cрпски [ћирилицом]",
													"sk",		"Slovak",				"Slovenský jazyk [slovenčina]",
													"sl",		"Slovenian",				"Slovenski jezik [slovenščina]",
													"es",		"Spanish",				"Español",
													"sv",		"Swedish",				"Svenska",
													"ta",		"Tamil",				"தமிழ்",
													"th",		"Thai",					"ภาษาไทย",
													"tr",		"Turkish",				"Türkçe",
						   							"uk",		"Ukrainian",				"Українська",
													"vi",		"Vietnamese",				"Tiếng Việt" ];

// l10n.dl_green_box_select_box_version_values	= [ "" ]; 
l10n.dl_green_box_select_box_version_values	= [ "" ];

l10n.dl_green_box_select_box_version_older	= "Попередні випуски";

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.
// Завантажити: Рядки в підзеленому полі (використовується в "index.html").
// Наразі не визначено.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.
// Завантажити: Рядки в підзеленому полі (використовується в "index.html").
// Наразі не визначено.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.
// Завантажити: Рядки в підзеленому полі (використовується в "index.html").
// Наразі не визначено.

// Share: Strings in the light-blue box (used in "index.html").
// Поділитися: Рядки в світло-блакитному полі (використовується в "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Допоможіть поширенню";
l10n.dl_share_light_blue_box_headline_title	= "Допоможіть поширенню і розкажіть своїм друзям про  Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Будь ласка, розкажіть своїм друзям про Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Допоможіть поширенню і розкажіть своїм друзям про  Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Офіційний блог";
l10n.dl_share_light_blue_box_blog_title		= "Блог OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Блок OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Будь ласка, розкажіть своїм друзям про Apache OpenOffice у Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Поширте у Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Будь ласка, розкажіть своїм друзям про Apache OpenOffice у Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Поширте у Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
// Розширення: рядки в синьому полі (вгорі) (використовується в "index.html").
l10n.dl_ext_blue_box_headline_text		= "Отримайте розширення і словники Apache OpenOffice";
l10n.dl_ext_blue_box_headline_title		= "Виберіть з великої кількості додаткової і індивідуальної функціональності";
l10n.dl_ext_blue_box_text_text			= "Розширте функціональність Apache OpenOffice з великою і зростаючою бібліотекою розширень та словників від інших користувачів.";
l10n.dl_ext_blue_box_text_title			= "Виберіть з великої кількості додаткової і індивідуальної функціональності";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
// Шаблони: рядки в синьому полі (внизу) (використовується в "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Отримайте шаблони Apache OpenOffice";
l10n.dl_tlp_blue_box_headline_title		= "Виберіть з великої кількості додаткових і індивідуальних документів";
l10n.dl_tlp_blue_box_text_text			= "Розширте креативність Apache OpenOffice з великою і зростаючою бібліотекою шаблонів від інших користувачів.";
l10n.dl_tlp_blue_box_text_title			= "Виберіть з великої кількості додаткових і індивідуальних документів";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
// Рядки на панелі навігації (використовуються в "index.html").
// Інформація про випуск
l10n.dl_nav_headline_1_text			= "Інформація про випуск";
l10n.dl_nav_sysreq_text				= "Вимоги до системи";
l10n.dl_nav_sysreq_title			= "Диск: ~300MБ вільного простору - Пам'ять: &gt;128MБ - Процесор: &gt;500MГц - Операційна система: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Ліцензія";
l10n.dl_nav_license_title			= "Ліцензія Apache OpenOffice";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Джерела";
l10n.dl_nav_source_title			= "Для розробників і досвідчених користувачів: отримайте джерельний код для створення Apache OpenOffice з нуля";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Посібник із збірки";
l10n.dl_nav_build_title				= "Для розробників і досвідчених користувачів: практичний посібник зі збирання Apache OpenOffice з нуля";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "Для розробників: Software Development Kit";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Development Builds";
l10n.dl_nav_devbuilds_title			= "Для QA волонтерів: Development Builds";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
// Документація
l10n.dl_nav_headline_2_text			= "Документація";
l10n.dl_nav_schedule_text			= "Розклад випусків";
l10n.dl_nav_schedule_title			= "Коли планується новий випуск?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Історичний розклад випусків";
l10n.dl_nav_hist_schedule_title			= "Коли планувались попередні випуски?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Посібники із встановлення";
l10n.dl_nav_inst_guide_title			= "Інструкції щодо встановлення Apache OpenOffice на комп’ютерах Windows, macOS (OS&nbsp;X) і Linux";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Посібник користувача";
l10n.dl_nav_user_guide_title			= "Розшрені посібники користувача для щоденного використання";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java і Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Пояснення причин використання Java і що це таке";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Інформація про кінець терміну служби (End-Of-Life)";
l10n.dl_nav_eol_title				= "Інформація про випуски, що досягли свого кінця терміну служби (End-Of-Life)";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
// Додаткові ресурси
l10n.dl_nav_headline_3_text			= "Додаткові ресурси";
l10n.dl_nav_support_text			= "Підтримка";
l10n.dl_nav_support_title			= "Якщо інформація вище не дала відповіді на ваше запитання: безкоштовна та платна підтримка!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Локалізації";
l10n.dl_nav_local_title				= "Інформація і підтримка вашою улюбленою мовою";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Статистика завантажень";
l10n.dl_nav_stat_title				= "Завантаження і інша статистика";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Альтернативне посилання на завантаження #1";
l10n.dl_nav_mirrors1_title			= "Використовуйте дзеркала Sourceforge, щоб завантажити Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Альтернативне посилання на завантаження #2";
l10n.dl_nav_mirrors2_title			= "Використовуйте дзеркала Sourceforge, щоб завантажити Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://downloads.apache.org/openoffice/" + DL.VERSION + "/binaries/";
l10n.dl_nav_porting_text			= "Порти та дистрибутиви сторонніх розробників";
l10n.dl_nav_porting_title			= "Порти та дистрибутиви від сторонніх постачальників";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Архівні та застарілі випуски";
l10n.dl_nav_archive_title			= "Завантаження застарілих і архівних випусків";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
// Список елементів на навігаційній панелі, які зараз не використовуються.
l10n.dl_nav_release_notes_text		= "Примітки до випусків";
l10n.dl_nav_release_notes_title		= "Що нового, що було покращено у Apache OpenOffice?";
l10n.dl_nav_release_notes_href		= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text		= "Перевірте завантажений файл";
l10n.dl_nav_checksum_title		= "Як перевірити завантажений файл підписами та хешами?";
l10n.dl_nav_checksum_href		= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
// Рядки для графіки логотипу.
l10n.dl_img_sourceforge_title		= "Sourceforge - завантажуйте, розробляйте та публікуйте безкоштовне програмне забезпечення з відкритим кодом";
l10n.dl_img_sourceforge_href		= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src		= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt		= "Sourceforge";
l10n.dl_img_w3c_title			= "Служба перевірки розмітки W3C - Перевірте розмітку (HTML, XHTML, ...) веб-документів";
l10n.dl_img_w3c_href			= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src			= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt			= "Валідатор W3C";


// The following variables are used in the "download.js" file:
// Наступні змінні використовуються у файлі "download.js":


// Download: Strings in the green box (used in "download.js").
// Завантажити: рядки в зеленому полі (використовується в "download.js").
l10n.dl_full_link_text				= "Завантажити повну інсталяцію";
l10n.dl_full_link_title				= "Натисніть, щоб завантажити: ";
l10n.dl_langpack_link_text			= "Завантажити мовний пакет";
l10n.dl_langpack_link_title			= "Натисніть, щоб завантажити: ";

l10n.dl_platform_info_text			= "Важливі поради для ";
l10n.dl_platform_info_title			= "Натисніть тут, щоб отримати важливі поради для ";
l10n.dl_platform_info_link			= "platform_hints.html";
l10n.dl_platform_info_headline			= "Apache OpenOffice - Важливі поради для вибраної платформи";
l10n.dl_platform_info_win_headline		= "Windows";
l10n.dl_platform_info_win_text			= "<h5> 32-біт, 64-біт і Java - що вибрати? </h5> <p> Наразі ми пропонуємо 32-бітну (x86) версію для Windows. Проте, вона встановлюється і працює також на Windows 64-біт (x86-64). Будь ласка, зверніть увагу, що вам може знадобитись 32-бітна Java для додаткової функціональності, яку потім слід одноразово вибрати (див. меню 'Засоби - Параметри - OpenOffice - Java'). <br /><br /> Для отримання додаткової інформації про OpenOffice і Java див.: <a target='_blank' href=https://www.openoffice.org/download/common/java.html>https://www.openoffice.org/download/common/java.html</a>.</p>";
l10n.dl_platform_info_mac_headline		= "macOS";
l10n.dl_platform_info_mac_text			= "<h5> Незабаром </h5>";
l10n.dl_platform_info_linux_headline	= "Linux";
l10n.dl_platform_info_linux_text		= "<h5> RPM або DEB - Що вибрати? </h5> <p> RPM використовується у: <br/> CentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server <br /><br /> DEB використовується у: <br/> Debian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu </p> <h5> Інструкції зі встановлення </h5> <p>Інструкції зі встановлення, дивіться тут: <a target='_blank' href=https://www.openoffice.org/download/common/instructions.html#linux>https://www.openoffice.org/download/common/instructions.html#linux</a>.</p>";

l10n.dl_full_link_porting_text		= "Портовані: натисніть, щоб вибрати від сторонніх постачальників";
l10n.dl_full_link_porting_title		= "Натисніть, щоб перейти до сторінки портованих випусків і завантажити від сторонніх постачальників";
l10n.dl_full_link_archive_text		= "Архівні: натисніть, щоб вибратит застарілий випуск";
l10n.dl_full_link_archive_title		= "Натисність, щоб перейти до архіву і завантажити застарілий випуск";

// Download: Strings in the sub-green box (used in "download.js").
// Завантажити: Рядки в підзеленому полі (використовується в "download.js").
l10n.dl_rel_info_headline_text		= "Випуск: ";
l10n.dl_rel_info_milestone_text		= "Milestone ";
l10n.dl_rel_info_buildid_text		= "ID збірки ";
l10n.dl_rel_info_svn_text		= "SVN "
l10n.dl_rel_info_rel_date_text		= "Випущено ";
l10n.dl_rel_notes_text			= "Примітки до випуску";
l10n.dl_rel_notes_title			= "Примітки до випуску Apache OpenOffice ";

l10n.dl_headline_full_text		= "Повна інсталяція: ";
l10n.dl_headline_langpack_text		= "Мовний пакет: ";
l10n.dl_filesize_text			= "Розмір файлу ~ ";
l10n.dl_megabyte_text			= " MБайтів";
l10n.dl_checksum_headline_text		= "Підписи і хеші: ";
l10n.dl_checksum_keys_text		= "KEYS";
l10n.dl_checksum_keys_title		= "Файл підпису KEYS";
l10n.dl_checksum_asc_text		= "ASC";
l10n.dl_checksum_asc_title		= "ASC підпис для: ";
l10n.dl_checksum_md5_text		= "MD5";
l10n.dl_checksum_md5_title		= "MD5 хеш для: ";
l10n.dl_checksum_sha256_text		= "SHA256";
l10n.dl_checksum_sha256_title		= "SHA256 хеш для: ";
l10n.dl_checksum_sha512_text		= "SHA512";
l10n.dl_checksum_sha512_title		= "SHA512 хеш для: ";

l10n.dl_help_img_title			= "В чому різниця між повною інсталяцією і мовним пакунком?";
l10n.dl_help_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt			= "Інформація про інсталяцію";
l10n.dl_help_text			= "Що таке мовний пакунок?";
l10n.dl_help_title			= "В чому різниця між повною інсталяцією і мовним пакунком?";
l10n.dl_checksum_img_title		= "Як перевірити завантажений файл за допомогою контрольних сум?";
l10n.dl_checksum_img_src		= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt		= "Перевірка контрольної суми";
l10n.dl_checksum_text			= "Як перевірити завантаження?";
l10n.dl_checksum_title			= "Як перевірити завантажений файл контрольними сумами?";
l10n.dl_report_img_title		= "Ушкоджене посилання на завантаження? Натисніть тут щоб повідомити.";
l10n.dl_report_img_src			= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt			= "Ушкоджене посилання";
l10n.dl_report_text			= "Повідомити про ушкоджене посилання";
l10n.dl_report_title			= "Ушкоджене посилання на завантаження? Натисніть тут щоб повідомити.";

// Download: Strings for error text in the sub-red box (used in "download.js").
// Завантажити: Рядки для тексту помилки в підчервоному полі (використовується в "download.js").
l10n.dl_full_link_error_text			= "Повна інсталяція не доступна";
l10n.dl_full_link_error_title			= "Будь ласка, виберіть інші мову, платформу або версію.";
l10n.dl_langpack_link_error_text		= "Мовний пакунок не доступний";
l10n.dl_langpack_link_error_title		= "Будь ласка, виберіть інші мову, платформу або версію.";

l10n.dl_error_problem_img_title			= "Вибраний для завантаження файл не доступнийThe selected download file is not available";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Текст помилки";
l10n.dl_error_problem_text			= "Проблема: ";
l10n.dl_error_solution_text			= "Рішення: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " недоступний для ";
l10n.dl_error_please_select_1_text		= "Будь ласка, виберіть версію 4.0.1.";
l10n.dl_error_please_select_2_text		= "Будь ласка, виберіть версію 4.1.0 або новішу.";
l10n.dl_error_please_select_3_text		= "Будь ласка, виберіть завантаження для Windows, macOS (OS&nbsp;X) або Linux.";
l10n.dl_error_please_select_4_text		= "Будь ласка, виберіть іншу мову або версію.";

l10n.dl_unknown_platform_text			= "невідома операційна система / платформа";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
// Завантажити: рядки з налаштованим текстом помилки в підчервоному полі (використовується в "download.js").
// Можна використовувати, коли текст за замовчуванням у змінних вище не можна правильно перекласти.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";


// The following variables are used in the "analyze.html" file:
// Наступні змінні використовуються у файлі "analyze.html":

// Analyze: Strings for the instruction text (used in "analyze.html").
// Аналіз: рядки для тексту інструкції (використовується в "analyze.html").
l10n.dl_analyze_headline_text				= "Як повідомити про ушкоджене посилання на завантаження?";
l10n.dl_analyze_instruction_select_text			= "<b>Виберіть</b>: операційну систему, мову і версію у зеленому полі нижче.";
l10n.dl_analyze_instruction_verify_text			= "Переконайтесь, що ці параметри <b>досі не ведуть</b> до дійсного посилання на завантаження.";
l10n.dl_analyze_instruction_click_text			= "Натисніть на кнопку під зеленим полем: ";
l10n.dl_analyze_instruction_copy_text			= "Скопіюйте дані таблиці до буферу: ";
l10n.dl_analyze_instruction_new_mail_text		= "Створіть новий лист електронної пошти.";
l10n.dl_analyze_instruction_problem_text		= "<b>Опішіть проблему</b> (що не працює і що ви очікуєте).";
l10n.dl_analyze_instruction_details_text		= "Додайте також <b>подробиці про вашу операційну систему</b>.";
l10n.dl_analyze_instruction_paste_text			= "Вставте скопійовані дані наприкінці листа.";
l10n.dl_analyze_instruction_only_download_text		= "Будь ласка, <b>надсилайте листа лише у випадках проблем із завантаженням</b> а не за неможливості встановлення.";
l10n.dl_analyze_instruction_no_install_text		= "Ця сторінка не допоможе вирішити жодну з проблем із встановленням.";
l10n.dl_analyze_instruction_send_mail_text		= "Нарешті, <b>надішліть листа</b> до: ";
l10n.dl_analyze_instruction_mailing_list_text		= "Список розсилки розробки Apache OpenOffice";
l10n.dl_analyze_instruction_mailing_list_title		= "Надішліть звіт до списку розсилки розробників Apache OpenOffice";
l10n.dl_analyze_instruction_learn_more_text		= "Натисніть тут, щоб дізнатись що таке список розсилки";
l10n.dl_analyze_instruction_learn_more_title		= "Дізнайтесь більше за список розсилки";
l10n.dl_analyze_instruction_answer_text			= "Ми спробуємо відповісти якнайшвидше після отримання листа і вивчення проблеми.";
l10n.dl_analyze_instruction_thanks_text			= "Ми вдячні вам за повідомлення.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
// Аналіз: рядки для 3 кнопок (використовуються в "analyze.html").
l10n.dl_analyze_update_button_text		= "Натисніть, щоб оновит таблицю";
l10n.dl_analyze_update_button_title		= "Вставте вибрані параметри як значення до таблиці нижче";
l10n.dl_analyze_select_button_text		= "Натисніть, щоб вибрати таблицю";
l10n.dl_analyze_select_button_title		= "Виберіть всі дані в таблиці нижче";
l10n.dl_analyze_copy_button_text		= "Скопіюйте за допомогою [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Скопіюйте вибрані дані таблиці за допомогою [ Ctrl ] + [ C ] або [ &#8984; ] + [ C ] до буферу";

// Analyze: Strings for the table (used in "analyze.html").
// Аналіз: рядки для таблиці (використовується в "analyze.html").
l10n.dl_analyze_table_browser_text		= "Змінні браузера";
l10n.dl_analyze_table_values_text		= "Значення";
l10n.dl_analyze_table_yes_text			= "Так";
l10n.dl_analyze_table_no_text			= "Ні";
l10n.dl_analyze_table_stable_release_text	= "Стабільний випуск";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;функції/змінні";


// General: Links to webpage files that could be localized.
// Загальне: посилання на файли веб-сторінок, які можна локалізувати.
l10n.dl_rel_notes_aoo4110_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.10+Release+Notes";
l10n.dl_rel_notes_aoo419_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.9+Release+Notes";
l10n.dl_rel_notes_aoo418_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.8+Release+Notes";
l10n.dl_rel_notes_aoo417_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.7+Release+Notes";
l10n.dl_rel_notes_aoo416_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.6+Release+Notes";
l10n.dl_rel_notes_aoo415_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.5+Release+Notes";
l10n.dl_rel_notes_aoo414_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.4+Release+Notes";
l10n.dl_rel_notes_aoo413_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.3+Release+Notes";
l10n.dl_rel_notes_aoo412_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.2+Release+Notes";
l10n.dl_rel_notes_aoo411_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.1+Release+Notes";
l10n.dl_rel_notes_aoo410_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes";
l10n.dl_rel_notes_aoo401_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes";
l10n.dl_rel_notes_aoo400_link		= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0+Release+Notes";
l10n.dl_help_link			= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link			= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link			= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link			= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link			= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link			= "https://www.openoffice.org/download/other-341.html";
