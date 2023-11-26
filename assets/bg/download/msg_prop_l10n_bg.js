/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:	"Download Apache OpenOffice"
 * Correct:	l10n.dl_green_box_headline_text
 */



// Object that contains all following variables.
// var l10n = new Object();

// The following variables are used in the "index.html" file:

// Set a specific language ISO code to force to assemble a download link with a certain language.
// Exchange "en-US" only to a valid ISO lang code when the language is actually available for download.
DL.NL_LANG					= "bg";

// General:
l10n.dl_headline_text				= "Изтегли на Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Изтегли Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Изтегли Apache OpenOffice за твоята любима операционна система, език и версия";
l10n.dl_green_box_subtext1_text			= "Хостван от SourceForge.net – доверен уебсайт";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice двоични файлове са хоствани от SourceForge.net – Доверен уебсайт";
l10n.dl_green_box_subtext2_text			= "Избери твоята любима операционна система, език и версия";
l10n.dl_green_box_subtext2_title		= "Избери твоята любима операционна система, език и версия";
l10n.dl_green_box_selectbox_os_title		= "Избери твоята любима операционна система";
l10n.dl_green_box_selectbox_lang_title		= "Избери твоят любим език";
l10n.dl_green_box_selectbox_ver_title		= "Избери твооята любима версия на издаване";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines above the 3 following variables)!
// Leaving as default will result in the download box for any OS, language, or release shown on:
// http://www.openoffice.org/download/index.html
// Customizations to each of these arrays will require ongoing maintenance for new releases.

// l10n.dl_green_box_select_box_os_values	= [ "" ];
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
						    "Linux 64-bit (x86-64) (DEB)",
						    "Linux 64-bit (x86-64) (RPM)",
						    "Linux 32-bit (x86) (DEB)",
						    "Linux 32-bit (x86) (RPM)",
						    "OS X (version >= 10.7) (DMG)",
						    "OS X (version <= 10.6) (DMG)",
						    "Повече платформи / Операционни системи" ];

// l10n.dl_green_box_select_box_language_values	= [ "" ];
l10n.dl_green_box_select_box_language_values	= [ "" ];

// l10n.dl_green_box_select_box_lang_values_custom = [ "" ];
//						    Value	Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom	= [ "ast",	"Астурийски",				"Астуриану",
						    "eu",	"Баски",				"Еускара",
						    "bg",	"Български",				"Р±СЉР»РіР°СЂСЃРєРё РµР·РёРє",
						    "ca",	"Каталoнски",				"CatalГ ",
						    "ca-XV",	"Каталонски [Valencia AVL]",		"ValГЁncia (AVL)",
						    "ca-XR",	"Каталонски [Valencia RACV]",		"ValГЁncia (RACV)",
						    "zh-CN",	"Китайски [опростен]",			"з®ЂдЅ“дёж–‡",
						    "zh-TW",	"Китайски [традиционен]",		"жЈй«”дёж–‡",
						    "cs",	"Чешки",				"ДЊeЕЎtina",
						    "da",	"Датски",				"Dansk",
						    "nl",	"Холандски",				"Нидерландия",
						    "en-GB",	"Английски [Британски]",		"Английски [Британски]",
						    "en-US",	"Английски [Американски]",		"Английски [Американски]",
						    "fi",	"Филнандски",				"Суоми",
						    "fr",	"Френски",				"FranГ§ais",
						    "gl",	"Галисийски",				"Галего",
						    "de",	"Немски",				"Немски",
						    "el",	"Гръцки",				"ОµО»О»О·ОЅО№ОєО¬",
						    "he",	"Иврит",				"ЧўЧ‘ЧЁЧ™ЧЄ",
						    "hi",	"Хинди",				"а¤№а¤їа¤ЁаҐЌа¤¦аҐЂ",
						    "hu",	"Унгарски",				"Magyar",
						    "it",	"Италиански",				"Italiano",
						    "ja",	"Японски",				"ж—Ґжњ¬иЄћ",
						    "km",	"Кхмерски",				"бћ—бћ¶бћџбћ¶бћЃбџ’бћ?бџ‚бћљ",
						    "ko",	"Корейски",				"н•њкµм–ґ",
						    "lt",	"Литовски",				"LietuviЕі",
						    "nb",	"Норвежки [Bokmal]",			"Norsk [BokmГҐl]",
						    "pl",	"Полски",				"Polski",
						    "pt-BR",	"Португалски [Бразилски]",		"PortuguГЄs [do Brasil]",
						    "pt",	"Португалски [Европейски]",		"PortuguГЄs [Europeu]",
						    "ru",	"Руски",				"Р СѓСЃСЃРєРёР№",
						    "gd",	"Шотландски [Галийски]",		"GГ idhlig",
						    "sr",	"Сръбски [Кирилица]",			"CСЂРїСЃРєРё [С›РёСЂРёР»РёС†РѕРј]",
						    "sk",	"Словашки",				"SlovenskГЅ jazyk [slovenДЌina]",
						    "sl",	"Словенски",				"Slovenski jezik [slovenЕЎДЌina]",
						    "es",	"Испански",				"EspaГ±ol",
						    "sv",	"Шведски",				"Svenska",
						    "ta",	"Тамилски",				"а®¤а®®а®їа®ґаЇЌ",
						    "th",	"Таитски",				"аё аёІаё©аёІа№„аё—аёў",
						    "tr",	"Турски",				"TГјrkГ§e",
						    "vi",	"Виетнамски",				"Tiбєїng Viб»‡t" ];

