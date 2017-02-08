;try {
/* module-key = 'confluence.web.resources:almond', location = '/includes/js/amd/almond-noconflict-pre.js' */
window.__require=window.require;window.__requirejs=window.requirejs;window.__define=window.define;
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:almond', location = '/includes/js/amd/almond/almond.js' */
var requirejs,require,define;
(function(m){function q(a,b){var c,f,d,g,h,k,v,e,l,n=b&&b.split("/"),m=j.map,i=m&&m["*"]||{};if(a&&"."===a.charAt(0))if(b){n=n.slice(0,n.length-1);a=n.concat(a.split("/"));for(e=0;e<a.length;e+=1)if(c=a[e],"."===c)a.splice(e,1),e-=1;else if(".."===c)if(1===e&&(".."===a[2]||".."===a[0]))break;else 0<e&&(a.splice(e-1,2),e-=2);a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||i)&&m){c=a.split("/");for(e=c.length;0<e;e-=1){f=c.slice(0,e).join("/");if(n)for(l=n.length;0<l;l-=1)if(d=m[n.slice(0,
l).join("/")])if(d=d[f]){g=d;h=e;break}if(g)break;!k&&(i&&i[f])&&(k=i[f],v=e)}!g&&k&&(g=k,h=v);g&&(c.splice(0,h,g),a=c.join("/"))}return a}function w(a,b){return function(){return i.apply(m,y.call(arguments,0).concat([a,b]))}}function z(a){return function(b){return q(b,a)}}function A(a){return function(b){h[a]=b}}function r(a){if(l.call(o,a)){var b=o[a];delete o[a];t[a]=!0;s.apply(m,b)}if(!l.call(h,a)&&!l.call(t,a))throw Error("No "+a);return h[a]}function x(a){var b,c=a?a.indexOf("!"):-1;-1<c&&(b=
a.substring(0,c),a=a.substring(c+1,a.length));return[b,a]}var s,i,u,p,h={},o={},j={},t={},l=Object.prototype.hasOwnProperty,y=[].slice;u=function(a,b){var c,f=x(a),d=f[0],a=f[1];d&&(d=q(d,b),c=r(d));d?a=c&&c.normalize?c.normalize(a,z(b)):q(a,b):(a=q(a,b),f=x(a),d=f[0],a=f[1],d&&(c=r(d)));return{f:d?d+"!"+a:a,n:a,pr:d,p:c}};p={require:function(a){return w(a)},exports:function(a){var b=h[a];return"undefined"!==typeof b?b:h[a]={}},module:function(a){return{id:a,uri:"",exports:h[a],config:function(){return j&&
j.config&&j.config[a]||{}}}}};s=function(a,b,c,f){var d,g,i,k,j=[],e,f=f||a;if("function"===typeof c){b=!b.length&&c.length?["require","exports","module"]:b;for(k=0;k<b.length;k+=1)if(i=u(b[k],f),g=i.f,"require"===g)j[k]=p.require(a);else if("exports"===g)j[k]=p.exports(a),e=!0;else if("module"===g)d=j[k]=p.module(a);else if(l.call(h,g)||l.call(o,g)||l.call(t,g))j[k]=r(g);else if(i.p)i.p.load(i.n,w(f,!0),A(g),{}),j[k]=h[g];else throw Error(a+" missing "+g);b=c.apply(h[a],j);if(a)if(d&&d.exports!==
m&&d.exports!==h[a])h[a]=d.exports;else if(b!==m||!e)h[a]=b}else a&&(h[a]=c)};requirejs=require=i=function(a,b,c,f,d){if("string"===typeof a)return p[a]?p[a](b):r(u(a,b).f);a.splice||(j=a,b.splice?(a=b,b=c,c=null):a=m);b=b||function(){};"function"===typeof c&&(c=f,f=d);f?s(m,a,b,c):setTimeout(function(){s(m,a,b,c)},4);return i};i.config=function(a){j=a;j.deps&&i(j.deps,j.callback);return i};define=function(a,b,c){b.splice||(c=b,b=[]);!l.call(h,a)&&!l.call(o,a)&&(o[a]=[a,b,c])};define.amd={jQuery:!0}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:almond', location = '/includes/js/amd/almond-noconflict-post.js' */
window.__require?(window.require=window.__require,window.requirejs=window.__requirejs,window.define=window.__define):delete window.define.amd;try{delete window.__require}catch(e){window.__require=void 0}try{delete window.__requirejs}catch(e$$1){window.__requirejs=void 0}try{delete window.__define}catch(e$$2){window.__define=void 0};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:amd', location = '/includes/js/amd/shim/ajs-amd.js' */
define("ajs",function(){return AJS});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:amd', location = '/includes/js/amd/shim/jquery-amd.js' */
define("jquery",function(){return AJS.$});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:amd', location = '/includes/js/amd/shim/underscore-amd.js' */
define("underscore",function(){return _});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:amd', location = '/includes/js/amd/shim/backbone-amd.js' */
define("backbone",["underscore","jquery"],function(){return Backbone});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:amd', location = '/includes/js/amd/shim/confluence-skate.js' */
define("confluence-skate",function(){return skate});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:mutation-observer', location = '/includes/js/third-party/WeakMap.js' */
/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
"undefined"===typeof WeakMap&&function(){var e=Object.defineProperty,f=Date.now()%1E9,d=function(){this.name="__st"+(1E9*Math.random()>>>0)+(f++ +"__")};d.prototype={set:function(b,a){var c=b[this.name];c&&c[0]===b?c[1]=a:e(b,this.name,{value:[b,a],writable:!0});return this},get:function(b){var a;return(a=b[this.name])&&a[0]===b?a[1]:void 0},"delete":function(b){var a=b[this.name];if(!a||a[0]!==b)return!1;a[0]=a[1]=void 0;return!0},has:function(b){var a=b[this.name];return!a?!1:a[0]===b}};window.WeakMap=
d}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:mutation-observer', location = '/includes/js/third-party/MutationObserver.js' */
/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(j){function r(){l=!1;var a=m;m=[];a.sort(function(a,b){return a.uid_-b.uid_});var b=!1;a.forEach(function(a){var d=a.takeRecords();a.nodes_.forEach(function(b){(b=f.get(b))&&b.forEach(function(b){b.observer===a&&b.removeTransientObservers()})});d.length&&(a.callback_(d,a),b=!0)});b&&r()}function n(a,b){for(var c=a;c;c=c.parentNode){var d=f.get(c);if(d)for(var e=0;e<d.length;e++){var g=d[e],h=g.options;if(c===a||h.subtree)(h=b(h))&&g.enqueue(h)}}}function o(a){this.callback_=a;this.nodes_=
[];this.records_=[];this.uid_=++w}function s(a,b){this.type=a;this.target=b;this.addedNodes=[];this.removedNodes=[];this.oldValue=this.attributeNamespace=this.attributeName=this.nextSibling=this.previousSibling=null}function p(a,b){return k=new s(a,b)}function t(a){if(g)return g;var b=k,c=new s(b.type,b.target);c.addedNodes=b.addedNodes.slice();c.removedNodes=b.removedNodes.slice();c.previousSibling=b.previousSibling;c.nextSibling=b.nextSibling;c.attributeName=b.attributeName;c.attributeNamespace=
b.attributeNamespace;c.oldValue=b.oldValue;g=c;g.oldValue=a;return g}function u(a,b,c){this.observer=a;this.target=b;this.options=c;this.transientObservedNodes=[]}var f=new WeakMap,i;if(/Trident|Edge/.test(navigator.userAgent))i=setTimeout;else if(window.setImmediate)i=window.setImmediate;else{var q=[],v=String(Math.random());window.addEventListener("message",function(a){a.data===v&&(a=q,q=[],a.forEach(function(a){a()}))});i=function(a){q.push(a);window.postMessage(v,"*")}}var l=!1,m=[],w=0;o.prototype=
{observe:function(a,b){a=window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(a)||a;if(!b.childList&&!b.attributes&&!b.characterData||b.attributeOldValue&&!b.attributes||b.attributeFilter&&b.attributeFilter.length&&!b.attributes||b.characterDataOldValue&&!b.characterData)throw new SyntaxError;var c=f.get(a);c||f.set(a,c=[]);for(var d,e=0;e<c.length;e++)if(c[e].observer===this){d=c[e];d.removeListeners();d.options=b;break}d||(d=new u(this,a,b),c.push(d),this.nodes_.push(a));d.addListeners()},
disconnect:function(){this.nodes_.forEach(function(a){for(var a=f.get(a),b=0;b<a.length;b++){var c=a[b];if(c.observer===this){c.removeListeners();a.splice(b,1);break}}},this);this.records_=[]},takeRecords:function(){var a=this.records_;this.records_=[];return a}};var k,g;u.prototype={enqueue:function(a){var b=this.observer.records_,c=b.length;if(0<b.length){var d=b[c-1];d=d===a?d:g&&(d===g||d===k)?g:null;if(d){b[c-1]=d;return}}else m.push(this.observer),l||(l=!0,i(r));b[c]=a},addListeners:function(){this.addListeners_(this.target)},
addListeners_:function(a){var b=this.options;b.attributes&&a.addEventListener("DOMAttrModified",this,!0);b.characterData&&a.addEventListener("DOMCharacterDataModified",this,!0);b.childList&&a.addEventListener("DOMNodeInserted",this,!0);(b.childList||b.subtree)&&a.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(a){var b=this.options;b.attributes&&a.removeEventListener("DOMAttrModified",this,!0);b.characterData&&a.removeEventListener("DOMCharacterDataModified",
this,!0);b.childList&&a.removeEventListener("DOMNodeInserted",this,!0);(b.childList||b.subtree)&&a.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(a){if(a!==this.target){this.addListeners_(a);this.transientObservedNodes.push(a);var b=f.get(a);b||f.set(a,b=[]);b.push(this)}},removeTransientObservers:function(){var a=this.transientObservedNodes;this.transientObservedNodes=[];a.forEach(function(a){this.removeListeners_(a);for(var a=f.get(a),c=0;c<a.length;c++)if(a[c]===this){a.splice(c,
1);break}},this)},handleEvent:function(a){a.stopImmediatePropagation();switch(a.type){case "DOMAttrModified":var b=a.attrName,c=a.relatedNode.namespaceURI,d=a.target,e=new p("attributes",d);e.attributeName=b;e.attributeNamespace=c;var f=a.attrChange===MutationEvent.ADDITION?null:a.prevValue;n(d,function(a){if(a.attributes&&(!a.attributeFilter||!a.attributeFilter.length||!(-1===a.attributeFilter.indexOf(b)&&-1===a.attributeFilter.indexOf(c))))return a.attributeOldValue?t(f):e});break;case "DOMCharacterDataModified":d=
a.target;e=p("characterData",d);f=a.prevValue;n(d,function(a){if(a.characterData)return a.characterDataOldValue?t(f):e});break;case "DOMNodeRemoved":this.addTransientObserver(a.target);case "DOMNodeInserted":var h=a.target,i;"DOMNodeInserted"===a.type?(d=[h],i=[]):(d=[],i=[h]);var j=h.previousSibling,h=h.nextSibling,e=p("childList",a.target.parentNode);e.addedNodes=d;e.removedNodes=i;e.previousSibling=j;e.nextSibling=h;n(a.relatedNode,function(a){if(a.childList)return e})}k=g=void 0}};j.JsMutationObserver=
o;j.MutationObserver||(j.MutationObserver=o)})(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:data', location = 'js/data/data.js' */
(function(){if(!window.WRM){window.WRM={}}function a(c){if(!c){return c}return JSON.parse(c)}function b(d,c){return Object.prototype.hasOwnProperty.call(d,c)}WRM.data={claim:function(c){if(WRM._unparsedData&&b(WRM._unparsedData,c)){var g=WRM._unparsedData[c];try{var d=a(g);delete WRM._unparsedData[c];return d}catch(f){console&&console.log&&console.log("JSON Error parsing data with key "+c+": "+f)}}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:context-path', location = 'js/data/context-path.js' */
(function(){var a=null;(window.AJS||(window.AJS={}));AJS.contextPath=function(){if(a===null){a=WRM.data.claim("com.atlassian.plugins.atlassian-plugins-webresource-plugin:context-path.context-path")}return a};AJS.contextPath._reset=function(){a=null}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.jquery:jquery', location = '/jquery.js' */
(function(q){function Ra(a,b,c){if(void 0===c&&1===a.nodeType)if(c="data-"+b.replace(Xb,"-$1").toLowerCase(),c=a.getAttribute(c),"string"===typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:d.isNumeric(c)?+c:Yb.test(c)?d.parseJSON(c):c}catch(e){}d.data(a,b,c)}else c=void 0;return c}function va(a){for(var b in a)if(!("data"===b&&d.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Sa(a,b,c){var e=b+"defer",f=b+"queue",g=b+"mark",i=d._data(a,e);i&&(("queue"===c||!d._data(a,f))&&
("mark"===c||!d._data(a,g)))&&setTimeout(function(){!d._data(a,f)&&!d._data(a,g)&&(d.removeData(a,e,!0),i.fire())},0)}function C(){return!1}function aa(){return!0}function Ta(a,b,c){b=b||0;if(d.isFunction(b))return d.grep(a,function(a,e){return!!b.call(a,e,a)===c});if(b.nodeType)return d.grep(a,function(a){return a===b===c});if("string"===typeof b){var e=d.grep(a,function(a){return 1===a.nodeType});if(Zb.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a){return 0<=d.inArray(a,
b)===c})}function Ua(a){var b=Va.split("|"),a=a.createDocumentFragment();if(a.createElement)for(;b.length;)a.createElement(b.pop());return a}function Wa(a,b){if(1===b.nodeType&&d.hasData(a)){var c,e,f;e=d._data(a);var g=d._data(b,e),i=e.events;if(i)for(c in delete g.handle,g.events={},i){e=0;for(f=i[c].length;e<f;e++)d.event.add(b,c,i[c][e])}g.data&&(g.data=d.extend({},g.data))}}function Xa(a,b){var c;if(1===b.nodeType){b.clearAttributes&&b.clearAttributes();b.mergeAttributes&&b.mergeAttributes(a);
c=b.nodeName.toLowerCase();if("object"===c)b.outerHTML=a.outerHTML;else if("input"===c&&("checkbox"===a.type||"radio"===a.type)){if(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value)b.value=a.value}else"option"===c?b.selected=a.defaultSelected:"input"===c||"textarea"===c?b.defaultValue=a.defaultValue:"script"===c&&b.text!==a.text&&(b.text=a.text);b.removeAttribute(d.expando);b.removeAttribute("_submit_attached");b.removeAttribute("_change_attached")}}function ba(a){return"undefined"!==
typeof a.getElementsByTagName?a.getElementsByTagName("*"):"undefined"!==typeof a.querySelectorAll?a.querySelectorAll("*"):[]}function Ya(a){if("checkbox"===a.type||"radio"===a.type)a.defaultChecked=a.checked}function Za(a){var b=(a.nodeName||"").toLowerCase();"input"===b?Ya(a):"script"!==b&&"undefined"!==typeof a.getElementsByTagName&&d.grep(a.getElementsByTagName("input"),Ya)}function $a(a,b,c){var e="width"===b?a.offsetWidth:a.offsetHeight,f="width"===b?1:0;if(0<e){if("border"!==c)for(;4>f;f+=2)c||
(e-=parseFloat(d.css(a,"padding"+H[f]))||0),e="margin"===c?e+(parseFloat(d.css(a,c+H[f]))||0):e-(parseFloat(d.css(a,"border"+H[f]+"Width"))||0);return e+"px"}e=I(a,b);if(0>e||null==e)e=a.style[b];if(wa.test(e))return e;e=parseFloat(e)||0;if(c)for(;4>f;f+=2)e+=parseFloat(d.css(a,"padding"+H[f]))||0,"padding"!==c&&(e+=parseFloat(d.css(a,"border"+H[f]+"Width"))||0),"margin"===c&&(e+=parseFloat(d.css(a,c+H[f]))||0);return e+"px"}function ab(a){return function(b,c){"string"!==typeof b&&(c=b,b="*");if(d.isFunction(c))for(var e=
b.toLowerCase().split(bb),f=0,g=e.length,i,h;f<g;f++)i=e[f],(h=/^\+/.test(i))&&(i=i.substr(1)||"*"),i=a[i]=a[i]||[],i[h?"unshift":"push"](c)}}function ca(a,b,c,e,d,g){d=d||b.dataTypes[0];g=g||{};g[d]=!0;for(var d=a[d],i=0,h=d?d.length:0,k=a===xa,n;i<h&&(k||!n);i++)n=d[i](b,c,e),"string"===typeof n&&(!k||g[n]?n=void 0:(b.dataTypes.unshift(n),n=ca(a,b,c,e,n,g)));if((k||!n)&&!g["*"])n=ca(a,b,c,e,"*",g);return n}function cb(a,b){var c,e,f=d.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((f[c]?
a:e||(e={}))[c]=b[c]);e&&d.extend(!0,a,e)}function ya(a,b,c,e){if(d.isArray(b))d.each(b,function(b,d){c||$b.test(a)?e(a,d):ya(a+"["+("object"===typeof d?b:"")+"]",d,c,e)});else if(!c&&"object"===d.type(b))for(var f in b)ya(a+"["+f+"]",b[f],c,e);else e(a,b)}function db(){try{return new q.XMLHttpRequest}catch(a){}}function eb(){setTimeout(ac,0);return da=d.now()}function ac(){da=void 0}function D(a,b){var c={};d.each(ea.concat.apply([],ea.slice(0,b)),function(){c[this]=a});return c}function fb(a){if(!za[a]){var b=
l.body,c=d("<"+a+">").appendTo(b),e=c.css("display");c.remove();if("none"===e||""===e){v||(v=l.createElement("iframe"),v.frameBorder=v.width=v.height=0);b.appendChild(v);if(!K||!v.createElement)K=(v.contentWindow||v.contentDocument).document,K.write((d.support.boxModel?"<!doctype html>":"")+"<html><body>"),K.close();c=K.createElement(a);K.body.appendChild(c);e=d.css(c,"display");b.removeChild(v)}za[a]=e}return za[a]}function gb(a){return d.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:
!1}var l=q.document,bc=q.location,d,hb=function(){if(!j.isReady){try{l.documentElement.doScroll("left")}catch(a){setTimeout(hb,1);return}j.ready()}},j=function(a,b){return new j.fn.init(a,b,ib)},cc=q.jQuery,dc=q.$,ib,ec=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,jb=/\S/,kb=/^\s+/,lb=/\s+$/,fc=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,gc=/^[\],:{}\s]*$/,hc=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,ic=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,jc=/(?:^|:|,)(?:\s*\[)+/g,kc=/(webkit)[ \/]([\w.]+)/,
lc=/(opera)(?:.*version)?[ \/]([\w.]+)/,mc=/(msie) ([\w.]+)/,nc=/(mozilla)(?:.*? rv:([\w.]+))?/,oc=/-([a-z]|[0-9])/ig,pc=/^-ms-/,qc=function(a,b){return(b+"").toUpperCase()},rc=q.navigator.userAgent,fa,ga,P,sc=Object.prototype.toString,Aa=Object.prototype.hasOwnProperty,Ba=Array.prototype.push,X=Array.prototype.slice,mb=String.prototype.trim,nb=Array.prototype.indexOf,ob={};j.fn=j.prototype={constructor:j,init:function(a,b,c){var e;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=
1,this;if("body"===a&&!b&&l.body)return this.context=l,this[0]=l.body,this.selector=a,this.length=1,this;if("string"===typeof a){if((e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&3<=a.length?[null,a,null]:ec.exec(a))&&(e[1]||!b)){if(e[1])return c=(b=b instanceof j?b[0]:b)?b.ownerDocument||b:l,(a=fc.exec(a))?j.isPlainObject(b)?(a=[l.createElement(a[1])],j.fn.attr.call(a,b,!0)):a=[c.createElement(a[1])]:(a=j.buildFragment([e[1]],[c]),a=(a.cacheable?j.clone(a.fragment):a.fragment).childNodes),j.merge(this,
a);if((b=l.getElementById(e[2]))&&b.parentNode){if(b.id!==e[2])return c.find(a);this.length=1;this[0]=b}this.context=l;this.selector=a;return this}return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a)}if(j.isFunction(a))return c.ready(a);void 0!==a.selector&&(this.selector=a.selector,this.context=a.context);return j.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return X.call(this,0)},get:function(a){return null==a?this.toArray():
0>a?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();j.isArray(a)?Ba.apply(e,a):j.merge(e,a);e.prevObject=this;e.context=this.context;"find"===b?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return j.each(this,a,b)},ready:function(a){j.bindReady();ga.add(a);return this},eq:function(a){a=+a;return-1===a?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},
slice:function(){return this.pushStack(X.apply(this,arguments),"slice",X.call(arguments).join(","))},map:function(a){return this.pushStack(j.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:Ba,sort:[].sort,splice:[].splice};j.fn.init.prototype=j.fn;j.extend=j.fn.extend=function(){var a,b,c,e,d,g=arguments[0]||{},i=1,h=arguments.length,k=!1;"boolean"===typeof g&&(k=g,g=arguments[1]||{},i=2);"object"!==typeof g&&!j.isFunction(g)&&(g=
{});h===i&&(g=this,--i);for(;i<h;i++)if(null!=(a=arguments[i]))for(b in a)c=g[b],e=a[b],g!==e&&(k&&e&&(j.isPlainObject(e)||(d=j.isArray(e)))?(d?(d=!1,c=c&&j.isArray(c)?c:[]):c=c&&j.isPlainObject(c)?c:{},g[b]=j.extend(k,c,e)):void 0!==e&&(g[b]=e));return g};j.extend({noConflict:function(a){q.$===j&&(q.$=dc);a&&q.jQuery===j&&(q.jQuery=cc);return j},isReady:!1,readyWait:1,holdReady:function(a){a?j.readyWait++:j.ready(!0)},ready:function(a){if(!0===a&&!--j.readyWait||!0!==a&&!j.isReady){if(!l.body)return setTimeout(j.ready,
1);j.isReady=!0;!0!==a&&0<--j.readyWait||(ga.fireWith(l,[j]),j.fn.trigger&&j(l).trigger("ready").off("ready"))}},bindReady:function(){if(!ga){ga=j.Callbacks("once memory");if("complete"===l.readyState)return setTimeout(j.ready,1);if(l.addEventListener)l.addEventListener("DOMContentLoaded",P,!1),q.addEventListener("load",j.ready,!1);else if(l.attachEvent){l.attachEvent("onreadystatechange",P);q.attachEvent("onload",j.ready);var a=!1;try{a=null==q.frameElement}catch(b){}l.documentElement.doScroll&&
a&&hb()}}},isFunction:function(a){return"function"===j.type(a)},isArray:Array.isArray||function(a){return"array"===j.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):ob[sc.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==j.type(a)||a.nodeType||j.isWindow(a))return!1;try{if(a.constructor&&!Aa.call(a,"constructor")&&!Aa.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);
return void 0===c||Aa.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw Error(a);},parseJSON:function(a){if("string"!==typeof a||!a)return null;a=j.trim(a);if(q.JSON&&q.JSON.parse)return q.JSON.parse(a);if(gc.test(a.replace(hc,"@").replace(ic,"]").replace(jc,"")))return(new Function("return "+a))();j.error("Invalid JSON: "+a)},parseXML:function(a){if("string"!==typeof a||!a)return null;var b,c;try{q.DOMParser?(c=new DOMParser,b=c.parseFromString(a,"text/xml")):
(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a))}catch(e){b=void 0}(!b||!b.documentElement||b.getElementsByTagName("parsererror").length)&&j.error("Invalid XML: "+a);return b},noop:function(){},globalEval:function(a){a&&jb.test(a)&&(q.execScript||function(a){q.eval.call(q,a)})(a)},camelCase:function(a){return a.replace(pc,"ms-").replace(oc,qc)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,c){var e,d=0,g=a.length,i=void 0===
g||j.isFunction(a);if(c)if(i)for(e in a){if(!1===b.apply(a[e],c))break}else for(;d<g&&!1!==b.apply(a[d++],c););else if(i)for(e in a){if(!1===b.call(a[e],e,a[e]))break}else for(;d<g&&!1!==b.call(a[d],d,a[d++]););return a},trim:mb?function(a){return null==a?"":mb.call(a)}:function(a){return null==a?"":a.toString().replace(kb,"").replace(lb,"")},makeArray:function(a,b){var c=b||[];if(null!=a){var e=j.type(a);null==a.length||"string"===e||"function"===e||"regexp"===e||j.isWindow(a)?Ba.call(c,a):j.merge(c,
a)}return c},inArray:function(a,b,c){var e;if(b){if(nb)return nb.call(b,a,c);e=b.length;for(c=c?0>c?Math.max(0,e+c):c:0;c<e;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=a.length,e=0;if("number"===typeof b.length)for(var d=b.length;e<d;e++)a[c++]=b[e];else for(;void 0!==b[e];)a[c++]=b[e++];a.length=c;return a},grep:function(a,b,c){for(var e=[],d,c=!!c,g=0,i=a.length;g<i;g++)d=!!b(a[g],g),c!==d&&e.push(a[g]);return e},map:function(a,b,c){var e,d,g=[],i=0,h=a.length;if(a instanceof
j||void 0!==h&&"number"===typeof h&&(0<h&&a[0]&&a[h-1]||0===h||j.isArray(a)))for(;i<h;i++)e=b(a[i],i,c),null!=e&&(g[g.length]=e);else for(d in a)e=b(a[d],d,c),null!=e&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,b){if("string"===typeof b)var c=a[b],b=a,a=c;if(j.isFunction(a)){var e=X.call(arguments,2),c=function(){return a.apply(b,e.concat(X.call(arguments)))};c.guid=a.guid=a.guid||c.guid||j.guid++;return c}},access:function(a,b,c,e,d,g,i){var h,k=null==c,n=0,r=a.length;if(c&&
"object"===typeof c){for(n in c)j.access(a,b,n,c[n],1,g,e);d=1}else if(void 0!==e){h=void 0===i&&j.isFunction(e);k&&(h?(h=b,b=function(a,b,c){return h.call(j(a),c)}):(b.call(a,e),b=null));if(b)for(;n<r;n++)b(a[n],c,h?e.call(a[n],n,b(a[n],c)):e,i);d=1}return d?a:k?b.call(a):r?b(a[0],c):g},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();a=kc.exec(a)||lc.exec(a)||mc.exec(a)||0>a.indexOf("compatible")&&nc.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},sub:function(){function a(b,
e){return new a.fn.init(b,e)}j.extend(!0,a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(c,e){e&&(e instanceof j&&!(e instanceof a))&&(e=a(e));return j.fn.init.call(this,c,e,b)};a.fn.init.prototype=a.fn;var b=a(l);return a},browser:{}});j.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){ob["[object "+b+"]"]=b.toLowerCase()});fa=j.uaMatch(rc);fa.browser&&(j.browser[fa.browser]=!0,j.browser.version=fa.version);
j.browser.webkit&&(j.browser.safari=!0);jb.test("\u00a0")&&(kb=/^[\s\xA0]+/,lb=/[\s\xA0]+$/);ib=j(l);l.addEventListener?P=function(){l.removeEventListener("DOMContentLoaded",P,false);j.ready()}:l.attachEvent&&(P=function(){if(l.readyState==="complete"){l.detachEvent("onreadystatechange",P);j.ready()}});d=j;var qb={};d.Callbacks=function(a){var b;if(a){if(!(b=qb[a])){b=a;var c=qb[b]={},e,f;b=b.split(/\s+/);e=0;for(f=b.length;e<f;e++)c[b[e]]=true;b=c}}else b={};var a=b,g=[],i=[],h,k,n,r,L,Q,l=function(b){var c,
e,f,h;c=0;for(e=b.length;c<e;c++){f=b[c];h=d.type(f);h==="array"?l(f):h==="function"&&(!a.unique||!o.has(f))&&g.push(f)}},j=function(b,c){c=c||[];h=!a.memory||[b,c];n=k=true;Q=r||0;r=0;for(L=g.length;g&&Q<L;Q++)if(g[Q].apply(b,c)===false&&a.stopOnFalse){h=true;break}n=false;if(g)if(a.once)h===true?o.disable():g=[];else if(i&&i.length){h=i.shift();o.fireWith(h[0],h[1])}},o={add:function(){if(g){var a=g.length;l(arguments);if(n)L=g.length;else if(h&&h!==true){r=a;j(h[0],h[1])}}return this},remove:function(){if(g)for(var b=
arguments,c=0,e=b.length;c<e;c++)for(var d=0;d<g.length;d++)if(b[c]===g[d]){if(n&&d<=L){L--;d<=Q&&Q--}g.splice(d--,1);if(a.unique)break}return this},has:function(a){if(g)for(var b=0,c=g.length;b<c;b++)if(a===g[b])return true;return false},empty:function(){g=[];return this},disable:function(){g=i=h=void 0;return this},disabled:function(){return!g},lock:function(){i=void 0;(!h||h===true)&&o.disable();return this},locked:function(){return!i},fireWith:function(b,c){i&&(n?a.once||i.push([b,c]):(!a.once||
!h)&&j(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!k}};return o};var Ca=[].slice;d.extend({Deferred:function(a){var b=d.Callbacks("once memory"),c=d.Callbacks("once memory"),e=d.Callbacks("memory"),f="pending",g={resolve:b,reject:c,notify:e},i={done:b.add,fail:c.add,progress:e.add,state:function(){return f},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){h.done(a).fail(b).progress(c);return this},always:function(){h.done.apply(h,arguments).fail.apply(h,
arguments);return this},pipe:function(a,b,c){return d.Deferred(function(e){d.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],f=b[1],g;if(d.isFunction(c))h[a](function(){if((g=c.apply(this,arguments))&&d.isFunction(g.promise))g.promise().then(e.resolve,e.reject,e.notify);else e[f+"With"](this===h?e:this,[g])});else h[a](e[f])})}).promise()},promise:function(a){if(a==null)a=i;else for(var b in i)a[b]=i[b];return a}},h=i.promise({}),k;for(k in g){h[k]=g[k].fire;
h[k+"With"]=g[k].fireWith}h.done(function(){f="resolved"},c.disable,e.lock).fail(function(){f="rejected"},b.disable,e.lock);a&&a.call(h,h);return h},when:function(a){function b(a){return function(b){e[a]=arguments.length>1?Ca.call(arguments,0):b;--h||k.resolveWith(k,e)}}function c(a){return function(b){i[a]=arguments.length>1?Ca.call(arguments,0):b;k.notifyWith(n,i)}}var e=Ca.call(arguments,0),f=0,g=e.length,i=Array(g),h=g,k=g<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),n=k.promise();if(g>1){for(;f<
g;f++)e[f]&&e[f].promise&&d.isFunction(e[f].promise)?e[f].promise().then(b(f),k.reject,c(f)):--h;h||k.resolveWith(k,e)}else k!==a&&k.resolveWith(k,g?[a]:[]);return n}});var tc=d,Da;var s,Ea,R,ha,ia,u,E,Y,ja,Fa,S,m=l.createElement("div");m.setAttribute("className","t");m.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";Ea=m.getElementsByTagName("*");R=m.getElementsByTagName("a")[0];if(!Ea||!Ea.length||!R)Da={};else{ha=l.createElement("select");
ia=ha.appendChild(l.createElement("option"));u=m.getElementsByTagName("input")[0];s={leadingWhitespace:3===m.firstChild.nodeType,tbody:!m.getElementsByTagName("tbody").length,htmlSerialize:!!m.getElementsByTagName("link").length,style:/top/.test(R.getAttribute("style")),hrefNormalized:"/a"===R.getAttribute("href"),opacity:/^0.55/.test(R.style.opacity),cssFloat:!!R.style.cssFloat,checkOn:"on"===u.value,optSelected:ia.selected,getSetAttribute:"t"!==m.className,enctype:!!l.createElement("form").enctype,
html5Clone:"<:nav></:nav>"!==l.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0};d.boxModel=s.boxModel="CSS1Compat"===l.compatMode;u.checked=!0;s.noCloneChecked=u.cloneNode(!0).checked;ha.disabled=!0;s.optDisabled=!ia.disabled;try{delete m.test}catch(kd){s.deleteExpando=!1}!m.addEventListener&&(m.attachEvent&&m.fireEvent)&&(m.attachEvent("onclick",
function(){s.noCloneEvent=false}),m.cloneNode(!0).fireEvent("onclick"));u=l.createElement("input");u.value="t";u.setAttribute("type","radio");s.radioValue="t"===u.value;u.setAttribute("checked","checked");u.setAttribute("name","t");m.appendChild(u);E=l.createDocumentFragment();E.appendChild(m.lastChild);s.checkClone=E.cloneNode(!0).cloneNode(!0).lastChild.checked;s.appendChecked=u.checked;E.removeChild(u);E.appendChild(m);if(m.attachEvent)for(Fa in{submit:1,change:1,focusin:1})ja="on"+Fa,S=ja in m,
S||(m.setAttribute(ja,"return;"),S="function"===typeof m[ja]),s[Fa+"Bubbles"]=S;E.removeChild(m);E=ha=ia=m=u=null;d(function(){var a,b,c,e,f=l.getElementsByTagName("body")[0];if(f){a=l.createElement("div");a.style.cssText="padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px";f.insertBefore(a,f.firstChild);m=l.createElement("div");a.appendChild(m);m.innerHTML="<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>";
Y=m.getElementsByTagName("td");S=Y[0].offsetHeight===0;Y[0].style.display="";Y[1].style.display="none";s.reliableHiddenOffsets=S&&Y[0].offsetHeight===0;if(q.getComputedStyle){m.innerHTML="";b=l.createElement("div");b.style.width="0";b.style.marginRight="0";m.style.width="2px";m.appendChild(b);s.reliableMarginRight=(parseInt((q.getComputedStyle(b,null)||{marginRight:0}).marginRight,10)||0)===0}if(typeof m.style.zoom!=="undefined"){m.innerHTML="";m.style.width=m.style.padding="1px";m.style.border=0;
m.style.overflow="hidden";m.style.display="inline";m.style.zoom=1;s.inlineBlockNeedsLayout=m.offsetWidth===3;m.style.display="block";m.style.overflow="visible";m.innerHTML="<div style='width:5px;'></div>";s.shrinkWrapBlocks=m.offsetWidth!==3}m.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;";m.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
b=m.firstChild;c=b.firstChild;e=b.nextSibling.firstChild.firstChild;e={doesNotAddBorder:c.offsetTop!==5,doesAddBorderForTableAndCells:e.offsetTop===5};c.style.position="fixed";c.style.top="20px";e.fixedPosition=c.offsetTop===20||c.offsetTop===15;c.style.position=c.style.top="";b.style.overflow="hidden";b.style.position="relative";e.subtractsBorderForOverflowNotVisible=c.offsetTop===-5;e.doesNotIncludeMarginInBodyOffset=f.offsetTop!==1;if(q.getComputedStyle){m.style.marginTop="1%";s.pixelMargin=(q.getComputedStyle(m,
null)||{marginTop:0}).marginTop!=="1%"}if(typeof a.style.zoom!=="undefined")a.style.zoom=1;f.removeChild(a);m=null;d.extend(s,e)}});Da=s}tc.support=Da;var Yb=/^(?:\{.*\}|\[.*\])$/,Xb=/([A-Z])/g;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!va(a)},data:function(a,b,c,e){if(d.acceptData(a)){var f;f=
d.expando;var g=typeof b==="string",i=a.nodeType,h=i?d.cache:a,k=i?a[f]:a[f]&&f,n=b==="events";if(k&&h[k]&&(n||e||h[k].data)||!(g&&c===void 0)){k||(i?a[f]=k=++d.uuid:k=f);if(!h[k]){h[k]={};if(!i)h[k].toJSON=d.noop}if(typeof b==="object"||typeof b==="function")e?h[k]=d.extend(h[k],b):h[k].data=d.extend(h[k].data,b);f=a=h[k];if(!e){if(!a.data)a.data={};a=a.data}c!==void 0&&(a[d.camelCase(b)]=c);if(n&&!a[b])return f.events;if(g){c=a[b];c==null&&(c=a[d.camelCase(b)])}else c=a;return c}}},removeData:function(a,
b,c){if(d.acceptData(a)){var e,f,g,i=d.expando,h=a.nodeType,k=h?d.cache:a,n=h?a[i]:i;if(k[n]){if(b)if(e=c?k[n]:k[n].data){if(!d.isArray(b))if(b in e)b=[b];else{b=d.camelCase(b);b=b in e?[b]:b.split(" ")}f=0;for(g=b.length;f<g;f++)delete e[b[f]];if(!(c?va:d.isEmptyObject)(e))return}if(!c){delete k[n].data;if(!va(k[n]))return}d.support.deleteExpando||!k.setInterval?delete k[n]:k[n]=null;h&&(d.support.deleteExpando?delete a[i]:a.removeAttribute?a.removeAttribute(i):a[i]=null)}}},_data:function(a,b,c){return d.data(a,
b,c,true)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});d.fn.extend({data:function(a,b){var c,e,f,g,i,h=this[0],k=0,n=null;if(a===void 0){if(this.length){n=d.data(h);if(h.nodeType===1&&!d._data(h,"parsedAttrs")){f=h.attributes;for(i=f.length;k<i;k++){g=f[k].name;if(g.indexOf("data-")===0){g=d.camelCase(g.substring(5));Ra(h,g,n[g])}}d._data(h,"parsedAttrs",true)}}return n}if(typeof a==="object")return this.each(function(){d.data(this,
a)});c=a.split(".",2);c[1]=c[1]?"."+c[1]:"";e=c[1]+"!";return d.access(this,function(b){if(b===void 0){n=this.triggerHandler("getData"+e,[c[0]]);if(n===void 0&&h){n=d.data(h,a);n=Ra(h,a,n)}return n===void 0&&c[1]?this.data(c[0]):n}c[1]=b;this.each(function(){var f=d(this);f.triggerHandler("setData"+e,c);d.data(this,a,b);f.triggerHandler("changeData"+e,c)})},null,b,arguments.length>1,null,false)},removeData:function(a){return this.each(function(){d.removeData(this,a)})}});d.extend({_mark:function(a,
b){if(a){b=(b||"fx")+"mark";d._data(a,b,(d._data(a,b)||0)+1)}},_unmark:function(a,b,c){if(a!==true){c=b;b=a;a=false}if(b){var c=c||"fx",e=c+"mark";if(a=a?0:(d._data(b,e)||1)-1)d._data(b,e,a);else{d.removeData(b,e,true);Sa(b,c,"mark")}}},queue:function(a,b,c){var e;if(a){b=(b||"fx")+"queue";e=d._data(a,b);c&&(!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c));return e||[]}},dequeue:function(a,b){var b=b||"fx",c=d.queue(a,b),e=c.shift(),f={};e==="inprogress"&&(e=c.shift());if(e){b==="fx"&&c.unshift("inprogress");
d._data(a,b+".run",f);e.call(a,function(){d.dequeue(a,b)},f)}if(!c.length){d.removeData(a,b+"queue "+b+".run",true);Sa(a,b,"queue")}}});d.fn.extend({queue:function(a,b){var c=2;if(typeof a!=="string"){b=a;a="fx";c--}return arguments.length<c?d.queue(this[0],a):b===void 0?this:this.each(function(){var c=d.queue(this,a,b);a==="fx"&&c[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a;return this.queue(b||
"fx",function(b,e){var d=setTimeout(b,a);e.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){function c(){--i||e.resolveWith(f,[f])}if(typeof a!=="string"){b=a;a=void 0}for(var a=a||"fx",e=d.Deferred(),f=this,g=f.length,i=1,h=a+"defer",k=a+"queue",n=a+"mark",r;g--;)if(r=d.data(f[g],h,void 0,true)||(d.data(f[g],k,void 0,true)||d.data(f[g],n,void 0,true))&&d.data(f[g],h,d.Callbacks("once memory"),true)){i++;r.add(c)}c();return e.promise(b)}});
var rb=/[\n\t\r]/g,ka=/\s+/,uc=/\r/g,vc=/^(?:button|input)$/i,wc=/^(?:button|input|object|select|textarea)$/i,xc=/^a(?:rea)?$/i,sb=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,tb=d.support.getSetAttribute,x,ub,vb;d.fn.extend({attr:function(a,b){return d.access(this,d.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){d.removeAttr(this,a)})},prop:function(a,b){return d.access(this,d.prop,
a,b,arguments.length>1)},removeProp:function(a){a=d.propFix[a]||a;return this.each(function(){try{this[a]=void 0;delete this[a]}catch(b){}})},addClass:function(a){var b,c,e,f,g,i,h;if(d.isFunction(a))return this.each(function(b){d(this).addClass(a.call(this,b,this.className))});if(a&&typeof a==="string"){b=a.split(ka);c=0;for(e=this.length;c<e;c++){f=this[c];if(f.nodeType===1)if(!f.className&&b.length===1)f.className=a;else{g=" "+f.className+" ";i=0;for(h=b.length;i<h;i++)~g.indexOf(" "+b[i]+" ")||
(g=g+(b[i]+" "));f.className=d.trim(g)}}}return this},removeClass:function(a){var b,c,e,f,g,i,h;if(d.isFunction(a))return this.each(function(b){d(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a==="string"||a===void 0){b=(a||"").split(ka);c=0;for(e=this.length;c<e;c++){f=this[c];if(f.nodeType===1&&f.className)if(a){g=(" "+f.className+" ").replace(rb," ");i=0;for(h=b.length;i<h;i++)g=g.replace(" "+b[i]+" "," ");f.className=d.trim(g)}else f.className=""}}return this},toggleClass:function(a,
b){var c=typeof a,e=typeof b==="boolean";return d.isFunction(a)?this.each(function(c){d(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string")for(var f,g=0,i=d(this),h=b,k=a.split(ka);f=k[g++];){h=e?h:!i.hasClass(f);i[h?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean"){this.className&&d._data(this,"__className__",this.className);this.className=this.className||a===false?"":d._data(this,"__className__")||""}})},hasClass:function(a){for(var a=
" "+a+" ",b=0,c=this.length;b<c;b++)if(this[b].nodeType===1&&(" "+this[b].className+" ").replace(rb," ").indexOf(a)>-1)return true;return false},val:function(a){var b,c,e,f=this[0];if(arguments.length){e=d.isFunction(a);return this.each(function(c){var f=d(this);if(this.nodeType===1){c=e?a.call(this,c,f.val()):a;c==null?c="":typeof c==="number"?c=c+"":d.isArray(c)&&(c=d.map(c,function(a){return a==null?"":a+""}));b=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()];if(!b||!("set"in b)||
b.set(this,c,"value")===void 0)this.value=c}})}if(f){if((b=d.valHooks[f.type]||d.valHooks[f.nodeName.toLowerCase()])&&"get"in b&&(c=b.get(f,"value"))!==void 0)return c;c=f.value;return typeof c==="string"?c.replace(uc,""):c==null?"":c}}});d.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,e=a.selectedIndex,f=[],g=a.options,i=a.type==="select-one";if(e<0)return null;a=i?e:0;for(c=i?e+1:g.length;a<c;a++){b=g[a];
if(b.selected&&(d.support.optDisabled?!b.disabled:b.getAttribute("disabled")===null)&&(!b.parentNode.disabled||!d.nodeName(b.parentNode,"optgroup"))){b=d(b).val();if(i)return b;f.push(b)}}return i&&!f.length&&g.length?d(g[e]).val():f},set:function(a,b){var c=d.makeArray(b);d(a).find("option").each(function(){this.selected=d.inArray(d(this).val(),c)>=0});if(!c.length)a.selectedIndex=-1;return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,b,c,e){var f,
g,i=a.nodeType;if(a&&!(i===3||i===8||i===2)){if(e&&b in d.attrFn)return d(a)[b](c);if(typeof a.getAttribute==="undefined")return d.prop(a,b,c);if(e=i!==1||!d.isXMLDoc(a)){b=b.toLowerCase();g=d.attrHooks[b]||(sb.test(b)?ub:x)}if(c!==void 0)if(c===null)d.removeAttr(a,b);else{if(g&&"set"in g&&e&&(f=g.set(a,c,b))!==void 0)return f;a.setAttribute(b,""+c);return c}else{if(g&&"get"in g&&e&&(f=g.get(a,b))!==null)return f;f=a.getAttribute(b);return f===null?void 0:f}}},removeAttr:function(a,b){var c,e,f,g,
i,h=0;if(b&&a.nodeType===1){e=b.toLowerCase().split(ka);for(g=e.length;h<g;h++)if(f=e[h]){c=d.propFix[f]||f;(i=sb.test(f))||d.attr(a,f,"");a.removeAttribute(tb?f:c);i&&c in a&&(a[c]=false)}}},attrHooks:{type:{set:function(a,b){if(vc.test(a.nodeName)&&a.parentNode)d.error("type property can't be changed");else if(!d.support.radioValue&&b==="radio"&&d.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b);if(c)a.value=c;return b}}},value:{get:function(a,b){return x&&d.nodeName(a,"button")?x.get(a,
b):b in a?a.value:null},set:function(a,b,c){if(x&&d.nodeName(a,"button"))return x.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,b,c){var e,f,g;g=a.nodeType;if(a&&!(g===3||g===8||g===2)){if(g=g!==1||!d.isXMLDoc(a)){b=d.propFix[b]||b;f=d.propHooks[b]}return c!==
void 0?f&&"set"in f&&(e=f.set(a,c,b))!==void 0?e:a[b]=c:f&&"get"in f&&(e=f.get(a,b))!==null?e:a[b]}},propHooks:{tabIndex:{get:function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?parseInt(b.value,10):wc.test(a.nodeName)||xc.test(a.nodeName)&&a.href?0:void 0}}}});d.attrHooks.tabindex=d.propHooks.tabIndex;ub={get:function(a,b){var c,e=d.prop(a,b);return e===true||typeof e!=="boolean"&&(c=a.getAttributeNode(b))&&c.nodeValue!==false?b.toLowerCase():void 0},set:function(a,b,c){if(b===
false)d.removeAttr(a,c);else{b=d.propFix[c]||c;b in a&&(a[b]=true);a.setAttribute(c,c.toLowerCase())}return c}};tb||(vb={name:!0,id:!0,coords:!0},x=d.valHooks.button={get:function(a,b){var c;return(c=a.getAttributeNode(b))&&(vb[b]?c.nodeValue!=="":c.specified)?c.nodeValue:void 0},set:function(a,b,c){var e=a.getAttributeNode(c);if(!e){e=l.createAttribute(c);a.setAttributeNode(e)}return e.nodeValue=b+""}},d.attrHooks.tabindex.set=x.set,d.each(["width","height"],function(a,b){d.attrHooks[b]=d.extend(d.attrHooks[b],
{set:function(a,e){if(e===""){a.setAttribute(b,"auto");return e}}})}),d.attrHooks.contenteditable={get:x.get,set:function(a,b,c){b===""&&(b="false");x.set(a,b,c)}});d.support.hrefNormalized||d.each(["href","src","width","height"],function(a,b){d.attrHooks[b]=d.extend(d.attrHooks[b],{get:function(a){a=a.getAttribute(b,2);return a===null?void 0:a}})});d.support.style||(d.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||void 0},set:function(a,b){return a.style.cssText=""+b}});d.support.optSelected||
(d.propHooks.selected=d.extend(d.propHooks.selected,{get:function(a){if(a=a.parentNode){a.selectedIndex;a.parentNode&&a.parentNode.selectedIndex}return null}}));d.support.enctype||(d.propFix.enctype="encoding");d.support.checkOn||d.each(["radio","checkbox"],function(){d.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}});d.each(["radio","checkbox"],function(){d.valHooks[this]=d.extend(d.valHooks[this],{set:function(a,b){if(d.isArray(b))return a.checked=d.inArray(d(a).val(),
b)>=0}})});var Ga=/^(?:textarea|input|select)$/i,wb=/^([^\.]*)?(?:\.(.+))?$/,yc=/(?:^|\s)hover(\.\S+)?\b/,zc=/^key/,Ac=/^(?:mouse|contextmenu)|click/,xb=/^(?:focusinfocus|focusoutblur)$/,Bc=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,Cc=function(a){if(a=Bc.exec(a)){a[1]=(a[1]||"").toLowerCase();a[3]=a[3]&&RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)")}return a},yb=function(a){return d.event.special.hover?a:a.replace(yc,"mouseenter$1 mouseleave$1")};d.event={add:function(a,b,c,e,f){var g,i,h,k,n,r,l,j,o;if(!(a.nodeType===
3||a.nodeType===8||!b||!c||!(g=d._data(a)))){if(c.handler){l=c;c=l.handler;f=l.selector}if(!c.guid)c.guid=d.guid++;h=g.events;if(!h)g.events=h={};i=g.handle;if(!i){g.handle=i=function(a){return typeof d!=="undefined"&&(!a||d.event.triggered!==a.type)?d.event.dispatch.apply(i.elem,arguments):void 0};i.elem=a}b=d.trim(yb(b)).split(" ");for(g=0;g<b.length;g++){k=wb.exec(b[g])||[];n=k[1];r=(k[2]||"").split(".").sort();o=d.event.special[n]||{};n=(f?o.delegateType:o.bindType)||n;o=d.event.special[n]||{};
k=d.extend({type:n,origType:k[1],data:e,handler:c,guid:c.guid,selector:f,quick:f&&Cc(f),namespace:r.join(".")},l);j=h[n];if(!j){j=h[n]=[];j.delegateCount=0;if(!o.setup||o.setup.call(a,e,r,i)===false)a.addEventListener?a.addEventListener(n,i,false):a.attachEvent&&a.attachEvent("on"+n,i)}if(o.add){o.add.call(a,k);if(!k.handler.guid)k.handler.guid=c.guid}f?j.splice(j.delegateCount++,0,k):j.push(k);d.event.global[n]=true}a=null}},global:{},remove:function(a,b,c,e,f){var g=d.hasData(a)&&d._data(a),i,h,
k,n,r,j,l,o,m,p;if(g&&(l=g.events)){b=d.trim(yb(b||"")).split(" ");for(i=0;i<b.length;i++){h=wb.exec(b[i])||[];k=n=h[1];h=h[2];if(k){o=d.event.special[k]||{};k=(e?o.delegateType:o.bindType)||k;m=l[k]||[];r=m.length;h=h?RegExp("(^|\\.)"+h.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(j=0;j<m.length;j++){p=m[j];if((f||n===p.origType)&&(!c||c.guid===p.guid)&&(!h||h.test(p.namespace))&&(!e||e===p.selector||e==="**"&&p.selector)){m.splice(j--,1);p.selector&&m.delegateCount--;o.remove&&o.remove.call(a,
p)}}if(m.length===0&&r!==m.length){(!o.teardown||o.teardown.call(a,h)===false)&&d.removeEvent(a,k,g.handle);delete l[k]}}else for(k in l)d.event.remove(a,k+b[i],c,e,true)}if(d.isEmptyObject(l)){if(b=g.handle)b.elem=null;d.removeData(a,["events","handle"],true)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(a,b,c,e){if(!c||!(c.nodeType===3||c.nodeType===8)){var f=a.type||a,g=[],i,h,k,n,r;if(!xb.test(f+d.event.triggered)){if(f.indexOf("!")>=0){f=f.slice(0,-1);i=true}if(f.indexOf(".")>=
0){g=f.split(".");f=g.shift();g.sort()}if(c&&!d.event.customEvent[f]||d.event.global[f]){a=typeof a==="object"?a[d.expando]?a:new d.Event(f,a):new d.Event(f);a.type=f;a.isTrigger=true;a.exclusive=i;a.namespace=g.join(".");a.namespace_re=a.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;i=f.indexOf(":")<0?"on"+f:"";if(c){a.result=void 0;if(!a.target)a.target=c;b=b!=null?d.makeArray(b):[];b.unshift(a);k=d.event.special[f]||{};if(!(k.trigger&&k.trigger.apply(c,b)===false)){r=[[c,k.bindType||
f]];if(!e&&!k.noBubble&&!d.isWindow(c)){n=k.delegateType||f;g=xb.test(n+f)?c:c.parentNode;for(h=null;g;g=g.parentNode){r.push([g,n]);h=g}h&&h===c.ownerDocument&&r.push([h.defaultView||h.parentWindow||q,n])}for(h=0;h<r.length&&!a.isPropagationStopped();h++){g=r[h][0];a.type=r[h][1];(n=(d._data(g,"events")||{})[a.type]&&d._data(g,"handle"))&&n.apply(g,b);(n=i&&g[i])&&(d.acceptData(g)&&n.apply(g,b)===false)&&a.preventDefault()}a.type=f;if(!e&&!a.isDefaultPrevented()&&(!k._default||k._default.apply(c.ownerDocument,
b)===false)&&!(f==="click"&&d.nodeName(c,"a"))&&d.acceptData(c))if(i&&c[f]&&(f!=="focus"&&f!=="blur"||a.target.offsetWidth!==0)&&!d.isWindow(c)){(h=c[i])&&(c[i]=null);d.event.triggered=f;c[f]();d.event.triggered=void 0;h&&(c[i]=h)}return a.result}}else{c=d.cache;for(h in c)c[h].events&&c[h].events[f]&&d.event.trigger(a,b,c[h].handle.elem,true)}}}}},dispatch:function(a){var a=d.event.fix(a||q.event),b=(d._data(this,"events")||{})[a.type]||[],c=b.delegateCount,e=[].slice.call(arguments,0),f=!a.exclusive&&
!a.namespace,g=d.event.special[a.type]||{},i=[],h,k,n,r,j,l,o;e[0]=a;a.delegateTarget=this;if(!(g.preDispatch&&g.preDispatch.call(this,a)===false)){if(c&&!(a.button&&a.type==="click")){n=d(this);n.context=this.ownerDocument||this;for(k=a.target;k!=this;k=k.parentNode||this)if(k.disabled!==true){j={};l=[];n[0]=k;for(h=0;h<c;h++){r=b[h];o=r.selector;if(j[o]===void 0){var m=j,p=o,B;if(r.quick){B=r.quick;var s=k.attributes||{};B=(!B[1]||k.nodeName.toLowerCase()===B[1])&&(!B[2]||(s.id||{}).value===B[2])&&
(!B[3]||B[3].test((s["class"]||{}).value))}else B=n.is(o);m[p]=B}j[o]&&l.push(r)}l.length&&i.push({elem:k,matches:l})}}b.length>c&&i.push({elem:this,matches:b.slice(c)});for(h=0;h<i.length&&!a.isPropagationStopped();h++){c=i[h];a.currentTarget=c.elem;for(b=0;b<c.matches.length&&!a.isImmediatePropagationStopped();b++){r=c.matches[b];if(f||!a.namespace&&!r.namespace||a.namespace_re&&a.namespace_re.test(r.namespace)){a.data=r.data;a.handleObj=r;r=((d.event.special[r.origType]||{}).handle||r.handler).apply(c.elem,
e);if(r!==void 0){a.result=r;if(r===false){a.preventDefault();a.stopPropagation()}}}}}g.postDispatch&&g.postDispatch.call(this,a);return a.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:["char","charCode","key","keyCode"],filter:function(a,b){if(a.which==null)a.which=b.charCode!=null?b.charCode:b.keyCode;return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(a,b){var c,e,d=b.button,g=b.fromElement;if(a.pageX==null&&b.clientX!=null){c=a.target.ownerDocument||l;e=c.documentElement;c=c.body;a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0);a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)}if(!a.relatedTarget&&g)a.relatedTarget=g===a.target?b.toElement:g;if(!a.which&&d!==void 0)a.which=d&1?1:d&2?3:d&4?2:0;return a}},fix:function(a){if(a[d.expando])return a;
var b,c,e=a,f=d.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props,a=d.Event(e);for(b=g.length;b;){c=g[--b];a[c]=e[c]}if(!a.target)a.target=e.srcElement||l;if(a.target.nodeType===3)a.target=a.target.parentNode;if(a.metaKey===void 0)a.metaKey=a.ctrlKey;return f.filter?f.filter(a,e):a},special:{ready:{setup:d.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){if(d.isWindow(this))this.onbeforeunload=
c},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}},simulate:function(a,b,c,e){a=d.extend(new d.Event,c,{type:a,isSimulated:true,originalEvent:{}});e?d.event.trigger(a,null,b):d.event.dispatch.call(b,a);a.isDefaultPrevented()&&c.preventDefault()}};d.event.handle=d.event.dispatch;d.removeEvent=l.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,false)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)};d.Event=function(a,b){if(!(this instanceof
d.Event))return new d.Event(a,b);if(a&&a.type){this.originalEvent=a;this.type=a.type;this.isDefaultPrevented=a.defaultPrevented||a.returnValue===false||a.getPreventDefault&&a.getPreventDefault()?aa:C}else this.type=a;b&&d.extend(this,b);this.timeStamp=a&&a.timeStamp||d.now();this[d.expando]=true};d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=aa;var a=this.originalEvent;if(a)a.preventDefault?a.preventDefault():a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=
aa;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=aa;this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={delegateType:b,bindType:b,handle:function(a){var e=a.relatedTarget,f=a.handleObj,g;if(!e||e!==this&&!d.contains(this,e)){a.type=f.origType;g=f.handler.apply(this,
arguments);a.type=b}return g}}});d.support.submitBubbles||(d.event.special.submit={setup:function(){if(d.nodeName(this,"form"))return false;d.event.add(this,"click._submit keypress._submit",function(a){a=a.target;if((a=d.nodeName(a,"input")||d.nodeName(a,"button")?a.form:void 0)&&!a._submit_attached){d.event.add(a,"submit._submit",function(a){a._submit_bubble=true});a._submit_attached=true}})},postDispatch:function(a){if(a._submit_bubble){delete a._submit_bubble;this.parentNode&&!a.isTrigger&&d.event.simulate("submit",
this.parentNode,a,true)}},teardown:function(){if(d.nodeName(this,"form"))return false;d.event.remove(this,"._submit")}});d.support.changeBubbles||(d.event.special.change={setup:function(){if(Ga.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){d.event.add(this,"propertychange._change",function(a){if(a.originalEvent.propertyName==="checked")this._just_changed=true});d.event.add(this,"click._change",function(a){if(this._just_changed&&!a.isTrigger){this._just_changed=false;d.event.simulate("change",
this,a,true)}})}return false}d.event.add(this,"beforeactivate._change",function(a){a=a.target;if(Ga.test(a.nodeName)&&!a._change_attached){d.event.add(a,"change._change",function(a){this.parentNode&&(!a.isSimulated&&!a.isTrigger)&&d.event.simulate("change",this.parentNode,a,true)});a._change_attached=true}})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){d.event.remove(this,
"._change");return Ga.test(this.nodeName)}});d.support.focusinBubbles||d.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,e=function(a){d.event.simulate(b,a.target,d.event.fix(a),true)};d.event.special[b]={setup:function(){c++===0&&l.addEventListener(a,e,true)},teardown:function(){--c===0&&l.removeEventListener(a,e,true)}}});d.fn.extend({on:function(a,b,c,e,f){var g,i;if(typeof a==="object"){if(typeof b!=="string"){c=c||b;b=void 0}for(i in a)this.on(i,b,c,a[i],f);return this}if(c==null&&
e==null){e=b;c=b=void 0}else if(e==null)if(typeof b==="string"){e=c;c=void 0}else{e=c;c=b;b=void 0}if(e===false)e=C;else if(!e)return this;if(f===1){g=e;e=function(a){d().off(a);return g.apply(this,arguments)};e.guid=g.guid||(g.guid=d.guid++)}return this.each(function(){d.event.add(this,a,e,c,b)})},one:function(a,b,c,e){return this.on(a,b,c,e,1)},off:function(a,b,c){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;d(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,
e.handler);return this}if(typeof a==="object"){for(e in a)this.off(e,b,a[e]);return this}if(b===false||typeof b==="function"){c=b;b=void 0}c===false&&(c=C);return this.each(function(){d.event.remove(this,a,c,b)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){d(this.context).on(a,this.selector,b,c);return this},die:function(a,b){d(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,e){return this.on(b,
a,c,e)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return d.event.trigger(a,b,this[0],true)},toggle:function(a){var b=arguments,c=a.guid||d.guid++,e=0,f=function(c){var f=(d._data(this,"lastToggle"+a.guid)||0)%e;d._data(this,"lastToggle"+a.guid,f+1);c.preventDefault();return b[f].apply(this,arguments)||false};for(f.guid=c;e<b.length;)b[e++].guid=
c;return this.click(f)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){d.fn[b]=function(a,e){if(e==null){e=a;a=null}return arguments.length>0?this.on(b,null,a,e):this.trigger(b)};d.attrFn&&(d.attrFn[b]=true);if(zc.test(b))d.event.fixHooks[b]=d.event.keyHooks;
if(Ac.test(b))d.event.fixHooks[b]=d.event.mouseHooks});var zb=function(a,b,c,e,d,g){for(var d=0,i=e.length;d<i;d++){var h=e[d];if(h){for(var k=false,h=h[a];h;){if(h[T]===c){k=e[h.sizset];break}if(h.nodeType===1&&!g){h[T]=c;h.sizset=d}if(h.nodeName.toLowerCase()===b){k=h;break}h=h[a]}e[d]=k}}},Ab=function(a,b,c,e,d,g){for(var d=0,i=e.length;d<i;d++){var h=e[d];if(h){for(var k=false,h=h[a];h;){if(h[T]===c){k=e[h.sizset];break}if(h.nodeType===1){if(!g){h[T]=c;h.sizset=d}if(typeof b!=="string"){if(h===
b){k=true;break}}else if(o.filter(b,[h]).length>0){k=h;break}}h=h[a]}e[d]=k}}},Ha=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,T="sizcache"+(Math.random()+"").replace(".",""),Ia=0,Bb=Object.prototype.toString,la=!1,Cb=!0,U=/\\/g,Dc=/\r\n/g,ma=/\W/;[0,0].sort(function(){Cb=false;return 0});var o=function(a,b,c,e){var c=c||[],d=b=b||l;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string")return c;
var g,i,h,k,n,r=true,j=o.isXML(b),m=[],q=a;do{Ha.exec("");if(g=Ha.exec(q)){q=g[3];m.push(g[1]);if(g[2]){k=g[3];break}}}while(g);if(m.length>1&&Db.exec(a))if(m.length===2&&p.relative[m[0]])i=Eb(m[0]+m[1],b,e);else for(i=p.relative[m[0]]?[b]:o(m.shift(),b);m.length;){a=m.shift();p.relative[a]&&(a=a+m.shift());i=Eb(a,i,e)}else{if(!e&&m.length>1&&b.nodeType===9&&!j&&p.match.ID.test(m[0])&&!p.match.ID.test(m[m.length-1])){g=o.find(m.shift(),b,j);b=g.expr?o.filter(g.expr,g.set)[0]:g.set[0]}if(b){g=e?{expr:m.pop(),
set:w(e)}:o.find(m.pop(),m.length===1&&(m[0]==="~"||m[0]==="+")&&b.parentNode?b.parentNode:b,j);i=g.expr?o.filter(g.expr,g.set):g.set;for(m.length>0?h=w(i):r=false;m.length;){g=n=m.pop();p.relative[n]?g=m.pop():n="";g==null&&(g=b);p.relative[n](h,g,j)}}else h=[]}h||(h=i);h||o.error(n||a);if(Bb.call(h)==="[object Array]")if(r)if(b&&b.nodeType===1)for(a=0;h[a]!=null;a++)h[a]&&(h[a]===true||h[a].nodeType===1&&o.contains(b,h[a]))&&c.push(i[a]);else for(a=0;h[a]!=null;a++)h[a]&&h[a].nodeType===1&&c.push(i[a]);
else c.push.apply(c,h);else w(h,c);if(k){o(k,d,c,e);o.uniqueSort(c)}return c};o.uniqueSort=function(a){if(na){la=Cb;a.sort(na);if(la)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a};o.matches=function(a,b){return o(a,null,null,b)};o.matchesSelector=function(a,b){return o(b,null,null,[a]).length>0};o.find=function(a,b,c){var d,f,g,i,h,k;if(!a)return[];f=0;for(g=p.order.length;f<g;f++){h=p.order[f];if(i=p.leftMatch[h].exec(a)){k=i[1];i.splice(1,1);if(k.substr(k.length-1)!=="\\"){i[1]=
(i[1]||"").replace(U,"");d=p.find[h](i,b,c);if(d!=null){a=a.replace(p.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}};o.filter=function(a,b,c,d){for(var f,g,i,h,k,n,j,l,m=a,q=[],s=b,u=b&&b[0]&&o.isXML(b[0]);a&&b.length;){for(i in p.filter)if((f=p.leftMatch[i].exec(a))!=null&&f[2]){n=p.filter[i];k=f[1];g=false;f.splice(1,1);if(k.substr(k.length-1)!=="\\"){s===q&&(q=[]);if(p.preFilter[i])if(f=p.preFilter[i](f,s,c,q,d,u)){if(f===
true)continue}else g=h=true;if(f)for(j=0;(k=s[j])!=null;j++)if(k){h=n(k,f,j,s);l=d^h;if(c&&h!=null)l?g=true:s[j]=false;else if(l){q.push(k);g=true}}if(h!==void 0){c||(s=q);a=a.replace(p.match[i],"");if(!g)return[];break}}}if(a===m)if(g==null)o.error(a);else break;m=a}return s};o.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};var Ja=o.getText=function(a){var b,c;b=a.nodeType;var d="";if(b)if(b===1||b===9||b===11){if(typeof a.textContent==="string")return a.textContent;
if(typeof a.innerText==="string")return a.innerText.replace(Dc,"");for(a=a.firstChild;a;a=a.nextSibling)d=d+Ja(a)}else{if(b===3||b===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(d=d+Ja(c));return d},p=o.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=
typeof b==="string",d=c&&!ma.test(b),c=c&&!d;d&&(b=b.toLowerCase());for(var d=0,f=a.length,g;d<f;d++)if(g=a[d]){for(;(g=g.previousSibling)&&g.nodeType!==1;);a[d]=c||g&&g.nodeName.toLowerCase()===b?g||false:g===b}c&&o.filter(b,a,true)},">":function(a,b){var c,d=typeof b==="string",f=0,g=a.length;if(d&&!ma.test(b))for(b=b.toLowerCase();f<g;f++){if(c=a[f]){c=c.parentNode;a[f]=c.nodeName.toLowerCase()===b?c:false}}else{for(;f<g;f++)(c=a[f])&&(a[f]=d?c.parentNode:c.parentNode===b);d&&o.filter(b,a,true)}},
"":function(a,b,c){var d,f=Ia++,g=Ab;if(typeof b==="string"&&!ma.test(b)){d=b=b.toLowerCase();g=zb}g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=Ia++,g=Ab;if(typeof b==="string"&&!ma.test(b)){d=b=b.toLowerCase();g=zb}g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(a=b.getElementById(a[1]))&&a.parentNode?[a]:[]},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){for(var c=[],d=b.getElementsByName(a[1]),f=0,g=d.length;f<
g;f++)d[f].getAttribute("name")===a[1]&&c.push(d[f]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,f,g){a=" "+a[1].replace(U,"")+" ";if(g)return a;for(var g=0,i;(i=b[g])!=null;g++)i&&(f^(i.className&&(" "+i.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(i):c&&(b[g]=false));return false},ID:function(a){return a[1].replace(U,"")},TAG:function(a){return a[1].replace(U,
"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||o.error(a[0]);a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}else a[2]&&o.error(a[0]);a[0]=Ia++;return a},ATTR:function(a,b,c,d,f,g){b=a[1]=a[1].replace(U,"");!g&&p.attrMap[b]&&(a[1]=p.attrMap[b]);a[4]=(a[4]||a[5]||"").replace(U,"");a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(a,b,c,d,f){if(a[1]===
"not")if((Ha.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=o(a[3],null,null,b);else{a=o.filter(a[3],b,c,1^f);c||d.push.apply(d,a);return false}else if(p.match.POS.test(a[0])||p.match.CHILD.test(a[0]))return true;return a},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===true},checked:function(a){return a.checked===true},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===
true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!o(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()===
"input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},
focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var f=b[1],g=p.filters[f];if(g)return g(a,c,b,d);if(f==="contains")return(a.textContent||a.innerText||
Ja([a])||"").indexOf(b[3])>=0;if(f==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return false;return true}o.error(f)},CHILD:function(a,b){var c,d,f,g,i,h;c=b[1];h=a;switch(c){case "only":case "first":for(;h=h.previousSibling;)if(h.nodeType===1)return false;if(c==="first")return true;h=a;case "last":for(;h=h.nextSibling;)if(h.nodeType===1)return false;return true;case "nth":c=b[2];d=b[3];if(c===1&&d===0)return true;f=b[0];if((g=a.parentNode)&&(g[T]!==f||!a.nodeIndex)){i=0;for(h=g.firstChild;h;h=
h.nextSibling)if(h.nodeType===1)h.nodeIndex=++i;g[T]=f}h=a.nodeIndex-d;return c===0?h===0:h%c===0&&h/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],c=o.attr?o.attr(a,c):p.attrHandle[c]?p.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=c+"",f=b[2],g=b[4];return c==
null?f==="!=":!f&&o.attr?c!=null:f==="="?d===g:f==="*="?d.indexOf(g)>=0:f==="~="?(" "+d+" ").indexOf(g)>=0:!g?d&&c!==false:f==="!="?d!==g:f==="^="?d.indexOf(g)===0:f==="$="?d.substr(d.length-g.length)===g:f==="|="?d===g||d.substr(0,g.length+1)===g+"-":false},POS:function(a,b,c,d){var f=p.setFilters[b[2]];if(f)return f(a,c,b,d)}}},Db=p.match.POS,Ec=function(a,b){return"\\"+(b-0+1)},Z;for(Z in p.match)p.match[Z]=RegExp(p.match[Z].source+/(?![^\[]*\])(?![^\(]*\))/.source),p.leftMatch[Z]=RegExp(/(^(?:.|\r|\n)*?)/.source+
p.match[Z].source.replace(/\\(\d+)/g,Ec));p.match.globalPOS=Db;var w=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(l.documentElement.childNodes,0)[0].nodeType}catch(ld){w=function(a,b){var c=0,d=b||[];if(Bb.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var na,$;l.documentElement.compareDocumentPosition?
na=function(a,b){if(a===b){la=true;return 0}return!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(na=function(a,b){if(a===b){la=true;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,f=[],g=[];c=a.parentNode;d=b.parentNode;var i=c;if(c===d)return $(a,b);if(c){if(!d)return 1}else return-1;for(;i;){f.unshift(i);i=i.parentNode}for(i=d;i;){g.unshift(i);i=i.parentNode}c=f.length;d=g.length;for(i=
0;i<c&&i<d;i++)if(f[i]!==g[i])return $(f[i],g[i]);return i===c?$(a,g[i],-1):$(f[i],b,1)},$=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});var oa=l.createElement("div"),Fb="script"+(new Date).getTime(),pa=l.documentElement;oa.innerHTML="<a name='"+Fb+"'/>";pa.insertBefore(oa,pa.firstChild);l.getElementById(Fb)&&(p.find.ID=function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!==
"undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},p.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b});pa.removeChild(oa);var pa=oa=null,F=l.createElement("div");F.appendChild(l.createComment(""));0<F.getElementsByTagName("*").length&&(p.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){for(var d=[],f=0;c[f];f++)c[f].nodeType===1&&d.push(c[f]);c=d}return c});F.innerHTML=
"<a href='#'></a>";F.firstChild&&("undefined"!==typeof F.firstChild.getAttribute&&"#"!==F.firstChild.getAttribute("href"))&&(p.attrHandle.href=function(a){return a.getAttribute("href",2)});F=null;if(l.querySelectorAll){var Ka=o,qa=l.createElement("div");qa.innerHTML="<p class='TEST'></p>";if(!(qa.querySelectorAll&&0===qa.querySelectorAll(".TEST").length)){var o=function(a,b,c,d){b=b||l;if(!d&&!o.isXML(b)){var f=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);if(f&&(b.nodeType===1||b.nodeType===9)){if(f[1])return w(b.getElementsByTagName(a),
c);if(f[2]&&p.find.CLASS&&b.getElementsByClassName)return w(b.getElementsByClassName(f[2]),c)}if(b.nodeType===9){if(a==="body"&&b.body)return w([b.body],c);if(f&&f[3]){var g=b.getElementById(f[3]);if(g&&g.parentNode){if(g.id===f[3])return w([g],c)}else return w([],c)}try{return w(b.querySelectorAll(a),c)}catch(i){}}else if(b.nodeType===1&&b.nodeName.toLowerCase()!=="object"){var f=b,h=(g=b.getAttribute("id"))||"__sizzle__",k=b.parentNode,n=/^\s*[+~]/.test(a);g?h=h.replace(/'/g,"\\$&"):b.setAttribute("id",
h);if(n&&k)b=b.parentNode;try{if(!n||k)return w(b.querySelectorAll("[id='"+h+"'] "+a),c)}catch(j){}finally{g||f.removeAttribute("id")}}}return Ka(a,b,c,d)},La;for(La in Ka)o[La]=Ka[La];qa=null}}var ra=l.documentElement,sa=ra.matchesSelector||ra.mozMatchesSelector||ra.webkitMatchesSelector||ra.msMatchesSelector;if(sa){var Fc=!sa.call(l.createElement("div"),"div"),Gb=!1;try{sa.call(l.documentElement,"[test!='']:sizzle")}catch(md){Gb=!0}o.matchesSelector=function(a,b){b=b.replace(/\=\s*([^'"\]]*)\s*\]/g,
"='$1']");if(!o.isXML(a))try{if(Gb||!p.match.PSEUDO.test(b)&&!/!=/.test(b)){var c=sa.call(a,b);if(c||!Fc||a.document&&a.document.nodeType!==11)return c}}catch(d){}return o(b,null,null,[a]).length>0}}var V=l.createElement("div");V.innerHTML="<div class='test e'></div><div class='test'></div>";V.getElementsByClassName&&0!==V.getElementsByClassName("e").length&&(V.lastChild.className="e",1!==V.getElementsByClassName("e").length&&(p.order.splice(1,0,"CLASS"),p.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==
"undefined"&&!c)return b.getElementsByClassName(a[1])},V=null));o.contains=l.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):true)}:l.documentElement.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(){return false};o.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":false};var Eb=function(a,b,c){for(var d,f=[],g="",b=b.nodeType?[b]:b;d=p.match.PSEUDO.exec(a);){g=g+d[0];a=a.replace(p.match.PSEUDO,
"")}a=p.relative[a]?a+"*":a;d=0;for(var i=b.length;d<i;d++)o(a,b[d],f,c);return o.filter(g,f)};o.attr=d.attr;o.selectors.attrMap={};d.find=o;d.expr=o.selectors;d.expr[":"]=d.expr.filters;d.unique=o.uniqueSort;d.text=o.getText;d.isXMLDoc=o.isXML;d.contains=o.contains;var Gc=/Until$/,Hc=/^(?:parents|prevUntil|prevAll)/,Ic=/,/,Zb=/^.[^:#\[\.,]*$/,Jc=Array.prototype.slice,Hb=d.expr.match.globalPOS,Kc={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this,c,e;if(typeof a!==
"string")return d(a).filter(function(){c=0;for(e=b.length;c<e;c++)if(d.contains(b[c],this))return true});var f=this.pushStack("","find",a),g,i,h;c=0;for(e=this.length;c<e;c++){g=f.length;d.find(a,this[c],f);if(c>0)for(i=g;i<f.length;i++)for(h=0;h<g;h++)if(f[h]===f[i]){f.splice(i--,1);break}}return f},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,e=b.length;a<e;a++)if(d.contains(this,b[a]))return true})},not:function(a){return this.pushStack(Ta(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ta(this,
a,true),"filter",a)},is:function(a){return!!a&&(typeof a==="string"?Hb.test(a)?d(a,this.context).index(this[0])>=0:d.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){for(f=1;g&&g.ownerDocument&&g!==b;){for(e=0;e<a.length;e++)d(g).is(a[e])&&c.push({selector:a[e],elem:g,level:f});g=g.parentNode;f++}return c}var i=Hb.test(a)||typeof a!=="string"?d(a,b||this.context):0;e=0;for(f=this.length;e<f;e++)for(g=this[e];g;)if(i?i.index(g)>-1:d.find.matchesSelector(g,
a)){c.push(g);break}else{g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){return!a?this[0]&&this[0].parentNode?this.prevAll().length:-1:typeof a==="string"?d.inArray(this[0],d(a)):d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a&&a.nodeType?[a]:a),e=d.merge(this.get(),c);return this.pushStack(!c[0]||!c[0].parentNode||c[0].parentNode.nodeType===11||
!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}});d.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,
"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c);Gc.test(a)||(e=c);e&&typeof e==="string"&&(f=d.filter(e,
f));f=this.length>1&&!Kc[a]?d.unique(f):f;if((this.length>1||Ic.test(e))&&Hc.test(a))f=f.reverse();return this.pushStack(f,a,Jc.call(arguments).join(","))}});d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,b,c){for(var e=[],a=a[b];a&&a.nodeType!==9&&(c===void 0||a.nodeType!==1||!d(a).is(c));){a.nodeType===1&&e.push(a);a=a[b]}return e},nth:function(a,b,c){for(var b=b||1,d=0;a;a=a[c])if(a.nodeType===
1&&++d===b)break;return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Va="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Lc=/ jQuery\d+="(?:\d+|null)"/g,Ma=/^\s+/,Ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Jb=/<([\w:]+)/,Mc=/<tbody/i,Nc=/<|&#?\w+;/,Oc=/<(?:script|style)/i,Pc=/<(?:script|object|embed|option|style)/i,
Kb=RegExp("<(?:"+Va+")[\\s/>]","i"),Lb=/checked\s*(?:[^=]|=\s*.checked.)/i,Mb=/\/(java|ecma)script/i,Qc=/^\s*<!(?:\[CDATA\[|\-\-)/,y={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Na=Ua(l);y.optgroup=y.option;y.tbody=y.tfoot=
y.colgroup=y.caption=y.thead;y.th=y.td;d.support.htmlSerialize||(y._default=[1,"div<div>","</div>"]);d.fn.extend({text:function(a){return d.access(this,function(a){return a===void 0?d.text(this):this.empty().append((this[0]&&this[0].ownerDocument||l).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);
b.map(function(){for(var a=this;a.firstChild&&a.firstChild.nodeType===1;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return d.isFunction(a)?this.each(function(b){d(this).wrapInner(a.call(this,b))}):this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=d.isFunction(a);return this.each(function(c){d(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||
d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,
"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d.clean(arguments));return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length){if(!b&&e.nodeType===1){d.cleanData(e.getElementsByTagName("*"));d.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},
empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a,b){a=a==null?false:a;b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){return d.access(this,function(a){var c=this[0]||{},e=0,f=this.length;if(a===void 0)return c.nodeType===1?c.innerHTML.replace(Lc,""):null;if(typeof a==="string"&&!Oc.test(a)&&(d.support.leadingWhitespace||!Ma.test(a))&&
!y[(Jb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ib,"<$1></$2>");try{for(;e<f;e++){c=this[e]||{};if(c.nodeType===1){d.cleanData(c.getElementsByTagName("*"));c.innerHTML=a}}c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=
this.parentNode;d(this).remove();b?d(b).before(a):d(c).append(a)})}return this.length?this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,true)},domManip:function(a,b,c){var e,f,g,i=a[0],h=[];if(!d.support.checkClone&&arguments.length===3&&typeof i==="string"&&Lb.test(i))return this.each(function(){d(this).domManip(a,b,c,true)});if(d.isFunction(i))return this.each(function(e){var f=d(this);a[0]=i.call(this,e,b?f.html():void 0);f.domManip(a,b,c)});
if(this[0]){e=i&&i.parentNode;e=d.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:d.buildFragment(a,this,h);g=e.fragment;if(f=g.childNodes.length===1?g=g.firstChild:g.firstChild){b=b&&d.nodeName(f,"tr");f=0;for(var k=this.length,n=k-1;f<k;f++)c.call(b?d.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):this[f]:this[f],e.cacheable||k>1&&f<n?d.clone(g,true,true):g)}h.length&&d.each(h,
function(a,b){b.src?d.ajax({type:"GET",global:false,url:b.src,async:false,dataType:"script"}):d.globalEval((b.text||b.textContent||b.innerHTML||"").replace(Qc,"/*$0*/"));b.parentNode&&b.parentNode.removeChild(b)})}return this}});d.buildFragment=function(a,b,c){var e,f,g,i,h=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]);i.createDocumentFragment||(i=l);if(a.length===1&&typeof h==="string"&&h.length<512&&i===l&&h.charAt(0)==="<"&&!Pc.test(h)&&(d.support.checkClone||!Lb.test(h))&&(d.support.html5Clone||
!Kb.test(h))){f=true;(g=d.fragments[h])&&g!==1&&(e=g)}if(!e){e=i.createDocumentFragment();d.clean(a,i,e,c)}f&&(d.fragments[h]=g?e:1);return{fragment:e,cacheable:f}};d.fragments={};d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],c=d(c),f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&c.length===1){c[b](this[0]);return this}for(var f=0,g=c.length;f<g;f++){var i=
(f>0?this.clone(true):this).get();d(c[f])[b](i);e=e.concat(i)}return this.pushStack(e,a,c.selector)}});d.extend({clone:function(a,b,c){var e,f,g;if(d.support.html5Clone||d.isXMLDoc(a)||!Kb.test("<"+a.nodeName+">"))e=a.cloneNode(true);else{e=l.createElement("div");Na.appendChild(e);e.innerHTML=a.outerHTML;e=e.firstChild}var i=e;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){Xa(a,i);e=ba(a);f=ba(i);for(g=0;e[g];++g)f[g]&&Xa(e[g],f[g])}if(b){Wa(a,
i);if(c){e=ba(a);f=ba(i);for(g=0;e[g];++g)Wa(e[g],f[g])}}return i},clean:function(a,b,c,e){var f,g=[],b=b||l;typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||l);for(var i=0,h;(h=a[i])!=null;i++){typeof h==="number"&&(h=h+"");if(h){if(typeof h==="string")if(Nc.test(h)){h=h.replace(Ib,"<$1></$2>");f=(Jb.exec(h)||["",""])[1].toLowerCase();var k=y[f]||y._default,n=k[0],j=b.createElement("div"),m=Na.childNodes;b===l?Na.appendChild(j):Ua(b).appendChild(j);for(j.innerHTML=
k[1]+h+k[2];n--;)j=j.lastChild;if(!d.support.tbody){n=Mc.test(h);k=f==="table"&&!n?j.firstChild&&j.firstChild.childNodes:k[1]==="<table>"&&!n?j.childNodes:[];for(f=k.length-1;f>=0;--f)d.nodeName(k[f],"tbody")&&!k[f].childNodes.length&&k[f].parentNode.removeChild(k[f])}!d.support.leadingWhitespace&&Ma.test(h)&&j.insertBefore(b.createTextNode(Ma.exec(h)[0]),j.firstChild);h=j.childNodes;if(j){j.parentNode.removeChild(j);if(m.length>0)(j=m[m.length-1])&&j.parentNode&&j.parentNode.removeChild(j)}}else h=
b.createTextNode(h);var o;if(!d.support.appendChecked)if(h[0]&&typeof(o=h.length)==="number")for(f=0;f<o;f++)Za(h[f]);else Za(h);h.nodeType?g.push(h):g=d.merge(g,h)}}if(c){a=function(a){return!a.type||Mb.test(a.type)};for(i=0;g[i];i++){b=g[i];if(e&&d.nodeName(b,"script")&&(!b.type||Mb.test(b.type)))e.push(b.parentNode?b.parentNode.removeChild(b):b);else{if(b.nodeType===1){h=d.grep(b.getElementsByTagName("script"),a);g.splice.apply(g,[i+1,0].concat(h))}c.appendChild(b)}}}return g},cleanData:function(a){for(var b,
c,e=d.cache,f=d.event.special,g=d.support.deleteExpando,i=0,h;(h=a[i])!=null;i++)if(!h.nodeName||!d.noData[h.nodeName.toLowerCase()])if(c=h[d.expando]){if((b=e[c])&&b.events){for(var k in b.events)f[k]?d.event.remove(h,k):d.removeEvent(h,k,b.handle);if(b.handle)b.handle.elem=null}g?delete h[d.expando]:h.removeAttribute&&h.removeAttribute(d.expando);delete e[c]}}});var Oa=/alpha\([^)]*\)/i,Rc=/opacity=([^)]*)/,Sc=/([A-Z]|^ms)/g,Tc=/^[\-+]?(?:\d*\.)?\d+$/i,wa=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Uc=/^([\-+])=([\-+.\de]+)/,
Vc=/^margin/,Wc={position:"absolute",visibility:"hidden",display:"block"},H=["Top","Right","Bottom","Left"],I,Nb,Ob;d.fn.css=function(a,b){return d.access(this,function(a,b,f){return f!==void 0?d.style(a,b,f):d.css(a,b)},a,b,arguments.length>1)};d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=I(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":d.support.cssFloat?
"cssFloat":"styleFloat"},style:function(a,b,c,e){if(a&&!(a.nodeType===3||a.nodeType===8||!a.style)){var f,g=d.camelCase(b),i=a.style,h=d.cssHooks[g],b=d.cssProps[g]||g;if(c!==void 0){e=typeof c;if(e==="string"&&(f=Uc.exec(c))){c=+(f[1]+1)*+f[2]+parseFloat(d.css(a,b));e="number"}if(!(c==null||e==="number"&&isNaN(c))){e==="number"&&!d.cssNumber[g]&&(c=c+"px");if(!h||!("set"in h)||(c=h.set(a,c))!==void 0)try{i[b]=c}catch(k){}}}else return h&&"get"in h&&(f=h.get(a,false,e))!==void 0?f:i[b]}},css:function(a,
b,c){var e,f,b=d.camelCase(b);f=d.cssHooks[b];b=d.cssProps[b]||b;b==="cssFloat"&&(b="float");if(f&&"get"in f&&(e=f.get(a,true,c))!==void 0)return e;if(I)return I(a,b)},swap:function(a,b,c){var d={},f;for(f in b){d[f]=a.style[f];a.style[f]=b[f]}c=c.call(a);for(f in b)a.style[f]=d[f];return c}});d.curCSS=d.css;l.defaultView&&l.defaultView.getComputedStyle&&(Nb=function(a,b){var c,e,f,g=a.style,b=b.replace(Sc,"-$1").toLowerCase();if((e=a.ownerDocument.defaultView)&&(f=e.getComputedStyle(a,null))){c=
f.getPropertyValue(b);c===""&&!d.contains(a.ownerDocument.documentElement,a)&&(c=d.style(a,b))}if(!d.support.pixelMargin&&f&&Vc.test(b)&&wa.test(c)){e=g.width;g.width=c;c=f.width;g.width=e}return c});l.documentElement.currentStyle&&(Ob=function(a,b){var c,d,f=a.currentStyle&&a.currentStyle[b],g=a.style;if(f==null&&g&&(c=g[b]))f=c;if(wa.test(f)){c=g.left;if(d=a.runtimeStyle&&a.runtimeStyle.left)a.runtimeStyle.left=a.currentStyle.left;g.left=b==="fontSize"?"1em":f;f=g.pixelLeft+"px";g.left=c;if(d)a.runtimeStyle.left=
d}return f===""?"auto":f});I=Nb||Ob;d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,e,f){if(e)return a.offsetWidth!==0?$a(a,b,f):d.swap(a,Wc,function(){return $a(a,b,f)})},set:function(a,b){return Tc.test(b)?b+"px":b}}});d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return Rc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,e=a.currentStyle,f=d.isNumeric(b)?"alpha(opacity="+b*
100+")":"",g=e&&e.filter||c.filter||"";c.zoom=1;if(b>=1&&d.trim(g.replace(Oa,""))===""){c.removeAttribute("filter");if(e&&!e.filter)return}c.filter=Oa.test(g)?g.replace(Oa,f):g+" "+f}});d(function(){if(!d.support.reliableMarginRight)d.cssHooks.marginRight={get:function(a,b){return d.swap(a,{display:"inline-block"},function(){return b?I(a,"margin-right"):a.style.marginRight})}}});d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!d.support.reliableHiddenOffsets&&
(a.style&&a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});d.each({margin:"",padding:"",border:"Width"},function(a,b){d.cssHooks[a+b]={expand:function(c){for(var d=typeof c==="string"?c.split(" "):[c],f={},c=0;c<4;c++)f[a+H[c]+b]=d[c]||d[c-2]||d[0];return f}}});var Xc=/%20/g,$b=/\[\]$/,Pb=/\r?\n/g,Yc=/#.*$/,Zc=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,$c=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
ad=/^(?:GET|HEAD)$/,bd=/^\/\//,Qb=/\?/,cd=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,dd=/^(?:select|textarea)/i,bb=/\s+/,ed=/([?&])_=[^&]*/,Rb=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Sb=d.fn.load,xa={},Tb={},J,G,Ub=["*/"]+["*"];try{J=bc.href}catch(nd){J=l.createElement("a"),J.href="",J=J.href}G=Rb.exec(J.toLowerCase())||[];d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&Sb)return Sb.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0)var f=
a.slice(e,a.length),a=a.slice(0,e);e="GET";if(b)if(d.isFunction(b)){c=b;b=void 0}else if(typeof b==="object"){b=d.param(b,d.ajaxSettings.traditional);e="POST"}var g=this;d.ajax({url:a,type:e,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText;if(a.isResolved()){a.done(function(a){e=a});g.html(f?d("<div>").append(e.replace(cd,"")).find(f):e)}c&&g.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?
d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||dd.test(this.nodeName)||$c.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a){return{name:b.name,value:a.replace(Pb,"\r\n")}}):{name:b.name,value:c.replace(Pb,"\r\n")}}).get()}});d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.on(b,a)}});d.each(["get","post"],
function(a,b){d[b]=function(a,e,f,g){if(d.isFunction(e)){g=g||f;f=e;e=void 0}return d.ajax({type:b,url:a,data:e,success:f,dataType:g})}});d.extend({getScript:function(a,b){return d.get(a,void 0,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){if(b)cb(a,d.ajaxSettings);else{b=a;a=d.ajaxSettings}cb(a,b);return a},ajaxSettings:{url:J,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(G[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",
processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Ub},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":q.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:ab(xa),ajaxTransport:ab(Tb),ajax:function(a,b){function c(a,b,c,j){if(u!==2){u=2;q&&clearTimeout(q);p=void 0;m=j||
"";t.readyState=a>0?4:0;var l,o,r,j=b;if(c){var s=e,L=t,w=s.contents,v=s.dataTypes,pb=s.responseFields,A,z,x,B;for(z in pb)z in c&&(L[pb[z]]=c[z]);for(;v[0]==="*";){v.shift();A===void 0&&(A=s.mimeType||L.getResponseHeader("content-type"))}if(A)for(z in w)if(w[z]&&w[z].test(A)){v.unshift(z);break}if(v[0]in c)x=v[0];else{for(z in c){if(!v[0]||s.converters[z+" "+v[0]]){x=z;break}B||(B=z)}x=x||B}if(x){x!==v[0]&&v.unshift(x);c=c[x]}else c=void 0}else c=void 0;if(a>=200&&a<300||a===304){if(e.ifModified){if(A=
t.getResponseHeader("Last-Modified"))d.lastModified[n]=A;if(A=t.getResponseHeader("Etag"))d.etag[n]=A}if(a===304){j="notmodified";l=true}else try{A=e;A.dataFilter&&(c=A.dataFilter(c,A.dataType));var H=A.dataTypes;z={};var E,F,J=H.length,G,M=H[0],C,I,N,O,D;for(E=1;E<J;E++){if(E===1)for(F in A.converters)typeof F==="string"&&(z[F.toLowerCase()]=A.converters[F]);C=M;M=H[E];if(M==="*")M=C;else if(C!=="*"&&C!==M){I=C+" "+M;N=z[I]||z["* "+M];if(!N){D=void 0;for(O in z){G=O.split(" ");if(G[0]===C||G[0]===
"*")if(D=z[G[1]+" "+M]){O=z[O];O===true?N=D:D===true&&(N=O);break}}}!N&&!D&&d.error("No conversion from "+I.replace(" "," to "));N!==true&&(c=N?N(c):D(O(c)))}}o=c;j="success";l=true}catch(K){j="parsererror";r=K}}else{r=j;if(!j||a){j="error";a<0&&(a=0)}}t.status=a;t.statusText=""+(b||j);l?i.resolveWith(f,[o,j,t]):i.rejectWith(f,[t,j,r]);t.statusCode(k);k=void 0;y&&g.trigger("ajax"+(l?"Success":"Error"),[t,e,l?o:r]);h.fireWith(f,[t,j]);if(y){g.trigger("ajaxComplete",[t,e]);--d.active||d.event.trigger("ajaxStop")}}}
if(typeof a==="object"){b=a;a=void 0}var b=b||{},e=d.ajaxSetup({},b),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,i=d.Deferred(),h=d.Callbacks("once memory"),k=e.statusCode||{},n,j={},l={},m,o,p,q,s,u=0,y,w,t={readyState:0,setRequestHeader:function(a,b){if(!u){var c=a.toLowerCase(),a=l[c]=l[c]||a;j[a]=b}return this},getAllResponseHeaders:function(){return u===2?m:null},getResponseHeader:function(a){var b;if(u===2){if(!o)for(o={};b=Zc.exec(m);)o[b[1].toLowerCase()]=b[2];b=o[a.toLowerCase()]}return b===
void 0?null:b},overrideMimeType:function(a){if(!u)e.mimeType=a;return this},abort:function(a){a=a||"abort";p&&p.abort(a);c(0,a);return this}};i.promise(t);t.success=t.done;t.error=t.fail;t.complete=h.add;t.statusCode=function(a){if(a){var b;if(u<2)for(b in a)k[b]=[k[b],a[b]];else{b=a[t.status];t.then(b,b)}}return this};e.url=((a||e.url)+"").replace(Yc,"").replace(bd,G[1]+"//");e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bb);if(e.crossDomain==null){s=Rb.exec(e.url.toLowerCase());e.crossDomain=
!(!s||!(s[1]!=G[1]||s[2]!=G[2]||(s[3]||(s[1]==="http:"?80:443))!=(G[3]||(G[1]==="http:"?80:443))))}if(e.data&&e.processData&&typeof e.data!=="string")e.data=d.param(e.data,e.traditional);ca(xa,e,b,t);if(u===2)return false;y=e.global;e.type=e.type.toUpperCase();e.hasContent=!ad.test(e.type);y&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){if(e.data){e.url=e.url+((Qb.test(e.url)?"&":"?")+e.data);delete e.data}n=e.url;if(e.cache===false){s=d.now();var v=e.url.replace(ed,"$1_="+s);e.url=
v+(v===e.url?(Qb.test(e.url)?"&":"?")+"_="+s:"")}}(e.data&&e.hasContent&&e.contentType!==false||b.contentType)&&t.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){n=n||e.url;d.lastModified[n]&&t.setRequestHeader("If-Modified-Since",d.lastModified[n]);d.etag[n]&&t.setRequestHeader("If-None-Match",d.etag[n])}t.setRequestHeader("Accept",e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", "+Ub+"; q=0.01":""):e.accepts["*"]);for(w in e.headers)t.setRequestHeader(w,
e.headers[w]);if(e.beforeSend&&(e.beforeSend.call(f,t,e)===false||u===2)){t.abort();return false}for(w in{success:1,error:1,complete:1})t[w](e[w]);if(p=ca(Tb,e,b,t)){t.readyState=1;y&&g.trigger("ajaxSend",[t,e]);e.async&&e.timeout>0&&(q=setTimeout(function(){t.abort("timeout")},e.timeout));try{u=1;p.send(j,c)}catch(x){if(u<2)c(-1,x);else throw x;}}else c(-1,"No Transport");return t},param:function(a,b){var c=[],e=function(a,b){b=d.isFunction(b)?b():b;c[c.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
if(b===void 0)b=d.ajaxSettings.traditional;if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){e(this.name,this.value)});else for(var f in a)ya(f,a[f],b,e);return c.join("&").replace(Xc,"+")}});d.extend({active:0,lastModified:{},etag:{}});var fd=d.now(),ta=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+fd++}});d.ajaxPrefilter("json jsonp",function(a,b,c){b=typeof a.data==="string"&&/^application\/x\-www\-form\-urlencoded/.test(a.contentType);
if(a.dataTypes[0]==="jsonp"||a.jsonp!==false&&(ta.test(a.url)||b&&ta.test(a.data))){var e,f=a.jsonpCallback=d.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,g=q[f],i=a.url,h=a.data,k="$1"+f+"$2";if(a.jsonp!==false){i=i.replace(ta,k);if(a.url===i){b&&(h=h.replace(ta,k));a.data===h&&(i=i+((/\?/.test(i)?"&":"?")+a.jsonp+"="+f))}}a.url=i;a.data=h;q[f]=function(a){e=[a]};c.always(function(){q[f]=g;if(e&&d.isFunction(g))q[f](e[0])});a.converters["script json"]=function(){e||d.error(f+" was not called");
return e[0]};a.dataTypes[0]="json";return"script"}});d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}});d.ajaxPrefilter("script",function(a){if(a.cache===void 0)a.cache=false;if(a.crossDomain){a.type="GET";a.global=false}});d.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=l.head||l.getElementsByTagName("head")[0]||
l.documentElement;return{send:function(d,f){b=l.createElement("script");b.async="async";if(a.scriptCharset)b.charset=a.scriptCharset;b.src=a.url;b.onload=b.onreadystatechange=function(a,d){if(d||!b.readyState||/loaded|complete/.test(b.readyState)){b.onload=b.onreadystatechange=null;c&&b.parentNode&&c.removeChild(b);b=void 0;d||f(200,"success")}};c.insertBefore(b,c.firstChild)},abort:function(){if(b)b.onload(0,1)}}}});var Pa=q.ActiveXObject?function(){for(var a in W)W[a](0,1)}:!1,gd=0,W;d.ajaxSettings.xhr=
q.ActiveXObject?function(){var a;if(!(a=!this.isLocal&&db()))a:{try{a=new q.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:db;var Qa=d.ajaxSettings.xhr();d.extend(d.support,{ajax:!!Qa,cors:!!Qa&&"withCredentials"in Qa});d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var b;return{send:function(c,e){var f=a.xhr(),g,i;a.username?f.open(a.type,a.url,a.async,a.username,a.password):f.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)f[i]=
a.xhrFields[i];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType);!a.crossDomain&&!c["X-Requested-With"]&&(c["X-Requested-With"]="XMLHttpRequest");try{for(i in c)f.setRequestHeader(i,c[i])}catch(h){}f.send(a.hasContent&&a.data||null);b=function(c,h){var i,j,l,m,o;try{if(b&&(h||f.readyState===4)){b=void 0;if(g){f.onreadystatechange=d.noop;Pa&&delete W[g]}if(h)f.readyState!==4&&f.abort();else{i=f.status;l=f.getAllResponseHeaders();m={};if((o=f.responseXML)&&o.documentElement)m.xml=o;try{m.text=
f.responseText}catch(p){}try{j=f.statusText}catch(q){j=""}!i&&a.isLocal&&!a.crossDomain?i=m.text?200:404:i===1223&&(i=204)}}}catch(s){h||e(-1,s)}m&&e(i,j,m,l)};if(!a.async||f.readyState===4)b();else{g=++gd;if(Pa){if(!W){W={};d(q).unload(Pa)}W[g]=b}f.onreadystatechange=b}},abort:function(){b&&b(0,1)}}}});var za={},v,K,hd=/^(?:toggle|show|hide)$/,id=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ua,ea=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft",
"paddingRight"],["opacity"]],da;d.fn.extend({show:function(a,b,c){if(a||a===0)return this.animate(D("show",3),a,b,c);for(var c=0,e=this.length;c<e;c++){a=this[c];if(a.style){b=a.style.display;if(!d._data(a,"olddisplay")&&b==="none")b=a.style.display="";(b===""&&d.css(a,"display")==="none"||!d.contains(a.ownerDocument.documentElement,a))&&d._data(a,"olddisplay",fb(a.nodeName))}}for(c=0;c<e;c++){a=this[c];if(a.style){b=a.style.display;if(b===""||b==="none")a.style.display=d._data(a,"olddisplay")||""}}return this},
hide:function(a,b,c){if(a||a===0)return this.animate(D("hide",3),a,b,c);for(var c=0,e=this.length;c<e;c++){a=this[c];if(a.style){b=d.css(a,"display");b!=="none"&&!d._data(a,"olddisplay")&&d._data(a,"olddisplay",b)}}for(c=0;c<e;c++)if(this[c].style)this[c].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?
"show":"hide"]()}):this.animate(D("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){function f(){g.queue===false&&d._mark(this);var b=d.extend({},g),c=this.nodeType===1,e=c&&d(this).is(":hidden"),f,j,l,m,o;b.animatedProperties={};for(l in a){f=d.camelCase(l);if(l!==f){a[f]=a[l];delete a[l]}if((j=d.cssHooks[f])&&"expand"in j){m=j.expand(a[f]);delete a[f];for(l in m)l in a||(a[l]=
m[l])}}for(f in a){j=a[f];if(d.isArray(j)){b.animatedProperties[f]=j[1];j=a[f]=j[0]}else b.animatedProperties[f]=b.specialEasing&&b.specialEasing[f]||b.easing||"swing";if(j==="hide"&&e||j==="show"&&!e)return b.complete.call(this);if(c&&(f==="height"||f==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")!d.support.inlineBlockNeedsLayout||fb(this.nodeName)==="inline"?this.style.display="inline-block":
this.style.zoom=1}}if(b.overflow!=null)this.style.overflow="hidden";for(l in a){c=new d.fx(this,b,l);j=a[l];if(hd.test(j))if(f=d._data(this,"toggle"+l)||(j==="toggle"?e?"show":"hide":0)){d._data(this,"toggle"+l,f==="show"?"hide":"show");c[f]()}else c[j]();else{f=id.exec(j);m=c.cur();if(f){j=parseFloat(f[2]);o=f[3]||(d.cssNumber[l]?"":"px");if(o!=="px"){d.style(this,l,(j||1)+o);m=(j||1)/c.cur()*m;d.style(this,l,m+o)}f[1]&&(j=(f[1]==="-="?-1:1)*j+m);c.custom(m,j,o)}else c.custom(m,j,"")}}return true}
var g=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(g.complete,[false]);a=d.extend({},a);return g.queue===false?this.each(f):this.queue(g.queue,f)},stop:function(a,b,c){if(typeof a!=="string"){c=b;b=a;a=void 0}b&&a!==false&&this.queue(a||"fx",[]);return this.each(function(){var b,f=false,g=d.timers,i=d._data(this);c||d._unmark(true,this);if(a==null)for(b in i){if(i[b]&&i[b].stop&&b.indexOf(".run")===b.length-4){var h=i[b];d.removeData(this,b,true);h.stop(c)}}else if(i[b=a+".run"]&&i[b].stop){i=
i[b];d.removeData(this,b,true);i.stop(c)}for(b=g.length;b--;)if(g[b].elem===this&&(a==null||g[b].queue===a)){if(c)g[b](true);else g[b].saveState();f=true;g.splice(b,1)}(!c||!f)&&d.dequeue(this,a)})}});d.each({slideDown:D("show",1),slideUp:D("hide",1),slideToggle:D("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,d,f){return this.animate(b,a,d,f)}});d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):
{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default;if(e.queue==null||e.queue===true)e.queue="fx";e.old=e.complete;e.complete=function(a){d.isFunction(e.old)&&e.old.call(this);e.queue?d.dequeue(this,e.queue):a!==false&&d._unmark(this)};return e},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+0.5}},
timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;b.orig=b.orig||{}}});d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function e(a){return f.step(a)}
var f=this,g=d.fx;this.startTime=da||eb();this.end=b;this.now=this.start=a;this.pos=this.state=0;this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px");e.queue=this.options.queue;e.elem=this.elem;e.saveState=function(){d._data(f.elem,"fxshow"+f.prop)===void 0&&(f.options.hide?d._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&d._data(f.elem,"fxshow"+f.prop,f.end))};e()&&(d.timers.push(e)&&!ua)&&(ua=setInterval(g.tick,g.interval))},show:function(){var a=d._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=a||d.style(this.elem,this.prop);this.options.show=true;a!==void 0?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d._data(this.elem,"fxshow"+this.prop)||d.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b,c=da||eb(),e=true,f=this.elem,g=this.options;if(a||c>=g.duration+this.startTime){this.now=this.end;this.pos=
this.state=1;this.update();g.animatedProperties[this.prop]=true;for(b in g.animatedProperties)g.animatedProperties[b]!==true&&(e=false);if(e){g.overflow!=null&&!d.support.shrinkWrapBlocks&&d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]});g.hide&&d(f).hide();if(g.hide||g.show)for(b in g.animatedProperties){d.style(f,b,g.orig[b]);d.removeData(f,"fxshow"+b,true);d.removeData(f,"toggle"+b,true)}if(a=g.complete){g.complete=false;a.call(f)}}return false}if(g.duration==Infinity)this.now=
c;else{a=c-this.startTime;this.state=a/g.duration;this.pos=d.easing[g.animatedProperties[this.prop]](this.state,a,0,1,g.duration);this.now=this.start+(this.end-this.start)*this.pos}this.update();return true}};d.extend(d.fx,{tick:function(){for(var a,b=d.timers,c=0;c<b.length;c++){a=b[c];!a()&&b[c]===a&&b.splice(c--,1)}b.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ua);ua=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&
a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}});d.each(ea.concat.apply([],ea),function(a,b){b.indexOf("margin")&&(d.fx.step[b]=function(a){d.style(a.elem,b,Math.max(0,a.now)+a.unit)})});d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var Vb,jd=/^t(?:able|d|h)$/i,Wb=/^(?:body|html)$/i;Vb="getBoundingClientRect"in l.documentElement?function(a,b,c,e){try{e=a.getBoundingClientRect()}catch(f){}if(!e||
!d.contains(c,a))return e?{top:e.top,left:e.left}:{top:0,left:0};a=b.body;b=gb(b);return{top:e.top+(b.pageYOffset||d.support.boxModel&&c.scrollTop||a.scrollTop)-(c.clientTop||a.clientTop||0),left:e.left+(b.pageXOffset||d.support.boxModel&&c.scrollLeft||a.scrollLeft)-(c.clientLeft||a.clientLeft||0)}}:function(a,b,c){var e,f=a.offsetParent,g=b.body;e=(b=b.defaultView)?b.getComputedStyle(a,null):a.currentStyle;for(var i=a.offsetTop,h=a.offsetLeft;(a=a.parentNode)&&a!==g&&a!==c;){if(d.support.fixedPosition&&
e.position==="fixed")break;e=b?b.getComputedStyle(a,null):a.currentStyle;i=i-a.scrollTop;h=h-a.scrollLeft;if(a===f){i=i+a.offsetTop;h=h+a.offsetLeft;if(d.support.doesNotAddBorder&&(!d.support.doesAddBorderForTableAndCells||!jd.test(a.nodeName))){i=i+(parseFloat(e.borderTopWidth)||0);h=h+(parseFloat(e.borderLeftWidth)||0)}f=a.offsetParent}if(d.support.subtractsBorderForOverflowNotVisible&&e.overflow!=="visible"){i=i+(parseFloat(e.borderTopWidth)||0);h=h+(parseFloat(e.borderLeftWidth)||0)}}if(e.position===
"relative"||e.position==="static"){i=i+g.offsetTop;h=h+g.offsetLeft}if(d.support.fixedPosition&&e.position==="fixed"){i=i+Math.max(c.scrollTop,g.scrollTop);h=h+Math.max(c.scrollLeft,g.scrollLeft)}return{top:i,left:h}};d.fn.offset=function(a){if(arguments.length)return a===void 0?this:this.each(function(b){d.offset.setOffset(this,a,b)});var b=this[0],c=b&&b.ownerDocument;return!c?null:b===c.body?d.offset.bodyOffset(b):Vb(b,c,c.documentElement)};d.offset={bodyOffset:function(a){var b=a.offsetTop,c=
a.offsetLeft;if(d.support.doesNotIncludeMarginInBodyOffset){b=b+(parseFloat(d.css(a,"marginTop"))||0);c=c+(parseFloat(d.css(a,"marginLeft"))||0)}return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");if(e==="static")a.style.position="relative";var f=d(a),g=f.offset(),i=d.css(a,"top"),h=d.css(a,"left"),j={},l={};if((e==="absolute"||e==="fixed")&&d.inArray("auto",[i,h])>-1){l=f.position();e=l.top;h=l.left}else{e=parseFloat(i)||0;h=parseFloat(h)||0}d.isFunction(b)&&(b=b.call(a,c,g));
if(b.top!=null)j.top=b.top-g.top+e;if(b.left!=null)j.left=b.left-g.left+h;"using"in b?b.using.call(a,j):f.css(j)}};d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=Wb.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top=c.top-(parseFloat(d.css(a,"marginTop"))||0);c.left=c.left-(parseFloat(d.css(a,"marginLeft"))||0);e.top=e.top+(parseFloat(d.css(b[0],"borderTopWidth"))||0);e.left=e.left+(parseFloat(d.css(b[0],"borderLeftWidth"))||0);return{top:c.top-
e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||l.body;a&&!Wb.test(a.nodeName)&&d.css(a,"position")==="static";)a=a.offsetParent;return a})}});d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);d.fn[a]=function(e){return d.access(this,function(a,e,i){var h=gb(a);if(i===void 0)return h?b in h?h[b]:d.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(!c?i:d(h).scrollLeft(),
c?i:d(h).scrollTop()):a[e]=i},a,e,arguments.length,null)}});d.each({Height:"height",Width:"width"},function(a,b){var c="client"+a,e="scroll"+a,f="offset"+a;d.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(d.css(a,b,"padding")):this[b]():null};d.fn["outer"+a]=function(a){var c=this[0];return c?c.style?parseFloat(d.css(c,b,a?"margin":"border")):this[b]():null};d.fn[b]=function(a){return d.access(this,function(a,b,g){if(d.isWindow(a)){b=a.document;a=b.documentElement[c];return d.support.boxModel&&
a||b.body&&b.body[c]||a}if(a.nodeType===9){b=a.documentElement;return b[c]>=b[e]?b[c]:Math.max(a.body[e],b[e],a.body[f],b[f])}if(g===void 0){a=d.css(a,b);b=parseFloat(a);return d.isNumeric(b)?b:a}d(a).css(b,g)},b,a,arguments.length,null)}});q.jQuery=q.$=d;"function"===typeof define&&(define.amd&&define.amd.jQuery)&&define("jquery",[],function(){return d})})(window);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-compatibility', location = 'js-vendor/jquery/jquery-compatibility.js' */
jQuery.noConflict();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-deprecation', location = 'js/aui/internal/console.js' */
window.AJS=window.AJS||{};(function(){if(typeof window.console==="undefined"){window.console={messages:[],log:function(B){this.messages.push(B)},show:function(){alert(this.messages.join("\n"));this.messages=[]}}}else{window.console.show=function(){}}function A(B){return function(){if(typeof console!=="undefined"&&console[B]){Function.prototype.apply.call(console[B],console,arguments)}}}AJS.log=A("log");AJS.warn=A("warn");AJS.error=A("error")})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-deprecation', location = 'js/aui/internal/deprecation.js' */
window.AJS=window.AJS||{};window.AJS.deprecate={};(function(G,F){var N=Object.prototype.hasOwnProperty;var B=Object.prototype.toString;function J(O){O+="";if(!O){return""}return O.charAt(0).toUpperCase()+O.substring(1)}var H=[];function M(O,P){if(typeof O==="function"){return O}var Q=false;P=P||{};return function(R){var T=F.__getDeprecatedLocation(R?R:1)||"";if(!Q||H.indexOf(T)===-1){Q=true;var S="DEPRECATED - "+J(O)+" has been deprecated"+(P.sinceVersion?" since "+P.sinceVersion:"")+" and will be removed in "+(P.removeInVersion||"a future release")+".";if(P.alternativeName){S+=" Use "+P.alternativeName+" instead. "}if(P.extraInfo){S+=" "+P.extraInfo}if(T===""){F.__logger(S+" \n No stack trace of the deprecated usage is available in your current browser.")}else{F.__logger(S+" \n "+T)}H.push(T)}}}F.__logger=function(){return AJS.warn.apply(undefined,arguments)};F.__getDeprecatedLocation=function(P){var Q=new Error();var O=Q.stack||Q.stacktrace;var R=(O&&O.replace(/^Error\n/,""))||"";if(R){R=R.split("\n");return R[P+2]}return R};function D(R,P,Q){var O=M(P||R.name||"this function",Q);return function(){O();return R.apply(this,arguments)}}function L(Q,O,P){var R=D(Q,O,P);R.prototype=Q.prototype;G.extend(R,Q);return R}var E=false;try{if(Object.defineProperty){Object.defineProperty({},"blam",{get:function(){},set:function(){}});E=true}}catch(I){}function K(R,T,Q){if(E){var P=R[T];Q=Q||{};var S=Q.displayName||T;var O=M(S,Q);Object.defineProperty(R,T,{get:function(){O();return P},set:function(U){P=U;O();return U}})}else{}}function A(P,R,O){if(typeof P[R]==="function"){O=O||{};var Q=O.displayName||R;P[R]=D(P[R],Q,O)}else{K(P,R,O)}}function C(R,P,Q){Q=Q||{};for(var O in R){if(N.call(R,O)){Q.displayName=P+O;Q.alternativeName=Q.alternativeNamePrefix&&(Q.alternativeNamePrefix+O);A(R,O,G.extend({},Q))}}}F.fn=D;F.construct=L;F.prop=A;F.obj=C;F.propertyDeprecationSupported=E;F.getMessageLogger=M})(jQuery||Zepto,window.AJS.deprecate);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-core', location = '/js/polyfills/custom-event.js' */
(function(){if(window.CustomEvent){try{new A()}catch(B){return }}function A(D,E){E=E||{bubbles:false,cancelable:false,detail:undefined};var C=document.createEvent("CustomEvent");C.initCustomEvent(D,E.bubbles,E.cancelable,E.detail);return C}A.prototype=window.Event.prototype;window.CustomEvent=A}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-core', location = 'skate/dist/skate.js' */
(function(){function D(s,r){if(W(s,r.id+".initialised")){return }Z(s,r.id+".initialised",true);A(s,r,function(){l(s,r)})}function A(u,t,r){var s=/^[^(]+\([^,)]+,/;r=r||function(){};if(W(u,t.id+".ready-called")){return r()}Z(u,t.id+".ready-called",true);if(t.template){t.template(u)}S(u,t.prototype);Y(u,t);if(t.ready&&s.test(t.ready)){t.ready(u,r)}else{if(t.ready){t.ready(u);r()}else{r()}}}function l(s,r){if(!s.parentNode){return }if(W(s,r.id+".insert-called")){return }Z(s,r.id+".insert-called",true);b(s,r.classname);if(r.insert){r.insert(s)}H(s,r)}function E(s,r){if(W(s,r.id+".remove-called")){return }Z(s,r.id+".remove-called",true);if(r.remove){r.remove(s)}}function H(y,v){function x(AB,AA,AC,z){var AD;if(v.attributes&&v.attributes[AA]&&typeof v.attributes[AA][AB]==="function"){AD=v.attributes[AA][AB]}else{if(v.attributes&&typeof v.attributes[AA]==="function"){AD=v.attributes[AA]}else{if(typeof v.attributes==="function"){AD=v.attributes}}}if(AD){AD(y,{type:AB,name:AA,newValue:AC,oldValue:z})}}var u=y.attributes;var w=u.length;var t=new d(function(z){z.forEach(function(AB){var AD;var AC=AB.attributeName;var AA=u[AC];if(AA&&AB.oldValue===null){AD="insert"}else{if(AA&&AB.oldValue!==null){AD="update"}else{if(!AA){AD="remove"}}}x(AD,AC,AA?(AA.value||AA.nodeValue):undefined,AB.oldValue)})});t.observe(y,{attributes:true,attributeOldValue:true});for(var s=0;s<w;s++){var r=u[s];if(r){x("insert",r.nodeName,(r.value||r.nodeValue))}}}function Y(t,s){if(typeof s.events!=="object"){return }function r(v,u){return function(w){if(!u||G.call(w.target,u)){v(t,w)}}}f(s.events,function(w,v){var u=i(v);t.addEventListener(u.name,r(w,u.delegate))})}function i(s){var r=s.split(" ");return{name:r.shift(),delegate:r.join(" ")}}function W(s,r){if(s.__SKATE_DATA){return s.__SKATE_DATA[r]}}function Z(s,r,t){if(!s.__SKATE_DATA){s.__SKATE_DATA={}}s.__SKATE_DATA[r]=t}function b(r,s){if(r.classList){r.classList.add(s)}else{r.className+=r.className?" "+s:s}}function F(s){var t=s.classList;if(t){return t}var r=s.attributes;return(r["class"]&&r["class"].nodeValue.split(/\s+/))||[]}function S(s,r){f(r,function(u,t){if(s[t]===undefined){s[t]=u}});return s}function I(s,r){return Object.prototype.hasOwnProperty.call(s,r)}function f(t,s){for(var r in t){if(I(t,r)){s(t[r],r)}}}function L(r){function s(){var t=document.createElement(r.id);r.prototype=s.prototype;A(t,r);return t}s.prototype=r.prototype;return s}function V(r){var s=r;while(s&&s!==document){if(s.hasAttribute(q)){return s}s=s.parentNode}}function U(x,t,v){var u=t.indexOf(O.types.TAG)>-1;var r=t.indexOf(O.types.ATTR)>-1;var w=t.indexOf(O.types.CLASS)>-1;var s=[];v=v?":not("+v+")":"";if(u){s.push(x+v);s.push("[is="+x+"]"+v)}if(r){s.push("["+x+"]"+v)}if(w){s.push("."+x+v)}return s.join(",")}function p(s,r){return I(o,s)&&o[s].type.indexOf(r)>-1}function n(v,r){if(r){var x=v.querySelectorAll(r);var t=x.length;var u=[];for(var s=0;s<t;s++){var w=x[s];if(w.parentNode===v){u.push(w)}}return u}return v.childNodes||[]}function m(t){var s={caption:"table",dd:"dl",dt:"dl",li:"ul",tbody:"table",td:"tr",thead:"table",tr:"tbody"};var r=t.match(/\s*<([^\s>]+)/);var v=document.createDocumentFragment();var u=document.createElement(r&&s[r[1]]||"div");u.innerHTML=t;c(v,u.childNodes);return v}function c(w,u){var s=u.length;if(u&&s){for(var t=s-1;t>=0;t--){var v=u[t];var r=w.childNodes[0];if(r){w.insertBefore(v,r)}else{w.appendChild(v)}}}}function Q(u,t){var r=t.length;if(t&&r){for(var s=0;s<r;s++){var v=t[s];u.removeChild(v)}}}function e(r,s){if(r.nodeType!==1){return false}return r.contains?r.contains(s):B.call(r,s)}function k(v){if(v.nodeType!==1||v.attributes[q]){return }var r=document.createTreeWalker(v,NodeFilter.SHOW_ELEMENT,M,true);var y=O.components(v);var s=y.length;for(var x=0;x<s;x++){D(v,y[x])}while(r.nextNode()){var t=r.currentNode;var u=O.components(t);var z=u.length;for(var w=0;w<z;w++){D(t,u[w])}}}function a(t){var r=t.length;for(var s=0;s<r;s++){k(t[s])}}function P(u){var r=u.length;for(var s=0;s<r;s++){var t=u[s];if(t.nodeType!==1){continue}var v=t.childNodes;P(v);O.components(t).forEach(K(t))}}function K(r){return function(s){E(r,s)}}function J(r){var s=false;return function(){if(!s){s=true;setTimeout(function(){s=false;r()},1)}}}function M(s){var r=s.attributes;return r&&r[q]?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}var X=J(function(){k(document.getElementsByTagName("html")[0])});var N="data-skate-content";var q="data-skate-ignore";var R=/^[\s\r\n]*$/;var C=window.HTMLElement.prototype;var B=C.contains;var G=(C.matches||C.msMatchesSelector||C.webkitMatchesSelector||C.mozMatchesSelector||C.oMatchesSelector);var j;var T=false;var h=document.createElement("style");var o={};var d=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver;if(!d){d=function(r){this.callback=r;this.elements=[]};d.prototype={observe:function(y,AG){function s(AH){AF.push(AH);r()}function AE(AJ){var AI=AJ.target;if(!AI){return }var AH=AI.parentNode;if(!z(AH)){return }if(AD&&e(AD,AI)){return }if(!AB){AA.push(AB=g(AH))}if(AH){if(!AB.addedNodes){AB.addedNodes=[]}AB.addedNodes.push(AI)}else{if(!AB.removedNodes){AB.removedNodes=[]}AB.removedNodes.push(AI)}AD=AI}function x(AH){return AH===y}function z(AH){return AG.childList&&(AG.subtree||AH===y)}var v=this;var AD;var AB;var AF=[];var AA=[];var r=J(function(){var AH=AF.length;for(var AI=0;AI<AH;AI++){AE(AF[AI])}v.callback(AA);AF=[];AA=[];AD=undefined;AB=undefined});var AC={};var u=[];var w=J(function(){var AH=u.length;v.callback(u);u.splice(0,AH)});var t={target:y,options:AG,insertHandler:s,removeHandler:s,attributeHandler:function(AM){var AK=AM.target;if(!x(AK)){return }var AI=AM.attrName;var AJ=AM.prevValue;var AL=AM.newValue;var AH=g(AK,"attributes");AH.attributeName=AI;if(AG.attributeOldValue){AH.oldValue=AC[AI]||AJ||null}u.push(AH);if(AG.attributeOldValue){AC[AI]=AL}w()}};this.elements.push(t);if(AG.childList){y.addEventListener("DOMNodeInserted",t.insertHandler);y.addEventListener("DOMNodeRemoved",t.removeHandler)}if(AG.attributes){y.addEventListener("DOMAttrModified",t.attributeHandler)}return this},disconnect:function(){f(this.elements,function(r){r.target.removeEventListener("DOMNodeInserted",r.insertHandler);r.target.removeEventListener("DOMNodeRemoved",r.removeHandler);r.target.removeEventListener("DOMAttrModified",r.attributeHandler)});this.elements=[];return this}}}function g(s,r){return{addedNodes:null,attributeName:null,attributeNamespace:null,nextSibling:null,oldValue:null,previousSibling:null,removedNodes:null,target:s,type:r||"childList"}}function O(s,r){r=S(r||{},O.defaults);r.id=s;if(I(o,r.id)){throw new Error('A component of type "'+r.type+'" with the ID of "'+s+'" already exists.')}if(r.template&&typeof r.template==="string"){r.template=O.template.html(r.template)}if(r.ready||r.template){h.sheet.insertRule(U(r.id,r.type,"."+r.classname)+"{display:none}",h.sheet.cssRules.length)}o[r.id]=r;if(T){X()}if(r.type.indexOf(O.types.TAG)>-1){return L(r)}}O.components=function(u){var AB=u.attributes;var AA=AB.length;var v=[];var s=AB.is;var AC=s&&(s.value||s.nodeValue)||u.tagName.toLowerCase();if(p(AC,O.types.TAG)){v.push(o[AC])}for(var z=0;z<AA;z++){var w=AB[z].nodeName;if(p(w,O.types.ATTR)){v.push(o[w])}}var r=F(u);var t=r.length;for(var y=0;y<t;y++){var x=r[y];if(p(x,O.types.CLASS)){v.push(o[x])}}return v};O.destroy=function(){o={};return O};O.init=function(r){if(typeof r.length==="undefined"){r=[r]}a(r);return arguments[0]};O.template={};O.template.html=function(u){var s=m(u);var t=false;var r=new d(function(w){if(t){t=false;return }t=true;for(var v=0;v<w.length;v++){var x=w[v];var z=x.target;var y=W(z,"default-content");if(x.addedNodes){Q(z,y)}if(x.removedNodes&&z.innerHTML.match(R)){z.innerHTML="";c(z,y)}}});return function(y){var AB=m(y.innerHTML);var w=s.cloneNode(true);var AA=w.querySelectorAll("["+N+"]");var AC=AA.length;if(AC){for(var x=0;x<AC;x++){var v=AA[x];var z=n(AB,v.getAttribute(N));Z(v,"default-content",[].slice.call(v.childNodes));if(z.length){v.innerHTML="";c(v,z)}r.observe(v,{childList:true})}}y.innerHTML="";y.appendChild(w)}};O.types={ANY:"act",ATTR:"a",CLASS:"c",NOATTR:"ct",NOCLASS:"at",NOTAG:"ac",TAG:"t"};O.unregister=function(r){delete o[r];return O};O.version="0.9.0";O.defaults={attributes:false,classname:"__skate",events:false,id:"",prototype:{},template:false,type:O.types.ANY};document.getElementsByTagName("head")[0].appendChild(h);document.addEventListener("DOMContentLoaded",function(){X();j=new d(function(t){var w=t.length;for(var s=0;s<w;s++){var u=t[s];var v=u.addedNodes;var r=u.removedNodes;if(v&&v.length&&!V(v[0].parentNode)){a(v)}if(r&&r.length){P(r)}}});j.observe(document,{childList:true,subtree:true});T=true});window.skate=O;if(typeof define==="function"&&define.amd){define("aui/internal/skate",[],function(){return O})}else{if(typeof exports==="object"){module.exports=O}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-core', location = 'tether/tether.js' */
/* tether 0.6.5 */
(function(A){(function(){var O,G,C,U,S,P,E,H,T,R,L,B,Q,I,F,M,J,K={}.hasOwnProperty,D=[].indexOf||function(X){for(var W=0,V=this.length;W<V;W++){if(W in this&&this[W]===X){return W}}return -1},N=[].slice;if(this.Tether==null){this.Tether={modules:[]}}L=function(Y){var X,V,b,W,Z;V=getComputedStyle(Y).position;if(V==="fixed"){return Y}b=void 0;X=Y;while(X=X.parentNode){try{W=getComputedStyle(X)}catch(a){}if(W==null){return X}if(/(auto|scroll)/.test(W.overflow+W["overflow-y"]+W["overflow-x"])){if(V!=="absolute"||((Z=W.position)==="relative"||Z==="absolute"||Z==="fixed")){return X}}}return document.body};F=(function(){var V;V=0;return function(){return V++}})();J={};T=function(Z){var a,W,X,V,Y;X=Z._tetherZeroElement;if(X==null){X=Z.createElement("div");X.setAttribute("data-tether-id",F());S(X.style,{top:0,left:0,position:"absolute"});Z.body.appendChild(X);Z._tetherZeroElement=X}a=X.getAttribute("data-tether-id");if(J[a]==null){J[a]={};Y=X.getBoundingClientRect();for(W in Y){V=Y[W];J[a][W]=V}C(function(){return J[a]=void 0})}return J[a]};Q=null;E=function(Y){var Z,b,c,X,W,V,a;if(Y===document){b=document;Y=document.documentElement}else{b=Y.ownerDocument}c=b.documentElement;Z={};a=Y.getBoundingClientRect();for(X in a){V=a[X];Z[X]=V}W=T(b);Z.top-=W.top;Z.left-=W.left;if(Z.width==null){Z.width=document.body.scrollWidth-Z.left-Z.right}if(Z.height==null){Z.height=document.body.scrollHeight-Z.top-Z.bottom}Z.top=Z.top-c.clientTop;Z.left=Z.left-c.clientLeft;Z.right=b.body.clientWidth-Z.width-Z.left;Z.bottom=b.body.clientHeight-Z.height-Z.top;return Z};H=function(V){return V.offsetParent||document.documentElement};R=function(){var W,X,Y,Z,V;W=document.createElement("div");W.style.width="100%";W.style.height="200px";X=document.createElement("div");S(X.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"});X.appendChild(W);document.body.appendChild(X);Z=W.offsetWidth;X.style.overflow="scroll";V=W.offsetWidth;if(Z===V){V=X.clientWidth}document.body.removeChild(X);Y=Z-V;return{width:Y,height:Y}};S=function(X){var W,Y,b,c,a,V,Z;if(X==null){X={}}W=[];Array.prototype.push.apply(W,arguments);Z=W.slice(1);for(a=0,V=Z.length;a<V;a++){b=Z[a];if(b){for(Y in b){if(!K.call(b,Y)){continue}c=b[Y];X[Y]=c}}}return X};I=function(Z,Y){var X,b,W,a,V;if(Z.classList!=null){a=Y.split(" ");V=[];for(b=0,W=a.length;b<W;b++){X=a[b];if(X.trim()){V.push(Z.classList.remove(X))}}return V}else{return Z.className=Z.className.replace(new RegExp("(^| )"+(Y.split(" ").join("|"))+"( |$)","gi")," ")}};G=function(Z,Y){var X,b,W,a,V;if(Z.classList!=null){a=Y.split(" ");V=[];for(b=0,W=a.length;b<W;b++){X=a[b];if(X.trim()){V.push(Z.classList.add(X))}}return V}else{I(Z,Y);return Z.className+=" "+Y}};B=function(W,V){if(W.classList!=null){return W.classList.contains(V)}else{return new RegExp("(^| )"+V+"( |$)","gi").test(W.className)}};M=function(W,c,b){var d,Z,Y,a,V,X;for(Z=0,a=b.length;Z<a;Z++){d=b[Z];if(D.call(c,d)<0){if(B(W,d)){I(W,d)}}}X=[];for(Y=0,V=c.length;Y<V;Y++){d=c[Y];if(!B(W,d)){X.push(G(W,d))}else{X.push(void 0)}}return X};U=[];C=function(V){return U.push(V)};P=function(){var W,V;V=[];while(W=U.pop()){V.push(W())}return V};O=(function(){function V(){}V.prototype.on=function(a,Z,W,Y){var X;if(Y==null){Y=false}if(this.bindings==null){this.bindings={}}if((X=this.bindings)[a]==null){X[a]=[]}return this.bindings[a].push({handler:Z,ctx:W,once:Y})};V.prototype.once=function(Y,X,W){return this.on(Y,X,W,true)};V.prototype.off=function(Z,Y){var X,a,W;if(((a=this.bindings)!=null?a[Z]:void 0)==null){return }if(Y==null){return delete this.bindings[Z]}else{X=0;W=[];while(X<this.bindings[Z].length){if(this.bindings[Z][X].handler===Y){W.push(this.bindings[Z].splice(X,1))}else{W.push(X++)}}return W}};V.prototype.trigger=function(){var c,e,W,d,b,X,a,Z,Y;W=arguments[0],c=2<=arguments.length?N.call(arguments,1):[];if((a=this.bindings)!=null?a[W]:void 0){b=0;Y=[];while(b<this.bindings[W].length){Z=this.bindings[W][b],d=Z.handler,e=Z.ctx,X=Z.once;d.apply(e!=null?e:this,c);if(X){Y.push(this.bindings[W].splice(b,1))}else{Y.push(b++)}}return Y}};return V})();this.Tether.Utils={getScrollParent:L,getBounds:E,getOffsetParent:H,extend:S,addClass:G,removeClass:I,hasClass:B,updateClasses:M,defer:C,flush:P,uniqueId:F,Evented:O,getScrollBarSize:R}}).call(this);(function(){var Z,a,d,H,K,c,e,I,D,b,X,G,M,P,Y,Q,C,B,L,N,T,f,O,E,S,R,W,V,J,U=[].slice,F=function(g,h){return function(){return g.apply(h,arguments)}};if(this.Tether==null){throw new Error("You must include the utils.js file before tether.js")}H=this.Tether;J=H.Utils,Q=J.getScrollParent,C=J.getSize,P=J.getOuterSize,G=J.getBounds,M=J.getOffsetParent,b=J.extend,K=J.addClass,O=J.removeClass,R=J.updateClasses,D=J.defer,X=J.flush,Y=J.getScrollBarSize;W=function(h,g,i){if(i==null){i=1}return(h+i>=g&&g>=h-i)};S=(function(){var j,i,k,h,g;j=document.createElement("div");g=["transform","webkitTransform","OTransform","MozTransform","msTransform"];for(k=0,h=g.length;k<h;k++){i=g[k];if(j.style[i]!==void 0){return i}}})();E=[];f=function(){var h,i,g;for(i=0,g=E.length;i<g;i++){h=E[i];h.position(false)}return X()};B=function(){var g;return(g=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?g:+(new Date)};(function(){var g,o,m,h,l,k,n,j,i;o=null;m=null;h=null;l=function(){if((m!=null)&&m>16){m=Math.min(m-16,250);h=setTimeout(l,250);return }if((o!=null)&&(B()-o)<10){return }if(h!=null){clearTimeout(h);h=null}o=B();f();return m=B()-o};j=["resize","scroll","touchmove"];i=[];for(k=0,n=j.length;k<n;k++){g=j[k];i.push(window.addEventListener(g,l))}return i})();Z={center:"center",left:"right",right:"left"};a={middle:"middle",top:"bottom",bottom:"top"};d={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"};I=function(j,g){var i,h;i=j.left,h=j.top;if(i==="auto"){i=Z[g.left]}if(h==="auto"){h=a[g.top]}return{left:i,top:h}};e=function(h){var g,i;return{left:(g=d[h.left])!=null?g:h.left,top:(i=d[h.top])!=null?i:h.top}};c=function(){var m,j,i,l,k,h,g;j=1<=arguments.length?U.call(arguments,0):[];i={top:0,left:0};for(k=0,h=j.length;k<h;k++){g=j[k],l=g.top,m=g.left;if(typeof l==="string"){l=parseFloat(l,10)}if(typeof m==="string"){m=parseFloat(m,10)}i.top+=l;i.left+=m}return i};L=function(h,g){if(typeof h.left==="string"&&h.left.indexOf("%")!==-1){h.left=parseFloat(h.left,10)/100*g.width}if(typeof h.top==="string"&&h.top.indexOf("%")!==-1){h.top=parseFloat(h.top,10)/100*g.height}return h};N=T=function(h){var j,i,g;g=h.split(" "),i=g[0],j=g[1];return{top:i,left:j}};V=(function(){g.modules=[];function g(j){this.position=F(this.position,this);var k,l,i,h,m;E.push(this);this.history=[];this.setOptions(j,false);h=H.modules;for(l=0,i=h.length;l<i;l++){k=h[l];if((m=k.initialize)!=null){m.call(this)}}this.position()}g.prototype.getClass=function(i){var h,j;if((h=this.options.classes)!=null?h[i]:void 0){return this.options.classes[i]}else{if(((j=this.options.classes)!=null?j[i]:void 0)!==false){if(this.options.classPrefix){return""+this.options.classPrefix+"-"+i}else{return i}}else{return""}}};g.prototype.setOptions=function(k,i){var n,l,m,j,h,o;this.options=k;if(i==null){i=true}n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=b(n,this.options);h=this.options,this.element=h.element,this.target=h.target,this.targetModifier=h.targetModifier;if(this.target==="viewport"){this.target=document.body;this.targetModifier="visible"}else{if(this.target==="scroll-handle"){this.target=document.body;this.targetModifier="scroll-handle"}}o=["element","target"];for(m=0,j=o.length;m<j;m++){l=o[m];if(this[l]==null){throw new Error("Tether Error: Both element and target must be defined")}if(this[l].jquery!=null){this[l]=this[l][0]}else{if(typeof this[l]==="string"){this[l]=document.querySelector(this[l])}}}K(this.element,this.getClass("element"));K(this.target,this.getClass("target"));if(!this.options.attachment){throw new Error("Tether Error: You must provide an attachment")}this.targetAttachment=N(this.options.targetAttachment);this.attachment=N(this.options.attachment);this.offset=T(this.options.offset);this.targetOffset=T(this.options.targetOffset);if(this.scrollParent!=null){this.disable()}if(this.targetModifier==="scroll-handle"){this.scrollParent=this.target}else{this.scrollParent=Q(this.target)}if(this.options.enabled!==false){return this.enable(i)}};g.prototype.getTargetBounds=function(){var h,n,k,p,l,j,o,i,m;if(this.targetModifier!=null){switch(this.targetModifier){case"visible":if(this.target===document.body){return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}}else{h=G(this.target);l={height:h.height,width:h.width,top:h.top,left:h.left};l.height=Math.min(l.height,h.height-(pageYOffset-h.top));l.height=Math.min(l.height,h.height-((h.top+h.height)-(pageYOffset+innerHeight)));l.height=Math.min(innerHeight,l.height);l.height-=2;l.width=Math.min(l.width,h.width-(pageXOffset-h.left));l.width=Math.min(l.width,h.width-((h.left+h.width)-(pageXOffset+innerWidth)));l.width=Math.min(innerWidth,l.width);l.width-=2;if(l.top<pageYOffset){l.top=pageYOffset}if(l.left<pageXOffset){l.left=pageXOffset}return l}break;case"scroll-handle":m=this.target;if(m===document.body){m=document.documentElement;h={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}}else{h=G(m)}i=getComputedStyle(m);k=m.scrollWidth>m.clientWidth||"scroll"===[i.overflow,i.overflowX]||this.target!==document.body;j=0;if(k){j=15}p=h.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-j;l={width:15,height:p*0.975*(p/m.scrollHeight),left:h.left+h.width-parseFloat(i.borderLeftWidth)-15};n=0;if(p<408&&this.target===document.body){n=-0.00011*Math.pow(p,2)-0.00727*p+22.58}if(this.target!==document.body){l.height=Math.max(l.height,24)}o=this.target.scrollTop/(m.scrollHeight-p);l.top=o*(p-l.height-n)+h.top+parseFloat(i.borderTopWidth);if(this.target===document.body){l.height=Math.max(l.height,24)}return l}}else{return G(this.target)}};g.prototype.clearCache=function(){return this._cache={}};g.prototype.cache=function(i,h){if(this._cache==null){this._cache={}}if(this._cache[i]==null){this._cache[i]=h.call(this)}return this._cache[i]};g.prototype.enable=function(h){if(h==null){h=true}K(this.target,this.getClass("enabled"));K(this.element,this.getClass("enabled"));this.enabled=true;if(this.scrollParent!==document){this.scrollParent.addEventListener("scroll",this.position)}if(h){return this.position()}};g.prototype.disable=function(){O(this.target,this.getClass("enabled"));O(this.element,this.getClass("enabled"));this.enabled=false;if(this.scrollParent!=null){return this.scrollParent.removeEventListener("scroll",this.position)}};g.prototype.destroy=function(){var l,k,m,j,h;this.disable();h=[];for(l=m=0,j=E.length;m<j;l=++m){k=E[l];if(k===this){E.splice(l,1);break}else{h.push(void 0)}}return h};g.prototype.updateAttachClasses=function(k,i){var s,r,p,j,n,m,q,h,l,o=this;if(k==null){k=this.attachment}if(i==null){i=this.targetAttachment}j=["left","top","bottom","right","middle","center"];if((l=this._addAttachClasses)!=null?l.length:void 0){this._addAttachClasses.splice(0,this._addAttachClasses.length)}s=this._addAttachClasses!=null?this._addAttachClasses:this._addAttachClasses=[];if(k.top){s.push(""+(this.getClass("element-attached"))+"-"+k.top)}if(k.left){s.push(""+(this.getClass("element-attached"))+"-"+k.left)}if(i.top){s.push(""+(this.getClass("target-attached"))+"-"+i.top)}if(i.left){s.push(""+(this.getClass("target-attached"))+"-"+i.left)}r=[];for(n=0,q=j.length;n<q;n++){p=j[n];r.push(""+(this.getClass("element-attached"))+"-"+p)}for(m=0,h=j.length;m<h;m++){p=j[m];r.push(""+(this.getClass("target-attached"))+"-"+p)}return D(function(){if(o._addAttachClasses==null){return }R(o.element,o._addAttachClasses,r);R(o.target,o._addAttachClasses,r);return o._addAttachClasses=void 0})};g.prototype.position=function(AP){var o,AI,k,p,AN,AH,l,m,AL,AG,AF,z,AA,u,AJ,AE,AR,AD,AB,i,AM,AK,j,q,h,AQ,AO,AC,r,y,x,w,v,t,s,n=this;if(AP==null){AP=true}if(!this.enabled){return }this.clearCache();i=I(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,i);o=this.cache("element-bounds",function(){return G(n.element)});h=o.width,k=o.height;if(h===0&&k===0&&(this.lastSize!=null)){y=this.lastSize,h=y.width,k=y.height}else{this.lastSize={width:h,height:k}}j=AK=this.cache("target-bounds",function(){return n.getTargetBounds()});AL=L(e(this.attachment),{width:h,height:k});AM=L(e(i),j);AN=L(this.offset,{width:h,height:k});AH=L(this.targetOffset,j);AL=c(AL,AN);AM=c(AM,AH);p=AK.left+AM.left-AL.left;q=AK.top+AM.top-AL.top;x=H.modules;for(AQ=0,AC=x.length;AQ<AC;AQ++){l=x[AQ];AJ=l.position.call(this,{left:p,top:q,targetAttachment:i,targetPos:AK,attachment:this.attachment,elementPos:o,offset:AL,targetOffset:AM,manualOffset:AN,manualTargetOffset:AH,scrollbarSize:AD});if((AJ==null)||typeof AJ!=="object"){continue}else{if(AJ===false){return false}else{q=AJ.top,p=AJ.left}}}m={page:{top:q,left:p},viewport:{top:q-pageYOffset,bottom:pageYOffset-q-k+innerHeight,left:p-pageXOffset,right:pageXOffset-p-h+innerWidth}};if(document.body.scrollWidth>window.innerWidth){AD=this.cache("scrollbar-size",Y);m.viewport.bottom-=AD.height}if(document.body.scrollHeight>window.innerHeight){AD=this.cache("scrollbar-size",Y);m.viewport.right-=AD.width}if(((w=document.body.style.position)!==""&&w!=="static")||((v=document.body.parentElement.style.position)!==""&&v!=="static")){m.page.bottom=document.body.scrollHeight-q-k;m.page.right=document.body.scrollWidth-p-h}if(((t=this.options.optimizations)!=null?t.moveElement:void 0)!==false&&(this.targetModifier==null)){AF=this.cache("target-offsetparent",function(){return M(n.target)});u=this.cache("target-offsetparent-bounds",function(){return G(AF)});AA=getComputedStyle(AF);AI=getComputedStyle(this.element);z=u;AG={};s=["Top","Left","Bottom","Right"];for(AO=0,r=s.length;AO<r;AO++){AB=s[AO];AG[AB.toLowerCase()]=parseFloat(AA["border"+AB+"Width"])}u.right=document.body.scrollWidth-u.left-z.width+AG.right;u.bottom=document.body.scrollHeight-u.top-z.height+AG.bottom;if(m.page.top>=(u.top+AG.top)&&m.page.bottom>=u.bottom){if(m.page.left>=(u.left+AG.left)&&m.page.right>=u.right){AR=AF.scrollTop;AE=AF.scrollLeft;m.offset={top:m.page.top-u.top+AR-AG.top,left:m.page.left-u.left+AE-AG.left}}}}this.move(m);this.history.unshift(m);if(this.history.length>3){this.history.pop()}if(AP){X()}return true};g.prototype.move=function(x){var n,s,o,y,m,h,r,u,q,l,z,v,p,i,w,k,j,t=this;if(this.element.parentNode==null){return }u={};for(l in x){u[l]={};for(y in x[l]){o=false;k=this.history;for(i=0,w=k.length;i<w;i++){r=k[i];if(!W((j=r[l])!=null?j[y]:void 0,x[l][y])){o=true;break}}if(!o){u[l][y]=true}}}n={top:"",left:"",right:"",bottom:""};q=function(AE,AD){var AC,AA,AB;if(((AB=t.options.optimizations)!=null?AB.gpu:void 0)!==false){if(AE.top){n.top=0;AA=AD.top}else{n.bottom=0;AA=-AD.bottom}if(AE.left){n.left=0;AC=AD.left}else{n.right=0;AC=-AD.right}n[S]="translateX("+(Math.round(AC))+"px) translateY("+(Math.round(AA))+"px)";if(S!=="msTransform"){return n[S]+=" translateZ(0)"}}else{if(AE.top){n.top=""+AD.top+"px"}else{n.bottom=""+AD.bottom+"px"}if(AE.left){return n.left=""+AD.left+"px"}else{return n.right=""+AD.right+"px"}}};m=false;if((u.page.top||u.page.bottom)&&(u.page.left||u.page.right)){n.position="absolute";q(u.page,x.page)}else{if((u.viewport.top||u.viewport.bottom)&&(u.viewport.left||u.viewport.right)){n.position="fixed";q(u.viewport,x.viewport)}else{if((u.offset!=null)&&u.offset.top&&u.offset.left){n.position="absolute";h=this.cache("target-offsetparent",function(){return M(t.target)});if(M(this.element)!==h){D(function(){t.element.parentNode.removeChild(t.element);return h.appendChild(t.element)})}q(u.offset,x.offset);m=true}else{n.position="absolute";q({top:true,left:true},x.page)}}}if(!m&&this.element.parentNode.tagName!=="BODY"){this.element.parentNode.removeChild(this.element);document.body.appendChild(this.element)}p={};v=false;for(y in n){z=n[y];s=this.element.style[y];if(s!==""&&z!==""&&(y==="top"||y==="left"||y==="bottom"||y==="right")){s=parseFloat(s);z=parseFloat(z)}if(s!==z){v=true;p[y]=n[y]}}if(v){return D(function(){return b(t.element.style,p)})}};return g})();H.position=f;this.Tether=b(V,H)}).call(this);(function(){var F,C,B,H,J,G,I,L,E,D,K=[].indexOf||function(O){for(var N=0,M=this.length;N<M;N++){if(N in this&&this[N]===O){return N}}return -1};D=this.Tether.Utils,I=D.getOuterSize,G=D.getBounds,L=D.getSize,H=D.extend,E=D.updateClasses,B=D.defer;C={left:"right",right:"left",top:"bottom",bottom:"top",middle:"middle"};F=["left","top","right","bottom"];J=function(M,T){var P,R,Q,U,N,O,S;if(T==="scrollParent"){T=M.scrollParent}else{if(T==="window"){T=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]}}if(T===document){T=T.documentElement}if(T.nodeType!=null){R=U=G(T);N=getComputedStyle(T);T=[R.left,R.top,U.width+R.left,U.height+R.top];for(P=O=0,S=F.length;O<S;P=++O){Q=F[P];Q=Q[0].toUpperCase()+Q.substr(1);if(Q==="Top"||Q==="Left"){T[P]+=parseFloat(N["border"+Q+"Width"])}else{T[P]-=parseFloat(N["border"+Q+"Width"])}}}return T};this.Tether.modules.push({position:function(t){var x,y,r,w,Z,X,R,AI,AH,P,U,AF,u,z,v,s,Q,l,n,q,N,T,O,m,AJ,V,M,AG,AE,AD,AC,o,d,b,a,Y,W,AB,AA,k,j,i,h,g,f,e,c,S=this;V=t.top,U=t.left,N=t.targetAttachment;if(!this.options.constraints){return true}l=function(AN){var AL,AM,AK,p;S.removeClass(AN);p=[];for(AM=0,AK=F.length;AM<AK;AM++){AL=F[AM];p.push(S.removeClass(""+AN+"-"+AL))}return p};k=this.cache("element-bounds",function(){return G(S.element)}),P=k.height,M=k.width;if(M===0&&P===0&&(this.lastSize!=null)){j=this.lastSize,M=j.width,P=j.height}O=this.cache("target-bounds",function(){return S.getTargetBounds()});T=O.height;m=O.width;q={};AH={};y=[this.getClass("pinned"),this.getClass("out-of-bounds")];i=this.options.constraints;for(AG=0,o=i.length;AG<o;AG++){AI=i[AG];if(AI.outOfBoundsClass){y.push(AI.outOfBoundsClass)}if(AI.pinnedClass){y.push(AI.pinnedClass)}}for(AE=0,d=y.length;AE<d;AE++){R=y[AE];h=["left","top","right","bottom"];for(AD=0,b=h.length;AD<b;AD++){n=h[AD];y.push(""+R+"-"+n)}}x=[];q=H({},N);AH=H({},this.attachment);g=this.options.constraints;for(AC=0,a=g.length;AC<a;AC++){AI=g[AC];AJ=AI.to,r=AI.attachment,v=AI.pin;if(r==null){r=""}if(K.call(r," ")>=0){f=r.split(" "),X=f[0],Z=f[1]}else{Z=X=r}w=J(this,AJ);if(X==="target"||X==="both"){if(V<w[1]&&q.top==="top"){V+=T;q.top="bottom"}if(V+P>w[3]&&q.top==="bottom"){V-=T;q.top="top"}}if(X==="together"){if(V<w[1]&&q.top==="top"){if(AH.top==="bottom"){V+=T;q.top="bottom";V+=P;AH.top="top"}else{if(AH.top==="top"){V+=T;q.top="bottom";V-=P;AH.top="bottom"}}}if(V+P>w[3]&&q.top==="bottom"){if(AH.top==="top"){V-=T;q.top="top";V-=P;AH.top="bottom"}else{if(AH.top==="bottom"){V-=T;q.top="top";V+=P;AH.top="top"}}}if(q.top==="middle"){if(V+P>w[3]&&AH.top==="top"){V-=P;AH.top="bottom"}else{if(V<w[1]&&AH.top==="bottom"){V+=P;AH.top="top"}}}}if(Z==="target"||Z==="both"){if(U<w[0]&&q.left==="left"){U+=m;q.left="right"}if(U+M>w[2]&&q.left==="right"){U-=m;q.left="left"}}if(Z==="together"){if(U<w[0]&&q.left==="left"){if(AH.left==="right"){U+=m;q.left="right";U+=M;AH.left="left"}else{if(AH.left==="left"){U+=m;q.left="right";U-=M;AH.left="right"}}}else{if(U+M>w[2]&&q.left==="right"){if(AH.left==="left"){U-=m;q.left="left";U-=M;AH.left="right"}else{if(AH.left==="right"){U-=m;q.left="left";U+=M;AH.left="left"}}}else{if(q.left==="center"){if(U+M>w[2]&&AH.left==="left"){U-=M;AH.left="right"}else{if(U<w[0]&&AH.left==="right"){U+=M;AH.left="left"}}}}}}if(X==="element"||X==="both"){if(V<w[1]&&AH.top==="bottom"){V+=P;AH.top="top"}if(V+P>w[3]&&AH.top==="top"){V-=P;AH.top="bottom"}}if(Z==="element"||Z==="both"){if(U<w[0]&&AH.left==="right"){U+=M;AH.left="left"}if(U+M>w[2]&&AH.left==="left"){U-=M;AH.left="right"}}if(typeof v==="string"){v=(function(){var AM,AK,AL,p;AL=v.split(",");p=[];for(AK=0,AM=AL.length;AK<AM;AK++){z=AL[AK];p.push(z.trim())}return p})()}else{if(v===true){v=["top","left","right","bottom"]}}v||(v=[]);s=[];AF=[];if(V<w[1]){if(K.call(v,"top")>=0){V=w[1];s.push("top")}else{AF.push("top")}}if(V+P>w[3]){if(K.call(v,"bottom")>=0){V=w[3]-P;s.push("bottom")}else{AF.push("bottom")}}if(U<w[0]){if(K.call(v,"left")>=0){U=w[0];s.push("left")}else{AF.push("left")}}if(U+M>w[2]){if(K.call(v,"right")>=0){U=w[2]-M;s.push("right")}else{AF.push("right")}}if(s.length){Q=(e=this.options.pinnedClass)!=null?e:this.getClass("pinned");x.push(Q);for(AB=0,Y=s.length;AB<Y;AB++){n=s[AB];x.push(""+Q+"-"+n)}}if(AF.length){u=(c=this.options.outOfBoundsClass)!=null?c:this.getClass("out-of-bounds");x.push(u);for(AA=0,W=AF.length;AA<W;AA++){n=AF[AA];x.push(""+u+"-"+n)}}if(K.call(s,"left")>=0||K.call(s,"right")>=0){AH.left=q.left=false}if(K.call(s,"top")>=0||K.call(s,"bottom")>=0){AH.top=q.top=false}if(q.top!==N.top||q.left!==N.left||AH.top!==this.attachment.top||AH.left!==this.attachment.left){this.updateAttachClasses(AH,q)}}B(function(){E(S.target,x,y);return E(S.element,x,y)});return{top:V,left:U}}})}).call(this);(function(){var E,C,B,D;D=this.Tether.Utils,C=D.getBounds,B=D.updateClasses,E=D.defer;this.Tether.modules.push({position:function(T){var V,P,f,S,W,R,a,L,Z,Q,U,X,M,J,H,F,c,e,d,b,O,N,K,I,G,Y=this;U=T.top,R=T.left;O=this.cache("element-bounds",function(){return C(Y.element)}),W=O.height,X=O.width;Q=this.getTargetBounds();S=U+W;a=R+X;V=[];if(U<=Q.bottom&&S>=Q.top){N=["left","right"];for(M=0,c=N.length;M<c;M++){L=N[M];if((K=Q[L])===R||K===a){V.push(L)}}}if(R<=Q.right&&a>=Q.left){I=["top","bottom"];for(J=0,e=I.length;J<e;J++){L=I[J];if((G=Q[L])===U||G===S){V.push(L)}}}f=[];P=[];Z=["left","top","right","bottom"];f.push(this.getClass("abutted"));for(H=0,d=Z.length;H<d;H++){L=Z[H];f.push(""+(this.getClass("abutted"))+"-"+L)}if(V.length){P.push(this.getClass("abutted"))}for(F=0,b=V.length;F<b;F++){L=V[F];P.push(""+(this.getClass("abutted"))+"-"+L)}E(function(){B(Y.target,P,f);return B(Y.element,P,f)});return true}})}).call(this);(function(){this.Tether.modules.push({position:function(D){var H,B,C,I,G,F,E;F=D.top,H=D.left;if(!this.options.shift){return }B=function(J){if(typeof J==="function"){return J.call(this,{top:F,left:H})}else{return J}};C=B(this.options.shift);if(typeof C==="string"){C=C.split(" ");C[1]||(C[1]=C[0]);G=C[0],I=C[1];G=parseFloat(G,10);I=parseFloat(I,10)}else{E=[C.top,C.left],G=E[0],I=E[1]}F+=G;H+=I;return{top:F,left:H}}})}).call(this);A.Tether=this.Tether;if(typeof define==="function"){define("aui/internal/tether",[],function(){return A.Tether})}else{if(typeof exports==="object"){module.exports=A.Tether}}}(this));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-core', location = 'js/aui.js' */
/* Atlassian UI and the Atlassian Design Guidelines are created by Atlassian. See https://developer.atlassian.com/display/AUI/ for API documentation and https://developer.atlassian.com/design/ for license details. */
(function(){if(!window.jQuery&&!window.Zepto){throw new Error("either jQuery or Zepto is required for AJS to function.")}window.AJS=(function(){var F=[];var A;var E;var H=0;function D(L){var K={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;","`":"&#96;"};if(typeof K[L]==="string"){return K[L]}return"&quot;"}var I=/[&"'<>`]/g;var G={version:"5.7.26",params:{},$:window.jQuery||window.Zepto,preventDefault:function(K){K.preventDefault()},stopEvent:function(K){K.stopPropagation();return false},include:function(K){if(!this.contains(F,K)){F.push(K);var L=document.createElement("script");L.src=K;this.$("body").append(L)}},toggleClassName:function(K,L){if(!(K=this.$(K))){return }K.toggleClass(L)},setVisible:function(L,K){if(!(L=this.$(L))){return }var M=this.$;M(L).each(function(){var N=M(this).hasClass("hidden");if(N&&K){M(this).removeClass("hidden")}else{if(!N&&!K){M(this).addClass("hidden")}}})},setCurrent:function(K,L){if(!(K=this.$(K))){return }if(L){K.addClass("current")}else{K.removeClass("current")}},isVisible:function(K){return !this.$(K).hasClass("hidden")},isClipped:function(K){K=AJS.$(K);return(K.prop("scrollWidth")>K.prop("clientWidth"))},populateParameters:function(L){if(!L){L=this.params}var K=this;this.$(".parameters input").each(function(){var M=this.value,N=this.title||this.id;if(K.$(this).hasClass("list")){if(L[N]){L[N].push(M)}else{L[N]=[M]}}else{L[N]=(M.match(/^(tru|fals)e$/i)?M.toLowerCase()==="true":M)}})},toInit:function(L){var K=this;this.$(function(){try{L.apply(this,arguments)}catch(M){K.log("Failed to run init function: "+M+"\n"+L.toString())}});return this},indexOf:function(O,N,L){var M=O.length;if(!L){L=0}else{if(L<0){L=Math.max(0,M+L)}}for(var K=L;K<M;K++){if(O[K]===N){return K}}return -1},contains:function(L,K){return this.indexOf(L,K)>-1},firebug:function(){var K=this.$(document.createElement("script"));K.attr("src","https://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js");this.$("head").append(K);(function(){if(window.firebug){firebug.init()}else{setTimeout(AJS.firebug,0)}})()},clone:function(K){return AJS.$(K).clone().removeAttr("id")},alphanum:function(R,Q){R=(R+"").toLowerCase();Q=(Q+"").toLowerCase();var M=/(\d+|\D+)/g;var N=R.match(M);var K=Q.match(M);var P=Math.max(N.length,K.length);for(var L=0;L<P;L++){if(L===N.length){return -1}if(L===K.length){return 1}var S=parseInt(N[L],10)+"";var O=parseInt(K[L],10)+"";if(S===N[L]&&O===K[L]&&S!==O){return(S-O)/Math.abs(S-O)}if((S!==N[L]||O!==K[L])&&N[L]!==K[L]){return N[L]<K[L]?-1:1}}return 0},onTextResize:function(L){if(typeof L==="function"){if(AJS.onTextResize["on-text-resize"]){AJS.onTextResize["on-text-resize"].push(function(M){L(M)})}else{var K=AJS("div");K.css({width:"1em",height:"1em",position:"absolute",top:"-9999em",left:"-9999em"});this.$("body").append(K);K.size=K.width();setInterval(function(){if(K.size!==K.width()){K.size=K.width();for(var M=0,N=AJS.onTextResize["on-text-resize"].length;M<N;M++){AJS.onTextResize["on-text-resize"][M](K.size)}}},0);AJS.onTextResize.em=K;AJS.onTextResize["on-text-resize"]=[function(M){L(M)}]}}},unbindTextResize:function(M){for(var K=0,L=AJS.onTextResize["on-text-resize"].length;K<L;K++){if(AJS.onTextResize["on-text-resize"][K]===M){return AJS.onTextResize["on-text-resize"].splice(K,1)}}},escape:function(K){return escape(K).replace(/%u\w{4}/gi,function(L){return unescape(L)})},escapeHtml:function(K){return K.replace(I,D)},filterBySearch:function(O,T,U){if(!T){return[]}var M=this.$;var R=(U&&U.keywordsField)||"keywords";var Q=(U&&U.ignoreForCamelCase)?"i":"";var N=(U&&U.matchBoundary)?"\\b":"";var L=(U&&U.splitRegex)||(/\s+/);var P=T.split(L);var K=[];P.forEach(function(X){var W=[new RegExp(N+X,"i")];if(/^([A-Z][a-z]*) {2,}$/.test(this)){var V=this.replace(/([A-Z][a-z]*)/g,"\\b$1[^,]*");W.push(new RegExp(V,Q))}K.push(W)});var S=[];O.forEach(function(Y){for(var X=0;X<K.length;X++){var V=false;for(var W=0;W<K[X].length;W++){if(K[X][W].test(Y[R])){V=true;break}}if(!V){return }}S.push(Y)});return S},drawLogo:function(T){var M=T.scaleFactor||1;var R=T.fill||"#fff";var S=T.stroke||"#000";var K=400*M;var P=40*M;var O=T.strokeWidth||1;var Q=T.containerID||".aui-logo";if(!AJS.$(".aui-logo").length){AJS.$("body").append('<div id="aui-logo" class="aui-logo"><div>')}var N=Raphael(Q,K+50*M,P+100*M);var L=N.path("M 0,0 c 3.5433333,-4.7243333 7.0866667,-9.4486667 10.63,-14.173 -14.173,0 -28.346,0 -42.519,0 C -35.432667,-9.4486667 -38.976333,-4.7243333 -42.52,0 -28.346667,0 -14.173333,0 0,0 z m 277.031,28.346 c -14.17367,0 -28.34733,0 -42.521,0 C 245.14,14.173 255.77,0 266.4,-14.173 c -14.17267,0 -28.34533,0 -42.518,0 C 213.25167,0 202.62133,14.173 191.991,28.346 c -14.17333,0 -28.34667,0 -42.52,0 14.17333,-18.8976667 28.34667,-37.7953333 42.52,-56.693 -7.08667,-9.448667 -14.17333,-18.897333 -21.26,-28.346 -14.173,0 -28.346,0 -42.519,0 7.08667,9.448667 14.17333,18.897333 21.26,28.346 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 -14.173333,0 -28.346667,0 -42.52,0 10.63,-14.173 21.26,-28.346 31.89,-42.519 -14.390333,0 -28.780667,0 -43.171,0 C 42.520733,1.330715e-4 31.889933,14.174867 21.26,28.347 c -42.520624,6.24e-4 -85.039187,-8.13e-4 -127.559,-0.001 11.220667,-14.961 22.441333,-29.922 33.662,-44.883 -6.496,-8.661 -12.992,-17.322 -19.488,-25.983 5.905333,0 11.810667,0 17.716,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.173333,0 28.346667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.173333,0 28.3466667,0 42.52,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.1733333,0 28.3466667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.390333,0 28.780667,0 43.171,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 42.51967,0 85.03933,0 127.559,0 10.63033,14.173333 21.26067,28.346667 31.891,42.52 14.17267,0 28.34533,0 42.518,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.17367,0 28.34733,0 42.521,0 14.17333,18.897667 28.34667,37.795333 42.52,56.693 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 z");L.scale(M,-M,0,0);L.translate(120*M,P);L.attr("fill",R);L.attr("stroke",S);L.attr("stroke-width",O)},debounce:function(L,N){var M;var K;return function(){var O=arguments;var P=this;var Q=function(){K=L.apply(P,O)};clearTimeout(M);M=setTimeout(Q,N);return K}},id:function(K){A=H+++"";E=K?K+A:"aui-uid-"+A;if(!document.getElementById(E)){return E}else{E=E+"-"+new Date().getTime();if(!document.getElementById(E)){return E}else{throw new Error("ERROR: timestamped fallback ID "+E+" exists. AJS.id stopped.")}}},_addID:function(L,M){var K=AJS.$(L);var N=M||false;K.each(function(){var O=AJS.$(this);if(!O.attr("id")){O.attr("id",AJS.id(N))}})},enable:function(M,K){var L=AJS.$(M);if(typeof K==="undefined"){K=true}return L.each(function(){this.disabled=!K})}};if(typeof AJS!=="undefined"){for(var C in AJS){G[C]=AJS[C]}}var J=function(){var K=null;if(arguments.length&&typeof arguments[0]==="string"){K=AJS.$(document.createElement(arguments[0]));if(arguments.length===2){K.html(arguments[1])}}return K};for(var B in G){J[B]=G[B]}return J})();AJS.$(function(){var A=AJS.$("body");if(!A.data("auiVersion")){A.attr("data-aui-version",AJS.version)}AJS.populateParameters()});AJS.$.ajaxSettings.traditional=true;AJS.deprecate.prop(AJS,"firebug");AJS.deprecate.prop(AJS,"stopEvent",{alternativeName:"AJS.preventDefault()"});AJS.deprecate.prop(AJS,"drawLogo");AJS.deprecate.prop(AJS,"toggleClassName")})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-core', location = 'js/format.js' */
AJS.format=function(I){var B=/'(?!')/g,H=/^\d+$/,E=/^(\d+),number$/,C=/^(\d+)\,choice\,(.+)/,G=/^(\d+)([#<])(.+)/;var F=function(R,P){var O="",M;if(M=R.match(H)){O=P.length>++R?P[R]:""}else{if(M=R.match(E)){O=P.length>++M[1]?P[M[1]]:""}else{if(M=R.match(C)){var S=(P.length>++M[1]?P[M[1]]:null);if(S!==null){var T=M[2].split("|");var N=null;for(var L=0;L<T.length;L++){var K=T[L].match(G);var Q=parseInt(K[1],10);if(S<Q){if(N){O=N;break}else{O=K[3];break}}if(S==Q&&K[2]=="#"){O=K[3];break}else{}if(L==T.length-1){O=K[3]}N=K[3]}var J=[O].concat(Array.prototype.slice.call(P,1));O=AJS.format.apply(AJS,J)}}}}return O};var D=function(O){var M=false,J=-1,N=0;for(var L=0;L<O.length;L++){var P=O.charAt(L);if(P=="'"){M=!M}if(M){continue}if(P==="{"){if(N===0){J=L}N++}else{if(P==="}"){if(N>0){N--;if(N===0){var K=[];K.push(O.substring(0,L+1));K.push(O.substring(0,J));K.push(O.substring(J+1,L));return K}}}}}return null};var A=function(M){var K=arguments,L="",J=D(M);while(J){M=M.substring(J[0].length);L+=J[1].replace(B,"");L+=F(J[2],K);J=D(M)}L+=M.replace(B,"");return L};return A.apply(AJS,arguments)};AJS.I18n={getText:function(A){var B=Array.prototype.slice.call(arguments,1);if(AJS.I18n.keys&&Object.prototype.hasOwnProperty.call(AJS.I18n.keys,A)){return AJS.format.apply(null,[AJS.I18n.keys[A]].concat(B))}return A}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-core', location = 'js/blanket.js' */
(function(C){var A;AJS.dim=function(E,F){if(!A){A=C(document.body)}if(E===true){B()}var D=(!!AJS.dim.$dim)&&AJS.dim.$dim.attr("aria-hidden")==="false";if(!!AJS.dim.$dim){AJS.dim.$dim.remove();AJS.dim.$dim=null}AJS.dim.$dim=AJS("div").addClass("aui-blanket");AJS.dim.$dim.attr("tabindex","0");AJS.dim.$dim.appendTo(document.body);if(!D){AJS._internal.animation.recomputeStyle(AJS.dim.$dim);AJS.dim.cachedOverflow=A.css("overflow");A.css("overflow","hidden")}AJS.dim.$dim.attr("aria-hidden","false");if(F){AJS.dim.$dim.css({zIndex:F})}return AJS.dim.$dim};AJS.undim=function(){if(AJS.dim.$dim){AJS.dim.$dim.attr("aria-hidden","true");A&&A.css("overflow",AJS.dim.cachedOverflow)}};var B=AJS.deprecate.getMessageLogger("useShim",{extraInfo:"useShim has no alternative as it is now calculated by dim()."})}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:ajs-gadgets-base', location = 'js-vendor/jquery/plugins/jquery.aop.js' */
(function(){var _after=1;var _afterThrow=2;var _afterFinally=3;var _before=4;var _around=5;var _intro=6;var _regexEnabled=true;var _arguments="arguments";var _undef="undefined";var getType=(function(){var toString=Object.prototype.toString,toStrings={},nodeTypes={1:"element",3:"textnode",9:"document",11:"fragment"},types="Arguments Array Boolean Date Document Element Error Fragment Function NodeList Null Number Object RegExp String TextNode Undefined Window".split(" ");for(var i=types.length;i--;){var type=types[i],constructor=window[type];if(constructor){try{toStrings[toString.call(new constructor)]=type.toLowerCase()}catch(e){}}}return function(item){return item==null&&(item===undefined?_undef:"null")||item.nodeType&&nodeTypes[item.nodeType]||typeof item.length=="number"&&(item.callee&&_arguments||item.alert&&"window"||item.item&&"nodelist")||toStrings[toString.call(item)]}})();var isFunc=function(obj){return getType(obj)=="function"};var weaveOne=function(source,method,advice){var old=source[method];if(advice.type!=_intro&&!isFunc(old)){var oldObject=old;old=function(){var code=arguments.length>0?_arguments+"[0]":"";for(var i=1;i<arguments.length;i++){code+=","+_arguments+"["+i+"]"}return eval("oldObject("+code+");")}}var aspect;if(advice.type==_after||advice.type==_afterThrow||advice.type==_afterFinally){aspect=function(){var returnValue,exceptionThrown=null;try{returnValue=old.apply(this,arguments)}catch(e){exceptionThrown=e}if(advice.type==_after){if(exceptionThrown==null){returnValue=advice.value.apply(this,[returnValue,method])}else{throw exceptionThrown}}else{if(advice.type==_afterThrow&&exceptionThrown!=null){returnValue=advice.value.apply(this,[exceptionThrown,method])}else{if(advice.type==_afterFinally){returnValue=advice.value.apply(this,[returnValue,exceptionThrown,method])}}}return returnValue}}else{if(advice.type==_before){aspect=function(){advice.value.apply(this,[arguments,method]);return old.apply(this,arguments)}}else{if(advice.type==_intro){aspect=function(){return advice.value.apply(this,arguments)}}else{if(advice.type==_around){aspect=function(){var invocation={object:this,args:Array.prototype.slice.call(arguments)};return advice.value.apply(invocation.object,[{arguments:invocation.args,method:method,proceed:function(){return old.apply(invocation.object,invocation.args)}}])}}}}}aspect.unweave=function(){source[method]=old;pointcut=source=aspect=old=null};source[method]=aspect;return aspect};var search=function(source,pointcut,advice){var methods=[];for(var method in source){var item=null;try{item=source[method]}catch(e){}if(item!=null&&method.match(pointcut.method)&&isFunc(item)){methods[methods.length]={source:source,method:method,advice:advice}}}return methods};var weave=function(pointcut,advice){var source=typeof (pointcut.target.prototype)!=_undef?pointcut.target.prototype:pointcut.target;var advices=[];if(advice.type!=_intro&&typeof (source[pointcut.method])==_undef){var methods=search(pointcut.target,pointcut,advice);if(methods.length==0){methods=search(source,pointcut,advice)}for(var i in methods){advices[advices.length]=weaveOne(methods[i].source,methods[i].method,methods[i].advice)}}else{advices[0]=weaveOne(source,pointcut.method,advice)}return _regexEnabled?advices:advices[0]};jQuery.aop={after:function(pointcut,advice){return weave(pointcut,{type:_after,value:advice})},afterThrow:function(pointcut,advice){return weave(pointcut,{type:_afterThrow,value:advice})},afterFinally:function(pointcut,advice){return weave(pointcut,{type:_afterFinally,value:advice})},before:function(pointcut,advice){return weave(pointcut,{type:_before,value:advice})},around:function(pointcut,advice){return weave(pointcut,{type:_around,value:advice})},introduction:function(pointcut,advice){return weave(pointcut,{type:_intro,value:advice})},setup:function(settings){_regexEnabled=settings.regexMatch}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:ajs-gadgets-base', location = 'js/dropdown.js' */
AJS.dropDown=function(L,E){var U=null,I=[],Q=false,H=AJS.$(document),C={item:"li:has(a)",activeClass:"active",alignment:"right",displayHandler:function(W){return W.name},escapeHandler:function(){this.hide("escape");return false},hideHandler:function(){},moveHandler:function(X,W){},useDisabled:false};AJS.$.extend(C,E);C.alignment={left:"left",right:"right"}[C.alignment.toLowerCase()]||"left";if(L&&L.jquery){U=L}else{if(typeof L=="string"){U=AJS.$(L)}else{if(L&&L.constructor==Array){U=AJS("div").addClass("aui-dropdown").toggleClass("hidden",!!C.isHiddenByDefault);for(var P=0,K=L.length;P<K;P++){var J=AJS("ol");for(var O=0,S=L[P].length;O<S;O++){var M=AJS("li");var G=L[P][O];if(G.href){M.append(AJS("a").html("<span>"+C.displayHandler(G)+"</span>").attr({href:G.href}).addClass(G.className));AJS.$.data(AJS.$("a > span",M)[0],"properties",G)}else{M.html(G.html).addClass(G.className)}if(G.icon){M.prepend(AJS("img").attr("src",G.icon))}if(G.insideSpanIcon){M.children("a").prepend(AJS("span").attr("class","icon"))}AJS.$.data(M[0],"properties",G);J.append(M)}if(P==K-1){J.addClass("last")}U.append(J)}AJS.$("body").append(U)}else{throw new Error("AJS.dropDown function was called with illegal parameter. Should be AJS.$ object, AJS.$ selector or array.")}}}var F=function(){N(+1)};var T=function(){N(-1)};var N=function(Z){var Y=!Q,W=AJS.dropDown.current.$[0],X=AJS.dropDown.current.links,a=W.focused;Q=true;if(X.length===0){return }W.focused=(typeof a==="number")?a:-1;if(!AJS.dropDown.current){AJS.log("move - not current, aborting");return true}W.focused+=Z;if(W.focused<0){W.focused=X.length-1}else{if(W.focused>=X.length){W.focused=0}}C.moveHandler(AJS.$(X[W.focused]),Z<0?"up":"down");if(Y&&X.length){AJS.$(X[W.focused]).addClass(C.activeClass);Q=false}else{if(!X.length){Q=false}}};var V=function(Y){if(!AJS.dropDown.current){return true}var Z=Y.which,W=AJS.dropDown.current.$[0],X=AJS.dropDown.current.links;AJS.dropDown.current.cleanActive();switch(Z){case 40:F();break;case 38:T();break;case 27:return C.escapeHandler.call(AJS.dropDown.current,Y);case 13:if(W.focused>=0){if(!C.selectionHandler){if(AJS.$(X[W.focused]).attr("nodeName")!="a"){return AJS.$("a",X[W.focused]).trigger("focus")}else{return AJS.$(X[W.focused]).trigger("focus")}}else{return C.selectionHandler.call(AJS.dropDown.current,Y,AJS.$(X[W.focused]))}}return true;default:if(X.length){AJS.$(X[W.focused]).addClass(C.activeClass)}return true}Y.stopPropagation();Y.preventDefault();return false};var A=function(W){if(!((W&&W.which&&(W.which==3))||(W&&W.button&&(W.button==2))||false)){if(AJS.dropDown.current){AJS.dropDown.current.hide("click")}}};var D=function(W){return function(){if(!AJS.dropDown.current){return }AJS.dropDown.current.cleanFocus();this.originalClass=this.className;AJS.$(this).addClass(C.activeClass);AJS.dropDown.current.$[0].focused=W}};var R=function(W){if(W.button||W.metaKey||W.ctrlKey||W.shiftKey){return true}if(AJS.dropDown.current&&C.selectionHandler){C.selectionHandler.call(AJS.dropDown.current,W,AJS.$(this))}};var B=function(X){var W=false;if(X.data("events")){AJS.$.each(X.data("events"),function(Y,Z){AJS.$.each(Z,function(b,a){if(R===a){W=true;return false}})})}return W};U.each(function(){var W=this,Y=AJS.$(this),Z={};var X={reset:function(){Z=AJS.$.extend(Z,{$:Y,links:AJS.$(C.item||"li:has(a)",W),cleanActive:function(){if(W.focused+1&&Z.links.length){AJS.$(Z.links[W.focused]).removeClass(C.activeClass)}},cleanFocus:function(){Z.cleanActive();W.focused=-1},moveDown:F,moveUp:T,moveFocus:V,getFocusIndex:function(){return(typeof W.focused=="number")?W.focused:-1}});Z.links.each(function(a){var b=AJS.$(this);if(!B(b)){b.hover(D(a),Z.cleanFocus);b.click(R)}})},appear:function(a){if(a){Y.removeClass("hidden");Y.addClass("aui-dropdown-"+C.alignment)}else{Y.addClass("hidden")}},fade:function(a){if(a){Y.fadeIn("fast")}else{Y.fadeOut("fast")}},scroll:function(a){if(a){Y.slideDown("fast")}else{Y.slideUp("fast")}}};Z.reset=X.reset;Z.reset();Z.addControlProcess=function(b,a){AJS.$.aop.around({target:this,method:b},a)};Z.addCallback=function(b,a){return AJS.$.aop.after({target:this,method:b},a)};Z.show=function(a){if(C.useDisabled&&this.$.closest(".aui-dd-parent").hasClass("disabled")){return }this.alignment=C.alignment;A();AJS.dropDown.current=this;this.method=a||this.method||"appear";this.timer=setTimeout(function(){H.click(A)},0);H.keydown(V);if(C.firstSelected&&this.links[0]){D(0).call(this.links[0])}AJS.$(W.offsetParent).css({zIndex:2000});X[this.method](true);AJS.$(document).trigger("showLayer",["dropdown",AJS.dropDown.current])};Z.hide=function(a){this.method=this.method||"appear";AJS.$(Y.get(0).offsetParent).css({zIndex:""});this.cleanFocus();X[this.method](false);H.unbind("click",A).unbind("keydown",V);AJS.$(document).trigger("hideLayer",["dropdown",AJS.dropDown.current]);AJS.dropDown.current=null;return a};Z.addCallback("reset",function(){if(C.firstSelected&&this.links[0]){D(0).call(this.links[0])}});if(!AJS.dropDown.iframes){AJS.dropDown.iframes=[]}AJS.dropDown.createShims=function(){AJS.$("iframe").each(function(a){var b=this;if(!b.shim){b.shim=AJS.$("<div />").addClass("shim hidden").appendTo("body");AJS.dropDown.iframes.push(b)}});return arguments.callee}();Z.addCallback("show",function(){AJS.$(AJS.dropDown.iframes).each(function(){var a=AJS.$(this);if(a.is(":visible")){var b=a.offset();b.height=a.height();b.width=a.width();this.shim.css({left:b.left+"px",top:b.top+"px",height:b.height+"px",width:b.width+"px"}).removeClass("hidden")}})});Z.addCallback("hide",function(){AJS.$(AJS.dropDown.iframes).each(function(){this.shim.addClass("hidden")});C.hideHandler()});I.push(Z)});return I};AJS.dropDown.getAdditionalPropertyValue=function(D,A){var C=D[0];if(!C||(typeof C.tagName!="string")||C.tagName.toLowerCase()!="li"){AJS.log("AJS.dropDown.getAdditionalPropertyValue : item passed in should be an LI element wrapped by jQuery")}var B=AJS.$.data(C,"properties");return B?B[A]:null};AJS.dropDown.removeAllAdditionalProperties=function(A){};AJS.dropDown.Standard=function(H){var C=[],G,B={selector:".aui-dd-parent",dropDown:".aui-dropdown",trigger:".aui-dd-trigger"};AJS.$.extend(B,H);var F=function(I,L,K,J){AJS.$.extend(J,{trigger:I});L.addClass("dd-allocated");K.addClass("hidden");if(B.isHiddenByDefault==false){J.show()}J.addCallback("show",function(){L.addClass("active")});J.addCallback("hide",function(){L.removeClass("active")})};var A=function(K,I,L,J){if(J!=AJS.dropDown.current){L.css({top:I.outerHeight()});J.show();K.stopImmediatePropagation()}K.preventDefault()};if(B.useLiveEvents){var D=[];var E=[];AJS.$(B.trigger).live("click",function(L){var I=AJS.$(this);var N,M,J;var K;if((K=AJS.$.inArray(this,D))>=0){var O=E[K];N=O.parent;M=O.dropdown;J=O.ddcontrol}else{N=I.closest(B.selector);M=N.find(B.dropDown);if(M.length===0){return }J=AJS.dropDown(M,B)[0];if(!J){return }D.push(this);O={parent:N,dropdown:M,ddcontrol:J};F(I,N,M,J);E.push(O)}A(L,I,M,J)})}else{if(this instanceof AJS.$){G=this}else{G=AJS.$(B.selector)}G=G.not(".dd-allocated").filter(":has("+B.dropDown+")").filter(":has("+B.trigger+")");G.each(function(){var L=AJS.$(this),K=AJS.$(B.dropDown,this),I=AJS.$(B.trigger,this),J=AJS.dropDown(K,B)[0];AJS.$.extend(J,{trigger:I});F(I,L,K,J);I.click(function(M){A(M,I,K,J)});C.push(J)})}return C};AJS.dropDown.Ajax=function(C){var B,A={cache:true};AJS.$.extend(A,C||{});B=AJS.dropDown.Standard.call(this,A);AJS.$(B).each(function(){var D=this;AJS.$.extend(D,{getAjaxOptions:function(E){var F=function(G){if(A.formatResults){G=A.formatResults(G)}if(A.cache){D.cache.set(D.getAjaxOptions(),G)}D.refreshSuccess(G)};if(A.ajaxOptions){if(AJS.$.isFunction(A.ajaxOptions)){return AJS.$.extend(A.ajaxOptions.call(D),{success:F})}else{return AJS.$.extend(A.ajaxOptions,{success:F})}}return AJS.$.extend(E,{success:F})},refreshSuccess:function(E){this.$.html(E)},cache:function(){var E={};return{get:function(F){var G=F.data||"";return E[(F.url+G).replace(/[\?\&]/gi,"")]},set:function(F,G){var H=F.data||"";E[(F.url+H).replace(/[\?\&]/gi,"")]=G},reset:function(){E={}}}}(),show:function(E){return function(F){if(A.cache&&!!D.cache.get(D.getAjaxOptions())){D.refreshSuccess(D.cache.get(D.getAjaxOptions()));E.call(D)}else{AJS.$(AJS.$.ajax(D.getAjaxOptions())).throbber({target:D.$,end:function(){D.reset()}});E.call(D);if(D.iframeShim){D.iframeShim.hide()}}}}(D.show),resetCache:function(){D.cache.reset()}});D.addCallback("refreshSuccess",function(){D.reset()})});return B};AJS.$.fn.dropDown=function(B,A){B=(B||"Standard").replace(/^([a-z])/,function(C){return C.toUpperCase()});return AJS.dropDown[B].call(this,A)};AJS.$.fn.dropDown=AJS.deprecate.construct(AJS.$.fn.dropDown,"Dropdown constructor",{alternativeName:"Dropdown2"});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:ajs-evejs', location = 'js-vendor/eve/eve.js' */
/* THIS FILE HAS BEEN MODIFIED BY ATLASSIAN. See https://ecosystem.atlassian.net/browse/AUI-1712 for details. Modified lines are marked below, search "ATLASSIAN" */
(function(I){var E="0.3.4",J="hasOwnProperty",B=/[\.\/]/,A="*",G=function(){},F=function(M,L){return M-L},D,H,K={n:{}},C=function(L,a){var U=K,R=H,V=Array.prototype.slice.call(arguments,2),X=C.listeners(L),W=0,T=false,O,N=[],S={},P=[],M=D,Y=[];D=L;H=0;for(var Q=0,Z=X.length;Q<Z;Q++){if("zIndex" in X[Q]){N.push(X[Q].zIndex);if(X[Q].zIndex<0){S[X[Q].zIndex]=X[Q]}}}N.sort(F);while(N[W]<0){O=S[N[W++]];P.push(O.apply(a,V));if(H){H=R;return P}}for(Q=0;Q<Z;Q++){O=X[Q];if("zIndex" in O){if(O.zIndex==N[W]){P.push(O.apply(a,V));if(H){break}do{W++;O=S[N[W]];O&&P.push(O.apply(a,V));if(H){break}}while(O)}else{S[O.zIndex]=O}}else{P.push(O.apply(a,V));if(H){break}}}H=R;D=M;return P.length?P:null};C.listeners=function(L){var T=L.split(B),R=K,X,S,M,P,W,O,Q,U,V=[R],N=[];for(P=0,W=T.length;P<W;P++){U=[];for(O=0,Q=V.length;O<Q;O++){R=V[O].n;S=[R[T[P]],R[A]];M=2;while(M--){X=S[M];if(X){U.push(X);N=N.concat(X.f||[])}}}V=U}return N};C.on=function(L,O){var Q=L.split(B),P=K;for(var M=0,N=Q.length;M<N;M++){P=P.n;!P[Q[M]]&&(P[Q[M]]={n:{}});P=P[Q[M]]}P.f=P.f||[];for(M=0,N=P.f.length;M<N;M++){if(P.f[M]==O){return G}}P.f.push(O);return function(R){if(+R==+R){O.zIndex=+R}}};C.stop=function(){H=1};C.nt=function(L){if(L){return new RegExp("(?:\\.|\\/|^)"+L+"(?:\\.|\\/|$)").test(D)}return D};C.unbind=function(M,R){var T=M.split(B),S,V,N,P,W,O,Q,U=[K];for(P=0,W=T.length;P<W;P++){for(O=0;O<U.length;O+=N.length-2){N=[O,1];S=U[O].n;if(T[P]!=A){if(S[T[P]]){N.push(S[T[P]])}}else{for(V in S){if(S[J](V)){N.push(S[V])}}}U.splice.apply(U,N)}}for(P=0,W=U.length;P<W;P++){S=U[P];while(S.n){if(R){if(S.f){for(O=0,Q=S.f.length;O<Q;O++){if(S.f[O]==R){S.f.splice(O,1);break}}!S.f.length&&delete S.f}for(V in S.n){if(S.n[J](V)&&S.n[V].f){var L=S.n[V].f;for(O=0,Q=L.length;O<Q;O++){if(L[O]==R){L.splice(O,1);break}}!L.length&&delete S.n[V].f}}}else{delete S.f;for(V in S.n){if(S.n[J](V)&&S.n[V].f){delete S.n[V].f}}}S=S.n}}};C.once=function(L,M){var N=function(){var O=M.apply(this,arguments);C.unbind(L,N);return O};return C.on(L,N)};C.version=E;C.toString=function(){return"You are running Eve "+E};C.off=C.unbind;I.eve=C;if(typeof define==="function"){define("eve",function(){console&&console.warn&&console.warn("DEPRECATED - requiring 'eve' has been deprecated since AUI 5.7 and will be removed in AUI 6.0.");return C});define("aui/internal/eve",function(){return C})}})(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:ajs-raphael', location = 'js-vendor/raphael/raphael.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:ajs-raphael', location = 'js/raphael/raphael.shadow.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.soy.soy-template-plugin:soy-deps', location = 'js/soyutils.js' */
/*!
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var goog=goog||{};goog.inherits=function(b,a){function c(){}c.prototype=a.prototype;b.superClass_=a.prototype;b.prototype=new c();b.prototype.constructor=b};if(!goog.userAgent){goog.userAgent=(function(){var b="";if("undefined"!==typeof navigator&&navigator&&"string"==typeof navigator.userAgent){b=navigator.userAgent}var a=b.indexOf("Opera")==0;return{HAS_JSCRIPT:typeof"ScriptEngine" in this,IS_OPERA:a,IS_IE:!a&&b.indexOf("MSIE")!=-1,IS_WEBKIT:!a&&b.indexOf("WebKit")!=-1}})()}if(!goog.asserts){goog.asserts={fail:function(a){}}}if(!goog.dom){goog.dom={};goog.dom.DomHelper=function(a){this.document_=a||document};goog.dom.DomHelper.prototype.getDocument=function(){return this.document_};goog.dom.DomHelper.prototype.createElement=function(a){return this.document_.createElement(a)};goog.dom.DomHelper.prototype.createDocumentFragment=function(){return this.document_.createDocumentFragment()}}if(!goog.format){goog.format={insertWordBreaks:function(j,a){j=String(j);var f=[];var h=0;var b=false;var k=false;var g=0;var d=0;for(var e=0,c=j.length;e<c;++e){var l=j.charCodeAt(e);if(g>=a&&l!=32){f[h++]=j.substring(d,e);d=e;f[h++]=goog.format.WORD_BREAK;g=0}if(b){if(l==62){b=false}}else{if(k){switch(l){case 59:k=false;++g;break;case 60:k=false;b=true;break;case 32:k=false;g=0;break}}else{switch(l){case 60:b=true;break;case 38:k=true;break;case 32:g=0;break;default:++g;break}}}}f[h++]=j.substring(d);return f.join("")},WORD_BREAK:goog.userAgent.IS_WEBKIT?"<wbr></wbr>":goog.userAgent.IS_OPERA?"&shy;":"<wbr>"}}if(!goog.i18n){goog.i18n={bidi:{detectRtlDirectionality:function(b,a){b=soyshim.$$bidiStripHtmlIfNecessary_(b,a);return soyshim.$$bidiRtlWordRatio_(b)>soyshim.$$bidiRtlDetectionThreshold_}}}}goog.i18n.bidi.Dir={RTL:-1,UNKNOWN:0,LTR:1};goog.i18n.bidi.toDir=function(a){if(typeof a=="number"){return a>0?goog.i18n.bidi.Dir.LTR:a<0?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.UNKNOWN}else{return a?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR}};goog.i18n.BidiFormatter=function(a){this.dir_=goog.i18n.bidi.toDir(a)};goog.i18n.BidiFormatter.prototype.dirAttr=function(c,a){var b=soy.$$bidiTextDir(c,a);return b&&b!=this.dir_?b<0?"dir=rtl":"dir=ltr":""};goog.i18n.BidiFormatter.prototype.endEdge=function(){return this.dir_<0?"left":"right"};goog.i18n.BidiFormatter.prototype.mark=function(){return((this.dir_>0)?"\u200E":(this.dir_<0)?"\u200F":"")};goog.i18n.BidiFormatter.prototype.markAfter=function(c,a){var b=soy.$$bidiTextDir(c,a);return soyshim.$$bidiMarkAfterKnownDir_(this.dir_,b,c,a)};goog.i18n.BidiFormatter.prototype.spanWrap=function(d,c){d=String(d);var b=soy.$$bidiTextDir(d,true);var a=soyshim.$$bidiMarkAfterKnownDir_(this.dir_,b,d,true);if(b>0&&this.dir_<=0){d="<span dir=ltr>"+d+"</span>"}else{if(b<0&&this.dir_>=0){d="<span dir=rtl>"+d+"</span>"}}return d+a};goog.i18n.BidiFormatter.prototype.startEdge=function(){return this.dir_<0?"right":"left"};goog.i18n.BidiFormatter.prototype.unicodeWrap=function(d,c){d=String(d);var b=soy.$$bidiTextDir(d,true);var a=soyshim.$$bidiMarkAfterKnownDir_(this.dir_,b,d,true);if(b>0&&this.dir_<=0){d="\u202A"+d+"\u202C"}else{if(b<0&&this.dir_>=0){d="\u202B"+d+"\u202C"}}return d+a};goog.string={newLineToBr:function(b,a){b=String(b);if(!goog.string.NEWLINE_TO_BR_RE_.test(b)){return b}return b.replace(/(\r\n|\r|\n)/g,a?"<br />":"<br>")},urlEncode:encodeURIComponent,NEWLINE_TO_BR_RE_:/[\r\n]/};goog.string.StringBuffer=function(a,b){this.buffer_=goog.userAgent.HAS_JSCRIPT?[]:"";if(a!=null){this.append.apply(this,arguments)}};goog.string.StringBuffer.prototype.bufferLength_=0;goog.string.StringBuffer.prototype.append=function(c,b,e){if(goog.userAgent.HAS_JSCRIPT){if(b==null){this.buffer_[this.bufferLength_++]=c}else{var a=this.buffer_;a.push.apply(a,arguments);this.bufferLength_=this.buffer_.length}}else{this.buffer_+=c;if(b!=null){for(var d=1;d<arguments.length;d++){this.buffer_+=arguments[d]}}}return this};goog.string.StringBuffer.prototype.clear=function(){if(goog.userAgent.HAS_JSCRIPT){this.buffer_.length=0;this.bufferLength_=0}else{this.buffer_=""}};goog.string.StringBuffer.prototype.toString=function(){if(goog.userAgent.HAS_JSCRIPT){var a=this.buffer_.join("");this.clear();if(a){this.append(a)}return a}else{return(this.buffer_)}};if(!goog.soy){goog.soy={renderAsElement:function(c,a,b,d){return(soyshim.$$renderWithWrapper_(c,a,d,true,b))},renderAsFragment:function(c,a,b,d){return soyshim.$$renderWithWrapper_(c,a,d,false,b)},renderElement:function(c,d,a,b){c.innerHTML=d(a,null,b)}}}var soy={esc:{}};var soydata={};var soyshim={$$DEFAULT_TEMPLATE_DATA_:{}};soyshim.$$renderWithWrapper_=function(h,f,b,c,i){var d=b||document;var a=d.createElement("div");a.innerHTML=h(f||soyshim.$$DEFAULT_TEMPLATE_DATA_,undefined,i);if(a.childNodes.length==1){var g=a.firstChild;if(!c||g.nodeType==1){return(g)}}if(c){return a}var e=d.createDocumentFragment();while(a.firstChild){e.appendChild(a.firstChild)}return e};soyshim.$$bidiMarkAfterKnownDir_=function(c,b,d,a){return(c>0&&(b<0||soyshim.$$bidiIsRtlExitText_(d,a))?"\u200E":c<0&&(b>0||soyshim.$$bidiIsLtrExitText_(d,a))?"\u200F":"")};soyshim.$$bidiStripHtmlIfNecessary_=function(b,a){return a?b.replace(soyshim.$$BIDI_HTML_SKIP_RE_," "):b};soyshim.$$BIDI_HTML_SKIP_RE_=/<[^>]*>|&[^;]+;/g;soyshim.$$bidiLtrChars_="A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";soyshim.$$bidiNeutralChars_="\u0000-\u0020!-@[-`{-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u2BFF";soyshim.$$bidiRtlChars_="\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";soyshim.$$bidiRtlDirCheckRe_=new RegExp("^[^"+soyshim.$$bidiLtrChars_+"]*["+soyshim.$$bidiRtlChars_+"]");soyshim.$$bidiNeutralDirCheckRe_=new RegExp("^["+soyshim.$$bidiNeutralChars_+"]*$|^http://");soyshim.$$bidiIsRtlText_=function(a){return soyshim.$$bidiRtlDirCheckRe_.test(a)};soyshim.$$bidiIsNeutralText_=function(a){return soyshim.$$bidiNeutralDirCheckRe_.test(a)};soyshim.$$bidiRtlDetectionThreshold_=0.4;soyshim.$$bidiRtlWordRatio_=function(e){var b=0;var a=0;var d=e.split(" ");for(var c=0;c<d.length;c++){if(soyshim.$$bidiIsRtlText_(d[c])){b++;a++}else{if(!soyshim.$$bidiIsNeutralText_(d[c])){a++}}}return a==0?0:b/a};soyshim.$$bidiLtrExitDirCheckRe_=new RegExp("["+soyshim.$$bidiLtrChars_+"][^"+soyshim.$$bidiRtlChars_+"]*$");soyshim.$$bidiRtlExitDirCheckRe_=new RegExp("["+soyshim.$$bidiRtlChars_+"][^"+soyshim.$$bidiLtrChars_+"]*$");soyshim.$$bidiIsLtrExitText_=function(b,a){b=soyshim.$$bidiStripHtmlIfNecessary_(b,a);return soyshim.$$bidiLtrExitDirCheckRe_.test(b)};soyshim.$$bidiIsRtlExitText_=function(b,a){b=soyshim.$$bidiStripHtmlIfNecessary_(b,a);return soyshim.$$bidiRtlExitDirCheckRe_.test(b)};soy.StringBuilder=goog.string.StringBuffer;soydata.SanitizedContentKind={HTML:0,JS_STR_CHARS:1,URI:2,HTML_ATTRIBUTE:3};soydata.SanitizedContent=function(a){this.content=a};soydata.SanitizedContent.prototype.contentKind;soydata.SanitizedContent.prototype.toString=function(){return this.content};soydata.SanitizedHtml=function(a){soydata.SanitizedContent.call(this,a)};goog.inherits(soydata.SanitizedHtml,soydata.SanitizedContent);soydata.SanitizedHtml.prototype.contentKind=soydata.SanitizedContentKind.HTML;soydata.SanitizedJsStrChars=function(a){soydata.SanitizedContent.call(this,a)};goog.inherits(soydata.SanitizedJsStrChars,soydata.SanitizedContent);soydata.SanitizedJsStrChars.prototype.contentKind=soydata.SanitizedContentKind.JS_STR_CHARS;soydata.SanitizedUri=function(a){soydata.SanitizedContent.call(this,a)};goog.inherits(soydata.SanitizedUri,soydata.SanitizedContent);soydata.SanitizedUri.prototype.contentKind=soydata.SanitizedContentKind.URI;soydata.SanitizedHtmlAttribute=function(a){soydata.SanitizedContent.call(this,a)};goog.inherits(soydata.SanitizedHtmlAttribute,soydata.SanitizedContent);soydata.SanitizedHtmlAttribute.prototype.contentKind=soydata.SanitizedContentKind.HTML_ATTRIBUTE;soy.renderElement=goog.soy.renderElement;soy.renderAsFragment=function(d,b,a,c){return goog.soy.renderAsFragment(d,b,c,new goog.dom.DomHelper(a))};soy.renderAsElement=function(d,b,a,c){return goog.soy.renderAsElement(d,b,c,new goog.dom.DomHelper(a))};soy.$$augmentData=function(d,a){function e(){}e.prototype=d;var c=new e();for(var b in a){c[b]=a[b]}return c};soy.$$getMapKeys=function(c){var b=[];for(var a in c){b.push(a)}return b};soy.$$getDelegateId=function(a){return a};soy.$$DELEGATE_REGISTRY_PRIORITIES_={};soy.$$DELEGATE_REGISTRY_FUNCTIONS_={};soy.$$registerDelegateFn=function(e,c,b){var d="key_"+e;var a=soy.$$DELEGATE_REGISTRY_PRIORITIES_[d];if(a===undefined||c>a){soy.$$DELEGATE_REGISTRY_PRIORITIES_[d]=c;soy.$$DELEGATE_REGISTRY_FUNCTIONS_[d]=b}else{if(c==a){throw Error('Encountered two active delegates with same priority (id/name "'+e+'").')}else{}}};soy.$$getDelegateFn=function(b){var a=soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_"+b];return a?a:soy.$$EMPTY_TEMPLATE_FN_};soy.$$EMPTY_TEMPLATE_FN_=function(a,c,b){return""};soy.$$escapeHtml=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML){return a.content}return soy.esc.$$escapeHtmlHelper(a)};soy.$$escapeHtmlRcdata=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML){return soy.esc.$$normalizeHtmlHelper(a.content)}return soy.esc.$$escapeHtmlHelper(a)};soy.$$stripHtmlTags=function(a){return String(a).replace(soy.esc.$$HTML_TAG_REGEX_,"")};soy.$$escapeHtmlAttribute=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML){return soy.esc.$$normalizeHtmlHelper(soy.$$stripHtmlTags(a.content))}return soy.esc.$$escapeHtmlHelper(a)};soy.$$escapeHtmlAttributeNospace=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML){return soy.esc.$$normalizeHtmlNospaceHelper(soy.$$stripHtmlTags(a.content))}return soy.esc.$$escapeHtmlNospaceHelper(a)};soy.$$filterHtmlAttribute=function(a){if(typeof a==="object"&&a&&a.contentKind===soydata.SanitizedContentKind.HTML_ATTRIBUTE){return a.content.replace(/=([^"']*)$/,'="$1"')}return soy.esc.$$filterHtmlAttributeHelper(a)};soy.$$filterHtmlElementName=function(a){return soy.esc.$$filterHtmlElementNameHelper(a)};soy.$$escapeJs=function(a){return soy.$$escapeJsString(a)};soy.$$escapeJsString=function(a){if(typeof a==="object"&&a.contentKind===soydata.SanitizedContentKind.JS_STR_CHARS){return a.content}return soy.esc.$$escapeJsStringHelper(a)};soy.$$escapeJsValue=function(a){if(a==null){return" null "}switch(typeof a){case"boolean":case"number":return" "+a+" ";default:return"'"+soy.esc.$$escapeJsStringHelper(String(a))+"'"}};soy.$$escapeJsRegex=function(a){return soy.esc.$$escapeJsRegexHelper(a)};soy.$$problematicUriMarks_=/['()]/g;soy.$$pctEncode_=function(a){return"%"+a.charCodeAt(0).toString(16)};soy.$$escapeUri=function(a){if(typeof a==="object"&&a.contentKind===soydata.SanitizedContentKind.URI){return soy.$$normalizeUri(a)}var b=soy.esc.$$escapeUriHelper(a);soy.$$problematicUriMarks_.lastIndex=0;if(soy.$$problematicUriMarks_.test(b)){return b.replace(soy.$$problematicUriMarks_,soy.$$pctEncode_)}return b};soy.$$normalizeUri=function(a){return soy.esc.$$normalizeUriHelper(a)};soy.$$filterNormalizeUri=function(a){return soy.esc.$$filterNormalizeUriHelper(a)};soy.$$escapeCssString=function(a){return soy.esc.$$escapeCssStringHelper(a)};soy.$$filterCssValue=function(a){if(a==null){return""}return soy.esc.$$filterCssValueHelper(a)};soy.$$changeNewlineToBr=function(a){return goog.string.newLineToBr(String(a),false)};soy.$$insertWordBreaks=function(b,a){return goog.format.insertWordBreaks(String(b),a)};soy.$$truncate=function(c,a,b){c=String(c);if(c.length<=a){return c}if(b){if(a>3){a-=3}else{b=false}}if(soy.$$isHighSurrogate_(c.charAt(a-1))&&soy.$$isLowSurrogate_(c.charAt(a))){a-=1}c=c.substring(0,a);if(b){c+="..."}return c};soy.$$isHighSurrogate_=function(a){return 55296<=a&&a<=56319};soy.$$isLowSurrogate_=function(a){return 56320<=a&&a<=57343};soy.$$bidiFormatterCache_={};soy.$$getBidiFormatterInstance_=function(a){return soy.$$bidiFormatterCache_[a]||(soy.$$bidiFormatterCache_[a]=new goog.i18n.BidiFormatter(a))};soy.$$bidiTextDir=function(b,a){if(!b){return 0}return goog.i18n.bidi.detectRtlDirectionality(b,a)?-1:1};soy.$$bidiDirAttr=function(b,c,a){return new soydata.SanitizedHtmlAttribute(soy.$$getBidiFormatterInstance_(b).dirAttr(c,a))};soy.$$bidiMarkAfter=function(b,d,a){var c=soy.$$getBidiFormatterInstance_(b);return c.markAfter(d,a)};soy.$$bidiSpanWrap=function(a,c){var b=soy.$$getBidiFormatterInstance_(a);return b.spanWrap(c+"",true)};soy.$$bidiUnicodeWrap=function(a,c){var b=soy.$$getBidiFormatterInstance_(a);return b.unicodeWrap(c+"",true)};soy.esc.$$escapeUriHelper=function(a){return encodeURIComponent(String(a))};soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_={"\x00":"\x26#0;","\x22":"\x26quot;","\x26":"\x26amp;","\x27":"\x26#39;","\x3c":"\x26lt;","\x3e":"\x26gt;","\x09":"\x26#9;","\x0a":"\x26#10;","\x0b":"\x26#11;","\x0c":"\x26#12;","\x0d":"\x26#13;"," ":"\x26#32;","-":"\x26#45;","/":"\x26#47;","\x3d":"\x26#61;","`":"\x26#96;","\x85":"\x26#133;","\xa0":"\x26#160;","\u2028":"\x26#8232;","\u2029":"\x26#8233;"};soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_[a]};soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_={"\x00":"\\x00","\x08":"\\x08","\x09":"\\t","\x0a":"\\n","\x0b":"\\x0b","\x0c":"\\f","\x0d":"\\r","\x22":"\\x22","\x26":"\\x26","\x27":"\\x27","/":"\\/","\x3c":"\\x3c","\x3d":"\\x3d","\x3e":"\\x3e","\\":"\\\\","\x85":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029","$":"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"};soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_[a]};soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_={"\x00":"\\0 ","\x08":"\\8 ","\x09":"\\9 ","\x0a":"\\a ","\x0b":"\\b ","\x0c":"\\c ","\x0d":"\\d ","\x22":"\\22 ","\x26":"\\26 ","\x27":"\\27 ","(":"\\28 ",")":"\\29 ","*":"\\2a ","/":"\\2f ",":":"\\3a ",";":"\\3b ","\x3c":"\\3c ","\x3d":"\\3d ","\x3e":"\\3e ","@":"\\40 ","\\":"\\5c ","{":"\\7b ","}":"\\7d ","\x85":"\\85 ","\xa0":"\\a0 ","\u2028":"\\2028 ","\u2029":"\\2029 "};soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_[a]};soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_={"\x00":"%00","\x01":"%01","\x02":"%02","\x03":"%03","\x04":"%04","\x05":"%05","\x06":"%06","\x07":"%07","\x08":"%08","\x09":"%09","\x0a":"%0A","\x0b":"%0B","\x0c":"%0C","\x0d":"%0D","\x0e":"%0E","\x0f":"%0F","\x10":"%10","\x11":"%11","\x12":"%12","\x13":"%13","\x14":"%14","\x15":"%15","\x16":"%16","\x17":"%17","\x18":"%18","\x19":"%19","\x1a":"%1A","\x1b":"%1B","\x1c":"%1C","\x1d":"%1D","\x1e":"%1E","\x1f":"%1F"," ":"%20","\x22":"%22","\x27":"%27","(":"%28",")":"%29","\x3c":"%3C","\x3e":"%3E","\\":"%5C","{":"%7B","}":"%7D","\x7f":"%7F","\x85":"%C2%85","\xa0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"};soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_[a]};soy.esc.$$MATCHER_FOR_ESCAPE_HTML_=/[\x00\x22\x26\x27\x3c\x3e]/g;soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_=/[\x00\x22\x27\x3c\x3e]/g;soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_=/[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_=/[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_=/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTE_=/^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i;soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_=/^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i;soy.esc.$$escapeHtmlHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$normalizeHtmlHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$escapeHtmlNospaceHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$normalizeHtmlNospaceHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$escapeJsStringHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_,soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)};soy.esc.$$escapeJsRegexHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_,soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)};soy.esc.$$escapeCssStringHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_,soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_)};soy.esc.$$filterCssValueHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_.test(b)){return"zSoyz"}return b};soy.esc.$$normalizeUriHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_,soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)};soy.esc.$$filterNormalizeUriHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_.test(b)){return"zSoyz"}return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_,soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)};soy.esc.$$filterHtmlAttributeHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTE_.test(b)){return"zSoyz"}return b};soy.esc.$$filterHtmlElementNameHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_.test(b)){return"zSoyz"}return b};soy.esc.$$HTML_TAG_REGEX_=/<(?:!|\/?[a-zA-Z])(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.soy.soy-template-plugin:soy-deps', location = 'js/atlassian-deps.js' */
window.atl_soy=window.atl_soy||{};atl_soy.concat=function(d,c){if(d.concat){return d.concat(c)}var e={};for(var f in d){if(d.hasOwnProperty(f)){e[f]=d[f]}}for(var f in c){if(c.hasOwnProperty(f)){e[f]=c[f]}}return e};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-aui-widget', location = 'js/aui/internal/widget.js' */
(function(A){AJS._internal=AJS._internal||{};AJS._internal.widget=A(AJS.$)})(function(B){return function A(D,C){var E="_aui-widget-"+D;return function(K,I){var F;var G;if(B.isPlainObject(K)){G=K}else{F=K;G=I}var H=F&&B(F);var J;if(!H||!H.data(E)){J=new C(H,G||{});H=J.$el;H.data(E,J)}else{J=H.data(E)}return J}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-navigation', location = 'js/aui-navigation.js' */
(function(A){AJS.navigation=A(AJS.$,window.skate,AJS._internal.widget)})(function(E,A,D){function C(F){this.$el=E(F).closest(".aui-nav");if(this.$el.length>1){return this.$el.map(function(H,I){return new C(I)})[0]}if(this.$el.data("aui-navigation")){return this.$el.data("aui-navigation")}this.$el.data("aui-navigation",this);this.$treeParent=this.$el.parent("li[aria-expanded]");this.$subtreeToggleIcon=this.$treeParent.children(".aui-nav-subtree-toggle").children("span.aui-icon");this.hideMoreItems();this.$el.children("li:has(.aui-nav-selected)").addClass("aui-nav-child-selected");var G=this.$el.children(".aui-nav-selected");G.parents(".aui-nav > [aria-expanded=false]").add(G.filter("[aria-expanded=false]")).each(function(){var H=B(E(this).children(".aui-nav"));H.expand()});this.$el.find("> li[aria-expanded] > .aui-nav-subtree-toggle").on("click",function(){var H=B(E(this).siblings(".aui-nav"));H.toggle()});return this}C.prototype.isNested=function(){return this.$treeParent.length===1};C.prototype.isCollapsed=function(){return this.$treeParent.attr("aria-expanded")==="false"};C.prototype.expand=function(){this.$treeParent.attr("aria-expanded","true");this.$subtreeToggleIcon.removeClass("aui-iconfont-collapsed").addClass("aui-iconfont-expanded");this.hideMoreItems();return this};C.prototype.collapse=function(){this.$treeParent.attr("aria-expanded","false");this.$subtreeToggleIcon.removeClass("aui-iconfont-expanded").addClass("aui-iconfont-collapsed");return this};C.prototype.toggle=function(){if(this.isCollapsed()){this.expand()}else{this.collapse()}return this};C.prototype.hideMoreItems=function(){if(this.$el.is(".aui-nav:not([aria-expanded=false]) [data-more]")){var I=this.$el.attr("data-more")||"More\u2026";var H=Math.abs(parseInt(this.$el.attr("data-more-limit")))||5;var J=this.$el.children("li");var G=J.length<=H+1;var K=J.filter(".aui-nav-selected").length;var F=J.filter(".aui-nav-more").length;if(G||K||F){return this}E("<li>",{"class":"aui-nav-more","aria-hidden":"true"}).append(E("<a>",{href:"#","class":"aui-nav-item",text:I,click:function(L){L.preventDefault();E(this).parent().remove()}})).insertAfter(J.eq(H-1))}return this};var B=D("navigation",C);A("aui-nav",{insert:function(F){B(F)}});return B});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-navigation', location = 'soy/navigation.soy' */
// This file was automatically generated from navigation.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.navigation == 'undefined') { aui.navigation = {}; }


aui.navigation.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="', (opt_data.isSelected || opt_data.key && opt_data.selectedItemKey == opt_data.key) ? 'aui-nav-selected' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.isCollapsible && opt_data.children && opt_data.children.length > 0) ? 'aria-expanded="' + ((opt_data.isCollapsed) ? 'false' : 'true') + '"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><a class="aui-nav-item" href="', soy.$$escapeHtml(opt_data.href), '">');
  if (opt_data.iconClass && ! opt_data.isChild) {
    aui.icons.icon({icon: opt_data.iconClass, size: 'small', useIconFont: true}, output);
  }
  output.append((opt_data.count == 0 || opt_data.count) ? '<span class="aui-badge">' + soy.$$escapeHtml(opt_data.count) + '</span>' : '', '<span class="aui-nav-item-label">', soy.$$escapeHtml(opt_data.label), '</span></a>');
  if (opt_data.children && opt_data.children.length > 0) {
    if (opt_data.isCollapsible) {
      output.append('<a href="#" class="aui-nav-subtree-toggle">');
      aui.icons.icon({icon: opt_data.isCollapsed ? 'collapsed' : 'expanded', size: 'small', useIconFont: true}, output);
      output.append('</a>');
    }
    aui.navigation.nav({items: opt_data.children, selectedItemKey: opt_data.selectedItemKey, isChild: true}, output);
  }
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


aui.navigation.nav = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="aui-nav');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  var itemList57 = opt_data.items;
  var itemListLen57 = itemList57.length;
  for (var itemIndex57 = 0; itemIndex57 < itemListLen57; itemIndex57++) {
    var itemData57 = itemList57[itemIndex57];
    aui.navigation.item(soy.$$augmentData(itemData57, {isChild: opt_data.isChild, selectedItemKey: opt_data.selectedItemKey}), output);
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-header', location = 'js/aui-header-responsive.js' */
(function(A){AJS.responsiveheader={};AJS.responsiveheader.setup=function(){var C=A(".aui-header");if(!C.length){return }C.each(function(D,E){B(A(E),D)});function B(J,O){function F(Y){var X;R();if(E>H){M(Y)}else{L.show();X=E-P;for(var W=0;X>=0;W++){X-=U[W].itemWidth}W=W-1;K(W,Y);G(W,I,Y);return W}}function R(){var W=T.length!==0?T.offset().left:J.width();var X=Q.offset().left+Q.outerWidth(true)+S;E=W-X}function D(X){var W=A("<li>"+aui.dropdown2.trigger({menu:{id:"aui-responsive-header-dropdown-content-"+X},text:"More",extraAttributes:{href:"#"},id:"aui-responsive-header-dropdown-trigger-"+X})+"</li>");W.append(aui.dropdown2.contents({id:"aui-responsive-header-dropdown-content-"+X,extraClasses:"aui-style-default",content:aui.dropdown2.section({content:"<ul id='aui-responsive-header-dropdown-list-"+X+"'></ul>"})}));if(S===0){W.appendTo(N(".aui-nav"))}else{W.insertBefore(N(".aui-nav > li > .aui-button").first().parent())}L=W;skate.init(L);P=L.outerWidth(true)}function G(W,b,d){if(W<0||b<0||W===b){return }var Z=A("#aui-responsive-header-dropdown-trigger-"+d);var c=Z.parent();var a;var X;if(Z.hasClass("active")){Z.trigger("aui-button-invoke")}var Y=N(".aui-nav > li > a:not(.aui-button):not(#aui-responsive-header-dropdown-trigger-"+d+")").length;while(W>b){a=U[b];if(a&&a.itemElement){X=a.itemElement;if(Y===0){X.prependTo(N(".aui-nav"))}else{X.insertBefore(c)}X.children("a").removeClass("aui-dropdown2-sub-trigger active");b=b+1;Y=Y+1}}}function K(W,a){if(W<0){return }var Y=A("#aui-responsive-header-dropdown-list-"+a);for(var X=W;X<U.length;X++){U[X].itemElement.appendTo(Y);var Z=U[X].itemElement.children("a");if(Z.hasClass("aui-dropdown2-trigger")){Z.addClass("aui-dropdown2-sub-trigger")}}}function M(W){L.hide();G(U.length,I,W)}var T=J.find(".aui-header-secondary .aui-nav").first();A(".aui-header").attr("data-aui-responsive","true");var U=[];var E=0;var H=0;var L;var I;var Q=J.find("#logo");var P=0;var N=(function(){var W=J.find(".aui-header-primary").first();return function(X){return W.find(X)}})();var S=0;N(".aui-button").parent().each(function(W,X){S+=A(X).outerWidth(true)});N(".aui-nav > li > a:not(.aui-button)").each(function(X,Y){var W=A(Y).parent();var Z=W.outerWidth(true);U.push({itemElement:W,itemWidth:Z});H+=Z});I=U.length;A(window).resize(function(){I=F(O)});D(O);var V=Q.find("img");if(V.length!==0){V.attr("data-aui-responsive-header-index",O);V.load(function(W){I=F(O)})}I=F(O);N(".aui-nav").css("width","auto")}}})(AJS.$);AJS.$(AJS.responsiveheader.setup);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-dropdown2', location = 'js/dropdown2.js' */
(function(H){var F=H(document);var C=null;function J(M){M.preventDefault()}function E(M){return M[0].getAttribute("aria-hidden")!=="true"&&M.is(":visible")}var B=(function(){var O=false;function M(Q){if(!O&&Q.which===1){O=true;F.bind("mouseup mouseleave",N);H(this).trigger("aui-button-invoke")}}function N(){F.unbind("mouseup mouseleave",N);setTimeout(function(){O=false},0)}function P(){if(!O){H(this).trigger("aui-button-invoke")}}if(typeof document.addEventListener==="undefined"){return{click:P,"click selectstart":J,mousedown:function(S){var T=this;var R=document.activeElement;function Q(U){switch(U.toElement){case null:case T:case document.body:case document.documentElement:U.returnValue=false}}M.call(this,S);if(R!==null){R.attachEvent("onbeforedeactivate",Q);setTimeout(function(){R.detachEvent("onbeforedeactivate",Q)},0)}}}}return{click:P,"click mousedown":J,mousedown:M}})();var A={"aui-button-invoke":function(i,S){S=H.extend({selectFirst:true},S);var P=K(this);var O=H(this).addClass("active aui-dropdown2-active");var s=O.hasClass("aui-dropdown2-sub-trigger");var n=P.parent()[0];var q=P.next()[0];var e=H(this).attr("data-dropdown2-hide-location");if(e){var a=document.getElementById(e);if(a){n=H(a);q=undefined}else{throw new Error("The specified data-dropdown2-hide-location id doesn't exist")}}var U=S.$menu||O.closest(".aui-dropdown2-trigger-group");if(s){var f=O.closest(".aui-dropdown2");P.addClass(f.attr("class")).addClass("aui-dropdown2-sub-menu")}var T={click:function(u){var t=H(this);if(!Q(t)){return }if(!t.hasClass("interactive")&&!t.hasClass("aui-dropdown2-interactive")){m()}if(W(t)){g(t,{selectFirst:false});J(u)}},mousemove:function(){var u=H(this);var t=V(u);if(t){g(u,{selectFirst:false})}}};var o={"click focusin mousedown":function(t){var u=t.target;if(document===u&&t.type==="focusin"){return }if(!D(u,P[0])&&!D(u,O[0])){m()}},keydown:function(v){var u;if(v.shiftKey&&v.keyCode==9){k(-1)}else{switch(v.keyCode){case 13:u=Z();if(W(u)){g(u)}else{L(u[0])}break;case 27:b();break;case 37:u=Z();if(W(u)){var t=K(u);if(E(t)){P.trigger("aui-dropdown2-step-out");return }}if(s){b()}else{r(-1)}break;case 38:k(-1);break;case 39:u=Z();if(W(u)){g(u)}else{r(1)}break;case 40:k(1);break;case 9:k(1);break;default:return }}J(v)}};function d(t,u){t.each(function(){var v=H(this);v.attr("role",u);if(v.hasClass("checked")||v.hasClass("aui-dropdown2-checked")){v.attr("aria-checked","true");if(u=="radio"){v.closest("ul").attr("role","radiogroup")}}else{v.attr("aria-checked","false")}})}O.attr("aria-controls",O.attr("aria-owns"));P.find(".disabled,.aui-dropdown2-disabled").attr("aria-disabled","true");P.find("li.hidden > a,li.aui-dropdown2-hidden > a").addClass("disabled aui-dropdown2-disabled").attr("aria-disabled","true");d(P.find(".aui-dropdown2-checkbox"),"checkbox");d(P.find(".aui-dropdown2-radio"),"radio");function R(){var AC=O.offset();var AG=O.outerWidth();P.css({left:0,top:0});var AF=P.outerWidth();var AB=H("body").outerWidth(true);var u=Math.max(parseInt(P.css("min-width"),10),AG);var v=O.data("container")||false;var AE="left";var w;if(!s){P.css("min-width",u+"px")}var x=AC.left,AD=AC.top+O.outerHeight();if(s){var z=3;x=AC.left+f.outerWidth()-z;AD=AC.top}if(AB<x+AF&&AF<=x+AG){x=AC.left+AG-AF;if(s){x=AC.left-AF}AE="right"}if(v){var t=O.closest(v),AA=O.offset().left+O.outerWidth(),y=AA+AF;if(u>=AF){AF=u}if(y>AA){x=AA-AF;AE="right"}}P.attr({"data-dropdown2-alignment":AE,"aria-hidden":"false"}).css({display:"block",left:x+"px",top:AD+"px"});P.appendTo(document.body)}R();if(O.hasClass("toolbar-trigger")){P.addClass("aui-dropdown2-in-toolbar")}if(O.parent().hasClass("aui-buttons")){P.addClass("aui-dropdown2-in-buttons")}if(O.parents().hasClass("aui-header")){P.addClass("aui-dropdown2-in-header")}P.trigger("aui-dropdown2-show",S);if(S.selectFirst){N()}j("on");function b(){M();j("off");setTimeout(function(){P.css("display","none").css("min-width","").insertAfter(O).attr("aria-hidden","true");if(!s){O.removeClass("active aui-dropdown2-active")}Z().removeClass("active aui-dropdown2-active");P.removeClass("aui-dropdown2-in-toolbar");P.removeClass("aui-dropdown2-in-buttons");if(q){P.insertBefore(q)}else{P.appendTo(n)}P.trigger("aui-dropdown2-hide")},0)}function m(){b();if(s){f.trigger("aui-dropdown2-hide-all")}}function h(t){if(s&&t.target===f[0]){b()}}function Q(t){return !t.is(".disabled, .aui-dropdown2-disabled, [aria-disabled=true]")}function W(t){return t.hasClass("aui-dropdown2-sub-trigger")}function g(t,u){if(!W(t)){return }u=H.extend({},u,{$menu:U});var v=K(t);if(E(v)){v.trigger("aui-dropdown2-select-first")}else{t.trigger("aui-button-invoke",u)}}function Z(){return P.find("a.active,a.aui-dropdown2-active")}var X=null;function V(t){if(X&&X[0]===t[0]){return false}X=t;Z().removeClass("active aui-dropdown2-active");if(Q(t)){t.addClass("active aui-dropdown2-active")}P.trigger("aui-dropdown2-item-selected");Y();return true}function N(){V(P.find("a:not(.disabled):not(.aui-dropdown2-disabled)").first())}function k(u){var t=P.find("> ul > li > a, > .aui-dropdown2-section > ul > li > a").not(".disabled,.aui-dropdown2-disabled");V(l(t,u,true))}function c(t){if(t.length>0){m();t.trigger("aui-button-invoke")}}function r(t){c(l(U.find(".aui-dropdown2-trigger").not(".disabled, .aui-dropdown2-disabled, [aria-disabled=true], .aui-dropdown2-sub-trigger"),t,false))}function l(v,w,u){var t=v.index(v.filter(".active,.aui-dropdown2-active"));t+=(t<0&&w<0)?1:0;t+=w;if(u){t%=v.length}else{if(t<0){t=v.length}}return v.eq(t)}function p(){c(H(this))}function M(){if(C===o){F.unbind(o);C=null}}function Y(){if(C===o){return }F.unbind(C);F.bind(o);C=o}function j(u){var v="bind";var t="delegate";if(u!=="on"){v="unbind";t="undelegate"}if(!s){U[t](".aui-dropdown2-trigger:not(.active):not(.aui-dropdown2-active)","mousemove",p);O[v]("aui-button-invoke",b)}else{f[v]("aui-dropdown2-hide aui-dropdown2-item-selected aui-dropdown2-step-out",h)}P[v]("aui-dropdown2-hide-all",m);P[t]("a",T);P[v]("aui-dropdown2-hide",Y);P[v]("aui-dropdown2-select-first",N)}},mousedown:function(M){if(M.which===1){H(this).bind(G)}}};var G={mouseleave:function(){F.bind(I)},"mouseup mouseleave":function(){H(this).unbind(G)}};var I={mouseup:function(M){var N=H(M.target).closest(".aui-dropdown2 a, .aui-dropdown2-trigger")[0];if(N){setTimeout(function(){L(N)},0)}},"mouseup mouseleave":function(){H(this).unbind(I)}};function L(M){if(M.click){M.click()}else{var N=document.createEvent("MouseEvents");N.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);M.dispatchEvent(N)}}function D(N,M){return(N===M)||H.contains(M,N)}function K(O){if(!(O instanceof AJS.$)){O=H(O)}var P=O.attr("aria-owns"),M=O.attr("aria-haspopup"),N=document.getElementById(P);if(N){return H(N)}else{if(!P){throw new Error("Dropdown 2 trigger required attribute not set: aria-owns")}if(!M){throw new Error("Dropdown 2 trigger required attribute not set: aria-haspopup")}if(!N){throw new Error("Dropdown 2 trigger aria-owns attr set to nonexistent id: "+P)}throw new Error("Dropdown 2 trigger unknown error. I don't know what you did, but there's smoke everywhere. Consult the documentation.")}}F.delegate(".aui-dropdown2-trigger",B);F.delegate(".aui-dropdown2-trigger:not(.active):not(.aui-dropdown2-active):not([aria-disabled=true]),.aui-dropdown2-sub-trigger:not([aria-disabled=true])",A);F.delegate(".aui-dropdown2-checkbox:not(.disabled):not(.aui-dropdown2-disabled)","click",function(){var M=H(this);if(M.hasClass("checked")||M.hasClass("aui-dropdown2-checked")){M.removeClass("checked aui-dropdown2-checked").attr("aria-checked","false");M.trigger("aui-dropdown2-item-uncheck")}else{M.addClass("checked aui-dropdown2-checked").attr("aria-checked","true");M.trigger("aui-dropdown2-item-check")}});F.delegate(".aui-dropdown2-radio:not(.checked):not(.aui-dropdown2-checked):not(.disabled):not(.aui-dropdown2-disabled)","click",function(){var M=H(this);var N=M.closest("ul").find(".checked,.aui-dropdown2-checked");N.removeClass("checked aui-dropdown2-checked").attr("aria-checked","false").trigger("aui-dropdown2-item-uncheck");M.addClass("checked aui-dropdown2-checked").attr("aria-checked","true").trigger("aui-dropdown2-item-check")});F.delegate(".aui-dropdown2 a.disabled,.aui-dropdown2 a.aui-dropdown2-disabled","click",function(M){J(M)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:fancy-file-input', location = 'fancy-file-input/dist/fancy-file-input.js' */
/* jQuery Fancy File Input plugin - v1.0.0 - 2014-10-22
* http://seancurtis.com/experiments/fancy-file-input/
* Copyright (c) 2014 Sean Curtis <scurtis@atlassian.com>; Licensed http://www.apache.org/licenses/LICENSE-2.0 */
(function(A,B){A.FancyFileInput=B(jQuery);if(typeof define==="function"){define("aui/internal/fancy-file-input",[],function(){return A.FancyFileInput})}}(this,function(D){var F=/^.*[\\\/]/;var B=/\{0\}/gi;var E=(function(){var G=3;var I=document.createElement("div");var H=I.getElementsByTagName("i");do{I.innerHTML="<!--[if gt IE "+(++G)+"]><i></i><![endif]-->"}while(H[0]);return G>4?G:document.documentMode}());D.fn.fancyFileInput=function(G){return this.each(function(){var H=new A(this,G);D(this).data("FancyFileInput",H)})};function A(I,H){var G=D(I).data("FancyFileInput");if(G){return G}H=D.extend({},A.defaults,H);this.el=I;this.$el=D(I);this.$label=this.createLabel(H.buttonText);this._addLabelText();this.$clearButton=D("<button>",{text:(this.$label.attr("data-ffi-clearButtonText")||H.clearButtonText),"class":"ffi-clear",type:"button",tabindex:"-1"});this.multipleFileTextPattern=this.$label.attr("data-ffi-multipleFileTextPattern")||H.multipleFileTextPattern;this._eventNamespace=".ffi";this.CLASSES={disabled:"is-disabled",focused:"is-focused",active:"is-active",valid:"is-valid",invalid:"is-invalid"};this[this.isDisabled()?"disable":"enable"]();this.isFocused=false}A.defaults={buttonText:"Browse\u2026",clearButtonText:"Clear",multipleFileTextPattern:"{0} files"};A.prototype._addLabelText=function C(){var G=D('label[for="'+this.el.id+'"]');if(G.length){this.$el.attr("aria-label",G.text())}};A.prototype.createLabel=function(H){var G=this.$el.parent(".ffi[data-ffi-button-text]");if(!G.length){G=this.$el.wrap(D("<label>",{"class":"ffi","data-ffi-button-text":H})).parent()}return G};A.prototype.isDisabled=function(){return this.$el.is(":disabled")};A.prototype.formatMultipleFileText=function(G){return this.multipleFileTextPattern.replace(B,G)};A.prototype.bindEvents=function(){this.$el.on("invalid"+this._eventNamespace,D.proxy(this.checkValidity,this)).on("change"+this._eventNamespace,D.proxy(this.change,this)).on("keydown"+this._eventNamespace,D.proxy(this.keydown,this)).on("mousedown"+this._eventNamespace,D.proxy(this.mousedown,this)).on("mouseup"+this._eventNamespace,D.proxy(this.mouseup,this)).on("focus"+this._eventNamespace,D.proxy(this.focus,this)).on("blur"+this._eventNamespace,D.proxy(this.blur,this));this.$clearButton.on("click"+this._eventNamespace,D.proxy(this.clear,this))};A.prototype.unbindEvents=function(){this.$el.off(this._eventNamespace);this.$clearButton.off(this._eventNamespace)};A.prototype.fireEvent=function(G){this.$el.trigger(G+this._eventNamespace)};A.prototype.enable=function(){this.bindEvents();this.$el.prop("disabled",false);this.$label.removeClass(this.CLASSES.disabled)};A.prototype.disable=function(){this.unbindEvents();this.$el.prop("disabled",true);this.$label.addClass(this.CLASSES.disabled)};A.prototype.clear=function(){this.$el.wrap("<form>").closest("form").get(0).reset();this.$el.unwrap();this.el.value="";this.change();return false};A.prototype.focus=function(){var G=this;this.$label.addClass(this.CLASSES.focused);if(E&&!this.isFocused){this.isFocused=true;setTimeout(function(){G.$el.blur();G.$el.focus()},0)}};A.prototype.blur=function(){if(!E||!this.isFocused){this.$label.removeClass(this.CLASSES.focused);this.isFocused=false}};A.prototype.mousedown=function(){this.$label.addClass(this.CLASSES.active)};A.prototype.mouseup=function(){this.$label.removeClass(this.CLASSES.active)};A.prototype.keydown=function(L){var K=L.which;var J=8;var H=9;var I=46;if(K===J||K===I){this.clear();L.preventDefault()}if(E&&K===H){var G=this;this.isFocused=false;this.$el.prop("disabled",true);setTimeout(function(){G.$el.prop("disabled",false).blur()},0)}};A.prototype.checkValidity=function(){if(!this.el.required){return }var G=this.$el.is(":invalid");this.$label.toggleClass(this.CLASSES.invalid,G).toggleClass(this.CLASSES.valid,!G)};A.prototype.change=function(){var G;var H="";this.checkValidity();if(this.el.multiple&&this.el.files.length>1){G=this.formatMultipleFileText(this.el.files.length)}else{G=this.el.value}if(G.length){H=G.replace(F,"");this.$clearButton.appendTo(this.$label)}else{this.$clearButton.detach()}this.$el.focus();this.setFieldText(H);this.fireEvent("value-changed")};A.prototype.setFieldText=function(H){var G="data-ffi-value";if(H.length){this.$label.attr(G,H);this.fireEvent("value-added")}else{this.$label.removeAttr(G);this.fireEvent("value-cleared")}};return A}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:hotkeys', location = 'js/jquery/jquery.hotkeys.js' */
(function(D){D.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",91:"meta",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",188:",",190:".",191:"/",224:"meta",219:"[",221:"]"},keypressKeys:["<",">","?"],shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"}};D.each(D.hotkeys.keypressKeys,function(E,F){D.hotkeys.shiftNums[F]=F});function A(E){this.num=0;this.timer=E>0?E:false}A.prototype.val=function(){return this.num};A.prototype.inc=function(){if(this.timer){clearTimeout(this.timeout);this.timeout=setTimeout(D.proxy(A.prototype.reset,this),this.timer)}this.num++};A.prototype.reset=function(){if(this.timer){clearTimeout(this.timeout)}this.num=0};function C(G){if(!(D.isPlainObject(G.data)||D.isArray(G.data)||typeof G.data==="string")){return }var F=G.handler,E={timer:700};(function(H){if(typeof H==="string"){E.combo=[H]}else{if(D.isArray(H)){E.combo=H}else{D.extend(E,H)}}E.combo=D.map(E.combo,function(I){return I.toLowerCase()})})(G.data);G.index=new A(E.timer);G.handler=function(M){if(this!==M.target&&(/textarea|select|input/i.test(M.target.nodeName))){return }var J=M.type!=="keypress"?D.hotkeys.specialKeys[M.which]:null,N=String.fromCharCode(M.which).toLowerCase(),K,L="",I={};if(M.altKey&&J!=="alt"){L+="alt+"}if(M.ctrlKey&&J!=="ctrl"){L+="ctrl+"}if(M.metaKey&&!M.ctrlKey&&J!=="meta"){L+="meta+"}if(M.shiftKey&&J!=="shift"){L+="shift+"}if(M.metaKey&&N==="["){N=null}if(J){I[L+J]=true}if(N){I[L+N]=true}if(/shift+/.test(L)){I[L.replace("shift+","")+D.hotkeys.shiftNums[(J||N)]]=true}var H=G.index,O=E.combo;if(B(O[H.val()],I)){if(H.val()===O.length-1){H.reset();return F.apply(this,arguments)}else{H.inc()}}else{H.reset();if(B(O[0],I)){H.inc()}}}}function B(H,F){var I=H.split(" ");for(var G=0,E=I.length;G<E;G++){if(F[I[G]]){return true}}return false}D.each(["keydown","keyup","keypress"],function(){D.event.special[this]={add:C}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-focus-manager', location = 'js/focus-manager.js' */
AJS.FocusManager=(function(G){(function B(){function J(L){return(G.css(L,"visibility")==="visible")}function I(P,Q){var S=P.nodeName.toLowerCase();if(S==="area"){var M=P.parentNode;var R=M.name;var T=G("img[usemap=#"+R+"]").get();if(!P.href||!R||M.nodeName.toLowerCase()!=="map"){return false}return T&&J(T)}var O=/input|select|textarea|button|object/.test(S);var L=S==="a";var N=(P.href||Q);return(O?!P.disabled:(L?N:Q))&&J(P)}function K(N){var L=G.attr(N,"tabindex"),M=isNaN(L);var O=(M||L>=0);return O&&I(N,!M)}G.extend(G.expr[":"],{"aui-focusable":function(L){return I(L,!isNaN(G.attr(L,"tabindex")))},"aui-tabbable":K})}());var D="_aui-focus-restore";function C(){this._focusTrapStack=[];G(document).on("focusout",{focusTrapStack:this._focusTrapStack},F)}C.defaultFocusSelector=":aui-tabbable";C.prototype.enter=function(I){I.data(D,G(document.activeElement));if(I.attr("data-aui-focus")!=="false"){var J=I.attr("data-aui-focus-selector")||C.defaultFocusSelector;var K=I.is(J)?I:I.find(J);K.first().focus()}if(H(I)){E(I,this._focusTrapStack)}};function E(I,J){J.push(I)}function A(I){I.pop()}function H(I){return I.is(".aui-dialog2")}C.prototype.exit=function(I){if(H(I)){A(this._focusTrapStack)}var J=document.activeElement;if(I[0]===J||I.has(J).length){G(J).blur()}var K=I.data(D);if(K&&K.length){I.removeData(D);K.focus()}};function F(K){var O=K.data.focusTrapStack;if(!K.relatedTarget){return }if(O.length===0){return }var R=O[O.length-1];var I=K.target;var N=K.relatedTarget;var M=R.find(":aui-tabbable");var L=AJS.$(M.first());var J=AJS.$(M.last());var Q=R.has(N).length===0;var P=Q&&N;if(P){if(L.is(I)){J.focus()}else{if(J.is(I)){L.focus()}}}}C.global=new C();return C}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-layer-manager', location = 'js/layer-manager.js' */
(function(B){function F(L,N){var M=L.length;while(M--){if(N(L[M])){return M}}return -1}function D(L,M){return F(L,function(N){return N[0]===M[0]})}function G(L){return F(L,function(M){return AJS.layer(M).isBlanketed()})}function A(M){var L;if(M.length){var N=M[M.length-1];var O=parseInt(N.css("z-index"),10);L=(isNaN(O)?0:O)+100}else{L=0}return Math.max(3000,L)}function E(L,N){var M=G(L);if(N!==M){if(M>-1){AJS.dim(false,L[M].css("z-index")-20)}else{AJS.undim()}}}function K(L,P,O){if(P<0){return }for(var N=L.length-1;N>=P;N--){var M=L[N];var Q=AJS.layer(M);if(O||!Q.isPersistent()){Q._hideLayer(true);L.splice(N,1)}}}function C(M){var L=I(M);if(L.length>0){return L.closest(".aui-layer")}}function J(L){return I(L).length>0}function I(L){return B('[aria-controls="'+L.attr("id")+'"]')}function H(){this._stack=[]}H.prototype={push:function(N){var M=(N instanceof B)?N:B(N);if(D(this._stack,M)>=0){throw new Error("The given element is already an active layer.")}this.popLayersBeside(M);var L=AJS.layer(M);var O=A(this._stack);L._showLayer(O);if(L.isBlanketed()){AJS.dim(false,O-20)}this._stack.push(M);return this},popLayersBeside:function(O){var M=(O instanceof B)?O:B(O);if(!J(M)){var L=G(this._stack);K(this._stack,++L,false);return }var P=C(M);if(P){var N=this.indexOf(P);K(this._stack,++N,false)}else{K(this._stack,0,false)}},indexOf:function(L){return D(this._stack,B(L))},item:function(L){return this._stack[L]},hideAll:function(){this._stack.reverse().forEach(function(M){var L=AJS.layer(M);if(L.isBlanketed()||L.isPersistent()){return }L.hide()});return this},getNextLowerNonPersistentOrBlanketedLayer:function(P){var O=(P instanceof B)?P:B(P);var M=D(this._stack,O);if(M<0){return null}var L;M--;while(M>=0){L=this._stack[M];var N=AJS.layer(L);if(!N.isPersistent()||N.isBlanketed()){return L}M--}return null},getNextHigherNonPeristentAndNonBlanketedLayer:function(P){var O=(P instanceof B)?P:B(P);var M=D(this._stack,O);if(M<0){return null}var L;M++;while(M<this._stack.length){L=this._stack[M];var N=AJS.layer(L);if(!(N.isPersistent()||N.isBlanketed())){return L}M++}return null},popUntil:function(O){var N=(O instanceof B)?O:B(O);var M=D(this._stack,N);if(M===-1){return null}var L=G(this._stack);K(this._stack,M+1,AJS.layer(N).isBlanketed());AJS.layer(N)._hideLayer();this._stack.splice(M,1);E(this._stack,L);return N},getTopLayer:function(){if(!this._stack.length){return null}var L=this._stack[this._stack.length-1];return L},popTopIfNonPersistent:function(){var L=this.getTopLayer();var M=AJS.layer(L);if(!L||M.isPersistent()){return null}return this.popUntil(L)},popUntilTopBlanketed:function(){var P=G(this._stack);if(P<0){return null}var M=this._stack[P];var O=AJS.layer(M);if(O.isPersistent()){var L=this.getNextHigherNonPeristentAndNonBlanketedLayer(M);if(L){var N=D(this._stack,L);K(this._stack,N,true);return L}return null}K(this._stack,P,true);E(this._stack,P);return M},popUntilTopPersistent:function(){var N=AJS.LayerManager.global.getTopLayer();if(!N){return }var L;var M=G(this._stack);var O=AJS.layer(N);if(O.isPersistent()){if(O.isBlanketed()){return }else{N=AJS.LayerManager.global.getNextLowerNonPersistentOrBlanketedLayer(N);O=AJS.layer(N);if(N&&!O.isPersistent()){L=D(this._stack,N);K(this._stack,L,true);E(this._stack,M)}else{return }}}else{L=D(this._stack,N);K(this._stack,L,true);E(this._stack,M)}}};AJS.LayerManager=H}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-layer-manager', location = 'js/layer-manager-global.js' */
(function(C){var F=C(document);function D(){F.on("keydown",function(G){if(G.keyCode===AJS.keyCode.ESCAPE){AJS.LayerManager.global.popUntilTopPersistent();G.preventDefault()}})}function E(){F.on("click",".aui-blanket",function(G){if(AJS.LayerManager.global.popUntilTopBlanketed()){G.preventDefault()}})}function B(){F.on("click",function(K){var H=C(K.target);if(H.closest(".aui-blanket").length){return }var G=H.closest("[aria-controls]");var J=H.closest(".aui-layer");if(!J.length&&!A(G)){AJS.LayerManager.global.hideAll();return }if(A(G)){return }if(J.length){var I=AJS.LayerManager.global.getNextHigherNonPeristentAndNonBlanketedLayer(J);if(I){AJS.layer(I).hide()}}})}function A(G){if(!G.length){return false}var H=document.getElementById(G.attr("aria-controls"));return AJS.LayerManager.global.indexOf(H)>-1}D();E();B();AJS.LayerManager.global=new AJS.LayerManager()}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:layer', location = 'js/layer.js' */
(function(A){AJS.layer=A(AJS.$,AJS._internal.widget)})(function(F,I){var H="_aui-internal-layer-";var K="_aui-internal-layer-global-";var B="aui-layer-";var E=F(document);function A(L){L.attr("aria-hidden","true")}function G(L){L.attr("aria-hidden","false")}function J(O,M,N){var Q=F.Event(H+M);var P=F.Event(K+M);var L=new CustomEvent(B+N,{bubbles:true,cancelable:true});O.trigger(Q);O.trigger(P,[O]);O[0].dispatchEvent(L);return !Q.isDefaultPrevented()&&!P.isDefaultPrevented()&&!L.defaultPrevented}function C(L){this.$el=F(L||'<div class="aui-layer" aria-hidden="true"></div>');this.$el.addClass("aui-layer")}C.prototype={below:function(){return AJS.LayerManager.global.item(AJS.LayerManager.global.indexOf(this.$el)-1)},above:function(){return AJS.LayerManager.global.item(AJS.LayerManager.global.indexOf(this.$el)+1)},changeSize:function(M,L){this.$el.css("width",M);this.$el.css("height",L==="content"?"":L);return this},on:function(M,L){this.$el.on(H+M,L);return this},off:function(M,L){this.$el.off(H+M,L);return this},show:function(){if(this.isVisible()){G(this.$el);return this}if(J(this.$el,"beforeShow","show")){AJS.LayerManager.global.push(this.$el)}return this},hide:function(){if(!this.isVisible()){A(this.$el);return this}if(J(this.$el,"beforeHide","hide")){AJS.LayerManager.global.popUntil(this.$el)}return this},isVisible:function(){return this.$el.attr("aria-hidden")==="false"},remove:function(){this.hide();this.$el.remove();this.$el=null},isBlanketed:function(){return this.$el.attr("data-aui-blanketed")==="true"},isPersistent:function(){return this.$el.attr("data-aui-persistent")==="true"||this.$el.attr("data-aui-modal")==="true"},_hideLayer:function(L){if(this.isPersistent()||this.isBlanketed()){AJS.FocusManager.global.exit(this.$el)}if(L){J(this.$el,"beforeHide","hide")}this.$el.attr("aria-hidden","true");this.$el.css("z-index",this.$el.data("_aui-layer-cached-z-index")||"");this.$el.data("_aui-layer-cached-z-index","");this.$el.trigger(H+"hide");this.$el.trigger(K+"hide",[this.$el])},_showLayer:function(L){if(!this.$el.parent().is("body")){this.$el.appendTo(document.body)}this.$el.data("_aui-layer-cached-z-index",this.$el.css("z-index"));this.$el.css("z-index",L);this.$el.attr("aria-hidden","false");if(this.isPersistent()||this.isBlanketed()){AJS.FocusManager.global.enter(this.$el)}this.$el.trigger(H+"show");this.$el.trigger(K+"show",[this.$el])}};var D=I("layer",C);D.on=function(M,L,N){E.on(K+M,L,N);return this};D.off=function(M,L,N){E.off(K+M,L,N);return this};return D});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:dialog', location = 'js/dialog.js' */
AJS.popup=function(I){var D={width:800,height:600,closeOnOutsideClick:false,keypressListener:function(J){if(J.keyCode===27&&B.is(":visible")){F.hide()}}};if(typeof I!="object"){I={width:arguments[0],height:arguments[1],id:arguments[2]};I=AJS.$.extend({},I,arguments[3])}I=AJS.$.extend({},D,I);var B=AJS("div").addClass("aui-popup");if(I.id){B.attr("id",I.id)}var E=3000;AJS.$(".aui-dialog").each(function(){var J=AJS.$(this);E=(J.css("z-index")>E)?J.css("z-index"):E});var G=(function(K,J){I.width=(K=(K||I.width));I.height=(J=(J||I.height));B.css({marginTop:-Math.round(J/2)+"px",marginLeft:-Math.round(K/2)+"px",width:K,height:J,"z-index":parseInt(E,10)+2});return arguments.callee})(I.width,I.height);AJS.$("body").append(B);B.hide();AJS.enable(B);var C=AJS.$(".aui-blanket"),A=function(J,K){var L=AJS.$(J,K);if(L.length){L.focus();return true}return false},H=function(J){if(AJS.$(".dialog-page-body",J).find(":focus").length!==0){return }if(I.focusSelector){return A(I.focusSelector,J)}var K=":input:visible:enabled:first";if(A(K,AJS.$(".dialog-page-body",J))){return }if(A(K,AJS.$(".dialog-button-panel",J))){return }A(K,AJS.$(".dialog-page-menu",J))};var F={changeSize:function(J,K){if((J&&J!=I.width)||(K&&K!=I.height)){G(J,K)}this.show()},show:function(){var J=function(){AJS.$(document).off("keydown",I.keypressListener).on("keydown",I.keypressListener);AJS.dim();C=AJS.$(".aui-blanket");if(C.size()!=0&&I.closeOnOutsideClick){C.click(function(){if(B.is(":visible")){F.hide()}})}B.show();AJS.popup.current=this;H(B);AJS.$(document).trigger("showLayer",["popup",this])};J.call(this);this.show=J},hide:function(){AJS.$(document).unbind("keydown",I.keypressListener);C.unbind();this.element.hide();if(AJS.$(".aui-dialog:visible").size()==0){AJS.undim()}var J=document.activeElement;if(this.element.has(J).length){J.blur()}AJS.$(document).trigger("hideLayer",["popup",this]);AJS.popup.current=null;this.enable()},element:B,remove:function(){B.remove();this.element=null},disable:function(){if(!this.disabled){this.popupBlanket=AJS.$("<div class='dialog-blanket'> </div>").css({height:B.height(),width:B.width()});B.append(this.popupBlanket);this.disabled=true}},enable:function(){if(this.disabled){this.disabled=false;this.popupBlanket.remove();this.popupBlanket=null}}};return F};(function(){function F(N,L,K,M){if(!N.buttonpanel){N.addButtonPanel()}this.page=N;this.onclick=K;this._onclick=function(O){return K.call(this,N.dialog,N,O)===true};this.item=AJS("button",L).addClass("button-panel-button");if(M){this.item.addClass(M)}if(typeof K=="function"){this.item.click(this._onclick)}N.buttonpanel.append(this.item);this.id=N.button.length;N.button[this.id]=this}function A(O,M,L,N,K){if(!O.buttonpanel){O.addButtonPanel()}if(!K){K="#"}this.page=O;this.onclick=L;this._onclick=function(P){return L.call(this,O.dialog,O,P)===true};this.item=AJS("a",M).attr("href",K).addClass("button-panel-link");if(N){this.item.addClass(N)}if(typeof L=="function"){this.item.click(this._onclick)}O.buttonpanel.append(this.item);this.id=O.button.length;O.button[this.id]=this}function B(M,L){var K=M=="left"?-1:1;return function(Q){var O=this.page[L];if(this.id!=((K==1)?O.length-1:0)){K*=(Q||1);O[this.id+K].item[(K<0?"before":"after")](this.item);O.splice(this.id,1);O.splice(this.id+K,0,this);for(var N=0,P=O.length;N<P;N++){if(L=="panel"&&this.page.curtab==O[N].id){this.page.curtab=N}O[N].id=N}}return this}}function G(K){return function(){this.page[K].splice(this.id,1);for(var L=0,M=this.page[K].length;L<M;L++){this.page[K][L].id=L}this.item.remove()}}F.prototype.moveUp=F.prototype.moveLeft=B("left","button");F.prototype.moveDown=F.prototype.moveRight=B("right","button");F.prototype.remove=G("button");F.prototype.html=function(K){return this.item.html(K)};F.prototype.onclick=function(K){if(typeof K=="undefined"){return this.onclick}else{this.item.unbind("click",this._onclick);this._onclick=function(L){return K.call(this,page.dialog,page,L)===true};if(typeof K=="function"){this.item.click(this._onclick)}}};var D=20;var H=function(Q,R,K,P,N){if(!(K instanceof AJS.$)){K=AJS.$(K)}this.dialog=Q.dialog;this.page=Q;this.id=Q.panel.length;this.button=AJS("button").html(R).addClass("item-button");if(N){this.button[0].id=N}this.item=AJS("li").append(this.button).addClass("page-menu-item");this.body=AJS("div").append(K).addClass("dialog-panel-body").css("height",Q.dialog.height+"px");this.padding=D;if(P){this.body.addClass(P)}var M=Q.panel.length,O=this;Q.menu.append(this.item);Q.body.append(this.body);Q.panel[M]=this;var L=function(){var S;if(Q.curtab+1){S=Q.panel[Q.curtab];S.body.hide();S.item.removeClass("selected");(typeof S.onblur=="function")&&S.onblur()}Q.curtab=O.id;O.body.show();O.item.addClass("selected");(typeof O.onselect=="function")&&O.onselect();(typeof Q.ontabchange=="function")&&Q.ontabchange(O,S)};if(!this.button.click){AJS.log("atlassian-dialog:Panel:constructor - this.button.click false");this.button.onclick=L}else{this.button.click(L)}L();if(M==0){Q.menu.css("display","none")}else{Q.menu.show()}};H.prototype.select=function(){this.button.click()};H.prototype.moveUp=H.prototype.moveLeft=B("left","panel");H.prototype.moveDown=H.prototype.moveRight=B("right","panel");H.prototype.remove=G("panel");H.prototype.html=function(K){if(K){this.body.html(K);return this}else{return this.body.html()}};H.prototype.setPadding=function(K){if(!isNaN(+K)){this.body.css("padding",+K);this.padding=+K;this.page.recalcSize()}return this};var E=56;var C=51;var I=50;var J=function(K,L){this.dialog=K;this.id=K.page.length;this.element=AJS("div").addClass("dialog-components");this.body=AJS("div").addClass("dialog-page-body");this.menu=AJS("ul").addClass("dialog-page-menu").css("height",K.height+"px");this.body.append(this.menu);this.curtab;this.panel=[];this.button=[];if(L){this.body.addClass(L)}K.popup.element.append(this.element.append(this.menu).append(this.body));K.page[K.page.length]=this};J.prototype.recalcSize=function(){var K=this.header?E:0;var N=this.buttonpanel?C:0;for(var M=this.panel.length;M--;){var L=this.dialog.height-K-N;this.panel[M].body.css("height",L);this.menu.css("height",L)}};J.prototype.addButtonPanel=function(){this.buttonpanel=AJS("div").addClass("dialog-button-panel");this.element.append(this.buttonpanel)};J.prototype.addPanel=function(N,K,M,L){new H(this,N,K,M,L);this.recalcSize();return this};J.prototype.addHeader=function(L,K){if(this.header){this.header.remove()}this.header=AJS("h2").text(L||"").addClass("dialog-title");K&&this.header.addClass(K);this.element.prepend(this.header);this.recalcSize();return this};J.prototype.addButton=function(L,K,M){new F(this,L,K,M);this.recalcSize();return this};J.prototype.addLink=function(M,L,N,K){new A(this,M,L,N,K);this.recalcSize();return this};J.prototype.gotoPanel=function(K){this.panel[K.id||K].select()};J.prototype.getCurrentPanel=function(){return this.panel[this.curtab]};J.prototype.hide=function(){this.element.hide()};J.prototype.show=function(){this.element.show()};J.prototype.remove=function(){this.element.remove()};AJS.Dialog=function(M,K,N){var L={};if(!+M){L=Object(M);M=L.width;K=L.height;N=L.id}this.height=K||480;this.width=M||640;this.id=N;L=AJS.$.extend({},L,{width:this.width,height:this.height,id:this.id});this.popup=AJS.popup(L);this.popup.element.addClass("aui-dialog");this.page=[];this.curpage=0;new J(this)};AJS.Dialog.prototype.addHeader=function(L,K){this.page[this.curpage].addHeader(L,K);return this};AJS.Dialog.prototype.addButton=function(L,K,M){this.page[this.curpage].addButton(L,K,M);return this};AJS.Dialog.prototype.addLink=function(M,L,N,K){this.page[this.curpage].addLink(M,L,N,K);return this};AJS.Dialog.prototype.addSubmit=function(L,K){this.page[this.curpage].addButton(L,K,"button-panel-submit-button");return this};AJS.Dialog.prototype.addCancel=function(L,K){this.page[this.curpage].addLink(L,K,"button-panel-cancel-link");return this};AJS.Dialog.prototype.addButtonPanel=function(){this.page[this.curpage].addButtonPanel();return this};AJS.Dialog.prototype.addPanel=function(N,K,M,L){this.page[this.curpage].addPanel(N,K,M,L);return this};AJS.Dialog.prototype.addPage=function(K){new J(this,K);this.page[this.curpage].hide();this.curpage=this.page.length-1;return this};AJS.Dialog.prototype.nextPage=function(){this.page[this.curpage++].hide();if(this.curpage>=this.page.length){this.curpage=0}this.page[this.curpage].show();return this};AJS.Dialog.prototype.prevPage=function(){this.page[this.curpage--].hide();if(this.curpage<0){this.curpage=this.page.length-1}this.page[this.curpage].show();return this};AJS.Dialog.prototype.gotoPage=function(K){this.page[this.curpage].hide();this.curpage=K;if(this.curpage<0){this.curpage=this.page.length-1}else{if(this.curpage>=this.page.length){this.curpage=0}}this.page[this.curpage].show();return this};AJS.Dialog.prototype.getPanel=function(L,M){var K=(M==null)?this.curpage:L;if(M==null){M=L}return this.page[K].panel[M]};AJS.Dialog.prototype.getPage=function(K){return this.page[K]};AJS.Dialog.prototype.getCurrentPanel=function(){return this.page[this.curpage].getCurrentPanel()};AJS.Dialog.prototype.gotoPanel=function(M,L){if(L!=null){var K=M.id||M;this.gotoPage(K)}this.page[this.curpage].gotoPanel(typeof L=="undefined"?M:L)};AJS.Dialog.prototype.show=function(){this.popup.show();AJS.trigger("show.dialog",{dialog:this});return this};AJS.Dialog.prototype.hide=function(){this.popup.hide();AJS.trigger("hide.dialog",{dialog:this});return this};AJS.Dialog.prototype.remove=function(){this.popup.hide();this.popup.remove();AJS.trigger("remove.dialog",{dialog:this})};AJS.Dialog.prototype.disable=function(){this.popup.disable();return this};AJS.Dialog.prototype.enable=function(){this.popup.enable();return this};AJS.Dialog.prototype.get=function(S){var L=[],R=this;var T='#([^"][^ ]*|"[^"]*")';var U=":(\\d+)";var M="page|panel|button|header";var N="(?:("+M+")(?:"+T+"|"+U+")?|"+T+")";var P=new RegExp("(?:^|,)\\s*"+N+"(?:\\s+"+N+")?\\s*(?=,|$)","ig");(S+"").replace(P,function(f,V,e,W,c,b,Y,g,d){V=V&&V.toLowerCase();var X=[];if(V=="page"&&R.page[W]){X.push(R.page[W]);V=b;V=V&&V.toLowerCase();e=Y;W=g;c=d}else{X=R.page}e=e&&(e+"").replace(/"/g,"");Y=Y&&(Y+"").replace(/"/g,"");c=c&&(c+"").replace(/"/g,"");d=d&&(d+"").replace(/"/g,"");if(V||c){for(var a=X.length;a--;){if(c||(V=="panel"&&(e||(!e&&W==null)))){for(var Z=X[a].panel.length;Z--;){if(X[a].panel[Z].button.html()==c||X[a].panel[Z].button.html()==e||(V=="panel"&&!e&&W==null)){L.push(X[a].panel[Z])}}}if(c||(V=="button"&&(e||(!e&&W==null)))){for(var Z=X[a].button.length;Z--;){if(X[a].button[Z].item.html()==c||X[a].button[Z].item.html()==e||(V=="button"&&!e&&W==null)){L.push(X[a].button[Z])}}}if(X[a][V]&&X[a][V][W]){L.push(X[a][V][W])}if(V=="header"&&X[a].header){L.push(X[a].header)}}}else{L=L.concat(X)}});var Q={length:L.length};for(var O=L.length;O--;){Q[O]=L[O];for(var K in L[O]){if(!(K in Q)){(function(V){Q[V]=function(){for(var W=this.length;W--;){if(typeof this[W][V]=="function"){this[W][V].apply(this[W],arguments)}}}})(K)}}}return Q};AJS.Dialog.prototype.updateHeight=function(){var K=0;var M=AJS.$(window).height()-E-C-(I*2);for(var L=0;this.getPanel(L);L++){if(this.getPanel(L).body.css({height:"auto",display:"block"}).outerHeight()>K){K=Math.min(M,this.getPanel(L).body.outerHeight())}if(L!==this.page[this.curpage].curtab){this.getPanel(L).body.css({display:"none"})}}for(L=0;this.getPanel(L);L++){this.getPanel(L).body.css({height:K||this.height})}this.page[0].menu.height(K);this.height=K+E+C+1;this.popup.changeSize(undefined,this.height)};AJS.Dialog.prototype.isMaximised=function(){return this.popup.element.outerHeight()>=AJS.$(window).height()-(I*2)};AJS.Dialog.prototype.getCurPanel=function(){return this.getPanel(this.page[this.curpage].curtab)};AJS.Dialog.prototype.getCurPanelButton=function(){return this.getCurPanel().button};AJS.Dialog=AJS.deprecate.construct(AJS.Dialog,"Dialog constructor",{alternativeName:"Dialog2"});AJS.popup=AJS.deprecate.construct(AJS.popup,"Dialog popup constructor",{alternatveName:"Dialog2"})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-aui-animation', location = 'js/aui/internal/animation.js' */
window.AJS=window.AJS||{};(function(A){A._internal=A._internal||{};A._internal.animation={};A._internal.animation.recomputeStyle=function(B){B=B.length?B[0]:B;window.getComputedStyle(B,null).getPropertyValue("left")}}(AJS));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/jquery/jquery.os.js' */
jQuery.os={};var jQueryOSplatform=navigator.platform.toLowerCase();jQuery.os.windows=(jQueryOSplatform.indexOf("win")!=-1);jQuery.os.mac=(jQueryOSplatform.indexOf("mac")!=-1);jQuery.os.linux=(jQueryOSplatform.indexOf("linux")!=-1);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js-vendor/jquery/jquery-ui/jquery.ui.core.js' */
/*
 * jQuery UI 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(A,D){A.ui=A.ui||{};if(A.ui.version){return }A.extend(A.ui,{version:"1.8.24",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});A.fn.extend({propAttr:A.fn.prop||A.fn.attr,_focus:A.fn.focus,focus:function(E,F){return typeof E==="number"?this.each(function(){var G=this;setTimeout(function(){A(G).focus();if(F){F.call(G)}},E)}):this._focus.apply(this,arguments)},scrollParent:function(){var E;if((A.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){E=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(A.curCSS(this,"position",1))&&(/(auto|scroll)/).test(A.curCSS(this,"overflow",1)+A.curCSS(this,"overflow-y",1)+A.curCSS(this,"overflow-x",1))}).eq(0)}else{E=this.parents().filter(function(){return(/(auto|scroll)/).test(A.curCSS(this,"overflow",1)+A.curCSS(this,"overflow-y",1)+A.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!E.length?A(document):E},zIndex:function(H){if(H!==D){return this.css("zIndex",H)}if(this.length){var F=A(this[0]),E,G;while(F.length&&F[0]!==document){E=F.css("position");if(E==="absolute"||E==="relative"||E==="fixed"){G=parseInt(F.css("zIndex"),10);if(!isNaN(G)&&G!==0){return G}}F=F.parent()}}return 0},disableSelection:function(){return this.bind((A.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(E){E.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});if(!A("<a>").outerWidth(1).jquery){A.each(["Width","Height"],function(G,E){var F=E==="Width"?["Left","Right"]:["Top","Bottom"],H=E.toLowerCase(),J={innerWidth:A.fn.innerWidth,innerHeight:A.fn.innerHeight,outerWidth:A.fn.outerWidth,outerHeight:A.fn.outerHeight};function I(M,L,K,N){A.each(F,function(){L-=parseFloat(A.curCSS(M,"padding"+this,true))||0;if(K){L-=parseFloat(A.curCSS(M,"border"+this+"Width",true))||0}if(N){L-=parseFloat(A.curCSS(M,"margin"+this,true))||0}});return L}A.fn["inner"+E]=function(K){if(K===D){return J["inner"+E].call(this)}return this.each(function(){A(this).css(H,I(this,K)+"px")})};A.fn["outer"+E]=function(K,L){if(typeof K!=="number"){return J["outer"+E].call(this,K)}return this.each(function(){A(this).css(H,I(this,K,true,L)+"px")})}})}function C(G,E){var J=G.nodeName.toLowerCase();if("area"===J){var I=G.parentNode,H=I.name,F;if(!G.href||!H||I.nodeName.toLowerCase()!=="map"){return false}F=A("img[usemap=#"+H+"]")[0];return !!F&&B(F)}return(/input|select|textarea|button|object/.test(J)?!G.disabled:"a"==J?G.href||E:E)&&B(G)}function B(E){return !A(E).parents().andSelf().filter(function(){return A.curCSS(this,"visibility")==="hidden"||A.expr.filters.hidden(this)}).length}A.extend(A.expr[":"],{data:A.expr.createPseudo?A.expr.createPseudo(function(E){return function(F){return !!A.data(F,E)}}):function(G,F,E){return !!A.data(G,E[3])},focusable:function(E){return C(E,!isNaN(A.attr(E,"tabindex")))},tabbable:function(G){var E=A.attr(G,"tabindex"),F=isNaN(E);return(F||E>=0)&&C(G,!F)}});A(function(){var E=document.body,F=E.appendChild(F=document.createElement("div"));F.offsetHeight;A.extend(F.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});A.support.minHeight=F.offsetHeight===100;A.support.selectstart="onselectstart" in F;E.removeChild(F).style.display="none"});if(!A.curCSS){A.curCSS=A.css}A.extend(A.ui,{plugin:{add:function(F,G,I){var H=A.ui[F].prototype;for(var E in I){H.plugins[E]=H.plugins[E]||[];H.plugins[E].push([G,I[E]])}},call:function(E,G,F){var I=E.plugins[G];if(!I||!E.element[0].parentNode){return }for(var H=0;H<I.length;H++){if(E.options[I[H][0]]){I[H][1].apply(E.element,F)}}}},contains:function(F,E){return document.compareDocumentPosition?F.compareDocumentPosition(E)&16:F!==E&&F.contains(E)},hasScroll:function(H,F){if(A(H).css("overflow")==="hidden"){return false}var E=(F&&F==="left")?"scrollLeft":"scrollTop",G=false;if(H[E]>0){return true}H[E]=1;G=(H[E]>0);H[E]=0;return G},isOverAxis:function(F,E,G){return(F>E)&&(F<(E+G))},isOver:function(J,F,I,H,E,G){return A.ui.isOverAxis(J,I,E)&&A.ui.isOverAxis(F,H,G)}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js-vendor/jquery/jquery-ui/jquery.ui.widget.js' */
/*
 * jQuery UI Widget 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(B,D){if(B.cleanData){var C=B.cleanData;B.cleanData=function(E){for(var F=0,G;(G=E[F])!=null;F++){try{B(G).triggerHandler("remove")}catch(H){}}C(E)}}else{var A=B.fn.remove;B.fn.remove=function(E,F){return this.each(function(){if(!F){if(!E||B.filter(E,[this]).length){B("*",this).add([this]).each(function(){try{B(this).triggerHandler("remove")}catch(G){}})}}return A.call(B(this),E,F)})}}B.widget=function(F,H,E){var G=F.split(".")[0],J;F=F.split(".")[1];J=G+"-"+F;if(!E){E=H;H=B.Widget}B.expr[":"][J]=function(K){return !!B.data(K,F)};B[G]=B[G]||{};B[G][F]=function(K,L){if(arguments.length){this._createWidget(K,L)}};var I=new H();I.options=B.extend(true,{},I.options);B[G][F].prototype=B.extend(true,I,{namespace:G,widgetName:F,widgetEventPrefix:B[G][F].prototype.widgetEventPrefix||F,widgetBaseClass:J},E);B.widget.bridge(F,B[G][F])};B.widget.bridge=function(F,E){B.fn[F]=function(I){var G=typeof I==="string",H=Array.prototype.slice.call(arguments,1),J=this;I=!G&&H.length?B.extend.apply(null,[true,I].concat(H)):I;if(G&&I.charAt(0)==="_"){return J}if(G){this.each(function(){var K=B.data(this,F),L=K&&B.isFunction(K[I])?K[I].apply(K,H):K;if(L!==K&&L!==D){J=L;return false}})}else{this.each(function(){var K=B.data(this,F);if(K){K.option(I||{})._init()}else{B.data(this,F,new E(I,this))}})}return J}};B.Widget=function(E,F){if(arguments.length){this._createWidget(E,F)}};B.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(F,G){B.data(G,this.widgetName,this);this.element=B(G);this.options=B.extend(true,{},this.options,this._getCreateOptions(),F);var E=this;this.element.bind("remove."+this.widgetName,function(){E.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return B.metadata&&B.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(F,G){var E=F;if(arguments.length===0){return B.extend({},this.options)}if(typeof F==="string"){if(G===D){return this.options[F]}E={};E[F]=G}this._setOptions(E);return this},_setOptions:function(F){var E=this;B.each(F,function(G,H){E._setOption(G,H)});return this},_setOption:function(E,F){this.options[E]=F;if(E==="disabled"){this.widget()[F?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",F)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(E,F,G){var J,I,H=this.options[E];G=G||{};F=B.Event(F);F.type=(E===this.widgetEventPrefix?E:this.widgetEventPrefix+E).toLowerCase();F.target=this.element[0];I=F.originalEvent;if(I){for(J in I){if(!(J in F)){F[J]=I[J]}}}this.element.trigger(F,G);return !(B.isFunction(H)&&H.call(this.element[0],F,G)===false||F.isDefaultPrevented())}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js-vendor/jquery/jquery-ui/jquery.ui.mouse.js' */
/*
 * jQuery UI Mouse 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(B,C){var A=false;B(document).mouseup(function(D){A=false});B.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var D=this;this.element.bind("mousedown."+this.widgetName,function(E){return D._mouseDown(E)}).bind("click."+this.widgetName,function(E){if(true===B.data(E.target,D.widgetName+".preventClickEvent")){B.removeData(E.target,D.widgetName+".preventClickEvent");E.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){B(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(F){if(A){return }(this._mouseStarted&&this._mouseUp(F));this._mouseDownEvent=F;var E=this,G=(F.which==1),D=(typeof this.options.cancel=="string"&&F.target.nodeName?B(F.target).closest(this.options.cancel).length:false);if(!G||D||!this._mouseCapture(F)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){E.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(F)&&this._mouseDelayMet(F)){this._mouseStarted=(this._mouseStart(F)!==false);if(!this._mouseStarted){F.preventDefault();return true}}if(true===B.data(F.target,this.widgetName+".preventClickEvent")){B.removeData(F.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(H){return E._mouseMove(H)};this._mouseUpDelegate=function(H){return E._mouseUp(H)};B(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);F.preventDefault();A=true;return true},_mouseMove:function(D){if(B.browser.msie&&!(document.documentMode>=9)&&!D.button){return this._mouseUp(D)}if(this._mouseStarted){this._mouseDrag(D);return D.preventDefault()}if(this._mouseDistanceMet(D)&&this._mouseDelayMet(D)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,D)!==false);(this._mouseStarted?this._mouseDrag(D):this._mouseUp(D))}return !this._mouseStarted},_mouseUp:function(D){B(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(D.target==this._mouseDownEvent.target){B.data(D.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(D)}return false},_mouseDistanceMet:function(D){return(Math.max(Math.abs(this._mouseDownEvent.pageX-D.pageX),Math.abs(this._mouseDownEvent.pageY-D.pageY))>=this.options.distance)},_mouseDelayMet:function(D){return this.mouseDelayMet},_mouseStart:function(D){},_mouseDrag:function(D){},_mouseStop:function(D){},_mouseCapture:function(D){return true}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js-vendor/jquery/jquery-ui/jquery.ui.draggable.js' */
/*
 * jQuery UI Draggable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.draggable",A.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return }this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this},_mouseCapture:function(C){var D=this.options;if(this.helper||D.disabled||A(C.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(C);if(!this.handle){return false}if(D.iframeFix){A(D.iframeFix===true?"iframe":D.iframeFix).each(function(){A('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(A(this).offset()).appendTo("body")})}return true},_mouseStart:function(C){var D=this.options;this.helper=this._createHelper(C);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if(A.ui.ddmanager){A.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};A.extend(this.offset,{click:{left:C.pageX-this.offset.left,top:C.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(C);this.originalPageX=C.pageX;this.originalPageY=C.pageY;(D.cursorAt&&this._adjustOffsetFromHelper(D.cursorAt));if(D.containment){this._setContainment()}if(this._trigger("start",C)===false){this._clear();return false}this._cacheHelperProportions();if(A.ui.ddmanager&&!D.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,C)}this._mouseDrag(C,true);if(A.ui.ddmanager){A.ui.ddmanager.dragStart(this,C)}return true},_mouseDrag:function(C,E){this.position=this._generatePosition(C);this.positionAbs=this._convertPositionTo("absolute");if(!E){var D=this._uiHash();if(this._trigger("drag",C,D)===false){this._mouseUp({});return false}this.position=D.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(A.ui.ddmanager){A.ui.ddmanager.drag(this,C)}return false},_mouseStop:function(E){var G=false;if(A.ui.ddmanager&&!this.options.dropBehaviour){G=A.ui.ddmanager.drop(this,E)}if(this.dropped){G=this.dropped;this.dropped=false}var D=this.element[0],F=false;while(D&&(D=D.parentNode)){if(D==document){F=true}}if(!F&&this.options.helper==="original"){return false}if((this.options.revert=="invalid"&&!G)||(this.options.revert=="valid"&&G)||this.options.revert===true||(A.isFunction(this.options.revert)&&this.options.revert.call(this.element,G))){var C=this;A(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(C._trigger("stop",E)!==false){C._clear()}})}else{if(this._trigger("stop",E)!==false){this._clear()}}return false},_mouseUp:function(C){A("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});if(A.ui.ddmanager){A.ui.ddmanager.dragStop(this,C)}return A.ui.mouse.prototype._mouseUp.call(this,C)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(C){var D=!this.options.handle||!A(this.options.handle,this.element).length?true:false;A(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==C.target){D=true}});return D},_createHelper:function(D){var E=this.options;var C=A.isFunction(E.helper)?A(E.helper.apply(this.element[0],[D])):(E.helper=="clone"?this.element.clone().removeAttr("id"):this.element);if(!C.parents("body").length){C.appendTo((E.appendTo=="parent"?this.element[0].parentNode:E.appendTo))}if(C[0]!=this.element[0]&&!(/(fixed|absolute)/).test(C.css("position"))){C.css("position","absolute")}return C},_adjustOffsetFromHelper:function(C){if(typeof C=="string"){C=C.split(" ")}if(A.isArray(C)){C={left:+C[0],top:+C[1]||0}}if("left" in C){this.offset.click.left=C.left+this.margins.left}if("right" in C){this.offset.click.left=this.helperProportions.width-C.right+this.margins.left}if("top" in C){this.offset.click.top=C.top+this.margins.top}if("bottom" in C){this.offset.click.top=this.helperProportions.height-C.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var C=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0])){C.left+=this.scrollParent.scrollLeft();C.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){C={top:0,left:0}}return{top:C.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:C.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var C=this.element.position();return{top:C.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:C.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var F=this.options;if(F.containment=="parent"){F.containment=this.helper[0].parentNode}if(F.containment=="document"||F.containment=="window"){this.containment=[F.containment=="document"?0:A(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,F.containment=="document"?0:A(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(F.containment=="document"?0:A(window).scrollLeft())+A(F.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(F.containment=="document"?0:A(window).scrollTop())+(A(F.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(F.containment)&&F.containment.constructor!=Array){var G=A(F.containment);var D=G[0];if(!D){return }var E=G.offset();var C=(A(D).css("overflow")!="hidden");this.containment=[(parseInt(A(D).css("borderLeftWidth"),10)||0)+(parseInt(A(D).css("paddingLeft"),10)||0),(parseInt(A(D).css("borderTopWidth"),10)||0)+(parseInt(A(D).css("paddingTop"),10)||0),(C?Math.max(D.scrollWidth,D.offsetWidth):D.offsetWidth)-(parseInt(A(D).css("borderLeftWidth"),10)||0)-(parseInt(A(D).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(C?Math.max(D.scrollHeight,D.offsetHeight):D.offsetHeight)-(parseInt(A(D).css("borderTopWidth"),10)||0)-(parseInt(A(D).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=G}else{if(F.containment.constructor==Array){this.containment=F.containment}}},_convertPositionTo:function(F,H){if(!H){H=this.position}var D=F=="absolute"?1:-1;var E=this.options,C=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,G=(/(html|body)/i).test(C[0].tagName);return{top:(H.top+this.offset.relative.top*D+this.offset.parent.top*D-(A.browser.safari&&A.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(G?0:C.scrollTop()))*D)),left:(H.left+this.offset.relative.left*D+this.offset.parent.left*D-(A.browser.safari&&A.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():G?0:C.scrollLeft())*D))}},_generatePosition:function(D){var E=this.options,L=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,I=(/(html|body)/i).test(L[0].tagName);var H=D.pageX;var G=D.pageY;if(this.originalPosition){var C;if(this.containment){if(this.relative_container){var K=this.relative_container.offset();C=[this.containment[0]+K.left,this.containment[1]+K.top,this.containment[2]+K.left,this.containment[3]+K.top]}else{C=this.containment}if(D.pageX-this.offset.click.left<C[0]){H=C[0]+this.offset.click.left}if(D.pageY-this.offset.click.top<C[1]){G=C[1]+this.offset.click.top}if(D.pageX-this.offset.click.left>C[2]){H=C[2]+this.offset.click.left}if(D.pageY-this.offset.click.top>C[3]){G=C[3]+this.offset.click.top}}if(E.grid){var J=E.grid[1]?this.originalPageY+Math.round((G-this.originalPageY)/E.grid[1])*E.grid[1]:this.originalPageY;G=C?(!(J-this.offset.click.top<C[1]||J-this.offset.click.top>C[3])?J:(!(J-this.offset.click.top<C[1])?J-E.grid[1]:J+E.grid[1])):J;var F=E.grid[0]?this.originalPageX+Math.round((H-this.originalPageX)/E.grid[0])*E.grid[0]:this.originalPageX;H=C?(!(F-this.offset.click.left<C[0]||F-this.offset.click.left>C[2])?F:(!(F-this.offset.click.left<C[0])?F-E.grid[0]:F+E.grid[0])):F}}return{top:(G-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(A.browser.safari&&A.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(I?0:L.scrollTop())))),left:(H-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(A.browser.safari&&A.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():I?0:L.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(C,D,E){E=E||this._uiHash();A.ui.plugin.call(this,C,[D,E]);if(C=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return A.Widget.prototype._trigger.call(this,C,D,E)},plugins:{},_uiHash:function(C){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});A.extend(A.ui.draggable,{version:"1.8.24"});A.ui.plugin.add("draggable","connectToSortable",{start:function(D,F){var E=A(this).data("draggable"),G=E.options,C=A.extend({},F,{item:E.element});E.sortables=[];A(G.connectToSortable).each(function(){var H=A.data(this,"sortable");if(H&&!H.options.disabled){E.sortables.push({instance:H,shouldRevert:H.options.revert});H.refreshPositions();H._trigger("activate",D,C)}})},stop:function(D,F){var E=A(this).data("draggable"),C=A.extend({},F,{item:E.element});A.each(E.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;E.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(D);this.instance.options.helper=this.instance.options._helper;if(E.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",D,C)}})},drag:function(D,G){var F=A(this).data("draggable"),C=this;var E=function(J){var O=this.offset.click.top,N=this.offset.click.left;var H=this.positionAbs.top,L=this.positionAbs.left;var K=J.height,M=J.width;var P=J.top,I=J.left;return A.ui.isOver(H+O,L+N,P,I,K,M)};A.each(F.sortables,function(H){this.instance.positionAbs=F.positionAbs;this.instance.helperProportions=F.helperProportions;this.instance.offset.click=F.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=A(C).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return G.helper[0]};D.target=this.instance.currentItem[0];this.instance._mouseCapture(D,true);this.instance._mouseStart(D,true,true);this.instance.offset.click.top=F.offset.click.top;this.instance.offset.click.left=F.offset.click.left;this.instance.offset.parent.left-=F.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=F.offset.parent.top-this.instance.offset.parent.top;F._trigger("toSortable",D);F.dropped=this.instance.element;F.currentItem=F.element;this.instance.fromOutside=F}if(this.instance.currentItem){this.instance._mouseDrag(D)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",D,this.instance._uiHash(this.instance));this.instance._mouseStop(D,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}F._trigger("fromSortable",D);F.dropped=false}}})}});A.ui.plugin.add("draggable","cursor",{start:function(D,E){var C=A("body"),F=A(this).data("draggable").options;if(C.css("cursor")){F._cursor=C.css("cursor")}C.css("cursor",F.cursor)},stop:function(C,D){var E=A(this).data("draggable").options;if(E._cursor){A("body").css("cursor",E._cursor)}}});A.ui.plugin.add("draggable","opacity",{start:function(D,E){var C=A(E.helper),F=A(this).data("draggable").options;if(C.css("opacity")){F._opacity=C.css("opacity")}C.css("opacity",F.opacity)},stop:function(C,D){var E=A(this).data("draggable").options;if(E._opacity){A(D.helper).css("opacity",E._opacity)}}});A.ui.plugin.add("draggable","scroll",{start:function(D,E){var C=A(this).data("draggable");if(C.scrollParent[0]!=document&&C.scrollParent[0].tagName!="HTML"){C.overflowOffset=C.scrollParent.offset()}},drag:function(E,F){var D=A(this).data("draggable"),G=D.options,C=false;if(D.scrollParent[0]!=document&&D.scrollParent[0].tagName!="HTML"){if(!G.axis||G.axis!="x"){if((D.overflowOffset.top+D.scrollParent[0].offsetHeight)-E.pageY<G.scrollSensitivity){D.scrollParent[0].scrollTop=C=D.scrollParent[0].scrollTop+G.scrollSpeed}else{if(E.pageY-D.overflowOffset.top<G.scrollSensitivity){D.scrollParent[0].scrollTop=C=D.scrollParent[0].scrollTop-G.scrollSpeed}}}if(!G.axis||G.axis!="y"){if((D.overflowOffset.left+D.scrollParent[0].offsetWidth)-E.pageX<G.scrollSensitivity){D.scrollParent[0].scrollLeft=C=D.scrollParent[0].scrollLeft+G.scrollSpeed}else{if(E.pageX-D.overflowOffset.left<G.scrollSensitivity){D.scrollParent[0].scrollLeft=C=D.scrollParent[0].scrollLeft-G.scrollSpeed}}}}else{if(!G.axis||G.axis!="x"){if(E.pageY-A(document).scrollTop()<G.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()-G.scrollSpeed)}else{if(A(window).height()-(E.pageY-A(document).scrollTop())<G.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()+G.scrollSpeed)}}}if(!G.axis||G.axis!="y"){if(E.pageX-A(document).scrollLeft()<G.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()-G.scrollSpeed)}else{if(A(window).width()-(E.pageX-A(document).scrollLeft())<G.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()+G.scrollSpeed)}}}}if(C!==false&&A.ui.ddmanager&&!G.dropBehaviour){A.ui.ddmanager.prepareOffsets(D,E)}}});A.ui.plugin.add("draggable","snap",{start:function(D,E){var C=A(this).data("draggable"),F=C.options;C.snapElements=[];A(F.snap.constructor!=String?(F.snap.items||":data(draggable)"):F.snap).each(function(){var H=A(this);var G=H.offset();if(this!=C.element[0]){C.snapElements.push({item:this,width:H.outerWidth(),height:H.outerHeight(),top:G.top,left:G.left})}})},drag:function(O,L){var F=A(this).data("draggable"),M=F.options;var S=M.snapTolerance;var R=L.offset.left,Q=R+F.helperProportions.width,E=L.offset.top,D=E+F.helperProportions.height;for(var P=F.snapElements.length-1;P>=0;P--){var N=F.snapElements[P].left,K=N+F.snapElements[P].width,J=F.snapElements[P].top,U=J+F.snapElements[P].height;if(!((N-S<R&&R<K+S&&J-S<E&&E<U+S)||(N-S<R&&R<K+S&&J-S<D&&D<U+S)||(N-S<Q&&Q<K+S&&J-S<E&&E<U+S)||(N-S<Q&&Q<K+S&&J-S<D&&D<U+S))){if(F.snapElements[P].snapping){(F.options.snap.release&&F.options.snap.release.call(F.element,O,A.extend(F._uiHash(),{snapItem:F.snapElements[P].item})))}F.snapElements[P].snapping=false;continue}if(M.snapMode!="inner"){var C=Math.abs(J-D)<=S;var T=Math.abs(U-E)<=S;var H=Math.abs(N-Q)<=S;var I=Math.abs(K-R)<=S;if(C){L.position.top=F._convertPositionTo("relative",{top:J-F.helperProportions.height,left:0}).top-F.margins.top}if(T){L.position.top=F._convertPositionTo("relative",{top:U,left:0}).top-F.margins.top}if(H){L.position.left=F._convertPositionTo("relative",{top:0,left:N-F.helperProportions.width}).left-F.margins.left}if(I){L.position.left=F._convertPositionTo("relative",{top:0,left:K}).left-F.margins.left}}var G=(C||T||H||I);if(M.snapMode!="outer"){var C=Math.abs(J-E)<=S;var T=Math.abs(U-D)<=S;var H=Math.abs(N-R)<=S;var I=Math.abs(K-Q)<=S;if(C){L.position.top=F._convertPositionTo("relative",{top:J,left:0}).top-F.margins.top}if(T){L.position.top=F._convertPositionTo("relative",{top:U-F.helperProportions.height,left:0}).top-F.margins.top}if(H){L.position.left=F._convertPositionTo("relative",{top:0,left:N}).left-F.margins.left}if(I){L.position.left=F._convertPositionTo("relative",{top:0,left:K-F.helperProportions.width}).left-F.margins.left}}if(!F.snapElements[P].snapping&&(C||T||H||I||G)){(F.options.snap.snap&&F.options.snap.snap.call(F.element,O,A.extend(F._uiHash(),{snapItem:F.snapElements[P].item})))}F.snapElements[P].snapping=(C||T||H||I||G)}}});A.ui.plugin.add("draggable","stack",{start:function(D,E){var G=A(this).data("draggable").options;var F=A.makeArray(A(G.stack)).sort(function(I,H){return(parseInt(A(I).css("zIndex"),10)||0)-(parseInt(A(H).css("zIndex"),10)||0)});if(!F.length){return }var C=parseInt(F[0].style.zIndex)||0;A(F).each(function(H){this.style.zIndex=C+H});this[0].style.zIndex=C+F.length}});A.ui.plugin.add("draggable","zIndex",{start:function(D,E){var C=A(E.helper),F=A(this).data("draggable").options;if(C.css("zIndex")){F._zIndex=C.css("zIndex")}C.css("zIndex",F.zIndex)},stop:function(C,D){var E=A(this).data("draggable").options;if(E._zIndex){A(D.helper).css("zIndex",E._zIndex)}}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js-vendor/jquery/jquery-ui/jquery.ui.sortable.js' */
/*
 * jQuery UI Sortable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.sortable",A.ui.mouse,{widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var C=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?C.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit();this.ready=true},destroy:function(){A.Widget.prototype.destroy.call(this);this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var C=this.items.length-1;C>=0;C--){this.items[C].item.removeData(this.widgetName+"-item")}return this},_setOption:function(C,D){if(C==="disabled"){this.options[C]=D;this.widget()[D?"addClass":"removeClass"]("ui-sortable-disabled")}else{A.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(G,H){var F=this;if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(G);var E=null,D=this,C=A(G.target).parents().each(function(){if(A.data(this,F.widgetName+"-item")==D){E=A(this);return false}});if(A.data(G.target,F.widgetName+"-item")==D){E=A(G.target)}if(!E){return false}if(this.options.handle&&!H){var I=false;A(this.options.handle,E).find("*").andSelf().each(function(){if(this==G.target){I=true}});if(!I){return false}}this.currentItem=E;this._removeCurrentsFromItems();return true},_mouseStart:function(F,G,C){var H=this.options,D=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(F);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};A.extend(this.offset,{click:{left:F.pageX-this.offset.left,top:F.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(F);this.originalPageX=F.pageX;this.originalPageY=F.pageY;(H.cursorAt&&this._adjustOffsetFromHelper(H.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(H.containment){this._setContainment()}if(H.cursor){if(A("body").css("cursor")){this._storedCursor=A("body").css("cursor")}A("body").css("cursor",H.cursor)}if(H.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",H.opacity)}if(H.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",H.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",F,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!C){for(var E=this.containers.length-1;E>=0;E--){this.containers[E]._trigger("activate",F,D._uiHash(this))}}if(A.ui.ddmanager){A.ui.ddmanager.current=this}if(A.ui.ddmanager&&!H.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,F)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(F);return true},_mouseDrag:function(G){this.position=this._generatePosition(G);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var H=this.options,C=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-G.pageY<H.scrollSensitivity){this.scrollParent[0].scrollTop=C=this.scrollParent[0].scrollTop+H.scrollSpeed}else{if(G.pageY-this.overflowOffset.top<H.scrollSensitivity){this.scrollParent[0].scrollTop=C=this.scrollParent[0].scrollTop-H.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-G.pageX<H.scrollSensitivity){this.scrollParent[0].scrollLeft=C=this.scrollParent[0].scrollLeft+H.scrollSpeed}else{if(G.pageX-this.overflowOffset.left<H.scrollSensitivity){this.scrollParent[0].scrollLeft=C=this.scrollParent[0].scrollLeft-H.scrollSpeed}}}else{if(G.pageY-A(document).scrollTop()<H.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()-H.scrollSpeed)}else{if(A(window).height()-(G.pageY-A(document).scrollTop())<H.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()+H.scrollSpeed)}}if(G.pageX-A(document).scrollLeft()<H.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()-H.scrollSpeed)}else{if(A(window).width()-(G.pageX-A(document).scrollLeft())<H.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()+H.scrollSpeed)}}}if(C!==false&&A.ui.ddmanager&&!H.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,G)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var E=this.items.length-1;E>=0;E--){var F=this.items[E],D=F.item[0],I=this._intersectsWithPointer(F);if(!I){continue}if(F.instance!==this.currentContainer){continue}if(D!=this.currentItem[0]&&this.placeholder[I==1?"next":"prev"]()[0]!=D&&!A.ui.contains(this.placeholder[0],D)&&(this.options.type=="semi-dynamic"?!A.ui.contains(this.element[0],D):true)){this.direction=I==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(F)){this._rearrange(G,F)}else{break}this._trigger("change",G,this._uiHash());break}}this._contactContainers(G);if(A.ui.ddmanager){A.ui.ddmanager.drag(this,G)}this._trigger("sort",G,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(D,E){if(!D){return }if(A.ui.ddmanager&&!this.options.dropBehaviour){A.ui.ddmanager.drop(this,D)}if(this.options.revert){var C=this;var F=C.placeholder.offset();C.reverting=true;A(this.helper).animate({left:F.left-this.offset.parent.left-C.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:F.top-this.offset.parent.top-C.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){C._clear(D)})}else{this._clear(D,E)}return false},cancel:function(){var C=this;if(this.dragging){this._mouseUp({target:null});if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var D=this.containers.length-1;D>=0;D--){this.containers[D]._trigger("deactivate",null,C._uiHash(this));if(this.containers[D].containerCache.over){this.containers[D]._trigger("out",null,C._uiHash(this));this.containers[D].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}A.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){A(this.domPosition.prev).after(this.currentItem)}else{A(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(E){var C=this._getItemsAsjQuery(E&&E.connected);var D=[];E=E||{};A(C).each(function(){var F=(A(E.item||this).attr(E.attribute||"id")||"").match(E.expression||(/(.+)[-=_](.+)/));if(F){D.push((E.key||F[1]+"[]")+"="+(E.key&&E.expression?F[1]:F[2]))}});if(!D.length&&E.key){D.push(E.key+"=")}return D.join("&")},toArray:function(E){var C=this._getItemsAsjQuery(E&&E.connected);var D=[];E=E||{};C.each(function(){D.push(A(E.item||this).attr(E.attribute||"id")||"")});return D},_intersectsWith:function(L){var E=this.positionAbs.left,D=E+this.helperProportions.width,K=this.positionAbs.top,J=K+this.helperProportions.height;var F=L.left,C=F+L.width,M=L.top,I=M+L.height;var N=this.offset.click.top,H=this.offset.click.left;var G=(K+N)>M&&(K+N)<I&&(E+H)>F&&(E+H)<C;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>L[this.floating?"width":"height"])){return G}else{return(F<E+(this.helperProportions.width/2)&&D-(this.helperProportions.width/2)<C&&M<K+(this.helperProportions.height/2)&&J-(this.helperProportions.height/2)<I)}},_intersectsWithPointer:function(E){var F=(this.options.axis==="x")||A.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,E.top,E.height),D=(this.options.axis==="y")||A.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,E.left,E.width),H=F&&D,C=this._getDragVerticalDirection(),G=this._getDragHorizontalDirection();if(!H){return false}return this.floating?(((G&&G=="right")||C=="down")?2:1):(C&&(C=="down"?2:1))},_intersectsWithSides:function(F){var D=A.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,F.top+(F.height/2),F.height),E=A.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,F.left+(F.width/2),F.width),C=this._getDragVerticalDirection(),G=this._getDragHorizontalDirection();if(this.floating&&G){return((G=="right"&&E)||(G=="left"&&!E))}else{return C&&((C=="down"&&D)||(C=="up"&&!D))}},_getDragVerticalDirection:function(){var C=this.positionAbs.top-this.lastPositionAbs.top;return C!=0&&(C>0?"down":"up")},_getDragHorizontalDirection:function(){var C=this.positionAbs.left-this.lastPositionAbs.left;return C!=0&&(C>0?"right":"left")},refresh:function(C){this._refreshItems(C);this.refreshPositions();return this},_connectWith:function(){var C=this.options;return C.connectWith.constructor==String?[C.connectWith]:C.connectWith},_getItemsAsjQuery:function(C){var K=this;var H=[];var F=[];var I=this._connectWith();if(I&&C){for(var E=I.length-1;E>=0;E--){var J=A(I[E]);for(var D=J.length-1;D>=0;D--){var G=A.data(J[D],this.widgetName);if(G&&G!=this&&!G.options.disabled){F.push([A.isFunction(G.options.items)?G.options.items.call(G.element):A(G.options.items,G.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),G])}}}}F.push([A.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):A(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var E=F.length-1;E>=0;E--){F[E][0].each(function(){H.push(this)})}return A(H)},_removeCurrentsFromItems:function(){var E=this.currentItem.find(":data("+this.widgetName+"-item)");for(var D=0;D<this.items.length;D++){for(var C=0;C<E.length;C++){if(E[C]==this.items[D].item[0]){this.items.splice(D,1)}}}},_refreshItems:function(C){this.items=[];this.containers=[this];var I=this.items;var O=this;var G=[[A.isFunction(this.options.items)?this.options.items.call(this.element[0],C,{item:this.currentItem}):A(this.options.items,this.element),this]];var K=this._connectWith();if(K&&this.ready){for(var F=K.length-1;F>=0;F--){var L=A(K[F]);for(var E=L.length-1;E>=0;E--){var H=A.data(L[E],this.widgetName);if(H&&H!=this&&!H.options.disabled){G.push([A.isFunction(H.options.items)?H.options.items.call(H.element[0],C,{item:this.currentItem}):A(H.options.items,H.element),H]);this.containers.push(H)}}}}for(var F=G.length-1;F>=0;F--){var J=G[F][1];var D=G[F][0];for(var E=0,M=D.length;E<M;E++){var N=A(D[E]);N.data(this.widgetName+"-item",J);I.push({item:N,instance:J,width:0,height:0,left:0,top:0})}}},refreshPositions:function(C){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var E=this.items.length-1;E>=0;E--){var F=this.items[E];if(F.instance!=this.currentContainer&&this.currentContainer&&F.item[0]!=this.currentItem[0]){continue}var D=this.options.toleranceElement?A(this.options.toleranceElement,F.item):F.item;if(!C){F.width=D.outerWidth();F.height=D.outerHeight()}var G=D.offset();F.left=G.left;F.top=G.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var E=this.containers.length-1;E>=0;E--){var G=this.containers[E].element.offset();this.containers[E].containerCache.left=G.left;this.containers[E].containerCache.top=G.top;this.containers[E].containerCache.width=this.containers[E].element.outerWidth();this.containers[E].containerCache.height=this.containers[E].element.outerHeight()}}return this},_createPlaceholder:function(E){var C=E||this,F=C.options;if(!F.placeholder||F.placeholder.constructor==String){var D=F.placeholder;F.placeholder={element:function(){var G=A(document.createElement(C.currentItem[0].nodeName)).addClass(D||C.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!D){G.style.visibility="hidden"}return G},update:function(G,H){if(D&&!F.forcePlaceholderSize){return }if(!H.height()){H.height(C.currentItem.innerHeight()-parseInt(C.currentItem.css("paddingTop")||0,10)-parseInt(C.currentItem.css("paddingBottom")||0,10))}if(!H.width()){H.width(C.currentItem.innerWidth()-parseInt(C.currentItem.css("paddingLeft")||0,10)-parseInt(C.currentItem.css("paddingRight")||0,10))}}}}C.placeholder=A(F.placeholder.element.call(C.element,C.currentItem));C.currentItem.after(C.placeholder);F.placeholder.update(C,C.placeholder)},_contactContainers:function(C){var E=null,J=null;for(var G=this.containers.length-1;G>=0;G--){if(A.ui.contains(this.currentItem[0],this.containers[G].element[0])){continue}if(this._intersectsWith(this.containers[G].containerCache)){if(E&&A.ui.contains(this.containers[G].element[0],E.element[0])){continue}E=this.containers[G];J=G}else{if(this.containers[G].containerCache.over){this.containers[G]._trigger("out",C,this._uiHash(this));this.containers[G].containerCache.over=0}}}if(!E){return }if(this.containers.length===1){this.containers[J]._trigger("over",C,this._uiHash(this));this.containers[J].containerCache.over=1}else{if(this.currentContainer!=this.containers[J]){var I=10000;var H=null;var D=this.positionAbs[this.containers[J].floating?"left":"top"];for(var F=this.items.length-1;F>=0;F--){if(!A.ui.contains(this.containers[J].element[0],this.items[F].item[0])){continue}var K=this.containers[J].floating?this.items[F].item.offset().left:this.items[F].item.offset().top;if(Math.abs(K-D)<I){I=Math.abs(K-D);H=this.items[F];this.direction=(K-D>0)?"down":"up"}}if(!H&&!this.options.dropOnEmpty){return }this.currentContainer=this.containers[J];H?this._rearrange(C,H,null,true):this._rearrange(C,null,this.containers[J].element,true);this._trigger("change",C,this._uiHash());this.containers[J]._trigger("change",C,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[J]._trigger("over",C,this._uiHash(this));this.containers[J].containerCache.over=1}}},_createHelper:function(D){var E=this.options;var C=A.isFunction(E.helper)?A(E.helper.apply(this.element[0],[D,this.currentItem])):(E.helper=="clone"?this.currentItem.clone():this.currentItem);if(!C.parents("body").length){A(E.appendTo!="parent"?E.appendTo:this.currentItem[0].parentNode)[0].appendChild(C[0])}if(C[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(C[0].style.width==""||E.forceHelperSize){C.width(this.currentItem.width())}if(C[0].style.height==""||E.forceHelperSize){C.height(this.currentItem.height())}return C},_adjustOffsetFromHelper:function(C){if(typeof C=="string"){C=C.split(" ")}if(A.isArray(C)){C={left:+C[0],top:+C[1]||0}}if("left" in C){this.offset.click.left=C.left+this.margins.left}if("right" in C){this.offset.click.left=this.helperProportions.width-C.right+this.margins.left}if("top" in C){this.offset.click.top=C.top+this.margins.top}if("bottom" in C){this.offset.click.top=this.helperProportions.height-C.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var C=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0])){C.left+=this.scrollParent.scrollLeft();C.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){C={top:0,left:0}}return{top:C.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:C.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var C=this.currentItem.position();return{top:C.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:C.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var F=this.options;if(F.containment=="parent"){F.containment=this.helper[0].parentNode}if(F.containment=="document"||F.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,A(F.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(A(F.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(F.containment)){var D=A(F.containment)[0];var E=A(F.containment).offset();var C=(A(D).css("overflow")!="hidden");this.containment=[E.left+(parseInt(A(D).css("borderLeftWidth"),10)||0)+(parseInt(A(D).css("paddingLeft"),10)||0)-this.margins.left,E.top+(parseInt(A(D).css("borderTopWidth"),10)||0)+(parseInt(A(D).css("paddingTop"),10)||0)-this.margins.top,E.left+(C?Math.max(D.scrollWidth,D.offsetWidth):D.offsetWidth)-(parseInt(A(D).css("borderLeftWidth"),10)||0)-(parseInt(A(D).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,E.top+(C?Math.max(D.scrollHeight,D.offsetHeight):D.offsetHeight)-(parseInt(A(D).css("borderTopWidth"),10)||0)-(parseInt(A(D).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(F,H){if(!H){H=this.position}var D=F=="absolute"?1:-1;var E=this.options,C=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,G=(/(html|body)/i).test(C[0].tagName);return{top:(H.top+this.offset.relative.top*D+this.offset.parent.top*D-(A.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(G?0:C.scrollTop()))*D)),left:(H.left+this.offset.relative.left*D+this.offset.parent.left*D-(A.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():G?0:C.scrollLeft())*D))}},_generatePosition:function(F){var I=this.options,C=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,J=(/(html|body)/i).test(C[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var E=F.pageX;var D=F.pageY;if(this.originalPosition){if(this.containment){if(F.pageX-this.offset.click.left<this.containment[0]){E=this.containment[0]+this.offset.click.left}if(F.pageY-this.offset.click.top<this.containment[1]){D=this.containment[1]+this.offset.click.top}if(F.pageX-this.offset.click.left>this.containment[2]){E=this.containment[2]+this.offset.click.left}if(F.pageY-this.offset.click.top>this.containment[3]){D=this.containment[3]+this.offset.click.top}}if(I.grid){var H=this.originalPageY+Math.round((D-this.originalPageY)/I.grid[1])*I.grid[1];D=this.containment?(!(H-this.offset.click.top<this.containment[1]||H-this.offset.click.top>this.containment[3])?H:(!(H-this.offset.click.top<this.containment[1])?H-I.grid[1]:H+I.grid[1])):H;var G=this.originalPageX+Math.round((E-this.originalPageX)/I.grid[0])*I.grid[0];E=this.containment?(!(G-this.offset.click.left<this.containment[0]||G-this.offset.click.left>this.containment[2])?G:(!(G-this.offset.click.left<this.containment[0])?G-I.grid[0]:G+I.grid[0])):G}}return{top:(D-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(A.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(J?0:C.scrollTop())))),left:(E-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(A.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():J?0:C.scrollLeft())))}},_rearrange:function(H,G,D,F){D?D[0].appendChild(this.placeholder[0]):G.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?G.item[0]:G.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var E=this,C=this.counter;window.setTimeout(function(){if(C==E.counter){E.refreshPositions(!F)}},0)},_clear:function(E,F){this.reverting=false;var G=[],C=this;if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var D in this._storedCSS){if(this._storedCSS[D]=="auto"||this._storedCSS[D]=="static"){this._storedCSS[D]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!F){G.push(function(H){this._trigger("receive",H,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!F){G.push(function(H){this._trigger("update",H,this._uiHash())})}if(this!==this.currentContainer){if(!F){G.push(function(H){this._trigger("remove",H,this._uiHash())});G.push((function(H){return function(I){H._trigger("receive",I,this._uiHash(this))}}).call(this,this.currentContainer));G.push((function(H){return function(I){H._trigger("update",I,this._uiHash(this))}}).call(this,this.currentContainer))}}for(var D=this.containers.length-1;D>=0;D--){if(!F){G.push((function(H){return function(I){H._trigger("deactivate",I,this._uiHash(this))}}).call(this,this.containers[D]))}if(this.containers[D].containerCache.over){G.push((function(H){return function(I){H._trigger("out",I,this._uiHash(this))}}).call(this,this.containers[D]));this.containers[D].containerCache.over=0}}if(this._storedCursor){A("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!F){this._trigger("beforeStop",E,this._uiHash());for(var D=0;D<G.length;D++){G[D].call(this,E)}this._trigger("stop",E,this._uiHash())}this.fromOutside=false;return false}if(!F){this._trigger("beforeStop",E,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!F){for(var D=0;D<G.length;D++){G[D].call(this,E)}this._trigger("stop",E,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(A.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(D){var C=D||this;return{helper:C.helper,placeholder:C.placeholder||A([]),position:C.position,originalPosition:C.originalPosition,offset:C.positionAbs,item:C.currentItem,sender:D?D.element:null}}});A.extend(A.ui.sortable,{version:"1.8.24"})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js-vendor/jquery/plugins/jquery.form.js' */
/*
 * jQuery Form Plugin
 * version: 2.67 (12-MAR-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(B){B.fn.ajaxSubmit=function(Q){if(!this.length){A("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof Q=="function"){Q={success:Q}}var H=this.attr("action");var D=(typeof H==="string")?B.trim(H):"";if(D){D=(D.match(/^([^#]+)/)||[])[1]}D=D||window.location.href||"";Q=B.extend(true,{url:D,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},Q);var R={};this.trigger("form-pre-serialize",[this,Q,R]);if(R.veto){A("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(Q.beforeSerialize&&Q.beforeSerialize(this,Q)===false){A("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var F,N,L=this.formToArray(Q.semantic);if(Q.data){Q.extraData=Q.data;for(F in Q.data){if(Q.data[F] instanceof Array){for(var I in Q.data[F]){L.push({name:F,value:Q.data[F][I]})}}else{N=Q.data[F];N=B.isFunction(N)?N():N;L.push({name:F,value:N})}}}if(Q.beforeSubmit&&Q.beforeSubmit(L,this,Q)===false){A("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[L,this,Q,R]);if(R.veto){A("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var C=B.param(L);if(Q.type.toUpperCase()=="GET"){Q.url+=(Q.url.indexOf("?")>=0?"&":"?")+C;Q.data=null}else{Q.data=C}var P=this,K=[];if(Q.resetForm){K.push(function(){P.resetForm()})}if(Q.clearForm){K.push(function(){P.clearForm()})}if(!Q.dataType&&Q.target){var O=Q.success||function(){};K.push(function(T){var S=Q.replaceTarget?"replaceWith":"html";B(Q.target)[S](T).each(O,arguments)})}else{if(Q.success){K.push(Q.success)}}Q.success=function(W,T,X){var V=Q.context||Q;for(var U=0,S=K.length;U<S;U++){K[U].apply(V,[W,T,X||P,P])}};var G=B("input:file",this).length>0;var E="multipart/form-data";var J=(P.attr("enctype")==E||P.attr("encoding")==E);if(Q.iframe!==false&&(G||Q.iframe||J)){if(Q.closeKeepAlive){B.get(Q.closeKeepAlive,M)}else{M()}}else{B.ajax(Q)}this.trigger("form-submit-notify",[this,Q]);return this;function M(){var U=P[0];if(B(":input[name=submit],:input[id=submit]",U).length){alert('Error: Form elements must not have name or id of "submit".');return }var a=B.extend(true,{},B.ajaxSettings,Q);a.context=a.context||a;var d="jqFormIO"+(new Date().getTime()),Y="_"+d;var V=B('<iframe id="'+d+'" name="'+d+'" src="'+a.iframeSrc+'" />');var Z=V[0];V.css({position:"absolute",top:"-1000px",left:"-1000px"});var W={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){A("aborting upload...");var g="aborted";this.aborted=1;V.attr("src",a.iframeSrc);W.error=g;a.error&&a.error.call(a.context,W,"error",g);i&&B.event.trigger("ajaxError",[W,a,g]);a.complete&&a.complete.call(a.context,W,"error")}};var i=a.global;if(i&&!B.active++){B.event.trigger("ajaxStart")}if(i){B.event.trigger("ajaxSend",[W,a])}if(a.beforeSend&&a.beforeSend.call(a.context,W,a)===false){if(a.global){B.active--}return }if(W.aborted){return }var h=0;var X=U.clk;if(X){var e=X.name;if(e&&!X.disabled){a.extraData=a.extraData||{};a.extraData[e]=X.value;if(X.type=="image"){a.extraData[e+".x"]=U.clk_x;a.extraData[e+".y"]=U.clk_y}}}function f(){var o=P.attr("target"),g=P.attr("action");U.setAttribute("target",d);if(U.getAttribute("method")!="POST"){U.setAttribute("method","POST")}if(U.getAttribute("action")!=a.url){U.setAttribute("action",a.url)}if(!a.skipEncodingOverride){P.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(a.timeout){setTimeout(function(){h=true;c()},a.timeout)}var m=[];try{if(a.extraData){for(var p in a.extraData){m.push(B('<input type="hidden" name="'+p+'" value="'+a.extraData[p]+'" />').appendTo(U)[0])}}V.appendTo("body");Z.attachEvent?Z.attachEvent("onload",c):Z.addEventListener("load",c,false);U.submit()}finally{U.setAttribute("action",g);if(o){U.setAttribute("target",o)}else{P.removeAttr("target")}B(m).remove()}}if(a.forceSync){f()}else{setTimeout(f,10)}var k,l,j=50;function c(){if(W.aborted){return }var r=Z.contentWindow?Z.contentWindow.document:Z.contentDocument?Z.contentDocument:Z.document;if(!r||r.location.href==a.iframeSrc){return }Z.detachEvent?Z.detachEvent("onload",c):Z.removeEventListener("load",c,false);var n=true;try{if(h){throw"timeout"}var s=a.dataType=="xml"||r.XMLDocument||B.isXMLDoc(r);A("isXml="+s);if(!s&&window.opera&&(r.body==null||r.body.innerHTML=="")){if(--j){A("requeing onLoad callback, DOM not available");setTimeout(c,250);return }}W.responseText=r.body?r.body.innerHTML:r.documentElement?r.documentElement.innerHTML:null;W.responseXML=r.XMLDocument?r.XMLDocument:r;W.getResponseHeader=function(u){var t={"content-type":a.dataType};return t[u]};var q=/(json|script)/.test(a.dataType);if(q||a.textarea){var m=r.getElementsByTagName("textarea")[0];if(m){W.responseText=m.value}else{if(q){var p=r.getElementsByTagName("pre")[0];var g=r.getElementsByTagName("body")[0];if(p){W.responseText=p.textContent}else{if(g){W.responseText=g.innerHTML}}}}}else{if(a.dataType=="xml"&&!W.responseXML&&W.responseText!=null){W.responseXML=b(W.responseText)}}k=S(W,a.dataType,a)}catch(o){A("error caught:",o);n=false;W.error=o;a.error&&a.error.call(a.context,W,"error",o);i&&B.event.trigger("ajaxError",[W,a,o])}if(W.aborted){A("upload aborted");n=false}if(n){a.success&&a.success.call(a.context,k,"success",W);i&&B.event.trigger("ajaxSuccess",[W,a])}i&&B.event.trigger("ajaxComplete",[W,a]);if(i&&!--B.active){B.event.trigger("ajaxStop")}a.complete&&a.complete.call(a.context,W,n?"success":"error");setTimeout(function(){V.removeData("form-plugin-onload");V.remove();W.responseXML=null},100)}var b=B.parseXML||function(g,m){if(window.ActiveXObject){m=new ActiveXObject("Microsoft.XMLDOM");m.async="false";m.loadXML(g)}else{m=(new DOMParser()).parseFromString(g,"text/xml")}return(m&&m.documentElement&&m.documentElement.nodeName!="parsererror")?m:null};var T=B.parseJSON||function(g){return window["eval"]("("+g+")")};var S=function(q,o,n){var m=q.getResponseHeader("content-type")||"",g=o==="xml"||!o&&m.indexOf("xml")>=0,p=g?q.responseXML:q.responseText;if(g&&p.documentElement.nodeName==="parsererror"){B.error&&B.error("parsererror")}if(n&&n.dataFilter){p=n.dataFilter(p,o)}if(typeof p==="string"){if(o==="json"||!o&&m.indexOf("json")>=0){p=T(p)}else{if(o==="script"||!o&&m.indexOf("javascript")>=0){B.globalEval(p)}}}return p}}};B.fn.ajaxForm=function(C){if(this.length===0){var D={s:this.selector,c:this.context};if(!B.isReady&&D.s){A("DOM not ready, queuing ajaxForm");B(function(){B(D.s,D.c).ajaxForm(C)});return this}A("terminating; zero elements found by selector"+(B.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(E){if(!E.isDefaultPrevented()){E.preventDefault();B(this).ajaxSubmit(C)}}).bind("click.form-plugin",function(I){var H=I.target;var F=B(H);if(!(F.is(":submit,input:image"))){var E=F.closest(":submit");if(E.length==0){return }H=E[0]}var G=this;G.clk=H;if(H.type=="image"){if(I.offsetX!=undefined){G.clk_x=I.offsetX;G.clk_y=I.offsetY}else{if(typeof B.fn.offset=="function"){var J=F.offset();G.clk_x=I.pageX-J.left;G.clk_y=I.pageY-J.top}else{G.clk_x=I.pageX-H.offsetLeft;G.clk_y=I.pageY-H.offsetTop}}}setTimeout(function(){G.clk=G.clk_x=G.clk_y=null},100)})};B.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};B.fn.formToArray=function(N){var M=[];if(this.length===0){return M}var D=this[0];var G=N?D.getElementsByTagName("*"):D.elements;if(!G){return M}var I,H,F,O,E,K,C;for(I=0,K=G.length;I<K;I++){E=G[I];F=E.name;if(!F){continue}if(N&&D.clk&&E.type=="image"){if(!E.disabled&&D.clk==E){M.push({name:F,value:B(E).val()});M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}continue}O=B.fieldValue(E,true);if(O&&O.constructor==Array){for(H=0,C=O.length;H<C;H++){M.push({name:F,value:O[H]})}}else{if(O!==null&&typeof O!="undefined"){M.push({name:F,value:O})}}}if(!N&&D.clk){var J=B(D.clk),L=J[0];F=L.name;if(F&&!L.disabled&&L.type=="image"){M.push({name:F,value:J.val()});M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}}return M};B.fn.formSerialize=function(C){return B.param(this.formToArray(C))};B.fn.fieldSerialize=function(D){var C=[];this.each(function(){var H=this.name;if(!H){return }var F=B.fieldValue(this,D);if(F&&F.constructor==Array){for(var G=0,E=F.length;G<E;G++){C.push({name:H,value:F[G]})}}else{if(F!==null&&typeof F!="undefined"){C.push({name:this.name,value:F})}}});return B.param(C)};B.fn.fieldValue=function(H){for(var G=[],E=0,C=this.length;E<C;E++){var F=this[E];var D=B.fieldValue(F,H);if(D===null||typeof D=="undefined"||(D.constructor==Array&&!D.length)){continue}D.constructor==Array?B.merge(G,D):G.push(D)}return G};B.fieldValue=function(C,I){var E=C.name,N=C.type,O=C.tagName.toLowerCase();if(I===undefined){I=true}if(I&&(!E||C.disabled||N=="reset"||N=="button"||(N=="checkbox"||N=="radio")&&!C.checked||(N=="submit"||N=="image")&&C.form&&C.form.clk!=C||O=="select"&&C.selectedIndex==-1)){return null}if(O=="select"){var J=C.selectedIndex;if(J<0){return null}var L=[],D=C.options;var G=(N=="select-one");var K=(G?J+1:D.length);for(var F=(G?J:0);F<K;F++){var H=D[F];if(H.selected){var M=H.value;if(!M){M=(H.attributes&&H.attributes.value&&!(H.attributes.value.specified))?H.text:H.value}if(G){return M}L.push(M)}}return L}return B(C).val()};B.fn.clearForm=function(){return this.each(function(){B("input,select,textarea",this).clearFields()})};B.fn.clearFields=B.fn.clearInputs=function(){return this.each(function(){var D=this.type,C=this.tagName.toLowerCase();if(D=="text"||D=="password"||C=="textarea"){this.value=""}else{if(D=="checkbox"||D=="radio"){this.checked=false}else{if(C=="select"){this.selectedIndex=-1}}}})};B.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};B.fn.enable=function(C){if(C===undefined){C=true}return this.each(function(){this.disabled=!C})};B.fn.selected=function(C){if(C===undefined){C=true}return this.each(function(){var D=this.type;if(D=="checkbox"||D=="radio"){this.checked=C}else{if(this.tagName.toLowerCase()=="option"){var E=B(this).parent("select");if(C&&E[0]&&E[0].type=="select-one"){E.find("option").selected(false)}this.selected=C}}})};function A(){if(B.fn.ajaxSubmit.debug){var C="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log){window.console.log(C)}else{if(window.opera&&window.opera.postError){window.opera.postError(C)}}}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/jquery/jquery.moveto.js' */
jQuery.fn.moveTo=function(C){var G={transition:false,scrollOffset:35};var E=jQuery.extend(G,C),A=this,D=A.offset().top,B;if((jQuery(window).scrollTop()+jQuery(window).height()-this.outerHeight()<D||jQuery(window).scrollTop()+E.scrollOffset>D)&&jQuery(window).height()>E.scrollOffset){if(jQuery(window).scrollTop()+E.scrollOffset>D){B=D-(jQuery(window).height()-this.outerHeight())+E.scrollOffset}else{B=D-E.scrollOffset}if(!jQuery.fn.moveTo.animating&&E.transition){jQuery(document).trigger("moveToStarted",this);jQuery.fn.moveTo.animating=true;jQuery("html,body").animate({scrollTop:B},1000,function(){jQuery(document).trigger("moveToFinished",A);delete jQuery.fn.moveTo.animating});return this}else{var F=jQuery("html, body");if(F.is(":animated")){F.stop();delete jQuery.fn.moveTo.animating}jQuery(document).trigger("moveToStarted");jQuery(window).scrollTop(B);setTimeout(function(){jQuery(document).trigger("moveToFinished",A)},100);return this}}jQuery(document).trigger("moveToFinished",this);return this};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/event.js' */
AJS.bind=function(A,C,B){try{if(typeof B==="function"){return AJS.$(window).bind(A,C,B)}else{return AJS.$(window).bind(A,C)}}catch(D){AJS.log("error while binding: "+D.message)}};AJS.unbind=function(A,B){try{return AJS.$(window).unbind(A,B)}catch(C){AJS.log("error while unbinding: "+C.message)}};AJS.trigger=function(A,C){try{return AJS.$(window).trigger(A,C)}catch(B){AJS.log("error while triggering: "+B.message)}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/cookie.js' */
(function(){var B="AJS.conglomerate.cookie",F=/(\\|^"|"$)/g,G=/\|\|+/g,I=/"/g,C=/[.*+?|^$()[\]{\\]/g;function E(L,O){O=O||"";var N=new RegExp(D(L)+"=([^|]+)"),M=O.match(N);return M&&M[1]}function J(L,N,P){var M=new RegExp("(\\s|\\|)*\\b"+D(L)+"=[^|]*[|]*");P=P||"";P=P.replace(M,"|");if(N!==""){var O=L+"="+N;if(P.length+O.length<4020){P+="|"+O}}return P.replace(G,"|")}function H(L){return L.replace(F,"")}function K(L){var N=new RegExp("\\b"+D(L)+"=((?:[^\\\\;]+|\\\\.)*)(?:;|$)"),M=document.cookie.match(N);return M&&H(M[1])}function A(M,O,Q){var N="",P,L='"'+O.replace(I,'\\"')+'"';if(Q){P=new Date();P.setTime(+P+Q*24*60*60*1000);N="; expires="+P.toGMTString()}document.cookie=M+"="+L+N+";path=/"}function D(L){return L.replace(C,"\\$&")}AJS.Cookie={save:function(M,N,L){var O=K(B);O=J(M,N,O);A(B,O,L||365)},read:function(M,L){var O=K(B);var N=E(M,O);if(N!=null){return N}return L},erase:function(L){this.save(L,"")}};AJS.deprecate.prop(AJS.Cookie,"save",{alternativeName:"AJS.cookie"})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/inline-dialog.js' */
(function(C){AJS.InlineDialog=function(g,S,W,U){U=U||[];if(U.hasOwnProperty("getArrowAttributes")){H()}if(U.hasOwnProperty("getArrowPath")){E();if(U.hasOwnProperty("gravity")){B()}}if(U.hasOwnProperty("onTop")){J();if(U.onTop&&U.gravity===undefined){U.gravity="s"}}if(typeof S==="undefined"){S=String(Math.random()).replace(".","");if(C("#inline-dialog-"+S+", #arrow-"+S+", #inline-dialog-shim-"+S).length){throw"GENERATED_IDENTIFIER_NOT_UNIQUE"}}var e=C.extend(false,AJS.InlineDialog.opts,U);if(e.gravity==="w"){e.offsetX=U.offsetX===undefined?10:U.offsetX;e.offsetY=U.offsetY===undefined?0:U.offsetY}var a=function(){return window.Raphael&&!!window.Raphael.version&&U&&(U.getArrowPath||U.getArrowAttributes)};var O;var V;var p;var Z=false;var f=false;var n=false;var o;var c;var L=C('<div id="inline-dialog-'+S+'" class="aui-inline-dialog"><div class="aui-inline-dialog-contents contents"></div><div id="arrow-'+S+'" class="aui-inline-dialog-arrow arrow"></div></div>');var R=C("#arrow-"+S,L);var l=L.find(".contents");if(!a()){L.find(".aui-inline-dialog-arrow").addClass("aui-css-arrow")}if(!e.displayShadow){l.addClass("aui-inline-dialog-no-shadow")}if(e.autoWidth){l.addClass("aui-inline-dialog-auto-width")}else{l.width(e.width)}l.on({mouseenter:function(){clearTimeout(V);L.unbind("mouseenter")},mouseleave:function(){j()}});var i=function(){if(!O){O={popup:L,hide:function(){j(0)},id:S,show:function(){d()},persistent:e.persistent?true:false,reset:function(){function x(z,y){z.css(y.popupCss);if(a()){if(y.gravity==="s"){y.arrowCss.top-=C.browser.msie?10:9}if(!z.arrowCanvas){z.arrowCanvas=Raphael("arrow-"+S,16,16)}var AA=e.getArrowPath,AB=C.isFunction(AA)?AA(y):AA;z.arrowCanvas.path(AB).attr(e.getArrowAttributes())}else{R.removeClass("aui-bottom-arrow aui-left-arrow aui-right-arrow");if(y.gravity==="s"&&!R.hasClass("aui-bottom-arrow")){R.addClass("aui-bottom-arrow")}else{if(y.gravity==="n"){}else{if(y.gravity==="w"){R.addClass("aui-left-arrow")}else{if(y.gravity==="e"){R.addClass("aui-right-arrow")}}}}}R.css(y.arrowCss)}var u=AJS.$(window).height();var v=Math.round(u*0.75);L.children(".aui-inline-dialog-contents").css("max-height",v);var t=e.calculatePositions(L,c,o,e);if(t.hasOwnProperty("displayAbove")){F();t.gravity=t.displayAbove?"s":"n"}x(L,t);L.fadeIn(e.fadeTime,function(){});if(C.browser.msie&&~~(C.browser.version)<10){var w=C("#inline-dialog-shim-"+S);if(!w.length){C(L).prepend(C('<iframe class = "inline-dialog-shim" id="inline-dialog-shim-'+S+'" frameBorder="0" src="javascript:false;"></iframe>'))}w.css({width:l.outerWidth(),height:l.outerHeight()})}}}}return O};var d=function(){if(L.is(":visible")){return }p=setTimeout(function(){if(!n||!f){return }e.addActiveClass&&C(g).addClass("active");Z=true;if(!e.persistent){m()}AJS.InlineDialog.current=i();C(document).trigger("showLayer",["inlineDialog",i()]);i().reset()},e.showDelay)};var j=function(t){if(typeof t=="undefined"&&e.persistent){return }if(typeof L.get(0)._datePickerPopup!=="undefined"){return }f=false;if(Z&&e.preHideCallback.call(L[0].popup)){t=(t==null)?e.hideDelay:t;clearTimeout(V);clearTimeout(p);if(t!=null){V=setTimeout(function(){Q();e.addActiveClass&&C(g).removeClass("active");L.fadeOut(e.fadeTime,function(){e.hideCallback.call(L[0].popup)});if(L.arrowCanvas){L.arrowCanvas.remove();L.arrowCanvas=null}Z=false;f=false;C(document).trigger("hideLayer",["inlineDialog",i()]);AJS.InlineDialog.current=null;if(!e.cacheContent){n=false;b=false}},t)}}};var k=function(w,u){var t=C(u);e.upfrontCallback.call({popup:L,hide:function(){j(0)},id:S,show:function(){d()}});L.each(function(){if(typeof this.popup!="undefined"){this.popup.hide()}});if(e.closeOthers){C(".aui-inline-dialog:not(aui-inline-dialog2)").each(function(){!this.popup.persistent&&this.popup.hide()})}c={target:t};if(!w){o={x:t.offset().left,y:t.offset().top}}else{o={x:w.pageX,y:w.pageY}}if(!Z){clearTimeout(p)}f=true;var v=function(){b=false;n=true;e.initCallback.call({popup:L,hide:function(){j(0)},id:S,show:function(){d()}});d()};if(!b){b=true;if(C.isFunction(W)){W(l,u,v)}else{C.get(W,function(y,x,z){l.html(e.responseHandler(y,x,z));n=true;e.initCallback.call({popup:L,hide:function(){j(0)},id:S,show:function(){d()}});d()})}}clearTimeout(V);if(!Z){d()}return false};L[0].popup=i();var b=false;var Y=false;var X=function(){if(!Y){C(e.container).append(L);Y=true}};var T=C(g);if(e.onHover){if(e.useLiveEvents){if(T.selector){C(document).on("mouseenter",T.selector,function(t){X();k(t,this)}).on("mouseleave",T.selector,function(){j()})}else{AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.")}}else{T.on({mouseenter:function(t){X();k(t,this)},mouseleave:function(){j()}})}}else{if(!e.noBind){if(e.useLiveEvents){if(T.selector){C(document).on("click",T.selector,function(t){X();if(r()){L.hide()}else{k(t,this)}return false}).on("mouseleave",T.selector,function(){j()})}else{AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.")}}else{T.on("click",function(t){X();if(r()){L.hide()}else{k(t,this)}return false}).on("mouseleave",function(){j()})}}}var r=function(){return Z&&e.closeOnTriggerClick};var m=function(){P();K()};var Q=function(){h();s()};var N=false;var M=S+".inline-dialog-check";var P=function(){if(!N){C("body").bind("click."+M,function(u){var t=C(u.target);if(t.closest("#inline-dialog-"+S+" .contents").length===0){j(0)}});N=true}};var h=function(){if(N){C("body").unbind("click."+M)}N=false};var q=function(t){if(t.keyCode===27){j(0)}};var K=function(){C(document).on("keydown",q)};var s=function(){C(document).off("keydown",q)};L.show=function(u,t){if(u){u.stopPropagation()}X();if(e.noBind&&!(g&&g.length)){k(u,t===undefined?u.target:t)}else{k(u,g)}};L.hide=function(){j(0)};L.refresh=function(){if(Z){i().reset()}};L.getOptions=function(){return e};return L};function A(L){var K=C(L);var M=C.extend({left:0,top:0},K.offset());return{left:M.left,top:M.top,width:K.outerWidth(),height:K.outerHeight()}}function G(M,O,Y,K){var R=AJS.$.isFunction(K.offsetX)?K.offsetX(M,O,Y,K):K.offsetX;var Q=AJS.$.isFunction(K.offsetY)?K.offsetY(M,O,Y,K):K.offsetY;var V=AJS.$.isFunction(K.arrowOffsetX)?K.arrowOffsetX(M,O,Y,K):K.arrowOffsetX;var U=AJS.$.isFunction(K.arrowOffsetY)?K.arrowOffsetY(M,O,Y,K):K.arrowOffsetY;var X=K.container.toLowerCase()!=="body";var L=AJS.$(K.container);var T=X?AJS.$(K.container).parent():AJS.$(window);var W=X?L.offset():{left:0,top:0};var P=X?T.offset():{left:0,top:0};var N=O.target;var Z=N.offset();var S=N[0].getBBox&&N[0].getBBox();return{screenPadding:10,arrowMargin:5,window:{top:P.top,left:P.left,scrollTop:T.scrollTop(),scrollLeft:T.scrollLeft(),width:T.width(),height:T.height()},scrollContainer:{width:L.width(),height:L.height()},trigger:{top:Z.top-W.top,left:Z.left-W.left,width:S?S.width:N.outerWidth(),height:S?S.height:N.outerHeight()},dialog:{width:M.width(),height:M.height(),offset:{top:Q,left:R}},arrow:{height:M.find(".arrow").outerHeight(),offset:{top:U,left:V}}}}function D(K,U,l,W){var S=G(K,U,l,W);var O=S.screenPadding;var P=S.window;var Y=S.trigger;var i=S.dialog;var N=S.arrow;var e=S.scrollContainer;var j={top:Y.top-P.scrollTop,left:Y.left-P.scrollLeft};var f=Math.floor(Y.height/2);var a=Math.floor(i.height/2);var Z=Math.floor(N.height/2);var h=j.left-i.offset.left-O;var m=e.width-j.left-Y.width-i.offset.left-O;var g=h>=i.width;var M=m>=i.width;var Q=!M&&g?"e":"w";var T=j.top+f-Z;var V=P.height-T-N.height;O=Math.min(O,T-S.arrowMargin);O=Math.min(O,V-S.arrowMargin);var L=j.top+f;var c=Math.max(L-O,0);var k=Math.max(P.height-L-O,0);var d=a-i.offset.top>c;var R=a+i.offset.top>k;var b;var X;if(d){b={top:P.scrollTop+O,left:Q==="w"?Y.left+Y.width+i.offset.left:Y.left-i.width-i.offset.left};X={top:(Y.top+f)-(b.top+Z)}}else{if(R){b={top:P.scrollTop+P.height-i.height-O,left:Q==="w"?Y.left+Y.width+i.offset.left:Y.left-i.width-i.offset.left};X={top:(Y.top+f)-(b.top+Z)}}else{b={top:Y.top+f-a+i.offset.top,left:Q==="w"?Y.left+Y.width+i.offset.left:Y.left-i.width-i.offset.left};X={top:a-Z+N.offset.top}}}return{gravity:Q,popupCss:b,arrowCss:X}}function I(L,T,e,X){var c=AJS.$.isFunction(X.offsetX)?X.offsetX(L,T,e,X):X.offsetX;var a=AJS.$.isFunction(X.offsetY)?X.offsetY(L,T,e,X):X.offsetY;var R=AJS.$.isFunction(X.arrowOffsetX)?X.arrowOffsetX(L,T,e,X):X.arrowOffsetX;var Q=AJS.$.isFunction(X.arrowOffsetY)?X.arrowOffsetY(L,T,e,X):X.arrowOffsetY;var K=A(window);var U=A(T.target);var d=A(L);var O=A(L.find(".aui-inline-dialog-arrow"));var N=U.left+U.width/2;var Z=(window.pageYOffset||document.documentElement.scrollTop)+K.height;var P=10;d.top=U.top+U.height+~~a;d.left=U.left+~~c;var W=K.width-(d.left+d.width+P);O.left=N-d.left+~~R;O.top=-(O.height/2);var S=U.top>d.height;var M=(d.top+d.height)<Z;var V=(!M&&S)||(S&&X.gravity==="s");if(V){d.top=U.top-d.height-(O.height/2);O.top=d.height}if(X.isRelativeToMouse){if(W<0){d.right=P;d.left="auto";O.left=e.x-(K.width-d.width)}else{d.left=e.x-20;O.left=e.x-d.left}}else{if(W<0){d.right=P;d.left="auto";var b=K.width-d.right;var Y=b-d.width;O.right="auto";O.left=N-Y-O.width/2}else{if(d.width<=U.width/2){O.left=d.width/2;d.left=N-d.width/2}}}return{gravity:V?"s":"n",displayAbove:V,popupCss:{left:d.left,top:d.top,right:d.right},arrowCss:{left:O.left,top:O.top,right:O.right}}}AJS.InlineDialog.opts={onTop:false,responseHandler:function(L,K,M){return L},closeOthers:true,isRelativeToMouse:false,addActiveClass:true,onHover:false,useLiveEvents:false,noBind:false,fadeTime:100,persistent:false,hideDelay:10000,showDelay:0,width:300,offsetX:0,offsetY:10,arrowOffsetX:0,arrowOffsetY:0,container:"body",cacheContent:true,displayShadow:true,autoWidth:false,gravity:"n",closeOnTriggerClick:false,preHideCallback:function(){return true},hideCallback:function(){},initCallback:function(){},upfrontCallback:function(){},calculatePositions:function(K,N,O,M){M=M||{};var L=M.gravity==="w"?D:I;return L(K,N,O,M)},getArrowPath:function(K){if(K.gravity==="s"){return"M0,8L8,16,16,8"}else{return"M0,8L8,0,16,8"}},getArrowAttributes:function(){return{fill:"#fff",stroke:"#ccc"}}};AJS.InlineDialog=AJS.deprecate.construct(AJS.InlineDialog,"Inline dialog constructor",{alternativeName:"inline dialog 2"});var F=AJS.deprecate.getMessageLogger("displayAbove","[remove version]",{alternativeName:"gravity",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-2197."});var J=AJS.deprecate.getMessageLogger("onTop","[remove version]",{alternativeName:"gravity",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-2197."});var H=AJS.deprecate.getMessageLogger("getArrowAttributes","[remove version]",{extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-1362."});var E=AJS.deprecate.getMessageLogger("getArrowPath","[remove version]",{extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-1362."});var B=AJS.deprecate.getMessageLogger("getArrowPath does not support gravity","[remove version]",{extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-2197."})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/firebug.js' */
AJS.warnAboutFirebug=function(A){};AJS.deprecate.prop(AJS,"warnAboutFirebug");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/forms.js' */
AJS.inlineHelp=function(){AJS.$(".icon-inline-help").click(function(){var A=AJS.$(this).siblings(".field-help");if(A.hasClass("hidden")){A.removeClass("hidden")}else{A.addClass("hidden")}})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/keyCode.js' */
(function(){AJS.keyCode={ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/messages.js' */
(function(D,F){var C=500;var L=5000;var J=100;var A='<div class="aui-message aui-message-{type} {type} {closeable} {shadowed} {fadeout}"><p class="title"><strong>{title}</strong></p>{body}<!-- .aui-message --></div>';function K(M){D.messages[M]=function(O,P){if(!P){P=O;O="#aui-message-bar"}P.closeable=(P.closeable!==false);P.shadowed=(P.shadowed!==false);var N=G(this.template,P,M);B(N,P.insert,O);if(P.closeable){I(N)}if(P.fadeout){H(N,P.delay,P.duration)}return N}}function I(M){F(M||"div.aui-message.closeable").each(function(){var P=F(this),O=P.find(".aui-icon.icon-close");var N=O.length>0?O.first():F('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');P.addClass("closeable");P.append(N);E(P)})}function H(N,M,O){M=(typeof M!=="undefined")?M:L;O=(typeof O!=="undefined")?O:C;F(N||"div.aui-message.fadeout").each(function(){var S=F(this);var U=false;var Q=false;function P(){S.stop(true,false).delay(M).fadeOut(O,function(){S.closeMessage()})}function T(){S.stop(true,false).fadeTo(J,1)}function R(){return !U&&!Q}S.focusin(function(){U=true;T()}).focusout(function(){U=false;if(R()){P()}}).hover(function(){Q=true;T()},function(){Q=false;if(R()){P()}});P()})}D.messages={setup:function(){K("generic");K("error");K("warning");K("info");K("success");K("hint");I();H()},makeCloseable:I,makeFadeout:H,template:A,createMessage:K};function E(M){M.on("click",".aui-icon.icon-close",function(N){F(N.target).closest(".aui-message").closeMessage()}).on("keydown",".aui-icon.icon-close",function(N){if((N.which===AJS.keyCode.ENTER)||(N.which===AJS.keyCode.SPACE)){F(N.target).closest(".aui-message").closeMessage();N.preventDefault()}})}function B(N,M,O){if(M==="prepend"){N.prependTo(O)}else{N.appendTo(O)}}function G(P,N,O){var M=F(AJS.template(P).fill({type:O,closeable:N.closeable?"closeable":"",shadowed:N.shadowed?"shadowed":"",fadeout:N.fadeout?"fadeout":"",title:N.title||"","body:html":N.body||""}).toString());if(N.id){if(/[#\'\"\.\s]/g.test(N.id)){AJS.log("AJS.Messages error: ID rejected, must not include spaces, hashes, dots or quotes.")}else{M.attr("id",N.id)}}return M}F.fn.closeMessage=function(){var M=F(this);if(M.hasClass("aui-message")&&M.hasClass("closeable")){M.stop(true);M.trigger("messageClose",[this]).remove();F(document).trigger("aui-message-close",[this])}};F(function(){D.messages.setup()});AJS.deprecate.prop(D.messages,"makeCloseable",{extraInfo:'Use the "closeable" option in the constructor instead. Docs: https://docs.atlassian.com/aui/latest/docs/messages.html'});AJS.deprecate.prop(D.messages,"createMessage",{extraInfo:"Use the provided convenience methods instead e.g. AJS.messages.generic(). Docs: https://docs.atlassian.com/aui/latest/docs/messages.html"});AJS.deprecate.prop(D.messages,"makeFadeout",{extraInfo:'Use the "fadeout" option in the constructor instead. Docs: https://docs.atlassian.com/aui/latest/docs/messages.html'})})(AJS,AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/tabs.js' */
(function(H){var I=/#.*/;var F="_internal-aui-tabs-";var A='.aui-tabs.horizontal-tabs[data-aui-responsive]:not([data-aui-responsive="false"])';function N(){var P=H(this);AJS._addID(P);P.attr("role","tab");var O=P.attr("href");H(O).attr("aria-labelledby",P.attr("id"));if(P.parent().hasClass("active-tab")){P.attr("aria-selected","true")}else{P.attr("aria-selected","false")}}var J={totalTabsWidth:function(O,Q){var R=this.totalVisibleTabWidth(O);var P=0;Q.find("li").each(function(S,T){P+=parseInt(T.getAttribute("data-aui-tab-width"))});return R+P},totalVisibleTabWidth:function(P){var O=0;P.each(function(Q,R){O+=H(R).outerWidth()});return O},removeResponsiveDropdown:function(P,O){P.remove();O.remove()},createResponsiveDropdownTrigger:function(P,R){var Q='<li class="menu-item aui-tabs-responsive-trigger-item"><a class="aui-dropdown2-trigger aui-tabs-responsive-trigger aui-dropdown2-trigger-arrowless" id="aui-tabs-responsive-trigger-'+R+'" aria-haspopup="true" aria-owns="aui-tabs-responsive-dropdown-'+R+'" href="aui-tabs-responsive-dropdown-'+R+'">...</a></li>';P.append(Q);var O=P.find(".aui-tabs-responsive-trigger-item");return O},createResponsiveDropdown:function(O,R){var P='<div class="aui-dropdown2 aui-style-default aui-tabs-responsive-dropdown" id="aui-tabs-responsive-dropdown-'+R+'"><ul></ul></div>';O.append(P);var Q=O.find("#aui-tabs-responsive-dropdown-"+R);return Q},findNewVisibleTabs:function(R,S,V){function U(W,Y,X){return W+Y<=X}var P=0;for(var Q=0;U(P,V,S)&&Q<R.length;Q++){var T=H(R[Q]);var O=T.outerWidth(true);P+=O}return R.slice(0,Q-1)},processVisibleTabs:function(P,W,R){var O=R.find("a").attr("aria-owns");var U=H("#"+O);var T=this.findNewVisibleTabs(P,W.outerWidth(),R.parent().outerWidth(true));var S=T.length-1;for(var Q=P.length-1;Q>=S;Q--){var V=H(P[Q]);this.moveTabToResponsiveDropdown(V,U,R)}return H(T)},moveTabToResponsiveDropdown:function(Q,R,O){var P=Q.find("a");Q.attr("data-aui-tab-width",Q.outerWidth(true));P.addClass("aui-dropdown2-radio aui-tabs-responsive-item");if(Q.hasClass("active-tab")){P.addClass("aui-dropdown2-checked");O.addClass("active-tab")}R.find("ul").prepend(Q)},processInvisibleTabs:function(S,U,P){function V(W){return W>0}for(var R=0;V(U)&&R<S.length;R++){var T=H(S[R]);var O=parseInt(T.attr("data-aui-tab-width"),10);var Q=O<U;if(Q){this.moveTabOutOfDropdown(T,P)}U-=O}},moveTabOutOfDropdown:function(Q,P){var O=Q.find("a").hasClass("aui-dropdown2-checked");if(O){Q.addClass("active-tab");P.removeClass("active-tab")}Q.children("a").removeClass("aui-dropdown2-radio aui-tabs-responsive-item aui-dropdown2-checked");P.before(Q)}};function L(R,X){var O=H(R);var e=O.find(".tabs-menu").first();var a=e.find("li:not(.aui-tabs-responsive-trigger-item)");var V=e.find(".aui-tabs-responsive-trigger").parent();var W=V.find("a");var T=W.attr("aria-owns");var Z=H(document).find("#"+T).attr("aria-checked",false);var Q=Z.length>0;var c=J.totalTabsWidth(a,Z);var b=c>O.outerWidth();if(!Q&&b){V=J.createResponsiveDropdownTrigger(e,X);Z=J.createResponsiveDropdown(O,X)}W.attr("aria-owns","aui-tabs-responsive-dropdown-"+X);W.attr("id","aui-tabs-responsive-trigger-"+X);W.attr("href","aui-tabs-responsive-trigger-"+X);Z.attr("id","aui-tabs-responsive-dropdown-"+X);if(b){var S=J.processVisibleTabs(a.toArray(),O,V);var Y=J.totalVisibleTabWidth(S);var d=O.outerWidth()-Y-V.outerWidth(true);var P=d>0;if(P){var U=Z.find("li");J.processInvisibleTabs(U.toArray(),d,V)}Z.on("click","a",G)}if(Q&&!b){Z.find("li").each(function(){J.moveTabOutOfDropdown(H(this),V)});J.removeResponsiveDropdown(Z,V)}}function M(S){if(S.hasClass("aui-tabs-responsive-trigger")){return }var R=H(S.attr("href").match(I)[0]);R.addClass("active-pane").attr("aria-hidden","false").siblings(".tabs-pane").removeClass("active-pane").attr("aria-hidden","true");var P=S.parents(".aui-tabs").find(".aui-tabs-responsive-trigger-item a");var Q=P.attr("aria-owns");var T=H(document).find("#"+Q);T.find("li a").attr("aria-checked",false).removeClass("checked aui-dropdown2-checked");T.find("li").removeClass("active-tab");S.parent("li.menu-item").addClass("active-tab").siblings(".menu-item").removeClass("active-tab");if(S.hasClass("aui-tabs-responsive-item")){var O=R.parent(".aui-tabs").find("li.menu-item:not(.aui-tabs-responsive-trigger-item)");O.removeClass("active-tab");O.find("a").removeClass("checked").removeAttr("aria-checked")}if(S.hasClass("aui-tabs-responsive-item")){R.parent(".aui-tabs").find("li.menu-item.aui-tabs-responsive-trigger-item").addClass("active-tab")}S.closest(".tabs-menu").find("a").attr("aria-selected","false");S.attr("aria-selected","true");S.trigger("tabSelect",{tab:S,pane:R})}function D(O){return O.attr("data-aui-persist")!==undefined&&O.attr("data-aui-persist")!=="false"}function C(O){var P=O.attr("id");var Q=O.attr("data-aui-persist");return F+(P?P:"")+(Q&&Q!=="true"?"-"+Q:"")}function E(O){for(var T=0,U=O.length;T<U;T++){var R=O.eq(T);if(D(R)&&window.localStorage){var S=R.attr("id");if(S){var Q=window.localStorage.getItem(C(R));if(Q){var P=R.find("#"+Q);if(P.length){M(P)}}}else{AJS.warn("A tab group must specify an id attribute if it specifies data-aui-persist")}}}}function K(R){var P=R.closest(".aui-tabs");var Q=P.attr("id");if(Q){var O=R.attr("id");if(O){window.localStorage.setItem(C(P),O)}}else{AJS.warn("A tab group must specify an id attribute if it specifies data-aui-persist")}}function G(O){AJS.tabs.change(H(this),O);O&&O.preventDefault()}function B(O){O.forEach(function(Q,P){L(Q,P)})}AJS.tabs={setup:function(){var O=H(".aui-tabs:not(.aui-tabs-disabled)");var P=H(A).toArray();B(P);var Q=AJS.debounce(B,200);H(window).resize(function(){Q(P)});O.attr("role","application");O.find(".tabs-pane").each(function(){var V=H(this);V.attr("role","tabpanel");if(V.hasClass("active-pane")){V.attr("aria-hidden","false")}else{V.attr("aria-hidden","true")}});for(var R=0,S=O.length;R<S;R++){var T=O.eq(R);if(!T.data("aui-tab-events-bound")){var U=T.children("ul.tabs-menu");U.attr("role","tablist");U.children("li").attr("role","presentation");U.find("> .menu-item a").each(N);U.delegate("a","click",G);T.data("aui-tab-events-bound",true)}}E(O);H(".aui-tabs.vertical-tabs").find("a").each(function(){var V=H(this);if(!V.attr("title")){if(AJS.isClipped(V)){V.attr("title",V.text())}}})},change:function(P,Q){M(P);var O=P.closest(".aui-tabs");if(D(O)&&window.localStorage){K(P)}}};H(AJS.tabs.setup)})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/template.js' */
AJS.template=(function(H){var J=/\{([^\}]+)\}/g,D=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,F=function(O,N,P,L){var M=P;N.replace(D,function(S,R,Q,U,T){R=R||U;if(M){if(R+":html" in M){M=M[R+":html"];L=true}else{if(R in M){M=M[R]}}if(T&&typeof M==="function"){M=M()}}});if(M==null||M==P){M=O}M=String(M);if(!L){M=G.escape(M)}return M},B=function(L){this.template=this.template.replace(J,function(N,M){return F(N,M,L,true)});return this},K=function(L){this.template=this.template.replace(J,function(N,M){return F(N,M,L)});return this},C=function(){return this.template};var G=function(M){function L(){return L.template}L.template=String(M);L.toString=L.valueOf=C;L.fill=K;L.fillHtml=B;return L},A={},I=[];var E=function(L){return H("script").filter(function(){return this.getAttribute("title")===L})};G.load=function(L){L=String(L);if(!A.hasOwnProperty(L)){if(I.length>=1000){delete A[I.shift()]}I.push(L);A[L]=E(L)[0].text}return this(A[L])};G.escape=AJS.escapeHtml;return G})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/whenitype.js' */
(function(A,D){var C=navigator.platform.indexOf("Mac")!==-1;var B=/^(backspace|tab|r(ight|eturn)|s(hift|pace|croll)|c(trl|apslock)|alt|pa(use|ge(up|down))|e(sc|nd)|home|left|up|d(el|own)|insert|f\d\d?|numlock|meta)/i;A.whenIType=function(P){var O=[],I=D.Callbacks();function F(Q){if(!AJS.popup.current&&I){I.fire(Q)}}function G(Q){Q.preventDefault()}function N(Q){var R=Q&&Q.split?D.trim(Q).split(" "):[Q];R.forEach(function(S){H(S)})}function K(R){var Q=R.length;while(Q--){if(R[Q].length>1&&R[Q]!=="space"){return true}}return false}function H(S){var R=S instanceof Array?S:M(S.toString());var Q=K(R)?"keydown":"keypress";O.push(R);D(document).bind(Q,R,F);D(document).bind(Q+" keyup",R,G)}function M(S){var U=[],T="";while(S.length){var R=S.match(/^(ctrl|meta|shift|alt)\+/i);var Q=S.match(B);if(R){T+=R[0];S=S.substring(R[0].length)}else{if(Q){U.push(T+Q[0]);S=S.substring(Q[0].length);T=""}else{U.push(T+S[0]);S=S.substring(1);T=""}}}return U}function J(S){var U=D(S),W=U.attr("title")||"",V=O.slice();var R=U.data("kbShortcutAppended")||"";var Q=!R;var T=Q?W:W.substring(0,W.length-R.length);while(V.length){R=E(V.shift().slice(),R,Q);Q=false}if(C){R=R.replace(/Meta/ig,"\u2318").replace(/Shift/ig,"\u21E7")}U.attr("title",T+R);U.data("kbShortcutAppended",R)}function L(R){var S=D(R);var Q=S.data("kbShortcutAppended");if(!Q){return }var T=S.attr("title");S.attr("title",T.replace(Q,""));S.removeData("kbShortcutAppended")}function E(S,R,Q){if(Q){R+=" ("+AJS.format("{0}",S.shift())}else{R=R.replace(/\)$/,"");R+=AJS.format("or {0}",S.shift())}S.forEach(function(T){R+=" "+AJS.format(", {0}",T)});R+=")";return R}N(P);return A.whenIType.makeShortcut({executor:I,bindKeys:N,addShortcutsToTitle:J,removeShortcutsFromTitle:L,keypressHandler:F,defaultPreventionHandler:G})};A.whenIType.makeShortcut=function(M){var H=M.executor;var K=M.bindKeys;var I=M.addShortcutsToTitle;var J=M.removeShortcutsFromTitle;var F=M.keypressHandler;var G=M.defaultPreventionHandler;var L=[];function E(N){return function(O,Q){Q=Q||{};var P=Q.focusedClass||"focused";var R=Q.hasOwnProperty("wrapAround")?Q.wrapAround:true;var S=Q.hasOwnProperty("escToCancel")?Q.escToCancel:true;H.add(function(){var V=D(O),U=V.filter("."+P),T=U.length===0?undefined:{transition:true};if(S){D(document).one("keydown",function(W){if(W.keyCode===AJS.keyCode.ESCAPE&&U){U.removeClass(P)}})}if(U.length){U.removeClass(P)}U=N(U,V,R);if(U&&U.length>0){U.addClass(P);U.moveTo(T);if(U.is("a")){U.focus()}else{U.find("a:first").focus()}}});return this}}return{moveToNextItem:E(function(P,Q,O){var N;if(O&&P.length===0){return Q.eq(0)}else{N=D.inArray(P.get(0),Q);if(N<Q.length-1){N=N+1;return Q.eq(N)}else{if(O){return Q.eq(0)}}}return P}),moveToPrevItem:E(function(P,Q,O){var N;if(O&&P.length===0){return Q.filter(":last")}else{N=D.inArray(P.get(0),Q);if(N>0){N=N-1;return Q.eq(N)}else{if(O){return Q.filter(":last")}}}return P}),click:function(N){L.push(N);I(N);H.add(function(){var O=D(N);if(O.length>0){O.click()}});return this},goTo:function(N){H.add(function(){window.location.href=N});return this},followLink:function(N){L.push(N);I(N);H.add(function(){var O=D(N)[0];if(O&&{a:true,link:true}[O.nodeName.toLowerCase()]){window.location.href=O.href}});return this},execute:function(O){var N=this;H.add(function(){O.apply(N,arguments)});return this},evaluate:function(N){N.call(this)},moveToAndClick:function(N){L.push(N);I(N);H.add(function(){var O=D(N);if(O.length>0){O.click();O.moveTo()}});return this},moveToAndFocus:function(N){L.push(N);I(N);H.add(function(P){var O=AJS.$(N);if(O.length>0){O.focus();if(O.moveTo){O.moveTo()}if(O.is(":input")){P.preventDefault()}}});return this},or:function(N){K(N);return this},unbind:function(){D(document).unbind("keydown keypress",F).unbind("keydown keypress keyup",G);for(var O=0,N=L.length;O<N;O++){J(L[O])}L=[]}}};A.whenIType.fromJSON=function(G,F){var E=[];if(G){D.each(G,function(I,J){var H=J.op,M=J.param,L;if(H==="execute"||H==="evaluate"){L=[new Function(M)]}else{if(/^\[[^\]\[]*,[^\]\[]*\]$/.test(M)){try{L=JSON.parse(M)}catch(K){AJS.error("When using a parameter array, array must be in strict JSON format: "+M)}if(!D.isArray(L)){AJS.error("Badly formatted shortcut parameter. String or JSON Array of parameters required: "+M)}}else{L=[M]}}D.each(J.keys,function(){var N=this;if(F&&C){N=D.map(N,function(P){return P.replace(/ctrl/i,"meta")})}var O=AJS.whenIType(N);O[H].apply(O,L);E.push(O)})})}return E};D(document).bind("iframeAppended",function(F,E){D(E).load(function(){var G=D(E).contents();G.bind("keyup keydown keypress",function(H){if(D.browser.safari&&H.type==="keypress"){return }if(!D(H.target).is(":input")){D.event.trigger(H,arguments,document,true)}})})})})(AJS,AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/jquery/jquery.is-dirty.js' */
jQuery.fn.isDirty=function(){var B,A=[];window.onbeforeunload=function(){var C=window.onbeforeunload;if(B!==false){jQuery.each(A,function(){if(this.initVal!==AJS.$(this).val()){B=true;return false}})}if(B){window.onbeforeunload=null;window.setTimeout(function(){jQuery(document).bind("mousemove",function(){window.onbeforeunload=C;jQuery(document).unbind("mousemove",arguments.callee)})},1000);B=void (0);return AJS.params.dirtyMessage||""}};return function(D){if(this.length===0){return }function C(F){var E=jQuery(this);jQuery.fn.isDirty.fieldInFocus=E;if(jQuery.inArray(this,A)===-1){this.initVal=E.val();A.push(this);E.die(F.type,C)}}jQuery(":not(:input)").live("click",function(){delete jQuery.fn.isDirty.fieldInFocus});jQuery(":input[type != hidden]",this.selector).bind("keydown",C).bind("keypress",C).bind("click",C);jQuery(D.ignoreUnloadFromElems).live("mousedown",function(){B=false});this.each(function(){this.onsubmit=function(E){return function(){B=false;if(E){return E.apply(this,arguments)}}}(this.onsubmit);AJS.$(this).submit(function(){B=false})});return this}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/jquery/jquery.progressbar.js' */
(function(A){A.fn.progressBar=function(I,L){var C=this;var F={height:"1em",showPercentage:true};var B=A.extend(F,L);var J=C.attr("id")+"-incomplete-bar";var D=C.attr("id")+"-complete-bar";var K=C.attr("id")+"-percent-complete-text";if(A("#"+J).length==0){var E=A(document.createElement("div"));E.attr("id",J);E.css({width:"90%",border:"solid 1px #ccc","float":"left","margin-right":"0.5em"});E.addClass("progress-background-color");var G=A(document.createElement("div"));G.attr("id",D);G.addClass("progress-fill-color");G.css({height:B.height,width:I+"%"});var H=A(document.createElement("span"));H.attr("id",K);H.addClass("percent-complete-text");H.html(I+"%");E.append(G);C.append(E);if(B.showPercentage){C.append(H)}}else{A("#"+D).css("width",I+"%");A("#"+K).html(I+"%")}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/jquery/jquery.selection.js' */
(function(A){if(document.selection){var B=function(C){return C.replace(/\u000D/g,"")};A.fn.selection=function(F){var E=this[0];this.focus();if(!E){return false}if(F==null){return document.selection.createRange().text}else{var D=E.scrollTop;var C=document.selection.createRange();C.text=F;C.select();E.focus();E.scrollTop=D}};A.fn.selectionRange=function(C,F){var G=this[0];this.focus();var I=document.selection.createRange();if(C==null){var K=this.val(),J=K.length,E=I.duplicate();E.moveToElementText(G);E.setEndPoint("StartToEnd",I);var D=J-B(E.text).length;E.setEndPoint("StartToStart",I);var H=J-B(E.text).length;if(D!=H&&K.charAt(D+1)=="\n"){D+=1}return{end:D,start:H,text:K.substring(H,D),textBefore:K.substring(0,H),textAfter:K.substring(D)}}else{I.moveToElementText(G);I.collapse(true);I.moveStart("character",C);I.moveEnd("character",F-C);I.select()}}}else{A.fn.selection=function(E){var D=this[0];if(!D){return false}if(E==null){if(D.setSelectionRange){return D.value.substring(D.selectionStart,D.selectionEnd)}else{return false}}else{var C=D.scrollTop;if(!!D.setSelectionRange){var F=D.selectionStart;D.value=D.value.substring(0,F)+E+D.value.substring(D.selectionEnd);D.selectionStart=F;D.selectionEnd=F+E.length}D.focus();D.scrollTop=C}};A.fn.selectionRange=function(F,C){if(F==null){var D={start:this[0].selectionStart,end:this[0].selectionEnd};var E=this.val();D.text=E.substring(D.start,D.end);D.textBefore=E.substring(0,D.start);D.textAfter=E.substring(D.end);return D}else{this[0].selectionStart=F;this[0].selectionEnd=C}}}A.fn.wrapSelection=function(C,D){this.selection(C+this.selection()+(D||""))}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'js/jquery/jquery.throbber.js' */
jQuery.fn.throbber=function(A){return function(){var C=[],B={isLatentThreshold:100,minThrobberDisplay:200,loadingClass:"loading"};A(document).ajaxComplete(function(E,D){A(C).each(function(F){if(D===this.get(0)){this.hideThrobber();C.splice(F,1)}})});return function(F){var E,G,D=function(I,H){D.t=setTimeout(function(){clearTimeout(D.t);D.t=undefined;I()},H)};F=A.extend(B,F||{});if(!F.target){return this}G=jQuery(F.target);C.push(A.extend(this,{showThrobber:function(){D(function(){if(!E){G.addClass(F.loadingClass);D(function(){if(E){E()}},F.minThrobberDisplay)}},F.isLatentThreshold)},hideThrobber:function(){E=function(){G.removeClass(F.loadingClass);if(F.end){F.end()}};if(!D.t){E()}}}));this.showThrobber();return this}}()}(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:curl', location = 'js/wrm/curl-config.js' */
(function(){if(!window.WRM){window.WRM={}}window.curl={apiContext:WRM,defineContext:WRM}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:curl', location = 'js/wrm/lib/curl-0.7.3.js' */
(function(a){var P="0.7.3",u="curl",p="define",G,v,g,d=a.document,l=d&&(d.head||d.getElementsByTagName("head")[0]),V=l&&l.getElementsByTagName("base")[0]||null,i={},N={},c={},A="addEventListener" in a?{}:{loaded:1,complete:1},m={},b=m.toString,y,k={},f={},h=false,O,t=/\?|\.js\b/,e=/^\/|^[^:]+:\/\//,L=/(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g,E=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,C=/require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g,M,x;function Q(){}function D(X,W){return b.call(X).indexOf("[object "+W)==0}function B(X){var W;X.path=J(X.path||X.location||"");W=X.main||"./main";if(!n(W)){W="./"+W}X.main=s(W,X.name+"/");X.config=X.config;return X}function n(W){return W.charAt(0)=="."}function j(W){return e.test(W)}function o(X,W){return J(X)+"/"+W}function J(W){return W&&W.charAt(W.length-1)=="/"?W.substr(0,W.length-1):W}function s(ab,X){var ac,W,Z,Y,aa;ac=1;W=ab;if(n(W)){Y=true;W=W.replace(L,function(ad,ae,af,ag){if(af){ac++}return ag||""})}if(Y){Z=X.split("/");aa=Z.length-ac;if(aa<0){return ab}Z.splice(aa,ac);return Z.concat(W||[]).join("/")}else{return W}}function S(X){var W=X.indexOf("!");return{resourceId:X.substr(W+1),pluginId:W>=0&&X.substr(0,W)}}function U(){}function z(X,W){U.prototype=X||m;var Z=new U();U.prototype=m;for(var Y in W){Z[Y]=W[Y]}return Z}function F(){var X,aa,W;X=this;aa=[];function ab(ac,ad,ae){aa.push([ac,ad,ae])}function Y(ag,ad){var af,ac,ae=0;while((af=aa[ae++])){ac=af[ag];if(ac){ac(ad)}}}W=function Z(ad,ac){ab=ad?function(ae,af){ae&&ae(ac)}:function(ae,af){af&&af(ac)};W=Q;Y(ad?0:1,ac);Y=Q;aa=y};this.then=function(ac,ad,ae){ab(ac,ad,ae);return X};this.resolve=function(ac){X.resolved=ac;W(true,ac)};this.reject=function(ac){X.rejected=ac;W(false,ac)};this.progress=function(ac){Y(2,ac)}}function r(W){return W instanceof F}function H(W,Z,X,Y){if(r(W)){return W.then(Z,X,Y)}else{return Z(W)}}function q(Y,X,Z){var W;return function(){if(--Y>=0&&X){W=X.apply(y,arguments)}if(Y==0&&Z){Z(W)}return W}}x={toAbsId:function(ab,aa,W){var Y,X,Z;Y=s(ab,aa);if(n(Y)){return Y}Z=S(Y);X=Z.pluginId;Y=X||Z.resourceId;if(Y in W.pathMap){Y=W.pathMap[Y].main||Y}if(X){if(X.indexOf("/")<0&&!(X in W.pathMap)){Y=o(W.pluginPath,X)}Y=Y+"!"+Z.resourceId}return Y},createContext:function(W,X,ab,aa){var Z;Z=new F();Z.id=X||"";Z.isPreload=aa;Z.depNames=ab;Z.config=W;function ad(ae){return x.toAbsId(ae,Z.id,W)}function ac(ae){return x.resolvePathInfo(ad(ae),W).url}function Y(ag,ak,af){var ae,aj,ai,ah;ae=ak&&function(){ak.apply(y,arguments[0])};if(D(ag,"String")){if(ae){throw new Error("require(id, callback) not allowed")}aj=ad(ag);ai=k[aj];if(!(aj in k)){throw new Error("Module not resolved: "+aj)}ah=r(ai)&&ai.exports;return ah||ai}else{H(x.getDeps(x.createContext(W,Z.id,ag,aa)),ae,af)}}Z.require=Y;Y.toUrl=ac;Z.toAbsId=ad;return Z},createResourceDef:function(W,ad,ab){var aa,X,Z;aa=x.createContext(W,ad,y,ab);X=aa.resolve;Z=q(1,function(af){aa.deps=af;try{return x.executeDefFunc(aa)}catch(ae){aa.reject(ae)}});aa.resolve=function Y(ae){H(ab||h,function(){X((k[aa.id]=f[aa.url]=Z(ae)))})};aa.exportsReady=function ac(ae){H(ab||h,function(){if(aa.exports){Z(ae);aa.progress(N)}})};return aa},createPluginDef:function(W,aa,Z,Y){var X;X=x.createContext(W,Z,y,Y);return X},getCjsRequire:function(W){return W.require},getCjsExports:function(W){return W.exports||(W.exports={})},getCjsModule:function(X){var W=X.module;if(!W){W=X.module={id:X.id,uri:x.getDefUrl(X),exports:x.getCjsExports(X),config:function(){return X.config}};W.exports=W.exports}return W},getDefUrl:function(W){return W.url||(W.url=x.checkToAddJsExt(W.require.toUrl(W.id),W.config))},setApi:function(W){var Y,Z,X,aa,ab,ac;Y=u;Z=p;X=aa=a;ab=" already exists";if(W){ac=W.overwriteApi||W.overwriteApi;Y=W.apiName||W.apiName||Y;X=W.apiContext||W.apiContext||X;Z=W.defineName||W.defineName||Z;aa=W.defineContext||W.defineContext||aa;if(v&&D(v,"Function")){a[u]=v}v=null;if(g&&D(g,"Function")){a[p]=g}g=null;if(!ac){if(X[Y]&&X[Y]!=K){throw new Error(Y+ab)}if(aa[Z]&&aa[Z]!=I){throw new Error(Z+ab)}}}X[Y]=K;aa[Z]=I},config:function(aa){var ab,Z,W,X;if("baseUrl" in aa){aa.baseUrl=aa.baseUrl}if("main" in aa){aa.main=aa.main}if("preloads" in aa){aa.preloads=aa.preloads}if("pluginPath" in aa){aa.pluginPath=aa.pluginPath}if("dontAddFileExt" in aa||aa.dontAddFileExt){aa.dontAddFileExt=new RegExp(aa.dontAddFileExt||aa.dontAddFileExt)}ab=G;Z=z(ab,aa);Z.pathMap=z(ab.pathMap);W=aa.plugins||{};Z.plugins=z(ab.plugins);Z.paths=z(ab.paths,aa.paths);Z.packages=z(ab.packages,aa.packages);Z.pathList=[];function ac(af,am){var ah,aj,al,ak,an,ai;for(var ag in af){al=af[ag];if(D(al,"String")){al={path:af[ag]}}al.name=al.name||ag;an=Z;ak=S(J(al.name));ah=ak.resourceId;aj=ak.pluginId;if(aj){an=W[aj];if(!an){an=W[aj]=z(Z);an.pathMap=z(Z.pathMap);an.pathList=[]}delete af[ag]}if(am){ai=B(al);if(ai.config){ai.config=z(Z,ai.config)}}else{ai={path:J(al.path)}}ai.specificity=ah.split("/").length;if(ah){an.pathMap[ah]=ai;an.pathList.push(ah)}else{an.baseUrl=x.resolveUrl(al.path,Z)}}}function ad(af){var ag=af.pathMap;af.pathRx=new RegExp("^("+af.pathList.sort(function(ai,ah){return ag[ah].specificity-ag[ai].specificity}).join("|").replace(/\/|\./g,"\\$&")+")(?=\\/|$)");delete af.pathList}ac(aa.packages,true);ac(aa.paths,false);for(X in W){var Y=x.toAbsId(X+"!","",Z);Z.plugins[Y.substr(0,Y.length-1)]=W[X]}W=Z.plugins;for(X in W){W[X]=z(Z,W[X]);var ae=W[X].pathList;if(ae){W[X].pathList=ae.concat(Z.pathList);ad(W[X])}}for(X in ab.pathMap){if(!Z.pathMap.hasOwnProperty(X)){Z.pathList.push(X)}}ad(Z);return Z},checkPreloads:function(W){var X;X=W&&W.preloads;if(X&&X.length>0){H(h,function(){h=x.getDeps(x.createContext(G,y,X,true))})}},resolvePathInfo:function(Z,X){var Y,ab,aa,W;Y=X.pathMap;if(!j(Z)){aa=Z.replace(X.pathRx,function(ac){ab=Y[ac]||{};W=ab.config;return ab.path||""})}else{aa=Z}return{config:W||G,url:x.resolveUrl(aa,X)}},resolveUrl:function(Y,W){var X=W.baseUrl;return X&&!j(Y)?o(X,Y):Y},checkToAddJsExt:function(X,W){return X+((W||G).dontAddFileExt.test(X)?"":".js")},loadScript:function(Z,ab,X){var Y=d.createElement("script");function aa(ac){ac=ac||a.event;if(ac.type=="load"||A[Y.readyState]){delete c[Z.id];Y.onload=Y.onreadystatechange=Y.onerror="";ab()}}function W(ac){X(new Error("Syntax or http error: "+Z.url))}Y.onload=Y.onreadystatechange=aa;Y.onerror=W;Y.type=Z.mimetype||"text/javascript";Y.charset="utf-8";Y.async=!Z.order;Y.src=Z.url;c[Z.id]=Y;l.insertBefore(Y,V);return Y},extractCjsDeps:function(X){var Y,W=[],Z;Y=typeof X=="string"?X:X.toSource?X.toSource():X.toString();Y.replace(E,"").replace(C,function(aa,ac,ab){if(ab){Z=Z==ab?y:Z}else{if(!Z){W.push(ac)}}return""});return W},fixArgs:function(X){var ac,aa,Y,ab,W,Z;W=X.length;Y=X[W-1];ab=D(Y,"Function")?Y.length:-1;if(W==2){if(D(X[0],"Array")){aa=X[0]}else{ac=X[0]}}else{if(W==3){ac=X[0];aa=X[1]}}if(!aa&&ab>0){Z=true;aa=["require","exports","module"].slice(0,ab).concat(x.extractCjsDeps(Y))}return{id:ac,deps:aa||[],res:ab>=0?Y:function(){return Y},cjs:Z}},executeDefFunc:function(Y){var X,W;W=Y.cjs?Y.exports:y;X=Y.res.apply(W,Y.deps);if(X===y&&Y.exports){X=Y.module?(Y.exports=Y.module.exports):Y.exports}return X},defineResource:function(X,W){X.res=W.res;X.cjs=W.cjs;X.depNames=W.deps;x.getDeps(X)},getDeps:function(X){var ab,af,ai,ad,ag,aa,W,aj,ah;ai=[];af=X.depNames;ad=af.length;if(af.length==0){Y()}function ae(am,ak,al){ai[ak]=am;if(al){aj(am,ak)}}aj=q(ad,ae,ac);ah=q(ad,ae,Y);for(ab=0;ab<ad;ab++){W=af[ab];if(W in M){ah(M[W](X),ab,true);if(X.exports){X.progress(i)}}else{if(!W){ah(y,ab,true)}else{Z(W,ab)}}}return X;function Z(am,al){var an,ak,ap,ao;an=q(1,function(aq){ak(aq);ah(aq,al)});ak=q(1,function(aq){aj(aq,al)});ap=x.fetchDep(am,X);ao=r(ap)&&ap.exports;if(ao){ak(ao)}H(ap,an,X.reject,X.exports&&function(aq){if(ap.exports){if(aq==i){ak(ap.exports)}else{if(aq==N){an(ap.exports)}}}})}function Y(){X.resolve(ai)}function ac(){X.exportsReady&&X.exportsReady(ai)}},fetchResDef:function(W){x.getDefUrl(W);x.loadScript(W,function(){var X=O;O=y;if(W.useNet!==false){if(!X||X.ex){W.reject(new Error(((X&&X.ex)||"define() missing or duplicated: "+W.url)))}else{x.defineResource(W,X)}}},W.reject);return W},fetchDep:function(ai,X){var W,Z,ae,ab,ah,ad,aa,aj,af,Y,ac,ag;W=X.toAbsId;Z=X.isPreload;ae=X.config||G;ab=S(W(ai));aj=ab.resourceId;ah=ab.pluginId||aj;af=x.resolvePathInfo(ah,ae);if(ab.pluginId){ad=ah}else{ad=af.config.moduleLoader||af.config.moduleLoader;if(ad){aj=ah;ah=ad;af=x.resolvePathInfo(ad,ae)}}if(ah in k){Y=k[ah]}else{if(af.url in f){Y=k[ah]=f[af.url]}else{Y=x.createResourceDef(af.config,ah,Z);Y.url=x.checkToAddJsExt(af.url,af.config);k[ah]=f[af.url]=Y;x.fetchResDef(Y)}}if(ah==ad){ac=new F();ag=ae.plugins[ad]||ae;H(Y,function(am){var ao,ak,an;an=am.dynamic;if("normalize" in am){aj=am.normalize(aj,W,Y.config)||""}else{aj=W(aj)}ak=ad+"!"+aj;ao=k[ak];if(!(ak in k)){ao=x.createPluginDef(ag,ak,aj,Z);if(!an){k[ak]=ao}var al=function(ap){ao.resolve(ap);if(!an){k[ak]=ap}};al.resolve=al;al.reject=al.error=ao.reject;am.load(aj,ao.require,al,ag)}if(ac!=ao){H(ao,ac.resolve,ac.reject,ac.progress)}},ac.reject)}return ac||Y},getCurrentDefName:function(){var W;if(!D(a.opera,"Opera")){for(var X in c){if(c[X].readyState=="interactive"){W=X;break}}}return W}};M={require:x.getCjsRequire,exports:x.getCjsExports,module:x.getCjsModule};function K(){var X=[].slice.call(arguments),W;if(D(X[0],"Object")){W=X.shift();R(W)}return new w(X[0],X[1],X[2])}function R(W){if(W){x.setApi(W);G=x.config(W);x.checkPreloads(W);if("main" in W){setTimeout(function(){var X;X=x.createContext(G,y,[].concat(W.main));x.getDeps(X)},0)}}}function w(Y,ab,X,aa){var Z,W;W=x.createContext(G,y,[].concat(Y));this["then"]=Z=function(ac,ad){H(W,function(ae){if(ac){ac.apply(y,ae)}},function(ae){if(ad){ad(ae)}else{throw ae}});return this};this["next"]=function(ae,ac,ad){return new w(ae,ac,ad,W)};this["config"]=R;if(ab||X){Z(ab,X)}H(aa,function(){x.getDeps(W)})}K.version=P;K.config=R;function T(W){var Z,X,Y;Z=W.id;if(Z==y){if(O!==y){O={ex:"Multiple anonymous defines in url"}}else{if(!(Z=x.getCurrentDefName())){O=W}}}if(Z!=y){X=k[Z];if(!(Z in k)){Y=x.resolvePathInfo(Z,G);X=x.createResourceDef(Y.config,Z);k[Z]=X}if(!r(X)){throw new Error("duplicate define: "+Z)}X.useNet=false;x.defineResource(X,W)}}function I(){var W=x.fixArgs(arguments);T(W)}I.amd={plugins:true,jQuery:true,curl:P};G={baseUrl:"",pluginPath:"curl/plugin",dontAddFileExt:t,paths:{},packages:{},plugins:{},pathMap:{},pathRx:/$^/};v=a[u];g=a[p];if(!v||D(v,"Function")){x.setApi()}else{a[u]=y;R(v)}k[u]=K;k["curl/_privileged"]={core:x,cache:k,config:function(){return G},_define:T,_curl:K,Promise:F}}(this.window||(typeof global!="undefined"&&global)||this));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:curl', location = 'js/wrm/lib/curl-css-0.7.3.js' */
(function(B){var z="createElement",s="parentNode",f=B.setTimeout,H=B.document,k,x=H&&H.createStyleSheet&&!(H.documentMode>=10),v=[],u=[],C=[],i=12,F,g="HTTP or network error.",l={};if(H){k=H.head||H.getElementsByTagName("head")[0];if(x){F=c}else{F=t}}function q(J,I){l[J]=l[J]||I}function y(){var I;I=H[z]("link");I.rel="stylesheet";I.type="text/css";return I}function r(J,I){J.onload=function(){q("load",true);I()}}function n(J,I){J.onerror=function(){q("error",true);I()}}function c(K,I,M){var L;C.push({url:K,cb:I,eb:function J(){M(new Error(g))}});L=h();if(L){m(L)}}function m(K){var J,I;J=C.shift();I=K.styleSheet;if(J){K.onload=function(){J.cb(J.ss);m(K)};K.onerror=function(){J.eb();m(K)};J.ss=I.imports[I.addImport(J.url)]}else{e(K);G(K)}}function G(I){u.push(I)}function h(){var I;I=u.shift();if(!I&&v.length<i){I=H.createElement("style");v.push(I);k.appendChild(I)}return I}function b(L){var K,J,M;if(!L.href||!o()){return false}K=false;try{J=L.sheet;if(J){M=J.cssRules;K=M===null;if(!K&&M){J.insertRule("-curl-css-test {}",0);J.deleteRule(0);K=true}}}catch(I){K=Object.prototype.toString.call(window.opera)!="[object Opera]"&&/security|denied/i.test(I.message)}return K}function e(I){I.onload=I.onerror=j}function w(I){return I.onload==j||!I.onload}function E(J,K,I){if(l.load){return}if(b(J)){I(J.sheet)}else{if(!w(J)){f(function(){E(J,K,I)},K)}}}function A(J,K,I){if(l.error){return}}function p(J,L,I){function K(){if(w(J)){return}e(J);d(function(){I(J.sheet)})}r(J,K);E(J,L,K)}function D(K,L,I){function J(){if(w(K)){return}e(K);I(new Error(g))}n(K,J);A(K,L,J)}function t(J,I,K,M){var L;L=y();p(L,M,I);D(L,M,K);L.href=J;k.appendChild(L)}function d(I){function J(){if(o()){I()}else{f(J,10)}}J()}function o(){return !H.readyState||H.readyState=="complete"}function a(I,J){return I.lastIndexOf(".")<=I.lastIndexOf("/")?I+"."+J:I}function j(){}WRM.define("curl/plugin/css",{normalize:function(N,J){var L,M;if(!N){return N}L=[N];M=[];for(var K=0,I=L.length;K<I;K++){M.push(J(L[K]))}return M.join(",")},load:function(R,L,U,K){var Q,J,V,S,M,O;Q=[];J=[R||""];V=K.cssWatchPeriod||50;S=K.cssNoWait;M=J.length;function N(W){if(J.length>1){Q.push(W)}if(--M==0){U(J.length==1?W:Q)}}function P(X){var W;W=U.reject||function(Y){throw Y};W(X)}for(O=0;O<J.length;O++){R=J[O];var I,T;I=a(L.toUrl(R),"css");if(S){T=y();T.href=I;k.appendChild(T);N(T.sheet||T.styleSheet)}else{F(I,N,P,V)}}},"plugin-builder":"./builder/css",pluginBuilder:"./builder/css"})})(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:curl', location = 'js/wrm/lib/curl-js-0.7.3.js' */
(function(b,c,a){WRM.define("curl/plugin/js",["curl/_privileged"],function(m){var f={},j=[],h=c&&c.createElement("script").async==true,l,k,g;l=m.Promise;function i(n,o){return n.lastIndexOf(".")<=n.lastIndexOf("/")?n+"."+o:n}function e(o,u,q){var v,s,p;v=new Date().valueOf()+(o.timeoutMsec||300000);function n(){s=true;if(o.exports){o.resolved=a(o.exports)}if(!o.exports||o.resolved){u(p)}else{q()}}function r(w){s=true;q(w)}function t(){if(!s){if(v<new Date()){q()}else{setTimeout(t,10)}}}if(q&&o.exports){setTimeout(t,10)}p=m.core.loadScript(o,n,r)}function d(n,o){e(n,function(){var p=j.shift();k=j.length>0;if(p){d.apply(null,p)}o.resolve(n.resolved||true)},function(p){o.reject(p)})}return{dynamic:true,normalize:function(q,p,o){var n=q.indexOf("!");return n>=0?p(q.substr(0,n))+q.substr(n):p(q)},load:function(o,r,w,q){var s,t,u,v,n,p,y;s=o.indexOf("!order")>0;t=o.indexOf("!exports=");u=t>0&&o.substr(t+9);v="prefetch" in q?q.prefetch:true;o=s||t>0?o.substr(0,o.indexOf("!")):o;n=i(r.toUrl(o),"js");function x(z){(w.error||function(A){throw A})(z)}if(n in f){if(f[n] instanceof l){f[n].then(w,x)}else{w(f[n])}}else{p={name:o,url:n,order:s,exports:u,timeoutMsec:q.timeout};f[n]=y=new l();y.then(function(z){f[n]=z;w(z)},x);if(s&&!h&&k){j.push([p,y]);if(v){p.mimetype="text/cache";e(p,function(z){z&&z.parentNode.removeChild(z)},function(){});p.mimetype=""}}else{k=k||s;d(p,y)}}}}})}(this,this.document,function(){try{return eval(arguments[0])}catch(ex){return}}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/jquery.js' */
WRM.define("wrm/jquery",function(){return AJS.$});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/underscore.js' */
WRM.define("wrm/_",function(){var a={filter:function(f,d){var b=[];for(var c=0;c<f.length;++c){var e=f[c];if(d(e)){b.push(e)}}return b},map:function(d,c){var e=[];for(var b=0;b<d.length;++b){e.push(c(d[b]))}return e},each:function(d,c){if(d.length===+d.length){for(var b=0;b<d.length;++b){c(d[b])}}else{for(var e in d){if(d.hasOwnProperty(e)){c(d[e],e)}}}},bind:function(c,b){return function(){c.apply(b,Array.prototype.slice.call(arguments))}},isArray:function(b){return Object.prototype.toString.call(b)=="[object Array]"},isUndefined:function(b){return b===void 0},isNull:function(b){return b===null}};return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/builder.js' */
WRM.define("wrm/builder",function(){var a=function(d){var b="(?:$|\\?.*)";var c="^"+d;this.patterns={js:{superBatch:new RegExp(c+"/superbatch/js/batch.js"+b),contextBatch:new RegExp(c+"/contextbatch/js/(.*?)/batch.js"+b),resourceBatch:new RegExp(c+"/batch/(.*?)/(.*).js"+b),noBatch:new RegExp(c+"/resources/(.*?)/(.*).js"+b)},css:{superBatch:new RegExp(c+"/superbatch/css/batch.css"+b),contextBatch:new RegExp(c+"/contextbatch/css/(.*?)/batch.css"+b),resourceBatch:new RegExp(c+"/batch/(.*?)/(.*).css"+b),noBatch:new RegExp(c+"/resources/(.*?)/(.*).css"+b)}}};a.prototype={initialize:function(c){var g,b=c.getElementsByTagName("script"),e=c.getElementsByTagName("link"),f={superBatch:false,modules:[],contexts:[]};for(g=0;g<b.length;++g){var d=b[g];if(d.getAttribute("src")){this._inspectMatches(d.getAttribute("src"),this.patterns.js,f)}}for(g=0;g<e.length;++g){var h=e[g];if(h.getAttribute("href")){this._inspectMatches(h.getAttribute("href"),this.patterns.css,f)}}return f},getModulesAndContextsFromScriptUrl:function(c){var b={superBatch:false,modules:[],contexts:[]};this._inspectMatches(c,this.patterns.js,b);return b},_inspectMatches:function(d,f,c){var b;b=d.match(f.superBatch);if(b){c.superBatch=true;return}b=d.match(f.contextBatch);if(b){var g=b[1].split(",");for(var e=0;e<g.length;++e){this._addToLoadedList(c.contexts,g[e])}return}b=d.match(f.resourceBatch);if(b){this._addToLoadedList(c.modules,b[1]);return}b=d.match(f.noBatch);if(b){this._addToLoadedList(c.modules,b[1]);return}},_addToLoadedList:function(d,c){for(var b=0;b<d.length;++b){if(d[b]===c){return}}d.push(c)}};return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/ie-only-filter.js' */
WRM.define("wrm/ie-only-filter",["wrm/jquery","wrm/_"],function(c,a){function b(d){var e=c.browser.msie;return a.filter(d,function(f){return f.ieOnly?e:true})}return b});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/conditional-comment-filter.js' */
WRM.define("wrm/conditional-comment-filter",["wrm/jquery","wrm/_"],function(c,a){function b(e){var f=c.browser.msie;var d=c.browser.version;return a.filter(e,function(h){var g=h.conditionalComment;if(!g){return true}if(!f||d>9){return false}g=g.toLowerCase();switch(g){case"ie":return true;case"lt ie 9":return d<9;case"lte ie 9":return d<=9;case"ie 9":return d==9;case"gt ie 9":return d>9;case"gte ie 9":return d>=9;case"lt ie 8":return d<8;case"lte ie 8":return d<=8;case"ie 8":return d==8;case"gt ie 8":return d>8;case"gte ie 8":return d>=8;default:AJS.log("Cannot parse conditional comment "+g);return false}})}return b});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/resource-base-url-pattern.js' */
WRM.define("wrm/resource-base-url-pattern",function(){return WRM.data.claim("com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager.resource-base-url-pattern")});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/require-handler.js' */
WRM.define("wrm/require-handler",["wrm/jquery","wrm/_","wrm/builder","wrm/conditional-comment-filter","wrm/ie-only-filter","wrm/resource-base-url-pattern"],function(e,h,i,g,a,c){var f=/^wr!(.*)$/,d=/^wrc!(.*)$/;var b=function(){this._requireCache={}};b.prototype={require:function(k,j){if(!h.isArray(k)){k=[k]}if(!this._requireCache.hasOwnProperty(k)){this._requireCache[k]=this._resolveAsync(k)}var l=this._requireCache[k];if(j){l.done(function(){j.apply(this,arguments)})}return l},_resolveAsync:function(l){var j=e.Deferred();var k=this;this._getScriptsForResources(l).done(function(p){if(p.unparsedData){window.WRM._unparsedData||(window.WRM._unparsedData={});h.each(p.unparsedData,function(u,t){window.WRM._unparsedData[t]=u})}var q=[];var s=[];var m=k._filter(p.resources);for(var o=0;o<m.length;++o){var r=m[o];var n=r.url;if(r.resourceType==="JAVASCRIPT"){if(!k._isJSInInitLoad(n)){q.push("js!"+n+"!order")}}else{if(r.resourceType==="CSS"){if(!k._isCSSInInitLoad(n)){if(r.media&&"all"!==r.media){s.push(r)}else{q.push("css!"+n)}}}else{AJS.log("Unknown resource type required: "+n)}}}AJS.log("Downloading resources:\n"+q.join("\n"));WRM.curl(q,function(){h.each(s,function(u){k._loadCssImmediate(u)});var t=h.map(l,function(){return window});j.resolveWith(k,t)},function(){j.rejectWith(k,arguments)})});return j.promise()},_loadCssImmediate:function(k){AJS.log("WARN: asynchronously loading a CSS resource containing a media query: "+k.url);var j='<link rel="stylesheet" type="text/css" href="'+k.url+'" media="'+k.media+'" />';e(j).appendTo("head")},_getScriptsForResources:function(k){if(!this._builder){this._builder=new i(c);this._initLoadResources=this._builder.initialize(document)}var j=[];var l=[];h.each(k,function(n){var m;if(m=n.match(f)){j.push(m[1])}else{if(m=n.match(d)){l.push(m[1])}}});return e.ajax({url:AJS.contextPath()+"/rest/webResources/1.0/resources",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify({r:j,c:l,xc:this._initLoadResources.contexts,xr:this._initLoadResources.modules})})},_isJSInInitLoad:function(j){return e("script[src='"+j+"']").length>0},_isCSSInInitLoad:function(j){return e("link[href='"+j+"']").length>0},_filter:function(k){if(!this._filters){this._filters=[g,a]}var j=k;h.each(this._filters,function(l){j=l(j)});return j}};return b});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/index.js' */
WRM.curl(["wrm/require-handler"],function(b){var a;WRM.require=function(d,c){if(!a){a=new b()}return a.require(d,c)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-jquery-ui-datepicker', location = 'js-vendor/jquery/jquery-ui/jquery.ui.datepicker.js' */
/*
 * jQuery UI Datepicker 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function($,undefined){$.extend($.ui,{datepicker:{version:"1.8.24"}});var PROP_NAME="datepicker";var dpuuid=new Date().getTime();var instActive;function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)}},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return }this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0])}else{$.datepicker._showDatepicker(input[0])}}return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return }divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}var onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){var dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{$.datepicker._hideDatepicker()}return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(err){$.datepicker.log(err)}}return true},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return }var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])}}var beforeShow=$.datepicker._get(inst,"beforeShow");var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return }extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}};inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)}if(!showAnim||!duration){postProcess()}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var self=this;self.maxRows=4;var borders=$.datepicker._getBorders(inst.dpDiv);instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()}if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}origyearshtml=inst.yearshtml=null},0)}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return }if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst)};if($.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}this._datepickerShowing=false;var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return }var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return }this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return }var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof (inst.input[0])!="object"){inst.input.focus()}this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){var isDoubled=lookAhead(match);var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue}iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return -(a[1].length-b[1].length)});var index=-1;$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];iValue+=name.length;return false}});if(index!=-1){return index+1}else{throw"Unknown name at position "+iValue}};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(iValue<value.length){throw"Extra/unparsed characters found in date: "+value.substring(iValue)}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return }var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=(noDefault?"":dates)}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths");var id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");return false},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");return false}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";this.maxRows=4;for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var curRows=Math.ceil((leadDays+daysInMonth)/7);var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var newDate=(minDate&&date<minDate?minDate:date);newDate=(maxDate&&newDate>maxDate?maxDate:newDate);return newDate},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.bind("mouseout",function(event){var elem=$(event.target).closest(selector);if(!elem.length){return }elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(event){var elem=$(event.target).closest(selector);if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||!elem.length){return }elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");elem.addClass("ui-state-hover");if(elem.hasClass("ui-datepicker-prev")){elem.addClass("ui-datepicker-prev-hover")}if(elem.hasClass("ui-datepicker-next")){elem.addClass("ui-datepicker-next-hover")}})}function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!this.length){return this}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.8.24";window["DP_jQuery_"+dpuuid]=$})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-date-picker', location = 'js/aui-date-picker.js' */
(function(A){var B=0;AJS.DatePicker=function(I,E){var H,D,F,G;var C;H={};G=B++;F=A(I);F.attr("data-aui-dp-uuid",G);E=A.extend(undefined,AJS.DatePicker.prototype.defaultOptions,E);H.getField=function(){return F};H.getOptions=function(){return E};D=function(){var P,M,U,Q,T,S,V,R,J,L;H.hide=function(){J.hide()};H.show=function(){J.show()};H.setDate=function(X){if(typeof P!=="undefined"){P.datepicker("setDate",X)}};H.getDate=function(X){if(typeof P!=="undefined"){return P.datepicker("getDate")}};S=function(Y){L.off();if(E.hint){var Z=A("<div/>").addClass("aui-datepicker-hint");Z.append("<span/>").text(E.hint);L.append(Z)}P=A("<div/>");P.attr("data-aui-dp-popup-uuid",G);L.append(P);var X={dateFormat:E.dateFormat,defaultDate:F.val(),maxDate:F.attr("max"),minDate:F.attr("min"),nextText:">",onSelect:function(b,a){F.val(b);F.change();H.hide();V=true;F.focus();E.onSelect&&E.onSelect.call(this,b)},onChangeMonthYear:function(){setTimeout(J.refresh,0)},prevText:"<"};A.extend(X,Y);if(E.firstDay>-1){X.firstDay=E.firstDay}if(typeof F.attr("step")!=="undefined"){AJS.log("WARNING: The AJS date picker polyfill currently does not support the step attribute!")}P.datepicker(X);A("body").on("keydown",M);F.on("focusout keydown",U);F.on("propertychange keyup input paste",T)};M=function(Z){var X=A(Z.target);var a=X.closest(L).length||X.is(F);var Y=X.closest(".ui-datepicker-header").length;if((!a&&!Y)||Z.keyCode===AJS.keyCode.ESCAPE){H.hide();return }if(X[0]!==F[0]){Z.preventDefault()}};U=function(X){if(!(R)){A("body").on("focus blur click mousedown","*",M);R=true}};Q=function(X){if(!(V)){H.show()}else{V=false}};T=function(X){var Y=A(this).val();if(Y){P.datepicker("setDate",F.val());P.datepicker("option",{maxDate:F.attr("max"),minDate:F.attr("min")})}};H.destroyPolyfill=function(){H.hide();F.attr("placeholder",null);F.off("propertychange keyup input paste",T);F.off("focus click",Q);F.off("focusout keydown",U);A("body").off("keydown",U);if(AJS.DatePicker.prototype.browserSupportsDateField){F[0].type="date"}if(typeof P!=="undefined"){P.datepicker("destroy")}delete H.destroyPolyfill;delete H.show;delete H.hide};V=false;R=false;if(!(E.languageCode in AJS.DatePicker.prototype.localisations)){E.languageCode=""}var O=AJS.DatePicker.prototype.localisations[E.languageCode];var W="";var K=240;if(O.size==="large"){K=325;W="aui-datepicker-dialog-large"}var N={hideCallback:function(){A("body").off("focus blur click mousedown","*",M);R=false;if(C&&C._datePickerPopup){delete C._datePickerPopup}},hideDelay:null,noBind:true,persistent:true,closeOthers:false,width:K};if(E.position){N.calculatePositions=function(X,Z){var Y=A(X[0]);return E.position.call(this,Y,Z)}}J=AJS.InlineDialog(F,undefined,function(Y,X,Z){if(typeof P==="undefined"){L=Y;S(O)}C=A(X).closest(".aui-inline-dialog").get(0);if(C){C._datePickerPopup=J}Z()},N);J.addClass("aui-datepicker-dialog");J.addClass(W);F.on("focus click",Q);F.attr("placeholder",E.dateFormat);if(E.overrideBrowserDefault&&AJS.DatePicker.prototype.browserSupportsDateField){F[0].type="text"}};H.reset=function(){if(typeof H.destroyPolyfill==="function"){H.destroyPolyfill()}if((!(AJS.DatePicker.prototype.browserSupportsDateField))||E.overrideBrowserDefault){D()}};H.reset();return H};AJS.DatePicker.prototype.browserSupportsDateField=(A('<input type="date" />')[0].type==="date");AJS.DatePicker.prototype.defaultOptions={overrideBrowserDefault:false,firstDay:-1,languageCode:AJS.$("html").attr("lang")||"en-AU",dateFormat:A.datepicker.W3C};AJS.DatePicker.prototype.localisations={"":{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDay:0,isRTL:false,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],showMonthAfterYear:false,yearSuffix:""},af:{dayNames:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],dayNamesMin:["Son","Maa","Din","Woe","Don","Vry","Sat"],firstDay:1,isRTL:false,monthNames:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],showMonthAfterYear:false,yearSuffix:""},"ar-DZ":{dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesMin:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],firstDay:6,isRTL:true,monthNames:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],showMonthAfterYear:false,yearSuffix:""},ar:{dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesMin:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],firstDay:6,isRTL:true,monthNames:["كانون الثاني","شباط","آذار","نيسان","مايو","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],showMonthAfterYear:false,yearSuffix:""},az:{dayNames:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],dayNamesMin:["B","Be","Ça","Ç","Ca","C","Ş"],firstDay:1,isRTL:false,monthNames:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],showMonthAfterYear:false,yearSuffix:""},bg:{dayNames:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],dayNamesMin:["Нед","Пон","Вто","Сря","Чет","Пет","Съб"],firstDay:1,isRTL:false,monthNames:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],showMonthAfterYear:false,yearSuffix:""},bs:{dayNames:["Nedelja","Ponedeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesMin:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","Mart","April","Maj","Juni","Juli","August","Septembar","Oktobar","Novembar","Decembar"],showMonthAfterYear:false,yearSuffix:""},ca:{dayNames:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"],dayNamesMin:["Dug","Dln","Dmt","Dmc","Djs","Dvn","Dsb"],firstDay:1,isRTL:false,monthNames:["Gener","Febrer","Mar&ccedil;","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],showMonthAfterYear:false,yearSuffix:""},cs:{dayNames:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],dayNamesMin:["ne","po","út","st","čt","pá","so"],firstDay:1,isRTL:false,monthNames:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],showMonthAfterYear:false,yearSuffix:""},da:{dayNames:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],dayNamesMin:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],showMonthAfterYear:false,yearSuffix:""},de:{dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],showMonthAfterYear:false,yearSuffix:""},el:{dayNames:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],dayNamesMin:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],firstDay:1,isRTL:false,monthNames:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],showMonthAfterYear:false,yearSuffix:""},"en-AU":{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDay:1,isRTL:false,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],showMonthAfterYear:false,yearSuffix:""},"en-GB":{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDay:1,isRTL:false,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],showMonthAfterYear:false,yearSuffix:""},"en-NZ":{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDay:1,isRTL:false,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],showMonthAfterYear:false,yearSuffix:""},eo:{dayNames:["Dimanĉo","Lundo","Mardo","Merkredo","Ĵaŭdo","Vendredo","Sabato"],dayNamesMin:["Dim","Lun","Mar","Mer","Ĵaŭ","Ven","Sab"],firstDay:0,isRTL:false,monthNames:["Januaro","Februaro","Marto","Aprilo","Majo","Junio","Julio","Aŭgusto","Septembro","Oktobro","Novembro","Decembro"],showMonthAfterYear:false,yearSuffix:""},es:{dayNames:["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"],dayNamesMin:["Dom","Lun","Mar","Mi&eacute;","Juv","Vie","S&aacute;b"],firstDay:1,isRTL:false,monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],showMonthAfterYear:false,yearSuffix:""},et:{dayNames:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],dayNamesMin:["Pühap","Esmasp","Teisip","Kolmap","Neljap","Reede","Laup"],firstDay:1,isRTL:false,monthNames:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],showMonthAfterYear:false,yearSuffix:"",size:"large"},eu:{dayNames:["Igandea","Astelehena","Asteartea","Asteazkena","Osteguna","Ostirala","Larunbata"],dayNamesMin:["Iga","Ast","Ast","Ast","Ost","Ost","Lar"],firstDay:1,isRTL:false,monthNames:["Urtarrila","Otsaila","Martxoa","Apirila","Maiatza","Ekaina","Uztaila","Abuztua","Iraila","Urria","Azaroa","Abendua"],showMonthAfterYear:false,yearSuffix:""},fa:{dayNames:["يکشنبه","دوشنبه","سهشنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],dayNamesMin:["ي","د","س","چ","پ","ج","ش"],firstDay:6,isRTL:true,monthNames:["فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دي","بهمن","اسفند"],showMonthAfterYear:false,yearSuffix:""},fi:{dayNames:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],dayNamesMin:["Su","Ma","Ti","Ke","To","Pe","Su"],firstDay:1,isRTL:false,monthNames:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kes&auml;kuu","Hein&auml;kuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],showMonthAfterYear:false,yearSuffix:""},fo:{dayNames:["Sunnudagur","Mánadagur","Týsdagur","Mikudagur","Hósdagur","Fríggjadagur","Leyardagur"],dayNamesMin:["Sun","Mán","Týs","Mik","Hós","Frí","Ley"],firstDay:0,isRTL:false,monthNames:["Januar","Februar","Mars","Apríl","Mei","Juni","Juli","August","September","Oktober","November","Desember"],showMonthAfterYear:false,yearSuffix:""},"fr-CH":{dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesMin:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],firstDay:1,isRTL:false,monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],showMonthAfterYear:false,yearSuffix:""},fr:{dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesMin:["Dim.","Lun.","Mar.","Mer.","Jeu.","Ven.","Sam."],firstDay:1,isRTL:false,monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],showMonthAfterYear:false,yearSuffix:""},gl:{dayNames:["Domingo","Luns","Martes","M&eacute;rcores","Xoves","Venres","S&aacute;bado"],dayNamesMin:["Dom","Lun","Mar","M&eacute;r","Xov","Ven","S&aacute;b"],firstDay:1,isRTL:false,monthNames:["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"],showMonthAfterYear:false,yearSuffix:""},he:{dayNames:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],dayNamesMin:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],firstDay:0,isRTL:true,monthNames:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],showMonthAfterYear:false,yearSuffix:""},hr:{dayNames:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesMin:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],firstDay:1,isRTL:false,monthNames:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],showMonthAfterYear:false,yearSuffix:""},hu:{dayNames:["Vasárnap","Hétfö","Kedd","Szerda","Csütörtök","Péntek","Szombat"],dayNamesMin:["Vas","Hét","Ked","Sze","Csü","Pén","Szo"],firstDay:1,isRTL:false,monthNames:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],showMonthAfterYear:true,yearSuffix:""},hy:{dayNames:["կիրակի","եկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"],dayNamesMin:["կիր","երկ","երք","չրք","հնգ","ուրբ","շբթ"],firstDay:1,isRTL:false,monthNames:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"],showMonthAfterYear:false,yearSuffix:""},id:{dayNames:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],dayNamesMin:["Min","Sen","Sel","Rab","kam","Jum","Sab"],firstDay:0,isRTL:false,monthNames:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],showMonthAfterYear:false,yearSuffix:""},is:{dayNames:["Sunnudagur","M&aacute;nudagur","&THORN;ri&eth;judagur","Mi&eth;vikudagur","Fimmtudagur","F&ouml;studagur","Laugardagur"],dayNamesMin:["Sun","M&aacute;n","&THORN;ri","Mi&eth;","Fim","F&ouml;s","Lau"],firstDay:0,isRTL:false,monthNames:["Jan&uacute;ar","Febr&uacute;ar","Mars","Apr&iacute;l","Ma&iacute","J&uacute;n&iacute;","J&uacute;l&iacute;","&Aacute;g&uacute;st","September","Okt&oacute;ber","N&oacute;vember","Desember"],showMonthAfterYear:false,yearSuffix:""},it:{dayNames:["Domenica","Luned&#236","Marted&#236","Mercoled&#236","Gioved&#236","Venerd&#236","Sabato"],dayNamesMin:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],firstDay:1,isRTL:false,monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],showMonthAfterYear:false,yearSuffix:""},ja:{dayNames:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],dayNamesMin:["日","月","火","水","木","金","土"],firstDay:0,isRTL:false,monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],showMonthAfterYear:true,yearSuffix:"年"},ko:{dayNames:["일","월","화","수","목","금","토"],dayNamesMin:["일","월","화","수","목","금","토"],firstDay:0,isRTL:false,monthNames:["1월(JAN)","2월(FEB)","3월(MAR)","4월(APR)","5월(MAY)","6월(JUN)","7월(JUL)","8월(AUG)","9월(SEP)","10월(OCT)","11월(NOV)","12월(DEC)"],showMonthAfterYear:false,yearSuffix:"년"},kz:{dayNames:["Жексенбі","Дүйсенбі","Сейсенбі","Сәрсенбі","Бейсенбі","Жұма","Сенбі"],dayNamesMin:["жкс","дсн","ссн","срс","бсн","жма","снб"],firstDay:1,isRTL:false,monthNames:["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],showMonthAfterYear:false,yearSuffix:""},lt:{dayNames:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],dayNamesMin:["sek","pir","ant","tre","ket","pen","šeš"],firstDay:1,isRTL:false,monthNames:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],showMonthAfterYear:false,yearSuffix:""},lv:{dayNames:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],dayNamesMin:["svt","prm","otr","tre","ctr","pkt","sst"],firstDay:1,isRTL:false,monthNames:["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],showMonthAfterYear:false,yearSuffix:""},ml:{dayNames:["ഞായര്","തിങ്കള്","ചൊവ്വ","ബുധന്","വ്യാഴം","വെള്ളി","ശനി"],dayNamesMin:["ഞായ","തിങ്ക","ചൊവ്വ","ബുധ","വ്യാഴം","വെള്ളി","ശനി"],firstDay:1,isRTL:false,monthNames:["ജനുവരി","ഫെബ്രുവരി","മാര്ച്ച്","ഏപ്രില്","മേയ്","ജൂണ്","ജൂലൈ","ആഗസ്റ്റ്","സെപ്റ്റംബര്","ഒക്ടോബര്","നവംബര്","ഡിസംബര്"],showMonthAfterYear:false,yearSuffix:""},ms:{dayNames:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],dayNamesMin:["Aha","Isn","Sel","Rab","kha","Jum","Sab"],firstDay:0,isRTL:false,monthNames:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],showMonthAfterYear:false,yearSuffix:""},nl:{dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesMin:["zon","maa","din","woe","don","vri","zat"],firstDay:1,isRTL:false,monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],showMonthAfterYear:false,yearSuffix:""},no:{dayNames:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],dayNamesMin:["søn","man","tir","ons","tor","fre","lør"],firstDay:1,isRTL:false,monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],showMonthAfterYear:false,yearSuffix:""},pl:{dayNames:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],dayNamesMin:["Nie","Pn","Wt","Śr","Czw","Pt","So"],firstDay:1,isRTL:false,monthNames:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],showMonthAfterYear:false,yearSuffix:""},"pt-BR":{dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],firstDay:0,isRTL:false,monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],showMonthAfterYear:false,yearSuffix:""},pt:{dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],firstDay:0,isRTL:false,monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],showMonthAfterYear:false,yearSuffix:""},rm:{dayNames:["Dumengia","Glindesdi","Mardi","Mesemna","Gievgia","Venderdi","Sonda"],dayNamesMin:["Dum","Gli","Mar","Mes","Gie","Ven","Som"],firstDay:1,isRTL:false,monthNames:["Schaner","Favrer","Mars","Avrigl","Matg","Zercladur","Fanadur","Avust","Settember","October","November","December"],showMonthAfterYear:false,yearSuffix:""},ro:{dayNames:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"],dayNamesMin:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],firstDay:1,isRTL:false,monthNames:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],showMonthAfterYear:false,yearSuffix:""},ru:{dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesMin:["вск","пнд","втр","срд","чтв","птн","сбт"],firstDay:1,isRTL:false,monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],showMonthAfterYear:false,yearSuffix:""},sk:{dayNames:["Nedeľa","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"],dayNamesMin:["Ned","Pon","Uto","Str","Štv","Pia","Sob"],firstDay:1,isRTL:false,monthNames:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],showMonthAfterYear:false,yearSuffix:""},sl:{dayNames:["Nedelja","Ponedeljek","Torek","Sreda","&#x10C;etrtek","Petek","Sobota"],dayNamesMin:["Ned","Pon","Tor","Sre","&#x10C;et","Pet","Sob"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],showMonthAfterYear:false,yearSuffix:""},sq:{dayNames:["E Diel","E Hënë","E Martë","E Mërkurë","E Enjte","E Premte","E Shtune"],dayNamesMin:["Di","Hë","Ma","Më","En","Pr","Sh"],firstDay:1,isRTL:false,monthNames:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],showMonthAfterYear:false,yearSuffix:""},"sr-SR":{dayNames:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],dayNamesMin:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],showMonthAfterYear:false,yearSuffix:""},sr:{dayNames:["Недеља","Понедељак","Уторак","Среда","Четвртак","Петак","Субота"],dayNamesMin:["Нед","Пон","Уто","Сре","Чет","Пет","Суб"],firstDay:1,isRTL:false,monthNames:["Јануар","Фебруар","Март","Април","Мај","Јун","Јул","Август","Септембар","Октобар","Новембар","Децембар"],showMonthAfterYear:false,yearSuffix:""},sv:{dayNames:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],dayNamesMin:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],firstDay:1,isRTL:false,monthNames:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],showMonthAfterYear:false,yearSuffix:""},ta:{dayNames:["ஞாயிற்றுக்கிழமை","திங்கட்கிழமை","செவ்வாய்க்கிழமை","புதன்கிழமை","வியாழக்கிழமை","வெள்ளிக்கிழமை","சனிக்கிழமை"],dayNamesMin:["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"],firstDay:1,isRTL:false,monthNames:["தை","மாசி","பங்குனி","சித்திரை","வைகாசி","ஆனி","ஆடி","ஆவணி","புரட்டாசி","ஐப்பசி","கார்த்திகை","மார்கழி"],showMonthAfterYear:false,yearSuffix:""},th:{dayNames:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],dayNamesMin:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],firstDay:0,isRTL:false,monthNames:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],showMonthAfterYear:false,yearSuffix:""},tj:{dayNames:["якшанбе","душанбе","сешанбе","чоршанбе","панҷшанбе","ҷумъа","шанбе"],dayNamesMin:["якш","душ","сеш","чор","пан","ҷум","шан"],firstDay:1,isRTL:false,monthNames:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],showMonthAfterYear:false,yearSuffix:""},tr:{dayNames:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],dayNamesMin:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],firstDay:1,isRTL:false,monthNames:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],showMonthAfterYear:false,yearSuffix:""},uk:{dayNames:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],dayNamesMin:["нед","пнд","вів","срд","чтв","птн","сбт"],firstDay:1,isRTL:false,monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],showMonthAfterYear:false,yearSuffix:""},vi:{dayNames:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],dayNamesMin:["CN","T2","T3","T4","T5","T6","T7"],firstDay:0,isRTL:false,monthNames:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"],showMonthAfterYear:false,yearSuffix:""},"zh-CN":{dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesMin:["周日","周一","周二","周三","周四","周五","周六"],firstDay:1,isRTL:false,monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],showMonthAfterYear:true,yearSuffix:"年"},"zh-HK":{dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesMin:["周日","周一","周二","周三","周四","周五","周六"],firstDay:0,isRTL:false,monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],showMonthAfterYear:true,yearSuffix:"年"},"zh-TW":{dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesMin:["周日","周一","周二","周三","周四","周五","周六"],firstDay:1,isRTL:false,monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],showMonthAfterYear:true,yearSuffix:"年"}};A.fn.datePicker=function(C){return(new AJS.DatePicker(this,C))}}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:meta', location = 'js/meta.js' */
(function(b){AJS.asBooleanOrString=function(a){var b=a?a.toLowerCase():"";return"true"==b?!0:"false"==b?!1:a};var c={};AJS.Meta=b.extend({},AJS.Meta,{set:function(a,b){c[a]=b},get:function(a){if("undefined"!=typeof c[a])return c[a];a=b("meta[name='ajs-"+a+"']");if(a.length)return a=a.attr("content"),AJS.asBooleanOrString(a)},getBoolean:function(a){return!0===this.get(a)},getNumber:function(a){return+this.get(a)},getAllAsMap:function(){var a={};b("meta[name^=ajs-]").each(function(){a[this.name.substring(4)]=
this.content});return b.extend(a,c)}});AJS.Meta.Links={canonical:function(){return b('head link[rel="canonical"]').attr("href")},shortlink:function(){return b('head link[rel="shortlink"]').attr("href")}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:dark-features', location = 'js/dark-features.js' */
(function(e){var c=AJS.Meta.get("enabled-dark-features"),d=c?c.split(","):[],b={};e.each(d,function(){b[this]=!0});AJS.DarkFeatures={isEnabled:function(a){return!!b[a]},enable:function(a){a&&!b[a]&&(b[a]=!0)},disable:function(a){a&&b[a]&&delete b[a]},getAllEnabled:function(){return d}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:storage-manager', location = 'js/storage-manager.js' */
AJS.storageManager=function(h,i){var g=AJS.Meta.get("remote-user"),d=h+"."+(g?g+".":"")+i,e=!1,j=/\d+#/,f=function(a){if(!e)return null;var c,b=localStorage.getItem(d+"."+a);if(c=j.exec(b))if(b=b.replace(c[0],""),+new Date>c[0].replace("#",""))return localStorage.removeItem(d+"."+a),null;return b};try{e="localStorage"in window&&null!==window.localStorage}catch(k){AJS.log("Browser does not support localStorage, Confluence.storageManager will not work.")}return{getItem:f,doesContain:function(a){return!!f(a)},
getItemAsBoolean:function(a){a=f(a);return"false"==a?!1:"true"==a?!0:!!a},setItem:function(a,c,b){e&&(b=(b=1E3*(b||0))?+new Date+b+"#":"",localStorage.setItem(d+"."+a,b+c))},setItemQuietly:function(a,c,b){try{this.setItem(a,c,b)}catch(d){AJS.debug("Unable to write to localStorage. key: ",a,", value: ",c,", cause: ",d)}},removeItem:function(a){e&&localStorage.removeItem(d+"."+a)}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/aui-settings.js' */
AJS.$.ajaxSetup({traditional:!0});AJS.isIE6=!window.XMLHttpRequest;AJS.applyPngFilter=function(b,a,c){if(!AJS.isIE6)return!1;a=a||b.src;b.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+a+"', sizingMethod='"+(c||"scale")+"')";return!0};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/ajs/aui-draft.js' */
(function(e){"function"!==typeof AJS.defaultIfUndefined&&(AJS.defaultIfUndefined=function(a,b){var c=null,f=window;if("undefined"!=typeof b&&("object"===typeof b.defaultValue&&(c=b.defaultValue),"undefined"!=typeof b.rootObject))if("object"===typeof b.rootObject&&b.rootObject)f=b.rootObject;else return c;if("string"!==typeof a)return c;for(var e=a.split("."),d=0;d<e.length;d++){if(!Object.prototype.hasOwnProperty.call(f,e[d]))return c;f=f[e[d]]}return f});var g,i=!1;g=function(a){var b=!!window.localStorage;
if(typeof a!="boolean")return b?localStorage["debug-switch-enabled"]=="true":i;b?localStorage.setItem("debug-switch-enabled",a):i=a};AJS.debug=function(){if(g()){var a=Array.prototype.slice.call(arguments);a.splice(0,0,"DEBUG: "+(new Date).toLocaleTimeString());AJS.log.apply(AJS,a)}};AJS.debugEnabled=function(a){if(typeof a!="boolean")return g();g(a);AJS.log("STICKY FLAG DEBUG ENABLED: "+a)};AJS.logError=function(a,b){var c=[];if(e.browser.webkit)c.push(b);else for(prop in b)c.push(prop+": "+b[prop]);
AJS.log(a+c.join(", "))};AJS.toInit=function(a){e(function(){try{a.apply(this,arguments)}catch(b){AJS.logError("Failed to run init function: ",b);AJS.log("Failed toInit function is: "+a)}});return this};if(AJS.Meta.getBoolean("log-rendered")){var j=AJS.log,d=e('<div id="ajs-log" class="log"><h3>AJS Log</h3>\n</div>'),k=e("head"),h;d.toggleClass("hidden",!AJS.Meta.getBoolean("log-visible"));AJS.log=function(a){var b=typeof a==="undefined"?"undefined":a;if(h)d.next().length!=0&&h.append(d);else{var c=
document.createElement("script");c.type="text/x-log";c.text=b;k.append(c)}d.append(e("<p></p>").text("\n"+b));j.apply(AJS,arguments)};AJS.toInit(function(){h=e("body");h.append(d)})}AJS.Data=AJS.Data||AJS.Meta;AJS.getJSONWrap=function(a){var b=Confluence.getContextPath(),c=a.url;c.indexOf(b)!=0&&c.indexOf("http")!=0&&(c=b+c);a.loadingElement&&AJS.setVisible(a.loadingElement,true);var d=a.messageHandler;d.clearMessages();e.ajax({type:"GET",url:c,dataType:"json",data:a.data,error:function(){a.loadingElement&&
AJS.setVisible(a.loadingElement,false);d.displayMessages(a.errorMessage||"There was an error communicating with the server, please try again later.");a.errorCallback&&a.errorCallback()},success:function(b){a.loadingElement&&AJS.setVisible(a.loadingElement,false);d.handleResponseErrors(b)?a.errorCallback&&a.errorCallback():a.successCallback&&a.successCallback(b)}})};AJS.Validate=e.extend(function(){var a,b;return{email:function(b){a||(a=/^((([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
return a.test(b)},url:function(a){b||(b=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
return b.test(a)}}}(),AJS.Validate)})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/ajs/message-handler.js' */
(function(f){var i=function(a){var b,c;b=function(){return a.baseElement};c=function(a){var b=f("ul",a);b.length||(b=AJS("ul").appendTo(a));return b};return{getMessageContainer:b,clearMessages:function(){b().addClass("hidden").empty()},displayMessages:function(a){if(a&&a.length){f.isArray(a)||(a=[a]);for(var g=b(),h=c(g),d=0,e=a.length;d<e;d++)AJS("li").text(a[d]).appendTo(h);g.removeClass("hidden")}},handleResponseErrors:function(a,b){var c=[].concat(a.validationErrors||[]).concat(a.actionErrors||
[]).concat(a.errorMessage||[]);return c.length?(this.displayMessages(b||c),!0):!1}}};AJS.MessageHandler=function(a,b){var c=f.extend(i(a),b&&b(a));c.getMessageContainer().addClass("message-handler");c.clearMessages();return c};var d=!1,e;AJS.MessageHandler.closeOnNew=function(a){if("undefined"!==typeof a)d=a;else return d};AJS.MessageHandler.message=function(a,b,c){c=c||"success";d&&a.empty();AJS.messages[c](a,{body:b,closeable:!0,shadowed:!0})};AJS.MessageHandler.error=function(a,b){AJS.MessageHandler.message(a,
b,"error")};AJS.MessageHandler.actionMessage=function(a,b){e=e||f("#action-messages");AJS.MessageHandler.message(e,a,b)};AJS.MessageHandler.loading=function(a){AJS.MessageHandler.actionMessage(a,"info")}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/dialog.js' */
AJS.ConfluenceDialog=function(a){var b,a=a||{},a=jQuery.extend({},{keypressListener:function(c){if(27===c.keyCode){if(AJS.debug("dialog.js: escape keydown caught"),!jQuery(".aui-dropdown",b.popup.element).is(":visible"))if("function"==typeof a.onCancel)a.onCancel();else b.hide()}else 13===c.keyCode&&(AJS.debug("dialog.js: enter keydown caught"),jQuery(".aui-dropdown",b.popup.element).is(":visible")||"textarea"!=(c.target.nodeName&&c.target.nodeName.toLowerCase())&&"function"==typeof a.onSubmit&&setTimeout(a.onSubmit))},
width:865,height:530},a);b=new AJS.Dialog(a);jQuery(document).bind("hideLayer",function(c,d,e){if("popup"==d&&e==b&&"function"==typeof a.onCancel)a.onCancel()});return b};
AJS.toInit(function(a){AJS.bind("show.dialog",function(a,c){var d=AJS.Meta.get("page-id"),e=AJS.Meta.get("space-key"),f=AJS.Meta.get("editor-mode"),g=AJS.Meta.get("new-page");AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:c.dialog.id,properties:function(){var a={};d&&(a.pageid=d);e&&(a.spacekey=e);f&&(a.editormode=f);g&&(a.newpage=g);return a}()})});a(document).bind("showLayer",function(b,c,d){Confluence.runBinderComponents();if("popup"==c&&d){var b=a(d.element),e;if(!b.attr("data-lasttab-override")){b.attr("data-tab-default")&&
(e=b.attr("data-tab-default"));var f=Confluence.storageManager(b.attr("id")),c=f.getItem("last-tab");(e=null!=c?c:e)&&a(".page-menu-item:visible:eq("+e+") button",b).click();b.attr("data-lasttab-bound")||(a(".page-menu-item",b).each(function(b,c){a(c).click(function(){f.setItem("last-tab",b)})}),b.attr("data-lasttab-bound","true"))}}});AJS.Dialog.prototype.overrideLastTab=function(){a(this.popup.element).attr("data-lasttab-override","true")};AJS.Dialog.prototype.addHelpText=function(b,c){if(b){var d=
b;c&&(d=AJS.template(b).fill(c).toString());var e=this.page[this.curpage];e.buttonpanel||e.addButtonPanel();d=a("<div class='dialog-tip'></div>").html(d);e.buttonpanel.append(d);a("a",d).click(function(){window.open(this.href,"_blank").focus();return!1})}};AJS.Dialog.prototype.getTitle=function(){return a("#"+this.id+" .dialog-components:visible h2").text()};AJS.Dialog.prototype.isVisible=function(){return a("#"+this.id).is(":visible")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/aui-overrides.js' */
(function(){window.$=AJS.$;if("undefined"!=typeof AJS){var d=AJS.populateParameters;AJS.populateParameters=function(){d.apply(AJS,arguments);AJS.$("meta[name^=ajs-]").each(function(){var a=this.name,b=this.content,a=a.substring(4).replace(/(-\w)/g,function(a){return a.charAt(1).toUpperCase()});"undefined"==typeof AJS.params[a]&&(AJS.params[a]=AJS.asBooleanOrString(b))})}}AJS.$.fn.disable=function(){return this.each(function(){var a=AJS.$(this);a.is("a")&&a.css("pointer-events","none");var b=a.prop("disabled",
!0).attr("aria-disabled",!0).addClass("disabled").attr("id");b&&AJS.$("label[for="+b+"]",a.parent()).addClass("disabled")})};AJS.$.fn.enable=function(){return this.each(function(){var a=AJS.$(this);a.is("a")&&a.css("pointer-events","");var b=a.attr("disabled",!1).attr("aria-disabled",!1).removeClass("disabled").attr("id");b&&AJS.$("label[for="+b+"]",a.parent()).removeClass("disabled")})};AJS.$.debounce=function(a,b){var c;return function(){var d=this,e=arguments;c&&(clearTimeout(c),c=void 0);c=setTimeout(function(){a.apply(d,
e);c=void 0},b)}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-spinner', location = 'js-vendor/spin/spin.js' */
!function(I,K,A){var E=["webkit","Moz","ms","O"],P={},O;function G(Q,T){var R=K.createElement(Q||"div"),S;for(S in T){R[S]=T[S]}return R}function H(R){for(var Q=1,S=arguments.length;Q<S;Q++){R.appendChild(arguments[Q])}return R}var J=function(){var Q=G("style",{type:"text/css"});H(K.getElementsByTagName("head")[0],Q);return Q.sheet||Q.styleSheet}();function C(U,Q,V,Y){var R=["opacity",Q,~~(U*100),V,Y].join("-"),S=0.01+V/Y*100,X=Math.max(1-(1-U)/Q*(100-S),U),W=O.substring(0,O.indexOf("Animation")).toLowerCase(),T=W&&"-"+W+"-"||"";if(!P[R]){J.insertRule("@"+T+"keyframes "+R+"{0%{opacity:"+X+"}"+S+"%{opacity:"+U+"}"+(S+0.01)+"%{opacity:1}"+(S+Q)%100+"%{opacity:"+U+"}100%{opacity:"+X+"}}",J.cssRules.length);P[R]=1}return R}function N(T,U){var S=T.style,Q,R;if(S[U]!==A){return U}U=U.charAt(0).toUpperCase()+U.slice(1);for(R=0;R<E.length;R++){Q=E[R]+U;if(S[Q]!==A){return Q}}}function F(Q,S){for(var R in S){Q.style[N(Q,R)||R]=S[R]}return Q}function M(S){for(var Q=1;Q<arguments.length;Q++){var R=arguments[Q];for(var T in R){if(S[T]===A){S[T]=R[T]}}}return S}function L(Q){var R={x:Q.offsetLeft,y:Q.offsetTop};while((Q=Q.offsetParent)){R.x+=Q.offsetLeft,R.y+=Q.offsetTop}return R}var D={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:1/4,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto",position:"relative"};var B=function B(Q){if(!this.spin){return new B(Q)}this.opts=M(Q||{},B.defaults,D)};B.defaults={};M(B.prototype,{spin:function(X){this.stop();var b=this,Q=b.opts,R=b.el=F(G(0,{className:Q.className}),{position:Q.position,width:0,zIndex:Q.zIndex}),a=Q.radius+Q.length+Q.width,c,Z;if(X){X.insertBefore(R,X.firstChild||null);Z=L(X);c=L(R);F(R,{left:(Q.left=="auto"?Z.x-c.x+(X.offsetWidth>>1):parseInt(Q.left,10)+a)+"px",top:(Q.top=="auto"?Z.y-c.y+(X.offsetHeight>>1):parseInt(Q.top,10)+a)+"px"})}R.setAttribute("aria-role","progressbar");b.lines(R,b.opts);if(!O){var U=0,S=Q.fps,W=S/Q.speed,V=(1-Q.opacity)/(W*Q.trail/100),Y=W/Q.lines;(function T(){U++;for(var d=Q.lines;d;d--){var e=Math.max(1-(U+d*Y)%W*V,Q.opacity);b.opacity(R,Q.lines-d,e,Q)}b.timeout=b.el&&setTimeout(T,~~(1000/S))})()}return b},stop:function(){var Q=this.el;if(Q){clearTimeout(this.timeout);if(Q.parentNode){Q.parentNode.removeChild(Q)}this.el=A}return this},lines:function(S,U){var R=0,Q;function T(V,W){return F(G(),{position:"absolute",width:(U.length+U.width)+"px",height:U.width+"px",background:V,boxShadow:W,transformOrigin:"left",transform:"rotate("+~~(360/U.lines*R+U.rotate)+"deg) translate("+U.radius+"px,0)",borderRadius:(U.corners*U.width>>1)+"px"})}for(;R<U.lines;R++){Q=F(G(),{position:"absolute",top:1+~(U.width/2)+"px",transform:U.hwaccel?"translate3d(0,0,0)":"",opacity:U.opacity,animation:O&&C(U.opacity,U.trail,R,U.lines)+" "+1/U.speed+"s linear infinite"});if(U.shadow){H(Q,F(T("#000","0 0 4px #000"),{top:2+"px"}))}H(S,H(Q,T(U.color,"0 0 1px rgba(0,0,0,.1)")))}return S},opacity:function(R,Q,S){if(Q<R.childNodes.length){R.childNodes[Q].style.opacity=S}}});(function(){function Q(T,S){return G("<"+T+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',S)}var R=F(G("group"),{behavior:"url(#default#VML)"});if(!N(R,"transform")&&R.adj){J.addRule(".spin-vml","behavior:url(#default#VML)");B.prototype.lines=function(U,T){var S=T.length+T.width,a=2*S;function Z(){return F(Q("group",{coordsize:a+" "+a,coordorigin:-S+" "+-S}),{width:a,height:a})}var V=-(T.width+T.length)*2+"px",Y=F(Z(),{position:"absolute",top:V,left:V}),X;function W(c,b,d){H(Y,H(F(Z(),{rotation:360/T.lines*c+"deg",left:~~b}),H(F(Q("roundrect",{arcsize:T.corners}),{width:S,height:T.width,left:T.radius,top:-T.width>>1,filter:d}),Q("fill",{color:T.color,opacity:T.opacity}),Q("stroke",{opacity:0}))))}if(T.shadow){for(X=1;X<=T.lines;X++){W(X,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")}}for(X=1;X<=T.lines;X++){W(X)}return H(U,Y)};B.prototype.opacity=function(T,S,V,U){var W=T.firstChild;U=U.shadow&&U.lines||0;if(W&&S+U<W.childNodes.length){W=W.childNodes[S+U];W=W&&W.firstChild;W=W&&W.firstChild;if(W){W.opacity=V}}}}else{O=N(R,"animation")}})();if(typeof define=="function"){define("aui/internal/spin",[],function(){return B})}I.Spinner=B}(window,document);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-spinner', location = 'js-vendor/jquery/jquery.spin.js' */
(function(A){A.fn.spin=function(E,D){var C,B;if(typeof E==="string"){if(!E in A.fn.spin.presets){throw new Error("Preset '"+E+"' isn't defined")}C=A.fn.spin.presets[E];B=D||{}}else{if(D){throw new Error("Invalid arguments. Accepted arguments:\n$.spin([String preset[, Object options]]),\n$.spin(Object options),\n$.spin(Boolean shouldSpin)")}C=A.fn.spin.presets.small;B=A.isPlainObject(E)?E:{}}if(window.Spinner){return this.each(function(){var G=A(this),F=G.data();if(F.spinner){F.spinner.stop();delete F.spinner}if(E===false){return }B=A.extend({color:G.css("color")},C,B);F.spinner=new Spinner(B).spin(this)})}else{throw"Spinner class not available."}};A.fn.spin.presets={small:{lines:12,length:3,width:2,radius:3,trail:60,speed:1.5},medium:{lines:12,length:5,width:3,radius:8,trail:60,speed:1.5},large:{lines:12,length:8,width:4,radius:10,trail:60,speed:1.5}};A.fn.spinStop=function(){if(window.Spinner){return this.each(function(){var C=A(this),B=C.data();if(B.spinner){B.spinner.stop();delete B.spinner}})}else{throw"Spinner class not available."}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:raphael', location = '/includes/js/raphael/raphael-spinner.js' */
var Raphael=Raphael||{};Raphael.spinner=function(d,a,e){var b=30*a/60,a={color:e||"#fff",width:13*a/60,radius:b,length:a-b,top:0,left:0,zIndex:0,speed:1.042},c=$(d);c.spin(a);return function(){c.spinStop()}};Raphael.spinner=AJS.deprecate.fn(Raphael.spinner,"Raphael spinner",{alternativeName:"aui-spinner"});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.restplugin:confluence-rest', location = 'js/confluence-rest.js' */
AJS.REST=function(i){AJS.safeHTML=function(a){return a.replace(/[<>&"']/g,function(a){return"&#"+a.charCodeAt()+";"})};var j=function(a){if(!a)return AJS.log("REST result is null"),null;if(!a.link||!i.isArray(a.link))return AJS.log("No link for result with title: "+a.title),null;if(!a.title)return AJS.log("No title for result with id: "+a.id),null;var c={href:encodeURI(AJS.REST.findLink(a.link)),name:AJS.safeHTML(a.title),spaceName:AJS.safeHTML(AJS.REST.findSpaceName(a)),restObj:a};a.thumbnailLink?
c.icon=a.thumbnailLink.href+(a.version?"?version="+a.version+"&modificationDate=":""):c.className=a.iconClass||"content-type-"+a.type+("space"==a.type?"desc":"");return c};return{getBaseUrl:function(){return"/rest/prototype/1/"},makeUrl:function(a){return Confluence.getContextPath()+"/rest/prototype/1/"+a},findLink:function(a,c,b){c||(c="text/html");b||(b="alternate");if(AJS.$.isArray(a))for(var e=0,d=a.length;e<d;e++){var f=a[e];if(f.type==c&&f.rel==b)return f.href}return"#"},findSpaceName:function(a){return a.space?
a.space.name:""},convertFromRest:function(a){for(var c=[],b,e,d=0,f=a.length;d<f;d++){b=[];for(var g=0,h=a[d].length;g<h;g++)(e=j(a[d][g]))&&b.push(e);b.length&&c.push(b)}return c},wikiLink:function(a){var c=a.title,b=a.wikiLink&&a.wikiLink.slice(1,-1);b&&("attachment"==a.type&&a.space&&a.space.key==AJS.Meta.get("space-key")&&a.ownerId==AJS.params.attachmentSourceContentId)&&(b=b.substring(b.indexOf("^")));var e=b&&(c!=b?c+"|":"")+b;AJS.log("AJS.Editor.Autocompleter.Manager.makeLinkDetails =>"+e);
return{alias:c,destination:b,href:this.findLink(a.link),wikiMarkup:e}},makeRestMatrixFromData:function(a,c){var b=[],e=a[c];e&&e.length&&b.push(e);return b},makeRestMatrixFromSearchData:function(a,c){var b=[],e=a[c||"group"];if(e){for(var d={content:[],attachment:[],userinfo:[],spacedesc:[],page:[],blogpost:[],comment:[],personalspacedesc:[],mail:[]},f=0,g=e.length;f<g;f++){var h=e[f];d[h.name]&&d[h.name].push(h.result)}b=b.concat(d.content,d.attachment,d.userinfo,d.spacedesc,d.page,d.blogpost,d.comment,
d.personalspacedesc,d.mail)}else log("makeRestMatrixFromData","WARNING: Unknown rest object",a);return b}}}(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/confluence.js' */
(function(c){Confluence={getContextPath:function(){return AJS.Meta.get("context-path")},getBaseUrl:function(){return AJS.$("#confluence-base-url").attr("content")||""},getBuildNumber:function(){return AJS.Meta.get("build-number")},getContentId:function(){var a=AJS.Meta.get("content-id");+a||(a=AJS.Meta.get("page-id"));+a||(a="0");return a},getXsrfToken:function(){return AJS.Meta.get("atl-token")},runBinderComponents:function(){for(var a in Confluence.Binder)if(Confluence.Binder.hasOwnProperty(a))try{Confluence.Binder[a]()}catch(b){AJS.logError("Exception in initialising of component '"+
a+"': "+b.message)}},placeFocus:function(){Confluence.Binder.placeFocus()},unescapeEntities:function(a){var b={amp:"&",lt:"<",gt:">","#39":"'",quot:'"'};return null==a?a:(""+a).replace(/&[#\d\w]+;/g,function(a){var c=a.substring(1,a.length-1);return b[c]||a})},sessionCheck:function(a,b){var d=AJS.Meta.get("remote-user");if(d){var e=this.getContextPath()+AJS.REST.getBaseUrl()+"session/check/"+d,f=this;return c.getJSON(e).done(function(){AJS.debug("SESSION CHECK - OK - "+d)}).fail(function(){AJS.log("SESSION CHECK - FAIL - "+
d);f.sessionFail(a,b)})}},sessionFail:function(a,b){if(!a){var d=c(".aui-dialog:visible");if(d.length)a=d.find(".dialog-panel-body").empty(),d.find(".aui-button").attr("disabled","disabled");else throw Error("sessionFail method really expected a visible dialog about now :/");}b||(b=AJS.format("Your session has expired. Please {0}reload{1} the page to try again.",'<a class="reload" href="">',"</a>"),a.on("click","a.reload",function(){window.location.reload()}));AJS.messages.warning(a,{body:b,closeable:!1,shadowed:!0})},Binder:{placeFocus:function(){var a,
b=-1;AJS.$("input[data-focus]").each(function(){var d=AJS.$(this),c=d.attr("data-focus");c>b&&(b=c,a=d)});a&&a.focus()}}}})(AJS.$);AJS.toInit(function(){Confluence.runBinderComponents()});AJS.Confluence=Confluence;Confluence.hintManager=function(c){if(!AJS.$.isArray(c))throw Error("Hints passed in must be an array of strings");var a=Math.floor(Math.random()*c.length);return{getNextHint:function(){var b=c[a];a=(a+1)%c.length;return b}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/confluence-defaults.js' */
(function(){Confluence.Defaults={maxResults:50}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/confluence-highlighter.js' */
(function(){Confluence.Highlighter=function(b,i){var d,e;if(b&&b.length&&b[0]){for(var g=[],f=0,j=b.length;f<j;f++){var h=b[f];h&&g.push(h.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"))}d=RegExp("("+g.join("|")+")","gi");e=AJS.template(i||"<strong>{highlight}</strong>").fill({highlight:"$1"}).toString()}return{highlight:function(a,c){if(!a)return a;c||(a=AJS.template.escape(a));return!d?a:a.replace(d,e)},safeHighlight:function(a){if(!a)return a;if(d&&e)var c=e.split("$1"),b=c[0],c=c[1],a=a.replace(d,
"@@@hl@@@$1@@@endhl@@@");return _.escape(a).replace(/@@@hl@@@/gi,b).replace(/@@@endhl@@@/gi,c)}}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/position.js' */
AJS.Position=function(d){return{spaceAboveBelow:function(c,f){var b=f.position().top,a,g=f.outerHeight(!0),e;"IFRAME"==c.nodeName?(a=c.contentWindow||c.contentDocument,e=d(c).height(),a=d(a.document||a),b-=a.scrollTop()):(a=d(c),e=a.height(),b-=a.position().top);return{above:b,below:e-b-g}}}}(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/cache-manager.js' */
(function(){AJS.Confluence.cacheManager=function(a){if(!(this instanceof AJS.Confluence.cacheManager))return new AJS.Confluence.cacheManager(a);this.cache={};this.cacheStack=[];this.cacheSize=a||30};AJS.Confluence.cacheManager.prototype.get=function(a){var d=this.cache[a];if(d){var b=this.cacheStack[this.cacheStack.length-1][0]+1;d.weight=b;this.cacheStack.push([b,a]);return d.value}};AJS.Confluence.cacheManager.prototype.put=function(a,d){var b=this.cacheStack.length?this.cacheStack[this.cacheStack.length-
1][0]+1:0;this.cache[a]={weight:b,value:d};this.cacheStack.push([b,a]);for(var c;this.cacheStack.length>this.cacheSize;)c=this.cacheStack.shift(),b=c[0],c=c[1],b===this.cache[c].weight&&delete this.cache[c]};AJS.Confluence.cacheManager.prototype.clear=function(){this.cache={};this.cacheStack=[]}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/localstorage-cache-manager.js' */
(function(g){AJS.Confluence.localStorageCacheManager=function(b,h){this.cache={};this.cacheStack=[];this.cacheSize=h||30;if(window.localStorage&&!("string"!==typeof b&&0<b.length)){var a="Confluence."+b,c=a+".cache",d=a+".cacheStack",a=localStorage.getItem(c),e=localStorage.getItem(d),f=this;if(a&&e)try{this.cache=JSON.parse(a),this.cacheStack=JSON.parse(e)}catch(i){this.cache={},this.cacheStack={}}g(window).unload(function(){localStorage[c]=JSON.stringify(f.cache);localStorage[d]=JSON.stringify(f.cacheStack)})}};
AJS.Confluence.localStorageCacheManager.prototype=new AJS.Confluence.cacheManager})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/confluence-storage-manager.js' */
Confluence.storageManager=function(a){return AJS.storageManager("confluence",a)};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/input-driven-dropdown.js' */
(function(f){function e(c,d){this._effect="appear";this._timer=null;this.id=c;this.options=d;this.busy=this.inactive=!1;this.cacheManager=AJS.Confluence.cacheManager()}var g=function(c,d){var b=c.options,a=c.dd;a&&(a.hide(),a.$.remove());b.ajsDropDownOptions=b.ajsDropDownOptions||{};b.ajsDropDownOptions&&!b.ajsDropDownOptions.alignment&&(b.ajsDropDownOptions.alignment="left");b.ajsDropDownOptions.selectionHandler=b.ajsDropDownOptions.selectionHandler||function(a,c){if(a.type!="click"){var b=f("a",
c).first(),d=b.attr("href");if(a.type==="keydown"&&(a.metaKey||a.ctrlKey)&&a.which===13)window.open(d,"_blank");else{b.click();document.location=d}a.preventDefault()}};a=c.dd=AJS.dropDown(d.matrix,b.ajsDropDownOptions)[0];b.ajsDropDownOptions&&b.ajsDropDownOptions.className&&a.$.addClass(b.ajsDropDownOptions.className);b.dropdownPlacement?b.dropdownPlacement(a.$):(AJS.log("No dropdownPlacement function specified. Appending dropdown to the body."),f("body").append(a.$));var e=new Confluence.Highlighter(d.queryTokens||
[d.query]);f("li a:not(.dropdown-prevent-highlight) span",a.$).each(function(){var a=f(this);a.html(e.safeHighlight(a.text()))});var h=a.$.closest(".aui-dd-parent").width();h||(a.$.width("25em"),h=a.$.width());f("a span:not(.icon)",a.$).each(function(){var a=f(this),b=AJS("var","&#8230;"),c=b.width(),d=false;a.wrapInner(f("<em>"));f("em",a).each(function(){var a=f(this);a.show();if(this.offsetLeft+this.offsetWidth+c>h-20){for(var b=this.childNodes,e=false,j=b.length-1;j>=0;j--){var k=b[j],l=1,g=k.nodeType==
3?"nodeValue":"innerHTML",i=k[g];do if(l<=i.length)k[g]=i.substr(0,i.length-l++);else break;while(this.offsetLeft+this.offsetWidth+c>h-20);if(l<=i.length){e=true;break}}e?d=true:a.hide()}});if(d){a.append(b);this.elpss=b}});f("a span:not(.icon)",a.$).each(function(){var a=f(this),b;try{b=AJS.dropDown.getAdditionalPropertyValue(a,"spaceName")}catch(c){AJS.logError("Problem getting space name: "+c.message)}var d=a.text();b&&(d=d+(" ("+AJS("i").html(b).text()+")"));a.attr("title",d)});b.dropdownPostprocess&&
b.dropdownPostprocess(a.$);a.show(c._effect);"function"==typeof b.onShow&&b.onShow.call(a,a.$);return a};e.prototype.clearCache=function(){this.cacheManager.clear()};e.prototype.change=function(c,d,b){var a=this;if(c!=a._value){a._value=c;a.busy=!1;clearTimeout(a._timer);var f=RegExp("\\S{"+(a.options.minLengthForGetData||2)+",}");if(d||f.test(c))if(d=a.cacheManager.get(c))g(a,d);else{a.busy=!0;var e=function(){a.options.getDataAndRunCallback.call(a,c,function(){a.show.apply(this,arguments);b&&b(c)})};
0===a.options.dropDownDelay?e():a._timer=setTimeout(function(){e()},a.options.dropDownDelay||200)}else a.dd&&a.dd.hide(),b&&b(c)}};e.prototype.hide=function(){this.dd&&this.dd.hide()};e.prototype.remove=function(){var c=this.dd;c&&(this.hide(),c.$.remove());this.inactive=!0;this.options.onDeath&&this.options.onDeath()};e.prototype.show=function(c,d,b){this.inactive?AJS.log("Quick search abandoned before server response received, ignoring. "+this):(c={matrix:c,query:d,queryTokens:b},this.cacheManager.put(d,
c),g(this,c),this.busy=!1)};AJS.inputDrivenDropdown=function(c){return new e("inputdriven-dropdown",c)}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/quicksearchdropdown.js' */
(function(f){f.fn.quicksearch=function(c,l,a){l&&(a.onShow=l);a.makeParams=a.makeParams||function(b){return{query:b}};var m=function(b){if(b.statusMessage)b=[[{html:b.statusMessage,className:"error"}]];else if(a.makeRestMatrixFromData){b=a.makeRestMatrixFromData(b);b=AJS.REST.convertFromRest(b);a.addDropdownData&&(b=a.addDropdownData(b))}else b=b.contentNameMatches;return b},i,j;"function"==typeof c?(j=c(),i=function(b){var a=c();if(a!=j){j=a;b.clearCache()}return a}):i=function(){return c};a.getDataAndRunCallback=
a.getDataAndRunCallback||function(b,k){var g=this,h=i(g,b);if(a.includeUrlPrefix==void 0||a.includeUrlPrefix)h=(AJS.Meta.get("context-path")||"")+h;var c=f.data(g,"lastRequest");c&&c.abort();c=f.ajax({type:"GET",dataType:"json",url:h,xhrFields:{withCredentials:true},data:a.makeParams(b),success:function(a,c){f(window).trigger("quicksearch.ajax-success",{url:h,json:a,resultStatus:c});if(document.activeElement==d[0]){var e=m(a);a.results&&a.results.length>0?k.call(g,e,b,a.queryTokens):k.call(g,e)}},
global:false,timeout:5E3,error:function(a,c,e){f(window).trigger("quicksearch.ajax-error",{url:h,xmlHttpRequest:a,resultStatus:c,errorThrown:e});if(document.activeElement==d[0]&&c=="timeout"){a=m({statusMessage:"Timeout",query:b});k.call(g,a,null)}},complete:function(){f.removeData(g,"lastRequest");d.trigger("quick-search-loading-stop")}});f.data(g,"lastRequest",c);d.trigger("quick-search-loading-start")};var e=AJS.inputDrivenDropdown(a),d=f(this);d.keyup(function(a){a.which==13||a.which==9||!d.hasClass("placeholded")&&
e.change(this.value,false,function(a){d.attr("data-last-search",a)})});d.quickSearchControl=e;d.bind("clearCache.autocomplete",function(){e.clearCache()});d.bind("hide.autocomplete",function(){e.hide()});return d}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/placeholder.js' */
AJS.Confluence.Binder.placeholder=function(d){var d=d||document.body,e=AJS.$,f=["autocomplete-multiuser","select2-input"];"placeholder"in document.createElement("input")||e('textarea[placeholder][data-placeholder-bound!="true"],input[placeholder][data-placeholder-bound!="true"],input.default-text[data-placeholder-bound!="true"]',d).each(function(){for(var a=e(this).attr("data-placeholder-bound","true"),b=0,c=f.length;b<c;++b)if(a.hasClass(f[b]))return;a.bind("reset.placeholder",function(a,b){b.element.closest("form").bind("submit",
function(){b.element.hasClass("placeholded")&&b.element.val("")})});b=function(){if(!e.trim(a.val()).length){var b=a.attr("placeholder")||a.attr("data-default-text");a.val(b).addClass("placeholded").trigger("reset.placeholder",{element:a,defaultText:b});a.trigger("reset.default-text")}};c=function(){a.hasClass("placeholded")&&(a.val(""),a.removeClass("placeholded"))};b();a.blur(b).focus(c).mousedown(c)})};Confluence.Binder.inputDefaultText=Confluence.Binder.placeholder;
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/inserter.js' */
AJS.Confluence.Binder.insertOnEvent=function(){var a=AJS.$;a('.insert-on-event[data-inserter-bound!="true"]').each(function(){var b=a(this).attr("data-inserter-bound","true"),f=a(b.attr("data-target"))[0],c=b.attr("data-event"),d=b.attr("data-insert-position"),g=b.attr("data-insert-unique-key");f&&(c&&d)&&a(self).bind(c,function(c,e){if(f==e.target){if(g){var i=e.content[g],h={};a(".key-holder",d).each(function(){h[a(this).attr("data-key")]=!0});if(i in h)return}a(d).append(AJS.template(b.text()).fill(e.content))}})})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/autocomplete-user.js' */
Confluence.Binder.autocompleteUserOrGroup=function(e){var e=e||document.body,f=AJS.$,k=function(d){if(!d||!d.result)throw Error("Invalid JSON format");f.each(d.result,function(a,b){b.key=b.username||b.name;"group"===b.type&&(b.title=b.name,b.link=[],b.thumbnailLink={href:AJS.contextPath()+"/images/icons/avatar_group_48.png"})});var g=[];g.push(d.result);return g};f.each(["user","group","user-or-group"],function(d,g){f("input.autocomplete-"+g+'[data-autocomplete-user-or-group-bound!="true"]',e).each(function(){var a=
f(this).attr("data-autocomplete-user-or-group-bound","true").attr("autocomplete","off"),b=a.attr("data-max")||10,d=a.attr("data-alignment")||"left",e=a.attr("data-dropdown-target"),c=null,i=a.attr("data-target"),j=i&&f(i);e?c=f(e):(c=f("<div></div>"),a.after(c));a.attr("data-resize-to-input")&&(c.width(a.outerWidth()),c.addClass("resize-to-input"));c.addClass("aui-dd-parent autocomplete");a.quicksearch(AJS.REST.getBaseUrl()+"search/"+g+".json",function(){a.trigger("open.autocomplete-user-or-group");
g==="user"&&a.trigger("open.autocomplete-user")},{makeParams:function(a){return{"max-results":b,query:a}},dropdownPlacement:function(a){c.append(a)},makeRestMatrixFromData:k,addDropdownData:function(h){if(!h.length){var b=a.attr("data-none-message");b&&h.push([{name:b,className:"no-results",href:"#"}])}return h},ajsDropDownOptions:{alignment:d,displayHandler:function(a){return a.restObj&&a.restObj.username?a.name+" ("+AJS.escapeHtml(a.restObj.username)+")":a.name},selectionHandler:function(b,d){if(d.find(".search-for").length){a.trigger("selected.autocomplete-user-or-group",
{searchFor:a.val()});g==="user"&&a.trigger("selected.autocomplete-user",{searchFor:a.val()})}else{if(!d.find(".no-results").length){var c=f("span:eq(0)",d).data("properties");if(j){var e=c.restObj.title;c.restObj.username&&(e=e+(" ("+c.restObj.username+")"));a.val(e);j.val(c.restObj.key)}else a.val(c.restObj.key);a.trigger("selected.autocomplete-user-or-group",{content:c.restObj});g==="user"&&a.trigger("selected.autocomplete-user",{content:c.restObj})}this.hide();b.preventDefault()}}}})})});Confluence.Binder.autocompleteUser=
function(){}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/autocomplete-content.js' */
(function(c){var n=function(a){if(!a||!a.group)throw Error("Invalid JSON format");for(var d=[],c=0,e=a.group.length;c<e;c++)d.push(a.group[c].result);return d},e=function(a,d,e,f){var b=c(a);if(!b.attr("data-autocomplete-content-bound")){"string"==typeof d&&(d=[d]);b.attr("data-autocomplete-content-bound","true").attr("autocomplete","off");var o=d.join(","),i=b.attr("data-max")||10,a=b.attr("data-alignment")||"left",h=b.attr("data-spacekey"),j=b.attr("data-none-message"),k=b.attr("data-search-link-message"),
p=b.attr("data-template")||e,l=b.attr("data-target"),m=b.attr("data-dropdown-target"),g=null;m?g=c(m):(g=c("<div></div>"),b.after(g));g.addClass("aui-dd-parent autocomplete");b.focus(function(){h=b.attr("data-spacekey")});b.quicksearch(AJS.REST.getBaseUrl()+"search/name.json",null,{onShow:function(){b.trigger("open.autocomplete-content",{contentTypes:d})},makeParams:function(a){a={"max-results":i,pageSize:i,type:o,query:a};if(h)a.spaceKey=h;return a},dropdownPlacement:function(a){g.append(a)},makeRestMatrixFromData:n,
addDropdownData:function(a){a.length||j&&a.push([{name:j,className:"no-results",href:"#"}]);if(k){var d=AJS.escapeHtml(b.val()),d=AJS.format(k,d);a.push([{className:"search-for",name:d,href:"#"}])}return a},ajsDropDownOptions:{alignment:a,displayHandler:f,selectionHandler:function(a,f){AJS.debug("autocomplete-content: ajsDropDownOptions.selectionHandler");if(f.find(".search-for").length)b.trigger("selected.autocomplete-content",{contentTypes:d,searchFor:b.val()});else{if(f.find(".no-results").length)AJS.debug("no results selected");
else{var g=f.data("properties");b.val(AJS.template(p).fillHtml(g.restObj));if(l){var h=AJS.template(e).fillHtml(g.restObj);c(l).val(h)}b.trigger("selected.autocomplete-content",{contentTypes:d,content:g.restObj,selection:f})}this.hide();a.preventDefault()}}}})}};Confluence.Binder.autocompleteSpace=function(a){a=a||document.body;c("input.autocomplete-space",a).each(function(){e(this,["spacedesc","personalspacedesc"],"{name}",function(a){return a.name})})};Confluence.Binder.autocompleteAttachment=function(a){a=
a||document.body;c("input.autocomplete-attachment",a).each(function(){e(this,"attachment","{fileName}",function(a){var c=a.restObj&&a.restObj.fileName||a.name;a.restObj&&(a.restObj.space&&a.restObj.space.title)&&(c+=" ("+a.restObj.space.title+")");return c})})};var f=function(a){return a.restObj&&a.restObj.title&&AJS.escapeHtml(a.restObj.title)||a.name};Confluence.Binder.autocompletePage=function(a){a=a||document.body;c("input.autocomplete-page",a).each(function(){e(this,"page","{title}",f)})};Confluence.Binder.autocompleteBlogpost=
function(a){a=a||document.body;c("input.autocomplete-blogpost",a).each(function(){e(this,"blogpost","{title}",f)})};Confluence.Binder.autocompleteConfluenceContent=function(a){a=a||document.body;c("input.autocomplete-confluence-content",a).each(function(){e(this,["page","blogpost"],"{title}",f)})};Confluence.Binder.autocompleteSearch=function(a){a=a||document.body;c("input.autocomplete-search",a).each(function(){e(this,[],"{title}",f)})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/attachment-uploader.js' */
(function(d){Confluence.AttachmentUploader=function(e,g){var a,f,c,b;a=d.extend({getForm:function(){return d("form",e.baseElement)},getUploadingMessageElement:function(){return d(".upload-in-progress",e.baseElement)},pack:function(){},displayErrors:function(a){b.displayMessages(a);this.pack()},clearErrors:function(){b.clearMessages();this.pack()},setUploadInProgress:function(a,c){var b=this.getUploadingMessageElement();a&&b.html(c||this.getDefaultUploadingMessage());AJS.setVisible(b,a);AJS.setVisible(this.getForm(),
!a)},onUploadSuccess:function(){},getMessageHandler:function(){b||(b=AJS.MessageHandler({baseElement:d(".warning",e.baseElement)}));return b},getDefaultErrorMessage:function(){return "Could not upload the file to Confluence. The server may be unavailable."},getDefaultUploadingMessage:function(){return "File uploading\u2026"},getContentId:function(){return AJS.Meta.get("attachment-source-content-id")}},g&&g(e));f=a.getMessageHandler();c=a.getForm();AJS.Meta.getBoolean("can-attach-files")?(c.ajaxForm({dataType:"json",
timeout:36E5,data:{contentId:a.getContentId(),responseFormat:"html"},resetForm:!0,beforeSubmit:function(){a.setUploadInProgress(!0);f.clearMessages()},success:function(b){a.setUploadInProgress(!1);if(!f.handleResponseErrors(b,a.getDefaultErrorMessage()))a.onUploadSuccess(b.attachmentsAdded||[])},error:function(b){a.setUploadInProgress(!1);f.displayMessages(a.getDefaultErrorMessage());AJS.logError("Response from server was: "+b.responseText)}}),c.find("input:file").change(function(){c.submit()})):
c.remove();return a}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/hover-user.js' */
Confluence.Binder.userHover=function(){var d=[],f=Confluence.getContextPath(),b=AJS.$,e=function(a){var c=d[a],g={username:c,target:this};b(self).trigger("hover-user.open",g);b(".ajs-menu-bar",this).ajsMenu();b(".follow, .unfollow",this).each(function(){var a=b(this).click(function(d){if(!a.hasClass("waiting")){var e=a.hasClass("unfollow")?"/unfollowuser.action":"/followuser.action";a.addClass("waiting");AJS.safe.post(f+e+"?username="+encodeURIComponent(c)+"&mode=blank",{},function(){a.removeClass("waiting");
a.parent().toggleClass("follow-item").toggleClass("unfollow-item");b(self).trigger("hover-user.follow",g)});return AJS.stopEvent(d)}})})},h=AJS.DarkFeatures.isEnabled("show.business.group.in.user.hover");return function(){b("span.user-hover-trigger, a.confluence-userlink, img.confluence-userlink, a.userLogoLink").filter("[data-user-hover-bound!='true']").each(function(){var a=b(this),c=a.attr("data-username");a.attr("title","").attr("data-user-hover-bound","true");b("img",a).attr("title","");a=b.inArray(c,
d);-1==a&&(d.push(c),a=b.inArray(c,d));b(this).addClass("userlink-"+a)});b.each(d,function(a){var c=f+"/users/userinfopopup.action?username="+encodeURIComponent(d[a]);h&&(c+="&profileGroups=business");AJS.contentHover(b(".userlink-"+a),a,c,e)})}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/favourites.js' */
(function(a){var i=[],g=function(b,d){b.attr("data-favourites-bound")||(b.delegate(".icon-add-fav, .icon-remove-fav","click",function(e){var f=a(e.target),c,e=b.attr("data-entity-type");c=d&&d.getEntityId&&"function"==typeof d.getEntityId?d.getEntityId(f):b.attr("data-entity-id");if(i[c])AJS.log("Already busy toggling favourite for "+e+" '"+c+"'. Ignoring request.");else{i[c]=!0;var h=f.hasClass("icon-remove-fav"),g=f.parent().find(".icon-wait"),j,k;"page"==e&&(j=Confluence.getContextPath()+"/json/"+
(h?"removefavourite.action":"addfavourite.action"),k={entityId:c});"space"==e&&(j=Confluence.getContextPath()+"/json/"+(h?"removespacefromfavourites.action":"addspacetofavourites.action"),k={key:c});f.addClass("hidden");g.removeClass("hidden");AJS.safe.ajax({url:j,type:"POST",data:k}).done(function(a){AJS.debug(a)}).fail(function(a,b){AJS.debug("Error Toggling Favourite: "+b)}).always(function(){g.addClass("hidden");f.parent().find(h?".icon-add-fav":".icon-remove-fav").removeClass("hidden");delete i[c];
AJS.trigger(h?"remove-fav-complete":"add-fav-complete")});return!1}}),b.attr("data-favourites-bound",!0))};AJS.Confluence.Binder.favourites=function(){a(".entity-favourites").each(function(){a(this).attr("data-favourites-bound")||g(a(this),{})})};a.fn.favourites=function(b){a(this).each(function(){var d=a(this);g(d,b)})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/js/components/binders/watches.js' */
(function(c){var h=[],i=function(a,e){a.attr("data-watching-bound")||(a.delegate(".icon-start-watching, .icon-stop-watching, .link-start-watching, .link-stop-watching","click",function(g){var b=c(g.target),d,g=a.attr("data-entity-type"),i=a.attr("data-entity-content-type");d=e&&e.getEntityId&&"function"==typeof e.getEntityId?e.getEntityId(b):a.attr("data-entity-id");if(h[d])AJS.log("Already busy toggling favourite for "+g+" '"+d+"'. Ignoring request.");else{h[d]=!0;var f=b.hasClass("icon-stop-watching")||
b.hasClass("link-stop-watching"),m=b.hasClass("icon-stop-watching"),j=b.parent().find(".icon-wait"),k,l;"page"==g&&(k=Confluence.getContextPath()+"/users/"+(f?"removepagenotificationajax.action":"addpagenotificationajax.action"),l={pageId:d});"space"==g&&(k=Confluence.getContextPath()+"/users/"+(f?"removespacenotificationajax.action":"addspacenotificationajax.action"),l={spaceKey:d,contentType:i});b.addClass("hidden");j.removeClass("hidden");AJS.safe.ajax({url:k,type:"POST",data:l,success:function(a){AJS.log(a);
j.addClass("hidden");m?b.parent().find(f?".icon-start-watching":".icon-stop-watching").removeClass("hidden"):b.parent().find(f?".link-start-watching":".link-stop-watching").removeClass("hidden");delete h[d]},error:function(a,c){j.addClass("hidden");m?b.parent().find(f?".icon-start-watching":".icon-stop-watching").removeClass("hidden"):b.parent().find(f?".link-start-watching":".link-stop-watching").removeClass("hidden");AJS.log("Error Toggling Watching: "+c);delete h[d]}});return!1}}),a.attr("data-watching-bound",
!0))};AJS.Confluence.Binder.watching=function(){c(".entity-watching").each(function(){c(this).attr("data-watching-bound")||i(c(this),{})})};c.fn.watching=function(a){c(this).each(function(){var e=c(this);i(e,a)})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:core', location = '/includes/soy/dialog.soy' */
// This file was automatically generated from dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dialog == 'undefined') { Confluence.Templates.Dialog = {}; }


Confluence.Templates.Dialog.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.customHelpLink({href: opt_data.href, text: soy.$$escapeHtml("Help")}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dialog.customHelpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="dialog-help-link"><a href="', soy.$$escapeHtml(opt_data.href), '" target="_blank">', soy.$$escapeHtml(opt_data.text), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:property-panel-js', location = '/includes/js/components/property-panel.js' */
(function(j){var l=function(c,d){d=d||{};setTimeout(function(){var b=AJS.Rte.Content.offset(c.anchor),h=c.panel.width(),e=h+b.left-j(window).width()+10,a=j(c.anchor).outerHeight(),e=b.left-(0<e?e:0)-0,a=c.shouldFlip?b.top-7-c.panel.outerHeight()-4:b.top+7+a;if(c.options.anchorIframe)var f=j(c.options.anchorIframe),f=f.offset().top+f.height()-c.panel.outerHeight()-10,a=Math.min(a,f);c.panel.find(".property-panel-arrow").css({left:Math.min(Math.abs(b.left-e)+16,h-12)});e=Math.max(0,e);b={top:a,left:e,
"z-index":3E3};h=c.panel.add();d.animate?h.animate(b,d.animateDuration):h.css(b)},d.delay||0)};AJS.Confluence.PropertyPanel={shouldCreate:!0,current:null,createFromButtonModel:function(c,d,b,h){for(var e=AJS("div").attr({"class":"panel-buttons"}),a=0,f=b.length;a<f;a++)if(b[a]){var g=b[a],i=g.html||'<span class="icon"></span>',k=[];g.text&&(i+='<span class="panel-button-text">'+g.text+"</span>");g.className&&k.push(g.className);g.disabled&&k.push("disabled");g.selected&&k.push("selected");!b[a+1]&&
k.push("last");!b[a-1]&&k.push("first");g.html?i=j(g.html):(i=AJS("a").attr({href:b[a].href||"#"}).addClass("aui-button").html(i),g.disabled?(i.attr("title",g.disabledText),i.disable(),i.click(function(a){return AJS.stopEvent(a)})):b[a].click&&function(a,b,c){b.click(function(d){a.click(b,c);return AJS.stopEvent(d)})}(b[a],i,d));g.tooltip&&i.attr("data-tooltip",g.tooltip);i.addClass(k.join(" "));e.append(i)}return this.create(c,d,e,h)},create:function(c,d,b,h){h=h||{};AJS.Rte.BookmarkManager.storeBookmark();
var e=j("#property-panel"),a,f=void 0==h.enableFlip||h.enableFlip;e.length&&this.destroy();e=AJS("div").addClass("aui-property-panel-parent").addClass(c+"-panel aui-box-shadow").attr("id","property-panel").appendTo("body");a=AJS("div").addClass("aui-property-panel").append(b);e.append(a).css({top:0,left:-1E4});if(a=f){var f=j(h.anchorIframe||j(d).parent()),g=j(d);a=e.outerHeight()+10;f=AJS.Position.spaceAboveBelow(f[0],g);a=f.below>=a?!1:f.above>=a}var i=this;b.find(".last:last").css({"margin-right":0});
b=e;f=j('<div class="property-panel-arrow"></div>');a&&f.addClass("property-panel-bottom-arrow").css({top:b.outerHeight()});b.prepend(f);this.current={anchor:d,panel:e,hasAnchorChanged:function(a){return a&&i.hasAnchorChanged(a)},snapToElement:function(a){l(this,a)},shouldFlip:a,tip:f,options:h,updating:!0,type:c};l(this.current);a=this.current;AJS.$(document).bind("keydown.property-panel.escape",function(a){27===a.keyCode&&AJS.Confluence.PropertyPanel.destroy()});AJS.$(document).bind("click.property-panel",
function(a){AJS.$(a.target).closest("#property-panel").length||AJS.Confluence.PropertyPanel.destroy()});AJS.trigger("created.property-panel",this.current);this.current.updating=!1;return this.current},destroy:function(){this.current?this.current.updating?AJS.log("PropertyPanel.destroy: called while updating, returning"):(AJS.trigger("destroyed.property-panel",this.current),AJS.$(document).unbind(".property-panel").unbind(".contextToolbar"),this.current.panel.remove(),this.current=null):AJS.log("PropertyPanel.destroy: called with no current PropertyPanel, returning")},
hasAnchorChanged:function(c){var d=this.current;return d&&j(d.anchor)[0]==j(c)[0]?d.options.originalHeight&&d.options.originalHeight!=j(c).height():!0}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-autocomplete-deprecated', location = 'js/jquery/jquery.autocomplete.js' */
(function(A){A.fn.autocomplete=function(B,C,K){K=typeof C=="function"?C:(typeof K=="function"?K:function(){});C=!isNaN(Number(C))?C:3;var J=this;J[0].lastSelectedValue=J.val();var H=A(document.createElement("ol"));var D=J.offset();var G=parseInt(A("body").css("border-left-width"));H.css({position:"absolute",width:J.outerWidth()-2+"px"});H.addClass("autocompleter");this.after(H);H.css({margin:(Math.abs(this.offset().left-H.offset().left)>=Math.abs(this.offset().top-H.offset().top))?J.outerHeight()+"px 0 0 -"+J.outerWidth()+"px":"-1px 0 0 0"});H.hide();function F(){H.hide();A(document).unbind("click",F)}function E(){var L=J.val();if(L.length>=C&&L!=J[0].lastQuery&&L!=J[0].lastSelectedValue){A.getJSON(B+encodeURI(L),function(P){var R="";L=L.toLowerCase();var U=L.split(" ");for(var Q=0,W=P.length;Q<W;Q++){var S=false;if(P[Q].fullName&&P[Q].username){var V=P[Q].fullName+" ("+P[Q].username+")";var M=P[Q].fullName.split(" ");for(var O=0,T=M.length;O<T;O++){for(var N=0;N<U.length;N++){if(M[O].toLowerCase().indexOf(U[N])==0){M[O]="<strong>"+M[O].substring(0,U[N].length)+"</strong>"+M[O].substring(U[N].length);S=true}}}if(!S){for(var N=0;N<U.length;N++){if(P[Q].username&&P[Q].username.toLowerCase().indexOf(U[N])==0){P[Q].username="<strong>"+P[Q].username.substring(0,U[N].length)+"</strong>"+P[Q].username.substring(U[N].length)}}}P[Q].fullName=M.join(" ");R+="<li><span>"+P[Q].fullName+"</span> <span class='username-in-autocomplete-list'>("+P[Q].username+")</span><i class='fullDetails'>"+V+"</i><i class='username'>"+P[Q].username+"</i><i class='fullName'>"+P[Q].fullName+"</i></li>"}if(P[Q].status){R+="<li>"+P[Q].status+"</li>"}}H.html(R);A("li",H).click(function(Y){Y.stopPropagation();var X=A("i.fullDetails",this).html();I(X)}).hover(function(){A(".focused").removeClass("focused");A(this).addClass("focused")},function(){});A(document).click(F);H.show()});J[0].lastQuery=L}else{if(L.length<C){F()}}}J.keydown(function(M){var L=this;if(this.timer){clearTimeout(this.timer)}var N={"40":function(){var O=A(".focused").removeClass("focused").next();if(O.length){O.addClass("focused")}else{A(".autocompleter li:first").addClass("focused")}},"38":function(){var O=A(".focused").removeClass("focused").prev();if(O.length){O.addClass("focused")}else{A("li:last",H).addClass("focused")}},"27":function(){F()},"13":function(){var O=A(".focused i.fullDetails").html();I(O)},"9":function(){this[13]();setTimeout(function(){L.focus()},0)}};if(H.css("display")!="none"&&M.keyCode in N){M.preventDefault();N[M.keyCode]()}this.timer=setTimeout(E,300)});function I(N){var M=J.val();if(N){J[0].lastSelectedValue=N;J.val(N);var L={input:J,originalValue:M,value:N,fullName:A(".focused i.fullName").text(),username:A(".focused i.username").text()};K(L);F()}}};AJS.deprecate.prop(A.fn,"autocomplete",{displayName:"jquery.autocomplete.js",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-393."})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.content.action.menu:linkpopup-resources', location = '/includes/js/linkpage.js' */
AJS.toInit(function(a){if(a("link[rel=canonical]").length){var c=null;a("#link-to-page-link").click(function(d){if(!c){c=(new AJS.Dialog(600,210,"link-page-popup")).addHeader("Link to this Page").addPanel("Link to this Page","<form id='link-page-popup-form' class='aui'><fieldset></fieldset></form>").addCancel("Close",function(){c.hide();return!1});Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.enabled&&
c.addHelpText(AJS.format("Shortcut tip: Pressing \u003cb\u003e{0}\u003c/b\u003e also opens this dialog box","k"));var b=[{label:"Link",id:"link",value:a("link[rel=canonical]").attr("href")},{label:"Tiny Link",id:"tiny-link",value:a("link[rel=shortlink]").attr("href")}];a.each(b,function(){a("#link-page-popup-form fieldset").append(AJS.format("<div class='field-group'><label for=''link-popup-field-{0}''>{1}:</label><input id=''link-popup-field-{0}'' readonly=''readonly'' value='''' class=''text'' type=''text''></div>",
this.id,this.label)).find("input:last").val(this.value)});b=a("#link-page-popup-form fieldset input.text");b.focus(function(){a(this).select()});b.mouseup(function(a){a.preventDefault()})}(b=a(this).parents(".ajs-drop-down")[0])&&b.hide();c.show();a("#link-page-popup-form #link-popup-field-tiny-link").select();return AJS.stopEvent(d)})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.extra.officeconnector:editinoffice', location = 'templates/extra/editinword/editInOffice.js' */
AJS.toInit(function(B){var A=AJS.Data.get("context-path");
var C=B("#edit-in-word, #edit-in-word-pathauth, a.office-editable, a.office-editable-pathauth");
C.click(function(G){G.preventDefault();
var F=B(this);
var E=F.attr("data-use-path-auth");
if(typeof (E)=="undefined"){E=(F.attr("id")=="edit-in-word-pathauth"||F.hasClass("office-editable-pathauth"))
}else{E=(E==="true")
}var H=F.attr("href");
var D=F.attr("data-prog-id");
if(typeof (D)=="undefined"){D=getProgID(H)
}return doEditInOffice(A,H,D,E)
})
});
function getProgID(A){var B=A.substring(A.lastIndexOf(".")+1);
switch(B){case"ppt":case"pptx":case"ppsx":case"pot":case"potx":case"pptm":return"PowerPoint.Show";
case"doc":case"docx":case"dot":case"dotx":return"Word.Document";
case"xls":case"xlt":case"xlsx":case"xlst":case"xlsm":case"xltx":return"Excel.Sheet";
default:return""
}}function filterPath(B,C,A){AJS.$.ajax({url:contextPath+"/rest/office/1.0/authtoken",success:function(G){if(G.token){var D=B.split("/");
var F="";
for(var E=0;
E<D.length-1;
E++){if(D[E].length){F=F+"/"+D[E]
}}F=F+"/ocauth/"+G.token+"/"+D[D.length-1];
C(F)
}else{A("Unable to retrieve a temporary auth token. Check your server logs.")
}},error:function(D,F,E){A("Ajax error retrieving token: "+F+", error from server: "+E)
},statusCode:{403:function(){A("The current configuration requires you to be logged in to use the Office Connector.")
}}})
}function getCookie(B){var F=document.cookie.split(";");
var C="";
var D="";
var E="";
for(var A=0;
A<F.length;
A++){C=F[A].split("=");
D=C[0].replace(/^\s+|\s+$/g,"");
if(D==B){if(C.length>1){E=unescape(C[1].replace(/^\s+|\s+$/g,""))
}return E
}C=null;
D=""
}return null
}function getBaseUrl(){return location.protocol+"//"+location.host
}function handleTokenError(A){alert(A)
}function doEditInOffice(B,H,D,G){var F=getBaseUrl();
if(window.ActiveXObject!==undefined){var A;
try{A=new ActiveXObject("SharePoint.OpenDocuments.1")
}catch(E){window.alert("Unable to create an ActiveX object to open the document. This is most likely because of the security settings for your browser.");
return false
}if(A){if(G){filterPath(H,function(I){A.EditDocument(F+I,D)
},handleTokenError)
}else{A.EditDocument(F+H,D)
}return false
}else{window.alert("Cannot instantiate the required ActiveX control to open the document. This is most likely because you do not have Office installed or you have an older version of Office.");
return false
}}else{if(window.URLLauncher){var C=navigator.appVersion.indexOf("Mac")!=-1;
if(G&&!C){H=filterPath(H,launchWithFF,handleTokenError)
}else{launchWithFF(H)
}}else{if(window.InstallTrigger){if(window.confirm("A plugin is required to use this feature. Would you like to download it?")){InstallTrigger.install({"WebDAV Launcher":"https://update.atlassian.com/office-connector/URLLauncher/latest/webdavloader.xpi"})
}}else{window.alert("Firefox or Internet Explorer is required to use this feature.")
}}}return false
}function launchWithFF(C){try{var A=new URLLauncher();
if(A.open2){var E=new RegExp(contextPath+"/plugins/servlet/[^/]+/");
var D=C.match(E);
var B=C.substring(D[0].length);
A.open2(encodeURI(D[0]),encodeURI(B))
}else{A.open(C)
}}catch(F){window.alert("Unable to open your Office file. Have you installed MS Office yet?. Read more detail at https://confluence.atlassian.com/display/DOC/Installing+the+Firefox+Add-On+for+the+Office+Connector")
}}function enableEdit(A){A.style.cursor="pointer";
A.style.backgroundColor="#cccccc";
A.style.color=""
}function disableEdit(A){A.style.cursor="";
A.style.backgroundColor="#ffffff";
A.style.color="#ffffff"
}if(typeof define!=="undefined"){define("office-connector/edit-in-office",[],function(){return{getProgID:getProgID,doEditInOffice:doEditInOffice}
})
};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.macros.advanced:get-more-helper', location = 'com/atlassian/confluence/plugins/macros/advanced/js/get-more-helper.js' */
(function(a){AJS.moreLinkClickHandler=function(c){var b=a(this),d=b.attr("href"),f=b.closest(".more-link-container");if(!f.length){throw new Error("Could not find more link container when one was expected.")}f.addClass("loading");a.get(d,function(h){var g=a(h).wrap("<div/>").parent();var e=g.children("ul").children("li");f.closest(".results-container").children("ul").append(e);var i=g.find(".more-link-container");if(i.length===0){f.remove()}else{f.replaceWith(i)}if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()}});return AJS.stopEvent(c)}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.macros.advanced:get-more', location = 'com/atlassian/confluence/plugins/macros/advanced/js/get-more.js' */
AJS.toInit(function(a){a(".results-container").on("click",".more-link",AJS.moreLinkClickHandler)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.macros.advanced:get-more', location = 'com/atlassian/confluence/plugins/macros/advanced/js/filter-control.js' */
AJS.toInit(function(a){a("select.content-filter").change(function(){a(".filter-control .waiting-image").removeClass("hidden");var b=a(this);a.get(AJS.params.changesUrl,{contentType:a(this).val()},function(e){var d=a(e);var c=b.parent();c.parent().siblings(".results-container").children("ul").html(d);a(".waiting-image",c).addClass("hidden");a(".more-link",d).click(AJS.moreLinkClickHandler)})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.macros.profile:profile-macro-styles', location = '/includes/js/personal-sidebar.js' */
AJS.toInit(function(a){function c(){b.toggleClass("collapsed");e.toggleClass("sidebar-collapsed");b.trigger("toggled")}var d=Confluence.storageManager("personal-sidebar"),b=a("#personal-info-sidebar"),f=b.height(),e=a("#content");d.getItemAsBoolean("show")&&c();a(".sidebar-collapse").click(function(a){c();d.setItem("show",b.hasClass("collapsed"));return AJS.stopEvent(a)}).height(f)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:fancy-box', location = '/includes/fancybox/jquery.fancybox-1.3.4.js' */
(function(a){var n,s,t,e,z,l,A,i,w,x,q=0,d={},o=[],p=0,b={},j=[],C=null,m=new Image,F=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,Q=/[^\.]\.(swf)\s*$/i,G,H=1,v=0,u="",r,g,k=!1,y=a.extend(a("<div/>")[0],{prop:0}),I=a.browser.msie&&7>a.browser.version&&!window.XMLHttpRequest,J=function(){s.hide();m.onerror=m.onload=null;C&&C.abort();n.empty()},K=function(){!1===d.onError(o,q,d)?(s.hide(),k=!1):(d.titleShow=!1,d.width="auto",d.height="auto",n.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),
B())},E=function(){var c=o[q],b,f,e,g,j,i;J();d=a.extend({},a.fn.fancybox.defaults,"undefined"==typeof a(c).data("fancybox")?d:a(c).data("fancybox"));i=d.onStart(o,q,d);if(!1===i)k=!1;else{"object"==typeof i&&(d=a.extend(d,i));e=d.title||(c.nodeName?a(c).attr("title"):c.title)||"";d.orig=a(c).is("img")&&a(c);c.nodeName&&!d.orig&&(d.orig=a(c).children("img:first").length?a(c).children("img:first"):a(c));""===e&&(d.orig&&d.titleFromAlt)&&(e=d.orig.attr("alt"));b=d.href||(c.nodeName?a(c).attr("href"):
c.href)||null;if(/^(?:javascript)/i.test(b)||"#"==b)b=null;d.type?(f=d.type,b||(b=d.content)):d.content?f="html":d.dataAttr?(f="dataAttribute",b=d.orig.attr("data-"+d.dataAttr)):b&&(f=b.match(F)?"image":b.match(Q)?"swf":a(c).hasClass("iframe")?"iframe":0===b.indexOf("#")?"inline":"ajax");if(f)switch("inline"==f&&(c=b.substr(b.indexOf("#")),f=0<a(c).length?"inline":"ajax"),d.type=f,d.href=b,d.title=e,d.autoDimensions&&("html"==d.type||"inline"==d.type||"ajax"==d.type?(d.width="auto",d.height="auto"):
d.autoDimensions=!1),d.modal&&(d.overlayShow=!0,d.hideOnOverlayClick=!1,d.hideOnContentClick=!1,d.enableEscapeButton=!1,d.showCloseButton=!1),d.padding=parseInt(d.padding,10),d.margin=parseInt(d.margin,10),n.css("padding",d.padding+d.margin),a(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){a(this).replaceWith(l.children())}),f){case "html":n.html(d.content);B();break;case "inline":if(!0===a(c).parent().is("#fancybox-content")){k=!1;break}a('<div class="fancybox-inline-tmp" />').hide().insertBefore(a(c)).bind("fancybox-cleanup",
function(){a(this).replaceWith(l.children())}).bind("fancybox-cancel",function(){a(this).replaceWith(n.children())});a(c).appendTo(n);B();break;case "image":case "dataAttribute":k=!1;a.fancybox.showActivity();m=new Image;m.onerror=function(){K()};m.onload=function(){k=true;m.onerror=m.onload=null;d.width=m.width;d.height=m.height;a("<img />").attr({id:"fancybox-img",src:m.src,alt:d.title}).appendTo(n);L()};m.src=b;break;case "swf":d.scrolling="no";g='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+
d.width+'" height="'+d.height+'"><param name="movie" value="'+b+'"></param>';j="";a.each(d.swf,function(a,c){g=g+('<param name="'+a+'" value="'+c+'"></param>');j=j+(" "+a+'="'+c+'"')});g+='<embed src="'+b+'" type="application/x-shockwave-flash" width="'+d.width+'" height="'+d.height+'"'+j+"></embed></object>";n.html(g);B();break;case "ajax":k=!1;a.fancybox.showActivity();d.ajax.win=d.ajax.success;C=a.ajax(a.extend({},d.ajax,{url:b,data:d.ajax.data||{},error:function(a){a.status>0&&K()},success:function(a,
c,f){if((typeof f=="object"?f:C).status==200){if(typeof d.ajax.win=="function"){i=d.ajax.win(b,a,c,f);if(i===false){s.hide();return}if(typeof i=="string"||typeof i=="object")a=i}n.html(a);B()}}}));break;case "iframe":L()}else K()}},B=function(){var c=d.width,b=d.height,c=-1<c.toString().indexOf("%")?parseInt((a(window).width()-2*d.margin)*parseFloat(c)/100,10)+"px":"auto"==c?"auto":c+"px",b=-1<b.toString().indexOf("%")?parseInt((a(window).height()-2*d.margin)*parseFloat(b)/100,10)+"px":"auto"==b?
"auto":b+"px";n.wrapInner('<div style="width:'+c+";height:"+b+";overflow: "+("auto"==d.scrolling?"auto":"yes"==d.scrolling?"scroll":"hidden")+';position:relative;"></div>');d.width=n.width();d.height=n.height();L()},L=function(){var c,h;s.hide();if(e.is(":visible")&&!1===b.onCleanup(j,p,b))a.event.trigger("fancybox-cancel"),k=!1;else{k=!0;a(l.add(t)).unbind();a(window).unbind("resize.fb scroll.fb");a(document).unbind("keydown.fb");e.is(":visible")&&"outside"!==b.titlePosition&&e.css("height",e.height());
j=o;p=q;b=d;if(b.overlayShow){if(t.css({"background-color":b.overlayColor,opacity:b.overlayOpacity,cursor:b.hideOnOverlayClick?"pointer":"auto",height:a(document).height()}),!t.is(":visible")){if(I)a("select:not(#fancybox-tmp select)").filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});t.show()}}else t.hide();c=M();var f={},D=b.autoScale,m=2*b.padding;f.width=-1<b.width.toString().indexOf("%")?parseInt(c[0]*
parseFloat(b.width)/100,10):b.width+m;f.height=-1<b.height.toString().indexOf("%")?parseInt(c[1]*parseFloat(b.height)/100,10):b.height+m;if(D&&(f.width>c[0]||f.height>c[1]))if("image"==d.type||"dataAttribute"==d.type||"swf"==d.type){if(D=b.width/b.height,f.width>c[0]&&(f.width=c[0],f.height=parseInt((f.width-m)/D+m,10)),f.height>c[1])f.height=c[1],f.width=parseInt((f.height-m)*D+m,10)}else f.width=Math.min(f.width,c[0]),f.height=Math.min(f.height,c[1]);f.top=parseInt(Math.max(c[3]-20,c[3]+0.5*(c[1]-
f.height-40)),10);f.left=parseInt(Math.max(c[2]-20,c[2]+0.5*(c[0]-f.width-40)),10);g=f;u=b.title||"";v=0;i.empty().removeAttr("style").removeClass();if(!1!==b.titleShow&&(u=a.isFunction(b.titleFormat)?b.titleFormat(u,j,p,b):u&&u.length?"float"==b.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+u+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+
b.titlePosition+'">'+u+"</div>":!1)&&""!==u)switch(i.addClass("fancybox-title-"+b.titlePosition).html(u).appendTo("body").show(),b.titlePosition){case "inside":i.css({width:g.width-2*b.padding,marginLeft:b.padding,marginRight:b.padding});v=i.outerHeight(!0);i.appendTo(z);g.height+=v;break;case "over":i.css({marginLeft:b.padding,width:g.width-2*b.padding,bottom:b.padding}).appendTo(z);break;case "float":i.css("left",-1*parseInt((i.width()-g.width-40)/2,10)).appendTo(e);break;default:i.css({width:g.width-
2*b.padding,paddingLeft:b.padding,paddingRight:b.padding}).appendTo(e)}i.hide();e.is(":visible")?(a(A.add(w).add(x)).hide(),c=e.position(),r={top:c.top,left:c.left,width:e.width(),height:e.height()},h=r.width==g.width&&r.height==g.height,l.fadeTo(b.changeFade,0.3,function(){var c=function(){l.html(n.contents()).fadeTo(b.changeFade,1,N)};a.event.trigger("fancybox-change");l.empty().removeAttr("filter").css({"border-width":b.padding,width:g.width-2*b.padding,height:d.autoDimensions?"auto":g.height-
v-2*b.padding});h?c():(y.prop=0,a(y).animate({prop:1},{duration:b.changeSpeed,easing:b.easingChange,step:O,complete:c}))})):(e.removeAttr("style"),l.css("border-width",b.padding),"elastic"==b.transitionIn?(r=P(),l.html(n.contents()),e.show(),b.opacity&&(g.opacity=0),y.prop=0,a(y).animate({prop:1},{duration:b.speedIn,easing:b.easingIn,step:O,complete:N})):("inside"==b.titlePosition&&0<v&&i.show(),l.css({width:g.width-2*b.padding,height:d.autoDimensions?"auto":g.height-v-2*b.padding}).html(n.contents()),
e.css(g).fadeIn("none"==b.transitionIn?0:b.speedIn,N)))}},N=function(){a.support.opacity||(l.get(0).style.removeAttribute("filter"),e.get(0).style.removeAttribute("filter"));d.autoDimensions&&l.css("height","auto");e.css("height","auto");u&&u.length&&i.show();b.showCloseButton&&A.show();(b.enableEscapeButton||b.enableKeyboardNav)&&a(document).bind("keydown.fb",function(c){if(c.keyCode==27&&b.enableEscapeButton){c.preventDefault();a.fancybox.close()}else if((c.keyCode==37||c.keyCode==39)&&b.enableKeyboardNav&&
c.target.tagName!=="INPUT"&&c.target.tagName!=="TEXTAREA"&&c.target.tagName!=="SELECT"){c.preventDefault();a.fancybox[c.keyCode==37?"prev":"next"]()}});b.showNavArrows?((b.cyclic&&1<j.length||0!==p)&&w.show(),(b.cyclic&&1<j.length||p!=j.length-1)&&x.show()):(w.hide(),x.hide());b.hideOnContentClick&&l.bind("click",a.fancybox.close);b.hideOnOverlayClick&&t.bind("click",a.fancybox.close);a(window).bind("resize.fb",a.fancybox.resize);b.centerOnScroll&&a(window).bind("scroll.fb",a.fancybox.center);"iframe"==
b.type&&a('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(a.browser.msie?'allowtransparency="true""':"")+' scrolling="'+d.scrolling+'" src="'+b.href+'"></iframe>').appendTo(l);e.show();k=!1;a.fancybox.center();b.onComplete(j,p,b);var c,h;j.length-1>p&&(c=j[p+1].href,"undefined"!==typeof c&&c.match(F)&&(h=new Image,h.src=c));0<p&&(c=j[p-1].href,"undefined"!==typeof c&&c.match(F)&&(h=new Image,h.src=c))},O=function(a){var d={width:parseInt(r.width+
(g.width-r.width)*a,10),height:parseInt(r.height+(g.height-r.height)*a,10),top:parseInt(r.top+(g.top-r.top)*a,10),left:parseInt(r.left+(g.left-r.left)*a,10)};"undefined"!==typeof g.opacity&&(d.opacity=0.5>a?0.5:a);e.css(d);l.css({width:d.width-2*b.padding,height:d.height-v*a-2*b.padding})},M=function(){return[a(window).width()-2*b.margin,a(window).height()-2*b.margin,a(document).scrollLeft()+b.margin,a(document).scrollTop()+b.margin]},P=function(){var c=d.orig?a(d.orig):!1,h={};c&&c.length?(h=c.offset(),
h.top+=parseInt(c.css("paddingTop"),10)||0,h.left+=parseInt(c.css("paddingLeft"),10)||0,h.top+=parseInt(c.css("border-top-width"),10)||0,h.left+=parseInt(c.css("border-left-width"),10)||0,h.width=c.width(),h.height=c.height(),h={width:h.width+2*b.padding,height:h.height+2*b.padding,top:h.top-b.padding-20,left:h.left-b.padding-20}):(c=M(),h={width:2*b.padding,height:2*b.padding,top:parseInt(c[3]+0.5*c[1],10),left:parseInt(c[2]+0.5*c[0],10)});return h},R=function(){s.is(":visible")?(a("div",s).css("top",
-40*H+"px"),H=(H+1)%12):clearInterval(G)};a.fn.fancybox=function(c){AJS&&AJS.log("fancybox is deprecated, please use the previewer instead. E.g. $imageLink.previewer({ src: srcOfImage }); ");if(!a(this).length)return this;a(this).data("fancybox",a.extend({},c,a.metadata?a(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();k||(k=!0,a(this).blur(),o=[],q=0,c=a(this).attr("rel")||"",!c||""==c||"nofollow"===c?o.push(this):(o=a("a[rel="+c+"], area[rel="+c+"]"),q=o.index(this)),
E())});return this};a.fancybox=function(c,b){var d;if(!k){k=!0;d="undefined"!==typeof b?b:{};o=[];q=parseInt(d.index,10)||0;if(a.isArray(c)){for(var e=0,g=c.length;e<g;e++)"object"==typeof c[e]?a(c[e]).data("fancybox",a.extend({},d,c[e])):c[e]=a({}).data("fancybox",a.extend({content:c[e]},d));o=jQuery.merge(o,c)}else"object"==typeof c?a(c).data("fancybox",a.extend({},d,c)):c=a({}).data("fancybox",a.extend({content:c},d)),o.push(c);if(q>o.length||0>q)q=0;E()}};a.fancybox.showActivity=function(){clearInterval(G);
s.show();G=setInterval(R,66)};a.fancybox.hideActivity=function(){s.hide()};a.fancybox.next=function(){return a.fancybox.pos(p+1)};a.fancybox.prev=function(){return a.fancybox.pos(p-1)};a.fancybox.pos=function(a){k||(a=parseInt(a,10),o=j,-1<a&&a<j.length?(q=a,E()):b.cyclic&&1<j.length&&(q=a>=j.length?0:j.length-1,E()))};a.fancybox.cancel=function(){k||(k=!0,a.event.trigger("fancybox-cancel"),J(),d.onCancel(o,q,d),k=!1)};a.fancybox.close=function(){function c(){t.fadeOut("fast");i.empty().hide();e.hide();
a.event.trigger("fancybox-cleanup");l.empty();b.onClosed(j,p,b);j=d=[];p=q=0;b=d={};k=!1}if(!k&&!e.is(":hidden"))if(k=!0,b&&!1===b.onCleanup(j,p,b))k=!1;else if(J(),a(A.add(w).add(x)).hide(),a(l.add(t)).unbind(),a(window).unbind("resize.fb scroll.fb"),a(document).unbind("keydown.fb"),l.find("iframe").attr("src",I&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),"inside"!==b.titlePosition&&i.empty(),e.stop(),"elastic"==b.transitionOut){r=P();var h=e.position();g={top:h.top,
left:h.left,width:e.width(),height:e.height()};b.opacity&&(g.opacity=1);i.empty().hide();y.prop=1;a(y).animate({prop:0},{duration:b.speedOut,easing:b.easingOut,step:O,complete:c})}else e.fadeOut("none"==b.transitionOut?0:b.speedOut,c)};a.fancybox.resize=function(){t.is(":visible")&&t.css("height",a(document).height());a.fancybox.center(!0)};a.fancybox.center=function(a){var d,f;if(!k&&(f=!0===a?1:0,d=M(),f||!(e.width()>d[0]||e.height()>d[1])))e.stop().animate({top:""+parseInt(Math.max(d[3]-20,d[3]+
0.5*(d[1]-l.height()-40)-b.padding),10),left:""+parseInt(Math.max(d[2]-20,d[2]+0.5*(d[0]-l.width()-40)-b.padding),10)},"number"==typeof a?a:200)};a.fancybox.init=function(){a("#fancybox-wrap").length||(a("body").append(n=a('<div id="fancybox-tmp"></div>'),s=a('<div id="fancybox-loading"><div></div></div>'),t=a('<div id="fancybox-overlay"></div>'),e=a('<div id="fancybox-wrap"></div>')),z=a('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(e),
z.append(l=a('<div id="fancybox-content"></div>'),A=a('<a id="fancybox-close"></a>'),i=a('<div id="fancybox-title"></div>'),w=a('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),x=a('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),A.click(a.fancybox.close),s.click(a.fancybox.cancel),w.click(function(c){c.preventDefault();a.fancybox.prev()}),x.click(function(c){c.preventDefault();a.fancybox.next()}),
a.fn.mousewheel&&e.bind("mousewheel.fb",function(c,b){if(k)c.preventDefault();else if(0==a(c.target).get(0).clientHeight||a(c.target).get(0).scrollHeight===a(c.target).get(0).clientHeight)c.preventDefault(),a.fancybox[0<b?"prev":"next"]()}),a.support.opacity||e.addClass("fancybox-ie"),I&&(s.addClass("fancybox-ie6"),e.addClass("fancybox-ie6"),a('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(z)))};
a.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:0.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,
showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};a(document).ready(function(){a.fancybox.init()})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:floating-scrollbar', location = '/includes/js/jquery-plugins/jquery.floatingScrollbar.js' */
(function(f){function i(){a&&b.scrollLeft(a.scrollLeft())}function c(){e=a;a=null;d.each(function(){var b=f(this),c=b.offset().top,d=c+b.height(),e=g.scrollTop()+g.height();if(c+30<e&&d>e)return a=b,!1});if(a){var c=a.scrollLeft(),h=a.scrollLeft(90019001).scrollLeft(),j=a.innerWidth(),h=j+h;a.scrollLeft(c);if(h<=j)b.toggle(!1);else{b.toggle(!0);if(!e||e[0]!==a[0])e&&e.unbind("scroll",i),a.scroll(i).after(b);b.css({left:a.offset().left-g.scrollLeft(),width:j}).scrollLeft(c);k.width(h)}}else b.toggle(!1)}
var g=f(this);f("html");var d=f([]),a,e,b=f('<div id="floating-scrollbar"><div/></div>'),k=b.children();b.hide().css({position:"fixed",bottom:0,height:"30px",overflowX:"auto",overflowY:"hidden"}).scroll(function(){a&&a.scrollLeft(b.scrollLeft())});k.css({border:"1px solid #fff",opacity:0.01});f.fn.floatingScrollbar=function(a){!1===a?(d=d.not(this),this.unbind("scroll",i),d.length||(b.detach(),g.unbind("resize scroll",c))):this.length&&(d.length||g.resize(c).scroll(c),d=d.add(this));c();return this};
f.floatingScrollbarUpdate=c})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:floating-scrollbar', location = '/includes/js/table-floating-scrollbar.js' */
AJS.toInit(function(a){a(".wiki-content").find(".table-wrap").floatingScrollbar()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:view-content', location = '/includes/js/page-metadata.js' */
AJS.toInit(function(a){var b=a("#version-comment");if(b.length){var c=a("#show-version-comment"),d=a("#hide-version-comment");c.click(function(a){c.hide();d.show();b.show();return AJS.stopEvent(a)});d.click(function(a){d.hide();c.show();b.hide();return AJS.stopEvent(a)});c.length&&d.length&&b.hide()}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:view-content', location = '/includes/js/manage-watchers.js' */
jQuery(function(e){e(document).on("click","#manage-watchers-menu-item, .cw-manage-watchers",function(m){m.preventDefault();var c=new AJS.ConfluenceDialog({width:865,height:530,id:"manage-watchers-dialog",onCancel:function(){c.hide().remove()}});c.addHeader("Manage Watchers");c.addPanel("default",Confluence.Templates.ManageWatchers.dialogContent({pageId:AJS.Meta.get("page-id"),xsrfToken:AJS.Meta.get("atl-token")}));c.addCancel("Close",function(){c.hide().remove();
return!1});c.show();var b=e("#manage-watchers-dialog");b.find(".dialog-title").prepend(Confluence.Templates.ManageWatchers.helpLink());b.find("input:visible, button:visible").each(function(a){e(this).attr("tabindex",a+1)});AJS.Confluence.Binder.placeholder();b.bind("remove-list-item.manage-watchers",function(a,j){var d=j.item,e=j.list,c=j.username;d.addClass("removing");AJS.safe.ajax({dataType:"json",type:"POST",url:AJS.params.contextPath+"/json/removewatch.action",data:{pageId:AJS.params.pageId,
username:c},error:function(){console.error("Failed to delete watcher. Refresh page to see latest status.");d.removeClass("removing")},success:function(){d.slideUp().remove();b.trigger("list-updated.manage-watchers",{list:e})}})});b.bind("list-updated.manage-watchers",function(a,b){var d=b.list;0<e("li.watch-user",d).length?(d.find(".no-users").addClass("hidden"),Confluence.Binder.userHover(),d.find(".confluence-userlink").each(function(){e(this).click(function(a){a.preventDefault()})})):d.find(".no-users").removeClass("hidden")});
b.bind("list-data-retrieved.manage-watchers",function(a,c){var d=c.list,f=c.watchers;d.find(".watch-user").remove();f&&f.length&&e.each(f,function(){var a=this.name,c=e(Confluence.Templates.ManageWatchers.userItem({username:a,fullName:this.fullName,url:AJS.params.contextPath+"/display/~"+this.name,iconUrl:AJS.params.contextPath+this.profilePictureDownloadPath}));d.append(c);c.find(".remove-watch").click(function(){b.trigger("remove-list-item.manage-watchers",{username:a,item:c,list:d})})});d.find(".loading").hide();
b.trigger("list-updated.manage-watchers",{list:d})});var h=b.find(".page-watchers .user-list"),n=b.find(".space-watchers .user-list");AJS.safe.ajax({url:AJS.params.contextPath+"/json/listwatchers.action",dataType:"json",data:{pageId:AJS.params.pageId},error:function(){console.error("Failed to retrieve watchers.")},success:function(a){b.trigger("list-data-retrieved.manage-watchers",{list:h,watchers:a.pageWatchers});b.trigger("list-data-retrieved.manage-watchers",{list:n,watchers:a.spaceWatchers})}});
var f=b.find("form"),g=f.find("#add-watcher-user"),k=f.find("#add-watcher-username"),i,l=f.find("> .status");i={clear:function(){l.addClass("hidden").removeClass("loading error").text("")},loading:function(a){l.addClass("loading").removeClass("hidden error").html(a)},error:function(a){l.addClass("error").removeClass("hidden loading").html(a)}};f.ajaxForm({beforeSerialize:function(){""==k.val()&&k.val(g.val())},beforeSubmit:function(){g.blur().prop("disabled",!0);h.addClass("updating");i.loading("Adding watcher\u2026")},
dataType:"json",error:function(a,b){console.error("Failed to add watcher: "+b)},success:function(a){k.val("");g.prop("disabled",!1).val("").focus();h.removeClass("updating");a.actionErrors&&a.actionErrors.length?i.error(a.actionErrors[0]):(b.trigger("list-data-retrieved.manage-watchers",{list:h,watchers:a.pageWatchers}),i.clear())}});g.bind("selected.autocomplete-user-or-group",function(){f.submit()});g.focus()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:view-content', location = '/includes/soy/manage-watchers.soy' */
// This file was automatically generated from manage-watchers.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ManageWatchers == 'undefined') { Confluence.Templates.ManageWatchers = {}; }


Confluence.Templates.ManageWatchers.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-group"><div class="aui-item page-watchers"><h3>', soy.$$escapeHtml("Watching this page"), '</h3><p>', soy.$$escapeHtml("These people are notified when the page is changed. You can add or remove people from this list."), '</p><form class="aui" action="', soy.$$escapeHtml(""), '/json/addwatch.action" method="POST"><input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.xsrfToken), '"><input type="hidden" name="pageId" value="', soy.$$escapeHtml(opt_data.pageId), '"/><input type="hidden" id="add-watcher-username" name="username" value=""/><label for="add-watcher-user">', soy.$$escapeHtml("User"), '</label><input id="add-watcher-user" name="userFullName" class="text autocomplete-user" type="text" value="" placeholder="', soy.$$escapeHtml("Full name or username"), '" data-max="10" data-target="#add-watcher-username" data-dropdown-target="#add-watcher-dropdown" data-template="{title}" data-none-message="', soy.$$escapeHtml("No matching users found."), '"><input id="add-watcher-submit" type="submit" name="add"  class="button submit" value="', soy.$$escapeHtml("Add"), '"><div id="add-watcher-dropdown" class="aui-dd-parent autocomplete"></div><div class="status hidden"></div></form><ul class="user-list"><li class="loading">', "Loading\u2026", '</li><li class="no-users hidden">', soy.$$escapeHtml("No page watchers"), '</li></ul></div><div class="aui-item space-watchers"><h3>', soy.$$escapeHtml("Watching this space"), '</h3><p>', soy.$$escapeHtml("These people are notified when any content in the space is changed. You cannot modify this list."), '</p><ul class="user-list"><li class="loading">', "Loading\u2026", '</li><li class="no-users hidden">', soy.$$escapeHtml("No space watchers"), '</li></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.ManageWatchers.userItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="watch-user"><img class="profile-picture confluence-userlink" src="', soy.$$escapeHtml(opt_data.iconUrl), '" data-username="', soy.$$escapeHtml(opt_data.username), '"><span class="user-hover-trigger" data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml(opt_data.fullName), '</span> <span class="username">(', soy.$$escapeHtml(opt_data.username), ')</span><span class="remove-watch" title="', soy.$$escapeHtml("Delete"), '" data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml("Delete"), '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.ManageWatchers.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-58/Managing+Watchers"}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:view-content', location = '/includes/js/page-children.js' */
AJS.toInit(function(c){var e,f,i=function(a){if(a.homePage){var b="Home page";return'<span class="child-display"><span class="icon icon-home-page" title="'+b+'">'+b+':</span> <a href="'+AJS.params.contextPath+a.href+'">'+a.text+"</a></span>"}return'<span class="child-display"><span class="'+(a.recentlyUpdated?"icon icon-recently-updated-page":"icon icon-page")+'" title="Page">Page:</span> <a href="'+AJS.params.contextPath+a.href+'">'+AJS.escapeHtml(a.text)+"</a></span>"},j=function(a){var b=
c("#page-children:not(.children-loaded)");h();if(a&&b.length)if(a.errorMessage)b.html("<span class='error'>"+a.errorMessage+"</span>");else{var d=[];c.each(a,function(a,b){d.push(i(b))});b.html(d.join(""));b.addClass("children-loaded")}},h=function(){f&&(f(),f=null);e.addClass("hidden")},g=function(a){AJS.safe.ajax({url:AJS.params.contextPath+"/json/pagechildrenstoresettings.action",type:"POST",data:{pageId:AJS.params.pageId,showChildren:a},success:function(){},error:function(a,c){AJS.log("Failed to store the user 'showChildren' user setting: "+
c)}})};c("#children-section a.children-show-hide").each(function(){c(this).click(function(a){var b=c("#children-section");if(b.hasClass("children-showing"))c("#page-children").hide(),g(!1),b.removeClass("children-showing").addClass("children-hidden");else{c("#page-children").show();if(c("#children-section:not(.children-showing)").length){var d=c("#page-children:not(.children-loaded)");d.length?(e=c("<div class='throbber'></div>"),d.append(e),f=Raphael.spinner(e[0],10,"#666"),AJS.safe.ajax({url:AJS.params.contextPath+
"/json/pagechildren.action",type:"POST",data:{pageId:AJS.params.pageId,showChildren:!0},success:j,error:function(a,b){var c="Could not load child pages.";h();d.html("<span class='error'>"+c+"</span>");AJS.log("Error retrieving child pages: "+b)}})):g(!0)}else g(!0);b.removeClass("children-hidden").addClass("children-showing")}return AJS.stopEvent(a)})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:jquery-json', location = '/includes/js/jquery-plugins/jquery.json-2.3.js' */
(function(e){var i=/["\\\x00-\x1f\x7f-\x9f]/g,j={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};e.toJSON="object"===typeof JSON&&JSON.stringify?JSON.stringify:function(a){if(null===a)return"null";var b=typeof a;if("undefined"!==b){if("number"===b||"boolean"===b)return""+a;if("string"===b)return e.quoteString(a);if("object"===b){if("function"===typeof a.toJSON)return e.toJSON(a.toJSON());if(a.constructor===Date){var c=a.getUTCMonth()+1,d=a.getUTCDate(),f=a.getUTCFullYear(),
b=a.getUTCHours(),g=a.getUTCMinutes(),h=a.getUTCSeconds(),a=a.getUTCMilliseconds();10>c&&(c="0"+c);10>d&&(d="0"+d);10>b&&(b="0"+b);10>g&&(g="0"+g);10>h&&(h="0"+h);100>a&&(a="0"+a);10>a&&(a="0"+a);return'"'+f+"-"+c+"-"+d+"T"+b+":"+g+":"+h+"."+a+'Z"'}if(a.constructor===Array){c=[];for(d=0;d<a.length;d++)c.push(e.toJSON(a[d])||"null");return"["+c.join(",")+"]"}d=[];for(f in a){b=typeof f;if("number"===b)c='"'+f+'"';else if("string"===b)c=e.quoteString(f);else continue;b=typeof a[f];"function"===b||"undefined"===
b||(b=e.toJSON(a[f]),d.push(c+":"+b))}return"{"+d.join(",")+"}"}}};e.evalJSON="object"===typeof JSON&&JSON.parse?JSON.parse:function(a){return eval("("+a+")")};e.secureEvalJSON="object"===typeof JSON&&JSON.parse?JSON.parse:function(a){var b=a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(b))return eval("("+a+")");throw new SyntaxError("Error parsing JSON, source is not valid.");
};e.quoteString=function(a){return a.match(i)?'"'+a.replace(i,function(a){var c=j[a];if("string"===typeof c)return c;c=a.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"':'"'+a+'"'}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:safe-ajax', location = '/includes/js/safe-ajax.js' */
(function(){var a=jQuery.ajax;AJS.safe={ajax:function(b){if(b.data&&"object"==typeof b.data)return b.data.atl_token=jQuery("#atlassian-token").attr("content"),a(b)},get:function(){jQuery.ajax=AJS.safe.ajax;try{return jQuery.get.apply(jQuery,arguments)}finally{jQuery.ajax=a}},getScript:function(b,a){return AJS.safe.get(b,null,a,"script")},getJSON:function(b,a,c){return AJS.safe.get(b,a,c,"json")},post:function(b,d,c,e){jQuery.ajax=AJS.safe.ajax;try{return jQuery.post.apply(jQuery,arguments)}finally{jQuery.ajax=
a}}}})();AJS.safeAjax=function(a){return AJS.safe.ajax(a)};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:search-results-grid', location = '/includes/js/search-results-grid.js' */
(function(){jQuery.fn.searchResultsGrid=function(b,c,g,a){var f=jQuery,d=c.results;if(!d||!d.length)c=AJS.format(a.noSearchResults,AJS.escapeEntities(b)),this.html("<div class='no-results'>"+c+"</div>");else{this.html(AJS.getTemplate("searchResultsGrid").toString());c.skipResultCount||(b=AJS.format(a.resultsCount,c.startIndex+1,c.startIndex+d.length,c.total,AJS.escapeEntities(b)),this.prepend(AJS.renderTemplate("searchResultsGridCount",AJS.html(b))));for(b=0;b<d.length;b++){var a=d[b],a=c.convertFromRest?
{id:a.id,title:a.title,url:AJS.REST.findLink(a.link),type:a.type,spaceName:a.space?a.space.title:"",spaceKey:a.space?a.space.key:"",friendlyDate:a.lastModifiedDate?a.lastModifiedDate.friendly:"",date:a.lastModifiedDate?a.lastModifiedDate.date:""}:a,e=f(AJS.renderTemplate("searchResultsGridRow",[a.title,a.url,a.type,a.spaceName,a.spaceKey,a.friendlyDate,a.date]));"attachment"==a.type&&a.id&&e.attr("data-attachment-id",a.id);e.selectableEffects(this,g.select,d[b]);this.find("table").append(e)}f(".search-result:first",
this).click()}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:animation', location = '/includes/js/animation.js' */
var AJS=AJS||{};
AJS.animation={running:[],queue:[],timer:null,duration:300,period:20,add:function(a){this.queue.push(a)},start:function(){if(null==this.timer){this.running=this.queue;this.queue=[];jQuery.each(this.running,function(){if(this.onStart)this.onStart()});var a=this,b=(new Date).getTime(),c=b+this.duration;return this.timer=setInterval(function(){var d=((new Date).getTime()-b)/(c-b);1>=d&&a.animate(d);1<=d&&null!=a.timer&&a.finish()},this.period)}},finish:function(){clearInterval(this.timer);jQuery.each(this.running,
function(){if(this.onFinish)this.onFinish()});this.running=[];this.timer=null;0<this.queue.length&&this.start()},animate:function(a){jQuery.each(this.running,function(){this.animate&&this.animate(AJS.animation.interpolate(a,this.start,this.end,this.reverse))})},interpolate:function(a,b,c,d){return"undefined"!=typeof b&&"undefined"!=typeof c?d?c+a*(b-c):b+a*(c-b):a},combine:function(a){return{animations:a,append:function(a){this.animations.push(a);return this},onStart:function(){jQuery.each(this.animations,
function(){if(this.onStart)this.onStart()})},onFinish:function(){jQuery.each(this.animations,function(){if(this.onFinish)this.onFinish()})},animate:function(a){jQuery.each(this.animations,function(){this.animate&&this.animate(AJS.animation.interpolate(a,this.start,this.end,this.reverse))})}}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/master.js' */
AJS.toInit(function(c){AJS.applySearchPlaceholders=function(){AJS.log("AJS.applySearchPlaceholders is deprecated. Use AJS.Confluence.Binder.placeholder instead");AJS.Confluence.Binder.placeholder()};c("#messageContainer .confluence-messages").each(function(){var a=this;getCookie(a.id)||(c(a).show(),c(".message-close-button",a).click(function(){c(a).slideUp();setCookie(a.id,!0)}))})});AJS.General={getContextPath:Confluence.getContextPath,getBaseUrl:Confluence.getBaseUrl};
(function(){var c={};AJS.I18n={keys:{},get:function(a,b,d){var e=!0,f=Confluence.getContextPath()+"/rest/prototype/1/i18n",g={locale:AJS.params.userLocale};if(AJS.$.isArray(a)){for(var h in a)c[h]||(e=!1);g.pluginKeys=a}else e=c[a],f+="/"+a;e?"function"==typeof b&&b(AJS.I18n.keys):AJS.$.ajax({url:f,data:g,dataType:"json",success:function(d){AJS.I18n.load(d);c[a]=!0;"function"==typeof b&&b(d)},error:function(b,c){AJS.log("Error loading I18n for "+a+":"+c);"function"==typeof d&&d(c)}})},load:function(a){AJS.$.extend(AJS.I18n.keys,
a)},getText:function(a,b){var c=AJS.params["i18n."+a]||AJS.I18n.keys[a]||a;if(!b)return c;2==arguments.length&&b instanceof Array?b.unshift(c):(b=Array.prototype.slice.call(arguments,0),b[0]=c);return AJS.format.apply(AJS,b)}}})();(function(){var c=/^[\s\uFEFF]+/,a=/[\s\uFEFF]+$/;/\S/.test(" ")&&(c=/^[\s\uFEFF\xA0]+/,a=/[\s\uFEFF\xA0]+$/);AJS.trim=AJS.trim||function(b){return!b?"":b.replace(c,"").replace(a,"")}})();
jQuery.fn.selectableEffects=function(c,a,b){var d=jQuery,e=d(this);b&&e.data("properties",b);e.click(function(b){var e=d(this);a&&a(this,e.data("properties"));c.find(".selected").removeClass("selected");e.addClass("selected");return AJS.stopEvent(b)});e.hover(function(){d(this).addClass("hover")},function(){d(this).removeClass("hover")})};jQuery.fn.shortenUntil=function(c){for(var a=jQuery,b=0;!c()&&b<this.length;){var d=a(this[b]).text();"…"==d?b++:a(this[b]).text(d.replace(/[^\u2026]\u2026?$/,"…"))}return this};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/template-renderer.js' */
AJS.html=function(d){d=new String(d);d.isHtml=!0;return d};
AJS.toInit(function(d){function f(a){var b=arguments;return a.replace(/\{(\d+)\}/g,function(a,d){var c=b[parseInt(d,10)+1];return null!=c?c:a})}var c={};AJS.loadTemplateScripts=function(a){a=a||document;d("script",a).each(function(){"text/x-template"==this.type&&(c[this.title]=AJS.html(this.text))})};AJS.loadTemplateScripts();AJS.getTemplate=function(a){var b=c[a];b||(b=d('script[title="'+a+'"]',document),0==b.length?b=null:(c[a]=AJS.html(b[0].text),b=c[a]));return b};var g={"&":"&amp;","<":"&lt;",
">":"&gt;","'":"&#39;",'"':"&quot;"};AJS.escapeEntities=function(a){return null==a?a:a.isHtml?""+a:(""+a).replace(/[&<>'"]/g,function(a){return g[a]||a})};AJS.renderTemplate=function(a,b){if(!AJS.getTemplate(a))return"";d.isArray(b)||(b=Array.prototype.slice.call(arguments,1));for(var c=[AJS.getTemplate(a).toString()],e=0;e<b.length;e++)c.push(AJS.escapeEntities(b[e]));return f.apply(this,c)};AJS.loadTemplatesFromUrl=function(a,b){var c=AJS.Meta.get("static-resource-url-prefix");0!=a.indexOf("http")&&
0!=a.indexOf(c)&&(a=c+a);d.ajax({url:a,data:{locale:AJS.params.userLocale},dataType:"html",success:function(a){a=AJS("div").append(a);AJS.loadTemplateScripts(a);b&&b()}})};AJS.loadWebResourceTemplates=function(a,b,c){return this.loadTemplatesFromUrl("/download/resources/"+a+"/"+b,c)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/menu.js' */
AJS.menuShowCount=0;
(function(){var a=jQuery,d=function(c){a(c).closest(".ajs-menu-bar").find(".ajs-drop-down").each(function(){this.hide()})},h=function(c){return a(c).closest(".ajs-menu-bar").hasClass("menu-bar-open")},i=function(c){a(c).closest(".ajs-menu-bar").addClass("menu-bar-open")},j=function(c){a(c).closest(".ajs-menu-bar").removeClass("menu-bar-open")};a.fn.ajsMenu=function(c){c=c||{};a(".ajs-button",this).each(function(){a(this).mouseover(function(){var c=this,f=h(c);d(c);if(f){var b=a(document),g=function(){j(c);
return!1};b.unbind("click.menu");setTimeout(function(){b.one("click.menu",g)},1);i(c)}})});a(".ajs-menu-item",this).each(function(){a(this).ajsMenuItem(c)})};a.fn.ajsMenuItem=function(c){var c=c||{},e=this,f=a(this),b=a(".ajs-drop-down",e);if(b.length){b=b[0];b.hidden=!0;b.focused=-1;b.hide=function(){if(!this.hidden){f.toggleClass("opened");0==a(e.parentNode).find(".opened").length&&j(e);var b=a("a",this);a(this).toggleClass("assistive");this.hidden=!0;a(document).unbind("click",this.fhide).unbind("keydown",
this.fmovefocus).unbind("keypress",this.blocker);this.focused+1&&a(b[this.focused]).removeClass("active");this.focused=-1}};b.show=function(){if("undefined"==typeof this.hidden||this.hidden){var b=this,d=a(this);d.toggleClass("assistive");f.toggleClass("opened");i(e);this.hidden=!1;this.timer=setTimeout(function(){a(document).click(b.fhide)},1);a(document).keydown(b.fmovefocus).keypress(b.blocker);var k=a("a",b);k.each(function(b){var c=this.parentNode.parentNode;a(this).hover(function(){c.focused+
1&&a(k[c.focused].parentNode).removeClass("active");a(this.parentNode).addClass("active");c.focused=b},function(){c.focused+1&&a(k[c.focused].parentNode).removeClass("active");c.focused=-1})});var g=window.pageYOffset||document.documentElement.scrollTop,h=g+a(window).height();d.removeClass("above");!c.isFixedPosition&&d.offset().top+d.height()>h&&(d.addClass("above"),d.offset().top<g&&d.removeClass("above"))}};b.isMenuBarOpened=function(){return h(b)};b.closeOthers=function(){d(b)};b.fmovefocus=function(a){b.movefocus(a)};
b.fhide=function(a){b.hide(a);return 0<AJS.$(a.target).closest(".ajs-drop-down").length};b.blocker=function(a){a=a.which;if(40==a||38==a)return!1};b.movefocus=function(b){var c=b.which,d=this.getElementsByTagName("a"),e=this.focused,f=9==c,g;do{switch(c){case 40:case 9:b.shiftKey?this.focused--:this.focused++;break;case 38:this.focused--;break;case 27:return this.hide(),!1;default:return!0}g=0>this.focused||this.focused>d.length-1}while(!g&&a(d[this.focused].parentNode).hasClass("assistive"));if(f&&
g)return-1!=e&&a(d[e].parentNode).removeClass("active"),this.focused=-1,this.hide(),!1;f||(0>this.focused?this.focused=d.length-1:this.focused>d.length-1&&(this.focused=0));0<=e&&a(d[e].parentNode).removeClass("active");d[this.focused].focus();a(d[this.focused].parentNode).addClass("active");b.stopPropagation();b.preventDefault();return!1};b.show();clearTimeout(b.timer);a(b).offset();b.hide();var g=a(".trigger",e);g.length&&(f.mouseover(function(){b.isMenuBarOpened()?b.hidden&&(d(b),b.show()):f.addClass("hover")}),
f.mouseout(function(){b.isMenuBarOpened()||f.removeClass("hover")}),g.click(function(){if(b.hidden){g.parent("li").removeClass("hover");var c=0<a(".ajs-menu-bar.menu-bar-open").length;b.show();return c}b.hide();g.parent("li").addClass("hover");return!1}))}}})();
AJS.toInit(function(a){a("#view-user-history-link").click(function(a){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=600, height=400, scrollbars, resizable");a.preventDefault();return!1});var d=function(c){-1===a("#action-messages").html().indexOf(c)&&AJS.messages.error("#action-messages",{body:c})},h=function(a,e,f){if(a.actionErrors)for(f=0;f<a.actionErrors.length;f++)d(a.actionErrors);else a.errorMessage?d(a.errorMessage):f();e.removeClass("waiting")};a("#page-favourite").click(function(c){var e=
a(this),f=e.find("span");if(e.hasClass("waiting"))return AJS.stopEvent(c);e.addClass("waiting");var b=Confluence.getContextPath()+"/json/addfavourite.action";e.hasClass("selected")&&(b=Confluence.getContextPath()+"/json/removefavourite.action");AJS.safe.ajax({url:b,type:"POST",dataType:"json",data:{entityId:AJS.params.pageId},success:function(a){h(a,e,function(){e.toggleClass("selected");e.toggleClass("ie-page-favourite-selected");e.hasClass("selected")?f.text("Remove Favourite"):
f.text("Favourite")})},error:function(a){var b;var c={};try{b=AJS.$.parseJSON(a.responseText)}catch(f){console.error('Error while parsing "'+a.responseText+'": '+f),b=c}h(b,e,function(){d("Server error while updating favourite")})}});return AJS.stopEvent(c)});var i=a("#action-menu-link"),j=a("#add-menu-link");i.length?i.next().addClass("most-right-menu-item"):j.length&&j.next().addClass("most-right-menu-item");a("#action-menu").on({"aui-dropdown2-show":function(){a(this).css({right:function(){return a(window).width()-
i.offset().left-i.outerWidth(!0)-1},left:"auto"})}});a(".ajs-menu-bar").ajsMenu({isFixedPosition:!0})});AJS.$(function(a){a("#header-menu-bar .ajs-menu-item").each(function(){var d=a(this),h=a(".ajs-drop-down",this),d=d.width();d>h.width()&&(h.width(d.valueOf()+50),AJS.log("Dropdown width override occurred"))});a("#user-menu-link-content .user-item").on("click",function(){AJS.trigger("analyticsEvent",{name:"user-menu-item.clicked",data:{id:a(this).attr("id")}})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/jquery-plugins/jquery.simpleScrollTo-1.0.js' */
jQuery.fn.simpleScrollTo=function(a){var c=jQuery,b=c(this[0]),d=c(a).position().top,a=d+c(a).outerHeight()-b.outerHeight();0>d?b.scrollTop(b.scrollTop()+d):0<a&&b.scrollTop(b.scrollTop()+a);return this};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/websudo.js' */
AJS.toInit(function(a){a("a#websudo-drop.drop-non-websudo").click(function(){a.getJSON(a(this).attr("href"),function(){a("li#confluence-message-websudo-message").slideUp(function(){AJS.trigger("confluence.header-resized")})});return!1})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:master-scripts', location = '/includes/js/jquery-plugins/jquery.cookie.js' */
jQuery.cookie=function(d,c,a){if("undefined"!=typeof c){a=a||{};null===c&&(c="",a.expires=-1);var b="";if(a.expires&&("number"==typeof a.expires||a.expires.toUTCString))"number"==typeof a.expires?(b=new Date,b.setTime(b.getTime()+864E5*a.expires)):b=a.expires,b="; expires="+b.toUTCString();var e=a.path?"; path="+a.path:"",f=a.domain?"; domain="+a.domain:"",a=a.secure?"; secure":"";document.cookie=[d,"=",encodeURIComponent(c),b,e,f,a].join("")}else{c=null;if(document.cookie&&""!=document.cookie){a=
document.cookie.split(";");for(b=0;b<a.length;b++)if(e=jQuery.trim(a[b]),e.substring(0,d.length+1)==d+"="){c=decodeURIComponent(e.substring(d.length+1));break}}return c}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:breadcrumbs', location = '/includes/js/breadcrumbs.js' */
AJS.toInit(function(a){a("#ellipsis").live("click",function(){try{a("#breadcrumbs .hidden-crumb").removeClass("hidden-crumb"),a(this).addClass("hidden-crumb"),AJS.trigger("breadcrumbs.expanded")}catch(b){AJS.log(b)}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:contentnamesearch', location = '/includes/js/contentnamesearch.js' */
Confluence.QuickNav=function(e){var d=[],c;return{addDropDownPostProcess:function(a){"undefined"!==typeof a?d.push(a):AJS.log("WARN: Attempted to add a dropdown post-process function that was undefined.")},setMakeParams:function(a){c=a},init:function(a,g){a.quicksearch("/rest/quicknav/1/search",null,{dropdownPlacement:g,dropdownPostprocess:function(a){e.each(d,function(b,f){f&&f(a)})},makeParams:function(a){return c?c(a):{query:a}},ajsDropDownOptions:{className:"quick-search-dropdown"}})}}}(AJS.$);
AJS.toInit(function(){var e=function(b){return function(f){b.closest("form").find(".quick-nav-drop-down").append(f)}},d=AJS.$("#quick-search-query"),c=AJS.$("#space-blog-quick-search-query"),a=AJS.$("#confluence-space-key"),g=e(d),h=AJS.defaultIfUndefined("Atlassian.SearchableApps.QuickNav",{defaultValue:Confluence.QuickNav});h.init(d,g);h.addDropDownPostProcess(function(b){AJS.$("a",b).each(function(){var b=AJS.$(this),a=b.find("span");if((a=AJS.dropDown.getAdditionalPropertyValue(a,"spaceName"))&&
!b.is(".content-type-spacedesc"))b.after(b.clone().attr("class","space-name").html(a)),b.parent().addClass("with-space-name")})});c.length&&a.length&&c.quicksearch("/rest/quicknav/1/search?type=blogpost&spaceKey="+AJS("i").html(a.attr("content")).text(),null,{dropdownPlacement:e(c)});AJS.$("#quick-search").on("click","div.quick-search-dropdown li",function(b){var a=AJS.$(this),c=AJS.$(b.target);if(!(c.is("a")&&1===c.parent().children("a").index(c))||void 0!==b.originalEvent)b=a.children("a:first").attr("class"),
a=a.index("div.quick-search-dropdown li"),AJS.trigger("analytics",{name:"quicknav-click-"+b,data:{index:a}})});AJS.$("#quick-search").on("submit",function(){var b={name:"quicknav-hit-enter",data:{results:AJS.$("div.quick-search-dropdown li").length}};AJS.trigger("analytics",b)});AJS.$("#quick-search").on({"quick-search-loading-start":function(){$(this).spin({className:"quick-search-spinner"}).addClass("quick-search-loading");$(".quick-search-spinner").css("left",$(this).outerWidth()-35+"px")},"quick-search-loading-stop":function(){$(this).spinStop().removeClass("quick-search-loading")}});
AJS.$("#quick-search").on("keydown",function(b){var a=AJS.dropDown.current&&-1!=AJS.dropDown.current.getFocusIndex();if(13===b.which&&(b.metaKey||b.ctrlKey)&&!a)b=AJS.$(this),b.attr("target","_blank"),b.submit(),b.attr("target","")})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:userlink', location = '/includes/js/userlink.js' */
(function(b){AJS.contentHover=function(n,e,i,k,o){var d=b.extend(!1,AJS.contentHover.opts,o),f,g,c=b("#content-hover-"+e);c.length?f=c.find(".contents"):(b(d.container).append(b('<div id="content-hover-'+e+'" class="ajs-content-hover"><div class="contents"></div></div>')),c=b("#content-hover-"+e),f=c.find(".contents"),f.css("width",d.width+"px").mouseover(function(){clearTimeout(a.hideDelayTimer);c.unbind("mouseover")}).mouseout(function(){l()}));var a=c[0],m=function(){if(!c.is(":visible"))a.showTimer=
setTimeout(function(){if(a.contentLoaded&&a.shouldShow){a.beingShown=true;var j=b(window),e=g.x-3,h=g.y+15;e+d.width+30>j.width()?c.css({right:"20px",left:"auto"}):c.css({left:e+"px",right:"auto"});j=(window.pageYOffset||document.documentElement.scrollTop)+j.height();if(h+c.height()>j){h=j-c.height()-5;c.mouseover(function(){clearTimeout(a.hideDelayTimer)}).mouseout(function(){l()})}c.css({top:h+"px"});h=b("#content-hover-shadow").appendTo(c).show();c.fadeIn(d.fadeTime,function(){a.beingShown=false});
h.css({width:f.outerWidth()+32+"px",height:f.outerHeight()+25+"px"});b(".b",h).css("width",f.outerWidth()-26+"px");b(".l, .r",h).css("height",f.outerHeight()-21+"px")}},d.showDelay)},l=function(){a.beingShown=false;a.shouldShow=false;clearTimeout(a.hideDelayTimer);clearTimeout(a.showTimer);clearTimeout(a.loadTimer);a.contentLoading=false;a.shouldLoadContent=false;a.hideDelayTimer=setTimeout(function(){c.fadeOut(d.fadeTime)},d.hideDelay)};b(n).mousemove(function(b){g={x:b.pageX,y:b.pageY};a.beingShown||
clearTimeout(a.showTimer);a.shouldShow=true;if(!a.contentLoaded)if(a.contentLoading){if(a.shouldLoadContent&&(g.x-a.initialMousePosition.x)*(g.x-a.initialMousePosition.x)+(g.y-a.initialMousePosition.y)*(g.y-a.initialMousePosition.y)>d.mouseMoveThreshold*d.mouseMoveThreshold){a.contentLoading=false;a.shouldLoadContent=false;clearTimeout(a.loadTimer);return}}else{a.initialMousePosition=g;a.shouldLoadContent=true;a.contentLoading=true;a.loadTimer=setTimeout(function(){a.shouldLoadContent&&f.load(i,function(){a.contentLoaded=
true;a.contentLoading=false;k.call(c,e);m()})},d.loadDelay)}clearTimeout(a.hideDelayTimer);a.beingShown||m()}).mouseout(function(){l()});f.click(function(a){a.stopPropagation()});b("body").click(function(){a.beingShown=false;clearTimeout(a.hideDelayTimer);clearTimeout(a.showTimer);c.hide()});return c};AJS.contentHover.opts={fadeTime:100,hideDelay:500,showDelay:700,loadDelay:50,width:300,mouseMoveThreshold:10,container:"body"};AJS.toInit(function(){b("body").append(b('<div id="content-hover-shadow"><div class="tl"></div><div class="tr"></div><div class="l"></div><div class="r"></div><div class="bl"></div><div class="br"></div><div class="b"></div></div>'));
b("#content-hover-shadow").hide()})})(jQuery);"undefined"==typeof AJS.followCallbacks&&(AJS.followCallbacks=[]);"undefined"==typeof AJS.favouriteCallbacks&&(AJS.favouriteCallbacks=[]);AJS.toInit(function(b){b(self).bind("hover-user.follow",function(b,e){for(var i=0,k=AJS.followCallbacks.length;i<k;i++)AJS.followCallbacks[i](e.username)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-labels:labels-resources', location = 'com/atlassian/confluence/plugins/labels/labels.js' */
AJS.Labels=function(b){function o(a,e){if(!a||!e)var d=b("#dialog-label-list"),a=d.attr("entityid"),e=d.attr("entitytype");return!a||!e?b(k.labelView):b(".labels-section-content").filter(function(){return this.getAttribute("entityid")==a&&this.getAttribute("entitytype")==e}).find(k.labelView)}AJS.bind("init.rte-control",function(){var a=0;AJS.Meta.get("num-labels")?a=AJS.Meta.get("num-labels"):b("#createPageLabelsString").val()&&(a=b.trim(b("#createPageLabelsString").val()).split(/\s+/).length);0!=
a&&(AJS.Meta.set("num-labels",a),b("#rte-button-labels").trigger("updateLabel"))});var t=function(a){a=AJS.$.trim(a);if(!a)return[];var e=[],d=(new Date).getTime();b(a.split(/\s+/)).each(function(a,b){var g=b.split(":"),i,h=g[0];2===g.length&&(i=g[0],h=g[1]);e.push({name:h,prefix:i,id:d});d++});return e},k={labelView:".label-list",labelItem:".aui-label",noLabelsMessage:".no-labels-message",idAttribute:"data-label-id",labelsFormFieldId:AJS.Meta.get("labels-form-field-id")||"createPageLabelsString"},
u=Confluence.getContextPath(),m={base:u+"/rest/ui/1.0/",getRestEndPoint:function(a){return this.base+("attachment"==a?"attachment/":"template"==a?"template/":"space"==a?"space/":"content/")},index:u+"/labels/autocompletelabel.action?maxResults=3",validate:function(){return this.getRestEndPoint()+"labels/validate"},add:function(a,b){return this.getRestEndPoint(a)+b+"/labels"},remove:function(a,b,d){return this.getRestEndPoint(a)+b+"/label/"+d},list:function(a,b){return this.getRestEndPoint(a)+b+"/labels"}},
p=function(a){var e=b("#"+k.labelsFormFieldId);e.length&&e.val(a)},q=function(){var a=b("#"+k.labelsFormFieldId);return a.length?a.val():""},r=function(){return b(".space-administration").length},j=function(a){return"0"===a||!!document.getElementById("createpagetemplate")},v=function(a){n();a&&a.promise&&(a.always([w,x]),a.done(function(a,d){AJS.Meta.set("num-labels",o().first().find(k.labelItem).size());b("#rte-button-labels").trigger("updateLabel");var c=d.not(".editable");0===d.find(".aui-label").length?
c.find(".labels-edit-container").before(Confluence.Templates.Labels.nolabels()):c.find(".no-labels-message").remove()}));return a},x=function(){b("#labels-string, #add-labels-editor-button").removeAttr("disabled aria-disabled")},w=function(){b("#labels-string").val("")},n=function(a){a=a||null;b("#label-operation-error-message").empty().toggle(!!a);AJS.messages.warning("#label-operation-error-message",{body:a})};b(".label-list.editable .aui-icon-close").live("click",function(a){a.preventDefault();
a=b("#dialog-label-list");AJS.Labels.removeLabel(b(this).closest("li"),a.attr("entityid"),a.attr("entitytype"))});AJS.toInit(function(){r()&&(AJS.Labels.bindAutocomplete(),b(".label-list").addClass("editable"))});AJS.bind("editor-heartbeat",function(a,e){if("undefined"!==typeof e.labelsHash){var d=b("#rte-button-labels");if(d.data("labelsHash")!==e.labelsHash){var c=AJS.Meta.get("content-type"),f=Confluence.Editor.Drafts.isNewContent()?AJS.Meta.get("draft-id"):AJS.Meta.get("page-id");j(f)||b.ajax({url:m.list(c,
f),cache:!1,success:function(a){AJS.Meta.set("num-labels",a.labels.length);b("#rte-button-labels").trigger("updateLabel");AJS.Labels.updateDialogLabelList(a.labels)},error:function(a,b){AJS.logError(b)}});d.data("labelsHash",e.labelsHash)}}});return{addLabel:function(a,e,d){if(a){b("#labels-string, #add-labels-editor-button").attr({disabled:"disabled","aria-disabled":!0});if(j(e)){var a=(q()+" "+a).split(/\s+/),c=[];AJS.$.each(a,function(a,b){-1===AJS.$.inArray(b,c)&&c.push(b)});a=c.join(" ")}var a=
{url:j(e)?m.validate():m.add(d,e),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(t(a))},f=b.Deferred(),a=AJS.$.ajax(a);a.done(function(a){var c=b("#dialog-label-list").find(".label-list"),a=a.labels,h,s=[];b.each(a,function(a,b){b.prefix&&"global"!==b.prefix?s.push(b.prefix+":"+b.name):s.push(b.name)});h=s.join(" ");if(j()){var y=(new Date).getTime();AJS.$.each(a,function(a,b){b.id=y++})}p(h);AJS.Labels.updateDialogLabelList(a);h=AJS.Meta.get("space-key");var l=o(e,
d).not(".editable");l.length&&(l.find("li.aui-label").remove(),l.find("li.labels-edit-container").before(Confluence.Templates.Labels.dialogLabels({labels:a,spaceKey:h})));f.resolve(a,l.add(c))});a.fail(function(a,b){var c;if("timeout"===b)c="Connecting to the server timed out, you\'ll need to try again";else try{c=JSON.parse(a.responseText).message}catch(d){c=b,AJS.log("Unexpected error when adding labels: "+d.message)}AJS.log("Failed to add labels: "+c);AJS.log("Failed to add labels xhr: "+a.responseText);n(c);f.reject(b)});a=
f.promise()}else a=!1;return v(a)},removeLabel:function(a,e,d){var c=a,f=e,g=d;if(c){c=c.jquery?c:b(c);r()&&(f=AJS.Meta.get("space-key"),g="space");var i=c.attr(k.idAttribute),h=b.Deferred();j(f)?(a=b.Deferred(),a.resolve()):(a={url:m.remove(g,f,i),type:"DELETE",dataType:"json",contentType:"application/json",data:{}},a=AJS.$.ajax(a));a.done(function(){var a=r()?b("#space-categories-list"):o(f,g),d=a.find(k.labelItem).filter("["+k.idAttribute+"='"+i+"']");d.fadeOut("normal",function(){d.remove();h.resolve(c,
a)});var e=b.trim(c.find("a").text()),j=q().split(/\s+/),j=b.grep(j,function(a){return a&&a!==e});p(j.join(" "))});a.fail(function(a,b){AJS.log(b);n(b=="timeout"?"Connecting to the server timed out, you\'ll need to try again":b);h.reject(b)});a=h.promise()}else a=!1;return v(a)},bindAutocomplete:function(){var a=b("#labels-string"),e=a.parents("#add-labels-form").length;a.length&&(b(window).bind("quicksearch.ajax-success",function(a,b){if("/labels/autocompletelabel.action?maxResults=3"==b.url)return AJS.Labels.queryTokens=b.json&&
b.json.queryTokens||[],!1}),b(window).bind("quicksearch.ajax-error",function(a,b){if("/labels/autocompletelabel.action?maxResults=3"==b.url)return AJS.Labels.queryTokens=[],!1}),a.quicksearch("/labels/autocompletelabel.action?maxResults=3",function(){if(!b("#labels-autocomplete-list .label-suggestion").length||""===a.val())this.hide();else if(!e)for(var d=b("#labels-autocomplete-list a.label-suggestion"),c=0,f=d.length;c<f;c++)d.get(c).href="#"},{makeParams:function(a){return{query:a,contentId:AJS.params.pageId||
""}},dropdownPlacement:function(a){b("#labels-autocomplete-list").append(a)},ajsDropDownOptions:{selectionHandler:function(d,c){if(c.find("a.label-suggestion").length){var f=b("span",c),f=b.data(f[0],"properties"),g=a.val(),i=[];if(e)i=g.split(/\s+/),i[i.length-1]=f.name,a.val(i.join(" "));else{for(var h=AJS.Labels.queryTokens,i=-1,j,k="",l=0,m=h.length;l<m;l++)k=h[l],j=g.lastIndexOf(k),j>i&&(i=j);-1!=i?(h=g.substr(0,i),(g=g.substr(i+k.length).match(/^\s+/))&&(h+=g[0]),a.val(h+f.name)):a.val(f.name)}}this.hide();
d.preventDefault();a.focus()}}}))},labelsAreNotPersisted:j,routes:m,setLabelError:n,parseLabelStringToArray:t,getLabelLink:function(a,b){var d="/label/";null!==a&&(void 0!=a&&""!==a)&&(d+=a+"/");var c=encodeURI;var f=b.prefix,g=b.name;return c(d+("global"===f||"team"===f||void 0===f||""===f||null===f?g:f+":"+g))},setLabelsInputField:p,getLabelsInputField:q}}(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-labels:labels-editor', location = 'com/atlassian/confluence/plugins/labels/dialog/labels-dialog.soy' */
// This file was automatically generated from labels-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Labels == 'undefined') { Confluence.Templates.Labels = {}; }


Confluence.Templates.Labels.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-58/Add%2C+Remove+and+Search+for+Labels"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.dialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="labels-dialog"><form id="add-labels-form" method="GET" action="" class="aui"><div id="label-operation-error-container"><div id="label-operation-error-message" class="error-message" ></div></div><div id="label-input-fields"><input id="labels-string" autocomplete="off" name="labels-string" value="labels-string" class="text"><input id="add-labels-editor-button" type="submit" class="add-labels aui-button" value="', soy.$$escapeHtml("Add"), '"></div><div id="labels-autocomplete-list" class="aui-dd-parent resize-to-input"></div><div id="dialog-label-list" class="labels-section-content"><!-- DIV placeholder for labels list, is copied into in labels-dialog.js --></div><div class="labels-tip"></div></form></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.nolabels = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="no-labels-message">', soy.$$escapeHtml("No labels"), '</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.dialogLabelList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="label-list editable">');
  Confluence.Templates.Labels.dialogLabels(opt_data, output);
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Labels.dialogLabels = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var labelList18 = opt_data.labels;
  var labelListLen18 = labelList18.length;
  for (var labelIndex18 = 0; labelIndex18 < labelListLen18; labelIndex18++) {
    var labelData18 = labelList18[labelIndex18];
    output.append('<li class="aui-label ', (opt_data.editable) ? 'aui-label-closeable aui-label-split' : '', '" data-label-id="', soy.$$escapeHtml(labelData18.id), '"><a class="aui-label-split-main" href="', soy.$$escapeHtml(""), soy.$$escapeHtml(labelData18.link), '" rel="tag">', (! labelData18.prefix || labelData18.prefix == 'global' || labelData18.prefix == 'team') ? soy.$$escapeHtml(labelData18.name) : soy.$$escapeHtml(labelData18.prefix) + ':' + soy.$$escapeHtml(labelData18.name), '</a>', (opt_data.editable) ? '<span class="aui-label-split-close"><span tabindex="0" class="aui-icon aui-icon-close"  title="' + soy.$$escapeHtml("Delete Label") + '" original-title="' + soy.$$escapeHtml("Delete Label") + '">' + soy.$$escapeHtml("Delete Label") + '</span></span>' : '', '</li>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-labels:labels-editor', location = 'com/atlassian/confluence/plugins/labels/dialog/labels-dialog.js' */
AJS.toInit(function(c){if(Confluence.Templates.Labels){var d=null,f=function(){c("#"+d.id).find(".label-list").removeClass("editable");d.hide();return!1};c("#rte-button-labels").live("click",function(){AJS.Labels.openDialog()});c(".show-labels-editor").click(function(b){b.preventDefault();b=c(b.target).closest(".labels-section-content");AJS.Labels.openDialog(b)});AJS.Labels.bindOpenDialog=function(b){b.click(function(a){a.preventDefault();a=c(a.target).closest(".labels-section-content");a.length?
AJS.Labels.openDialog(a):AJS.Labels.openDialog()})};AJS.Labels.openDialog=function(b){var a,g,e;d||(d=AJS.ConfluenceDialog({width:600,height:250,id:"edit-labels-dialog",onCancel:f}),d.addHeader("Labels"),d.addPanel("Label Editor",Confluence.Templates.Labels.dialog()),d.addCancel("Close",f),d.addHelpText("Shortcut tip: In page view, pressing \u003cb\u003e{shortcut}\u003c/b\u003e also opens this dialog box",{shortcut:"l"}),d.popup.element.find(".dialog-title").prepend(Confluence.Templates.Labels.helpLink()),c("#add-labels-form").submit(function(a){var b=
c("#labels-string");a.preventDefault();a=c("#dialog-label-list");AJS.Labels.addLabel(b.val(),a.attr("entityid"),a.attr("entitytype")).always(function(){c("#labels-autocomplete-list").find(".aui-dropdown").addClass("hidden");b.focus()})}),AJS.Labels.bindAutocomplete());b?(a=b.attr("entityid"),b=b.attr("entitytype")):(b=AJS.Meta.get("content-type"),a=Confluence.Editor.Drafts.isNewContent()?AJS.Meta.get("draft-id"):AJS.Meta.get("page-id"));g=AJS.Labels.routes.list(b,a);e=c("#dialog-label-list");e.attr("entityid",
a);e.attr("entitytype",b);var h=function(){d.show();c("#labels-string").val("").focus();AJS.trigger("labels.dialog.open")},i=function(a){AJS.Labels.updateDialogLabelList(a.labels);AJS.Meta.set("num-labels",a.labels.length);c("#rte-button-labels").trigger("updateLabel");h()};AJS.Labels.labelsAreNotPersisted(a)?(a=AJS.Labels.getLabelsInputField(),a=AJS.Labels.parseLabelStringToArray(a),i({labels:a})):c.ajax({url:g,cache:!1,success:function(a){var b=[];c.each(a.labels,function(a,c){b.push(c.name)});
AJS.Labels.setLabelsInputField(b.join(" "));i(a)},error:function(){AJS.Labels.setLabelError("Unable to fetch current labels from the server.");h()}});c("#dialog-label-list").attr("data-ready","true")};AJS.Labels.updateDialogLabelList=function(b){var a=c("#dialog-label-list");a.length&&(AJS.$.each(b,function(a,b){b.link=AJS.Labels.getLabelLink(AJS.Meta.get("space-key"),b)}),a.html(Confluence.Templates.Labels.dialogLabelList({labels:b,editable:!0})))}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.gadgets:gadget-directory-resources', location = 'script/gadget-directory-dialog.js' */
var GADGET_DIRECTORY=null;GadgetDirectory=function(){};GadgetDirectory.prototype={dlg:null,gadget_list:null,showDialog:function(){this.dlg.addHeader(GADGET_DIRECTORY.translations.header);this.dlg.addCancel(GADGET_DIRECTORY.translations.closeButton,function(a){a.hide();return false});AJS.$(".throbber").hide();this.dlg.getCurrentPanel().html(this.buildPanel())},buildPanel:function(){return AJS.$("<div/>").addClass("directory-panel").append(this.buildDirectoryHelp()).append(this.buildDirectoryList())},buildDirectoryHelp:function(){var a=AJS.$("<div/>").addClass("directory-help");AJS.$("<h3/>").addClass("directory-help-title").html(GADGET_DIRECTORY.translations.helpTitle1).appendTo(a);AJS.$("<p/>").addClass("directory-help-text").html(GADGET_DIRECTORY.translations.helpBody1).appendTo(a);AJS.$("<h3/>").addClass("directory-help-title").html(GADGET_DIRECTORY.translations.helpTitle2).appendTo(a);AJS.$("<p/>").addClass("directory-help-text").html(GADGET_DIRECTORY.translations.helpBody2).appendTo(a);AJS.$("<p/>").html(GADGET_DIRECTORY.translations.moreInfo).appendTo(a);return a},buildDirectoryList:function(){if(!GADGET_DIRECTORY.gadget_list){return AJS.$("<div/>").addClass("no-gadgets").html("No gadgets found.")}var a=AJS.$("<ol/>").addClass("macro-list");AJS.$.each(GADGET_DIRECTORY.gadget_list,function(d,g){var c=AJS.$("<li/>").attr("id","macro-"+g.title.split(" ").join("")).addClass("macro-list-item");var h=AJS.$("<h3/>").addClass("macro-title").html(g.title);var b=AJS.$("<p/>").append(AJS.$("<span/>").append(AJS.$("<a/>").addClass("macro-uri").attr("href",g.url).attr("target","_blank").attr("title",g.url).html(GADGET_DIRECTORY.translations.gadgetUrl)));var e=AJS.$("<p/>").addClass("macro-author");if(g.author){e.html("By "+g.author)}else{e.html(GADGET_DIRECTORY.translations.noAuthor)}var f=AJS.$("<p/>").addClass("macro-desc");if(g.description){f.html(g.description)}else{f.html(GADGET_DIRECTORY.translations.noDescription)}if(g.thumbnail){var j=AJS.$("<img/>").addClass("macro-icon").attr({height:60,width:120,alt:"",src:g.thumbnail});c.append(j)}c.append(h);c.append(b);c.append(e);c.append(f);a.append(c)});return a},buildThrobber:function(){var a=AJS.$("<div/>").addClass("throbber");Raphael.spinner(a[0],60,"#666");return a},loadDirectory:function(){AJS.$(document).keyup(function(a){if(a.keyCode==27){GADGET_DIRECTORY.dlg.hide();AJS.$(document).unbind("keyup",arguments.callee);return AJS.stopEvent(a)}});if(this.dlg){this.dlg.show()}else{this.dlg=new AJS.Dialog(865,530,"gadget-directory-dialog");this.dlg.addPanel("","panel1");this.dlg.getCurrentPanel().html(this.buildThrobber());this.dlg.getCurrentPanel().setPadding(0);this.dlg.getCurrentPanel().body.css("overflow","hidden");this.dlg.show();AJS.$.ajax({url:contextPath+"/rest/gadget/1.0/published/gadgetsdirectory",type:"GET",dataType:"json",success:function(a){if(a.directoryList){GADGET_DIRECTORY.gadget_list=a.directoryList}GADGET_DIRECTORY.translations=a.translations;GADGET_DIRECTORY.showDialog()},error:function(){GADGET_DIRECTORY.dlg.getCurrentPanel().html(AJS.$("<div/>").addClass("loading-error").html("An error has occurred while trying to load the gadget directory."))},timeout:12000})}}};AJS.toInit(function(a){GADGET_DIRECTORY=new GadgetDirectory();AJS.$("#gadget-directory-link").click(function(b){a(this).removeClass("interactive");GADGET_DIRECTORY.loadDirectory();b.preventDefault()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:atlassian-effects', location = '/includes/js/effects.js' */
function placeFocus(){if(!document.location.hash&&!document.getElementById("editpageform")&&!document.getElementById("createpageform")&&!document.getElementById("upload-attachments")&&!document.getElementById("addcomment")){for(var a="",e=window.location.search.substring(1).split("&"),c=0;c<e.length;c++){var d=e[c].split("=")[0],b=e[c].split("=")[1];"autofocus"==d&&(null!=b&&0<b.length)&&(a="'"+b+"'")}e=!1;for(c=0;c<document.forms.length;c++){d=document.forms[c].elements;if("quick-search"!=document.forms[c].id&&
"space-blog-quick-search"!=document.forms[c].id&&"inlinecommentform"!=document.forms[c].name)for(b=0;b<d.length;b++)if(("text"==d[b].type||"password"==d[b].type||"textarea"==d[b].type)&&!d[b].disabled&&"none"!=d[b].style.display)try{if(null!=a&&0<a.length){if(d[b].id==a){d[b].focus();e=!0;break}}else{d[b].focus();e=!0;break}}catch(f){}if(e)break}}}
function setCookie(a,e,c,d,b,f,g,h){a=a+"="+escape(e);c&&(a+="; expires="+(new Date(c,d,b)).toGMTString());a=f?a+("; path="+escape(f)):a+"; path=/";g&&(a+="; domain="+escape(g));h&&(a+="; secure");document.cookie=a}function getCookie(a){return(a=document.cookie.match(a+"=(.*?)(;|$)"))?unescape(a[1]):null}function highlight(a){new Effect.Highlight(a,{endcolor:"#f0f0f0"})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-select2', location = 'js-vendor/jquery/plugins/jquery.select2.js' */
(function(A){if(typeof A.fn.each2=="undefined"){A.extend(A.fn,{each2:function(E){var C=A([0]),D=-1,B=this.length;while(++D<B&&(C.context=C[0]=this[D])&&E.call(C[0],D,C)!==false){}return this}})}})(jQuery);(function(d,M){if(window.Select2!==M){return }var k,n,X,C,A,P,O={x:0,y:0},V,W,k={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(o){o=o.which?o.which:o;switch(o){case k.LEFT:case k.RIGHT:case k.UP:case k.DOWN:return true}return false},isControl:function(p){var o=p.which;switch(o){case k.SHIFT:case k.CTRL:case k.ALT:return true}if(p.metaKey){return true}return false},isFunctionKey:function(o){o=o.which?o.which:o;return o>=112&&o<=123}},b="<div class='select2-measure-scrollbar'></div>",D={"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z"};V=d(document);A=(function(){var o=1;return function(){return o++}}());function E(r){var p,q,o,s;if(!r||r.length<1){return r}p="";for(q=0,o=r.length;q<o;q++){s=r.charAt(q);p+=D[s]||s}return p}function Q(q,r){var p=0,o=r.length;for(;p<o;p=p+1){if(T(q,r[p])){return p}}return -1}function m(){var o=d(b);o.appendTo("body");var p={width:o.width()-o[0].clientWidth,height:o.height()-o[0].clientHeight};o.remove();return p}function T(p,o){if(p===o){return true}if(p===M||o===M){return false}if(p===null||o===null){return false}if(p.constructor===String){return p+""===o+""}if(o.constructor===String){return o+""===p+""}return false}function I(p,r){var s,q,o;if(p===null||p.length<1){return[]}s=p.split(r);for(q=0,o=s.length;q<o;q=q+1){s[q]=d.trim(s[q])}return s}function H(o){return o.outerWidth(false)-o.width()}function f(p){var o="keyup-change-value";p.on("keydown",function(){if(d.data(p,o)===M){d.data(p,o,p.val())}});p.on("keyup",function(){var q=d.data(p,o);if(q!==M&&p.val()!==q){d.removeData(p,o);p.trigger("keyup-change")}})}V.on("mousemove",function(o){O.x=o.pageX;O.y=o.pageY});function j(o){o.on("mousemove",function(q){var p=O;if(p===M||p.x!==q.pageX||p.y!==q.pageY){d(q.target).trigger("mousemove-filtered",q)}})}function K(r,p,o){o=o||M;var q;return function(){var s=arguments;window.clearTimeout(q);q=window.setTimeout(function(){p.apply(o,s)},r)}}function S(q){var o=false,p;return function(){if(o===false){p=q();o=true}return p}}function L(o,q){var p=K(o,function(r){q.trigger("scroll-debounced",r)});q.on("scroll",function(r){if(Q(r.target,q.get())>=0){p(r)}})}function i(o){if(o[0]===document.activeElement){return }window.setTimeout(function(){var q=o[0],r=o.val().length,p;o.focus();if(o.is(":visible")&&q===document.activeElement){if(q.setSelectionRange){q.setSelectionRange(r,r)}else{if(q.createTextRange){p=q.createTextRange();p.collapse(false);p.select()}}}},0)}function F(o){o=d(o)[0];var r=0;var p=0;if("selectionStart" in o){r=o.selectionStart;p=o.selectionEnd-r}else{if("selection" in document){o.focus();var q=document.selection.createRange();p=document.selection.createRange().text.length;q.moveStart("character",-o.value.length);r=q.text.length-p}}return{offset:r,length:p}}function a(o){o.preventDefault();o.stopPropagation()}function B(o){o.preventDefault();o.stopImmediatePropagation()}function N(p){if(!P){var o=p[0].currentStyle||window.getComputedStyle(p[0],null);P=d(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:o.fontSize,fontFamily:o.fontFamily,fontStyle:o.fontStyle,fontWeight:o.fontWeight,letterSpacing:o.letterSpacing,textTransform:o.textTransform,whiteSpace:"nowrap"});P.attr("class","select2-sizer");d("body").append(P)}P.text(p.val());return P.width()}function J(p,t,o){var r,s=[],q;r=p.attr("class");if(r){r=""+r;d(r.split(" ")).each2(function(){if(this.indexOf("select2-")===0){s.push(this)}})}r=t.attr("class");if(r){r=""+r;d(r.split(" ")).each2(function(){if(this.indexOf("select2-")!==0){q=o(this);if(q){s.push(q)}}})}p.attr("class",s.join(" "))}function U(t,s,q,o){var r=E(t.toUpperCase()).indexOf(E(s.toUpperCase())),p=s.length;if(r<0){q.push(o(t));return }q.push(o(t.substring(0,r)));q.push("<span class='select2-match'>");q.push(o(t.substring(r,r+p)));q.push("</span>");q.push(o(t.substring(r+p,t.length)))}function g(o){var p={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(o).replace(/[&<>"'\/\\]/g,function(q){return p[q]})}function e(p){var s,q=null,t=p.quietMillis||100,r=p.url,o=this;return function(u){window.clearTimeout(s);s=window.setTimeout(function(){var x=p.data,w=r,z=p.transport||d.fn.select2.ajaxDefaults.transport,v={type:p.type||"GET",cache:p.cache||false,jsonpCallback:p.jsonpCallback||M,dataType:p.dataType||"json"},y=d.extend({},d.fn.select2.ajaxDefaults.params,v);x=x?x.call(o,u.term,u.page,u.context):null;w=(typeof w==="function")?w.call(o,u.term,u.page,u.context):w;if(q){q.abort()}if(p.params){if(d.isFunction(p.params)){d.extend(y,p.params.call(o))}else{d.extend(y,p.params)}}d.extend(y,{url:w,dataType:p.dataType,data:x,success:function(AB){var AA=p.results(AB,u.page);u.callback(AA)}});q=z.call(o,y)},t)}}function h(p){var s=p,r,q,t=function(u){return""+u.text};if(d.isArray(s)){q=s;s={results:q}}if(d.isFunction(s)===false){q=s;s=function(){return q}}var o=s();if(o.text){t=o.text;if(!d.isFunction(t)){r=o.text;t=function(u){return u[r]}}}return function(w){var v=w.term,u={results:[]},x;if(v===""){w.callback(s());return }x=function(z,AB){var AA,y;z=z[0];if(z.children){AA={};for(y in z){if(z.hasOwnProperty(y)){AA[y]=z[y]}}AA.children=[];d(z.children).each2(function(AC,AD){x(AD,AA.children)});if(AA.children.length||w.matcher(v,t(AA),z)){AB.push(AA)}}else{if(w.matcher(v,t(z),z)){AB.push(z)}}};d(s().results).each2(function(z,y){x(y,u.results)});w.callback(u)}}function Z(p){var o=d.isFunction(p);return function(s){var r=s.term,q={results:[]};d(o?p():p).each(function(){var t=this.text!==M,u=t?this.text:this;if(r===""||s.matcher(r,u)){q.results.push(t?this:{id:this,text:this})}});s.callback(q)}}function Y(o,p){if(d.isFunction(o)){return true}if(!o){return false}throw new Error(p+" must be a function or a falsy value")}function c(o){return d.isFunction(o)?o():o}function R(o){var p=0;d.each(o,function(q,r){if(r.children){p+=R(r.children)}else{p++}});return p}function G(w,x,u,o){var p=w,y=false,r,v,s,q,t;if(!o.createSearchChoice||!o.tokenSeparators||o.tokenSeparators.length<1){return M}while(true){v=-1;for(s=0,q=o.tokenSeparators.length;s<q;s++){t=o.tokenSeparators[s];v=w.indexOf(t);if(v>=0){break}}if(v<0){break}r=w.substring(0,v);w=w.substring(v+t.length);if(r.length>0){r=o.createSearchChoice.call(this,r,x);if(r!==M&&r!==null&&o.id(r)!==M&&o.id(r)!==null){y=false;for(s=0,q=x.length;s<q;s++){if(T(o.id(r),o.id(x[s]))){y=true;break}}if(!y){u(r)}}}}if(p!==w){return w}}function l(o,p){var q=function(){};q.prototype=new o;q.prototype.constructor=q;q.prototype.parent=o.prototype;q.prototype=d.extend(q.prototype,p);return q}n=l(Object,{bind:function(p){var o=this;return function(){p.apply(o,arguments)}},init:function(s){var q,p,t=".select2-results";this.opts=s=this.prepareOpts(s);this.id=s.id;if(s.element.data("select2")!==M&&s.element.data("select2")!==null){s.element.data("select2").destroy()}this.container=this.createContainer();this.containerId="s2id_"+(s.element.attr("id")||"autogen"+A());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");this.container.attr("id",this.containerId);this.body=S(function(){return s.element.closest("body")});J(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.attr("style",s.element.attr("style"));this.container.css(c(s.containerCss));this.container.addClass(c(s.containerCssClass));this.elementTabIndex=this.opts.element.attr("tabindex");this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",a);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");J(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);this.dropdown.addClass(c(s.dropdownCssClass));this.dropdown.data("select2",this);this.dropdown.on("click",a);this.results=q=this.container.find(t);this.search=p=this.container.find("input.select2-input");this.queryCount=0;this.resultsPage=0;this.context=null;this.initContainer();this.container.on("click",a);j(this.results);this.dropdown.on("mousemove-filtered touchstart touchmove touchend",t,this.bind(this.highlightUnderEvent));L(80,this.results);this.dropdown.on("scroll-debounced",t,this.bind(this.loadMoreIfNeeded));d(this.container).on("change",".select2-input",function(u){u.stopPropagation()});d(this.dropdown).on("change",".select2-input",function(u){u.stopPropagation()});if(d.fn.mousewheel){q.mousewheel(function(x,y,v,u){var w=q.scrollTop();if(u>0&&w-u<=0){q.scrollTop(0);a(x)}else{if(u<0&&q.get(0).scrollHeight-q.scrollTop()+u<=q.height()){q.scrollTop(q.get(0).scrollHeight-q.height());a(x)}}})}f(p);p.on("keyup-change input paste",this.bind(this.updateResults));p.on("focus",function(){p.addClass("select2-focused")});p.on("blur",function(){p.removeClass("select2-focused")});this.dropdown.on("mouseup",t,this.bind(function(u){if(d(u.target).closest(".select2-result-selectable").length>0){this.highlightUnderEvent(u);this.selectHighlighted(u)}}));this.dropdown.on("click mouseup mousedown",function(u){u.stopPropagation()});if(d.isFunction(this.opts.initSelection)){this.initSelection();this.monitorSource()}if(s.maximumInputLength!==null){this.search.attr("maxlength",s.maximumInputLength)}var r=s.element.prop("disabled");if(r===M){r=false}this.enable(!r);var o=s.element.prop("readonly");if(o===M){o=false}this.readonly(o);W=W||m();this.autofocus=s.element.prop("autofocus");s.element.prop("autofocus",false);if(this.autofocus){this.focus()}this.nextSearchTerm=M},destroy:function(){var p=this.opts.element,o=p.data("select2");this.close();if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null}if(o!==M){o.container.remove();o.dropdown.remove();p.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||false);if(this.elementTabIndex){p.attr({tabindex:this.elementTabIndex})}else{p.removeAttr("tabindex")}p.show()}},optionToData:function(o){if(o.is("option")){return{id:o.prop("value"),text:o.text(),element:o.get(),css:o.attr("class"),disabled:o.prop("disabled"),locked:T(o.attr("locked"),"locked")||T(o.data("locked"),true)}}else{if(o.is("optgroup")){return{text:o.attr("label"),children:[],element:o.get(),css:o.attr("class")}}}},prepareOpts:function(t){var r,p,o,s,q=this;r=t.element;if(r.get(0).tagName.toLowerCase()==="select"){this.select=p=t.element}if(p){d.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in t){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}})}t=d.extend({},{populateResults:function(u,v,x){var w,y=this.opts.id;w=function(AF,z,AE){var AG,AB,AL,AI,AC,AK,AA,AJ,AH,AD;AF=t.sortResults(AF,z,x);for(AG=0,AB=AF.length;AG<AB;AG=AG+1){AL=AF[AG];AC=(AL.disabled===true);AI=(!AC)&&(y(AL)!==M);AK=AL.children&&AL.children.length>0;AA=d("<li></li>");AA.addClass("select2-results-dept-"+AE);AA.addClass("select2-result");AA.addClass(AI?"select2-result-selectable":"select2-result-unselectable");if(AC){AA.addClass("select2-disabled")}if(AK){AA.addClass("select2-result-with-children")}AA.addClass(q.opts.formatResultCssClass(AL));AJ=d(document.createElement("div"));AJ.addClass("select2-result-label");AD=t.formatResult(AL,AJ,x,q.opts.escapeMarkup);if(AD!==M){AJ.html(AD)}AA.append(AJ);if(AK){AH=d("<ul></ul>");AH.addClass("select2-result-sub");w(AL.children,AH,AE+1);AA.append(AH)}AA.data("select2-data",AL);z.append(AA)}};w(v,u,0)}},d.fn.select2.defaults,t);if(typeof (t.id)!=="function"){o=t.id;t.id=function(u){return u[o]}}if(d.isArray(t.element.data("select2Tags"))){if("tags" in t){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+t.element.attr("id")}t.tags=t.element.data("select2Tags")}if(p){t.query=this.bind(function(y){var x={results:[],more:false},w=y.term,v,u,z;z=function(AA,AC){var AB;if(AA.is("option")){if(y.matcher(w,AA.text(),AA)){AC.push(q.optionToData(AA))}}else{if(AA.is("optgroup")){AB=q.optionToData(AA);AA.children().each2(function(AD,AE){z(AE,AB.children)});if(AB.children.length>0){AC.push(AB)}}}};v=r.children();if(this.getPlaceholder()!==M&&v.length>0){u=this.getPlaceholderOption();if(u){v=v.not(u)}}v.each2(function(AA,AB){z(AB,x.results)});y.callback(x)});t.id=function(u){return u.id};t.formatResultCssClass=function(u){return u.css}}else{if(!("query" in t)){if("ajax" in t){s=t.element.data("ajax-url");if(s&&s.length>0){t.ajax.url=s}t.query=e.call(t.element,t.ajax)}else{if("data" in t){t.query=h(t.data)}else{if("tags" in t){t.query=Z(t.tags);if(t.createSearchChoice===M){t.createSearchChoice=function(u){return{id:d.trim(u),text:d.trim(u)}}}if(t.initSelection===M){t.initSelection=function(u,w){var v=[];d(I(u.val(),t.separator)).each(function(){var y={id:this,text:this},x=t.tags;if(d.isFunction(x)){x=x()}d(x).each(function(){if(T(this.id,y.id)){y=this;return false}});v.push(y)});w(v)}}}}}}}if(typeof (t.query)!=="function"){throw"query function not defined for Select2 "+t.element.attr("id")}return t},monitorSource:function(){var p=this.opts.element,q,o;p.on("change.select2",this.bind(function(r){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection()}}));q=this.bind(function(){var s=p.prop("disabled");if(s===M){s=false}this.enable(!s);var r=p.prop("readonly");if(r===M){r=false}this.readonly(r);J(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.addClass(c(this.opts.containerCssClass));J(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);this.dropdown.addClass(c(this.opts.dropdownCssClass))});p.on("propertychange.select2",q);if(this.mutationCallback===M){this.mutationCallback=function(r){r.forEach(q)}}o=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(o!==M){if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null}this.propertyObserver=new o(this.mutationCallback);this.propertyObserver.observe(p.get(0),{attributes:true,subtree:false})}},triggerSelect:function(p){var o=d.Event("select2-selecting",{val:this.id(p),object:p});this.opts.element.trigger(o);return !o.isDefaultPrevented()},triggerChange:function(o){o=o||{};o=d.extend({},o,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",true);this.opts.element.trigger(o);this.opts.element.data("select2-change-triggered",false);this.opts.element.click();if(this.opts.blurOnChange){this.opts.element.blur()}},isInterfaceEnabled:function(){return this.enabledInterface===true},enableInterface:function(){var o=this._enabled&&!this._readonly,p=!o;if(o===this.enabledInterface){return false}this.container.toggleClass("select2-container-disabled",p);this.close();this.enabledInterface=o;return true},enable:function(o){if(o===M){o=true}if(this._enabled===o){return }this._enabled=o;this.opts.element.prop("disabled",!o);this.enableInterface()},disable:function(){this.enable(false)},readonly:function(o){if(o===M){o=false}if(this._readonly===o){return false}this._readonly=o;this.opts.element.prop("readonly",o);this.enableInterface();return true},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var q=this.dropdown,t=this.container.offset(),AC=this.container.outerHeight(false),AD=this.container.outerWidth(false),y=q.outerHeight(false),AA=d(window),AH=AA.width(),w=AA.height(),p=AA.scrollLeft()+AH,AG=AA.scrollTop()+w,r=t.top+AC,AE=t.left,o=r+y<=AG,v=(t.top-y)>=this.body().scrollTop(),z=q.outerWidth(false),AJ=AE+z<=p,AI=q.hasClass("select2-drop-above"),u,AF,s,x,AB;if(AI){AF=true;if(!v&&o){s=true;AF=false}}else{AF=false;if(!o&&v){s=true;AF=true}}if(s){q.hide();t=this.container.offset();AC=this.container.outerHeight(false);AD=this.container.outerWidth(false);y=q.outerHeight(false);p=AA.scrollLeft()+AH;AG=AA.scrollTop()+w;r=t.top+AC;AE=t.left;z=q.outerWidth(false);AJ=AE+z<=p;q.show()}if(this.opts.dropdownAutoWidth){AB=d(".select2-results",q)[0];q.addClass("select2-drop-auto-width");q.css("width","");z=q.outerWidth(false)+(AB.scrollHeight===AB.clientHeight?0:W.width);z>AD?AD=z:z=AD;AJ=AE+z<=p}else{this.container.removeClass("select2-drop-auto-width")}if(this.body().css("position")!=="static"){u=this.body().offset();r-=u.top;AE-=u.left}if(!AJ){AE=t.left+AD-z}x={left:AE,width:AD};if(AF){x.bottom=w-t.top;x.top="auto";this.container.addClass("select2-drop-above");q.addClass("select2-drop-above")}else{x.top=r;x.bottom="auto";this.container.removeClass("select2-drop-above");q.removeClass("select2-drop-above")}x=d.extend(x,c(this.opts.dropdownCss));q.css(x)},shouldOpen:function(){var o;if(this.opened()){return false}if(this._enabled===false||this._readonly===true){return false}o=d.Event("select2-opening");this.opts.element.trigger(o);return !o.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen()){return false}this.opening();return true},opening:function(){var t=this.containerId,o="scroll."+t,r="resize."+t,q="orientationchange."+t,p;this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.clearDropdownAlignmentPreference();if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body())}p=d("#select2-drop-mask");if(p.length==0){p=d(document.createElement("div"));p.attr("id","select2-drop-mask").attr("class","select2-drop-mask");p.hide();p.appendTo(this.body());p.on("mousedown touchstart click",function(v){var w=d("#select2-drop"),u;if(w.length>0){u=w.data("select2");if(u.opts.selectOnBlur){u.selectHighlighted({noFocus:true})}u.close({focus:true});v.preventDefault();v.stopPropagation()}})}if(this.dropdown.prev()[0]!==p[0]){this.dropdown.before(p)}d("#select2-drop").removeAttr("id");this.dropdown.attr("id","select2-drop");p.show();this.positionDropdown();this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");var s=this;this.container.parents().add(window).each(function(){d(this).on(r+" "+o+" "+q,function(u){s.positionDropdown()})})},close:function(){if(!this.opened()){return }var r=this.containerId,o="scroll."+r,q="resize."+r,p="orientationchange."+r;this.container.parents().add(window).each(function(){d(this).off(o).off(q).off(p)});this.clearDropdownAlignmentPreference();d("#select2-drop-mask").hide();this.dropdown.removeAttr("id");this.dropdown.hide();this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");this.results.empty();this.clearSearch();this.search.removeClass("select2-active");this.opts.element.trigger(d.Event("select2-close"))},externalSearch:function(o){this.open();this.search.val(o);this.updateResults(false)},clearSearch:function(){},getMaximumSelectionSize:function(){return c(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var r=this.results,q,o,v,u,s,t,p;o=this.highlight();if(o<0){return }if(o==0){r.scrollTop(0);return }q=this.findHighlightableChoices().find(".select2-result-label");v=d(q[o]);u=v.offset().top+v.outerHeight(true);if(o===q.length-1){p=r.find("li.select2-more-results");if(p.length>0){u=p.offset().top+p.outerHeight(true)}}s=r.offset().top+r.outerHeight(true);if(u>s){r.scrollTop(r.scrollTop()+(u-s))}t=v.offset().top-r.offset().top;if(t<0&&v.css("display")!="none"){r.scrollTop(r.scrollTop()+t)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)")},moveHighlight:function(r){var q=this.findHighlightableChoices(),p=this.highlight();while(p>-1&&p<q.length){p+=r;var o=d(q[p]);if(o.hasClass("select2-result-selectable")&&!o.hasClass("select2-disabled")&&!o.hasClass("select2-selected")){this.highlight(p);break}}},highlight:function(p){var r=this.findHighlightableChoices(),o,q;if(arguments.length===0){return Q(r.filter(".select2-highlighted")[0],r.get())}if(p>=r.length){p=r.length-1}if(p<0){p=0}this.removeHighlight();o=d(r[p]);o.addClass("select2-highlighted");this.ensureHighlightVisible();q=o.data("select2-data");if(q){this.opts.element.trigger({type:"select2-highlight",val:this.id(q),choice:q})}},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(p){var o=d(p.target).closest(".select2-result-selectable");if(o.length>0&&!o.is(".select2-highlighted")){var q=this.findHighlightableChoices();this.highlight(q.index(o))}else{if(o.length==0){this.removeHighlight()}}},loadMoreIfNeeded:function(){var s=this.results,r=s.find("li.select2-more-results"),u,t=this.resultsPage+1,o=this,q=this.search.val(),p=this.context;if(r.length===0){return }u=r.offset().top-s.offset().top-s.height();if(u<=this.opts.loadMorePadding){r.addClass("select2-active");this.opts.query({element:this.opts.element,term:q,page:t,context:p,matcher:this.opts.matcher,callback:this.bind(function(v){if(!o.opened()){return }o.opts.populateResults.call(this,s,v.results,{term:q,page:t,context:p});o.postprocessResults(v,false,false);if(v.more===true){r.detach().appendTo(s).text(o.opts.formatLoadMore(t+1));window.setTimeout(function(){o.loadMoreIfNeeded()},10)}else{r.remove()}o.positionDropdown();o.resultsPage=t;o.context=v.context;this.opts.element.trigger({type:"select2-loaded",items:v})})})}},tokenize:function(){},updateResults:function(w){var AA=this.search,u=this.results,o=this.opts,t,z=this,x,s=AA.val(),q=d.data(this.container,"select2-last-term"),y;if(w!==true&&q&&T(s,q)){return }d.data(this.container,"select2-last-term",s);if(w!==true&&(this.showSearchInput===false||!this.opened())){return }function v(){AA.removeClass("select2-active");z.positionDropdown()}function p(AB){u.html(AB);v()}y=++this.queryCount;var r=this.getMaximumSelectionSize();if(r>=1){t=this.data();if(d.isArray(t)&&t.length>=r&&Y(o.formatSelectionTooBig,"formatSelectionTooBig")){p("<li class='select2-selection-limit'>"+o.formatSelectionTooBig(r)+"</li>");return }}if(AA.val().length<o.minimumInputLength){if(Y(o.formatInputTooShort,"formatInputTooShort")){p("<li class='select2-no-results'>"+o.formatInputTooShort(AA.val(),o.minimumInputLength)+"</li>")}else{p("")}if(w&&this.showSearch){this.showSearch(true)}return }if(o.maximumInputLength&&AA.val().length>o.maximumInputLength){if(Y(o.formatInputTooLong,"formatInputTooLong")){p("<li class='select2-no-results'>"+o.formatInputTooLong(AA.val(),o.maximumInputLength)+"</li>")}else{p("")}return }if(o.formatSearching&&this.findHighlightableChoices().length===0){p("<li class='select2-searching'>"+o.formatSearching()+"</li>")}AA.addClass("select2-active");this.removeHighlight();x=this.tokenize();if(x!=M&&x!=null){AA.val(x)}this.resultsPage=1;o.query({element:o.element,term:AA.val(),page:this.resultsPage,context:null,matcher:o.matcher,callback:this.bind(function(AC){var AB;if(y!=this.queryCount){return }if(!this.opened()){this.search.removeClass("select2-active");return }this.context=(AC.context===M)?null:AC.context;if(this.opts.createSearchChoice&&AA.val()!==""){AB=this.opts.createSearchChoice.call(z,AA.val(),AC.results);if(AB!==M&&AB!==null&&z.id(AB)!==M&&z.id(AB)!==null){if(d(AC.results).filter(function(){return T(z.id(this),z.id(AB))}).length===0){AC.results.unshift(AB)}}}if(AC.results.length===0&&Y(o.formatNoMatches,"formatNoMatches")){p("<li class='select2-no-results'>"+o.formatNoMatches(AA.val())+"</li>");return }u.empty();z.opts.populateResults.call(this,u,AC.results,{term:AA.val(),page:this.resultsPage,context:null});if(AC.more===true&&Y(o.formatLoadMore,"formatLoadMore")){u.append("<li class='select2-more-results'>"+z.opts.escapeMarkup(o.formatLoadMore(this.resultsPage))+"</li>");window.setTimeout(function(){z.loadMoreIfNeeded()},10)}this.postprocessResults(AC,w);v();this.opts.element.trigger({type:"select2-loaded",items:AC})})})},cancel:function(){this.close()},blur:function(){if(this.opts.selectOnBlur){this.selectHighlighted({noFocus:true})}this.close();this.container.removeClass("select2-container-active");if(this.search[0]===document.activeElement){this.search.blur()}this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){i(this.search)},selectHighlighted:function(p){var o=this.highlight(),q=this.results.find(".select2-highlighted"),r=q.closest(".select2-result").data("select2-data");if(r){this.highlight(o);this.onSelect(r,p)}else{if(p&&p.noFocus){this.close()}}},getPlaceholder:function(){var o;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((o=this.getPlaceholderOption())!==M?o.text():M)},getPlaceholderOption:function(){if(this.select){var o=this.select.children("option").first();if(this.opts.placeholderOption!==M){return(this.opts.placeholderOption==="first"&&o)||(typeof this.opts.placeholderOption==="function"&&this.opts.placeholderOption(this.select))}else{if(o.text()===""&&o.val()===""){return o}}}},initContainerWidth:function(){function p(){var u,s,v,t,r,q;if(this.opts.width==="off"){return null}else{if(this.opts.width==="element"){return this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px"}else{if(this.opts.width==="copy"||this.opts.width==="resolve"){u=this.opts.element.attr("style");if(u!==M){s=u.split(";");for(t=0,r=s.length;t<r;t=t+1){q=s[t].replace(/\s/g,"");v=q.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);if(v!==null&&v.length>=1){return v[1]}}}if(this.opts.width==="resolve"){u=this.opts.element.css("width");if(u.indexOf("%")>0){return u}return(this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px")}return null}else{if(d.isFunction(this.opts.width)){return this.opts.width()}else{return this.opts.width}}}}}var o=p.call(this);if(o!==null){this.container.css("width",o)}}});X=l(n,{createContainer:function(){var o=d(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow'><b></b></span>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return o},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.focusser.prop("disabled",!this.isInterfaceEnabled())}},opening:function(){var q,p,o;if(this.opts.minimumResultsForSearch>=0){this.showSearch(true)}this.parent.opening.apply(this,arguments);if(this.showSearchInput!==false){this.search.val(this.focusser.val())}this.search.focus();q=this.search.get(0);if(q.createTextRange){p=q.createTextRange();p.collapse(false);p.select()}else{if(q.setSelectionRange){o=this.search.val().length;q.setSelectionRange(o,o)}}if(this.search.val()===""){if(this.nextSearchTerm!=M){this.search.val(this.nextSearchTerm);this.search.select()}}this.focusser.prop("disabled",true).val("");this.updateResults(true);this.opts.element.trigger(d.Event("select2-open"))},close:function(o){if(!this.opened()){return }this.parent.close.apply(this,arguments);o=o||{focus:true};this.focusser.removeAttr("disabled");if(o.focus){this.focusser.focus()}},focus:function(){if(this.opened()){this.close()}else{this.focusser.removeAttr("disabled");this.focusser.focus()}},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments);this.focusser.removeAttr("disabled");this.focusser.focus()},destroy:function(){d("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id"));this.parent.destroy.apply(this,arguments)},initContainer:function(){var p,o=this.container,q=this.dropdown;if(this.opts.minimumResultsForSearch<0){this.showSearch(false)}else{this.showSearch(true)}this.selection=p=o.find(".select2-choice");this.focusser=o.find(".select2-focusser");this.focusser.attr("id","s2id_autogen"+A());d("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id"));this.focusser.attr("tabindex",this.elementTabIndex);this.search.on("keydown",this.bind(function(r){if(!this.isInterfaceEnabled()){return }if(r.which===k.PAGE_UP||r.which===k.PAGE_DOWN){a(r);return }switch(r.which){case k.UP:case k.DOWN:this.moveHighlight((r.which===k.UP)?-1:1);a(r);return ;case k.ENTER:this.selectHighlighted();a(r);return ;case k.TAB:this.selectHighlighted({noFocus:true});return ;case k.ESC:this.cancel(r);a(r);return }}));this.search.on("blur",this.bind(function(r){if(document.activeElement===this.body().get(0)){window.setTimeout(this.bind(function(){this.search.focus()}),0)}}));this.focusser.on("keydown",this.bind(function(r){if(!this.isInterfaceEnabled()){return }if(r.which===k.TAB||k.isControl(r)||k.isFunctionKey(r)||r.which===k.ESC){return }if(this.opts.openOnEnter===false&&r.which===k.ENTER){a(r);return }if(r.which==k.DOWN||r.which==k.UP||(r.which==k.ENTER&&this.opts.openOnEnter)){if(r.altKey||r.ctrlKey||r.shiftKey||r.metaKey){return }this.open();a(r);return }if(r.which==k.DELETE||r.which==k.BACKSPACE){if(this.opts.allowClear){this.clear()}a(r);return }}));f(this.focusser);this.focusser.on("keyup-change input",this.bind(function(r){if(this.opts.minimumResultsForSearch>=0){r.stopPropagation();if(this.opened()){return }this.open()}}));p.on("mousedown","abbr",this.bind(function(r){if(!this.isInterfaceEnabled()){return }this.clear();B(r);this.close();this.selection.focus()}));p.on("mousedown",this.bind(function(r){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}if(this.opened()){this.close()}else{if(this.isInterfaceEnabled()){this.open()}}a(r)}));q.on("mousedown",this.bind(function(){this.search.focus()}));p.on("focus",this.bind(function(r){a(r)}));this.focusser.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active");this.opts.element.trigger(d.Event("select2-blur"))}}));this.search.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}this.container.addClass("select2-container-active")}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.setPlaceholder()},clear:function(q){var r=this.selection.data("select2-data");if(r){var p=d.Event("select2-clearing");this.opts.element.trigger(p);if(p.isDefaultPrevented()){return }var o=this.getPlaceholderOption();this.opts.element.val(o?o.val():"");this.selection.find(".select2-chosen").empty();this.selection.removeData("select2-data");this.setPlaceholder();if(q!==false){this.opts.element.trigger({type:"select2-removed",val:this.id(r),choice:r});this.triggerChange({removed:r})}}},initSelection:function(){var p;if(this.isPlaceholderOptionSelected()){this.updateSelection(null);this.close();this.setPlaceholder()}else{var o=this;this.opts.initSelection.call(null,this.opts.element,function(q){if(q!==M&&q!==null){o.updateSelection(q);o.close();o.setPlaceholder()}})}},isPlaceholderOptionSelected:function(){var o;if(!this.getPlaceholder()){return false}return((o=this.getPlaceholderOption())!==M&&o.prop("selected"))||(this.opts.element.val()==="")||(this.opts.element.val()===M)||(this.opts.element.val()===null)},prepareOpts:function(){var p=this.parent.prepareOpts.apply(this,arguments),o=this;if(p.element.get(0).tagName.toLowerCase()==="select"){p.initSelection=function(q,s){var r=q.find("option").filter(function(){return this.selected});s(o.optionToData(r))}}else{if("data" in p){p.initSelection=p.initSelection||function(r,t){var s=r.val();var q=null;p.query({matcher:function(u,x,v){var w=T(s,p.id(v));if(w){q=v}return w},callback:!d.isFunction(t)?d.noop:function(){t(q)}})}}}return p},getPlaceholder:function(){if(this.select){if(this.getPlaceholderOption()===M){return M}}return this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var o=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&o!==M){if(this.select&&this.getPlaceholderOption()===M){return }this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(o));this.selection.addClass("select2-default");this.container.removeClass("select2-allowclear")}},postprocessResults:function(t,p,s){var r=0,o=this,u=true;this.findHighlightableChoices().each2(function(v,w){if(T(o.id(w.data("select2-data")),o.opts.element.val())){r=v;return false}});if(s!==false){if(p===true&&r>=0){this.highlight(r)}else{this.highlight(0)}}if(p===true){var q=this.opts.minimumResultsForSearch;if(q>=0){this.showSearch(R(t.results)>=q)}}},showSearch:function(o){if(this.showSearchInput===o){return }this.showSearchInput=o;this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!o);this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!o);d(this.dropdown,this.container).toggleClass("select2-with-searchbox",o)},onSelect:function(q,p){if(!this.triggerSelect(q)){return }var o=this.opts.element.val(),r=this.data();this.opts.element.val(this.id(q));this.updateSelection(q);this.opts.element.trigger({type:"select2-selected",val:this.id(q),choice:q});this.nextSearchTerm=this.opts.nextSearchTerm(q,this.search.val());this.close();if(!p||!p.noFocus){this.focusser.focus()}if(!T(o,this.id(q))){this.triggerChange({added:q,removed:r})}},updateSelection:function(r){var p=this.selection.find(".select2-chosen"),q,o;this.selection.data("select2-data",r);p.empty();if(r!==null){q=this.opts.formatSelection(r,p,this.opts.escapeMarkup)}if(q!==M){p.append(q)}o=this.opts.formatSelectionCssClass(r,p);if(o!==M){p.addClass(o)}this.selection.removeClass("select2-default");if(this.opts.allowClear&&this.getPlaceholder()!==M){this.container.addClass("select2-allowclear")}},val:function(){var s,p=false,q=null,o=this,r=this.data();if(arguments.length===0){return this.opts.element.val()}s=arguments[0];if(arguments.length>1){p=arguments[1]}if(this.select){this.select.val(s).find("option").filter(function(){return this.selected}).each2(function(t,u){q=o.optionToData(u);return false});this.updateSelection(q);this.setPlaceholder();if(p){this.triggerChange({added:q,removed:r})}}else{if(!s&&s!==0){this.clear(p);return }if(this.opts.initSelection===M){throw new Error("cannot call val() if initSelection() is not defined")}this.opts.element.val(s);this.opts.initSelection(this.opts.element,function(t){o.opts.element.val(!t?"":o.id(t));o.updateSelection(t);o.setPlaceholder();if(p){o.triggerChange({added:t,removed:r})}})}},clearSearch:function(){this.search.val("");this.focusser.val("")},data:function(q){var p,o=false;if(arguments.length===0){p=this.selection.data("select2-data");if(p==M){p=null}return p}else{if(arguments.length>1){o=arguments[1]}if(!q){this.clear(o)}else{p=this.data();this.opts.element.val(!q?"":this.id(q));this.updateSelection(q);if(o){this.triggerChange({added:q,removed:p})}}}}});C=l(n,{createContainer:function(){var o=d(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return o},prepareOpts:function(){var p=this.parent.prepareOpts.apply(this,arguments),o=this;if(p.element.get(0).tagName.toLowerCase()==="select"){p.initSelection=function(q,s){var r=[];q.find("option").filter(function(){return this.selected}).each2(function(t,u){r.push(o.optionToData(u))});s(r)}}else{if("data" in p){p.initSelection=p.initSelection||function(q,t){var r=I(q.val(),p.separator);var s=[];p.query({matcher:function(u,x,v){var w=d.grep(r,function(y){return T(y,p.id(v))}).length;if(w){s.push(v)}return w},callback:!d.isFunction(t)?d.noop:function(){var u=[];for(var x=0;x<r.length;x++){var y=r[x];for(var w=0;w<s.length;w++){var v=s[w];if(T(y,p.id(v))){u.push(v);s.splice(w,1);break}}}t(u)}})}}}return p},selectChoice:function(o){var p=this.container.find(".select2-search-choice-focus");if(p.length&&o&&o[0]==p[0]){}else{if(p.length){this.opts.element.trigger("choice-deselected",p)}p.removeClass("select2-search-choice-focus");if(o&&o.length){this.close();o.addClass("select2-search-choice-focus");this.opts.element.trigger("choice-selected",o)}}},destroy:function(){d("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id"));this.parent.destroy.apply(this,arguments)},initContainer:function(){var o=".select2-choices",p;this.searchContainer=this.container.find(".select2-search-field");this.selection=p=this.container.find(o);var q=this;this.selection.on("click",".select2-search-choice:not(.select2-locked)",function(r){q.search[0].focus();q.selectChoice(d(this))});this.search.attr("id","s2id_autogen"+A());d("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id"));this.search.on("input paste",this.bind(function(){if(!this.isInterfaceEnabled()){return }if(!this.opened()){this.open()}}));this.search.attr("tabindex",this.elementTabIndex);this.keydowns=0;this.search.on("keydown",this.bind(function(v){if(!this.isInterfaceEnabled()){return }++this.keydowns;var t=p.find(".select2-search-choice-focus");var u=t.prev(".select2-search-choice:not(.select2-locked)");var s=t.next(".select2-search-choice:not(.select2-locked)");var w=F(this.search);if(t.length&&(v.which==k.LEFT||v.which==k.RIGHT||v.which==k.BACKSPACE||v.which==k.DELETE||v.which==k.ENTER)){var r=t;if(v.which==k.LEFT&&u.length){r=u}else{if(v.which==k.RIGHT){r=s.length?s:null}else{if(v.which===k.BACKSPACE){this.unselect(t.first());this.search.width(10);r=u.length?u:s}else{if(v.which==k.DELETE){this.unselect(t.first());this.search.width(10);r=s.length?s:null}else{if(v.which==k.ENTER){r=null}}}}}this.selectChoice(r);a(v);if(!r||!r.length){this.open()}return }else{if(((v.which===k.BACKSPACE&&this.keydowns==1)||v.which==k.LEFT)&&(w.offset==0&&!w.length)){this.selectChoice(p.find(".select2-search-choice:not(.select2-locked)").last());a(v);return }else{this.selectChoice(null)}}if(this.opened()){switch(v.which){case k.UP:case k.DOWN:this.moveHighlight((v.which===k.UP)?-1:1);a(v);return ;case k.ENTER:this.selectHighlighted();a(v);return ;case k.TAB:this.selectHighlighted({noFocus:true});this.close();return ;case k.ESC:this.cancel(v);a(v);return }}if(v.which===k.TAB||k.isControl(v)||k.isFunctionKey(v)||v.which===k.BACKSPACE||v.which===k.ESC){return }if(v.which===k.ENTER){if(this.opts.openOnEnter===false){return }else{if(v.altKey||v.ctrlKey||v.shiftKey||v.metaKey){return }}}this.open();if(v.which===k.PAGE_UP||v.which===k.PAGE_DOWN){a(v)}if(v.which===k.ENTER){a(v)}}));this.search.on("keyup",this.bind(function(r){this.keydowns=0;this.resizeSearch()}));this.search.on("blur",this.bind(function(r){this.container.removeClass("select2-container-active");this.search.removeClass("select2-focused");this.selectChoice(null);if(!this.opened()){this.clearSearch()}r.stopImmediatePropagation();this.opts.element.trigger(d.Event("select2-blur"))}));this.container.on("click",o,this.bind(function(r){if(!this.isInterfaceEnabled()){return }if(d(r.target).closest(".select2-search-choice").length>0){return }this.selectChoice(null);this.clearPlaceholder();if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}this.open();this.focusSearch();r.preventDefault()}));this.container.on("focus",o,this.bind(function(){if(!this.isInterfaceEnabled()){return }if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger(d.Event("select2-focus"))}this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");this.clearPlaceholder()}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.clearSearch()},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.search.prop("disabled",!this.isInterfaceEnabled())}},initSelection:function(){var p;if(this.opts.element.val()===""&&this.opts.element.text()===""){this.updateSelection([]);this.close();this.clearSearch()}if(this.select||this.opts.element.val()!==""){var o=this;this.opts.initSelection.call(null,this.opts.element,function(q){if(q!==M&&q!==null){o.updateSelection(q);o.close();o.clearSearch()}})}},clearSearch:function(){var p=this.getPlaceholder(),o=this.getMaxSearchWidth();if(p!==M&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(p).addClass("select2-default");this.search.width(o>0?o:this.container.css("width"))}else{this.search.val("").width(10)}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default")}},opening:function(){this.clearPlaceholder();this.resizeSearch();this.parent.opening.apply(this,arguments);this.focusSearch();this.updateResults(true);this.search.focus();this.opts.element.trigger(d.Event("select2-open"))},close:function(){if(!this.opened()){return }this.parent.close.apply(this,arguments)},focus:function(){this.close();this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(r){var q=[],p=[],o=this;d(r).each(function(){if(Q(o.id(this),q)<0){q.push(o.id(this));p.push(this)}});r=p;this.selection.find(".select2-search-choice").remove();d(r).each(function(){o.addSelectedChoice(this)});o.postprocessResults()},tokenize:function(){var o=this.search.val();o=this.opts.tokenizer.call(this,o,this.data(),this.bind(this.onSelect),this.opts);if(o!=null&&o!=M){this.search.val(o);if(o.length>0){this.open()}}},onSelect:function(p,o){if(!this.triggerSelect(p)){return }this.addSelectedChoice(p);this.opts.element.trigger({type:"selected",val:this.id(p),choice:p});if(this.select||!this.opts.closeOnSelect){this.postprocessResults(p,false,this.opts.closeOnSelect===true)}if(this.opts.closeOnSelect){this.close();this.search.width(10)}else{if(this.countSelectableResults()>0){this.search.width(10);this.resizeSearch();if(this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()){this.updateResults(true)}this.positionDropdown()}else{this.close();this.search.width(10)}}this.triggerChange({added:p});if(!o||!o.noFocus){this.focusSearch()}},cancel:function(){this.close();this.focusSearch()},addSelectedChoice:function(s){var u=!s.locked,q=d("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),v=d("<li class='select2-search-choice select2-locked'><div></div></li>");var r=u?q:v,o=this.id(s),p=this.getVal(),t,w;t=this.opts.formatSelection(s,r.find("div"),this.opts.escapeMarkup);if(t!=M){r.find("div").replaceWith("<div>"+t+"</div>")}w=this.opts.formatSelectionCssClass(s,r.find("div"));if(w!=M){r.addClass(w)}if(u){r.find(".select2-search-choice-close").on("mousedown",a).on("click dblclick",this.bind(function(x){if(!this.isInterfaceEnabled()){return }d(x.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(d(x.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch()})).dequeue();a(x)})).on("focus",this.bind(function(){if(!this.isInterfaceEnabled()){return }this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active")}))}r.data("select2-data",s);r.insertBefore(this.searchContainer);p.push(o);this.setVal(p)},unselect:function(q){var s=this.getVal(),r,p;q=q.closest(".select2-search-choice");if(q.length===0){throw"Invalid argument: "+q+". Must be .select2-search-choice"}r=q.data("select2-data");if(!r){return }while((p=Q(this.id(r),s))>=0){s.splice(p,1);this.setVal(s);if(this.select){this.postprocessResults()}}var o=d.Event("select2-removing");o.val=this.id(r);o.choice=r;this.opts.element.trigger(o);if(o.isDefaultPrevented()){return }q.remove();this.opts.element.trigger({type:"select2-removed",val:this.id(r),choice:r});this.triggerChange({removed:r})},postprocessResults:function(s,p,r){var t=this.getVal(),u=this.results.find(".select2-result"),q=this.results.find(".select2-result-with-children"),o=this;u.each2(function(w,v){var x=o.id(v.data("select2-data"));if(Q(x,t)>=0){v.addClass("select2-selected");v.find(".select2-result-selectable").addClass("select2-selected")}});q.each2(function(w,v){if(!v.is(".select2-result-selectable")&&v.find(".select2-result-selectable:not(.select2-selected)").length===0){v.addClass("select2-selected")}});if(this.highlight()==-1&&r!==false){o.highlight(0)}if(!this.opts.createSearchChoice&&!u.filter(".select2-result:not(.select2-selected)").length>0){if(!s||s&&!s.more&&this.results.find(".select2-no-results").length===0){if(Y(o.opts.formatNoMatches,"formatNoMatches")){this.results.append("<li class='select2-no-results'>"+o.opts.formatNoMatches(o.search.val())+"</li>")}}}},getMaxSearchWidth:function(){return this.selection.width()-H(this.search)},resizeSearch:function(){var t,r,q,o,p,s=H(this.search);t=N(this.search)+10;r=this.search.offset().left;q=this.selection.width();o=this.selection.offset().left;p=q-(r-o)-s;if(p<t){p=q-s}if(p<40){p=q-s}if(p<=0){p=t}this.search.width(Math.floor(p))},getVal:function(){var o;if(this.select){o=this.select.val();return o===null?[]:o}else{o=this.opts.element.val();return I(o,this.opts.separator)}},setVal:function(p){var o;if(this.select){this.select.val(p)}else{o=[];d(p).each(function(){if(Q(this,o)<0){o.push(this)}});this.opts.element.val(o.length===0?"":o.join(this.opts.separator))}},buildChangeDetails:function(o,r){var r=r.slice(0),o=o.slice(0);for(var q=0;q<r.length;q++){for(var p=0;p<o.length;p++){if(T(this.opts.id(r[q]),this.opts.id(o[p]))){r.splice(q,1);if(q>0){q--}o.splice(p,1);p--}}}return{added:r,removed:o}},val:function(r,p){var q,o=this;if(arguments.length===0){return this.getVal()}q=this.data();if(!q.length){q=[]}if(!r&&r!==0){this.opts.element.val("");this.updateSelection([]);this.clearSearch();if(p){this.triggerChange({added:this.data(),removed:q})}return }this.setVal(r);if(this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection));if(p){this.triggerChange(this.buildChangeDetails(q,this.data()))}}else{if(this.opts.initSelection===M){throw new Error("val() cannot be called if initSelection() is not defined")}this.opts.initSelection(this.opts.element,function(t){var s=d.map(t,o.id);o.setVal(s);o.updateSelection(t);o.clearSearch();if(p){o.triggerChange(o.buildChangeDetails(q,o.data()))}})}this.clearSearch()},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")}this.search.width(0);this.searchContainer.hide()},onSortEnd:function(){var p=[],o=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){p.push(o.opts.id(d(this).data("select2-data")))});this.setVal(p);this.triggerChange()},data:function(q,r){var p=this,s,o;if(arguments.length===0){return this.selection.find(".select2-search-choice").map(function(){return d(this).data("select2-data")}).get()}else{o=this.data();if(!q){q=[]}s=d.map(q,function(t){return p.opts.id(t)});this.setVal(s);this.updateSelection(q);this.clearSearch();if(r){this.triggerChange(this.buildChangeDetails(o,this.data()))}}}});d.fn.select2=function(){var t=Array.prototype.slice.call(arguments,0),p,s,o,v,x,w=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],u=["opened","isFocused","container","dropdown"],q=["val","data"],r={search:"externalSearch"};this.each(function(){if(t.length===0||typeof (t[0])==="object"){p=t.length===0?{}:d.extend({},t[0]);p.element=d(this);if(p.element.get(0).tagName.toLowerCase()==="select"){x=p.element.prop("multiple")}else{x=p.multiple||false;if("tags" in p){p.multiple=x=true}}s=x?new C():new X();s.init(p)}else{if(typeof (t[0])==="string"){if(Q(t[0],w)<0){throw"Unknown method: "+t[0]}v=M;s=d(this).data("select2");if(s===M){return }o=t[0];if(o==="container"){v=s.container}else{if(o==="dropdown"){v=s.dropdown}else{if(r[o]){o=r[o]}v=s[o].apply(s,t.slice(1))}}if(Q(t[0],u)>=0||(Q(t[0],q)&&t.length==1)){return false}}else{throw"Invalid arguments to select2 plugin: "+t}}});return(v===M)?this:v};d.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(p,q,s,o){var r=[];U(p.text,s.term,r,o);return r.join("")},formatSelection:function(q,p,o){return q?o(q.text):M},sortResults:function(p,o,q){return p},formatResultCssClass:function(o){return M},formatSelectionCssClass:function(p,o){return M},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(o,p){var q=p-o.length;return"Please enter "+q+" more character"+(q==1?"":"s")},formatInputTooLong:function(p,o){var q=p.length-o;return"Please delete "+q+" character"+(q==1?"":"s")},formatSelectionTooBig:function(o){return"You can only select "+o+" item"+(o==1?"":"s")},formatLoadMore:function(o){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(o){return o.id},matcher:function(o,p){return E(""+p).toUpperCase().indexOf(E(""+o).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:G,escapeMarkup:g,blurOnChange:false,selectOnBlur:false,adaptContainerCssClass:function(o){return o},adaptDropdownCssClass:function(o){return null},nextSearchTerm:function(o,p){return M}};d.fn.select2.ajaxDefaults={transport:d.ajax,params:{type:"GET",cache:false,dataType:"json"}};window.Select2={query:{ajax:e,local:h,tags:Z},util:{debounce:K,markMatch:U,escapeMarkup:g,stripDiacritics:E},"class":{"abstract":n,single:X,multi:C}}}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-select2', location = 'js/aui-select2.js' */
(function(C){var E=C.fn.select2;var D="aui-select2-container";var B="aui-select2-drop aui-dropdown2 aui-style-default";var A="aui-has-avatar";C.fn.auiSelect2=function(I){var H;if(C.isPlainObject(I)){var F=C.extend({},I);var G=F.hasAvatar?" "+A:"";F.containerCssClass=D+G+(F.containerCssClass?" "+F.containerCssClass:"");F.dropdownCssClass=B+G+(F.dropdownCssClass?" "+F.dropdownCssClass:"");H=Array.prototype.slice.call(arguments,1);H.unshift(F)}else{if(!arguments.length){H=[{containerCssClass:D,dropdownCssClass:B}]}else{H=arguments}}return E.apply(this,H)}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:dom-filter-field', location = '/includes/js/components/dom-filter-field.js' */
(function(e){Confluence.DomFilterField=function(c){function h(){f=e(c.items)}function g(){return e.trim(b.filter(":not(.blank-search)").val())}function i(){c.searcher(f,g());c.postSearch(f.filter(":visible"))}var d={items:null,matcher:function(a,c){return-1<a.text().toLowerCase().indexOf(c)},searcher:function(a,b){""!==b?(b=b.toLowerCase(),a.each(function(){var a=e(this),d=c.matcher(a,b);a.toggleClass("hidden",!d)})):a.removeClass("hidden")},postSearch:function(){},placeholderText:"Search",
submitCallback:function(a,b){AJS.debug("Confluence.DomFilterField submitted with "+a.length+" item(s) for search text >"+b+"<")}},c=e.extend(d,c),f;h();var d=e(Confluence.Templates.DomFilterField.form()),b=d.find("input");b.keyup(function(a){i();return AJS.stopEvent(a)}).keyup(function(a){return AJS.stopEvent(a)}).focus(function(a){b.hasClass("blank-search")&&b.removeClass("blank-search").val("");a.target.select()}).blur(function(){""===g()&&b.addClass("blank-search").val(c.placeholderText)}).blur();
c.formId&&d.attr("id",c.formId);c.inputId&&b.attr("id",c.inputId);d.submit(function(a){AJS.stopEvent(a);a=f.filter(":visible");a.length&&c.submitCallback(a,g());return!1});return{form:d,reset:function(){""!==g()&&(b.val("").blur(),c.searcher(f,""))},refreshItems:h,filter:i,focus:function(){b.focus()},focusAndSearch:function(a){a=e.trim(a);b.val(a).keyup();a&&b.removeClass("blank-search");b.focus()}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.components:dom-filter-field', location = '/includes/soy/dom-filter-field.soy' */
// This file was automatically generated from dom-filter-field.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DomFilterField == 'undefined') { Confluence.Templates.DomFilterField = {}; }


Confluence.Templates.DomFilterField.form = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form class="aui dom-filter-field-form"><input type="text" class="text"/></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:loader', location = 'com/atlassian/confluence/plugins/createcontent/js/loader.js' */
AJS.toInit(function(g){Confluence.Blueprint=Confluence.Blueprint||{};var c=false;var f=AJS.Meta.get("space-key");Confluence.Blueprint.Dialog=Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/blueprints/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.helpLink,headingText:"Create"});Confluence.Blueprint.loadDialog=function(j){var i=AJS.$.Deferred();var h;if(!c){h=Confluence.Blueprint.Dialog.openDialog(j);var l=WRM.require("wrc!create-content");var k=AJS.$.Deferred();Confluence.Blueprint.Dialog.requestSpaces().done(function(){var n=Confluence.Blueprint.Dialog.loadedSpaces,m=n.promotedSpaces.spaces[0]||n.otherSpaces.spaces[0];Confluence.Blueprint.Dialog.requestWebItems(m.id).done(function(){k.resolve()})});AJS.$.when(l,k.promise()).done(function(){Confluence.Dialogs.LocationPanel(Confluence.Blueprint.Dialog);j=AJS.$.extend(j,{createDialog:h,dialogBase:Confluence.Blueprint.Dialog});c=true;i.resolve(Confluence.Blueprint.Dialog.openDialog(j))}).fail(function(){AJS.log("Could not load resources for create dialog")})}else{i.resolve(Confluence.Blueprint.Dialog.openDialog(j))}return i.promise()};var b=g("#create-page-button"),a=false;if(!b.length){return}b.click(function(h){if(d(h)){Confluence.Blueprint.loadDialog();return false}}).mousedown(function(i){var h=i.which||i.button;if(g.browser.mozilla&&h==2||h==3){h=0}a=h!==0&&h!==1||i.ctrlKey||i.altKey||i.shiftKey||i.metaKey});e(b);g(document).on("click",".create-child-page-link",function(){Confluence.Blueprint.loadDialog({location:"child-page"});return false});g("#addPageLink, #addBlogLink, .acs-pagetree-create-link").hide();function d(i){if(!a){return true}a=false;var h=g(i.target).closest("a").attr("href");if(!h||h.indexOf("createpage.action")==-1){return true}return false}function e(h){var l=AJS.Meta.get("content-type"),k=AJS.Meta.get("content-id")||AJS.Meta.get("page-id"),j=AJS.contextPath()+"/pages/createpage.action",i;if(f){if(l=="page"){i=j+"?"+g.param({spaceKey:f,fromPageId:k})}else{i=j+"?"+g.param({spaceKey:f})}h.attr("href",i)}else{h.attr("href","#")}}});AJS.bind("shortcuts-loaded.keyboardshortcuts",function(b,a){AJS.$.each(a.shortcuts,function(d,c){if(c.param=="#createPageLink"){a.shortcuts.splice(d,1);return false}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:loader', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-launcher.js' */
(function(){function a(d,c,e){Confluence.Blueprint.Dialog.requestWebItems(d,c).done(function(f){var g=Confluence.Blueprint.Dialog.loadedWebitems[d];if(_.isEmpty(g)){AJS.log("create-from-template-macro: No Create dialog web items found for spaceKey >"+d+"<");return}e(f,g)}).fail(function(){AJS.log("create-from-template-macro: requestWebItems call for spaceKey >"+d+"< failed")})}function b(){var c={};AJS.$("#create-dialog-init-params div").each(function(){c[$(this).data("key")]=$(this).data("value")});return c}AJS.toInit(function(){Confluence.Blueprint=$.extend(Confluence.Blueprint,{loadDialogAndOpenTemplate:function(c){if(!_.isObject(c)){throw new Error("Confluence.Blueprint.loadDialogAndOpenTemplate called with no options")}var e=c.spaceKey,g=c.contentBlueprintId,d=c.templateId,f=c.title;if(e){Confluence.Blueprint.loadDialog({showDialog:true,updateHeight:false,showStepOne:true,initContext:b()}).done(function(h){a(e,true,function(l,m){var j=_.find(m,function(n){if(g){return n.contentBlueprintId==g}return n.templateId==d});if(!j){AJS.log("create-from-template-macro: No Create dialog web item found for contentBlueprintId >"+g+"< and templateId >"+d+"<");return}var k=j.itemModuleCompleteKey;j=$.extend({},j);j.title=f;j.spaceKey=""+e;AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{config:j});Confluence.Blueprint.fireWizard(l,j,h);h.removeBackButton();var i=j.howToUseTemplate&&!j.skipHowToUse;if(i||Confluence.Blueprint.hasWizard(k,j)){h.show()}})})}else{Confluence.Blueprint.loadDialog({initContext:b()})}}})});AJS.getWindowQueryParams=function(){var h={};if(window.location.search.length>1){var c=window.location.search.substr(1).split("&");for(var e=0;e<c.length;e++){var g=c[e].split("=");var d=unescape(g[0]);var f=g.length>1?unescape(g[1]):"";h[d]=f}}return h};AJS.toInit(function(){var e=AJS.getWindowQueryParams();var d=e.createDialogSpaceKey;if(!e.createDialog&&!d){return}var c=e.createDialogBlueprintKey;if(d&&c){a(d,false,function(g,h){var f=_.find(h,function(i){return i.blueprintModuleCompleteKey==c});if(f){e.createDialogBlueprintId=f.contentBlueprintId}else{AJS.log("No blueprint found with key: "+c)}});delete e.createDialogBlueprintKey}if(d&&!e.createDialogBlueprintId&&!e.createDialogTemplateId){AJS.log("Confluence.Blueprint.launchDialog triggered with incorrect options - please check the URL query: "+window.location.search);return}Confluence.Blueprint.loadDialogAndOpenTemplate({spaceKey:d,contentBlueprintId:e.createDialogBlueprintId,templateId:e.createDialogTemplateId})})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:loader', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-base.js' */
Confluence.Dialogs=Confluence.Dialogs||{};(function(b){Confluence.Dialogs.CreateDialogBase=function a(I){var g,R,p=I.dialogId,v=I.webItemsPath,y=[],h=false,s=Confluence.storageManager("confluence-create-content-plugin");function z(){if(R.find(".button-panel-cancel-link:visible").is(".disabled")){return}if(Confluence.Blueprint.HowToUse){Confluence.Blueprint.HowToUse.notifyCancel(g)}AJS.trigger("analytics",{name:p+".cancel"});g.remove();b(".tipsy").remove();g=null;R=null;return false}function P(){return b(".create-dialog-create-button:visible")}function N(){return b(".create-dialog-body .template:visible").length}function D(S){return S.data("content-blueprint-id")}function E(U){var W=D(U),T=U.data("template-id"),V=W||T,S=W?"contentBlueprintId":"templateId";if(!V){return Q("itemModuleCompleteKey",U.data("item-module-complete-key"))}return Q(S,V)}function k(S){if(!N()){return false}if(b(this).attr("disabled")==="disabled"){return false}b(this).attr("disabled","disabled").before('<div class="create-dialog-button-spinner"></div>');b(".create-dialog-button-spinner").spin("small");var V=B.getSpaceKey();var U=b(".template.selected");var T=E(U);if(!T){throw new Error("Expected at least one template to be selected")}T.spaceKey=V;Confluence.Blueprint.fireWizard(S,T,g)}function x(){if(!N()){P().attr("disabled","disabled")}else{P().removeAttr("disabled")}}function Q(S,T){return _.find(B.loadedWebitems[B.getSpaceKey()],function(U){return U[S]==T})}function K(S){return Q("contentBlueprintId",S)}function F(U){var T=K(U);var S=T&&T.wizard;var V=e(!S);P().text(V)}function r(S){S.addClass("selected").siblings().removeClass("selected");F(D(S));AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{item:S})}function q(S,X){var U=S.find(".template");var W=U.filter(".selected");var T=U.index(W)+X;T=T%U.length;var V=U.eq(T);r(V);V.focus();S.simpleScrollTo(V)}function c(T){var S=2;switch(T){case 37:return -1;case 39:return +1;case 38:return -S;case 40:return +S}return 0}function J(S){S.bind("keydown",function(T){var U=c(T.which);if(U){q(S,U);return AJS.stopEvent(T)}})}function l(ac,W){var ab=B.getSpaceKey();var ae=B.loadedWebitems[ab];ae=B.filterWebItems(ae);h=ae&&ae.length>0&&ae[0].isPromoted;y=n(ae);if(!h&&ac){ae=y}var T=Confluence.Templates.Blueprints.templates({webItems:ae,spaceKey:ab});var Z=b(T);var Y=H(Z);if(h&&Y===undefined){var ab=B.getSpaceKey();var V=b.parseJSON(s.getItem("showMore"))||{};var aa=V[ab];if(!aa||aa<3){var U=Z.find(".template");_.each(U,function(ag){var af=b(ag);var ah=E(af);if(!ah.isPromoted){af.hide()}});var ad=Z.append(Confluence.Templates.Blueprints.Promoted.showMore())[0];b("#promoted-link",ad).click(function(){V[ab]=(aa||0)+1;s.setItemQuietly("showMore",JSON.stringify(V));b(this).closest(".templates").find(".template").css("display","");b(this).closest("li").remove();x()})}}var S=R.find(".templates");if(S.length){if(W){S.fadeOut(150,function(){S.replaceWith(Z.fadeIn(150));u();o();J(Z)})}else{S.replaceWith(Z)}}else{b(".template-select-container-body").append(Z)}if(L()){var X=!ac;A(y.length,X)}else{d()}if(R.searcher){R.searcher.refreshItems();R.searcher.filter()}R.find(".loading").removeClass("loading");R.trigger("create-content.loaded");o();J(Z);if(L()){u()}if(Y!==undefined){R.find(".templates").simpleScrollTo(Y.first().click())}x()}function H(W){if(!g.initContext){return}var X;var T;var V=Confluence.Blueprint.Selector.getSelectors();for(var U=0,S=V.length;U<S;U++){X=V[U](g.initContext);if(X&&X.length){T=W.find('.template[data-item-module-complete-key="'+X+'"]');if(T.length){return T}else{AJS.log("Attempted to select a blueprint that could not be found in the create dialog: "+X)}}}}function u(){var S=b(".templates");S.css("height",S.outerHeight(false)-b("#discover-new-banner").outerHeight())}function o(){b(".template").click(function(){r(b(this))}).dblclick(function(){P().click()}).focus(function(){b(this).click()});b(".template:visible:first").click()}function n(X){var W="",U=[],V=[];for(var T=0,S=X.length;T<S;T++){if(X[T].isNew){V=O();W=(b.inArray(X[T].itemModuleCompleteKey,V)!=-1);if(W){X[T].isNew=false}else{U.push(X[T])}}}return U}function G(){var S=b.parseJSON(s.getItem("dismissed"));return S||[]}function O(){var S=b.parseJSON(s.getItem("used"));return S||[]}function d(){var S=b("#discover-new-banner");if(S.length){S.remove()}}function A(V,T){d();var S=Confluence.Templates.Blueprints.discoverNewBanner({newItemsNo:V,showLinkToNew:T});var U=b(".template-select-container-body");U.prepend(S);U.find(".aui-button-link").click(function(){var W=!b(this).data("is-filtered");B.fillWebItemsInDialog(W,true)});b("#discover-new-banner .icon-close").click(function(){b("#discover-new-banner").slideUp(150);var X=G();var W,Y;for(W=0,max=y.length;W<max;W++){Y=y[W].itemModuleCompleteKey;if(b.inArray(Y,X)==-1){X.push(Y)}}s.setItemQuietly("dismissed",JSON.stringify(X));B.fillWebItemsInDialog(false)})}function L(){if(y.length==0||h){return false}var T=G();if(T.length==0){return true}for(var S=0;S<y.length;++S){if(b.inArray(y[S].itemModuleCompleteKey,T)==-1){return true}}return false}function m(S){var S=S||{},U=function(W){if(g){if(W.keyCode===27){z()}else{if(W.keyCode===13){var X=W.target.nodeName&&W.target.nodeName.toLowerCase();if(X=="textarea"){return}P().click()}}}};var T={width:840,height:449,id:p,closeOnOutsideClick:false,keypressListener:U,focusSelector:".templates"};g=b.extend(new AJS.Dialog(T),B);R=g.popup.element;g.addHeader(I.headingText);g.initContext=S.initContext;var V=R.searcher=Confluence.DomFilterField({items:"#create-dialog .templates .template",inputId:"createDialogFilter",placeholderText:"Filter",postSearch:function(W){if(W.length==0){AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{noVisibleItem:true})}else{W.eq(0).click()}if(!S.showStepOne){x()}},submitCallback:function(W,X){W.eq(0).dblclick()}});V.form.find("input").attr("tabindex",100);R.find(".dialog-title").prepend(I.helpLinkTemplate(),V.form);g.addPanel("SinglePanel",Confluence.Templates.Blueprints.createDialogBody(),"loading");b.extend(g,{addButtonPanel:w,addFullButtonPanel:j,addBackButton:t,removeBackButton:i});g.addButtonPanel(g.getPage(0),k);g.prevPage=function(){R.find(".create-dialog-button-spinner").spinStop();R.find(".create-dialog-create-button").removeAttr("disabled");return AJS.Dialog.prototype.prevPage.apply(g,arguments)};R.find(".dialog-button-panel").find("button, .button-panel-link").attr("tabindex",100);R.options=S=b.extend({showDialog:true,updateHeight:true},S);g.getPanel(0).setPadding(0);g.gotoPanel(0);b("#create-dialog").find(".wait-icon").spin("medium");S.showDialog&&g.show();Confluence.sessionCheck();return g}function e(S){return S?"Create":"Next"}function f(S){return function(T,U,W){var V=S&&S.call(this,T,U);if(V!==true&&W){W.preventDefault()}else{return V}}}function w(W,V,S,U){var T=e(S);W.addButton(AJS.I18n.getText(T),null,"create-dialog-create-button");W.buttonpanel.find(".button-panel-button").removeClass("button-panel-button").addClass("aui-button");W.buttonpanel.find(".create-dialog-create-button").addClass("aui-button-primary").click(V);if(U){W.buttonpanel.addClass(U)}this.addCancel("Close",f(z))}function j(U,T,V,S){this.addBackButton(U,V);this.addButtonPanel(U,f(T),S);return U.buttonpanel}function t(S,T){S.addButton("Back",f(function(U){T&&T();if(U.curpage==1){U.fillWebItemsInDialog()}U.prevPage();if(U.curpage==0){u()}S.remove();U.page.pop();if(N()&&!b(".template.selected").length){b(".template:visible:first").click()}}),"button-panel-back")}function i(){var T=this.getPage(this.curpage);var S=T.buttonpanel.find(".button-panel-back");S.remove()}function M(U,T){var S=this,T=_.isUndefined(T)?true:T;S.loadedWebitems=S.loadedWebitems||{};var V=this.loadedWebitems[U];if(V){return AJS.$.Deferred().resolveWith(V)}return b.ajax({url:Confluence.getContextPath()+v,dataType:"json",data:{spaceKey:U},async:T}).done(function(W){S.loadedWebitems[U]=W})}function C(){var S=this;return AJS.$.getJSON(Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces",{promotedSpaceKey:AJS.params.spaceKey,promotedSpacesLimit:10,otherSpacesLimit:1000}).done(function(T){S.loadedSpaces=T;AJS.trigger("create-dialog.data-ready")})}var B={openDialog:m,closeDialog:z,requestWebItems:M,requestSpaces:C,loadedWebitems:{},loadedSpaces:{},fillWebItemsInDialog:l,filterWebItems:function(S){return S},getSpaceKey:function(){return null}};return B}}(AJS.$));Confluence.Dialogs.Events={};Confluence.Dialogs.Events.ITEM_SELECTED="create-dialog.item-selected";
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:loader', location = 'com/atlassian/confluence/plugins/createcontent/js/space-dialog.js' */
Confluence.SpaceBlueprint=Confluence.SpaceBlueprint||{};AJS.toInit(function(c){Confluence.SpaceBlueprint.Dialog=c.extend(Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/space-blueprint/dialog/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.spaceHelpLink,headingText:"Create space"}),{getParentPageId:function(){return undefined},getSpaceKey:function(){return undefined},launch:function(f){var e=f?{showDialog:false,updateHeight:false,showStepOne:true,initContext:{}}:{};var d=Confluence.SpaceBlueprint.Dialog.openDialog(e);createSpacePromise=WRM.require("wrc!create-space");webItemsPromise=Confluence.SpaceBlueprint.Dialog.requestWebItems();AJS.$.when(createSpacePromise,webItemsPromise).done(function(j,i){if(!f&&Confluence.SpaceBlueprint.WelcomeDialog.isShowWelcomeDialog()){Confluence.SpaceBlueprint.WelcomeDialog.showWelcomeDialog();d.remove();return}Confluence.SpaceBlueprint.Dialog.fillWebItemsInDialog();var k=Confluence.SpaceBlueprint.Dialog.loadedWebitems[undefined];if(_.isEmpty(k)){AJS.log("Could not load space dialog - web items not found");return}if(!f){return}var h=_.find(k,function(l){return l.itemModuleCompleteKey==f});if(!h){AJS.log("Error finding space blueprint with id"+f);return}Confluence.Blueprint.fireWizard(i[0],h,d);d.removeBackButton();var g=h.howToUseTemplate&&!h.skipHowToUse;if(g||Confluence.Blueprint.hasWizard(f,h)){d.show()}}).fail(function(){AJS.log("Could not load resources for space dialog")})}});var a=c('#create-space-button, a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]'),b=c("#create-personal-space-link");if(b.length){b.unbind("click");b.click(function(){Confluence.SpaceBlueprint.Dialog.launch("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-personal-space-item");return false})}if(!a.length){return}c('a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]').unbind("click");a.click(function(d){Confluence.SpaceBlueprint.Dialog.launch();return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:loader', location = 'com/atlassian/confluence/plugins/createcontent/soy/initial-templates.soy' */
// This file was automatically generated from initial-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.createDialogBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="wait-container"><div class="wait-icon"></div></div><div class="create-dialog-body loadable"><div class="template-select-container"><div class="wait-container"><div class="wait-icon"></div></div><div class="template-select-container-body loadable"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.waitContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="wait-container"><div class="wait-icon"></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.waitIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="wait-icon"></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.helpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https:\/\/docs.atlassian.com\/confluence\/docs-58\/Pages+and+Blogs"}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.spaceHelpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.helpLink({href: "https:\/\/docs.atlassian.com\/confluence\/docs-58\/Create+a+Space"}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">', (opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '', '<p>', soy.$$escapeHtml(opt_data.descriptionContent), '</p></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<img class="wait-icon" src="', soy.$$escapeHtml(""), '/images/icons/wait.gif">');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function($){function findNextPageId(pageId,pages){var thisPageIdIndex=-1;_.each(pages,function(element,index){if(element.id==pageId){thisPageIdIndex=index;return}});return pages[thisPageIdIndex+1].id}Confluence.DialogWizard=function(dialog,finalAction){function newPage(config,pageId,soyRenderContext,wizardData,wizard){var wizardPage=_.find(config.wizard.pages,function(page){return page.id==pageId});wizard.trigger("pre-render."+pageId,{soyRenderContext:soyRenderContext,wizardData:wizardData});try{var soyTemplateFunction=eval(wizardPage.templateKey);var $soyRender=$(soyTemplateFunction(soyRenderContext))}catch(e){throw Error("wizard points to a non-existent Soy template '"+wizardPage.templateKey+"'. Check your web-resources or server logs.")}$soyRender.find("a, area, button, input, object, select, textarea").attr("tabindex","10");var $panelContent;if(wizardPage.descriptionContent){$panelContent=$(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:wizardPage.descriptionHeaderLink,descriptionHeader:wizardPage.descriptionHeader,descriptionContent:wizardPage.descriptionContent}));$panelContent.addClass("with-description").find(".dialog-wizard-page-main").append($soyRender)}else{$panelContent=$soyRender}var dialogPageId=pageId;if(dialog.id=="create-dialog"){dialogPageId="create-dialog-"+pageId}var page=dialog.addPage(dialogPageId).page[dialog.curpage];page.addHeader(wizardPage.title).addPanel("SinglePanel",$panelContent,"singlePanel");page.element.find("form").submit(function(){return false});if(wizardPage.descriptionContent){page.element.find(".dialog-panel-body").css({padding:0})}Confluence.Binder.autocompleteMultiUser($soyRender);Confluence.Binder.placeholder($soyRender);function nextCallback(ev){$soyRender.find(".placeholded").val("");var pageData={};var formArray=$soyRender.parent().find("form").serializeArray();_.each(formArray,function(item){pageData[item.name]=item.value});var e=$.Event("submit."+pageId);var state={$container:$soyRender,wizardData:wizardData,pageData:pageData};var validationDeferred=$.Deferred();validationDeferred.done(function(){wizardData.pages[pageId]=pageData;var nextPageId;if(state.nextPageId){nextPageId=state.nextPageId}else{nextPageId=!wizardPage.last&&findNextPageId(pageId,config.wizard.pages)}if(!state.nextPageId&&wizardPage.last){doFinalAction(ev,state,wizardData,finalAction,wizard);dialog.popup.element.find(":input,a").filter(":visible").disable().addClass("disabled");buttons.prepend(Confluence.Templates.DialogWizard.waitIcon())}else{newPage(config,nextPageId,soyRenderContext,wizardData,wizard)}});validationDeferred.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+pageId)});state.validationDeferred=validationDeferred;wizard.trigger(e,state);if(state.async){return}if(e.isDefaultPrevented()){validationDeferred.reject();return}validationDeferred.resolve()}var buttons=dialog.addFullButtonPanel(page,nextCallback,null,wizardPage.last);buttons.find(".button-panel-back").click(function(){delete wizardData.pages[pageId]});buttons.find(".aui-button-primary").attr("tabindex","10");$soyRender.find("input, select, textarea").eq(0).focus();wizard.trigger("post-render."+pageId,{$container:$soyRender,wizardData:wizardData})}function doFinalAction(ev,state,wizardData,finalAction,wizard){if(state.finalUrl){window.location=state.finalUrl}else{_.each(wizardData.pages,function(pageData){_.extend(wizardData,pageData)});delete wizardData.pages;finalAction(ev,wizardData,null,wizard)}}return{newPage:newPage,doFinalAction:doFinalAction}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/blueprint-object.js' */
(function(e){var k={};var c;var a;var i={};var l={};function m(o){switch(o){case"view":return"content-blueprint/create-content";case"space":return"space-blueprint/create-space";default:return"content-blueprint/create-draft"}}function f(x,q,w,v){AJS.trigger("blueprint.before-create");var t=Confluence.storageManager("confluence-create-content-plugin");var y=e.parseJSON(t.getItem("used"));if(y==null){y=[]}y.push(c.itemModuleCompleteKey);t.setItemQuietly("used",JSON.stringify(y));var z="";if(_.isString(x)){z=x}var s=c.createResult;var B;if(v&&v.getSubmissionRestPath){B=v.getSubmissionRestPath()}else{B="/rest/create-dialog/1.0/"+m(s)}var p=Confluence.getContextPath()+B;var A=w?w.getParentPageId():"";var o=!!q.goToIndexPage;delete q.goToIndexPage;var r;if(v&&v.assembleSubmissionObject){r=v.assembleSubmissionObject(q)}else{if(s=="space"){r=b(q)}else{r=n(z,q,A)}}var u=JSON.stringify(r);e.ajax({url:p,type:"POST",dataType:"json",contentType:"application/json",data:u}).done(function(D){var C=o?(D.indexPage.createSuccessRedirectUrl||D.indexPage.url):(D.createSuccessRedirectUrl||D.url);window.location=C});AJS.trigger("blueprint.after-create")}function b(o){var p={spaceKey:o.spaceKey,name:o.name,description:o.description,permissions:o.spacePermission,spaceBlueprintId:c.contentBlueprintId};p.context=o;return p}function n(u,t,q){t=t||{};u=t.title||u||"";var s=t.viewPermissionsUsers||"";var r=t.contentTemplateId||"";var o=t.contentTemplateKey||"";q=t.parentPageId||q;var p={};p.spaceKey=a;p.contentBlueprintId=c.contentBlueprintId;p.contentTemplateId=r;p.contentTemplateKey=o;p.title=u;p.viewPermissionsUsers=s;p.context=t;p.parentPageId=q;return p}function j(q){var o=Confluence.storageManager("confluence-create-content-plugin");var p=e.parseJSON(o.getItem("used"));if(p==null){p=[]}if(e.inArray(q,p)==-1){p.push(q)}o.setItemQuietly("used",JSON.stringify(p))}Confluence.Blueprint=AJS.$.extend(Confluence.Blueprint,{register:function(o,p){k[o]=p},validateTitle:function(p,s,t,o){var r=e.trim(p.val()),q;if(!t){t="Title is required."}if(!o){o="A page with this name already exists."}if(!r){q=t}else{if(!Confluence.Blueprint.canCreatePage(s,r)){q=o}}if(q){p.focus().siblings(".error").html(q);return false}return true},canCreatePage:function(q,p){var o=false;e.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/can-create-page",dataType:"json",data:{spaceKey:q,pageTitle:p},async:false}).done(function(r){o=r}).fail(function(r){AJS.log("Failed to call 'can-create-page' - "+r)});return o},hasWizard:function h(p,o){return(l[p]||(o&&o.wizard))&&!i[p]},setWizard:function d(q,p){var o=e({});p(o);l[q]=o},getWizard:function(o){return l[o]||e({})},setDirectCallback:function(p,o){i[p]=o},getDirectCallback:function(o){return i[o]},fireWizard:function(w,r,D){var q=D.initContext||{};a=r.spaceKey;c=r;var p=r.itemModuleCompleteKey;j(p);if(p){var v=p.replace(/\.|:/g,"_");AJS.trigger("analytics",{name:D.id+".submit."+v,data:{spaceKey:a}});var B;var u=this.getDirectCallback(p);if(u){B=function x(){var E={spaceKey:a,pageData:{},initContext:q};u(w,E);var F=e.extend(q,{pageData:E.pageData});new Confluence.DialogWizard(D,f).doFinalAction(w,E,F,f)}}else{if(r.wizard){var o=r.wizard.pages[0].id;B=function s(){var E=Confluence.Blueprint.getWizard(p);Confluence.DialogWizard(D,f).newPage(r,o,{},e.extend(q,{spaceKey:a,pages:{},parentPageId:D.getParentPageId()}),E)}}else{if(k[p]){B=function t(){k[p](D,a,f)}}else{if(r.contentBlueprintId){B=function z(){f(null,e.extend(q,r),D)}}else{throw Error("No way to process item: "+p)}}}}if(r.howToUseTemplate){Confluence.Blueprint.HowToUse.check(D,r,B)}else{B()}}else{if(r.templateId){AJS.trigger("analytics",{name:D.id+".submit.template",data:{spaceKey:a,templateId:r.templateId}});var C=Confluence.getContextPath()+"/pages/createpage-entervariables.action?templateId="+encodeURIComponent(r.templateId)+"&spaceKey="+encodeURIComponent(a)+"&title="+encodeURIComponent(r.title||"")+"&newSpaceKey="+encodeURIComponent(a);for(var y in q){C+="&"+encodeURIComponent(y)+"="+encodeURIComponent(q[y])}var A=D.getParentPageId();if(A&&a==AJS.Meta.get("space-key")){C+="&fromPageId="+encodeURIComponent(A)}window.location=C}else{throw new Error("Unknown item: "+r)}}}});function g(){var o={};if(AJS.Meta.get("page-title")){o.parentPageId=AJS.Meta.get("page-id");o.parentPageTitle=AJS.Meta.get("page-title")}else{o.parentPageId=AJS.Meta.get("parent-page-id");o.parentPageTitle=AJS.Meta.get("from-page-title")}return o}Confluence.Blueprint.Util={};Confluence.Blueprint.Util.getParentPageLocation=g})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:avatar', location = 'user-multiselect/aui-avatar.soy' */
// This file was automatically generated from aui-avatar.soy.
// Please don't edit this file by hand.

if (typeof widget == 'undefined') { var widget = {}; }
if (typeof widget.aui == 'undefined') { widget.aui = {}; }
if (typeof widget.aui.avatar == 'undefined') { widget.aui.avatar = {}; }


widget.aui.avatar.avatar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-avatar aui-avatar-', soy.$$escapeHtml(opt_data.size), soy.$$escapeHtml(opt_data.isProject ? ' aui-avatar-project' : ''), soy.$$escapeHtml(opt_data.badgeContent ? ' badged-avatar' : ''));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><div class="aui-avatar-inner"><img src="', soy.$$escapeHtml(opt_data.avatarImageUrl), '"', (opt_data.avatarImageText) ? ' alt="' + soy.$$escapeHtml(opt_data.avatarImageText) + '"' : '', (opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '', (opt_data.imageClasses) ? ' class="' + soy.$$escapeHtml(opt_data.imageClasses) + '"' : '', ' /></div>', (opt_data.badgeContent) ? opt_data.badgeContent : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:avatar', location = 'user-multiselect/avatar.soy' */
// This file was automatically generated from avatar.soy.
// Please don't edit this file by hand.

if (typeof common == 'undefined') { var common = {}; }
if (typeof common.Widget == 'undefined') { common.Widget = {}; }


common.Widget.avatar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  widget.aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.person.avatarUrl, avatarImageText: opt_data.person.displayName, tooltip: opt_data.tooltip, badgeContent: opt_data.badgeContent, extraClasses: 'user-avatar' + (opt_data.hideBadge ? ' badge-hidden' : '') + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), imageClasses: opt_data.imageClasses, extraAttributes: {'data-username': opt_data.person.name}, id: opt_data.id}, output);
  return opt_sb ? '' : output.toString();
};


common.Widget.avatarWithName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var personName__soy14 = opt_data.person && opt_data.person.displayName ? opt_data.person.displayName : opt_data.person && opt_data.person.name ? opt_data.person.name : opt_data.unknownName;
  output.append('<div', (opt_data.extraClasses) ? ' class="' + soy.$$escapeHtml(opt_data.extraClasses) + '"' : '', '>');
  common.Widget.avatar({size: opt_data.size, person: opt_data.person, imageClasses: opt_data.imageClasses, extraClasses: opt_data.avatarClasses, badgeContent: opt_data.badgeContent, hideBadge: opt_data.hideBadge, tooltip: personName__soy14, id: opt_data.id}, output);
  output.append(soy.$$escapeHtml(personName__soy14), '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:user-multiselect', location = 'user-multiselect/user-multiselect.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:user-select2', location = 'user-select2/avatar.soy' */
// This file was automatically generated from avatar.soy.
// Please don't edit this file by hand.

if (typeof CreateContent == 'undefined') { var CreateContent = {}; }
if (typeof CreateContent.avatar == 'undefined') { CreateContent.avatar = {}; }


CreateContent.avatar.avatarWithName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.avatarImageUrl, accessibilityText: opt_data.displayName, title: opt_data.displayName, extraAttributes: {'data-username': opt_data.userId}}, output);
  output.append(soy.$$escapeHtml(opt_data.displayName));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:user-select2', location = 'user-select2/user-multiselect.js' */
Confluence.Binder.autocompleteMultiUser=function(b){b=b||document.body;var c=AJS.$;var a=function(){var d=c(".select2-drop-active > .select2-results");if(d.children(".select2-result-selectable").length===0&&d.children(".select2-disabled").length){d.append('<li class="select2-no-results">'+AJS.escapeHtml("No matches found")+"</li>")}};c("input.autocomplete-multiuser[data-autocomplete-bound != 'true']",b).each(function(){var d=c(this);d.auiSelect2({multiple:true,minimumInputLength:2,formatInputTooShort:function(){return "Start typing to search for a user"},ajax:{transport:function(h){var i=h.success;delete h.success;return c.ajax.apply(c.ajax,arguments).done(i).done(a)},data:function(h){return{"max-results":6,query:h}},dataType:"json",url:Confluence.getContextPath()+"/rest/prototype/1/search/user.json",results:function(i){var h=[];c.each(i.result,function(){h.push({id:this.username,text:this.title,imgSrc:this.thumbnailLink.href})});return{results:h}},quietMillis:300},formatResult:function(h){return CreateContent.avatar.avatarWithName({size:"small",displayName:h.text,userId:h.id,avatarImageUrl:h.imgSrc})},escapeMarkup:function(h){return h},formatSelection:function(h){return CreateContent.avatar.avatarWithName({size:"xsmall",displayName:h.text,userId:h.id,avatarImageUrl:h.imgSrc})},dropdownCssClass:"users-dropdown",containerCssClass:"users-autocomplete",hasAvatar:true});if(!d.data("autofill-user")){return}var g=AJS.Meta.get("remote-user"),f=AJS.Meta.get("current-user-fullname"),e=AJS.Meta.get("current-user-avatar-url");if(g&&f&&e){d.auiSelect2("data",[{id:g,text:f,imgSrc:AJS.contextPath()+e}])}})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-blueprint-selector.js' */
(function(b){var a=[];Confluence.Blueprint.Selector={registerSelector:function(c){if(c&&typeof(c)==="function"){a.push(c)}},getSelectors:function(){return a}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-location-panel.js' */
(function(a){Confluence.Dialogs=Confluence.Dialogs||{};Confluence.Dialogs.LocationPanel=function b(r){AJS.bind(Confluence.Dialogs.Events.ITEM_SELECTED,d);var q,m,t,p,l=r.openDialog;var i;var c=null;var j="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post";function k(v,u){var w=t.find(".template-select-container");w.addClass("loading");a("#create-dialog").find(".wait-icon").spin("medium");u.requestWebItems(v).done(function(x){u.fillWebItemsInDialog(false);a("#create-dialog").find(".wait-icon").spinStop()}).fail(function(){Confluence.sessionFail&&Confluence.sessionFail()})}r.openDialog=function(x){var w;if(!x||!x.createDialog){w=l(x)}else{w=x.createDialog}if(x&&x.dialogBase){AJS.$.extend(w,x.dialogBase)}t=w.popup.element;var y=t.find(".create-dialog-body").prepend(Confluence.Templates.Blueprints.createDialogLocationPanel({}));p=y.find("#create-dialog-parent-container");i=y.find(".space-select");var v=r.loadedSpaces,u=v.promotedSpaces.spaces[0]||v.otherSpaces.spaces[0];n(v,t);if(!t.options.showStepOne){r.fillWebItemsInDialog(false)}t.options.updateHeight&&w.updateHeight();if(!m){m=f(u.id)}m.done(function(z){e(z,t)});t.find(".create-dialog-location-bar input.space-select").change(function(){var z=a(this).val();k(z,w);f(z).done(function(A){e(A,t)})});return w};r.getParentPageId=function(){return c};r.filterWebItems=function(u){if(t.options.location=="child-page"){return _.reject(u,function(v){return v.itemModuleCompleteKey==j})}return u};r.getSpaceKey=function h(){var u=i.val();return u||AJS.Meta.get("space-key")};function d(w,x){if(!p||!p.length){AJS.log("WARNING: refreshLocation should not be getting triggered - $locationDiv is not set");return}var v;if(x){if(x.config){v=x.config}else{if(x.item){v=x.item.data()}}}var z=v&&(v.itemModuleCompleteKey||v.templateId)||null,u=a("#page-restricted-container").length;if(!x.noVisibleItem&&!u&&g(z,v.spaceKey)){var y=Confluence.Blueprint.Util.getParentPageLocation();p.find("span").text(y.parentPageTitle);p.show();c=y.parentPageId}else{p.hide();c=null}}function g(x,w){if(!x){return true}var v=AJS.Meta.get("space-key"),u=w||i.val();if(!v||(v!=u)){return false}if(!Confluence.Blueprint.Util.getParentPageLocation().parentPageTitle){return false}if(AJS.Meta.get("content-type")!="page"){return false}if(x=="com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-blueprint-item"){return false}return(x!=j)}function s(w){var v=[];var x=w.promotedSpaces.spaces;if(x&&x.length){v.push({text:"Suggested spaces",children:x})}var u=w.otherSpaces&&!w.otherSpaces.resultsTruncated&&w.otherSpaces.spaces;if(u&&u.length){v.push({text:"All Spaces",children:u})}return v}function n(B,A){if(B.otherSpaces&&B.otherSpaces.resultsTruncated){var w=A.find(".space-select-control-container .description");w.removeClass("hidden");var x={gravity:"w",delayIn:500,delayOut:0,offset:5};w.find("a").tooltip(x).click(function(){return false})}i.auiSelect2({data:s(B),escapeMarkup:function(C){return C},width:"270px",containerCssClass:"select2-space-select",formatResult:function(C,D,E){D.attr("title",a("<div/>").html(C.text).text());return a.fn.select2.defaults.formatResult.apply(this,arguments)},openOnEnter:false});var v=i.data("select2");v.data(B.promotedSpaces.spaces[0]||B.otherSpaces.spaces[0]);var y=50;var u=v.opts.populateResults;v.opts.populateResults=function(C,D,E){var G=false;var F=D;if(D[1]&&D[1].children&&D[1].children.length>y){F=[];a(D).each2(function(){F.push(a.extend(true,{},this))});F[1].children=F[1].children.slice(0,y);F[1].children.push({text:"Type to find more spaces"});G=true}u.call(v,C,F,E);G&&D[1].children.pop()};var z=A.find(".select2-space-select .select2-input");if(z.length&&"placeholder" in z[0]){z.attr("placeholder","Filter spaces"+" ...")}}function f(u){return a.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces/adminCheck",dataType:"json",data:{spaceKey:u}})}var o=(AJS.Meta.get("confluence-flavour").toLowerCase()!="vanilla");function e(y,x){var u=y,A=x.find(".add-remove-customise-templates-trigger");if(!u&&o){A.remove();return}var z=Confluence.getContextPath(),w;if(u){z+="/pages/templates2/listpagetemplates.action?key="+i.val();w="Add or customise templates for the selected space"}else{z+="/plugins/servlet/upm/marketplace/featured?category=Blueprints";w="Find more content you can create"}var v=Confluence.Templates.Blueprints.customiseTemplatesLink({linkUrl:z,linkText:w});if(A.length){A.replaceWith(v)}else{x.find(".dialog-button-panel:first").prepend(v)}}}}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-how-to-use.js' */
(function($){function markHowToUseVisited(contentBlueprintId,skipHowToUse){AJS.log("blueprint-how-to: marking skipHowToUse for "+contentBlueprintId+", "+skipHowToUse);var url=Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/skip-how-to-use";AJS.safe.post(url,{contentBlueprintId:contentBlueprintId,skip:skipHowToUse}).done(function(){AJS.log("blueprint-how-to: Saved skipHowToUse for "+contentBlueprintId+", "+skipHowToUse)}).fail(function(){AJS.log("blueprint-how-to: FAILED SAVE skipHowToUse for "+contentBlueprintId+", "+skipHowToUse)})}function showHowToUsePage(createDialog,data,callback){AJS.log("blueprint-how-to: showing how-to-use page");createDialog.addPage("how-to-use-blueprint-page");$(".dialog-page-body.how-to-use-blueprint-page").attr("data-content-blueprint-id",data.contentBlueprintId).attr("data-blueprint-key",data.blueprintModuleCompleteKey);var page=createDialog.getPage(createDialog.curpage);var pageHeader="Let\u2019s get started";page.addHeader(pageHeader);var panelContents=eval(data.howToUseTemplate+"()");page.addPanel("how-to-panel",panelContents);createDialog.addBackButton(page);createDialog.addButtonPanel(page,callback,!data.wizard,"how-to-button-panel");if(!AJS.Meta.get("remote-user")){return}function skipHowToUseChanged(){var skip=$(this).prop("checked");if(skip){createDialog.blueprintHowTosSkipped=createDialog.blueprintHowTosSkipped||{};createDialog.blueprintHowTosSkipped[data.contentBlueprintId]=true}else{delete createDialog.blueprintHowTosSkipped[data.contentBlueprintId]}markHowToUseVisited(data.contentBlueprintId,skip)}page.buttonpanel.append(Confluence.Templates.Blueprints.howToUseSkipCheckbox());var isAlreadySkipped=!!(createDialog.blueprintHowTosSkipped&&createDialog.blueprintHowTosSkipped[data.contentBlueprintId]);page.buttonpanel.find("#dont-show-how-to-use").change(skipHowToUseChanged).prop("checked",isAlreadySkipped)}Confluence.Blueprint.HowToUse={check:function(createDialog,config,callback){AJS.log("blueprint-how-to: checking status and showing How-to-Use page if needed");if(!config.skipHowToUse){showHowToUsePage(createDialog,config,callback)}else{callback()}},notifyCancel:function(createDialog){AJS.log("blueprint-how-to: cancel notified");if(createDialog.blueprintHowTosSkipped){_.each(createDialog.blueprintHowTosSkipped,function(value,contentBlueprintId){markHowToUseVisited(contentBlueprintId,false)})}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-blank-page-listener.js' */
function submitBlankPage(g,d){var f=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(d.spaceKey);var c=Confluence.Blueprint.Util.getParentPageLocation().parentPageId,a=$("#page-restricted-container").length;if(!a&&c&&d.spaceKey==AJS.Meta.get("space-key")&&AJS.Meta.get("content-type")=="page"){f+="&fromPageId="+encodeURIComponent(c)}if(d.initContext){for(var b in d.initContext){f+="&"+encodeURIComponent(b)+"="+encodeURIComponent(d.initContext[b])}}d.finalUrl=f}Confluence.Blueprint.setDirectCallback("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page",submitBlankPage);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-blank-blog-post-listener.js' */
Confluence.Blueprint.setDirectCallback("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post",function(c,b){var d=Confluence.getContextPath()+"/pages/createblogpost.action?spaceKey="+encodeURIComponent(b.spaceKey);if(b.initContext){for(var a in b.initContext){d+="&"+encodeURIComponent(a)+"="+encodeURIComponent(b.initContext[a])}}b.finalUrl=d});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-content.soy' */
// This file was automatically generated from create-content.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.spaceOption = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<option value="', soy.$$escapeHtml(opt_data.space.key), '">', soy.$$escapeHtml(opt_data.space.title), '</option>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.templates = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="templates" data-space-key="', soy.$$escapeHtml(opt_data.spaceKey), '" tabindex="100">');
  var webItemList12 = opt_data.webItems;
  var webItemListLen12 = webItemList12.length;
  for (var webItemIndex12 = 0; webItemIndex12 < webItemListLen12; webItemIndex12++) {
    var webItemData12 = webItemList12[webItemIndex12];
    output.append('<li class="template"', (webItemData12.itemModuleCompleteKey) ? 'data-item-module-complete-key="' + soy.$$escapeHtml(webItemData12.itemModuleCompleteKey) + '"' : '', (webItemData12.blueprintModuleCompleteKey) ? 'data-blueprint-module-complete-key="' + soy.$$escapeHtml(webItemData12.blueprintModuleCompleteKey) + '"' : '', (webItemData12.contentBlueprintId) ? 'data-content-blueprint-id="' + soy.$$escapeHtml(webItemData12.contentBlueprintId) + '"' : '', (webItemData12.templateId) ? 'data-template-id="' + soy.$$escapeHtml(webItemData12.templateId) + '"' : '', (webItemData12.createResult) ? 'data-create-result="' + soy.$$escapeHtml(webItemData12.createResult) + '"' : '', (webItemData12.howToUseTemplate) ? 'data-how-to-use-template="' + soy.$$escapeHtml(webItemData12.howToUseTemplate) + '"' : '', '>', (webItemData12.styleClass) ? '<span class="template-preview ' + soy.$$escapeHtml(webItemData12.styleClass) + '"></span>' : '<img class="template-preview" src="' + soy.$$escapeHtml(webItemData12.iconURL) + '">', '<div class="template-meta"><div class="template-name">', soy.$$escapeHtml(webItemData12.name), (webItemData12.isNew) ? '<span class="aui-lozenge aui-lozenge-complete new-flag">' + soy.$$escapeHtml("NEW") + '</span>' : '', '</div><div class="template-description">', soy.$$escapeHtml(webItemData12.description ? webItemData12.description : ''), '</div></div></li>');
  }
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.discoverNewBanner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header id="header" role="banner"><div id="discover-new-banner" class="aui-message aui-message-hint shadowed closeable"><p class="title">', (opt_data.showLinkToNew) ? (opt_data.newItemsNo == 1) ? AJS.format("\x3cbutton class\x3d\x22aui-button aui-button-link\x22 data-is-filtered\x3d\x22false\x22\x3e{0} new item\x3c/button\x3e has been added",opt_data.newItemsNo) : AJS.format("\x3cbutton class\x3d\x22aui-button aui-button-link\x22 data-is-filtered\x3d\x22false\x22\x3e{0} new items\x3c/button\x3e have been added",opt_data.newItemsNo) : ((opt_data.newItemsNo == 1) ? soy.$$escapeHtml(AJS.format("Showing {0} new added item.",opt_data.newItemsNo)) : soy.$$escapeHtml(AJS.format("Showing {0} new added items.",opt_data.newItemsNo))) + '&nbsp;<button class="aui-button aui-button-link" data-is-filtered="true">' + soy.$$escapeHtml("Show all") + '</button>', '</p><span class="aui-icon icon-close" role="button" tabindex="0"></span></div></header>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.customiseTemplatesLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="add-remove-customise-templates-trigger button-panel-link" href="', soy.$$escapeHtml(opt_data.linkUrl), '" tabindex="-1">', soy.$$escapeHtml(opt_data.linkText), '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.howToUseSkipCheckbox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="dialog-tip"><input id="dont-show-how-to-use" type="checkbox" name="skipHowToUse"><label for="dont-show-how-to-use" type="checkbox"><span class="checkbox-label">', soy.$$escapeHtml("Don\u2019t show this again"), '</span></label></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.createHiddenField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<input name="', soy.$$escapeHtml(opt_data.name), '" value="', soy.$$escapeHtml(opt_data.value), '" type="hidden"/>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.createDialogInitParams = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.params && opt_data.params.length) {
    output.append('<div id="create-dialog-init-params" class="hidden">');
    var paramList107 = opt_data.params;
    var paramListLen107 = paramList107.length;
    for (var paramIndex107 = 0; paramIndex107 < paramListLen107; paramIndex107++) {
      var paramData107 = paramList107[paramIndex107];
      output.append('<div data-key="', soy.$$escapeHtml(paramData107.key), '" data-value="', soy.$$escapeHtml(paramData107.value), '"></div>');
    }
    output.append('</div>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-dialog-location-panel.soy' */
// This file was automatically generated from create-dialog-location-panel.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.createDialogLocationPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="create-dialog-location-bar"><div><label>', soy.$$escapeHtml("Select space"), '</label><div class="space-select-control-container"><input type="text" class="space-select" tabindex="100"/><div class="description hidden">', soy.$$escapeHtml("Only suggested spaces are being shown."), '&nbsp;<a href="" title="', soy.$$escapeHtml("If the space you want is not in the list, please go to the space and try again. (The site has too many spaces to show all here.)"), '" tabindex="-1">', soy.$$escapeHtml("Why?"), '</a></div></div></div><div id="create-dialog-parent-container">', soy.$$escapeHtml("Parent"), ':&nbsp;<span></span></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/promoted.soy' */
// This file was automatically generated from promoted.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.Promoted == 'undefined') { Confluence.Templates.Blueprints.Promoted = {}; }


Confluence.Templates.Blueprints.Promoted.showMore = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="promoted-link-container"><div><button id="promoted-link" class="aui-button aui-button-link">', soy.$$escapeHtml("Show more"), '</button></div></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/index-page.soy' */
// This file was automatically generated from index-page.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.IndexPage == 'undefined') { Confluence.Templates.Blueprints.IndexPage = {}; }


Confluence.Templates.Blueprints.IndexPage.createFromTemplateMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="create-from-template"><ac:parameter ac:name="contentBlueprintId">', soy.$$escapeHtml(opt_data.contentBlueprintId), '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter>;<ac:parameter ac:name="buttonLabel">', soy.$$escapeHtml(opt_data.createButtonLabel), '</ac:parameter><ac:parameter ac:name="spaceKey">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="templateName">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter><ac:parameter ac:name="createResult">', soy.$$escapeHtml(opt_data.createResult), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.IndexPage.contentReportTableMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="content-report-table"><ac:parameter ac:name="labels">', soy.$$escapeHtml(opt_data.templateLabel), '</ac:parameter><ac:parameter ac:name="analytics-key">', soy.$$escapeHtml(opt_data.analyticsKey), '</ac:parameter><ac:parameter ac:name="spaces">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="blankTitle">', soy.$$escapeHtml(opt_data.blankTitle), '</ac:parameter><ac:parameter ac:name="blankDescription">', soy.$$escapeHtml(opt_data.blankDescription), '</ac:parameter><ac:parameter ac:name="createButtonLabel">', soy.$$escapeHtml(opt_data.createButtonLabel), '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter><ac:parameter ac:name="contentBlueprintId">', soy.$$escapeHtml(opt_data.contentBlueprintId), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Shared == 'undefined') { Confluence.Templates.Shared = {}; }


Confluence.Templates.Shared.macroXhtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="', soy.$$escapeHtml(opt_data.macroName), '">');
  var paramNameList6 = soy.$$getMapKeys(opt_data.parameters);
  var paramNameListLen6 = paramNameList6.length;
  for (var paramNameIndex6 = 0; paramNameIndex6 < paramNameListLen6; paramNameIndex6++) {
    var paramNameData6 = paramNameList6[paramNameIndex6];
    output.append('<ac:parameter ac:name="', soy.$$escapeHtml(paramNameData6), '">', soy.$$escapeHtml(opt_data.parameters[paramNameData6]), '</ac:parameter>');
  }
  output.append('</ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:tooltip', location = '/includes/js/ajs/tooltip.js' */
(function(c){AJS.Tooltip=function(a){var d=c('<div class="ajs-tooltip-arrow"></div>'),e=c('<div class="ajs-tooltip">'+a.text+"</div>"),b=c('<div class="ajs-tooltip-wrapper"></div>').appendTo(c("body")),f=function(){var c=a.anchor.offset();b.css({left:c.left+a.anchor.width(),top:c.top+a.anchor.height()/2-b.height()/2-2});d.css({top:b.height()/2-3})};d.addClass("ajs-tooltip-arrow-left");b.append(d).append(e);e.css({width:a.width});a.anchor.bind("mouseover",function(){f();b.fadeIn("fast")});a.anchor.bind("mouseout",
function(){b.fadeOut("fast")});a.anchor.click(function(a){a.preventDefault();b.is(":visible")?b.fadeOut("fast"):(f(),b.fadeIn("fast"))})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:keygen', location = '/includes/js/ajs/jquery.keygen.js' */
(function(l,f){l.KeyGenerator=function(){var h="THE A AN AS AND OF OR".split(" "),e={199:"C",231:"c",252:"u",251:"u",250:"u",249:"u",233:"e",234:"e",235:"e",232:"e",226:"a",228:"a",224:"a",229:"a",225:"a",239:"i",238:"i",236:"i",237:"i",196:"A",197:"A",201:"E",230:"ae",198:"Ae",244:"o",246:"o",242:"o",243:"o",220:"U",255:"Y",214:"O",241:"n",209:"N"};return{generateKey:function(a,g){var g=f.extend({},g),b="number"==typeof g.desiredKeyLength?g.desiredKeyLength:4,j="number"==typeof g.maxKeyLength?g.maxKeyLength:
Infinity,n="undefined"!=typeof g.charBlacklistRegex?g.charBlacklistRegex:/[^a-zA-Z0-9]/g,a=f.trim(a);if(!a)return"";for(var c=[],d=0,k=a.length;d<k;d++){var l=e[a.charCodeAt(d)];c.push(l?l:a[d])}var a=c.join(""),i=[];f.each(a.split(/\s+/),function(c,a){a&&(a=a.replace(n,""),a=a.toUpperCase(),a.length&&i.push(a))});b&&i.join("").length>b&&(i=f.grep(i,function(a){return-1===f.inArray(a,h)}));if(0==i.length)b="";else if(1==i.length){c=i[0];a:{d=!1;for(k=0;k<c.length;k++)if(c[k]&&1===c[k].length&&-1!==
c[k].search("[AEIOUY]"))d=!0;else if(d){d=c.substring(0,k+1);break a}d=c}b=j<c.length||Math.abs(c.length-b)>=Math.abs(d.length-b)?d:c}else{var c=i.join("").length,m="";f.each(i,function(a,c){m+=c.charAt(0)});d=m;b=j<c||Math.abs(c-b)>=Math.abs(d.length-b)?d:i.join("")}j&&b.length>j&&(b=b.substr(0,j));return b}}};var o=l.KeyGenerator();f.fn.generateFrom=function(h,e){var a=f(this).first(),h=h.first(),e=f.extend({},{desiredKeyLength:4,maxKeyLength:10,maxNameLength:30,timeoutMS:100,charBlacklistRegex:/[^a-zA-Z0-9]/g,
uppercase:!0,validationCallback:function(){},errorCallback:function(){}},e),g=function(){var b=a.val();b?a.data("lastGeneratedValue")!==b&&a.data("autosuggest",!1):a.data("autosuggest",!0);if(!1!==a.data("autosuggest")){var b=o.generateKey(h.val(),{desiredKeyLength:e.desiredKeyLength,maxKeyLength:e.maxKeyLength,charBlacklistRegex:e.charBlacklistRegex}),c=a.val();a.data("lastGeneratedValue",b);a.val(b);c!=b&&e.validationCallback()}},b=function(a){var c=f(a.target),b;b=function(){j(a);g();c.is(":visible")&&
c.data("checkHook",setTimeout(b,e.timeoutMS))};c.data("checkHook")||c.data("checkHook",setTimeout(b,0))},j=function(a){g();a=f(a.target);clearTimeout(a.data("checkHook"));a.removeData("checkHook")};h.attr("maxlength",e.maxNameLength);a.attr("maxlength",e.maxKeyLength);e.uppercase&&a.css("text-transform","uppercase");document.activeElement&&document.activeElement===h[0]&&b({target:h[0]});h.focus(b);h.blur(j);return this}})(window,jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/js/space-welcome-dialog.js' */
Confluence.SpaceBlueprint=Confluence.SpaceBlueprint||{};Confluence.SpaceBlueprint.WelcomeDialog=(function(f){var d;function b(){AJS.Meta.set("show-space-welcome-dialog",false);return f.ajax({type:"post",url:Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces/skip-space-welcome-dialog"})}function a(){b();Confluence.SpaceBlueprint.Dialog.launch();d.remove()}function e(){d.remove()}function g(h){d.addButton("Create",a,"start-creating-space");h.buttonpanel.find(".button-panel-button").removeClass("button-panel-button").addClass("aui-button");h.buttonpanel.find(".start-creating-space").addClass("aui-button-primary");d.addCancel("Close",e)}function c(){d=new AJS.Dialog({width:840,height:449,id:"space-welcome-dialog",closeOnOutsideClick:false});var h="What is a space?";d.addHeader(h);var i=Confluence.Templates.Blueprints.CreateSpace.welcome();d.addPanel("how-to-panel",i);g(d.getPage(0));d.show()}return{isShowWelcomeDialog:function(){return AJS.Meta.getBoolean("show-space-welcome-dialog")},showWelcomeDialog:c}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/soy/space-dialog-wizard-common.soy' */
// This file was automatically generated from space-dialog-wizard-common.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateSpace == 'undefined') { Confluence.Templates.Blueprints.CreateSpace = {}; }


Confluence.Templates.Blueprints.CreateSpace.createSpaceForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form method="post" class="aui common-space-form">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: opt_data.showSpacePermission, fieldErrors: opt_data.fieldErrors, name: opt_data.name, spaceKey: opt_data.spaceKey, spacePermission: opt_data.spacePermission, disableRequiredIcon: true}, output);
  output.append('<input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" /></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<fieldset><div class="field-group"><label for="name">', soy.$$escapeHtml("Space name"), (! opt_data.disableRequiredIcon) ? '<span class="aui-icon icon-required"/>' : '', '</label><input class="text long-field" name="name" autocomplete="off" ', (opt_data.name) ? 'value="' + soy.$$escapeHtml(opt_data.name) + '"' : '', '/>');
  if (opt_data.fieldErrors && opt_data.fieldErrors['name']) {
    var errorList29 = opt_data.fieldErrors['name'];
    var errorListLen29 = errorList29.length;
    for (var errorIndex29 = 0; errorIndex29 < errorListLen29; errorIndex29++) {
      var errorData29 = errorList29[errorIndex29];
      output.append('<div class="error">', soy.$$escapeHtml(errorData29), '</div>');
    }
  } else {
    output.append('<div class="error hidden"></div>');
  }
  output.append('</div><div class="field-group"><label for="spaceKey">', soy.$$escapeHtml("Space key"), (! opt_data.disableRequiredIcon) ? '<span class="aui-icon icon-required"/>' : '', '</label><input class="text long-field" name="spaceKey" ', (opt_data.spaceKey) ? 'value="' + soy.$$escapeHtml(opt_data.spaceKey) + '"' : '', '/><span class="aui-icon aui-icon-small aui-iconfont-help" data-unicode="UTF+E003" data-tooltip="', soy.$$escapeHtml("This unique key is used in your space URL"), '" original-title=""/>');
  if (opt_data.fieldErrors && opt_data.fieldErrors['spaceKey']) {
    var errorList52 = opt_data.fieldErrors['spaceKey'];
    var errorListLen52 = errorList52.length;
    for (var errorIndex52 = 0; errorIndex52 < errorListLen52; errorIndex52++) {
      var errorData52 = errorList52[errorIndex52];
      output.append('<div class="error">', soy.$$escapeHtml(errorData52), '</div>');
    }
  } else {
    output.append('<div class="error hidden"></div>');
  }
  output.append('</div></fieldset>');
  if (opt_data.showSpacePermission) {
    Confluence.Templates.Blueprints.CreateSpace.spaceFormPermissions(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.CreateSpace.createPersonalSpaceForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form method="post" class="aui common-space-form how-to-use-blueprint-page"><h2>', soy.$$escapeHtml("With a personal space, you can..."), '</h2><ol class="howto-steps horizontal"><li class="howto-step"><h3>', soy.$$escapeHtml("Stay organised"), '</h3><p>', soy.$$escapeHtml("Keep your notes, task lists, files and other personal content organised."), '</p></li><li class="howto-step"><h3>', soy.$$escapeHtml("Share news"), '</h3><p>', soy.$$escapeHtml("Use your blog to make announcements, capture ideas and share learnings."), '</p></li><li class="howto-step"><h3>', soy.$$escapeHtml("Introduce yourself"), '</h3><p>', soy.$$escapeHtml("Customise your personal homepage and introduce yourself to the team."), '</p></li></ol></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.CreateSpace.spaceFormPermissions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<fieldset class="group', (opt_data.spacePermission == 'private') ? ' locked' : '', '" id="permissions-group"><div class="checkbox"><input class="checkbox" type="checkbox" id="permission-private" name="spacePermission" value="private"', (opt_data.spacePermission == 'private') ? ' checked="checked"' : '', ' /><label for="permission-private">', soy.$$escapeHtml("Visible only to me"), '</label></div></fieldset>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Blueprints.CreateSpace.welcome = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="space-types"><li><p>', soy.$$escapeHtml("Team"), '</p></li><li><p>', soy.$$escapeHtml("Project"), '</p></li><li><p>', soy.$$escapeHtml("Department"), '</p></li></ul><div class="space-description"><h1>', soy.$$escapeHtml("A space is a home for all your content"), '</h1><ul><li>', soy.$$escapeHtml("Create as many spaces as you like and use them for teams, projects and departments within your company."), '</p></li><li>', soy.$$escapeHtml("Add documents, files and photos to your space using pages and keep them organised in a hierarchy."), '</p></li><li>', soy.$$escapeHtml("Use the blog on your space to share news and make announcements."), '</p></li></ul></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/js/space-dialog-wizard-common.js' */
AJS.toInit(function(g){var l,j,b,i,f,k,n=100,o={name:g.Deferred().reject(),spaceKey:g.Deferred().reject()};var h={spaceKey:function(){var p=g.Deferred();var q=g.trim(l.val());if(!q){p.reject("You must enter a space key.");o.spaceKey=p;return p.promise()}if(k){AJS.log("Aborting previous space key validation request.");k.abort()}k=g.getJSON(AJS.Confluence.getContextPath()+"/ajax/spaceavailable.action",{key:q}).done(function(r){if(!r.available&&r.message){p.reject(r.message)}else{p.resolve()}k=false});o.spaceKey=p;return p.promise()},name:function(){var p=g.Deferred();if(!g.trim(j.val())){p.reject("You must enter a space name.")}else{p.resolve()}o.name=p;return p.promise()}};function d(s){var r=s[0];if(r.setSelectionRange){var q=s.val().length;r.setSelectionRange(0,q)}else{if(r.createTextRange){var p=r.createTextRange();p.execCommand("SelectAll");p.select()}}}function a(p){if(p){b.removeAttr("disabled")}else{b.attr("disabled","disabled")}}function c(r){var p=r.attr("name");var q=r.siblings(".error");var s=h[p]();s.done(function(){q.text("").addClass("hidden")});s.fail(function(u,t){if(!t){q.text(u).removeClass("hidden")}});s.always(function(){r.attr("data-validated-value",r.val())});return s}function m(p){a(false);l=p.find("input[name='spaceKey']").first();j=p.find("input[name='name']").first();i=l.parent().find(".error");f=j.parent().find(".error");l.generateFrom(j,{uppercase:false,maxNameLength:255,maxKeyLength:255,timeoutMS:n,validationCallback:function(){l.trigger("input")}});function t(u){if(u.state()==="pending"){u.reject("",true)}}function r(){c(g(this));g.when.apply(g,_.values(o)).done(function(){a(true)}).fail(function(v,u){if(!u){a(false)}})}var s=g.debounce(r,250);var q=g.debounce(r,250);j.on("change input",function(){_.each(o,t);s.apply(this,arguments)});l.on("change input",function(){_.each(o,t);k&&k.abort();q.apply(this,arguments)});l.focus(function(){d(l)});p.find("#permission-private").change(function(){g("#permissions-group").toggleClass("locked")})}var e={live:true,gravity:"w",title:"data-tooltip",delayIn:250,delayOut:0};g(".common-space-form .aui-iconfont-help").tooltip(e);Confluence.SpaceBlueprint.CommonWizardBindings={preRender:function(q,p){p.soyRenderContext.atlToken=AJS.Meta.get("atl-token");p.soyRenderContext.showSpacePermission=true},postRender:function(q,p){b=g(".create-dialog-create-button:visible");m(p.$container)},submit:function(s,r){setTimeout(function(){var u=c(l);var t=c(j);g.when(u,t).done(r.validationDeferred.resolve).fail(function(){r.validationDeferred.reject.apply(this,arguments);a(false)})},n+1);var q=g("form.common-space-form");var p="unknown";if(q.length){p=q.attr("id")||"blank-space"}AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.blueprint-created",{blueprint:p}):AJS.trigger("analyticsEvent",{name:"confluence-spaces.blueprint-created",data:{blueprint:p}});r.async=true;return false}};AJS.trigger("blueprint.wizard-register.ready")});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/js/blank-space-dialog-wizard.js' */
AJS.toInit(function(){Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-space-item",function(a){a.on("pre-render.commonPage",Confluence.SpaceBlueprint.CommonWizardBindings.preRender);a.on("post-render.commonPage",Confluence.SpaceBlueprint.CommonWizardBindings.postRender);a.on("submit.commonPage",Confluence.SpaceBlueprint.CommonWizardBindings.submit)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:space-blueprints', location = 'com/atlassian/confluence/plugins/createcontent/js/create-personal-space-listener.js' */
AJS.toInit(function(){Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-personal-space-item",function(a){a.assembleSubmissionObject=function(b){return{spaceUserKey:""}};a.getSubmissionRestPath=function(){return"/rest/create-dialog/1.0/space-blueprint/create-personal-space"}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.shortcuts.atlassian-shortcuts-plugin:shortcuts', location = '/js/keycommands.js' */
AJS.bind("initialize.keyboardshortcuts",function(){var D=AJS.$,B=function(F){return(AJS.Data&&AJS.Data.get(F))||AJS.params[F]},A=B("build-number"),E=B("keyboardshortcut-hash");if(!A||!E){throw new Error("build-number and keyboardshortcut-hash must both exist in AJS.Data or AJS.params.")}var C=AJS.contextPath()+"/rest/shortcuts/latest/shortcuts/"+encodeURIComponent(A)+"/"+encodeURIComponent(E);D.getJSON(C,function(H){var F=H.shortcuts;if(!F){throw new Error("Server returned no shortcuts.")}AJS.trigger("shortcuts-loaded.keyboardshortcuts",{shortcuts:F});var I=[];var K={enableContext:function(M){var L=D.grep(F,function(N){return N.context===M});I=I.concat(AJS.whenIType.fromJSON(L,true))}};var G=function(){AJS.trigger("register-contexts.keyboardshortcuts",{shortcutRegistry:K})};G();AJS.bind("add-bindings.keyboardshortcuts",G);var J=function(){D.each(I,function(){this.unbind()});I=[]};AJS.bind("remove-bindings.keyboardshortcuts",J)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'js/confluence-keyboard-shortcuts.js' */
AJS.toInit(function(a){AJS.debug("confluence-keyboard-shortcuts initialising");AJS.PageGadget||window.parent.AJS&&window.parent.AJS.PageGadget?AJS.debug("Inside the Page Gadget. Skipping keyboard shortcuts"):(Confluence.KeyboardShortcuts.enabled=AJS.Meta.getBoolean("use-keyboard-shortcuts"),AJS.bind("shortcuts-loaded.keyboardshortcuts",function(g,b){Confluence.KeyboardShortcuts.shortcuts=b.shortcuts;a("#keyboard-shortcuts-link").click(Confluence.KeyboardShortcuts.openDialog)}),AJS.bind("register-contexts.keyboardshortcuts",
function(g,b){if(Confluence.KeyboardShortcuts.enabled){var c=b.shortcutRegistry;c.enableContext("global");var f=Confluence&&Confluence.Editor&&Confluence.Editor.isVisible&&Confluence.Editor.isVisible();a("#action-menu-link").length&&!f&&c.enableContext("viewcontent");a("#viewPageLink").length&&c.enableContext("viewinfo");if(f){c.enableContext("editor");var h=tinyMCE.activeEditor,i=a("#rte").closest("form");a.each(Confluence.KeyboardShortcuts.shortcuts,function(c,d){if(0==d.context.indexOf("tinymce")){var b=
d.op,f=d.param;a.each(d.keys,function(){var e=this,c;"click"==b?c=function(){a(f).click()}:"execute"==b&&(c=f);c?(a.isArray(e)&&(e=e.join(",")),AJS.debug("Adding shortcut for "+e),h.addShortcut(e.toLowerCase(),"",c),"tinymce.actions"==d.context&&-1!=e.indexOf("+")&&(AJS.debug("Binding shortcut on inputs too for "+e),i.delegate(":input","keydown",function(b){var f=b.keyCode?b.keyCode:b.which,d=e.split("+"),d=a.map(d,function(a){return"Ctrl"==a&&b.metaKey||"Shift"==a&&b.shiftKey||f==a.charCodeAt(0)?
null:a});d.length||(c(),b.preventDefault())}))):AJS.logError("ERROR: unkown editor shortcut key operation "+b+" for shortcut "+e)})}})}Confluence.KeyboardShortcuts.ready=!0}}),"undefined"!=typeof Confluence.getContextPath()&&(a("#rte").length?AJS.bind("init.rte",function(){AJS.trigger("initialize.keyboardshortcuts")}):AJS.trigger("initialize.keyboardshortcuts")))});
Confluence.KeyboardShortcuts={Editor:[],enabled:!1,ready:!1,dialog:null,closeDialog:function(){Confluence.KeyboardShortcuts.getDialog().then(function(a){a.hide()});return!1},openDialog:function(){$(this).removeClass("interactive");Confluence.KeyboardShortcuts.getDialog().then(function(a){a.show()});return!1}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'js/shortcut-dialog.js' */
(function(d){var c;Confluence.KeyboardShortcuts.getDialog=function(){function m(){Confluence&&Confluence.Editor&&Confluence.Editor.isVisible&&Confluence.Editor.isVisible()?(c.overrideLastTab(),c.gotoPanel(1)):c.gotoPanel(0)}var k=d.Deferred();if(c)return m(),k.resolve(c);var e=Confluence.KeyboardShortcuts.shortcuts,n=-1!=navigator.platform.indexOf("Mac"),p=function(b){for(var a=AJS("span").addClass("item-action"),b=b.keys[0],c=0;c<b.length;c++){0<c&&a.append(l("then"));
for(var d=a,g=b[c].split("+"),f=0;f<g.length;f++){0<f&&d.append(l("+"));for(var h=d,i=g[f].split(".."),e=0;e<i.length;e++)0<e&&h.append(l("to")),h.append(o(i[e]))}}return a},o=function(b){var a=AJS("kbd");switch(b){case "Shift":case "Sh":a.text("Shift");a.addClass("modifier-key");break;case "Ctrl":b=n?"⌘":"Ctrl";a.text(b);a.addClass("modifier-key");break;case "Tab":a.text("Tab");
a.addClass("modifier-key");break;case "Alt":a.text("Alt");a.addClass("modifier-key");break;default:a.text(b),a.addClass("regular-key")}return a},l=function(b){var a=AJS("span");a.text(b);a.addClass("key-separator");return a},j=function(b,a,c){for(var b=d(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutModule({title:b})),e=b.find("ul"),g=0;g<c.length;g++){var f=c[g];if(!f.hidden&&-1!=d.inArray(f.context,a)){var h=AJS("li").addClass("item-details"),i=
f.description,i=AJS("strong").addClass("item-description").append(i);h.append(i);h.append(p(f));e.append(h)}}return b};c=AJS.ConfluenceDialog({width:950,height:660,id:"keyboard-shortcuts-dialog"});c.addHeader("Keyboard Shortcuts");c.addPanel("General",function(){var b=d(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel({panelId:"general-shortcuts-panel"})),a=d(b).children(".shortcutsmenu");AJS.Meta.get("remote-user")&&
b.find(".keyboard-shortcut-dialog-panel-header").append(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox());a.append(j("Global Shortcuts",["global"],e));a.append(j("Page / Blog Post Actions",["viewcontent","viewinfo"],e));return b}());c.addPanel("Editor",function(){var b=d(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel({panelId:"editor-shortcuts-panel"})),
a=d(b).children(".shortcutsmenu");a.append(j("Block Formatting",["tinymce.block"],e));a.append(j("Rich Formatting",["tinymce.rich"],e));a.append(j("Editing Actions",["tinymce.actions"],e));return b}());c.addCancel("Close",function(){AJS.debug("Hiding Shortcuts help");c.hide();return!1});c.popup.element.find(".dialog-title").prepend(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutHelpLink());
AJS.trigger("keyboard-shortcut-dialog-ready",c);m();k.resolve(c);d("#keyboard-shortcut-enabled-checkbox").prop("checked",Confluence.KeyboardShortcuts.enabled).click(function(){var b=d(this).prop("checked");AJS.$.ajax({type:"POST",url:Confluence.getContextPath()+"/rest/confluenceshortcuts/latest/enabled",data:d.toJSON({enabled:b}),dataType:"json",contentType:"application/json"}).done(function(){Confluence.KeyboardShortcuts.enabled=b;Confluence.KeyboardShortcuts.ready=!1;b?AJS.trigger("add-bindings.keyboardshortcuts"):
AJS.trigger("remove-bindings.keyboardshortcuts")})});return k}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'js/shortcut-dialog-tab-autoformat.js' */
AJS.toInit(function(e){var a=Confluence.Templates.KeyboardShortcutsDialog.Autoformat,d=function(a,b,c){var a=e(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutModule({title:a})),h=a.find("ul"),f;f=e.grep(Confluence.KeyboardShortcuts.Autoformat,function(a){return a.context==b});for(var g=0,d=f.length;g<d;g++)h.append(c(f[g]));return a},c=function(a,b,c){return d(a,b,function(a){return c({output:a.description,type:a.action})})},i=function(c,b){var e=AJS.params.staticResourceUrlPrefix+"/images/icons/emoticons/";
return d(c,b,function(b){return a.emoticonHelpItem({src:e+b.img,type:b.action})})},j=function(){var d=e(Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel({panelId:"autoformat-shortcuts-panel"})),b=d.children(".shortcutsmenu");b.append(c("Font Formatting","autoformat.font_formatting",a.simpleHelpItem));b.append(c("Autocomplete","autoformat.autocomplete",a.keyboardShortcutItem));
b.append(c("Tables","autoformat.tables",a.tableHelpItem));b.append(c("Styles","autoformat.styles",a.styleHelpItem).addClass("styles-module"));b.append(i("Emoticons","autoformat.emoticons"));b.append(c("Lists","autoformat.lists",a.simpleHelpItem));AJS.Meta.get("remote-user")&&d.find(".keyboard-shortcut-dialog-panel-header").append(a.configureAutocomplete({href:Confluence.getContextPath()+
"/users/viewmyeditorsettings.action"}));return d};AJS.bind("keyboard-shortcut-dialog-ready",function(a,b){b.addPanel("Editor Autoformatting",j())});Confluence.KeyboardShortcuts.Autoformat=[{context:"autoformat.font_formatting",description:a.boldDescription(),action:"*Bold*"},{context:"autoformat.font_formatting",description:a.underlineDescription(),action:"+Underline+"},
{context:"autoformat.font_formatting",description:a.italicDescription(),action:"_Italic_"},{context:"autoformat.font_formatting",description:a.monospaceDescription(),action:"{{Monospace}}"},{context:"autoformat.tables",description:a.tableDescription(),action:"||||| + enter"},{context:"autoformat.tables",description:a.tableWithHeadingsDiscriptions(),
action:"||heading||heading||"},{context:"autoformat.styles",description:a.h1Description(),action:"h1. Heading"},{context:"autoformat.styles",description:a.h3Description(),action:"h3. Heading"},{context:"autoformat.styles",description:a.bqDescription(),action:"bq. Quote"},{context:"autoformat.emoticons",
img:"check.png",action:"(/)"},{context:"autoformat.emoticons",img:"smile.png",action:":)"},{context:"autoformat.lists",description:a.numberedListDescription(),action:"# list"},{context:"autoformat.lists",description:a.bulletedListDescription(),
action:"* bullets"},{context:"autoformat.lists",description:a.inlineTaskListDescription(),action:"[] task"},{context:"autoformat.autocomplete",description:"Image/Media",action:"!"},{context:"autoformat.autocomplete",description:"Link",action:"["},
{context:"autoformat.autocomplete",description:"Macro",action:"{"}]});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'templates/shortcut-dialog-tab-autoformat.soy' */
// This file was automatically generated from shortcut-dialog-tab-autoformat.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.KeyboardShortcutsDialog == 'undefined') { Confluence.Templates.KeyboardShortcutsDialog = {}; }
if (typeof Confluence.Templates.KeyboardShortcutsDialog.Autoformat == 'undefined') { Confluence.Templates.KeyboardShortcutsDialog.Autoformat = {}; }


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.configureAutocomplete = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="keyboard-shortcut-autocomplete-message">', soy.$$escapeHtml("To configure Autocomplete,"), ' <a target="_blank" href=', soy.$$escapeHtml(opt_data.href), '>', soy.$$escapeHtml("go to your editor settings"), '</a></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="item-details"><span class="item-description wiki-content">', opt_data.output, '</span><span class="', opt_data.actionClass, ' item-action">', opt_data.type, '</span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.simpleHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: ''}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.tableHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'table-action'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.styleHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'style-action'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.keyboardShortcutItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.helpItem({output: soy.$$escapeHtml(opt_data.output), type: '<kbd class="regular-key">' + soy.$$escapeHtml(opt_data.type) + '</kbd>', actionClass: ''}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.emoticonHelpItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.KeyboardShortcutsDialog.Autoformat.simpleHelpItem({output: '<img src=' + soy.$$escapeHtml(opt_data.src) + '></img>', type: opt_data.type}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.boldDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<b>', soy.$$escapeHtml("Bold"), '</b> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.underlineDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span style="text-decoration: underline;">', soy.$$escapeHtml("Underline"), '</span> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.italicDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<em>', soy.$$escapeHtml("Italic"), '</em> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.monospaceDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<code>', soy.$$escapeHtml("Monospace"), '</code> ', soy.$$escapeHtml("text"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.tableDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="confluenceTable"><tbody><tr><td class="confluenceTd">', soy.$$escapeHtml("first cell"), '</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr></tbody></table>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.tableWithHeadingsDiscriptions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="confluenceTable"><tbody><tr><th class="confluenceTh">', soy.$$escapeHtml("heading"), '</th><th class="confluenceTh">', soy.$$escapeHtml("heading"), '</th></tr><tr><td class="confluenceTd">&#8203;</td><td class="confluenceTd">&#8203;</td></tr></tbody></table>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.h1Description = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("Heading"), '</h1>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.h3Description = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h3>', soy.$$escapeHtml("Heading"), '</h3>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.bqDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<blockquote>', soy.$$escapeHtml("Quote"), '</blockquote>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.numberedListDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol><li>', soy.$$escapeHtml("list"), '</li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.bulletedListDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul><li>', soy.$$escapeHtml("bullets"), '</li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.Autoformat.inlineTaskListDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="inline-task-list"><li>task</li></ul>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts', location = 'templates/help-dialog.soy' */
// This file was automatically generated from help-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.KeyboardShortcutsDialog == 'undefined') { Confluence.Templates.KeyboardShortcutsDialog = {}; }


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutModule = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="module"><div class="mod-header"><h3>', soy.$$escapeHtml(opt_data.title), '</h3></div><div class="mod-content"><ul class="mod-item"></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutHelpLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Dialog.customHelpLink({href: soy.$$escapeHtml("https://docs.atlassian.com/confluence/docs-58/Keyboard+Shortcuts"), text: soy.$$escapeHtml("View All Shortcuts")}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form name="shortcut-settings" id="shortcut-settings-form"><input type="checkbox" name="enabled" id="keyboard-shortcut-enabled-checkbox"><label for="keyboard-shortcut-enabled-checkbox">', soy.$$escapeHtml("Enable General Shortcuts"), '</label></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.KeyboardShortcutsDialog.keyboardShortcutPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id=', soy.$$escapeHtml(opt_data.panelId), '><div class="keyboard-shortcut-dialog-panel-header"></div><div class="shortcutsmenu"></div><div class="keyboard-shortcut-dialog-panel-footer"></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:ajs-underscorejs', location = 'js-vendor/underscorejs/underscore.js' */
(function(){var W=this;var K=W._;var d={};var c=Array.prototype,F=Object.prototype,R=Function.prototype;var h=c.push,O=c.slice,Y=c.concat,D=F.toString,J=F.hasOwnProperty;var l=c.forEach,Q=c.map,e=c.reduce,C=c.reduceRight,B=c.filter,b=c.every,P=c.some,N=c.indexOf,L=c.lastIndexOf,U=Array.isArray,E=Object.keys,f=R.bind;var m=function(n){if(n instanceof m){return n}if(!(this instanceof m)){return new m(n)}this._wrapped=n};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=m}exports._=m}else{W._=m}m.VERSION="1.5.2";var i=m.each=m.forEach=function(s,p,o){if(s==null){return }if(l&&s.forEach===l){s.forEach(p,o)}else{if(s.length===+s.length){for(var n=0,r=s.length;n<r;n++){if(p.call(o,s[n],n,s)===d){return }}}else{var q=m.keys(s);for(var n=0,r=q.length;n<r;n++){if(p.call(o,s[q[n]],q[n],s)===d){return }}}}};m.map=m.collect=function(q,p,o){var n=[];if(q==null){return n}if(Q&&q.map===Q){return q.map(p,o)}i(q,function(t,r,s){n.push(p.call(o,t,r,s))});return n};var G="Reduce of empty array with no initial value";m.reduce=m.foldl=m.inject=function(r,q,n,p){var o=arguments.length>2;if(r==null){r=[]}if(e&&r.reduce===e){if(p){q=m.bind(q,p)}return o?r.reduce(q,n):r.reduce(q)}i(r,function(u,s,t){if(!o){n=u;o=true}else{n=q.call(p,n,u,s,t)}});if(!o){throw new TypeError(G)}return n};m.reduceRight=m.foldr=function(t,q,n,p){var o=arguments.length>2;if(t==null){t=[]}if(C&&t.reduceRight===C){if(p){q=m.bind(q,p)}return o?t.reduceRight(q,n):t.reduceRight(q)}var s=t.length;if(s!==+s){var r=m.keys(t);s=r.length}i(t,function(w,u,v){u=r?r[--s]:--s;if(!o){n=t[u];o=true}else{n=q.call(p,n,t[u],u,v)}});if(!o){throw new TypeError(G)}return n};m.find=m.detect=function(q,p,o){var n;a(q,function(t,r,s){if(p.call(o,t,r,s)){n=t;return true}});return n};m.filter=m.select=function(q,p,o){var n=[];if(q==null){return n}if(B&&q.filter===B){return q.filter(p,o)}i(q,function(t,r,s){if(p.call(o,t,r,s)){n.push(t)}});return n};m.reject=function(p,o,n){return m.filter(p,function(s,q,r){return !o.call(n,s,q,r)},n)};m.every=m.all=function(q,p,o){p||(p=m.identity);var n=true;if(q==null){return n}if(b&&q.every===b){return q.every(p,o)}i(q,function(t,r,s){if(!(n=n&&p.call(o,t,r,s))){return d}});return !!n};var a=m.some=m.any=function(q,p,o){p||(p=m.identity);var n=false;if(q==null){return n}if(P&&q.some===P){return q.some(p,o)}i(q,function(t,r,s){if(n||(n=p.call(o,t,r,s))){return d}});return !!n};m.contains=m.include=function(o,n){if(o==null){return false}if(N&&o.indexOf===N){return o.indexOf(n)!=-1}return a(o,function(p){return p===n})};m.invoke=function(p,q){var n=O.call(arguments,2);var o=m.isFunction(q);return m.map(p,function(r){return(o?q:r[q]).apply(r,n)})};m.pluck=function(o,n){return m.map(o,function(p){return p[n]})};m.where=function(o,n,p){if(m.isEmpty(n)){return p?void 0:[]}return m[p?"find":"filter"](o,function(r){for(var q in n){if(n[q]!==r[q]){return false}}return true})};m.findWhere=function(o,n){return m.where(o,n,true)};m.max=function(q,p,o){if(!p&&m.isArray(q)&&q[0]===+q[0]&&q.length<65535){return Math.max.apply(Math,q)}if(!p&&m.isEmpty(q)){return -Infinity}var n={computed:-Infinity,value:-Infinity};i(q,function(u,r,t){var s=p?p.call(o,u,r,t):u;s>n.computed&&(n={value:u,computed:s})});return n.value};m.min=function(q,p,o){if(!p&&m.isArray(q)&&q[0]===+q[0]&&q.length<65535){return Math.min.apply(Math,q)}if(!p&&m.isEmpty(q)){return Infinity}var n={computed:Infinity,value:Infinity};i(q,function(u,r,t){var s=p?p.call(o,u,r,t):u;s<n.computed&&(n={value:u,computed:s})});return n.value};m.shuffle=function(q){var p;var o=0;var n=[];i(q,function(r){p=m.random(o++);n[o-1]=n[p];n[p]=r});return n};m.sample=function(p,q,o){if(arguments.length<2||o){return p[m.random(p.length-1)]}return m.shuffle(p).slice(0,Math.max(0,q))};var A=function(n){return m.isFunction(n)?n:function(o){return o[n]}};m.sortBy=function(q,p,n){var o=A(p);return m.pluck(m.map(q,function(t,r,s){return{value:t,index:r,criteria:o.call(n,t,r,s)}}).sort(function(u,t){var s=u.criteria;var r=t.criteria;if(s!==r){if(s>r||s===void 0){return 1}if(s<r||r===void 0){return -1}}return u.index-t.index}),"value")};var T=function(n){return function(s,r,p){var o={};var q=r==null?m.identity:A(r);i(s,function(v,t){var u=q.call(p,v,t,s);n(o,u,v)});return o}};m.groupBy=T(function(n,o,p){(m.has(n,o)?n[o]:(n[o]=[])).push(p)});m.indexBy=T(function(n,o,p){n[o]=p});m.countBy=T(function(n,o){m.has(n,o)?n[o]++:n[o]=1});m.sortedIndex=function(u,t,q,p){q=q==null?m.identity:A(q);var s=q.call(p,t);var n=0,r=u.length;while(n<r){var o=(n+r)>>>1;q.call(p,u[o])<s?n=o+1:r=o}return n};m.toArray=function(n){if(!n){return[]}if(m.isArray(n)){return O.call(n)}if(n.length===+n.length){return m.map(n,m.identity)}return m.values(n)};m.size=function(n){if(n==null){return 0}return(n.length===+n.length)?n.length:m.keys(n).length};m.first=m.head=m.take=function(q,p,o){if(q==null){return void 0}return(p==null)||o?q[0]:O.call(q,0,p)};m.initial=function(q,p,o){return O.call(q,0,q.length-((p==null)||o?1:p))};m.last=function(q,p,o){if(q==null){return void 0}if((p==null)||o){return q[q.length-1]}else{return O.call(q,Math.max(q.length-p,0))}};m.rest=m.tail=m.drop=function(q,p,o){return O.call(q,(p==null)||o?1:p)};m.compact=function(n){return m.filter(n,m.identity)};var X=function(o,p,n){if(p&&m.every(o,m.isArray)){return Y.apply(n,o)}i(o,function(q){if(m.isArray(q)||m.isArguments(q)){p?h.apply(n,q):X(q,p,n)}else{n.push(q)}});return n};m.flatten=function(o,n){return X(o,n,[])};m.without=function(n){return m.difference(n,O.call(arguments,1))};m.uniq=m.unique=function(t,s,r,q){if(m.isFunction(s)){q=r;r=s;s=false}var o=r?m.map(t,r,q):t;var p=[];var n=[];i(o,function(v,u){if(s?(!u||n[n.length-1]!==v):!m.contains(n,v)){n.push(v);p.push(t[u])}});return p};m.union=function(){return m.uniq(m.flatten(arguments,true))};m.intersection=function(o){var n=O.call(arguments,1);return m.filter(m.uniq(o),function(p){return m.every(n,function(q){return m.indexOf(q,p)>=0})})};m.difference=function(o){var n=Y.apply(c,O.call(arguments,1));return m.filter(o,function(p){return !m.contains(n,p)})};m.zip=function(){var p=m.max(m.pluck(arguments,"length").concat(0));var o=new Array(p);for(var n=0;n<p;n++){o[n]=m.pluck(arguments,""+n)}return o};m.object=function(r,o){if(r==null){return{}}var n={};for(var p=0,q=r.length;p<q;p++){if(o){n[r[p]]=o[p]}else{n[r[p][0]]=r[p][1]}}return n};m.indexOf=function(r,p,q){if(r==null){return -1}var n=0,o=r.length;if(q){if(typeof q=="number"){n=(q<0?Math.max(0,o+q):q)}else{n=m.sortedIndex(r,p);return r[n]===p?n:-1}}if(N&&r.indexOf===N){return r.indexOf(p,q)}for(;n<o;n++){if(r[n]===p){return n}}return -1};m.lastIndexOf=function(r,p,q){if(r==null){return -1}var n=q!=null;if(L&&r.lastIndexOf===L){return n?r.lastIndexOf(p,q):r.lastIndexOf(p)}var o=(n?q:r.length);while(o--){if(r[o]===p){return o}}return -1};m.range=function(s,p,r){if(arguments.length<=1){p=s||0;s=0}r=arguments[2]||1;var q=Math.max(Math.ceil((p-s)/r),0);var n=0;var o=new Array(q);while(n<q){o[n++]=s;s+=r}return o};var g=function(){};m.bind=function(q,o){var n,p;if(f&&q.bind===f){return f.apply(q,O.call(arguments,1))}if(!m.isFunction(q)){throw new TypeError}n=O.call(arguments,2);return p=function(){if(!(this instanceof p)){return q.apply(o,n.concat(O.call(arguments)))}g.prototype=q.prototype;var s=new g;g.prototype=null;var r=q.apply(s,n.concat(O.call(arguments)));if(Object(r)===r){return r}return s}};m.partial=function(o){var n=O.call(arguments,1);return function(){return o.apply(this,n.concat(O.call(arguments)))}};m.bindAll=function(o){var n=O.call(arguments,1);if(n.length===0){throw new Error("bindAll must be passed function names")}i(n,function(p){o[p]=m.bind(o[p],o)});return o};m.memoize=function(p,o){var n={};o||(o=m.identity);return function(){var q=o.apply(this,arguments);return m.has(n,q)?n[q]:(n[q]=p.apply(this,arguments))}};m.delay=function(o,p){var n=O.call(arguments,2);return setTimeout(function(){return o.apply(null,n)},p)};m.defer=function(n){return m.delay.apply(m,[n,1].concat(O.call(arguments,1)))};m.throttle=function(o,q,u){var n,s,v;var t=null;var r=0;u||(u={});var p=function(){r=u.leading===false?0:new Date;t=null;v=o.apply(n,s)};return function(){var w=new Date;if(!r&&u.leading===false){r=w}var x=q-(w-r);n=this;s=arguments;if(x<=0){clearTimeout(t);t=null;r=w;v=o.apply(n,s)}else{if(!t&&u.trailing!==false){t=setTimeout(p,x)}}return v}};m.debounce=function(r,u,o){var t,p,q,s,n;return function(){q=this;p=arguments;s=new Date();var w=function(){var x=(new Date())-s;if(x<u){t=setTimeout(w,u-x)}else{t=null;if(!o){n=r.apply(q,p)}}};var v=o&&!t;if(!t){t=setTimeout(w,u)}if(v){n=r.apply(q,p)}return n}};m.once=function(p){var n=false,o;return function(){if(n){return o}n=true;o=p.apply(this,arguments);p=null;return o}};m.wrap=function(n,o){return function(){var p=[n];h.apply(p,arguments);return o.apply(this,p)}};m.compose=function(){var n=arguments;return function(){var o=arguments;for(var p=n.length-1;p>=0;p--){o=[n[p].apply(this,o)]}return o[0]}};m.after=function(o,n){return function(){if(--o<1){return n.apply(this,arguments)}}};m.keys=E||function(p){if(p!==Object(p)){throw new TypeError("Invalid object")}var o=[];for(var n in p){if(m.has(p,n)){o.push(n)}}return o};m.values=function(r){var q=m.keys(r);var p=q.length;var n=new Array(p);for(var o=0;o<p;o++){n[o]=r[q[o]]}return n};m.pairs=function(r){var p=m.keys(r);var o=p.length;var q=new Array(o);for(var n=0;n<o;n++){q[n]=[p[n],r[p[n]]]}return q};m.invert=function(r){var n={};var q=m.keys(r);for(var o=0,p=q.length;o<p;o++){n[r[q[o]]]=q[o]}return n};m.functions=m.methods=function(p){var o=[];for(var n in p){if(m.isFunction(p[n])){o.push(n)}}return o.sort()};m.extend=function(n){i(O.call(arguments,1),function(o){if(o){for(var p in o){n[p]=o[p]}}});return n};m.pick=function(o){var p={};var n=Y.apply(c,O.call(arguments,1));i(n,function(q){if(q in o){p[q]=o[q]}});return p};m.omit=function(p){var q={};var o=Y.apply(c,O.call(arguments,1));for(var n in p){if(!m.contains(o,n)){q[n]=p[n]}}return q};m.defaults=function(n){i(O.call(arguments,1),function(o){if(o){for(var p in o){if(n[p]===void 0){n[p]=o[p]}}}});return n};m.clone=function(n){if(!m.isObject(n)){return n}return m.isArray(n)?n.slice():m.extend({},n)};m.tap=function(o,n){n(o);return o};var j=function(u,t,o,p){if(u===t){return u!==0||1/u==1/t}if(u==null||t==null){return u===t}if(u instanceof m){u=u._wrapped}if(t instanceof m){t=t._wrapped}var r=D.call(u);if(r!=D.call(t)){return false}switch(r){case"[object String]":return u==String(t);case"[object Number]":return u!=+u?t!=+t:(u==0?1/u==1/t:u==+t);case"[object Date]":case"[object Boolean]":return +u==+t;case"[object RegExp]":return u.source==t.source&&u.global==t.global&&u.multiline==t.multiline&&u.ignoreCase==t.ignoreCase}if(typeof u!="object"||typeof t!="object"){return false}var n=o.length;while(n--){if(o[n]==u){return p[n]==t}}var s=u.constructor,q=t.constructor;if(s!==q&&!(m.isFunction(s)&&(s instanceof s)&&m.isFunction(q)&&(q instanceof q))){return false}o.push(u);p.push(t);var x=0,w=true;if(r=="[object Array]"){x=u.length;w=x==t.length;if(w){while(x--){if(!(w=j(u[x],t[x],o,p))){break}}}}else{for(var v in u){if(m.has(u,v)){x++;if(!(w=m.has(t,v)&&j(u[v],t[v],o,p))){break}}}if(w){for(v in t){if(m.has(t,v)&&!(x--)){break}}w=!x}}o.pop();p.pop();return w};m.isEqual=function(o,n){return j(o,n,[],[])};m.isEmpty=function(o){if(o==null){return true}if(m.isArray(o)||m.isString(o)){return o.length===0}for(var n in o){if(m.has(o,n)){return false}}return true};m.isElement=function(n){return !!(n&&n.nodeType===1)};m.isArray=U||function(n){return D.call(n)=="[object Array]"};m.isObject=function(n){return n===Object(n)};i(["Arguments","Function","String","Number","Date","RegExp"],function(n){m["is"+n]=function(o){return D.call(o)=="[object "+n+"]"}});if(!m.isArguments(arguments)){m.isArguments=function(n){return !!(n&&m.has(n,"callee"))}}if(typeof (/./)!=="function"){m.isFunction=function(n){return typeof n==="function"}}m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))};m.isNaN=function(n){return m.isNumber(n)&&n!=+n};m.isBoolean=function(n){return n===true||n===false||D.call(n)=="[object Boolean]"};m.isNull=function(n){return n===null};m.isUndefined=function(n){return n===void 0};m.has=function(o,n){return J.call(o,n)};m.noConflict=function(){W._=K;return this};m.identity=function(n){return n};m.times=function(s,r,q){var o=Array(Math.max(0,s));for(var p=0;p<s;p++){o[p]=r.call(q,p)}return o};m.random=function(o,n){if(n==null){n=o;o=0}return o+Math.floor(Math.random()*(n-o+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};M.unescape=m.invert(M.escape);var k={escape:new RegExp("["+m.keys(M.escape).join("")+"]","g"),unescape:new RegExp("("+m.keys(M.unescape).join("|")+")","g")};m.each(["escape","unescape"],function(n){m[n]=function(o){if(o==null){return""}return(""+o).replace(k[n],function(p){return M[n][p]})}});m.result=function(n,p){if(n==null){return void 0}var o=n[p];return m.isFunction(o)?o.call(n):o};m.mixin=function(n){i(m.functions(n),function(o){var p=m[o]=n[o];m.prototype[o]=function(){var q=[this._wrapped];h.apply(q,arguments);return S.call(this,p.apply(m,q))}})};var Z=0;m.uniqueId=function(n){var o=++Z+"";return n?n+o:o};m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var V=/(.)^/;var H={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};var I=/\\|'|\r|\n|\t|\u2028|\u2029/g;m.template=function(v,q,p){var o;p=m.defaults({},p,m.templateSettings);var r=new RegExp([(p.escape||V).source,(p.interpolate||V).source,(p.evaluate||V).source].join("|")+"|$","g");var s=0;var n="__p+='";v.replace(r,function(x,y,w,AA,z){n+=v.slice(s,z).replace(I,function(AB){return"\\"+H[AB]});if(y){n+="'+\n((__t=("+y+"))==null?'':_.escape(__t))+\n'"}if(w){n+="'+\n((__t=("+w+"))==null?'':__t)+\n'"}if(AA){n+="';\n"+AA+"\n__p+='"}s=z+x.length;return x});n+="';\n";if(!p.variable){n="with(obj||{}){\n"+n+"}\n"}n="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+n+"return __p;\n";try{o=new Function(p.variable||"obj","_",n)}catch(t){t.source=n;throw t}if(q){return o(q,m)}var u=function(w){return o.call(this,w,m)};u.source="function("+(p.variable||"obj")+"){\n"+n+"}";return u};m.chain=function(n){return m(n).chain()};var S=function(n){return this._chain?m(n).chain():n};m.mixin(m);i(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var o=c[n];m.prototype[n]=function(){var p=this._wrapped;o.apply(p,arguments);if((n=="shift"||n=="splice")&&p.length===0){delete p[0]}return S.call(this,p)}});i(["concat","join","slice"],function(n){var o=c[n];m.prototype[n]=function(){return S.call(this,o.apply(this._wrapped,arguments))}});m.extend(m.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}})}).call(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:ajs-backbone', location = 'js-vendor/backbone/backbone.js' */
/* THIS FILE HAS BEEN MODIFIED BY ATLASSIAN. Modified lines are marked below, search "ATLASSIAN" */
(function(){var U=this;var b=U.Backbone;var G=[];var d=G.push;var N=G.slice;var T=G.splice;var Z;if(typeof exports!=="undefined"){Z=exports}else{Z=U.Backbone={}}Z.VERSION="1.0.0";var l=U._;if(!l&&(typeof require!=="undefined")){l=require("underscore")}Z.$=U.jQuery||U.Zepto||U.ender||U.$;Z.noConflict=function(){U.Backbone=b;return this};Z.emulateHTTP=false;Z.emulateJSON=false;var j=Z.Events={on:function(m,p,o){if(!X(this,"on",m,[p,o])||!p){return this}this._events||(this._events={});var n=this._events[m]||(this._events[m]=[]);n.push({callback:p,context:o,ctx:o||this});return this},once:function(n,q,o){if(!X(this,"once",n,[q,o])||!q){return this}var m=this;var p=l.once(function(){m.off(n,p);q.apply(this,arguments)});p._callback=q;return this.on(n,p,o)},off:function(m,v,n){var t,u,w,s,r,o,q,p;if(!this._events||!X(this,"off",m,[v,n])){return this}if(!m&&!v&&!n){this._events={};return this}s=m?[m]:l.keys(this._events);for(r=0,o=s.length;r<o;r++){m=s[r];if(w=this._events[m]){this._events[m]=t=[];if(v||n){for(q=0,p=w.length;q<p;q++){u=w[q];if((v&&v!==u.callback&&v!==u.callback._callback)||(n&&n!==u.context)){t.push(u)}}}if(!t.length){delete this._events[m]}}}return this},trigger:function(o){if(!this._events){return this}var n=N.call(arguments,1);if(!X(this,"trigger",o,n)){return this}var p=this._events[o];var m=this._events.all;if(p){B(p,n)}if(m){B(m,arguments)}return this},stopListening:function(p,m,r){var n=this._listeners;if(!n){return this}var o=!m&&!r;if(typeof m==="object"){r=this}if(p){(n={})[p._listenerId]=p}for(var q in n){n[q].off(m,r,this);if(o){delete this._listeners[q]}}return this}};var W=/\s+/;var X=function(t,r,n,q){if(!n){return true}if(typeof n==="object"){for(var p in n){t[r].apply(t,[p,n[p]].concat(q))}return false}if(W.test(n)){var s=n.split(W);for(var o=0,m=s.length;o<m;o++){t[r].apply(t,[s[o]].concat(q))}return false}return true};var B=function(r,p){var s,q=-1,o=r.length,n=p[0],m=p[1],t=p[2];switch(p.length){case 0:while(++q<o){(s=r[q]).callback.call(s.ctx)}return ;case 1:while(++q<o){(s=r[q]).callback.call(s.ctx,n)}return ;case 2:while(++q<o){(s=r[q]).callback.call(s.ctx,n,m)}return ;case 3:while(++q<o){(s=r[q]).callback.call(s.ctx,n,m,t)}return ;default:while(++q<o){(s=r[q]).callback.apply(s.ctx,p)}}};var c={listenTo:"on",listenToOnce:"once"};l.each(c,function(m,n){j[n]=function(q,o,s){var p=this._listeners||(this._listeners={});var r=q._listenerId||(q._listenerId=l.uniqueId("l"));p[r]=q;if(typeof o==="object"){s=this}q[m](o,s,this);return this}});j.bind=j.on;j.unbind=j.off;l.extend(Z,j);var e=Z.Model=function(m,o){var p;var n=m||{};o||(o={});this.cid=l.uniqueId("c");this.attributes={};l.extend(this,l.pick(o,f));if(o.parse){n=this.parse(n,o)||{}}if(p=l.result(this,"defaults")){n=l.defaults({},n,p)}this.set(n,o);this.changed={};this.initialize.apply(this,arguments)};var f=["url","urlRoot","collection"];l.extend(e.prototype,j,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(m){return l.clone(this.attributes)},sync:function(){return Z.sync.apply(this,arguments)},get:function(m){return this.attributes[m]},escape:function(m){return l.escape(this.get(m))},has:function(m){return this.get(m)!=null},set:function(u,m,y){var s,v,w,t,r,x,o,q;if(u==null){return this}if(typeof u==="object"){v=u;y=m}else{(v={})[u]=m}y||(y={});if(!this._validate(v,y)){return false}w=y.unset;r=y.silent;t=[];x=this._changing;this._changing=true;if(!x){this._previousAttributes=l.clone(this.attributes);this.changed={}}q=this.attributes,o=this._previousAttributes;if(this.idAttribute in v){this.id=v[this.idAttribute]}for(s in v){m=v[s];if(!l.isEqual(q[s],m)){t.push(s)}if(!l.isEqual(o[s],m)){this.changed[s]=m}else{delete this.changed[s]}w?delete q[s]:q[s]=m}if(!r){if(t.length){this._pending=true}for(var p=0,n=t.length;p<n;p++){this.trigger("change:"+t[p],this,q[t[p]],y)}}if(x){return this}if(!r){while(this._pending){this._pending=false;this.trigger("change",this,y)}}this._pending=false;this._changing=false;return this},unset:function(m,n){return this.set(m,void 0,l.extend({},n,{unset:true}))},clear:function(n){var m={};for(var o in this.attributes){m[o]=void 0}return this.set(m,l.extend({},n,{unset:true}))},hasChanged:function(m){if(m==null){return !l.isEmpty(this.changed)}return l.has(this.changed,m)},changedAttributes:function(o){if(!o){return this.hasChanged()?l.clone(this.changed):false}var q,p=false;var n=this._changing?this._previousAttributes:this.attributes;for(var m in o){if(l.isEqual(n[m],(q=o[m]))){continue}(p||(p={}))[m]=q}return p},previous:function(m){if(m==null||!this._previousAttributes){return null}return this._previousAttributes[m]},previousAttributes:function(){return l.clone(this._previousAttributes)},fetch:function(n){n=n?l.clone(n):{};if(n.parse===void 0){n.parse=true}var m=this;var o=n.success;n.success=function(p){if(!m.set(m.parse(p,n),n)){return false}if(o){o(m,p,n)}m.trigger("sync",m,p,n)};h(this,n);return this.sync("read",this,n)},save:function(q,n,u){var r,m,t,o=this.attributes;if(q==null||typeof q==="object"){r=q;u=n}else{(r={})[q]=n}if(r&&(!u||!u.wait)&&!this.set(r,u)){return false}u=l.extend({validate:true},u);if(!this._validate(r,u)){return false}if(r&&u.wait){this.attributes=l.extend({},o,r)}if(u.parse===void 0){u.parse=true}var p=this;var s=u.success;u.success=function(w){p.attributes=o;var v=p.parse(w,u);if(u.wait){v=l.extend(r||{},v)}if(l.isObject(v)&&!p.set(v,u)){return false}if(s){s(p,w,u)}p.trigger("sync",p,w,u)};h(this,u);m=this.isNew()?"create":(u.patch?"patch":"update");if(m==="patch"){u.attrs=r}t=this.sync(m,this,u);if(r&&u.wait){this.attributes=o}return t},destroy:function(n){n=n?l.clone(n):{};var m=this;var q=n.success;var o=function(){m.trigger("destroy",m,m.collection,n)};n.success=function(r){if(n.wait||m.isNew()){o()}if(q){q(m,r,n)}if(!m.isNew()){m.trigger("sync",m,r,n)}};if(this.isNew()){n.success();return false}h(this,n);var p=this.sync("delete",this,n);if(!n.wait){o()}return p},url:function(){var m=l.result(this,"urlRoot")||l.result(this.collection,"url")||R();if(this.isNew()){return m}return m+(m.charAt(m.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(n,m){return n},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(m){return this._validate({},l.extend(m||{},{validate:true}))},_validate:function(o,n){if(!n.validate||!this.validate){return true}o=l.extend({},this.attributes,o);var m=this.validationError=this.validate(o,n)||null;if(!m){return true}this.trigger("invalid",this,m,l.extend(n||{},{validationError:m}));return false}});var A=["keys","values","pairs","invert","pick","omit"];l.each(A,function(m){e.prototype[m]=function(){var n=N.call(arguments);n.unshift(this.attributes);return l[m].apply(l,n)}});var C=Z.Collection=function(n,m){m||(m={});if(m.url){this.url=m.url}if(m.model){this.model=m.model}if(m.comparator!==void 0){this.comparator=m.comparator}this._reset();this.initialize.apply(this,arguments);if(n){this.reset(n,l.extend({silent:true},m))}};var O={add:true,remove:true,merge:true};var k={add:true,merge:false,remove:false};l.extend(C.prototype,j,{model:e,initialize:function(){},toJSON:function(m){return this.map(function(n){return n.toJSON(m)})},sync:function(){return Z.sync.apply(this,arguments)},add:function(n,m){return this.set(n,l.defaults(m||{},k))},remove:function(r,p){r=l.isArray(r)?r.slice():[r];p||(p={});var q,m,o,n;for(q=0,m=r.length;q<m;q++){n=this.get(r[q]);if(!n){continue}delete this._byId[n.id];delete this._byId[n.cid];o=this.indexOf(n);this.models.splice(o,1);this.length--;if(!p.silent){p.index=o;n.trigger("remove",n,this,p)}this._removeReference(n)}return this},set:function(n,z){z=l.defaults(z||{},O);if(z.parse){n=this.parse(n,z)}if(!l.isArray(n)){n=n?[n]:[]}var u,q,w,x,o,v;var p=z.at;var t=this.comparator&&(p==null)&&z.sort!==false;var r=l.isString(this.comparator)?this.comparator:null;var y=[],m=[],s={};for(u=0,q=n.length;u<q;u++){if(!(w=this._prepareModel(n[u],z))){continue}if(o=this.get(w)){if(z.remove){s[o.cid]=true}if(z.merge){o.set(w.attributes,z);if(t&&!v&&o.hasChanged(r)){v=true}}}else{if(z.add){y.push(w);w.on("all",this._onModelEvent,this);this._byId[w.cid]=w;if(w.id!=null){this._byId[w.id]=w}}}}if(z.remove){for(u=0,q=this.length;u<q;++u){if(!s[(w=this.models[u]).cid]){m.push(w)}}if(m.length){this.remove(m,z)}}if(y.length){if(t){v=true}this.length+=y.length;if(p!=null){T.apply(this.models,[p,0].concat(y))}else{d.apply(this.models,y)}}if(v){this.sort({silent:true})}if(z.silent){return this}for(u=0,q=y.length;u<q;u++){(w=y[u]).trigger("add",w,this,z)}if(v){this.trigger("sort",this,z)}return this},reset:function(p,n){n||(n={});for(var o=0,m=this.models.length;o<m;o++){this._removeReference(this.models[o])}n.previousModels=this.models;this._reset();this.add(p,l.extend({silent:true},n));if(!n.silent){this.trigger("reset",this,n)}return this},push:function(n,m){n=this._prepareModel(n,m);this.add(n,l.extend({at:this.length},m));return n},pop:function(n){var m=this.at(this.length-1);this.remove(m,n);return m},unshift:function(n,m){n=this._prepareModel(n,m);this.add(n,l.extend({at:0},m));return n},shift:function(n){var m=this.at(0);this.remove(m,n);return m},slice:function(n,m){return this.models.slice(n,m)},get:function(m){if(m==null){return void 0}return this._byId[m.id!=null?m.id:m.cid||m]},at:function(m){return this.models[m]},where:function(m,n){if(l.isEmpty(m)){return n?void 0:[]}return this[n?"find":"filter"](function(o){for(var p in m){if(m[p]!==o.get(p)){return false}}return true})},findWhere:function(m){return this.where(m,true)},sort:function(m){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}m||(m={});if(l.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(l.bind(this.comparator,this))}if(!m.silent){this.trigger("sort",this,m)}return this},sortedIndex:function(m,p,n){p||(p=this.comparator);var o=l.isFunction(p)?p:function(q){return q.get(p)};return l.sortedIndex(this.models,m,o,n)},pluck:function(m){return l.invoke(this.models,"get",m)},fetch:function(m){m=m?l.clone(m):{};if(m.parse===void 0){m.parse=true}var o=m.success;var n=this;m.success=function(p){var q=m.reset?"reset":"set";n[q](p,m);if(o){o(n,p,m)}n.trigger("sync",n,p,m)};h(this,m);return this.sync("read",this,m)},create:function(n,m){m=m?l.clone(m):{};if(!(n=this._prepareModel(n,m))){return false}if(!m.wait){this.add(n,m)}var p=this;var o=m.success;m.success=function(r,s,q){if(q.wait){p.add(r,q)}if(o){o(r,s,q)}};n.save(null,m);return n},parse:function(n,m){return n},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(o,n){if(o instanceof e){if(!o.collection){o.collection=this}return o}n||(n={});n.collection=this;var m=new this.model(o,n);if(!m._validate(o,n)){this.trigger("invalid",this,o,n);return false}return m},_removeReference:function(m){if(this===m.collection){delete m.collection}m.off("all",this._onModelEvent,this)},_onModelEvent:function(o,n,p,m){if((o==="add"||o==="remove")&&p!==this){return }if(o==="destroy"){this.remove(n,m)}if(n&&o==="change:"+n.idAttribute){delete this._byId[n.previous(n.idAttribute)];if(n.id!=null){this._byId[n.id]=n}}this.trigger.apply(this,arguments)}});var Y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];l.each(Y,function(m){C.prototype[m]=function(){var n=N.call(arguments);n.unshift(this.models);return l[m].apply(l,n)}});var K=["groupBy","countBy","sortBy"];l.each(K,function(m){C.prototype[m]=function(p,n){var o=l.isFunction(p)?p:function(q){return q.get(p)};return l[m](this.models,o,n)}});var g=Z.View=function(m){this.cid=l.uniqueId("view");this._configure(m||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var V=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];l.extend(g.prototype,j,{tagName:"div",$:function(m){return this.$el.find(m)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(m,n){if(this.$el){this.undelegateEvents()}this.$el=m instanceof Z.$?m:Z.$(m);this.el=this.$el[0];if(n!==false){this.delegateEvents()}return this},delegateEvents:function(q){if(!(q||(q=l.result(this,"events")))){return this}this.undelegateEvents();for(var p in q){var r=q[p];if(!l.isFunction(r)){r=this[q[p]]}if(!r){continue}var o=p.match(V);var n=o[1],m=o[2];r=l.bind(r,this);n+=".delegateEvents"+this.cid;if(m===""){this.$el.on(n,r)}else{this.$el.on(n,m,r)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(m){if(this.options){m=l.extend({},l.result(this,"options"),m)}l.extend(this,l.pick(m,E));this.options=m},_ensureElement:function(){if(!this.el){var m=l.extend({},l.result(this,"attributes"));if(this.id){m.id=l.result(this,"id")}if(this.className){m["class"]=l.result(this,"className")}var n=Z.$("<"+l.result(this,"tagName")+">").attr(m);this.setElement(n,false)}else{this.setElement(l.result(this,"el"),false)}}});Z.sync=function(s,n,m){var p=J[s];l.defaults(m||(m={}),{emulateHTTP:Z.emulateHTTP,emulateJSON:Z.emulateJSON});var r={type:p,dataType:"json"};if(!m.url){r.url=l.result(n,"url")||R()}if(m.data==null&&n&&(s==="create"||s==="update"||s==="patch")){r.contentType="application/json";r.data=JSON.stringify(m.attrs||n.toJSON(m))}if(m.emulateJSON){r.contentType="application/x-www-form-urlencoded";r.data=r.data?{model:r.data}:{}}if(m.emulateHTTP&&(p==="PUT"||p==="DELETE"||p==="PATCH")){r.type="POST";if(m.emulateJSON){r.data._method=p}var o=m.beforeSend;m.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",p);if(o){return o.apply(this,arguments)}}}if(r.type!=="GET"&&!m.emulateJSON){r.processData=false}if(r.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){r.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var q=m.xhr=Z.ajax(l.extend(r,m));n.trigger("request",n,q,m);return q};var J={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};Z.ajax=function(){return Z.$.ajax.apply(Z.$,arguments)};var P=Z.Router=function(m){m||(m={});if(m.routes){this.routes=m.routes}this._bindRoutes();this.initialize.apply(this,arguments)};var Q=/\((.*?)\)/g;var S=/(\(\?)?:\w+/g;var D=/\*\w+/g;var H=/[\-{}\[\]+?.,\\\^$|#\s]/g;l.extend(P.prototype,j,{initialize:function(){},route:function(n,o,p){if(!l.isRegExp(n)){n=this._routeToRegExp(n)}if(l.isFunction(o)){p=o;o=""}if(!p){p=this[o]}var m=this;Z.history.route(n,function(r){var q=m._extractParameters(n,r);p&&p.apply(m,q);m.trigger.apply(m,["route:"+o].concat(q));m.trigger("route",o,q);Z.history.trigger("route",m,o,q)});return this},navigate:function(n,m){Z.history.navigate(n,m);return this},_bindRoutes:function(){if(!this.routes){return }this.routes=l.result(this,"routes");var n,m=l.keys(this.routes);while((n=m.pop())!=null){this.route(n,this.routes[n])}},_routeToRegExp:function(m){m=m.replace(H,"\\$&").replace(Q,"(?:$1)?").replace(S,function(o,n){return n?o:"([^/]+)"}).replace(D,"(.*?)");return new RegExp("^"+m+"$")},_extractParameters:function(m,n){var o=m.exec(n).slice(1);return l.map(o,function(p){return p?decodeURIComponent(p):null})}});var I=Z.History=function(){this.handlers=[];l.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var a=/^[#\/]|\s+$/g;var F=/^\/+|\/+$/g;var i=/msie [\w.]+/;var M=/\/$/;I.started=false;l.extend(I.prototype,j,{interval:50,getHash:function(n){var m=(n||this).location.href.match(/#(.*)$/);return m?m[1]:""},getFragment:function(o,n){if(o==null){if(this._hasPushState||!this._wantsHashChange||n){o=this.location.pathname;var m=this.root.replace(M,"");if(!o.indexOf(m)){o=o.substr(m.length)}}else{o=this.getHash()}}return o.replace(a,"")},start:function(o){if(I.started){throw new Error("Backbone.history has already been started")}I.started=true;this.options=l.extend({},{root:"/"},this.options,o);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var n=this.getFragment();var m=document.documentMode;var q=(i.exec(navigator.userAgent.toLowerCase())&&(!m||m<=7));this.root=("/"+this.root+"/").replace(F,"/");if(q&&this._wantsHashChange){this.iframe=Z.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(n)}if(this._hasPushState){Z.$(window).on("popstate",this.checkUrl)}else{if(this._wantsHashChange&&("onhashchange" in window)&&!q){Z.$(window).on("hashchange",this.checkUrl)}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}}}this.fragment=n;var r=this.location;var p=r.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!p){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else{if(this._wantsPushState&&this._hasPushState&&p&&r.hash){this.fragment=this.getHash().replace(a,"");this.history.replaceState({},document.title,this.root+this.fragment+r.search)}}if(!this.options.silent){return this.loadUrl()}},stop:function(){Z.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(m,n){this.handlers.unshift({route:m,callback:n})},checkUrl:function(n){var m=this.getFragment();if(m===this.fragment&&this.iframe){m=this.getFragment(this.getHash(this.iframe))}if(m===this.fragment){return false}if(this.iframe){this.navigate(m)}this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(o){var n=this.fragment=this.getFragment(o);var m=l.any(this.handlers,function(p){if(p.route.test(n)){p.callback(n);return true}});return m},navigate:function(o,n){if(!I.started){return false}if(!n||n===true){n={trigger:n}}o=this.getFragment(o||"");if(this.fragment===o){return }this.fragment=o;var m=this.root+o;if(this._hasPushState){this.history[n.replace?"replaceState":"pushState"]({},document.title,m)}else{if(this._wantsHashChange){this._updateHash(this.location,o,n.replace);if(this.iframe&&(o!==this.getFragment(this.getHash(this.iframe)))){if(!n.replace){this.iframe.document.open().close()}this._updateHash(this.iframe.location,o,n.replace)}}else{return this.location.assign(m)}}if(n.trigger){this.loadUrl(o)}},_updateHash:function(m,o,p){if(p){var n=m.href.replace(/(javascript:|#).*$/,"");m.replace(n+"#"+o)}else{m.hash="#"+o}}});Z.history=new I;var L=function(m,o){var n=this;var q;if(m&&l.has(m,"constructor")){q=m.constructor}else{q=function(){return n.apply(this,arguments)}}l.extend(q,n,o);var p=function(){this.constructor=q};p.prototype=n.prototype;q.prototype=new p;if(m){l.extend(q.prototype,m)}q.__super__=n.prototype;return q};e.extend=C.extend=P.extend=g.extend=I.extend=L;var R=function(){throw new Error('A "url" property or function must be specified')};var h=function(o,n){var m=n.error;n.error=function(p){if(m){m(o,p,n)}o.trigger("error",o,p,n)}}}).call(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/aui.soy' */
// This file was automatically generated from aui.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.renderExtraAttributes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data != null && opt_data.extraAttributes) {
    if (Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]') {
      var attrList7 = soy.$$getMapKeys(opt_data.extraAttributes);
      var attrListLen7 = attrList7.length;
      for (var attrIndex7 = 0; attrIndex7 < attrListLen7; attrIndex7++) {
        var attrData7 = attrList7[attrIndex7];
        output.append(' ', soy.$$escapeHtml(attrData7), '="', soy.$$escapeHtml(opt_data.extraAttributes[attrData7]), '"');
      }
    } else {
      output.append(' ', opt_data.extraAttributes);
    }
  }
  return opt_sb ? '' : output.toString();
};


aui.renderExtraClasses = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data != null && opt_data.extraClasses) {
    if ((opt_data.extraClasses) instanceof Array) {
      var classList23 = opt_data.extraClasses;
      var classListLen23 = classList23.length;
      for (var classIndex23 = 0; classIndex23 < classListLen23; classIndex23++) {
        var classData23 = classList23[classIndex23];
        output.append(' ', soy.$$escapeHtml(classData23));
      }
    } else {
      output.append(' ', soy.$$escapeHtml(opt_data.extraClasses));
    }
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/badges.soy' */
// This file was automatically generated from badges.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.badges == 'undefined') { aui.badges = {}; }


aui.badges.badge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-badge');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/buttons.soy' */
// This file was automatically generated from buttons.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.buttons == 'undefined') { aui.buttons = {}; }


aui.buttons.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.href) {
    output.append('<a href="', soy.$$escapeHtml(opt_data.href), '"');
    aui.buttons.buttonAttributes(soy.$$augmentData(opt_data, {tagName: 'a'}), output);
    output.append('>');
    aui.buttons.buttonIcon(opt_data, output);
    output.append((opt_data.hasLabel) ? '<span class="aui-button-label">' : '', soy.$$escapeHtml(opt_data.text), (opt_data.hasLabel) ? '</span>' : '', '</a>');
  } else if (opt_data.tagName == 'input') {
    output.append('<input type="', soy.$$escapeHtml(opt_data.inputType ? opt_data.inputType : 'button'), '" ');
    aui.buttons.buttonAttributes(opt_data, output);
    output.append(' value="', soy.$$escapeHtml(opt_data.text), '" />');
  } else {
    var theTagName__soy29 = opt_data.tagName ? opt_data.tagName : 'button';
    output.append('<', soy.$$escapeHtml(theTagName__soy29));
    aui.buttons.buttonAttributes(soy.$$augmentData(opt_data, {tagName: theTagName__soy29}), output);
    output.append('>');
    aui.buttons.buttonIcon(opt_data, output);
    output.append((opt_data.hasLabel) ? '<span class="aui-button-label">' : '', soy.$$escapeHtml(opt_data.text), (opt_data.hasLabel) ? '</span>' : '', '</', soy.$$escapeHtml(theTagName__soy29), '>');
  }
  return opt_sb ? '' : output.toString();
};


aui.buttons.buttons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-buttons');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.buttons.buttonAttributes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-button', (opt_data.splitButtonType == 'main') ? ' aui-button-split-main' : '', (opt_data.dropdown2Target) ? ' aui-dropdown2-trigger' + ((opt_data.splitButtonType == 'more') ? ' aui-button-split-more' : '') : '');
  switch (opt_data.type) {
    case 'primary':
      output.append(' aui-button-primary');
      break;
    case 'link':
      output.append(' aui-button-link');
      break;
    case 'subtle':
      output.append(' aui-button-subtle');
      break;
  }
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append((opt_data.isPressed) ? ' aria-pressed="' + soy.$$escapeHtml(opt_data.isPressed) + '"' : '', (opt_data.isDisabled) ? ' aria-disabled="' + soy.$$escapeHtml(opt_data.isDisabled) + '"' + ((opt_data.isDisabled == true) ? (opt_data.tagName == 'button' || opt_data.tagName == 'input') ? ' disabled="disabled" ' : '' : '') : '', (opt_data.dropdown2Target) ? ' aria-owns="' + soy.$$escapeHtml(opt_data.dropdown2Target) + '" aria-haspopup="true"' : '', (opt_data.tagName == 'a') ? ' tabindex="0"' : '');
  return opt_sb ? '' : output.toString();
};


aui.buttons.buttonIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.iconType) ? '<span class="' + ((opt_data.iconType == 'aui') ? 'aui-icon' : '') + ((opt_data.iconClass) ? ' ' + soy.$$escapeHtml(opt_data.iconClass) : '') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) + ' ' : '') + '</span>' : '');
  return opt_sb ? '' : output.toString();
};


aui.buttons.splitButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.buttons.button(soy.$$augmentData(opt_data.splitButtonMain, {splitButtonType: 'main'}), output);
  aui.buttons.button(soy.$$augmentData(opt_data.splitButtonMore, {splitButtonType: 'more'}), output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/dropdown.soy' */
// This file was automatically generated from dropdown.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dropdown == 'undefined') { aui.dropdown = {}; }


aui.dropdown.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dd-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><span class="dropdown-text">', (opt_data.accessibilityText) ? soy.$$escapeHtml(opt_data.accessibilityText) : '', '</span>', (! (opt_data.showIcon == false)) ? '<span class="icon icon-dropdown"></span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown.menu = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown hidden');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown.parent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dd-parent');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="dropdown-item');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><a href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '">', soy.$$escapeHtml(opt_data.text), '</a></', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/dropdown2.soy' */
// This file was automatically generated from dropdown2.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dropdown2 == 'undefined') { aui.dropdown2 = {}; }


aui.dropdown2.dropdown2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dropdown2.trigger(soy.$$augmentData(opt_data.trigger, {menu: opt_data.menu}), output);
  aui.dropdown2.contents(opt_data.menu, output);
  return opt_sb ? '' : output.toString();
};


aui.dropdown2.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param7 = new soy.StringBuilder('aui-dropdown2-trigger');
  aui.renderExtraClasses(opt_data, param7);
  aui.trigger.trigger(soy.$$augmentData(opt_data, {extraClasses: param7.toString()}), output);
  return opt_sb ? '' : output.toString();
};


aui.dropdown2.contents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="', soy.$$escapeHtml(opt_data.id), '" class="aui-dropdown2');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', '</div>');
  return opt_sb ? '' : output.toString();
};


aui.dropdown2.section = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dropdown2-section');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.label) ? '<strong>' + soy.$$escapeHtml(opt_data.label) + '</strong>' : '', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/form.soy' */
// This file was automatically generated from form.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.form == 'undefined') { aui.form = {}; }


aui.form.form = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui', (opt_data.isUnsectioned) ? ' unsectioned' : '', (opt_data.isLongLabels) ? ' long-label' : '', (opt_data.isTopLabels) ? ' top-label' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('" action="', soy.$$escapeHtml(opt_data.action), '" method="', soy.$$escapeHtml(opt_data.method ? opt_data.method : 'post'), '"', (opt_data.enctype) ? ' enctype="' + soy.$$escapeHtml(opt_data.enctype) + '"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</form>');
  return opt_sb ? '' : output.toString();
};


aui.form.formDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldset = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var hasClass__soy51 = opt_data.isInline || opt_data.isDateSelect || opt_data.isGroup || opt_data.extraClasses;
  output.append('<fieldset', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  if (hasClass__soy51) {
    output.append(' class="', soy.$$escapeHtml(opt_data.isInline ? 'inline' : opt_data.isDateSelect ? 'date-select' : opt_data.isGroup ? 'group' : ''));
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
  }
  aui.renderExtraAttributes(opt_data, output);
  output.append('><legend><span>', opt_data.legendContent, '</span></legend>', opt_data.content, '</fieldset>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.buttons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="buttons-container', (opt_data.alignment) ? ' ' + soy.$$escapeHtml(opt_data.alignment) : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><div class="buttons">', opt_data.content, '</div></div>');
  return opt_sb ? '' : output.toString();
};


aui.form.label = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<label', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.forField) ? ' for="' + soy.$$escapeHtml(opt_data.forField) + '"' : '');
  if (opt_data.extraClasses) {
    output.append(' class="');
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
  }
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label>');
  return opt_sb ? '' : output.toString();
};


aui.form.input = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var baseType__soy126 = new soy.StringBuilder();
  switch (opt_data.type) {
    case 'password':
    case 'email':
    case 'url':
    case 'tel':
    case 'search':
      baseType__soy126.append('text');
      break;
    case 'submit':
    case 'reset':
      baseType__soy126.append('button');
      break;
    default:
      baseType__soy126.append(soy.$$escapeHtml(opt_data.type));
  }
  baseType__soy126 = baseType__soy126.toString();
  output.append('<input class="', soy.$$escapeHtml(baseType__soy126));
  aui.renderExtraClasses(opt_data, output);
  output.append((opt_data.icon && baseType__soy126 == 'text') ? ' aui-field-has-icon' : '', '" type="', soy.$$escapeHtml(opt_data.type), '" name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.value) ? ' value="' + soy.$$escapeHtml(opt_data.value) + '"' : '', ((opt_data.type == 'checkbox' || opt_data.type == 'radio') && opt_data.isChecked) ? ' checked="checked"' : '', (baseType__soy126 == 'text' && opt_data.type != 'password' && opt_data.maxLength) ? ' maxlength="' + soy.$$escapeHtml(opt_data.maxLength) + '"' : '', (baseType__soy126 == 'text' && opt_data.type != 'password' && opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '', (baseType__soy126 == 'text' && opt_data.placeholderText) ? ' placeholder="' + soy.$$escapeHtml(opt_data.placeholderText) + '"' : '', (baseType__soy126 == 'text' && opt_data.autocomplete) ? ' autocomplete="' + soy.$$escapeHtml(opt_data.autocomplete) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '', (opt_data.isAutofocus) ? ' autofocus' : '');
  aui.renderExtraAttributes(opt_data, output);
  aui.form.renderValidationArguments(opt_data, output);
  aui.form.renderInfoMessage(opt_data, output);
  aui.form.renderFieldComponentAttribute(opt_data, output);
  aui.form.renderTooltipArguments(opt_data, output);
  output.append('/>');
  if (opt_data.icon && baseType__soy126 == 'text') {
    aui.icons.icon({icon: opt_data.icon, useIconFont: true, size: 'small'}, output);
  }
  return opt_sb ? '' : output.toString();
};


aui.form.renderValidationArguments = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.validationArguments) {
    var argumentList203 = soy.$$getMapKeys(opt_data.validationArguments);
    var argumentListLen203 = argumentList203.length;
    for (var argumentIndex203 = 0; argumentIndex203 < argumentListLen203; argumentIndex203++) {
      var argumentData203 = argumentList203[argumentIndex203];
      output.append(' ', soy.$$escapeHtml('data-aui-validation-' + argumentData203), '="', soy.$$escapeHtml(opt_data.validationArguments[argumentData203]), '"');
    }
  }
  return opt_sb ? '' : output.toString();
};


aui.form.renderTooltipArguments = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.tooltipArguments) {
    var argumentList213 = soy.$$getMapKeys(opt_data.tooltipArguments);
    var argumentListLen213 = argumentList213.length;
    for (var argumentIndex213 = 0; argumentIndex213 < argumentListLen213; argumentIndex213++) {
      var argumentData213 = argumentList213[argumentIndex213];
      output.append(' ', soy.$$escapeHtml('data-aui-notification-' + argumentData213), '="', soy.$$escapeHtml(opt_data.tooltipArguments[argumentData213]), '"');
    }
  }
  return opt_sb ? '' : output.toString();
};


aui.form.renderInfoMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.infoMessage) ? ' data-aui-notification-info="' + soy.$$escapeHtml(opt_data.infoMessage) + '"' : '');
  return opt_sb ? '' : output.toString();
};


aui.form.renderFieldComponentAttribute = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.infoMessage) ? ' data-aui-notification-field' : '', (opt_data.validationArguments) ? ' data-aui-validation-field' : '');
  return opt_sb ? '' : output.toString();
};


aui.form.submit = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.button(soy.$$augmentData(opt_data, {tagName: 'input', inputType: 'submit'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param243 = new soy.StringBuilder((opt_data.name) ? 'name="' + soy.$$escapeHtml(opt_data.name) + '"' : '');
  aui.renderExtraAttributes(opt_data, param243);
  aui.buttons.button(soy.$$augmentData(opt_data, {extraClasses: opt_data.extraClasses, extraAttributes: param243.toString()}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.linkButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param256 = new soy.StringBuilder('cancel');
  aui.renderExtraClasses(opt_data, param256);
  var param260 = new soy.StringBuilder((opt_data.name) ? 'name="' + soy.$$escapeHtml(opt_data.name) + '"' : '');
  aui.renderExtraAttributes(opt_data, param260);
  aui.buttons.button(soy.$$augmentData(opt_data, {tagName: 'a', type: 'link', href: opt_data.href ? opt_data.href : opt_data.url, extraClasses: param256.toString(), extraAttributes: param260.toString()}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.textarea = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<textarea name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '" class="textarea');
  aui.renderExtraClasses(opt_data, output);
  output.append(' ', (opt_data.icon) ? 'aui-field-has-icon' : '', '"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.rows) ? ' rows="' + soy.$$escapeHtml(opt_data.rows) + '"' : '', (opt_data.cols) ? ' cols="' + soy.$$escapeHtml(opt_data.cols) + '"' : '', (opt_data.autocomplete) ? ' autocomplete="' + soy.$$escapeHtml(opt_data.autocomplete) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '', (opt_data.isAutofocus) ? ' autofocus' : '', (opt_data.placeholderText) ? ' placeholder="' + soy.$$escapeHtml(opt_data.placeholderText) + '"' : '');
  aui.renderExtraAttributes(opt_data, output);
  aui.form.renderValidationArguments(opt_data, output);
  aui.form.renderInfoMessage(opt_data, output);
  aui.form.renderFieldComponentAttribute(opt_data, output);
  aui.form.renderTooltipArguments(opt_data, output);
  output.append('>', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '</textarea>');
  if (opt_data.icon) {
    aui.icons.icon({icon: opt_data.icon, useIconFont: true, size: 'small'}, output);
  }
  return opt_sb ? '' : output.toString();
};


aui.form.select = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<select', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id), '" class="', soy.$$escapeHtml(opt_data.isMultiple ? 'multi-select' : 'select'));
  aui.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '', (opt_data.isDisabled) ? ' disabled' : '', (opt_data.isAutofocus) ? ' autofocus' : '', (opt_data.isMultiple) ? ' multiple' : '');
  aui.renderExtraAttributes(opt_data, output);
  aui.form.renderValidationArguments(opt_data, output);
  aui.form.renderInfoMessage(opt_data, output);
  aui.form.renderFieldComponentAttribute(opt_data, output);
  aui.form.renderTooltipArguments(opt_data, output);
  output.append('>');
  var optionList367 = opt_data.options;
  var optionListLen367 = optionList367.length;
  for (var optionIndex367 = 0; optionIndex367 < optionListLen367; optionIndex367++) {
    var optionData367 = optionList367[optionIndex367];
    aui.form.optionOrOptgroup(soy.$$augmentData(optionData367, {defaultValue: opt_data.value}), output);
  }
  output.append('</select>');
  return opt_sb ? '' : output.toString();
};


aui.form.optionOrOptgroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.options) {
    output.append('<optgroup label="', soy.$$escapeHtml(opt_data.text), '"', (opt_data.disabled) ? ' disabled' : '', '>');
    var optionList382 = opt_data.options;
    var optionListLen382 = optionList382.length;
    for (var optionIndex382 = 0; optionIndex382 < optionListLen382; optionIndex382++) {
      var optionData382 = optionList382[optionIndex382];
      aui.form.optionOrOptgroup(soy.$$augmentData(optionData382, {defaultValue: opt_data.defaultValue}), output);
    }
    output.append('</optgroup>');
  } else {
    output.append('<option value="', soy.$$escapeHtml(opt_data.value), '"', (opt_data.selected || opt_data.defaultValue == opt_data.value) ? ' selected' : '', (opt_data.disabled) ? ' disabled' : '', '>', soy.$$escapeHtml(opt_data.text), '</option>');
  }
  return opt_sb ? '' : output.toString();
};


aui.form.value = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="field-value');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</span>');
  return opt_sb ? '' : output.toString();
};


aui.form.field = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var isCheckboxOrRadio__soy416 = opt_data.type == 'checkbox' || opt_data.type == 'radio';
  var fieldWidthClass__soy417 = opt_data.fieldWidth ? opt_data.fieldWidth + '-field' : '';
  output.append('<div class="', (isCheckboxOrRadio__soy416) ? soy.$$escapeHtml(opt_data.type) : 'field-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  if (opt_data.labelContent && ! isCheckboxOrRadio__soy416) {
    aui.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}, output);
  }
  switch (opt_data.type) {
    case 'textarea':
      aui.form.textarea({id: opt_data.id, name: opt_data.name, value: opt_data.value, rows: opt_data.rows, cols: opt_data.cols, autocomplete: opt_data.autocomplete, placeholderText: opt_data.placeholderText, isDisabled: opt_data.isDisabled ? true : false, isAutofocus: opt_data.isAutofocus, extraClasses: fieldWidthClass__soy417, icon: opt_data.icon, validationArguments: opt_data.validationArguments, infoMessage: opt_data.infoMessage, tooltipArguments: opt_data.tooltipArguments}, output);
      break;
    case 'select':
      aui.form.select({id: opt_data.id, name: opt_data.name, value: opt_data.value, options: opt_data.options, isMultiple: opt_data.isMultiple, size: opt_data.size, isDisabled: opt_data.isDisabled ? true : false, isAutofocus: opt_data.isAutofocus, extraClasses: fieldWidthClass__soy417, validationArguments: opt_data.validationArguments, infoMessage: opt_data.infoMessage, tooltipArguments: opt_data.tooltipArguments}, output);
      break;
    case 'value':
      aui.form.value({id: opt_data.id, content: soy.$$escapeHtml(opt_data.value)}, output);
      break;
    case 'text':
    case 'password':
    case 'email':
    case 'url':
    case 'tel':
    case 'search':
    case 'file':
    case 'radio':
    case 'checkbox':
    case 'button':
    case 'submit':
    case 'reset':
      aui.form.input({id: opt_data.id, name: opt_data.name, type: opt_data.type, value: opt_data.value, maxLength: opt_data.maxLength, size: opt_data.size, autocomplete: opt_data.autocomplete, placeholderText: opt_data.placeholderText, isChecked: opt_data.isChecked, isDisabled: opt_data.isDisabled ? true : false, isAutofocus: opt_data.isAutofocus, extraClasses: fieldWidthClass__soy417, icon: opt_data.icon, validationArguments: opt_data.validationArguments, infoMessage: opt_data.infoMessage, tooltipArguments: opt_data.tooltipArguments}, output);
      break;
  }
  if (opt_data.labelContent && isCheckboxOrRadio__soy416) {
    aui.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}, output);
  }
  if (opt_data.descriptionText || opt_data.descriptionContent) {
    aui.form.fieldDescription({text: opt_data.descriptionText, content: opt_data.descriptionContent}, output);
  }
  if (opt_data.errorTexts) {
    var errorList502 = opt_data.errorTexts;
    var errorListLen502 = errorList502.length;
    for (var errorIndex502 = 0; errorIndex502 < errorListLen502; errorIndex502++) {
      var errorData502 = errorList502[errorIndex502];
      aui.form.fieldError({message: errorData502}, output);
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="error');
  aui.renderExtraClasses(opt_data, output);
  output.append('">', soy.$$escapeHtml(opt_data.message), '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.fieldDescription = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="description');
  aui.renderExtraClasses(opt_data, output);
  output.append('">', (opt_data.text) ? soy.$$escapeHtml(opt_data.text) : (opt_data.message) ? soy.$$escapeHtml(opt_data.message) : opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.form.textField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'text'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.textareaField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'textarea'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.passwordField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'password'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.fileField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'file'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.selectField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'select'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.checkboxField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param547 = new soy.StringBuilder((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList551 = opt_data.fields;
  var fieldListLen551 = fieldList551.length;
  for (var fieldIndex551 = 0; fieldIndex551 < fieldListLen551; fieldIndex551++) {
    var fieldData551 = fieldList551[fieldIndex551];
    aui.form.field(soy.$$augmentData(fieldData551, {type: 'checkbox', labelContent: soy.$$escapeHtml(fieldData551.labelText)}), param547);
  }
  param547.append((opt_data.isMatrix) ? '</div>' : '');
  if (opt_data.descriptionText || opt_data.descriptionContent || opt_data.errorTexts && opt_data.errorTexts.length) {
    aui.form.field({descriptionText: opt_data.descriptionText, descriptionContent: opt_data.descriptionContent, errorTexts: opt_data.errorTexts, isDisabled: false}, param547);
  }
  aui.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param547.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.radioField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param574 = new soy.StringBuilder((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList578 = opt_data.fields;
  var fieldListLen578 = fieldList578.length;
  for (var fieldIndex578 = 0; fieldIndex578 < fieldListLen578; fieldIndex578++) {
    var fieldData578 = fieldList578[fieldIndex578];
    aui.form.field(soy.$$augmentData(fieldData578, {type: 'radio', name: opt_data.name ? opt_data.name : opt_data.id, labelContent: soy.$$escapeHtml(fieldData578.labelText)}), param574);
  }
  param574.append((opt_data.isMatrix) ? '</div>' : '');
  if (opt_data.descriptionText || opt_data.descriptionContent || opt_data.errorTexts && opt_data.errorTexts.length) {
    aui.form.field({descriptionText: opt_data.descriptionText, descriptionContent: opt_data.descriptionContent, errorTexts: opt_data.errorTexts, isDisabled: false}, param574);
  }
  aui.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param574.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.form.valueField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'value'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.emailField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'email'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.urlField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'url'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.telephoneField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'tel'}), output);
  return opt_sb ? '' : output.toString();
};


aui.form.searchField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.field(soy.$$augmentData(opt_data, {type: 'search'}), output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/group.soy' */
// This file was automatically generated from group.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.group == 'undefined') { aui.group = {}; }


aui.group.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-group', (opt_data.isSplit) ? ' aui-group-split' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.group.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-item');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/labels.soy' */
// This file was automatically generated from labels.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.labels == 'undefined') { aui.labels = {}; }


aui.labels.label = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.url && opt_data.isCloseable == true) {
    output.append('<span', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-label aui-label-closeable aui-label-split');
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
    aui.renderExtraAttributes(opt_data, output);
    output.append('><a class="aui-label-split-main" href="', soy.$$escapeHtml(opt_data.url), '">', soy.$$escapeHtml(opt_data.text), '</a><span class="aui-label-split-close" >');
    aui.labels.closeIcon(opt_data, output);
    output.append('</span></span>');
  } else {
    output.append('<', soy.$$escapeHtml(opt_data.url ? 'a' : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-label', (opt_data.isCloseable) ? ' aui-label-closeable' : '');
    aui.renderExtraClasses(opt_data, output);
    output.append('"');
    aui.renderExtraAttributes(opt_data, output);
    output.append((opt_data.url) ? ' href="' + soy.$$escapeHtml(opt_data.url) + '"' : '', '>', soy.$$escapeHtml(opt_data.text));
    if (opt_data.isCloseable) {
      aui.labels.closeIcon(opt_data, output);
    }
    output.append('</', soy.$$escapeHtml(opt_data.url ? 'a' : 'span'), '>');
  }
  return opt_sb ? '' : output.toString();
};


aui.labels.closeIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span tabindex="0" class="aui-icon aui-icon-close"');
  if (opt_data.hasTitle != false) {
    output.append(' title="');
    aui.labels.closeIconText(opt_data, output);
    output.append('"');
  }
  output.append('>');
  aui.labels.closeIconText(opt_data, output);
  output.append('</span>');
  return opt_sb ? '' : output.toString();
};


aui.labels.closeIconText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.closeIconText) ? soy.$$escapeHtml(opt_data.closeIconText) : '(' + soy.$$escapeHtml("Remove") + ' ' + soy.$$escapeHtml(opt_data.text) + ')');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/message.soy' */
// This file was automatically generated from message.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.message == 'undefined') { aui.message = {}; }


aui.message.info = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'info'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.warning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'warning'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'error'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.success = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'success'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.hint = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'hint'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.generic = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.message(soy.$$augmentData(opt_data, {type: 'generic'}), output);
  return opt_sb ? '' : output.toString();
};


aui.message.message = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var theTagName__soy21 = opt_data.tagName ? opt_data.tagName : 'div';
  var theType__soy22 = opt_data.type ? opt_data.type : 'generic';
  output.append('<', soy.$$escapeHtml(theTagName__soy21), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-message aui-message-', soy.$$escapeHtml(theType__soy22), ' ', soy.$$escapeHtml(theType__soy22), (opt_data.isCloseable) ? ' closeable' : '', (opt_data.isShadowed) ? ' shadowed' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.titleContent) ? '<p class="title"><strong>' + opt_data.titleContent + '</strong></p>' : '', opt_data.content, (opt_data.isCloseable) ? '<span class="aui-icon icon-close" role="button" tabindex="0"></span>' : '', '</', soy.$$escapeHtml(theTagName__soy21), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/page.soy' */
// This file was automatically generated from page.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.page == 'undefined') { aui.page = {}; }


aui.page.document = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<!DOCTYPE html><html lang="', soy.$$escapeHtml(opt_ijData.language ? opt_ijData.language : 'en'), '">');
  aui.page.documentHTMLContent(opt_data, output, opt_ijData);
  output.append('</html>');
  return opt_sb ? '' : output.toString();
};


aui.page.documentHTMLContent = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  var thePageSize__soy9 = opt_data.pageSize ? opt_data.pageSize : opt_data.focusedPageSize ? opt_data.focusedPageSize : 'xlarge';
  output.append('<head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>', soy.$$escapeHtml(opt_data.windowTitle), '</title>', (opt_data.headContent) ? opt_data.headContent : '', '</head><body');
  if (opt_data.pageType) {
    if (opt_data.pageType == 'generic') {
      if (opt_data.extraClasses) {
        output.append(' class="');
        aui.renderExtraClasses(opt_data, output, opt_ijData);
        output.append('"');
      }
    } else if (opt_data.pageType == 'focused') {
      output.append(' class="aui-page-focused aui-page-focused-', soy.$$escapeHtml(thePageSize__soy9), ' aui-page-size-', soy.$$escapeHtml(thePageSize__soy9));
      aui.renderExtraClasses(opt_data, output, opt_ijData);
      output.append('"');
    } else if (opt_data.pageType == 'notification') {
      output.append(' class="aui-page-notification aui-page-size-', soy.$$escapeHtml(thePageSize__soy9));
      aui.renderExtraClasses(opt_data, output, opt_ijData);
      output.append('"');
    } else if (opt_data.pageType == 'sidebar') {
      output.append(' class="aui-page-sidebar', soy.$$escapeHtml(opt_data.sidebarState ? ' aui-sidebar-' + opt_data.sidebarState : ''));
      aui.renderExtraClasses(opt_data, output, opt_ijData);
      output.append('"');
    } else {
      output.append(' class="aui-page-', soy.$$escapeHtml(opt_data.pageType));
      aui.renderExtraClasses(opt_data, output, opt_ijData);
      output.append('"');
    }
  } else {
    output.append(' class="');
    aui.renderExtraClasses(opt_data, output, opt_ijData);
    output.append('"');
  }
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</body>');
  return opt_sb ? '' : output.toString();
};


aui.page.page = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="page"><header id="header" role="banner">', opt_data.headerContent, '</header><!-- #header --><section id="content" role="main">', opt_data.contentContent, '</section><!-- #content --><footer id="footer" role="contentinfo">', opt_data.footerContent, '</footer><!-- #footer --></div><!-- #page -->');
  return opt_sb ? '' : output.toString();
};


aui.page.header = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.bannerContent) ? '<div class="aui-banner aui-banner-error" role="banner">' + opt_data.bannerContent + '</div>' : '', '<nav', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-header aui-dropdown2-trigger-group');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append(' role="navigation"><div class="aui-header-inner">', (opt_data.headerBeforeContent) ? '<div class="aui-header-before">' + opt_data.headerBeforeContent + '</div>' : '', '<div class="aui-header-primary"><h1 id="logo" class="aui-header-logo', (opt_data.headerLogoImageUrl) ? ' aui-header-logo-custom' : (opt_data.logo) ? ' aui-header-logo-' + soy.$$escapeHtml(opt_data.logo) : '', '"><a href="', soy.$$escapeHtml(opt_data.headerLink ? opt_data.headerLink : '/'), '">', (opt_data.headerLogoImageUrl) ? '<img src="' + soy.$$escapeHtml(opt_data.headerLogoImageUrl) + '" alt="' + soy.$$escapeHtml(opt_data.headerLogoText) + '" />' : '<span class="aui-header-logo-device">' + soy.$$escapeHtml(opt_data.headerLogoText ? opt_data.headerLogoText : '') + '</span>', (opt_data.headerText) ? '<span class="aui-header-logo-text">' + soy.$$escapeHtml(opt_data.headerText) + '</span>' : '', '</a></h1>', (opt_data.primaryNavContent) ? opt_data.primaryNavContent : '', '</div>', (opt_data.secondaryNavContent) ? '<div class="aui-header-secondary">' + opt_data.secondaryNavContent + '</div>' : '', (opt_data.headerAfterContent) ? '<div class="aui-header-after">' + opt_data.headerAfterContent + '</div>' : '', '</div><!-- .aui-header-inner--></nav><!-- .aui-header -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanel = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), ' class="aui-page-panel');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('><div class="aui-page-panel-inner">', opt_data.content, '</div><!-- .aui-page-panel-inner --></', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '><!-- .aui-page-panel -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelNav = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), ' class="aui-page-panel-nav');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '><!-- .aui-page-panel-nav -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelContent = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), ' class="aui-page-panel-content');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '><!-- .aui-page-panel-content -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelSidebar = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside'), ' class="aui-page-panel-sidebar');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside'), '><!-- .aui-page-panel-sidebar -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pagePanelItem = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), ' class="aui-page-panel-item');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '><!-- .aui-page-panel-item -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeader = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header class="aui-page-header');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('><div class="aui-page-header-inner">', opt_data.content, '</div><!-- .aui-page-header-inner --></header><!-- .aui-page-header -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeaderImage = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-image');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-image -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeaderMain = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-main');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-main -->');
  return opt_sb ? '' : output.toString();
};


aui.page.pageHeaderActions = function(opt_data, opt_sb, opt_ijData) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-header-actions');
  aui.renderExtraClasses(opt_data, output, opt_ijData);
  output.append('"', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  aui.renderExtraAttributes(opt_data, output, opt_ijData);
  output.append('>', opt_data.content, '</div><!-- .aui-page-header-actions -->');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/panel.soy' */
// This file was automatically generated from panel.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.panel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-panel');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/table.soy' */
// This file was automatically generated from table.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.table = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.columnsContent) ? opt_data.columnsContent : '', (opt_data.captionContent) ? '<caption>' + opt_data.captionContent + '</caption>' : '', (opt_data.theadContent) ? '<thead>' + opt_data.theadContent + '</thead>' : '', (opt_data.tfootContent) ? '<tfoot>' + opt_data.tfootContent + '</tfoot>' : '', (! opt_data.contentIncludesTbody) ? '<tbody>' : '', opt_data.content, (! opt_data.contentIncludesTbody) ? '</tbody>' : '', '</table>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/tabs.soy' */
// This file was automatically generated from tabs.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }


aui.tabs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-tabs ', soy.$$escapeHtml(opt_data.isVertical ? 'vertical-tabs' : 'horizontal-tabs'), (opt_data.isDisabled) ? ' aui-tabs-disabled' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><ul class="tabs-menu">');
  var itemList19 = opt_data.menuItems;
  var itemListLen19 = itemList19.length;
  for (var itemIndex19 = 0; itemIndex19 < itemListLen19; itemIndex19++) {
    var itemData19 = itemList19[itemIndex19];
    aui.tabMenuItem(itemData19, output);
  }
  output.append('</ul>', opt_data.paneContent, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.tabMenuItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="menu-item', (opt_data.isActive) ? ' active-tab' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><a href="', soy.$$escapeHtml(opt_data.url), '"><strong>', soy.$$escapeHtml(opt_data.text), '</strong></a></li>');
  return opt_sb ? '' : output.toString();
};


aui.tabPane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="tabs-pane', (opt_data.isActive) ? ' active-pane' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/trigger.soy' */
// This file was automatically generated from trigger.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.trigger == 'undefined') { aui.trigger = {}; }


aui.trigger.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="');
  aui.renderExtraClasses(opt_data, output);
  output.append('" aria-owns="', soy.$$escapeHtml(opt_data.menu.id), '" aria-controls="', soy.$$escapeHtml(opt_data.menu.id), '" aria-haspopup="true"', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', (opt_data.container) ? ' data-container="' + soy.$$escapeHtml(opt_data.container) + '"' : '', ((! opt_data.tagName || opt_data.tagName == 'a') && (! opt_data.extraAttributes || Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]' && ! opt_data.extraAttributes.href && ! opt_data.extraAttributes.tabindex)) ? ' tabindex="0"' : '', ' data-aui-trigger');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', (opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', (! (opt_data.showIcon == false)) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClasses ? opt_data.iconClasses : 'aui-icon-dropdown') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) : '') + '</span>' : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/toolbar.soy' */
// This file was automatically generated from toolbar.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.toolbar == 'undefined') { aui.toolbar = {}; }


aui.toolbar.toolbar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.split = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-split toolbar-split-', soy.$$escapeHtml(opt_data.split));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</ul>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li ', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-item', (opt_data.isPrimary) ? ' primary' : '', (opt_data.isActive) ? ' active' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</li>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="toolbar-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('" href="', soy.$$escapeHtml(opt_data.url ? opt_data.url : '#'), '"', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</a>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! (opt_data != null)) {
    output.append('Either $text or both $title and $iconClass must be provided.');
  } else {
    var param107 = new soy.StringBuilder();
    aui.toolbar.trigger({url: opt_data.url, title: opt_data.title, content: ((opt_data.iconClass) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClass) + '"></span>' : '') + ((opt_data.text) ? '<span class="trigger-text">' + soy.$$escapeHtml(opt_data.text) + '</span>' : '')}, param107);
    aui.toolbar.item({isActive: opt_data.isActive, isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param107.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


aui.toolbar.link = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param125 = new soy.StringBuilder('toolbar-item-link');
  aui.renderExtraClasses(opt_data, param125);
  var param129 = new soy.StringBuilder();
  aui.toolbar.trigger({url: opt_data.url, content: soy.$$escapeHtml(opt_data.text)}, param129);
  aui.toolbar.item({id: opt_data.id, extraClasses: param125.toString(), extraAttributes: opt_data.extraAttributes, content: param129.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.toolbar.dropdownInternal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param138 = new soy.StringBuilder(opt_data.itemClass);
  aui.renderExtraClasses(opt_data, param138);
  var param143 = new soy.StringBuilder((opt_data.splitButtonContent) ? opt_data.splitButtonContent : '');
  var param148 = new soy.StringBuilder();
  aui.dropdown.trigger({extraClasses: 'toolbar-trigger', accessibilityText: opt_data.text}, param148);
  aui.dropdown.menu({content: opt_data.dropdownItemsContent}, param148);
  aui.dropdown.parent({content: param148.toString()}, param143);
  aui.toolbar.item({isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: param138.toString(), extraAttributes: opt_data.extraAttributes, content: param143.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.toolbar.dropdown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-dropdown', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, text: opt_data.text, dropdownItemsContent: opt_data.dropdownItemsContent}, output);
  return opt_sb ? '' : output.toString();
};


aui.toolbar.splitButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param172 = new soy.StringBuilder();
  aui.toolbar.trigger({url: opt_data.url, content: soy.$$escapeHtml(opt_data.text)}, param172);
  aui.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-splitbutton', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, dropdownItemsContent: opt_data.dropdownItemsContent, splitButtonContent: param172.toString()}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/toolbar2.soy' */
// This file was automatically generated from toolbar2.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.toolbar2 == 'undefined') { aui.toolbar2 = {}; }


aui.toolbar2.toolbar2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append(' role="toolbar"><div class="aui-toolbar2-inner">', opt_data.content, '</div></div>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar2.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2-', soy.$$escapeHtml(opt_data.item));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


aui.toolbar2.group = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-toolbar2-group');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/progress-tracker.soy' */
// This file was automatically generated from progress-tracker.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.progressTracker == 'undefined') { aui.progressTracker = {}; }


aui.progressTracker.progressTracker = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-progress-tracker', (opt_data.isInverted) ? ' aui-progress-tracker-inverted' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  var param18 = new soy.StringBuilder();
  var currentStepList19 = opt_data.steps;
  var currentStepListLen19 = currentStepList19.length;
  for (var currentStepIndex19 = 0; currentStepIndex19 < currentStepListLen19; currentStepIndex19++) {
    var currentStepData19 = currentStepList19[currentStepIndex19];
    if (currentStepData19['isCurrent']) {
      var stepList22 = opt_data.steps;
      var stepListLen22 = stepList22.length;
      for (var stepIndex22 = 0; stepIndex22 < stepListLen22; stepIndex22++) {
        var stepData22 = stepList22[stepIndex22];
        aui.progressTracker.step(soy.$$augmentData(stepData22, {width: Math.round(100 / opt_data.steps.length * 10000) / 10000, href: stepIndex22 < currentStepIndex19 ? stepData22['href'] : null}), param18);
      }
    }
  }
  aui.progressTracker.content({steps: opt_data.steps, content: param18.toString()}, output);
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


aui.progressTracker.content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.content != '') {
    output.append(opt_data.content);
  } else {
    var stepList36 = opt_data.steps;
    var stepListLen36 = stepList36.length;
    for (var stepIndex36 = 0; stepIndex36 < stepListLen36; stepIndex36++) {
      var stepData36 = stepList36[stepIndex36];
      aui.progressTracker.step(soy.$$augmentData(stepData36, {isCurrent: stepIndex36 == 0, width: Math.round(100 / opt_data.steps.length * 10000) / 10000, href: null}), output);
    }
  }
  return opt_sb ? '' : output.toString();
};


aui.progressTracker.step = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-progress-tracker-step', (opt_data.isCurrent) ? ' aui-progress-tracker-step-current' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('" style="width: ', soy.$$escapeHtml(opt_data.width), '%;"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><', soy.$$escapeHtml(opt_data.href ? 'a' : 'span'), (opt_data.href) ? ' href="' + soy.$$escapeHtml(opt_data.href) + '"' : '', '>', soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.href ? 'a' : 'span'), '></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/expander.soy' */
// This file was automatically generated from expander.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.expander == 'undefined') { aui.expander = {}; }


aui.expander.content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="', soy.$$escapeHtml(opt_data.id), '" class="aui-expander-content');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append((opt_data.initiallyExpanded) ? ' aria-expanded="' + soy.$$escapeHtml(opt_data.initiallyExpanded) + '"' : '', '>', (opt_data.content) ? opt_data.content : '', '</div>');
  return opt_sb ? '' : output.toString();
};


aui.expander.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tag ? opt_data.tag : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.replaceText) ? ' data-replace-text="' + soy.$$escapeHtml(opt_data.replaceText) + '"' : '', (opt_data.replaceSelector) ? ' data-replace-selector="' + soy.$$escapeHtml(opt_data.replaceSelector) + '"' : '', ' class="aui-expander-trigger');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append(' aria-controls="', soy.$$escapeHtml(opt_data.contentId), '"', (opt_data.collapsible) ? ' data-collapsible="' + soy.$$escapeHtml(opt_data.collapsible) + '"' : '', '>', (opt_data.content) ? opt_data.content : '', '</', soy.$$escapeHtml(opt_data.tag ? opt_data.tag : 'div'), '>');
  return opt_sb ? '' : output.toString();
};


aui.expander.revealText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param60 = new soy.StringBuilder(soy.$$escapeHtml(opt_data.contentContent));
  aui.expander.trigger({id: opt_data.triggerId, contentId: opt_data.contentId, tag: 'a', content: '<span class=\'reveal-text-trigger-text\'>Show more</span>', replaceSelector: '.reveal-text-trigger-text', replaceText: 'Show less', extraAttributes: opt_data.triggerExtraAttributes, extraClasses: ((opt_data.triggerExtraClasses) ? soy.$$escapeHtml(opt_data.triggerExtraClasses) + '  ' : '') + ' aui-expander-reveal-text'}, param60);
  aui.expander.content({id: opt_data.contentId, content: param60.toString(), extraAttributes: opt_data.contentExtraAttributes, extraClasses: opt_data.contentExtraClasses}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/avatar.soy' */
// This file was automatically generated from avatar.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.avatar == 'undefined') { aui.avatar = {}; }


aui.avatar.avatar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-avatar aui-avatar-', soy.$$escapeHtml(opt_data.size), soy.$$escapeHtml(opt_data.isProject ? ' aui-avatar-project' : ''), soy.$$escapeHtml(opt_data.badgeContent ? ' aui-avatar-badged' : ''));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><span class="aui-avatar-inner"><img src="', soy.$$escapeHtml(opt_data.avatarImageUrl), '"', (opt_data.accessibilityText) ? ' alt="' + soy.$$escapeHtml(opt_data.accessibilityText) + '"' : '', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', (opt_data.imageClasses) ? ' class="' + soy.$$escapeHtml(opt_data.imageClasses) + '"' : '', ' /></span>', (opt_data.badgeContent) ? opt_data.badgeContent : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.icons == 'undefined') { aui.icons = {}; }


aui.icons.icon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-icon', (opt_data.useIconFont) ? ' aui-icon-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'small') : '', ' aui', soy.$$escapeHtml(opt_data.useIconFont ? '-iconfont' : '-icon'), soy.$$escapeHtml(opt_data.iconFontSet ? '-' + opt_data.iconFontSet : ''), '-', soy.$$escapeHtml(opt_data.icon));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.accessibilityText) ? soy.$$escapeHtml(opt_data.accessibilityText) : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/lozenges.soy' */
// This file was automatically generated from lozenges.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.lozenges == 'undefined') { aui.lozenges = {}; }


aui.lozenges.lozenge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', ' class="aui-lozenge', soy.$$escapeHtml(opt_data.type ? ' aui-lozenge-' + opt_data.type : ''), soy.$$escapeHtml(opt_data.isSubtle ? ' aui-lozenge-subtle' : ''));
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.maxLength) ? soy.$$truncate(soy.$$escapeHtml(opt_data.text), opt_data.maxLength, true) : soy.$$escapeHtml(opt_data.text), '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'soy/sidebar.soy' */
// This file was automatically generated from sidebar.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.sidebar == 'undefined') { aui.sidebar = {}; }


aui.sidebar.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.state) ? ' aria-expanded="' + ((opt_data.state == 'collapsed') ? 'false' : 'true') + '"' : '', ' class="aui-sidebar ', (opt_data.isAnimated) ? 'aui-is-animated' : '');
  aui.renderExtraClasses(opt_data, output);
  output.append('" ', (opt_data.isResponsive == false) ? 'data-aui-responsive="false"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><div class="aui-sidebar-wrapper"><div class="aui-sidebar-body">', opt_data.headerContent, opt_data.content, '</div><div class="aui-sidebar-footer">', (opt_data.footerContent) ? opt_data.footerContent : (opt_data.settingsButtonUrl && opt_data.settingsText) ? '<a href="' + soy.$$escapeHtml(opt_data.settingsButtonUrl) + '" class="aui-button aui-button-subtle aui-sidebar-settings-button' + ((opt_data.isSettingsButtonSelected) ? ' aui-sidebar-settings-selected' : '') + '" data-tooltip="' + soy.$$escapeHtml(opt_data.settingsTooltip ? opt_data.settingsTooltip : opt_data.settingsText) + '"><span class="aui-icon aui-icon-small aui-iconfont-configure"></span><span class="aui-button-label">' + soy.$$escapeHtml(opt_data.settingsText) + '</span></a>' : '', '<a class="aui-button aui-button-subtle aui-sidebar-toggle aui-sidebar-footer-tipsy" data-tooltip="', soy.$$escapeHtml("Expand sidebar ( [ )"), '" href="#"><span class="aui-icon aui-icon-small"></span></a></div>', (opt_data.isResizable) ? '<div class="aui-sidebar-handle"></div>' : '', '</div></', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-events/events.js' */
(function(A){AJS.triggerEvt=function(C,B){A(AJS).trigger(C,B)};AJS.bindEvt=function(B,C){A(AJS).bind(B,C)};AJS.triggerEvtForInst=function(B,D,C){A(D).trigger(B,C);AJS.triggerEvt(B,C);if(D.id){AJS.triggerEvt(D.id+"_"+B,C)}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js-vendor/jquery/serializetoobject.js' */
jQuery.fn.serializeObject=function(){var A={};this.find(":input:not(:button):not(:submit):not(:radio):not('select[multiple]')").each(function(){if(this.name===""){return }if(this.value===null){this.value=""}A[this.name]=this.value.match(/^(tru|fals)e$/i)?this.value.toLowerCase()=="true":this.value});this.find("input:radio:checked").each(function(){A[this.name]=this.value});this.find("select[multiple]").each(function(){var B=jQuery(this),C=B.val();if(B.data("aui-ss")){if(C){A[this.name]=C[0]}else{A[this.name]=""}}else{if(C!==null){A[this.name]=C}else{A[this.name]=[]}}});return A};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.js' */
(function(B){AJS.RestfulTable=Backbone.View.extend({initialize:function(D){var C=this;C.options=B.extend(true,C._getDefaultOptions(D),D);C.id=this.options.id;C._event=AJS.RestfulTable.Events;C.classNames=AJS.RestfulTable.ClassNames;C.dataKeys=AJS.RestfulTable.DataKeys;this.$table=B(D.el).addClass(this.classNames.RESTFUL_TABLE).addClass(this.classNames.ALLOW_HOVER).addClass("aui").addClass(C.classNames.LOADING);this.$table.wrapAll("<form class='aui' action='#' />");this.$thead=B("<thead/>");this.$theadRow=B("<tr />").appendTo(this.$thead);this.$tbody=B("<tbody/>");if(!this.$table.length){throw new Error("AJS.RestfulTable: Init failed! The table you have specified ["+this.$table.selector+"] cannot be found.")}if(!this.options.columns){throw new Error("AJS.RestfulTable: Init failed! You haven't provided any columns to render.")}this.showGlobalLoading();B.each(this.options.columns,function(E,F){var G=B.isFunction(F.header)?F.header():F.header;if(typeof G==="undefined"){AJS.warn("You have not specified [header] for column ["+F.id+"]. Using id for now...");G=F.id}C.$theadRow.append("<th>"+G+"</th>")});C.$theadRow.append("<th></th><th></th>");this._models=this._createCollection();this._rowClass=this.options.views.row;this.editRows=[];this.$table.closest("form").submit(function(E){if(C.focusedRow){C.focusedRow.trigger(C._event.SAVE)}E.preventDefault()});if(this.options.allowReorder){this.$theadRow.prepend("<th />");this.$tbody.sortable({handle:"."+this.classNames.DRAG_HANDLE,helper:function(G,E){var F=B("<div/>").attr("class",E.attr("class")).addClass(C.classNames.MOVEABLE);E.children().each(function(I){var L=B(this);var K=parseInt(0+L.css("border-left-width"),10);var H=parseInt(0+L.css("border-right-width"),10);var J=L[0].clientWidth+K+H;F.append(B("<div/>").html(L.html()).attr("class",L.attr("class")).width(J))});F=B("<div class='aui-restfultable-readonly'/>").append(F);F.css({left:E.offset().left});F.appendTo(document.body);return F},start:function(F,G){var E=G.helper[0].clientHeight;var H=G.placeholder.find("td");G.item.addClass(C.classNames.MOVEABLE).children().each(function(J){B(this).width(H.eq(J).width())});var I='<td colspan="'+C.getColumnCount()+'">&nbsp;</td>';G.placeholder.html(I).css({height:E,visibility:"visible"});C.getRowFromElement(G.item[0]).trigger(C._event.MODAL)},stop:function(E,F){if(AJS.$(F.item[0]).is(":visible")){F.item.removeClass(C.classNames.MOVEABLE).children().attr("style","");F.placeholder.removeClass(C.classNames.ROW);C.getRowFromElement(F.item[0]).trigger(C._event.MODELESS)}},update:function(G,I){var E,F,H={},J=C.getRowFromElement(I.item[0]);if(J){if(C.options.reverseOrder){F=I.item.next();if(!F.length){H.position="First"}else{E=C.getRowFromElement(F).model;H.after=E.url()}}else{F=I.item.prev();if(!F.length){H.position="First"}else{E=C.getRowFromElement(F).model;H.after=E.url()}}B.ajax({url:J.model.url()+"/move",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(H),complete:function(){J.hideLoading()},success:function(K){AJS.triggerEvtForInst(C._event.REORDER_SUCCESS,C,[K])},error:function(L){var K=B.parseJSON(L.responseText||L.data);AJS.triggerEvtForInst(C._event.SERVER_ERROR,C,[K,L,this])}});J.showLoading()}},axis:"y",delay:0,containment:"document",cursor:"move",scroll:true,zIndex:8000});this.$tbody.bind("selectstart mousedown",function(E){return !B(E.target).is("."+C.classNames.DRAG_HANDLE)})}if(this.options.allowCreate!==false){this._createRow=new this.options.views.editRow({columns:this.options.columns,isCreateRow:true,model:this.options.model.extend({url:function(){return C.options.resources.self}}),cancelAccessKey:this.options.cancelAccessKey,submitAccessKey:this.options.submitAccessKey,allowReorder:this.options.allowReorder,fieldFocusSelector:this.options.fieldFocusSelector}).bind(this._event.CREATED,function(E){if((C.options.addPosition==undefined&&C.options.createPosition==="bottom")||C.options.addPosition==="bottom"){C.addRow(E)}else{C.addRow(E,0)}}).bind(this._event.VALIDATION_ERROR,function(){this.trigger(C._event.FOCUS)}).render({errors:{},values:{}});this.$create=B('<tbody class="'+this.classNames.CREATE+'" />').append(this._createRow.el);this._applyFocusCoordinator(this._createRow);this._createRow.trigger(this._event.FOCUS)}this._models.bind("remove",function(E){B.each(C.getRows(),function(F,G){if(G.model===E){if(G.hasFocus()&&C._createRow){C._createRow.trigger(C._event.FOCUS)}C.removeRow(G)}})});if(B.isFunction(this.options.resources.all)){this.options.resources.all(function(E){C.populate(E)})}else{B.get(this.options.resources.all,function(E){C.populate(E)})}},_createCollection:function(){var C=this;var D=this.options.Collection.extend({sort:function(E){E||(E={});if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}this.tableRows=C.getRows();this.models=this.sortBy(this.comparator);this.tableRows=undefined;if(!E.silent){this.trigger("refresh",this,E)}return this},remove:function(F,E){this.tableRows=C.getRows();Backbone.Collection.prototype.remove.apply(this,arguments);this.tableRows=undefined;return this}});return new D([],{comparator:function(F){var E;B.each(this.tableRows!==undefined?this.tableRows:C.getRows(),function(G){if(this.model.id===F.id){E=G;return false}});return E}})},populate:function(C){if(this.options.reverseOrder){C.reverse()}this.hideGlobalLoading();if(C&&C.length){this._models.reset([],{silent:true});this.renderRows(C);if(this.isEmpty()){this.showNoEntriesMsg()}}else{this.showNoEntriesMsg()}this.$table.append(this.$thead);if(this.options.createPosition==="bottom"){this.$table.append(this.$tbody).append(this.$create)}else{this.$table.append(this.$create).append(this.$tbody)}this.$table.removeClass(this.classNames.LOADING).trigger(this._event.INITIALIZED,[this]);AJS.triggerEvtForInst(this._event.INITIALIZED,this,[this]);if(this.options.autoFocus){this.$table.find(":input:text:first").focus()}},showGlobalLoading:function(){if(!this.$loading){this.$loading=B('<div class="aui-restfultable-init">'+AJS.RestfulTable.throbber()+'<span class="aui-restfultable-loading">'+this.options.loadingMsg+"</span></div>")}if(!this.$loading.is(":visible")){this.$loading.insertAfter(this.$table)}return this},hideGlobalLoading:function(){if(this.$loading){this.$loading.remove()}return this},addRow:function(D,F){var C,E;if(!D.id){throw new Error("AJS.RestfulTable.addRow: to add a row values object must contain an id. Maybe you are not returning it from your restend point?Recieved:"+JSON.stringify(D))}E=new this.options.model(D);C=this._renderRow(E,F);this._models.add(E);this.removeNoEntriesMsg();AJS.triggerEvtForInst(this._event.ROW_ADDED,this,[C,this]);return this},removeRow:function(C){this._models.remove(C.model);C.remove();if(this.isEmpty()){this.showNoEntriesMsg()}AJS.triggerEvtForInst(this._event.ROW_REMOVED,this,[C,this])},isEmpty:function(){return this._models.length===0},getModels:function(){return this._models},getTable:function(){return this.$table},getTableBody:function(){return this.$tbody},getCreateRow:function(){return this._createRow},getColumnCount:function(){var C=2;if(this.allowReorder){++C}return this.options.columns.length+C},getRowFromElement:function(C){return B(C).data(this.dataKeys.ROW_VIEW)},showNoEntriesMsg:function(){if(this.$noEntries){this.$noEntries.remove()}this.$noEntries=B("<tr>").addClass(this.classNames.NO_ENTRIES).append(B("<td>").attr("colspan",this.getColumnCount()).text(this.options.noEntriesMsg)).appendTo(this.$tbody);return this},removeNoEntriesMsg:function(){if(this.$noEntries&&this._models.length>0){this.$noEntries.remove()}return this},getRows:function(){var C=this,D=[];this.$tbody.find("."+this.classNames.READ_ONLY).each(function(){var E=B(this),F=E.data(C.dataKeys.ROW_VIEW);if(F){D.push(F)}});return D},_renderRow:function(H,G){var D=this,F=this.$tbody.find("."+this.classNames.READ_ONLY),C,E;E=new this._rowClass({model:H,columns:this.options.columns,allowEdit:this.options.allowEdit,allowDelete:this.options.allowDelete,allowReorder:this.options.allowReorder,deleteConfirmation:this.options.deleteConfirmation});this.removeNoEntriesMsg();E.bind(this._event.ROW_EDIT,function(I){AJS.triggerEvtForInst(this._event.EDIT_ROW,{},[this,D]);D.edit(this,I)});C=E.render().$el;if(G!==-1){if(typeof G==="number"&&F.length!==0){C.insertBefore(F[G])}else{this.$tbody.append(C)}}C.data(this.dataKeys.ROW_VIEW,E);E.bind(this._event.MODAL,function(){D.$table.removeClass(D.classNames.ALLOW_HOVER);D.$tbody.sortable("disable");B.each(D.getRows(),function(){if(!D.isRowBeingEdited(this)){this.delegateEvents({})}})});E.bind(this._event.MODELESS,function(){D.$table.addClass(D.classNames.ALLOW_HOVER);D.$tbody.sortable("enable");B.each(D.getRows(),function(){if(!D.isRowBeingEdited(this)){this.delegateEvents()}})});this._applyFocusCoordinator(E);this.trigger(this._event.ROW_INITIALIZED,E);return E},isRowBeingEdited:function(D){var C=false;B.each(this.editRows,function(){if(this.el===D.el){C=true;return false}});return C},_applyFocusCoordinator:function(D){var C=this;if(!D.hasFocusBound){D.hasFocusBound=true;D.bind(this._event.FOCUS,function(){if(C.focusedRow&&C.focusedRow!==D){C.focusedRow.trigger(C._event.BLUR)}C.focusedRow=D;if(D instanceof AJS.RestfulTable.Row&&C._createRow){C._createRow.enable()}})}return this},_removeEditRow:function(D){var C=B.inArray(D,this.editRows);this.editRows.splice(C,1);return this},_shiftFocusAfterEdit:function(){if(this.editRows.length>0){this.editRows[this.editRows.length-1].trigger(this._event.FOCUS)}else{if(this._createRow){this._createRow.trigger(this._event.FOCUS)}}return this},_saveEditRowOnBlur:function(){return this.editRows.length<=1},dismissEditRows:function(){var C=this;B.each(this.editRows,function(){if(!this.hasUpdates()){this.trigger(C._event.FINISHED_EDITING)}})},edit:function(G,F){var C=this,E=new this.options.views.editRow({el:G.el,columns:this.options.columns,isUpdateMode:true,allowReorder:this.options.allowReorder,fieldFocusSelector:this.options.fieldFocusSelector,model:G.model,cancelAccessKey:this.options.cancelAccessKey,submitAccessKey:this.options.submitAccessKey}),D=G.model.toJSON();D.update=true;E.render({errors:{},update:true,values:D}).bind(C._event.UPDATED,function(H,I){C._removeEditRow(this);this.unbind();G.render().delegateEvents();G.trigger(C._event.UPDATED);if(I!==false){C._shiftFocusAfterEdit()}}).bind(C._event.VALIDATION_ERROR,function(){this.trigger(C._event.FOCUS)}).bind(C._event.FINISHED_EDITING,function(){C._removeEditRow(this);G.render().delegateEvents();this.unbind()}).bind(C._event.CANCEL,function(){C._removeEditRow(this);this.unbind();G.render().delegateEvents();C._shiftFocusAfterEdit()}).bind(C._event.BLUR,function(){C.dismissEditRows();if(C._saveEditRowOnBlur()){this.trigger(C._event.SAVE,false)}});this._applyFocusCoordinator(E);E.trigger(C._event.FOCUS,F);if(C._createRow){C._createRow.disable()}this.editRows.push(E);return E},renderRows:function(E){var C=this._models.comparator,D=[];this._models.comparator=undefined;var F=_.map(E,function(H){var G=new this.options.model(H);D.push(this._renderRow(G,-1).el);return G},this);this._models.add(F,{silent:true});this._models.comparator=C;this.removeNoEntriesMsg();this.$tbody.append(D);return this},_getDefaultOptions:function(C){return{model:C.model||AJS.RestfulTable.EntryModel,allowEdit:true,views:{editRow:AJS.RestfulTable.EditRow,row:AJS.RestfulTable.Row},Collection:Backbone.Collection.extend({url:C.resources.self,model:C.model||AJS.RestfulTable.EntryModel}),allowReorder:false,fieldFocusSelector:function(D){return":input[name="+D+"], #"+D},loadingMsg:C.loadingMsg||"Loading"}}});AJS.RestfulTable.throbber=function A(){return'<span class="aui-restfultable-throbber"></span>'};AJS.RestfulTable.throbber=function A(){return'<span class="aui-restfultable-throbber"></span>'};AJS.RestfulTable.DataKeys={ENABLED_SUBMIT:"enabledSubmit",ROW_VIEW:"RestfulTable_Row_View"};AJS.RestfulTable.ClassNames={NO_VALUE:"aui-restfultable-editable-no-value",NO_ENTRIES:"aui-restfultable-no-entires",RESTFUL_TABLE:"aui-restfultable",ROW:"aui-restfultable-row",READ_ONLY:"aui-restfultable-readonly",ACTIVE:"aui-restfultable-active",ALLOW_HOVER:"aui-restfultable-allowhover",FOCUSED:"aui-restfultable-focused",MOVEABLE:"aui-restfultable-movable",DISABLED:"aui-restfultable-disabled",SUBMIT:"aui-restfultable-submit",CANCEL:"aui-restfultable-cancel",EDIT_ROW:"aui-restfultable-editrow",CREATE:"aui-restfultable-create",DRAG_HANDLE:"aui-restfultable-draghandle",ORDER:"aui-restfultable-order",EDITABLE:"aui-restfultable-editable",ERROR:"error",DELETE:"aui-restfultable-delete",LOADING:"loading"};AJS.RestfulTable.Events={REORDER_SUCCESS:"RestfulTable.reorderSuccess",ROW_ADDED:"RestfulTable.rowAdded",ROW_REMOVED:"RestfulTable.rowRemoved",EDIT_ROW:"RestfulTable.switchedToEditMode",SERVER_ERROR:"RestfulTable.serverError",CREATED:"created",UPDATED:"updated",FOCUS:"focus",BLUR:"blur",SUBMIT:"submit",SAVE:"save",MODAL:"modal",MODELESS:"modeless",CANCEL:"cancel",CONTENT_REFRESHED:"contentRefreshed",RENDER:"render",FINISHED_EDITING:"finishedEditing",VALIDATION_ERROR:"validationError",SUBMIT_STARTED:"submitStarted",SUBMIT_FINISHED:"submitFinished",INITIALIZED:"initialized",ROW_INITIALIZED:"rowInitialized",ROW_EDIT:"editRow"}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.entrymodel.js' */
(function(A){AJS.RestfulTable.EntryModel=Backbone.Model.extend({sync:function(F,D,C){var B=this;var E=C.error;C.error=function(G){B._serverErrorHandler(G,this);if(E){E.apply(this,arguments)}};return Backbone.sync.apply(Backbone,arguments)},save:function(D,F){F=F||{};var C=this,H,B,E=F.error,G=F.success;F.error=function(I,K){var J=A.parseJSON(K.responseText||K.data);if(E){E.call(C,C,J,K)}};if(this.isNew()){Backbone.Model.prototype.save.call(this,D,F)}else{if(D){H=AJS.RestfulTable.EntryModel.extend({url:this.url()});B=new H({id:this.id});B.save=Backbone.Model.prototype.save;F.success=function(I,J){C.clear().set(I.toJSON());if(G){G.call(C,C,J)}};B.save(D,F)}}},destroy:function(D){D=D||{};var B=this,C=this.url(),E;if(D.data){E=A.param(D.data)}if(E!==""){C=C+"?"+E}A.ajax({url:C,type:"DELETE",dataType:"json",contentType:"application/json",success:function(F){if(B.collection){B.collection.remove(B)}if(D.success){D.success.call(B,F)}},error:function(F){B._serverErrorHandler(F,this);if(D.error){D.error.call(B,F)}}});return this},changedAttributes:function(B){var D={},C=this.toJSON();A.each(B,function(E,F){if(!C[E]){if(typeof F==="string"){if(A.trim(F)!==""){D[E]=F}}else{if(A.isArray(F)){if(F.length!==0){D[E]=F}}else{D[E]=F}}}else{if(C[E]&&C[E]!==F){if(typeof F==="object"){if(!_.isEqual(F,C[E])){D[E]=F}}else{D[E]=F}}}});if(!_.isEmpty(D)){this.addExpand(D);return D}},addExpand:function(B){},_serverErrorHandler:function(D,B){var C;if(D.status!==400){C=A.parseJSON(D.responseText||D.data);AJS.triggerEvtForInst(AJS.RestfulTable.Events.SERVER_ERROR,this,[C,D,B])}},fetch:function(B){B=B||{};this.clear();Backbone.Model.prototype.fetch.call(this,B)}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.editrow.js' */
(function(A){AJS.RestfulTable.EditRow=Backbone.View.extend({tagName:"tr",events:{focusin:"_focus",click:"_focus",keyup:"_handleKeyUpEvent"},initialize:function(B){this.$el=A(this.el);this._event=AJS.RestfulTable.Events;this.classNames=AJS.RestfulTable.ClassNames;this.dataKeys=AJS.RestfulTable.DataKeys;this.columns=B.columns;this.isCreateRow=B.isCreateRow;this.allowReorder=B.allowReorder;this.events["click ."+this.classNames.CANCEL]="_cancel";this.delegateEvents();if(B.isUpdateMode){this.isUpdateMode=true}else{this._modelClass=B.model;this.model=new this._modelClass()}this.fieldFocusSelector=B.fieldFocusSelector;this.bind(this._event.CANCEL,function(){this.disabled=true}).bind(this._event.SAVE,function(C){if(!this.disabled){this.submit(C)}}).bind(this._event.FOCUS,function(C){this.focus(C)}).bind(this._event.BLUR,function(){this.$el.removeClass(this.classNames.FOCUSED);this.disable()}).bind(this._event.SUBMIT_STARTED,function(){this._submitStarted()}).bind(this._event.SUBMIT_FINISHED,function(){this._submitFinished()})},defaultColumnRenderer:function(B){if(B.allowEdit!==false){return A("<input type='text' />").addClass("text").attr({name:B.name,value:B.value})}else{if(B.value){return document.createTextNode(B.value)}}},renderDragHandle:function(){return'<span class="'+this.classNames.DRAG_HANDLE+'"></span></td>'},_handleKeyUpEvent:function(B){if(B.keyCode===27){this.trigger(this._event.CANCEL)}},_cancel:function(B){this.trigger(this._event.CANCEL);B.preventDefault();return this},_submitStarted:function(){this.submitting=true;this.showLoading().disable().delegateEvents({});return this},_submitFinished:function(){this.submitting=false;this.hideLoading().enable().delegateEvents(this.events);return this},_focus:function(B){if(!this.hasFocus()){this.trigger(this._event.FOCUS,B.target.name)}return this},hasFocus:function(){return this.$el.hasClass(this.classNames.FOCUSED)},focus:function(C){var D,B;this.enable();if(C){D=this.$el.find(this.fieldFocusSelector(C))}else{B=this.$el.find(this.classNames.ERROR+":first");if(B.length===0){D=this.$el.find(":input:text:first")}else{D=B.parent().find(":input")}}this.$el.addClass(this.classNames.FOCUSED);D.focus().trigger("select");return this},disable:function(){var C,B;if(A.browser.mozilla){B=this.$el.find(":submit");if(B.length){C=A("<input type='submit' class='"+this.classNames.SUBMIT+"' />").addClass(B.attr("class")).val(B.val()).data(this.dataKeys.ENABLED_SUBMIT,B);B.replaceWith(C)}}this.$el.addClass(this.classNames.DISABLED).find(":submit").attr("disabled","disabled");return this},enable:function(){var B,C;if(A.browser.mozilla){B=this.$el.find(this.classNames.SUBMIT),C=B.data(this.dataKeys.ENABLED_SUBMIT);if(C&&B.length){B.replaceWith(C)}}this.$el.removeClass(this.classNames.DISABLED).find(":submit").removeAttr("disabled");return this},showLoading:function(){this.$el.addClass(this.classNames.LOADING);return this},hideLoading:function(){this.$el.removeClass(this.classNames.LOADING);return this},hasUpdates:function(){return !!this.mapSubmitParams(this.serializeObject())},serializeObject:function(){return this.$el.serializeObject()},mapSubmitParams:function(B){return this.model.changedAttributes(B)},submit:function(D){var B=this,C;if(document.activeElement!==window){A(document.activeElement).blur()}if(this.isUpdateMode){C=this.mapSubmitParams(this.serializeObject());if(!C){return B.trigger(B._event.CANCEL)}}else{this.model.clear();C=this.mapSubmitParams(this.serializeObject())}this.trigger(this._event.SUBMIT_STARTED);this.model.save(C,{success:function(){if(B.isUpdateMode){B.trigger(B._event.UPDATED,B.model,D)}else{B.trigger(B._event.CREATED,B.model.toJSON());B.model=new B._modelClass();B.render({errors:{},values:{}});B.trigger(B._event.FOCUS)}B.trigger(B._event.SUBMIT_FINISHED)},error:function(E,F,G){if(G.status===400){B.renderErrors(F.errors).trigger(B._event.VALIDATION_ERROR,F.errors)}B.trigger(B._event.SUBMIT_FINISHED)},silent:true});return this},renderError:function(B,C){return A("<div />").attr("data-field",B).addClass(this.classNames.ERROR).text(C)},renderErrors:function(C){var B=this;this.$("."+this.classNames.ERROR).remove();if(C){A.each(C,function(D,E){B.$el.find("[name='"+D+"']").closest("td").append(B.renderError(D,E))})}return this},render:function(C){var B=this;this.$el.empty();if(this.allowReorder){A('<td  class="'+this.classNames.ORDER+'" />').append(this.renderDragHandle()).appendTo(B.$el)}A.each(this.columns,function(E,F){var G,I,H=C.values[F.id],D=[{name:F.id,value:H,allowEdit:F.allowEdit},C.values,B.model];if(H){B.$el.attr("data-"+F.id,H)}if(B.isCreateRow&&F.createView){G=new F.createView({model:B.model}).render(D[0])}else{if(F.editView){G=new F.editView({model:B.model}).render(D[0])}else{G=B.defaultColumnRenderer.apply(B,D)}}I=A("<td />");if(typeof G==="object"&&G.done){G.done(function(J){I.append(J)})}else{I.append(G)}if(F.styleClass){I.addClass(F.styleClass)}I.appendTo(B.$el)});this.$el.append(this.renderOperations(C.update,C.values)).addClass(this.classNames.ROW+" "+this.classNames.EDIT_ROW);this.trigger(this._event.RENDER,this.$el,C.values);this.$el.trigger(this._event.CONTENT_REFRESHED,[this.$el]);return this},renderOperations:function(C){var B=A('<td class="aui-restfultable-operations" />');if(C){B.append(A('<input class="aui-button" type="submit" />').attr({accesskey:this.submitAccessKey,value:"Update"})).append(A('<a class="aui-button aui-button-link" href="#" />').addClass(this.classNames.CANCEL).text("Cancel").attr({accesskey:this.cancelAccessKey}))}else{B.append(A('<input class="aui-button" type="submit" />').attr({accesskey:this.submitAccessKey,value:"Add"}))}return B.add(A('<td class="aui-restfultable-status" />').append(AJS.RestfulTable.throbber()))}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.customview.js' */
AJS.RestfulTable.CustomEditView=AJS.RestfulTable.CustomCreateView=AJS.RestfulTable.CustomReadView=Backbone.View;
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-restfultable', location = 'js/experimental-restfultable/restfultable.row.js' */
(function(A){AJS.RestfulTable.Row=Backbone.View.extend({tagName:"tr",events:{"click .aui-restfultable-editable":"edit"},initialize:function(C){var B=this;C=C||{};this._event=AJS.RestfulTable.Events;this.classNames=AJS.RestfulTable.ClassNames;this.dataKeys=AJS.RestfulTable.DataKeys;this.columns=C.columns;this.allowEdit=C.allowEdit;this.allowDelete=C.allowDelete;if(!this.events["click .aui-restfultable-editable"]){throw new Error("It appears you have overridden the events property. To add events you will need to usea work around. https://github.com/documentcloud/backbone/issues/244")}this.index=C.index||0;this.deleteConfirmation=C.deleteConfirmation;this.allowReorder=C.allowReorder;this.$el=A(this.el);this.bind(this._event.CANCEL,function(){this.disabled=true}).bind(this._event.FOCUS,function(D){this.focus(D)}).bind(this._event.BLUR,function(){this.unfocus()}).bind(this._event.MODAL,function(){this.$el.addClass(this.classNames.ACTIVE)}).bind(this._event.MODELESS,function(){this.$el.removeClass(this.classNames.ACTIVE)})},renderDragHandle:function(){return'<span class="'+this.classNames.DRAG_HANDLE+'"></span></td>'},defaultColumnRenderer:function(B){if(B.value){return document.createTextNode(B.value.toString())}},sync:function(C){this.model.addExpand(C);var B=this;this.showLoading();this.model.save(C,{success:function(){B.hideLoading().render();B.trigger(B._event.UPDATED)},error:function(){B.hideLoading()}});return this},refresh:function(D,C){var B=this;this.showLoading();this.model.fetch({success:function(){B.hideLoading().render();if(D){D.apply(this,arguments)}},error:function(){B.hideLoading();if(C){C.apply(this,arguments)}}});return this},hasFocus:function(){return this.$el.hasClass(this.classNames.FOCUSED)},focus:function(){A(this.el).addClass(this.classNames.FOCUSED);return this},unfocus:function(){A(this.el).removeClass(this.classNames.FOCUSED);return this},showLoading:function(){this.$el.addClass(this.classNames.LOADING);return this},hideLoading:function(){this.$el.removeClass(this.classNames.LOADING);return this},edit:function(C){var B;if(A(C.target).is("."+this.classNames.EDITABLE)){B=A(C.target).attr("data-field-name")}else{B=A(C.target).closest("."+this.classNames.EDITABLE).attr("data-field-name")}this.trigger(this._event.ROW_EDIT,B);return this},renderOperations:function(){var B=this;if(this.allowDelete!==false){return A("<a href='#' class='aui-button' />").addClass(this.classNames.DELETE).text("Delete").click(function(C){C.preventDefault();B.destroy()})}},destroy:function(){if(this.deleteConfirmation){var B=AJS.popup(400,200,"delete-entity-"+this.model.get("id"));B.element.html(this.deleteConfirmation(this.model.toJSON()));B.show();B.element.find(".cancel").click(function(){B.hide()});B.element.find("form").submit(_.bind(function(C){B.hide();this.model.destroy();C.preventDefault()},this))}else{this.model.destroy()}},render:function(){var B=this,D=this.model.toJSON(),E=A("<td class='aui-restfultable-operations' />").append(this.renderOperations({},D)),C=A("<td class='aui-restfultable-status' />").append(AJS.RestfulTable.throbber());this.$el.removeClass(this.classNames.DISABLED+" "+this.classNames.FOCUSED+" "+this.classNames.LOADING+" "+this.classNames.EDIT_ROW).addClass(this.classNames.READ_ONLY).empty();if(this.allowReorder){A('<td  class="'+this.classNames.ORDER+'" />').append(this.renderDragHandle()).appendTo(B.$el)}this.$el.attr("data-id",this.model.id);A.each(this.columns,function(G,I){var J,L=A("<td />"),K=D[I.id],M=I.fieldName||I.id,F=[{name:M,value:K,allowEdit:I.allowEdit},D,B.model];if(K){B.$el.attr("data-"+I.id,K)}if(I.readView){J=new I.readView({model:B.model}).render(F[0])}else{J=B.defaultColumnRenderer.apply(B,F)}if(B.allowEdit!==false&&I.allowEdit!==false){var H=A("<span />").addClass(B.classNames.EDITABLE).append(aui.icons.icon({useIconFont:true,icon:"edit"})).append(J).attr("data-field-name",M);L=A("<td />").append(H).appendTo(B.$el);if(!J||A.trim(J)==""){L.addClass(B.classNames.NO_VALUE);H.html(A("<em />").text(this.emptyText||"Enter value"))}}else{L.append(J)}if(I.styleClass){L.addClass(I.styleClass)}L.appendTo(B.$el)});this.$el.append(E).append(C).addClass(this.classNames.ROW+" "+this.classNames.READ_ONLY);this.trigger(this._event.RENDER,this.$el,D);this.$el.trigger(this._event.CONTENT_REFRESHED,[this.$el]);return this}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-tipsy', location = 'js-vendor/jquery/jquery.tipsy.js' */
(function(E){function D(H,G){return(typeof H=="function")?(H.call(G)):H}function F(G){while(G=G.parentNode){if(G==document){return true}}return false}var A=0;function B(){var G=A++;return"tipsyuid"+G}function C(H,G){this.$element=E(H);this.options=G;this.enabled=true;this.fixTitle()}C.prototype={show:function(){if(!F(this.$element[0])){return }var P=this.getTitle();if(P&&this.enabled){var I=this.tip();I.find(".tipsy-inner")[this.options.html?"html":"text"](P);I[0].className="tipsy";I.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var L=this;function H(){L.hoverTooltip=true}function M(){if(L.hoverState=="in"){return }L.hoverTooltip=false;if(L.options.trigger!="manual"){var R=L.options.trigger=="hover"?"mouseleave.tipsy":"blur.tipsy";L.$element.trigger(R)}}if(this.options.hoverable){I.hover(H,M)}if(this.options.className){I.addClass(D(this.options.className,this.$element[0]))}var N=E.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var G=I[0].offsetWidth,K=I[0].offsetHeight,Q=D(this.options.gravity,this.$element[0]);var O;switch(Q.charAt(0)){case"n":O={top:N.top+N.height+this.options.offset,left:N.left+N.width/2-G/2};break;case"s":O={top:N.top-K-this.options.offset,left:N.left+N.width/2-G/2};break;case"e":O={top:N.top+N.height/2-K/2,left:N.left-G-this.options.offset};break;case"w":O={top:N.top+N.height/2-K/2,left:N.left+N.width+this.options.offset};break}if(Q.length==2){if(Q.charAt(1)=="w"){O.left=N.left+N.width/2-15}else{O.left=N.left+N.width/2-G+15}}I.css(O).addClass("tipsy-"+Q);I.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+Q.charAt(0);if(this.options.fade){I.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{I.css({visibility:"visible",opacity:this.options.opacity})}if(this.options.aria){var J=B();I.attr("id",J);this.$element.attr("aria-describedby",J)}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){E(this).remove()})}else{this.tip().remove()}if(this.options.aria){this.$element.removeAttr("aria-describedby")}},fixTitle:function(){var G=this.$element;if(G.attr("title")||typeof (G.attr("original-title"))!="string"){G.attr("original-title",G.attr("title")||"").removeAttr("title")}},getTitle:function(){var I,G=this.$element,H=this.options;this.fixTitle();var I,H=this.options;if(typeof H.title=="string"){I=G.attr(H.title=="title"?"original-title":H.title)}else{if(typeof H.title=="function"){I=H.title.call(G[0])}}I=(""+I).replace(/(^\s*|\s*$)/,"");return I||H.fallback},tip:function(){if(!this.$tip){this.$tip=E('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>').attr("role","tooltip");this.$tip.data("tipsy-pointee",this.$element[0])}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};E.fn.tipsy=function(J){if(J===true){return this.data("tipsy")}else{if(typeof J=="string"){var L=this.data("tipsy");if(L){L[J]()}return this}}J=E.extend({},E.fn.tipsy.defaults,J);if(J.hoverable){J.delayOut=J.delayOut||20}function I(N){var O=E.data(N,"tipsy");if(!O){O=new C(N,E.fn.tipsy.elementOptions(N,J));E.data(N,"tipsy",O)}return O}function M(){var N=I(this);N.hoverState="in";if(J.delayIn==0){N.show()}else{N.fixTitle();setTimeout(function(){if(N.hoverState=="in"){N.show()}},J.delayIn)}}function H(){var N=I(this);N.hoverState="out";if(J.delayOut==0){N.hide()}else{setTimeout(function(){if(N.hoverState=="out"&&!N.hoverTooltip){N.hide()}},J.delayOut)}}if(!J.live){this.each(function(){I(this)})}if(J.trigger!="manual"){var K=J.trigger=="hover"?"mouseenter.tipsy":"focus.tipsy",G=J.trigger=="hover"?"mouseleave.tipsy":"blur.tipsy";if(J.live){E(this.context).on(K,this.selector,M).on(G,this.selector,H)}else{this.bind(K,M).bind(G,H)}}return this};E.fn.tipsy.defaults={aria:false,className:null,delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,hoverable:false,offset:0,opacity:0.8,title:"title",trigger:"hover"};E.fn.tipsy.revalidate=function(){E(".tipsy").each(function(){var G=E.data(this,"tipsy-pointee");if(!G||!F(G)){E(this).remove()}})};E.fn.tipsy.elementOptions=function(H,G){return E.metadata?E.extend({},G,E(H).metadata()):G};E.fn.tipsy.autoNS=function(){return E(this).offset().top>(E(document).scrollTop()+E(window).height()/2)?"s":"n"};E.fn.tipsy.autoWE=function(){return E(this).offset().left>(E(document).scrollLeft()+E(window).width()/2)?"e":"w"};E.fn.tipsy.autoBounds=function(H,G){return function(){var I={ns:G[0],ew:(G.length>1?G[1]:false)},L=E(document).scrollTop()+H,J=E(document).scrollLeft()+H,K=E(this);if(K.offset().top<L){I.ns="n"}if(K.offset().left<J){I.ew="w"}if(E(window).width()+E(document).scrollLeft()-K.offset().left<H){I.ew="e"}if(E(window).height()+E(document).scrollTop()-K.offset().top<H){I.ns="s"}return I.ns+(I.ew?I.ew:"")}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-tooltips', location = 'js/aui-experimental-tooltip.js' */
(function(A){A.fn.tooltip=function(B){if(typeof B=="string"){this.tipsy(B);return C}var E=A.extend({},A.fn.tooltip.defaults,B),C=this.tipsy(E);if(E.hideOnClick&&(E.trigger=="hover"||!E.trigger&&this.tipsy.defaults.trigger=="hover")){var D=function(){A(this).tipsy("hide")};if(E.live){A(this.context).on("click.tipsy",this.selector,D)}else{this.bind("click.tipsy",D)}}return C};A.fn.tooltip.defaults={opacity:1,offset:1,delayIn:500,hoverable:true,hideOnClick:true}}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
