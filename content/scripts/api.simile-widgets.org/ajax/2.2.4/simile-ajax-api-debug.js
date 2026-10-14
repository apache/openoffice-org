(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else {
        root.SimileAjax = factory();
    }
}(this, function() {

/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that "directory" and not name of the baseName's
                //module. For instance, baseName of "one/two/three", maps to
                //"one/two/three.js", but we want the directory, "one/two" for
                //this normalization.
                baseParts = baseParts.slice(0, baseParts.length - 1);

                name = baseParts.concat(name.split("/"));

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            return req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (typeof callback === 'function') {

            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback.apply(defined[name], args);

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        config = cfg;
        if (config.deps) {
            req(config.deps, config.callback);
        }
        return req;
    };

    define = function (name, deps, callback) {

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

define("lib/almond", function(){});

define('scripts/simile-ajax-base',[],function() {
    var SimileAjax = {
        loaded:                 false,
        loadingScriptsCount:    0,
        error:                  null,
        params:                 { "bundle": true },
        paramTypes:             { "bundle": Boolean },
        version:                "3.0.0",
        jQuery:                 null, // use jQuery directly
        urlPrefix:              null
    };
    
    return SimileAjax;
});

/*==================================================
 *  Platform Utility Functions and Constants
 *==================================================
 */

define('scripts/platform',[],function() {
var Platform = {};

Platform.os = {
    isMac:   false,
    isWin:   false,
    isWin32: false,
    isUnix:  false
};
Platform.browser = {
    isIE:           false,
    isNetscape:     false,
    isMozilla:      false,
    isFirefox:      false,
    isOpera:        false,
    isSafari:       false,

    majorVersion:   0,
    minorVersion:   0
};

(function() {
    var an = navigator.appName.toLowerCase();
	var ua = navigator.userAgent.toLowerCase(); 
    
    /*
     *  Operating system
     */
	Platform.os.isMac = (ua.indexOf('mac') != -1);
	Platform.os.isWin = (ua.indexOf('win') != -1);
	Platform.os.isWin32 = Platform.isWin && (   
        ua.indexOf('95') != -1 || 
        ua.indexOf('98') != -1 || 
        ua.indexOf('nt') != -1 || 
        ua.indexOf('win32') != -1 || 
        ua.indexOf('32bit') != -1
    );
	Platform.os.isUnix = (ua.indexOf('x11') != -1);
    
    /*
     *  Browser
     */
    Platform.browser.isIE = (an.indexOf("microsoft") != -1);
    Platform.browser.isNetscape = (an.indexOf("netscape") != -1);
    Platform.browser.isMozilla = (ua.indexOf("mozilla") != -1);
    Platform.browser.isFirefox = (ua.indexOf("firefox") != -1);
    Platform.browser.isOpera = (an.indexOf("opera") != -1);
    Platform.browser.isSafari = (an.indexOf("safari") != -1);
    
    var parseVersionString = function(s) {
        var a = s.split(".");
        Platform.browser.majorVersion = parseInt(a[0]);
        Platform.browser.minorVersion = parseInt(a[1]);
    };
    var indexOf = function(s, sub, start) {
        var i = s.indexOf(sub, start);
        return i >= 0 ? i : s.length;
    };
    
    if (Platform.browser.isMozilla) {
        var offset = ua.indexOf("mozilla/");
        if (offset >= 0) {
            parseVersionString(ua.substring(offset + 8, indexOf(ua, " ", offset)));
        }
    }
    if (Platform.browser.isIE) {
        var offset = ua.indexOf("msie ");
        if (offset >= 0) {
            parseVersionString(ua.substring(offset + 5, indexOf(ua, ";", offset)));
        }
    }
    if (Platform.browser.isNetscape) {
        var offset = ua.indexOf("rv:");
        if (offset >= 0) {
            parseVersionString(ua.substring(offset + 3, indexOf(ua, ")", offset)));
        }
    }
    if (Platform.browser.isFirefox) {
        var offset = ua.indexOf("firefox/");
        if (offset >= 0) {
            parseVersionString(ua.substring(offset + 8, indexOf(ua, " ", offset)));
        }
    }
    
    if (!("localeCompare" in String.prototype)) {
        String.prototype.localeCompare = function (s) {
            if (this < s) return -1;
            else if (this > s) return 1;
            else return 0;
        };
    }
})();

Platform.getDefaultLocale = function() {
    return Platform.clientLocale;
};

    return Platform;
});

/*==================================================
 *  Debug Utility Functions
 *==================================================
 */

define('scripts/debug',["./simile-ajax-base"], function(SimileAjax) {
var Debug = {
    silent: false
};

Debug.log = function(msg) {
    var f;
    if ("console" in window && "log" in window.console) { // FireBug installed
        f = function(msg2) {
            console.log(msg2);
        }
    } else {
        f = function(msg2) {
            if (!Debug.silent) {
                alert(msg2);
            }
        }
    }
    Debug.log = f;
    f(msg);
};

Debug.warn = function(msg) {
    var f;
    if ("console" in window && "warn" in window.console) { // FireBug installed
        f = function(msg2) {
            console.warn(msg2);
        }
    } else {
        f = function(msg2) {
            if (!Debug.silent) {
                alert(msg2);
            }
        }
    }
    Debug.warn = f;
    f(msg);
};

Debug.exception = function(e, msg) {
    var f, params = SimileAjax.parseURLParameters();
    if (params.errors == "throw" || SimileAjax.params.errors == "throw") {
        f = function(e2, msg2) {
            throw(e2); // do not hide from browser's native debugging features
        };
    } else if ("console" in window && "error" in window.console) { // FireBug installed
        f = function(e2, msg2) {
            if (msg2 != null) {
                console.error(msg2 + " %o", e2);
            } else {
                console.error(e2);
            }
            throw(e2); // do not hide from browser's native debugging features
        };
    } else {
        f = function(e2, msg2) {
            if (!Debug.silent) {
                alert("Caught exception: " + msg2 + "\n\nDetails: " + ("description" in e2 ? e2.description : e2));
            }
            throw(e2); // do not hide from browser's native debugging features
        };
    }
    Debug.exception = f;
    f(e, msg);
};

Debug.objectToString = function(o) {
    return Debug._objectToString(o, "");
};

Debug._objectToString = function(o, indent) {
    var indent2 = indent + " ";
    if (typeof o == "object") {
        var s = "{";
        for (n in o) {
            s += indent2 + n + ": " + Debug._objectToString(o[n], indent2) + "\n";
        }
        s += indent + "}";
        return s;
    } else if (typeof o == "array") {
        var s = "[";
        for (var n = 0; n < o.length; n++) {
            s += Debug._objectToString(o[n], indent2) + "\n";
        }
        s += indent + "]";
        return s;
    } else {
        return o;
    }
};

    return Debug;
});

/**
 * @fileOverview XmlHttp utility functions
 * @name SimileAjax.XmlHttp
 */

define('scripts/xmlhttp',["./debug", "./platform"], function(Debug, Platform) {
var XmlHttp = new Object();

/**
 *  Callback for XMLHttp onRequestStateChange.
 */
XmlHttp._onReadyStateChange = function(xmlhttp, fError, fDone) {
    switch (xmlhttp.readyState) {
    // 1: Request not yet made
    // 2: Contact established with server but nothing downloaded yet
    // 3: Called multiple while downloading in progress
    
    // Download complete
    case 4:
        try {
            if (xmlhttp.status == 0     // file:// urls, works on Firefox
             || xmlhttp.status == 200   // http:// urls
            ) {
                if (fDone) {
                    fDone(xmlhttp);
                }
            } else {
                if (fError) {
                    fError(
                        xmlhttp.statusText,
                        xmlhttp.status,
                        xmlhttp
                    );
                }
            }
        } catch (e) {
            Debug.exception("XmlHttp: Error handling onReadyStateChange", e);
        }
        break;
    }
};

/**
 *  Creates an XMLHttpRequest object. On the first run, this
 *  function creates a platform-specific function for
 *  instantiating an XMLHttpRequest object and then replaces
 *  itself with that function.
 */
XmlHttp._createRequest = function() {
    if (Platform.browser.isIE) {
        var programIDs = [
        "Msxml2.XMLHTTP",
        "Microsoft.XMLHTTP",
        "Msxml2.XMLHTTP.4.0"
        ];
        for (var i = 0; i < programIDs.length; i++) {
            try {
                var programID = programIDs[i];
                var f = function() {
                    return new ActiveXObject(programID);
                };
                var o = f();
                
                // We are replacing the _createXmlHttpRequest
                // function with this inner function as we've
                // found out that it works. This is so that we
                // don't have to do all the testing over again
                // on subsequent calls.
                XmlHttp._createRequest = f;
                
                return o;
            } catch (e) {
                // silent
            }
        }
        // fall through to try new XMLHttpRequest();
    }

    try {
        var f = function() {
            return new XMLHttpRequest();
        };
        var o = f();
        
        // We are replacing the _createXmlHttpRequest
        // function with this inner function as we've
        // found out that it works. This is so that we
        // don't have to do all the testing over again
        // on subsequent calls.
        XmlHttp._createRequest = f;
        
        return o;
    } catch (e) {
        throw new Error("Failed to create an XMLHttpRequest object");
    }
};

/**
 * Performs an asynchronous HTTP GET.
 *  
 * @param {Function} fError a function of the form 
     function(statusText, statusCode, xmlhttp)
 * @param {Function} fDone a function of the form function(xmlhttp)
 */
XmlHttp.get = function(url, fError, fDone) {
    var xmlhttp = XmlHttp._createRequest();
    
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function() {
        XmlHttp._onReadyStateChange(xmlhttp, fError, fDone);
    };
    xmlhttp.send(null);
};

/**
 * Performs an asynchronous HTTP POST.
 *  
 * @param {Function} fError a function of the form 
     function(statusText, statusCode, xmlhttp)
 * @param {Function} fDone a function of the form function(xmlhttp)
 */
XmlHttp.post = function(url, body, fError, fDone) {
    var xmlhttp = XmlHttp._createRequest();
    
    xmlhttp.open("POST", url, true);
    xmlhttp.onreadystatechange = function() {
        XmlHttp._onReadyStateChange(xmlhttp, fError, fDone);
    };
    xmlhttp.send(body);
};

XmlHttp._forceXML = function(xmlhttp) {
    try {
        xmlhttp.overrideMimeType("text/xml");
    } catch (e) {
        xmlhttp.setrequestheader("Content-Type", "text/xml");
    }
};

    return XmlHttp;
});

/*==================================================
 *  DOM Utility Functions
 *==================================================
 */

define('scripts/dom',["./platform"], function(Platform) {
var DOM = new Object();

DOM.registerEventWithObject = function(elmt, eventName, obj, handlerName) {
    DOM.registerEvent(elmt, eventName, function(elmt2, evt, target) {
        return obj[handlerName].call(obj, elmt2, evt, target);
    });
};

DOM.registerEvent = function(elmt, eventName, handler) {
    var handler2 = function(evt) {
        evt = (evt) ? evt : ((event) ? event : null);
        if (evt) {
            var target = (evt.target) ? 
                evt.target : ((evt.srcElement) ? evt.srcElement : null);
            if (target) {
                target = (target.nodeType == 1 || target.nodeType == 9) ? 
                    target : target.parentNode;
            }
            
            return handler(elmt, evt, target);
        }
        return true;
    }
    
    if (Platform.browser.isIE) {
        elmt.attachEvent("on" + eventName, handler2);
    } else {
        elmt.addEventListener(eventName, handler2, false);
    }
};

DOM.getPageCoordinates = function(elmt) {
    var left = 0;
    var top = 0;
    
    if (elmt.nodeType != 1) {
        elmt = elmt.parentNode;
    }
    
    var elmt2 = elmt;
    while (elmt2 != null) {
        left += elmt2.offsetLeft;
        top += elmt2.offsetTop;
        elmt2 = elmt2.offsetParent;
    }
    
    var body = document.body;
    while (elmt != null && elmt != body) {
        if ("scrollLeft" in elmt) {
            left -= elmt.scrollLeft;
            top -= elmt.scrollTop;
        }
        elmt = elmt.parentNode;
    }
    
    return { left: left, top: top };
};

DOM.getSize = function(elmt) {
	var w = this.getStyle(elmt,"width");
	var h = this.getStyle(elmt,"height");
	if (w.indexOf("px") > -1) w = w.replace("px","");
	if (h.indexOf("px") > -1) h = h.replace("px","");
	return {
		w: w,
		h: h
	}
}

DOM.getStyle = function(elmt, styleProp) {
    if (elmt.currentStyle) { // IE
        var style = elmt.currentStyle[styleProp];
    } else if (window.getComputedStyle) { // standard DOM
        var style = document.defaultView.getComputedStyle(elmt, null).getPropertyValue(styleProp);
    } else {
    	var style = "";
    }
    return style;
}

DOM.getEventRelativeCoordinates = function(evt, elmt) {
    if (Platform.browser.isIE) {
      if (evt.type == "mousewheel") {
        var coords = DOM.getPageCoordinates(elmt);
        return {
          x: evt.clientX - coords.left, 
          y: evt.clientY - coords.top
        };        
      } else {
        return {
          x: evt.offsetX,
          y: evt.offsetY
        };
      }
    } else {
        var coords = DOM.getPageCoordinates(elmt);

        if ((evt.type == "DOMMouseScroll") &&
          Platform.browser.isFirefox &&
          (Platform.browser.majorVersion == 2)) {
          // Due to: https://bugzilla.mozilla.org/show_bug.cgi?id=352179                  

          return {
            x: evt.screenX - coords.left,
            y: evt.screenY - coords.top 
          };
        } else {
          return {
              x: evt.pageX - coords.left,
              y: evt.pageY - coords.top
          };
        }
    }
};

DOM.getEventPageCoordinates = function(evt) {
    if (Platform.browser.isIE) {

        var scrOfY = 0;
        var scrOfX = 0;

        if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            //DOM compliant
            scrOfY = document.body.scrollTop;
            scrOfX = document.body.scrollLeft;
        } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            //IE6 standards compliant mode
            scrOfY = document.documentElement.scrollTop;
            scrOfX = document.documentElement.scrollLeft;
        }

        return { x: evt.clientX + scrOfX, y: evt.clientY + scrOfY }; 
    } else {
        return {
            x: evt.pageX,
            y: evt.pageY
        };
    }
};

DOM.hittest = function(x, y, except) {
    return DOM._hittest(document.body, x, y, except);
};

DOM._hittest = function(elmt, x, y, except) {
    var childNodes = elmt.childNodes;
    outer: for (var i = 0; i < childNodes.length; i++) {
        var childNode = childNodes[i];
        for (var j = 0; j < except.length; j++) {
            if (childNode == except[j]) {
                continue outer;
            }
        }
        
        if (childNode.offsetWidth == 0 && childNode.offsetHeight == 0) {
            /*
             *  Sometimes SPAN elements have zero width and height but
             *  they have children like DIVs that cover non-zero areas.
             */
            var hitNode = DOM._hittest(childNode, x, y, except);
            if (hitNode != childNode) {
                return hitNode;
            }
        } else {
            var top = 0;
            var left = 0;
            
            var node = childNode;
            while (node) {
                top += node.offsetTop;
                left += node.offsetLeft;
                node = node.offsetParent;
            }
            
            if (left <= x && top <= y && (x - left) < childNode.offsetWidth && (y - top) < childNode.offsetHeight) {
                return DOM._hittest(childNode, x, y, except);
            } else if (childNode.nodeType == 1 && childNode.tagName == "TR") {
                /*
                 *  Table row might have cells that span several rows.
                 */
                var childNode2 = DOM._hittest(childNode, x, y, except);
                if (childNode2 != childNode) {
                    return childNode2;
                }
            }
        }
    }
    return elmt;
};

DOM.cancelEvent = function(evt) {
    evt.returnValue = false;
    evt.cancelBubble = true;
    if ("preventDefault" in evt) {
        evt.preventDefault();
    }
};

DOM.appendClassName = function(elmt, className) {
    var classes = elmt.className.split(" ");
    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == className) {
            return;
        }
    }
    classes.push(className);
    elmt.className = classes.join(" ");
};

DOM.createInputElement = function(type) {
    var div = document.createElement("div");
    div.innerHTML = "<input type='" + type + "' />";
    
    return div.firstChild;
};

DOM.createDOMFromTemplate = function(template) {
    var result = {};
    result.elmt = DOM._createDOMFromTemplate(template, result, null);
    
    return result;
};

DOM._createDOMFromTemplate = function(templateNode, result, parentElmt) {
    if (templateNode == null) {
        /*
        var node = doc.createTextNode("--null--");
        if (parentElmt != null) {
            parentElmt.appendChild(node);
        }
        return node;
        */
        return null;
    } else if (typeof templateNode != "object") {
        var node = document.createTextNode(templateNode);
        if (parentElmt != null) {
            parentElmt.appendChild(node);
        }
        return node;
    } else {
        var elmt = null;
        if ("tag" in templateNode) {
            var tag = templateNode.tag;
            if (parentElmt != null) {
                if (tag == "tr") {
                    elmt = parentElmt.insertRow(parentElmt.rows.length);
                } else if (tag == "td") {
                    elmt = parentElmt.insertCell(parentElmt.cells.length);
                }
            }
            if (elmt == null) {
                elmt = tag == "input" ?
                    DOM.createInputElement(templateNode.type) :
                    document.createElement(tag);
                    
                if (parentElmt != null) {
                    parentElmt.appendChild(elmt);
                }
            }
        } else {
            elmt = templateNode.elmt;
            if (parentElmt != null) {
                parentElmt.appendChild(elmt);
            }
        }
        
        for (var attribute in templateNode) {
            var value = templateNode[attribute];
            
            if (attribute == "field") {
                result[value] = elmt;
                
            } else if (attribute == "className") {
                elmt.className = value;
            } else if (attribute == "id") {
                elmt.id = value;
            } else if (attribute == "title") {
                elmt.title = value;
            } else if (attribute == "type" && elmt.tagName == "input") {
                // do nothing
            } else if (attribute == "style") {
                for (n in value) {
                    var v = value[n];
                    if (n == "float") {
                        n = Platform.browser.isIE ? "styleFloat" : "cssFloat";
                    }
                    elmt.style[n] = v;
                }
            } else if (attribute == "children") {
                for (var i = 0; i < value.length; i++) {
                    DOM._createDOMFromTemplate(value[i], result, elmt);
                }
            } else if (attribute != "tag" && attribute != "elmt") {
                elmt.setAttribute(attribute, value);
            }
        }
        return elmt;
    }
}

DOM._cachedParent = null;
DOM.createElementFromString = function(s) {
    if (DOM._cachedParent == null) {
        DOM._cachedParent = document.createElement("div");
    }
    DOM._cachedParent.innerHTML = s;
    return DOM._cachedParent.firstChild;
};

DOM.createDOMFromString = function(root, s, fieldElmts) {
    var elmt = typeof root == "string" ? document.createElement(root) : root;
    elmt.innerHTML = s;
    
    var dom = { elmt: elmt };
    DOM._processDOMChildrenConstructedFromString(dom, elmt, fieldElmts != null ? fieldElmts : {} );
    
    return dom;
};

DOM._processDOMConstructedFromString = function(dom, elmt, fieldElmts) {
    var id = elmt.id;
    if (id != null && id.length > 0) {
        elmt.removeAttribute("id");
        if (id in fieldElmts) {
            var parentElmt = elmt.parentNode;
            parentElmt.insertBefore(fieldElmts[id], elmt);
            parentElmt.removeChild(elmt);
            
            dom[id] = fieldElmts[id];
            return;
        } else {
            dom[id] = elmt;
        }
    }
    
    if (elmt.hasChildNodes()) {
        DOM._processDOMChildrenConstructedFromString(dom, elmt, fieldElmts);
    }
};

DOM._processDOMChildrenConstructedFromString = function(dom, elmt, fieldElmts) {
    var node = elmt.firstChild;
    while (node != null) {
        var node2 = node.nextSibling;
        if (node.nodeType == 1) {
            DOM._processDOMConstructedFromString(dom, node, fieldElmts);
        }
        node = node2;
    }
};

    return DOM;
});

