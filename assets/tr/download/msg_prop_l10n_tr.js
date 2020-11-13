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
DL.NL_LANG					= "tr";

// General:
l10n.dl_headline_text				= "Apache OpenOffice İndirme";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Apache OpenOffice'i İndirin";
l10n.dl_green_box_headline_title		= "Sık kullandığınız işletim sisteminiz, diliniz ve sürümünüz için Apache OpenOffice'i indirin";
l10n.dl_green_box_subtext1_text			= "Sourceforge.net tarafından barındırılır - Güvenilir bir web sitesidir";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice binari dosyaları Sourceforge.net tarafından barındırılır - Güvenilir bir web sitesidir";
l10n.dl_green_box_subtext2_text			= "Sık kullandığınız işletim sisteminizi, dilinizi ve sürümünüzü seçin";
l10n.dl_green_box_subtext2_title		= "Sık kullandığınız işletim sisteminizi, dilinizi ve sürümünüzü seçin";
l10n.dl_green_box_selectbox_os_title		= "Sık kullandığınız işletim sisteminizi seçin";
l10n.dl_green_box_selectbox_lang_title		= "Sık kullandığınız dilinizi seçin";
l10n.dl_green_box_selectbox_ver_title		= "Sık kullandığınız yayımlanan sürümünüzü seçin";

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
					        "Daha fazla platform / işletim sistemi" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "" ];

/* l10n.dl_green_box_select_box_lang_values_custom = [ "" ]; */
						    // Value	Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom = [ "de",	"Almanca",				"Deutsch",
						    "ast",	"Asturyaca",				"Asturianu",
						    "eu",	"Baskça",				"Euskara",
						    "bg",	"Bulgarca",				"български език",
						    "cs",	"Çekçe",				"Čeština",
						    "zh-CN",	"Çince [basitleştirilmiş]",		"简体中文",
						    "zh-TW",	"Çince [geleneksel]",			"正體中文",
						    "da",	"Danca",				"Dansk",
						    "fi",	"Fince",				"Suomi",
						    "nl",	"Flemenkçe",				"Nederlands",
						    "fr",	"Fransızca",				"Français",
						    "gl",	"Galce",				"Galego",
						    "hi",	"Hintçe",				"हिन्दी",
						    "he",	"İbranice",				"עברית",
						    "en-GB",	"İngilizce [İngiltere]",		"English [British]",
						    "en-US",	"İngilizce [ABD]",			"English [US]",
						    "gd",	"İskoçça [Gaelic]",			"Gàidhlig",
						    "es",	"İspanyolca",				"Español",
						    "sv",	"İsveççe",				"Svenska",
						    "it",	"İtalyanca",				"Italiano",
						    "ja",	"Japonca",				"日本語",
						    "ca",	"Katalonca",				"Català",
						    "ca-XV",	"Katalonca [Valencia AVL]",		"València (AVL)",
						    "ca-XR",	"Katalonca [Valencia RACV]",		"València (RACV)",
						    "km",	"Kmerce",				"ភាសាខ្មែរ",
						    "ko",	"Korece",				"한국어",
						    "pl",	"Lehçe",				"Polski",
						    "lt",	"Litvanyaca",				"Lietuvių",
						    "hu",	"Macarca",				"Magyar",
						    "nb",	"Norveççe [Bokmal]",			"Norsk [Bokmål]",
						    "pt-BR",	"Portekizce [Brazilya]",		"Português [do Brasil]",
						    "pt",	"Portekizce [Avrupa]",			"Português [Europeu]",
						    "ru",	"Rusça",				"Русский",
						    "sr",	"Sırpça [Cyrillic]",			"Cрпски [ћирилицом]",
						    "sk",	"Slovakça",				"Slovenský jazyk [slovenčina]",
						    "sl",	"Slovence",				"Slovenski jezik [slovenščina]",
						    "ta",	"Tamilce",				"தமிழ்",
						    "th",	"Tayca",				"ภาษาไทย",
						    "tr",	"Türkçe",				"Türkçe",
						    "vi",	"Vietnamca",				"Tiếng Việt",
						    "el",	"Yunanca",				"ελληνικά" ];

