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
l10n.dl_headline_text				= "������� �� Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "������� Apache OpenOffice";
l10n.dl_green_box_headline_title		= "������� Apache OpenOffice �� ������ ������ ����������� �������, ���� � ������";
l10n.dl_green_box_subtext1_text			= "������� �� SourceForge.net � ������� �������";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice ������� ������� �� �������� �� SourceForge.net � ������� �������";
l10n.dl_green_box_subtext2_text			= "������ ������ ������ ����������� �������, ���� � ������";
l10n.dl_green_box_subtext2_title		= "������ ������ ������ ����������� �������, ���� � ������";
l10n.dl_green_box_selectbox_os_title		= "������ ������ ������ ����������� �������";
l10n.dl_green_box_selectbox_lang_title		= "������ ����� ����� ����";
l10n.dl_green_box_selectbox_ver_title		= "������ ������� ������ ������ �� ��������";

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
						    "������ ��������� / ����������� �������" ];

// l10n.dl_green_box_select_box_language_values	= [ "" ];
l10n.dl_green_box_select_box_language_values	= [ "" ];

// l10n.dl_green_box_select_box_lang_values_custom = [ "" ];
//						    Value	Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom	= [ "ast",	"����������",				"���������",
						    "eu",	"�����",				"�������",
						    "bg",	"���������",				"български език",
						    "ca",	"�����o����",				"Català",
						    "ca-XV",	"���������� [Valencia AVL]",		"València (AVL)",
						    "ca-XR",	"���������� [Valencia RACV]",		"València (RACV)",
						    "zh-CN",	"�������� [��������]",			"简体�文",
						    "zh-TW",	"�������� [�����������]",		"�體�文",
						    "cs",	"�����",				"Čeština",
						    "da",	"������",				"Dansk",
						    "nl",	"���������",				"�����������",
						    "en-GB",	"��������� [���������]",		"��������� [���������]",
						    "en-US",	"��������� [�����������]",		"��������� [�����������]",
						    "fi",	"����������",				"�����",
						    "fr",	"�������",				"Français",
						    "gl",	"����������",				"������",
						    "de",	"������",				"������",
						    "el",	"������",				"ελληνικά",
						    "he",	"�����",				"עברית",
						    "hi",	"�����",				"हिन्दी",
						    "hu",	"��������",				"Magyar",
						    "it",	"����������",				"Italiano",
						    "ja",	"�������",				"日本語",
						    "km",	"��������",				"ភាសាខ្�?ែរ",
						    "ko",	"��������",				"한�어",
						    "lt",	"��������",				"Lietuvių",
						    "nb",	"�������� [Bokmal]",			"Norsk [Bokmål]",
						    "pl",	"������",				"Polski",
						    "pt-BR",	"����������� [���������]",		"Português [do Brasil]",
						    "pt",	"����������� [����������]",		"Português [Europeu]",
						    "ru",	"�����",				"Русский",
						    "gd",	"���������� [��������]",		"Gàidhlig",
						    "sr",	"������� [��������]",			"Cрпски [ћирилицом]",
						    "sk",	"��������",				"Slovenský jazyk [slovenčina]",
						    "sl",	"���������",				"Slovenski jezik [slovenščina]",
						    "es",	"��������",				"Español",
						    "sv",	"�������",				"Svenska",
						    "ta",	"��������",				"தமிழ்",
						    "th",	"�������",				"ภาษาไทย",
						    "tr",	"������",				"Türkçe",
						    "vi",	"����������",				"Tiếng Việt" ];

l10n.dl_green_box_select_box_version_values	= [ "" ];

