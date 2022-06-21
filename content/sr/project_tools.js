function appendFooterCyr() {
            var f = document.getElementById('footer');
            if (!f) return null;
            f.innerHTML = '<div id="matflogo"><a href="http://www.matf.bg.ac.rs"><img src="/pics/znakmalin.gif" title="У партнерству са Математичким факултетом у Београду" alt="Знак Математичког факултета у Београду" /></a></div><div id="mtidlogo"><a href="http://www.mtid.gov.rs/%D0%BD%D0%B0%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0.57.html"><img src="/pics/mtid.png" title="Подржава Министарство за телекомуникације и информационо друштво Републике Србије" alt="Знак Министарства за телекомуникације и информационо друштво Републике Србије" /></a></div>' + f.innerHTML;
            localizeHeaderCyr();
}

function appendFooterLat() {
            var f = document.getElementById('footer');
            if (!f) return null;
            f.innerHTML = '<div id="matflogo"><a href="http://www.matf.bg.ac.rs"><img src="/pics/znakmalin.gif" title="U partnerstvu sa Matematičkim fakultetom u Beogradu" alt="Znak Matematičkog fakulteta u Beogradu" /></a></div><div id="mtidlogo"><a href="http://www.mtid.gov.rs"><img src="/pics/mtid.png" title="Podržava Ministarstvo za telekomunikacije i informaciono društvo Republike Srbije" alt="Znak Ministarstva za telekomunikacije i informaciono društvo Republike Srbije" /></a></div>' + f.innerHTML;
            localizeHeaderLat();
}

function localizeHeaderCyr() {
            document.getElementById('language-projects-link').innerHTML = 'на другим језицима';
            var c = document.getElementById('search').childNodes;
            c[c.length-2].value = 'Тражи';
}

function localizeHeaderLat() {
            document.getElementById('language-projects-link').innerHTML = 'na drugim jezicima';
            var c = document.getElementById('search').childNodes;
            c[c.length-2].value = 'Traži';
}

function 
replaceNavLat(replaceNavWithLink) {
    var d = document.getElementById('navigation');
    if (d) {
        c = 
            '<ul>' +
            '    <li class="plain"> <a href="http://sr.openoffice.org/lat/" title="Početna stranica"><span>Početna</span></a> </li>' +
            '    <li class="plain"> <a href="http://sr.openoffice.org/servlets/ProjectNewsList?filterType=simple&filter=[lat]" title="Saznajte šta je novo"><span>Novosti</span></a> </li>' +
            '    <li class="plain"> <a href="http://sr.openoffice.org/lat/preuzmi.html" title="Preuzmite OpenOffice.org"><span>Preuzimanje</span></a> </li>' +
            '    <li class="plain"> <a href="http://sr.openoffice.org/lat/podrska.html" title="Podrška za OpenOffice.org"><span>Podrška</span></a> </li>';

        if(replaceNavWithLink) {
                c += '    <li class="plain"><a href="' + replaceNavWithLink + '" title="Ова страна на ћирилици">';
        }
        else {
            c += '    <li class="plain"><a href="http://sr.openoffice.org/" title="Ове стране на ћирилици">';
        }

        c += '<span>српски (ћирилицом)</span></a></li>' +
             '    <li class="plain"><a href="http://www.openoffice.org" title="Glavne strane projekta OpenOffice.org u svetu (engl.)"><span>OpenOffice.org u svetu</span></a></li>' +
             '</ul>';

        d.innerHTML = c;
    }

    var d = document.getElementById('positioner');
    if (d) {
        d.innerHTML = '<a href="http://sr.openoffice.org/lat/"><img src="/branding/images/bannerlogo.png" alt="OpenOffice.org" /></a><h1>Slobodan kancelarijski paket</h1>';
    }
}