/**
 * @fileOverview Graphics utility functions and constants
 * @name SimileAjax.Graphics
 */

define('scripts/graphics',[
    "./simile-ajax-base",
    "./platform"
], function(SimileAjax, Platform) {
    var Graphics = {
        "pngIsTranslucent": undefined,
        "createTranslucentImage": undefined,
        "createTranslucentImageHTML": undefined
    };

/*==================================================
 *  Opacity, translucency
 *==================================================
 */
Graphics._createTranslucentImage1 = function(url, verticalAlign) {
    var elmt = document.createElement("img");
    elmt.setAttribute("src", url);
    if (verticalAlign != null) {
        elmt.style.verticalAlign = verticalAlign;
    }
    return elmt;
};
Graphics._createTranslucentImage2 = function(url, verticalAlign) {
    var elmt = document.createElement("img");
    elmt.style.width = "1px";  // just so that IE will calculate the size property
    elmt.style.height = "1px";
    elmt.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + url +"', sizingMethod='image')";
    elmt.style.verticalAlign = (verticalAlign != null) ? verticalAlign : "middle";
    return elmt;
};

Graphics._createTranslucentImageHTML1 = function(url, verticalAlign) {
    return "<img src=\"" + url + "\"" +
        (verticalAlign != null ? " style=\"vertical-align: " + verticalAlign + ";\"" : "") +
        " />";
};
Graphics._createTranslucentImageHTML2 = function(url, verticalAlign) {
    var style = 
        "width: 1px; height: 1px; " +
        "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + url +"', sizingMethod='image');" +
        (verticalAlign != null ? " vertical-align: " + verticalAlign + ";" : "");
        
    return "<img src='" + url + "' style=\"" + style + "\" />";
};

/**
 * Consolidate graphics constant setting into a function dependent on
 * SimileAjax loading.
 * @param {Object} g Object to modify functions for.
 */
Graphics.initialize = function(g) {
    /**
     * A boolean value indicating whether PNG translucency is supported on the
     * user's browser or not.
     *
     * @type Boolean
     */
    g.pngIsTranslucent = (!Platform.browser.isIE) || (Platform.browser.majorVersion > 6);
    if (!g.pngIsTranslucent) {
        includeCssFile(document, SimileAjax.urlPrefix + "styles/graphics-ie6.css");
    }

    /**
     * Creates a DOM element for an <code>img</code> tag using the URL given.
     * This is a convenience method that automatically includes the necessary
     * CSS to allow for translucency, even on IE.
     * 
     * @function
     * @param {String} url the URL to the image
     * @param {String} verticalAlign the CSS value for the image's
     *     vertical-align
     * @return {Element} a DOM element containing the <code>img</code> tag
     */
    g.createTranslucentImage = g.pngIsTranslucent ?
        g._createTranslucentImage1 :
        g._createTranslucentImage2;
    
    /**
     * Creates an HTML string for an <code>img</code> tag using the URL given.
     * This is a convenience method that automatically includes the necessary
     * CSS to allow for translucency, even on IE.
     * 
     * @function
     * @param {String} url the URL to the image
     * @param {String} verticalAlign the CSS value for the image's
     *     vertical-align
     * @return {String} a string containing the <code>img</code> tag
     */
    g.createTranslucentImageHTML = g.pngIsTranslucent ?
        g._createTranslucentImageHTML1 :
        g._createTranslucentImageHTML2;

    return g;
};

/**
 * Sets the opacity on the given DOM element.
 *
 * @param {Element} elmt the DOM element to set the opacity on
 * @param {Number} opacity an integer from 0 to 100 specifying the opacity
 */
Graphics.setOpacity = function(elmt, opacity) {
    if (Platform.browser.isIE) {
        elmt.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Style=0,Opacity=" + opacity + ")";
    } else {
        var o = (opacity / 100).toString();
        elmt.style.opacity = o;
        elmt.style.MozOpacity = o;
    }
};

/*==================================================
 *  Bubble
 *==================================================
 */

Graphics.bubbleConfig = {
    containerCSSClass:              "simileAjax-bubble-container",
    innerContainerCSSClass:         "simileAjax-bubble-innerContainer",
    contentContainerCSSClass:       "simileAjax-bubble-contentContainer",
    
    borderGraphicSize:              50,
    borderGraphicCSSClassPrefix:    "simileAjax-bubble-border-",
    
    arrowGraphicTargetOffset:       33,  // from tip of arrow to the side of the graphic that touches the content of the bubble
    arrowGraphicLength:             100, // dimension of arrow graphic along the direction that the arrow points
    arrowGraphicWidth:              49,  // dimension of arrow graphic perpendicular to the direction that the arrow points
    arrowGraphicCSSClassPrefix:     "simileAjax-bubble-arrow-",
    
    closeGraphicCSSClass:           "simileAjax-bubble-close",
    
    extraPadding:                   20
};

Graphics.getWindowDimensions = function() {
    if (typeof window.innerHeight == 'number') {
        return { w:window.innerWidth, h:window.innerHeight }; // Non-IE
    } else if (document.documentElement && document.documentElement.clientHeight) {
        return { // IE6+, in "standards compliant mode"
            w:document.documentElement.clientWidth,
            h:document.documentElement.clientHeight
        };
    } else if (document.body && document.body.clientHeight) {
        return { // IE 4 compatible
            w:document.body.clientWidth,
            h:document.body.clientHeight
        };
    }
};


/**
 * Creates a floating, rounded message bubble in the center of the window for
 * displaying modal information, e.g. "Loading..."
 *
 * @param {Document} doc the root document for the page to render on
 * @param {Object} an object with two properties, contentDiv and containerDiv,
 *   consisting of the newly created DOM elements
 */
Graphics.createMessageBubble = function(doc) {
    var containerDiv = doc.createElement("div");
    var prefix = "simileAjax-messageBubble";
    if (Graphics.pngIsTranslucent) {
        var topDiv = doc.createElement("div");
        topDiv.className = prefix + "-top";
        containerDiv.appendChild(topDiv);
        
        var topRightDiv = doc.createElement("div");
        topRightDiv.className = prefix + "-top-right";
        topDiv.appendChild(topRightDiv);
        
        var middleDiv = doc.createElement("div");
        middleDiv.className = prefix + "-middle";
        containerDiv.appendChild(middleDiv);
        
        var middleRightDiv = doc.createElement("div");
        middleRightDiv.className = prefix + "-middle-right";
        middleDiv.appendChild(middleRightDiv);
        
        var contentDiv = doc.createElement("div");
        middleRightDiv.appendChild(contentDiv);
        
        var bottomDiv = doc.createElement("div");
        bottomDiv.className = prefix + "-bottom";
        containerDiv.appendChild(bottomDiv);
        
        var bottomRightDiv = doc.createElement("div");
        bottomRightDiv.className = prefix + "-bottom-right";
        bottomDiv.appendChild(bottomRightDiv);
    } else {
        containerDiv.style.border = "2px solid #7777AA";
        containerDiv.style.padding = "20px";
        containerDiv.style.background = "white";
        Graphics.setOpacity(containerDiv, 90);
        
        var contentDiv = doc.createElement("div");
        containerDiv.appendChild(contentDiv);
    }
    
    return {
        containerDiv:   containerDiv,
        contentDiv:     contentDiv
    };
};

/*==================================================
 *  Animation
 *==================================================
 */

/**
 * Creates an animation for a function, and an interval of values.  The word
 * "animation" here is used in the sense of repeatedly calling a function with
 * a current value from within an interval, and a delta value.
 *
 * @param {Function} f a function to be called every 50 milliseconds throughout
 *   the animation duration, of the form f(current, delta), where current is
 *   the current value within the range and delta is the current change.
 * @param {Number} from a starting value
 * @param {Number} to an ending value
 * @param {Number} duration the duration of the animation in milliseconds
 * @param {Function} [cont] an optional function that is called at the end of
 *   the animation, i.e. a continuation.
 * @return {Graphics._Animation} a new animation object
 */
Graphics.createAnimation = function(f, from, to, duration, cont) {
    return new Graphics._Animation(f, from, to, duration, cont);
};

Graphics._Animation = function(f, from, to, duration, cont) {
    this.f = f;
    this.cont = (typeof cont == "function") ? cont : function() {};
    
    this.from = from;
    this.to = to;
    this.current = from;
    
    this.duration = duration;
    this.start = new Date().getTime();
    this.timePassed = 0;
};

/**
 * Runs this animation.
 */
Graphics._Animation.prototype.run = function() {
    var a = this;
    window.setTimeout(function() { a.step(); }, 50);
};

/**
 * Increments this animation by one step, and then continues the animation with
 * <code>run()</code>.
 */
Graphics._Animation.prototype.step = function() {
    this.timePassed += 50;
    
    var timePassedFraction = this.timePassed / this.duration;
    var parameterFraction = -Math.cos(timePassedFraction * Math.PI) / 2 + 0.5;
    var current = parameterFraction * (this.to - this.from) + this.from;
    
    try {
        this.f(current, current - this.current);
    } catch (e) {
    }
    this.current = current;
    
    if (this.timePassed < this.duration) {
        this.run();
    } else {
        this.f(this.to, 0);
        this["cont"]();
    }
};

/*==================================================
 *  CopyPasteButton
 *
 *  Adapted from http://spaces.live.com/editorial/rayozzie/demo/liveclip/liveclipsample/techPreview.html.
 *==================================================
 */

/**
 * Creates a button and textarea for displaying structured data and copying it
 * to the clipboard.  The data is dynamically generated by the given 
 * createDataFunction parameter.
 *
 * @param {String} image an image URL to use as the background for the 
 *   generated box
 * @param {Number} width the width in pixels of the generated box
 * @param {Number} height the height in pixels of the generated box
 * @param {Function} createDataFunction a function that is called with no
 *   arguments to generate the structured data
 * @return a new DOM element
 */
Graphics.createStructuredDataCopyButton = function(image, width, height, createDataFunction) {
    var div = document.createElement("div");
    div.style.position = "relative";
    div.style.display = "inline";
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.overflow = "hidden";
    div.style.margin = "2px";
    
    if (Graphics.pngIsTranslucent) {
        div.style.background = "url(" + image + ") no-repeat";
    } else {
        div.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + image +"', sizingMethod='image')";
    }
    
    var style;
    if (Platform.browser.isIE) {
        style = "filter:alpha(opacity=0)";
    } else {
        style = "opacity: 0";
    }
    div.innerHTML = "<textarea rows='1' autocomplete='off' value='none' style='" + style + "' />";
    
    var textarea = div.firstChild;
    textarea.style.width = width + "px";
    textarea.style.height = height + "px";
    textarea.onmousedown = function(evt) {
        evt = (evt) ? evt : ((event) ? event : null);
        if (evt.button == 2) {
            textarea.value = createDataFunction();
            textarea.select();
        }
    };
    
    return div;
};

/*==================================================
 *  getWidthHeight
 *==================================================
 */
Graphics.getWidthHeight = function(el) {
    // RETURNS hash {width:  w, height: h} in pixels
    
    var w, h;
    // offsetWidth rounds on FF, so doesn't work for us.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=458617
    if (el.getBoundingClientRect == null) {
    	// use offsetWidth
      w = el.offsetWidth;
      h = el.offsetHeight;
    } else {
    	// use getBoundingClientRect
      var rect = el.getBoundingClientRect();
      w = Math.ceil(rect.right - rect.left);
    	h = Math.ceil(rect.bottom - rect.top);
    }
    return {
        width:  w,
        height: h
    };
};
 

/*==================================================
 *  FontRenderingContext
 *==================================================
 */
Graphics.getFontRenderingContext = function(elmt, width) {
    return new Graphics._FontRenderingContext(elmt, width);
};

Graphics._FontRenderingContext = function(elmt, width) {
    this._elmt = elmt;
    this._elmt.style.visibility = "hidden";
    if (typeof width == "string") {
        this._elmt.style.width = width;
    } else if (typeof width == "number") {
        this._elmt.style.width = width + "px";
    }
};

Graphics._FontRenderingContext.prototype.dispose = function() {
    this._elmt = null;
};

Graphics._FontRenderingContext.prototype.update = function() {
    this._elmt.innerHTML = "A";
    this._lineHeight = this._elmt.offsetHeight;
};

Graphics._FontRenderingContext.prototype.computeSize = function(text, className) {
    // className arg is optional
    var el = this._elmt;
    el.innerHTML = text;
    el.className = className === undefined ? '' : className;
    var wh = Graphics.getWidthHeight(el);
    el.className = ''; // reset for the next guy
    
    return wh;
};

Graphics._FontRenderingContext.prototype.getLineHeight = function() {
    return this._lineHeight;
};

    return Graphics;
});

