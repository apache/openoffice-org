function getBrowserLanguage() {
	var languageinfo = navigator.language ? navigator.language : navigator.userLanguage;
	if (languageinfo.indexOf("ar") > -1) {
	  document.getElementById("language").selectedIndex = 1;
	  document.getElementById("language").value="Arabic";
	} else if (languageinfo.indexOf("eu") > -1) {
	  document.getElementById("language").selectedIndex = 2;
	  document.getElementById("language").value = "Basque";
	} else if (languageinfo.indexOf("bn") > -1) {
	  document.getElementById("language").selectedIndex = 3;
	  document.getElementById("language").value = "Bengali";
	} else if (languageinfo.indexOf("bg") > -1) {
	  document.getElementById("language").selectedIndex = 4;
	  document.getElementById("language").value = "Bulgarian";
	} else if (languageinfo.indexOf("ca") > -1) {
	  document.getElementById("language").selectedIndex = 5;
	  document.getElementById("language").value = "Catalan";
	} else if (languageinfo.indexOf("cs") > -1) {
	  document.getElementById("language").selectedIndex = 6;
	  document.getElementById("language").value = "Czech";
	} else if (languageinfo.indexOf("ch-ZH") > -1) {
	  document.getElementById("language").selectedIndex = 7;
	  document.getElementById("language").value = "Chinese (ch-zh)";
	} else if (languageinfo.indexOf("ch-TW") > -1) {
	  document.getElementById("language").selectedIndex = 8;
	  document.getElementById("language").value = "Chinese (ch-tw)";
	} else if (languageinfo.indexOf("hr") > -1) {
	  document.getElementById("language").selectedIndex = 9;
	  document.getElementById("language").value = "Croatian";
	} else if (languageinfo.indexOf("da") > -1) {
	  document.getElementById("language").selectedIndex = 10;
	  document.getElementById("language").value = "Danish";
	} else if (languageinfo.indexOf("nl") > -1) {
	  document.getElementById("language").selectedIndex = 11;
	  document.getElementById("language").value = "Dutch";
	} else if (languageinfo.indexOf("en-GB") > -1) {
	  document.getElementById("language").selectedIndex = 12;
	  document.getElementById("language").value = "EN-GB";
	} else if (languageinfo.indexOf("en") > -1) {
	  document.getElementById("language").selectedIndex = 13;
	  document.getElementById("language").value = "English";
	} else if (languageinfo.indexOf("et") > -1) {
	  document.getElementById("language").selectedIndex = 14;
	  document.getElementById("language").value = "Estonian";
	} else if (languageinfo.indexOf("fi") > -1) {
	  document.getElementById("language").selectedIndex = 15;
	  document.getElementById("language").value = "Finnish";
	} else if (languageinfo.indexOf("fr") > -1) {
	  document.getElementById("language").selectedIndex = 16;
	  document.getElementById("language").value = "French";
	} else if (languageinfo.indexOf("de") > -1) {
	  document.getElementById("language").selectedIndex = 17;
	  document.getElementById("language").value = "German";
	} else if (languageinfo.indexOf("el") > -1) {
	  document.getElementById("language").selectedIndex = 18;
	  document.getElementById("language").value = "Greek";
	} else if (languageinfo.indexOf("he") > -1) {
	  document.getElementById("language").selectedIndex = 19;
	  document.getElementById("language").value = "Hebrew";
	} else if (languageinfo.indexOf("hi") > -1) {
	  document.getElementById("language").selectedIndex = 20;
	  document.getElementById("language").value = "Hindi";
	} else if (languageinfo.indexOf("hu") > -1) {
	  document.getElementById("language").selectedIndex = 21;
	  document.getElementById("language").value = "Hungarian";
	} else if (languageinfo.indexOf("it") > -1) {
	  document.getElementById("language").selectedIndex = 22;
	  document.getElementById("language").value = "Italian";
	} else if (languageinfo.indexOf("ja") > -1) {
	  document.getElementById("language").selectedIndex = 23;
	  document.getElementById("language").value = "Japanese";
	} else if (languageinfo.indexOf("km") > -1) {
	  document.getElementById("language").selectedIndex = 24;
	  document.getElementById("language").value = "Khmer";
	} else if (languageinfo.indexOf("ko") > -1) {
	  document.getElementById("language").selectedIndex = 25;
	  document.getElementById("language").value = "Korean";
	} else if (languageinfo.indexOf("lo") > -1) {
	  document.getElementById("language").selectedIndex = 26;
	  document.getElementById("language").value = "Laotian";
	} else if (languageinfo.indexOf("mk") > -1) {
	  document.getElementById("language").selectedIndex = 27;
	  document.getElementById("language").value = "Macedonian";
	} else if (languageinfo.indexOf("ms") > -1) {
	  document.getElementById("language").selectedIndex = 28;
	  document.getElementById("language").value = "Malaysian";
	} else if (languageinfo.indexOf("no") > -1) {
	  document.getElementById("language").selectedIndex = 29;
	  document.getElementById("language").value = "Norwegian";
	} else if (languageinfo.indexOf("pl") > -1) {
	  document.getElementById("language").selectedIndex = 30;
	  document.getElementById("language").value = "Polish";
	} else if (languageinfo.indexOf("pt") > -1) {
	  document.getElementById("language").selectedIndex = 31;
	  document.getElementById("language").value = "Portugese";
	} else if (languageinfo.indexOf("pt-BR") > -1) {
	  document.getElementById("language").selectedIndex = 32;
	  document.getElementById("language").value = "PT_BR";
	} else if (languageinfo.indexOf("ro") > -1) {
	  document.getElementById("language").selectedIndex = 33;
	  document.getElementById("language").value = "Romanian";
	} else if (languageinfo.indexOf("ru") > -1) {
	  document.getElementById("language").selectedIndex = 34;
	  document.getElementById("language").value = "Russian";
	} else if (languageinfo.indexOf("sr") > -1) {
	  document.getElementById("language").selectedIndex = 35;
	  document.getElementById("language").value = "Serbian";
	} else if (languageinfo.indexOf("sk") > -1) {
	  document.getElementById("language").selectedIndex = 36;
	  document.getElementById("language").value = "Slovak";
	} else if (languageinfo.indexOf("sl") > -1) {
	  document.getElementById("language").selectedIndex = 37;
	  document.getElementById("language").value = "Slovenian";
	} else if (languageinfo.indexOf("es") > -1) {
	  document.getElementById("language").selectedIndex = 38;
	  document.getElementById("language").value = "Spanish";
	} else if (languageinfo.indexOf("sv") > -1) {
	  document.getElementById("language").selectedIndex = 39;
	  document.getElementById("language").value = "Swedish";
	} else if (languageinfo.indexOf("ta") > -1) {
	  document.getElementById("language").selectedIndex = 40;
	  document.getElementById("language").value = "Tamil";
	} else if (languageinfo.indexOf("th") > -1) {
	  document.getElementById("language").selectedIndex = 41;
	  document.getElementById("language").value = "Thai";
	} else if (languageinfo.indexOf("tr") > -1) {
	  document.getElementById("language").selectedIndex = 42;
	  document.getElementById("language").value = "Turkish";
	} else if (languageinfo.indexOf("vi") > -1) {
	  document.getElementById("language").selectedIndex = 43;
	  document.getElementById("language").value = "Vietnamese";
	} else if (languageinfo.indexOf("cy") > -1) {
	  document.getElementById("language").selectedIndex = 44;
	  document.getElementById("language").value = "Welsh";
	}
}