function replaceNavCyr(replaceNavWithLink) {
    var d = document.getElementById('laturl');
    if (d) {
        if(replaceNavWithLink) {
            c = '<a href="' + replaceNavWithLink + '" title="Ova stranica na latinici">';
        } else {
            c = '<a href="http://sr.openoffice.org/lat/" title="Ove strane na latinici">';
        }
        c += '<span>srpski (latinicom)</span></a>';
        d.innerHTML = c; 
    }
}

function replaceNewsHeadLat() {
    document.getElementById('apphead').innerHTML = '<h1>Novosti i saopštenja</h1>';
    //window.title = 'sr: Novosti i saopštenja';
    replaceNavLat('http://sr.openoffice.org/servlets/ProjectNewsList?filterType=simple&filter=[ћир]');
    appendFooterLat();
}

function replaceNewsHeadCyr() {
    document.getElementById('apphead').innerHTML = '<h1>Новости и саопштења</h1>';
    //window.title = 'sr: Новости и саопштења';
    replaceNavCyr('http://sr.openoffice.org/servlets/ProjectNewsList?filterType=simple&filter=[lat]');
    appendFooterCyr();
}

function replaceNavNews() {
    var h = document.getElementById('apphead');
    var d = document.getElementById('newsitemview').getElementsByTagName('td')[0].childNodes[0].nodeValue;
    //window.title = 'sr: '+d;
    if ( d.indexOf('[lat]') != -1) {
        replaceNavLat(false);
        document.getElementById('newsitem').getElementsByTagName('h2')[0].innerHTML = 'Saopštenje';
        h.innerHTML = '<h1><small><a href="http://sr.openoffice.org/servlets/ProjectNewsList?filterType=simple&filter=[lat]">&lt; Povratak na listu saopštenja</a><br/></h1>';
        appendFooterLat();
    }
    else if ( d.indexOf('[ћир]') != -1) {
        replaceNavCyr(false);
        document.getElementById('newsitem').getElementsByTagName('h2')[0].innerHTML = 'Саопштење';
        h.innerHTML = '<h1><small><a href="http://sr.openoffice.org/servlets/ProjectNewsList?filterType=simple&filter=[ћир]">&lt; Повратак на листу саопштења</a><br/></h1>';
        appendFooterCyr();
    }
}

function AddNoNavStyle() {
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = '/styles/DeNoNav.css';
  css.type = 'text/css';
  css.media = 'screen, projection';
  document.getElementsByTagName('head')[0].appendChild(css);
}


        var r = ['positioner', 'navigation'];
        for (var i=0; i<r.length; i++) {
            var vanila = document.getElementById(r[i]);
            var replac = document.getElementById(r[i]+"2");
            if(vanila && replac) {
                vanila.innerHTML = replac.innerHTML;
                replac.style.display = 'none';
            }
        } 


        var url = window.location.toString();
        if(url.indexOf('http://sr.openoffice.org/lat/') != -1) {
            replaceNavLat(url.replace('http://sr.openoffice.org/lat', 'http://sr.openoffice.org'));
            window.onload = appendFooterLat;
        } else if(url.indexOf('http://sr.openoffice.org/servlets/NewsItemView') != -1) {
      AddNoNavStyle();
            window.onload = replaceNavNews;
        } else if(url.indexOf('http://sr.openoffice.org/servlets/ProjectNewsList') != -1) {
      AddNoNavStyle();            
            if (url.indexOf('filter=[lat]') != -1) {
                window.onload = replaceNewsHeadLat;
            } else if (url.indexOf('filter=[%D1%9B%D0%B8%D1%80]') != -1 || url.indexOf('filter=[ћир]') != -1 ) {
                window.onload = replaceNewsHeadCyr;
            }        
        }
        else if(url.indexOf('.html') != -1) {
            replaceNavCyr(url.replace('http://sr.openoffice.org', 'http://sr.openoffice.org/lat'));
            window.onload = appendFooterCyr;
        }
        else {
            window.onload = appendFooterCyr;
        }    
