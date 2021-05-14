/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:   "Download Apache OpenOffice"
 * Correct: l10n.dl_green_box_headline_text
 */



// Object that contains all following variables.
// var l10n = new Object();

// The following variables are used in the "index.html" file:

// Set a specific language ISO code to force to assemble a download link with a certain language.
// Change xx to a valid ISO lang code.
DL.NL_LANG					= "en-US";

// General:
l10n.dl_headline_text				= "Apache OpenOffice ներբեռնում";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Ներբեռնեք Apache OpenOffice -ը";
l10n.dl_green_box_headline_title		= "Ներբեռնեք Apache OpenOffice -ը ձեր նախընտրած գործառնական համակարգի, լեզվի և տարբերակի համար";
l10n.dl_green_box_subtext1_text			= "Հյուրընկալվում է SourceForge.net -ի կողմից՝ վստահելի կայք";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice -ի երկուական նիշքերը հյուրընկալվում են SourceForge.net -ի կողմից` վստահելի կայք";
l10n.dl_green_box_subtext2_text			= "Ընտրեք ձեր նախընտրած գործառնական համակարգը, լեզուն և տարբերակը";
l10n.dl_green_box_subtext2_title		= "Ընտրեք ձեր նախընտրած գործառնական համակարգը, լեզուն և տարբերակը";
l10n.dl_green_box_selectbox_os_title		= "Ընտրեք ձեր նախընտրած գործառնական համակարգը";
l10n.dl_green_box_selectbox_lang_title		= "Ընտրեք ձեր նախընտրած լեզուն";
l10n.dl_green_box_selectbox_ver_title		= "Ընտրեք թողարկման ձեր նախընտրած տարբերակը";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines above the 3 following variables)!
// Leaving as default will result in the download box for any OS, language, or release shown on:
// http://www.openoffice.org/download/index.html
// Custominzations to each of these arrays will require ongoing maintenance for new releases.

// l10n.dl_green_box_select_box_os_values	= [ "" ];
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
												"Linux 64-բիթ (x86-64) (DEB)",
												"Linux 64-բիթ (x86-64) (RPM)",
												"Linux 32-բիթ (x86) (DEB)",
												"Linux 32-բիթ (x86) (RPM)",
												"OS X (տարբերակ >= 10.7) (DMG)",
												"OS X (տարբերակ <= 10.6) (DMG)",
												"Ավելի հարթակներ / գործառնական համակարգեր" ];

// l10n.dl_green_box_select_box_language_values	= [ "" ];
l10n.dl_green_box_select_box_language_values	= [ "" ];

// l10n.dl_green_box_select_box_lang_values_custom = [ "" ];
												 // Value		Visible text							Tool tip
l10n.dl_green_box_select_box_lang_values_custom	= [ "ast",		"Աստուրիան",							"Աստուրիան",
													"eu",		"Բասկերեն",							"Euskara",
													"bg",		"Բուլղարերեն",						"български език",
													"ca",		"Կատալաներեն",						"Català",
													"ca-XV",	"Կատալաներեն [Վալենսիա AVL]",		"València (AVL)",
													"ca-XR",	"Կատալաներեն [Վալենսիա RACV]",	"València (RACV)",
													"zh-CN",	"Չինարեն [պարզեցված]",				"简体中文",
													"zh-TW",	"Չինարեն [ավանդական]",			"正體中文",
													"cs",		"Չեխերեն",							"Čeština",
													"da",		"Դանիերեն",							"Dansk",
													"nl",		"Հոլանդերեն",							"Nederlands",
													"en-GB",	"Անգլերեն [Բրիտանական]",			"English [British]",
													"en-US",	"Անգլերեն [ԱՄՆ]",						"English [US]",
													"fi",		"Ֆիններեն",							"Suomi",
													"fr",		"French",								"Français",
													"gl",		"Գալիսիերեն",							"Galego",
													"de",		"Գերմաներեն",						"Deutsch",
													"el",		"Հունարեն",							"ελληνικά",
													"he",		"Եբրայերեն",							"עברית",
													"hi",		"Հինդի",								"हिन्दी",
													"hu",		"Հունգարերեն",						"Magyar",
													"it",		"Իտալերեն",							"Italiano",
													"ja",		"Ճապոներեն",							"日本語",
													"km",		"Խմերերեն",							"ភាសាខ្មែរ",
													"ko",		"Կորեերեն",							"한국어",
													"lt",		"Լիտվերեն",							"Lietuvių",
													"nb",		"Նորվերգերեն [Բոկմալ]",				"Norsk [Bokmål]",
													"pl",		"Լեհերեն",								"Polski",
													"pt-BR",	"Պորտուգալերեն [Բրազիլական]",		"Português [do Brasil]",
													"pt",		"Պորտուգալերեն [Եվրոպական]",		"Português [Europeu]",
													"ru",		"Ռուսերեն",							"Русский",
													"gd",		"Շոտլանդերեն [Գաելիկ]",				"Gàidhlig",
													"sr",		"Սերբերեն [Կիրիլիցա]",				"Cрпски [ћирилицом]",
													"sk",		"Սլովակերեն",							"Slovenský jazyk [slovenčina]",
													"sl",		"Սլովեներեն",							"Slovenski jezik [slovenščina]",
													"es",		"Իսպաներեն",							"Español",
													"sv",		"Շվեդերեն",							"Svenska",
													"ta",		"Թամիլերեն",							"தமிழ்",
													"th",		"Թայերեն",							"ภาษาไทย",
													"tr",		"Թուրքերեն",							"Türkçe",
													"vi",		"Վիետնամերեն",						"Tiếng Việt" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "" ];

l10n.dl_green_box_select_box_version_values	= [ "" ];

l10n.dl_green_box_select_box_version_older	= "Older releases";

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text		= "Օգնեք տարածել խոսքը";
l10n.dl_share_light_blue_box_headline_title		= "Օգնեք տարածել խոսքը և պատմեք ձեր ընկերներին Apache OpenOffice -ի մասին";
l10n.dl_share_light_blue_box_text_text			= "Խնդրում ենք պատմեք ձեր ընկերներին Apache OpenOffice -ի մասին:";
l10n.dl_share_light_blue_box_text_title			= "Օգնեք տարածել խոսքը և պատմեք ձեր ընկերներին Apache OpenOffice -ի մասին";
l10n.dl_share_light_blue_box_blog_text			= "Պաշտոնական բլոգ";
l10n.dl_share_light_blue_box_blog_title			= "OpenOffice -ի վեբլոգը";
l10n.dl_share_light_blue_box_blog_src			= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt			= "OpenOffice -ի վեբլոգը";
l10n.dl_share_light_blue_box_facebook_text		= "Դիմագիրք";
l10n.dl_share_light_blue_box_facebook_title		= "Խնդրում ենք ձեր ընկերներին պատմեք Apache OpenOffice -ի մասին Facebook-ի միջոցով";
l10n.dl_share_light_blue_box_facebook_src		= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt		= "Կիսվեք Facebook -ում";
l10n.dl_share_light_blue_box_twitter_text		= "Twitter";
l10n.dl_share_light_blue_box_twitter_title		= "Խնդրում ենք ձեր ընկերներին պատմեք Apache OpenOffice -ի մասին Twitter-ի միջոցով";
l10n.dl_share_light_blue_box_twitter_src		= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt		= "Կիսվեք Twitter -ում";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text			= "Ձեռք բերեք Apache OpenOffice -ի ընդարձակումները և բառարանները";
l10n.dl_ext_blue_box_headline_title			= "Ընտրեք լրացուցիչ և անհատական ֆունկցիոնալության լայն տեսականիից";
l10n.dl_ext_blue_box_text_text				= "Ընդլայնեք ձեր Apache OpenOffice ֆունկցիոնալությունը այլ օգտվողների տրամադրած ընդլայնումների և բառարանների մեծ և աճող գրադարանով:";
l10n.dl_ext_blue_box_text_title				= "Ընտրեք լրացուցիչ և անհատական ֆունկցիոնալության լայն տեսականիից";
l10n.dl_ext_blue_box_text_href				= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text			= "Ստացեք Apache OpenOffice ձևանմուշները";
l10n.dl_tlp_blue_box_headline_title			= "Ընտրեք լրացուցիչ և անհատական փաստաթղթերի լայն տեսականիից";
l10n.dl_tlp_blue_box_text_text				= "Ընդլայնեք ձեր Apache OpenOffice -ի ստեղծագործականությունը այլ օգտվողների կաղապարների մեծ և աճող գրադարանի միջոցով:";
l10n.dl_tlp_blue_box_text_title				= "Ընտրեք լրացուցիչ և անհատական փաստաթղթերի լայն տեսականիից";
l10n.dl_tlp_blue_box_text_href				= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text					= "Թողարկման տեղեկատվություն";
l10n.dl_nav_sysreq_text						= "Համակարգի պահանջներ";
l10n.dl_nav_sysreq_title					= "HDD: ~300MB ազատ - Հիշողություն: &gt;128MB - պրոցեսոր: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href						= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text					= "Արտոնագիր";
l10n.dl_nav_license_title					= "Apache OpenOffice արտոնագիր";
l10n.dl_nav_license_href					= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text						= "Աղբյուր";
l10n.dl_nav_source_title					= "Մշակողների և փորձված օգտագործողների համար. Ստացեք Apache OpenOffice-ը զրոյից կառուցելու սկզբնական կոդըը";
l10n.dl_nav_source_href						= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text						= "Կառուցման ուղեցույց";
l10n.dl_nav_build_title						= "Մշակողների և փորձված օգտագործողների համար․ HowTo ուղեցույց զրոյից Apache OpenOffice-ը կառուցելու համար";
l10n.dl_nav_build_href						= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text						= "Ծրագրաշարի մշակման հավաքածու (SDK)";
l10n.dl_nav_sdk_title						= "Մշակողների համար՝ Ծրագրաշարի մշակման հավաքածո";
l10n.dl_nav_sdk_href						= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text					= "Մշակումների կառուցում";
l10n.dl_nav_devbuilds_title					= "Որակի աջակիցների կամավորների համար: Մշակումների կառուցում";
l10n.dl_nav_devbuilds_href					= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text					= "Փաստաթղթավորում";
l10n.dl_nav_schedule_text					= "Թողարկման ժամանակացույցեր";
l10n.dl_nav_schedule_title					= "Ե՞րբ են նախատեսվում նոր թողարկումները:";
l10n.dl_nav_schedule_href					= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text				= "Պատմական թողարկման ժամանակացույց";
l10n.dl_nav_hist_schedule_title				= "Ե՞րբ էին նախատեսվում հին թողարկումները:";
l10n.dl_nav_hist_schedule_href				= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text					= "Տեղադրման ուղեցույցներ";
l10n.dl_nav_inst_guide_title				= "Տեղադրելու ցուցումներ Apache OpenOffice -ը Windows, macOS (OS&nbsp;X) և Linux մեքենաներում";
l10n.dl_nav_inst_guide_href					= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text					= "Օգտագործողի ուղեցույցներ";
l10n.dl_nav_user_guide_title				= "Ամենօրյա օգտագործման ընդլայնված ձեռնարկներ";
l10n.dl_nav_user_guide_href					= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text					= "Java և Apache OpenOffice";
l10n.dl_nav_why_java_title					= "Բացատրում է, թե ինչու է օգտագործել Java- ն ու ինչ է դա";
l10n.dl_nav_why_java_href					= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text						= "Շահագործման կյանքի տևողության մասին տեղեկատվություն";
l10n.dl_nav_eol_title						= "Տեղեկատվություն թողարկումների մասին, որոնք հասել են շահագործման կյանքի տևողության վերջի կարգավիճակին";
l10n.dl_nav_eol_href						= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Լրացուցիչ պաշարներ";
l10n.dl_nav_support_text			= "Աջակցություն";
l10n.dl_nav_support_title			= "Եթե վերը նշված տեղեկատվությունը չի պատասխանում ձեր հարցին՝ անվճար և վճարովի աջակցություն:";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Տեղայնացումներ";
l10n.dl_nav_local_title				= "Տեղեկատվություն և աջակցություն ձեր սիրած լեզվով";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Ներբեռնման վիճակագրություն";
l10n.dl_nav_stat_title				= "Ներբեռնման և այլ վիճակագրություն";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Այլընտրանքային ներբեռնման հղում #1";
l10n.dl_nav_mirrors1_title			= "Apache OpenOffice-ը ներբեռնելու համար օգտագործեք SourceForge հայելիները";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Այլընտրանքային ներբեռնման հղում #2";
l10n.dl_nav_mirrors2_title			= "Apache OpenOffice-ը ներբեռնելու համար օգտագործեք Apache հայելիներ";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "3-րդ կողմի հանգույցներ և բաշխումներ";
l10n.dl_nav_porting_title			= "Հանգույցներ և բաշխումներ 3-րդ կողմի վաճառողներից";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Արխիվացված և հին թողարկումներ";
l10n.dl_nav_archive_title			= "Ներբեռնեք հին և արխիվացված թողարկումները";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text		= "Թողարկման նշումներ";
l10n.dl_nav_release_notes_title		= "Ի՞նչ նոր բան կա, ի՞նչն է բարելավվել Apache OpenOffice-ում:";
l10n.dl_nav_release_notes_href		= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Ստուգեք ներբեռնված նիշքը";
l10n.dl_nav_checksum_title			= "Ինչպե՞ս ստուգել ներբեռնված նիշքը ստորագրություններով և հեշերով:";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title		= "SourceForge - Ներբեռնեք, մշակեք և հրապարակեք անվճար բաց կոդով ծրագրակազմ";
l10n.dl_img_sourceforge_href		= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "SourceForge";
l10n.dl_img_w3c_title				= "W3C Նշագրման վավերացման ծառայություն - Ստուգեք ոստայնի փաստաթղթերի նշագրումը (HTML, XHTML, ...)";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src					= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt					= "W3C վավերացնող";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text					= "Ներբեռնեք ամբողջական տեղադրումը";
l10n.dl_full_link_title					= "Ներբեռնելու համար կտտացրեք: ";
l10n.dl_langpack_link_text				= "Ներբեռնեք լեզվի փաթեթը";
l10n.dl_langpack_link_title				= "Ներբեռնելու համար կտտացրեք: ";

l10n.dl_platform_info_text				= "Important hints for ";
l10n.dl_platform_info_title				= "Click here to get important hints for ";
l10n.dl_platform_info_link				= "platform_hints.html";
l10n.dl_platform_info_headline			= "Apache OpenOffice - Important hints for the chosen platform";
l10n.dl_platform_info_win_headline		= "Windows";
l10n.dl_platform_info_win_text			= "<h5> 32-bit, 64-bit and Java - What to choose? </h5> <p> At the moment we offer a 32-bit (x86) version for Windows. However, it installs and runs also on Windows 64-bit (x86-64). Please note that you may need Java in 32-bit for additional functionality which must then be selected only once (see menu 'Tools - Options - OpenOffice - Java'). <br /><br /> For more information about OpenOffice and Java please see: <a target='_blank' href=https://www.openoffice.org/download/common/java.html>https://www.openoffice.org/download/common/java.html</a>.</p>";
l10n.dl_platform_info_mac_headline		= "macOS";
l10n.dl_platform_info_mac_text			= "<h5> Coming soon </h5>";
l10n.dl_platform_info_linux_headline	= "Linux";
l10n.dl_platform_info_linux_text		= "<h5> RPM vs. DEB - What to choose? </h5> <p> RPM is used in: <br/> CentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server <br /><br /> DEB is used in: <br/> Debian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu </p> <h5> Installation instructions </h5> <p>For installation instruction please see here: <a target='_blank' href=https://www.openoffice.org/download/common/instructions.html#linux>https://www.openoffice.org/download/common/instructions.html#linux</a>.</p>";
//l10n.dl_win_info_text					= "Կարևոր ակնարկ: 32-բիթ, 64-բիթ և Java - Ի՞նչ ընտրել:";
//l10n.dl_win_info_title				= "Այս պահին մենք առաջարկում ենք 32-բիթանոց (x86) տարբերակը Windows-ի համար: Այնուամենայնիվ, այն տեղադրվում և գործարկվում է նաև Windows 64-բիթանոց (x86-64) համակարգերով:\nԽնդրում ենք նկատի ունենալ, որ լրացուցիչ ֆունկցիոնալության համար ձեզ կարող է անհրաժեշտ լինել 32-բիթանոց Java, որն այնուհետև պետք է ընտրվի միայն մեկ անգամ (տե՛ս «Գործիքներ - Ընտրանքներ - OpenOffice - Java» ընտրացանկը):\n\nOpenOffice- ի և Java- ի մասին լրացուցիչ տեղեկություններ ստանալու համար տե՛ս «Java և Apache OpenOffice» -ից աջ հղումը:";
//l10n.dl_linux_info_text				= "Կարևոր ակնար: RPM ընդդեմ DEB - Ի՞նչ ընտրել:";
//l10n.dl_linux_info_title				= "RPM-ն օգտագործվում է:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB-ն օգտագործվում է:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";


l10n.dl_full_link_porting_text		= "Հանգույց: Կտտացրեք՝ ընտրելու 3-րդ կողմի վաճառողներից";
l10n.dl_full_link_porting_title		= "Կտտացրեք՝ տեղափոխելու հանգույցի կայքէջը և ներբեռնելու 3-րդ կողմի վաճառողներից";
l10n.dl_full_link_archive_text		= "Արխիվ. Կտտացրեք՝ հնացած թողարկումներից ընտրություն կատարելու համար";
l10n.dl_full_link_archive_title		= "Կտտացրեք արխիվին գնալու և հնացած թողարկումները ներբեռնելու համար";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text		= "Թողարկում: ";
l10n.dl_rel_info_milestone_text		= "Հանգրվան ";
l10n.dl_rel_info_buildid_text		= "Կառուցման ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text		= "Թողարկված ";
l10n.dl_rel_notes_text				= "Թողարկման նշումներ";
l10n.dl_rel_notes_title				= "Թողարկման նշումներ Apache OpenOffice-ի համար ";

l10n.dl_headline_full_text			= "Ամբողջական տեղադրում: ";
l10n.dl_headline_langpack_text		= "Լեզվական փաթեթ: ";
l10n.dl_filesize_text				= "Նիշքի չափը ~ ";
l10n.dl_megabyte_text				= " Մբայթ";
l10n.dl_checksum_headline_text		= "Ստորագրություններ և հաշեր: ";
l10n.dl_checksum_keys_text			= "ԲԱՆԱԼԻՆԵՐ";
l10n.dl_checksum_keys_title			= "ԲԱՆԱԼԻՆԵՐ ստորագրության նիշք";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC ստորագրություն: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 հաշ: ";
l10n.dl_checksum_sha256_text		= "SHA256";
l10n.dl_checksum_sha256_title		= "SHA256 հաշ: ";
l10n.dl_checksum_sha512_text		= "SHA512";
l10n.dl_checksum_sha512_title		= "SHA512 հաշ: ";

l10n.dl_help_img_title				= "Ի՞նչ տարբերություն ամբողջական տեղադրման և լեզվական փաթեթի միջև:";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Տեղադրման տեղեկատվություն";
l10n.dl_help_text					= "Ի՞նչ է լեզվի փաթեթը:";
l10n.dl_help_title					= "Ի՞նչ տարբերություն ամբողջական տեղադրման և լեզվական փաթեթի միջև:";
l10n.dl_checksum_img_title			= "Ինչպե՞ս ստուգել ներբեռնված նիշքը ստուգիչ գումարներով:";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Ստուգիչ գումարի վավերացում";
l10n.dl_checksum_text				= "Ինչպե՞ս ստուգել ներբեռնումը:";
l10n.dl_checksum_title				= "Ինչպե՞ս ստուգել ներբեռնված նիշքը ստուգիչ գումարի հետ։";
l10n.dl_report_img_title			= "Ներբեռնման կոտրված հղո՞ւմ: Սեղմեք այստեղ` զեկուցելու համար:";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Կոտրված հղում";
l10n.dl_report_text					= "Հաղորդել կոտրված հղման մասին";
l10n.dl_report_title				= "Ներբեռնման կոտրված հղո՞ւմ: Սեղմեք այստեղ` զեկուցելու համար:";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Ամբողջական տեղադրումը հասանելի չէ";
l10n.dl_full_link_error_title			= "Խնդրում ենք ընտրել այլ լեզու, հարթակ կամ տարբերակ:";
l10n.dl_langpack_link_error_text		= "Չկա հասանելի լեզվական փաթեթ";
l10n.dl_langpack_link_error_title		= "Խնդրում ենք ընտրել այլ լեզու, հարթակ կամ տարբերակ:";

