/*-------------------------------------------------------------
	Lokale Java Scripts f�r de - Projekt
	- Alternierende Tabellenzeilen

	$Id: de.js,v 1.1 2004/01/09 22:04:58 AndreSchnabel Exp $
-------------------------------------------------------------*/

/*-------------------------------------------------------------
	Alternierende Tabellenzeilen
	Orginalcode http://mrclay.org/web_design/table_decoration/
	Benutzung des Originalcodes mit Genehmigung von Steve Clay
-------------------------------------------------------------*/

// alternately you can place these in a script element..
var tableDecorate_rows = true;
var tableDecorate_columns = false;

function tableDecorate(e) {
  if (!tableDecorate_rows && !tableDecorate_columns) return;
  if (!document.getElementsByTagName) return;
  var counter,
      c,      // columns
      r,      // rows
      t;      // tables
  t=document.getElementsByTagName("table");
  for (var i=0; i<t.length; i++) {
    if (t[i].className == "decorate") {
      r=t[i].getElementsByTagName("tr");
      for (var j=0; j<r.length; j++) {
        // add "oddRow" class to odd rows
      	  if (tableDecorate_rows && (j % 2 == 1)) {
          r[j].className = "oddRow " + r[j].className;
        }
      }
    }
  }
}

// alternately you can call the function directly (after onload)..
if (window.attachEvent) {
  window.attachEvent('onload',tableDecorate);
} else if (window.addEventListener) {
  window.addEventListener('load',tableDecorate,false);
}

/*-------------------------------------------------------------
	Ende Alternierende Tabellenzeilen
-------------------------------------------------------------*/