/**
 * @fileOverview UI layers and window-wide dragging
 * @name SimileAjax.WindowManager
 */

/**
 *  This is a singleton that keeps track of UI layers (modal and 
 *  modeless) and enables/disables UI elements based on which layers
 *  they belong to. It also provides window-wide dragging 
 *  implementation.
 */ 
define('scripts/window-manager',[
    "./dom",
    "./debug",
    "./graphics",
    "./simile-ajax-base"
], function(DOM, Debug, Graphics, SimileAjax) {
var WindowManager = {
    _initialized:       false,
    _listeners:         [],
    
    _draggedElement:                null,
    _draggedElementCallback:        null,
    _dropTargetHighlightElement:    null,
    _lastCoords:                    null,
    _ghostCoords:                   null,
    _draggingMode:                  "",
    _dragging:                      false,
    
    _layers:            []
};

WindowManager.initialize = function() {
    if (WindowManager._initialized) {
        return;
    }
    
    DOM.registerEvent(document.body, "mousedown", WindowManager._onBodyMouseDown);
    DOM.registerEvent(document.body, "mousemove", WindowManager._onBodyMouseMove);
    DOM.registerEvent(document.body, "mouseup",   WindowManager._onBodyMouseUp);
    DOM.registerEvent(document, "keydown",       WindowManager._onBodyKeyDown);
    DOM.registerEvent(document, "keyup",         WindowManager._onBodyKeyUp);
    
    WindowManager._layers.push({index: 0});

    // @@@ There were pieces here to assemble a no-op history listener
    //     and add it to the SimileAjax.History listener stack, but I
    //     suspect it was only here to make sure history initialized
    //     before window manager.  I've simply put calls to init both
    //     in the overall SimileAjax.load() method.  This breaks a
    //     terrible dependency cycle that sat between them.  If I'm
    //     wrong, another solution needs to be found.

    WindowManager._initialized = true;
};

WindowManager.getBaseLayer = function() {
    return WindowManager._layers[0];
};

WindowManager.getHighestLayer = function() {
    return WindowManager._layers[WindowManager._layers.length - 1];
};

WindowManager.registerEventWithObject = function(elmt, eventName, obj, handlerName, layer) {
    WindowManager.registerEvent(
        elmt, 
        eventName, 
        function(elmt2, evt, target) {
            return obj[handlerName].call(obj, elmt2, evt, target);
        },
        layer
    );
};

WindowManager.registerEvent = function(elmt, eventName, handler, layer) {
    if (layer == null) {
        layer = WindowManager.getHighestLayer();
    }
    
    var handler2 = function(elmt, evt, target) {
        if (WindowManager._canProcessEventAtLayer(layer)) {
            WindowManager._popToLayer(layer.index);
            try {
                handler(elmt, evt, target);
            } catch (e) {
                Debug.exception(e);
            }
        }
        DOM.cancelEvent(evt);
        return false;
    }
    
    DOM.registerEvent(elmt, eventName, handler2);
};

WindowManager.pushLayer = function(f, ephemeral, elmt) {
    var layer = { onPop: f, index: WindowManager._layers.length, ephemeral: (ephemeral), elmt: elmt };
    WindowManager._layers.push(layer);
    
    return layer;
};

WindowManager.popLayer = function(layer) {
    for (var i = 1; i < WindowManager._layers.length; i++) {
        if (WindowManager._layers[i] == layer) {
            WindowManager._popToLayer(i - 1);
            break;
        }
    }
};

WindowManager.popAllLayers = function() {
    WindowManager._popToLayer(0);
};

WindowManager.registerForDragging = function(elmt, callback, layer) {
    WindowManager.registerEvent(
        elmt, 
        "mousedown", 
        function(elmt, evt, target) {
            WindowManager._handleMouseDown(elmt, evt, callback);
        }, 
        layer
    );
};

WindowManager._popToLayer = function(level) {
    while (level+1 < WindowManager._layers.length) {
        try {
            var layer = WindowManager._layers.pop();
            if (layer.onPop != null) {
                layer.onPop();
            }
        } catch (e) {
        }
    }
};

WindowManager._canProcessEventAtLayer = function(layer) {
    if (layer.index == (WindowManager._layers.length - 1)) {
        return true;
    }
    for (var i = layer.index + 1; i < WindowManager._layers.length; i++) {
        if (!WindowManager._layers[i].ephemeral) {
            return false;
        }
    }
    return true;
};

WindowManager.cancelPopups = function(evt) {
    var evtCoords = (evt) ? DOM.getEventPageCoordinates(evt) : { x: -1, y: -1 };
    
    var i = WindowManager._layers.length - 1;
    while (i > 0 && WindowManager._layers[i].ephemeral) {
        var layer = WindowManager._layers[i];
        if (layer.elmt != null) { // if event falls within main element of layer then don't cancel
            var elmt = layer.elmt;
            var elmtCoords = DOM.getPageCoordinates(elmt);
            if (evtCoords.x >= elmtCoords.left && evtCoords.x < (elmtCoords.left + elmt.offsetWidth) &&
                evtCoords.y >= elmtCoords.top && evtCoords.y < (elmtCoords.top + elmt.offsetHeight)) {
                break;
            }
        }
        i--;
    }
    WindowManager._popToLayer(i);
};

WindowManager._onBodyMouseDown = function(elmt, evt, target) {
    if (!("eventPhase" in evt) || evt.eventPhase == evt.BUBBLING_PHASE) {
        WindowManager.cancelPopups(evt);
    }
};

WindowManager._handleMouseDown = function(elmt, evt, callback) {
    WindowManager._draggedElement = elmt;
    WindowManager._draggedElementCallback = callback;
    WindowManager._lastCoords = { x: evt.clientX, y: evt.clientY };
        
    DOM.cancelEvent(evt);
    return false;
};

WindowManager._onBodyKeyDown = function(elmt, evt, target) {
    if (WindowManager._dragging) {
        if (evt.keyCode == 27) { // esc
            WindowManager._cancelDragging();
        } else if ((evt.keyCode == 17 || evt.keyCode == 16) && WindowManager._draggingMode != "copy") {
            WindowManager._draggingMode = "copy";
            
            var img = Graphics.createTranslucentImage(SimileAjax.urlPrefix + "images/copy.png");
            img.style.position = "absolute";
            img.style.left = (WindowManager._ghostCoords.left - 16) + "px";
            img.style.top = (WindowManager._ghostCoords.top) + "px";
            document.body.appendChild(img);
            
            WindowManager._draggingModeIndicatorElmt = img;
        }
    }
};

WindowManager._onBodyKeyUp = function(elmt, evt, target) {
    if (WindowManager._dragging) {
        if (evt.keyCode == 17 || evt.keyCode == 16) {
            WindowManager._draggingMode = "";
            if (WindowManager._draggingModeIndicatorElmt != null) {
                document.body.removeChild(WindowManager._draggingModeIndicatorElmt);
                WindowManager._draggingModeIndicatorElmt = null;
            }
        }
    }
};

WindowManager._onBodyMouseMove = function(elmt, evt, target) {
    if (WindowManager._draggedElement != null) {
        var callback = WindowManager._draggedElementCallback;
        
        var lastCoords = WindowManager._lastCoords;
        var diffX = evt.clientX - lastCoords.x;
        var diffY = evt.clientY - lastCoords.y;
        
        if (!WindowManager._dragging) {
            if (Math.abs(diffX) > 5 || Math.abs(diffY) > 5) {
                try {
                    if ("onDragStart" in callback) {
                        callback.onDragStart();
                    }
                    
                    if ("ghost" in callback && callback.ghost) {
                        var draggedElmt = WindowManager._draggedElement;
                        
                        WindowManager._ghostCoords = DOM.getPageCoordinates(draggedElmt);
                        WindowManager._ghostCoords.left += diffX;
                        WindowManager._ghostCoords.top += diffY;
                        
                        var ghostElmt = draggedElmt.cloneNode(true);
                        ghostElmt.style.position = "absolute";
                        ghostElmt.style.left = WindowManager._ghostCoords.left + "px";
                        ghostElmt.style.top = WindowManager._ghostCoords.top + "px";
                        ghostElmt.style.zIndex = 1000;
                        Graphics.setOpacity(ghostElmt, 50);
                        
                        document.body.appendChild(ghostElmt);
                        callback._ghostElmt = ghostElmt;
                    }
                    
                    WindowManager._dragging = true;
                    WindowManager._lastCoords = { x: evt.clientX, y: evt.clientY };
                    
                    document.body.focus();
                } catch (e) {
                    Debug.exception("WindowManager: Error handling mouse down", e);
                    WindowManager._cancelDragging();
                }
            }
        } else {
            try {
                WindowManager._lastCoords = { x: evt.clientX, y: evt.clientY };
                
                if ("onDragBy" in callback) {
                    callback.onDragBy(diffX, diffY);
                }
                
                if ("_ghostElmt" in callback) {
                    var ghostElmt = callback._ghostElmt;
                    
                    WindowManager._ghostCoords.left += diffX;
                    WindowManager._ghostCoords.top += diffY;
                    
                    ghostElmt.style.left = WindowManager._ghostCoords.left + "px";
                    ghostElmt.style.top = WindowManager._ghostCoords.top + "px";
                    if (WindowManager._draggingModeIndicatorElmt != null) {
                        var indicatorElmt = WindowManager._draggingModeIndicatorElmt;
                        
                        indicatorElmt.style.left = (WindowManager._ghostCoords.left - 16) + "px";
                        indicatorElmt.style.top = WindowManager._ghostCoords.top + "px";
                    }
                    
                    if ("droppable" in callback && callback.droppable) {
                        var coords = DOM.getEventPageCoordinates(evt);
                        var target = DOM.hittest(
                            coords.x, coords.y, 
                            [   WindowManager._ghostElmt, 
                                WindowManager._dropTargetHighlightElement 
                            ]
                        );
                        target = WindowManager._findDropTarget(target);
                        
                        if (target != WindowManager._potentialDropTarget) {
                            if (WindowManager._dropTargetHighlightElement != null) {
                                document.body.removeChild(WindowManager._dropTargetHighlightElement);
                                
                                WindowManager._dropTargetHighlightElement = null;
                                WindowManager._potentialDropTarget = null;
                            }

                            var droppable = false;
                            if (target != null) {
                                if ((!("canDropOn" in callback) || callback.canDropOn(target)) &&
                                    (!("canDrop" in target) || target.canDrop(WindowManager._draggedElement))) {
                                    
                                    droppable = true;
                                }
                            }
                            
                            if (droppable) {
                                var border = 4;
                                var targetCoords = DOM.getPageCoordinates(target);
                                var highlight = document.createElement("div");
                                highlight.style.border = border + "px solid yellow";
                                highlight.style.backgroundColor = "yellow";
                                highlight.style.position = "absolute";
                                highlight.style.left = targetCoords.left + "px";
                                highlight.style.top = targetCoords.top + "px";
                                highlight.style.width = (target.offsetWidth - border * 2) + "px";
                                highlight.style.height = (target.offsetHeight - border * 2) + "px";
                                Graphics.setOpacity(highlight, 30);
                                document.body.appendChild(highlight);
                                
                                WindowManager._potentialDropTarget = target;
                                WindowManager._dropTargetHighlightElement = highlight;
                            }
                        }
                    }
                }
            } catch (e) {
                Debug.exception("WindowManager: Error handling mouse move", e);
                WindowManager._cancelDragging();
            }
        }
        
        DOM.cancelEvent(evt);
        return false;
    }
};

WindowManager._onBodyMouseUp = function(elmt, evt, target) {
    if (WindowManager._draggedElement != null) {
        try {
            if (WindowManager._dragging) {
                var callback = WindowManager._draggedElementCallback;
                if ("onDragEnd" in callback) {
                    callback.onDragEnd();
                }
                if ("droppable" in callback && callback.droppable) {
                    var dropped = false;
                    
                    var target = WindowManager._potentialDropTarget;
                    if (target != null) {
                        if ((!("canDropOn" in callback) || callback.canDropOn(target)) &&
                            (!("canDrop" in target) || target.canDrop(WindowManager._draggedElement))) {
                            
                            if ("onDropOn" in callback) {
                                callback.onDropOn(target);
                            }
                            target.ondrop(WindowManager._draggedElement, WindowManager._draggingMode);
                            
                            dropped = true;
                        }
                    }
                    
                    if (!dropped) {
                        // TODO: do holywood explosion here
                    }
                }
            }
        } finally {
            WindowManager._cancelDragging();
        }
        
        DOM.cancelEvent(evt);
        return false;
    }
};

WindowManager._cancelDragging = function() {
    var callback = WindowManager._draggedElementCallback;
    if ("_ghostElmt" in callback) {
        var ghostElmt = callback._ghostElmt;
        document.body.removeChild(ghostElmt);
        
        delete callback._ghostElmt;
    }
    if (WindowManager._dropTargetHighlightElement != null) {
        document.body.removeChild(WindowManager._dropTargetHighlightElement);
        WindowManager._dropTargetHighlightElement = null;
    }
    if (WindowManager._draggingModeIndicatorElmt != null) {
        document.body.removeChild(WindowManager._draggingModeIndicatorElmt);
        WindowManager._draggingModeIndicatorElmt = null;
    }
    
    WindowManager._draggedElement = null;
    WindowManager._draggedElementCallback = null;
    WindowManager._potentialDropTarget = null;
    WindowManager._dropTargetHighlightElement = null;
    WindowManager._lastCoords = null;
    WindowManager._ghostCoords = null;
    WindowManager._draggingMode = "";
    WindowManager._dragging = false;
};

WindowManager._findDropTarget = function(elmt) {
    while (elmt != null) {
        if ("ondrop" in elmt && (typeof elmt.ondrop) == "function") {
            break;
        }
        elmt = elmt.parentNode;
    }
    return elmt;
};

    return WindowManager;
});

