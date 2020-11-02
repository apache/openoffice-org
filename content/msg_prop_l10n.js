/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:   "Download Apache OpenOffice"
 * Correct: l10n.index_redirect_text
 */



// Object that contains all following properties (variables).
var l10n = new Object();

// The following variables are used in the "index.html" file:

// Graphic, text and links to show inside the event box.
									// "true" = Show the box, "false" = Do not show.
l10n.index_event_box_show			= false;
									// Logo graphic.
l10n.index_event_box_graphic_src		= "https://blogs.apache.org/foundation/mediaresource/81eec8fa-2848-4405-9ce2-40c16a9f7170";
									// Alternative text for the graphic.
l10n.index_event_box_graphic_alt		= "The Apache® Software Foundation Celebrates 20 Years of Community-led Development 'The Apache Way'";
									// Make the graphic clickable with a link.
l10n.index_event_box_graphic_href		= "https://blogs.apache.org/foundation/entry/the-apache-software-foundation-celebrates1";
									// The height in pixel of the graphic. Leave empty to use the height of the original graphic.
l10n.index_event_box_graphic_height		= "175";
									// The width in pixel of the graphic. Leave empty to use the width of the original graphic.
l10n.index_event_box_graphic_width		= "375";
									// Mouse over text for the graphic.
l10n.index_event_box_graphic_title		= "";
									// Make the whole box clickable with a link.
l10n.index_event_box_text_href			= "https://blogs.apache.org/foundation/entry/the-apache-software-foundation-celebrates1";
									// Maximum 630 characters.
l10n.index_event_box_text_text			= "<b>The Apache® Software Foundation Celebrates 20 Years of Community-led Development 'The Apache Way'</b><br /><br />World's largest Open Source foundation provides $20B+ worth of software for the public good at 100% no cost; Apache software used in every Internet-connected country on the planet.<br /><br /><b>Wakefield, MA —26 March 2019— </b> The Apache Software Foundation (ASF), the all-volunteer developers, stewards, and incubators of more than 350 Open Source projects and initiatives, announced today its 20th Anniversary, celebrating 'The Apache Way' of community-driven development as the key to its success.<br /><b><i> Click here for details ...</i></b>";
									// Mouse over text for the text.
l10n.index_event_box_text_title			= "The Apache® Software Foundation Celebrates 20 Years of Community-led Development 'The Apache Way'";

// Text and link to show inside the alert box.
									// "true" = Show the box, "false" = Do not show.
l10n.index_alert_box_show			= false;
									// Make the whole box clickable with a link.
l10n.index_alert_box_href			= "https://www.google.com";
									// Maximum 49 characters.
l10n.index_alert_box_headline_text		= "Headline text with max. 49 characters";
									// Mover over text for the headline.
l10n.index_alert_box_headline_title		= "Mover over title text for the headline.";
									// Maximum 630 characters.
l10n.index_alert_box_text_text			= "Text with max. 630 characters. <br /><br /> Use this alert box to announce any important messages or problems. <br /><br /> This whole alert box can be linked with an URL to point the user to more information or to a solution. But the link can also be left out. Then the box is not clickable.";
									// Mouse over text for the text.
l10n.index_alert_box_text_title			= "Mouse over title text for the text.";

