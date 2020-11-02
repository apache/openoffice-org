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
DL.NL_LANG					= "ko";

// General:
l10n.dl_headline_text				= "Apache OpenOffice Download";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Apache OpenOffice 다운로드";
l10n.dl_green_box_headline_title		= "원하는 운영체제, 언어, 버전에 맞춰 Apache OpenOffice를 다운로드하세요";
l10n.dl_green_box_subtext1_text			= "믿을 수 있는 웹사이트 SourceForge.net에서 지원합니다";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice 바이너리 파일은 믿을 수 있는 웹사이트 Sourceforge.net에서 지원합니다";
l10n.dl_green_box_subtext2_text			= "원하는 운영체제, 언어, 버전에 맞춰 Apache OpenOffice를 선택하세요";
l10n.dl_green_box_subtext2_title		= "원하는 운영체제, 언어, 버전에 맞춰 Apache OpenOffice를 선택하세요";
l10n.dl_green_box_selectbox_os_title		= "원하는 운영체제를 선택하세요";
l10n.dl_green_box_selectbox_lang_title		= "원하는 언어를 선택하세요";
l10n.dl_green_box_selectbox_ver_title		= "원하는 버전을 선택하세요";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines below the 3 following variables)!
/* l10n.dl_green_box_select_box_os_values	= [ "" ]; */
l10n.dl_green_box_select_box_os_values		= [ "" ];

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
						    "ko",	"한국어",				"한국어",
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
						    "Older releases" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "널리 알려주세요";
l10n.dl_share_light_blue_box_headline_title	= "친구들에게 Apache OpenOffice를 알리고 소개하세요";
l10n.dl_share_light_blue_box_text_text		= "친구들에게 Apache OpenOffice를 알리세요:";
l10n.dl_share_light_blue_box_text_title		= "친구들에게 Apache OpenOffice를 알리고 소개하세요";
l10n.dl_share_light_blue_box_blog_text		= "공식 블로그";
l10n.dl_share_light_blue_box_blog_title		= "OpenOffice 웹로그";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "OpenOffice 웹로그";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Facebook에서 친구들에게 Apache OpenOffice를 알리세요";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Facebook에서 공유하기";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Twitter에서 친구들에게 Apache OpenOffice를 알리세요";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Twitter에서 공유하기";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Apache OpenOffice 확장판과 사전을 이용하세요";
l10n.dl_ext_blue_box_headline_title		= "추가 기능과 개별 기능을 다양하게 선택하세요";
l10n.dl_ext_blue_box_text_text			= "빠르게 성장하는 대규모 라이브러리에서 다른 사용자의 확장판과 사전을 이용해 Apache OpenOffice의 성능을 확장하세요.";
l10n.dl_ext_blue_box_text_title			= "추가 기능과 개별 기능을 다양하게 선택하세요";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Apache OpenOffice 템플릿을 이용하세요";
l10n.dl_tlp_blue_box_headline_title		= "추가 문서과 개별 문서를 다양하게 선택하세요";
l10n.dl_tlp_blue_box_text_text			= "빠르게 성장하는 대규모 라이브러리에서 다른 사용자의 템플릿을 이용해 Apache OpenOffice의 창의성을 확장하세요.";
l10n.dl_tlp_blue_box_text_title			= "추가 문서과 개별 문서를 다양하게 선택하세요";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "버전 정보";
l10n.dl_nav_sysreq_text				= "컴퓨터 요구사항";
l10n.dl_nav_sysreq_title			= "하드디스크: 여유공간 300MB 이상 - 메모리: 128MB 이상 - 프로세서: 500MHz 이상 - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "라이선스";
l10n.dl_nav_license_title			= "Apache OpenOffice 라이선스";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "소스";
l10n.dl_nav_source_title			= "개발자 또는 전문가급 사용자: 소스를 조합하여 Apache OpenOffice를 다양하게 구성해보세요";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "구성 가이드";
l10n.dl_nav_build_title				= "개발자 또는 전문가급 사용자: Apache OpenOffice 구성 가이드";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "소프트웨어 개발 도구(SDK)";
l10n.dl_nav_sdk_title				= "개발자용: 소프트웨어 개발 도구";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "개발 구성";
l10n.dl_nav_devbuilds_title			= "자원봉사자를 위한 QA: 개발 구성";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "문서";
l10n.dl_nav_schedule_text			= "버전 출시 일정";
l10n.dl_nav_schedule_title			= "새로운 버전은 언제 출시되나요?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "과거 출시 일정";
l10n.dl_nav_hist_schedule_title			= "이전 버전은 언제 출시됐나요?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "설치 가이드";
l10n.dl_nav_inst_guide_title			= "Windows, macOS(OS&nbsp;X), Linux에서 Apache OpenOffice 설치하는 방법";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "사용자 가이드";
l10n.dl_nav_user_guide_title			= "상시 사용자를 위한 광범위한 안내";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java와 Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Java를 사용하는 이유 및 소개";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "제품수명종료(EOL) 정보";
l10n.dl_nav_eol_title				= "제품수명이 종료된 버전 정보";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "추가 자료";
l10n.dl_nav_support_text			= "지원";
l10n.dl_nav_support_title			= "궁금하신 점에 대한 답변이 없는 경우: 무료 및 유료 지원이 가능합니다!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "현지화";
l10n.dl_nav_local_title				= "선호하는 언어로 이용할 수 있는 정보 및 지원";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "다운로드 통계";
l10n.dl_nav_stat_title				= "다운로드 및 기타 통계";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "다운로드가 가능한 기타 링크 #1";
l10n.dl_nav_mirrors1_title			= "SourceForge 미러에서 Apache OpenOffice 다운로드";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "다운로드가 가능한 기타 링크 #2";
l10n.dl_nav_mirrors2_title			= "Apache 미러에서 Apache OpenOffice 다운로드";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "제삼자 포트 및 배포판";
l10n.dl_nav_porting_title			= "제삼자 공급자 포트 및 배포판";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "아카이브 및 이전 버전";
l10n.dl_nav_archive_title			= "이전 또는 지난 버전 다운로드";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "버전 비고";
l10n.dl_nav_release_notes_title			= "Apache OpenOffice에서 새로운 기능은 무엇인가요, 어떤 점이 개선됐나요?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "다운로드 파일 검사하기";
l10n.dl_nav_checksum_title			= "다운로드한 파일을 서명 또는 해시로 어떻게 검사하나요?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "SourceForge - 무료 공개 소프트웨어 다운로드, 개발, 배포";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "SourceForge";
l10n.dl_img_w3c_title				= "W3C 마크업 검증서비스 -웹 문서 마크업(HTML, XHTML, ...) 확인";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C 검증서비스";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "전체 다운로드";
l10n.dl_full_link_title				= "클릭하여 다운로드: ";
l10n.dl_langpack_link_text			= "언어팩 다운로드";
l10n.dl_langpack_link_title			= "클릭하여 다운로드: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "포팅: 제삼자 공급자를 선택하려면 클릭하세요";
l10n.dl_full_link_porting_title			= "클릭하면 포팅 웹페이지로 이동하여 제삼자 공급자로부터 다운로드할 수 있습니다";
l10n.dl_full_link_archive_text			= "아카이브: 이전 버전을 선택하려면 클릭하세요";
l10n.dl_full_link_archive_title			= "아카이브에서 이전 버전을 찾고 다운로드하려면 클릭하세요";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Release: ";
l10n.dl_rel_info_milestone_text			= "Milestone ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Released ";
l10n.dl_rel_notes_text				= "Release Notes";
l10n.dl_rel_notes_title				= "Release Notes for Apache OpenOffice ";