define('scripts/bubble',[
    "./graphics",
    "./window-manager"
], function(Graphics, WindowManager) {
/**
 * Creates a nice, rounded bubble popup with the given page coordinates and
 * content dimensions.  The bubble will point to the location on the page
 * as described by pageX and pageY.  All measurements should be given in
 * pixels.
 *
 * @param {Number} pageX the x coordinate of the point to point to
 * @param {Number} pageY the y coordinate of the point to point to
 * @param {Number} contentWidth the width of the content box in the bubble
 * @param {Number} contentHeight the height of the content box in the bubble
 * @param {String} orientation a string ("top", "bottom", "left", or "right")
 *   that describes the orientation of the arrow on the bubble
 * @return {Element} a DOM element for the newly created bubble
 */
Graphics.createBubbleForPoint = function(pageX, pageY, contentWidth, contentHeight, orientation) {
    contentWidth = parseInt(contentWidth, 10); // harden against bad input bugs
    contentHeight = parseInt(contentHeight, 10); // getting numbers-as-strings
    
    var bubbleConfig = Graphics.bubbleConfig;
    var pngTransparencyClassSuffix = 
        Graphics.pngIsTranslucent ? "pngTranslucent" : "pngNotTranslucent";
    
    var bubbleWidth = contentWidth + 2 * bubbleConfig.borderGraphicSize;
    var bubbleHeight = contentHeight + 2 * bubbleConfig.borderGraphicSize;
    
    var generatePngSensitiveClass = function(className) {
        return className + " " + className + "-" + pngTransparencyClassSuffix;
    };
    
    /*
     *  Render container divs
     */
    var div = document.createElement("div");
    div.className = generatePngSensitiveClass(bubbleConfig.containerCSSClass);
    div.style.width = contentWidth + "px";
    div.style.height = contentHeight + "px";
    
    var divInnerContainer = document.createElement("div");
    divInnerContainer.className = generatePngSensitiveClass(bubbleConfig.innerContainerCSSClass);
    div.appendChild(divInnerContainer);
    
    /*
     *  Create layer for bubble
     */
    var close = function() { 
        if (!bubble._closed) {
            document.body.removeChild(bubble._div);
            bubble._doc = null;
            bubble._div = null;
            bubble._content = null;
            bubble._closed = true;
        }
    }
    var bubble = { _closed: false };
    var layer = WindowManager.pushLayer(close, true, div);
    bubble._div = div;
    bubble.close = function() { WindowManager.popLayer(layer); }
    
    /*
     *  Render border graphics
     */
    var createBorder = function(classNameSuffix) {
        var divBorderGraphic = document.createElement("div");
        divBorderGraphic.className = generatePngSensitiveClass(bubbleConfig.borderGraphicCSSClassPrefix + classNameSuffix);
        divInnerContainer.appendChild(divBorderGraphic);
    };
    createBorder("top-left");
    createBorder("top-right");
    createBorder("bottom-left");
    createBorder("bottom-right");
    createBorder("left");
    createBorder("right");
    createBorder("top");
    createBorder("bottom");
    
    /*
     *  Render content
     */
    var divContentContainer = document.createElement("div");
    divContentContainer.className = generatePngSensitiveClass(bubbleConfig.contentContainerCSSClass);
    divInnerContainer.appendChild(divContentContainer);
    bubble.content = divContentContainer;
    
    /*
     *  Render close button
     */
    var divClose = document.createElement("div");
    divClose.className = generatePngSensitiveClass(bubbleConfig.closeGraphicCSSClass);
    divInnerContainer.appendChild(divClose);
    WindowManager.registerEventWithObject(divClose, "click", bubble, "close");
    
    (function() {
        var dims = Graphics.getWindowDimensions();
        var docWidth = dims.w;
        var docHeight = dims.h;
        
        var halfArrowGraphicWidth = Math.ceil(bubbleConfig.arrowGraphicWidth / 2);
        
        var createArrow = function(classNameSuffix) {
            var divArrowGraphic = document.createElement("div");
            divArrowGraphic.className = generatePngSensitiveClass(bubbleConfig.arrowGraphicCSSClassPrefix + "point-" + classNameSuffix);
            divInnerContainer.appendChild(divArrowGraphic);
            return divArrowGraphic;
        };
        
        if (pageX - halfArrowGraphicWidth - bubbleConfig.borderGraphicSize - bubbleConfig.extraPadding > 0 &&
            pageX + halfArrowGraphicWidth + bubbleConfig.borderGraphicSize + bubbleConfig.extraPadding < docWidth) {
            
            /*
             *  Bubble can be positioned above or below the target point.
             */
            
            var left = pageX - Math.round(contentWidth / 2);
            left = pageX < (docWidth / 2) ?
                Math.max(left, bubbleConfig.extraPadding + bubbleConfig.borderGraphicSize) : 
                Math.min(left, docWidth - bubbleConfig.extraPadding - bubbleConfig.borderGraphicSize - contentWidth);
                
            if ((orientation && orientation == "top") || 
                (!orientation && 
                    (pageY 
                        - bubbleConfig.arrowGraphicTargetOffset 
                        - contentHeight 
                        - bubbleConfig.borderGraphicSize 
                        - bubbleConfig.extraPadding > 0))) {
                
                /*
                 *  Position bubble above the target point.
                 */
                
                var divArrow = createArrow("down");
                divArrow.style.left = (pageX - halfArrowGraphicWidth - left) + "px";
                
                div.style.left = left + "px";
                div.style.top = (pageY - bubbleConfig.arrowGraphicTargetOffset - contentHeight) + "px";
                
                return;
            } else if ((orientation && orientation == "bottom") || 
                (!orientation && 
                    (pageY 
                        + bubbleConfig.arrowGraphicTargetOffset 
                        + contentHeight 
                        + bubbleConfig.borderGraphicSize 
                        + bubbleConfig.extraPadding < docHeight))) {
                        
                /*
                 *  Position bubble below the target point.
                 */
                
                var divArrow = createArrow("up");
                divArrow.style.left = (pageX - halfArrowGraphicWidth - left) + "px";
                
                div.style.left = left + "px";
                div.style.top = (pageY + bubbleConfig.arrowGraphicTargetOffset) + "px";
                
                return;
            }
        }
        
        var top = pageY - Math.round(contentHeight / 2);
        top = pageY < (docHeight / 2) ?
            Math.max(top, bubbleConfig.extraPadding + bubbleConfig.borderGraphicSize) : 
            Math.min(top, docHeight - bubbleConfig.extraPadding - bubbleConfig.borderGraphicSize - contentHeight);
            
        if ((orientation && orientation == "left") || 
            (!orientation && 
                (pageX 
                    - bubbleConfig.arrowGraphicTargetOffset 
                    - contentWidth
                    - bubbleConfig.borderGraphicSize 
                    - bubbleConfig.extraPadding > 0))) {
            
            /*
             *  Position bubble left of the target point.
             */
            
            var divArrow = createArrow("right");
            divArrow.style.top = (pageY - halfArrowGraphicWidth - top) + "px";
            
            div.style.top = top + "px";
            div.style.left = (pageX - bubbleConfig.arrowGraphicTargetOffset - contentWidth) + "px";
        } else {
            
            /*
             *  Position bubble right of the target point, as the last resort.
             */
            
            var divArrow = createArrow("left");
            divArrow.style.top = (pageY - halfArrowGraphicWidth - top) + "px";
            
            div.style.top = top + "px";
            div.style.left = (pageX + bubbleConfig.arrowGraphicTargetOffset) + "px";
        }
    })();
    
    document.body.appendChild(div);
    
    return bubble;
};

/**
 * Creates a nice, rounded bubble popup with the given content in a div,
 * page coordinates and a suggested width. The bubble will point to the 
 * location on the page as described by pageX and pageY.  All measurements 
 * should be given in pixels.
 *
 * @param {Element} the content div
 * @param {Number} pageX the x coordinate of the point to point to
 * @param {Number} pageY the y coordinate of the point to point to
 * @param {Number} contentWidth a suggested width of the content
 * @param {String} orientation a string ("top", "bottom", "left", or "right")
 *   that describes the orientation of the arrow on the bubble
 * @param {Number} maxHeight. Add a scrollbar div if bubble would be too tall.
 *   Default of 0 or null means no maximum
 */
Graphics.createBubbleForContentAndPoint = function(
       div, pageX, pageY, contentWidth, orientation, maxHeight) {
    if (typeof contentWidth != "number") {
        contentWidth = 300;
    }
    if (typeof maxHeight != "number") {
        maxHeight = 0;
    }

    div.style.position = "absolute";
    div.style.left = "-5000px";
    div.style.top = "0px";
    div.style.width = contentWidth + "px";
    document.body.appendChild(div);
    
    window.setTimeout(function() {
        var width = div.scrollWidth + 10;
        var height = div.scrollHeight + 10;
        var scrollDivW = 0; // width of the possible inner container when we want vertical scrolling
        if (maxHeight > 0 && height > maxHeight) {
          height = maxHeight;
          scrollDivW = width - 25;
        }  
       
        var bubble = Graphics.createBubbleForPoint(pageX, pageY, width, height, orientation);
        
        document.body.removeChild(div);
        div.style.position = "static";
        div.style.left = "";
        div.style.top = "";
        
        // create a scroll div if needed
        if (scrollDivW > 0) {
          var scrollDiv = document.createElement("div");
          div.style.width = "";
          scrollDiv.style.width = scrollDivW + "px";
          scrollDiv.appendChild(div);
          bubble.content.appendChild(scrollDiv);
        } else {
          div.style.width = width + "px";
          bubble.content.appendChild(div);
        }
    }, 200);
};

    return Graphics;
});

/**
 * @fileOverview A collection of date/time utility functions
 * @name SimileAjax.DateTime
 */

