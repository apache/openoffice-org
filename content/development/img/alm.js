var DHTML = (document.getElementById || document.all || document.layers);

function getObj(name) {
    if (document.getElementById) {
        this.obj = document.getElementById(name);
        this.style = document.getElementById(name).style;
    } else if (document.all) {
        this.obj = document.all[name];
        this.style = document.all[name].style;
    } else if (document.layers) {
        this.obj = document.layers[name];
        this.style = document.layers[name];
    }
}

function invi(id, flag) {
    if (!DHTML) return;
    var x = new getObj(id);
    x.style.display = (flag) ? 'block' : 'none'
}

function showHide(showLayer, hideLayer) {
    invi(showLayer, 1);
    invi(hideLayer, 0);
}

function changeTabColor(id, color) {
    document.getElementById(id).style = 'tab_current_' + color;
}

function swapClass(id, newImg) {
    if (!DHTML) return;
    if (newImg == null || newImg.length == 0) return;
    document.getElementById(id + 'icon').src = newImg;
}

/* BEGIN JavaScript for document upload interface */

function uploadDocLinkTop(prefix, documentType, showUpload) {
    if (prefix == null) {
        prefix = '';
    }

    if (prefix != '') {
        prefix = unescape(prefix) + '_';
    }

    document.writeln('<div id="' + prefix + 'doctable_footer_compact" class="doctable_footer">');
    document.writeln('<div class="doctable_links">');
    document.writeln('<div class="open_button" title="' + showUpload + '" onclick="invi(\'' + prefix + 'doctable_footer_expanded\',1);invi(\'' + prefix + 'doctable_footer_compact\',0);">');
    document.writeln('<a href="#"><span class="alt">+<\/span><\/a>');
    document.writeln('<\/div>');
    document.writeln('<a href="javascript:invi(\'' + prefix + 'doctable_footer_expanded\',1);invi(\'' + prefix + 'doctable_footer_compact\',0);" title="' + showUpload + '">' + documentType + '<\/a>');
    document.writeln('<\/div>');
    document.writeln('<\/div>');
    document.writeln('<div id="' + prefix + 'doctable_footer_expanded" class="hide">');
}

function hideUploadDoc(prefix, documentType, hideUpload) {
    if (prefix == null) {
        prefix = '';
    }

    if (prefix != '') {
        prefix = unescape(prefix) + '_';
    }

    document.writeln('<div class="close_button" title="' + hideUpload + '" onclick="invi(\'' + prefix + 'doctable_footer_expanded\',0);invi(\'' + prefix + 'doctable_footer_compact\',1);">');
    document.writeln('<a href="#"><span class="alt">-<\/span><\/a>');
    document.writeln('<\/div>');
    document.writeln('<a href="javascript:invi(\'' + prefix + 'doctable_footer_expanded\',0);invi(\'' + prefix + 'doctable_footer_compact\',1);" class="selfref">' + documentType + '<\/a>');
}

function uploadDocLinkBottom() {
    document.writeln('<\/div>');
}

/* END JavaScript for upload document interface */