// Flag how to redirect and if text should be displayed.
// "none" = no redirect, no text shown - "soft" = redirect, text shown - "hard" = redirect, no text shown.
l10n.index_redirect_text			= [ /* ast */	"none", "This site is also available in <b>Asturianu (ast)</b>. Just click this text to get redirected.",
						    /* eu */	"none", "This site is also available in <b>Euskara (eu)</b>. Just click this text to get redirected.",
						    /* bg */	"none", "This site is also available in <b>български език (bg)</b>. Just click this text to get redirected.",
						    /* ca */	"none", "This site is also available in <b>Català (ca)</b>. Just click this text to get redirected.",
						    /* ca-XV */	"none", "This site is also available in <b>Català (Valencià RACV) (ca-XV)</b>. Just click this text to get redirected.",
						    /* ca-XR */	"none", "This site is also available in <b>Català (Valencià AVL) (ca-XR)</b>. Just click this text to get redirected.",
						    /* zh-CN */	"none", "This site is also available in <b>简体中文 (zh-CN)</b>. Just click this text to get redirected.",
						    /* zh-TW */	"none", "This site is also available in <b>正體中文 (zh-TW)</b>. Just click this text to get redirected.",
						    /* cs */	"none", "This site is also available in <b>Čeština (cs)</b>. Just click this text to get redirected.",
						    /* da */	"soft", "Denne side er også tilgængelig på <b>Dansk (da)</b>. Bare klik på teksten for at blive omdirigeret.",
						    /* nl */	"none", "This site is also available in <b>Nederlands (nl)</b>. Just click this text to get redirected.",
						    /* en-GB */	"none", "This site is also available in <b>English (en-GB)</b>. Just click this text to get redirected.",
						    /* en-US */	"none", "This site is also available in <b>English (en-US)</b>. Just click this text to get redirected.",
						    /* fi */	"soft", "Sivusto on saatavilla myös <b>suomeksi (fi)</b>. Napauta tästä suomenkieliseen versioon.",
						    /* fr */	"none", "This site is also available in <b>Français (fr)</b>. Just click this text to get redirected.",
						    /* gl */	"none", "This site is also available in <b>Galego (gl)</b>. Just click this text to get redirected.",
						    /* de */	"soft", "Diese Webseite gibt es auch in <b>Deutsch (de)</b>. Einfach auf diesen Text klicken, um weitergeleitet zu werden.",
							/* et */	"soft", "See lehekülg on saadaval ka <b>eesti keeles (et)</b>. Lihtsalt kliki sellel tekstil ja sind suunatakse ümber.",
						    /* el */	"none", "This site is also available in <b>ελληνικά (el)</b>. Just click this text to get redirected.",
						    /* he */	"soft", "This site is also available in <b>עברית (he)</b>. Just click this text to get redirected.",
						    /* hi */	"none", "This site is also available in <b>हिन्दी (hi)</b>. Just click this text to get redirected.",
						    /* hu */	"none", "This site is also available in <b>Magyar (hu)</b>. Just click this text to get redirected.",
						    /* it */	"soft", "Questo sito è disponibile anche in <b>Italiano (it)</b>. Fare clic qui per visualizzare la versione italiana.",
						    /* ja */	"none", "This site is also available in <b>日本語 (ja)</b>. Just click this text to get redirected.",
						    /* km */	"none", "This site is also available in <b>ភាសាខ្មែរ (km)</b>. Just click this text to get redirected.",
						    /* ko */	"soft", "이 웹사이트는 <b>한국어(ko)</b>로도 이용할 수 있습니다. 여기를 클릭하면 한국어 웹사이트로 이동합니다.",
						    /* lt */	"hard", "Spustelėjus laukelį, tinklalapį bus galima skaityti <b>lietuviškai</b>.",
						    /* no */	"soft", "Dette nettstedet er også tilgjengelig på <b>norsk (no)</b>. Klikk denne teksten for å bli videresendt.",
						    /* pl */	"soft", "Ta strona jest dostępna po <b>Polsku (pl)</b>. Po prostu kliknij ten tekst aby tam przejść.",
						    /* pt-BR */	"none", "Este site também está disponível em <b>Português [do Brasil] (pt-BR)</b>. Clique neste texto para ser redirecionado.",
						    /* pt */	"soft", "Este site também está disponível em <b>Português [Europeu] (pt)</b>. Clique neste texto para ser redirecionado.",
						    /* ru */	"none", "This site is also available in <b>Русский (ru)</b>. Just click this text to get redirected.",
						    /* gd */	"none", "This site is also available in <b>Gàidhlig (gd)</b>. Just click this text to get redirected.",
						    /* sr */	"none", "This site is also available in <b>Cрпски [ћирилицом] (sr)</b>. Just click this text to get redirected.",
						    /* sk */	"none", "This site is also available in <b>Slovenský jazyk [slovenčina] (sk)</b>. Just click this text to get redirected.",
						    /* sl */	"none", "This site is also available in <b>Slovenski jezik [slovenščina] (sl)</b>. Just click this text to get redirected.",
						    /* es */	"none", "This site is also available in <b>Español (es)</b>. Just click this text to get redirected.",
						    /* sv */	"soft", "Denna webbplats finns också på <b>Svenska (sv)</b>. Klicka bara på den här texten för att bli omdirigerad.",
						    /* ta */	"none", "This site is also available in <b>தமிழ் (ta)</b>. Just click this text to get redirected.",
						    /* th */	"none", "This site is also available in <b>ภาษาไทย (th)</b>. Just click this text to get redirected.",
						    /* tr */	"soft", "Bu site ayrıca <b>Türkçe (tr)</b> olarak mevcuttur. Yeniden yönlendirilmek için sadece bu metine tıklayın.",
						    /* vi */	"none", "This site is also available in <b>Tiếng Việt (vi)</b>. Just click this text to get redirected." ];

