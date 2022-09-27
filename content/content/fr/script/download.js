/* first element: redir will redirect to contributing page, then to url, here
 * will offer the download here and skip will directly go to the NL-page
 * (nl-group has its own contributing page */

 
 
 
 
 
/* skip for all, since contributing-page doesn't redirect anymore... */
var languages = {
"ar": {"-": ['skip', 'Arabic',              'http://ar.openoffice.org/']}, 
"eu": {"-": ['skip', 'Basque',              'http://eu.openoffice.org/index.html']},
"bn": {"-": ['skip', 'Bengali',             'http://bn.openoffice.org/index.html']}, 
"bg": {"-": ['skip', 'Bulgarian',           'http://bg.openoffice.org/index.html']}, 
"ca": {"-": ['skip', 'Catalan',             'http://www.softcatala.org/projectes/openoffice/']}, 
"cs": {"-": ['skip', 'Cesky',               'http://cs.openoffice.org/']}, 
"zh": {"-": ['skip', 'Chinese',             'http://zh.openoffice.org/downloads.html']},  
"hr": {"-": ['skip', 'Croatian',            'http://hr.openoffice.org/']}, 
"da": {"-": ['skip', 'Danish',              'http://da.openoffice.org/']}, 
"nl": {"-": ['skip', 'Dutch',               'http://nl.openoffice.org/downloaden.html']}, 
"en": {"-": ['here',  'US English',          ''],
"gb": ['skip', 'British English',     'http://l10n.openoffice.org/download/en-GB.html'],
"us": ['here',  'US English',          '']}, 
"et": {"-": ['skip', 'Estonian',            'http://openoffice.offline.ee']}, 
/*"fr": {"-": ['skip', 'French',              'http://fr.openoffice.org/about-downloads.html']}, */
"fr": {"-": ['here', 'French',              '']}, 
"de": {"-": ['skip',  'German',              'http://de.openoffice.org/downloads/quick.html']}, 
"el": {"-": ['skip', 'Greek',               'http://el.openoffice.org']}, 
"he": {"-": ['skip', 'Hebrew',              'http://www.openoffice.org.il/']}, 
"hi": {"-": ['skip', 'Hindi',               'http://hi.openoffice.org/about-downloads.html']}, 
"hu": {"-": ['skip', 'Hungarian',           'http://hu.openoffice.org/about-downloads.html']}, 
"it": {"-": ['skip', 'Italian',             'http://it.openoffice.org/download/']}, 
"ja": {"-": ['skip', 'Japanese',            'http://ja.openoffice.org/']}, 
"km": {"-": ['skip', 'Khmer',               'http://km.openoffice.org/']}, 
"ko": {"-": ['skip', 'Korean',              'http://ko.openoffice.org/']}, 
"lo": {"-": ['skip', 'Laotian',             'http://lo.openoffice.org/']}, 
"mk": {"-": ['skip', 'Macedonian',          'http://mk.openoffice.org/']}, 
"ms": {"-": ['skip', 'Malaysian',           'http://ms.openoffice.org/']}, 
"no": {"-": ['skip', 'Norwegian',           'http://no.openoffice.org/']}, 
"pl": {"-": ['skip', 'Polish',              'http://pl.openoffice.org/product.download.html']}, 
"pt": {"-":  ['skip', 'Português',           'http://pt.openoffice.org/'], 
"pt": ['skip', 'Português',           'http://pt.openoffice.org/'], 
"br": ['skip', 'Português do Brasil', 'http://br-pt.openoffice.org/']}, 
"ro": {"-": ['skip', 'Romana',              'http://ro.openoffice.org/']}, 
"ru": {"-": ['skip', 'Russian',             'http://ru.openoffice.org']}, 
"sr": {"-": ['skip', 'Serbian',             'http://sr.openoffice.org/']}, 
"sk": {"-": ['skip', 'Slovak',              'http://sk.openoffice.org/']}, 
"sl": {"-": ['skip', 'Slovenian',           'http://sl.openoffice.org/']}, 
"fi": {"-": ['skip', 'Suomi',               'http://fi.openoffice.org/lataa.html']}, 
"es": {"-": ['skip', 'Spanish',             'http://es.openoffice.org/programa/']}, 
"sv": {"-": ['skip', 'Swedish',             'http://sv.openoffice.org/']}, 
"ta": {"-": ['skip', 'Tamil',               'http://ta.openoffice.org/']},
"th": {"-": ['skip', 'Thai',                'http://th.openoffice.org/about-downloads.html']}, 
"tr": {"-": ['skip', 'Turkish',             'http://tr.openoffice.org/about-downloads.html']}, 
"vi": {"-": ['skip', 'Vietnamese',          'http://vi.openoffice.org']}, 
"cy": {"-": ['skip', 'Welsh',               'http://cy.openoffice.org/index.html']}
};

