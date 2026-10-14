function cirlat(strin)
{
     var t = {'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d',
              'ђ':'đ', 'е':'e', 'ж':'ž', 'з':'z', 'и':'i',
              'ј':'j', 'к':'k', 'л':'l', 'љ':'lj','м':'m',
              'н':'n', 'њ':'nj','о':'o', 'п':'p', 'р':'r',
              'с':'s', 'т':'t', 'ћ':'ć', 'ч':'č', 'ф':'f',
              'х':'h', 'ц':'c', 'у':'u', 'џ':'dž','ш':'š',
              'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D',
              'Ђ':'Đ', 'Е':'E', 'Ж':'Ž', 'З':'Z', 'И':'I',
              'Ј':'J', 'К':'K', 'Л':'L', 'Љ':'Lj','М':'M',
              'Н':'N', 'Њ':'Nj','О':'O', 'П':'P', 'Р':'R',
              'С':'S', 'Т':'T', 'Ћ':'Ć', 'Ч':'Č', 'Ф':'F',
              'Х':'H', 'Ц':'C', 'У':'U', 'Џ':'Dž','Ш':'Š'};

    var strout = "";

    for(var i in strin)
    {
      var c = strin[i];
      if(c in t) strout += t[c];
      else strout += c;
    }

    return strout;
};

function cirlat_by_id(id)
{
  var node = document.getElementById(id);
  if(node) cirlat_by_node(node);
//  else alert("Missing node " + id);
}

function cirlat_by_node(node)
{
  if(node.nodeType == 3) node.nodeValue = cirlat(node.nodeValue);
  else if(node.nodeType == 1)
  {
    if(node.hasAttribute("value")) node.setAttribute("value", cirlat(node.getAttribute("value")));
    if(node.hasAttribute("title")) node.setAttribute("title", cirlat(node.getAttribute("title")));
    if(node.hasAttribute("alt")) node.setAttribute("alt", cirlat(node.getAttribute("alt")));
    for(var i in node.childNodes) cirlat_by_node(node.childNodes[i]);
  }
}


var ProjectCirLat = new function()
{
  this.host = "http://sr.openoffice.org";

  this.url = window.location.toString();

  this.translate = (this.url.indexOf(this.host + '/lat/') != -1);

  // Hide navigation
  this.navigation = function()
  {
    document.body.className = (this.translate ? "lat" : "cir");

    if(this.translate)
    {
      document.body.className = 'lat';
      document.getElementById("maintabsrcirlink").href = this.url.replace(this.host + "/lat", this.host);
    }
    else
    {
      document.body.className = 'cir';
      document.getElementById("maintabsrlatlink").href = this.url.replace(this.host, this.host + "/lat");
    }

    // we are on openoffice.org (like http://openoffice.org/projects/sr/links)
    if(this.url.indexOf(this.host) == -1)
    {
      document.getElementById("maintabsrlatlink").style.display = "none";      
    }
  }

  // Replace header
  this.header = function()
  {
    if(!this.translate) return;

    var ids = ['header-logo', 'positioner-text', 'language-projects-link', 'user-login', 'user-nologin', 'login-expand', 'live-search', 'cse-search-box-header'];
    for(var i in ids) cirlat_by_id(ids[i]);
  }

  // Replace footer
  this.footer = function()
  {
    if(!this.translate) return;

    var matf = document.getElementById("matflogo");
    var mtid = document.getElementById("mtidlogo");

    cirlat_by_node(matf);
    cirlat_by_node(mtid);

    matf.childNodes[0].href = "http://www.matf.bg.ac.rs/lat/";
    mtid.childNodes[0].href="http://www.mtid.gov.rs/projekti/lokalizacija-softvera/?lng=lat";
  }

  // Replace areabox sidebar
  this.areabox = function()
  {
    if(!this.translate) return;

    cirlat_by_id("areabox");
  }
}();
