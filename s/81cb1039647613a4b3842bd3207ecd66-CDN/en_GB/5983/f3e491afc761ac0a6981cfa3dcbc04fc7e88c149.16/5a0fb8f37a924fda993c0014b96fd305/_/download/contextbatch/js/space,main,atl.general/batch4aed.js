;try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'browser-metrics.js' */
(function(){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.0.0
 */
var h,t,e,n,l,s,z,A,p,m,B,x,q,j,E,F,g,v,D,f,w,k,d,r,c,J,C,a,y,b,G,H,o,I;(function(){function aE(aW){return typeof aW==="function"||typeof aW==="object"&&aW!==null}function ac(aW){return typeof aW==="function"}function aU(aW){return typeof aW==="object"&&aW!==null}var aR;if(!Array.isArray){aR=function(aW){return Object.prototype.toString.call(aW)==="[object Array]"}}else{aR=Array.isArray}var aw=aR;var ah=Date.now||function(){return new Date().getTime()};function ak(){}var P=Object.create||function(aW){if(arguments.length>1){throw new Error("Second argument not supported")}if(typeof aW!=="object"){throw new TypeError("Argument must be an object")}ak.prototype=aW;return new ak()};var aP=0;var Y=function aC(aX,aW){aO[aP]=aX;aO[aP+1]=aW;aP+=2;if(aP===2){M()}};var av=typeof window!=="undefined"?window:{};var af=av.MutationObserver||av.WebKitMutationObserver;var X=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function az(){return function(){process.nextTick(aQ)}}function aK(){var aY=0;var aW=new af(aQ);var aX=document.createTextNode("");aW.observe(aX,{characterData:true});return function(){aX.data=aY=++aY%2}}function aA(){var aW=new MessageChannel();aW.port1.onmessage=aQ;return function(){aW.port2.postMessage(0)}}function aG(){return function(){setTimeout(aQ,1)}}var aO=new Array(1000);function aQ(){for(var aX=0;aX<aP;aX+=2){var aY=aO[aX];var aW=aO[aX+1];aY(aW);aO[aX]=undefined;aO[aX+1]=undefined}aP=0}var M;if(typeof process!=="undefined"&&{}.toString.call(process)==="[object process]"){M=az()}else{if(af){M=aK()}else{if(X){M=aA()}else{M=aG()}}}function aa(){}var al=void 0;var aH=1;var am=2;var aN=new aT();function aL(){return new TypeError("You cannot resolve a promise with itself")}function au(){return new TypeError("A promises callback cannot return that same promise.")}function aD(aX){try{return aX.then}catch(aW){aN.error=aW;return aN}}function O(a0,aY,aX,aW){try{a0.call(aY,aX,aW)}catch(aZ){return aZ}}function aF(aY,aW,aX){Y(function(a1){var a0=false;var aZ=O(aX,aW,function(a2){if(a0){return}a0=true;if(aW!==a2){V(a1,a2)}else{U(a1,a2)}},function(a2){if(a0){return}a0=true;at(a1,a2)},"Settle: "+(a1._label||" unknown promise"));if(!a0&&aZ){a0=true;at(a1,aZ)}},aY)}function Q(aX,aW){if(aW._state===aH){U(aX,aW._result)}else{if(aX._state===am){at(aX,aW._result)}else{aV(aW,undefined,function(aY){V(aX,aY)},function(aY){at(aX,aY)})}}}function R(aY,aW){if(aW.constructor===aY.constructor){Q(aY,aW)}else{var aX=aD(aW);if(aX===aN){at(aY,aN.error)}else{if(aX===undefined){U(aY,aW)}else{if(ac(aX)){aF(aY,aW,aX)}else{U(aY,aW)}}}}}function V(aX,aW){if(aX===aW){at(aX,aL())}else{if(aE(aW)){R(aX,aW)}else{U(aX,aW)}}}function ay(aW){if(aW._onerror){aW._onerror(aW._result)}T(aW)}function U(aX,aW){if(aX._state!==al){return}aX._result=aW;aX._state=aH;if(aX._subscribers.length===0){}else{Y(T,aX)}}function at(aX,aW){if(aX._state!==al){return}aX._state=am;aX._result=aW;Y(ay,aX)}function aV(aW,a1,a0,aZ){var aY=aW._subscribers;var aX=aY.length;aW._onerror=null;aY[aX]=a1;aY[aX+aH]=a0;aY[aX+am]=aZ;if(aX===0&&aW._state){Y(T,aW)}}function T(a0){var aZ=a0._subscribers;var aW=a0._state;if(aZ.length===0){return}var a2,a1,aY=a0._result;for(var aX=0;aX<aZ.length;aX+=3){a2=aZ[aX];a1=aZ[aX+aW];if(a2){aJ(aW,a2,a1,aY)}else{a1(aY)}}a0._subscribers.length=0}function aT(){this.error=null}var ab=new aT();function ar(aY,aW){try{return aY(aW)}catch(aX){ab.error=aX;return ab}}function aJ(a2,a4,a1,aY){var aW=ac(a1),a0,aZ,a3,aX;if(aW){a0=ar(a1,aY);if(a0===ab){aX=true;aZ=a0.error;a0=null}else{a3=true}if(a4===a0){at(a4,au());return}}else{a0=aY;a3=true}if(a4._state!==al){}else{if(aW&&a3){V(a4,a0)}else{if(aX){at(a4,aZ)}else{if(a2===aH){U(a4,a0)}else{if(a2===am){at(a4,a0)}}}}}}function S(a0,aZ){try{aZ(function aW(a1){V(a0,a1)},function aY(a1){at(a0,a1)})}catch(aX){at(a0,aX)}}function aS(aY,aW,aX){if(aY===aH){return{state:"fulfilled",value:aX}}else{return{state:"rejected",reason:aX}}}function aM(aY,aW,aZ,aX){this._instanceConstructor=aY;this.promise=new aY(aa,aX);this._abortOnReject=aZ;if(this._validateInput(aW)){this._input=aW;this.length=aW.length;this._remaining=aW.length;this._init();if(this.length===0){U(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){U(this.promise,this._result)}}}else{at(this.promise,this._validationError())}}aM.prototype._validateInput=function(aW){return aw(aW)};aM.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")};aM.prototype._init=function(){this._result=new Array(this.length)};var ax=aM;aM.prototype._enumerate=function(){var aY=this.length;var aZ=this.promise;var aW=this._input;for(var aX=0;aZ._state===al&&aX<aY;aX++){this._eachEntry(aW[aX],aX)}};aM.prototype._eachEntry=function(aX,aW){var aY=this._instanceConstructor;if(aU(aX)){if(aX.constructor===aY&&aX._state!==al){aX._onerror=null;this._settledAt(aX._state,aW,aX._result)}else{this._willSettleAt(aY.resolve(aX),aW)}}else{this._remaining--;this._result[aW]=this._makeResult(aH,aW,aX)}};aM.prototype._settledAt=function(aY,aW,aX){var aZ=this.promise;if(aZ._state===al){this._remaining--;if(this._abortOnReject&&aY===am){at(aZ,aX)}else{this._result[aW]=this._makeResult(aY,aW,aX)}}if(this._remaining===0){U(aZ,this._result)}};aM.prototype._makeResult=function(aY,aW,aX){return aX};aM.prototype._willSettleAt=function(aX,aW){var aY=this;aV(aX,undefined,function(aZ){aY._settledAt(aH,aW,aZ)},function(aZ){aY._settledAt(am,aW,aZ)})};var ai=function ag(aW,aX){return new ax(this,aW,true,aX).promise};var an=function W(aW,aX){var a3=this;var a2=new a3(aa,aX);if(!aw(aW)){at(a2,new TypeError("You must pass an array to race."));return a2}var aZ=aW.length;function a1(a4){V(a2,a4)}function a0(a4){at(a2,a4)}for(var aY=0;a2._state===al&&aY<aZ;aY++){aV(a3.resolve(aW[aY]),undefined,a1,a0)}return a2};var ae=function aj(aX,aW){var aZ=this;if(aX&&typeof aX==="object"&&aX.constructor===aZ){return aX}var aY=new aZ(aa,aW);V(aY,aX);return aY};var L=function ap(aX,aW){var aZ=this;var aY=new aZ(aa,aW);at(aY,aX);return aY};var aq=0;function aI(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function Z(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var aB=N;function N(aW){this._id=aq++;this._state=undefined;this._result=undefined;this._subscribers=[];if(aa!==aW){if(!ac(aW)){aI()}if(!(this instanceof N)){Z()}S(this,aW)}}N.all=ai;N.race=an;N.resolve=ae;N.reject=L;N.prototype={constructor:N,then:function(a0,aZ){var aX=this;var aY=aX._state;if(aY===aH&&!a0||aY===am&&!aZ){return this}var a2=new this.constructor(aa);var aW=aX._result;if(aY){var a1=arguments[aY-1];Y(function(){aJ(aY,a2,a1,aW)})}else{aV(aX,a2,a0,aZ)}return a2},"catch":function(aW){return this.then(null,aW)}};var ad=function K(){var aX;if(typeof global!=="undefined"){aX=global}else{if(typeof window!=="undefined"&&window.document){aX=window}else{aX=self}}var aW="Promise" in aX&&"resolve" in aX.Promise&&"reject" in aX.Promise&&"all" in aX.Promise&&"race" in aX.Promise&&function(){var aY;new aX.Promise(function(aZ){aY=aZ});return ac(aY)}();if(!aW){aX.Promise=aB}};var ao={Promise:aB,polyfill:ad};if(true){h=function(){return ao}()}else{if(typeof module!=="undefined"&&module.exports){module.exports=ao}else{if(typeof this!=="undefined"){this["ES6Promise"]=ao}}}}.call(this));t=function(L){var K=L.Promise;return K}(h);e=function(){return window}();n=function(M){var L=M.HTMLElement.prototype;var K=L.matches||L.msMatchesSelector||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector;return K}(e);l=function i(K){var L=false;return function(){if(!L){L=true;setTimeout(function(){L=false;K()},1)}}};s=function(K,N){function M(Q){this.callback=Q;this.elements=[]}M.prototype={observe:function(X,af){function R(ag){ae.push(ag);Q()}function ad(ai){var ah=ai.target;if(!ah){return}var ag=ah.parentNode;if(!Y(ag)){return}if(ac&&P(ac,ah)){return}if(!aa||aa.target!==ag){Z.push(aa=O(ag))}if(ag){if(!aa.addedNodes){aa.addedNodes=[]}aa.addedNodes.push(ah)}else{if(!aa.removedNodes){aa.removedNodes=[]}aa.removedNodes.push(ah)}ac=ah}function W(ag){return af.attributes&&(af.subtree||ag===X)}function Y(ag){return af.childList&&(af.subtree||ag===X)}var U=this;var ac;var aa;var ae=[];var Z=[];var Q=K(function(){var ag=ae.length;for(var ah=0;ah<ag;ah++){ad(ae[ah])}U.callback(Z);ae=[];Z=[];ac=undefined;aa=undefined});var ab={};var T=[];var V=K(function(){var ag=T.length;U.callback(T);T.splice(0,ag)});var S={target:X,options:af,insertHandler:R,removeHandler:R,attributeHandler:function(al){var aj=al.target;if(!W(aj)){return}var ah=al.attrName;var ai=al.prevValue;var ak=al.newValue;var ag=O(aj,"attributes");ag.attributeName=ah;if(af.attributeOldValue){ag.oldValue=ab[ah]||ai||null}T.push(ag);if(af.attributeOldValue){ab[ah]=ak}V()}};this.elements.push(S);if(af.childList){X.addEventListener("DOMNodeInserted",S.insertHandler);X.addEventListener("DOMNodeRemoved",S.removeHandler)}if(af.attributes){X.addEventListener("DOMAttrModified",S.attributeHandler)}return this},disconnect:function(){this.elements.forEach(function(Q){Q.target.removeEventListener("DOMNodeInserted",Q.insertHandler);Q.target.removeEventListener("DOMNodeRemoved",Q.removeHandler);Q.target.removeEventListener("DOMAttrModified",Q.attributeHandler)});this.elements=[];return this}};function O(R,Q){return{addedNodes:null,attributeName:null,attributeNamespace:null,nextSibling:null,oldValue:null,previousSibling:null,removedNodes:null,target:R,type:Q||"childList"}}var L=N.HTMLElement.prototype.contains;function P(Q,R){if(Q.nodeType!==1){return false}return Q.contains?Q.contains(R):L.call(Q,R)}return M}(l,e);z=function(L,K){return K.MutationObserver||K.WebkitMutationObserver||K.MozMutationObserver||L}(s,e);A=function(){function K(){this._items={};this.length=0}K.prototype.add=function(M,L){if(!this._items.hasOwnProperty(M)){this.length++;this._items[M]=[]}this._items[M].push(L)};K.prototype.remove=function(O,M){var L,N=false;if(this._items.hasOwnProperty(O)){if(arguments.length===1){delete this._items[O];N=true}else{L=this._items[O].indexOf(M);if(L>-1){this._items[O].splice(L,1);if(this._items[O].length===0){delete this._items[O]}N=true}}}return N};K.prototype.get=function(L){if(this._items.hasOwnProperty(L)){return this._items[L]}return[]};K.prototype.forEach=function(M){var L=this._items;Object.keys(L).forEach(function(N){M(L[N],N)})};return K}();p=function(T,U,M,O,Q){var S,N=false,P;P=new O();function L(V,W){if(!N){S.observe(Q.document,{attributes:true,childList:true,subtree:true});N=true}P.add(V,W)}function R(V,W){P.remove.apply(P,arguments);if(P.length===0){S.disconnect();N=false}}S=new M(function(V){V.forEach(function(X){var W=X.type==="childList"&&X.addedNodes&&X.addedNodes.length>0;var Y=X.type==="attributes";if(!W&&!Y){return}P.forEach(function(aa,Z){if(X.target.querySelector(Z)||U.call(X.target,Z)){aa.forEach(function(ab){ab()});R(Z)}})})});function K(W){var X;if(!W.forEach){W=[W]}var V=new T(function(ab,aa){var ac=[];var Y=[];W.forEach(function(ad){var af;var ae;if(!Q.document.querySelector(ad)){af=new T(function(ag){L(ad,ag);ae=function(){R(ad,ag)}});ac.push(af);Y.push(ae)}});function Z(){Y.forEach(function(ad){ad()})}T.all(ac).then(Z).then(ab,aa);X=function(){Z();aa()}});V.dismiss=X;return V}return K}(t,n,z,A,e);m=function(T,U,L,N,Q){var S,M=false,P;P=new N();function K(V,W){if(!M){S.observe(Q.document,{childList:true,subtree:true});M=true}P.add(V,W)}function R(V,W){P.remove.apply(P,arguments);if(P.length===0){S.disconnect();M=false}}S=new L(function(V){V.forEach(function(W){var X=W.type==="childList"&&W.removedNodes&&W.removedNodes.length>0;if(X){P.forEach(function(ab,Y){var ac;for(var aa=0;aa<W.removedNodes.length;aa++){ac=W.removedNodes[aa];if(ac.querySelector&&(ac.querySelector(Y)||U.call(ac,Y))){for(var Z=0;Z<ab.length;Z++){ab[Z]()}R(Y)}}})}})});function O(W){var X;if(!W.forEach){W=[W]}var V=new T(function(ab,aa){var ac=[];var Y=[];W.forEach(function(ad){var af;var ae;if(Q.document.querySelector(ad)){af=new T(function(ag){K(ad,ag);ae=function(){R(ad,ag)}});ac.push(af);Y.push(ae)}});function Z(){Y.forEach(function(ad){ad()})}T.all(ac).then(Z).then(ab,aa);X=function(){Z();aa()}});V.dismiss=X;return V}return O}(t,n,z,A,e);B=function(){var L={};var M={};var K=function(N,P,O){if(!M.hasOwnProperty(N)){M[N]=[]}if(P){M[N].push({callback:P,once:O})}};L.on=function(N,O){K(N,O,false)};L.one=function(N,O){K(N,O,true)};L.trigger=function(N,O){var P=[];(M[N]||[]).forEach(function(Q){Q.callback.apply(undefined,[O]);if(!Q.once){P.push(Q)}});if(P.length===0){delete M[N]}else{M[N]=P}};return L}();x=function u(K){return{isInitial:K.isInitial}};q=function(M,N){var O="browser-metrics-journey";function L(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(R){var Q=M.Math.random()*16|0;var P=R==="x"?Q:Q&3|8;return P.toString(16)})}function K(){if(typeof M.sessionStorage==="undefined"){return N.reject("sessionStorage is required to produce a report for this navigation.")}if(M.sessionStorage.getItem(O)===null){M.sessionStorage.setItem(O,L())}return N.resolve({journeyId:M.sessionStorage.getItem(O)})}return K}(e,t);j=function(){function K(L){return{key:L.key}}return K}();E=function(K){return function L(){return K.performance&&K.performance.navigation&&K.performance.timing&&typeof K.performance.timing.navigationStart!=="undefined"}}(e);F=function(L,M){function K(O){var N={};if(O.isInitial&&M()){N.navigationType=L.performance.navigation.type}return N}return K}(e,E);g=function(L,N,M){function K(O){if(O.isInitial&&!N()){return M.reject("The navigation timing API is required to produce a report for this navigation.")}var P=O.isInitial?L.performance.timing.navigationStart:O.start;return M.resolve({readyForUser:Math.round(O.end-P)})}return K}(e,E,t);v=function(L,N,M){function K(P){var O={};if(P.isInitial){if(!N()){return M.reject("The navigation timing API is required to produce a report for this navigation.")}if(L.performance.navigation.redirectCount>0){O.redirectCount=L.performance.navigation.redirectCount}}return M.resolve(O)}return K}(e,E,t);D=function(L){function K(N,M){return new L(function(P){var Q;function O(){var R=N();if(R!==undefined){clearInterval(Q);P(R)}}Q=setInterval(O,M);O()})}return K}(t);f=function(L,O,Q,P){var M=["unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","secureConnectionStart","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"];function K(){var R=O.performance.timing.loadEventEnd;if(R>0){return R}}function N(T){if(!T.isInitial){return{}}else{if(!Q()){return P.reject("The navigation timing API is required to produce a report for this navigation.")}}var R=L(K,250);return R.then(function S(){var U={};M.forEach(function(V){var W=O.performance.timing[V];if(W>0){U[V]=W-O.performance.timing.navigationStart}});return U})}return N}(D,e,E,t);w=function(K){function L(){return{userAgent:K.navigator.userAgent}}return L}(e);k=function(Q,O,M,R,S,L,N,P){var K=[Q,O,M,R,S,L,N,P];return{get:function(){return K.concat()},add:function(T){K.push(T)}}}(x,q,j,F,g,v,f,w);d=function(){var K=Object.prototype.hasOwnProperty;function L(){var P={};var O,Q;for(var M=0,N=arguments.length;M<N;M++){O=arguments[M];for(Q in O){if(K.call(O,Q)){P[Q]=O[Q]}}}return P}return L}();r=function(L){var K=L.document.readyState!=="loading";if(!K){L.document.addEventListener("DOMContentLoaded",function(){L.setTimeout(function(){K=true},0)})}function M(){return K}return M}(e);c=function(L,P,U,S,K,T,N){var R={};function Q(W,V){if(!Array.isArray(W)){W=[W]}return W.map(function(X){if(typeof X==="string"){X={selector:X}}return T(V,X)})}function O(W){var V;V=W.map(function(Y){var X;if(Y.requireUpdate){X=new P(Y.selector);U.one("start",function(){X.dismiss()})}else{X=S.resolve()}return X.then(function(){var Z=new L(Y.selector);U.one("start",function(){Z.dismiss()});return Z})});return S.all(V)}R.start=function(V){var X,W="isInitial" in V?V.isInitial:N()===false;U.trigger("start",{key:V.key,isInitial:W});if(V.ready){X=Q(V.ready,{requireUpdate:!W});O(X).then(function(){R.end({key:V.key})})}};R.end=function(V){U.trigger("end",{key:V.key})};R.addReporter=function M(V){K.add(V)};return R}(p,m,B,t,k,d,r);J=function(K){return K.AJS||(K.AJS={})}(e);C=function(K){K.EventQueue=K.EventQueue||[];function L(M,N){K.EventQueue.push({name:M,properties:N})}return L}(J);a=function(L){function K(M){(L.console.error||L.console.log).call(L.console,M.stack||M)}return K}(e);y=function(N,P,Q,O,M,L){function K(T){var U=L.get().map(function S(W){var V;try{V=W(T)}catch(X){M(X);V={}}return V});return P.all(U).then(function R(V){return Q.apply(undefined,V)})}return K}(D,t,d,e,a,k);b=function(L){var K;if(L.performance&&L.performance.now){K=function(){return L.performance.timing.navigationStart+L.performance.now()}}else{K=L.Date.now.bind(L.Date)}return K}(e);G=function(O,L,M){function K(P){if(!(this instanceof K)){return new K(P)}this.isInitial="isInitial" in P?P.isInitial:false;this.start=M();this.end=null;this.key=P.key}function N(P){var Q;P.on("start",function(R){Q=new K(R)});P.on("end",function(R){if(Q&&Q.key===R.key){Q.end=M();L(Q).then(function(S){O("browser.metrics.navigation",S)});Q=null}})}return N}(C,y,b);H=function(K){return K.WRM||(K.WRM={})}(e);o=function(K){var P="com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api.feature-data-provider",L;function O(Q){return !!(Q&&Q.constructor&&Q.call&&Q.apply)}function N(Q,R){if(K&&K.data&&K.data.claim&&O(K.data.claim)){return K.data.claim(Q)}else{if(K&&K.data&&O(K.data)){return K.data(Q)}else{return R}}}function M(){if(L===undefined){L=N(P,true)}return L}return M}(H);I=function(N,M,K,L){if(!L()){return{start:function(){},end:function(){}}}M(K);return N}(c,G,B,o);window["browser-metrics"]=I;if(window.define){window.define("internal/browser-metrics",[],function(){return I})}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'main.js' */
define("internal/browser-metrics-plugin/lib/window",["require","exports"],function(b,a){return window});define("internal/browser-metrics-plugin/reporters/experiments",["require","exports","jquery","../lib/window"],function(a,d,f,i){var h=i.AJS.contextPath()+"/experimental/main.js";function c(){return Array.prototype.slice.call(i.document.getElementsByTagName("script"))}function j(){return(i.GROW&&i.GROW.experimentId)||[]}function e(){var m=f.Deferred();f(function n(){var o=c().some(function p(q){return q.getAttribute("src")===h});m.resolve(o)});return m.promise()}var g=e().pipe(function l(n){var m={};if(n){m.experiments=JSON.stringify(j())}return m});var b=function k(){return g};return b});define("internal/browser-metrics-plugin/main",["require","exports","./reporters/experiments","internal/browser-metrics"],function(c,a,b,d){d.addReporter(b)});require(["internal/browser-metrics-plugin/main"]);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:space', location = '/js/space.js' */
require(["internal/browser-metrics","jquery"],function(b,c){function a(){var d=window.location.pathname.substring(AJS.Meta.get("context-path").length).split(";",1)[0];if(d==="/display/"+AJS.Meta.get("space-key")){b.start({key:"confluence.space.view",ready:".space",isInitial:true})}}c(a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/soy/space-details.soy' */
// This file was automatically generated from space-details.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SpaceDetails == 'undefined') { Confluence.Templates.SpaceDetails = {}; }


Confluence.Templates.SpaceDetails.watchButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span>');
  aui.icons.icon({icon: opt_data.watch ? 'unwatch' : 'watch', useIconFont: true}, output);
  output.append(' ', soy.$$escapeHtml(opt_data.text), '</span>');
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
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/js/space-permissions.js' */
AJS.Confluence.SpacePermissions={updateField:function(c,a){var b=AJS.$("#"+c);if(""!=a){var d=b.val();b.val(""==d?a:d+", "+a)}},updateGroupsField:function(c){AJS.Confluence.SpacePermissions.updateField("groups-to-add-autocomplete",c)},updateUsersField:function(c){AJS.Confluence.SpacePermissions.updateField("users-to-add-autocomplete",c)},setPermissionsState:function(c,a,b){a=a.replace(/'/g,"\\'");AJS.$("table#"+c+"PermissionsTable input[type='checkbox'][name$='_"+a+"']").each(function(){this.checked=
b})}};
AJS.$(document).ready(function(){function c(b){var a=!1;b.each(function(){var b=AJS.$("input[name="+this.name.replace("checkbox","initial")+"]");if(this.checked&&0===b.length||!this.checked&&"on"===b.val())return a=!0,!1});return a}var a=AJS.$("#select-options");AJS.$(".perms-dropdown-trigger").click(function(){var b=AJS.$(this);a.data("entity-type",b.data("entity-type")).data("entity-id",b.data("entity-id"))});a.find("a").click(function(b){var c="";AJS.$(this).hasClass("select-all")&&(c="checked");AJS.Confluence.SpacePermissions.setPermissionsState(a.data("entity-type"),
a.data("entity-id"),c);b.preventDefault()});(-1!==window.location.href.indexOf("/spaces/editspacepermissions.action")||-1!==window.location.href.indexOf("/spaces/doeditspacepermissions.action?key="))&&AJS.$('input[type="submit"]').click(function(){if("cancel"!==AJS.$(this).attr("name")){AJS.$(this).prop("disabled",!0);var b="usersToAddButton"===AJS.$(this).attr("name"),a="groupsToAddButton"===AJS.$(this).attr("name"),a=a||c(AJS.$('table#gPermissionsTable input[type="checkbox"]')),b=b||c(AJS.$('table#uPermissionsTable input[type="checkbox"]'));
c(AJS.$('table#aPermissionsTable input[type="checkbox"]'))&&AJS.trigger("analyticsEvent",{name:"confluence.space.permission.change.anonymous",data:{}});a&&AJS.trigger("analyticsEvent",{name:"confluence.space.permission.change.group",data:{}});b&&AJS.trigger("analyticsEvent",{name:"confluence.space.permission.change.user",data:{}});AJS.$('form[name="editspacepermissions"]').submit()}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/js/recover-space-permissions.js' */
AJS.toInit(function(){var b=AJS.$("#space-permissions-table .recover-permissions-link"),d=AJS.Meta.get("remote-user");b.on("click",function(b){var c=AJS.$(this).data("space-key"),a=new AJS.Dialog({width:400,height:210,id:"recover-permissions-dialog",closeOnOutsideClick:!0});a.addHeader("Recover Permissions");a.addPanel("message","<p>"+"Are you sure you want to grant yourself space admin permission for this space? This action will be logged."+"</p>",
"recover-permissions-panel-body");a.addButton("OK",function(a){AJS.safe.ajax({type:"POST",url:AJS.Meta.get("context-path")+"/admin/permissions/grantspacepermissions.action",data:{spaceKey:c}}).done(function(){location.reload()}).fail(function(){AJS.log("Space Permissions: Failed to recover space permissions for "+d+" to the "+c+" space.")}).always(function(){a.remove()})});a.addLink("Cancel",function(a){a.remove()},"#");a.show();b.preventDefault()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/js/space-details.js' */
AJS.Confluence.SpaceDetails={setUsersToAddTextField:function(b){var c=document.forms.convertspace.usersToAdd;""!=b&&(c.value=""==c.value?b:c.value+", "+b)}};
AJS.$(function(b){function c(a,c,d,e,f){b.ajax({url:AJS.contextPath()+"/spaces/"+d+"?"+b.param({contentType:c,key:AJS.Meta.get("space-key"),atl_token:AJS.Meta.get("atl-token")}),success:function(){!0===e?a.removeClass("stop-watching").addClass("watch"):a.removeClass("watch").addClass("stop-watching");a.html(Confluence.Templates.SpaceDetails.watchButton({watch:e,text:f}))}})}b(".spacetools-nav-secondary").on("click",".menu-item a",function(){var a=b(this).parent(),c=a.attr("data-web-item-key"),a=a.attr("data-web-section-key"),
d=AJS.contextPath()||"/";b.cookie("confluence.last-web-item-clicked",a+"/"+c,{path:d})});b(".spacetools-nav").on("click","li a",function(){var a=b(this).parent(),c=a.attr("data-web-section-key"),a=a.attr("data-first-web-item-key"),d=AJS.contextPath()||"/";b.cookie("confluence.last-web-item-clicked",c+"/"+a,{path:d})});b(".content-navigation.pages-collector").on("click","a.watch",function(a){a.preventDefault();c(b(this),"","addspacenotification.action",!1,"Stop Watching this Space");
AJS.trigger("analytics",{name:"watch-space"})});b(".content-navigation.pages-collector").on("click","a.stop-watching",function(a){a.preventDefault();c(b(this),"","removespacenotification.action",!0,"Watch this Space");AJS.trigger("analytics",{name:"unwatch-space"})});b(".content-navigation.view-blogposts").on("click","a.watch",function(a){a.preventDefault();c(b(this),"blogpost","addspacenotification.action",!1,"Stop watching this Blog");AJS.trigger("analytics",
{name:"watch-blogs"})});b(".content-navigation.view-blogposts").on("click","a.stop-watching",function(a){a.preventDefault();c(b(this),"blogpost","removespacenotification.action",!0,"Watch this Blog");AJS.trigger("analytics",{name:"unwatch-blogs"})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:space-admin', location = '/includes/js/edit-space.js' */
AJS.toInit(function(a){a=a(".edit-space-details");Confluence.Binder.autocompletePage(a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:browser-metrics', location = 'browser-metrics-legacy.js' */
(function(){var a=window.BrowserMetrics||{};var b=window.WRM||{};a.isFunction=function(c){return !!(c&&c.constructor&&c.call&&c.apply)};a.isEnabled=function(){if(a.enabled===undefined){var c="com.atlassian.plugins.browser.metrics.browser-metrics-plugin:browser-metrics.feature-data-provider-legacy";a.enabled=a.isFunction(b.data)?b.data(c):b.data.claim(c)}return a.enabled};window.BrowserMetrics=a}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var f=5;var e=12000;var c=function(g){return Math.round(g)};var a=function(g){return Math.round(g*100)/100};var d=function(k){var h=(function(){var n=/^(\w+):\/\/([^\/]*)(.*)$/;return function(p){var o=p.match(n);if(!o){return{path:p}}return{scheme:o[1],host:o[2],path:o[3]}}}());var i=(function(){var n=["secureConnectionStart","requestStart","responseStart","responseEnd","domContentLoadedEventStart","domContentLoadedEventEnd","loadEventEnd"];return function(o){if(k.performance){var s=k.performance.timing;var p=s.navigationStart;if(p){for(var r=0;r<n.length;++r){var q=n[r];var t=s[q];if(t){o(q,t-p)}}}}}}());var g=(function(){var o=[{key:"LOGIN",pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function n(){var r=h(k.location.href).path;for(var p=0;p<o.length;++p){var q=o[p];if(r.match(q.pattern)){return q.key}}return null}}());function j(){var n=g();if(n){i(function(p,r){var o="browser.metrics."+p,q={version:f,page:n,value:r>e?"x":Math.ceil((r)/100),rawValue:c(r)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(o,q):AJS.trigger("analyticsEvent",{name:o,data:q})})}}function m(){try{j()}catch(n){if(window.console){window.console.log("Error reporting browser metrics: "+n)}}}function l(){if(k.performance.timing.loadEventEnd){m()}else{setTimeout(l,1000)}}if(k.performance&&k.performance.timing){l()}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initPageLoad=d}}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var e=5;var d=12000;var a=function(f){return Math.round(f*100)/100};var c=function(g){var l={};function h(){return g.performance&&g.performance.now?g.performance.now():new Date().getTime()}function n(o){return o===Object(o)}function k(o){if(n(o)){return o.eventName+"."+o.eventType}else{return o}}function m(o){if(n(o)){return o.eventName}else{return o}}function j(o){if(n(o)){return o.eventType}else{return""}}function f(o){var p=k(o);l[p]=h()}function i(r,u){var v=k(r);if(!l[v]){throw ("Error logging browser metrics event end: no start event for key '"+v+"'")}var t=h()-l[v];l[v]=null;var o=m(r),q=j(r);var p="browser.metrics.e."+o+(u?"."+u:""),s={version:e,value:t>d?"x":Math.ceil((t)/100),rawValue:a(t),eventType:q};g.AJS.Analytics?g.AJS.Analytics.triggerPrivacyPolicySafeEvent(p,s):g.AJS.trigger("analyticsEvent",{name:p,data:s})}return{start:f,end:i}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initEvents=c}}());(function(){var a=window.BrowserMetrics||{};if(a.isEnabled()){if(Math.random()<0.1){window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window)}window.ATL_PERF&&window.ATL_PERF.initEvents&&(function(){window.BrowserMetrics=window.ATL_PERF.initEvents(window)}())}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA Issue/Filter"+":",keys:[["Ctrl+Shift+J"]]})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-aui-browser', location = 'js/aui/internal/browser.js' */
(function(A){AJS._internal=AJS._internal||{};AJS._internal.browser=A(AJS.$)})(function(B){var A={};var C=null;A.supportsCalc=function(){if(C===null){var D=B('<div style="height: 10px; height: -webkit-calc(20px + 0); height: calc(20px);"></div>');C=(20===D.appendTo(document.documentElement).height());D.remove()}return C};A.supportsRequestAnimationFrame=function(){return !!window.requestAnimationFrame};return A});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'js/dialog2.js' */
(function(A){AJS.dialog2=A(AJS.$,AJS.layer,AJS._internal.widget)})(function(D,G,C){var F={"aui-focus":"false","aui-blanketed":"true"};function B(H){D.each(F,function(I,J){var K="data-"+I;if(!H[0].hasAttribute(K)){H.attr(K,J)}})}function A(H){if(H){this.$el=D(H)}else{this.$el=D(aui.dialog.dialog2({}))}B(this.$el)}A.prototype.on=function(I,H){G(this.$el).on(I,H);return this};A.prototype.off=function(I,H){G(this.$el).off(I,H);return this};A.prototype.show=function(){G(this.$el).show();return this};A.prototype.hide=function(){G(this.$el).hide();return this};A.prototype.remove=function(){G(this.$el).remove();return this};A.prototype.isVisible=function(){return G(this.$el).isVisible()};var E=C("dialog2",A);E.on=function(H,I){G.on(H,".aui-dialog2",I);return this};E.off=function(H,I){G.off(H,".aui-dialog2",I);return this};D(document).on("click",".aui-dialog2-header-close",function(H){H.preventDefault();E(D(this).closest(".aui-dialog2")).hide()});E.on("show",function(K,J){var I=[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"];var H;I.some(function(L){H=J.find(L+" :aui-tabbable");return H.length});H&&H.first().focus()});E.on("hide",function(J,I){var H=G(I);if(I.data("aui-remove-on-hide")){H.remove()}});return E});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param12 = new soy.StringBuilder();
  aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent}, param12);
  aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param12.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Chrome = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '', ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-', soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium'));
  aui.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.modal) ? 'data-aui-modal="true"' : '', (opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '', (opt_data.visible != true) ? 'aria-hidden="true"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}, output);
  aui.dialog.dialog2Panel(opt_data, output);
  aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent}, output);
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Header = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dialog2-header');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><h2 ', (opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '', ' class="aui-dialog2-header-main">', (opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '', (opt_data.titleContent) ? opt_data.titleContent : '', '</h2>', (opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + opt_data.actionContent + '</div>' : '', (opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + opt_data.secondaryContent + '</div>' : '', (opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml("Close") + '</span></a>' : '', '</header>');
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Footer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<footer', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dialog2-footer');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + opt_data.actionContent + '</div>' : '', (opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? opt_data.hintContent : '') + '</div>' : '', '</footer>');
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Panel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dialog2-content');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', '</div>');
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
/* module-key = 'com.atlassian.confluence.plugins.whatsnew:whats-new-resources', location = 'js/whats-new.js' */
AJS.toInit(function(d){var g=d("#whats-new-menu-link"),c,a,j,f,i=function(n){var l=!d(this).prop("checked");var k=AJS.Meta.get("context-path")+"/plugins/whatsnew/set.action";var m={isShownForUser:l};AJS.log("whatsnew > toggleDontShow > setting isShownForUser to: "+m.isShownForUser);AJS.safe.post(k,m,function(p,o){AJS.log("whatsnew > toggleDontShow > isShownForUser set to: "+p.isShownForUser)})},e=function(){if(!c){return}f&&clearTimeout(f);a.find(".aui-dialog2-content").spinStop();AJS.setVisible(c,true)},h=function(k){var m="What\u2019s New in Confluence {0}";var l=AJS.Meta.get("version-number").match(/^\d+\.\d+/);var o=AJS.format(m,l);a=d(Confluence.Templates.Whatsnew.dialog({dialogHeading:o,loggedIn:(typeof AJS.Meta.get("remote-user")!=="undefined"),checked:!k}));a.on("click","#whats-new-dialog-close",function(){AJS.dialog2(a).hide()});a.on("change","#dont-show-whats-new",i);c=a.find("iframe");var n=AJS.Meta.get("whats-new-iframe-src-override");if(typeof(n)==="undefined"){n=g[0].href}c[0].src=n;c.load(e);j=a.find(".whats-new-timeout");return AJS.dialog2(a)},b=function(){var k=AJS.Meta.get("context-path")+"/plugins/whatsnew/get.action";d.getJSON(k,function(l){h(l.isShownForUser).show();a.find(".aui-dialog2-content").spin("large");f=setTimeout(function(){c=null;a.find(".aui-dialog2-content").spinStop();AJS.setVisible(j,true)},10000)})};g.click(function(k){k.preventDefault();b()});AJS.Meta.getBoolean("show-whats-new")&&b()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.whatsnew:whats-new-resources', location = 'templates/whats-new.soy' */
// This file was automatically generated from whats-new.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Whatsnew == 'undefined') { Confluence.Templates.Whatsnew = {}; }


Confluence.Templates.Whatsnew.dialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param16 = new soy.StringBuilder();
  aui.buttons.button({type: 'link', id: 'whats-new-dialog-close', text: "Close"}, param16);
  aui.dialog.dialog2({id: 'whats-new-dialog', size: 'large', modal: false, removeOnHide: true, titleText: opt_data.dialogHeading, content: '<div class="whats-new-dialog-text"><div class="whats-new-timeout hidden"><div class="aui-message warning"><p class="title"><span class="aui-icon icon-warning"></span><strong>' + soy.$$escapeHtml("Oops.") + '</strong></p><p>' + soy.$$escapeHtml(AJS.format("We\u2019re having trouble downloading the \x3ca target\x3d\x22_blank\x22 href\x3d\x22{0}\x22\x3eWhat\u2019s New content\x3c/a\x3e from the Atlassian website. This may be because you have a slow internet connection or that no internet connection is available.","https://docs.atlassian.com/confluence/docs-58/whatsnew/full")) + '</p><p><a target="_blank" href="$req.contextPath/contactadministrators.action">' + soy.$$escapeHtml("Contact an administrator") + '</a> &raquo;</p></div></div></div><iframe id="whats-new-iframe" class="hidden" frameborder="0"></iframe>', footerActionContent: param16.toString(), footerHintContent: (opt_data.loggedIn) ? '<div class="dialog-tip"><input id="dont-show-whats-new" type="checkbox" name="dontshow" ' + ((opt_data.checked) ? 'checked="checked"' : '') + '><label for="dont-show-whats-new" type="checkbox"><span class="checkbox-label">' + soy.$$escapeHtml("Don\u2019t show again") + ' </span></label><span>' + soy.$$escapeHtml("(Access from \u2018Help\u2019 menu)") + '</span></div>' : ''}, output);
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/splitter-1.5.1/splitter.js' */
(function(c){c.fn.splitter=function(g){g=g||{};return this.each(function(){function n(f){f=e._posSplit+f[a.eventPos];a.outline?(f=Math.max(0,Math.min(f,b._DA-d._DA)),d.css(a.origin,f)):l(f)}function o(f){d.removeClass(a.activeClass);f=e._posSplit+f[a.eventPos];a.outline&&(m.remove(),m=null,l(f));j.css("-webkit-user-select","text");c(document).unbind("mousemove",n).unbind("mouseup",o)}function l(f){f=Math.max(e._min,b._DA-h._max,Math.min(f,e._max,b._DA-d._DA-h._min));d._DA=d[0][a.pxSplit];d.css(a.origin,
f).css(a.fixed,b._DF);e.css(a.origin,0).css(a.split,f).css(a.fixed,b._DF);h.css(a.origin,f+d._DA).css(a.split,b._DA-d._DA-f).css(a.fixed,b._DF);c.browser.msie||j.trigger("resize")}function k(a,b){for(var c=0,d=1;d<arguments.length;d++)c+=Math.max(parseInt(a.css(arguments[d]))||0,0);return c}var m,a=c.extend({activeClass:"active",pxPerKey:8,tabIndex:0,accessKey:""},{v:{keyLeft:39,keyRight:37,cursor:c.browser.msie?"e-resize":"ew-resize",splitbarClass:"vsplitbar",outlineClass:"voutline",type:"v",eventPos:"pageX",
origin:"left",split:"width",pxSplit:"offsetWidth",side1:"Left",side2:"Right",fixed:"height",pxFixed:"offsetHeight",side3:"Top",side4:"Bottom"},h:{keyTop:40,keyBottom:38,cursor:c.browser.msie?"n-resize":"ns-resize",splitbarClass:"hsplitbar",outlineClass:"houtline",type:"h",eventPos:"pageY",origin:"top",split:"height",pxSplit:"offsetHeight",side1:"Top",side2:"Bottom",fixed:"width",pxFixed:"offsetWidth",side3:"Left",side4:"Right"}}[(g.splitHorizontal?"h":g.splitVertical?"v":g.type)||"v"],g),b=c(this).css({position:"relative"}),
j=b.children().css({position:"absolute","-moz-outline-style":"none"}),e=c(j[0]),h=c(j[1]),i=c('<a href="javascript:void(0)"></a>').attr({accessKey:a.accessKey,tabIndex:a.tabIndex,title:a.splitbarClass}).bind(c.browser.opera?"click":"focus",function(){this.focus();d.addClass(a.activeClass)}).bind("keydown",function(b){b=b.which||b.keyCode;(b=b==a["key"+a.side1]?1:b==a["key"+a.side2]?-1:0)&&l(e[0][a.pxSplit]+b*a.pxPerKey,!1)}).bind("blur",function(){d.removeClass(a.activeClass)}),d=c(j[2]||"<div></div>").insertAfter(e).css("z-index",
4).append(i).attr({"class":a.splitbarClass,unselectable:"on"}).css({position:"absolute","user-select":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none"}).bind("mousedown",function(b){a.outline&&(m=m||d.clone(!1).insertAfter(e));j.css("-webkit-user-select","none");d.addClass(a.activeClass);e._posSplit=e[0][a.pxSplit]-b[a.eventPos];c(document).bind("mousemove",n).bind("mouseup",o)});/^(auto|default|)$/.test(d.css("cursor"))&&d.css("cursor",a.cursor);d._DA=d[0][a.pxSplit];
b._PBF=c.boxModel?k(b,"border"+a.side3+"Width","border"+a.side4+"Width"):0;b._PBA=c.boxModel?k(b,"border"+a.side1+"Width","border"+a.side2+"Width"):0;e._pane=a.side1;h._pane=a.side2;c.each([e,h],function(){this._min=a["min"+this._pane]||k(this,"min-"+a.split);this._max=a["max"+this._pane]||k(this,"max-"+a.split)||9999;this._init=!0===a["size"+this._pane]?parseInt(c.curCSS(this[0],a.split)):a["size"+this._pane]});i=e._init;isNaN(h._init)||(i=b[0][a.pxSplit]-b._PBA-h._init-d._DA);if(a.cookie){c.cookie||
alert("jQuery.splitter(): jQuery cookie plugin required");var p=parseInt(c.cookie(a.cookie));isNaN(p)||(i=p);e.bind("resize",_.debounce(function(){var b=String(d.css(a.origin));c.cookie(a.cookie,b,{expires:a.cookieExpires||365,path:a.cookiePath||document.location.pathname})},300))}isNaN(i)&&(i=Math.round((b[0][a.pxSplit]-b._PBA-d._DA)/2));var q=function(a){var d=b.offset().top,e=c("#footer").outerHeight(!0);e||(e=24);e=c(window).height()-e;b.css("height",Math.max(e-d-b._hadjust,b._hmin)+"px");(!a||
a.target==window)&&b.trigger("resize")};g.update=function(a){b._hadjust=k(b,"borderTopWidth","borderBottomWidth","marginBottom");b._hmin=Math.max(k(b,"minHeight"),20);a&&c(window).bind("resize",q);q()};a.anchorToWindow?g.update(!0):a.resizeToWidth&&!c.browser.msie&&c(window).bind("resize",function(){b.trigger("resize")});b.bind("resize",function(c,g){c.target==this&&(b._DF=b[0][a.pxFixed]-b._PBF,b._DA=b[0][a.pxSplit]-b._PBA,0>=b._DF||0>=b._DA||l(!isNaN(g)?g:!a.sizeRight&&!a.sizeBottom?e[0][a.pxSplit]:
b._DA-h[0][a.pxSplit]-d._DA))}).trigger("resize",[i])})}})(jQuery);window.placeFocus=function(){var c=document.getElementById("splitter-content");c&&0==AJS.$("#wysiwyg").length&&c.focus()};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/space-specific-quicknav.js' */
AJS.toInit(function(b){if(b("#com-atlassian-confluence").hasClass("theme-documentation")){var c=b("#quick-search-query"),e=c.closest("form"),d="true"===b("fieldset input[name='spaceSearch']",e).val()?b("#confluence-space-key").attr("content"):"";e.submit(function(){var a=c.val();0<=a.search(/all:/gi)&&c.val(b.trim(a.replace(/all:/gi,"")))});var f=AJS.defaultIfUndefined("Atlassian.SearchableApps.QuickNav",{defaultValue:Confluence.QuickNav});AJS.log("Applying doc-theme quick search");f.addDropDownPostProcess(function(a){d&&
(a=b("a.search-for",a),a.attr("href",a.attr("href")+"&where="+encodeURIComponent(d)))});f.setMakeParams(function(a){a={query:a};0<=a.query.search(/all:/gi)?(b("input[name='where']",e).val(""),a.query=b.trim(a.query.replace(/all:/gi,"")),a.query||(a.query="ALL")):d&&(a.spaceKey=d);return a});c.mouseover(function(){d&&c.attr("title",b("input[name='tooltip']",e).val())})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/js/page-loading-indicator.js' */
Confluence.PageLoadingIndicator=function(a){function c(){return $(".confluence-page-loading-blanket",a)}function d(){return $(".confluence-loading-indicator",a)}return{show:function(){0===c().length&&$(a).append(Confluence.Templates.pageLoadingIndicator());c().show();d().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){d().stop();c().hide()},showUntilResolved:function(a,b){this.show();a.always(_.bind(this.hide,this));b&&a.fail(function(){AJS.messages.error(".confluence-page-loading-errors",
{body:b})})},showUntilDialogVisible:function(a,b){var e=this,b=b||"An error has occurred connecting to the server. Please try again.",c=$(".aui-dialog:visible"),d=$(".aui-dialog2:visible");!c.length&&!d.length&&e.show();a.fail(function(){e.hide();AJS.messages.error(".confluence-page-loading-errors",{body:b})});AJS.bind("show.dialog",function(){e.hide()});if(null!=AJS.dialog2&&void 0!=AJS.dialog2)AJS.dialog2.on("show",function(){e.hide()})},destroy:function(){a.remove(".confluence-page-loading-blanket")}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>');
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
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/deferred-dialog-loader.js' */
AJS.$(function(){var c=Confluence.PageLoadingIndicator($("body"));_.each({userStatus:{resource:"confluence.userstatus:userstatus-resources",selector:"#create-user-status-link",event:"deferred.userstatus.click"},movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",selector:"#rte-button-location",event:"deferred.page-move.editor"},
moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"}},function(a){$("body").on("click",a.selector,function(d){var b=WRM.require("wr!"+a.resource,function(){AJS.trigger(a.event)});c.showUntilDialogVisible(b);b=a.resource+".requested";AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(b):AJS.trigger("analyticsEvent",{name:b});d.preventDefault()})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/page-permissions-deferred-loader.js' */
AJS.$(function(){var b=AJS.DarkFeatures.isEnabled("restrictions.new.dialog")?"com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources":"confluence.web.resources:page-permissions-editor",c=Confluence.PageLoadingIndicator($("body")),a=function(a){var d=WRM.require("wr!"+b,function(){AJS.trigger("deferred.page.permissions")});c.showUntilDialogVisible(d,"There was an error loading the page restrictions. Please try again later.");a.preventDefault()};AJS.$("body").on("click","#rte-button-restrictions,#action-page-permissions-link",
a);AJS.bind("system-content-metadata.open-restrictions-dialog",a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/ajs.js' */
define("atlassian-nps-plugin/js/amd-shims/ajs",function(){return AJS});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/templates.js' */
define("atlassian-nps-plugin/js/amd-shims/templates",function(){return NPS.Templates});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/wrm.js' */
define("atlassian-nps-plugin/js/amd-shims/wrm",function(){return WRM});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-util', location = '/js/nps/util.js' */
define("atlassian-nps-plugin/js/nps/util",["atlassian-nps-plugin/js/amd-shims/ajs"],function(a){var b={};b.kfyShuffle=function(f){for(var e=f.length-1;e>0;e--){var c=Math.floor(Math.random()*(e+1));var d=f[e];f[e]=f[c];f[c]=d}return f};b.sendAnalyticsEvent=function(c,d){var e={name:"nps."+c,data:d||{}};a.trigger("analyticsEvent",e)};return b});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/product/confluence.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/client-storage.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/submission.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/config-manager-client.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/config-manager-server.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/session-manager.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/atlassian-nps-plugin.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/bootstrap.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-resources-main', location = 'js/DiagramlyBlueprintInit.js' */
AJS.toInit(function(){if(Confluence&&Confluence.Blueprint&&Confluence.Blueprint.register){Confluence.Blueprint.register("com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-item",function(b,c,a){window.location=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(c)+"&newSpaceKey="+encodeURIComponent(c)+(b.getParentPageId()?"&fromPageId="+b.getParentPageId():"")+"&diagramlyBlueprint=1"})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/store-1.3.1.js' */
(function(){var l={},h=window,k=h.document,c="localStorage",n="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,o){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,o){var p=l.get(e);if(typeof p=="undefined"){p={}}o(p);l.set(e,p)};l.serialize=function(e){return JSON.stringify(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return JSON.parse(e)};function b(){try{return(c in h&&h[c])}catch(e){return false}}function m(){try{return(n in h&&h[n]&&h[n][h.location.hostname])}catch(e){return false}}if(b()){g=h[c];l.set=function(e,o){if(o===undefined){return l.remove(e)}g.setItem(e,l.serialize(o))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()}}else{if(m()){g=h[n][h.location.hostname];l.set=function(e,o){if(o===undefined){return l.remove(e)}g[e]=l.serialize(o)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>');f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var p=Array.prototype.slice.call(arguments,0);p.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var o=e.apply(l,p);j.removeChild(g);return o}}l.set=a(function(p,e,o){if(o===undefined){return l.remove(e)}p.setAttribute(e,l.serialize(o));p.save(c)});l.get=a(function(o,e){return l.deserialize(o.getAttribute(e))});l.remove=a(function(o,e){o.removeAttribute(e);o.save(c)});l.clear=a(function(q){var o=q.XMLDocument.documentElement.attributes;q.load(c);for(var p=0,e;e=o[p];p++){q.removeAttribute(e.name)}q.save(c)})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)}catch(i){l.disabled=true}if(typeof module!="undefined"){module.exports=l}else{if(typeof define==="function"&&define.amd){define(l)}else{this.store=l}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/atlassian-analytics.js' */
(function(b){var m=AJS.$.ajax;var h="atlassian-analytics";var g=typeof AJS.contextPath=="function"?AJS.contextPath():typeof AJS.Confluence!="undefined"?AJS.Confluence.getContextPath():window.contextPath!=null?window.contextPath:"";var l=null;var i=null;var d=null;var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(u){var t=Math.random()*16|0,s=u=="x"?t:(t&3|8);return s.toString(16)});var p=function(){var s="unknown";if(document.body.id=="jira"){s="jira"}else{if(document.body.id=="com-atlassian-confluence"){s="confluence"}}i=h+"."+s;d=i+".lock"};var c=function(){if(store.get(d)){return false}store.set(d,n);return(store.get(d)===n)};var q=function(){store.set(d,null)};var f=function(){var t=[],v,w,s,u;if(AJS.EventQueue.length==0){return}t=store.get(i)||t;for(s=0,u=AJS.EventQueue.length;s<u;++s){w=AJS.EventQueue[s];if(w.name){v={name:w.name,properties:w.properties,time:w.time||0};t.push(v)}}AJS.EventQueue.length=0;store.set(i,t)};var e=function(){var t;if(!c()){return}f();t=store.get(i);if(t&&t.length){store.remove(i);q();if(k(t)){var u=new Date().getTime();for(var s=0;s<t.length;s++){if(t[s].time>0){t[s].timeDelta=t[s].time-u}else{t[s].timeDelta=s-t.length}delete t[s].time}l=m({type:"POST",url:g+"/rest/analytics/1.0/publish/bulk",data:JSON.stringify(t),contentType:"application/json",dataType:"json"});l.fail(function(){AJS.EventQueue.concat(t);f()})}}else{q()}};var k=function(u){for(var t=u.length-1;t>=0;t--){var w="";var v=u[t];var s=v.properties;if(typeof v.name==="undefined"){w="you must provide a name for the event."}else{if(typeof s!=="undefined"&&s!==null){if(s.constructor!==Object){w="properties must be an object with key value pairs."}else{a(s)}}}if(w!==""){AJS.log("WARN: Invalid analytics event detected and ignored, "+w+"\nEvent: "+JSON.stringify(v));u.splice(t,1)}}return u.length};var a=function(u){for(var t in u){if(u.hasOwnProperty(t)){var s=u[t];if(typeof s!=="undefined"&&s!==null&&s.toString){u[t]=s.toString()}else{u[t]=""}}}};var j=function(){if(l&&!(l.state()==="resolved"||l.state()==="rejected")){l.abort()}};AJS.EventQueue=AJS.EventQueue||[];var o=Array.prototype.push;AJS.EventQueue.push=function(s){s.time=new Date().getTime();o.call(AJS.EventQueue,s)};AJS.toInit(function(){p();setTimeout(e,500);setInterval(e,5000);r()});b(window).unload(function(){j();f()});AJS.Analytics={triggerPrivacyPolicySafeEvent:function(s,t){AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");AJS.EventQueue.push({name:s,properties:t})}};AJS.bind("analytics",function(s,t){AJS.EventQueue.push({name:t.name,properties:t.data})});AJS.bind("analyticsEvent",function(s,t){AJS.EventQueue.push({name:t.name,properties:t.data})});var r=function(){if(window.location.pathname.indexOf("/secure/admin/ViewApplicationProperties")>-1){AJS.$("[data-property-id='analytics-enabled']").remove()}else{if(window.location.pathname.indexOf("/secure/admin/EditApplicationProperties")>-1){var t=AJS.$(":contains(Enable Atlassian analytics)");if(t.size()>0){var s=t[t.size()-2];if(s){s.remove()}}}}}}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.analytics.analytics-client:policy-update', location = 'js/policy-update.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param5 = new soy.StringBuilder('<ul class="aui-list-truncate">');
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5.append('<li><a href="', soy.$$escapeHtml(linkData7.link), '">', soy.$$escapeHtml(linkData7.label), '</a></li>');
  }
  param5.append('</ul>');
  aui.dropdown2.section({id: 'nl-remote-admin-section', label: "Other applications", content: param5.toString()}, output);
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
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=(function(a){a.AdminShortcuts=(function(){var c=function(){return AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:false,dataType:"json"})};var b=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{render:function(){c().done(function(e){e=_.reject(e,function(f){return f.local===true});if(e.length){var d=navlinks.templates.adminshortcuts.section({links:e});a.ApplicationHeader.Cog.getDropdown().append(d);b()}})}}}());return a}(NavLinks||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts-cdn.js' */
AJS.toInit(function(){if(AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")){NavLinks.AdminShortcuts.render()}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.localShortcuts && opt_data.localShortcuts.length > 0) {
    navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}, output);
  }
  if (opt_data.remoteShortcuts != null) {
    if (opt_data.remoteShortcuts.length > 0) {
      output.append('<h2 class="projectshortcuts-heading">Related Links</h2>');
      navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentData(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'}), output);
    }
  } else {
    navlinks.templates.projectshortcuts.dialogLoading(null, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="', soy.$$escapeHtml(opt_data.logoUrl), '"><h2 class="dialog-title">', soy.$$escapeHtml(opt_data.title), '</h2></div><div class="project-content-wrapper">', opt_data.contentHtml, '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output.append('<li', (shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '', '>');
    navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35, output);
    output.append('</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.link), '"', (opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '', '>', soy.$$escapeHtml(opt_data.label), '</a>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="projectshortcuts-loading">', (opt_data != null && opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', '</div>');
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
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,g){var i,k={},m="key",b="name",j="entity-type";function f(s){var n=e(this),o=n.data(m),q=n.data(b),p=n.data(j);if(typeof o==="undefined"){return}s.preventDefault();i=new AJS.Dialog({width:600,keypressListener:function(u){if(u.which==jQuery.ui.keyCode.ESCAPE){i.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){i.remove()}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(i);if(!k[o]){k[o]={entity:{title:q},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+o,{entityType:p}).done(t);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+o,{entityType:p}).done(r).fail(function(){var u=i.getCurrentPanel().body.find(".project-content-wrapper");u.find(".projectshortcuts-loading").remove();AJS.messages.error(u,{body:"Could not retrieve remote project shortcuts",closeable:false});c(i)})}else{l(k[o])}function t(u){k[o].localShortcuts=u.shortcuts;l(k[o])}function r(u){k[o].remoteShortcuts=u.shortcuts;l(k[o])}}function h(){return e(".project-shortcut-dialog-trigger img").attr("src")}function l(n){if(n.localShortcuts){i.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:n.entity.title,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(n)}));c(i)}}function a(p){var o=210;if(!p||p.length<=o){return p}var n=o;while(n>0&&p.charAt(n)!=" "){n--}if(n==0){n=o}p=p.substring(0,n);if(p.length>=n){p=p+"..."}return p}function c(n){var q=n.popup.element,p=q.find(".dialog-panel-body"),o=q.find(".dialog-components");p.height("auto");q.height(o.outerHeight()-1);e(".aui-shadow").remove()}function d(n,o){return e.ajax({url:n,cache:false,data:o,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/fecru-compatibility.js' */
if(jQuery!=undefined&&AJS!=undefined){jQuery=AJS.$};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/common/rest-service.js' */
AppLinks=AJS.$.extend(window.AppLinks||{},{Event:{NAMESPACE:"applinks"}});AppLinks.Event=AJS.$.extend(window.AppLinks.Event,{PREREADY:AppLinks.Event.NAMESPACE+".preready",READY:AppLinks.Event.NAMESPACE+".ready"});if(AJS.AppLinksInitialisationBinder){AppLinks.initialisationBinder=AJS.AppLinksInitialisationBinder}else{AppLinks.initialisationBinder=function(a){AJS.toInit(a)}}AppLinks.initialisationBinder(function(){var b=AJS.$;AppLinks=b.extend(window.AppLinks||{},{failure:function(e){if(e.status==401){window.location.reload()}else{var c=AppLinks.parseError(e);var d=b(".page-error");if(d.length>0){d.html(c).fadeIn("slow")}else{alert("REST request failed: "+c)}}},jsonRequest:function(d,e,f,g,c){if(f){f=JSON.stringify(f)}b(".page-error").fadeOut("fast");if(!c){c=AppLinks.failure}return jQuery.ajax({url:d,type:e,data:f,dataType:"json",contentType:"application/json; charset=utf-8",cache:false,success:g,error:c})},xmlRequest:function(d,e,f,g,c){if(f){f=JSON.stringify(f)}b(".page-error").fadeOut("fast");if(!c){c=AppLinks.failure}return jQuery.ajax({url:d,type:e,data:f,dataType:"xml",contentType:"application/xml; charset=utf-8",cache:false,success:g,error:c})},parseError:function(f){var c;try{c=JSON.parse(f.responseText)}catch(d){if(f.statusText){return c=f.statusText}else{return f}}if(c.message){if(b.isArray(c.message)){return c.message.join(" ")}return c.message}else{return f.statusText}},put:function(d,e,f,c){return AppLinks.jsonRequest(d,"PUT",e,f,c)},post:function(d,e,f,c){return AppLinks.jsonRequest(d,"POST",e,f,c)},update:function(d,e,c){AppLinks.put(AppLinks.self_link(d),d,e,c)},get:function(d,e,c){return AppLinks.jsonRequest(d,"GET",null,e,c)},getXml:function(d,e,c){return AppLinks.xmlRequest(d,"GET",null,e,c)},self_link:function(e){for(var c=0,f=e.link.length;c<f;c++){var d=e.link[c];if(d.rel=="self"){return d.href}}throw"No self-link found"},del:function(f,e,d){var c;if(typeof(f)=="string"){c=f}else{c=AppLinks.self_link(f)}return AppLinks.jsonRequest(c,"DELETE",null,e,d)},SPI:b.extend({},{API_VERSION:"1.0",REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks/",BASE_URL:AJS.contextPath()+"/rest/applinks/1.0",setApiVersion:function(c){AppLinks.SPI.API_VERSION=c;AppLinks.SPI.setBaseUrl(AppLinks.SPI.REST_RESOURCE_URL+AppLinks.SPI.API_VERSION)},setBaseUrl:function(c){AppLinks.SPI.BASE_URL=c},getRemoteRestBaseUrl:function(c){return c+"/rest/applinks/"+AppLinks.SPI.API_VERSION},getRemotePluginServletBaseUrl:function(c){return c+"/plugins/servlet"},getAllLinks:function(e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink";return AppLinks.get(c,e,d)},getAllLinksWithAuthInfo:function(e,d){var c=AppLinks.SPI.BASE_URL+"/listApplicationlinks";return AppLinks.get(c,e,d)},getLinksOfType:function(e,f,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/type/"+e;return AppLinks.get(c,f,d)},tryToFetchManifest:function(e,f,d){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/manifest.json?url="+encodeURIComponent(e);return AppLinks.get(c,f,d)},getManifestFor:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/manifest/"+f+".json";return AppLinks.get(c,e,d)},getLocalManifest:function(e,d){var c=AppLinks.SPI.BASE_URL+"/manifest.json";return AppLinks.get(c,e,d)},getRemoteManifest:function(e,f,d){var c=AppLinks.SPI.getRemoteRestBaseUrl(e)+"/manifest.json";return AppLinks.get(c,f,d)},getRemoteOAuthConsumerInfo:function(e,f,d){var c=AppLinks.SPI.getRemotePluginServletBaseUrl(e)+"/oauth/consumer-info";return AppLinks.getXml(c,f,d)},createStaticUrlAppLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createStaticUrlAppLink?typeId="+f;return AppLinks.post(c,null,e,d)},createLink:function(j,h,l,d,i,k,f,m,e){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var g={applicationLink:j,username:h,password:l,createTwoWayLink:d,customRpcURL:i,rpcUrl:k,configFormValues:f};return AppLinks.post(c,g,m,e)},createLinkWithOrphanedTrust:function(j,h,m,d,i,k,f,l,n,e){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var g={applicationLink:j,username:h,password:m,createTwoWayLink:d,customRpcURL:i,rpcUrl:k,configFormValues:f,orphanedTrust:l};return AppLinks.post(c,g,n,e)},verifyTwoWayLinkDetails:function(c,i,j,f,h,e){var d=AppLinks.SPI.BASE_URL+"/applicationlinkForm/details";var g={username:j,password:f,remoteUrl:c,rpcUrl:i};return AppLinks.post(d,g,h,e)},getApplicationLinkInfo:function(e,f,d){var c=AppLinks.SPI.BASE_URL+"/applicationlinkInfo/id/"+e;return AppLinks.get(c,f,d)},deleteLink:function(g,c,f,e){var d=AppLinks.SPI.BASE_URL+"/applicationlink/"+g.id;if(c){d+="?reciprocate=true"}return AppLinks.del(d,f,e)},makePrimary:function(e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/primary/"+e.id;return AppLinks.post(c,null,d)},relocate:function(h,f,c,g,e){var d=AppLinks.SPI.BASE_URL+"/relocateApplicationlink/"+h.id+"?newUrl="+encodeURIComponent(f)+"&nowarning="+(c?"true":"false");return AppLinks.post(d,null,g,e)},legacyUpgrade:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/upgrade/legacy/"+f.id;return AppLinks.post(c,null,e,d)},ualUpgrade:function(g,c,f,e){var d=AppLinks.SPI.BASE_URL+"/upgrade/ual/"+g.id;return AppLinks.post(d,c,f,e)},getEntityTypesForApplicationType:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/type/entity/"+f;return AppLinks.get(c,e,d)},getLocalEntitiesWithLinksToApplication:function(c,f,e){var d=AppLinks.SPI.BASE_URL+"/entitylink/localEntitiesWithLinksTo/"+c+".json";return AppLinks.get(d,f,e)},getEntityLinksForApplication:function(c,f,e){var d=AppLinks.SPI.BASE_URL+"/entities/"+c+".json";AppLinks.get(d,f,e)},getEntityLinksForApplicationUsingAnonymousAccess:function(c,f,e){var d=AppLinks.SPI.BASE_URL+"/entities/anonymous/"+c+".json";return AppLinks.get(d,f,e)},createNonUalEntityLink:function(l,g,d,f,j,e,k,i){var c=AppLinks.SPI.BASE_URL+"/entitylink/"+l+"/"+g+"?reciprocate=false";var h={applicationId:d,typeId:f,key:j,name:e,isPrimary:false};return AppLinks.put(c,h,k,i)},createEntityLink:function(h,g,d,c,i,f){var e=AppLinks.SPI.BASE_URL+"/entitylink/"+h+"/"+g+"?reciprocate=";e+=(c?"true":"false");return AppLinks.put(e,d,i,f)},getConfiguredEntityLinks:function(f,e,g,d){var c=AppLinks.SPI.BASE_URL+"/entitylink/primaryLinks/"+f+"/"+e+".json";return AppLinks.get(c,g,d)},deleteEntityLink:function(h,g,d,c,i,f){var e=AppLinks.SPI.BASE_URL+"/entitylink/"+h+"/"+g+"?typeId="+d.typeId+"&key="+d.key+"&applicationId="+d.applicationId+"&reciprocate="+c;return AppLinks.del(e,i,f)},makePrimaryEntityLink:function(g,f,c,h,e){var d=AppLinks.SPI.BASE_URL+"/entitylink/primary/"+g+"/"+f+"?typeId="+c.typeId+"&key="+c.key+"&applicationId="+c.applicationId;return AppLinks.post(d,null,h,e)},canDeleteAppLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/permission/reciprocate-application-delete/"+f;return AppLinks.get(c,e,d)},canDeleteEntityLink:function(g,f,c,h,e){var d=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-delete/"+c.applicationId+"/"+g+"/"+f+"/"+c.typeId+"/"+c.key;return AppLinks.get(d,h,e)},canCreateReciprocateEntityLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-create/"+f;return AppLinks.get(c,e,d)},processPermissionCode:function(d){var c={noPermission:function(){},missing:function(){},credentialsRequired:function(e){},authenticationFailed:function(e){},noAuthentication:function(e){},noAuthenticationConfigured:function(){},noConnection:function(){},allowed:function(){},unrecognisedCode:function(e){},updateView:function(g,f,e){}};if(!d){d={}}d=b.extend(c,d);return function(f){var e=f.code;if(e=="NO_PERMISSION"){d.noPermission()}else{if(e=="MISSING"){d.missing()}else{if(e=="CREDENTIALS_REQUIRED"){d.credentialsRequired(f.url)}else{if(e=="AUTHENTICATION_FAILED"){d.authenticationFailed(f.url)}else{if(e=="NO_AUTHENTICATION"){d.noAuthentication(f.url)}else{if(e=="NO_AUTHENTICATION_CONFIGURED"){d.noAuthenticationConfigured()}else{if(e=="NO_CONNECTION"){d.noConnection()}else{if(e=="ALLOWED"){d.allowed()}else{d.unrecognisedCode(f.code)}}}}}}}}}},addAuthenticationTrigger:function(e,c,d){if(!d){d={}}if(typeof d.onSuccess=="undefined"){d.onSuccess=function(){location.reload()}}if(typeof d.onFailure=="undefined"){d.onFailure=function(){return true}}b(e).unbind("click");b(e).click(function(){if(d.before){d.before()}AppLinks.authenticateRemoteCredentials(c,d.onSuccess,d.onFailure)})},deleteOrphanedTrust:function(g,e,f,d){var c=AppLinks.SPI.BASE_URL+"/orphaned-trust/"+e+"/"+g;return AppLinks.del(c,f,d)},getOrphanedTrust:function(e,d){var c=AppLinks.SPI.BASE_URL+"/orphaned-trust/";return AppLinks.get(c,e,d)},showCreateEntityLinkSuggestion:function(){return true},getApplicationLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/"+f;return AppLinks.get(c,e,d)},createApplicationLink:function(f,d,i,j,c,k,g){var e=AppLinks.SPI.BASE_URL+"/applicationlink";var h={id:f,name:d,rpcUrl:i,displayUrl:j,typeId:c};return AppLinks.put(e,h,k,g)},createConsumer:function(e,n,d,m,i,l,g,p,h,k,o,f){var c=AppLinks.SPI.BASE_URL+"/applicationlink/"+e+"/authentication/consumer";var j={key:n,name:d,description:m,sharedSecret:i,publicKey:l,outgoing:k,twoLOAllowed:g,executingTwoLOUser:p,twoLOImpersonationAllowed:h};return AppLinks.put(c,j,o,f)},createConsumerAutoConfigure:function(j,i,f,c,h,e){var d=AppLinks.SPI.BASE_URL+"/applicationlink/"+j+"/authentication/consumer?autoConfigure=true";var g={twoLOAllowed:i,executingTwoLOUser:f,twoLOImpersonationAllowed:c};return AppLinks.put(d,g,h,e)},registerProvider:function(i,h,e,g,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/"+i+"/authentication/provider";var f={config:e,provider:h};return AppLinks.put(c,f,g,d)}},(window.AppLinks&&window.AppLinks.SPI)||{})});var a="applinks";AppLinks.UI={showInfoBox:function(c){b(".aui-message.success").remove();AppLinks.UI.createMessage("success",c,"page-info")},hideInfoBox:function(){b(".aui-message.success").remove()},showErrorBox:function(c){AppLinks.UI.createMessage("error",c,"page-error")},hideErrorBox:function(){b(".aui-message.error").remove()},showWarningBox:function(d){if(b.isArray(d)&&d.length>0){var c=b("<ul></ul>");b(d).each(function(f){c.append(b("<li/>",{text:d[f]}))});var e=b('<div class="page-warning"></div>').append(c);AppLinks.UI.createMessage("warning",e.html(),"page-warning")}else{AppLinks.UI.createMessage("warning",d,"page-warning")}},hideWarningBox:function(){b(".aui-message.warning").remove()},shortenString:function(d,c){if(d.length>c){d=d.substring(0,c)+"..."}return d},createMessage:function(d,e,c){var f=b('<div class="'+c+'">');f.html(e);AJS.messages[d](".applinks-message-bar",{title:"",body:f.wrap("<div></div>").parent().html(),closeable:true})},displayValidationErrorMessages:function(c,f,e){if(b.isArray(e)){b(e).each(function(j,h){var k=b('<div class="error applinks-error">');k.text(h);b(f).find("."+c).append(k)})}else{if(typeof e!="undefined"){var g=b('<div class="error applinks-error">');g.text(e.toString());b(f).find("."+c).append(g)}}},displayValidationError:function(c,d,e){return function(j){if(j.status==401){window.location.reload();return}b(".applinks-error").remove();b(".loading").remove();var h=j.responseText;var i=b.parseJSON(h);var g=i.message;if(typeof i.fields=="undefined"){AppLinks.UI.displayValidationErrorMessages(c,d,g)}else{var f=i.fields;b(f).each(function(k){var l=b('<div class="error applinks-error" id="'+f[k]+'-error">');l.text(g[k]);if(b(d).find("."+f[k]).length>0){l.insertAfter(b(d).find("."+f[k]))}else{l.insertAfter(b(d).find("."+c).append(l))}})}b(d).find("."+c).addClass("fully-populated-errors");if(e){e()}}},addProtocolToURL:function(c){var f=b.trim(c);var e=f.toLowerCase();var d=false;if(e.length>=7){if(e.substring(0,7).indexOf("http")!=-1){d=true}}if(!d){f="http://"+f}return f},prettyJoin:function(d,g,f){if(!f){f=AppLinks.I18n.getText("applinks.and")}var c=d.length;var e="";b.each(d,function(h,i){if(h==(c-1)&&c>1){e+=" "+f+"  "+g(i)}else{e+=g(i);if(h+2<c){e+=", "}}});return e},showLoadingIcon:function(c){b('<span class="loading">&nbsp;</span>').insertAfter(c)},hideLoadingIcon:function(c){b(c).next(".loading").remove()},findUrl:function(f){var e=undefined;var g=f.toLowerCase();var d=g.indexOf("http:");if(d==-1){d=g.indexOf("https:")}if(d>-1){var c=g.indexOf(" ",d);if(c==-1){c=g.length}e=f.substring(d,c)}return e},findApplicationType:function(c){c=c.toLowerCase();if(c.indexOf("jira")!=-1){return"jira"}else{if(c.indexOf("fisheye")!=-1){return"fecru"}else{if(c.indexOf("confluence")!=-1){return"confluence"}else{if(c.indexOf("refapp")!=-1){return"refapp"}else{return undefined}}}}},escapeSelector:function(c){return c.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},sanitiseHTML:function(c){var d={"<":"&lt;",'"':"&quot;","&":"&amp;"};return c.replace(/[<"&]/g,function(e){return d[e]})},refreshOrphanedTrust:function(){var c=function(d){b("tr.orphaned-trust-row").each(function(){var j=b(this);var k=j.attr("data-id");var g=j.attr("data-type");var f=false;for(var e=0;e<d.orphanedTrust.length;e++){var h=d.orphanedTrust[e];if(k==h.id&&g==h.type){f=true;break}}if(!f){j.remove();if(d.orphanedTrust.length==0){b(".orphaned-trust-warning").hide()}}})};AppLinks.SPI.getOrphanedTrust(c)},removeCssClass:function(c,d){b(c).removeClass(function(f,h){var g=h.split(" ");var e="";b.each(g,function(i,j){if(j.indexOf(d)!=-1){e=j}});return e})}};(function(){var c=b({});b.each(["bind","unbind","trigger"],function(d,e){AppLinks.UI[e]=function(){return c[e].apply(c,arguments)}})})();AppLinks.I18n={interpolate:function(d,c){if(c){if(!b.isArray(c)){c=[new String(c)]}c.unshift(d);d=AJS.format.apply(AJS,c)}return d},getTextWithPrefix:function(c,d){return AppLinks.I18n.interpolate(appLinksI18n.entries[a+"."+c],d)},getText:function(c,d){return AppLinks.I18n.interpolate(AppLinks.I18n.resolveValue(c),d)},getApplicationTypeName:function(c){return appLinksI18n.entries["applinks.application.type."+c]},getEntityTypeName:function(c){return appLinksI18n.entries["applinks.entity.type."+c]},getPluralizedEntityTypeName:function(c){return appLinksI18n.entries["applinks.entity.type.plural."+c]},getAuthenticationTypeName:function(c){return appLinksI18n.entries["applinks.auth.provider."+c]},resolveValue:function(c){var d=appLinksI18n.entries[c];return typeof d=="undefined"?c:d}};AppLinks.Docs={createDocLink:function(d,e,c){if(!c){c=""}else{c=" "+c}return b("<a/>",{"class":"ual-help-link"+c,href:AppLinks.Docs.getDocHref(d,e),target:"_blank",text:AppLinks.I18n.getText("applinks.help"),title:AppLinks.I18n.getText("applinks.help")})},getDocHref:function(d,e){var c=AppLinks.Docs.resolveValue("applinks.docs.root")+"/"+AppLinks.Docs.resolveValue(d);if(e){c+="#"+AppLinks.Docs.resolveValue(e)}return c},resolveValue:function(c){var d=applinksDocs.entries[c];return typeof d=="undefined"?c:d}};b(document).trigger(AppLinks.Event.PREREADY);b(document).trigger(AppLinks.Event.READY)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/common/json2.js' */
if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/component/autocomplete.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){AppLinks.autoComplete={cacheManager:function(c){var a={},b=[],c=c||30;return{get:function(d){return a[d]},put:function(d,e){a[d]=e;b.push(d);if(b.length>c){delete a[b.shift()]}},clear:function(){a={};b=[]}}}};(function(d){var c=function(f){AJS.log("InputDrivenDropDown: truncating text");var h=f.$.closest(".aui-dropdown").width(),g=20;d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=AJS("var","&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth>h){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f,l){if(!l.length||!l[0]){return}AJS.log("InputDrivenDropDown: highlighting tokens");for(var h=0,j=l.length;h<j;h++){var g=l[h];l[h]=g?g.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"):""}var k=new RegExp("("+l.join("|")+")","gi");d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var m=d(this),i=m.html().replace(k,"<strong>$1</strong>");m.html(i)})};var e=function(j,g){var i=j.options,h=j.dd;if(h){h.hide();h.$.remove()}i.ajsDropDownOptions=i.ajsDropDownOptions||{};if(i.ajsDropDownOptions&&!i.ajsDropDownOptions.alignment){i.ajsDropDownOptions.alignment="left"}i.ajsDropDownOptions.selectionHandler=i.ajsDropDownOptions.selectionHandler||function(l,k){if(l.type!="click"){l.preventDefault();d("a",k).click();document.location=d("a",k).attr("href")}};i.ajsDropDownOptions.displayHandler=function(k){return AJS.escapeHtml(k.name)};var f=j.dd=new AJS.dropDown(g.matrix,i.ajsDropDownOptions)[0];if(i.ajsDropDownOptions&&i.ajsDropDownOptions.className){f.$.addClass(i.ajsDropDownOptions.className)}if(i.dropdownPlacement){i.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}b(f,g.queryTokens||[g.query]);c(f);if(i.dropdownPostprocess){i.dropdownPostprocess(f.$)}f.show(j._effect);if(typeof i.onShow=="function"){i.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AppLinks.autoComplete.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(h,g){var f=this;if(h!=f._value||g){f._value=h;f.busy=false;clearTimeout(f._timer);if(g||(/\S{0,}/).test(h)){var i=f.cacheManager.get(h);if(i){e(f,i)}else{f.busy=true;f._timer=setTimeout(function(){f.options.getDataAndRunCallback.call(f,h,f.show)},200)}}else{f.dd&&f.dd.hide()}}};a.prototype.dropDownLength=function(){return this.dd.links?this.dd.links.length:0};a.prototype.dropDownItem=function(f){return this.dropDownLength()>f?this.dd.links[f]:null};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AppLinks.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/component/wizard.js' */
AJS.$(document).bind(AppLinks.Event.PREREADY,function(){(function(d){d.fn.wizard=function(v){var u={width:500,height:350,onshow:function(w,x){return true},aftershow:function(){return true},oncancel:function(){return true},onsubmit:function(){return true},aftersubmit:function(){return true},onnext:function(){return true},onprevious:function(){return true},cancelLabel:AppLinks.I18n.getText("applinks.cancel"),submitLabel:AppLinks.I18n.getText("applinks.create"),nextLabel:AppLinks.I18n.getText("applinks.next"),previousLabel:AppLinks.I18n.getText("applinks.previous"),id:""};if(!v){v={}}v=d.extend(u,v);var t=this;this.each(function(){var D=d(this);var w=new AJS.Dialog(v.width,v.height,v.id);var L=q(w,v.onshow,v.aftershow);var K=c(w,v.oncancel);var z=h(w,v.onsubmit,v.aftersubmit);var M=a(w,v.onprevious);var I=m(w,v.onnext);var G=k(w);var B=o(w);var C=g(w);var H=l(w);var J=s(w);var E=n(w);if(v.showButtonId){d("#"+v.showButtonId).click(L)}var y=f(D);for(var A=0;A<y.length;A++){var F=y[A];j(w,F);if(F.className){w.addHeader(F.title,F.className+"-header")}else{w.addHeader(F.title)}if(A!=0&&d(F.div).attr("previous")!="false"){w.addButton(v.previousLabel,M,"applinks-previous-button")}if(A<y.length-1&&d(F.div).attr("submit")!="true"&&d(F.div).attr("next")!="false"){w.addButton(v.nextLabel,I,"applinks-next-button")}if(d(F.div).attr("submit")=="true"){w.addButton(v.submitLabel,z,"wizard-submit")}if(!w.getPage(A).buttonpanel){w.addButton("",null);d(w.getPage(A).buttonpanel).empty();var x=d('<a class="button-panel-button applinks-cancel-link">'+v.cancelLabel+"</a>");w.getPage(A).buttonpanel.append(x);x.click(K)}else{var x=d('<a class="button-panel-link button-panel-cancel-link applinks-cancel-link">'+v.cancelLabel+"</a>");d(w.getPage(A).buttonpanel).append(x);x.click(K)}if(A<y.length-1){w.addPage()}}t={dialog:w,nextPage:I,prevPage:M,submit:z,cancel:K,show:L,disableNextBtn:G,enableNextBtn:B,disableSubmitBtn:C,enableSubmitBtn:H,disablePreviousBtn:J,enablePreviousBtn:E};w.gotoPage(0);w.gotoPanel(0)});return t};function s(t){return function(){b(r(t,"applinks-previous-button"))}}function n(t){return function(){i(r(t,"applinks-previous-button"))}}function k(t){return function(){b(r(t,"applinks-next-button"))}}function o(t){return function(){i(r(t,"applinks-next-button"))}}function g(t){return function(v){var u=r(t,"wizard-submit");b(u);if(typeof(v)=="undefined"||v){d('<span class="loading">&nbsp;</span>').insertBefore(u)}else{u.parent().find(".loading").remove()}}}function l(t){return function(){var u=r(t,"wizard-submit");i(u);u.parent().find(".loading").remove()}}function r(u,t){return d(u.getPage(u.curpage).buttonpanel).find("."+t)}function p(t){d(t.popup.element).find("form").each(function(){this.reset()})}function i(t){t.attr("disabled",false)}function b(t){t.attr("disabled",true)}function q(t,u,v){return function(w){if(u(t,w)!==false){t.gotoPage(0);t.gotoPanel(0);d(document).unbind("keydown.ual.dialog");d(document).bind("keydown.ual.dialog",e(t));t.show();v()}}}function c(t,u){return function(){if(u(t)!==false){t.hide();p(t)}}}function a(t,u){return function(){if(u(t)!==false){t.prevPage()}}}function m(t,u){return function(){if(u(t)!==false){t.nextPage()}}}function e(t){return function(u){if(u.keyCode===27){p(t);d(document).unbind("keydown.ual.dialog")}}}function h(u,v,t){return function(){if(v(u)!==false){t(u);p(u)}}}function j(v,w){var u=d("> div[panel]",w.div);if(u.length>0){u.each(function(y,z){var x=v.addPanel(z.title,null,z.className,"menu-"+z.id);x.getCurrentPanel().body.append(u[y])})}else{var t=v.addPanel(w.title);t.getCurrentPanel().body.append(w.div)}}function f(v){var u=d(" > div",v);var t=[];u.each(function(x){var w=d(this);t[x]={title:w.attr("title")||null,className:w.attr("class"),div:w}});return t}})(jQuery)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/feature/applinks-wizard/applinkwizard.js' */
(function(a){AppLinks.Wizard={getWizard:function(){return a("#create-application-link-container").data("wizard")},initAuthenticationUI:function(d){var h=a(d);var f=h.find(".create-reciprocal-link");var c=h.find(".ual-arrow");var l=h.find(".two-way-link-details");var j=h.find(".reciprocal-link-description");var b=h.find(".no-reciprocal-link-description");f.click(function(){if(f.is(":checked")){c.removeClass("no-background");l.show();j.show();b.hide()}else{c.addClass("no-background");l.hide();j.hide();b.show()}});var i=h.find(".same-user-radio-btn");var k=h.find(".different-user-radio-btn");var e=h.find(".different-userbase-image");var g=h.find(".same-userbase-image");i.click(function(){e.addClass("different-userbase-image-grey");g.removeClass("same-userbase-image-grey")});k.click(function(){g.addClass("same-userbase-image-grey");e.removeClass("different-userbase-image-grey")})},initNonUALUI:function(e){var c=a(e);var b=c.find(".application-types");for(var d=0;d<nonAppLinksApplicationTypes.length;d++){a('<option value="'+nonAppLinksApplicationTypes[d].typeId+'">'+nonAppLinksApplicationTypes[d].label+"</option>").appendTo(b)}},fetchManifest:function(e,h,d,b){var i=h.find("#application-url");if(i.val()==""){var c=h.find("#application-types");if(c.val()==""){a('<div class="error applinks-error">'+AppLinks.I18n.getText("applinks.error.url.field.empty")+"</div>").insertAfter(i);return false}var g=function(j){e.enableSubmitBtn();e.enablePreviousBtn();e.cancel();AppLinks.UI.listApplicationLinks(j.applicationLink.id,"new",j)};AppLinks.SPI.createStaticUrlAppLink(c.val(),g,null);return true}var f=AppLinks.UI.addProtocolToURL(i.val());AppLinks.UI.showLoadingIcon(i);var g=function(l){var k=l;e.enableNextBtn();h.find(".loading").remove();h.find(".reciprocal-rpc-url").val(a("#baseUrl").val());if(typeof l.typeId!="undefined"){AppLinks.Wizard.handleUALManifest(k,h);e.dialog.gotoPage(2);h.find(".reciprocal-link-username").focus();if(d){d(k)}}else{if(l.code=="applinks.warning.redirected.host"&&!i.data("hasWarnedAboutRedirection")){AppLinks.UI.displayValidationErrorMessages("manifest-validation-errors",h,l.warning);i.data("hasWarnedAboutRedirection","true");var m=function(){a(i).removeData("hasWarnedAboutRedirection");a(i).unbind("change",m)};i.bind("change",m)}else{if(l.code=="applinks.warning.unknown.host"&&!i.data("forceWhenHostIsOffline")){AppLinks.UI.displayValidationErrorMessages("manifest-validation-errors",h,l.warning);i.data("forceWhenHostIsOffline","true");var j=function(){a(i).removeData("forceWhenHostIsOffline");a(i).unbind("change",j)};i.bind("change",j)}else{if(k.code=="applinks.warning.unknown.host"||k.code=="applinks.warning.redirected.host"){delete k.warning;delete k.code}AppLinks.Wizard.handleNonUALManifest(k,f,h);e.dialog.gotoPage(1);h.find(".application-name").focus();if(b){b(k)}}}}};e.disableNextBtn();AppLinks.SPI.tryToFetchManifest(f,g,AppLinks.UI.displayValidationError("manifest-validation-errors",h,function(){e.enableNextBtn()}));return f},handleUALManifest:function(f,e){var c=a(e);c.find(".remote-app-image").removeClass(function(j,l){var k=l.split(" ");var i="";a.each(k,function(m,n){if(n.indexOf("application-type-image-")!=-1){i=n}});return i});c.find(".remote-app-image").addClass("application-type-image-"+f.typeId);c.find(".link-to-app-type").html(AppLinks.I18n.getText("applinks.create.title.link.to",AppLinks.I18n.getApplicationTypeName(f.typeId)));c.find(".remote-app-name").text(AppLinks.UI.shortenString(f.name,20));c.find(".create-reciprocal-link").attr("checked",true);c.find("#reciprocal-link-back-to-server").html(AppLinks.I18n.getText("applinks.create.link.back.to.server",AJS.escapeHtml(f.name)));var d=["administrator",AJS.escapeHtml(f.name),'<a target="_blank" href="'+AppLinks.Docs.getDocHref("applinks.docs.adding.application.link")+'">',"</a>"];var h=f.applinksVersion.split(".");var b=parseInt(h[0]);var g=parseInt(h[1]);if((f.typeId=="jira"||f.typeId=="confluence")&&(b==3&&g<10)){d[0]="system administrator"}c.find(".reciprocal-link-description").html(AppLinks.I18n.getText("applinks.create.two.way.link",d));c.find(".no-reciprocal-link-description").hide();c.find(".no-reciprocal-link-description").html(AppLinks.I18n.getText("applinks.create.two.way.no.link",AJS.escapeHtml(f.name)));c.find(".reciprocal-link-username").val("");c.find(".reciprocal-link-password").val("");c.find(".ual-arrow").removeClass("no-background");c.find(".two-way-link-details").show();c.find(".reciprocal-link-description").show();c.find(".no-reciprocal-link-description").hide()},handleNonUALManifest:function(d,e,c){var b=a(c);b.find(".application-name").val("");b.find(".application-types option:first-child").attr("selected","selected");b.find(".non-ual-application-url").text(e);if(d.warning){b.find(".create-non-ual-warning").show();b.find(".create-non-ual-warning").html(d.warning)}else{b.find(".create-non-ual-warning").hide()}},checkReciprocalLinkFormThreeStepMode:function(c,d,g,j,f){var h=a(c);if(h.find(".create-reciprocal-link").is(":checked")){var k=a.trim(h.find(".reciprocal-rpc-url").val());if(k==""){a("<div class='error applinks-error'>"+AppLinks.I18n.getText("applinks.error.url.field.empty")+"</div>").insertAfter(h.find(".reciprocal-rpc-url"));if(f){f()}return}var e=h.find(".reciprocal-link-username");var b=h.find(".reciprocal-link-password");if(e.val()==""){a('<div class="error applinks-error">'+AppLinks.I18n.getText("applinks.error.username.empty")+"</div>").insertAfter(e);if(f){f()}return false}var i=function(l){h.find(".same-user-description").find("input").attr("checked",true);h.find(".trust-radio-btn").attr("checked",true);h.find(".same-user-radio-btn").click();g(l)};k=AppLinks.UI.addProtocolToURL(k);AppLinks.SPI.verifyTwoWayLinkDetails(j,k,e.val(),b.val(),i,AppLinks.UI.displayValidationError("two-way-link-errors",c,f));return false}else{d();return false}},checkReciprocalLinkFormTwoStepMode:function(f,h,b,i){var c=a(f);var g=a.trim(c.find(".reciprocal-rpc-url").val());if(g==""){a("<div class='error applinks-error'>"+AppLinks.I18n.getText("applinks.error.url.field.empty")+"</div>").insertAfter(c.find(".reciprocal-rpc-url"));if(i){i()}return}var d=c.find(".reciprocal-link-username");var e=c.find(".reciprocal-link-password");if(d.val()==""){a('<div class="error applinks-error">'+AppLinks.I18n.getText("applinks.error.username.empty")+"</div>").insertAfter(d);if(i){i()}return false}g=AppLinks.UI.addProtocolToURL(g);AppLinks.SPI.verifyTwoWayLinkDetails(h,g,d.val(),e.val(),b,AppLinks.UI.displayValidationError("two-way-link-errors",f,i));return false}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/common/urls.js' */
(function(){AppLinks.Urls={generateUrl:function(b,a){var c=b;if(typeof a=="undefined"){return c}else{AJS.$.each(a,function(d,e){if(c.indexOf("?")<0){c=c+"?"}else{c=c+"&"}c=c+d+"="+encodeURIComponent(JSON.stringify(e))});return c}},generateApplinksAdminUrl:function(d,c,a){var b=d+"/plugins/servlet/applinks/listApplicationLinks";if(c==="confluence"){b=d+"/admin/listapplicationlinks.action"}return AppLinks.Urls.generateUrl(b,a)}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){(function(a){AppLinks.OAuthCallback=function(){};AppLinks.OAuthCallback.prototype.success=function(){this.aouthWindow.close();this.onSuccess()};AppLinks.OAuthCallback.prototype.failure=function(){this.aouthWindow.close();this.onFailure()};AppLinks.OAuthCallback.prototype.show=function(b,d,c){this.onSuccess=d;this.onFailure=c;this.aouthWindow=window.open(b,"com_atlassian_applinks_authentication")};oauthCallback=new AppLinks.OAuthCallback();AppLinks.authenticateRemoteCredentials=function(b,d,c){a(".applinks-error").remove();oauthCallback.show(b,d,c)}})(AJS.$)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:common-resources', location = 'templates/extra/jira/common.js' */
AJS.JiraIssues={Remote:{}};var appLinksI18n={entries:{}};jQuery(document).ready(function(){AJS.JiraIssues=jQuery.extend(AJS.JiraIssues||{},{bindOAuthLink:function(c,f){var e={onSuccess:function(){f()},onFailure:function(){}};var d=c.attr("href");c.click(function(g){AppLinks.authenticateRemoteCredentials(d,e.onSuccess,e.onFailure);g.preventDefault()})},getOAuthRealm:function(f){var d=f.getResponseHeader("WWW-Authenticate")||"";var c=/OAuth realm\=\"([^\"]+)\"/;var e=c.exec(d);if(e){return e[1]}else{return null}}});jQuery("a.static-oauth-init").each(function(){AJS.JiraIssues.bindOAuthLink(jQuery(this),function(){window.location.reload()})});jQuery("a.anonymous-init").each(function(f,e){var c=encodeURIComponent(window.location.pathname.replace(Confluence.getContextPath(),""));var d=Confluence.getContextPath()+"/login.action?os_destination="+c;AJS.$(e).attr("href",d)});var a=function(j){var e=AJS.JiraIssues.Remote[j];var h="";for(var g=0;g<e.length;g++){h=h+(e[g].key+(g<e.length-1?",":""))}var d=function(l){var i="issuekey in ("+l+")";var m="/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery="+encodeURIComponent(i)+"&returnMax=true";var k=contextPath+"/plugins/servlet/issue-retriever?appId="+j+"&url="+encodeURIComponent(m)+"&columns=summary&columns=type&columns=resolution&columns=status";return k};var f=function(k){var i=AJS.$("item",k);i.each(function(){var u=AJS.$("link",this).text();var v=AJS.$("key",this).text();var r=AJS.$("summary",this).text();var s=AJS.$("type",this);var m=AJS.$("resolution",this);var w=m.attr("id")!="-1";var o=AJS.$("status",this);var n=AJS.$(".unknown-jira-issue."+v);for(var p=0;p<n.length;p++){var t=AJS.$("<a style=\"background-image: url('"+s.attr("iconUrl")+'\')" href="'+u+'"></a>');t.text(v);var l=AJS.$('<span class="jira-status"></span>');l.text(o.text().toUpperCase());var q=AJS.$('<span class="jira-issue'+(w?" resolved":"")+'" ></span>');q.append(t);q.append(document.createTextNode(" - "+r+" - "));q.append(l);AJS.$(n[p]).replaceWith(q)}})};var c=d(h);AJS.$.ajax({url:c,success:f,error:function(l){if(l.status==401){var k=AJS.JiraIssues.getOAuthRealm(l);if(k){var i={};AJS.$(e).each(function(){if(!i[this.key]){i[this.key]=true;var m=AJS.$('<span class="oauth-msg"> - <a class="oauth-init" href="'+k+'">'+"Authenticate"+"</a> "+"to see issue details"+"</span>");AJS.$(".unknown-jira-issue."+this.key).addClass("single-issue-oauth").append(m)}});AJS.JiraIssues.bindOAuthLink(AJS.$(".single-issue-oauth a.oauth-init"),function(){window.location.reload()})}}else{if(l.status==400&&e.length>1){AJS.$(e).each(function(){var m=this.key;var n=d(m);AJS.$.ajax({url:n,success:f,error:function(p){var o=AJS.$(".unknown-jira-issue."+m);o.removeClass("single-issue-oauth");AJS.$(".oauth-msg",o).remove();o.addClass("jira-error")}})})}}}})};AJS.$(".unknown-jira-issue").each(function(e,f){var d=AJS.$(f);var g=d.attr("data-app-link");var c=d.attr("data-key");AJS.JiraIssues.Remote[g]=AJS.JiraIssues.Remote[g]||[];AJS.JiraIssues.Remote[g].push({key:c})});for(var b in AJS.JiraIssues.Remote){a(b)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:refresh-resources', location = '/jira/refresh.js' */
(function(b){var c={REFRESH_STATE_STARTED:1,REFRESH_STATE_DONE:2,REFRESH_STATE_FAILED:3,refreshs:[],sortables:[],init:function(){a.getAll().each(function(){c.registerRefresh(this.getRefresh())});b.each(this.refreshs,function(e,f){var g=a.get(f.id);g.getRefreshButton().bind("click",f,c.handleRefreshClick);g.getRefreshLink().bind("click",f,c.handleRefreshClick)});d.getAll().each(function(){c.registerSort(this.getSortable())});b.each(this.sortables,function(f,e){var g=d.get(e.id);g.getHeadersTable().bind("click",e,c.onHeaderClick)})},onHeaderClick:function(m){refeshId=m.data.id;var f="ASC";if(b(this).hasClass("tablesorter-headerAsc")){f="DESC"}var h=b(this).find(".jim-table-header-content").text();var l=b("#refresh-wiki-"+refeshId).val();var g=b("#refresh-page-id-"+refeshId).val();var k=b("#refresh-"+refeshId);var i=new c.Refresh(refeshId,l,g,k.html());var j=a.get(refeshId);j.updateRefreshVisibility(c.REFRESH_STATE_STARTED);c.processRefresh(i,h,f)},replaceRefresh:function(g,e){var f=a.get(g);f.updateRefreshVisibility(c.REFRESH_STATE_DONE);b.each(this.refreshs,function(l,m){if(m.id===g){c.refreshs.splice(l,1);var n=a.get(e);var j=n.getRefresh();c.registerRefresh(j);c.sortables.splice(l,1);var h=d.get(e);var k=h.getSortable();c.registerSort(k);n.getRefreshButton().bind("click",j,c.handleRefreshClick);n.getRefreshLink().bind("click",j,c.handleRefreshClick);h.getHeadersTable().bind("click",k,c.onHeaderClick)}})},registerRefresh:function(e){if(!(e instanceof c.Refresh)){throw "Refresh object must be an instance of RefreshMacro.Refresh"}c.refreshs.push(e)},registerSort:function(e){if(!(e instanceof c.Sortable)){throw "Refresh object must be an instance of RefreshMacro.Refresh"}c.sortables.push(e)},handleRefreshClick:function(h){var f=h.data;var g=a.get(f.id);g.getMacroPanel().html(f.loadingMsg);g.updateRefreshVisibility(c.REFRESH_STATE_STARTED);c.processRefresh(f)},processRefresh:function(g,f,e){var h={};if(arguments.length==1){h={pageId:g.pageId,wikiMarkup:g.wiki}}else{if(arguments.length==3){h={pageId:g.pageId,wikiMarkup:g.wiki,columnName:f,order:e}}}AJS.$.ajax({type:"POST",dataType:"html",url:Confluence.getContextPath()+"/plugins/servlet/jiraRefreshRenderer",data:h,success:function(j){var i=b(j).attr("id");if(i){i=i.replace("refresh-module-","");a.get(g.id).getContentModule().replaceWith(j);new c.CallbackSupport(g).callback(i)}else{new c.CallbackSupport(g).errorHandler(j)}},error:function(j,k,i){new c.CallbackSupport(g).errorHandler(i)}})}};c.Refresh=function(f,e){this.id=f;this.wiki=e;this.pageId=arguments.length>2?arguments[2]:null;this.loadingMsg=arguments.length>3?arguments[3]:null};c.CallbackSupport=function(e){this.refresh=e;this.module=b("#refresh-module-"+e.id)};c.CallbackSupport.prototype={errorHandler:function(f){var g=a.get(this.refresh.id);var e=AJS.format("There was a problem rendering this section: {0}",f);g.getErrorMessagePanel().html(e);g.updateRefreshVisibility(c.REFRESH_STATE_FAILED)},callback:function(e){c.replaceRefresh(this.refresh.id,e)}};var a=function(){if(arguments.length==1){this.id=arguments[0]}};var d=function(){if(arguments.length==1){this.id=arguments[0]}};a.prototype.getRefresh=function(){return new c.Refresh(this.id,this.getWikiMarkup(),this.getPageId(),this.getMacroPanel().html())};d.prototype.getSortable=function(){return new c.Sortable(this.id,b("#refresh-page-id-"+this.id).val(),b("#refresh-"+this.id).html())};a.get=function(f){var e=b("#refresh-"+f);if(!e){return null}return new a(f)};d.get=function(f){var e=b("#refresh-"+f);if(!e){return null}return new d(f)};c.Sortable=function(g,e,f){this.id=g;this.pageId=e;this.loadingMsg=f};d.getAll=function(){return b("div.refresh-macro").map(function(){var e=this.id.replace("refresh-","");return d.get(e)})};a.getAll=function(){return b("div.refresh-macro").map(function(){var e=this.id.replace("refresh-","");return a.get(e)})};a.prototype.getErrorMessagePanel=function(){return b("#error-message-"+this.id)};a.prototype.removeDarkLayer=function(){b("#jim-dark-layout-"+this.id).remove()};a.prototype.displayDarkLayer=function(){var f=b("#refresh-module-"+this.id);var e=f.position();b("<div />",{id:"jim-dark-layout-"+this.id,"class":"jim-sortable-dark-layout",css:{top:e.top+"px",left:e.left+"px",width:f.width()+"px",height:f.height()+"px"}}).appendTo(f.parent())};a.prototype.getMacroPanel=function(){return b("#refresh-"+this.id)};d.prototype.getMacroPanel=function(){return b("#refresh-"+this.id).val()};a.prototype.getContentModule=function(){return b("#refresh-module-"+this.id)};a.prototype.getPageId=function(){return b("#refresh-page-id-"+this.id).val()};d.prototype.getPageId=function(){return b("#refresh-page-id-"+this.id).val()};a.prototype.getWikiMarkup=function(){return b("#refresh-wiki-"+this.id).val()};a.prototype.getRefreshButton=function(){return b("#refresh-issues-button-"+this.id)};d.prototype.getHeadersTable=function(){return b("#jira-issues-"+this.id+" .jira-tablesorter-header")};a.prototype.getRefreshLink=function(){return b("#refresh-issues-link-"+this.id)};a.prototype.getJiraIssuesArea=function(){return b("#jira-issues-"+this.id)};a.prototype.getIssuesCountArea=function(){return b("#total-issues-count-"+this.id)};a.prototype.updateRefreshVisibility=function(e){if(e===c.REFRESH_STATE_STARTED){this.displayDarkLayer()}else{if(e===c.REFRESH_STATE_FAILED){this.getRefreshButton().show();this.getRefreshLink().show();this.removeDarkLayer()}else{if(e===c.REFRESH_STATE_DONE){this.removeDarkLayer()}}}};b(function(){c.init()})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'resources/flexigrid/flexigrid.js' */
(function($){$.addFlex=function(t,p){if(t.grid){return false}p=$.extend({height:200,width:"auto",striped:true,novstripe:false,minwidth:30,minheight:80,resizable:true,url:false,method:"POST",dataType:"xml",errormsg:"Connection Error",usepager:false,nowrap:true,page:1,total:1,useRp:true,rp:15,rpOptions:[10,15,20,25,40],title:false,pagestat:"Displaying {from} to {to} of {total} items",procmsg:"Processing, please wait ...",query:"",qtype:"",nomsg:"No items",minColToggle:1,showToggleBtn:true,hideOnSubmit:true,autoload:true,blockOpacity:0.5,onToggleCol:false,onChangeSort:false,onSuccess:false,onSubmit:false,onReload:false},p);$(t).show().attr({cellPadding:0,cellSpacing:0,border:0}).removeAttr("width");var g={hset:{},rePosDrag:function(){var cdleft=0-this.hDiv.scrollLeft;if(this.hDiv.scrollLeft>0){cdleft-=Math.floor(p.cgwidth/2)}$(g.cDrag).css({top:g.hDiv.offsetTop+1});var cdpad=this.cdpad;$("div",g.cDrag).hide();$("thead tr:first th:visible",this.hDiv).each(function(){var n=$("thead tr:first th:visible",g.hDiv).index(this);var cdpos=parseInt($("div",this).width());var ppos=cdpos;if(cdleft==0){cdleft-=Math.floor(p.cgwidth/2)}cdpos=cdpos+cdleft+cdpad;$("div:eq("+n+")",g.cDrag).css({left:cdpos+"px"}).show();cdleft=cdpos})},fixHeight:function(newH){newH=false;if(!newH){newH=$(g.bDiv).height()}var hdHeight=$(this.hDiv).height();$("div",this.cDrag).each(function(){$(this).height(newH+hdHeight)});var nd=parseInt($(g.nDiv).height());if(nd>newH){$(g.nDiv).height(newH).width(200)}else{$(g.nDiv).height("auto").width("auto")}$(g.block).css({height:newH,marginBottom:(newH*-1)});var hrH=g.bDiv.offsetTop+newH;if(p.height!="auto"&&p.resizable){hrH=g.vDiv.offsetTop}$(g.rDiv).css({height:hrH})},dragStart:function(dragtype,e,obj){if(dragtype=="colresize"){$(g.nDiv).hide();$(g.nBtn).hide();var n=$("div",this.cDrag).index(obj);var ow=$("th:visible div:eq("+n+")",this.hDiv).width();$(obj).addClass("dragging").siblings().hide();$(obj).prev().addClass("dragging").show();this.colresize={startX:e.pageX,ol:parseInt(obj.style.left),ow:ow,n:n};$("body").css("cursor","col-resize")}else{if(dragtype=="vresize"){var hgo=false;$("body").css("cursor","row-resize");if(obj){hgo=true;$("body").css("cursor","col-resize")}this.vresize={h:p.height,sy:e.pageY,w:p.width,sx:e.pageX,hgo:hgo}}else{if(dragtype=="colMove"){$(g.nDiv).hide();$(g.nBtn).hide();this.hset=$(this.hDiv).offset();this.hset.right=this.hset.left+$("table",this.hDiv).width();this.hset.bottom=this.hset.top+$("table",this.hDiv).height();this.dcol=obj;this.dcoln=$("th",this.hDiv).index(obj);this.colCopy=document.createElement("div");this.colCopy.className="colCopy";this.colCopy.innerHTML=obj.innerHTML;if($.browser.msie){this.colCopy.className="colCopy ie"}$(this.colCopy).css({position:"absolute","float":"left",display:"none",textAlign:obj.align});$("body").append(this.colCopy);$(this.cDrag).hide()}}}$("body").noSelect()},dragMove:function(e){if(this.colresize){var n=this.colresize.n;var diff=e.pageX-this.colresize.startX;var nleft=this.colresize.ol+diff;var nw=this.colresize.ow+diff;if(nw>p.minwidth){$("div:eq("+n+")",this.cDrag).css("left",nleft);this.colresize.nw=nw}}else{if(this.vresize){var v=this.vresize;var y=e.pageY;var diff=y-v.sy;if(!p.defwidth){p.defwidth=p.width}if(p.width!="auto"&&!p.nohresize&&v.hgo){var x=e.pageX;var xdiff=x-v.sx;var newW=v.w+xdiff;if(newW>p.defwidth){this.gDiv.style.width=newW+"px";p.width=newW}}var newH=v.h+diff;if((newH>p.minheight||p.height<p.minheight)&&!v.hgo){this.bDiv.style.height=newH+"px";p.height=newH;this.fixHeight(newH)}v=null}else{if(this.colCopy){$(this.dcol).addClass("thMove").removeClass("thOver");if(e.pageX>this.hset.right||e.pageX<this.hset.left||e.pageY>this.hset.bottom||e.pageY<this.hset.top){$("body").css("cursor","move")}else{$("body").css("cursor","pointer")}$(this.colCopy).css({top:e.pageY+10,left:e.pageX+20,display:"block"})}}}},dragEnd:function(){if(this.colresize){var n=this.colresize.n;var nw=this.colresize.nw;$("th:visible div:eq("+n+")",this.hDiv).css("width",nw);$("tr",this.bDiv).each(function(){$("td:visible div:eq("+n+")",this).css("width",nw)});this.hDiv.scrollLeft=this.bDiv.scrollLeft;$("div:eq("+n+")",this.cDrag).siblings().show();$(".dragging",this.cDrag).removeClass("dragging");this.rePosDrag();this.fixHeight();this.colresize=false}else{if(this.vresize){this.vresize=false}else{if(this.colCopy){$(this.colCopy).remove();if(this.dcolt!=null){if(this.dcoln>this.dcolt){$("th:eq("+this.dcolt+")",this.hDiv).before(this.dcol)}else{$("th:eq("+this.dcolt+")",this.hDiv).after(this.dcol)}this.switchCol(this.dcoln,this.dcolt);$(this.cdropleft).remove();$(this.cdropright).remove();this.rePosDrag()}this.dcol=null;this.hset=null;this.dcoln=null;this.dcolt=null;this.colCopy=null;$(".thMove",this.hDiv).removeClass("thMove");$(this.cDrag).show()}}}$("body").css("cursor","default");$("body").noSelect(false)},toggleCol:function(cid,visible){var ncol=$("th[axis='col"+cid+"']",this.hDiv)[0];var n=$("thead th",g.hDiv).index(ncol);var cb=$("input[value="+cid+"]",g.nDiv)[0];if(visible==null){visible=ncol.hide}if($("input:checked",g.nDiv).length<p.minColToggle&&!visible){return false}if(visible){ncol.hide=false;$(ncol).show();cb.checked=true}else{ncol.hide=true;$(ncol).hide();cb.checked=false}$("tbody tr",t).each(function(){if(visible){$("td:eq("+n+")",this).show()}else{$("td:eq("+n+")",this).hide()}});this.rePosDrag();if(p.onToggleCol){p.onToggleCol(cid,visible)}return visible},switchCol:function(cdrag,cdrop){$("tbody tr",t).each(function(){if(cdrag>cdrop){$("td:eq("+cdrop+")",this).before($("td:eq("+cdrag+")",this))}else{$("td:eq("+cdrop+")",this).after($("td:eq("+cdrag+")",this))}});if(cdrag>cdrop){$("tr:eq("+cdrop+")",this.nDiv).before($("tr:eq("+cdrag+")",this.nDiv))}else{$("tr:eq("+cdrop+")",this.nDiv).after($("tr:eq("+cdrag+")",this.nDiv))}if($.browser.msie&&$.browser.version<7){$("tr:eq("+cdrop+") input",this.nDiv)[0].checked=true}this.hDiv.scrollLeft=this.bDiv.scrollLeft},scroll:function(){this.hDiv.scrollLeft=this.bDiv.scrollLeft;this.rePosDrag()},addData:function(data){if(p.preProcess){data=p.preProcess(data)}$(".pReload",this.pDiv).removeClass("loading");this.loading=false;if(!data){$(".pPageStat",this.pDiv).html(p.errormsg);return false}if(p.dataType=="xml"){p.total=+$("rows total",data).text()}else{p.total=data.total}if(p.total==0){$("tr, a, td, div",t).unbind();$(t).empty();p.pages=1;p.page=1;this.buildpager();$(".pPageStat",this.pDiv).html(p.nomsg);return false}p.pages=Math.ceil(p.total/p.rp);if(p.dataType=="xml"){p.page=+$("rows page",data).text()}else{p.page=data.page}this.buildpager();var tbody=document.createElement("tbody");if(p.dataType=="json"){$.each(data.rows,function(i,row){var tr=document.createElement("tr");if(i%2&&p.striped){tr.className="erow"}if(row.id){tr.id="row"+row.id}$("thead tr:first th",g.hDiv).each(function(){var td=document.createElement("td");var idx=$(this).attr("axis").substr(3);td.align=this.align;td.innerHTML=row.cell[idx];td.nowrap=this.nowrap;$(tr).append(td);td=null});if($("thead",this.gDiv).length<1){for(idx=0;idx<cell.length;idx++){var td=document.createElement("td");td.innerHTML=row.cell[idx];$(tr).append(td);td=null}}$(tbody).append(tr);tr=null})}else{if(p.dataType=="xml"){i=1;$("rows row",data).each(function(){i++;var tr=document.createElement("tr");if(i%2&&p.striped){tr.className="erow"}var nid=$(this).attr("id");if(nid){tr.id="row"+nid}nid=null;var robj=this;$("thead tr:first th",g.hDiv).each(function(){var td=document.createElement("td");var idx=$(this).attr("axis").substr(3);td.align=this.align;td.innerHTML=$("cell:eq("+idx+")",robj).text();$(tr).append(td);td=null});if($("thead",this.gDiv).length<1){$("cell",this).each(function(){var td=document.createElement("td");td.innerHTML=$(this).text();$(tr).append(td);td=null})}$(tbody).append(tr);tr=null;robj=null})}}$("tr",t).unbind();$(t).empty();$(t).append(tbody);this.addCellProp();this.addRowProp();this.rePosDrag();if(p.onSuccess){p.onSuccess(data)}if(p.hideOnSubmit){$(g.block).remove()}this.hDiv.scrollLeft=this.bDiv.scrollLeft;if($.browser.opera){$(t).css("visibility","visible")}tbody=null;data=null;i=null},changeSort:function(th){if(this.loading){return true}$(g.nDiv).hide();$(g.nBtn).hide();if(p.sortname==$(th).attr("abbr")){if(p.sortorder=="asc"){p.sortorder="desc"}else{p.sortorder="asc"}}$(th).addClass("sorted").siblings().removeClass("sorted");$(".sdesc",this.hDiv).removeClass("sdesc");$(".sasc",this.hDiv).removeClass("sasc");$("div",th).addClass("s"+p.sortorder);p.sortname=$(th).attr("abbr");if(p.onChangeSort){p.onChangeSort(p.sortname,p.sortorder)}else{this.populate()}},buildpager:function(){$(".pcontrol input",this.pDiv).val(p.page);$(".pcontrol span",this.pDiv).html(p.pages);var r1=(p.page-1)*p.rp+1;var r2=r1+p.rp-1;if(p.total<r2){r2=p.total}var stat=p.pagestat;stat=stat.replace(/{from}/,r1);stat=stat.replace(/{to}/,r2);stat=stat.replace(/{total}/,p.total);$(".pPageStat",this.pDiv).html(stat);if(p.pages==1){var groupIndex=0;if(p.useRp){groupIndex--}if(p.searchitems){groupIndex--}$(".pGroup",g.pDiv).each(function(){if(groupIndex>=0&&groupIndex<3){$(this).css("opacity","0.3");$(".pButton",this).each(function(){$(this).css("cursor","default");$(this).hover(function(){$(this).css({border:"0px",width:"22px",height:"22px",cursor:"default"});$("span",this).each(function(){$(this).css({border:"0px",width:"22px",height:"22px",cursor:"default"})})},function(){})});$("input",this).each(function(){$(this).attr("readonly","true")})}groupIndex++})}else{$(g.gDiv).find(".pFirst, .pPrev").each(function(){if(p.page==1){$(this).removeClass("pBtnOver");$(this).css({cursor:"default",opacity:"0.3"})}else{$(this).css({cursor:"pointer",opacity:"1.0"})}});$(g.gDiv).find(".pLast, .pNext").each(function(){if(p.page==p.pages){$(this).removeClass("pBtnOver");$(this).css({cursor:"default",opacity:"0.3"})}else{$(this).css({cursor:"pointer",opacity:"1.0"})}})}},populate:function(){if(this.loading){return true}if(p.onSubmit){var gh=p.onSubmit();if(!gh){return false}}this.loading=true;if(!p.url){return false}$(".pPageStat",this.pDiv).html(p.procmsg);$(".pReload",this.pDiv).addClass("loading");$(g.block).css({top:g.bDiv.offsetTop});if(p.hideOnSubmit){$(this.gDiv).prepend(g.block)}if($.browser.opera){$(t).css("visibility","hidden")}if(!p.newp){p.newp=1}if(p.page>p.pages){p.page=p.pages}var param=[{name:"page",value:p.newp},{name:"rp",value:p.rp},{name:"sortname",value:p.sortname},{name:"sortorder",value:p.sortorder},{name:"query",value:p.query},{name:"qtype",value:p.qtype}];if(p.params){for(var pi=0;pi<p.params.length;pi++){param[param.length]=p.params[pi]}}$.ajax({type:p.method,url:p.url,data:param,dataType:"text",success:function(data){var obj=data;if(p.dataType=="json"&&$.isPlainObject&&!$.isPlainObject(data)){obj=eval("("+data+")")}g.addData(obj)},error:function(xmlhttprequest,textmsg,error){try{if(p.onError){p.onError(xmlhttprequest,textmsg,error)}}catch(e){}}})},doSearch:function(){p.query=$("input[name=q]",g.sDiv).val();p.qtype=$("select[name=qtype]",g.sDiv).val();p.newp=1;this.populate()},changePage:function(ctype){if(this.loading){return true}switch(ctype){case"first":p.newp=1;break;case"prev":if(p.page>1){p.newp=parseInt(p.page)-1}break;case"next":if(p.page<p.pages){p.newp=parseInt(p.page)+1}break;case"last":p.newp=p.pages;break;case"input":var nv=parseInt($(".pcontrol input",this.pDiv).val());if(isNaN(nv)){nv=1}if(nv<1){nv=1}else{if(nv>p.pages){nv=p.pages}}$(".pcontrol input",this.pDiv).val(nv);p.newp=nv;break}if(p.newp==p.page){return false}if(p.onChangePage){p.onChangePage(p.newp)}else{this.populate()}},addCellProp:function(){$("tbody tr td",g.bDiv).each(function(){var tdDiv=document.createElement("div");var n=$("td",$(this).parent()).index(this);var pth=$("th:eq("+n+")",g.hDiv).get(0);if(pth!=null){if(p.sortname==$(pth).attr("abbr")&&p.sortname){this.className="sorted"}$(tdDiv).css({textAlign:pth.align,width:$("div:first",pth)[0].style.width});if(pth.hide){$(this).css("display","none")}}if(this.nowrap==false){$(tdDiv).css("white-space","normal")}if(this.innerHTML==""){this.innerHTML="&nbsp;"}tdDiv.innerHTML=this.innerHTML;var prnt=$(this).parent()[0];var pid=false;if(prnt.id){pid=prnt.id.substr(3)}if(pth!=null){if(pth.process){pth.process(tdDiv,pid)}}$(this).empty().append(tdDiv).removeAttr("width")})},getCellDim:function(obj){var ht=parseInt($(obj).height());var pht=parseInt($(obj).parent().height());var wt=parseInt(obj.style.width);var pwt=parseInt($(obj).parent().width());var top=obj.offsetParent.offsetTop;var left=obj.offsetParent.offsetLeft;var pdl=parseInt($(obj).css("paddingLeft"));var pdt=parseInt($(obj).css("paddingTop"));return{ht:ht,wt:wt,top:top,left:left,pdl:pdl,pdt:pdt,pht:pht,pwt:pwt}},addRowProp:function(){$("tbody tr",g.bDiv).each(function(){$(this).click(function(e){var obj=(e.target||e.srcElement);if(obj.href||obj.type){return true}$(this).toggleClass("trSelected");if(p.singleSelect){$(this).siblings().removeClass("trSelected")}}).mousedown(function(e){if(e.shiftKey){$(this).toggleClass("trSelected");g.multisel=true;this.focus();$(g.gDiv).noSelect()}}).mouseup(function(){if(g.multisel){g.multisel=false;$(g.gDiv).noSelect(false)}}).hover(function(e){if(g.multisel){$(this).toggleClass("trSelected")}},function(){});if($.browser.msie&&$.browser.version<7){$(this).hover(function(){$(this).addClass("trOver")},function(){$(this).removeClass("trOver")})}})},pager:0};if(p.colModel){thead=document.createElement("thead");tr=document.createElement("tr");for(i=0;i<p.colModel.length;i++){var cm=p.colModel[i];var th=document.createElement("th");th.innerHTML=cm.display;if(cm.name&&cm.sortable){$(th).attr("abbr",cm.name)}$(th).attr("axis","col"+i);if(cm.align){th.align=cm.align}if(cm.width){$(th).attr("width",cm.width)}if(cm.hide){th.hide=true}if(cm.process){th.process=cm.process}if(cm.nowrap!=undefined){th.nowrap=cm.nowrap}else{th.nowrap=p.nowrap}$(tr).append(th)}$(thead).append(tr);$(t).prepend(thead)}g.options=p;g.gDiv=document.createElement("div");g.mDiv=document.createElement("div");g.hDiv=document.createElement("div");g.bDiv=document.createElement("div");g.vDiv=document.createElement("div");g.rDiv=document.createElement("div");g.cDrag=document.createElement("div");g.block=document.createElement("div");g.nDiv=document.createElement("div");g.nBtn=document.createElement("div");g.iDiv=document.createElement("div");g.tDiv=document.createElement("div");g.sDiv=document.createElement("div");if(p.usepager){g.pDiv=document.createElement("div")}g.hTable=document.createElement("table");g.gDiv.className="flexigrid";if(p.width!="auto"){g.gDiv.style.width=p.width+"px"}if($.browser.msie){$(g.gDiv).addClass("ie")}if(p.novstripe){$(g.gDiv).addClass("novstripe")}$(t).before(g.gDiv);$(g.gDiv).append(t);if(p.buttons){g.tDiv.className="tDiv";var tDiv2=document.createElement("div");tDiv2.className="tDiv2";for(i=0;i<p.buttons.length;i++){var btn=p.buttons[i];if(!btn.separator){var btnDiv=document.createElement("div");btnDiv.className="fbutton";btnDiv.innerHTML="<div><span>"+btn.name+"</span></div>";if(btn.bclass){$("span",btnDiv).addClass(btn.bclass).css({paddingLeft:20})}btnDiv.onpress=btn.onpress;btnDiv.name=btn.name;if(btn.onpress){$(btnDiv).click(function(){this.onpress(this.name,g.gDiv)})}$(tDiv2).append(btnDiv);if($.browser.msie&&$.browser.version<7){$(btnDiv).hover(function(){$(this).addClass("fbOver")},function(){$(this).removeClass("fbOver")})}}else{$(tDiv2).append("<div class='btnseparator'></div>")}}$(g.tDiv).append(tDiv2);$(g.tDiv).append("<div style='clear:both'></div>");$(g.gDiv).prepend(g.tDiv)}g.hDiv.className="hDiv";$(t).before(g.hDiv);g.hTable.cellPadding=0;g.hTable.cellSpacing=0;$(g.hDiv).append('<div class="hDivBox"></div>');$("div",g.hDiv).append(g.hTable);var thead=$("thead:first",t).get(0);if(thead){$(g.hTable).append(thead)}thead=null;if(!p.colmodel){var ci=0}$("thead tr:first th",g.hDiv).each(function(){var thdiv=document.createElement("div");if($(this).attr("abbr")){$(this).click(function(e){if(!$(this).hasClass("thOver")){return false}var obj=(e.target||e.srcElement);if(obj.href||obj.type){return true}g.changeSort(this)});if($(this).attr("abbr")==p.sortname){this.className="sorted";thdiv.className="s"+p.sortorder}}if(this.hide){$(this).hide()}if(!p.colmodel){$(this).attr("axis","col"+ci++)}$(thdiv).css({textAlign:this.align,width:this.width+"px"});thdiv.innerHTML=this.innerHTML;$(this).empty().append(thdiv).removeAttr("width").mousedown(function(e){g.dragStart("colMove",e,this)}).hover(function(){if(!g.colresize&&!$(this).hasClass("thMove")&&!g.colCopy){$(this).addClass("thOver")}if($(this).attr("abbr")!=p.sortname&&!g.colCopy&&!g.colresize&&$(this).attr("abbr")){$("div",this).addClass("s"+p.sortorder)}else{if($(this).attr("abbr")==p.sortname&&!g.colCopy&&!g.colresize&&$(this).attr("abbr")){var no="";if(p.sortorder=="asc"){no="desc"}else{no="asc"}$("div",this).removeClass("s"+p.sortorder).addClass("s"+no)}}if(g.colCopy){var n=$("th",g.hDiv).index(this);if(n==g.dcoln){return false}if(n<g.dcoln){$(this).append(g.cdropleft)}else{$(this).append(g.cdropright)}g.dcolt=n}else{if(!g.colresize){var nv=$("th:visible",g.hDiv).index(this);var onl=parseInt($("div:eq("+nv+")",g.cDrag).css("left"));var nw=parseInt($(g.nBtn).width())+parseInt($(g.nBtn).css("borderLeftWidth"));nl=onl-nw+Math.floor(p.cgwidth/2);$(g.nDiv).hide();$(g.nBtn).hide();$(g.nBtn).css({left:nl,top:g.hDiv.offsetTop}).show();var ndw=parseInt($(g.nDiv).width());$(g.nDiv).css({top:g.bDiv.offsetTop});if((nl+ndw)>$(g.gDiv).width()){$(g.nDiv).css("left",onl-ndw+1)}else{$(g.nDiv).css("left",nl)}if($(this).hasClass("sorted")){$(g.nBtn).addClass("srtd")}else{$(g.nBtn).removeClass("srtd")}}}},function(){$(this).removeClass("thOver");if($(this).attr("abbr")!=p.sortname){$("div",this).removeClass("s"+p.sortorder)}else{if($(this).attr("abbr")==p.sortname){var no="";if(p.sortorder=="asc"){no="desc"}else{no="asc"}$("div",this).addClass("s"+p.sortorder).removeClass("s"+no)}}if(g.colCopy){$(g.cdropleft).remove();$(g.cdropright).remove();g.dcolt=null}})});g.bDiv.className="bDiv";$(t).before(g.bDiv);$(g.bDiv).css({height:(p.height=="auto")?"auto":p.height+"px"}).scroll(function(e){g.scroll()}).append(t);if(p.height=="auto"){$("table",g.bDiv).addClass("autoht")}g.addCellProp();g.addRowProp();var cdcol=$("thead tr:first th:first",g.hDiv).get(0);if(cdcol!=null){g.cDrag.className="cDrag";g.cdpad=0;g.cdpad+=(isNaN(parseInt($("div",cdcol).css("borderLeftWidth")))?0:parseInt($("div",cdcol).css("borderLeftWidth")));g.cdpad+=(isNaN(parseInt($("div",cdcol).css("borderRightWidth")))?0:parseInt($("div",cdcol).css("borderRightWidth")));g.cdpad+=(isNaN(parseInt($("div",cdcol).css("paddingLeft")))?0:parseInt($("div",cdcol).css("paddingLeft")));g.cdpad+=(isNaN(parseInt($("div",cdcol).css("paddingRight")))?0:parseInt($("div",cdcol).css("paddingRight")));g.cdpad+=(isNaN(parseInt($(cdcol).css("borderLeftWidth")))?0:parseInt($(cdcol).css("borderLeftWidth")));g.cdpad+=(isNaN(parseInt($(cdcol).css("borderRightWidth")))?0:parseInt($(cdcol).css("borderRightWidth")));g.cdpad+=(isNaN(parseInt($(cdcol).css("paddingLeft")))?0:parseInt($(cdcol).css("paddingLeft")));g.cdpad+=(isNaN(parseInt($(cdcol).css("paddingRight")))?0:parseInt($(cdcol).css("paddingRight")));$(g.bDiv).before(g.cDrag);var cdheight=$(g.bDiv).height();var hdheight=$(g.hDiv).height();$(g.cDrag).css({top:-hdheight+"px"});$("thead tr:first th",g.hDiv).each(function(){var cgDiv=document.createElement("div");$(g.cDrag).append(cgDiv);if(!p.cgwidth){p.cgwidth=$(cgDiv).width()}$(cgDiv).css({height:cdheight+hdheight}).mousedown(function(e){g.dragStart("colresize",e,this)});if($.browser.msie&&$.browser.version<7){g.fixHeight($(g.gDiv).height());$(cgDiv).hover(function(){g.fixHeight();$(this).addClass("dragging")},function(){if(!g.colresize){$(this).removeClass("dragging")}})}})}if(p.striped){$("tbody tr:odd",g.bDiv).addClass("erow")}if(p.resizable&&p.height!="auto"){g.vDiv.className="vGrip";$(g.vDiv).mousedown(function(e){g.dragStart("vresize",e)}).html("<span></span>");$(g.bDiv).after(g.vDiv)}if(p.resizable&&p.width!="auto"&&!p.nohresize){g.rDiv.className="hGrip";$(g.rDiv).mousedown(function(e){g.dragStart("vresize",e,true)}).html("<span></span>").css("height",$(g.gDiv).height());if($.browser.msie&&$.browser.version<7){$(g.rDiv).hover(function(){$(this).addClass("hgOver")},function(){$(this).removeClass("hgOver")})}$(g.gDiv).append(g.rDiv)}if(p.usepager){g.pDiv.className="pDiv";g.pDiv.innerHTML='<div class="pDiv2"></div>';$(g.bDiv).after(g.pDiv);var html=' <div class="pGroup"> <div class="pFirst pButton"><span></span></div><div class="pPrev pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"><span class="pcontrol">Page <input type="text" size="4" value="1" /> of <span> 1 </span></span></div> <div class="btnseparator"></div> <div class="pGroup"> <div class="pNext pButton"><span></span></div><div class="pLast pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"> <div class="pReload pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"><span class="pPageStat"></span></div>';$("div",g.pDiv).html(html);$(".pReload",g.pDiv).click(function(){if(p.onReload){var gh=p.onReload();if(!gh){return false}}g.populate()});$(".pFirst",g.pDiv).click(function(){g.changePage("first")});$(".pPrev",g.pDiv).click(function(){g.changePage("prev")});$(".pNext",g.pDiv).click(function(){g.changePage("next")});$(".pLast",g.pDiv).click(function(){g.changePage("last")});$(".pcontrol input",g.pDiv).keydown(function(e){if(e.keyCode==13){g.changePage("input")}});$(".pReload",g.pDiv).hover(function(){$(this).addClass("pBtnOver")},function(){$(this).removeClass("pBtnOver")});$(".pFirst, .pPrev").hover(function(){if(!(p.page&&p.page==1)){$(this).addClass("pBtnOver")}},function(){$(this).removeClass("pBtnOver")});$(".pLast, .pNext").hover(function(){if(!(p.page&&p.pages&&p.page==p.pages)){$(this).addClass("pBtnOver")}},function(){$(this).removeClass("pBtnOver")});if(p.useRp){var opt="";for(var nx=0;nx<p.rpOptions.length;nx++){if(p.rp==p.rpOptions[nx]){sel='selected="selected"'}else{sel=""}opt+="<option value='"+p.rpOptions[nx]+"' "+sel+" >"+p.rpOptions[nx]+"&nbsp;&nbsp;</option>"}$(".pDiv2",g.pDiv).prepend("<div class='pGroup'><select name='rp'>"+opt+"</select></div> <div class='btnseparator'></div>");$("select",g.pDiv).change(function(){if(p.onRpChange){p.onRpChange(+this.value)}else{p.newp=1;p.rp=+this.value;g.populate()}})}if(p.searchitems){$(".pDiv2",g.pDiv).prepend("<div class='pGroup'> <div class='pSearch pButton'><span></span></div> </div>  <div class='btnseparator'></div>");$(".pSearch",g.pDiv).click(function(){$(g.sDiv).slideToggle("fast",function(){$(".sDiv:visible input:first",g.gDiv).trigger("focus")})});g.sDiv.className="sDiv";sitems=p.searchitems;var sopt="";for(var s=0;s<sitems.length;s++){if(p.qtype==""&&sitems[s].isdefault==true){p.qtype=sitems[s].name;sel='selected="selected"'}else{sel=""}sopt+="<option value='"+sitems[s].name+"' "+sel+" >"+sitems[s].display+"&nbsp;&nbsp;</option>"}if(p.qtype==""){p.qtype=sitems[0].name}$(g.sDiv).append("<div class='sDiv2'>Quick Search <input type='text' size='30' name='q' class='qsbox' /> <select name='qtype'>"+sopt+"</select> <input type='button' value='Clear' /></div>");$("input[name=q],select[name=qtype]",g.sDiv).keydown(function(e){if(e.keyCode==13){g.doSearch()}});$("input[value=Clear]",g.sDiv).click(function(){$("input[name=q]",g.sDiv).val("");p.query="";g.doSearch()});$(g.bDiv).after(g.sDiv)}}$(g.pDiv,g.sDiv).append("<div style='clear:both'></div>");if(p.title){g.mDiv.className="mDiv";g.mDiv.innerHTML='<div class="ftitle">'+p.title+"</div>";$(g.gDiv).prepend(g.mDiv);if(p.showTableToggleBtn){$(g.mDiv).append('<div class="ptogtitle" title="Minimize/Maximize Table"><span></span></div>');$("div.ptogtitle",g.mDiv).click(function(){$(g.gDiv).toggleClass("hideBody");$(this).toggleClass("vsble")})}}g.cdropleft=document.createElement("span");g.cdropleft.className="cdropleft";g.cdropright=document.createElement("span");g.cdropright.className="cdropright";g.block.className="gBlock";var gh=$(g.bDiv).height();var gtop=g.bDiv.offsetTop;$(g.block).css({width:g.bDiv.style.width,height:gh,background:"white",position:"relative",marginBottom:(gh*-1),zIndex:1,top:gtop,left:"0px"});$(g.block).fadeTo(0,p.blockOpacity);if($("th",g.hDiv).length){g.nDiv.className="nDiv";g.nDiv.innerHTML="<table cellpadding='0' cellspacing='0'><tbody></tbody></table>";$(g.nDiv).css({marginBottom:(gh*-1),display:"none",top:gtop}).noSelect();var cn=0;$("th div",g.hDiv).each(function(){var kcol=$("th[axis='col"+cn+"']",g.hDiv)[0];var chk='checked="checked"';if(kcol.style.display=="none"){chk=""}$("tbody",g.nDiv).append('<tr><td class="ndcol1"><input type="checkbox" '+chk+' class="togCol" value="'+cn+'" /></td><td class="ndcol2">'+this.innerHTML+"</td></tr>");cn++});if($.browser.msie&&$.browser.version<7){$("tr",g.nDiv).hover(function(){$(this).addClass("ndcolover")},function(){$(this).removeClass("ndcolover")})}$("td.ndcol2",g.nDiv).click(function(){if($("input:checked",g.nDiv).length<=p.minColToggle&&$(this).prev().find("input")[0].checked){return false}return g.toggleCol($(this).prev().find("input").val())});$("input.togCol",g.nDiv).click(function(){if($("input:checked",g.nDiv).length<p.minColToggle&&this.checked==false){return false}$(this).parent().next().trigger("click")});$(g.gDiv).prepend(g.nDiv);$(g.nBtn).addClass("nBtn").html("<div></div>").attr("title","Hide/Show Columns").click(function(){$(g.nDiv).toggle();return true});if(p.showToggleBtn){$(g.gDiv).prepend(g.nBtn)}}$(g.iDiv).addClass("iDiv").css({display:"none"});$(g.bDiv).append(g.iDiv);$(g.bDiv).hover(function(){$(g.nDiv).hide();$(g.nBtn).hide()},function(){if(g.multisel){g.multisel=false}});$(g.gDiv).hover(function(){},function(){$(g.nDiv).hide();$(g.nBtn).hide()});$(document).mousemove(function(e){g.dragMove(e)}).mouseup(function(e){g.dragEnd()}).hover(function(){},function(){g.dragEnd()});if($.browser.msie&&$.browser.version<7){$(".hDiv,.bDiv,.mDiv,.pDiv,.vGrip,.tDiv, .sDiv",g.gDiv).css({width:"100%"});$(g.gDiv).addClass("ie6");if(p.width!="auto"){$(g.gDiv).addClass("ie6fullwidthbug")}}g.rePosDrag();g.fixHeight();t.p=p;t.grid=g;if(p.url&&p.autoload){g.populate()}return t};var docloaded=false;$(document).ready(function(){docloaded=true});$.fn.flexigrid=function(p){return this.each(function(){if(!docloaded){$(this).hide();var t=this;$(document).ready(function(){$.addFlex(t,p)})}else{$.addFlex(this,p)}})};$.fn.flexReload=function(p){return this.each(function(){if(this.grid&&this.p.url){this.grid.populate()}})};$.fn.flexOptions=function(p){return this.each(function(){if(this.grid){$.extend(this.p,p)}})};$.fn.flexToggleCol=function(cid,visible){return this.each(function(){if(this.grid){this.grid.toggleCol(cid,visible)}})};$.fn.flexAddData=function(data){return this.each(function(){if(this.grid){this.grid.addData(data)}})};$.fn.noSelect=function(p){if(p==null){prevent=true}else{prevent=p}if(prevent){return this.each(function(){if($.browser.msie||$.browser.safari){$(this).bind("selectstart",function(){return false})}else{if($.browser.mozilla){$(this).css("MozUserSelect","none");$("body").trigger("focus")}else{if($.browser.opera){$(this).bind("mousedown",function(){return false})}else{$(this).attr("unselectable","on")}}}})}else{return this.each(function(){if($.browser.msie||$.browser.safari){$(this).unbind("selectstart")}else{if($.browser.mozilla){$(this).css("MozUserSelect","inherit")}else{if($.browser.opera){$(this).unbind("mousedown")}else{$(this).removeAttr("unselectable","on")}}}})}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'templates/extra/jira/jiraIssues.js' */
jQuery(document).ready(function(){var a=jQuery.extend(window.JiraIssues||{},{ADG_ENABLED:AJS.Meta.getNumber("build-number")>=4000,ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO:14/11,fixMenusShowingUnderWidgetInIE:function(){if(jQuery.browser.msie){jQuery("ul.ajs-menu-bar li.ajs-menu-item").each(function(){jQuery(this).hover(function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().each(function(){var c=jQuery(this);var b=c.css("position");if(b&&b!="auto"){c.addClass("ajs-menu-bar-z-index-fix-for-ie")}})},function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().removeClass("ajs-menu-bar-z-index-fix-for-ie")})})}},onSuccessFunction:function(d){if(!jQuery("fieldset input[name='height']",d).length){var b=jQuery(".bDiv table[id^='jiraissues_table']",d)[0];var e=b.grid;var c=b.clientHeight+jQuery(".hDiv",d)[0].clientHeight;jQuery(".bDiv",d).css("height",c+"px");e.options.height=c;e.fixHeight(c)}},onErrorFunction:function(h,c,b,n,f){var o=jQuery("#"+c);var g=b+": ";if(n.status=="200"){g+=f}else{g+=n.responseText}var i=n.getResponseHeader("WWW-Authenticate")||"";if(n.status=="401"&&i.indexOf("OAuth")!=-1){var m=/OAuth realm\=\"([^\"]+)\"/;var e=m.exec(i);if(e){o.empty();a.bigMessageFunction(c,'<a class="oauth-init" href="'+e[1]+'">'+"Authenticate"+"</a> "+"to retrieve your issues"+"</span>");jQuery(".bmDiv",h).css({"z-index":2});var j={onSuccess:function(){window.location.reload()},onFailure:function(){}};var l=jQuery(".oauth-init",o.parent());var d=l.attr("href");l.click(function(p){AppLinks.authenticateRemoteCredentials(d,j.onSuccess,j.onFailure);p.preventDefault()});AJS.$(".gBlock").remove()}}else{if(n.status=="400"){a.bigMessageFunction(c,"The JIRA server was not able to process the search. This may indicate a problem with the syntax of this macro. Alternatively, if this table is requesting specific issue keys, you may not have permission to view one of these issues. ")}else{var k=jQuery("iframe.jiraissues_errorMsgSandbox",h);k.load(function(){var r=this.contentWindow||this.contentDocument;var q=jQuery((r.document?r.document:r).body);jQuery("a",q).each(function(){this.target="_top"});jQuery(".pPageStat",h).empty().text(q.text());var p=jQuery("div.bmDiv",h)[0];k.removeClass("hidden");k.css({height:p.clientHeight+"px",width:p.clientWidth+"px"})});k[0].src=jQuery("fieldset input[name='retrieverUrlHtml']",h).val();a.bigMessageFunction(c,k)}}jQuery(h).find(".pReload").removeClass("loading");o[0].grid.loading=false;jQuery(h).find(".pButton").each(function(){jQuery(this).removeClass("pBtnOver");jQuery(this).css({cursor:"default",opacity:"0.3"})});jQuery(h).find("span.pcontrol input").attr("readonly","true")},onReloadFunction:function(b,d,c){jQuery(".bmDiv",d).remove();jQuery(".bmDistance",d).remove();c.onSubmit=function(){a.reloadOnSubmitFunction(b,c);return true}},reloadOnSubmitFunction:function(b,c){c.params=[{name:"useCache",value:false}];c.onSubmit=function(){a.onSubmitFunction(b,c);return true}},onSubmitFunction:function(b,c){c.params=[{name:"useCache",value:b}]},showTrustWarningsFunction:function(d,c){var b=jQuery(d).children(".trusted_warnings");if(c.trustedMessage){b.find("td:last").html(c.trustedMessage);b.css("display","block")}else{b.css("display","none")}},preProcessFunction:function(e,b,d,c,f){if(d){a.showTrustWarningsFunction(e,c)}if(c.total==0){jQuery(".pPageStat",e).html(f);a.bigMessageFunction(b,f);jQuery(".pReload",e).removeClass("loading");return}},bigMessageFunction:function(e,f){var d=jQuery("<div></div>");var b=jQuery("<div></div>");d.addClass("bmDistance");b.addClass("bmDiv");if(typeof f=="string"){b.html("<p><strong>"+f+"</strong></p>")}else{f.appendTo(b)}var c=jQuery("#"+e);c.after(b).after(d)},getParamsFrom:function(c){var b={};c.children("input").each(function(){b[jQuery(this).attr("name")]=jQuery(this).attr("value")});return b},initializeColumnWidth:function(f,p){var d={},m=function(i){return a.ADG_ENABLED?Math.round(i*a.ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO):i};if(!(p&&p.length)){return d}var h=37,n=11,k=f.width()-(h+(p.length*n)),j=false,q=false,o=0,c=m(140);for(var l=0,e=p.length;l<e;l++){var g=p[l].name;switch(g){case"summary":j=true;o++;break;case"description":q=true;o++;break;case"type":o++;d[g]=30;k-=30;break;case"priority":o++;d[g]=50;k-=50;break;case"status":o++;d[g]=m(100);k-=m(100);break;case"key":o++;d[g]=m(90);k-=m(90);break;case"comments":case"attachments":case"version":case"component":case"resolution":o++;d[g]=m(80);k-=m(80);break;default:d[g]=c}}if(j||q){k-=(c*(p.length-o));var b=250;if(j&&q){d.summary=Math.max(k/2,b);d.description=Math.max(k/2,b)}else{if(j){d.summary=Math.max(k,b)}else{d.description=Math.max(k,b)}}}else{if(!j&&!q&&(p.length>o)){c=k/(p.length-o);for(l=0;l<e;l++){if(!{resolution:true,key:true,type:true,priority:true,status:true}[p[l]]){d[p[l]]=c}}}}return d}});a.fixMenusShowingUnderWidgetInIE();jQuery(".jiraissues_table").each(function(f,j){var k=jQuery(j),h=k.children("fieldset"),e=a.getParamsFrom(h),c="jiraissues_table_"+f;k.append('<table id="'+c+'" style="display:none"></table>');k.css("width",e.width);var d=[];h.children(".columns").each(function(l){var m=jQuery(this).hasClass("nowrap");d[l]={display:this.name,name:this.value,nowrap:m,sortable:true,align:"left"}});var b=a.initializeColumnWidth(k,d);jQuery.each(d,function(l,m){m.width=b[m.name]});var g=jQuery("<div></div>");jQuery("<a></a>").attr({rel:"nofollow",href:e.clickableUrl}).text(e.title).appendTo(g);jQuery("#"+c).flexigrid({url:e.retrieverUrlHtml,method:"GET",dataType:"json",colModel:d,sortname:e.sortField,sortorder:e.sortOrder,usepager:true,title:g.html(),page:parseInt(e.requestedPage,10),useRp:false,rp:parseInt(e.resultsPerPage,10),showTableToggleBtn:true,height:(function(){return e.height?parseInt(e.height,10):480})(),onSuccess:function(){a.onSuccessFunction(j)},onSubmit:function(){a.onSubmitFunction(e.useCache,this);return true},preProcess:function(i){a.preProcessFunction(j,c,e.showTrustWarnings,i,e.nomsg);return i},onError:function(m,l,i){a.onErrorFunction(j,c,e.jiraissuesError,m,l,i)},onReload:function(){a.onReloadFunction(e.useCache,j,this);return true},errormsg:e.errormsg,pagestat:e.pagestat,procmsg:e.procmsg,nomsg:e.nomsg})});jQuery(".jiraissues_count").each(function(b,d){var c=jQuery(d);jQuery.ajax({cache:false,type:"GET",url:c.find(".url").text(),data:{useCache:c.find(".use-cache").text(),rp:c.find(".rp").text(),showCount:"true"},success:function(f){var e=c.find(".result");if(f>1){e.text(AJS.format("{0} issues",f))}else{e.text(AJS.format("{0} issue",f))}e.removeClass("hidden");jQuery(".calculating, .error, .data",c).remove()},error:function(h){var f=jQuery(".error",c).removeClass("hidden"),g=h.getResponseHeader("WWW-Authenticate")||"",j=false;if(h.status===401&&g.indexOf("OAuth")!=-1){var e=/OAuth realm\=\"([^\"]+)\"/,i=e.exec(g);if(i){f.empty().append(AJS.$("<a/>",{href:i[1],"class":"oauth-init"}).text("Authenticate").click(function(){AppLinks.authenticateRemoteCredentials(i[1],function(){window.location.reload()},function(){});return false})).append(AJS.$("<span/>",{text:" "+"to retrieve your issues"}));j=true}}if(!j){f.text(AJS.format(f.text(),h.status))}jQuery(".calculating, .result, .data",c).remove()}})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="', soy.$$escapeHtmlAttribute("Filter"), '"></form></div></div><div class="pages"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageCollection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="groups"></div><div class="empty"></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h3>', soy.$$escapeHtml(opt_data.title), '</h3><ul/>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="page-icon"><a href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), ' class="icon icon-', soy.$$escapeHtmlAttribute(opt_data.type), '"></a></div><div class="page-title"><a class="ellipsis" href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), '>', soy.$$escapeHtml(opt_data.title), ' - ', soy.$$escapeHtml(opt_data.space), '</a></div>');
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
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};(function(){var a;if(typeof ConfluenceMobile!="undefined"){a=ConfluenceMobile.AppData.get("confluence-context-path")}else{a=AJS.contextPath()}RY.Page=Backbone.Model.extend({href:function(){return a+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:a+"/rest/recentlyviewed/1.0/recent",search:function(c){var b;if(this._queryLength(c)===0){b=this.models}else{var d=c.match(/[^\s-]+/g);b=this.filter(function(g){var h=g.get("title");var f=g.get("space");var e=(h+f).toLowerCase();return _.all(d,function(i){return e.indexOf(i.toLowerCase())!==-1})})}this.trigger("filter",b,c);return b},_queryLength:function(b){if(!String.prototype.trim){return AJS.$.trim(b).length}return b.trim().length},comparator:function(b){return -(b.get("lastSeen"))}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title a").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="Sorry mate, looks like you haven\'t visited any pages yet."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c="We didn\'t find any matching pages in your history."+" "+AJS.format("\u003ca href=\"{0}\"\u003eClick here\u003c/a\u003e to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/util.js' */
var RYQ=RYQ||{};(function(){RYQ.util={analytics:{trackQuickNavOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-open"})},trackQuickNavPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-page"})},trackQuickNavRecentlyDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-more-recent"})}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/quicknav.js' */
var RYQ=RYQ||{};RYQ.QuickNavEntry=Backbone.Model.extend({classNameByType:{blogpost:"content-type-blogpost",page:"content-type-page"},parse:function(a){return{className:this.classNameByType[a.type],name:a.title,href:AJS.contextPath()+a.url,id:a.id,spaceName:a.space,lastSeen:a.lastSeen}}},{escape:function(b){var a=_.map(b,_.clone);_.each(a,function(c){c.name=_.escape(c.name);c.spaceName=_.escape(c.spaceName)});return a}});RYQ.QuickNavEntryCollection=Backbone.Collection.extend({model:RYQ.QuickNavEntry,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent?limit=8",search:function(b){var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(e){var f=e.get("name");var d=f.toLowerCase();return _.all(c,function(g){return d.indexOf(g.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});(function(a){RYQ.QuickNav=Backbone.View.extend({initialize:function(){this.moreLink={className:"recently-viewed",href:"#",name:"More recently viewed pages..."};this.$input=a("#quick-search-query");this.makeDropdown();this.addShowHideHandlers();this.getHistory=_.once(this._getHistory);_.bindAll(this,"makeDropdown","addSearchResultBoostingHandler","_getHistory","render","addShowHideHandlers","_getItemsToShow","showQuickResults","onQuickSearch")},makeDropdown:function(){var c=function(d){a("a",d).each(function(){var g=a(this);var e=g.find("span");var f=AJS.dropDown.getAdditionalPropertyValue(e,"spaceName");if(f&&!g.is(".content-type-spacedesc")){g.after(g.clone().attr("class","space-name").html(f));g.parent().addClass("with-space-name")}})};var b=this;this.$dropdown=AJS.inputDrivenDropdown({dropdownPlacement:function(d){b.$input.closest("form").find(".quick-nav-drop-down").append(d)},dropdownPostprocess:function(d){c(d)},ajsDropDownOptions:{className:"recently-viewed-dropdown"}})},addSearchResultBoostingHandler:function(){var b=this;a(window).on("quicksearch.ajax-success",function(g,f){var d=f.url.match("/json/contentnamesearch.action");var c=f.url.match(/rest\/quicknav\/\d\/search/);if(d||c){b.onQuickSearch(g,f)}})},_getHistory:function(){return this.collection.fetch().done(this.addSearchResultBoostingHandler)},render:function(){var b=this.getHistory();b.done(_.bind(function(){if(AJS.dropDown.current==null&&this.collection.length!==0&&this.$input.val().length===0){this.showQuickResults()}},this));var c=this.$input;c.trigger("quick-search-loading-start");b.always(function(){c.trigger("quick-search-loading-stop")})},addShowHideHandlers:function(){var b=this;this.$input.on("focus",function(){b.render()}).on("click",function(c){c.stopPropagation();b.render()}).on("keyup",function(f){var c=f.which===27;var g=f.which===13;var d=a(this).val().length!==0;if(d||c){if(b.$dropdown.dd&&b.$dropdown.dd.$.is(":visible")){b.$dropdown.hide()}}else{if(!g){b.render()}}})},_getItemsToShow:function(){var c=this.collection.toJSON();var b=c.length>0&&c[0].id==AJS.Meta.get("page-id");if(b){c.shift()}return c},showQuickResults:function(){var b=RYQ.QuickNavEntry.escape(this._getItemsToShow());this.$dropdown.show([b,[this.moreLink]],"","");a(".recently-viewed-dropdown").on("click",".recently-viewed",function(c){c.preventDefault();a("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()});a(".recently-viewed-dropdown").on("click",".with-space-name",function(c){RYQ.util.analytics.trackQuickNavPageOpen()});RYQ.util.analytics.trackQuickNavOpen()},onQuickSearch:function(l,f){var o=f.json.query;var c=_.map(this.collection.search(o),function(e){return e.attributes});c=RYQ.QuickNavEntry.escape(c);if(c.length==0){return}var m=f.json.contentNameMatches;var p=-1;for(var g=0;g<m.length;g++){var n=m[g][0].className;if(n=="content-type-blogpost"||n=="content-type-page"){p=g;break}}if(p!=-1){var h=m[p];var b=Math.min(h.length>4?2:6-h.length,c.length);h.unshift.apply(h,_(c).first(b));m[p]=_.uniq(h,function(e){return +e.id});if(h.length>6){var k=6-b;for(var d=k;d>0;d--){h.pop()}}}else{m.unshift(_(c).first(6))}}})}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(g){g.preventDefault();var c=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var f=a(RY.Templates.body());c.addHeader("Recently viewed pages");c.addPanel("SinglePanel",f);c.addLink("Close",function(e){e.hide()});var d=a("<div>",{"class":"dialog-tip"}).text("Hint: type \"g\" and then \"r\" anywhere to quickly open this menu");c.popup.element.find(".dialog-button-panel").append(d);var i=new RY.PageCollection();var b=new RY.PageCollectionView({collection:i});f.find(".pages").html(b.render().el);c.gotoPanel(0);c.show();var h=a("#recently-viewed-dialog").spin("large");i.fetch({success:function(){h.spinStop();var j=_.extend({},Backbone.Events);var k=new RY.PageNavigator(b.$el,f.parent(),j);var e=new RY.FilterView({collection:i,el:f.find(".filter"),navigationEvents:j}).render();e.search()}});RY.util.analytics.trackDialogOpen()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/quicknav/main.js' */
var RYQ=RYQ||{};AJS.toInit(function(){var b=new RYQ.QuickNavEntryCollection();var a=new RYQ.QuickNav({collection:b})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var d=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(d));var b=a("#space-menu-link"),c=function(e){a("#space-menu-link-content").html(e.template);AJS.trigger("spacemenu-loaded");a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};b.click(function(){if(!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:c})}return false});a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a id="space-menu-link" class="aui-nav-link aui-dropdown2-trigger" href="#" aria-haspopup="true" aria-owns="space-menu-link-content" title="', soy.$$escapeHtml("Spaces"), '"><span class="browse">', soy.$$escapeHtml("Spaces"), '</span><span class="aui-icon-dropdown"></span></a><div id="space-menu-link-content" class="aui-dropdown2 aui-style-default aui-dropdown2-in-header" aria-hidden="false"></div>');
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
/* module-key = 'confluence.web.resources:analytics-support', location = '/includes/js/analytics-support/analytics-support.js' */
define("confluence-analytics-support",["jquery"],function(h){function i(a){var c={};if(a=m.exec(a)){for(var b=0;b<k.length;b++)c[k[b]]=a[b];b=c.queryParams;a={};if(b)for(var b=b.split("&"),d=0;d<b.length;d++){var e=b[d].split("=");a[e[0]]||(a[e[0]]=[]);a[e[0]].push(b[d].substring(e[0].length+1))}c.queryParams=a}return c}function l(a){if(h.isEmptyObject(a))return"";var c=!a.urlPath?"":a.urlPath,b;if(h.isEmptyObject(a.queryParams))b="";else{b=a.queryParams;var d="",e;for(e in b)for(var f=0;f<b[e].length;f++)d+=
"&"+e,b[e][f]&&(d+="="+b[e][f]);b="?"+d.substring(1)}return c+b+(!a.anchor?"":"#"+a.anchor)}AJS.Confluence.Analytics=AJS.Confluence.Analytics||{};var m=/([^\?]+)[\?]?([^#]*)[#]?(.*)/,k=["source","urlPath","queryParams","anchor"],j;AJS.Confluence.Analytics.setAnalyticsSource=function(a,c){if("undefined"===typeof j){var b=h._data(window,"events");j=b&&b.analytics&&0<b.analytics.length}j&&a.attr("href",function(a,b){var f=encodeURIComponent(c),g=i(b);h.isEmptyObject(g)||(g.queryParams.src=[f]);return l(g)})};
AJS.Confluence.Analytics.srcRemovedUrl=function(a){a=i(a);delete a.queryParams.src;for(var c=Object.keys(a.queryParams),b=0;b<c.length;b++){var d=c[b],e=d.split(".");3===e.length&&"src"===e[0]&&delete a.queryParams[d]}return l(a)};AJS.Confluence.Analytics.srcParamValues=function(a){return(a=i(a).queryParams)&&a.src?a.src:[]};AJS.Confluence.Analytics.srcAttrParamValues=function(a){for(var a=i(a).queryParams,c={},b=Object.keys(a),d=0;d<b.length;d++){var e=b[d],f=e.split(".");if(3===f.length&&"src"===
f[0]){var g=f[1],f=f[2];c[g]=c[g]||{};c[g][f]=decodeURIComponent(a[e][0])}}return c};AJS.Confluence.Analytics.extractAnalyticsData=function(a){for(var c=[],b=AJS.Confluence.Analytics.srcParamValues(a),a=AJS.Confluence.Analytics.srcAttrParamValues(a),d=0;d<b.length;d++){var e=b[d];c.push({src:e,attr:a[e]||{}})}return c};AJS.Confluence.Analytics.publish=function(a,c){AJS.trigger("analytics",{name:a,data:c||{}})};AJS.toInit(function(){var a=AJS.Confluence.Analytics.extractAnalyticsData(document.URL);
if(0<a.length){for(var c=0;c<a.length;c++){var b=a[c],d=b.attr;d.userKey=AJS.Meta.get("remote-user-key");AJS.Confluence.Analytics.publish("confluence.viewpage.src."+b.src,d)}window.history&&window.history.replaceState&&(a=AJS.Confluence.Analytics.srcRemovedUrl(document.URL),document.URL!==a&&window.history.replaceState(null,"",a))}});return AJS.Confluence.Analytics});require("confluence-analytics-support");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(d){var c=RegExp("(.+[?&])src=.+?(&.+|$)");var e;if(AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){e=AJS.Confluence.Analytics.setAnalyticsSource}else{e=function(h,i){if(b()){_.each(h,function(j){d(j).attr("href",g(d(j).attr("href"),i))})}}}function g(h,j){if(h&&(h.charAt(0)!="#")){var i=c.exec(h);if(!i){if(h.indexOf("?")>-1){h=h+"&src="+j}else{h=h+"?src="+j}}else{h=i[1]+"src="+j+i[2]}}return h}function b(){var h=d(document.getElementsByTagName("script"));var i=false;h.each(function(k,j){if(d(j).attr("src")&&d(j).attr("src").indexOf("google-analytics.com/ga.js")!=-1){i=true;return false}});return i}function f(){var i=d(".acs-side-bar a:not(.external_link a, #acs-configure-link)");e(i,"sidebar");var h=d(".quick-links-section li:not(.external_link) a");e(h,"spaceshortcut");var j=d(".ia-secondary-container a:not(.more-children-link)");if(d(".ia-secondary-container").data("tree-type")=="pages"){e(j,"contextnavchildmode")}else{if(d(".ia-secondary-container").data("tree-type")=="page-tree"){e(j,"contextnavpagetreemode")}else{e(j,"contextnav")}}}function a(h){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:h}})}}AJS.bind("sidebar.exit-configure-mode",f);AJS.bind("sidebar.flyout-triggered",function(i,h){a("flyout-triggered."+h.flyout)()});AJS.bind("spacemenu-loaded",function(){e(d("#space-menu-link-content a"),"spacemenu")});AJS.bind("sidebar.spacetools-loaded",function(){e(d("#inline-dialog-space-tools a:not(.configure-sidebar)"),"spacetools")});AJS.bind("pagetree-children-loaded",f);AJS.toInit(function(h){h(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));f()})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:content-ready', location = 'js/content-ready.js' */
(function(c){AJS.contentReady||(AJS.contentReady=function(){var a,d;1===arguments.length?a=arguments[0]:2===arguments.length&&(d=arguments[0],a=arguments[1]);c(AJS).on("content.ready",function(c){var e=Array.prototype.slice.call(arguments,1),b=e[0];if(d){b=b.is(d)?b:b.find(d);if(b.length){e[0]=b;a.apply(this,e)}}else a.apply(this,e)})},AJS.triggerContentReady=function(){c(AJS).trigger("content.ready",arguments)},c(function(){var a=[c("body")];AJS.contentReady.onReadyArgs&&(a=a.concat(AJS.contentReady.onReadyArgs));
AJS.triggerContentReady.apply(this,a)}))})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:persistable', location = 'js/persistable.js' */
define("confluence/persistable",["ajs","confluence-skate"],function(g,b){var f=g.storageManager("confluence","userSettings");return b("data-persist",{type:b.types.ATTRIBUTE,ready:function(a){var d=null;if(!a.name)throw'Missing attribute "name"';var e=a.getAttribute("data-persist"),b=f.getItem(a.name);/radio|checkbox/.test(a.type)&&a.dataset.defaultValue&&(d=a.dataset.defaultValue);if(/value|checked/.test(e)){var c;null!==b?c=b:"undefined"!==typeof d&&(c=d);"undefined"!==typeof c&&("checked"===e&&
(c="true"===c),a[e]=c)}else throw"Persistable only works with 'value' or 'checked' attributes!";},events:{change:function(a){var b=a.getAttribute("data-persist");f.setItem(a.name,a[b])}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-flag', location = '/js/aui/flag.js' */
(function(A){define("aui/flag",[],function(){return A(AJS,AJS.$,AJS.template)})})(function(L,F,N){var O=5000;var A="aui-flag-container";var E={body:"",persistent:false,close:"",title:"",type:"info"};function J(R){if(R.hasOwnProperty("persistent")){var P;if(R.persistent){P=L.deprecate.getMessageLogger("persistent: true","5.8.0",{alternativeName:"close: never",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-2893."})}else{if(!R.persistent){P=L.deprecate.getMessageLogger("persistent: false","5.8.0",{alternativeName:"close: manual",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-2893."})}}P()}R=F.extend({},E,R);var Q=R.close!=="never"&&(R.close||(R.persistent!==true));var S=D(R,Q);G(S);if(R.close==="auto"){M(S);C(S)}else{if(R.close==="manual"){M(S)}else{if(R.close==="never"){}else{if(!R.persistent){M(S)}}}}H();return K(S)}function G(Q){var P=Q[0];P.close=function(){B(Q)}}function D(Q,P){var R='<div class="aui-flag"><div class="aui-message aui-message-{type} {type} {closeable} shadowed"><p class="title"><strong>{title}</strong></p>{body}<!-- .aui-message --></div></div>';var S=N(R).fill({"body:html":Q.body||"",closeable:P?"closeable":"",title:Q.title||"",type:Q.type}).toString();return F(S)}function M(Q){var P=F('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');P.click(function(){B(Q)});P.keypress(function(R){if((R.which===L.keyCode.ENTER)||(R.which===L.keyCode.SPACE)){B(Q);R.preventDefault()}});return Q.find(".aui-message").append(P)[0]}function C(P){P.find(".aui-message").addClass("aui-will-close");setTimeout(function(){P[0].close()},O)}function B(Q){var P=Q.get(0);P.setAttribute("aria-hidden","true");P.dispatchEvent(new CustomEvent("aui-flag-close",{bubbles:true}));return P}function H(){var Q=I();var P=Q.find(".aui-flag");P.get().forEach(function(R){var S=R.getAttribute("aria-hidden")==="true";if(S){F(R).remove()}})}function I(){return F("#"+A)}function K(Q){var P=I();if(!P.length){P=F('<div id="'+A+'"></div>');F("body").prepend(P)}Q.appendTo(P);L._internal.animation.recomputeStyle(Q);return Q.attr("aria-hidden","false")[0]}return J});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag.js' */
(function(f){define("confluence/flag",function(){return f(AJS,AJS.$,AJS.template)})})(function(f,d,j){function h(a){var b=d('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');b.click(function(){g(a)});b.keypress(function(b){if(b.which===f.keyCode.ENTER||b.which===f.keyCode.SPACE)g(a),b.preventDefault()});return a.find(".aui-message").append(b)[0]}function g(a){var b=a.get(0);b.setAttribute("aria-hidden","true");a=a.parent();i(a);b.dispatchEvent(new CustomEvent("aui-flag-close",
{bubbles:!0}));return b}function i(a){a.hasClass("aui-flag-stack")&&a.children('.aui-flag:not([aria-hidden="true"])').length&&(a.children(".aui-flag-stack-top-item").removeClass("aui-flag-stack-top-item"),a.children('.aui-flag:not([aria-hidden="true"])').last().addClass("aui-flag-stack-top-item"))}var k={body:"",close:"manual",title:"",type:"info",fifo:!1};return function(a){var a=d.extend({},k,a),b,c=a,c=j('<div class="aui-flag {extraClasses}"><div class="aui-message aui-message-{type} {type} {closeable} shadowed"><p class="title"><strong>{title}</strong></p>{body}<\!-- .aui-message --\></div></div>').fill({"body:html":c.body||
"",closeable:"never"===c.close?"":"closeable",title:c.title||"",type:c.type,extraClasses:c.extraClasses||""}).toString();b=d(c);b[0].close=function(){g(b)};"auto"===a.close?(h(b),b.find(".aui-message").addClass("aui-will-close"),setTimeout(function(){b[0].close()},5E3)):"manual"===a.close&&h(b);d("#aui-flag-container").find(".aui-flag").get().forEach(function(a){a.getAttribute("aria-hidden")==="true"&&d(a).remove()});c=d("#aui-flag-container");c.length||(c=d('<div id="aui-flag-container"></div>'),
d("body").prepend(c));if(a.stack){var e=d('[data-aui-flag-stack="'+a.stack+'"]');e.length||(e=d('<div data-aui-flag-stack="'+a.stack+'" class="aui-flag-stack"></div>'),e.appendTo(c));e.find('[aria-hidden="false"]').length||e.detach().appendTo(c);a.fifo?b.appendTo(e):b.prependTo(e);i(e)}else b.appendTo(c);f._internal.animation.recomputeStyle(b);a=b.attr("aria-hidden","false")[0];a.dispatchEvent(new CustomEvent("aui-flag-show",{bubbles:!0}));return a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag-scroll.js' */
require(["jquery","ajs"],function(f,c){function g(){var a=f("#"+h);if(a.find('.aui-flag[aria-hidden="false"]').length){var b;b=0;i?b=f("#header").height()+d:(b=e.scrollTop(),b=b<=j-d?j-Math.max(b,0):d);a.css("top",b)}}var d=20,j=71,h="aui-flag-container",i=!1,e;c.toInit(function(a){e=(i=a("body").hasClass("theme-documentation"))?a("#splitter-content"):a(window);e.on("scroll",g);document.addEventListener("aui-flag-show",g);c.bind("rte-ready",function(){"page"===c.Meta.get("content-type")&&a("#"+h).find('.aui-flag[aria-hidden="false"]').each(function(){this.close()})})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]==o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)==" "){o=o.substring(1)}if(o.indexOf(l)!=-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=Confluence.storageManager("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}f.ajax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.support.stp:stp-license-status-resources', location = 'js/stp-licenseStatus.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = '/js/confluence-license-banner.js' */
require(["ajs","jquery"],function(a,b){a.toInit(function(){var d=WRM.data.claim("com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources.license-details");if(!d){a.warn("Unable to claim my required data");return}var c={destroyBanner:function(){b("#license-banner").slideUp(function(){b("#license-banner").remove()})},remindMeLater:function(){b.ajax({type:"POST",dataType:"json",url:a.contextPath()+"/rest/licensebanner/1.0/reminder/later"});c.destroyBanner()},remindMeNever:function(){b.ajax({type:"POST",dataType:"json",url:a.contextPath()+"/rest/licensebanner/1.0/reminder/never"});c.destroyBanner()},createBanner:function(g){var e;if(g.showLicenseExpiryBanner){e=Confluence.Templates.LicenseBanner.expiryBanner({days:g.daysBeforeLicenseExpiry,mac:g.renewUrl,sales:g.salesEmail})}else{if(g.showMaintenanceExpiryBanner){e=Confluence.Templates.LicenseBanner.maintenanceBanner({days:g.daysBeforeMaintenanceExpiry,mac:g.renewUrl,sales:g.salesEmail})}}if(e){var f=b(e);b("#full-height-container").prepend(f);b("#license-banner-later").click(function(h){h.preventDefault();c.remindMeLater()});b("#license-banner-never").click(function(h){h.preventDefault();c.remindMeNever()});f.find(".icon-close").click(function(h){h.preventDefault();c.remindMeLater()})}}};c.createBanner(d)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = 'soy/confluence-license-banner.soy' */
// This file was automatically generated from confluence-license-banner.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LicenseBanner == 'undefined') { Confluence.Templates.LicenseBanner = {}; }


Confluence.Templates.LicenseBanner.wrapper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div>', opt_data.contentHTML, '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.LicenseBanner.expiryBanner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var renewTag__soy8 = new soy.StringBuilder('<a id="license-banner-my-link" target="_blank" href="', soy.$$escapeHtml(opt_data.mac), '">');
  renewTag__soy8 = renewTag__soy8.toString();
  var end__soy12 = new soy.StringBuilder('</a>');
  end__soy12 = end__soy12.toString();
  var mailTag__soy14 = new soy.StringBuilder('<a id="license-banner-sales-link" href="mailto:', soy.$$escapeHtml(opt_data.sales), '">');
  mailTag__soy14 = mailTag__soy14.toString();
  var param18 = new soy.StringBuilder();
  aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="true">' + ((opt_data.days < 0) ? AJS.format("Your license subscription has expired. This instance is now read-only. Please renew {0}online{1} or contact {2}sales{3}.",renewTag__soy8,end__soy12,mailTag__soy14,end__soy12) : (opt_data.days == 0) ? AJS.format("Your license subscription will expire today and Confluence will become read-only. Please renew {0}online{1} or contact {2}sales{3}.",renewTag__soy8,end__soy12,mailTag__soy14,end__soy12) : AJS.format("Your license subscription will expire in {0,choice,1#{0} day|1\x3c{0} days}. Confluence will become read-only after the expiry. Please renew {1}online{2} or contact {3}sales{4}.",opt_data.days,renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) + '</div>', isCloseable: opt_data.days > 7, id: 'license-banner'}, param18);
  Confluence.Templates.LicenseBanner.wrapper({contentHTML: param18.toString()}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.LicenseBanner.maintenanceBanner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var renewTag__soy39 = new soy.StringBuilder('<a id="license-banner-my-link" target="_blank" href="', soy.$$escapeHtml(opt_data.mac), '">');
  renewTag__soy39 = renewTag__soy39.toString();
  var end__soy43 = new soy.StringBuilder('</a>');
  end__soy43 = end__soy43.toString();
  var later__soy45 = new soy.StringBuilder('<a href="#" id="license-banner-later">');
  later__soy45 = later__soy45.toString();
  var never__soy47 = new soy.StringBuilder('<a href="#" id="license-banner-never">');
  never__soy47 = never__soy47.toString();
  var param49 = new soy.StringBuilder();
  aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="false">' + ((opt_data.days < 0) ? AJS.format("You no longer have access Support and Updates. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.",renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43) : (opt_data.days == 0) ? AJS.format("You will lose access to Support and Updates today. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.",renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43) : AJS.format("You will lose access to Support and Updates in {0,choice,1#{0} day|1\x3c{0} days}. {1}Renew online{2}, {3}remind me later{4} or {5}never remind me again{6}.",opt_data.days,renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) + '</div>', id: 'license-banner'}, param49);
  Confluence.Templates.LicenseBanner.wrapper({contentHTML: param49.toString()}, output);
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:space-kb-web-resource', location = 'js/kb-space-dialog-wizard.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function a(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function b(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-blueprint-item",function(c){c.on("submit.kbSpaceId",a);c.on("pre-render.kbSpaceId",b);c.on("post-render.kbSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:space-kb-web-resource', location = 'soy/space.soy' */
// This file was automatically generated from space.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.KnowledgeBase == 'undefined') { Confluence.SpaceBlueprints.KnowledgeBase = {}; }


Confluence.SpaceBlueprints.KnowledgeBase.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="kb-space-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, spaceKey: opt_data.spaceKey}, output);
  output.append('<fieldset><div class="field-group"><label for="kb-space-desc">', soy.$$escapeHtml("Description"), '</label><textarea id="kb-space-desc" class="textarea long-field" rows="3" type="text" name="description" placeholder="', soy.$$escapeHtml("What is this knowledge base for?"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.SpaceBlueprints.KnowledgeBase.livesearchMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="livesearch"><ac:parameter ac:name="additional">page excerpt</ac:parameter><ac:parameter ac:name="placeholder">', soy.$$escapeHtml("Search for a solution"), '</ac:parameter>', (opt_data.spaceKey) ? '<ac:parameter ac:name="spaceKey"><ri:space ri:space-key="' + soy.$$escapeHtml(opt_data.spaceKey) + '"/></ac:parameter>' : '', '<ac:parameter ac:name="type">page</ac:parameter><ac:parameter ac:name="size">large</ac:parameter></ac:structured-macro>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/namespace.js' */
window.Confluence||(window.Confluence={});window.Confluence.UI||(window.Confluence.UI={});window.Confluence.UI.Components||(window.Confluence.UI.Components={});window.Confluence.UI.Components.Pagination||(window.Confluence.UI.Components.Pagination={});window.Confluence.UI.Components.SpacePagePicker||(window.Confluence.UI.Components.SpacePagePicker={});window.Confluence.UI.Components.PagePicker||(window.Confluence.UI.Components.PagePicker={});define("confluence-ui-components/js/page-picker",function(){return window.Confluence.UI.Components.PagePicker});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/internal/confluence.js' */
define("confluence-ui-components/confluence",[],function(){return window.Confluence});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker.js' */
define("confluence-ui-components/js/label-picker",["ajs","confluence-ui-components/confluence","jquery","underscore"],function(f,h,d,i){var a=/[:;,\.\?&\[\(\)#\^\*@!<>\]]/g;function k(l){var m=i.uniq(l.match(a));return m.join(" ")}function b(l){return{id:l.name,text:l.name}}function j(m){var l=m.contentNameMatches[0];if(!l){return[]}var n=i.map(l,b);return i.sortBy(n,function(o){return o.text.toLowerCase()})}function e(l){return function(m){return d.extend({query:m,ignoreRelated:true,maxResults:10},l)}}var c={placeholder:"Add labels",multiple:true,minimumInputLength:1,maximumSelectionSize:20,tokenSeparators:[" ",","],formatInputTooShort:function(m,l){return "Start typing to search for a label"},formatSelectionTooBig:function(l){return f.format("You can only input {0} labels",l)},formatResult:function(l){return h.UI.Components.LabelPicker.templates.labelResult({label:{labelName:l.text,isNew:l.isNew}})},formatNoMatches:function(m){var l=k(m);if(l){return h.UI.Components.LabelPicker.templates.labelInvalid({inputValue:m,invalidCharacters:l})}return this.noMatches},createSearchChoice:function(m){if(!m){return null}var l=k(m);if(l){return null}return{id:m,text:m,isNew:true}},ajax:{data:e(),dataType:"json",url:h.getContextPath()+"/labels/autocompletelabel.action",results:function(l){return{results:j(l)}},quietMillis:300},dropdownCssClass:"labels-dropdown",containerCssClass:"labels-autocomplete",initSelection:function(l,o){var n=l.val().split(",");var m=i.map(n,function(p){return{id:p,text:p}});o(m)}};function g(m){var l=d.extend({},c,m);if(m&&m.queryOpts){l.ajax.data=e(m.queryOpts);delete l.queryOpts}if(!m||!m.noMatches){l.noMatches=l.placeholder}return l}return{build:g}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker-legacy.js' */
window.Confluence.UI.Components.LabelPicker=require("confluence-ui-components/js/label-picker");AJS.deprecate.prop(window.Confluence.UI.Components.LabelPicker,"build",{sinceVersion:"1.4.18",extraInfo:"Use require('confluence-ui-components/js/label-picker')"});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/soy/label-picker.soy' */
// This file was automatically generated from label-picker.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.LabelPicker == 'undefined') { Confluence.UI.Components.LabelPicker = {}; }
if (typeof Confluence.UI.Components.LabelPicker.templates == 'undefined') { Confluence.UI.Components.LabelPicker.templates = {}; }


Confluence.UI.Components.LabelPicker.templates.labelResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format("\x22{0}\x22 - add a new label",opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
  return opt_sb ? '' : output.toString();
};


Confluence.UI.Components.LabelPicker.templates.labelInvalid = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var inputValueHtml__soy9 = new soy.StringBuilder('<b>', soy.$$escapeHtml(opt_data.inputValue), '</b>');
  inputValueHtml__soy9 = inputValueHtml__soy9.toString();
  var invalidCharactersHtml__soy13 = new soy.StringBuilder('<b>', soy.$$escapeHtml(opt_data.invalidCharacters), '</b>');
  invalidCharactersHtml__soy13 = invalidCharactersHtml__soy13.toString();
  output.append(AJS.format("{0} contains invalid characters {1}",inputValueHtml__soy9,invalidCharactersHtml__soy13));
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:kb-article-resources', location = 'soy/kb-articles.soy' */
// This file was automatically generated from kb-articles.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Plugin == 'undefined') { Confluence.Blueprints.Plugin = {}; }
if (typeof Confluence.Blueprints.Plugin.KnowledgeBaseArticle == 'undefined') { Confluence.Blueprints.Plugin.KnowledgeBaseArticle = {}; }


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.wizardPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="kb-article-wizard-page-form" class="aui"><fieldset><div class="field-group"><label for="kb-article-title">', soy.$$escapeHtml("Name"), '<span class="aui-icon icon-required">', soy.$$escapeHtml("$WIZARD_FORM_FIELD_REQUIRED_I18N"), '</span></label><input id="kb-article-title" class="text  long-field" type="text" name="title" title="title" placeholder="', soy.$$escapeHtml("Title of your article."), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label>', soy.$$escapeHtml("Labels"), '</label><input id="kb-article-labels" class="text select2-input long-field" type="text" name="labelsString" title="labelsString" placeholder="', soy.$$escapeHtml("Topics this article covers (e.g. \x22printer\x22)."), '"><div class="error"></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.contentbylabelMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="contentbylabel"><ac:parameter ac:name="showLabels">false</ac:parameter><ac:parameter ac:name="max">5</ac:parameter><ac:parameter ac:name="sort">modified</ac:parameter><ac:parameter ac:name="reverse">true</ac:parameter><ac:parameter ac:name="labels">', soy.$$escapeHtml(opt_data.labels), '</ac:parameter><ac:parameter ac:name="showSpace">false</ac:parameter><ac:parameter ac:name="spaces"><ri:space ri:space-key="', soy.$$escapeHtml(opt_data.spaceKey), '" /></ac:parameter><ac:parameter ac:name="type">page</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.jiraIssuesMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="jira"><ac:parameter ac:name="key">', soy.$$escapeHtml(opt_data.jiraIssueKey), '</ac:parameter><ac:parameter ac:name="serverId">', soy.$$escapeHtml(opt_data.jiraServerId), '</ac:parameter></ac:structured-macro>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:kb-article-resources', location = 'js/kb-articles-dialog-wizard.js' */
AJS.toInit(function(c){function a(i,g){var h=g.$container;var f=c("#kb-article-labels",h);f.auiSelect2(Confluence.UI.Components.LabelPicker.build({separator:" ",queryOpts:{spaceKey:g.wizardData.spaceKey}}))}function d(j,h){var i=j,e=i.find("#kb-article-title"),g=c.trim(e.val()),f;i.find(".error").html("");if(!g){f="Title is required."}else{if(!Confluence.Blueprint.canCreatePage(h,g)){f="A page with this name already exists."}}if(f){e.focus().siblings(".error").html(f);return false}return true}function b(g,f){return d(f.$container,f.wizardData.spaceKey)}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-how-to-item",function(e){e.on("post-render.kb-how-to-wizard",a);e.on("submit.kb-how-to-wizard",b)});Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-troubleshooting-item",function(e){e.on("post-render.kb-troubleshooting-wizard",a);e.on("submit.kb-troubleshooting-wizard",b)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    output.append('<div class="aui-nav-heading sidebar-section-header">', soy.$$escapeHtml(opt_data.title), '</div><ul class="aui-nav nav-links">');
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      navlinks.templates.appswitcher.applicationsItem(linkData8, output);
    }
    output.append('</ul>');
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" class="interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" class="interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">', soy.$$escapeHtml("Application Links"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">', soy.$$escapeHtml("Shortcuts"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div></nav></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-title">');
  aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}, output);
  output.append('<div class="sidebar-project-name">', soy.$$escapeHtml(opt_data.name), '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var dropdownList__soy74 = new soy.StringBuilder();
  navlinks.templates.appswitcher.dropdownList({list: opt_data.links}, dropdownList__soy74);
  dropdownList__soy74 = dropdownList__soy74.toString();
  aui.dropdown2.dropdown2({menu: {'id': opt_data.id, 'content': dropdownList__soy74, 'extraClasses': 'aui-style-default sidebar-customize-section'}, trigger: {'showIcon': false, 'content': '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', 'container': '#app-switcher'}}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="sidebar-admin-links">');
  var linkList82 = opt_data.list;
  var linkListLen82 = linkList82.length;
  for (var linkIndex82 = 0; linkIndex82 < linkListLen82; linkIndex82++) {
    var linkData82 = linkList82[linkIndex82];
    output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(linkData82.href), '" title="', soy.$$escapeHtml(linkData82.title), '"><span class="nav-link-label">', soy.$$escapeHtml(linkData82.label), '</span></a></li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    if (AJS.DarkFeatures.isEnabled('rotp.sidebar')) {
      var sidebarContents__soy97 = new soy.StringBuilder();
      navlinks.templates.appswitcher.sidebarContents(null, sidebarContents__soy97);
      sidebarContents__soy97 = sidebarContents__soy97.toString();
      var triggerContent__soy99 = new soy.StringBuilder();
      navlinks.templates.appswitcher.trigger(null, triggerContent__soy99);
      triggerContent__soy99 = triggerContent__soy99.toString();
      navlinks.templates.appswitcher.sidebar({sidebar: {'id': 'app-switcher', 'content': sidebarContents__soy97}, trigger: {'showIcon': false, 'content': triggerContent__soy99}}, output);
      output.append('<script>\n                (function (NL) {\n                    var initialise = function () {\n                        new NL.SideBar({\n                            sidebarContents: \'#app-switcher\'\n                        });\n                    };\n                    if (NL.SideBar) {\n                        initialise();\n                    } else {\n                        NL.onInit = initialise;\n                    }\n                }(window.NL = (window.NL || {})));\n                window.NL.isUserAdmin = ', soy.$$escapeHtml(false), '<\/script>');
    } else {
      navlinks.templates.appswitcher_old.switcher(null, output);
    }
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.sidebar.id), '" class="sidebar-trigger app-switcher-trigger" aria-owns="', soy.$$escapeHtml(opt_data.sidebar.id), '" aria-haspopup="true">', opt_data.trigger.content, '</a><div id=', soy.$$escapeHtml(opt_data.sidebar.id), ' class="app-switcher-sidebar aui-style-default sidebar-offscreen">', opt_data.sidebar.content, '</div>');
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
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.js' */
(function(c,a){a.SideBar=function(d){var e=this;this.$sidebar=null;d=c.extend({sidebarContents:null},d);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateAppLinks).fail(this.showAppSwitcherError)};this.populateProjectHeader=function(g,f){e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").after(navlinks.templates.appswitcher.projectHeaderSection({avatarUrl:f,name:g}))};this.getProjectData=function(){var f=c(".project-shortcut-dialog-trigger"),g=f.data("key"),h=f.data("entity-type");if(f.size()==0||!g||!h){c(".app-switcher-shortcuts").remove();return}var j,i;i=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+g,cache:false,data:{entityType:h},dataType:"json"});j=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+g,cache:false,data:{entityType:h},dataType:"json"});c.when(i,j).then(function(l,k){e.updateProjectShortcuts(l,k,{key:g,entityType:h,name:f.data("name"),avatarUrl:f.find("img").prop("src")})},e.showProjectShortcutsError)};this.getSidebar=function(){if(!this.$sidebar){this.$sidebar=c(d.sidebarContents)}return this.$sidebar};this.addApplicationsCog=function(){c(".app-switcher-applications .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-applications-admin-dropdown",links:[{href:AJS.contextPath()+"/plugins/servlet/customize-application-navigator",label:"Customize navigator",title:"Add new entries, hide existing or restrict who sees what"},{href:AJS.contextPath()+"/plugins/servlet/applinks/listApplicationLinks",label:"Manage application links",title:"Link to more Atlassian applications"}]}))};this.addProjectShortcutsCog=function(f,h){var g=[{href:AJS.contextPath()+"/plugins/servlet/custom-content-links-admin?entityKey="+f,label:"Customize shortcuts",title:""}];if(e.entityMappings[h]){g.push({href:e.generateEntityLinksUrl(f,e.entityMappings[h]),label:"Manage product links",title:""})}e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-project-shortcuts-admin-dropdown",links:g}))};this.updateAppLinks=function(f){c(function(){e.getSidebar().find(".app-switcher-applications").html(navlinks.templates.appswitcher.linkSection({title:"Application Links",list:f}));if(a.isUserAdmin){e.addApplicationsCog()}e.bindAnalyticsHandlers(e.getSidebar(),f)})};this.updateProjectShortcuts=function(i,g,h){var j=i[0].shortcuts,f=g[0].shortcuts;e.getSidebar().find(".app-switcher-shortcuts").html(navlinks.templates.appswitcher.linkSection({title:"Shortcuts",list:j.concat(f)}));if(a.isUserAdmin){e.addProjectShortcutsCog(h.key,h.entityType)}e.populateProjectHeader(h.name,h.avatarUrl);e.bindAnalyticsHandlers(e.getSidebar(),data)};this.entityMappings={"confluence.space":"com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType","jira.project":"com.atlassian.applinks.api.application.jira.JiraProjectEntityType","bamboo.project":"com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType","stash.project":"com.atlassian.applinks.api.application.stash.StashProjectEntityType"};this.generateEntityLinksUrl=function(f,g){if(g===e.entityMappings["confluence.space"]){return AJS.contextPath()+"/spaces/listentitylinks.action?typeId="+g+"&key="+f}else{return AJS.contextPath()+"/plugins/servlet/applinks/listEntityLinks/"+g+"/"+f}};this.showAppSwitcherError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-applications .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.showProjectShortcutsError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-shortcuts .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.retryLoading=function(f){this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());this.getLinks();this.getProjectData();f&&f.stopPropagation()};this.bindAnalyticsHandlers=function(f,g){};this.getLinks();c(this.getProjectData);this.toggleSidebar=function(h){var i=e.getSidebar(),g=c("body"),f=c(window.document);if(!g.hasClass("app-switcher-open")){var k=c("#header");i.css("left",-i.width());i.parent("body").length||i.appendTo("body");b({data:i});i.animate({left:0},300);function j(l){var n=l.target&&c(l.target),m=l.keyCode;if(l.originalEvent===h.originalEvent){return}if(n&&!m&&!(n.closest(i).length||n.closest(k).length)&&h.which==1&&!(l.shiftKey||l.ctrlKey||l.metaKey)){e.toggleSidebar()}else{if(m===27){e.toggleSidebar()}}}f.on("click.appSwitcher",j);f.on("keydown.appSwitcher",j);f.on("scroll.appSwitcher",i,b)}else{f.off(".appSwitcher")}g.toggleClass("app-switcher-open")};c("#header").on("click",".app-switcher-trigger",this.toggleSidebar)};function b(f){var d=c(document).scrollTop(),g=c("#header"),e=(g.height()+g.offset().top)-d;if(e>=0){f.data.css({top:e,position:"fixed"})}else{f.data.css({top:0,left:0,position:"fixed"})}}if(a.onInit){a.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.js' */
(function(e,c){c.AppSwitcher=function(f){var g=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var h=this;this.$dropdown=null;f=e.extend({dropdownContents:null},f);this.getLinks=function(){return e.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=e(f.dropdownContents)}return this.$dropdown};this.updateDropdown=function(i){e(function(){h.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:i,showAdminLink:c.isUserAdmin,adminLink:g}));h.bindAnalyticsHandlers(h.getDropdown(),i);h.processSuggestionApps(i)})};this.bindAnalyticsHandlers=function(i,j){};this.processSuggestionApps=function(i){e.ajax({type:"GET",dataType:"json",contentType:"application/json; charset=UTF-8",url:AJS.contextPath()+"/rest/menu/latest/isAppSuggestionAvailable"}).done(function(j){if(j===true){h.handleSuggestionApps(i)}})};this.handleSuggestionApps=function(k){var l=_.map(k,function(m){return m.applicationType.toLowerCase()});$suggestionApps=e("<div id='app-switcher-suggestion-apps' class='aui-dropdown2-section'/>");$suggestionApps.html(navlinks.templates.appswitcher_old.suggestionApps);var j=$suggestionApps.find(".suggestion-apps");var i=false;_.each(a,function(m){if(!_.contains(l,m.appName)){i=true;j.append(navlinks.templates.appswitcher_old.suggestionApp({appName:m.appName,appDesc:m.appDesc}))}});if(!i){return}e("#app-switcher").append($suggestionApps);e(".app-discovery-suggestion-app").click(function(){AJS.trigger("analytics",{name:"appswitcher.discovery.user.select."+e(this).find("a").attr("id").toLowerCase()});window.open(e(this).find("a").attr("title"),"_blank")});e(".app-discovery-suggestion-app").hover(function(){e(this).find("a").removeClass("active").removeClass("aui-dropdown2-active")});e(".app-discovery-cancel-button").click(function(){AJS.trigger("analytics",{name:"appswitcher.discovery.nothanks.button.click"});d(b,"true");$suggestionApps.remove()})};this.showError=function(){e(function(){h.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(h.retryLoading,h))})};this.retryLoading=function(i){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();i&&i.stopPropagation()};this.getLinks()};var b="key-no-thanks";var a=[{appName:"jira",appDesc:"Issue & Project Tracking Software"},{appName:"confluence",appDesc:"Collaboration and content sharing"},{appName:"bamboo",appDesc:"Continuous integration"}];var d=function(f,g){e.ajax({url:AJS.contextPath()+"/rest/menu/latest/userdata/",type:"PUT",contentType:"application/json",data:JSON.stringify({key:f,value:g})})};if(c.onInit){c.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.soy' */
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}, output);
  if (opt_data.custom) {
    navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}, output);
  }
  if (opt_data.showAdminLink) {
    navlinks.templates.appswitcher_old.adminSection(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    var param19 = new soy.StringBuilder('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentData(linkData27, {showDescription: opt_data.showDescription}), param19);
    }
    param19.append('</ul>');
    aui.dropdown2.section({content: param19.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link', (opt_data.self) ? ' nav-link-local' : '', '"><a href="', soy.$$escapeHtml(opt_data.link), '" class="aui-dropdown2-radio interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + "Configure\x26hellip;" + '</span></a></li></ul>'}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-loading">', "Loading\x26hellip;", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    var loadingContent__soy81 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.loading(null, loadingContent__soy81);
    loadingContent__soy81 = loadingContent__soy81.toString();
    var triggerContent__soy83 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.trigger(null, triggerContent__soy83);
    triggerContent__soy83 = triggerContent__soy83.toString();
    aui.dropdown2.dropdown2({menu: {'id': 'app-switcher', 'content': loadingContent__soy81, 'extraClasses': 'aui-style-default'}, trigger: {'showIcon': false, 'content': triggerContent__soy83, 'extraClasses': 'app-switcher-trigger', 'extraAttributes': {'href': '#app-switcher'}}}, output);
    output.append('<script>\n            (function (NL) {\n                var initialise = function () {\n                    // For some milestones of AUI, the atlassian soy namespace was renamed to aui. Handle that here by ensuring that window.atlassian is defined.\n                    window.atlassian = window.atlassian || window.aui;\n                    new NL.AppSwitcher({\n                        dropdownContents: \'#app-switcher\'\n                    });\n                };\n                if (NL.AppSwitcher) {\n                    initialise();\n                } else {\n                    NL.onInit = initialise;\n                }\n            }(window.NL = (window.NL || {})));\n            window.NL.isUserAdmin = ', soy.$$escapeHtml(false), '<\/script>');
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.suggestionApp = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="app-discovery-suggestion-app"><a id="', soy.$$escapeHtml(opt_data.appName), '" href="#" class="app-discovery-link aui-icon-container app-discovery-', soy.$$escapeHtml(opt_data.appName), '-product-icon" title="https://www.atlassian.com/software/', soy.$$escapeHtml(opt_data.appName), '"/><div class="app-discovery-small">', soy.$$escapeHtml(opt_data.appDesc), '</div></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.suggestionApps = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class=\'nav-links suggestion-apps\'><li><span class=\'app-discovery-suggest-title nav-link-label\'><h6>', soy.$$escapeHtml("Try other Atlassian apps"), '</h6></span></li></ul><div class=\'buttons-container app-discovery-suggest-apps-buttons\'><div class=\'buttons\'><button class=\'aui-button aui-button-link app-discovery-cancel-button\' name=\'cancel\' accesskey=\'c\' href=\'#\'>', soy.$$escapeHtml("Don\x27t show this again"), '</button></div></div>');
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
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/inline-dialog.js' */
(function(d){AJS.CustomInlineDialog=AJS.CustomInlineDialog||function(B,n,r,p){p=p||[];if(p.hasOwnProperty("getArrowAttributes")){getArrowAttributesDeprecationLogger()}if(p.hasOwnProperty("getArrowPath")){getArrowPathDeprecationLogger();if(p.hasOwnProperty("gravity")){getArrowPathWithGravityDeprecationLogger()}}if(p.hasOwnProperty("onTop")){onTopDeprecationLogger();if(p.onTop&&p.gravity===undefined){p.gravity="s"}}if(typeof n==="undefined"){n=String(Math.random()).replace(".","");if(d("#inline-dialog-"+n+", #arrow-"+n+", #inline-dialog-shim-"+n).length){throw"GENERATED_IDENTIFIER_NOT_UNIQUE"}}var z=d.extend(false,AJS.CustomInlineDialog.opts,p);if(z.gravity==="w"){z.offsetX=p.offsetX===undefined?10:p.offsetX;z.offsetY=p.offsetY===undefined?0:p.offsetY}var v=function(){return window.Raphael&&p&&(p.getArrowPath||p.getArrowAttributes)};var j;var q;var K;var u=false;var A=false;var I=false;var J;var x;var g=d('<div id="inline-dialog-'+n+'" class="aui-inline-dialog"><div class="aui-inline-dialog-contents contents"></div><div id="arrow-'+n+'" class="aui-inline-dialog-arrow arrow"></div></div>');var m=d("#arrow-"+n,g);var G=g.find(".contents");if(!v()){g.find(".aui-inline-dialog-arrow").addClass("aui-css-arrow")}if(!z.displayShadow){G.addClass("aui-inline-dialog-no-shadow")}if(z.autoWidth){G.addClass("aui-inline-dialog-auto-width")}else{G.css("width",z.width+"px")}G.mouseover(function(O){clearTimeout(q);g.unbind("mouseover")}).mouseout(function(){E()});var D=function(){if(!j){j={popup:g,hide:function(){E(0)},id:n,show:function(){y()},persistent:z.persistent?true:false,reset:function(){function S(U,T){U.css(T.popupCss);if(v()){if(T.gravity==="s"){T.arrowCss.top-=d.browser.msie?10:9}if(!U.arrowCanvas){U.arrowCanvas=Raphael("arrow-"+n,16,16)}var V=z.getArrowPath,W=d.isFunction(V)?V(T):V;U.arrowCanvas.path(W).attr(z.getArrowAttributes())}else{m.removeClass("aui-bottom-arrow aui-left-arrow aui-right-arrow");if(T.gravity==="s"&&!m.hasClass("aui-bottom-arrow")){m.addClass("aui-bottom-arrow")}else{if(T.gravity==="n"){}else{if(T.gravity==="w"){m.addClass("aui-left-arrow")}else{if(T.gravity==="e"){m.addClass("aui-right-arrow")}}}}}m.css(T.arrowCss)}var P=AJS.$(window).height();var Q=Math.round(P*0.75);g.children(".aui-inline-dialog-contents").css("max-height",Q);var O=z.calculatePositions(g,x,J,z);if(O.hasOwnProperty("displayAbove")){displayAboveDeprecationLogger();O.gravity=O.displayAbove?"s":"n"}S(g,O);g.fadeIn(z.fadeTime,function(){});if(d.browser.msie&&~~(d.browser.version)<10){var R=d("#inline-dialog-shim-"+n);if(!R.length){d(g).prepend(d('<iframe class = "inline-dialog-shim" id="inline-dialog-shim-'+n+'" frameBorder="0" src="javascript:false;"></iframe>'))}R.css({width:G.outerWidth(),height:G.outerHeight()})}}}}return j};var y=function(){if(g.is(":visible")){return}K=setTimeout(function(){if(!I||!A){return}z.addActiveClass&&d(B).addClass("active");u=true;if(!z.persistent){H()}AJS.CustomInlineDialog.current=D();d(document).trigger("showLayer",["inlineDialog",D()]);D().reset()},z.showDelay)};var E=function(O){if(typeof O=="undefined"&&z.persistent){return}A=false;if(u&&z.preHideCallback.call(g[0].popup)){O=(O==null)?z.hideDelay:O;clearTimeout(q);clearTimeout(K);if(O!=null){q=setTimeout(function(){l();z.addActiveClass&&d(B).removeClass("active");g.fadeOut(z.fadeTime,function(){z.hideCallback.call(g[0].popup)});if(g.arrowCanvas){g.arrowCanvas.remove();g.arrowCanvas=null}u=false;A=false;d(document).trigger("hideLayer",["inlineDialog",D()]);AJS.CustomInlineDialog.current=null;if(!z.cacheContent){I=false;w=false}},O)}}};var F=function(R,P){var O=d(P);z.upfrontCallback.call({popup:g,hide:function(){E(0)},id:n,show:function(){y()}});g.each(function(){if(typeof this.popup!="undefined"){this.popup.hide()}});if(z.closeOthers){d(".aui-inline-dialog").each(function(){!this.popup.persistent&&this.popup.hide()})}x={target:O};if(!R){J={x:O.offset().left,y:O.offset().top}}else{J={x:R.pageX,y:R.pageY}}if(!u){clearTimeout(K)}A=true;var Q=function(){w=false;I=true;z.initCallback.call({popup:g,hide:function(){E(0)},id:n,show:function(){y()}});y()};if(!w){w=true;if(d.isFunction(r)){r(G,P,Q)}else{d.get(r,function(T,S,U){G.html(z.responseHandler(T,S,U));I=true;z.initCallback.call({popup:g,hide:function(){E(0)},id:n,show:function(){y()}});y()})}}clearTimeout(q);if(!u){y()}return false};g[0].popup=D();var w=false;var t=false;var s=function(){if(!t){d(z.container).append(g);t=true}};var o=d(B);if(z.onHover){if(z.useLiveEvents){if(o.selector){d(document).on("mousemove",o.selector,function(O){s();F(O,this)}).on("mouseout",o.selector,function(){E()})}else{AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.")}}else{o.mousemove(function(O){s();F(O,this)}).mouseout(function(){E()})}}else{if(!z.noBind){if(z.useLiveEvents){if(o.selector){d(document).on("click",o.selector,function(O){s();if(M()){g.hide()}else{F(O,this)}return false}).on("mouseout",o.selector,function(){E()})}else{AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.")}}else{o.click(function(O){s();if(M()){g.hide()}else{F(O,this)}return false}).mouseout(function(){E()})}}}var M=function(){return u&&z.closeOnTriggerClick};var H=function(){k();f()};var l=function(){C();N()};var i=false;var h=n+".inline-dialog-check";var k=function(){if(!i){d("body").bind("click."+h,function(P){var O=d(P.target);if(O.closest("#inline-dialog-"+n+" .contents").length===0){E(0)}});i=true}};var C=function(){if(i){d("body").unbind("click."+h)}i=false};var L=function(O){if(O.keyCode===27){E(0)}};var f=function(){d(document).on("keydown",L)};var N=function(){d(document).off("keydown",L)};g.show=function(P,O){if(P){P.stopPropagation()}s();if(z.noBind&&!(B&&B.length)){F(P,O===undefined?P.target:O)}else{F(P,B)}};g.hide=function(){E(0)};g.refresh=function(){if(u){D().reset()}};g.getOptions=function(){return z};return g};function c(g){var f=d(g);var h=d.extend({left:0,top:0},f.offset());return{left:h.left,top:h.top,width:f.outerWidth(),height:f.outerHeight()}}function b(h,j,t,f){var m=AJS.$.isFunction(f.offsetX)?f.offsetX(h,j,t,f):f.offsetX;var l=AJS.$.isFunction(f.offsetY)?f.offsetY(h,j,t,f):f.offsetY;var q=AJS.$.isFunction(f.arrowOffsetX)?f.arrowOffsetX(h,j,t,f):f.arrowOffsetX;var p=AJS.$.isFunction(f.arrowOffsetY)?f.arrowOffsetY(h,j,t,f):f.arrowOffsetY;var s=f.container.toLowerCase()!=="body";var g=AJS.$(f.container);var o=s?AJS.$(f.container).parent():AJS.$(window);var r=s?g.offset():{left:0,top:0};var k=s?o.offset():{left:0,top:0};var i=j.target;var u=i.offset();var n=i[0].getBBox&&i[0].getBBox();return{screenPadding:10,arrowMargin:5,window:{top:k.top,left:k.left,scrollTop:o.scrollTop(),scrollLeft:o.scrollLeft(),width:o.width(),height:o.height()},scrollContainer:{width:g.width(),height:g.height()},trigger:{top:u.top-r.top,left:u.left-r.left,width:n?n.width:i.outerWidth(),height:n?n.height:i.outerHeight()},dialog:{width:h.width(),height:h.height(),offset:{top:l,left:m}},arrow:{height:h.find(".arrow").outerHeight(),offset:{top:p,left:q}}}}function e(f,p,G,r){var n=b(f,p,G,r);var j=n.screenPadding;var k=n.window;var t=n.trigger;var D=n.dialog;var i=n.arrow;var z=n.scrollContainer;var E={top:t.top-k.scrollTop,left:t.left-k.scrollLeft};var A=Math.floor(t.height/2);var v=Math.floor(D.height/2);var u=Math.floor(i.height/2);var C=E.left-D.offset.left-j;var H=z.width-E.left-t.width-D.offset.left-j;var B=C>=D.width;var h=H>=D.width;var l=!h&&B?"e":"w";var o=E.top+A-u;var q=k.height-o-i.height;j=Math.min(j,o-n.arrowMargin);j=Math.min(j,q-n.arrowMargin);var g=E.top+A;var x=Math.max(g-j,0);var F=Math.max(k.height-g-j,0);var y=v-D.offset.top>x;var m=v+D.offset.top>F;var w;var s;if(y){w={top:k.scrollTop+j,left:l==="w"?t.left+t.width+D.offset.left:t.left-D.width-D.offset.left};s={top:(t.top+A)-(w.top+u)}}else{if(m){w={top:k.scrollTop+k.height-D.height-j,left:l==="w"?t.left+t.width+D.offset.left:t.left-D.width-D.offset.left};s={top:(t.top+A)-(w.top+u)}}else{w={top:t.top+A-v+D.offset.top,left:l==="w"?t.left+t.width+D.offset.left:t.left-D.width-D.offset.left};s={top:v-u+i.offset.top}}}return{gravity:l,popupCss:w,arrowCss:s}}function a(g,o,z,s){var x=AJS.$.isFunction(s.offsetX)?s.offsetX(g,o,z,s):s.offsetX;var v=AJS.$.isFunction(s.offsetY)?s.offsetY(g,o,z,s):s.offsetY;var m=AJS.$.isFunction(s.arrowOffsetX)?s.arrowOffsetX(g,o,z,s):s.arrowOffsetX;var l=AJS.$.isFunction(s.arrowOffsetY)?s.arrowOffsetY(g,o,z,s):s.arrowOffsetY;var f=c(window);var p=c(o.target);var y=c(g);var j=c(g.find(".aui-inline-dialog-arrow"));var i=p.left+p.width/2;var u=(window.pageYOffset||document.documentElement.scrollTop)+f.height;var k=10;y.top=p.top+p.height+~~v;y.left=p.left+~~x;var r=f.width-(y.left+y.width+k);j.left=i-y.left+~~m;j.top=-(j.height/2);var n=p.top>y.height;var h=(y.top+y.height)<u;var q=(!h&&n)||(n&&s.gravity==="s");if(q){y.top=p.top-y.height-(j.height/2);j.top=y.height}if(s.isRelativeToMouse){if(r<0){y.right=k;y.left="auto";j.left=z.x-(f.width-y.width)}else{y.left=z.x-20;j.left=z.x-y.left}}else{if(r<0){y.right=k;y.left="auto";var w=f.width-y.right;var t=w-y.width;j.right="auto";j.left=i-t-j.width/2}else{if(y.width<=p.width/2){j.left=y.width/2;y.left=i-y.width/2}}}return{gravity:q?"s":"n",displayAbove:q,popupCss:{left:y.left,top:y.top,right:y.right},arrowCss:{left:j.left,top:j.top,right:j.right}}}AJS.CustomInlineDialog.opts={onTop:false,responseHandler:function(g,f,h){return g},closeOthers:true,isRelativeToMouse:false,addActiveClass:true,onHover:false,useLiveEvents:false,noBind:false,fadeTime:100,persistent:false,hideDelay:10000,showDelay:0,width:300,offsetX:0,offsetY:10,arrowOffsetX:0,arrowOffsetY:0,container:"body",cacheContent:true,displayShadow:true,autoWidth:false,gravity:"n",closeOnTriggerClick:false,preHideCallback:function(){return true},hideCallback:function(){},initCallback:function(){},upfrontCallback:function(){},calculatePositions:function(f,i,j,h){h=h||{};var g=h.gravity==="w"?e:a;return g(f,i,j,h)},getArrowPath:function(f){if(f.gravity==="s"){return"M0,8L8,16,16,8"}else{return"M0,8L8,0,16,8"}},getArrowAttributes:function(){return{fill:"#fff",stroke:"#ccc"}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:about', location = '/includes/js/about/about-page.js' */
AJS.toInit(function(a){var c;a("#confluence-about-link").click(function(d){d.preventDefault();a(this).removeClass("interactive");if(null==c){AJS.Meta.get("version-number").match(/^\d+\.\d+/);var d="Atlassian Confluence and Confluence Plugins",e=AJS.Meta.get("context-path")+"/aboutconfluence.action",b=new AJS.ConfluenceDialog({id:"about-confluence-dialog",closeOnOutsideClick:!0});b.addHeader(d);b.addCancel("Close",function(){b.hide()});a.get(e,function(a){b.addPanel("default",
a,"about-page-content")});c=b}c.show()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:general-analytics-bindings', location = '/includes/js/analytics-support/analytics-bindings.js' */
require(["jquery","confluence-analytics-support"],function(b,d){b(function(){function e(a,c){b(a).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(a,c){b(a).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(a,c){b("#header .aui-header-secondary "+a).on("click",function(){var a=b(this).hasClass("aui-dropdown2-active")?"expanded":
"collapsed";d.publish("confluence.header.dropdown."+c,{state:a})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-on-space-resources', location = 'com/atlassian/confluence/extra/calendar3/templates/upcoming-event-badge.soy' */
// This file was automatically generated from upcoming-event-badge.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.upcomingEventBadge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-badge teamcal-sidebar-upcoming-msg hidden"></span>');
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
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-on-space-resources', location = 'com/atlassian/confluence/extra/calendar3/js/calendar-on-space.js' */
(function(a){a(function(){function b(){var h="com.atlassian.confluence.extra.team-calendars:tc-on-space-blueprint-webitem";Confluence.Blueprint.setDirectCallback(h,function(j,i){i.finalUrl=Confluence.getContextPath()+"/display/"+i.spaceKey+"/calendars?src=sidebar&openAddCalDialog=true"})}b();var g=Confluence.TeamCalendars.Templates.upcomingEventBadge();var e=a(".space-calendar-sidebar-link a");if(e){e.append(g);var f=a(".teamcal-sidebar-upcoming-msg");AJS.bind("sidebar.collapsed",function(){if(f.html()===""){f.addClass("hidden")}});AJS.bind("sidebar.expanded",function(){if(f.html()===""){f.addClass("hidden")}else{f.removeClass("hidden")}})}function d(){var h=new Date();var i=new Date(Date.UTC(h.getFullYear(),h.getMonth(),h.getDate())).toISOString();a.cookie("team-calendars.badge.number.click.date."+AJS.Meta.get("space-key"),i)}a(document).on("click",".teamcal-sidebar-upcoming-msg",function(){d();Confluence.TeamCalendars.fireEventForAnalytics("badge.number.click",{spaceKey:AJS.Meta.get("space-key")||""})});a(document).on("click",".space-calendar-sidebar-link",function(){d()});function c(){var p=a(".space-calendar-sidebar-link a");if(!p){return}var k=a.cookie("team-calendars.badge.number.click.date."+AJS.Meta.get("space-key"));var j=new Date();var q=new Date(Date.UTC(j.getFullYear(),j.getMonth(),j.getDate()));var i=q.toISOString();if(i===k){return}q.setDate(q.getDate()+1);var l=q.toISOString();var o=AJS.Meta.get("space-key")||"";var m=a("input[name='userTimeZoneId']").val()||a("#team-calendars-user-timezone").attr("content");var h=AJS.contextPath()+"/rest/calendar-services/1.0/calendar/events/upcoming.json";var n=a(".teamcal-sidebar-upcoming-msg").addClass("hidden");a.ajax({cache:false,data:{calendarContext:"spaceCalendars",viewingSpaceKey:o,start:i,end:l,userTimeZoneId:m},dataType:"json",success:function(r){if(r.upcomingEvents>0){if(r.upcomingEvents===1){n.attr("title",AJS.format("{0} upcoming calendar event",r.upcomingEvents))}else{n.attr("title",AJS.format("{0} upcoming calendar events",r.upcomingEvents))}n.html(r.upcomingEvents);n.removeClass("hidden")}else{n.addClass("hidden");n.html("")}},type:"GET",url:h})}if(a(".space-calendar-sidebar-link").length){c()}})}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'templates/anchor.soy' */
// This file was automatically generated from anchor.soy.
// Please don't edit this file by hand.

if (typeof MyWork == 'undefined') { var MyWork = {}; }
if (typeof MyWork.Templates == 'undefined') { MyWork.Templates = {}; }
if (typeof MyWork.Templates.Anchor == 'undefined') { MyWork.Templates.Anchor = {}; }


MyWork.Templates.Anchor.tasksFeatureDiscovery = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml("See the tasks assigned to you, or created by you, in the Tasks tab of your profile."), '</p><ul class="mw-tasks-discovery-controls"><li><a id="mw-tasks-discovery-view" href="', soy.$$escapeHtml(opt_data.tasksUrl), '" class="aui-button aui-style"><p>', soy.$$escapeHtml("View Tasks"), '</p></a></li><li><a id="mw-tasks-discovery-dismiss" href="#">', soy.$$escapeHtml("Dismiss"), '</a></li></ul>');
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
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/miniview-anchor.js' */
var MW=MW||{$:AJS.$||Zepto};MW.MV={};AJS.toInit(function(){if(AJS.Meta&&!AJS.Meta.get("remote-user")){return}MW.MV.AnchorManager=function(){var l=contextPath,h=l+"/plugins/servlet/notifications-miniview",p=0,e=/[?&]show-miniview/.test(window.location.search);function r(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s="[\\?\\#&]"+t+"=([^&#]*)";var v=new RegExp(s);var u=v.exec(window.location.search);if(u!==null){return decodeURIComponent(u[1].replace(/\+/g," "))}}var o=r("show-miniview");if(o){h+="#notification/"+o}function q(){var s="badge-i aui-icon aui-icon-small aui-iconfont-workbox-empty";MW.$("#notifications-anchor").html('<div class="'+s+'"></div><span class="badge-w"><span class="badge"></span></span>').attr("title","Open Notifications")}function f(u){var t=false,s;return function(){if(t){return s}t=true;s=u.apply(this,arguments);return s}}var n=f(function(){MW.Dialog.getOptions().closeOthers=false;MW.Dialog.preload=true;MW.Dialog.show();MW.Dialog.hide();MW.Dialog.getOptions().closeOthers=true});function k(s){return s<=9?s:"9+"}function j(s){var t=MW.$("#notifications-anchor"),u=t.find(".badge"),v=t.find(".aui-icon");u.html(k(s));p=s;if(s>0){t.addClass("unread").removeClass("read");v.addClass("aui-iconfont-workbox").removeClass("aui-iconfont-workbox-empty");if(t.is(":visible")&&!e){n()}}else{t.addClass("read").removeClass("unread");v.addClass("aui-iconfont-workbox-empty").removeClass("aui-iconfont-workbox")}}function m(){c("notifications",h);d()}function d(){MW.$(document).keydown(function(s){if(AJS.InlineDialog.current&&s.which==27&&!MW.$(s.target).is(":input")){AJS.InlineDialog.current.hide()}})}function i(){MW.$("#header-menu-bar").find(".ajs-drop-down").each(function(){this.hide()})}function c(x,v){var w;var u=function(){w=this};var s=function(){if(this.preload!==true){var y=JSON.stringify({markAllRead:true});MW.$("#"+x+"-miniview-iframe")[0].contentWindow.postMessage(y,"*")}};if(!window.addEventListener){window.attachEvent("onmessage",t)}else{window.addEventListener("message",t,false)}function t(A){function B(C){return C===location.protocol+"//"+location.host}if("escKey"===A.data){w.hide();MW.$("#notifications-anchor").focus();document.activeElement.blur()}else{if("getParentConfig"===A.data&&B(A.origin)){var z=JSON.stringify({parentConfig:{parentUrl:location.href,preload:MW.Dialog.preload,unread:p}}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(z,"*");if(MW.Dialog.preload){MW.Dialog.preload=false}else{y.focus()}}}}MW.Dialog=AJS.InlineDialog(MW.$("#"+x+"-anchor"),x+"-miniview",function(B,z,C){if(MW.$(B).children().length===0){MW.$(B).append(MW.$('<iframe id="'+x+'-miniview-iframe" src="'+v+'" frameborder="0"></iframe>'))}else{var A=JSON.stringify({unread:p}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(A,"*");setTimeout(function(){y.focus()},100)}i();C()},{width:500,height:520,hideDelay:null,initCallback:u,hideCallback:s,noBind:true});MW.Tasks=(function(){var A=300;var z=20;var B=16;var G;var D=AJS.$("#user-menu-link");var C=AJS.$("#user-menu-link-content");var y=C.find("#view-mytasks-link");var E=function(J,H,K){var I=MyWork.Templates.Anchor.tasksFeatureDiscovery({tasksUrl:AJS.contextPath()+"/plugins/inlinetasks/mytasks.action"});J.html(I);J.find("#mw-tasks-discovery-dismiss").click(function(){G.hide()});K()};var F=function(){MW.Dialog.hide();var J=function(){return C.is(":visible")};if(!J()){D.trigger("aui-button-invoke")}var H=function(){G.hide()};C.one("aui-dropdown2-hide",H);G=AJS.InlineDialog(y,"my-tasks-discovery",E,{hideCallback:function(){G.unbind("click focusin mousedown",I);C.unbind("aui-dropdown2-hide",H);if(J()){D.trigger("aui-button-invoke")}MW.$("#inline-dialog-my-tasks-discovery").remove()},gravity:"w",useLiveEvents:true,width:A,noBind:true});C.find(".user-item.active").removeClass("active");y.addClass("active");y.focus();var I=function(K){K.stopPropagation()};G.on("click focusin mousedown",I);G.show()};return{closeAndDiscoverMyTasks:F}})();MW.$("#"+x+"-anchor").click(function(y){y.preventDefault();if(MW.$("#"+x+"-miniview-iframe").is(":visible")){MW.Dialog.hide()}else{MW.Dialog.show()}});if(e){MW.$("#"+x+"-anchor").click()}}function g(){q();m()}return{setupAnchors:g,updateNotificationCount:j}}();MW.MV.AnchorManager.setupAnchors();var b=new MW.AnchorUtil(MW.$,contextPath,MW.MV.AnchorManager.updateNotificationCount);b.setupAnchors();MW.$("#notifications-anchor").click(function(){MW.MV.AnchorManager.updateNotificationCount(0)});var a=function(){if(document.hidden){b.stopRequests(true)}else{b.startRequests()}};document.addEventListener("visibilitychange",a,false);if(typeof document.hidden==="undefined"){MW.$(window).focus(function(){b.startRequests()})}MW.$("body").click(function(){b.startRequests()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/util/anchor-util.js' */
MW.AnchorUtil=function(d,k,e){var f=30000,i=f,s,p=k+"/rest/mywork/latest/status/notification/count";var r=new Date().getTime();var b=5*60*1000;var t=1000*60*5;var h=1.25;var c=0;function q(u){window.clearInterval(s);s=undefined;if(u===true){i=f}}function o(){return(new Date().getTime()-r)<t}function m(){if(!o()||!s){l()}r=new Date().getTime()}function l(){if(s){clearTimeout(s)}s=setTimeout(function(){g()},c=n(c))}function a(w,u){var v=w*1000;b=u*1000||b;if(v&&v!=i){i=v;m()}}function n(u){return Math.min(o()?i:u*h,b)}function g(u){MW.$.getJSON(p+((u)?"?pageid="+u:""),function(w){a(w.timeout,w.maxTimeout);var v=w.count;e(v)});l()}function j(){var u=AJS&&AJS.Meta&&AJS.Meta.get&&(AJS.Meta.get("content-type")==="page"||AJS.Meta.get("content-type")==="blogpost");if(u){g(AJS.Meta.get("page-id"))}else{g()}m()}return{setupAnchors:j,startRequests:m,stopRequests:q,updateAnchors:g}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.balsamiq.confluence.plugins.mockups:blueprint-web-resource', location = 'includes/editor/blueprintcallback.js' */
try{if(AJS&&AJS.Confluence&&AJS.Confluence.Blueprint){AJS.Confluence.Blueprint.setDirectCallback("com.balsamiq.confluence.plugins.mockups:blueprint-item",function(b,a){a.finalUrl=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(a.spaceKey)+"&openBalsamiq=true"})}}catch(err){if(console&&console.log){console.log("Error loading blueprintcallback.js");console.log(err)}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.m20tech.tooltips:tooltip-resources', location = '/tooltips/tooltip-enable.js' */
AJS.toInit(function(){AJS.$("a").each(function(c){var e=$(this)[0];var b=e.href;var a=b.search("\\?tooltip=");if(a>0){e.href="#";var d=decodeURIComponent(b.substr(a+9));e.title=d;$(this).addClass("link-tooltip")}});AJS.$(".link-tooltip").tooltip({live:true})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-acknowledgement-resources', location = 'js/nps/server/nps-initialiser.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">', soy.$$escapeHtml(opt_data.label), '</ac:parameter><ac:parameter ac:name="spaces">', soy.$$escapeHtml(opt_data.spaces), '</ac:parameter><ac:parameter ac:name="firstcolumn">', soy.$$escapeHtml(opt_data.firstcolumn), '</ac:parameter><ac:parameter ac:name="headings">', soy.$$escapeHtml(opt_data.headings), '</ac:parameter><ac:parameter ac:name="blankTitle">', soy.$$escapeHtml(opt_data.blankTitle), '</ac:parameter><ac:parameter ac:name="blankDescription">', soy.$$escapeHtml(opt_data.blankDescription), '</ac:parameter><ac:parameter ac:name="contentBlueprintId">', soy.$$escapeHtml(opt_data.contentBlueprintId), '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter><ac:parameter ac:name="createButtonLabel">', soy.$$escapeHtml(opt_data.createButtonLabel), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.moduleKey), '</ac:parameter><ac:parameter ac:name="buttonLabel">', soy.$$escapeHtml(opt_data.buttonLabel), '</ac:parameter><ac:parameter ac:name="spaceKey">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="templateName">', soy.$$escapeHtml(opt_data.templateName), '</ac:parameter></ac:macro>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-resources', location = 'com/atlassian/confluence/plugins/filelist/soy/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.FileList == 'undefined') { Confluence.Templates.FileList = {}; }


Confluence.Templates.FileList.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="file-list-form" class="aui"><fieldset><div class="field-group"><label for="file-list-page-title">', soy.$$escapeHtml("Name"), '<span class="aui-icon icon-required"> required</span></label><input id="file-list-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your file list"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="file-list-page-description">', soy.$$escapeHtml("Description"), '</label><textarea id="file-list-page-description" class="textarea long-field" name="description" rows="6" placeholder="', soy.$$escapeHtml("Description which will appear at the top of file list"), '"></textarea></div><div class="field-group"><label for="file-list-restrictions">', soy.$$escapeHtml("Restrictions"), '</label><input id="file-list-restrictions" class="text long-field autocomplete-multiuser" type="text" name="viewPermissionsUsers" placeholder="', soy.$$escapeHtml("Restrict to users"), '"></div></fieldset></form>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-resources', location = 'com/atlassian/confluence/plugins/filelist/js/create-file-list-listener.js' */
(function(b){function c(h,g){var d=h.find("#file-list-page-title"),f=b.trim(d.val()),e;if(!f){e="Name is required."}else{if(!Confluence.Blueprint.canCreatePage(g,f)){e="A page with this name already exists."}}if(e){d.focus().siblings(".error").html(e);return false}return true}function a(d,e){return c(e.$container,e.wizardData.spaceKey)}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-item",function(d){d.on("submit.file-list-page1",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("With meeting notes you can..."), '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>', soy.$$escapeHtml("Crowd-source your agenda"), '</h3><p>', soy.$$escapeHtml("Distribute an agenda and keep meetings focused."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Capture meeting minutes"), '</h3><p>', soy.$$escapeHtml("Take notes and make them available to everyone."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Create and assign tasks"), '</h3><p>', soy.$$escapeHtml("Assign action items for attendees to work on afterward."), '</p></div></li></ol>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-resources', location = 'com/atlassian/confluence/plugins/decisions/soy/decisions-templates.soy' */
// This file was automatically generated from decisions-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Decisions == 'undefined') { Confluence.Blueprints.Decisions = {}; }


Confluence.Blueprints.Decisions.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="decisions-form" class="aui"><fieldset><div class="field-group"><label for="decisions-status">', soy.$$escapeHtml("Status"), '</label><select class="select long-field" id="decisions-status" name="status"><option value="GREY">', soy.$$escapeHtml("Not started"), '</option><option value="YELLOW">', soy.$$escapeHtml("In progress"), '</option><option value="GREEN">', soy.$$escapeHtml("Decided"), '</option></select></div><div class="field-group"><label for="decisions-page-title">', soy.$$escapeHtml("Decision"), '<span class="aui-icon icon-required"> required</span></label><input id="decisions-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("What are you deciding?"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="decisions-owner">', soy.$$escapeHtml("Owner"), '</label><input id="decisions-owner" type="text" class="text long-field autocomplete-multiuser" name="owner" placeholder="', soy.$$escapeHtml("Who should make the final decision?"), '" data-autofill-user="true"></div><div class="field-group"><label for="decisions-stakeholders">', soy.$$escapeHtml("Stakeholders"), '</label><input id="decisions-stakeholders" class="text long-field autocomplete-multiuser" type="text" name="stakeholders" placeholder="', soy.$$escapeHtml("Who needs to help make this decision?"), '"></div><div class="field-group"><label for="decisions-due-date">', soy.$$escapeHtml("Due date"), '</label><input id="decisions-due-date" class="datepicker-field date-field text" type="text" name="due-date" size="10" autocomplete="off"></div><div class="field-group"><label for="decisions-background">', soy.$$escapeHtml("Background"), '</label><textarea id="decisions-background" class="textarea long-field" rows="3" name="background" placeholder="', soy.$$escapeHtml("What details are important in making this decision?"), '"></textarea></div><div class="field-group"><label for="decisions-final-decision">', soy.$$escapeHtml("Outcome"), '</label><textarea id="decisions-final-decision" class="textarea long-field" rows="3" name="final-decision" placeholder="', soy.$$escapeHtml("What did you decide?"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.mentionXml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var nameList35 = opt_data.names;
  var nameListLen35 = nameList35.length;
  for (var nameIndex35 = 0; nameIndex35 < nameListLen35; nameIndex35++) {
    var nameData35 = nameList35[nameIndex35];
    output.append('<ac:link><ri:user ri:username="', soy.$$escapeHtml(nameData35), '" /></ac:link>&nbsp;');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.mentionsPlaceholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:placeholder ac:type="mention">', soy.$$escapeHtml(opt_data.placeholderText), '</ac:placeholder>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.placeholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:placeholder>', soy.$$escapeHtml(opt_data.placeholderText), '</ac:placeholder>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.statusTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="status"><ac:parameter ac:name="title">', soy.$$escapeHtml(opt_data.status), '</ac:parameter><ac:parameter ac:name="colour">', soy.$$escapeHtml(opt_data.statusColour), '</ac:parameter></ac:macro>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-resources', location = 'com/atlassian/confluence/plugins/decisions/js/create-decisions-listener.js' */
(function(c){function d(i,h){var e=i.find("#decisions-page-title"),g=c.trim(e.val()),f;if(!g){f="Decision is required."}else{if(!Confluence.Blueprint.canCreatePage(h,g)){f="A page with this name already exists."}}if(f){e.focus().siblings(".error").html(f);return false}return true}function a(e,f){return d(f.$container,f.wizardData.spaceKey)}function b(e,f){c("#decisions-due-date").datepicker({dateFormat:"yy-mm-dd"});c("#decisions-status").on("change",function(){var h=c("#decisions-final-decision");var g=c("label[for=decisions-final-decision]");if(c(this).find(":selected").val()=="GREEN"){h.css({display:"inline"});g.css({display:"inline"})}else{h.css({display:"none"});g.css({display:"none"})}})}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-blueprint-item",function(e){e.on("post-render.decisions-page1",b);e.on("submit.decisions-page1",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/soy/sharelinks-urlmacro-templates.soy' */
// This file was automatically generated from sharelinks-urlmacro-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.SharelinksUrlMacro == 'undefined') { Confluence.Blueprints.SharelinksUrlMacro = {}; }


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="aui-button sharelinks-urlmacro-button" href="');
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript(opt_data, output);
  output.append('"><span>', soy.$$escapeHtml("Share on Confluence"), '</span></a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('javascript:(function(){var screenWidth=screen.width,screenHeight=screen.height,popupWidth=640,popupHeight=580,popupLeft=0,popupTop=0; if(screenWidth>popupWidth){popupLeft=Math.round((screenWidth/2)-(popupWidth/2));}if(screenHeight>popupHeight){popupTop=Math.round((screenHeight/2)-(popupHeight/2));}window.open(\'', opt_data.bookmarkletActionURL, '?bookmarkedURL=\'+encodeURIComponent(window.location.href), \'\',\'left=\'+popupLeft+\',top=\'+popupTop+\',width=\'+popupWidth+\',height=\'+popupHeight+\',personalbar=0,toolbar=0,scrollbars=1,resizable=1\');}());');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/js/sharelinks-urlmacro.js' */
AJS.toInit(function(a){a(".sharelinks-urlmacro-button").click(function(){alert("Drag this link to your toolbar");return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/soy/sharelinks-templates.soy' */
// This file was automatically generated from sharelinks-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Sharelinks == 'undefined') { Confluence.Blueprints.Sharelinks = {}; }


Confluence.Blueprints.Sharelinks.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="sharelinks-form" class="aui"><fieldset><div class="field-group"><label for="sharelinks-url">', soy.$$escapeHtml("Link"), '<span class="aui-icon icon-required"> required</span></label><input id="sharelinks-url" class="text long-field" type="text" name="url" placeholder="', soy.$$escapeHtml("Paste a link to any website"), '"/><div class="error"></div></div><div class="field-group"><label for="sharelinks-title">', soy.$$escapeHtml("Title"), '<span class="aui-icon icon-required"> required</span></label><input id="sharelinks-title" class="text long-field" type="text" name="title" title="title" placeholder="', soy.$$escapeHtml("Title of the page"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="sharelinks-label">', soy.$$escapeHtml("Labels"), '</label><input id="sharelinks-label" class="text select2-input long-field" type="text" name="label" placeholder="', soy.$$escapeHtml("Suggest a topic"), '" /></div><div class="field-group"><label for="sharelinks-sharewith">', soy.$$escapeHtml("Share with"), '</label><input id="sharelinks-sharewith" class="text long-field autocomplete-multiuser" type="text" name="sharewith" placeholder="', soy.$$escapeHtml("Share this page with users"), '"/></div><div class="field-group"><label for="sharelinks-comment">', soy.$$escapeHtml("Comment"), '</label><textarea id="sharelinks-comment" class="textarea long-field" rows="4" type="text" name="comment" placeholder="', soy.$$escapeHtml("Share your thoughts about this link"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview">');
  if (opt_data.linkMetaData.title) {
    output.append('<h3 class="sharelinks-preview-title">', soy.$$escapeHtml(opt_data.linkMetaData.title), '</h3>');
    if (opt_data.linkMetaData.imageURL) {
      output.append('<div class="sharelinks-preview-image"><img src="', soy.$$escapeHtml(opt_data.linkMetaData.imageURL), '"/></div>');
    } else {
      var noImagePreviewContent__soy37 = new soy.StringBuilder();
      Confluence.Blueprints.Sharelinks.noImagePreview(null, noImagePreviewContent__soy37);
      noImagePreviewContent__soy37 = noImagePreviewContent__soy37.toString();
      output.append(noImagePreviewContent__soy37);
    }
    output.append((opt_data.linkMetaData.description) ? '<p>' + soy.$$escapeHtml(opt_data.linkMetaData.description) + '</p>' : '');
  } else {
    var previewUnavailableContent__soy47 = new soy.StringBuilder();
    Confluence.Blueprints.Sharelinks.previewUnavailable(null, previewUnavailableContent__soy47);
    previewUnavailableContent__soy47 = previewUnavailableContent__soy47.toString();
    output.append(previewUnavailableContent__soy47);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewVideoLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview"><h3 class="sharelinks-preview-title">', soy.$$escapeHtml(opt_data.linkMetaData.title), '</h3><div class="sharelinks-preview-video">');
  if (opt_data.linkMetaData.imageURL) {
    output.append('<span class="sharelinks-preview-image"><img src="', soy.$$escapeHtml(opt_data.linkMetaData.imageURL), '"/><span class="sharelinks-preview-camera-icon sharelinks-camera-with-image"></span></span>');
  } else {
    output.append('<div>');
    var noImagePreviewContent__soy63 = new soy.StringBuilder();
    Confluence.Blueprints.Sharelinks.noImagePreview(null, noImagePreviewContent__soy63);
    noImagePreviewContent__soy63 = noImagePreviewContent__soy63.toString();
    output.append(noImagePreviewContent__soy63, '<span class="sharelinks-preview-camera-icon sharelinks-camera-with-no-image"></span></div>');
  }
  output.append('</div>', (opt_data.linkMetaData.description) ? '<p>' + soy.$$escapeHtml(opt_data.linkMetaData.description) + '</p>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview-loading"><span class="aui-icon aui-icon-wait"></span>&nbsp;', soy.$$escapeHtml("Loading preview\u2026"), '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.metaDataHtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-link-meta-data"><ac:macro ac:name="panel"><ac:rich-text-body>', (opt_data.linkMetaData.imageURL) ? '<h3><ac:image ac:align="right"><ri:url ri:value=\'' + soy.$$escapeHtml(opt_data.linkMetaData.imageURL) + '\' /></ac:image></h3>' : '', '<p><ac:image ac:width=\'16\'><ri:url ri:value="', soy.$$escapeHtml(opt_data.faviconURL), '" /></ac:image>&nbsp;<a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml(opt_data.linkMetaData.excerptedURL), '</a></p>', (opt_data.linkMetaData.description) ? '<blockquote><p>' + soy.$$escapeHtml(opt_data.descriptionMessage) + '</p></blockquote>' : '<p style="text-align: left;"><span style="color: rgb(128,128,128);"><em>' + soy.$$escapeHtml(opt_data.descriptionMessage) + '</em></span></p>', '<p><strong><a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml("Open link"), '</a></strong></p></ac:rich-text-body></ac:macro></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview">');
  var previewUnavailableContent__soy109 = new soy.StringBuilder();
  Confluence.Blueprints.Sharelinks.previewUnavailable(null, previewUnavailableContent__soy109);
  previewUnavailableContent__soy109 = previewUnavailableContent__soy109.toString();
  output.append(previewUnavailableContent__soy109, '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.videoMetaDataHtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="panel"><ac:rich-text-body><ac:macro ac:name="section"><ac:rich-text-body><ac:macro ac:name="column"><ac:parameter ac:name="width">50%</ac:parameter><ac:rich-text-body><p><ac:image ac:width=\'16\'><ri:url ri:value="', soy.$$escapeHtml(opt_data.faviconURL), '" /></ac:image>&nbsp;<a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml(opt_data.linkMetaData.excerptedURL), '</a></p>', (opt_data.linkMetaData.description) ? '<blockquote><p>' + soy.$$escapeHtml(opt_data.linkMetaData.description) + '</p></blockquote>' : '', '<p><strong><a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml("Open link"), '</a></strong></p></ac:rich-text-body></ac:macro><ac:macro ac:name="column"><ac:parameter ac:name="width">50%</ac:parameter><ac:rich-text-body><p>', (opt_data.isSupportedMediaDomain) ? '<ac:macro ac:name="widget"><ac:parameter ac:name="url">' + soy.$$escapeHtml(opt_data.linkMetaData.sourceURL) + '</ac:parameter><ac:parameter ac:name="width">350</ac:parameter><ac:parameter ac:name="height">240</ac:parameter></ac:macro>' : '<ac:image ac:width="300"><ri:url ri:value="' + soy.$$escapeHtml(opt_data.linkMetaData.imageURL) + '" /></ac:image>', '</p></ac:rich-text-body></ac:macro></ac:rich-text-body></ac:macro></ac:rich-text-body></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.twitterMetaDataHtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.linkMetaData.description) {
    output.append('<div class="sharelinks-twitter-content"><p><ac:image ac:width=\'16\'><ri:url ri:value="', soy.$$escapeHtml(opt_data.faviconURL), '" /></ac:image>&nbsp;<a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml(opt_data.linkMetaData.excerptedURL), '</a></p><p><ac:macro ac:name="widget"><ac:parameter ac:name="url">', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '</ac:parameter></ac:macro></p><p><strong><a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml("Open link"), '</a></strong></p></div>');
  } else {
    Confluence.Blueprints.Sharelinks.metaDataHtml(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.bookmarkletGuideOnWizard = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var bookmarkletLinkParam__soy163 = new soy.StringBuilder();
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink(opt_data, bookmarkletLinkParam__soy163);
  bookmarkletLinkParam__soy163 = bookmarkletLinkParam__soy163.toString();
  output.append('<p>', bookmarkletLinkParam__soy163, '</p><p>', soy.$$escapeHtml("It will appear like this in your browser."), '</p><div class="bookmarklet-guide-picture"></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.bookmarkletGuide = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var bookmarkletMacroParam__soy173 = new soy.StringBuilder('<ac:macro ac:name="sharelinks-urlmacro"/>');
  bookmarkletMacroParam__soy173 = bookmarkletMacroParam__soy173.toString();
  output.append('<ac:macro ac:name="info"><ac:parameter ac:name="icon">false</ac:parameter><ac:rich-text-body><p><ac:emoticon ac:name="information" />&nbsp;', AJS.format("Tip: share a link from anywhere by dragging this button \u2192 {0} to your browser bookmarks toolbar. Once added to your toolbar, click it to share links with your team.",bookmarkletMacroParam__soy173), '</p></ac:rich-text-body></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.noImagePreview = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="image-unavailable"><span class="no-image-picture"></span>', soy.$$escapeHtml("No image available"), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewUnavailable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="link-unavailable"><span class="preview-unavailable-picture"></span>', soy.$$escapeHtml("Link preview unavailable"), '</p>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/js/sharelinks-creation-wizard.js' */
(function(i){var d=false;function g(s,r){var q=false;if(k(s,!q)){q=true}if(f(s,r,!q)){q=true}return !q}function k(u,q){var t=u.find("#sharelinks-url");var s=i.trim(t.val());var r="";if(!s){r="URL is required"}else{if(d){r="URL syntax is invalid"}}return j(t,r,q)}function f(w,u,s){var r=w.find("#sharelinks-title");var v=i.trim(r.val());var t="";if(!v){t="Title is required"}else{if(!Confluence.Blueprint.canCreatePage(u,v)){t="A page with this name already exists";var q=Confluence.Blueprints.Sharelinks.Analytics.errorTypes.value.duplicatedPage;Confluence.Blueprints.Sharelinks.Analytics.triggerErrorTypes(q)}}return j(r,t,s)}function j(s,r,q){s.siblings(".error").html(r);if(r&&q){s.focus()}return r}var p;function a(u,v){var s=g(v.$container,v.wizardData.spaceKey);if(s){var r=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.noComment;var x=i("#sharelinks-comment").val();x=i.trim(x);if(x){r=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.comment}Confluence.Blueprints.Sharelinks.Analytics.triggerSubmitData(r);var q=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.noEditTitle;if(p!==i("#sharelinks-title").val()){q=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.editTitle}Confluence.Blueprints.Sharelinks.Analytics.triggerSubmitData(q);var w=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.noShare;var t=i("#sharelinks-sharewith").val();t=i.trim(t);if(t){w=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.share}Confluence.Blueprints.Sharelinks.Analytics.triggerSubmitData(w)}v.wizardData.parentPageId=-1;return s}var e;function h(s,t){e="";i("#sharelinks-url").bind("paste",function(){setTimeout(function(){l(t.$container,t.wizardData.spaceKey,true)},0)});i("#sharelinks-url").change(function(){l(t.$container,t.wizardData.spaceKey,false)});i("#sharelinks-title").change(function(){if(i("#sharelinks-title").siblings(".error").html!=""){f(t.$container,t.wizardData.spaceKey,false)}});var u=i(".dialog-wizard-page-description,.create-dialog-page-description");var q=AJS.Meta.get("base-url")+"/plugins/sharelinksbookmarklet/bookmarklet.action";var r=Confluence.Blueprints.Sharelinks.bookmarkletGuideOnWizard({bookmarkletActionURL:q});i(r).appendTo(u);Confluence.Blueprints.Sharelinks.autocompleteMultiLabel.build(i("#sharelinks-label"));i(".create-dialog-sharelinks-page1 .sharelinks-urlmacro-button").click(function(){alert("Drag this link to your toolbar");return false})}function c(q,r){i.ajax({type:"get",dataType:"json",url:Confluence.getContextPath()+"/rest/sharelinks/1.0/can-create-comment",data:{spaceKey:r.wizardData.spaceKey},success:function(t){if(!t){var s=i("#sharelinks-comment");s.attr("disabled","disabled");s.attr("placeholder","Sorry, you don\'t have permission to add comments in this space")}}})}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-blueprint-item",function(q){q.on("post-render.sharelinks-page1",h);q.on("post-render.sharelinks-page1",c);q.on("submit.sharelinks-page1",a)});function b(u){var y=255;var q=180;var t=o(u.title,y);var s=i("#sharelinks-title");s.val(t);s.removeClass("placeholded");var x=i.extend({},u);x.title=o(x.title,q);var w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.noContent;var r;if(u.videoURL){r=Confluence.Blueprints.Sharelinks.previewVideoLink({linkMetaData:x});w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.video}else{r=Confluence.Blueprints.Sharelinks.previewLink({linkMetaData:x});if(u.imageURL){w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.image}else{if(u.title){w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.noVideoImage}}}var v=i(".create-dialog-page-description,.dialog-wizard-page-description");v.empty();i(r).appendTo(v);Confluence.Blueprints.Sharelinks.Analytics.triggerLinkTypes(w)}function o(r,q){if(null!=r&&q<r.length){r=r.substring(0,q-1)+"\u2026"}return r}function m(r,q){r.attr("disabled","disabled");q.attr("disabled","disabled")}function n(r,q){r.removeAttr("disabled");q.removeAttr("disabled")}function l(z,w,s){var r=i("#sharelinks-url"),v=r.val(),q=i("#sharelinks-title");v=i.trim(v);if(v){var x=Confluence.getContextPath()+"/rest/sharelinks/1.0/link";if(v!==e){e=v;var t=i(".create-dialog-page-description,.dialog-wizard-page-description").empty();var y=Confluence.Blueprints.Sharelinks.previewLoading();var A=i(y).appendTo(t);m(r,q);i.ajax({type:"get",url:x,data:{url:v},success:function(B,C){A.remove();b(B);d=false;g(z,w);n(r,q)},error:function(E,B,D){n(r,q);if(400==E.status){A.remove();d=true;k(z,false)}else{A.remove();var C=Confluence.Blueprints.Sharelinks.previewError();i(C).appendTo(t);d=false;g(z,w)}}});var u;if(s){u=Confluence.Blueprints.Sharelinks.Analytics.inputTypes.value.pasteUrl}else{u=Confluence.Blueprints.Sharelinks.Analytics.inputTypes.value.typeUrl}Confluence.Blueprints.Sharelinks.Analytics.triggerInputTypes(u)}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/js/sharelinks-analytics.js' */
Confluence.Blueprints.Sharelinks.Analytics={inputTypes:{name:"blueprints.sharelinks.input",value:{pasteUrl:{type:"paste-url"},typeUrl:{type:"type-url"}}},linkTypes:{name:"blueprints.sharelinks.link",value:{video:{link:"video"},image:{link:"image"},noVideoImage:{link:"no-video-image"},noContent:{link:"no-content"}}},errorTypes:{name:"blueprints.sharelinks.error",value:{duplicatedPage:{error:"page-duplicated"}}},submitData:{name:"blueprints.sharelinks.submit",value:{editTitle:{submit:"edit-title"},noEditTitle:{submit:"no-edit-title"},comment:{submit:"comment"},noComment:{submit:"no-comment"},share:{submit:"share"},noShare:{submit:"no-share"}}},triggerInputTypes:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.inputTypes.name,properties:a})},triggerLinkTypes:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.linkTypes.name,properties:a})},triggerErrorTypes:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.errorTypes.name,properties:a})},triggerSubmitData:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.submitData.name,properties:a})}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/soy/sharelinks-label.soy' */
// This file was automatically generated from sharelinks-label.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Sharelinks == 'undefined') { Confluence.Blueprints.Sharelinks = {}; }


Confluence.Blueprints.Sharelinks.labelResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format("\x22{0}\x22 - add a new topic",opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/js/sharelinks-label.js' */
Confluence.Blueprints.Sharelinks.autocompleteMultiLabel=(function(a){function b(c){c.auiSelect2(Confluence.UI.Components.LabelPicker.build({formatInputTooShort:function(){return "Start typing to search for a topic"},formatResult:function(d){return Confluence.Blueprints.Sharelinks.labelResult({label:{labelName:d.text,isNew:d.isNew}})}}))}return{build:b}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/js/space-page-picker.js' */
(function(i,c){var t={conf_all:"All spaces",conf_favorites:"Favourite spaces",conf_global:"Site spaces",conf_personal:"Personal spaces",conf_current:"Current space"};var b={data:null,suggestCategories:null};var v="SPACE-PAGE-TRIGGER-VALUE";var f={placeholder:"Select a space or page",multiple:true,formatInputTooShort:function(){return "Start typing to search"},formatResult:function(G,I,L){if(G.children){I.addClass("space-page-picker-result-category");return i.fn.select2.defaults.formatResult.apply(this,arguments)}else{if(G.id){I.attr("title",G.text);I.addClass("space-page-picker-result-label-with-icon");var F=i("<span/>").addClass(G.className+" item-text").html(i.fn.select2.defaults.formatResult.apply(this,arguments));var K=(G.subText)?i("<span/>").addClass("space-name").html(G.subText):i("");var H=i("<span/>").attr(s(G.id),G.id).append(F).append(K);var J=i("<span/>").append(H);return J}else{I.addClass(G.className);return i.fn.select2.defaults.formatResult.apply(this,arguments)}}},formatSelection:function(G,H){H.addClass("space-page-picker-selected-item");H.attr("title",G.text);var F=i("<span/>").attr(s(G.id),G.id).addClass(G.className+" item-text").html(i.fn.select2.defaults.formatSelection.apply(this,arguments));H.append(F)},escapeMarkup:function(F){return F},formatResultCssClass:function(F){return(F.children||F.id)?"":"select2-result-space-page-separator"},containerCssClass:"space-page-picker-container",dropdownCssClass:"space-page-picker-drop"};var B=function(F,H){var G=F.data("select2").opts.manualInit;if(G===true){return}d(F.val(),F,H)};function r(H,G,F){var I=_.map(H,function(J){return G[J]});return(F)?I:((I.length>0)?I[0]:null)}var l=function(F){var G;if(F.suggestCategories){var H={text:"Suggested categories",children:_.map(F.suggestCategories,function(I){return o(I)})}}return function(J){if(G){J.callback(G);return}var I=[];G={results:[]};if(x(F)){var L=i.getJSON(AJS.contextPath()+"/rest/recentlyviewed/1.0/recent/spaces").done(function(M){var N=(H)?[H]:[];(M.length>0)&&N.push({text:"Suggested spaces",children:_.map(M,function(O){return m(O.key,_.escape(O.name),null,true)})});(N.length>0)&&(G.results=G.results.concat(N))}).fail(function(){AJS.debug("Couldn't fetch recent spaces");var M=(H)?[H]:[];(M.length>0)&&(G.results=G.results.concat(M))});I.push(L)}if(j(F)){var K=i.getJSON(AJS.contextPath()+"/rest/recentlyviewed/1.0/recent/pages",{noTrashedContent:true}).done(function(M){if(M.length>0){G.results.push({text:"Suggested pages",children:_.map(M,function(N){return h(N.id,_.escape(N.title),_.escape(N.space),"content-type-page",true)})})}}).fail(function(){AJS.debug("Couldn't fetch recent pages")});I.push(K)}i.when.apply(i,_.map(I,function(N){var M=i.Deferred();N.always(function(){M.resolve()});return M})).done(function(){if(G.results.length===0){G.results=[{text:"",children:[]}]}J.callback(G)})}};var w=function(F){var G="";if(!F||F.length===2&&F.indexOf("space")>=0&&F.indexOf("page")>=0){G="type=spacedesc&type=personalspacedesc&type=page"}else{if(F.length===1&&F[0]==="space"){G="type=spacedesc&type=personalspacedesc"}else{if(F.length===1&&F[0]==="page"){G="type=page"}else{return}}}return window.Select2.query.ajax({url:AJS.contextPath()+"/rest/quicknav/1/search?"+G,data:function(H,I){return{query:H,maxPerCategory:25}},quietMillis:250,results:function(K,O){var N=K.contentNameMatches;if(N.length<=1){return{results:[]}}else{var P=[];var I=function(Q){return E(Q.spaceKey,Q.spaceName,Q.id,Q.name,Q.className)};for(var L=0;L<N.length-1;L++){var M=[];for(var J=0;J<N[L].length;J++){var H=I(N[L][J]);if(H){M.push(H)}}if(M.length>0){P=P.concat(M);P.push({id:"",text:"",subText:"",className:"",disabled:true})}}return{results:[{text:"Search results",children:P}]}}}})};var p=function(G){var F=w(G.contentType);var H=l(G);return function(I){if(I.term.length<2){H(I)}else{F(I)}}};function s(F){return(F.indexOf("page:")===0)?"data-item-id":"data-item-key"}function m(F,I,G,H){G=(G)?G:((F.indexOf("~")===0)?"content-type-personalspacedesc":"content-type-spacedesc");return e("space",F,I,"",G,H)}function o(F){var G=t[F];return e("space-cat",F,G,"","content-type-space-category",G)}function h(J,I,F,G,H){return e("page",J,I,F,G,H)}function e(L,I,K,H,G,J){var F=y(L,I);K=(!K)?I:K;G=(J)?G:(G+" content-not-found");return{id:F,text:K,subText:H,className:G,disabled:(J?false:true)}}function C(F){return"space-cat:"+F}function a(F){return"space:"+F}function D(F){return"page:"+F}function E(J,G,K,H,I){var F;if(I==="content-type-spacedesc"||I==="content-type-personalspacedesc"){F=m(J,G,I,true)}else{if(I==="content-type-page"){F=h(K,H,G,I,true)}}return F}function y(){var F=Array.prototype.slice.apply(arguments);return F.join(":")}function x(F){return((!F.contentType||F.contentType.length===0||F.contentType.indexOf("space")>=0)&&F.showRecentlyViewedSpaces!==false)}function j(F){return((!F.contentType||F.contentType.length===0||F.contentType.indexOf("page")>=0)&&F.showRecentlyViewedPages!==false)}function n(G,F){var H=q("SpaceCat",G,F.inputSpaceCatId,(F.inputSpaceCatName)?F.inputSpaceCatName:F.inputSpaceCatId);return u(G,H.id,H.name)}function g(G,F){var H=q("Space",G,F.inputSpaceId,(F.inputSpaceName)?F.inputSpaceName:F.inputSpaceId);return u(G,H.id,H.name)}function z(G,F){var H=q("Page",G,F.inputPageId,(F.inputPageName)?F.inputPageName:F.inputPageId);return u(G,H.id,H.name)}function q(J,H,K,G){var F;if(!K){F=H.attr("id");if(!F){return null}K=F+J}if(!G){var I=H.attr("name")||F;G=I+J}return{id:K,name:G}}function u(G,I,F){var H=i("#"+I);if(H.length===0){H=i(Confluence.UI.Components.templates.hiddenField({id:I,name:F}));G.after(H)}return H}function k(G,I,H){if(!G){return}var F=_.filter(I,function(J){return J.indexOf(H)===0});F=_.map(F,function(J){return J.substring(H.length,J.length)});G.val(F.join(","))}function A(M,H,I,F){I=(I)?(_.isArray(I)?I:I.split(",")):[];F=(F)?F.split(","):[];var L=_.union(I,F);var G=_.map(L,function(O){return H+O});var J=M.val();var N=J?J.split(","):[];var K=_.union(N,G);if(K.length>0){M.val(K.join(","))}}c.build=function(G){var F=_.extend({},b,f,G);if(!G.data){F=_.extend({},{initSelection:B,query:p(F)},F)}var H=i(F.orgElement);if(!H||H.length!==1){return F}if(!H.val()&&!F.manualInit){H.val(v)}H.addClass("select2-input");return F};c.setValue=function(G,F){d(G,F,function(H){F.auiSelect2("data",H)})};function d(P,G,S){var U=G.data("select2").opts;var Q=U.placeholder||G.data("placeholder");var K=n(G,U);var M=g(G,U);var I=z(G,U);G.on("change",function(V){k(K,V.val,"space-cat:");k(M,V.val,"space:");k(I,V.val,"page:")});G.val("");var T=(G["0"].tagName==="SELECT")?(G.context.multiple):(U.multiple);var N=[];var R=[];var L=[];var F={};var H=(P)?P.split(","):[];H=_.filter(H,function(V){var W=V.split(":");if(W.length===2){return true}else{if(W.length<0||W.length>=3||(W.length===1&&(W[0]!==v&&W[0]!==Q))){AJS.debug("Error value: "+W)}}});P=H.join(",");G.val(P);A(G,"space-cat:",U.spaceCatKeys,(K)?K.val():"");A(G,"space:",U.spaceKeys,(M)?M.val():"");A(G,"page:",U.pageIds,(I)?I.val():"");P=G.val();H=(P)?P.split(","):[];k(K,H,"space-cat:");k(M,H,"space:");k(I,H,"page:");if(H.length===0){return}_.each(H,function(V,W){var Z=V.split(":");if(Z.length===2){var Y=Z[0];var X=Z[1];if(Y==="space-cat"){N.push(X)}else{if(Y==="space"){R.push(X)}else{if(Y==="page"){L.push(X)}}}}});_.each(N,function(V){F[C(V)]=o(V)});var O=[];if(R.length>0){var J=i.getJSON(AJS.contextPath()+"/rest/prototype/1/space",{spaceKey:R}).done(function(X){var V=[];_.each(X.space,function(Y){F[a(Y.key)]=m(Y.key,_.escape(Y.name),null,true);V.push(Y.key)});var W=_.difference(R,V);_.each(W,function(Y){F[a(Y)]=m(Y,Y,null,false)})}).fail(function(){AJS.debug("Couldn't resolve spaceKeys:",R);_.each(R,function(V){F[a(V)]=m(V,V,null,false)})});O.push(J)}_.each(L,function(V){var W=i.getJSON(AJS.contextPath()+"/rest/api/content/"+V,{expand:"space"}).done(function(X){F[D(X.id)]=h(X.id,_.escape(X.title),_.escape(X.space.name),"content-type-page",true)}).fail(function(){AJS.debug("Couldn't resolve pageId:",V);F[D(V)]=h(V,V,"","content-type-page",false)});O.push(W)});i.when.apply(i,_.map(O,function(W){var V=new i.Deferred();W.always(function(){V.resolve()});return V.promise()})).done(function(){S(r(H,F,T))})}}(AJS.$,window.Confluence.UI.Components.SpacePagePicker));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/soy/space-page-picker.soy' */
// This file was automatically generated from space-page-picker.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.templates == 'undefined') { Confluence.UI.Components.templates = {}; }


Confluence.UI.Components.templates.hiddenField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<input type="hidden" id="', soy.$$escapeHtml(opt_data.id), '" name="', soy.$$escapeHtml(opt_data.name), '" />');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:task-report-blueprint-resources', location = 'templates/task-report-blueprint.soy' */
// This file was automatically generated from task-report-blueprint.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.taskReportBlueprintForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="report-types" id="task-report-types"><li class="template" id="team-task-report"><span class="template-preview team-task-report-icon"></span><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("Assigned to my team"), '</div><div class="template-description">', soy.$$escapeHtml("Show tasks assigned to specific people"), '</div></div></li><li class="template" id="location-task-report"><span class="template-preview location-task-report-icon"></span><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("In my project"), '</div><div class="template-description">', soy.$$escapeHtml("Show tasks created in specific spaces and pages"), '</div></div></li><li class="template" id="custom-task-report"><span class="template-preview custom-task-report-icon"></span><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("Custom"), '</div><div class="template-description">', soy.$$escapeHtml("Create your own report"), '</div></div></li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.reportByTeamForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="report-by-team-form" class="aui"><fieldset><div class="field-group"><label for="task-report-page-title">', soy.$$escapeHtml("Title"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your task report"), '"/><div class="error hidden"></div></div><div class="field-group"><label for="task-report-team-picker">', soy.$$escapeHtml("Assigned to"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-team-picker" class="text select2-input long-field autocomplete-multiuser" type="text" name="teamMembers" placeholder="', soy.$$escapeHtml("Only show tasks assigned to these people"), '" /><div class="error hidden"></div></div><div class="field-group"><div class="checkbox"><input class="checkbox" type="checkbox" name="completed" id="task-report-completed-cb"><label for="task-report-completed-cb">', soy.$$escapeHtml("Include completed tasks"), '</label></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.reportByLocationForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="report-by-location-form" class="aui"><fieldset><div class="field-group"><label for="task-report-page-title">', soy.$$escapeHtml("Title"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your task report"), '"/><div class="error hidden"></div></div><div class="field-group"><label for="task-report-location-picker">', soy.$$escapeHtml("Created in"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-location-picker" class="text select2-input long-field" type="text" name="locations" placeholder="', soy.$$escapeHtml("Select task locations"), '"/><div class="error hidden"></div></div><div class="field-group"><label for="task-report-label-picker">', soy.$$escapeHtml("Labels"), '</label><input id="task-report-label-picker" class="text select2-input long-field" type="text" name="labels" placeholder="', soy.$$escapeHtml("Only show tasks on pages with these labels"), '"/></div><div class="field-group"><div class="checkbox"><input class="checkbox" type="checkbox" name="completed" id="task-report-completed-cb"><label for="task-report-completed-cb">', soy.$$escapeHtml("Include completed tasks"), '</label></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.assigneeParam = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.userKeys) {
    output.append('<ac:parameter ac:name="assignees">');
    var keyList48 = opt_data.userKeys;
    var keyListLen48 = keyList48.length;
    for (var keyIndex48 = 0; keyIndex48 < keyListLen48; keyIndex48++) {
      var keyData48 = keyList48[keyIndex48];
      output.append('<ri:user ri:userkey="', soy.$$escapeHtml(keyData48), '" />');
    }
    output.append('</ac:parameter>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.creatorParam = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.userKeys) {
    output.append('<ac:parameter ac:name="creators">');
    var keyList58 = opt_data.userKeys;
    var keyListLen58 = keyList58.length;
    for (var keyIndex58 = 0; keyIndex58 < keyListLen58; keyIndex58++) {
      var keyData58 = keyList58[keyIndex58];
      output.append('<ri:user ri:userkey="', soy.$$escapeHtml(keyData58), '" />');
    }
    output.append('</ac:parameter>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.macroParam = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.value) ? '<ac:parameter ac:name="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.value) + '</ac:parameter>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.teamReportContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><ac:structured-macro ac:name="tasks-report-macro"><!-- assignee-->');
  Confluence.InlineTasks.Report.Templates.assigneeParam({userKeys: opt_data.assignees}, output);
  output.append('<!-- status--><ac:parameter ac:name="status">incomplete</ac:parameter></ac:structured-macro></p>');
  if (opt_data.showCompletedTasks) {
    output.append('<ac:structured-macro ac:name="expand"><ac:parameter ac:name="title">', soy.$$escapeHtml("Completed tasks"), '</ac:parameter><ac:rich-text-body><p><ac:structured-macro ac:name="tasks-report-macro"><!-- assignee-->');
    Confluence.InlineTasks.Report.Templates.assigneeParam({userKeys: opt_data.assignees}, output);
    output.append('<!-- status--><ac:parameter ac:name="status">complete</ac:parameter></ac:structured-macro></p></ac:rich-text-body></ac:structured-macro>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.locationReportContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><ac:structured-macro ac:name="tasks-report-macro"><!-- space-->');
  Confluence.InlineTasks.Report.Templates.macroParam({name: 'spaces', value: opt_data.spaceKeys}, output);
  output.append('<!-- pages-->');
  Confluence.InlineTasks.Report.Templates.macroParam({name: 'pages', value: opt_data.pageIds}, output);
  output.append('<!-- labels-->');
  Confluence.InlineTasks.Report.Templates.macroParam({name: 'labels', value: opt_data.labels}, output);
  output.append('<!-- status--><ac:parameter ac:name="status">incomplete</ac:parameter></ac:structured-macro></p>');
  if (opt_data.showCompletedTasks) {
    output.append('<ac:structured-macro ac:name="expand"><ac:parameter ac:name="title">', soy.$$escapeHtml("Completed tasks"), '</ac:parameter><ac:rich-text-body><p><ac:structured-macro ac:name="tasks-report-macro"><!-- space-->');
    Confluence.InlineTasks.Report.Templates.macroParam({name: 'spaces', value: opt_data.spaceKeys}, output);
    output.append('<!-- pages-->');
    Confluence.InlineTasks.Report.Templates.macroParam({name: 'pages', value: opt_data.pageIds}, output);
    output.append('<!-- labels-->');
    Confluence.InlineTasks.Report.Templates.macroParam({name: 'labels', value: opt_data.labels}, output);
    output.append('<!-- status--><ac:parameter ac:name="status">complete</ac:parameter></ac:structured-macro></p></ac:rich-text-body></ac:structured-macro>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.customReportContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><span class="text-placeholder">', soy.$$escapeHtml("Edit the Task Report macro to customise your report."), '</span></p><ac:structured-macro ac:name="tasks-report-macro">');
  if (opt_data.creators) {
    Confluence.InlineTasks.Report.Templates.creatorParam({userKeys: opt_data.creators}, output);
  }
  output.append('</ac:structured-macro>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:task-report-blueprint-resources', location = 'js/task-report-bp.js' */
(function(d){var c;function e(t){t.addClass("selected").siblings().removeClass("selected");AJS.trigger("selected.task-report-types",t)}function i(w,v){AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_blueprint.clicked"});var u=d("#task-report-types");var t=u.find(".template");t.first().addClass("selected");t.click(function(){e(d(this))}).dblclick(function(){d(".create-dialog-create-button:visible").click()});u.attr("tabindex",0).keydown(function(z){if(z.keyCode==38||z.keyCode==40){z.preventDefault();var x=u.find(".selected"),y;if(z.keyCode==38){y=x.prev().length?x.prev():t.last()}else{if(z.keyCode==40){y=x.next().length?x.next():t.first()}}e(y)}});u.focus();AJS.bind("selected.task-report-types",function(y,x){if(d(x).is("#custom-task-report")){p("Create")}else{p("Next")}});p("Next")}function f(v,u){var t=u.$container.find(".selected").attr("id");if(t==="team-task-report"){u.nextPageId="teamTaskReportId";AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_team.clicked"})}else{if(t==="location-task-report"){u.nextPageId="locationTaskReportId";AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_project.clicked"})}else{if(t==="custom-task-report"){c.getSubmissionRestPath=function(){AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_custom.clicked"});return"/rest/create-dialog/1.0/content-blueprint/create-draft"};g(u,"custom-task-report-template")}else{return false}}}}function a(u,t){o()}function m(w,v){var t=d("#report-by-team-form");b(t);var u=true;u=r(d("#task-report-team-picker"),"Assignee is required.")&&u;u=s(v.wizardData.spaceKey)&&u;u?g(v,"team-task-report-template"):h(t);AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_team.created"});return u}function n(u,t){k(d("#task-report-location-picker"),t.wizardData.spaceKey);q(d("#task-report-label-picker"));o()}function j(w,v){var t=d("#report-by-location-form");b(t);var u=true;u=r(d("#task-report-location-picker"),"A space or page is required.")&&u;u=s(v.wizardData.spaceKey)&&u;if(u){g(v,"location-task-report-template")}else{h(t)}AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_project.created"});return u}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-inline-tasks:task-report-blueprint-item",function(t){t.on("post-render.selectTaskReportId",i);t.on("submit.selectTaskReportId",f);t.on("post-render.teamTaskReportId",a);t.on("submit.teamTaskReportId",m);t.on("post-render.locationTaskReportId",n);t.on("submit.locationTaskReportId",j);c=t});function b(t){t.find(".error").addClass("hidden").empty()}function s(v){var t=d("#task-report-page-title");var u=Confluence.Blueprint.validateTitle(t,v);if(!u){t.siblings(".error").removeClass("hidden")}return u}function r(t,u){var v=d.trim(t.val());if(!v&&u){l(t,u)}return !!v}function h(u){var t=u.find("div.error:not(.hidden)").first();var v=t.siblings("input").eq(0);if(v.hasClass("select2-offscreen")){v.select2("focus")}else{v.focus()}}function g(t,u){t.pageData.contentTemplateKey=u}function l(v,u){var t=v.siblings(".error");t.html(u);t.removeClass("hidden");return u}function q(t){t.auiSelect2(Confluence.UI.Components.LabelPicker.build())}function k(u,t){u.auiSelect2(Confluence.UI.Components.SpacePagePicker.build({spaceKeys:[t],orgElement:u}))}function p(t){d(".create-dialog-create-button:visible").text(t)}function o(){var v;var u=d("#task-report-completed-cb");var t=d("label[for=task-report-completed-cb]").add(u);t.mousedown(function(){v=true});d(".dialog-wizard-page-main").on("mouseup",function(w){if(!t.is(w.target)&&v){u.click()}v=false})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-team-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/team/js/confluence-team-space-blueprints.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function a(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function b(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-space-blueprints:team-space-blueprint-item",function(c){c.on("submit.teamSpaceId",a);c.on("pre-render.teamSpaceId",b);c.on("post-render.teamSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-team-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/team/soy/dialog-page.soy' */
// This file was automatically generated from dialog-page.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.Team == 'undefined') { Confluence.SpaceBlueprints.Team = {}; }


Confluence.SpaceBlueprints.Team.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="decisions-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, spaceKey: opt_data.spaceKey}, output);
  output.append('<fieldset><div class="field-group"><label for="team-members">', soy.$$escapeHtml("Team members"), '</label><input id="team-members" class="text long-field autocomplete-multiuser" type="text" name="members" placeholder="', soy.$$escapeHtml("Add your team members"), '" data-autofill-user="true"/></div><div class="field-group"><label for="team-description">', soy.$$escapeHtml("Description"), '</label><textarea id="team-description" class="textarea long-field" rows="3" type="text" name="description" placeholder="', soy.$$escapeHtml("Let others know what this space is for"), '"></textarea></div></fieldset><input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" /></form>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-documentation-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/documentation/js/confluence-documentation-space-blueprint.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function b(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function a(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-space-blueprints:documentation-space-blueprint-item",function(c){c.on("submit.documentationSpaceId",b);c.on("pre-render.documentationSpaceId",a);c.on("post-render.documentationSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-documentation-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/documentation/soy/dialog-page.soy' */
// This file was automatically generated from dialog-page.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.Documentation == 'undefined') { Confluence.SpaceBlueprints.Documentation = {}; }


Confluence.SpaceBlueprints.Documentation.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="documentation-space-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, key: opt_data.key}, output);
  output.append('<fieldset><div class="field-group"><label for="documentation-description">', soy.$$escapeHtml("Description"), '</label><textarea id="documentation-description" class="textarea long-field" rows="3" type="text" name="spaceDesc" placeholder="', soy.$$escapeHtml("Briefly describe the documentation in this space"), '"></textarea></div></fieldset><input type="hidden" name="noPageTitlePrefix" value="true" /><input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" /></form>');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access.js' */
AJS.toInit(function(e){var b=AJS.Meta.get("page-id"),c=e("#page-restricted-container"),a=AJS.Meta.get("remote-user"),d=e("#page-restricted-container button");if(c.length){e("#breadcrumbs").hide();e("#title-text.with-breadcrumbs").hide();if(d.length){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{pageId:b,requestAccessUser:a}})}}d.click(function(){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:b,requestAccessUser:a}});d.attr("aria-disabled","true");var f,g=e(Confluence.Request.Access.loading({}));d.replaceWith(g);e.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+b,success:function(h){f=e(Confluence.Request.Access.result({success:true,recipient:h}));c.removeClass("page-restricted");c.addClass("access-requested")},error:function(h,i){f=e(Confluence.Request.Access.result({success:false}))},complete:function(){g.replaceWith(f);Confluence.Binder.userHover()}})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
AJS.toInit(function(d){var a=AJS.Meta.get("page-id"),f=AJS.Meta.get("remote-user"),h=j("username"),e=j("userFullName");var c=e.split("+");e=c.join(" ");var g=d("#system-content-items");var k=d("#content-metadata-page-restrictions").is(":visible");if(!g.length||!k||!j("grantAccess")){return}var b=d(Confluence.Request.Access.loading());var i=AJS.InlineDialog(g,"grantAccessDialog",function(m,l,n){m.css({padding:"20px"}).html(Confluence.Grant.Access.dialog({requestAccessUsername:h,requestAccessUserFullName:e}));m.on("click",".aui-button.grant-access",function(q){q.stopPropagation();var p=m.find(".actions-result");p.replaceWith(b);AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});var o="",r=true;d.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+a,type:"POST",contentType:"application/json; charset=utf-8",data:h,success:function(t,u,s){if(s.status==202){o="Access was already granted to the user."}else{o="Access was granted, a notification to the user will be sent."}},error:function(s){r=false;if(s.status==412){o="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(s.status==502){o="Access was granted, but an unexpected error happened while sending the notification."}else{o="Sorry, there was an unexpected error while granting access."}}},complete:function(s){b.replaceWith(d(Confluence.Grant.Access.result({success:r,message:o})));setTimeout(function(){i.hide()},4000)}})});m.on("click",".aui-button.deny-access",function(o){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});i.hide()});n();return false},{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(i.hide(),5000)}});i.show();function j(l){l=l.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+l+"=([^&#]*)"),m=n.exec(location.search);return m==null?"":decodeURIComponent(m[1].replace(/\+/g," "))}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.result = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="request-access">');
  if (opt_data.success) {
    var usernameLink__soy6 = new soy.StringBuilder();
    Confluence.Request.Access.usernameLink({user: opt_data.recipient}, usernameLink__soy6);
    usernameLink__soy6 = usernameLink__soy6.toString();
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-approve" data-unicode="UTF+E005" original-title=""></span><p class="title">', AJS.format("Your request has been sent to {0}. If approved you will receive an email shortly.",usernameLink__soy6), '</p>');
  } else {
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-error" data-unicode="UTF+E011" original-title=""></span><p class="title">', soy.$$escapeHtml("Your request for access has not been sent. Contact your space admin."), '</p>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Request.Access.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(""), '/display/~', soy.$$escapeUri(opt_data.user.name), '" class="url fn confluence-userlink" title data-username="', soy.$$escapeHtml(opt_data.user.name), '">', soy.$$escapeHtml(opt_data.user.fullName), '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Request.Access.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'aui-icon aui-icon-wait\'>', soy.$$escapeHtml("Loading, please wait"), '</span>"');
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
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="grant-access-dialog">');
  var usernameLink__soy4 = new soy.StringBuilder();
  Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName}, usernameLink__soy4);
  usernameLink__soy4 = usernameLink__soy4.toString();
  output.append('<h2 class="grant-access-title">', AJS.format("{0} requested access to view the page",usernameLink__soy4), '</h2><p class="grant-access-message">', soy.$$escapeHtml("Grant access to the page, or deny it explicitly."), '</p><div class="actions-result"><button class="aui-button grant-access">', soy.$$escapeHtml("Grant access"), '</button><button class="aui-button aui-button-link deny-access">', soy.$$escapeHtml("Deny"), '</button><div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Grant.Access.result = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-', (opt_data.success) ? 'approve' : 'error', '" data-unicode="UTF+E011" original-title=""></span><p class="title">', soy.$$escapeHtml(opt_data.message), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Grant.Access.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(""), '/display/~', soy.$$escapeHtml(opt_data.username), '" class="url fn" title data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml(opt_data.userFullName), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
