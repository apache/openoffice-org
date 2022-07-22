function addOpt(optParent, optText, optValue) {

   optParent.options[optParent.length] = new Option(optText, optValue);

}



function getValue(elem) {

   return elem.options[elem.selectedIndex].value;

}



function initForm(){

   // reset select boxes

   document.download.version.length=0;

   addOpt(document.download.version, "Select your version", "");

   document.download.platform.length=0;

   addOpt(document.download.platform, "Select your platform", "");

   document.download.platform.disabled = true;   

   document.download.lang.length=0;

   addOpt(document.download.lang, "Select your language", "");

   document.download.lang.disabled = true;

   // add versions

   for (var key in ooo){

      addOpt(document.download.version, 'OpenOffice.org ' + key, key);

   }

}



function sendTorrent(){   

   var version =  getValue(document.download.version);

   var platform =  getValue(document.download.platform);

   var lang = getValue(document.download.lang);

   var torrent = ooo[version][platform][lang];

   document.location=torrent;

}



function updatePlatform(){

   // set platforms available

   var version =  getValue(document.download.version);

   var platforms = ooo[version];

   

    // reset list

    document.download.platform.length=1;

   document.download.platform.disabled = true;   

    document.download.lang.length=1;

   document.download.lang.disabled = true;

    

   // search platforms for selected version

   for ( var key in platforms ){

      addOpt(document.download.platform, key, key); 

   }



   if (!document.download.version.selectedIndex == 0)

      { document.download.platform.disabled = false; }

}



function updateLang(){

   // set langs available      

   var version =  getValue(document.download.version);

   var platform =  getValue(document.download.platform);

   var langs = ooo[version][platform];



   // reset list

   document.download.lang.length=1;

   document.download.lang.disabled = true;

   

   // a sourcefile doesn't have a language

   // so select one, and send torrent

   if ( platform == 'source' || platform == 'Source' ) {

      sendTorrent();

   }

   else {

      // search languages for selected platform

      for ( var key in langs ){

         addOpt(document.download.lang, key, key);

      }

      if (!document.download.platform.selectedIndex == 0)

         { document.download.lang.disabled = false; }

   }

}