l10n.dl_green_box_select_box_version_older	= "�� � ����� �������";

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "��������� �� ����������������� �� ������";
l10n.dl_share_light_blue_box_headline_title	= "��������� �� ����������������� �� ������ � ��������� �� ������ �������� �� Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "����, ��������� �� ������ �������� �� Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= " ��������� �� ����������������� �� ������ � ��������� �� ������ �������� �� Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "��������� ����";
l10n.dl_share_light_blue_box_blog_title		= "��� ��� ��  OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "��� ��� �� OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "�������";
l10n.dl_share_light_blue_box_facebook_title	= "���� ��������� �� ������ �������� �� Apache OpenOffice ���� Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "������� ��� Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "���� ��������� �� ������ �������� �� Apache OpenOffice ���� Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "������� � Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "����� Apache OpenOffice ���������� � �������";
l10n.dl_ext_blue_box_headline_title		= "������ �� ��������� ������������ � ������������ ��������� ���������������";
l10n.dl_ext_blue_box_text_text			= "������� ���������������� �� ���� Apache OpenOffice � ������ � ��������� ����������� �� ���������� �� ������� � ������� �� ����� �����������.";
l10n.dl_ext_blue_box_text_title			= "������ �� ����� ������ �� ������������ � ������������ ���������������";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "����� Apache OpenOffice �������";
l10n.dl_tlp_blue_box_headline_title		= "������ �� ����� ������ �� ������������ � ������������ ��������� ���������";
l10n.dl_tlp_blue_box_text_text			= "������� ������������� �� ���� Apache OpenOffice � ������ � ��������� ������� ���������� � ������� �� ����� �����������.";
l10n.dl_tlp_blue_box_text_title			= "������ �� ����� ������ �� ������������ � ������������ ��������� ���������";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "���������� �� �������";
l10n.dl_nav_sysreq_text				= "�������� ����������";
l10n.dl_nav_sysreq_title			= "����� ����: ~300MB �������� �����: &gt;128MB - ��������: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "������";
l10n.dl_nav_license_title			= "������ �� Apache OpenOffice";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "��������";
l10n.dl_nav_source_title			= "�� ������������ � �� ���������� �����������: ������� ���������, �� �� ��������� Apache OpenOffice �� ������";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "����������� �� ����������";
l10n.dl_nav_build_title				= "�� ������������ � ���������� �����������: ��� ��  - �����������, �� �� �� ������� Apache OpenOffice �� ������";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "����� �� ���������� �� ������� - Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "�� ������������: ����� �� ���������� �� ������� Software Development Kit";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "���������� � ��������;
l10n.dl_nav_devbuilds_title			= "�� ���������� - ������� � ��������: ���������� � ��������";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "������������";
l10n.dl_nav_schedule_text			= "������ �� �������";
l10n.dl_nav_schedule_title			= "���� �� ��������� ���� �������?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "����������� ������ �� �������";
l10n.dl_nav_hist_schedule_title			= "���� ���� ��������� ������� �������?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "����������� �� ����������";
l10n.dl_nav_inst_guide_title			= "���������� �� ����������� �� Apache OpenOffice �� Windows, macOS (OS&nbsp;X) � Linux ������";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "����������� �� �������������";
l10n.dl_nav_user_guide_title			= "������� ����������� �� ����������� �� ��������� ��������";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java � Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Explains why to use Java and what it is";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "���������� �� ���� �� �����������";
l10n.dl_nav_eol_title				= "���������� �� �������, ����� �� �������� ������ ����.";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "������������ �������";
l10n.dl_nav_support_text			= "���������";
l10n.dl_nav_support_title			= "��� ������������ �� � ���� �� � ���������� �� ������ �������: ��������� � ��������� ���������!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "�����������";
l10n.dl_nav_local_title				= "���������� � ��������� ������������ �� ���� ����";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "���������� �� ������������";
l10n.dl_nav_stat_title				= "���������� �� ������������ � ����� ����������";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "������������ ������ �� ������� #1";
l10n.dl_nav_mirrors1_title			= "��������� �������� �� SourceForge �� �� �������� Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "������������ ���� �� ��������� #2";
l10n.dl_nav_mirrors2_title			= "��������� Apache ��������, �� �� �������� Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://downloads.apache.org/openoffice/" + DL.VERSION + "/binaries/";
l10n.dl_nav_porting_text			= "������� �� ����� ������ � ����������������";
l10n.dl_nav_porting_title			= "�������� � ��������������� �� ����� ������ - ����������";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "���������� � ����� �������";
l10n.dl_nav_archive_title			= "������� ����� � ���������� �������";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "������� �� �������";
l10n.dl_nav_release_notes_title			= "����� � ������, ����� ���� ��������� � Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "������� ���������� ����";
l10n.dl_nav_checksum_title			= "��� �� ��������� ���������� ���� � ������� � ������?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "SourceForge - �������, ��������� � ���������� ��������� ������� � ������� ���";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "SourceForge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service � ��������� �����������  (HTML, XHTML, ...) �� Web �����������";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "������� ����� ����������";
l10n.dl_full_link_title				= "������� �� ���������: ";
l10n.dl_langpack_link_text			= "������� ������ �����";
l10n.dl_langpack_link_title			= "������� �� ���������: ";

