/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:   "Download Apache OpenOffice"
 * Correct: l10n.dl_green_box_headline_text
 */



// Object that contains all following variables.
//var l10n = new Object();

// The following variables are used in the "index.html" file:

// Set a specific language ISO code to force to assemble a download link with a certain language.
DL.NL_LANG					= "zh-tw";

// General:
l10n.dl_headline_text				= "Apache OpenOffice 下載";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "下載Apache OpenOffice";
l10n.dl_green_box_headline_title		= "下載Apache OpenOffice，選擇你偏好的作業系統、語言及版本";
l10n.dl_green_box_subtext1_text			= "下載空間寄存於Sourceforge.net - 一個受信賴的網站";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice 二進位檔案寄存於Sourceforge.net - 一個受信賴的網站";
l10n.dl_green_box_subtext2_text			= "選擇你偏好的作業系統、語言及網站";
l10n.dl_green_box_subtext2_title		= "選擇你偏好的作業系統、語言及網站";
l10n.dl_green_box_selectbox_os_title		= "選擇你偏好的作業系統";
l10n.dl_green_box_selectbox_lang_title		= "選擇你偏好的語言";
l10n.dl_green_box_selectbox_ver_title		= "選擇你偏好的版本";

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
l10n.dl_green_box_select_box_version_values	= [ "" ];

l10n.dl_green_box_select_box_version_older	= "Older releases";

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "協助宣傳";
l10n.dl_share_light_blue_box_headline_title	= "協助宣傳，向你的朋友介紹Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "請向你的朋友介紹Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "協助宣傳，向你的朋友介紹Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Official Blog";
l10n.dl_share_light_blue_box_blog_title		= "Weblog of OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog of OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "請透過Facebook向你的朋友介紹OpenOffice";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "在Facebook上分享";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "請透過Twitter向你的朋友介紹Apache OpenOffice";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "在Twitter上分享";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "取得Apache OpenOffice 擴充軟體及字典";
l10n.dl_ext_blue_box_headline_title		= "從各式各樣增添的獨特功能中選擇";
l10n.dl_ext_blue_box_text_text			= "運用其他使用者提供的擴充軟體及字典，擴展Apache OpenOffice 的功能。";
l10n.dl_ext_blue_box_text_title			= "從各式各樣增添的獨特功能中選擇";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "取得Apache OpenOffice範本";
l10n.dl_tlp_blue_box_headline_title		= "從各式各樣增添的獨特文件中選擇";
l10n.dl_tlp_blue_box_text_text			= "運用其他使用者提供的範本庫，擴展Apache OpenOffice的創造力。";
l10n.dl_tlp_blue_box_text_title			= "從各式各樣增添的獨特文件中選擇";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "發行版本資訊";
l10n.dl_nav_sysreq_text				= "系統需求";
l10n.dl_nav_sysreq_title			= "硬碟: ~300MB 可用空間 - 記憶體: &gt;128MB - 處理器: &gt;500MHz - 作業系統: Win, Linux, Mac OS, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "授權";
l10n.dl_nav_license_title			= "Apache OpenOffice使用授權聲明";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "原始碼";
l10n.dl_nav_source_title			= "針對咖發人員及專業使用者： 取得原始碼從頭編譯Apache OpenOffice。";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "編譯指引";
l10n.dl_nav_build_title				= "針對開發人員及專業使用者: 如何從頭編譯Apache OpenOffice的指引";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "軟體開發包(SDK)";
l10n.dl_nav_sdk_title				= "針對開發人員: 軟體開發包";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "發展中版本";
l10n.dl_nav_devbuilds_title			= "針對自願測試者(QA): 發展中版本";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "說明文件";
l10n.dl_nav_schedule_text			= "版本發行時間表";
l10n.dl_nav_schedule_title			= "新版本預計何時發行?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "版本發行歷史";
l10n.dl_nav_hist_schedule_title			= "舊版本是何時發佈的?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "安裝指引";
l10n.dl_nav_inst_guide_title			= "在Windows, Linux 及Mac OS 上安裝Apache OpenOffice的說明指引";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "使用者指引";
l10n.dl_nav_user_guide_title			= "日常使用的完整說明";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java與Apache OpenOffice";
l10n.dl_nav_why_java_title			= "說明使用Java的原因及它是什麼是";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "終止服務資訊";
l10n.dl_nav_eol_title				= "關於已終止服務的發行版本資訊";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "其他資源";
l10n.dl_nav_support_text			= "支援";
l10n.dl_nav_support_title			= "如果上述資訊無法回答你的問題：免費及付費支援!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "在地化";
l10n.dl_nav_local_title				= "以你偏好語言提供的資訊及服務";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "下載統計";
l10n.dl_nav_stat_title				= "下載及其他統計資訊";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "鏡射載點#1";
l10n.dl_nav_mirrors1_title			= "使用Apache鏡射網站下載Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "鏡射載點#2";
l10n.dl_nav_mirrors2_title			= "使用Apache鏡射網站下載Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "第三方移植及發佈版本";
l10n.dl_nav_porting_title			= "第三方供應商所製作的移植及發行版本";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "舊檔案及過往發行版本";
l10n.dl_nav_archive_title			= "下載已過時或已封存的發行版本";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "發行版本說明";
l10n.dl_nav_release_notes_title			= "Apache OpenOffice的增加或改善了什麼功能?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "驗證下載完成的檔案";
l10n.dl_nav_checksum_title			= "如何使用簽章與雜湊碼驗證下載完成的檔案?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - 下載，開發及發佈自由開源軟體";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "https://www.openoffice.org/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C 標記驗證服務- 檢查網頁文件(HTML, XHTML, ...)的標記";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "https://www.openoffice.org/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C 驗證軟體";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "下載完整安裝";
l10n.dl_full_link_title				= "以滑鼠點擊下載: ";
l10n.dl_langpack_link_text			= "下載語言包";
l10n.dl_langpack_link_title			= "以滑鼠點擊下載: ";
l10n.dl_win_info_text				= "Important hint: 32-bit, 64-bit and Java - What to choose?";
l10n.dl_win_info_title				= "At the moment we offer a 32-bit (x86) version for Windows. However, it installs and runs also on Windows 64-bit (x86-64).\nPlease note that you may need Java in 32-bit for additional functionality which must then be selected only once (see menu 'Tools - Options - OpenOffice - Java').\n\nFor more information about OpenOffice and Java please see the link on the right 'Java and Apache OpenOffice'.";
l10n.dl_linux_info_text				= "Important hint: RPM vs. DEB = What to choose?";
l10n.dl_linux_info_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
//l10n.dl_mac_info_text				= "macOS : Text";
//l10n.dl_mac_info_title			= "macOS : Title";

