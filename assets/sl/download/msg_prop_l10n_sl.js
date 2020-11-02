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
DL.NL_LANG					= "sl";

// General:
l10n.dl_headline_text				= "Apache OpenOffice Download";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Download Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Download Apache OpenOffice for your favorite operating system, language and version";
l10n.dl_green_box_subtext1_text			= "Hosted by Sourceforge.net - A trusted website";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice binary files are hosted by Sourceforge.net - A trusted website";
l10n.dl_green_box_subtext2_text			= "Select your favorite operating system, language and version";
l10n.dl_green_box_subtext2_title		= "Select your favorite operating system, language and version";
l10n.dl_green_box_selectbox_os_title		= "Select your favorite operating system";
l10n.dl_green_box_selectbox_lang_title		= "Select your favorite language";
l10n.dl_green_box_selectbox_ver_title		= "Select your favorite release version";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines below the 3 following variables)!
l10n.dl_green_box_select_box_os_values		= [ "Windows (EXE)",
				    		    "Linux 64-bit (x86-64) (DEB)",
						    "Linux 64-bit (x86-64) (RPM)",
						    "Linux 32-bit (x86) (DEB)",
						    "Linux 32-bit (x86) (RPM)",
						    "OS X (version >= 10.7) (DMG)",
						    "OS X (version <= 10.6) (DMG)",
						    "More platforms / operating systems" ];
/* l10n.dl_green_box_select_box_os_values	= [ "" ]; */

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

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */

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

/* l10n.dl_green_box_select_box_version_values	= [ "" ]; */

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Help Spread the Word";
l10n.dl_share_light_blue_box_headline_title	= "Help spread the word and tell your friends about Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Please tell your friends about Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Help spread the word and tell your friends about Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Official Blog";
l10n.dl_share_light_blue_box_blog_title		= "Weblog of OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog of OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Please tell your friends about Apache OpenOffice via Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Share on Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Please tell your friends about Apache OpenOffice via Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Share on Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Get Apache OpenOffice Extensions and Dictionaries";
l10n.dl_ext_blue_box_headline_title		= "Choose from a wide range of additional and individual functionality";
l10n.dl_ext_blue_box_text_text			= "Extend your Apache OpenOffice functionality with a large and growing library of extensions and dictionaries from other users.";
l10n.dl_ext_blue_box_text_title			= "Choose from a wide range of additional and individual functionality";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Get Apache OpenOffice Templates";
l10n.dl_tlp_blue_box_headline_title		= "Choose from a wide range of additional and individual documents";
l10n.dl_tlp_blue_box_text_text			= "Extend your Apache OpenOffice creativity with a large and growing library of templates from other users.";
l10n.dl_tlp_blue_box_text_title			= "Choose from a wide range of additional and individual documents";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Release Information";
l10n.dl_nav_sysreq_text				= "System Requirements";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB free - Memory: &gt;128MB - Processor: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "License";
l10n.dl_nav_license_title			= "Apache OpenOffice License";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Source";
l10n.dl_nav_source_title			= "For developers and power users: Get the source to build Apache OpenOffice from scratch";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Building Guide";
l10n.dl_nav_build_title				= "For developers and power users: HowTo guide to build Apache OpenOffice from scratch";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "For developers: Software Development Kit";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Development Builds";
l10n.dl_nav_devbuilds_title			= "For QA volunteers: Development Builds";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Documentation";
l10n.dl_nav_schedule_text			= "Release Schedules";
l10n.dl_nav_schedule_title			= "When are new releases planned?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Historic Release Schedule";
l10n.dl_nav_hist_schedule_title			= "When were old releases planned?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Installation Guides";
l10n.dl_nav_inst_guide_title			= "Instructions for installing Apache OpenOffice on Windows, macOS (OS&nbsp;X) and Linux machines";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "User Guides";
l10n.dl_nav_user_guide_title			= "Extensive user manuals for every day use";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java and Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Explains why to use Java and what it is";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "End-Of-Life Information";
l10n.dl_nav_eol_title				= "Information about releases that have reached End-Of-Life status";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Additional Resources";
l10n.dl_nav_support_text			= "Support";
l10n.dl_nav_support_title			= "If the information above did not answer your question: Free and paid support!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Localizations";
l10n.dl_nav_local_title				= "Information and support in your favorite language";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Download Statistics";
l10n.dl_nav_stat_title				= "Download and other statistics";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternative download mirrors #1";
l10n.dl_nav_mirrors1_title			= "Use Sourceforge mirrors to download Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternative download mirrors #2";
l10n.dl_nav_mirrors2_title			= "Use Apache mirrors to download Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "3rd party ports and distributions";
l10n.dl_nav_porting_title			= "Ports and distributions from 3rd party vendors";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Archived and legacy releases";
l10n.dl_nav_archive_title			= "Download legacy and archived releases";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Release Notes";
l10n.dl_nav_release_notes_title			= "What is new, what has been improved in Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Verify the downloaded file";
l10n.dl_nav_checksum_title			= "How to verify the downloaded file with signatures and hashes?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Download, Develop and Publish Free Open Source Software";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "https://www.openoffice.org/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service - Check the markup (HTML, XHTML, ...) of Web documents";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "https://www.openoffice.org/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Download full installation";
l10n.dl_full_link_title				= "Click to download: ";
l10n.dl_langpack_link_text			= "Download language pack";
l10n.dl_langpack_link_title			= "Click to download: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Porting: Click to choose from 3rd party vendors";
l10n.dl_full_link_porting_title			= "Click to browse to the porting webpage and download from 3rd party vendors";
l10n.dl_full_link_archive_text			= "Archive: Click to choose from legacy releases";
l10n.dl_full_link_archive_title			= "Click to browse to the archive and download legacy releases";

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
l10n.dl_analyze_headline_text			= "How to report a broken download link?";
l10n.dl_analyze_instruction_select_text		= "<b>Select your favorites</b>: Operating system, language and version in the green below.";
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