l10n.dl_green_box_select_box_version_values	= [ "" ];

l10n.dl_green_box_select_box_version_older	= "По – стари издания";

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Помогнете за разпространението на думата";
l10n.dl_share_light_blue_box_headline_title	= "Помогнете за разпространението на думата и разкажете на своите приятели за Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Моля, разкажете на вашите приятели за Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= " Помогнете за разпространението на думата и разкажете на своите приятели за Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Официален блог";
l10n.dl_share_light_blue_box_blog_title		= "Уеб лог на  OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Уеб лог на OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Фейсбук";
l10n.dl_share_light_blue_box_facebook_title	= "Моля разкажете на вашите приятели за Apache OpenOffice през Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Сподели във Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Моля разкажете на вашите приятели за Apache OpenOffice през Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Сподели в Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Вземи Apache OpenOffice разширения и Речници";
l10n.dl_ext_blue_box_headline_title		= "Избери от множество допълнителни и индивидуално изготвени функционалности";
l10n.dl_ext_blue_box_text_text			= "Подобри функционалността на твоя Apache OpenOffice с богата и постоянно обогатяваща се библиотека от добавки и речници от други потребители.";
l10n.dl_ext_blue_box_text_title			= "Избери от широк обхват от допълнителни и индивидуални функционалности";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Вземи Apache OpenOffice шаблони";
l10n.dl_tlp_blue_box_headline_title		= "Избери от широк обхват от допълнителни и индивидуално изготвени документи";
l10n.dl_tlp_blue_box_text_text			= "Подобри креативността на твоя Apache OpenOffice с обемна и постоянно растяща библиотека с шаблони от други потребители.";
l10n.dl_tlp_blue_box_text_title			= "Избери от широк обхват от допълнителни и индивидуално изготвени документи";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Информация за релийза";
l10n.dl_nav_sysreq_text				= "Системни изисквания";
l10n.dl_nav_sysreq_title			= "Твърд диск: ~300MB свободна памет: &gt;128MB - Процесор: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Лиценз";
l10n.dl_nav_license_title			= "Лиценз на Apache OpenOffice";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Източник";
l10n.dl_nav_source_title			= "За разработчици и за напреднали потребители: Вземете източника, за да построите Apache OpenOffice от нулата";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Ръководство за изграждане";
l10n.dl_nav_build_title				= "За разработчици и напреднали потребители: Как Да  - ръководство, за да се изгради Apache OpenOffice от нулата";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Пакет за разработка на софтуер - Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "За разработчици: Пакет за разработка на софтуер Software Development Kit";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Изграждане и развитие;
l10n.dl_nav_devbuilds_title			= "За доброволци - въпроси и отговори: Изграждане и развитие";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Документация";
l10n.dl_nav_schedule_text			= "График на релийзи";
l10n.dl_nav_schedule_title			= "Кога са планувани нови релийзи?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Изторически график на релийзи";
l10n.dl_nav_hist_schedule_title			= "Кога бяха планувани старите релийзи?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Ръководства за инсталация";
l10n.dl_nav_inst_guide_title			= "инструкции за инсталиране на Apache OpenOffice на Windows, macOS (OS&nbsp;X) и Linux машини";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Ръководства на потребителите";
l10n.dl_nav_user_guide_title			= "Обширни ръководства на потребителя за ежедневна употреба";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java и Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Explains why to use Java and what it is";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Информация за край на поддръжката";
l10n.dl_nav_eol_title				= "Информация за релийзи, които са стигнали крайна фаза.";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Допълнителни ресурси";
l10n.dl_nav_support_text			= "Поддръжка";
l10n.dl_nav_support_title			= "Ако информацията по – горе не е отговорила на твоите въпроси: безплатна и заплатена поддръжка!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Локализации";
l10n.dl_nav_local_title				= "Информация и поддръжка предоставена на твоя език";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Статистика на изтеглянията";
l10n.dl_nav_stat_title				= "Статистиак за изтеглянията и друга статистика";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Алтернативна връзка за сваляне #1";
l10n.dl_nav_mirrors1_title			= "Използвай огледала на SourceForge за да изтеглиш Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Алтернативен линк за изтегляне #2";
l10n.dl_nav_mirrors2_title			= "Използвай Apache огледала, за да изтеглиш Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://downloads.apache.org/openoffice/" + DL.VERSION + "/binaries/";
l10n.dl_nav_porting_text			= "Портове на трети страни и разпространители";
l10n.dl_nav_porting_title			= "Портонве и разпространения от трети страни - доставчици";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Архивирани и стари релийзи";
l10n.dl_nav_archive_title			= "Изтегли стари и архивирани релийзи";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Бележки по релийза";
l10n.dl_nav_release_notes_title			= "Какво е новото, какво беше подобрено в Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Провери изтегления файл";
l10n.dl_nav_checksum_title			= "Как да проверите изтегления файл с подписи и хешове?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "SourceForge - Изтегли, Разработи и Публикувай Безплатен Софтуер с отворен код";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "SourceForge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service – Проверете маркирането  (HTML, XHTML, ...) на Web документите";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Изтегли пълна инсталация";
l10n.dl_full_link_title				= "Натисни за изтегляне: ";
l10n.dl_langpack_link_text			= "Изтегли езиков пакет";
l10n.dl_langpack_link_title			= "Натисни за изтегляне: ";