l10n.dl_headline_full_text			= "Full installation: ";
l10n.dl_headline_langpack_text			= "Language pack: ";
l10n.dl_filesize_text				= "File size ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Signatures and hashes: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS signature file";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC signature for: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 hash for: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 hash for: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 hash for: ";

l10n.dl_help_img_title				= "What is the difference between full installation and language pack?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Install info";
l10n.dl_help_text				= "What is a language pack?";
l10n.dl_help_title				= "What is the difference between full installation and language pack?";
l10n.dl_checksum_img_title			= "How to verify the downloaded file with checksums?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Checksum verify";
l10n.dl_checksum_text				= "How to verify the download?";
l10n.dl_checksum_title				= "How to verify the downloaded file with checksums?";
l10n.dl_report_img_title			= "Broken download link? Click here to report.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Broken link";
l10n.dl_report_text				= "Report broken link";
l10n.dl_report_title				= "Broken download link? Click here to report.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "No full installation available";
l10n.dl_full_link_error_title			= "Please select another language, platform or version.";
l10n.dl_langpack_link_error_text		= "No language pack available";
l10n.dl_langpack_link_error_title		= "Please select another language, platform or version.";

l10n.dl_error_problem_img_title			= "The selected download file is not available";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Error text";
l10n.dl_error_problem_text			= "Problem: ";
l10n.dl_error_solution_text			= "Solution: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " is not available for ";
l10n.dl_error_please_select_1_text		= "Please select version 4.0.1.";
l10n.dl_error_please_select_2_text		= "Please select version 4.1.0 or newer.";
l10n.dl_error_please_select_3_text		= "Please select a download for Windows, macOS (OS&nbsb;X) or Linux.";
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
l10n.dl_analyze_headline_text			= "How to report a broken download link?";
l10n.dl_analyze_instruction_select_text		= "<b>Select your favorites</b>: Operating system, language and version in the green box below.";
l10n.dl_analyze_instruction_verify_text		= "Verify that these options <b>still do not</b> lead to valid download links.";
l10n.dl_analyze_instruction_click_text		= "Click on the button below the green box: ";
l10n.dl_analyze_instruction_copy_text		= "Copy the selected table data into the clipboard: ";
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
l10n.dl_analyze_table_problem_text1		= "Problem description";
l10n.dl_analyze_table_problem_text2		= "Exchange this text to describe the problem <br /><br />(What does not work? What do you expect?)";
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
l10n.dl_help_link				= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link				= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link				= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link				= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/archive.html";
