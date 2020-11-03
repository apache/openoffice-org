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
l10n.dl_headline_text				= "Preuzmite Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Preuzmite Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Preuzmite Apache OpenOffice prema vašem operativnom sistemu, jeziku i verziji";
l10n.dl_green_box_subtext1_text			= "Hostovano od strane Sourceforge.net - web lokacija od poverenja";
l10n.dl_green_box_subtext1_title		= "Binarne datoteke Apache OpenOffice-a su hostovane od strane Sourceforge.net - web lokacija od poverenja";
l10n.dl_green_box_subtext2_text			= "Izaberite željeni operativni sistem, jezik i verziju";
l10n.dl_green_box_subtext2_title		= "Izaberite željeni operativni sistem, jezik i verziju";
l10n.dl_green_box_selectbox_os_title		= "Izaberite željeni operativni sistem";
l10n.dl_green_box_selectbox_lang_title		= "Izaberite željeni jezik";
l10n.dl_green_box_selectbox_ver_title		= "Izaberite željenu verziju izdanja";

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
						    "Još platformi / operativni sistemi" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "Asturian (Asturianu)",
						    "Basque (Euskara)",
						    "Bulgarian (български език)",
                                                    "Catalan (Català)",
                                                    "Catalan Valencia AVL (Català Valencià AVL)",
                                                    "Catalan Valencia RACV (Català Valencià RACV)",
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
l10n.dl_green_box_select_box_version_values	= [ "4.1.4",
						    "4.1.3",
						    "4.1.2",
						    "4.1.1",
						    "4.1.0",
						    "4.0.1",
						    "4.0.0",
						    "3.4.1",
						    "Starija izdanja" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Pomozite širenju priče";
l10n.dl_share_light_blue_box_headline_title	= "Pomozite širenju priče i recite vašim prijateljima za Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Recite vašim prijateljima za Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Pomozite širenju priče i recite vašim prijateljima za Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Zvanični blog";
l10n.dl_share_light_blue_box_blog_title		= "OpenOffice-ov dnevnik na Webu.";
l10n.dl_share_light_blue_box_blog_src		= "http://www.openoffice.org/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "OpenOffice-ov dnevnik na Webu";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Recite vašim prijateljima za Apache OpenOffice preko Facebook-a";
l10n.dl_share_light_blue_box_facebook_src	= "http://www.openoffice.org/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Delite preko Facebook-a";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Recite vašim prijateljima za Apache OpenOffice preko Twitter-a";
l10n.dl_share_light_blue_box_twitter_src	= "http://www.openoffice.org/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Delite preko Twitter-a";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Nabavite proširenja i rečnike za Apache OpenOffice";
l10n.dl_ext_blue_box_headline_title		= "Izaberite iz širokog spektra dodatnih i individualnih funkcionalnosti";
l10n.dl_ext_blue_box_text_text			= "Proširite funkcionalnost Apache OpenOffice-a sa velikom i rastućom bibliotekom proširenja i rečnicima od drugih korisnika.";
l10n.dl_ext_blue_box_text_title			= "Izaberite iz širokog spektra dodatnih i individualnih funkcionalnosti";
l10n.dl_ext_blue_box_text_href			= "http://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Nabavite šablone za Apache OpenOffice";
l10n.dl_tlp_blue_box_headline_title		= "Izaberite iz širokog spektra dodatnih i individualnih dokumenata";
l10n.dl_tlp_blue_box_text_text			= "Proširite kreativnost Apache OpenOffice-a sa velikom i rastućom bibliotekom šablona od drugih korisnika.";
l10n.dl_tlp_blue_box_text_title			= "Izaberite iz širokog spektra dodatnih i individualnih dokumenata";
l10n.dl_tlp_blue_box_text_href			= "http://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Napomena uz izdanje";
l10n.dl_nav_sysreq_text				= "Sistemski zahtevi";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB slobodna memorija: &gt;128MB - Procesor: &gt;500MHz - OS: Win, Linux, Mac OS, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "http://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "Licenca";
l10n.dl_nav_license_title			= "Apache OpenOffice licenca";
l10n.dl_nav_license_href			= "http://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Izvor";
l10n.dl_nav_source_title			= "Za programere i napredne korisnike: Preuzmite izvorni kod da gradite Apache OpenOffice od nule.";
l10n.dl_nav_source_href				= "http://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Uputstvo za izgradnju aplikacije";
l10n.dl_nav_build_title				= "Za programere i napredne korisnike: Uputstvo kako da gradite Apache OpenOffice od nule.";
l10n.dl_nav_build_href				= "http://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Alati za razvoj softvera (SDK)";
l10n.dl_nav_sdk_title				= "Za programere: Alati za razvoj softvera.";
l10n.dl_nav_sdk_href				= "http://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Razvojna izgradnja";
l10n.dl_nav_devbuilds_title			= "Za QA volontere: Razvojna izgradnja";
l10n.dl_nav_devbuilds_href			= "http://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Dikumentacija";
l10n.dl_nav_schedule_text			= "Trenutni raspored objavljivanja";
l10n.dl_nav_schedule_title			= "Kada se planira novo izdanje?";
l10n.dl_nav_schedule_href			= "http://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Hronološki raspored objavljivanja";
l10n.dl_nav_hist_schedule_title			= "Kada su starija izdanja planirana?";
l10n.dl_nav_hist_schedule_href			= "http://wiki.services.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Uputstva za instalaciju";
l10n.dl_nav_inst_guide_title			= "Instrukcije za instaliranje Apache OpenOffice-a na Windows-u, Linux-u i Mac OS mašinama";
l10n.dl_nav_inst_guide_href			= "http://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "Uputstva za upotrebu";
l10n.dl_nav_user_guide_title			= "Sveobuhvatno uputstvo za korišćenje za svakodnevnu upotrebu";
l10n.dl_nav_user_guide_href			= "http://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java i Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Objašnjenja zašto da se koristi Java i šta je to";
l10n.dl_nav_why_java_href			= "http://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "Informacija o zastarelosti proizvoda";
l10n.dl_nav_eol_title				= "Informacije u vezi izdanja koja su dostigla status zastarelosti";
l10n.dl_nav_eol_href				= "http://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Dodatni izvori informacija";
l10n.dl_nav_support_text			= "Podrška";
l10n.dl_nav_support_title			= "Ako prethodne informacije nisu dale odgovor na vaše pitanje: Besplatna i plaćena podrška!";
l10n.dl_nav_support_href			= "http://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Lokalizacije";
l10n.dl_nav_local_title				= "Informacije i podrška za vaš preferirani jezik";
l10n.dl_nav_local_href				= "http://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Statistika preuzimanja";
l10n.dl_nav_stat_title				= "Statistika preuzimanja i ostala statistika";
l10n.dl_nav_stat_href				= "http://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternativni odrazi za preuzimanje #1";
l10n.dl_nav_mirrors1_title			= "Koritite Sourceforge-ove odraze za preuzimanje Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "http://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternativni odrazi za preuzimanje #2";
l10n.dl_nav_mirrors2_title			= "Koritite Apache-ove odraze za preuzimanje Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "http://www.apache.org/dyn/aoo-closer.cgi/openoffice/";
l10n.dl_nav_porting_text			= "Portovi i distribucije samostalnih proizvođača (3rd party)";
l10n.dl_nav_porting_title			= "Portovi i distribucije od strane samostalnih (3rd party) dobavljača";
l10n.dl_nav_porting_href			= "http://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Arhivirana i stara izdanja";
l10n.dl_nav_archive_title			= "Preuzmite arhivirana i stara izdanja";
l10n.dl_nav_archive_href			= "http://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Napomene uz izdanje";
l10n.dl_nav_release_notes_title			= "Šta je novo, šta šta je poboljšano u Apache OpenOffice-u?";
l10n.dl_nav_release_notes_href			= "http://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Verifikujte preuzetu datoteku";
l10n.dl_nav_checksum_title			= "Kako da verifikujete preuzetu datoteku sa potpisom i hešom?";
l10n.dl_nav_checksum_href			= "http://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "Sourceforge - Preuzimanje, razvoj i objavljivanje besplatnog softvera otvorenog koda";
l10n.dl_img_sourceforge_href			= "http://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "http://www.openoffice.org/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "Sourceforge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service - Check the markup (HTML, XHTML, ...) of Web documents";
l10n.dl_img_w3c_href				= "http://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "http://www.openoffice.org/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Preuzmite celu instalaciju";
l10n.dl_full_link_title				= "Kliknite za preuzimanje: ";
l10n.dl_langpack_link_text			= "Preuzmite jezički paket";
l10n.dl_langpack_link_title			= "Kliknite za preuzimanje: ";

l10n.dl_full_link_porting_text			= "Portovanje: Kliknite da izaberete od samostalnih dobavljača.";
l10n.dl_full_link_porting_title			= "Kliknite da potražite web stranicu potriranja i preuzmite od samostalnih (3rd party) dobavljača";
l10n.dl_full_link_archive_text			= "Arhiva: kliknite da izaberete stara izdanja";
l10n.dl_full_link_archive_title			= "Kliknite da potražite u arhivi i preuzmite stara izdanja";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Release: ";
l10n.dl_rel_info_milestone_text			= "Milestone ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Released ";
l10n.dl_rel_notes_text				= "Napomene uz izdanje";
l10n.dl_rel_notes_title				= "Napomene uz izdanje za Apache OpenOffice ";

l10n.dl_headline_full_text			= "Puna instalacija: ";
l10n.dl_headline_langpack_text			= "Jezički paket: ";
l10n.dl_filesize_text				= "Datoteka veličine ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Potpisi i heševi: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS datoteka s potpisom";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC potpis za: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 heš za: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 heš za: ";

l10n.dl_help_img_title				= "Koja je razlika između pune instalacije i jezičkog paketa?";
l10n.dl_help_img_src				= "http://www.openoffice.org/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Info u vezi instaliranja";
l10n.dl_help_text				= "Šta je jezički paket?";
l10n.dl_help_title				= "Koja je razlika između pune instalacije i jezičkog paketa?";
l10n.dl_checksum_img_title			= "Kako da verifikujem preuzetu datoteku sa kontrolnim zbirom?";
l10n.dl_checksum_img_src			= "http://www.openoffice.org/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Provera kontrolnog zbira";
l10n.dl_checksum_text				= "Kako da verifikujem ovo preuzimanje?";
l10n.dl_checksum_title				= "Kako da verifikujem preuzetu datoteku sa kontrolnim zbirom?";
l10n.dl_report_img_title			= "Link za preuzimanje je neispravan? Kliknite ovde da prijavite.";
l10n.dl_report_img_src				= "http://www.openoffice.org/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Neispravan link";
l10n.dl_report_text				= "Prijavite neispravan link";
l10n.dl_report_title				= "Link za preuzimanje je neispravan? Kliknite ovde da prijavite.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "Puna instalacije nije dostupna";
l10n.dl_full_link_error_title			= "Izaberite drugi jezik, platformu ili verziju.";
l10n.dl_langpack_link_error_text		= "Nije dostupan jezički paket";
l10n.dl_langpack_link_error_title		= "Izaberite drugi jezik, platformu ili verziju.";

l10n.dl_error_problem_img_title			= "Izabrana datoteka za preuzimanje nije dostupna";
l10n.dl_error_problem_img_src			= "http://www.openoffice.org/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Tekst greške";
l10n.dl_error_problem_text			= "Problem: ";
l10n.dl_error_solution_text			= "Rešenje: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " nije dostupan za ";
l10n.dl_error_please_select_1_text		= "Molimo izaberite verziju 4.0.1.";
l10n.dl_error_please_select_2_text		= "Molimo izaberite verziju 4.1.0 ili noviju.";
l10n.dl_error_please_select_3_text		= "Molimo izaberite preuzimanje za Windows, Linux or OS X.";
l10n.dl_error_please_select_4_text		= "Molimo izaberite drugi jezik ili verziju.";

l10n.dl_unknown_platform_text			= "nepoznat operativni sistem / platforma";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "Kako prijavim neispravan link za preuzimanje?";
l10n.dl_analyze_instruction_select_text		= "<b>Izaberite vaše favorite</b>: Operativni sistem, jezik i verziju u zelenom ispod.";
l10n.dl_analyze_instruction_verify_text		= "Verifikuj da ove opcije <b>još uvek ne vode</b> do validnih linkova za preuzimanje.";
l10n.dl_analyze_instruction_click_text		= "Klinkite na dugme ispod zelene kutije: ";
l10n.dl_analyze_instruction_copy_text		= "Kopirajte izabranu tabelu podataka u privremenu memoriju: ";
l10n.dl_analyze_instruction_new_mail_text	= "Kreirajte novi mejl.";
l10n.dl_analyze_instruction_problem_text	= "<b>Napišite opis problema</b> (šta ne radi i koja su vaša očekivanja).";
l10n.dl_analyze_instruction_details_text	= "Molimo takođe da dodate <b>detalje u vezi korišćenog operativnog sistema</b>.";
l10n.dl_analyze_instruction_paste_text		= "Umetnite kopirane podatke na kraju mejla.";
l10n.dl_analyze_instruction_only_download_text	= "Molimo da <b>pošaljete mejl samo u slučaju problema kod preuzimanja</b> a ne ako ne možete da uradite instalaciju.";
l10n.dl_analyze_instruction_no_install_text	= "Ova web stranica ne može da pomogne kod problema pri instaliranju.";
l10n.dl_analyze_instruction_send_mail_text	= "Na kraju, <b>pošaljite mejl</b> na: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Razvojna dopisna lista Apache OpenOffice-a";
l10n.dl_analyze_instruction_mailing_list_title	= "Pošaljite izveštaj Apache OpenOffice-ovoj razvojnoj dopisnoj listi";
l10n.dl_analyze_instruction_learn_more_text	= "Kliknite ovde da saznate više o dopisnim listama";
l10n.dl_analyze_instruction_learn_more_title	= "Saznajte više o dopisnim listama";
l10n.dl_analyze_instruction_answer_text		= "Pokušaćemo da odgovorimo čim dobijemo mejl i analiziramo problem.";
l10n.dl_analyze_instruction_thanks_text		= "Hvala vam na vašem izveštaju.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Kliknite da ažurirate tabelu";
l10n.dl_analyze_update_button_title		= "Stavite izabrane opcije kao vrednosti unutar tabele ispod";
l10n.dl_analyze_select_button_text		= "Kliknite da izaberete tabelu";
l10n.dl_analyze_select_button_title		= "Kliknite sve podatke u tabeli ispod";
l10n.dl_analyze_copy_button_text		= "Kopirajte sa [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Kopirajte izabranu tabelu sa podacima preko [ Ctrl ] + [ C ] or [ &#8984; ] + [ C ] unutar privremene memorije";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_browser_text		= "Promenljive pregledača";
l10n.dl_analyze_table_values_text		= "Vrednosti";
l10n.dl_analyze_table_yes_text			= "Da";
l10n.dl_analyze_table_no_text			= "Ne";
l10n.dl_analyze_table_stable_release_text	= "Stabilno izdanje";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;functions/variables";



// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo410_link			= "http://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes";
l10n.dl_rel_notes_aoo401_link			= "http://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes";
l10n.dl_rel_notes_aoo400_link			= "http://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0+Release+Notes";
l10n.dl_help_link				= "http://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link				= "http://www.openoffice.org/download/checksums.html";
l10n.dl_report_link				= "http://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link				= "http://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "http://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "http://www.openoffice.org/download/other-341.html";