l10n.dl_platform_info_text			= "Важни кратки съвети за ";
l10n.dl_platform_info_title			= "Натисни тук, за да получиш важни кратки съвети за ";
l10n.dl_platform_info_link			= "platform_hints.html";
l10n.dl_platform_info_headline			= "Apache OpenOffice – Важни кратки съвети за избраната платформа";
l10n.dl_platform_info_win_headline		= "Windows";
l10n.dl_platform_info_win_text			= "<h5> 32-bit, 64-bit и Java – Кое да избера? </h5> <p> Към момента ние предлагаме  32-bit битова (x86) версия за Windows. Обаче, приложението се инсталира и работи също на  64 - битов Windows 64-bit (x86-64). Моля обърнете внимание, че може да се нуждаете от 32 – битова Java  за допълнителна функционалност, която може да бъде избирана само веджъж.  (Виж меню 'Tools – Options (интрументи - Опции - OpenOffice - Java'). <br /><br /> За повече информация относно OpenOffice и Java, моля виж : <a target='_blank' href=https://www.openoffice.org/download/common/java.html>https://www.openoffice.org/download/common/java.html</a>.</p>";
l10n.dl_platform_info_mac_headline		= "macOS";
l10n.dl_platform_info_mac_text			= "<h5> Очаквайте скоро </h5>";
l10n.dl_platform_info_linux_headline		= "Linux";
l10n.dl_platform_info_linux_text		= "<h5> RPM vs. DEB – Какво да изберем? </h5> <p> RPM е използван в: <br/> CentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server <br /><br /> DEB е използван в: <br/> Debian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu </p> <h5> Инструкции за инсталация </h5> <p>За инструкции за инсталация моля вижте тук: <a target='_blank' href=https://www.openoffice.org/download/common/instructions.html#linux>https://www.openoffice.org/download/common/instructions.html#linux</a>.</p>";

l10n.dl_full_link_porting_text			= "Пренасочване: Натиснете тук, за да изберете от трети – страни - доставчици";
l10n.dl_full_link_porting_title			= "Натиснете тук за пренасочваща уеб страница и за да изтеглите от трета – страна доставчици";
l10n.dl_full_link_archive_text			= "Архив: Натисни, за да избереш по – стари версии";
l10n.dl_full_link_archive_title			= "Натисни тук, за да сърфираш в архива и за да изтеглиш по – стара архивна версия. ";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Рилийз: ";
l10n.dl_rel_info_milestone_text			= "Важно събитие ";
l10n.dl_rel_info_buildid_text			= "Построи ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Издания ";
l10n.dl_rel_notes_text				= "Бележки по рилийза";
l10n.dl_rel_notes_title				= "Важни бележки за Apache OpenOffice ";

l10n.dl_headline_full_text			= "Пълна инсталация: ";
l10n.dl_headline_langpack_text			= "Езиков пакет: ";
l10n.dl_filesize_text				= "размер на файла ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Подписи и хашове: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS подписан файл";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC подпис за: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 хеш за: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 хеш за: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 хеш за: ";

