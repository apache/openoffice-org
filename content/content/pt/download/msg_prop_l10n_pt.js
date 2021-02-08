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
DL.NL_LANG					= "pt";

// General:
l10n.dl_headline_text				= "Transferir o Apache OpenOffice";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Transferir o Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Transferir o Apache OpenOffice para o seu sistema operativo favorito, idioma e versão";
l10n.dl_green_box_subtext1_text			= "Hospedado por SourceForge.net - uma página web de confiança";
l10n.dl_green_box_subtext1_title		= "Os ficheiros binários do Apache OpenOffice são hospedados por SourceForge.net - uma página web de confiança";
l10n.dl_green_box_subtext2_text			= "Seleccione o seu sistema operativo, idioma e versão";
l10n.dl_green_box_subtext2_title		= "Seleccione o seu sistema operativo, idioma e versão";
l10n.dl_green_box_selectbox_os_title	= "Seleccione o seu sistema operativo favorito";
l10n.dl_green_box_selectbox_lang_title	= "Seleccione o seu idioma favorito";
l10n.dl_green_box_selectbox_ver_title	= "Seleccione a sua versão favorita";

//These strings require updates per version. Leave them as empty is you want to just take the default in English.

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
												"Mais plataformas/sistemas operativos" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "" ];

/* l10n.dl_green_box_select_box_lang_values_custom = [ "" ]; */
												// Value		Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom = [ "de",		"Alemão",					"Deutsch",
													"ast",		"Asturiano",				"Asturianu",
													"eu",		"Basco",					"Euskara",
													"bg",		"Búlgaro",					"български език",
													"ca",		"Catalão",					"Català",
													"ca-XV",	"Catalão [Valencia AVL]",	"València (AVL)",
													"ca-XR",	"Catalão [Valencia RACV]",	"València (RACV)",
													"cs",		"Checo",					"Čeština",
													"zh-CN",	"Chinês [simplificado]",	"简体中文",
													"zh-TW",	"Chinês [traditional]",		"正體中文",
													"ko",		"Coreano",					"한국어",
													"da",		"Dinamarquês",				"Dansk",
													"gd",		"Escocês [Gaélico]",		"Gàidhlig",
													"sk",		"Eslovaco",					"Slovenský jazyk [slovenčina]",
													"sl",		"Esloveno",					"Slovenski jezik [slovenščina]",
													"es",		"Espanhol",					"Español",
													"fi",		"Finlandês",				"Suomi",
													"fr",		"Francês",					"Français",
													"gl",		"Galego",					"Galego",
													"el",		"Grego",					"ελληνικά",
													"he",		"Hebraico",					"עברית",
													"hi",		"Hindi",					"हिन्दी",
													"nl",		"Holandês",					"Nederlands",
													"hu",		"Húngaro",					"Magyar",
													"en-GB",	"Inglês [Britânico]",		"English [British]",
													"en-US",	"Inglês [US]",				"English [US]",
													"it",		"Italiano",					"Italiano",
													"ja",		"Japonês",					"日本語",
													"km",		"Khmer",					"ភាសាខ្មែរ",
													"lt",		"Lituano",					"Lietuvių",
													"nb",		"Norueguês [Bokmal]",		"Norsk [Bokmål]",
													"pl",		"Polaco",					"Polski",
													"pt-BR",	"Português [do Brasil]",	"Português [do Brasil]",
													"pt",		"Português [Europeu]",		"Português [Europeu]",
													"ru",		"Russo",					"Русский",
													"sr",		"Sérvio [Cirílico]",		"Cрпски [ћирилицом]",
													"sv",		"Sueco",					"Svenska",
													"ta",		"Tamil",					"தமிழ்",
													"th",		"Tailandês",				"ภาษาไทย",
													"tr",		"Turco",					"Türkçe",
													"vi",		"Vietnamita",				"Tiếng Việt" ];

