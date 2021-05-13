/**
 * Înlocuire prin javascript a părții de sus pentru a permite traducerea
 * Alexandru Szasz 12.09.2008
 */

if (document.getElementById('positioner')) {
    var imgs = document.getElementById('positioner').getElementsByTagName('a');
    imgs[0].innerHTML = '<img src="http://ro.openoffice.org/imagini/bannerlogo.png" alt="OpenOffice.org" />';
    var ems = document.getElementById('positioner').getElementsByTagName('em');
    ems[0].innerHTML = 'Productivitate liberă și deschisă';   

}

if (document.getElementById('breadcrumbs')) {
    var ahrefs = document.getElementById('breadcrumbs').getElementsByTagName('a');
    ahrefs[0].innerHTML = 'Proiecte';
}

if (document.getElementById('minitabs'))
document.getElementById('minitabs').innerHTML = '' + 
'<ul class="minitabs">' +
'    <li class="minitab search first_in_list"><a class="tab" href="http://www.openoffice.org/search/">Căutare</a>' +
'    <div class="tabcontent">' +
'    <form action="http://download.openoffice.org/servlets/Search" method="get">' +
'    <p><input type="hidden" name="resultsPerPage" value="40" /> <input type="text" name="query" size="10" id="searchfield" class="inputtext" /> <input type="submit"' +
'        class="searchbutton" name="Button" value="Du-te" /></p>' +
'    </form>' +
'    <p><a href="http://www.openoffice.org/search/">Căutare avansată</a></p>' +
'    </div>' +
'    </li>' +
'    <li class="minitab lang"><a class="tab" href="http://projects.openoffice.org/native-lang.html">Schimbă limba</a>' +
'    <div class="tabcontent">' +
'    <p>OpenOffice.org e disponibil în mai multe limbi. Puteți vizita paginile create de una dintre <a href="http://projects.openoffice.org/native-lang.html">comunitățile' +
'     noastre lingivistice</a>.</p>' +
'    </div>' +
'    </li>' +
'    <li class="minitab login"><a class="tab" href="http://www.openoffice.org/servlets/StartPage">Autentificare</a>' +
'    <div class="tabcontent">' +
'    <div id="loginbox">' +
'    <form action="/servlets/TLogin" method="post">' +
'    <div>' +
'    <p><label for="loginID">Utilizator:</label> <input type="text" alt="username" class="inputtext" name="loginID" id="loginID" /></p>' +
'    <p><label for="password">Parolă:</label> <input type="password" alt="password" class="inputtext" name="password" id="password" /></p>' +
'    <p><input type="submit" class="loginbutton" name="Button" value="Autentificare" /> <input type="hidden" name="detour" value="http://download.openoffice.org/index.html" /> <span' +
'        id="joina"> <a href="http://www.openoffice.org/servlets/Join">Înregistrare</a></span></p>' +
'    </div>' +
'    </form>' +
'    </div>' +
'    </div>' +
'    </li>' +
'</ul>';

if (document.getElementById('navigation'))
document.getElementById('navigation').innerHTML = '' + 
'<ul>' +
'    <li id="maintabhome" class="plain"><a href="http://www.openoffice.org/index.html" title="Go to the Homepage"><span>Acasă</span></a></li>' +
'    <li id="maintabnews" class="plain"><a href="http://www.openoffice.org/news/" title="What is going on? Get up to date!"><span>Știri</span></a></li>' +
'    <li id="maintabdownload" class="th"><a href="http://download.openoffice.org/index.html" title="Get OpenOffice.org or browse for extensions"><span>Descărcare</span></a></li>' +
'    <li id="maintabsupport" class="plain"><a href="http://support.openoffice.org/index.html" title="Support for OpenOffice.org"><span>Suport</span></a></li>' +
'    <li id="maintabprojects" class="plain"><a href="http://projects.openoffice.org/index.html" title="Browse the projects and get in touch with the project leads"><span>Proiecte</span></a></li>' +
'    <li id="maintabmypages" class="plain"><a href="http://www.openoffice.org/servlets/StartPage"><span>Paginile mele</span></a></li>' +
'    <li id="maintababout" class="plain"><a href="http://about.openoffice.org/index.html" title="Learn more about the open source-project OpenOffice.org"><span>Despre</span></a>' +
'    </li>' +
'</ul>';

