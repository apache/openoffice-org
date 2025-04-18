  <div id="${content.divid}">
  <div id="languagesdiv">
	${content.language}
	<select id="selectlanguage" onchange="javascript:location.href=location.protocol+'//'+location.host+'/'+this.value;">
	<!-- Asturian --><option value="ast">Asturianu (ast)</option>
	<!-- Catalan --><option value="ca">Català (ca)</option>
	<!-- Czech --><option value="cs">Čeština (cs)</option>
	<!-- Danish --><option value="da">Dansk (da)</option>
	<!-- German --><option value="de">Deutsch (de)</option>
	<!-- English [British]<option value="en-gb">English [British] (en-GB)</option> -->
	<!-- English [US] --><option value="?redirect=soft" selected="selected">English [US] (en-US)</option>
	<!-- Spanish --><option value="es">Español (es)</option>
	<!-- Esperanto --><option value="eo">Esperanto (eo)</option>
	<!-- Estonian --><option value="et">Eesti keel (et)</option>
	<!-- Basque --><option value="eu">Euskara (eu)</option>
	<!-- French --><option value="fr">Français (fr)</option>
	<!-- Scottish --><option value="gd">Gàidhlig (gd)</option>
	<!-- Galician --><option value="gl">Galego (gl)</option>
	<!-- Italian --><option value="it">Italiano (it)</option>
	<!-- Lithuanian --><option value="lt">Lietuvių (lt)</option>
	<!-- Hungarian --><option value="hu">Magyar (hu)</option>
	<!-- Dutch --><option value="nl">Nederlands (nl)</option>
	<!-- Norwegian --><option value="no">Norsk (no)</option>
	<!-- Polish --><option value="pl">Polski (pl)</option>
	<!-- Portuguese [Brazilian] --><option value="pt-br">Português [do Brasil] (pt-BR)</option>
	<!-- Portuguese [European] --><option value="pt">Português [Europeu] (pt)</option>
	<!-- Romanian --><option value="ro">Română (ro)</option>
	<!-- Slovak --><option value="sk">Slovenčina (sk)</option>
	<!-- Slovenian --><option value="sl">Slovenščina (sl)</option>
	<!-- Finnish --><option value="fi">Suomi (fi)</option>
	<!-- Swedish --><option value="sv">Svenska (sv)</option>
	<!-- Ukrainian --><option value="uk">Yкраїнська (uk)</option>
	<!-- Vietnamese --><option value="vi">Tiếng Việt (vi)</option>
	<!-- Turkish --><option value="tr">Türkçe (tr)</option>
	<!-- Oromo --><option value="om">ኦሮሚኛ (om)</option>
	<!-- Armenian --><option value="hy">Հայերեն (hy)</option>
	<!-- Greek --><option value="el">Ελληνικά (el)</option>
	<!-- Bulgarian --><option value="bg">български език (bg)</option>
	<!-- Russian --><option value="ru">Русский (ru)</option>
	<!-- Serbian [Cyrillic] --><option value="sr">Cрпски [ћирилицом] (sr)</option>
	<!-- Arabic <option value="ar">العربية (ar)</option> -->
	<!-- Hebrew --><option value="he">עברית (he)</option>
	<!-- Hindi --><option value="hi">हिन्दी (hi)</option>
	<!-- Khmer --><option value="km">ភាសាខ្មែរ (km)</option>
	<!-- Tamil --><option value="ta">தமிழ் (ta)</option>
	<!-- Thai --><option value="th">ภาษาไทย (th)</option>
	<!-- Chinese [simplified] --><option value="zh-cn">简体中文 (zh-CN)</option>
	<!-- Chinese [traditional] --><option value="zh-tw">正體中文 (zh-TW)</option>
	<!-- Japanese --><option value="ja">日本語 (ja)</option>
	<!-- Korean --><option value="ko">한국어 (ko)</option>
	</select>
	<script>
	  var lang = "${content.selectedlang}";
	  var dropdown = document.getElementById('selectlanguage');
	  var options = dropdown.options;
	  for( var i = 0; i < dropdown.options.length; i++ ) {
	    if( dropdown.options[ i ].value == lang ) {
	      dropdown.selectedIndex = i;
	      break;
	    }
	  }
	</script>
  </div>
  <div id="bannerleft"><a title="Apache OpenOffice" href="/"><img id="ooo-logo" alt="${content.name}" src="/images/${content.logo}"/></a></div>
    <div id="bannerright">
      <div id="searchdiv">
	<form id="cse-search-box-header" action="https://www.google.com/search" method="get">
	  <div>
	    <input type="hidden" name="domains" value="${content.domain}"/>
	    <input type="hidden" name="sitesearch" value="${content.domain}"/>
	  </div>
	  <div class="topsrchbox">
	    <input name="resultsPerPage" value="40" type="hidden"/>
	    <input name="q" id="query" type="text" title="search query"/>
	    <input name="Button" value="${content.search}" type="submit" class="topsrchbutton"/>
	  </div>
	</form>
      </div>
    </div>
    <div id="bannercenter"><br/>${content.tagline}</div>
  </div>

<!-- The version number must no longer be part of every localized "brand.md" in order to change the data only in a single place: here. -->
<div id="announce"><a href="https://openoffice.apache.org/blog/announcing-apache-openoffice-4-1-15.html" title="${content.announcetip} 4.1.15">${content.announce} 4.1.15</a></div>