l10n.dl_full_link_porting_text			= "移植: 點擊以選擇第三方供應商";
l10n.dl_full_link_porting_title			= "點擊以瀏覽其他移植版網頁，並從第三方供應商下載";
l10n.dl_full_link_archive_text			= "舊檔案: 點擊以選擇過往版本";
l10n.dl_full_link_archive_title			= "點擊瀏覽舊檔案並下載過往版本";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "版本: ";
l10n.dl_rel_info_milestone_text			= "里程碑";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "發佈於";
l10n.dl_rel_notes_text				= "發行版本說明";
l10n.dl_rel_notes_title				= "Apache OpenOffice 的發行版本說明 ";

l10n.dl_headline_full_text			= "完整安裝: ";
l10n.dl_headline_langpack_text			= "語言包: ";
l10n.dl_filesize_text				= "檔案大小 ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "簽章與雜湊碼: ";
l10n.dl_checksum_keys_text			= "金鑰";
l10n.dl_checksum_keys_title			= "金鑰簽章檔";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "提供下載的ASC簽章是針對: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "提供下載的MD5雜湊值是針對: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "提供下載的SHA256雜湊值是針對: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "提供下載的SHA512雜湊值是針對: ";

l10n.dl_help_img_title				= "完整安裝與語言包有什麼不同?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "安裝資訊";
l10n.dl_help_text					= "什麼是語言包?";
l10n.dl_help_title					= "完整安裝與語言包有什麼不同?";
l10n.dl_checksum_img_title			= "如何以檢查碼驗證下載的檔案?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "檢查碼驗證";
l10n.dl_checksum_text				= "如何驗證下載的檔案?";
l10n.dl_checksum_title				= "如何以檢查碼驗證下載的檔案?";
l10n.dl_report_img_title			= "下載連結失效? 點這裡回報。";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "下載連結失效";
l10n.dl_report_text					= "回報下載連結";
l10n.dl_report_title				= "下載連結失效? 點這裡回報。";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "沒有完整安裝可供下載";
l10n.dl_full_link_error_title			= "請選擇其他語言、平台或版本。";
l10n.dl_langpack_link_error_text		= "沒有語言包可供下載";
l10n.dl_langpack_link_error_title		= "請選擇其他語言、平台或版本。";