function informNativeLanguage() {
  var language = "";
  if (navigator.language)
    language = navigator.language;
  else if (navigator.userLanguage)
    language = navigator.userLanguage;
  else if (navigator.systemLanguage)
    language = navigator.systemLanguage;
  
  // Convert "en" to "en-US" as well since en-US build is the canonical
  // translation, and thus better tested.
  if (language == "" || language == "en")
    language = "fr";
  
  // Konqueror uses '_' where other browsers use '-'.
  if (language.indexOf("_") != -1) language = language.split("_").join("-");
  
  language = language.toLowerCase();
  var languageCode = language.split("-")[0];
  var regionCode = language.split("-")[1];
  
  thisLanguageSet = languages[languageCode];
//  alert (languageCode + regionCode);
  if (thisLanguageSet.length > 1) {
    if (thisLanguageSet[regionCode] != null) {
      thisLanguage = thisLanguageSet[regionCode];
    }
    else {
      thisLanguage = thisLanguageSet["-"]
    }
  } else {
    thisLanguage = thisLanguageSet["-"];
  };
  if (languageCode != "en" && regionCode != "us"){
    document.writeln("You might be interested in the <a href=\""+thisLanguage[2]+"\">" + thisLanguage[1] + "</a> version.");
  } 
};

function writeJavaSelector() {
  //document.writeln("<form action=\"\" method=\"\" name=\"downloadSettings\"><p style=\"\"><input type=\"checkbox\" onclick=\"updateHREFs()\" checked=\"checked\" name=\"cbIncludeJRE\" id=\"cbIncludeJRE\" />");
  //document.writeln("<label for=\"cbIncludeJRE\">Include the Java JRE with this download</label></p>");
  //document.writeln("</form>");
}

function updateHREFs() {
  var qabuildsul = document.getElementById("qabuilds");
  var anchorsToBouncer = document.getElementsByTagName("a");

  if (document.downloadSettings.cbIncludeJRE.checked == false) {
  for (var i = 0; i < anchorsToBouncer.length; i++) {
     anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("wjre&amp;lang=","&amp;lang=");
     anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("wjre&lang=","&lang=");
        }
  } else {
  for (var i = 0; i < anchorsToBouncer.length; i++) {
     //we cannot assume that it is always right, and in order to prevent wjrewjrewjre&... this (should) solve(s) it...
     anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("wjre&amp;lang=","&amp;lang=");
     anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("wjre&lang=","&lang=");
     //and now we add them :)
     anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("&amp;lang=","wjre&amp;lang=");
     anchorsToBouncer[i].href = anchorsToBouncer[i].href.replace("&lang=","wjre&lang=");
        }
  }
}


function continueToDownload(uri) {
  uri=uri.replace("http://openoffice.bouncer.osuosl.org/","");
  //bonuscheck... noone gets hurt...
  //if (document.downloadSettings.cbIncludeJRE.checked == false) {
//  uri=uri.replace("wjre","");
//  }
  document.location = "about-downloads-contrib.html"+uri;
}

function openItem(itemid,uri) {
  var thisDocument = document.getElementById("downloadextendedtext");
  var thisDocument = document.getElementById(itemid);

  if (itemid=="optionitem1") {
      var thisContent = document.getElementById("downloadextendedtext");
    // expand the block
      thisContent.style.display = "block"
    thisDocument.style.cursor = "default"
    thisDocument.onclick = null;
  } else  {
    // reset the input
    document.getElementById("optionitem1").onclick = "openItem('optionitem1',null)";
    document.location = uri;
  }
  //return false;
};

function makeDownloadLIintoButtons() {
  var downloadextendedtext = document.getElementById("downloadextendedtext");
  var liItems = downloadextendedtext.getElementsByTagName("li");

  for (var i = 0; i < liItems.length; i++) {
    var liItemsAnchors = liItems[i].getElementsByTagName("a");
    if (liItemsAnchors.length == 1) {
      var hrefcontents = liItemsAnchors[0].href;
      if (hrefcontents.search("bouncer") > -1) {
        liItems[i].onclick = function () {
          var myHref = this.getElementsByTagName("a")[0].href;
          continueToDownload(myHref);
          return false;
        };
      } else {
        liItems[i].onclick = function () {
          var myHref = this.getElementsByTagName("a")[0].href;
          document.location = myHref;
          return false;
        };
      }
      liItems[i].style.cursor = "pointer";
    }
  }
}