define('scripts/date-time',["./debug"], function(Debug) {
var DateTime = new Object();

DateTime.MILLISECOND    = 0;
DateTime.SECOND         = 1;
DateTime.MINUTE         = 2;
DateTime.HOUR           = 3;
DateTime.DAY            = 4;
DateTime.WEEK           = 5;
DateTime.MONTH          = 6;
DateTime.YEAR           = 7;
DateTime.DECADE         = 8;
DateTime.CENTURY        = 9;
DateTime.MILLENNIUM     = 10;

DateTime.EPOCH          = -1;
DateTime.ERA            = -2;

/**
 * An array of unit lengths, expressed in milliseconds, of various lengths of
 * time.  The array indices are predefined and stored as properties of the
 * DateTime object, e.g. DateTime.YEAR.
 * @type Array
 */
DateTime.gregorianUnitLengths = [];
    (function() {
        var d = DateTime;
        var a = d.gregorianUnitLengths;
        
        a[d.MILLISECOND] = 1;
        a[d.SECOND]      = 1000;
        a[d.MINUTE]      = a[d.SECOND] * 60;
        a[d.HOUR]        = a[d.MINUTE] * 60;
        a[d.DAY]         = a[d.HOUR] * 24;
        a[d.WEEK]        = a[d.DAY] * 7;
        a[d.MONTH]       = a[d.DAY] * 31;
        a[d.YEAR]        = a[d.DAY] * 365;
        a[d.DECADE]      = a[d.YEAR] * 10;
        a[d.CENTURY]     = a[d.YEAR] * 100;
        a[d.MILLENNIUM]  = a[d.YEAR] * 1000;
    })();
    
DateTime._dateRegexp = new RegExp(
    "^(-?)([0-9]{4})(" + [
        "(-?([0-9]{2})(-?([0-9]{2}))?)", // -month-dayOfMonth
        "(-?([0-9]{3}))",                // -dayOfYear
        "(-?W([0-9]{2})(-?([1-7]))?)"    // -Wweek-dayOfWeek
    ].join("|") + ")?$"
);
DateTime._timezoneRegexp = new RegExp(
    "Z|(([-+])([0-9]{2})(:?([0-9]{2}))?)$"
);
DateTime._timeRegexp = new RegExp(
    "^([0-9]{2})(:?([0-9]{2})(:?([0-9]{2})(\.([0-9]+))?)?)?$"
);

/**
 * Takes a date object and a string containing an ISO 8601 date and sets the
 * the date using information parsed from the string.  Note that this method
 * does not parse any time information.
 *
 * @param {Date} dateObject the date object to modify
 * @param {String} string an ISO 8601 string to parse
 * @return {Date} the modified date object
 */
DateTime.setIso8601Date = function(dateObject, string) {
    /*
     *  This function has been adapted from dojo.date, v.0.3.0
     *  http://dojotoolkit.org/.
     */
     
    var d = string.match(DateTime._dateRegexp);
    if(!d) {
        throw new Error("Invalid date string: " + string);
    }
    
    var sign = (d[1] == "-") ? -1 : 1; // BC or AD
    var year = sign * d[2];
    var month = d[5];
    var date = d[7];
    var dayofyear = d[9];
    var week = d[11];
    var dayofweek = (d[13]) ? d[13] : 1;

    dateObject.setUTCFullYear(year);
    if (dayofyear) { 
        dateObject.setUTCMonth(0);
        dateObject.setUTCDate(Number(dayofyear));
    } else if (week) {
        dateObject.setUTCMonth(0);
        dateObject.setUTCDate(1);
        var gd = dateObject.getUTCDay();
        var day =  (gd) ? gd : 7;
        var offset = Number(dayofweek) + (7 * Number(week));
        
        if (day <= 4) { 
            dateObject.setUTCDate(offset + 1 - day); 
        } else { 
            dateObject.setUTCDate(offset + 8 - day); 
        }
    } else {
        if (month) { 
            dateObject.setUTCDate(1);
            dateObject.setUTCMonth(month - 1); 
        }
        if (date) { 
            dateObject.setUTCDate(date); 
        }
    }
    
    return dateObject;
};

/**
 * Takes a date object and a string containing an ISO 8601 time and sets the
 * the time using information parsed from the string.  Note that this method
 * does not parse any date information.
 *
 * @param {Date} dateObject the date object to modify
 * @param {String} string an ISO 8601 string to parse
 * @return {Date} the modified date object
 */
DateTime.setIso8601Time = function (dateObject, string) {
    /*
     *  This function has been adapted from dojo.date, v.0.3.0
     *  http://dojotoolkit.org/.
     */
    
    var d = string.match(DateTime._timeRegexp);
    if(!d) {
        Debug.warn("Invalid time string: " + string);
        return false;
    }
    var hours = d[1];
    var mins = Number((d[3]) ? d[3] : 0);
    var secs = (d[5]) ? d[5] : 0;
    var ms = d[7] ? (Number("0." + d[7]) * 1000) : 0;

    dateObject.setUTCHours(hours);
    dateObject.setUTCMinutes(mins);
    dateObject.setUTCSeconds(secs);
    dateObject.setUTCMilliseconds(ms);
    
    return dateObject;
};

/**
 * The timezone offset in minutes in the user's browser.
 * @type Number
 */
DateTime.timezoneOffset = new Date().getTimezoneOffset();

/**
 * Takes a date object and a string containing an ISO 8601 date and time and 
 * sets the date object using information parsed from the string.
 *
 * @param {Date} dateObject the date object to modify
 * @param {String} string an ISO 8601 string to parse
 * @return {Date} the modified date object
 */
DateTime.setIso8601 = function (dateObject, string){
    /*
     *  This function has been adapted from dojo.date, v.0.3.0
     *  http://dojotoolkit.org/.
     */
     
    var offset = null;
    var comps = (string.indexOf("T") == -1) ? string.split(" ") : string.split("T");
    
    DateTime.setIso8601Date(dateObject, comps[0]);
    if (comps.length == 2) { 
        // first strip timezone info from the end
        var d = comps[1].match(DateTime._timezoneRegexp);
        if (d) {
            if (d[0] == 'Z') {
                offset = 0;
            } else {
                offset = (Number(d[3]) * 60) + Number(d[5]);
                offset *= ((d[2] == '-') ? 1 : -1);
            }
            comps[1] = comps[1].substr(0, comps[1].length - d[0].length);
        }

        DateTime.setIso8601Time(dateObject, comps[1]); 
    }
    if (offset == null) {
        offset = dateObject.getTimezoneOffset(); // local time zone if no tz info
    }
    dateObject.setTime(dateObject.getTime() + offset * 60000);
    
    return dateObject;
};

/**
 * Takes a string containing an ISO 8601 date and returns a newly instantiated
 * date object with the parsed date and time information from the string.
 *
 * @param {String} string an ISO 8601 string to parse
 * @return {Date} a new date object created from the string
 */
DateTime.parseIso8601DateTime = function (string) {
    try {
        return DateTime.setIso8601(new Date(0), string);
    } catch (e) {
        return null;
    }
};

/**
 * Takes a string containing a Gregorian date and time and returns a newly
 * instantiated date object with the parsed date and time information from the
 * string.  If the param is actually an instance of Date instead of a string, 
 * simply returns the given date instead.
 *
 * @param {Object} o an object, to either return or parse as a string
 * @return {Date} the date object
 */
DateTime.parseGregorianDateTime = function(o) {
    if (o == null) {
        return null;
    } else if (o instanceof Date) {
        return o;
    }
    
    var s = o.toString();
    if (s.length > 0 && s.length < 8) {
        var space = s.indexOf(" ");
        if (space > 0) {
            var year = parseInt(s.substr(0, space));
            var suffix = s.substr(space + 1);
            if (suffix.toLowerCase() == "bc") {
                year = 1 - year;
            }
        } else {
            var year = parseInt(s);
        }
            
        var d = new Date(0);
        d.setUTCFullYear(year);
        
        return d;
    }
    
    try {
        return new Date(Date.parse(s));
    } catch (e) {
        return null;
    }
};

/**
 * Rounds date objects down to the nearest interval or multiple of an interval.
 * This method modifies the given date object, converting it to the given
 * timezone if specified.
 * 
 * @param {Date} date the date object to round
 * @param {Number} intervalUnit a constant, integer index specifying an 
 *   interval, e.g. DateTime.HOUR
 * @param {Number} timeZone a timezone shift, given in hours
 * @param {Number} multiple a multiple of the interval to round by
 * @param {Number} firstDayOfWeek an integer specifying the first day of the
 *   week, 0 corresponds to Sunday, 1 to Monday, etc.
 */
DateTime.roundDownToInterval = function(date, intervalUnit, timeZone, multiple, firstDayOfWeek) {
    var timeShift = timeZone * 
        DateTime.gregorianUnitLengths[DateTime.HOUR];
        
    var date2 = new Date(date.getTime() + timeShift);
    var clearInDay = function(d) {
        d.setUTCMilliseconds(0);
        d.setUTCSeconds(0);
        d.setUTCMinutes(0);
        d.setUTCHours(0);
    };
    var clearInYear = function(d) {
        clearInDay(d);
        d.setUTCDate(1);
        d.setUTCMonth(0);
    };
    
    switch(intervalUnit) {
    case DateTime.MILLISECOND:
        var x = date2.getUTCMilliseconds();
        date2.setUTCMilliseconds(x - (x % multiple));
        break;
    case DateTime.SECOND:
        date2.setUTCMilliseconds(0);
        
        var x = date2.getUTCSeconds();
        date2.setUTCSeconds(x - (x % multiple));
        break;
    case DateTime.MINUTE:
        date2.setUTCMilliseconds(0);
        date2.setUTCSeconds(0);
        
        var x = date2.getUTCMinutes();
        date2.setTime(date2.getTime() - 
            (x % multiple) * DateTime.gregorianUnitLengths[DateTime.MINUTE]);
        break;
    case DateTime.HOUR:
        date2.setUTCMilliseconds(0);
        date2.setUTCSeconds(0);
        date2.setUTCMinutes(0);
        
        var x = date2.getUTCHours();
        date2.setUTCHours(x - (x % multiple));
        break;
    case DateTime.DAY:
        clearInDay(date2);
        break;
    case DateTime.WEEK:
        clearInDay(date2);
        var d = (date2.getUTCDay() + 7 - firstDayOfWeek) % 7;
        date2.setTime(date2.getTime() - 
            d * DateTime.gregorianUnitLengths[DateTime.DAY]);
        break;
    case DateTime.MONTH:
        clearInDay(date2);
        date2.setUTCDate(1);
        
        var x = date2.getUTCMonth();
        date2.setUTCMonth(x - (x % multiple));
        break;
    case DateTime.YEAR:
        clearInYear(date2);
        
        var x = date2.getUTCFullYear();
        date2.setUTCFullYear(x - (x % multiple));
        break;
    case DateTime.DECADE:
        clearInYear(date2);
        date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / 10) * 10);
        break;
    case DateTime.CENTURY:
        clearInYear(date2);
        date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / 100) * 100);
        break;
    case DateTime.MILLENNIUM:
        clearInYear(date2);
        date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / 1000) * 1000);
        break;
    }
    
    date.setTime(date2.getTime() - timeShift);
};

/**
 * Rounds date objects up to the nearest interval or multiple of an interval.
 * This method modifies the given date object, converting it to the given
 * timezone if specified.
 * 
 * @param {Date} date the date object to round
 * @param {Number} intervalUnit a constant, integer index specifying an 
 *   interval, e.g. DateTime.HOUR
 * @param {Number} timeZone a timezone shift, given in hours
 * @param {Number} multiple a multiple of the interval to round by
 * @param {Number} firstDayOfWeek an integer specifying the first day of the
 *   week, 0 corresponds to Sunday, 1 to Monday, etc.
 * @see DateTime.roundDownToInterval
 */
DateTime.roundUpToInterval = function(date, intervalUnit, timeZone, multiple, firstDayOfWeek) {
    var originalTime = date.getTime();
    DateTime.roundDownToInterval(date, intervalUnit, timeZone, multiple, firstDayOfWeek);
    if (date.getTime() < originalTime) {
        date.setTime(date.getTime() + 
            DateTime.gregorianUnitLengths[intervalUnit] * multiple);
    }
};

/**
 * Increments a date object by a specified interval, taking into
 * consideration the timezone.
 *
 * @param {Date} date the date object to increment
 * @param {Number} intervalUnit a constant, integer index specifying an 
 *   interval, e.g. DateTime.HOUR
 * @param {Number} timeZone the timezone offset in hours
 */
DateTime.incrementByInterval = function(date, intervalUnit, timeZone) {
    timeZone = (typeof timeZone == 'undefined') ? 0 : timeZone;

    var timeShift = timeZone * 
        DateTime.gregorianUnitLengths[DateTime.HOUR];
        
    var date2 = new Date(date.getTime() + timeShift);

    switch(intervalUnit) {
    case DateTime.MILLISECOND:
        date2.setTime(date2.getTime() + 1)
        break;
    case DateTime.SECOND:
        date2.setTime(date2.getTime() + 1000);
        break;
    case DateTime.MINUTE:
        date2.setTime(date2.getTime() + 
            DateTime.gregorianUnitLengths[DateTime.MINUTE]);
        break;
    case DateTime.HOUR:
        date2.setTime(date2.getTime() + 
            DateTime.gregorianUnitLengths[DateTime.HOUR]);
        break;
    case DateTime.DAY:
        date2.setUTCDate(date2.getUTCDate() + 1);
        break;
    case DateTime.WEEK:
        date2.setUTCDate(date2.getUTCDate() + 7);
        break;
    case DateTime.MONTH:
        date2.setUTCMonth(date2.getUTCMonth() + 1);
        break;
    case DateTime.YEAR:
        date2.setUTCFullYear(date2.getUTCFullYear() + 1);
        break;
    case DateTime.DECADE:
        date2.setUTCFullYear(date2.getUTCFullYear() + 10);
        break;
    case DateTime.CENTURY:
        date2.setUTCFullYear(date2.getUTCFullYear() + 100);
        break;
    case DateTime.MILLENNIUM:
        date2.setUTCFullYear(date2.getUTCFullYear() + 1000);
        break;
    }

    date.setTime(date2.getTime() - timeShift);
};

/**
 * Returns a new date object with the given time offset removed.
 *
 * @param {Date} date the starting date
 * @param {Number} timeZone a timezone specified in an hour offset to remove
 * @return {Date} a new date object with the offset removed
 */
DateTime.removeTimeZoneOffset = function(date, timeZone) {
    return new Date(date.getTime() + 
        timeZone * DateTime.gregorianUnitLengths[DateTime.HOUR]);
};