l10n.dl_platform_info_text			= "����� ������ ������ �� ";
l10n.dl_platform_info_title			= "������� ���, �� �� ������� ����� ������ ������ �� ";
l10n.dl_platform_info_link			= "platform_hints.html";
l10n.dl_platform_info_headline			= "Apache OpenOffice � ����� ������ ������ �� ��������� ���������";
l10n.dl_platform_info_win_headline		= "Windows";
l10n.dl_platform_info_win_text			= "<h5> 32-bit, 64-bit � Java � ��� �� ������? </h5> <p> ��� ������� ��� ����������  32-bit ������ (x86) ������ �� Windows. �����, ������������ �� ��������� � ������ ���� ��  64 - ����� Windows 64-bit (x86-64). ���� �������� ��������, �� ���� �� �� �������� �� 32 � ������ Java  �� ������������ ��������������, ����� ���� �� ���� �������� ���� ������.  (��� ���� 'Tools � Options (���������� - ����� - OpenOffice - Java'). <br /><br /> �� ������ ���������� ������� OpenOffice � Java, ���� ��� : <a target='_blank' href=https://www.openoffice.org/download/common/java.html>https://www.openoffice.org/download/common/java.html</a>.</p>";
l10n.dl_platform_info_mac_headline		= "macOS";
l10n.dl_platform_info_mac_text			= "<h5> ��������� ����� </h5>";
l10n.dl_platform_info_linux_headline		= "Linux";
l10n.dl_platform_info_linux_text		= "<h5> RPM vs. DEB � ����� �� �������? </h5> <p> RPM � ��������� �: <br/> CentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server <br /><br /> DEB � ��������� �: <br/> Debian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu </p> <h5> ���������� �� ���������� </h5> <p>�� ���������� �� ���������� ���� ����� ���: <a target='_blank' href=https://www.openoffice.org/download/common/instructions.html#linux>https://www.openoffice.org/download/common/instructions.html#linux</a>.</p>";

l10n.dl_full_link_porting_text			= "������������: ��������� ���, �� �� �������� �� ����� � ������ - ����������";
l10n.dl_full_link_porting_title			= "��������� ��� �� ������������ ��� �������� � �� �� ��������� �� ����� � ������ ����������";
l10n.dl_full_link_archive_text			= "�����: �������, �� �� ������� �� � ����� ������";
l10n.dl_full_link_archive_title			= "������� ���, �� �� �������� � ������ � �� �� �������� �� � ����� ������� ������. ";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "������: ";
l10n.dl_rel_info_milestone_text			= "����� ������� ";
l10n.dl_rel_info_buildid_text			= "������� ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "������� ";
l10n.dl_rel_notes_text				= "������� �� �������";
l10n.dl_rel_notes_title				= "����� ������� �� Apache OpenOffice ";

l10n.dl_headline_full_text			= "����� ����������: ";
l10n.dl_headline_langpack_text			= "������ �����: ";
l10n.dl_filesize_text				= "������ �� ����� ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "������� � ������: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS �������� ����";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC ������ ��: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 ��� ��: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 ��� ��: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 ��� ��: ";