l10n.dl_error_problem_img_title			= "選擇下載的檔案無法使用";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "錯誤文字";
l10n.dl_error_problem_text				= "問題: ";
l10n.dl_error_solution_text				= "解決方法: ";
l10n.dl_error_aoo_text					= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text	= "無法提供以下的下載版本:";
l10n.dl_error_please_select_1_text		= "請選擇4.0.1版";
l10n.dl_error_please_select_2_text		= "請選擇4.0.1或更新版本。";
l10n.dl_error_please_select_3_text		= "請選擇Windows, Linux 或OS X版本下載。";
l10n.dl_error_please_select_4_text		= "請選擇其他的語言或版本。"

l10n.dl_unknown_platform_text			= "未知的作業系統 / 平台";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "如何回報失效的連結?";
l10n.dl_analyze_instruction_select_text		= "在下面綠色區域<b>選擇你偏好的</b>: 作業系統、語言及版本。";
l10n.dl_analyze_instruction_verify_text		= "檢驗這些選項<b>仍然無法</b> 導引至可用的下載連結。";
l10n.dl_analyze_instruction_click_text		= "點擊綠色方框下方的按鈕:";
l10n.dl_analyze_instruction_copy_text		= "將選擇的表格資料複製至系統剪貼簿:";
l10n.dl_analyze_instruction_new_mail_text	= "建立新郵件。";
l10n.dl_analyze_instruction_problem_text	= "<b>撰寫問題描述</b> (無法正常運作的項目及期望的結果。).";
l10n.dl_analyze_instruction_details_text	= "請加入<b>關於作業系統的細節</b>.";
l10n.dl_analyze_instruction_paste_text		= "將複製的資料貼到信件尾端。";
l10n.dl_analyze_instruction_only_download_text	= "請<b>限於寄送下載問題</b> 不要利用這裡回報無法安裝的問題。";
l10n.dl_analyze_instruction_no_install_text	= "這個網頁無法協助解決安裝問題。";
l10n.dl_analyze_instruction_send_mail_text	= "最後, <b>將郵件</b> 送給: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice 開發者通信論壇";
l10n.dl_analyze_instruction_mailing_list_title	= "將報告發送到Apache OpenOffice開發者通信論壇";
l10n.dl_analyze_instruction_learn_more_text	= "點這裡學習更多關於通信論壇的知識";
l10n.dl_analyze_instruction_learn_more_title	= "深入瞭解通信論壇";
l10n.dl_analyze_instruction_answer_text		= "一旦我們接到郵件並分析問題，我們會盡快回答。";
l10n.dl_analyze_instruction_thanks_text		= "感謝你回報。";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "點擊以更新表格";
l10n.dl_analyze_update_button_title		= "將選擇的選項當成資料值放進下面的表格";
l10n.dl_analyze_select_button_text		= "點擊以全選表格";
l10n.dl_analyze_select_button_title		= "從下面的表格選擇所有資料";
l10n.dl_analyze_copy_button_text		= "以[Ctrl] + [C]複製";
l10n.dl_analyze_copy_button_title		= "透過[Ctrl] + [C] 將選擇的表格資料複製至系統剪貼簿";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text			= "瀏覽器變數";
l10n.dl_analyze_table_values_text			= "值";
l10n.dl_analyze_table_yes_text				= "是";
l10n.dl_analyze_table_no_text				= "否";
l10n.dl_analyze_table_stable_release_text	= "穩定發行版本";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;函式/變數";



// General: Links to webpage files that could be localized.
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
l10n.dl_help_link						= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link					= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link						= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link					= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link					= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link						= "https://www.openoffice.org/download/other-341.html";