/**
 * Returns the timezone of the user's browser.
 *
 * @return {Number} the timezone in the user's locale in hours
 */
DateTime.getTimezone = function() {
    var d = new Date().getTimezoneOffset();
    return d / -60;
};

    return DateTime;
});

/*==================================================
 *  String Utility Functions and Constants
 *==================================================
 */

define('scripts/string',[],function() {
    var StringUtils = {};

    StringUtils.trim = function(s) {
        return s.replace(/^\s+|\s+$/g, '');
    };

    StringUtils.startsWith = function(s, prefix) {
        return s.length >= prefix.length && s.substr(0, prefix.length) === prefix;
    };

    StringUtils.endsWith = function(s, suffix) {
        return s.length >= suffix.length && s.substr(s.length - suffix.length) === suffix;
    };

    StringUtils.substitute = function(s, objects) {
        var result, start, percent, n;
        result = "";
        start = 0;
        while (start < s.length - 1) {
            percent = s.indexOf("%", start);
            if (percent < 0 || percent === s.length - 1) {
                break;
            } else if (percent > start && s.charAt(percent - 1) === "\\") {
                result += s.substring(start, percent - 1) + "%";
                start = percent + 1;
            } else {
                n = parseInt(s.charAt(percent + 1));
                if (isNaN(n) || n >= objects.length) {
                    result += s.substring(start, percent + 2);
                } else {
                    result += s.substring(start, percent) + objects[n].toString();
                }
                start = percent + 2;
            }
        }
        
        if (start < s.length) {
            result += s.substring(start);
        }
        return result;
    };

    return StringUtils;
});

/*==================================================
 *  HTML Utility Functions
 *==================================================
 */

define('scripts/html',[],function() {
var HTML = new Object();

HTML._e2uHash = {};
(function() {
    var e2uHash = HTML._e2uHash;
    e2uHash['nbsp']= '\u00A0';
    e2uHash['iexcl']= '\u00A1';
    e2uHash['cent']= '\u00A2';
    e2uHash['pound']= '\u00A3';
    e2uHash['curren']= '\u00A4';
    e2uHash['yen']= '\u00A5';
    e2uHash['brvbar']= '\u00A6';
    e2uHash['sect']= '\u00A7';
    e2uHash['uml']= '\u00A8';
    e2uHash['copy']= '\u00A9';
    e2uHash['ordf']= '\u00AA';
    e2uHash['laquo']= '\u00AB';
    e2uHash['not']= '\u00AC';
    e2uHash['shy']= '\u00AD';
    e2uHash['reg']= '\u00AE';
    e2uHash['macr']= '\u00AF';
    e2uHash['deg']= '\u00B0';
    e2uHash['plusmn']= '\u00B1';
    e2uHash['sup2']= '\u00B2';
    e2uHash['sup3']= '\u00B3';
    e2uHash['acute']= '\u00B4';
    e2uHash['micro']= '\u00B5';
    e2uHash['para']= '\u00B6';
    e2uHash['middot']= '\u00B7';
    e2uHash['cedil']= '\u00B8';
    e2uHash['sup1']= '\u00B9';
    e2uHash['ordm']= '\u00BA';
    e2uHash['raquo']= '\u00BB';
    e2uHash['frac14']= '\u00BC';
    e2uHash['frac12']= '\u00BD';
    e2uHash['frac34']= '\u00BE';
    e2uHash['iquest']= '\u00BF';
    e2uHash['Agrave']= '\u00C0';
    e2uHash['Aacute']= '\u00C1';
    e2uHash['Acirc']= '\u00C2';
    e2uHash['Atilde']= '\u00C3';
    e2uHash['Auml']= '\u00C4';
    e2uHash['Aring']= '\u00C5';
    e2uHash['AElig']= '\u00C6';
    e2uHash['Ccedil']= '\u00C7';
    e2uHash['Egrave']= '\u00C8';
    e2uHash['Eacute']= '\u00C9';
    e2uHash['Ecirc']= '\u00CA';
    e2uHash['Euml']= '\u00CB';
    e2uHash['Igrave']= '\u00CC';
    e2uHash['Iacute']= '\u00CD';
    e2uHash['Icirc']= '\u00CE';
    e2uHash['Iuml']= '\u00CF';
    e2uHash['ETH']= '\u00D0';
    e2uHash['Ntilde']= '\u00D1';
    e2uHash['Ograve']= '\u00D2';
    e2uHash['Oacute']= '\u00D3';
    e2uHash['Ocirc']= '\u00D4';
    e2uHash['Otilde']= '\u00D5';
    e2uHash['Ouml']= '\u00D6';
    e2uHash['times']= '\u00D7';
    e2uHash['Oslash']= '\u00D8';
    e2uHash['Ugrave']= '\u00D9';
    e2uHash['Uacute']= '\u00DA';
    e2uHash['Ucirc']= '\u00DB';
    e2uHash['Uuml']= '\u00DC';
    e2uHash['Yacute']= '\u00DD';
    e2uHash['THORN']= '\u00DE';
    e2uHash['szlig']= '\u00DF';
    e2uHash['agrave']= '\u00E0';
    e2uHash['aacute']= '\u00E1';
    e2uHash['acirc']= '\u00E2';
    e2uHash['atilde']= '\u00E3';
    e2uHash['auml']= '\u00E4';
    e2uHash['aring']= '\u00E5';
    e2uHash['aelig']= '\u00E6';
    e2uHash['ccedil']= '\u00E7';
    e2uHash['egrave']= '\u00E8';
    e2uHash['eacute']= '\u00E9';
    e2uHash['ecirc']= '\u00EA';
    e2uHash['euml']= '\u00EB';
    e2uHash['igrave']= '\u00EC';
    e2uHash['iacute']= '\u00ED';
    e2uHash['icirc']= '\u00EE';
    e2uHash['iuml']= '\u00EF';
    e2uHash['eth']= '\u00F0';
    e2uHash['ntilde']= '\u00F1';
    e2uHash['ograve']= '\u00F2';
    e2uHash['oacute']= '\u00F3';
    e2uHash['ocirc']= '\u00F4';
    e2uHash['otilde']= '\u00F5';
    e2uHash['ouml']= '\u00F6';
    e2uHash['divide']= '\u00F7';
    e2uHash['oslash']= '\u00F8';
    e2uHash['ugrave']= '\u00F9';
    e2uHash['uacute']= '\u00FA';
    e2uHash['ucirc']= '\u00FB';
    e2uHash['uuml']= '\u00FC';
    e2uHash['yacute']= '\u00FD';
    e2uHash['thorn']= '\u00FE';
    e2uHash['yuml']= '\u00FF';
    e2uHash['quot']= '\u0022';
    e2uHash['amp']= '\u0026';
    e2uHash['lt']= '\u003C';
    e2uHash['gt']= '\u003E';
    e2uHash['OElig']= '';
    e2uHash['oelig']= '\u0153';
    e2uHash['Scaron']= '\u0160';
    e2uHash['scaron']= '\u0161';
    e2uHash['Yuml']= '\u0178';
    e2uHash['circ']= '\u02C6';
    e2uHash['tilde']= '\u02DC';
    e2uHash['ensp']= '\u2002';
    e2uHash['emsp']= '\u2003';
    e2uHash['thinsp']= '\u2009';
    e2uHash['zwnj']= '\u200C';
    e2uHash['zwj']= '\u200D';
    e2uHash['lrm']= '\u200E';
    e2uHash['rlm']= '\u200F';
    e2uHash['ndash']= '\u2013';
    e2uHash['mdash']= '\u2014';
    e2uHash['lsquo']= '\u2018';
    e2uHash['rsquo']= '\u2019';
    e2uHash['sbquo']= '\u201A';
    e2uHash['ldquo']= '\u201C';
    e2uHash['rdquo']= '\u201D';
    e2uHash['bdquo']= '\u201E';
    e2uHash['dagger']= '\u2020';
    e2uHash['Dagger']= '\u2021';
    e2uHash['permil']= '\u2030';
    e2uHash['lsaquo']= '\u2039';
    e2uHash['rsaquo']= '\u203A';
    e2uHash['euro']= '\u20AC';
    e2uHash['fnof']= '\u0192';
    e2uHash['Alpha']= '\u0391';
    e2uHash['Beta']= '\u0392';
    e2uHash['Gamma']= '\u0393';
    e2uHash['Delta']= '\u0394';
    e2uHash['Epsilon']= '\u0395';
    e2uHash['Zeta']= '\u0396';
    e2uHash['Eta']= '\u0397';
    e2uHash['Theta']= '\u0398';
    e2uHash['Iota']= '\u0399';
    e2uHash['Kappa']= '\u039A';
    e2uHash['Lambda']= '\u039B';
    e2uHash['Mu']= '\u039C';
    e2uHash['Nu']= '\u039D';
    e2uHash['Xi']= '\u039E';
    e2uHash['Omicron']= '\u039F';
    e2uHash['Pi']= '\u03A0';
    e2uHash['Rho']= '\u03A1';
    e2uHash['Sigma']= '\u03A3';
    e2uHash['Tau']= '\u03A4';
    e2uHash['Upsilon']= '\u03A5';
    e2uHash['Phi']= '\u03A6';
    e2uHash['Chi']= '\u03A7';
    e2uHash['Psi']= '\u03A8';
    e2uHash['Omega']= '\u03A9';
    e2uHash['alpha']= '\u03B1';
    e2uHash['beta']= '\u03B2';
    e2uHash['gamma']= '\u03B3';
    e2uHash['delta']= '\u03B4';
    e2uHash['epsilon']= '\u03B5';
    e2uHash['zeta']= '\u03B6';
    e2uHash['eta']= '\u03B7';
    e2uHash['theta']= '\u03B8';
    e2uHash['iota']= '\u03B9';
    e2uHash['kappa']= '\u03BA';
    e2uHash['lambda']= '\u03BB';
    e2uHash['mu']= '\u03BC';
    e2uHash['nu']= '\u03BD';
    e2uHash['xi']= '\u03BE';
    e2uHash['omicron']= '\u03BF';
    e2uHash['pi']= '\u03C0';
    e2uHash['rho']= '\u03C1';
    e2uHash['sigmaf']= '\u03C2';
    e2uHash['sigma']= '\u03C3';
    e2uHash['tau']= '\u03C4';
    e2uHash['upsilon']= '\u03C5';
    e2uHash['phi']= '\u03C6';
    e2uHash['chi']= '\u03C7';
    e2uHash['psi']= '\u03C8';
    e2uHash['omega']= '\u03C9';
    e2uHash['thetasym']= '\u03D1';
    e2uHash['upsih']= '\u03D2';
    e2uHash['piv']= '\u03D6';
    e2uHash['bull']= '\u2022';
    e2uHash['hellip']= '\u2026';
    e2uHash['prime']= '\u2032';
    e2uHash['Prime']= '\u2033';
    e2uHash['oline']= '\u203E';
    e2uHash['frasl']= '\u2044';
    e2uHash['weierp']= '\u2118';
    e2uHash['image']= '\u2111';
    e2uHash['real']= '\u211C';
    e2uHash['trade']= '\u2122';
    e2uHash['alefsym']= '\u2135';
    e2uHash['larr']= '\u2190';
    e2uHash['uarr']= '\u2191';
    e2uHash['rarr']= '\u2192';
    e2uHash['darr']= '\u2193';
    e2uHash['harr']= '\u2194';
    e2uHash['crarr']= '\u21B5';
    e2uHash['lArr']= '\u21D0';
    e2uHash['uArr']= '\u21D1';
    e2uHash['rArr']= '\u21D2';
    e2uHash['dArr']= '\u21D3';
    e2uHash['hArr']= '\u21D4';
    e2uHash['forall']= '\u2200';
    e2uHash['part']= '\u2202';
    e2uHash['exist']= '\u2203';
    e2uHash['empty']= '\u2205';
    e2uHash['nabla']= '\u2207';
    e2uHash['isin']= '\u2208';
    e2uHash['notin']= '\u2209';
    e2uHash['ni']= '\u220B';
    e2uHash['prod']= '\u220F';
    e2uHash['sum']= '\u2211';
    e2uHash['minus']= '\u2212';
    e2uHash['lowast']= '\u2217';
    e2uHash['radic']= '\u221A';
    e2uHash['prop']= '\u221D';
    e2uHash['infin']= '\u221E';
    e2uHash['ang']= '\u2220';
    e2uHash['and']= '\u2227';
    e2uHash['or']= '\u2228';
    e2uHash['cap']= '\u2229';
    e2uHash['cup']= '\u222A';
    e2uHash['int']= '\u222B';
    e2uHash['there4']= '\u2234';
    e2uHash['sim']= '\u223C';
    e2uHash['cong']= '\u2245';
    e2uHash['asymp']= '\u2248';
    e2uHash['ne']= '\u2260';
    e2uHash['equiv']= '\u2261';
    e2uHash['le']= '\u2264';
    e2uHash['ge']= '\u2265';
    e2uHash['sub']= '\u2282';
    e2uHash['sup']= '\u2283';
    e2uHash['nsub']= '\u2284';
    e2uHash['sube']= '\u2286';
    e2uHash['supe']= '\u2287';
    e2uHash['oplus']= '\u2295';
    e2uHash['otimes']= '\u2297';
    e2uHash['perp']= '\u22A5';
    e2uHash['sdot']= '\u22C5';
    e2uHash['lceil']= '\u2308';
    e2uHash['rceil']= '\u2309';
    e2uHash['lfloor']= '\u230A';
    e2uHash['rfloor']= '\u230B';
    e2uHash['lang']= '\u2329';
    e2uHash['rang']= '\u232A';
    e2uHash['loz']= '\u25CA';
    e2uHash['spades']= '\u2660';
    e2uHash['clubs']= '\u2663';
    e2uHash['hearts']= '\u2665';
    e2uHash['diams']= '\u2666'; 
})();

HTML.deEntify = function(s) {
    var e2uHash = HTML._e2uHash;
    
    var re = /&(\w+?);/;
    while (re.test(s)) {
        var m = s.match(re);
        s = s.replace(re, e2uHash[m[1]]);
    }
    return s;
};

    return HTML;
});