l10n.dl_error_problem_img_title			= "Ներբեռնման ընտրված նիշքը հասանելի չէ";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Սխալի տեքստ";
l10n.dl_error_problem_text				= "Խնդիր: ";
l10n.dl_error_solution_text				= "Լուծում: ";
l10n.dl_error_aoo_text					= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text	= " հասանելի չէ ";
l10n.dl_error_please_select_1_text		= "Խնդրում ենք ընտրել 4.0.1 տարբերակը:";
l10n.dl_error_please_select_2_text		= "Խնդրում ենք ընտրել 4.0.1 տարբերակը կան ավելի նորը:";
l10n.dl_error_please_select_3_text		= "Խնդրում ենք ընտրել ներբեռնում Windows-ի, macOS-ի (OS&nbsp;X) կամ Linux-ի համար:";
l10n.dl_error_please_select_4_text		= "Խնդրում ենք ընտրել այլ լեզու կամ տարբերակ:";

l10n.dl_unknown_platform_text			= "անհայտ գործառնական համակարգ / հարթակ";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text					= "Ինչպե՞ս զեկուցել կոտրված ներբեռնման հղման մասին:";
l10n.dl_analyze_instruction_select_text			= "<b>Ընտրեք ձեր նախընտրածները</b>: Գործառնական համակարգը, լեզուն և տարբերակը ներկայացված են ստորև կանաչ գույնով:";
l10n.dl_analyze_instruction_verify_text			= "Ստուգեք, որ այս ընտրանքները <b>դեռ չեն</b> հանգեցնում ներբեռնման վավեր հղումների:";
l10n.dl_analyze_instruction_click_text			= "Կտտացրեք կանաչ տուփի ներքևում գտնվող կոճակին։ ";
l10n.dl_analyze_instruction_copy_text			= "Պատճենեք ընտրված աղյուսակի տվյալները միջանկյալ հիշողությունում։ ";
l10n.dl_analyze_instruction_new_mail_text		= "Ստեղծեք նոր նամակ:";
l10n.dl_analyze_instruction_problem_text		= "<b>Գրեք խնդրի նկարագրությունը</b> (ինչը չի աշխատում, և ինչ եք ակնկալում).";
l10n.dl_analyze_instruction_details_text		= "Խնդրում ենք նաև ավելացնել <b>մանրամասներ օգտագործված գործառնական համակարգի մասին</b>.";
l10n.dl_analyze_instruction_paste_text			= "Հետարկեք պատճենված տվյալները փոստի վերջում:";
l10n.dl_analyze_instruction_only_download_text	= "Խնդրում ենք <b>փոստը ուղարկեք միայն ներբեռնման հետ կապված խնդիրների դեպքում</b> և ոչ թե երբ չեք կարող տեղադրել:";
l10n.dl_analyze_instruction_no_install_text		= "Այս վեբ էջն ընդհանրապես չի կարող օգնել տեղադրման հետ կապված խնդիրներին:";
l10n.dl_analyze_instruction_send_mail_text		= "Ի վերջո, <b>նամակն ուղարկեք</b> հասցեին: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice-ի զարգացման փոստային ցուցակին";
l10n.dl_analyze_instruction_mailing_list_title	= "Ուղարկեք հաշվետվությունը Apache OpenOffice-ի զարգացման փոստային ցուցակին";
l10n.dl_analyze_instruction_learn_more_text		= "Սեղմեք այստեղ՝ ավելին իմանալու թե ինչ է փոստային ցուցակը";
l10n.dl_analyze_instruction_learn_more_title	= "Իմացեք ավելին, թե ինչ է փոստային ցուցակը";
l10n.dl_analyze_instruction_answer_text			= "Մենք կփորձենք պատասխանել նամակը ստանալուն պես, վերլուծելով խնդիրը:";
l10n.dl_analyze_instruction_thanks_text			= "Շնորհակալություն զեկույցի համար:";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text			= "Սեղմեք աղյուսակը թարմացնելու համար";
l10n.dl_analyze_update_button_title			= "Ընտրված ընտրանքները որպես արժեք տեղադրեք ստորև բերված աղյուսակում";
l10n.dl_analyze_select_button_text			= "Կտտացրեք աղյուսակը ընտրելու համար";
l10n.dl_analyze_select_button_title			= "Ստորև բերված աղյուսակում ընտրեք բոլոր տվյալներըw";
l10n.dl_analyze_copy_button_text			= "Պատճենեք [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title			= "Պատճենեք ընտրված աղյուսակի տվյալները [ Ctrl ] + [ C ] միջոցով, կամ [ &#8984; ] + [ C ] միջանկյալ հիշողություն";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text			= "Զննարկչի փոփոխականներ";
l10n.dl_analyze_table_values_text			= "Արժեքներ";
l10n.dl_analyze_table_yes_text				= "Այո";
l10n.dl_analyze_table_no_text				= "Ոչ";
l10n.dl_analyze_table_stable_release_text	= "Կայուն թողարկում";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;գործառույթներ/փոփոխականներ";


// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo419_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.9+Release+Notes";
l10n.dl_rel_notes_aoo418_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.8+Release+Notes";
l10n.dl_rel_notes_aoo417_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.7+Release+Notes";
l10n.dl_rel_notes_aoo416_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.6+Release+Notes";
l10n.dl_rel_notes_aoo415_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.5+Release+Notes";
l10n.dl_rel_notes_aoo414_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.4+Release+Notes";
l10n.dl_rel_notes_aoo413_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.3+Release+Notes";
l10n.dl_rel_notes_aoo412_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.2+Release+Notes";
l10n.dl_rel_notes_aoo411_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.1+Release+Notes";
l10n.dl_rel_notes_aoo410_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes";
l10n.dl_rel_notes_aoo401_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes";
l10n.dl_rel_notes_aoo400_link				= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0+Release+Notes";
l10n.dl_help_link							= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link						= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link							= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link						= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link						= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link							= "https://www.openoffice.org/download/other-341.html";

