var langCode = getBrowserLanguage();

function getBrowserLanguage() {
	var language = "";
	if (navigator.language) {
    	language = navigator.language;
  	} else if (navigator.userLanguage) {
    	language = navigator.userLanguage;
  	} else if (navigator.systemLanguage) {
    	language = navigator.systemLanguage;
	}

  	if (language == "" || language == "en") {
		language = "en";
	}

	// Konqueror uses '_' where other browsers use '-'.
  	if (language.indexOf("_") != -1) {
		language = language.split("_").join("-");
	}

  	language = language.toLowerCase();
	
	var end = 2;

	if(language.indexOf("-") > 0) {
		end = language.indexOf("-");
	}

	return language.substring(0, end);
}

function write() {	
// Writes appropriate string based on language. Call this method from HTML.
// Excluded Projects (those that are currently under construction): BAL, DZ, KM, MG, MR, MG, MIQ, SG, SHS, SI, TT, TE, TET, TI, URD.
	var langName = null;

	if (langCode == "af") {
		langName = "Afrikaans";
	} else if (langCode == "ar") {
		langName = "العربية";
	} else if (langCode == "az") {
		langName = "Azərbaycan / آذربايجان ديلی";
	} else if (langCode == "bg") {
		langName = "Български";
	} else if (langCode == "bn") {
		langName = "বাংলা";
	} else if (langCode == "bo") {
		langName = "བོད་ཡིག";
	} else if (langCode == "br" || langCode == "bre") {
		langCode = "bre";
		langName = "Brezhoneg";
	} else if (langCode == "bs") {
		langName = "Bosanski";
	} else if (langCode == "ca") {
		langName = "Català";
	} else if (langCode == "cs") {
		langName = "Česky";
	} else if (langCode == "cy") {
		langName = "Cymraeg";
	} else if (langCode == "da") {
		langName = "Dansk";
	} else if (langCode == "de") {
		langName = "Deutsch";
	} else if (langCode == "el") {
		langName = "Ελληνικά";
	} else if (langCode == "eo") {
		langName = "Esperanto";
	} else if (langCode == "es") {
		langName = "Español";
	} else if (langCode == "et") {
		langName = "Eesti";
	} else if (langCode == "eu") {
		langName = "Euskara";
	} else if (langCode == "fa") {
		langName = "فارسی";
	} else if (langCode == "fi") {
		langName = "Suomi";
	} else if (langCode == "fr") {
		langName = "Français";
	} else if (langCode == "fur") {
		langName = "Furlan";
	} else if (langCode == "ga" || langCode == "gle") {
		langCode = "ga"
		langName = "Gaeilge";
	} else if (langCode == "gd" || langCode == "gla") {
		langCode == "gd";
		langName = "Gàidhlig";
	} else if (langCode == "gl") {
		langName = "Galego";
	} else if (langCode == "gu") {
		langName = "ગુજરાતી";
	} else if (langCode == "he") {
		langName = "עברית";
	} else if (langCode == "hi") {
		langName = "हिन्दी";
	} else if (langCode == "hr") {
		langName = "Hrvatski";
	} else if (langCode == "hu") {
		langName = "Magyar";
	} else if (langCode == "hy") {
		langName = "Հայերեն";
	} else if (langCode == "id") {
		langName = "Bahasa Indonesia";
	} else if (langCode == "it") {
		langName = "Italiano";
	} else if (langCode == "ja") {
		langName = "日本語";
	} else if (langCode == "ka") {
		langName = "ქართული";
	} else if (langCode == "ko") {
		langName = "한국어";
	} else if (langCode == "ku") {
		langName = "Kurdî";
	} else if (langCode == "lo") {
		langName = "ພາສາລາວ";
	} else if (langCode == "lt") {
		langName = "Lietuvių";
	} else if (langCode == "lv") {
		langName = "Latviešu";
	} else if (langCode == "mk") {
		langName = "Македонски";
	} else if (langCode == "ml") {
		langName = "മലയാളം";
	} else if (langCode == "mn") {
		langName = "Монгол";
	} else if (langCode == "ms") {
		langName = "Bahasa&nbsp;Melayu";
	} else if (langCode == "my") {
		langName = "ဗမာစာ";
	} else if (langCode == "ne") {
		langName = "नेपाली";
	} else if (langCode == "nl") {
		langName = "Nederlands";
	} else if (langCode == "no" || langCode == "nb" || langCode == "nn") {
		langCode = "no";
		langName = "Norsk (bokmål)";
	} else if (langCode == "pa") {
		langName = "ਪੰਜਾਬੀ / پنجابی";
	} else if (langCode == "pap") {
		langName = "Papiamentu";
	} else if (langCode == "pl" || langCode == "po") {
		langCode = "pl";
		langName = "Polski";
	} else if (langCode == "pt") {
		langName = "Português";
	} else if (langCode == "ro") {
		langName = "Română";
	} else if (langCode == "ru") {
		langName = "Русский";
	} else if (langCode == "sk") {
		langName = "Slovenčina";
	} else if (langCode == "sl") {
		langName = "Slovenščina";
	} else if (langCode == "sr") {
		langName = "српски/srpski";
	} else if (langCode == "sv") {
		langName = "Svenska";
	} else if (langCode == "sq") {
		langName = "Shqip";
	} else if (langCode == "ta") {
		langName = "தமிழ்";
	} else if (langCode == "tg") {
		langName = "Тоҷикӣ";
	} else if (langCode == "th") {
		langName = "ไทย";
	} else if (langCode == "tr") {
		langName = "Türkçe";
	} else if (langCode == "uk" || langCode == "ua") {
		langCode = "uk";
		langName = "Українська";
	} else if (langCode == "uz") {
		langName = "O‘zbek";
	} else if (langCode == "vi") {
		langName = "Tiếng&nbsp;Việt";
	} else if (langCode == "zh") {
		langName = "中文";
	} else {
		// do nothing
	}

	if (langName != null) {
		if(document.getElementById("language-projects")) {
			var languageProjects = document.getElementById("language-projects");
			var newHTML = "<a id='language-projects-link' href='http://" + langCode + ".openoffice.org/'>" + langName + "</a>";
			languageProjects.innerHTML = newHTML;
		}
	}
}