define('scripts/set',[],function() {
/**
 * A basic set (in the mathematical sense) data structure
 *
 * @constructor
 * @param {Array or Set} [a] an initial collection
 */
var Set = function(a) {
    this._hash = {};
    this._count = 0;
    
    if (a instanceof Array) {
        for (var i = 0; i < a.length; i++) {
            this.add(a[i]);
        }
    } else if (a instanceof Set) {
        this.addSet(a);
    }
}

/**
 * Adds the given object to this set, assuming there it does not already exist
 *
 * @param {Object} o the object to add
 * @return {Boolean} true if the object was added, false if not
 */
Set.prototype.add = function(o) {
    if (!(o in this._hash)) {
        this._hash[o] = true;
        this._count++;
        return true;
    }
    return false;
}

/**
 * Adds each element in the given set to this set
 *
 * @param {Set} set the set of elements to add
 */
Set.prototype.addSet = function(set) {
    for (var o in set._hash) {
        this.add(o);
    }
}

/**
 * Removes the given element from this set
 *
 * @param {Object} o the object to remove
 * @return {Boolean} true if the object was successfully removed,
 *   false otherwise
 */
Set.prototype.remove = function(o) {
    if (o in this._hash) {
        delete this._hash[o];
        this._count--;
        return true;
    }
    return false;
}

/**
 * Removes the elements in this set that correspond to the elements in the
 * given set
 *
 * @param {Set} set the set of elements to remove
 */
Set.prototype.removeSet = function(set) {
    for (var o in set._hash) {
        this.remove(o);
    }
}

/**
 * Removes all elements in this set that are not present in the given set, i.e.
 * modifies this set to the intersection of the two sets
 *
 * @param {Set} set the set to intersect
 */
Set.prototype.retainSet = function(set) {
    for (var o in this._hash) {
        if (!set.contains(o)) {
            delete this._hash[o];
            this._count--;
        }
    }
}

/**
 * Returns whether or not the given element exists in this set
 *
 * @param {Set} o the object to test for
 * @return {Boolean} true if the object is present, false otherwise
 */
Set.prototype.contains = function(o) {
    return (o in this._hash);
}

/**
 * Returns the number of elements in this set
 *
 * @return {Number} the number of elements in this set
 */
Set.prototype.size = function() {
    return this._count;
}

/**
 * Returns the elements of this set as an array
 *
 * @return {Array} a new array containing the elements of this set
 */
Set.prototype.toArray = function() {
    var a = [];
    for (var o in this._hash) {
        a.push(o);
    }
    return a;
}

/**
 * Iterates through the elements of this set, order unspecified, executing the
 * given function on each element until the function returns true
 *
 * @param {Function} f a function of form f(element)
 */
Set.prototype.visit = function(f) {
    for (var o in this._hash) {
        if (f(o) == true) {
            break;
        }
    }
}

    return Set;
});

define('scripts/sorted-array',[],function() {
/**
 * A sorted array data structure
 *
 * @constructor
 */
var SortedArray = function(compare, initialArray) {
    this._a = (initialArray instanceof Array) ? initialArray : [];
    this._compare = compare;
};

SortedArray.prototype.add = function(elmt) {
    var sa = this;
    var index = this.find(function(elmt2) {
        return sa._compare(elmt2, elmt);
    });
    
    if (index < this._a.length) {
        this._a.splice(index, 0, elmt);
    } else {
        this._a.push(elmt);
    }
};

SortedArray.prototype.remove = function(elmt) {
    var sa = this;
    var index = this.find(function(elmt2) {
        return sa._compare(elmt2, elmt);
    });
    
    while (index < this._a.length && this._compare(this._a[index], elmt) == 0) {
        if (this._a[index] == elmt) {
            this._a.splice(index, 1);
            return true;
        } else {
            index++;
        }
    }
    return false;
};

SortedArray.prototype.removeAll = function() {
    this._a = [];
};

SortedArray.prototype.elementAt = function(index) {
    return this._a[index];
};

SortedArray.prototype.length = function() {
    return this._a.length;
};

SortedArray.prototype.find = function(compare) {
    var a = 0;
    var b = this._a.length;
    
    while (a < b) {
        var mid = Math.floor((a + b) / 2);
        var c = compare(this._a[mid]);
        if (mid == a) {
            return c < 0 ? a+1 : a;
        } else if (c < 0) {
            a = mid;
        } else {
            b = mid;
        }
    }
    return a;
};

SortedArray.prototype.getFirst = function() {
    return (this._a.length > 0) ? this._a[0] : null;
};

SortedArray.prototype.getLast = function() {
    return (this._a.length > 0) ? this._a[this._a.length - 1] : null;
};

    return SortedArray;
});

define('scripts/units',["./date-time"], function(DateTime) {
/*==================================================
 *  Default Unit
 *==================================================
 */

var NativeDateUnit = new Object();

NativeDateUnit.makeDefaultValue = function() {
    return new Date();
};

NativeDateUnit.cloneValue = function(v) {
    return new Date(v.getTime());
};

NativeDateUnit.getParser = function(format) {
    if (typeof format == "string") {
        format = format.toLowerCase();
    }
    
    var parser = (format == "iso8601" || format == "iso 8601") ?
                    DateTime.parseIso8601DateTime : 
                    DateTime.parseGregorianDateTime;
                    
    return function(d) {
        if (typeof d != 'undefined' && d !== null && typeof d.toUTCString == "function") {
            return d;
        } else {
            return parser(d);
        }
    };
};

NativeDateUnit.parseFromObject = function(o) {
    return DateTime.parseGregorianDateTime(o);
};

NativeDateUnit.toNumber = function(v) {
    return v.getTime();
};

NativeDateUnit.fromNumber = function(n) {
    return new Date(n);
};

NativeDateUnit.compare = function(v1, v2) {
    var n1, n2;
    if (typeof v1 == "object") {
        n1 = v1.getTime();
    } else {
        n1 = Number(v1);
    }
    if (typeof v2 == "object") {
        n2 = v2.getTime();
    } else {
        n2 = Number(v2);
    }
    
    return n1 - n2;
};

NativeDateUnit.earlier = function(v1, v2) {
    return NativeDateUnit.compare(v1, v2) < 0 ? v1 : v2;
};

NativeDateUnit.later = function(v1, v2) {
    return NativeDateUnit.compare(v1, v2) > 0 ? v1 : v2;
};

NativeDateUnit.change = function(v, n) {
    return new Date(v.getTime() + n);
};


    return NativeDateUnit;
});

define('scripts/event-index',["./units", "./sorted-array"], function(NativeDateUnit, SortedArray) {
/*==================================================
 *  Event Index
 *==================================================
 */

var EventIndex = function(unit) {
    var eventIndex = this;
    
    this._unit = (unit != null) ? unit : NativeDateUnit;
    this._events = new SortedArray(
        function(event1, event2) {
            return eventIndex._unit.compare(event1.getStart(), event2.getStart());
        }
    );
    this._idToEvent = {};
    this._indexed = true;
};

EventIndex.prototype.getUnit = function() {
    return this._unit;
};

EventIndex.prototype.getEvent = function(id) {
    return this._idToEvent[id];
};

EventIndex.prototype.add = function(evt) {
    this._events.add(evt);
    this._idToEvent[evt.getID()] = evt;
    this._indexed = false;
};

EventIndex.prototype.removeAll = function() {
    this._events.removeAll();
    this._idToEvent = {};
    this._indexed = false;
};

EventIndex.prototype.getCount = function() {
    return this._events.length();
};

EventIndex.prototype.getIterator = function(startDate, endDate) {
    if (!this._indexed) {
        this._index();
    }
    return new EventIndex._Iterator(this._events, startDate, endDate, this._unit);
};

EventIndex.prototype.getReverseIterator = function(startDate, endDate) {
    if (!this._indexed) {
        this._index();
    }
    return new EventIndex._ReverseIterator(this._events, startDate, endDate, this._unit);
};

EventIndex.prototype.getAllIterator = function() {
    return new EventIndex._AllIterator(this._events);
};

EventIndex.prototype.getEarliestDate = function() {
    var evt = this._events.getFirst();
    return (evt == null) ? null : evt.getStart();
};

EventIndex.prototype.getLatestDate = function() {
    var evt = this._events.getLast();
    if (evt == null) {
        return null;
    }
    
    if (!this._indexed) {
        this._index();
    }
    
    var index = evt._earliestOverlapIndex;
    var date = this._events.elementAt(index).getEnd();
    for (var i = index + 1; i < this._events.length(); i++) {
        date = this._unit.later(date, this._events.elementAt(i).getEnd());
    }
    
    return date;
};

EventIndex.prototype._index = function() {
    /*
     *  For each event, we want to find the earliest preceding
     *  event that overlaps with it, if any.
     */
    
    var l = this._events.length();
    for (var i = 0; i < l; i++) {
        var evt = this._events.elementAt(i);
        evt._earliestOverlapIndex = i;
    }
    
    var toIndex = 1;
    for (var i = 0; i < l; i++) {
        var evt = this._events.elementAt(i);
        var end = evt.getEnd();
        
        toIndex = Math.max(toIndex, i + 1);
        while (toIndex < l) {
            var evt2 = this._events.elementAt(toIndex);
            var start2 = evt2.getStart();
            
            if (this._unit.compare(start2, end) < 0) {
                evt2._earliestOverlapIndex = i;
                toIndex++;
            } else {
                break;
            }
        }
    }
    this._indexed = true;
};

EventIndex._Iterator = function(events, startDate, endDate, unit) {
    this._events = events;
    this._startDate = startDate;
    this._endDate = endDate;
    this._unit = unit;
    
    this._currentIndex = events.find(function(evt) {
        return unit.compare(evt.getStart(), startDate);
    });
    if (this._currentIndex - 1 >= 0) {
        this._currentIndex = this._events.elementAt(this._currentIndex - 1)._earliestOverlapIndex;
    }
    this._currentIndex--;
    
    this._maxIndex = events.find(function(evt) {
        return unit.compare(evt.getStart(), endDate);
    });
    
    this._hasNext = false;
    this._next = null;
    this._findNext();
};

EventIndex._Iterator.prototype = {
    hasNext: function() { return this._hasNext; },
    next: function() {
        if (this._hasNext) {
            var next = this._next;
            this._findNext();
            
            return next;
        } else {
            return null;
        }
    },
    _findNext: function() {
        var unit = this._unit;
        while ((++this._currentIndex) < this._maxIndex) {
            var evt = this._events.elementAt(this._currentIndex);
            if (unit.compare(evt.getStart(), this._endDate) < 0 &&
                unit.compare(evt.getEnd(), this._startDate) > 0) {
                
                this._next = evt;
                this._hasNext = true;
                return;
            }
        }
        this._next = null;
        this._hasNext = false;
    }
};

EventIndex._ReverseIterator = function(events, startDate, endDate, unit) {
    this._events = events;
    this._startDate = startDate;
    this._endDate = endDate;
    this._unit = unit;
    
    this._minIndex = events.find(function(evt) {
        return unit.compare(evt.getStart(), startDate);
    });
    if (this._minIndex - 1 >= 0) {
        this._minIndex = this._events.elementAt(this._minIndex - 1)._earliestOverlapIndex;
    }
    
    this._maxIndex = events.find(function(evt) {
        return unit.compare(evt.getStart(), endDate);
    });
    
    this._currentIndex = this._maxIndex;
    this._hasNext = false;
    this._next = null;
    this._findNext();
};

EventIndex._ReverseIterator.prototype = {
    hasNext: function() { return this._hasNext; },
    next: function() {
        if (this._hasNext) {
            var next = this._next;
            this._findNext();
            
            return next;
        } else {
            return null;
        }
    },
    _findNext: function() {
        var unit = this._unit;
        while ((--this._currentIndex) >= this._minIndex) {
            var evt = this._events.elementAt(this._currentIndex);
            if (unit.compare(evt.getStart(), this._endDate) < 0 &&
                unit.compare(evt.getEnd(), this._startDate) > 0) {
                
                this._next = evt;
                this._hasNext = true;
                return;
            }
        }
        this._next = null;
        this._hasNext = false;
    }
};

EventIndex._AllIterator = function(events) {
    this._events = events;
    this._index = 0;
};

EventIndex._AllIterator.prototype = {
    hasNext: function() {
        return this._index < this._events.length();
    },
    next: function() {
        return this._index < this._events.length() ?
            this._events.elementAt(this._index++) : null;
    }
};

    return EventIndex;
});

/*==================================================
 *  General, miscellaneous SimileAjax stuff
 *==================================================
 */

define('scripts/ajax',["./debug"], function(Debug) {
var ListenerQueue = function(wildcardHandlerName) {
    this._listeners = [];
    this._wildcardHandlerName = wildcardHandlerName;
};

ListenerQueue.prototype.add = function(listener) {
    this._listeners.push(listener);
};

ListenerQueue.prototype.remove = function(listener) {
    var listeners = this._listeners;
    for (var i = 0; i < listeners.length; i++) {
        if (listeners[i] == listener) {
            listeners.splice(i, 1);
            break;
        }
    }
};

ListenerQueue.prototype.fire = function(handlerName, args) {
    var listeners = [].concat(this._listeners);
    for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        if (handlerName in listener) {
            try {
                listener[handlerName].apply(listener, args);
            } catch (e) {
                Debug.exception("Error firing event of name " + handlerName, e);
            }
        } else if (this._wildcardHandlerName != null &&
            this._wildcardHandlerName in listener) {
            try {
                listener[this._wildcardHandlerName].apply(listener, [ handlerName ]);
            } catch (e) {
                Debug.exception("Error firing event of name " + handlerName + " to wildcard handler", e);
            }
        }
    }
};

    return ListenerQueue;
});

/*======================================================================
 *  History
 *
 *  This is a singleton that keeps track of undoable user actions and 
 *  performs undos and redos in response to the browser's Back and 
 *  Forward buttons.
 *
 *  Call addAction(action) to register an undoable user action. action
 *  must have 4 fields:
 *
 *      perform: an argument-less function that carries out the action
 *      undo:    an argument-less function that undos the action
 *      label:   a short, user-friendly string describing the action
 *      uiLayer: the UI layer on which the action takes place
 *
 *  By default, the history keeps track of upto 10 actions. You can 
 *  configure this behavior by setting 
 *      SAHistory.maxHistoryLength
 *  to a different number.
 *
 *  An iframe is inserted into the document's body element to track 
 *  onload events.
 *======================================================================
 */