l10n.dl_help_img_title				= "����� � ��������� ����� ����� ���������� � ������ �����?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "���������� �� �������������";
l10n.dl_help_text				= "����� � ������ �����?";
l10n.dl_help_title				= "����� � ��������� ����� ����� ���������� � ������ �����?";
l10n.dl_checksum_img_title			= "��� �� �������� ���������� ���� � ��������� ����?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "�������� �� ����������� ����";
l10n.dl_checksum_text				= "��� �� �������� �����������?";
l10n.dl_checksum_title				= "��� �� �������� ���������� ���� � ��������� ����?";
l10n.dl_report_img_title			= "������ ���� �� �������? ������� ���, �� �� ���������.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "������ ����";
l10n.dl_report_text				= "��������� ������ ����";
l10n.dl_report_title				= "������/������ ���� �� ���������? ������� ���, �� �� ���������.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "�� � ������� ����� ����������";
l10n.dl_full_link_error_title			= "���� �������� ���� ����, ��������� ��� ������.";
l10n.dl_langpack_link_error_text		= "�� � ������� ������ �����";
l10n.dl_langpack_link_error_title		= "���� �������� ���� ����, ��������� ��� ������ .";

l10n.dl_error_problem_img_title			= "��������� ���� �� ��������� �� � �������";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "����� �� ������";
l10n.dl_error_problem_text			= "�������: ";
l10n.dl_error_solution_text			= "�������: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " �� � ������� �� ";
l10n.dl_error_please_select_1_text		= "���� �������� ������ 4.0.1.";
l10n.dl_error_please_select_2_text		= "���� �������� ������  4.1.0 ��� �� - ����.";
l10n.dl_error_please_select_3_text		= "���� �������� ��������� �� Windows, macOS (OS&nbsp;X) ��� Linux.";
l10n.dl_error_please_select_4_text		= "���� �������� ���� ���� ��� ������.";

l10n.dl_unknown_platform_text			= "������������ ����������� ������� / ���������";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "��� �� ���������� ��������� ���� �� ���������?";
l10n.dl_analyze_instruction_select_text		= "<b>�������� ������ �������������</b>: ����������� �������, ��� � ������ � �������� ��������� ������.";
l10n.dl_analyze_instruction_verify_text		= "�������, �� ���� ����� <b>still do not ��� ��� ��</b> ����� �� ������� ������� �� ���������.";
l10n.dl_analyze_instruction_click_text		= "������� ������ ��� �������� ���������: ";
l10n.dl_analyze_instruction_copy_text		= "������� ��������� �������� ����� � ���������: ";
l10n.dl_analyze_instruction_new_mail_text	= "������ ��� ����.";
l10n.dl_analyze_instruction_problem_text	= "<b>������ �������� �� ��������</b> (����� �� ������ � ����� �� ������ ���������).";
l10n.dl_analyze_instruction_details_text	= "���� ���� ������ <b>������� ������� ������������ ����������� �������</b>.";
l10n.dl_analyze_instruction_paste_text		= "������� ���������� ����� � ���� �� �����.";
l10n.dl_analyze_instruction_only_download_text	= "���� <b> ������� ����� ���� � ������ �� �������� � ����������� </b>, � �� ��� �� ����� �� ����������.";
l10n.dl_analyze_instruction_no_install_text	= "���� ��� �������� �� ���� �� ������� � ������ �� �������� � �������������.";
l10n.dl_analyze_instruction_send_mail_text	= "��� - ������, <b>������� ����</b> ���: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice ���� ���� � ������������";
l10n.dl_analyze_instruction_mailing_list_title	= "������� ����� ���  ���� ����� � ������������ �� Apache OpenOffice";
l10n.dl_analyze_instruction_learn_more_text	= "������� ���, �� �� ������ ������ ����� ������������� ������� �������";
l10n.dl_analyze_instruction_learn_more_title	= "����� ������ �� ����, ����� � ���� ����";
l10n.dl_analyze_instruction_answer_text		= "��� �� �� ������� �� ��������� �������� ��� � �����, ���� ���� ������� ����� � ��������� ���� ����������. ";
l10n.dl_analyze_instruction_thanks_text		= "���������� �� ���� ������.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "������� �� �� ������������ ���������";
l10n.dl_analyze_update_button_title		= "������� ��������� ����� ���� ���������� ��������� � ��������� �� - ����";
l10n.dl_analyze_select_button_text		= "�������, �� �� ������� �������";
l10n.dl_analyze_select_button_title		= "������ ������ ����� � ��������� �� - ����";
l10n.dl_analyze_copy_button_text		= "������� � [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "������� ��������� ����� �� ��������� ���� [ Ctrl ] + [ C ] ��� [ &#8984; ] + [ C ] � ���������";

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
