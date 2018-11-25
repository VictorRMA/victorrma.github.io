!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(c){var Uj,d=function(){function u(t){return null==t?String(t):H[Z.call(t)]||"object"}function a(t){return"function"==u(t)}function o(t){return null!=t&&t==t.window}function s(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(t){return"object"==u(t)}function l(t){return i(t)&&!o(t)&&Object.getPrototypeOf(t)==Object.prototype}function h(t){var e=!!t&&"length"in t&&t.length,n=b.type(t);return"function"!=n&&!o(t)&&("array"==n||0===e||"number"==typeof e&&0<e&&e-1 in t)}function f(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function n(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function p(t,e){return"number"!=typeof e||D[f(t)]?e:e+"px"}function r(t){return"children"in t?N.call(t.children):b.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,r=t?t.length:0;for(n=0;n<r;n++)this[n]=t[n];this.length=r,this.selector=e||""}function m(t,e){return null==e?b(t):b(t).filter(e)}function v(t,e,n,r){return a(e)?e.call(t,n,r):e}function j(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function g(t,e){var n=t.className||"",r=n&&n.baseVal!==w;return e===w?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function y(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?b.parseJSON(e):e):e}catch(t){return e}}var w,x,b,E,S,C,B=[],T=B.concat,L=B.filter,N=B.slice,O=c.document,P={},e={},D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},A=/^\s*<(\w+|!)[^>]*>/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,I=/([A-Z])/g,M=["val","css","html","text","data","width","height","offset"],t=O.createElement("table"),q=O.createElement("tr"),$={tr:O.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:q,th:q,"*":O.createElement("div")},F=/complete|loaded|interactive/,U=/^[\w-]*$/,H={},Z=H.toString,J={},_=O.createElement("div"),V={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},X=Array.isArray||function(t){return t instanceof Array};return J.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=_).appendChild(t),r=~J.qsa(i,e).indexOf(t),o&&_.removeChild(t),r},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(n){return L.call(n,function(t,e){return n.indexOf(t)==e})},J.fragment=function(t,e,n){var r,i,o;return k.test(t)&&(r=b(O.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(z,"<$1></$2>")),e===w&&(e=A.test(t)&&RegExp.$1),e in $||(e="*"),(o=$[e]).innerHTML=""+t,r=b.each(N.call(o.childNodes),function(){o.removeChild(this)})),l(n)&&(i=b(r),b.each(n,function(t,e){-1<M.indexOf(t)?i[t](e):i.attr(t,e)})),r},J.Z=function(t,e){return new d(t,e)},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,e){var n,r;if(!t)return J.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&A.test(t))n=J.fragment(t,RegExp.$1,e),t=null;else{if(e!==w)return b(e).find(t);n=J.qsa(O,t)}else{if(a(t))return b(O).ready(t);if(J.isZ(t))return t;if(X(t))r=t,n=L.call(r,function(t){return null!=t});else if(i(t))n=[t],t=null;else if(A.test(t))n=J.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==w)return b(e).find(t);n=J.qsa(O,t)}}return J.Z(n,t)},(b=function(t,e){return J.init(t,e)}).extend=function(e){var n,t=N.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,r){for(x in n)r&&(l(n[x])||X(n[x]))?(l(n[x])&&!l(e[x])&&(e[x]={}),X(n[x])&&!X(e[x])&&(e[x]=[]),t(e[x],n[x],r)):n[x]!==w&&(e[x]=n[x])}(e,t,n)}),e},J.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=U.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:N.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},b.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},b.type=u,b.isFunction=a,b.isWindow=o,b.isArray=X,b.isPlainObject=l,b.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},b.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},b.inArray=function(t,e,n){return B.indexOf.call(e,t,n)},b.camelCase=S,b.trim=function(t){return null==t?"":String.prototype.trim.call(t)},b.uuid=0,b.support={},b.expr={},b.noop=function(){},b.map=function(t,e){var n,r,i,o,a=[];if(h(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&a.push(n);else for(i in t)null!=(n=e(t[i],i))&&a.push(n);return 0<(o=a).length?b.fn.concat.apply([],o):o},b.each=function(t,e){var n,r;if(h(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},b.grep=function(t,e){return L.call(t,e)},c.JSON&&(b.parseJSON=JSON.parse),b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){H["[object "+e+"]"]=e.toLowerCase()}),b.fn={constructor:J.Z,length:0,forEach:B.forEach,reduce:B.reduce,push:B.push,sort:B.sort,splice:B.splice,indexOf:B.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=J.isZ(e)?e.toArray():e;return T.apply(J.isZ(this)?this.toArray():this,n)},map:function(n){return b(b.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return b(N.apply(this,arguments))},ready:function(t){return F.test(O.readyState)&&O.body?t(b):O.addEventListener("DOMContentLoaded",function(){t(b)},!1),this},get:function(t){return t===w?N.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return B.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return a(e)?this.not(this.not(e)):b(L.call(this,function(t){return J.matches(t,e)}))},add:function(t,e){return b(C(this.concat(b(t,e))))},is:function(t){return 0<this.length&&J.matches(this[0],t)},not:function(e){var n=[];if(a(e)&&e.call!==w)this.each(function(t){e.call(this,t)||n.push(this)});else{var r="string"==typeof e?this.filter(e):h(e)&&a(e.item)?N.call(e):b(e);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return b(n)},has:function(t){return this.filter(function(){return i(t)?b.contains(this,t):b(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:b(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:b(t)},find:function(t){var n=this;return t?"object"==typeof t?b(t).filter(function(){var e=this;return B.some.call(n,function(t){return b.contains(t,e)})}):1==this.length?b(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)}):b()},closest:function(n,r){var i=[],o="object"==typeof n&&b(n);return this.each(function(t,e){for(;e&&!(o?0<=o.indexOf(e):J.matches(e,n));)e=e!==r&&!s(e)&&e.parentNode;e&&i.indexOf(e)<0&&i.push(e)}),b(i)},parents:function(t){for(var e=[],n=this;0<n.length;)n=b.map(n,function(t){return(t=t.parentNode)&&!s(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(C(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return r(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||N.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return L.call(r(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return b.map(this,function(t){return t[e]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,P[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),P[t]=n),P[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n=a(e);if(this[0]&&!n)var r=b(e).get(0),i=r.parentNode||1<this.length;return this.each(function(t){b(this).wrapAll(n?e.call(this,t):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){b(this[0]).before(t=b(t));for(var e;(e=t.children()).length;)t=e.first();b(t).append(this)}return this},wrapInner:function(i){var o=a(i);return this.each(function(t){var e=b(this),n=e.contents(),r=o?i.call(this,t):i;n.length?n.wrapAll(r):e.append(r)})},unwrap:function(){return this.parent().each(function(){b(this).replaceWith(b(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=b(this);(e===w?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return b(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return b(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;b(this).empty().append(v(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=v(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(e,n){var t;return"string"!=typeof e||1 in arguments?this.each(function(t){if(1===this.nodeType)if(i(e))for(x in e)j(this,x,e[x]);else j(this,e,v(this,n,t,this.getAttribute(e)))}):0 in this&&1==this[0].nodeType&&null!=(t=this[0].getAttribute(e))?t:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){j(this,t)},this)})},prop:function(e,n){return e=V[e]||e,1 in arguments?this.each(function(t){this[e]=v(this,n,t,this[e])}):this[0]&&this[0][e]},removeProp:function(t){return t=V[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(I,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?y(r):w},val:function(e){return 0 in arguments?(null==e&&(e=""),this.each(function(t){this.value=v(this,e,t,this.value)})):this[0]&&(this[0].multiple?b(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=b(this),n=v(this,o,t,e.offset()),r=e.offsetParent().offset(),i={top:n.top-r.top,left:n.left-r.left};"static"==e.css("position")&&(i.position="relative"),e.css(i)});if(!this.length)return null;if(O.documentElement!==this[0]&&!b.contains(O.documentElement,this[0]))return{top:0,left:0};var t=this[0].getBoundingClientRect();return{left:t.left+c.pageXOffset,top:t.top+c.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n=this[0];if("string"==typeof t){if(!n)return;return n.style[S(t)]||getComputedStyle(n,"").getPropertyValue(t)}if(X(t)){if(!n)return;var r={},i=getComputedStyle(n,"");return b.each(t,function(t,e){r[e]=n.style[S(e)]||i.getPropertyValue(e)}),r}}var o="";if("string"==u(t))e||0===e?o=f(t)+":"+p(t,e):this.each(function(){this.style.removeProperty(f(t))});else for(x in t)t[x]||0===t[x]?o+=f(x)+":"+p(x,t[x])+";":this.each(function(){this.style.removeProperty(f(x))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(b(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&B.some.call(this,function(t){return this.test(g(t))},n(t))},addClass:function(n){return n?this.each(function(t){if("className"in this){E=[];var e=g(this);v(this,n,t,e).split(/\s+/g).forEach(function(t){b(this).hasClass(t)||E.push(t)},this),E.length&&g(this,e+(e?" ":"")+E.join(" "))}}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===w)return g(this,"");E=g(this),v(this,e,t,E).split(/\s+/g).forEach(function(t){E=E.replace(n(t)," ")}),g(this,E.trim())}})},toggleClass:function(n,r){return n?this.each(function(t){var e=b(this);v(this,n,t,g(this)).split(/\s+/g).forEach(function(t){(r===w?!e.hasClass(t):r)?e.addClass(t):e.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(b(t).css("margin-top"))||0,n.left-=parseFloat(b(t).css("margin-left"))||0,r.top+=parseFloat(b(e[0]).css("border-top-width"))||0,r.left+=parseFloat(b(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!R.test(t.nodeName)&&"static"==b(t).css("position");)t=t.offsetParent;return t})}},b.fn.detach=b.fn.remove,["width","height"].forEach(function(r){var i=r.replace(/./,function(t){return t[0].toUpperCase()});b.fn[r]=function(e){var t,n=this[0];return e===w?o(n)?n["inner"+i]:s(n)?n.documentElement["scroll"+i]:(t=this.offset())&&t[r]:this.each(function(t){(n=b(this)).css(r,v(this,e,t,n[r]()))})}}),["after","prepend","before","append"].forEach(function(e,a){var s=a%2;b.fn[e]=function(){var n,r,i=b.map(arguments,function(t){var e=[];return"array"==(n=u(t))?(t.forEach(function(t){return t.nodeType!==w?e.push(t):b.zepto.isZ(t)?e=e.concat(t.get()):void(e=e.concat(J.fragment(t)))}),e):"object"==n||null==t?t:J.fragment(t)}),o=1<this.length;return i.length<1?this:this.each(function(t,e){r=s?e:e.parentNode,e=0==a?e.nextSibling:1==a?e.firstChild:2==a?e:null;var n=b.contains(O.documentElement,r);i.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!r)return b(t).remove();r.insertBefore(t,e),n&&function t(e,n){n(e);for(var r=0,i=e.childNodes.length;r<i;r++)t(e.childNodes[r],n)}(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:c;e.eval.call(e,t.innerHTML)}})})})},b.fn[s?e+"To":"insert"+(a?"Before":"After")]=function(t){return b(t)[e](this),this}}),J.Z.prototype=d.prototype=b.fn,J.uniq=C,J.deserializeValue=y,b.zepto=J,b}();return c.Zepto=d,void 0===c.$&&(c.$=d),function(l){function h(t){return t._zid||(t._zid=e++)}function a(t,e,n,r){if((e=f(e)).ns)var i=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(b[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function f(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function p(t,e){return t.del&&!n&&t.e in r||!!e}function d(t){return E[t]||n&&r[t]||t}function u(i,t,e,o,a,s,c){var n=h(i),u=b[n]||(b[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return l(document).ready(e);var n=f(t);n.fn=e,n.sel=a,n.e in E&&(e=function(t){var e=t.relatedTarget;return!e||e!==this&&!l.contains(this,e)?n.fn.apply(this,arguments):void 0});var r=(n.del=s)||e;n.proxy=function(t){if(!(t=v(t)).isImmediatePropagationStopped()){t.data=o;var e=r.apply(i,t._args==g?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=u.length,u.push(n),"addEventListener"in i&&i.addEventListener(d(n.e),n.proxy,p(n,c))})}function m(e,t,n,r,i){var o=h(e);(t||"").split(/\s/).forEach(function(t){a(e,t,n,r).forEach(function(t){delete b[o][t.i],"removeEventListener"in e&&e.removeEventListener(d(t.e),t.proxy,p(t,i))})})}function v(r,i){return(i||!r.isDefaultPrevented)&&(i||(i=r),l.each(t,function(t,e){var n=i[t];r[t]=function(){return this[e]=s,n&&n.apply(i,arguments)},r[e]=S}),r.timeStamp||(r.timeStamp=Date.now()),(i.defaultPrevented!==g?i.defaultPrevented:"returnValue"in i?!1===i.returnValue:i.getPreventDefault&&i.getPreventDefault())&&(r.isDefaultPrevented=s)),r}function j(t){var e,n={originalEvent:t};for(e in t)i.test(e)||t[e]===g||(n[e]=t[e]);return v(n,t)}var g,e=1,y=Array.prototype.slice,w=l.isFunction,x=function(t){return"string"==typeof t},b={},o={},n="onfocusin"in c,r={focus:"focusin",blur:"focusout"},E={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",l.event={add:u,remove:m},l.proxy=function(t,e){var n=2 in arguments&&y.call(arguments,2);if(w(t)){var r=function(){return t.apply(e,n?n.concat(y.call(arguments)):arguments)};return r._zid=h(t),r}if(x(e))return n?(n.unshift(t[e],t),l.proxy.apply(null,n)):l.proxy(t[e],t);throw new TypeError("expected function")},l.fn.bind=function(t,e,n){return this.on(t,e,n)},l.fn.unbind=function(t,e){return this.off(t,e)},l.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var s=function(){return!0},S=function(){return!1},i=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};l.fn.delegate=function(t,e,n){return this.on(e,t,n)},l.fn.undelegate=function(t,e,n){return this.off(e,t,n)},l.fn.live=function(t,e){return l(document.body).delegate(this.selector,t,e),this},l.fn.die=function(t,e){return l(document.body).undelegate(this.selector,t,e),this},l.fn.on=function(e,i,n,o,a){var s,c,r=this;return e&&!x(e)?(l.each(e,function(t,e){r.on(t,i,n,e,a)}),r):(x(i)||w(o)||!1===o||(o=n,n=i,i=g),(o===g||!1===n)&&(o=n,n=g),!1===o&&(o=S),r.each(function(t,r){a&&(s=function(t){return m(r,t.type,o),o.apply(this,arguments)}),i&&(c=function(t){var e,n=l(t.target).closest(i,r).get(0);return n&&n!==r?(e=l.extend(j(t),{currentTarget:n,liveFired:r}),(s||o).apply(n,[e].concat(y.call(arguments,1)))):void 0}),u(r,e,o,n,i,c||s)}))},l.fn.off=function(t,n,e){var r=this;return t&&!x(t)?(l.each(t,function(t,e){r.off(t,n,e)}),r):(x(n)||w(e)||!1===e||(e=n,n=g),!1===e&&(e=S),r.each(function(){m(this,t,e,n)}))},l.fn.trigger=function(t,e){return(t=x(t)||l.isPlainObject(t)?l.Event(t):v(t))._args=e,this.each(function(){t.type in r&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):l(this).triggerHandler(t,e)})},l.fn.triggerHandler=function(n,r){var i,o;return this.each(function(t,e){(i=j(x(n)?l.Event(n):n))._args=r,i.target=e,l.each(a(e,n.type||n),function(t,e){return o=e.proxy(i),!i.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){l.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),l.Event=function(t,e){x(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),v(n)}}(d),function(Bh){function Dh(t,e,n,r){return t.global?(i=e||Uh,o=n,a=r,s=Bh.Event(o),Bh(i).trigger(s,a),!s.isDefaultPrevented()):void 0;var i,o,a,s}function Gh(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==Dh(e,n,"ajaxBeforeSend",[t,e])&&void Dh(e,n,"ajaxSend",[t,e])}function Hh(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),Dh(n,i,"ajaxSuccess",[e,n,t]),Jh(o,e,n)}function Ih(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),Dh(r,o,"ajaxError",[n,r,t||e]),Jh(e,n,r)}function Jh(t,e,n){var r,i=n.context;n.complete.call(i,e,t),Dh(n,i,"ajaxComplete",[e,n]),(r=n).global&&!--Bh.active&&Dh(r,null,"ajaxStop")}function Lh(){}function Nh(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function Ph(t,e,n,r){return Bh.isFunction(e)&&(r=n,n=e,e=void 0),Bh.isFunction(n)||(r=n,n=void 0),{url:t,data:e,success:n,dataType:r}}var Rh,Sh,Th=+new Date,Uh=c.document,Vh=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Wh=/^(?:text|application)\/javascript/i,Xh=/^(?:text|application)\/xml/i,Yh="application/json",Zh="text/html",$h=/^\s*$/,_h=Uh.createElement("a");_h.href=c.location.href,Bh.active=0,Bh.ajaxJSONP=function(n,r){if(!("type"in n))return Bh.ajax(n);var i,o,t=n.jsonpCallback,a=(Bh.isFunction(t)?t():t)||"Zepto"+Th++,s=Uh.createElement("script"),u=c[a],e=function(t){Bh(s).triggerHandler("error",t||"abort")},l={abort:e};return r&&r.promise(l),Bh(s).on("load error",function(t,e){clearTimeout(o),Bh(s).off().remove(),"error"!=t.type&&i?Hh(i[0],l,n,r):Ih(null,e||"error",l,n,r),c[a]=u,i&&Bh.isFunction(u)&&u(i[0]),u=i=void 0}),!1===Gh(l,n)?e("abort"):(c[a]=function(){i=arguments},s.src=n.url.replace(/\?(.+)=\?/,"?$1="+a),Uh.head.appendChild(s),0<n.timeout&&(o=setTimeout(function(){e("timeout")},n.timeout))),l},Bh.ajaxSettings={type:"GET",beforeSend:Lh,success:Lh,error:Lh,complete:Lh,context:null,global:!0,xhr:function(){return new c.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:Yh,xml:"application/xml, text/xml",html:Zh,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:Lh},Bh.ajax=function(kj){var lj,mj,Li,ji,nj=Bh.extend({},kj||{}),oj=Bh.Deferred&&Bh.Deferred();for(Rh in Bh.ajaxSettings)void 0===nj[Rh]&&(nj[Rh]=Bh.ajaxSettings[Rh]);(ji=nj).global&&0==Bh.active++&&Dh(ji,null,"ajaxStart"),nj.crossDomain||((lj=Uh.createElement("a")).href=nj.url,lj.href=lj.href,nj.crossDomain=_h.protocol+"//"+_h.host!=lj.protocol+"//"+lj.host),nj.url||(nj.url=c.location.toString()),-1<(mj=nj.url.indexOf("#"))&&(nj.url=nj.url.slice(0,mj)),(Li=nj).processData&&Li.data&&"string"!=Bh.type(Li.data)&&(Li.data=Bh.param(Li.data,Li.traditional)),!Li.data||Li.type&&"GET"!=Li.type.toUpperCase()&&"jsonp"!=Li.dataType||(Li.url=Nh(Li.url,Li.data),Li.data=void 0);var pj=nj.dataType,qj=/\?.+=\?/.test(nj.url);if(qj&&(pj="jsonp"),!1!==nj.cache&&(kj&&!0===kj.cache||"script"!=pj&&"jsonp"!=pj)||(nj.url=Nh(nj.url,"_="+Date.now())),"jsonp"==pj)return qj||(nj.url=Nh(nj.url,nj.jsonp?nj.jsonp+"=?":!1===nj.jsonp?"":"callback=?")),Bh.ajaxJSONP(nj,oj);var rj,sj=nj.accepts[pj],tj={},uj=function(t,e){tj[t.toLowerCase()]=[t,e]},vj=/^([\w-]+:)\/\//.test(nj.url)?RegExp.$1:c.location.protocol,wj=nj.xhr(),xj=wj.setRequestHeader;if(oj&&oj.promise(wj),nj.crossDomain||uj("X-Requested-With","XMLHttpRequest"),uj("Accept",sj||"*/*"),(sj=nj.mimeType||sj)&&(-1<sj.indexOf(",")&&(sj=sj.split(",",2)[0]),wj.overrideMimeType&&wj.overrideMimeType(sj)),(nj.contentType||!1!==nj.contentType&&nj.data&&"GET"!=nj.type.toUpperCase())&&uj("Content-Type",nj.contentType||"application/x-www-form-urlencoded"),nj.headers)for(Sh in nj.headers)uj(Sh,nj.headers[Sh]);if(wj.setRequestHeader=uj,!(wj.onreadystatechange=function(){if(4==wj.readyState){wj.onreadystatechange=Lh,clearTimeout(rj);var Bj,Cj=!1;if(200<=wj.status&&wj.status<300||304==wj.status||0==wj.status&&"file:"==vj){if(pj=pj||((Ii=nj.mimeType||wj.getResponseHeader("content-type"))&&(Ii=Ii.split(";",2)[0]),Ii&&(Ii==Zh?"html":Ii==Yh?"json":Wh.test(Ii)?"script":Xh.test(Ii)&&"xml")||"text"),"arraybuffer"==wj.responseType||"blob"==wj.responseType)Bj=wj.response;else{Bj=wj.responseText;try{Bj=function(t,e,n){if(n.dataFilter==Lh)return t;var r=n.context;return n.dataFilter.call(r,t,e)}(Bj,pj,nj),"script"==pj?eval(Bj):"xml"==pj?Bj=wj.responseXML:"json"==pj&&(Bj=$h.test(Bj)?null:Bh.parseJSON(Bj))}catch(t){Cj=t}if(Cj)return Ih(Cj,"parsererror",wj,nj,oj)}Hh(Bj,wj,nj,oj)}else Ih(wj.statusText||null,wj.status?"error":"abort",wj,nj,oj)}var Ii})===Gh(wj,nj))return wj.abort(),Ih(null,"abort",wj,nj,oj),wj;var yj=!("async"in nj)||nj.async;if(wj.open(nj.type,nj.url,yj,nj.username,nj.password),nj.xhrFields)for(Sh in nj.xhrFields)wj[Sh]=nj.xhrFields[Sh];for(Sh in tj)xj.apply(wj,tj[Sh]);return 0<nj.timeout&&(rj=setTimeout(function(){wj.onreadystatechange=Lh,wj.abort(),Ih(null,"timeout",wj,nj,oj)},nj.timeout)),wj.send(nj.data?nj.data:null),wj},Bh.get=function(){return Bh.ajax(Ph.apply(null,arguments))},Bh.post=function(){var t=Ph.apply(null,arguments);return t.type="POST",Bh.ajax(t)},Bh.getJSON=function(){var t=Ph.apply(null,arguments);return t.dataType="json",Bh.ajax(t)},Bh.fn.load=function(t,e,n){if(!this.length)return this;var r,i=this,o=t.split(/\s/),a=Ph(t,e,n),s=a.success;return 1<o.length&&(a.url=o[0],r=o[1]),a.success=function(t){i.html(r?Bh("<div>").html(t.replace(Vh,"")).find(r):t),s&&s.apply(i,arguments)},Bh.ajax(a),this};var ai=encodeURIComponent;Bh.param=function(t,e){var n=[];return n.add=function(t,e){Bh.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(ai(t)+"="+ai(e))},function n(r,t,i,o){var a,s=Bh.isArray(t),c=Bh.isPlainObject(t);Bh.each(t,function(t,e){a=Bh.type(e),o&&(t=i?o:o+"["+(c||"object"==a||"array"==a?t:"")+"]"),!o&&s?r.add(e.name,e.value):"array"==a||!i&&"object"==a?n(r,e,i,t):r.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(d),(Uj=d).fn.serializeArray=function(){var n,r,e=[],i=function(t){return t.forEach?t.forEach(i):void e.push({name:n,value:t})};return this[0]&&Uj.each(this[0].elements,function(t,e){r=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&"file"!=r&&("radio"!=r&&"checkbox"!=r||e.checked)&&i(Uj(e).val())}),e},Uj.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},Uj.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=Uj.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this},function(){try{getComputedStyle(void 0)}catch(t){var n=getComputedStyle;c.getComputedStyle=function(t,e){try{return n(t,e)}catch(t){return null}}}}(),d}),function(){"use strict";var u={load:function(t,e){var n=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");n.open("GET",t,!0),n.onreadystatechange=(r=n,i=e,function(){if(4===r.readyState&&200===r.status)try{i(null,JSON.parse(r.responseText))}catch(t){i(t,null)}}),n.send();var r,i}};var n=function(t,e){var n=e.length,r=t.length;if(n<r)return!1;if(r===n)return t===e;t:for(var i=0,o=0;i<r;i++){for(var a=t.charCodeAt(i);o<n;)if(e.charCodeAt(o++)===a)continue t;return!1}return!0},e=new function(){this.matches=function(t,e){return n(e.toLowerCase(),t.toLowerCase())}};var r=new function(){this.matches=function(e,t){return!!e&&(e=e.trim().toLowerCase(),0<(t=t.toLowerCase()).split(" ").filter(function(t){return 0<=e.indexOf(t)}).length)}};var l={put:function(t){if(c(t))return h(t);if(e=t,Boolean(e)&&"[object Array]"===Object.prototype.toString.call(e))return function(t){var e=[];s();for(var n=0,r=t.length;n<r;n++)c(t[n])&&e.push(h(t[n]));return e}(t);var e;return},clear:s,search:function(t){return t?function(t,e,n,r){for(var i=[],o=0;o<t.length&&i.length<r.limit;o++){var a=f(t[o],e,n,r);a&&i.push(a)}return i}(o,t,a.searchStrategy,a).sort(a.sort):[]},setOptions:function(t){(a=t||{}).fuzzy=t.fuzzy||!1,a.limit=t.limit||10,a.searchStrategy=t.fuzzy?e:r,a.sort=t.sort||i}};function i(){return 0}var o=[],a={};function s(){return o.length=0,o}function c(t){return Boolean(t)&&"[object Object]"===Object.prototype.toString.call(t)}function h(t){return o.push(t),o}function f(t,e,n,r){for(var i in t)if(!p(t[i],r.exclude)&&n.matches(t[i],e))return t}function p(t,e){for(var n=!1,r=0,i=(e=e||[]).length;r<i;r++){var o=e[r];!n&&new RegExp(t).test(o)&&(n=!0)}return n}a.fuzzy=!1,a.limit=10,a.searchStrategy=a.fuzzy?e:r,a.sort=i;var d={compile:function(r){return m.template.replace(m.pattern,function(t,e){var n=m.middleware(e,r[e],m.template);return void 0!==n?n:r[e]||t})},setOptions:function(t){m.pattern=t.pattern||m.pattern,m.template=t.template||m.template,"function"==typeof t.middleware&&(m.middleware=t.middleware)}},m={};m.pattern=/\{(.*?)\}/g,m.template="",m.middleware=function(){};var v={merge:function(t,e){var n={};for(var r in t)n[r]=t[r],void 0!==e[r]&&(n[r]=e[r]);return n},isJSON:function(t){try{return!!(t instanceof Object&&JSON.parse(JSON.stringify(t)))}catch(t){return!1}}};!function(t){var r={searchInput:null,resultsContainer:null,json:[],success:Function.prototype,searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',templateMiddleware:Function.prototype,sortMiddleware:function(){return 0},noResultsText:"No results found",limit:10,fuzzy:!1,exclude:[]},e=["searchInput","resultsContainer","json"],i=function t(e){if(!((n=e)&&void 0!==n.required&&n.required instanceof Array))throw new Error("-- OptionsValidator: required options missing");var n;if(!(this instanceof t))return new t(e);var r=e.required;this.getRequiredOptions=function(){return r},this.validate=function(e){var n=[];return r.forEach(function(t){void 0===e[t]&&n.push(t)}),n}}({required:e});function o(t){r.success(t),l.put(t),r.searchInput.addEventListener("keyup",function(t){var e;e=t.which,-1===[13,16,20,37,38,39,40,91].indexOf(e)&&(n(),s(t.target.value))})}function n(){r.resultsContainer.innerHTML=""}function a(t){r.resultsContainer.innerHTML+=t}function s(t){var e;(e=t)&&0<e.length&&(n(),function(t){var e=t.length;if(0===e)return a(r.noResultsText);for(var n=0;n<e;n++)a(d.compile(t[n]))}(l.search(t)))}function c(t){throw new Error("SimpleJekyllSearch --- "+t)}t.SimpleJekyllSearch=function(t){var n;return 0<i.validate(t).length&&c("You must specify the following required options: "+e),r=v.merge(r,t),d.setOptions({template:r.searchResultTemplate,middleware:r.templateMiddleware}),l.setOptions({fuzzy:r.fuzzy,limit:r.limit,sort:r.sortMiddleware}),v.isJSON(r.json)?o(r.json):(n=r.json,u.load(n,function(t,e){t&&c("failed to get JSON ("+n+")"),o(e)})),{search:s}}}(window)}(),function(e,n,t){e("a#slide").click(function(){e("#sidebar,a#slide,#fade").addClass("slide"),e("#open").hide(),e("#search").hide(),e("#close").show()}),e("#fade").click(function(){e("#sidebar,a#slide,#fade").removeClass("slide"),e("#open").show(),e("#search").show(),e("#close").hide()});var r={close:e(".icon-remove-sign"),searchform:e(".search-form"),canvas:e("body"),dothis:e(".dosearch")};function i(){e(".search-wrapper").toggleClass("active"),r.searchform.toggleClass("active"),r.canvas.removeClass("search-overlay")}r.dothis.on("click",function(){e(".search-wrapper").toggleClass("active"),r.searchform.toggleClass("active"),r.searchform.find("input").focus(),r.canvas.toggleClass("search-overlay"),e(".search-field").simpleJekyllSearch()}),r.close.on("click",i),document.addEventListener("keyup",function(t){27==t.keyCode&&e(".search-overlay").length&&i()}),1<=document.getElementsByClassName("home").length&&new AnimOnScroll(document.getElementById("grid"),{minDuration:.4,maxDuration:.7,viewportFactor:.2}),smoothScroll.init({selectorHeader:".bar-header",speed:500,updateURL:!1}),1024<screen.width&&n.addEventListener("scroll",function(){var t,e=document.querySelector(".header-post .content");(t=n.scrollY)<=500&&null!=e&&(e.style.transform="translateY("+-t/3+"px)",e.style.opacity=1-t/500)})}(Zepto,window);