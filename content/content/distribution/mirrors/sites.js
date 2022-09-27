function showMaintainer(status) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].title == "style_maintainer")
            document.styleSheets[i].disabled = status;
    }
    document.getElementById('maintainer_c').style.display = (status) ? 'inline' : 'none';
    document.getElementById('maintainer_o').style.display = (status) ? 'none' : 'inline';
}

var XML = {};

var ml = {
    sites: null,
    stylesheet: null,
    timeout: 10000,
    interval: 500,
    timer1: null,
    timer2: null,

    start: function() {
        print_message("Retrieving data ...");
        var request1 = XML.newXMLHttpRequest();
        var request2 = XML.newXMLHttpRequest();
        XML.loadAsync(request1, "sites.xml", ml.callback_sites);
        XML.loadAsync(request2, "sites2html.xml", ml.callback_stylesheet);
        ml.timer1 = setTimeout(ml.failure, ml.timeout);
        ml.timer2 = setInterval(ml.check, ml.interval);
    },

    callback_sites: function(xmldoc) {
        ml.sites = xmldoc;
        ml.check();
    },

    callback_stylesheet: function(xmldoc) {
        ml.stylesheet = xmldoc;
        ml.check();
    },

    show_progress: function() {
        print_message("Retrieving data: "
            + "<br/>&nbsp;&nbsp;sites.xml ... " + ((ml.sites != null) ? "done." : "")
            + "<br/>&nbsp;&nbsp;sites2table.xml ... " + ((ml.stylesheet != null) ? "done." : ""));
    },

    check: function() {
        ml.show_progress();
        if (ml.sites != null && ml.stylesheet != null) {
            ml.stop();
            var element = document.getElementById("mirrorlist");
            XML.transform(ml.sites, ml.stylesheet, element);
        }
    },

    stop: function() {
        clearTimeout(ml.timer1);
        clearInterval(ml.timer2);
    },

    failure: function() {
        clearInterval(ml.timer2);
        print_message("Data retrieval failed due to timed out or other reasons.<br/>Please try to reload this page.");
    }
};

function print_message(s) {
    document.getElementById("message").innerHTML = s;
};

XML.newXMLHttpRequest = function() {
    try {
        return new XMLHttpRequest();
    } catch (e) {
        return new ActiveXObject("MSXML2.XMLHTTP.3.0");
    }
};

XML.loadAsync = function(request, url, callback) {
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200)
            callback(request.responseXML);
    };
    request.open("GET", url);
    request.send(null);
};

XML.transform = function(xmldoc, stylesheet, element) {
    if (typeof XSLTProcessor != "undefined") {
  var processor = new XSLTProcessor();
  processor.importStylesheet(stylesheet);
  var fragment = processor.transformToFragment(xmldoc, document);
  element.innerHTML = "";
  element.appendChild(fragment);
    }
    else if ("transformNode" in xmldoc) {
  element.innerHTML = xmldoc.transformNode(stylesheet);
    }
    else {
  throw "XSLT is not supported in this browser";
    }
};
