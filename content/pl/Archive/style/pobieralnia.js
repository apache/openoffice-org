/*
    written 2009 by JJ, jasj@karnet.up.wroc.pl
    this file is released under GPL license
*/
function switchClass(elemid, classid) {
    var element;
    if (document.all)
    {
      element = eval('document.all.'+elemid);
    } else if (document.getElementById) {
      element = document.getElementById(elemid);
    }
    element.className = classid;
} 

function activateItem(item) {
    var items = document.getElementById('pobieralnia').getElementsByTagName('li');
    for(i=0;i<items.length;i++) {
        items[i].className = 'passive';
    }
    elemid = 'files_' + item;
    switchClass(elemid, 'selected');
}

function activateByURL() {
    item = window.location.hash.substr(1);
    if (item.length > 0) {
  if (!document.getElementById('files_' + item)) {
      item = 'any';
  }
  activateItem(item);
    };
    return false;
}