// l10n.dl_green_box_select_box_version_values	= [ "" ];
l10n.dl_green_box_select_box_version_values	= [ "4.1.9",
												"4.1.8",
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
												"Versões mais antigas" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text = "Ajude a passar a palavra";
l10n.dl_share_light_blue_box_headline_title = "Ajude a passar a palavra e fale aos seus amigos a respeito do Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text = "Por favor fale aos seus amigos a respeito do Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title = "Ajude a passar a palavra e fale aos seus amigos a respeito do Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text = "Blogue oficial";
l10n.dl_share_light_blue_box_blog_title = "Blogue oficial";
l10n.dl_share_light_blue_box_blog_src = "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt = "Blogue oficial";
l10n.dl_share_light_blue_box_facebook_text = "Facebook";
l10n.dl_share_light_blue_box_facebook_title = "Por favor fale aos seus amigos a respeito do Apache OpenOffice através do Facebook";
l10n.dl_share_light_blue_box_facebook_src = "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt = "Partilhar no Facebook";
l10n.dl_share_light_blue_box_twitter_text = "Twitter";
l10n.dl_share_light_blue_box_twitter_title = "Por favor fale aos seus amigos a respeito do Apache OpenOffice através do Twitter";
l10n.dl_share_light_blue_box_twitter_src = "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt = "Partilhar no Twitter";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text = "Obter extensões e dicionários para o Apache OpenOffice";
l10n.dl_ext_blue_box_headline_title = "Escolha entre uma grande variedade de funcionalidades adicionais e individuais";
l10n.dl_ext_blue_box_text_text = "Aumente a capacidade do seu Apache OpenOffice a partir de uma grande biblioteca de extensões e dicionários de outros utilizadores.";
l10n.dl_ext_blue_box_text_title = "Escolha entre uma grande variedade de funcionalidades adicionais e individuais";
l10n.dl_ext_blue_box_text_href = "http://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text = "Obter modelos para o Apache OpenOffice";
l10n.dl_tlp_blue_box_headline_title = "Escolha entre uma grande variedade de documentos adicionais e individuais";
l10n.dl_tlp_blue_box_text_text = "Aumente a criatividade do seu Apache OpenOffice com uma grande variedade de modelos criados por outros utilizadores.";
l10n.dl_tlp_blue_box_text_title = "Escolha entre uma grande variedade de documentos adicionais e individuais";
l10n.dl_tlp_blue_box_text_href = "http://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text = "Informação de lançamento";
l10n.dl_nav_sysreq_text = "Requisitos de sistema";
l10n.dl_nav_sysreq_title = "HDD: ~300MB livres - Memória: &gt;128MB - Processador: &gt;500MHz - SO: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href = "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text = "Licença";
l10n.dl_nav_license_title = "Licença do Apache OpenOffice";
l10n.dl_nav_license_href = "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text = "Fonte";
l10n.dl_nav_source_title = "Para programadores e utilizadores avançados: obtenha o código fonte para construir o Apache OpenOffice de raiz.";
l10n.dl_nav_source_href = "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text = "Guia de construção";
l10n.dl_nav_build_title = "Para programadores e utilizadores avançados: guia Como fazer para construir o Apache OpenOffice de raiz.";
l10n.dl_nav_build_href = "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text = "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title = "Para programadores: Software Development Kit.";
l10n.dl_nav_sdk_href = "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text = "Versões em desenvolvimento";
l10n.dl_nav_devbuilds_title = "Para voluntários de QA: versões em desenvolvimento";
l10n.dl_nav_devbuilds_href = "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text = "Documentação";
l10n.dl_nav_schedule_text = "Calendário de lançamentos";
l10n.dl_nav_schedule_title = "Quando estão planeadas novas versões?";
l10n.dl_nav_schedule_href = "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text = "Histórico de lançamentos";
l10n.dl_nav_hist_schedule_title = "Quando foram planeadas as versões anteriores?";
l10n.dl_nav_hist_schedule_href = "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text = "Guias de instalação";
l10n.dl_nav_inst_guide_title = "Instruções para instalar o Apache OpenOffice em máquinas Windows, MacOS (OS&nbsp;X) e Linux";
l10n.dl_nav_inst_guide_href = "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text = "Guias do utilizador";
l10n.dl_nav_user_guide_title = "Manuais completos do utilizador para o dia a dia";
l10n.dl_nav_user_guide_href = "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text = "Java e o Apache OpenOffice";
l10n.dl_nav_why_java_title = "Explicação sobre o que é o Java e porquê usar.";
l10n.dl_nav_why_java_href = "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text = "Informação de fim de vida";
l10n.dl_nav_eol_title = "Informação acerca de versões que atingiram o fim de vida";
l10n.dl_nav_eol_href = "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text = "Recursos adicionais";
l10n.dl_nav_support_text = "Assistência";
l10n.dl_nav_support_title = "Se a informação acima não respondeu às suas dúvidas: assistência grátis e paga!";
l10n.dl_nav_support_href = "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text = "Localizações";
l10n.dl_nav_local_title = "Informação e assistência no seu idioma favorito";
l10n.dl_nav_local_href = "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text = "Estatísticas de transferências";
l10n.dl_nav_stat_title = "Transferências e outras estatísticas";
l10n.dl_nav_stat_href = "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text = "Página alternativa de transferência #1";
l10n.dl_nav_mirrors1_title = "Usar espelhos SourceForge para transferir o Apache OpenOffice";
l10n.dl_nav_mirrors1_href = "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text = "Página alternativa de transferência #2";
l10n.dl_nav_mirrors2_title = "Usar espelhos Apache para transferir o Apache OpenOffice";
l10n.dl_nav_mirrors2_href = "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text = "Portos e distribuições de terceiros";
l10n.dl_nav_porting_title = "Portos e distribuições de terceiros vendedores";
l10n.dl_nav_porting_href = "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text = "Lançamentos arquivados e legados";
l10n.dl_nav_archive_title = "Transferir lançamentos arquivados e legados";
l10n.dl_nav_archive_href = "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text = "Notas de lançamento";
l10n.dl_nav_release_notes_title = "O que há de novo, o que foi melhorado no Apache OpenOffice?";
l10n.dl_nav_release_notes_href = "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text = "Verificar o ficheiro transferido";
l10n.dl_nav_checksum_title = "Como verificar o ficheiro transferido com assinaturas?";
l10n.dl_nav_checksum_href = "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title = "SourceForge - transfira, desenvolva e publique programas gratuitos de código aberto";
l10n.dl_img_sourceforge_href = "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src = "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt = "SourceForge";
l10n.dl_img_w3c_title = "W3C Markup Validation Service - verifique o markup (HTML, XHTML, ...) de documentos Web";
l10n.dl_img_w3c_href = "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src = "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt = "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text = "Transferir instalação completa";
l10n.dl_full_link_title = "Clique para transferir: ";
l10n.dl_langpack_link_text = "Transferir pacote de idioma";
l10n.dl_langpack_link_title = "Clique para transferir: ";
l10n.dl_rpm_vs_deb_title			= "RPM é usado em:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB é usado em:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = O que escolher?";

l10n.dl_full_link_porting_text = "Transportar: clique para escolher entre vendedores";
l10n.dl_full_link_porting_title = "Clique para ir para a página de transporte e transferir de outros vendedores";
l10n.dl_full_link_archive_text = "Arquivo: clique para escolher entre versões legadas";
l10n.dl_full_link_archive_title = "Clique para ir para o arquivo e escolher entre versões legadas";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text = "Versão: ";
l10n.dl_rel_info_milestone_text = "Marco ";
l10n.dl_rel_info_buildid_text = "ID da versão ";
l10n.dl_rel_info_svn_text = "SVN "
l10n.dl_rel_info_rel_date_text = "Lançada ";
l10n.dl_rel_notes_text = "Notas de lançamento";
l10n.dl_rel_notes_title = "Notas de lançamento do Apache OpenOffice ";

l10n.dl_headline_full_text = "Instalação completa: ";
l10n.dl_headline_langpack_text = "Pacote de idioma: ";
l10n.dl_filesize_text = "Tamanho ~ ";
l10n.dl_megabyte_text = " MB";
l10n.dl_checksum_headline_text = "Assinaturas: ";
l10n.dl_checksum_keys_text = "KEYS";
l10n.dl_checksum_keys_title = "ficheiro de assinatura de KEYS";
l10n.dl_checksum_asc_text = "ASC";
l10n.dl_checksum_asc_title = "Assinatura para ASC: ";
l10n.dl_checksum_md5_text = "MD5";
l10n.dl_checksum_md5_title = "Hash para MD5: ";
l10n.dl_checksum_sha256_text = "SHA256";
l10n.dl_checksum_sha256_title = "Hash para SHA256: ";
l10n.dl_checksum_sha512_text = "SHA512";
l10n.dl_checksum_sha512_title = "Hash para SHA512: ";

l10n.dl_help_img_title = "Qual é a diferença entre instalação completa e pacote de idioma?";
l10n.dl_help_img_src = "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt = "Informação de instalação";
l10n.dl_help_text = "O que é um pacote de idioma?";
l10n.dl_help_title = "Qual é a diferença entre instalação completa e pacote de idioma?";
l10n.dl_checksum_img_title = "Como verificar o ficheiro transferido com checksums?";
l10n.dl_checksum_img_src = "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt = "Verificar checksum";
l10n.dl_checksum_text = "Como verificar o ficheiro transferido?";
l10n.dl_checksum_title = "Como verificar o ficheiro transferido com checksums?";
l10n.dl_report_img_title = "Ligação de transferência quebrada? Clique aqui para reportar.";
l10n.dl_report_img_src = "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt = "Ligação quebrada";
l10n.dl_report_text = "Reportar ligação quebrada";
l10n.dl_report_title = "Ligação de transferência quebrada? Clique aqui para reportar.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text = "Não há instalação completa disponível";
l10n.dl_full_link_error_title = "Por favor seleccione outro idioma, plataforma ou versão.";
l10n.dl_langpack_link_error_text = "Não há pacote de idioma disponível";
l10n.dl_langpack_link_error_title = "Por favor seleccione outro idioma, plataforma ou versão.";

l10n.dl_error_problem_img_title = "O ficheiro de transferência seleccionado não está disponível";
l10n.dl_error_problem_img_src = "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt = "Texto de erro";
l10n.dl_error_problem_text = "Problema: ";
l10n.dl_error_solution_text = "Solução: ";
l10n.dl_error_aoo_text = "Apache OpenOffice ";
l10n.dl_error_not_available_for_text = " não está disponível para ";
l10n.dl_error_please_select_1_text = "Por favor seleccione a versão 4.0.1.";
l10n.dl_error_please_select_2_text = "Por favor selecione a versão 4.1.0 ou mais recente.";
l10n.dl_error_please_select_3_text = "Por favor seleccione uma transferência para Windows, MacOS (OS&nbsp:X) ou Linux.";
l10n.dl_error_please_select_4_text = "Por favor seleccione outro idioma ou versão.";

l10n.dl_unknown_platform_text = "Sistema operativo/plataforma desconhecidos";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text = "Como reportar uma ligação de transferência quebrada?";
l10n.dl_analyze_instruction_select_text = "<b>Seleccione os seus favoritos</b>: sistema operativo, idioma e versão no verde abaixo.";
l10n.dl_analyze_instruction_verify_text = "Verifique que estas opções <b>também não</b> conduzem a ligações válidas.";
l10n.dl_analyze_instruction_click_text = "Clique no botão abaixo da caixa verde:";
l10n.dl_analyze_instruction_copy_text = "Copie os dados seleccionados para a área de transferência:";
l10n.dl_analyze_instruction_new_mail_text = "Crie uma nova mensagem de correio.";
l10n.dl_analyze_instruction_problem_text = "<b>Escreva uma descrição do problema</b> (o que não trabalha e o que espera).";
l10n.dl_analyze_instruction_details_text = "Por favor, adicione <b>detalhes acerca do sistema operativo</b>.";
l10n.dl_analyze_instruction_paste_text = "Cole os dados copiados no final da mensagem.";
l10n.dl_analyze_instruction_only_download_text = "Por favor, <b>envie a mensagem só no caso de problemas de transferências</b>, não por problemas de instalação.";
l10n.dl_analyze_instruction_no_install_text = "Esta página não pode ajudar em nada com problemas de instalação.";
l10n.dl_analyze_instruction_send_mail_text = "Finalmente, <b>envie a mensagem</b> para: ";
l10n.dl_analyze_instruction_mailing_list_text = "Lista de correio de desenvolvimento do Apache OpenOffice";
l10n.dl_analyze_instruction_mailing_list_title = "Envie o relatório para a lista de correio dos programadores do Apache OpenOffice";
l10n.dl_analyze_instruction_learn_more_text = "Clique aqui para saber mais acerca do que é uma lista de correio";
l10n.dl_analyze_instruction_learn_more_title = "Saiba mais acerca do que é uma lista de correio";
l10n.dl_analyze_instruction_answer_text = "Tentaremos responder o mais depressa possível, assim que recebermos a mensagem e tivermos analisado o problema.";
l10n.dl_analyze_instruction_thanks_text = "Obrigado pelo seu relatório.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text = "Clique para actualizar a tabela";
l10n.dl_analyze_update_button_title = "Ponha as opções seleccionadas como valores na tabela abaixo";
l10n.dl_analyze_select_button_text = "Clique para seleccionar a tabela";
l10n.dl_analyze_select_button_title = "Seleccione todos os dados na tabela abaixo";
l10n.dl_analyze_copy_button_text = "Copie com [Ctrl] + [C]";
l10n.dl_analyze_copy_button_title = "Copie os dados seleccionados na tabela com [Ctrl] + [C] para a área de transferência";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_problem_text1 = "Descrição do problema";
l10n.dl_analyze_table_problem_text2 = "Altere este texto para descrever o problema <br /><br />(o que não funciona, o que é que esperava?)";
l10n.dl_analyze_table_browser_text = "Variáveis do navegador";
l10n.dl_analyze_table_values_text = "Valores";
l10n.dl_analyze_table_yes_text = "Sim";
l10n.dl_analyze_table_no_text = "Não";
l10n.dl_analyze_table_stable_release_text = "Versão estável";
l10n.dl_analyze_table_javascript_text = "Funções/variáveis&nbspJavaScript";

// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo419_link = "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.9+Release+Notes";
l10n.dl_rel_notes_aoo418_link = "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.8+Release+Notes";
l10n.dl_rel_notes_aoo417_link = "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.7+Release+Notes";
l10n.dl_rel_notes_aoo416_link = "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.6+Release+Notes";
l10n.dl_rel_notes_aoo415_link = "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=75956243";
l10n.dl_rel_notes_aoo414_link = "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.4+Release+Notes";
l10n.dl_rel_notes_aoo413_link = "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=67637506";
l10n.dl_rel_notes_aoo412_link = "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=61325837";
l10n.dl_rel_notes_aoo411_link = "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=44996063";
l10n.dl_rel_notes_aoo410_link = "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=40507275";
l10n.dl_rel_notes_aoo401_link = "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=34832624";
l10n.dl_rel_notes_aoo400_link = "https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=34022669";
l10n.dl_help_link = "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link = "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link = "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link = "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link = "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link = "https://www.openoffice.org/download/other-341.html";