function getBrowserPlatform() {
	if (navigator.userAgent.indexOf("Windows") > -1) {
		if (navigator.javaEnabled()) {
			document.getElementById("platform").selectedIndex = 2;
			document.getElementById("platform").value="windows"
		} else {
			document.getElementById("platform").selectedIndex = 1;
			document.getElementById("platform").value="windowsjre"
		}
	} else if (navigator.userAgent.indexOf("Linux") > -1) {
		if (navigator.userAgent.indexOf("PPC") > -1) {
			document.getElementById("platform").selectedIndex = 5;
			document.getElementById("platform").value="ppclinux"
		} else if (navigator.javaEnabled()) {
			document.getElementById("platform").selectedIndex = 4;
			document.getElementById("platform").value="linux"
		} else {
			document.getElementById("platform").selectedIndex = 3;
			document.getElementById("platform").value="windowsjre"
		}
	} else if (navigator.userAgent.indexOf("Mac") > -1) {
		if (navigator.userAgent.indexOf("PPC") > -1) {
			document.getElementById("platform").selectedIndex = 11;
			document.getElementById("platform").value = "mac";
		} else if (navigator.userAgent.indexOf("Intel") > -1) {
			document.getElementById("platform").selectedIndex = 12;
			document.getElementById("platform").value = "macIntel";
		}
	} else if (navigator.userAgent.indexOf("FreeBSD") > -1) {
	  document.getElementById("platform").selectedIndex = 10;
	  document.getElementById("platform").value = "freebsd";
	} else if (navigator.userAgent.indexOf("Solaris") > -1) {
		if (navigator.userAgent.indexOf("Intel") > -1) {
			if (navigator.javaEnabled()) {
				document.getElementById("platform").selectedIndex = 9;
				document.getElementById("platform").value="solarisIntel"
			} else {
				document.getElementById("platform").selectedIndex = 8;
				document.getElementById("platform").value="solarisInteljre"
			}
		} else {
			if (navigator.javaEnabled()) {
				document.getElementById("platform").selectedIndex = 7;
				document.getElementById("platform").value="solaris"
			} else {
				document.getElementById("platform").selectedIndex = 6;
				document.getElementById("platform").value="solarisjre"
			}
		}
	}
}

window.onload = function () {
	getBrowserLanguage();
	getBrowserPlatform();
}