l10n.dl_help_img_title				= "Каква е разликата между пълна инсталация и езиков пакет?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Информация за инсталирането";
l10n.dl_help_text				= "Какво е езиков пакет?";
l10n.dl_help_title				= "Каква е разликата между пълна инсталация и езиков пакет?";
l10n.dl_checksum_img_title			= "Как да проверим изтегления файл с контролни суми?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Проверка на контролните суми";
l10n.dl_checksum_text				= "Как да проверим изтеглянето?";
l10n.dl_checksum_title				= "Как да проверим изтегления файл с контролни суми?";
l10n.dl_report_img_title			= "Счупен линк за сваляне? Натисни тук, за да докладваш.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Счупен линк";
l10n.dl_report_text				= "Докладвай счупен линк";
l10n.dl_report_title				= "Счупен/Грешен линк за изтегляне? Натисни тук, за да докладваш.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Не е налична пълна инсталация";
l10n.dl_full_link_error_title			= "Моля изберете друг език, платформа или версия.";
l10n.dl_langpack_link_error_text		= "Не е наличен езиков пакет";
l10n.dl_langpack_link_error_title		= "Моля изберете друг език, платформа или версия .";

l10n.dl_error_problem_img_title			= "Избраният файл за изтегляне не е наличен";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Текст за грешка";
l10n.dl_error_problem_text			= "Проблем: ";
l10n.dl_error_solution_text			= "Решение: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " Не е наличен за ";
l10n.dl_error_please_select_1_text		= "Моля изберете версия 4.0.1.";
l10n.dl_error_please_select_2_text		= "Моля изберете версия  4.1.0 или по - нова.";
l10n.dl_error_please_select_3_text		= "Моля изберете изтегляне за Windows, macOS (OS&nbsp;X) или Linux.";
l10n.dl_error_please_select_4_text		= "Моля изберете друг език или версия.";

l10n.dl_unknown_platform_text			= "Неразпозната операционна система / платформа";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Как да докладваме неработещ линк за изтегляне?";
l10n.dl_analyze_instruction_select_text		= "<b>Изберете своите предпочитания</b>: Операционна система, Еик и версия в зеленото квадратче отдолу.";
l10n.dl_analyze_instruction_verify_text		= "Провери, че тези опции <b>still do not все още не</b> водят до валидни линкове за изтегляне.";
l10n.dl_analyze_instruction_click_text		= "Натисни бутона под зеленото квадратче: ";
l10n.dl_analyze_instruction_copy_text		= "Копирай избраните таблични данни в клипборда: ";
l10n.dl_analyze_instruction_new_mail_text	= "Създай нов мейл.";
l10n.dl_analyze_instruction_problem_text	= "<b>Напиши описание на проблема</b> (Какво не работи и какви са твоите очаквания).";
l10n.dl_analyze_instruction_details_text	= "Моля също добави <b>детайли относно използваната операционна система</b>.";
l10n.dl_analyze_instruction_paste_text		= "Постави копираните данни в края на мейла.";
l10n.dl_analyze_instruction_only_download_text	= "Моля <b> изпрати мейла само в случай на проблеми с изтеглянето </b>, а не ако не можеш да инсталираш.";
l10n.dl_analyze_instruction_no_install_text	= "Тази уеб страница не може да помогне в случай на проблеми с инсталирането.";
l10n.dl_analyze_instruction_send_mail_text	= "Най - накрая, <b>изпрати мейл</b> към: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice мейл лист с разработчици";
l10n.dl_analyze_instruction_mailing_list_title	= "Изпрати отчет към  мейл листа с разработчици на Apache OpenOffice";
l10n.dl_analyze_instruction_learn_more_text	= "Натисни тук, за да научиш повече какво представляват мейлинг листите";
l10n.dl_analyze_instruction_learn_more_title	= "Научи повече за това, какво е мейл лист";
l10n.dl_analyze_instruction_answer_text		= "Ние ще се опитаме да отговорим възможно най – скоро, след като получим мейла и проблемът бъде анализиран. ";
l10n.dl_analyze_instruction_thanks_text		= "Благодарим за твоя доклад.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Натисни за да актуализираш таблицата";
l10n.dl_analyze_update_button_title		= "Постави избраните опции като променливи стойности в таблицата по - долу";
l10n.dl_analyze_select_button_text		= "Натисни, за да избереш таблица";
l10n.dl_analyze_select_button_title		= "Избери всички данни в таблицата по - долу";
l10n.dl_analyze_copy_button_text		= "Копирай с [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Копирай избраните данни от таблицата чрез [ Ctrl ] + [ C ] или [ &#8984; ] + [ C ] в клипборда";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_problem_text1		= "Problem description";
l10n.dl_analyze_table_problem_text2		= "Exchange this text to describe the problem <br /><br />(What does not work? What do you expect?)";
l10n.dl_analyze_table_browser_text		= "Browser variables";
l10n.dl_analyze_table_values_text		= "Values";
l10n.dl_analyze_table_yes_text			= "Yes";
l10n.dl_analyze_table_no_text			= "No";
l10n.dl_analyze_table_stable_release_text	= "Stable Release";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;functions/variables";



// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo4110_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.10+Release+Notes";
l10n.dl_rel_notes_aoo419_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.9+Release+Notes";
l10n.dl_rel_notes_aoo418_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.8+Release+Notes";
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