/* l10n.dl_green_box_select_box_version_values	= [ "" ]; */
l10n.dl_green_box_select_box_version_values	= [ "4.1.8",
												"4.1.7",
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
												"Eski yayımlar" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Duyurmamıza Yardım Edin";
l10n.dl_share_light_blue_box_headline_title	= "Apache OpenOffice hakkında arkadaşlarınıza bahsedin ve duyurmamıza yardım edin";
l10n.dl_share_light_blue_box_text_text		= "Lütfen Apache OpenOffice hakkında arkadaşlarınıza bahsedin:";
l10n.dl_share_light_blue_box_text_title		= "Apache OpenOffice hakkında arkadaşlarınıza bahsedin ve duyurmamıza yardım edin";
l10n.dl_share_light_blue_box_blog_text		= "Official Blog";
l10n.dl_share_light_blue_box_blog_title		= "Weblog of OpenOffice.";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog of OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Lütfen Facebook aracılığıyla Apache OpenOffice hakkında arkadaşlarınıza bahsedin";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Facebook'ta Paylaş";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Lütfen Twitter aracılığıyla Apache OpenOffice hakkında arkadaşlarınıza bahsedin";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Twitter'da Paylaş";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Apache OpenOffice Uzantılarını ve Sözlüklerini Alın";
l10n.dl_ext_blue_box_headline_title		= "İlave ve bireysel işlevselliğin geniş bir yelpazesinden seçin";
l10n.dl_ext_blue_box_text_text			= "Diğer kullanıcılardan gelen uzantıların ve sözlüklerin geniş ve büyüyen bir kütüphanesi ile Apache OpenOffice işlevselliğinizi genişletin.";
l10n.dl_ext_blue_box_text_title			= "İlave ve bireysel işlevselliğin geniş bir yelpazesinden seçin";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Apache OpenOffice Şablonlarını Alın";
l10n.dl_tlp_blue_box_headline_title		= "İlave ve bireysel belgelerin geniş bir yelpazesinden seçin";
l10n.dl_tlp_blue_box_text_text			= "Diğer kullanıcılar sayesinde şablonların geniş ve büyüyen bir kütüphanesi ile Apache OpenOffice yaratıcılığınızı genişletin.";
l10n.dl_tlp_blue_box_text_title			= "İlave ve bireysel belgelerin geniş bir yelpazesinden seçin";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Yayım Bilgileri";
l10n.dl_nav_sysreq_text				= "Sistem Gereksinimleri";
l10n.dl_nav_sysreq_title			= "Disk: ~300MB boş - Bellek: &gt;128MB - İşlemci: &gt;500MHz - İS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Lisans";
l10n.dl_nav_license_title			= "Apache OpenOffice Lisansı";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Kaynak";
l10n.dl_nav_source_title			= "Geliştiriciler ve ileri düzey kullanıcılar için: Apache OpenOffice'i sıfırdan yaratmak için kaynağı alın.";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Yapım Rehberi";
l10n.dl_nav_build_title				= "Geliştiriciler ve ileri düzey kullanıcılar için: Apache OpenOffice'i sıfırdan yaratmak için nasıl yapılır rehberi.";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Yazılım Geliştirme Paketi (SDK)";
l10n.dl_nav_sdk_title				= "Geliştiriciler için: Yazılım Geliştirme Paketi.";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Geliştirme Yapımları";
l10n.dl_nav_devbuilds_title			= "QA gönüllüleri için: Geliştirme Yapımları";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Belgeler";
l10n.dl_nav_schedule_text			= "Yayımlama Zamanları";
l10n.dl_nav_schedule_title			= "Ne zaman yeni yayımlar planlanır?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Geçmişteki Yayımlama Zamanı";
l10n.dl_nav_hist_schedule_title			= "Ne zaman eski yayımlar planlanır?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Yükleme Kılavuzu";
l10n.dl_nav_inst_guide_title			= "Windows, macOS (OS&nbsp;X) ve Linux makinelerinde Apache OpenOffice yükleme talimatları";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Kullanıcı Kılavuzu";
l10n.dl_nav_user_guide_title			= "Her gün kullanım için kapsamlı kullanıcı kılavuzları";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java ve Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Neden Java kullanıldığını ve ne olduğunu açıklar";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Sona Erme Bilgisi";
l10n.dl_nav_eol_title				= "Sona Erme durumuna ulaşan yayımlar hakkında bilgiler";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "İlave Kaynaklar";
l10n.dl_nav_support_text			= "Destek";
l10n.dl_nav_support_title			= "Yukarıdaki bilgi sorunuzu yanıtlamadıysa: Ücretsiz ve ücretli destek!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Yerelleştirmeler";
l10n.dl_nav_local_title				= "Sık kullandığınız dilinizde bilgi ve destek";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "İndirme İstatistikleri";
l10n.dl_nav_stat_title				= "İndirme ve diğer istatistikler";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternatif indirme yansıları #1";
l10n.dl_nav_mirrors1_title			= "Apache OpenOffice'i indirmek için Sourceforge yansılarını kullanın";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternatif indirme yansıları #2";
l10n.dl_nav_mirrors2_title			= "Apache OpenOffice'i indirmek için Apache yansılarını kullanın";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "Üçüncü parti bağlantı noktaları ve dağıtımları";
l10n.dl_nav_porting_title			= "Üçüncü parti satıcılardan bağlantı noktaları ve dağıtımları";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Arşivlenmiş ve eskimiş yayımlar";
l10n.dl_nav_archive_title			= "Eskimiş ve arşivlenmiş yayımları indirin";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Yayım Notları";
l10n.dl_nav_release_notes_title			= "Neler yeni, Apache OpenOffice içinde neler geliştirildi?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "İndirilen dosyayı doğrulayın";
l10n.dl_nav_checksum_title			= "İndirilen dosyayı imzaları ve adreslemeleri ile nasıl doğrularsınız?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Ücretsiz Açık Kaynak Yazılım İndir, Geliştir ve Yayınla";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C Biçimleme Doğrulama Hizmeti - Web belgelerinin biçimlemesini (HTML, XHTML, ...) kontrol edin";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Onaylayıcı";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Tam kurulumu indir";
l10n.dl_full_link_title				= "Şunu indirmek için tıklayın: ";
l10n.dl_langpack_link_text			= "Dil paketini indir";
l10n.dl_langpack_link_title			= "Şunu indirmek için tıklayın: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";

l10n.dl_full_link_porting_text			= "Bağlantı Noktası: Üçüncü parti satıcılardan seçmek için tıklayın";
l10n.dl_full_link_porting_title			= "Bağlantı noktası web sayfasına gözatmak ve üçüncü parti satıcılardan indirmek için tıklayın";
l10n.dl_full_link_archive_text			= "Arşiv: Eskimiş yayımlardan seçmek için tıklayın";
l10n.dl_full_link_archive_title			= "Arşive gözatmak ve eskimiş yayımları indirmek için tıklayın";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Yayım: ";
l10n.dl_rel_info_milestone_text			= "Aşama ";
l10n.dl_rel_info_buildid_text			= "Yapım ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Yayımlanma ";
l10n.dl_rel_notes_text				= "Yayım Notları";
l10n.dl_rel_notes_title				= "Yayım Notları: Apache OpenOffice ";

l10n.dl_headline_full_text			= "Tam kurulum: ";
l10n.dl_headline_langpack_text			= "Dil paketi: ";
l10n.dl_filesize_text				= "Dosya boyutu ~ ";
l10n.dl_megabyte_text				= " MBayt";
l10n.dl_checksum_headline_text			= "İmzalar ve adreslemeler: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS imza dosyası";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "Dosyanın ASC imzası: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "Dosyanın MD5 adreslemesi: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "Dosyanın SHA256 adreslemesi: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "Dosyanın SHA512 adreslemesi: ";

l10n.dl_help_img_title				= "Tam kurulum ve dil paketi arasındaki fark nedir?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Yükleme bilgisi";
l10n.dl_help_text				= "Dil paketi nedir?";
l10n.dl_help_title				= "Tam kurulum ve dil paketi arasındaki fark nedir?";
l10n.dl_checksum_img_title			= "Sağlamalar ile indirilen dosyayı nasıl doğrularsınız?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Sağlama doğrulaması";
l10n.dl_checksum_text				= "İndirmeyi nasıl doğrularsınız?";
l10n.dl_checksum_title				= "Sağlamalar ile indirilen dosyayı nasıl doğrularsınız?";
l10n.dl_report_img_title			= "Bozuk indirme bağlantısı mı? Bildirmek için buraya tıklayın.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Bozuk bağlantı";
l10n.dl_report_text				= "Bozuk bağlantı bildir";
l10n.dl_report_title				= "Bozuk indirme bağlantısı mı? Bildirmek için buraya tıklayın.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Mevcut tam kurulum yok";
l10n.dl_full_link_error_title			= "Lütfen başka bir dil, platform ya da sürüm seçin.";
l10n.dl_langpack_link_error_text		= "Mevcut dil paketi yok";
l10n.dl_langpack_link_error_title		= "Lütfen başka bir dil, platform ya da sürüm seçin.";

l10n.dl_error_problem_img_title			= "Seçilen indirme dosyası mevcut değil";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Hata metni";
l10n.dl_error_problem_text			= "Sorun: ";
l10n.dl_error_solution_text			= "Çözüm: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= ", şu dil için mevcut değil: ";
l10n.dl_error_please_select_1_text		= "Lütfen 4.0.1 sürümünü seçin.";
l10n.dl_error_please_select_2_text		= "Lütfen 4.1.0 sürümünü ya da daha yenisini seçin.";
l10n.dl_error_please_select_3_text		= "Lütfen Windows, Linux ya da OS X için bir indirme seçin.";
l10n.dl_error_please_select_4_text		= "Lütfen başka bir dil ya da sürüm seçin.";

l10n.dl_unknown_platform_text			= "bilinmeyen işletim sistemi / platform";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Bozuk bir indirme bağlantısı nasıl bildirilir?";
l10n.dl_analyze_instruction_select_text		= "<b>Sık kullandıklarınızı seçin</b>: Aşağıdaki yeşil alandan işletim sistemi, dil ve sürümü.";
l10n.dl_analyze_instruction_verify_text		= "Bu seçeneklerin, geçerli indirme bağlantılarına <b>götürüp götürmediğini</b> doğrulayın.";
l10n.dl_analyze_instruction_click_text		= "Yeşil kutunun altındaki düğmeye tıklayın:";
l10n.dl_analyze_instruction_copy_text		= "Seçilen tablo verisini pano içine kopyalayın:";
l10n.dl_analyze_instruction_new_mail_text	= "Yeni bir posta oluşturun.";
l10n.dl_analyze_instruction_problem_text	= "<b>Sorunun açıklamasını yazın</b> (neden çalışmadığı ve ne beklediğiniz).";
l10n.dl_analyze_instruction_details_text	= "Lütfen ayrıca <b>kullanılan işletim sistemi hakkında ayrıntıları</b> ekleyin.";
l10n.dl_analyze_instruction_paste_text		= "Kopyalanan veriyi postanın en sonuna yapıştırın.";
l10n.dl_analyze_instruction_only_download_text	= "Lütfen <b>sadece indirme sorunlarının olduğu durumlarda posta gönderin</b> yükleyemediğiniz zaman değil.";
l10n.dl_analyze_instruction_no_install_text	= "Bu sayfa kurulum sorunlarına yardımcı olamaz.";
l10n.dl_analyze_instruction_send_mail_text	= "Son olarak, şu adrese <b>posta gönderin</b>: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice Geliştirme Postalama Listesi";
l10n.dl_analyze_instruction_mailing_list_title	= "Raporu Apache OpenOffice geliştiricilerinin postalama listesine gönderin";
l10n.dl_analyze_instruction_learn_more_text	= "Postalama listesinin ne olduğuyla ilgili daha fazlasını öğrenmek için buraya tıklayın";
l10n.dl_analyze_instruction_learn_more_title	= "Postalama listesinin ne olduğuyla ilgili daha fazlasını öğrenin";
l10n.dl_analyze_instruction_answer_text		= "Postayı alır almaz ve sorun çözümlendiğinde yanıtlamaya çalışacağız.";
l10n.dl_analyze_instruction_thanks_text		= "Bildiriniz için teşekkür ederiz.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Tabloyu güncellemek için tıklayın";
l10n.dl_analyze_update_button_title		= "Aşağıdaki tablo içine seçilen seçenekleri değer olarak koyun";
l10n.dl_analyze_select_button_text		= "Tabloyu güncellemek için tıklayın";
l10n.dl_analyze_select_button_title		= "Aşağıda tablodaki tüm veriyi seçin";
l10n.dl_analyze_copy_button_text		= "[Ctrl]+[C] / [&#8984;]+[C] ile Kopyalayın";
l10n.dl_analyze_copy_button_title		= "[ Ctrl ] + [ C ] or [ &#8984; ] + [ C ] aracılığıyla seçilen tablo verisini panoya kopyalayın";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_problem_text1		= "Sorun açıklaması";
l10n.dl_analyze_table_problem_text2		= "Sorunu tarif etmek için bu metni değiştirin <br /><br />(Ne çalışmıyor? Ne umdunuz?)";
l10n.dl_analyze_table_browser_text		= "Tarayıcı değişkenleri";
l10n.dl_analyze_table_values_text		= "Değerler";
l10n.dl_analyze_table_yes_text			= "Evet";
l10n.dl_analyze_table_no_text			= "Hayır";
l10n.dl_analyze_table_stable_release_text	= "Sağlam Yayım";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;işlevleri/değişkenleri";

// General: Links to webpage files that could be localized.
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
l10n.dl_report_link				= "https://www.openoffice.org/tr/download/analyze.html";
l10n.dl_porting_link				= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/other-341.html";