define('scripts/history',[
    "./ajax",
    "./dom",
    "./debug",
    "./window-manager"
], function(ListenerQueue, DOM, Debug, WindowManager) {
var SAHistory = {
    maxHistoryLength:       10,
    historyFile:            "__history__.html",
    enabled:               true,
    
    _initialized:           false,
    _listeners:             new ListenerQueue(),
    
    _actions:               [],
    _baseIndex:             0,
    _currentIndex:          0,
    
    _plainDocumentTitle:    document.title
};

SAHistory.formatHistoryEntryTitle = function(actionLabel) {
    return SAHistory._plainDocumentTitle + " {" + actionLabel + "}";
};

SAHistory.initialize = function() {
    if (SAHistory._initialized) {
        return;
    }
    
    if (SAHistory.enabled) {
        var iframe = document.createElement("iframe");
        iframe.id = "simile-ajax-history";
        iframe.style.position = "absolute";
        iframe.style.width = "10px";
        iframe.style.height = "10px";
        iframe.style.top = "0px";
        iframe.style.left = "0px";
        iframe.style.visibility = "hidden";
        iframe.src = SAHistory.historyFile + "?0";
        
        document.body.appendChild(iframe);
        DOM.registerEvent(iframe, "load", SAHistory._handleIFrameOnLoad);
        
        SAHistory._iframe = iframe;
    }
    SAHistory._initialized = true;
};

SAHistory.addListener = function(listener) {
    SAHistory._listeners.add(listener);
};

SAHistory.removeListener = function(listener) {
    SAHistory._listeners.remove(listener);
};

SAHistory.addAction = function(action) {
    SAHistory._listeners.fire("onBeforePerform", [ action ]);
    window.setTimeout(function() {
        try {
            action.perform();
            SAHistory._listeners.fire("onAfterPerform", [ action ]);
                
            if (SAHistory.enabled) {
                SAHistory._actions = SAHistory._actions.slice(
                    0, SAHistory._currentIndex - SAHistory._baseIndex);
                    
                SAHistory._actions.push(action);
                SAHistory._currentIndex++;
                
                var diff = SAHistory._actions.length - SAHistory.maxHistoryLength;
                if (diff > 0) {
                    SAHistory._actions = SAHistory._actions.slice(diff);
                    SAHistory._baseIndex += diff;
                }
                
                try {
                    SAHistory._iframe.contentWindow.location.search = 
                        "?" + SAHistory._currentIndex;
                } catch (e) {
                    /*
                     *  We can't modify location.search most probably because it's a file:// url.
                     *  We'll just going to modify the document's title.
                     */
                    var title = SAHistory.formatHistoryEntryTitle(action.label);
                    document.title = title;
                }
            }
        } catch (e) {
            Debug.exception(e, "Error adding action {" + action.label + "} to history");
        }
    }, 0);
};

SAHistory.addLengthyAction = function(perform, undo, label) {
    SAHistory.addAction({
        perform:    perform,
        undo:       undo,
        label:      label,
        uiLayer:    WindowManager.getBaseLayer(),
        lengthy:    true
    });
};

SAHistory._handleIFrameOnLoad = function() {
    /*
     *  This function is invoked when the user herself
     *  navigates backward or forward. We need to adjust
     *  the application's state accordingly.
     */
    
    try {
        var q = SAHistory._iframe.contentWindow.location.search;
        var c = (q.length == 0) ? 0 : Math.max(0, parseInt(q.substr(1)));
        
        var finishUp = function() {
            var diff = c - SAHistory._currentIndex;
            SAHistory._currentIndex += diff;
            SAHistory._baseIndex += diff;
                
            SAHistory._iframe.contentWindow.location.search = "?" + c;
        };
        
        if (c < SAHistory._currentIndex) { // need to undo
            SAHistory._listeners.fire("onBeforeUndoSeveral", []);
            window.setTimeout(function() {
                while (SAHistory._currentIndex > c && 
                       SAHistory._currentIndex > SAHistory._baseIndex) {
                       
                    SAHistory._currentIndex--;
                    
                    var action = SAHistory._actions[SAHistory._currentIndex - SAHistory._baseIndex];
                    
                    try {
                        action.undo();
                    } catch (e) {
                        Debug.exception(e, "History: Failed to undo action {" + action.label + "}");
                    }
                }
                
                SAHistory._listeners.fire("onAfterUndoSeveral", []);
                finishUp();
            }, 0);
        } else if (c > SAHistory._currentIndex) { // need to redo
            SAHistory._listeners.fire("onBeforeRedoSeveral", []);
            window.setTimeout(function() {
                while (SAHistory._currentIndex < c && 
                       SAHistory._currentIndex - SAHistory._baseIndex < SAHistory._actions.length) {
                       
                    var action = SAHistory._actions[SAHistory._currentIndex - SAHistory._baseIndex];
                    
                    try {
                        action.perform();
                    } catch (e) {
                        Debug.exception(e, "History: Failed to redo action {" + action.label + "}");
                    }
                    
                    SAHistory._currentIndex++;
                }
                
                SAHistory._listeners.fire("onAfterRedoSeveral", []);
                finishUp();
            }, 0);
        } else {
            var index = SAHistory._currentIndex - SAHistory._baseIndex - 1;
            var title = (index >= 0 && index < SAHistory._actions.length) ?
                SAHistory.formatHistoryEntryTitle(SAHistory._actions[index].label) :
                SAHistory._plainDocumentTitle;
                
            SAHistory._iframe.contentWindow.document.title = title;
            document.title = title;
        }
    } catch (e) {
        // silent
    }
};

SAHistory.getNextUndoAction = function() {
    try {
        var index = SAHistory._currentIndex - SAHistory._baseIndex - 1;
        return SAHistory._actions[index];
    } catch (e) {
        return null;
    }
};

SAHistory.getNextRedoAction = function() {
    try {
        var index = SAHistory._currentIndex - SAHistory._baseIndex;
        return SAHistory._actions[index];
    } catch (e) {
        return null;
    }
};

    return SAHistory;
});

/*==================================================
 *  Simile Ajax API
 *==================================================
 */

/*==================================================
 *  REMEMBER to update the Version!  Now found in scripts/base.js
 *==================================================
 */

define('simile-ajax',[
    "module",
    "./scripts/simile-ajax-base",
    "./scripts/platform",
    "./scripts/debug",
    "./scripts/xmlhttp",
    "./scripts/dom",
    "./scripts/bubble",
    "./scripts/date-time",
    "./scripts/string",
    "./scripts/html",
    "./scripts/set",
    "./scripts/sorted-array",
    "./scripts/event-index",
    "./scripts/units",
    "./scripts/ajax",
    "./scripts/history",
    "./scripts/window-manager"
], function(module, SimileAjax, Platform, Debug, XmlHttp, DOM, Graphics, DateTime, StringUtils, HTML, Set, SortedArray, EventIndex, NativeDateUnit, ListenerQueue, SAHistory, WindowManager) { 
    SimileAjax.Platform = Platform;
    SimileAjax.Debug = Debug;
    SimileAjax.XmlHttp = XmlHttp;
    SimileAjax.DOM = DOM;
    SimileAjax.Graphics = Graphics;
    SimileAjax.DateTime = DateTime;
    SimileAjax.StringUtils = StringUtils;
    SimileAjax.HTML = HTML;
    SimileAjax.Set = Set;
    SimileAjax.SortedArray = SortedArray;
    SimileAjax.EventIndex = EventIndex;
    SimileAjax.NativeDateUnit = NativeDateUnit;
    SimileAjax.ListenerQueue = ListenerQueue;
    SimileAjax.History = SAHistory;
    SimileAjax.WindowManager = WindowManager;

    var getHead = function(doc) {
        return doc.getElementsByTagName("head")[0];
    };
    
    SimileAjax.findScript = function(doc, substring) {
        var scripts, s, url, i;
	    scripts = doc.documentElement.getElementsByTagName("script");
	    for (s = 0; s < scripts.length; s++) {
            url = scripts[s].src;
            i = url.indexOf(substring);
            if (i >= 0) {
                return url;
            }
	    }
        return null;
    };

    /**
     * Parse out the query parameters from a URL
     * @param {String} url    the url to parse, or location.href if undefined
     * @param {Object} to     optional object to extend with the parameters
     * @param {Object} types  optional object mapping keys to value types
     *        (String, Number, Boolean or Array, String by default)
     * @return a key/value Object whose keys are the query parameter names
     * @type Object
     */
    SimileAjax.parseURLParameters = function(url, to, types) {
        to = to || {};
        types = types || {};
        
        if (typeof url == "undefined") {
            url = location.href;
        }
        var q = url.indexOf("?");
        if (q < 0) {
            return to;
        }
        url = (url+"#").slice(q+1, url.indexOf("#")); // toss the URL fragment
        
        var params = url.split("&"), param, parsed = {};
        var decode = window.decodeURIComponent || unescape;
        for (var i = 0; param = params[i]; i++) {
            var eq = param.indexOf("=");
            var name = decode(param.slice(0,eq));
            var old = parsed[name];
            var replacement = decode(param.slice(eq+1));
            
            if (typeof old == "undefined") {
                old = [];
            } else if (!(old instanceof Array)) {
                old = [old];
            }
            parsed[name] = old.concat(replacement);
        }
        for (var i in parsed) {
            if (!parsed.hasOwnProperty(i)) continue;
            var type = types[i] || String;
            var data = parsed[i];
            if (!(data instanceof Array)) {
                data = [data];
            }
            if (type === Boolean && data[0] == "false") {
                to[i] = false; // because Boolean("false") === true
            } else {
                to[i] = type.apply(this, data);
            }
        }
        return to;
    };

    /**
     * @deprecated Use RequireJS loading mechanisms instead.
     */
    SimileAjax.includeJavascriptFile = function(doc, url, onerror, charset, callback) {
        SimileAjax.Debug.warn("Loading scripts is no longer a feature of SimileAjax. Use RequireJS instead.");
        return;
    };

    /**
     * @deprecated Use RequireJS loading mechanisms instead.
     */
    SimileAjax.includeJavascriptFiles = function(doc, urlPrefix, filenames) {
        SimileAjax.Debug.warn("Loading scripts is no longer a feature of SimileAjax. Use RequireJS instead.");
        return;
    };

    SimileAjax.includeCssFile = function(doc, url) {
        if (doc.body == null) {
            try {
                doc.write("<link rel='stylesheet' href='" + url + "' type='text/css'/>");
                return;
            } catch (e) {
                // fall through
            }
        }
        
        var link = doc.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", url);
        getHead(doc).appendChild(link);
    };

    SimileAjax.includeCssFiles = function(doc, urlPrefix, filenames) {
        for (var i = 0; i < filenames.length; i++) {
            SimileAjax.includeCssFile(doc, urlPrefix + filenames[i]);
        }
    };
    
    /**
     * Append into urls each string in suffixes after prefixing it with urlPrefix.
     * @param {Array} urls
     * @param {String} urlPrefix
     * @param {Array} suffixes
     */
    SimileAjax.prefixURLs = function(urls, urlPrefix, suffixes) {
        for (var i = 0; i < suffixes.length; i++) {
            urls.push(urlPrefix + suffixes[i]);
        }
    };

    /**
     * A call to set the prefix and load CSS.
     * @param {String} prefix
     * @returns {Boolean}
     */
    SimileAjax.setPrefix = function(prefix) {
        if (SimileAjax.urlPrefix === null && prefix !== null) {
            if (prefix.substr(-1) !== "/") {
                prefix += "/";
            }
            SimileAjax.urlPrefix = prefix;
            SimileAjax.params.prefix = prefix;
            SimileAjax.loadCSS(SimileAjax.params.bundle);
            return true;
        };
        return false;
    };

    /**
     * Private call to load CSS.
     * @prefix {Boolean} bundle Whether to load bundled CSS or individual.
     */
    SimileAjax.loadCSS = function(bundle) {
        var cssFiles = ["main.css"], bundledCssFile = "simile-ajax-bundle.css";
        bundle = bundle || true;

        if (bundle) {
            SimileAjax.includeCssFile(document, SimileAjax.urlPrefix + "styles/" + bundledCssFile);
        } else {
            SimileAjax.includeCssFiles(document, SimileAjax.urlPrefix + "styles/", cssFiles);
        }
    };

    /**
     * Deal with legacy methods of passing configuration to SimileAjax.
     */
    SimileAjax.loadLegacy = function() {
        var prefix, url, targets, target, i;
 
        prefix = null;
        if (typeof SimileAjax_urlPrefix == "string") {
            prefix = SimileAjax_urlPrefix;
            SimileAjax.setPrefix(prefix);
        } else {
            url = null;
            targets = ["simile-ajax-api.js", "simile-ajax-bundle.js"];
            for (i = 0; i < targets.length; i++) {
                target = targets[i];
                url = SimileAjax.findScript(document, target);
                if (url != null) {
                    prefix = url.substr(0, url.indexOf(target));
                    break;
                }
            }
            
            if (url === null) {
                SimileAjax.error = new Error("Failed to derive URL prefix for SimileAjax");
            } else {
                SimileAjax.setPrefix(prefix);
                SimileAjax.params = SimileAjax.parseURLParameters(url, SimileAjax.params, SimileAjax.paramTypes);
            } 
        }
 
        SimileAjax.Graphics = Graphics.initialize(Graphics);
        SimileAjax.History.initialize();
        SimileAjax.WindowManager.initialize();
    };

    /**
     * Load based on RequireJS configuration.
     */
    SimileAjax.loadRequire = function() {
        var conf;

        conf = module.config();
        SimileAjax.params = conf;
        SimileAjax.setPrefix(SimileAjax.params.prefix);

        SimileAjax.Graphics = Graphics.initialize(Graphics);
        SimileAjax.History.initialize();
        SimileAjax.WindowManager.initialize();
    };

    SimileAjax.load = function() {
        if (SimileAjax.loaded) {
            return;
        } else {
            SimileAjax.loaded = true;
            if (module.config().hasOwnProperty("prefix")) {
                SimileAjax.loadRequire();
            } else {
                SimileAjax.loadLegacy();
            }
        }
    };

    return SimileAjax;
});
    return require("simile-ajax");
}));
