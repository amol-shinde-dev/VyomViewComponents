/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
/*! angularjs-slider - v5.8.7 -  (c) Rafal Zajac <rzajac@gmail.com>, Valentin Hervieu <valentin@hervieu.me>, Jussi Saarivirta <jusasi@gmail.com>, Angelin Sirbu <angelin.sirbu@gmail.com> -  https://github.com/angular-slider/angularjs-slider -  2016-11-09 */
!function(a,b){"use strict";if("function"==typeof define&&define.amd)define(["angular"],b);else if("object"==typeof module&&module.exports){var c=require("angular");c&&c.module||"undefined"==typeof angular||(c=angular),module.exports=b(c)}else b(a.angular)}(this,function(a){"use strict";var b=a.module("rzModule",[]).factory("RzSliderOptions",function(){var b={floor:0,ceil:null,step:1,precision:0,minRange:null,maxRange:null,pushRange:!1,minLimit:null,maxLimit:null,id:null,translate:null,getLegend:null,stepsArray:null,bindIndexForStepsArray:!1,draggableRange:!1,draggableRangeOnly:!1,showSelectionBar:!1,showSelectionBarEnd:!1,showSelectionBarFromValue:null,hidePointerLabels:!1,hideLimitLabels:!1,autoHideLimitLabels:!0,readOnly:!1,disabled:!1,interval:350,showTicks:!1,showTicksValues:!1,ticksArray:null,ticksTooltip:null,ticksValuesTooltip:null,vertical:!1,getSelectionBarColor:null,getTickColor:null,getPointerColor:null,keyboardSupport:!0,scale:1,enforceStep:!0,enforceRange:!1,noSwitching:!1,onlyBindHandles:!1,onStart:null,onChange:null,onEnd:null,rightToLeft:!1,boundPointerLabels:!0,mergeRangeLabelsIfSame:!1,customTemplateScope:null,logScale:!1,customValueToPosition:null,customPositionToValue:null},c={},d={};return d.options=function(b){a.extend(c,b)},d.getOptions=function(d){return a.extend({},b,c,d)},d}).factory("rzThrottle",["$timeout",function(a){return function(b,c,d){var e,f,g,h=Date.now||function(){return(new Date).getTime()},i=null,j=0;d=d||{};var k=function(){j=h(),i=null,g=b.apply(e,f),e=f=null};return function(){var l=h(),m=c-(l-j);return e=this,f=arguments,0>=m?(a.cancel(i),i=null,j=l,g=b.apply(e,f),e=f=null):i||d.trailing===!1||(i=a(k,m)),g}}}]).factory("RzSlider",["$timeout","$document","$window","$compile","RzSliderOptions","rzThrottle",function(b,c,d,e,f,g){var h=function(a,b){this.scope=a,this.lowValue=0,this.highValue=0,this.sliderElem=b,this.range=void 0!==this.scope.rzSliderModel&&void 0!==this.scope.rzSliderHigh,this.dragging={active:!1,value:0,difference:0,position:0,lowLimit:0,highLimit:0},this.positionProperty="left",this.dimensionProperty="width",this.handleHalfDim=0,this.maxPos=0,this.precision=0,this.step=1,this.tracking="",this.minValue=0,this.maxValue=0,this.valueRange=0,this.intermediateTicks=!1,this.initHasRun=!1,this.firstKeyDown=!1,this.internalChange=!1,this.cmbLabelShown=!1,this.currentFocusElement=null,this.fullBar=null,this.selBar=null,this.minH=null,this.maxH=null,this.flrLab=null,this.ceilLab=null,this.minLab=null,this.maxLab=null,this.cmbLab=null,this.ticks=null,this.init()};return h.prototype={init:function(){var b,c,e=this,f=function(){e.calcViewDimensions()};this.applyOptions(),this.syncLowValue(),this.range&&this.syncHighValue(),this.initElemHandles(),this.manageElementsStyle(),this.setDisabledState(),this.calcViewDimensions(),this.setMinAndMax(),this.addAccessibility(),this.updateCeilLab(),this.updateFloorLab(),this.initHandles(),this.manageEventsBindings(),this.scope.$on("reCalcViewDimensions",f),a.element(d).on("resize",f),this.initHasRun=!0,b=g(function(){e.onLowHandleChange()},e.options.interval),c=g(function(){e.onHighHandleChange()},e.options.interval),this.scope.$on("rzSliderForceRender",function(){e.resetLabelsValue(),b(),e.range&&c(),e.resetSlider()}),this.scope.$watch("rzSliderOptions()",function(a,b){a!==b&&(e.applyOptions(),e.syncLowValue(),e.range&&e.syncHighValue(),e.resetSlider())},!0),this.scope.$watch("rzSliderModel",function(a,c){e.internalChange||a!==c&&b()}),this.scope.$watch("rzSliderHigh",function(a,b){e.internalChange||a!==b&&(null!=a&&c(),(e.range&&null==a||!e.range&&null!=a)&&(e.applyOptions(),e.resetSlider()))}),this.scope.$on("$destroy",function(){e.unbindEvents(),a.element(d).off("resize",f),e.currentFocusElement=null})},findStepIndex:function(b){for(var c=0,d=0;d<this.options.stepsArray.length;d++){var e=this.options.stepsArray[d];if(e===b){c=d;break}if(a.isDate(e)){if(e.getTime()===b.getTime()){c=d;break}}else if(a.isObject(e)&&(a.isDate(e.value)&&e.value.getTime()===b.getTime()||e.value===b)){c=d;break}}return c},syncLowValue:function(){this.options.stepsArray?this.options.bindIndexForStepsArray?this.lowValue=this.scope.rzSliderModel:this.lowValue=this.findStepIndex(this.scope.rzSliderModel):this.lowValue=this.scope.rzSliderModel},syncHighValue:function(){this.options.stepsArray?this.options.bindIndexForStepsArray?this.highValue=this.scope.rzSliderHigh:this.highValue=this.findStepIndex(this.scope.rzSliderHigh):this.highValue=this.scope.rzSliderHigh},getStepValue:function(b){var c=this.options.stepsArray[b];return a.isDate(c)?c:a.isObject(c)?c.value:c},applyLowValue:function(){this.options.stepsArray?this.options.bindIndexForStepsArray?this.scope.rzSliderModel=this.lowValue:this.scope.rzSliderModel=this.getStepValue(this.lowValue):this.scope.rzSliderModel=this.lowValue},applyHighValue:function(){this.options.stepsArray?this.options.bindIndexForStepsArray?this.scope.rzSliderHigh=this.highValue:this.scope.rzSliderHigh=this.getStepValue(this.highValue):this.scope.rzSliderHigh=this.highValue},onLowHandleChange:function(){this.syncLowValue(),this.range&&this.syncHighValue(),this.setMinAndMax(),this.updateLowHandle(this.valueToPosition(this.lowValue)),this.updateSelectionBar(),this.updateTicksScale(),this.updateAriaAttributes(),this.range&&this.updateCmbLabel()},onHighHandleChange:function(){this.syncLowValue(),this.syncHighValue(),this.setMinAndMax(),this.updateHighHandle(this.valueToPosition(this.highValue)),this.updateSelectionBar(),this.updateTicksScale(),this.updateCmbLabel(),this.updateAriaAttributes()},applyOptions:function(){var b;b=this.scope.rzSliderOptions?this.scope.rzSliderOptions():{},this.options=f.getOptions(b),this.options.step<=0&&(this.options.step=1),this.range=void 0!==this.scope.rzSliderModel&&void 0!==this.scope.rzSliderHigh,this.options.draggableRange=this.range&&this.options.draggableRange,this.options.draggableRangeOnly=this.range&&this.options.draggableRangeOnly,this.options.draggableRangeOnly&&(this.options.draggableRange=!0),this.options.showTicks=this.options.showTicks||this.options.showTicksValues||!!this.options.ticksArray,this.scope.showTicks=this.options.showTicks,(a.isNumber(this.options.showTicks)||this.options.ticksArray)&&(this.intermediateTicks=!0),this.options.showSelectionBar=this.options.showSelectionBar||this.options.showSelectionBarEnd||null!==this.options.showSelectionBarFromValue,this.options.stepsArray?this.parseStepsArray():(this.options.translate?this.customTrFn=this.options.translate:this.customTrFn=function(a){return String(a)},this.getLegend=this.options.getLegend),this.options.vertical&&(this.positionProperty="bottom",this.dimensionProperty="height"),this.options.customTemplateScope&&(this.scope.custom=this.options.customTemplateScope)},parseStepsArray:function(){this.options.floor=0,this.options.ceil=this.options.stepsArray.length-1,this.options.step=1,this.options.translate?this.customTrFn=this.options.translate:this.customTrFn=function(a){return this.options.bindIndexForStepsArray?this.getStepValue(a):a},this.getLegend=function(b){var c=this.options.stepsArray[b];return a.isObject(c)?c.legend:null}},resetSlider:function(){this.manageElementsStyle(),this.addAccessibility(),this.setMinAndMax(),this.updateCeilLab(),this.updateFloorLab(),this.unbindEvents(),this.manageEventsBindings(),this.setDisabledState(),this.calcViewDimensions(),this.refocusPointerIfNeeded()},refocusPointerIfNeeded:function(){this.currentFocusElement&&(this.onPointerFocus(this.currentFocusElement.pointer,this.currentFocusElement.ref),this.focusElement(this.currentFocusElement.pointer))},initElemHandles:function(){a.forEach(this.sliderElem.children(),function(b,c){var d=a.element(b);switch(c){case 0:this.fullBar=d;break;case 1:this.selBar=d;break;case 2:this.minH=d;break;case 3:this.maxH=d;break;case 4:this.flrLab=d;break;case 5:this.ceilLab=d;break;case 6:this.minLab=d;break;case 7:this.maxLab=d;break;case 8:this.cmbLab=d;break;case 9:this.ticks=d}},this),this.selBar.rzsp=0,this.minH.rzsp=0,this.maxH.rzsp=0,this.flrLab.rzsp=0,this.ceilLab.rzsp=0,this.minLab.rzsp=0,this.maxLab.rzsp=0,this.cmbLab.rzsp=0},manageElementsStyle:function(){this.range?this.maxH.css("display",""):this.maxH.css("display","none"),this.alwaysHide(this.flrLab,this.options.showTicksValues||this.options.hideLimitLabels),this.alwaysHide(this.ceilLab,this.options.showTicksValues||this.options.hideLimitLabels);var a=this.options.showTicksValues&&!this.intermediateTicks;this.alwaysHide(this.minLab,a||this.options.hidePointerLabels),this.alwaysHide(this.maxLab,a||!this.range||this.options.hidePointerLabels),this.alwaysHide(this.cmbLab,a||!this.range||this.options.hidePointerLabels),this.alwaysHide(this.selBar,!this.range&&!this.options.showSelectionBar),this.options.vertical&&this.sliderElem.addClass("rz-vertical"),this.options.draggableRange?this.selBar.addClass("rz-draggable"):this.selBar.removeClass("rz-draggable"),this.intermediateTicks&&this.options.showTicksValues&&this.ticks.addClass("rz-ticks-values-under")},alwaysHide:function(a,b){a.rzAlwaysHide=b,b?this.hideEl(a):this.showEl(a)},manageEventsBindings:function(){this.options.disabled||this.options.readOnly?this.unbindEvents():this.bindEvents()},setDisabledState:function(){this.options.disabled?this.sliderElem.attr("disabled","disabled"):this.sliderElem.attr("disabled",null)},resetLabelsValue:function(){this.minLab.rzsv=void 0,this.maxLab.rzsv=void 0},initHandles:function(){this.updateLowHandle(this.valueToPosition(this.lowValue)),this.range&&this.updateHighHandle(this.valueToPosition(this.highValue)),this.updateSelectionBar(),this.range&&this.updateCmbLabel(),this.updateTicksScale()},translateFn:function(a,b,c,d){d=void 0===d?!0:d;var e="",f=!1,g=b.hasClass("no-label-injection");d?(this.options.stepsArray&&!this.options.bindIndexForStepsArray&&(a=this.getStepValue(a)),e=String(this.customTrFn(a,this.options.id,c))):e=String(a),(void 0===b.rzsv||b.rzsv.length!==e.length||b.rzsv.length>0&&0===b.rzsd)&&(f=!0,b.rzsv=e),g||b.html(e),this.scope[c+"Label"]=e,f&&this.getDimension(b)},setMinAndMax:function(){if(this.step=+this.options.step,this.precision=+this.options.precision,this.minValue=this.options.floor,this.options.logScale&&0===this.minValue)throw Error("Can't use floor=0 with logarithmic scale");this.options.enforceStep&&(this.lowValue=this.roundStep(this.lowValue),this.range&&(this.highValue=this.roundStep(this.highValue))),null!=this.options.ceil?this.maxValue=this.options.ceil:this.maxValue=this.options.ceil=this.range?this.highValue:this.lowValue,this.options.enforceRange&&(this.lowValue=this.sanitizeValue(this.lowValue),this.range&&(this.highValue=this.sanitizeValue(this.highValue))),this.applyLowValue(),this.range&&this.applyHighValue(),this.valueRange=this.maxValue-this.minValue},addAccessibility:function(){this.minH.attr("role","slider"),this.updateAriaAttributes(),!this.options.keyboardSupport||this.options.readOnly||this.options.disabled?this.minH.attr("tabindex",""):this.minH.attr("tabindex","0"),this.options.vertical&&this.minH.attr("aria-orientation","vertical"),this.range&&(this.maxH.attr("role","slider"),!this.options.keyboardSupport||this.options.readOnly||this.options.disabled?this.maxH.attr("tabindex",""):this.maxH.attr("tabindex","0"),this.options.vertical&&this.maxH.attr("aria-orientation","vertical"))},updateAriaAttributes:function(){this.minH.attr({"aria-valuenow":this.scope.rzSliderModel,"aria-valuetext":this.customTrFn(this.scope.rzSliderModel,this.options.id,"model"),"aria-valuemin":this.minValue,"aria-valuemax":this.maxValue}),this.range&&this.maxH.attr({"aria-valuenow":this.scope.rzSliderHigh,"aria-valuetext":this.customTrFn(this.scope.rzSliderHigh,this.options.id,"high"),"aria-valuemin":this.minValue,"aria-valuemax":this.maxValue})},calcViewDimensions:function(){var a=this.getDimension(this.minH);if(this.handleHalfDim=a/2,this.barDimension=this.getDimension(this.fullBar),this.maxPos=this.barDimension-a,this.getDimension(this.sliderElem),this.sliderElem.rzsp=this.sliderElem[0].getBoundingClientRect()[this.positionProperty],this.initHasRun){this.updateFloorLab(),this.updateCeilLab(),this.initHandles();var c=this;b(function(){c.updateTicksScale()})}},updateTicksScale:function(){if(this.options.showTicks){var a=this.options.ticksArray||this.getTicksArray(),b=this.options.vertical?"translateY":"translateX",c=this;this.options.rightToLeft&&a.reverse(),this.scope.ticks=a.map(function(a){var d=c.valueToPosition(a);c.options.vertical&&(d=c.maxPos-d);var e={selected:c.isTickSelected(a),style:{transform:b+"("+Math.round(d)+"px)"}};if(e.selected&&c.options.getSelectionBarColor&&(e.style["background-color"]=c.getSelectionBarColor()),!e.selected&&c.options.getTickColor&&(e.style["background-color"]=c.getTickColor(a)),c.options.ticksTooltip&&(e.tooltip=c.options.ticksTooltip(a),e.tooltipPlacement=c.options.vertical?"right":"top"),c.options.showTicksValues&&(e.value=c.getDisplayValue(a,"tick-value"),c.options.ticksValuesTooltip&&(e.valueTooltip=c.options.ticksValuesTooltip(a),e.valueTooltipPlacement=c.options.vertical?"right":"top")),c.getLegend){var f=c.getLegend(a,c.options.id);f&&(e.legend=f)}return e})}},getTicksArray:function(){var a=this.step,b=[];this.intermediateTicks&&(a=this.options.showTicks);for(var c=this.minValue;c<=this.maxValue;c+=a)b.push(c);return b},isTickSelected:function(a){if(!this.range)if(null!==this.options.showSelectionBarFromValue){var b=this.options.showSelectionBarFromValue;if(this.lowValue>b&&a>=b&&a<=this.lowValue)return!0;if(this.lowValue<b&&b>=a&&a>=this.lowValue)return!0}else if(this.options.showSelectionBarEnd){if(a>=this.lowValue)return!0}else if(this.options.showSelectionBar&&a<=this.lowValue)return!0;return this.range&&a>=this.lowValue&&a<=this.highValue?!0:!1},updateFloorLab:function(){this.translateFn(this.minValue,this.flrLab,"floor"),this.getDimension(this.flrLab);var a=this.options.rightToLeft?this.barDimension-this.flrLab.rzsd:0;this.setPosition(this.flrLab,a)},updateCeilLab:function(){this.translateFn(this.maxValue,this.ceilLab,"ceil"),this.getDimension(this.ceilLab);var a=this.options.rightToLeft?0:this.barDimension-this.ceilLab.rzsd;this.setPosition(this.ceilLab,a)},updateHandles:function(a,b){"lowValue"===a?this.updateLowHandle(b):this.updateHighHandle(b),this.updateSelectionBar(),this.updateTicksScale(),this.range&&this.updateCmbLabel()},getHandleLabelPos:function(a,b){var c=this[a].rzsd,d=b-c/2+this.handleHalfDim,e=this.barDimension-c;return this.options.boundPointerLabels?this.options.rightToLeft&&"minLab"===a||!this.options.rightToLeft&&"maxLab"===a?Math.min(d,e):Math.min(Math.max(d,0),e):d},updateLowHandle:function(a){if(this.setPosition(this.minH,a),this.translateFn(this.lowValue,this.minLab,"model"),this.setPosition(this.minLab,this.getHandleLabelPos("minLab",a)),this.options.getPointerColor){var b=this.getPointerColor("min");this.scope.minPointerStyle={backgroundColor:b}}this.options.autoHideLimitLabels&&this.shFloorCeil()},updateHighHandle:function(a){if(this.setPosition(this.maxH,a),this.translateFn(this.highValue,this.maxLab,"high"),this.setPosition(this.maxLab,this.getHandleLabelPos("maxLab",a)),this.options.getPointerColor){var b=this.getPointerColor("max");this.scope.maxPointerStyle={backgroundColor:b}}this.options.autoHideLimitLabels&&this.shFloorCeil()},shFloorCeil:function(){if(!this.options.hidePointerLabels){var a=!1,b=!1,c=this.isLabelBelowFloorLab(this.minLab),d=this.isLabelAboveCeilLab(this.minLab),e=this.isLabelAboveCeilLab(this.maxLab),f=this.isLabelBelowFloorLab(this.cmbLab),g=this.isLabelAboveCeilLab(this.cmbLab);if(c?(a=!0,this.hideEl(this.flrLab)):(a=!1,this.showEl(this.flrLab)),d?(b=!0,this.hideEl(this.ceilLab)):(b=!1,this.showEl(this.ceilLab)),this.range){var h=this.cmbLabelShown?g:e,i=this.cmbLabelShown?f:c;h?this.hideEl(this.ceilLab):b||this.showEl(this.ceilLab),i?this.hideEl(this.flrLab):a||this.showEl(this.flrLab)}}},isLabelBelowFloorLab:function(a){var b=this.options.rightToLeft,c=a.rzsp,d=a.rzsd,e=this.flrLab.rzsp,f=this.flrLab.rzsd;return b?c+d>=e-2:e+f+2>=c},isLabelAboveCeilLab:function(a){var b=this.options.rightToLeft,c=a.rzsp,d=a.rzsd,e=this.ceilLab.rzsp,f=this.ceilLab.rzsd;return b?e+f+2>=c:c+d>=e-2},updateSelectionBar:function(){var a=0,b=0,c=this.options.rightToLeft?!this.options.showSelectionBarEnd:this.options.showSelectionBarEnd,d=this.options.rightToLeft?this.maxH.rzsp+this.handleHalfDim:this.minH.rzsp+this.handleHalfDim;if(this.range)b=Math.abs(this.maxH.rzsp-this.minH.rzsp),a=d;else if(null!==this.options.showSelectionBarFromValue){var e=this.options.showSelectionBarFromValue,f=this.valueToPosition(e),g=this.options.rightToLeft?this.lowValue<=e:this.lowValue>e;g?(b=this.minH.rzsp-f,a=f+this.handleHalfDim):(b=f-this.minH.rzsp,a=this.minH.rzsp+this.handleHalfDim)}else c?(b=Math.abs(this.maxPos-this.minH.rzsp)+this.handleHalfDim,a=this.minH.rzsp+this.handleHalfDim):(b=Math.abs(this.maxH.rzsp-this.minH.rzsp)+this.handleHalfDim,a=0);if(this.setDimension(this.selBar,b),this.setPosition(this.selBar,a),this.options.getSelectionBarColor){var h=this.getSelectionBarColor();this.scope.barStyle={backgroundColor:h}}},getSelectionBarColor:function(){return this.range?this.options.getSelectionBarColor(this.scope.rzSliderModel,this.scope.rzSliderHigh):this.options.getSelectionBarColor(this.scope.rzSliderModel)},getPointerColor:function(a){return"max"===a?this.options.getPointerColor(this.scope.rzSliderHigh,a):this.options.getPointerColor(this.scope.rzSliderModel,a)},getTickColor:function(a){return this.options.getTickColor(a)},updateCmbLabel:function(){var a=null;if(a=this.options.rightToLeft?this.minLab.rzsp-this.minLab.rzsd-10<=this.maxLab.rzsp:this.minLab.rzsp+this.minLab.rzsd+10>=this.maxLab.rzsp){var b=this.getDisplayValue(this.lowValue,"model"),c=this.getDisplayValue(this.highValue,"high"),d="";d=this.options.mergeRangeLabelsIfSame&&b===c?b:this.options.rightToLeft?c+" - "+b:b+" - "+c,this.translateFn(d,this.cmbLab,"cmb",!1);var e=this.options.boundPointerLabels?Math.min(Math.max(this.selBar.rzsp+this.selBar.rzsd/2-this.cmbLab.rzsd/2,0),this.barDimension-this.cmbLab.rzsd):this.selBar.rzsp+this.selBar.rzsd/2-this.cmbLab.rzsd/2;this.setPosition(this.cmbLab,e),this.cmbLabelShown=!0,this.hideEl(this.minLab),this.hideEl(this.maxLab),this.showEl(this.cmbLab)}else this.cmbLabelShown=!1,this.showEl(this.maxLab),this.showEl(this.minLab),this.hideEl(this.cmbLab);this.options.autoHideLimitLabels&&this.shFloorCeil()},getDisplayValue:function(a,b){return this.options.stepsArray&&!this.options.bindIndexForStepsArray&&(a=this.getStepValue(a)),this.customTrFn(a,this.options.id,b)},roundStep:function(a,b){var c=b?b:this.step,d=parseFloat((a-this.minValue)/c).toPrecision(12);d=Math.round(+d)*c;var e=(this.minValue+d).toFixed(this.precision);return+e},hideEl:function(a){return a.css({visibility:"hidden"})},showEl:function(a){return a.rzAlwaysHide?a:a.css({visibility:"visible"})},setPosition:function(a,b){a.rzsp=b;var c={};return c[this.positionProperty]=Math.round(b)+"px",a.css(c),b},getDimension:function(a){var b=a[0].getBoundingClientRect();return this.options.vertical?a.rzsd=(b.bottom-b.top)*this.options.scale:a.rzsd=(b.right-b.left)*this.options.scale,a.rzsd},setDimension:function(a,b){a.rzsd=b;var c={};return c[this.dimensionProperty]=Math.round(b)+"px",a.css(c),b},sanitizeValue:function(a){return Math.min(Math.max(a,this.minValue),this.maxValue)},valueToPosition:function(a){var b=this.linearValueToPosition;this.options.customValueToPosition?b=this.options.customValueToPosition:this.options.logScale&&(b=this.logValueToPosition),a=this.sanitizeValue(a);var c=b(a,this.minValue,this.maxValue)||0;return this.options.rightToLeft&&(c=1-c),c*this.maxPos},linearValueToPosition:function(a,b,c){var d=c-b;return(a-b)/d},logValueToPosition:function(a,b,c){a=Math.log(a),b=Math.log(b),c=Math.log(c);var d=c-b;return(a-b)/d},positionToValue:function(a){var b=a/this.maxPos;this.options.rightToLeft&&(b=1-b);var c=this.linearPositionToValue;return this.options.customPositionToValue?c=this.options.customPositionToValue:this.options.logScale&&(c=this.logPositionToValue),c(b,this.minValue,this.maxValue)||0},linearPositionToValue:function(a,b,c){return a*(c-b)+b},logPositionToValue:function(a,b,c){b=Math.log(b),c=Math.log(c);var d=a*(c-b)+b;return Math.exp(d)},getEventXY:function(a){var b=this.options.vertical?"clientY":"clientX";return void 0!==a[b]?a[b]:void 0===a.originalEvent?a.touches[0][b]:a.originalEvent.touches[0][b]},getEventPosition:function(a){var b=this.sliderElem.rzsp,c=0;return c=this.options.vertical?-this.getEventXY(a)+b:this.getEventXY(a)-b,c*this.options.scale-this.handleHalfDim},getEventNames:function(a){var b={moveEvent:"",endEvent:""};return a.touches||void 0!==a.originalEvent&&a.originalEvent.touches?(b.moveEvent="touchmove",b.endEvent="touchend"):(b.moveEvent="mousemove",b.endEvent="mouseup"),b},getNearestHandle:function(a){if(!this.range)return this.minH;var b=this.getEventPosition(a),c=Math.abs(b-this.minH.rzsp),d=Math.abs(b-this.maxH.rzsp);return d>c?this.minH:c>d?this.maxH:this.options.rightToLeft?b>this.minH.rzsp?this.minH:this.maxH:b<this.minH.rzsp?this.minH:this.maxH},focusElement:function(a){var b=0;a[b].focus()},bindEvents:function(){var b,c,d;this.options.draggableRange?(b="rzSliderDrag",c=this.onDragStart,d=this.onDragMove):(b="lowValue",c=this.onStart,d=this.onMove),this.options.onlyBindHandles||(this.selBar.on("mousedown",a.bind(this,c,null,b)),this.selBar.on("mousedown",a.bind(this,d,this.selBar))),this.options.draggableRangeOnly?(this.minH.on("mousedown",a.bind(this,c,null,b)),this.maxH.on("mousedown",a.bind(this,c,null,b))):(this.minH.on("mousedown",a.bind(this,this.onStart,this.minH,"lowValue")),this.range&&this.maxH.on("mousedown",a.bind(this,this.onStart,this.maxH,"highValue")),this.options.onlyBindHandles||(this.fullBar.on("mousedown",a.bind(this,this.onStart,null,null)),this.fullBar.on("mousedown",a.bind(this,this.onMove,this.fullBar)),this.ticks.on("mousedown",a.bind(this,this.onStart,null,null)),this.ticks.on("mousedown",a.bind(this,this.onTickClick,this.ticks)))),this.options.onlyBindHandles||(this.selBar.on("touchstart",a.bind(this,c,null,b)),this.selBar.on("touchstart",a.bind(this,d,this.selBar))),this.options.draggableRangeOnly?(this.minH.on("touchstart",a.bind(this,c,null,b)),this.maxH.on("touchstart",a.bind(this,c,null,b))):(this.minH.on("touchstart",a.bind(this,this.onStart,this.minH,"lowValue")),this.range&&this.maxH.on("touchstart",a.bind(this,this.onStart,this.maxH,"highValue")),this.options.onlyBindHandles||(this.fullBar.on("touchstart",a.bind(this,this.onStart,null,null)),this.fullBar.on("touchstart",a.bind(this,this.onMove,this.fullBar)),this.ticks.on("touchstart",a.bind(this,this.onStart,null,null)),this.ticks.on("touchstart",a.bind(this,this.onTickClick,this.ticks)))),this.options.keyboardSupport&&(this.minH.on("focus",a.bind(this,this.onPointerFocus,this.minH,"lowValue")),this.range&&this.maxH.on("focus",a.bind(this,this.onPointerFocus,this.maxH,"highValue")))},unbindEvents:function(){this.minH.off(),this.maxH.off(),this.fullBar.off(),this.selBar.off(),this.ticks.off()},onStart:function(b,d,e){var f,g,h=this.getEventNames(e);e.stopPropagation(),e.preventDefault(),this.calcViewDimensions(),b?this.tracking=d:(b=this.getNearestHandle(e),this.tracking=b===this.minH?"lowValue":"highValue"),b.addClass("rz-active"),this.options.keyboardSupport&&this.focusElement(b),f=a.bind(this,this.dragging.active?this.onDragMove:this.onMove,b),g=a.bind(this,this.onEnd,f),c.on(h.moveEvent,f),c.one(h.endEvent,g),this.callOnStart()},onMove:function(b,c,d){var e,f=this.getEventPosition(c),g=this.options.rightToLeft?this.minValue:this.maxValue,h=this.options.rightToLeft?this.maxValue:this.minValue;0>=f?e=h:f>=this.maxPos?e=g:(e=this.positionToValue(f),e=d&&a.isNumber(this.options.showTicks)?this.roundStep(e,this.options.showTicks):this.roundStep(e)),this.positionTrackingHandle(e)},onEnd:function(a,b){var d=this.getEventNames(b).moveEvent;this.options.keyboardSupport||(this.minH.removeClass("rz-active"),this.maxH.removeClass("rz-active"),this.tracking=""),this.dragging.active=!1,c.off(d,a),this.callOnEnd()},onTickClick:function(a,b){this.onMove(a,b,!0)},onPointerFocus:function(b,c){this.tracking=c,b.one("blur",a.bind(this,this.onPointerBlur,b)),b.on("keydown",a.bind(this,this.onKeyboardEvent)),b.on("keyup",a.bind(this,this.onKeyUp)),this.firstKeyDown=!0,b.addClass("rz-active"),this.currentFocusElement={pointer:b,ref:c}},onKeyUp:function(){this.firstKeyDown=!0,this.callOnEnd()},onPointerBlur:function(a){a.off("keydown"),a.off("keyup"),this.tracking="",a.removeClass("rz-active"),this.currentFocusElement=null},getKeyActions:function(a){var b=a+this.step,c=a-this.step,d=a+this.valueRange/10,e=a-this.valueRange/10,f={UP:b,DOWN:c,LEFT:c,RIGHT:b,PAGEUP:d,PAGEDOWN:e,HOME:this.minValue,END:this.maxValue};return this.options.rightToLeft&&(f.LEFT=b,f.RIGHT=c,this.options.vertical&&(f.UP=c,f.DOWN=b)),f},onKeyboardEvent:function(a){var c=this[this.tracking],d=a.keyCode||a.which,e={38:"UP",40:"DOWN",37:"LEFT",39:"RIGHT",33:"PAGEUP",34:"PAGEDOWN",36:"HOME",35:"END"},f=this.getKeyActions(c),g=e[d],h=f[g];if(null!=h&&""!==this.tracking){a.preventDefault(),this.firstKeyDown&&(this.firstKeyDown=!1,this.callOnStart());var i=this;b(function(){var a=i.roundStep(i.sanitizeValue(h));if(i.options.draggableRangeOnly){var b,c,d=i.highValue-i.lowValue;"lowValue"===i.tracking?(b=a,c=a+d,c>i.maxValue&&(c=i.maxValue,b=c-d)):(c=a,b=a-d,b<i.minValue&&(b=i.minValue,c=b+d)),i.positionTrackingBar(b,c)}else i.positionTrackingHandle(a)})}},onDragStart:function(a,b,c){var d=this.getEventPosition(c);this.dragging={active:!0,value:this.positionToValue(d),difference:this.highValue-this.lowValue,lowLimit:this.options.rightToLeft?this.minH.rzsp-d:d-this.minH.rzsp,highLimit:this.options.rightToLeft?d-this.maxH.rzsp:this.maxH.rzsp-d},this.onStart(a,b,c)},getValue:function(a,b,c,d){var e=this.options.rightToLeft,f=null;return f="min"===a?c?d?e?this.minValue:this.maxValue-this.dragging.difference:e?this.maxValue-this.dragging.difference:this.minValue:e?this.positionToValue(b+this.dragging.lowLimit):this.positionToValue(b-this.dragging.lowLimit):c?d?e?this.minValue+this.dragging.difference:this.maxValue:e?this.maxValue:this.minValue+this.dragging.difference:e?this.positionToValue(b+this.dragging.lowLimit)+this.dragging.difference:this.positionToValue(b-this.dragging.lowLimit)+this.dragging.difference,this.roundStep(f)},onDragMove:function(a,b){var c,d,e,f,g,h,i,j,k=this.getEventPosition(b);if(this.options.rightToLeft?(e=this.dragging.lowLimit,f=this.dragging.highLimit,i=this.maxH,j=this.minH):(e=this.dragging.highLimit,f=this.dragging.lowLimit,i=this.minH,j=this.maxH),g=f>=k,h=k>=this.maxPos-e,g){if(0===i.rzsp)return;c=this.getValue("min",k,!0,!1),d=this.getValue("max",k,!0,!1)}else if(h){if(j.rzsp===this.maxPos)return;d=this.getValue("max",k,!0,!0),c=this.getValue("min",k,!0,!0)}else c=this.getValue("min",k,!1),d=this.getValue("max",k,!1);this.positionTrackingBar(c,d)},positionTrackingBar:function(a,b){null!=this.options.minLimit&&a<this.options.minLimit&&(a=this.options.minLimit,b=a+this.dragging.difference),null!=this.options.maxLimit&&b>this.options.maxLimit&&(b=this.options.maxLimit,a=b-this.dragging.difference),this.lowValue=a,this.highValue=b,this.applyLowValue(),this.range&&this.applyHighValue(),this.applyModel(),this.updateHandles("lowValue",this.valueToPosition(a)),this.updateHandles("highValue",this.valueToPosition(b))},positionTrackingHandle:function(a){var b=!1;a=this.applyMinMaxLimit(a),this.range&&(this.options.pushRange?(a=this.applyPushRange(a),b=!0):(this.options.noSwitching&&("lowValue"===this.tracking&&a>this.highValue?a=this.applyMinMaxRange(this.highValue):"highValue"===this.tracking&&a<this.lowValue&&(a=this.applyMinMaxRange(this.lowValue))),a=this.applyMinMaxRange(a),"lowValue"===this.tracking&&a>this.highValue?(this.lowValue=this.highValue,this.applyLowValue(),this.updateHandles(this.tracking,this.maxH.rzsp),this.updateAriaAttributes(),this.tracking="highValue",this.minH.removeClass("rz-active"),this.maxH.addClass("rz-active"),this.options.keyboardSupport&&this.focusElement(this.maxH),b=!0):"highValue"===this.tracking&&a<this.lowValue&&(this.highValue=this.lowValue,this.applyHighValue(),this.updateHandles(this.tracking,this.minH.rzsp),this.updateAriaAttributes(),this.tracking="lowValue",this.maxH.removeClass("rz-active"),this.minH.addClass("rz-active"),this.options.keyboardSupport&&this.focusElement(this.minH),b=!0))),this[this.tracking]!==a&&(this[this.tracking]=a,"lowValue"===this.tracking?this.applyLowValue():this.applyHighValue(),this.updateHandles(this.tracking,this.valueToPosition(a)),this.updateAriaAttributes(),b=!0),b&&this.applyModel()},applyMinMaxLimit:function(a){return null!=this.options.minLimit&&a<this.options.minLimit?this.options.minLimit:null!=this.options.maxLimit&&a>this.options.maxLimit?this.options.maxLimit:a},applyMinMaxRange:function(a){var b="lowValue"===this.tracking?this.highValue:this.lowValue,c=Math.abs(a-b);return null!=this.options.minRange&&c<this.options.minRange?"lowValue"===this.tracking?this.highValue-this.options.minRange:this.lowValue+this.options.minRange:null!=this.options.maxRange&&c>this.options.maxRange?"lowValue"===this.tracking?this.highValue-this.options.maxRange:this.lowValue+this.options.maxRange:a},applyPushRange:function(a){var b="lowValue"===this.tracking?this.highValue-a:a-this.lowValue,c=null!==this.options.minRange?this.options.minRange:this.options.step,d=this.options.maxRange;return c>b?("lowValue"===this.tracking?(this.highValue=Math.min(a+c,this.maxValue),a=this.highValue-c,this.applyHighValue(),this.updateHandles("highValue",this.valueToPosition(this.highValue))):(this.lowValue=Math.max(a-c,this.minValue),a=this.lowValue+c,this.applyLowValue(),this.updateHandles("lowValue",this.valueToPosition(this.lowValue))),this.updateAriaAttributes()):null!==d&&b>d&&("lowValue"===this.tracking?(this.highValue=a+d,this.applyHighValue(),this.updateHandles("highValue",this.valueToPosition(this.highValue))):(this.lowValue=a-d,this.applyLowValue(),this.updateHandles("lowValue",this.valueToPosition(this.lowValue))),this.updateAriaAttributes()),a},applyModel:function(){this.internalChange=!0,this.scope.$apply(),this.callOnChange(),this.internalChange=!1},callOnStart:function(){if(this.options.onStart){var a=this,b="lowValue"===this.tracking?"min":"max";this.scope.$evalAsync(function(){a.options.onStart(a.options.id,a.scope.rzSliderModel,a.scope.rzSliderHigh,b)})}},callOnChange:function(){if(this.options.onChange){var a=this,b="lowValue"===this.tracking?"min":"max";this.scope.$evalAsync(function(){a.options.onChange(a.options.id,a.scope.rzSliderModel,a.scope.rzSliderHigh,b)})}},callOnEnd:function(){if(this.options.onEnd){var a=this,b="lowValue"===this.tracking?"min":"max";this.scope.$evalAsync(function(){a.options.onEnd(a.options.id,a.scope.rzSliderModel,a.scope.rzSliderHigh,b)})}this.scope.$emit("slideEnded")}},h}]).directive("rzslider",["RzSlider",function(a){return{restrict:"AE",replace:!0,scope:{rzSliderModel:"=?",rzSliderHigh:"=?",rzSliderOptions:"&?",rzSliderTplUrl:"@"},templateUrl:function(a,b){return b.rzSliderTplUrl||"rzSliderTpl.html"},link:function(b,c){b.slider=new a(b,c)}}}]);return b.run(["$templateCache",function(a){a.put("rzSliderTpl.html",'<div class=rzslider><span class=rz-bar-wrapper><span class=rz-bar></span></span> <span class=rz-bar-wrapper><span class="rz-bar rz-selection" ng-style=barStyle></span></span> <span class="rz-pointer rz-pointer-min" ng-style=minPointerStyle></span> <span class="rz-pointer rz-pointer-max" ng-style=maxPointerStyle></span> <span class="rz-bubble rz-limit rz-floor"></span> <span class="rz-bubble rz-limit rz-ceil"></span> <span class=rz-bubble></span> <span class=rz-bubble></span> <span class=rz-bubble></span><ul ng-show=showTicks class=rz-ticks><li ng-repeat="t in ticks track by $index" class=rz-tick ng-class="{\'rz-selected\': t.selected}" ng-style=t.style ng-attr-uib-tooltip="{{ t.tooltip }}" ng-attr-tooltip-placement={{t.tooltipPlacement}} ng-attr-tooltip-append-to-body="{{ t.tooltip ? true : undefined}}"><span ng-if="t.value != null" class=rz-tick-value ng-attr-uib-tooltip="{{ t.valueTooltip }}" ng-attr-tooltip-placement={{t.valueTooltipPlacement}}>{{ t.value }}</span> <span ng-if="t.legend != null" class=rz-tick-legend>{{ t.legend }}</span></li></ul></div>');
}]),b.name});
angular.module('com.bmc.arsys.rx.standardlib.utils').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('scripts/view-components/chatbot/com-vyom-vyomlib-chatbot-design.directive.html',
    "<h1>Chatbot</h1>"
  );


  $templateCache.put('scripts/view-components/chatbot/com-vyom-vyomlib-chatbot.directive.html',
    "<!DOCTYPE html><html><head><meta charset=\"ISO-8859-1\"><title>Vyom Chatbot</title></head><body><!-- <script id=\"rx-view-loader-script\" src=\"view-loader.js\"></script> --><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script><!-- <script id=\"rx-view-loader-script\" src=\"https://vyom-platform.trybmc.com/innovationsuite/view-loader.js\"></script> --> <button class=\"rx-view-loader-button\" data-bot-id=\"IDGADG1AANVNNAPS90V8PRLVOBB9GO\"></button><!--  <button class=\"rx-view-loader-button\" data-rsso-server=\"https://vyom-rsso2.trybmc.com\"></button>\r" +
    "\n" +
    " --><script type=\"text/javascript\">rxViewLoader.onRequestJwt(function () {\r" +
    "\n" +
    "             // return JWT token\r" +
    "\n" +
    "         });</script></body></html>"
  );


  $templateCache.put('scripts/view-components/custom-blog/com-vyom-vyomlib-custom-blog-design.directive.html',
    "<span class=\"d-icon-book_o\" style=\"font-size: 100px;text-align: center\"></span>"
  );


  $templateCache.put('scripts/view-components/custom-blog/com-vyom-vyomlib-custom-blog.directive.html',
    "<html><head></head><body><div><div><!-- below code is for template of CKEDITOR which will be displayed under div id=\"{{editorID}}  --><!-- and 2 buttons, save and edit --><div id=\"{{editorID}}\" contenteditable=\"true\"><p>Here goes the initial content of the editor.</p></div></div><div><button type=\"button\" class=\"d-button d-button_primary\" ng-click=\"updateHTML();\">Save</button> <button type=\"button\" class=\"d-button d-button_primary\">Edit</button></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/custom-blog/com-vyom-vyomlib-inspector-custom-blog-fields.directive.html',
    "<!-- below code is used to populate the options in design phase under General section --><!-- this populates the fiend lables of record defination selected --><label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div ng-if=\"data.fields.length\"><select class=\"select\" ng-options=\"field.name for field in data.fields track by field.id \" ng-model=\"data.selectedField\"></select></div><div ng-if=\"!data.fields.length\">Record Definition is must.</div>"
  );


  $templateCache.put('scripts/view-components/custom-blog/com-vyom-vyomlib-inspector-custom-blog-guid.directive.html',
    "<!-- below code is used to populate the options in design phase under General section --><!-- this populates the GUID of record defination selected --><label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div ng-if=\"data.fields.length\"><select class=\"select\" ng-options=\"field[179] for field in data.fields \" ng-model=\"data.selectedField\"></select></div><div ng-if=\"!data.fields.length\">Records not available.</div>"
  );


  $templateCache.put('scripts/view-components/custom-card/com-vyom-vyomlib-custom-card-design.directive.html',
    "<h4>Custom Card</h4>"
  );


  $templateCache.put('scripts/view-components/custom-card/com-vyom-vyomlib-custom-card.directive.html',
    "<style>.tile{float:left; margin:0 5px 0 0; padding:2px; }\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .container {\r" +
    "\n" +
    "        padding: 2px 16px;\r" +
    "\n" +
    "\r" +
    "\n" +
    "    }</style><!--<a href=\"{{URL}}\" target=\"_blank\">--><div style=\"height: {{Height}}px; width: {{Width}}px; background-color:{{Colour}}\" class=\"tile card\"><p><img src=\"/com.vyom.vyomlib/resources/img/{{Icon}}\" style=\"width:{{ImgWidth}}px;height:{{ImgHeight}}px\"></p><h6 align=\"center\" style=\"color: white\">{{Text}}</h6><div class=\"container\"></div></div><!--</a>-->"
  );


  $templateCache.put('scripts/view-components/custom-html/com-vyom-vyomlib-custom-html-design.directive.html',
    "<h4>CustomHTMl</h4>"
  );


  $templateCache.put('scripts/view-components/custom-html/com-vyom-vyomlib-custom-html.directive.html',
    "<html><head><script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js\"></script><script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-sanitize.js\"></script></head><body><p ng-bind-html=\"customHTMLscript\"></p></body></html>"
  );


  $templateCache.put('scripts/view-components/dashboard1/com-vyom-vyomlib-dashboard1-design.directive.html',
    "<!DOCTYPE html><html><body><img src=\"/com.vyom.vyomlib/resources/MyPage_Vyom/images/ViewComp/MyPage_Vyomlabs1.png\"><!--<img src=/com.vyom.vyomlib/resources/MyPage_Vyom/images/ViewComp/MyPage_Vyomlabs.png width=\"200\" height=\"115\">    --></body></html>"
  );


  $templateCache.put('scripts/view-components/dashboard1/com-vyom-vyomlib-dashboard1.directive.html',
    "<!DOCTYPE html><html lang=\"en\"><head><title>MyPage</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script><!-- Font Awesome --><link href=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/css/font-awesome.min.css\" rel=\"stylesheet\"><!-- NProgress --><!-- <link href=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/css/nprogress.css\" rel=\"stylesheet\"> --><!-- iCheck --><link href=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/css/green.css\" rel=\"stylesheet\"><!-- bootstrap-progressbar --><link href=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/css/bootstrap-progressbar-3.3.4.min.css\" rel=\"stylesheet\"><!-- JQVMap --><link href=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/css/jqvmap.min.css\" rel=\"stylesheet\"><!-- bootstrap-daterangepicker --><link href=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/css/daterangepicker.css\" rel=\"stylesheet\"><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/css/myPage.css\"></head><body><div class=\"container\"><div class=\"row\"><div class=\"widgetTable\"><table style=\"margin-left: 4%\"><tr><td id=\"profileWidgetTD\"><div class=\"widget panelbox\"><div class=\"profile\" ng-if=\"logedInUser\"><p class=\"profile-image\" style=\"text-align:center\"><img src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/icons/personicon.png\" align=\"middle\" style=\"border-radius: 50%\"></p><h3 align=\"center\" style=\"color: black\" class=\"name\">{{logedInUser[11093002]}}</h3><p style=\"text-align:center; font-size: 12px\" class=\"des\">{{logedInUser[11093003]}}<br>{{logedInUser[11093004]}}<br></p><hr><p></p><p style=\"text-align:center; font-size: 12px\" class=\"des\">Contact Info: {{logedInUser[11093005]}}<br>{{logedInUser[8]}}</p></div></div></td><td><div class=\"widget panelbox\"><div class=\"financial\"><img class=\"img-responsive icons\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/icons/financial.png\" alt=\"\" title=\"Finance\"><p class=\"title\">My Financials</p><div id=\"myfinancials\"><!--Payslip HTML--><div id=\"quicklink\"><div id=\"Payslip_widget\" class=\"quicklink\"><a data-fancybox=\"\" data-type=\"iframe\" id=\"ohrcustom\" href=\"https://soagnpc.intranet.genpact.com/widget/oraclepayroll/resources/pages/oraclePayroll.jsp?id=ND1WH%2BkWowmB7HdPPgJTow%3D%3D\"><img class=\"img-responsive\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/quicklinks/payslip.png\" alt=\"payslip\"></a></div></div><!--Payslip HTML--><!--Payslip HTML--><div id=\"quicklink\"><div id=\"Payslip_widget\" class=\"quicklink\"><a data-fancybox=\"\" data-type=\"iframe\" id=\"ohrcustom\" href=\"https://soagnpc.intranet.genpact.com/widget/oraclepayroll/resources/pages/oraclePayroll.jsp?id=ND1WH%2BkWowmB7HdPPgJTow%3D%3D\"><img class=\"img-responsive\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/quicklinks/address.png\" alt=\"payslip\"></a></div></div><!--Payslip HTML--><!--Payslip HTML--><div id=\"quicklink\"><div id=\"Payslip_widget\" class=\"quicklink\"><a data-fancybox=\"\" data-type=\"iframe\" id=\"ohrcustom\" href=\"https://soagnpc.intranet.genpact.com/widget/oraclepayroll/resources/pages/oraclePayroll.jsp?id=ND1WH%2BkWowmB7HdPPgJTow%3D%3D\"><img class=\"img-responsive\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/quicklinks/PF.png\" alt=\"payslip\"></a></div></div><!--Payslip HTML--><!--Payslip HTML--><div id=\"quicklink\"><div id=\"Payslip_widget\" class=\"quicklink\"><a data-fancybox=\"\" data-type=\"iframe\" id=\"ohrcustom\" href=\"https://soagnpc.intranet.genpact.com/widget/oraclepayroll/resources/pages/oraclePayroll.jsp?id=ND1WH%2BkWowmB7HdPPgJTow%3D%3D\"><img class=\"img-responsive\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/quicklinks/employeement.png\" alt=\"payslip\"></a></div></div><!--Payslip HTML--><!--Payslip HTML--><div id=\"quicklink\"><div id=\"Payslip_widget\" class=\"quicklink\"><a data-fancybox=\"\" data-type=\"iframe\" id=\"ohrcustom\" href=\"https://soagnpc.intranet.genpact.com/widget/oraclepayroll/resources/pages/oraclePayroll.jsp?id=ND1WH%2BkWowmB7HdPPgJTow%3D%3D\"><img class=\"img-responsive\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/quicklinks/bonus1.png\" alt=\"payslip\"></a></div></div><div id=\"quicklink\"><div id=\"Payslip_widget\" class=\"quicklink\"><a data-fancybox=\"\" data-type=\"iframe\" id=\"ohrcustom\" href=\"https://soagnpc.intranet.genpact.com/widget/oraclepayroll/resources/pages/oraclePayroll.jsp?id=ND1WH%2BkWowmB7HdPPgJTow%3D%3D\"><img class=\"img-responsive\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/quicklinks/softloan.png\" alt=\"payslip\"></a></div></div></div></div></div></td><td><div class=\"panelbox\"><img alt=\"suggestion_icon\" class=\"img-responsive icons\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/icons/faq.png\"><p class=\"title\" style=\"margin-bottom: 0px\">Ask for Help</p><!--Help HTML--><div id=\"FAQ\"><a href=\"https://hr.genpact.com/hr/peopleFirst/?env=cpub\"><img src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/chatbot.jpg\" class=\"chatbotimg\"></a><br><a href=\"https://genpact-myit.onbmc.com/ux/\"><img src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/helpmate2.png\" class=\"helpmateimg\"></a><br><a href=\"https://genpactonline.sharepoint.com/sites/Ess-Beta/FAQDocuments/\"><p class=\"policieshelp\">Vyomlabs Policies</p></a><a href=\"https://genpactonline.sharepoint.com/sites/ESS_QA/SitePages/Newsfeed.aspx\"><p class=\"suggestionbox\">Suggestion Box</p></a></div></div></td><!-- <td>\r" +
    "\n" +
    "							<div id=\"ER1\" class=\"panelbox ER\">\r" +
    "\n" +
    "								<div class=\"ER-main\" style=\"padding-left: 8px;\">\r" +
    "\n" +
    "									<img alt=\"suggestion_icon\" class=\"img-responsive icons\"\r" +
    "\n" +
    "										src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/icons/ERicon.png\">\r" +
    "\n" +
    "									<p class=\"title\">Employee Reimbursement\r" +
    "\n" +
    "										<a id=\"erhelp\" href=\"#\">\r" +
    "\n" +
    "											<i class=\"fa fa-question-circle ERhelp\" title=\"Ask for Help\"\r" +
    "\n" +
    "												aria-hidden=\"true\"></i>\r" +
    "\n" +
    "										</a>\r" +
    "\n" +
    "										<a id=\"ERReport\" href=\"#\">\r" +
    "\n" +
    "											<i class=\"fa fa-file-excel-o ERadmin\" title=\"ER Reports\"\r" +
    "\n" +
    "												aria-hidden=\"true\"></i>\r" +
    "\n" +
    "										</a>\r" +
    "\n" +
    "										<a id=\"ERadminconsole\" href=\"#\">\r" +
    "\n" +
    "											<i class=\"fa fa fa-user-o ERadminconsole\" title=\"Admin Console\"\r" +
    "\n" +
    "												aria-hidden=\"true\"></i>\r" +
    "\n" +
    "										</a>\r" +
    "\n" +
    "									</p>\r" +
    "\n" +
    "									<div id=\"ER\">\r" +
    "\n" +
    "										<div class=\"ERhexbox\">\r" +
    "\n" +
    "											<a href=\"#\">\r" +
    "\n" +
    "												<div id=\"pendingapproval\" class=\"pendingapproval\">\r" +
    "\n" +
    "													<br>\r" +
    "\n" +
    "													<b>12</b>\r" +
    "\n" +
    "													<p>Pending for Approval</p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a>\r" +
    "\n" +
    "											<a href=\"#\">\r" +
    "\n" +
    "												<div id=\"pendingclarification\" class=\"pendingclarification\">\r" +
    "\n" +
    "													<br>\r" +
    "\n" +
    "													<b>03</b>\r" +
    "\n" +
    "													<p>Pending Clarification</p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a>\r" +
    "\n" +
    "										</div>\r" +
    "\n" +
    "										<div class=\"ERname\">\r" +
    "\n" +
    "											<div class=\"list-type3\">\r" +
    "\n" +
    "												<ol>\r" +
    "\n" +
    "													<li id=\"ERapproval\" class=\"ERli\">\r" +
    "\n" +
    "														<a href=\"#\">\r" +
    "\n" +
    "															ER Approval Form\r" +
    "\n" +
    "														</a>\r" +
    "\n" +
    "													</li>\r" +
    "\n" +
    "													<li id=\"myapproval\" class=\"ERli\">\r" +
    "\n" +
    "														<a href=\"#\">\r" +
    "\n" +
    "															My Approval Requests\r" +
    "\n" +
    "														</a>\r" +
    "\n" +
    "													</li>\r" +
    "\n" +
    "													<li id=\"claimsubmission\" class=\"ERli\">\r" +
    "\n" +
    "														<a href=\"#\">\r" +
    "\n" +
    "															Claim Submission\r" +
    "\n" +
    "														</a>\r" +
    "\n" +
    "													</li>\r" +
    "\n" +
    "													<li id=\"claimrequest\" class=\"ERli\">\r" +
    "\n" +
    "														<a href=\"#\">\r" +
    "\n" +
    "															My Claim Requests\r" +
    "\n" +
    "														</a>\r" +
    "\n" +
    "													</li>\r" +
    "\n" +
    "													<li id=\"approvaldelegation\" class=\"ERli\">\r" +
    "\n" +
    "														<a href=\"#\">\r" +
    "\n" +
    "															Delegation\r" +
    "\n" +
    "														</a>\r" +
    "\n" +
    "													</li>\r" +
    "\n" +
    "												</ol>\r" +
    "\n" +
    "											</div>\r" +
    "\n" +
    "										</div>\r" +
    "\n" +
    "									</div>\r" +
    "\n" +
    "								</div> \r" +
    "\n" +
    "							</div>\r" +
    "\n" +
    "						</td>--></tr><tr><td><link href=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/css/custom.min.css\" rel=\"stylesheet\"><div class=\"nav-md\"><div class=\"container body\"><div class=\"main_container\"><!-- page content --><div role=\"main\"><div class=\"row\"><div class=\"col-md-4 col-sm-4\" style=\"width: 480px;height: 324px\"><div class=\"x_panel tile fixed_height_340\" style=\"height: 325px\"><div class=\"x_title\"><h2 style=\"color: #0f548c\">My Trainings</h2><ul class=\"nav navbar-right panel_toolbox\"><li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a><div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\"><a class=\"dropdown-item\" href=\"#\">Settings 1</a> <a class=\"dropdown-item\" href=\"#\">Settings 2</a></div></li><li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a></li></ul><div class=\"clearfix\"></div></div><div class=\"x_content\"><div class=\"dashboard-widget-content\"><ul class=\"quick-list\"><li><i class=\"fa fa-calendar-o\"></i> <a href=\"#\"></a></li><li><i class=\"fa fa-bars\"></i> <a href=\"#\">Java - 18%</a></li><li><i class=\"fa fa-bar-chart\"></i> <a href=\"#\">Python - 44%</a></li><li><i class=\"fa fa-line-chart\"></i> <a href=\"#\">Helix Platform - 62%</a></li><li><i class=\"fa fa-bar-chart\"></i> <a href=\"#\">On Going Trainings</a></li><li><i class=\"fa fa-line-chart\"></i> <a href=\"#\">Start New</a></li></ul><div class=\"sidebar-widget\"><h4>Training Completion</h4><canvas width=\"150\" height=\"80\" id=\"chart_gauge_01\" class=\"\" style=\"width: 160px; height: 100px\"></canvas><div class=\"goal-wrapper\"><span id=\"gauge-text\" class=\"gauge-value pull-left\">40%</span><!--                          <span class=\"gauge-value pull-left\">%</span>--> <span id=\"goal-text\" class=\"goal-value pull-right\">6000%</span></div></div></div></div></div></div></div></div></div></div></div><div class=\"row\"><!-- jQuery --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.min.js\"></script><!-- Bootstrap --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/bootstrap.bundle.min.js\"></script><!-- FastClick --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/fastclick.js\"></script><!-- Chart.js --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/Chart.min.js\"></script><!-- gauge.js --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/gauge.min.js\"></script><!-- bootstrap-progressbar --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/bootstrap-progressbar.min.js\"></script><!-- iCheck --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/icheck.min.js\"></script><!-- Skycons --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/skycons.js\"></script><!-- Flot --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.flot.js\"></script><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.flot.pie.js\"></script><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.flot.time.js\"></script><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.flot.stack.js\"></script><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.flot.resize.js\"></script><!-- Flot plugins --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.flot.orderBars.js\"></script><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.flot.spline.min.js\"></script><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/curvedLines.js\"></script><!-- DateJS --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/date.js\"></script><!-- JQVMap --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.vmap.js\"></script><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.vmap.world.js\"></script><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/jquery.vmap.sampledata.js\"></script><!-- bootstrap-daterangepicker --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/moment.min.js\"></script><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/daterangepicker.js\"></script><!-- Custom Theme Scripts --><script src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/js/custom.min.js\"></script><!-- <td> --></div></td><td><div id=\"ER1\" class=\"panelbox ER\"><!--ER HTML--><div class=\"ER-main\"><img alt=\"suggestion_icon\" class=\"img-responsive icons custom-widet\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/png/016-web-management.png\" width=\"40px\"><p class=\"request-title\">VmWare <span class=\"glyphicon glyphicon-pencil glyphicon-icon\"></span> <a id=\"erhelp\" href=\"#\"><i class=\"fa fa-question-circle ERhelp\" title=\"Ask for Help\" aria-hidden=\"true\"></i> </a><a id=\"ERReport\" href=\"#\"><i class=\"fa fa-file-excel-o ERadmin\" title=\"ER Reports\" aria-hidden=\"true\"></i> </a><a id=\"ERadminconsole\" href=\"#\"><i class=\"fa fa fa-user-o ERadminconsole\" title=\"Admin Console\" aria-hidden=\"true\"></i></a></p><hr style=\"height:2px; color:grey\"><div id=\"ER\"><div class=\"ERhexbox\"><div class=\"requestDetails\" style=\"width: 378px\"><div class=\"description\" style=\"height: 192px\"><table id=\"Table1\" class=\"table table-striped table-hover custom-table\"><thead><th></th><th>Name</th><th>Description</th></thead><tbody ng-repeat=\"onedata in myData\"><tr><td><input type=\"checkbox\" name=\"\"></td><td>{{onedata['11093002']}}</td><td>{{onedata['8']}}</td></tr></tbody></table></div></div></div><div class=\"RequestButtons\"><div class=\"large-image\"><img src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/png/016-web-management.png\" style=\"margin-left: 142px\"></div><div class=\"buttons\"><div class=\"count\" style=\"margin-left: 132px\"><div class=\"active\"><b>03</b><br>Active</div><br><div class=\"disabled\"><b>12</b><br>Disabled</div></div></div></div><br><br><br><div class=\"request-button-bottom\"><button class=\"btn btn-primary\" id=\"btnGet\" ng-click=\"clickButton()\" style=\"margin-left: 10px;margin-right: 5px\">Request</button> <button class=\"btn btn-warning\" style=\"margin-left: 5px;margin-right: 5px\">Refresh</button><!-- <button class=\"btn btn-success\"\r" +
    "\n" +
    "												style=\"margin-left: 5px;margin-right: 5px;\">Launch</button>\r" +
    "\n" +
    "											<button class=\"btn btn-danger\"\r" +
    "\n" +
    "												style=\"margin-left: 5px;margin-right: 5px;\">Release</button> --></div></div></div><!--ER HTML--></div></td><td><div id=\"ER1\" class=\"panelbox ER\" style=\"margin-left: 12px\"><!--ER HTML--><div class=\"ER-main\"><img alt=\"suggestion_icon\" class=\"img-responsive icons custom-widet\" src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/png/016-web-management.png\" width=\"40px\"><p class=\"request-title\">VmWare <span class=\"glyphicon glyphicon-pencil glyphicon-icon\"></span> <a id=\"erhelp\" href=\"#\"><i class=\"fa fa-question-circle ERhelp\" title=\"Ask for Help\" aria-hidden=\"true\"></i> </a><a id=\"ERReport\" href=\"#\"><i class=\"fa fa-file-excel-o ERadmin\" title=\"ER Reports\" aria-hidden=\"true\"></i> </a><a id=\"ERadminconsole\" href=\"#\"><i class=\"fa fa fa-user-o ERadminconsole\" title=\"Admin Console\" aria-hidden=\"true\"></i></a></p><hr style=\"height:2px; color:grey\"><div id=\"ER\"><div class=\"ERhexbox\"><div class=\"requestDetails\" style=\"width: 378px\"><div class=\"description\" style=\"height: 250px\"><table id=\"Table1\" class=\"table table-striped table-hover custom-table\"><thead><th>Name</th><th>Description</th></thead><tbody ng-repeat=\"data in checkedData\"><tr><td>{{data[11093002]}}</td><!-- <td>{{onedata['11093002']}}</td>\r" +
    "\n" +
    "																<td>{{onedata['8']}}</td> --></tr></tbody></table></div></div></div><!-- <div class=\"RequestButtons\">\r" +
    "\n" +
    "											<div class=\"large-image\">\r" +
    "\n" +
    "												<img src=\"/com.vyom.vyomlib/resources/MyPage_Vyom1/images1/png/016-web-management.png\"\r" +
    "\n" +
    "													style=\"margin-left: 142px\">\r" +
    "\n" +
    "											</div>\r" +
    "\n" +
    "											<div class=\"buttons\">\r" +
    "\n" +
    "												<div class=\"count\" style=\"margin-left: 132px;\">\r" +
    "\n" +
    "													<div class=\"active\">\r" +
    "\n" +
    "														<b>03</b><br>Active\r" +
    "\n" +
    "													</div>\r" +
    "\n" +
    "													<br>\r" +
    "\n" +
    "													<div class=\"disabled\">\r" +
    "\n" +
    "														<b>12</b><br>Disabled\r" +
    "\n" +
    "													</div>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</div>\r" +
    "\n" +
    "										</div> --><!-- <br>\r" +
    "\n" +
    "										<br>\r" +
    "\n" +
    "										<br> --><div class=\"request-button-bottom\" style=\"float: right; margin-right: 15px\"><button class=\"btn btn-primary\" id=\"btnGet\" ng-click=\"clickButton()\" style=\"margin-left: 5px\">Request</button><br><button class=\"btn btn-warning\" style=\"margin-left: 5px\">Refresh</button><br><button class=\"btn btn-success\" style=\"margin-left: 5px\">Launch</button><br><button class=\"btn btn-danger\" style=\"margin-left: 5px\">Release</button></div></div></div><!--ER HTML--></div></td><!-- </td> --></tr></table></div></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/draggable/com-vyom-vyomlib-kanban1-design.directive.html',
    "<h4>Kanban1</h4>"
  );


  $templateCache.put('scripts/view-components/draggable/com-vyom-vyomlib-kanban1.directive.html',
    "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"><title>Kanban</title><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban1/dist/jkanban4.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban1/dist/jkanban_form.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban1/dist/card_layout1.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban1/dist/jkanban_material_popup1.css\"><script src=\"/com.vyom.vyomlib/resources/kanban1/dist/jkanban.js\"></script></head><style>body {\r" +
    "\n" +
    "        font-family: \"Lato\";\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        padding: 0;\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        overflow:overlay;\r" +
    "\n" +
    "\r" +
    "\n" +
    "        \r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .modal.fade .modal-dialog {\r" +
    "\n" +
    "    transition: -webkit-transform .3s ease-out;\r" +
    "\n" +
    "    transition: transform .3s ease-out;\r" +
    "\n" +
    "    transition: transform .3s ease-out,-webkit-transform .3s ease-out;\r" +
    "\n" +
    "    -webkit-transform: translate(0,-50px);\r" +
    "\n" +
    "    transform: translate(0,-50px);\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .fade:not(.show){\r" +
    "\n" +
    "        opacity: 100%;\r" +
    "\n" +
    "        background: #0c0c0c26;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      #myKanban {\r" +
    "\n" +
    "        overflow-x: auto;\r" +
    "\n" +
    "        padding: 20px 0;\r" +
    "\n" +
    "        /* background-color: #6d6d6d; */\r" +
    "\n" +
    "        border-top-style: groove;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "      .bkgclr\r" +
    "\n" +
    "      {\r" +
    "\n" +
    "        background-color: #6d6d6d;\r" +
    "\n" +
    "        height: 1000px;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .success {\r" +
    "\n" +
    "        background: #00b961;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .info {\r" +
    "\n" +
    "        background: #2a265f;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .warning {\r" +
    "\n" +
    "        background: #f4ce46;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .error {\r" +
    "\n" +
    "        background: #fb7d44;\r" +
    "\n" +
    "      }</style><body><div><div id=\"myKanban\"></div><div><div class=\"email\" onclick=\"this.classList.add('expand')\"><div class=\"from\"><div class=\"from-contents\"><div class=\"avatar me\"></div><div class=\"name\">+ New Ticket</div></div></div><div class=\"to\"><div class=\"to-contents\"><div class=\"top\"><div class=\"avatar-large me\"></div><div class=\"name-large\">New Ticket</div><div class=\"x-touch\" onclick=\"document.querySelector('.email').classList.remove('expand');event.stopPropagation();\"><div class=\"x\"><div class=\"line1\"></div><div class=\"line2\"></div></div></div></div><div class=\"bottom\"><div id=\"myForm1\"><div class=\"form-container\"><label><b>Requestor</b></label><input type=\"text\" id=\"searchTxt\" placeholder=\"Requestor\" name=\"email1\" required><label><b>Summary</b></label><input type=\"text\" placeholder=\"Enter Summary\" name=\"psw1\" required> <button class=\"btn btn-success\" id=\"addToDo\">Create</button></div><!-- <button type=\"button\" class=\"btn cancel\" onclick=\"closeForm()\">Close</button> --></div></div><div class=\"row\"></div></div></div></div></div></div><script>function openForm() {\r" +
    "\n" +
    "  document.getElementById(\"myForm\").style.display = \"block\";\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "function closeForm() {\r" +
    "\n" +
    "  document.getElementById(\"myForm\").style.display = \"none\";\r" +
    "\n" +
    "}</script><script>var KanbanTest = new jKanban({\r" +
    "\n" +
    "        element: \"#myKanban\",\r" +
    "\n" +
    "        gutter: \"10px\",\r" +
    "\n" +
    "        widthBoard: \"512px\",\r" +
    "\n" +
    "        itemHandleOptions:{\r" +
    "\n" +
    "          enabled: true,\r" +
    "\n" +
    "        },\r" +
    "\n" +
    "        click: function(el) {\r" +
    "\n" +
    "          console.log(\"Trigger on all items click!\");\r" +
    "\n" +
    "        },\r" +
    "\n" +
    "        dropEl: function(el, target, source, sibling){\r" +
    "\n" +
    "          console.log(target.parentElement.getAttribute('data-id'));\r" +
    "\n" +
    "          console.log(el, target, source, sibling)\r" +
    "\n" +
    "          // alert(target.parentElement.getAttribute('data-id'));\r" +
    "\n" +
    "          var parentcardid = target.parentElement.getAttribute('data-id');\r" +
    "\n" +
    "            if(parentcardid == \"_working\")\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "              window.clickButton1();\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "        },\r" +
    "\n" +
    "        \r" +
    "\n" +
    "       \r" +
    "\n" +
    "        addItemButton: true,\r" +
    "\n" +
    "        boards: [\r" +
    "\n" +
    "          {\r" +
    "\n" +
    "            id: \"_todo\",\r" +
    "\n" +
    "            title: \"New Tickets\",\r" +
    "\n" +
    "            class: \"info,good\",\r" +
    "\n" +
    "            dragTo: [\"_working\"],\r" +
    "\n" +
    "            item: [\r" +
    "\n" +
    "\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2321</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"new\"></div><span class=\"progress-text\">New</span></div><h6>Summary</h6><div id=\"demo1\" class=\"sumcontent\">Database Issue</h6><button class=\"btn1\" ng-click=\"ViewButton()\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2322</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"rejected\"></div><span class=\"progress-text\">Rejected</span></div><h6>Summary</h6><div class=\"sumcontent\">Email engine not working</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2324</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"completed\"></div><span class=\"progress-text\">Completed</span></div><h6>Summary</h6><div class=\"sumcontent\">Password Reset</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2325</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"new\"></div><span class=\"progress-text\">New</span></div><h6>Summary</h6><div class=\"sumcontent\">Lan issue</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2326</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"new\"></div><span class=\"progress-text\">New</span></div><h6>Summary</h6><div class=\"sumcontent\">Lan issue</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2327</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"new\"></div><span class=\"progress-text\">New</span></div><h6>Summary</h6><div class=\"sumcontent\">Lan issue</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            ]\r" +
    "\n" +
    "          },\r" +
    "\n" +
    "          {\r" +
    "\n" +
    "\r" +
    "\n" +
    "            id: \"_working\",\r" +
    "\n" +
    "            title: \"In Progress\",\r" +
    "\n" +
    "            class: \"warning\",\r" +
    "\n" +
    "            item: [\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2332</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2333</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2324</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2325</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "\r" +
    "\n" +
    "            ]\r" +
    "\n" +
    "\r" +
    "\n" +
    "          },\r" +
    "\n" +
    "          {\r" +
    "\n" +
    "            id: \"_done\",\r" +
    "\n" +
    "            title: \"Completed/Closed\",\r" +
    "\n" +
    "            class: \"success\",\r" +
    "\n" +
    "            dragTo: [\"_working\"],\r" +
    "\n" +
    "            item: [\r" +
    "\n" +
    "\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2323</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"completed\"></div><span class=\"progress-text\">Completed</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "\r" +
    "\n" +
    "            ]\r" +
    "\n" +
    "          }\r" +
    "\n" +
    "        ]\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "      var toDoButton = document.getElementById(\"addToDo\");\r" +
    "\n" +
    "      toDoButton.addEventListener(\"click\", function() {\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        // var div11 = document.createElement('div');\r" +
    "\n" +
    "        // div11.innerHTML = 'Hi there!';\r" +
    "\n" +
    "\r" +
    "\n" +
    "        KanbanTest.addElement(\"_todo\", {\r" +
    "\n" +
    "          \r" +
    "\n" +
    "          \r" +
    "\n" +
    "          title: '<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2321</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">Callbacks & Closures</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "                 \r" +
    "\n" +
    "        });\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "    \r" +
    "\n" +
    "      var toDoButton = document.getElementById(\"addToDo1\");\r" +
    "\n" +
    "      toDoButton.addEventListener(\"click\", function() {\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        KanbanTest.addElement(\"_todo\", {\r" +
    "\n" +
    "          title: \"Test Add\"\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        });\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "      var removeElement = document.getElementById(\"removeElement\");\r" +
    "\n" +
    "      removeElement.addEventListener(\"click\", function() {\r" +
    "\n" +
    "        KanbanTest.removeElement(\"_test_delete\");\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "\r" +
    "\n" +
    "      var allEle = KanbanTest.getBoardElements(\"_todo\");\r" +
    "\n" +
    "      allEle.forEach(function(item, index) {\r" +
    "\n" +
    "        //console.log(item);\r" +
    "\n" +
    "      });</script></body></html>"
  );


  $templateCache.put('scripts/view-components/iframe/com-vyom-vyomlib-iframe-design.directive.html',
    "<span class=\"d-icon-layout_preview\"></span>"
  );


  $templateCache.put('scripts/view-components/iframe/com-vyom-vyomlib-iframe.directive.html',
    "{{url}}::<br><iframe ng-src=\"{{trustSrc(url)}}\" width=\"100%\" height=\"500px\"></iframe>"
  );


  $templateCache.put('scripts/view-components/iframe2/com-vyom-vyomlib-iframe2-design.directive.html',
    "<span class=\"d-icon-lines_vertical\"></span>"
  );


  $templateCache.put('scripts/view-components/iframe2/com-vyom-vyomlib-iframe2.directive.html',
    "{{url}}::<br><html><body><div style=\"width:{{containerWidth}}px;height:{{containerHeight}}px;position:relative;border:1px solid black;overflow: hidden\"><iframe ng-src=\"{{trustSrc(url)}}\" style=\"position:absolute;width: {{iframeWidth}}px;height:{{iframeHeight}}px;top: {{iframeTop}}px;right: {{iframeRight}}px\" scrolling=\"no\" frameborder=\"no\"></iframe></div></body></html>"
  );


  $templateCache.put('scripts/view-components/kanban2/com-vyom-vyomlib-kanban2-design.directive.html',
    "<h4>Kanban2</h4>"
  );


  $templateCache.put('scripts/view-components/kanban2/com-vyom-vyomlib-kanban2.directive.html',
    "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\"><!-- <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"> --><!-- Sidebar --><!-- <script src=\"js/jquery.min.js\"></script> --><script src=\"/com.vyom.vyomlib/resources/kanban2/sidebar/js/popper.js\"></script><script src=\"/com.vyom.vyomlib/resources/kanban2/sidebar/js/bootstrap.min.js\"></script><script src=\"/com.vyom.vyomlib/resources/kanban2/sidebar/js/main.js\"></script><link href=\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"><!-- <link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban2/sidebar/css/style3.css\"> --><!-- Menubar --><!-- <link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban2/menubar/menu2.css\">\r" +
    "\n" +
    "    <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script> --><title>Kanban</title><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban2/dist/jkanban4.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban2/dist/jkanban_form.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban2/dist/card_layout1.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban2/dist/jkanban_material_popup1.css\"><script src=\"/com.vyom.vyomlib/resources/kanban2/dist/jkanban.js\"></script></head><style>body {\r" +
    "\n" +
    "        font-family: \"Lato\";\r" +
    "\n" +
    "        margin: 0;\r" +
    "\n" +
    "        padding: 0;\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        overflow:overlay;\r" +
    "\n" +
    "\r" +
    "\n" +
    "        \r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .modal.fade .modal-dialog {\r" +
    "\n" +
    "    transition: -webkit-transform .3s ease-out;\r" +
    "\n" +
    "    transition: transform .3s ease-out;\r" +
    "\n" +
    "    transition: transform .3s ease-out,-webkit-transform .3s ease-out;\r" +
    "\n" +
    "    -webkit-transform: translate(0,-50px);\r" +
    "\n" +
    "    transform: translate(0,-50px);\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .fade:not(.show){\r" +
    "\n" +
    "        opacity: 100%;\r" +
    "\n" +
    "        background: #0c0c0c26;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      #myKanban {\r" +
    "\n" +
    "        overflow-x: auto;\r" +
    "\n" +
    "        /* right: -2278px; */\r" +
    "\n" +
    "        position: relative;\r" +
    "\n" +
    "        top: -7px;\r" +
    "\n" +
    "        left: -5px;\r" +
    "\n" +
    "        padding: 7px 0;\r" +
    "\n" +
    "        /* background-color: #6d6d6d; */\r" +
    "\n" +
    "        /* border-top-style: groove; */\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .bkgclr\r" +
    "\n" +
    "      {\r" +
    "\n" +
    "        background-color: #6d6d6d;\r" +
    "\n" +
    "        height: 1000px;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .success {\r" +
    "\n" +
    "        background: #00b961;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .info {\r" +
    "\n" +
    "        background: #2a265f;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .warning {\r" +
    "\n" +
    "        background: #f4ce46;\r" +
    "\n" +
    "      }\r" +
    "\n" +
    "\r" +
    "\n" +
    "      .error {\r" +
    "\n" +
    "        background: #fb7d44;\r" +
    "\n" +
    "      }</style><body><!-- --------------------------------------------------------------------------------------------------- --><!-- --------------------------------------Menubar Start ------------------------------------------------- --><!-- --------------------------------------------------------------------------------------------------- --><!-- --------------------------------------Menubar End ------------------------------------------------- --><!-- --------------------------------------------------------------------------------------------------- --><!-- --------------------------------------Sidebar Start ------------------------------------------------- --><div class=\"wrapper d-flex align-items-stretch\"><nav id=\"sidebar\" class=\"active\"><div class=\"custom-menu\"><button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-primary\"><i class=\"fa fa-bars\"></i> <span class=\"sr-only\">Toggle Menu</span></button></div><div class=\"p-4\"><h1><a href=\"index.html\" class=\"logo\">Flash</a></h1><ul class=\"list-unstyled components mb-5\"><li class=\"active\"><a href=\"#\"><span class=\"fa fa-home mr-3\"></span> Cases</a></li><li><a href=\"#\"><span class=\"fa fa-user mr-3\"></span> About</a></li><li><a href=\"#\"><span class=\"fa fa-briefcase mr-3\"></span> Portfolio</a></li><!-- <li>\r" +
    "\n" +
    "              <a href=\"#\"><span class=\"fa fa-sticky-note mr-3\"></span> Blog</a>\r" +
    "\n" +
    "	          </li> --><li><a href=\"#\"><span class=\"fa fa-paper-plane mr-3\"></span> Contact</a></li></ul><div class=\"mb-5\"><h3 class=\"h6 mb-3\">Subscribe for newsletter</h3><form action=\"#\" class=\"subscribe-form\"><div class=\"form-group d-flex\"><div class=\"icon\"><span class=\"icon-paper-plane\"></span></div><input type=\"text\" class=\"form-control\" placeholder=\"Enter Email Address\"></div></form></div></div></nav><!-- Page Content  --><!-- --------------------------------------------------------------------------------------------------- --><!-- --------------------------------------Sidebar End ------------------------------------------------- --><div><div id=\"myKanban\"></div><div><div class=\"email\" onclick=\"this.classList.add('expand')\"><div class=\"from\"><div class=\"from-contents\"><div class=\"avatar me\"></div><div class=\"name\">+ Create Ticket</div></div></div><div class=\"to\"><div class=\"to-contents\"><div class=\"top\"><div class=\"avatar-large me\"></div><div class=\"name-large\">New Ticket</div><div class=\"x-touch\" onclick=\"document.querySelector('.email').classList.remove('expand');event.stopPropagation();\"><div class=\"x\"><div class=\"line1\"></div><div class=\"line2\"></div></div></div></div><div class=\"bottom\"><div id=\"myForm1\"><div class=\"form-container\"><label><b>Requestor</b></label><input type=\"text\" id=\"searchTxt\" placeholder=\"Requestor\" name=\"email1\" required><label><b>Summary</b></label><input type=\"text\" placeholder=\"Enter Summary\" name=\"psw1\" required> <button class=\"btn btn-success\" id=\"addToDo\">Create</button></div><!-- <button type=\"button\" class=\"btn cancel\" onclick=\"closeForm()\">Close</button> --></div></div><div class=\"row\"></div></div></div></div></div></div><script>function openForm() {\r" +
    "\n" +
    "  document.getElementById(\"myForm\").style.display = \"block\";\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "function closeForm() {\r" +
    "\n" +
    "  document.getElementById(\"myForm\").style.display = \"none\";\r" +
    "\n" +
    "}</script><script>var KanbanTest = new jKanban({\r" +
    "\n" +
    "        element: \"#myKanban\",\r" +
    "\n" +
    "        gutter: \"10px\",\r" +
    "\n" +
    "        widthBoard: \"512px\",\r" +
    "\n" +
    "        itemHandleOptions:{\r" +
    "\n" +
    "          enabled: true,\r" +
    "\n" +
    "        },\r" +
    "\n" +
    "        click: function(el) {\r" +
    "\n" +
    "          console.log(\"Trigger on all items click!\");\r" +
    "\n" +
    "        },\r" +
    "\n" +
    "        dropEl: function(el, target, source, sibling){\r" +
    "\n" +
    "          console.log(target.parentElement.getAttribute('data-id'));\r" +
    "\n" +
    "          console.log(el, target, source, sibling)\r" +
    "\n" +
    "          // alert(target.parentElement.getAttribute('data-id'));\r" +
    "\n" +
    "          var parentcardid = target.parentElement.getAttribute('data-id');\r" +
    "\n" +
    "            if(parentcardid == \"_working\")\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "              window.clickButton1();\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "        },\r" +
    "\n" +
    "        \r" +
    "\n" +
    "       \r" +
    "\n" +
    "        addItemButton: true,\r" +
    "\n" +
    "        boards: [\r" +
    "\n" +
    "          {\r" +
    "\n" +
    "            id: \"_todo\",\r" +
    "\n" +
    "            title: \"New Tickets\",\r" +
    "\n" +
    "            class: \"info,good\",\r" +
    "\n" +
    "            dragTo: [\"_working\"],\r" +
    "\n" +
    "            item: [\r" +
    "\n" +
    "\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2321</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"new\"></div><span class=\"progress-text\">New</span></div><h6>Summary</h6><div id=\"demo1\" class=\"sumcontent\">Database Issue</h6><button class=\"btn1\" ng-click=\"ViewButton()\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2322</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"rejected\"></div><span class=\"progress-text\">Rejected</span></div><h6>Summary</h6><div class=\"sumcontent\">Email engine not working</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2324</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"completed\"></div><span class=\"progress-text\">Completed</span></div><h6>Summary</h6><div class=\"sumcontent\">Password Reset</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2325</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"new\"></div><span class=\"progress-text\">New</span></div><h6>Summary</h6><div class=\"sumcontent\">Lan issue</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2326</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"new\"></div><span class=\"progress-text\">New</span></div><h6>Summary</h6><div class=\"sumcontent\">Lan issue</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2327</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"new\"></div><span class=\"progress-text\">New</span></div><h6>Summary</h6><div class=\"sumcontent\">Lan issue</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            ]\r" +
    "\n" +
    "          },\r" +
    "\n" +
    "          {\r" +
    "\n" +
    "\r" +
    "\n" +
    "            id: \"_working\",\r" +
    "\n" +
    "            title: \"In Progress\",\r" +
    "\n" +
    "            class: \"warning\",\r" +
    "\n" +
    "            item: [\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2332</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2333</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2324</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2325</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "\r" +
    "\n" +
    "            ]\r" +
    "\n" +
    "\r" +
    "\n" +
    "          },\r" +
    "\n" +
    "          {\r" +
    "\n" +
    "            id: \"_done\",\r" +
    "\n" +
    "            title: \"Completed/Closed\",\r" +
    "\n" +
    "            class: \"success\",\r" +
    "\n" +
    "            dragTo: [\"_working\"],\r" +
    "\n" +
    "            item: [\r" +
    "\n" +
    "\r" +
    "\n" +
    "              {\r" +
    "\n" +
    "                title:'<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2323</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"completed\"></div><span class=\"progress-text\">Completed</span></div><h6>Summary</h6><div class=\"sumcontent\">AD locked</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "              },\r" +
    "\n" +
    "\r" +
    "\n" +
    "            ]\r" +
    "\n" +
    "          }\r" +
    "\n" +
    "        ]\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "      var toDoButton = document.getElementById(\"addToDo\");\r" +
    "\n" +
    "      toDoButton.addEventListener(\"click\", function() {\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        // var div11 = document.createElement('div');\r" +
    "\n" +
    "        // div11.innerHTML = 'Hi there!';\r" +
    "\n" +
    "\r" +
    "\n" +
    "        KanbanTest.addElement(\"_todo\", {\r" +
    "\n" +
    "          \r" +
    "\n" +
    "          \r" +
    "\n" +
    "          title: '<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2321</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"progress\"></div><span class=\"progress-text\">In Progress</span></div><h6>Summary</h6><div class=\"sumcontent\">Callbacks & Closures</h6><button class=\"btn1\">View</button></div></div></div></div>'\r" +
    "\n" +
    "                 \r" +
    "\n" +
    "        });\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "    \r" +
    "\n" +
    "      var toDoButton = document.getElementById(\"addToDo1\");\r" +
    "\n" +
    "      toDoButton.addEventListener(\"click\", function() {\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        KanbanTest.addElement(\"_todo\", {\r" +
    "\n" +
    "          title: \"Test Add\"\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        });\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "      var removeElement = document.getElementById(\"removeElement\");\r" +
    "\n" +
    "      removeElement.addEventListener(\"click\", function() {\r" +
    "\n" +
    "        KanbanTest.removeElement(\"_test_delete\");\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "\r" +
    "\n" +
    "      var allEle = KanbanTest.getBoardElements(\"_todo\");\r" +
    "\n" +
    "      allEle.forEach(function(item, index) {\r" +
    "\n" +
    "        //console.log(item);\r" +
    "\n" +
    "      });</script></div><!-- sidbar end div --></body></html>"
  );


  $templateCache.put('scripts/view-components/kanbanadv/com-vyom-vyomlib-kanbanadv-design.directive.html',
    "<img src=\"/com.vyom.vyomlib/resources/kanban1/dist/kanbanimage3.png\" width=\"1002\" height=\"420\">"
  );


  $templateCache.put('scripts/view-components/kanbanadv/com-vyom-vyomlib-kanbanadv.directive.html',
    "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\"><!-- Sidebar --><script src=\"/com.vyom.vyomlib/resources/kanban1/sidebar/js/popper.js\"></script><script src=\"/com.vyom.vyomlib/resources/kanban1/dist/rxloader.js\"></script><!-- <script src=\"/com.vyom.vyomlib.new/resources/kanban1/sidebar/js/bootstrap.min.js\"></script> --><script src=\"/com.vyom.vyomlib/resources/kanban1/sidebar/js/main.js\"></script><link href=\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"><title>Kanban</title><!-- <link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban1/dist/criticalicon.css\"> --><script src=\"https://kit.fontawesome.com/a076d05399.js\"></script><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban1/dist/card_layout5.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban1/dist/jkanban.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban1/dist/jkanban_form.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/kanban1/dist/jkanban_material_popup.css\"><script src=\"/com.vyom.vyomlib/resources/kanban1/dist/jkanban1.js\"></script></head><style>body {\r" +
    "\n" +
    "    font-family: \"Lato\";\r" +
    "\n" +
    "    margin: 0;\r" +
    "\n" +
    "    padding: 0;\r" +
    "\n" +
    "    overflow: overlay;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .modal-content {\r" +
    "\n" +
    "  \r" +
    "\n" +
    "    width: 100%;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .header {\r" +
    "\n" +
    "    font-size: 15px;\r" +
    "\n" +
    "    font-weight: bold;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  img {\r" +
    "\n" +
    "    height: 45px;\r" +
    "\n" +
    "    float: right;\r" +
    "\n" +
    "    margin-top: -10px\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .modal.fade .modal-dialog {\r" +
    "\n" +
    "    transition: -webkit-transform .3s ease-out;\r" +
    "\n" +
    "    transition: transform .3s ease-out;\r" +
    "\n" +
    "    transition: transform .3s ease-out, -webkit-transform .3s ease-out;\r" +
    "\n" +
    "    -webkit-transform: translate(0, -50px);\r" +
    "\n" +
    "    transform: translate(0, -50px);\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .fade:not(.show) {\r" +
    "\n" +
    "    opacity: 100%;\r" +
    "\n" +
    "    background: #0c0c0c26;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  #myKanban {\r" +
    "\n" +
    "    overflow-x: auto;\r" +
    "\n" +
    "    position: relative;\r" +
    "\n" +
    "    top: -12px;\r" +
    "\n" +
    "    left: -5px;\r" +
    "\n" +
    "    padding: 7px 0;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .critical {\r" +
    "\n" +
    "    color: red;\r" +
    "\n" +
    "    font-weight: bolder;\r" +
    "\n" +
    "    margin-top: 5px;\r" +
    "\n" +
    "    font-family: Arial;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .bkgclr {\r" +
    "\n" +
    "    background-color: #6d6d6d;\r" +
    "\n" +
    "    height: 1000px;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .success {\r" +
    "\n" +
    "    background: #00b961;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .info {\r" +
    "\n" +
    "    background: #2a265f;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .warning {\r" +
    "\n" +
    "    background: #f4ce46;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .progress1 {\r" +
    "\n" +
    "    background: #039ee8;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  .error {\r" +
    "\n" +
    "    background: #fb7d44;\r" +
    "\n" +
    "  }</style><body><div class=\"wrapper d-flex align-items-stretch\"><nav id=\"sidebar\" class=\"\"><div class=\"custom-menu\"><button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-primary\"><i class=\"fa fa-bars\"></i> <span class=\"sr-only\">Toggle Menu</span></button></div><div class=\"p-4\"><h1><a href=\"index.html\" class=\"logo\">Business Workflows</a></h1><ul class=\"list-unstyled components mb-5\"><li class=\"active\"><a href=\"#\"><span class=\"fa fa-home mr-3\"></span> Cases</a></li><li><a href=\"#\"><span class=\"fa fa-user mr-3\"></span> About</a></li><li><a href=\"#\"><span class=\"fa fa-briefcase mr-3\"></span> Portfolio</a></li><li><a href=\"#\"><span class=\"fa fa-paper-plane mr-3\"></span> Contact</a></li></ul><div class=\"mb-5\"><h3 class=\"h6 mb-3\">Subscribe for newsletter</h3><form action=\"#\" class=\"subscribe-form\"><div class=\"form-group d-flex\"><div class=\"icon\"><span class=\"icon-paper-plane\"></span></div><input type=\"text\" class=\"form-control\" placeholder=\"Enter Email Address\"></div></form></div></div></nav><div><div id=\"myKanban\"></div><script>var KanbanTest = new jKanban({\r" +
    "\n" +
    "          element: \"#myKanban\",\r" +
    "\n" +
    "          // gutter: \"10px\",\r" +
    "\n" +
    "          widthBoard: \"490px\",\r" +
    "\n" +
    "          itemHandleOptions: {\r" +
    "\n" +
    "            enabled: true,\r" +
    "\n" +
    "          },\r" +
    "\n" +
    "          click: function (el) {\r" +
    "\n" +
    "            // console.log(\"Trigger on all items click!\");\r" +
    "\n" +
    "          },\r" +
    "\n" +
    "          // dropEl: function (el, target, source, sibling) {\r" +
    "\n" +
    "          //   // console.log(target.parentElement.getAttribute('data-id'));\r" +
    "\n" +
    "          //   // console.log(el, target, source, sibling)\r" +
    "\n" +
    "          //   // alert(target.parentElement.getAttribute('data-id'));\r" +
    "\n" +
    "          //   var parentcardid = target.parentElement.getAttribute('data-id');\r" +
    "\n" +
    "          //   if (parentcardid == \"_working\") {\r" +
    "\n" +
    "          //     window.dropcardworking();\r" +
    "\n" +
    "          //   }\r" +
    "\n" +
    "\r" +
    "\n" +
    "            \r" +
    "\n" +
    "          // },\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "          dropEl: function (el, target, source, sibling) {\r" +
    "\n" +
    "            console.log(target.parentElement.getAttribute('data-id'));\r" +
    "\n" +
    "            var parentcardid = target.parentElement.getAttribute('data-id');\r" +
    "\n" +
    "            if (parentcardid == \"_working\") {\r" +
    "\n" +
    "\r" +
    "\n" +
    "             window.dropcardworking();\r" +
    "\n" +
    "               }\r" +
    "\n" +
    "\r" +
    "\n" +
    "            if (parentcardid == \"_todo\") {\r" +
    "\n" +
    "              $(el).find('.progress1').addClass('info').removeClass(\"progress1\");\r" +
    "\n" +
    "              $(el).find('.progress-barprogress').addClass('progress-barnew').removeClass('progress-barprogress')\r" +
    "\n" +
    "              $(el).find('span').empty().text(\"New\");\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "\r" +
    "\n" +
    "            else if (parentcardid == \"_working\") {\r" +
    "\n" +
    "              $(el).find('.info').addClass('progress1').removeClass(\"info\");\r" +
    "\n" +
    "              $(el).find('.success').addClass('progress1').removeClass(\"success\");\r" +
    "\n" +
    "              $(el).find('span').empty().text(\"In Progress\");\r" +
    "\n" +
    "\r" +
    "\n" +
    "              \r" +
    "\n" +
    "                         \r" +
    "\n" +
    "              \r" +
    "\n" +
    "\r" +
    "\n" +
    "              $(el).find('.progress-barnew').addClass('progress-barprogress').removeClass('progress-barnew');\r" +
    "\n" +
    "              $(el).find('.progress-barsuccess').addClass('progress-barprogress').removeClass('progress-barsuccess');\r" +
    "\n" +
    "\r" +
    "\n" +
    "             \r" +
    "\n" +
    "              \r" +
    "\n" +
    "            }\r" +
    "\n" +
    "            else if (parentcardid == \"_done\") {\r" +
    "\n" +
    "              $(el).find('.progress1').addClass('success').removeClass(\"progress1\");\r" +
    "\n" +
    "              $(el).find('.progress-barprogress').addClass('progress-barsuccess').removeClass('progress-barprogress');\r" +
    "\n" +
    "              $(el).find('span').empty().text(\"Completed\");\r" +
    "\n" +
    "              \r" +
    "\n" +
    "            }\r" +
    "\n" +
    "          },\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "          addItemButton: true,\r" +
    "\n" +
    "          boards: [\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "              id: \"_todo\",\r" +
    "\n" +
    "              title: \"New Tickets\",\r" +
    "\n" +
    "              class: \"info,good\",\r" +
    "\n" +
    "              dragTo: [\"_working\"],\r" +
    "\n" +
    "              item: [\r" +
    "\n" +
    "                // {\r" +
    "\n" +
    "                //   title: '<div class=\"body1\"><div class=\"courses-container\"><div class=\"course\"><div class=\"course-preview item_handle drag_handler\"><div class=\"fontsize\">Ticket</div><div class=\"fontsize\">INC2321</div></div><div class=\"course-info\"><div class=\"progress-container\"><div class=\"new\"></div><span class=\"progress-text\">New</span></div><h6>Summary</h6><div id=\"demo1\" class=\"sumcontent\">Database Issue</h6><button class=\"btn1\" ng-click=\"ViewButton()\">View</button></div></div></div></div>'\r" +
    "\n" +
    "                // },\r" +
    "\n" +
    "              ]\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "\r" +
    "\n" +
    "              id: \"_working\",\r" +
    "\n" +
    "              title: \"In Progress\",\r" +
    "\n" +
    "              class: \"progress1\",\r" +
    "\n" +
    "              item: [\r" +
    "\n" +
    "            //     {\r" +
    "\n" +
    "            //       title: `<div class=\"course\">\r" +
    "\n" +
    "            //                 <div class=\"course-preview item_handle drag_handler progress1\"></div>\r" +
    "\n" +
    "            //                 <div class=\"course-info\">\r" +
    "\n" +
    "            //                   <div class=\"fontsize\">Case ID: INC2332\r" +
    "\n" +
    "            //                   <div>\r" +
    "\n" +
    "            //                         <img src=\"https://vyom-platform.trybmc.com/api/rx/application/record/attachment/com.bmc.arsys.rx.foundation:Person/AGGCEME2HPULZAOQMFDZOPQCW7RGOW/304411861\" class=\"main-profile-img\" />\r" +
    "\n" +
    "            //                   </div>\r" +
    "\n" +
    "            //                   </div>\r" +
    "\n" +
    "            //                   <div class=\"header\">Summary</div>\r" +
    "\n" +
    "            //                   <div class=\"col-10 sumcontent\">AD locked Lorem ipsumLorem Ipsum is simply dummy. Lorem Ipsum has been the i</div>\r" +
    "\n" +
    "                              \r" +
    "\n" +
    "            //                     <div class=\"progress\">\r" +
    "\n" +
    "            //                       <div class=\"progress-bar\" style=\"width:70%\"></div>\r" +
    "\n" +
    "            //                     </div>\r" +
    "\n" +
    "            //                     <span style=\"font-size: 11px;font-style: italic;\">In Progress</span>\r" +
    "\n" +
    "            //                   <div> \r" +
    "\n" +
    "            //                     <div class=\"critical\">\r" +
    "\n" +
    "            //                       <i class=\"fab fa-gripfire\"></i>\r" +
    "\n" +
    "            //                        Critical\r" +
    "\n" +
    "            //                     </div>\r" +
    "\n" +
    "            //                     <div>\r" +
    "\n" +
    "            //                        <button class=\"btn1\" id=\"1\" onClick=\"fun(this)\">View</button>\r" +
    "\n" +
    "            //                     </div>\r" +
    "\n" +
    "            //                   </div>\r" +
    "\n" +
    "            //                   </div>\r" +
    "\n" +
    "            //               </div>`\r" +
    "\n" +
    "            //     },\r" +
    "\n" +
    "\r" +
    "\n" +
    "            //     {\r" +
    "\n" +
    "            //       title: `<div class=\"course\">\r" +
    "\n" +
    "            //                 <div class=\"course-preview item_handle drag_handler progress1\"></div>\r" +
    "\n" +
    "            //                 <div class=\"course-info\">\r" +
    "\n" +
    "            //                   <div class=\"fontsize\">Case ID: INC2332\r" +
    "\n" +
    "            //                     <div>\r" +
    "\n" +
    "            //                         <img src=\"https://vyom-platform.trybmc.com/api/rx/application/record/attachment/com.bmc.arsys.rx.foundation:Person/AGGCEME2HPULZAOQMFDZOPQCW7RGOW/304411861\" class=\"main-profile-img\" />\r" +
    "\n" +
    "            //                   </div>  \r" +
    "\n" +
    "            //                   </div>\r" +
    "\n" +
    "            //                   <div class=\"header\">Summary</div>\r" +
    "\n" +
    "            //                   <div class=\"col-10 sumcontent\">AD locked Lorem ipsumLorem Ipsum is simply dummy. Lorem Ipsum has been the i</div>\r" +
    "\n" +
    "                             \r" +
    "\n" +
    "            //                     <div class=\"progress\">\r" +
    "\n" +
    "            //                       <div class=\"progress-bar\" style=\"width:70%; \"></div>\r" +
    "\n" +
    "            //                     </div>\r" +
    "\n" +
    "            //                     <span style=\"font-size: 11px;font-style: italic;\">In Progress</span>\r" +
    "\n" +
    "            //                   <div> \r" +
    "\n" +
    "            //                     <div class=\"critical\">\r" +
    "\n" +
    "            //                       <i class=\"fab fa-gripfire\"></i>\r" +
    "\n" +
    "            //                       Critical\r" +
    "\n" +
    "            //                     </div>\r" +
    "\n" +
    "            //                     <div>\r" +
    "\n" +
    "            //                       <button class=\"btn1\" id=\"1\" onClick=\"fun(this)\">View</button>\r" +
    "\n" +
    "            //                     </div>\r" +
    "\n" +
    "            //                   </div>\r" +
    "\n" +
    "            //                   </div>\r" +
    "\n" +
    "            //               </div>`\r" +
    "\n" +
    "            //     }\r" +
    "\n" +
    "              ]\r" +
    "\n" +
    "            },\r" +
    "\n" +
    "            {\r" +
    "\n" +
    "              id: \"_done\",\r" +
    "\n" +
    "              title: \"Completed/Closed\",\r" +
    "\n" +
    "              class: \"success\",\r" +
    "\n" +
    "              dragTo: [\"_working\"],\r" +
    "\n" +
    "              item: [\r" +
    "\n" +
    "                {\r" +
    "\n" +
    "                  title: `<div class=\"course\">\r" +
    "\n" +
    "                            <div class=\"course-preview item_handle drag_handler success\"></div>\r" +
    "\n" +
    "                            <div class=\"course-info\">\r" +
    "\n" +
    "                              <div class=\"fontsize\">Case ID: INC2332\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                  <img src=\"https://vyom-dsom-platform.trybmc.com/api/rx/application/record/attachment/com.bmc.arsys.rx.foundation:Person/d3ac4a3fdf17045a2d3eef467b44c72de7ab30f4da236942051b7f9876ac4b353987c8539236a6ac26fadd9eb2acc8b25e547635bbe7ba8f41cb5de79b1397e5/304411861\" class=\"main-profile-img\">\r" +
    "\n" +
    "                              </div>  \r" +
    "\n" +
    "                              </div>\r" +
    "\n" +
    "                              <div class=\"header\">Summary</div>\r" +
    "\n" +
    "                              <div class=\"col-10 sumcontent\">AD locked Lorem ipsumLorem Ipsum is simply dummy. Lorem Ipsum has been the i</div>\r" +
    "\n" +
    "                              \r" +
    "\n" +
    "                                <div class=\"progress\">\r" +
    "\n" +
    "                                  <div class=\"progress-barsuccess\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <span style=\"font-size: 11px;font-style: italic;\">Completed</span>\r" +
    "\n" +
    "                              <div> \r" +
    "\n" +
    "                                <button class=\"btn1\" onClick=\"fun(this)\">View</button>\r" +
    "\n" +
    "                              </div>\r" +
    "\n" +
    "                              </div>\r" +
    "\n" +
    "                          </div>`\r" +
    "\n" +
    "                },\r" +
    "\n" +
    "\r" +
    "\n" +
    "              ]\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "          ]\r" +
    "\n" +
    "        });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "function defprogress() {\r" +
    "\n" +
    "\r" +
    "\n" +
    "for (let index = 0; index < data.length; index++) {\r" +
    "\n" +
    "  const element = data;\r" +
    "\n" +
    "\r" +
    "\n" +
    "  const value = element[index][priority];\r" +
    "\n" +
    "  const statusvalue = element[index][Status];\r" +
    "\n" +
    "  console.log(\"The status value is \" + statusvalue);\r" +
    "\n" +
    "\r" +
    "\n" +
    "if(statusvalue == \"14\")\r" +
    "\n" +
    "{\r" +
    "\n" +
    "  KanbanTest.addElement(\"_working\", {\r" +
    "\n" +
    "    title: `<div class=\"course\">\r" +
    "\n" +
    "              <div class=\"course-preview item_handle drag_handler progress1\"></div>\r" +
    "\n" +
    "                  <div class=\"course-info\">\r" +
    "\n" +
    "                    <div class=\"fontsize\">Case ID : `+ element[index][ID] + `\r" +
    "\n" +
    "                      <div>\r" +
    "\n" +
    "                        <img src=\"https://vyom-dsom-platform.trybmc.com/api/rx/application/record/attachment/com.bmc.arsys.rx.foundation:Person/d3ac4a3fdf17045a2d3eef467b44c72de7ab30f4da236942051b7f9876ac4b353987c8539236a6ac26fadd9eb2acc8b25e547635bbe7ba8f41cb5de79b1397e5/304411861\" class=\"main-profile-img\">\r" +
    "\n" +
    "                    </div>  \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"header\">Summary</div>\r" +
    "\n" +
    "                    <div class=\"col-10 sumcontent\"> ` + element[index][summary] + `   </div>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                      <div class=\"progress\">\r" +
    "\n" +
    "                        <div class=\"progress-barprogress\"></div>\r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "                      <span class=\"statusstyleprogress\">In Progress</span>\r" +
    "\n" +
    "                    <div> \r" +
    "\n" +
    "                      <div class=\"critical priority\">\r" +
    "\n" +
    "                        <i class=\"fab fa-gripfire\"></i>\r" +
    "\n" +
    "                          Critical\r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "                      <div>\r" +
    "\n" +
    "                        <button class=\"btn1\" id=ViewButton ng-click=\"viewbuttonscope()\">View</button>\r" +
    "\n" +
    "                        \r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                  </div>\r" +
    "\n" +
    "            </div>`\r" +
    "\n" +
    "  });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "   if (value != \"Critical\") {\r" +
    "\n" +
    "    const elementArray = document.getElementsByClassName('priority');\r" +
    "\n" +
    "    var p = elementArray[elementArray.length - 1];\r" +
    "\n" +
    "    p.classList.add(\"ng-hide\");\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "}\r" +
    "\n" +
    "  \r" +
    "\n" +
    "  // var ViewButtonclk = document.getElementById(\"ViewButton\");\r" +
    "\n" +
    "  //  ViewButtonclk.onclick = function() {ViewButton()};\r" +
    "\n" +
    "\r" +
    "\n" +
    "  //  var CreateCase = document.getElementById(\"CreateCase\");\r" +
    "\n" +
    "  //  CreateCase.onclick = function() {CreateTicket()};\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "}\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "        function def() {\r" +
    "\n" +
    "\r" +
    "\n" +
    "          for (let index = 0; index < data.length; index++) {\r" +
    "\n" +
    "            const element = data;\r" +
    "\n" +
    "            const value = element[index][priority];\r" +
    "\n" +
    "            const statusvalue = element[index][Status];\r" +
    "\n" +
    "            if(statusvalue == \"0\")\r" +
    "\n" +
    " {\r" +
    "\n" +
    "          \r" +
    "\n" +
    "            KanbanTest.addElement(\"_todo\", {\r" +
    "\n" +
    "              title: `<div class=\"course\">\r" +
    "\n" +
    "                        <div class=\"course-preview item_handle drag_handler info\"></div>\r" +
    "\n" +
    "                            <div class=\"course-info\">\r" +
    "\n" +
    "                              <div class=\"fontsize\">Case ID : `+ element[index][ID] + `\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                  <img src=\"https://vyom-dsom-platform.trybmc.com/api/rx/application/record/attachment/com.bmc.arsys.rx.foundation:Person/d3ac4a3fdf17045a2d3eef467b44c72de7ab30f4da236942051b7f9876ac4b353987c8539236a6ac26fadd9eb2acc8b25e547635bbe7ba8f41cb5de79b1397e5/304411861\" class=\"main-profile-img\">\r" +
    "\n" +
    "                              </div>  \r" +
    "\n" +
    "                              </div>\r" +
    "\n" +
    "                              <div class=\"header\">Summary</div>\r" +
    "\n" +
    "                              <div class=\"col-10 sumcontent\"> ` + element[index][summary] + `   </div>\r" +
    "\n" +
    "                              \r" +
    "\n" +
    "                                <div class=\"progress\">\r" +
    "\n" +
    "                                  <div class=\"progress-barnew\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <span style=\"font-size: 11px;font-style: italic;\">New</span>\r" +
    "\n" +
    "                              <div> \r" +
    "\n" +
    "                                <div class=\"critical priority\">\r" +
    "\n" +
    "                                  <i class=\"fab fa-gripfire\"></i>\r" +
    "\n" +
    "                                    Critical\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                  <button class=\"btn1\" id=ViewButton ng-click=\"viewbuttonscope()\">View</button>\r" +
    "\n" +
    "                                  \r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                              </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                      </div>`\r" +
    "\n" +
    "            });\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "             if (value != \"Critical\") {\r" +
    "\n" +
    "              const elementArray = document.getElementsByClassName('priority');\r" +
    "\n" +
    "              var p = elementArray[elementArray.length - 1];\r" +
    "\n" +
    "              p.classList.add(\"ng-hide\");\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "\r" +
    "\n" +
    "          }          \r" +
    "\n" +
    "            var ViewButtonclk = document.getElementById(\"ViewButton\");\r" +
    "\n" +
    "             ViewButtonclk.onclick = function() {ViewButton()};\r" +
    "\n" +
    "\r" +
    "\n" +
    "             var CreateCase = document.getElementById(\"CreateCase\");\r" +
    "\n" +
    "             CreateCase.onclick = function() {CreateTicket()};\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "          }\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        var search = document.getElementById(\"searchCase\");\r" +
    "\n" +
    "        search.onclick = function()\r" +
    "\n" +
    "        {\r" +
    "\n" +
    "          console.log(\"innerfunction called\");\r" +
    "\n" +
    "          console.log(search);\r" +
    "\n" +
    "        console.log(\"searchbuttoncalled\");\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        search.addEventListener(\"click\", function () {\r" +
    "\n" +
    "          var input, filter, ul, li, a, i, txtValue;\r" +
    "\n" +
    "          input = document.getElementById(\"number\");\r" +
    "\n" +
    "          filter = input.value.toUpperCase();\r" +
    "\n" +
    "          ul = KanbanTest.getBoardElements(\"_todo\");\r" +
    "\n" +
    "\r" +
    "\n" +
    "          for (i = 0; i < ul.length; i++) {\r" +
    "\n" +
    "            a = ul[i];\r" +
    "\n" +
    "            console.log(a);\r" +
    "\n" +
    "\r" +
    "\n" +
    "            txtValue = a.textContent || a.innerText;\r" +
    "\n" +
    "\r" +
    "\n" +
    "            if (txtValue.toUpperCase().indexOf(filter) > -1) {\r" +
    "\n" +
    "              ul[i].style.display = \"\";\r" +
    "\n" +
    "            } else {\r" +
    "\n" +
    "              ul[i].style.display = \"none\";\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "          }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        });\r" +
    "\n" +
    "\r" +
    "\n" +
    "        var allEle = KanbanTest.getBoardElements(\"_todo\");\r" +
    "\n" +
    "        allEle.forEach(function (item, index) {\r" +
    "\n" +
    "          console.log(item);\r" +
    "\n" +
    "        });\r" +
    "\n" +
    "\r" +
    "\n" +
    "        // var removeElement = document.getElementById(\"removeElement\");\r" +
    "\n" +
    "      // removeElement.addEventListener(\"click\", function () {\r" +
    "\n" +
    "      //   KanbanTest.removeElement(\"_test_delete\");\r" +
    "\n" +
    "      // });</script></div></div><!-- Chatbot Script --><script id=\"rx-view-loader-script\" src=\"https://vyom-platform.trybmc.com/innovationsuite/view-loader.js\"></script><button class=\"rx-view-loader-button\" data-bot-id=\"IDGADG1AANVNNAQJ6AV1QI839NESAV\"></button><script type=\"text/javascript\">rxViewLoader.onRequestJwt(function () {\r" +
    "\n" +
    "             // return JWT token\r" +
    "\n" +
    "			 \r" +
    "\n" +
    "         });</script><!-- End of Chatbot Script --></body></html>"
  );


  $templateCache.put('scripts/view-components/landing-console/com-vyom-vyomlib-inspector-landing-console-bgcolor.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<select ng-model=\"HChange\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/landing-console/com-vyom-vyomlib-inspector-landing-console-bgcolor2.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<select ng-model=\"HChange\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/landing-console/com-vyom-vyomlib-inspector-landing-console-button.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:<div class=\"input-group\"><span class=\"input-group-btn\"><button type=\"button\" class=\"rx-editor-header__button d-button d-button_primary d-button_small\" ng-click=\"saveObject();\" ng-disabled=\"false\">Add Card</button> </span><span class=\"input-group-btn\"><button type=\"button\" class=\"rx-editor-header__button rx-editor-header__button_save rx-editor-header__button_divider-before d-button d-button_primary d-button_small\" ng-click=\"updateObject();\" ng-disabled=\"false\">Update</button> </span><span class=\"input-group-btn\"><button type=\"button\" class=\"rx-editor-header__button rx-editor-header__button_save rx-editor-header__button_divider-before d-button d-button_primary d-button_small\" ng-click=\"clearFields();\" ng-disabled=\"false\">Clear</button></span></div></label>"
  );


  $templateCache.put('scripts/view-components/landing-console/com-vyom-vyomlib-inspector-landing-console-cards.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div ng-if=\"cards.length\"><div ng-repeat=\"i in cards\" style=\"\" class=\"selected-options\"><!----><div class=\"rx-inspector-record-grid-column-editor__container\"><span title=\"{{i.ApplicationName}}\" class=\"rx-inspector-record-grid-column-editor__card-title\">{{i.ApplicationName}} </span><span class=\"action-button d-icon-left-pencil\" ng-click=\"setObject($index);\" role=\"button\" tabindex=\"0\"></span> <span class=\"action-button d-icon-left-cross\" ng-click=\"remove($index);\" role=\"button\" tabindex=\"0\"></span></div><div class=\"column-type\" ng-if=\"i.Description\"><div class=\"rx-inspector-record-grid-column-editor__card-title\">Description:</div><em>{{i.Description}}</em></div><div class=\"column-type\" ng-if=\"i.URL\"><div class=\"rx-inspector-record-grid-column-editor__card-title\">URL:</div><a href=\"#\"><em>{{i.URL}}</em></a></div><div class=\"column-type\" ng-if=\"i.Icon\"><div class=\"rx-inspector-record-grid-column-editor__card-title\">Icon:</div><p class=\"d-icon-{{i.Icon}}\"></p></div><div class=\"column-type\" ng-if=\"i.Color\"><div class=\"rx-inspector-record-grid-column-editor__card-title\">Color:</div><div class=\"btn btn-{{i.Color}}\"><em>{{i.Color}}</em></div></div><div class=\"column-type\" ng-if=\"i.tooltipHeader\"><div class=\"rx-inspector-record-grid-column-editor__card-title\">Tooltip Header:</div><em>{{i.tooltipHeader}}</em></div><div class=\"column-type\" ng-if=\"i.tooltipDescription\"><div class=\"rx-inspector-record-grid-column-editor__card-title\">Tooltip Description:</div><em>{{i.tooltipDescription}}</em></div><div class=\"column-type\" ng-if=\"i.permissions\"><div class=\"rx-inspector-record-grid-column-editor__card-title\">Permission:</div><em>{{i.permissions}}</em></div></div></div><div ng-if=\"!cards.length\">Cards not Available.</div>"
  );


  $templateCache.put('scripts/view-components/landing-console/com-vyom-vyomlib-inspector-landing-console-icon.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><select ng-model=\"selectedName\" ng-options=\"item for item in names\"></select>"
  );


  $templateCache.put('scripts/view-components/landing-console/com-vyom-vyomlib-inspector-landing-console-permission.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:</label><div><select ng-model=\"data.selectedField\" ng-options=\"x[1721] for x in data.fields\"></select></div>"
  );


  $templateCache.put('scripts/view-components/landing-console/com-vyom-vyomlib-landing-console-design.directive.html',
    "<span class=\"d-icon-field_autocomplete_search\" style=\"font-size: 100px;text-align: center\"></span>"
  );


  $templateCache.put('scripts/view-components/landing-console/com-vyom-vyomlib-landing-console.directive.html',
    "<!DOCTYPE html><html lang=\"en\"><head><!-- <link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/landing-console/css/landing-console.css\"> --><script>$(document).ready(function(){\r" +
    "\n" +
    "             $('[data-toggle=\"popover\"]').popover();\r" +
    "\n" +
    "             $(\"#myCarousel\").carousel();\r" +
    "\n" +
    "         });</script></head><body><div class=\"wrapper\"><div id=\"block_container\" class=\"content\"><div class=\"searchcontainer\" id=\"bloc\"><input type=\"text\" class=\"searchinput w3-{{SearchColor}}\" placeholder=\"Search...\"><div class=\"search w3-{{SearchColor}}\"></div></div><div id=\"bloc\" class=\"tim-typo\" style=\"margin-top: 44px\"><h1 style=\"font-size: 58px\">Welcome {{CurrentUserFullName}}</h1><p></p></div></div><div class=\"content\"><div class=\"container-fluid\"><div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\"><!-- Indicators --><ol class=\"carousel-indicators\"><li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#myCarousel\" data-slide-to=\"1\"></li><li data-target=\"#myCarousel\" data-slide-to=\"2\"></li></ol><!-- Wrapper for slides --><div class=\"carousel-inner\"><div class=\"item active\"><img src=\"/com.vyom.vyomlib/resources/landing-console/statistics4.jpg\" alt=\"Los Angeles\" style=\"width:100%;height: 500px\"><div class=\"carousel-caption\"><h3></h3><p></p></div></div><div class=\"item\"><img src=\"/com.vyom.vyomlib/resources/landing-console/bgimg2.jpg\" alt=\"Chicago\" style=\"width:100%;height: 500px\"><div class=\"carousel-caption\"><h3></h3><p></p></div></div><div class=\"item\"><img src=\"/com.vyom.vyomlib/resources/landing-console/statistics5.jpg\" alt=\"New York\" style=\"width:100%;height: 500px\"><div class=\"carousel-caption\"><h3></h3><p></p></div></div></div><!-- Left and right controls --></div></div></div><div class=\"content\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-lg-3 col-md-6 col-sm-6\" ng-repeat=\"x in permittedCards \"><div class=\"card card-stats w3-card-4 h-75\"><div class=\"card-header card-header-{{x.Color}} card-header-icon\" ng-click=\"setUrlTOModal(x.URL)\" data-toggle=\"modal\" data-target=\"#landingconsolemodal\"><div class=\"card-icon\"><div class=\"material-icons\"><p class=\"d-icon-{{x.Icon}}\"></p></div></div><h3 class=\"card-title\">{{x.ApplicationName}}<!--<small>GB</small>--></h3><p class=\"card-category\"><span class=\"d-icon-star\" style=\"color:orange\"></span> <span class=\"d-icon-star_o\"></span> <span class=\"d-icon-star_o\"></span> <span class=\"d-icon-star_o\"></span> <span class=\"d-icon-star_o\"></span></p></div><div class=\"card-footer\"><div class=\"stats\"><div class=\"material-icons\"><p class=\"d-icon-info_circle\" data-toggle=\"popover\" data-container=\"body\" data-original-title=\"{{x.tooltipHeader}}\" data-color=\"primary\" data-content=\"{{x.tooltipDescription}}\"></p></div><a href=\"javascript:;\"><em>{{x.Description}}</em></a></div></div></div></div></div></div></div></div><div class=\"modal fade right\" id=\"landingconsolemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"landingconsolemodalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><a href=\"\" class=\"d-icon-cross\" data-dismiss=\"modal\"></a><iframe ng-if=\"::modalUrl\" ng-src=\"{{trustSrc(modalUrl)}}\" src=\"{{trustSrc(modalUrl)}}\" class=\"modal-iframe\" style=\"\"></iframe></div></div></div><!---/ modal end ---></body></html>"
  );


  $templateCache.put('scripts/view-components/marquee3/com-vyom-vyomlib-inspector-marquee3-allignment.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><select ng-model=\"Mallign\" ng-options=\"x for x in names\"></select>"
  );


  $templateCache.put('scripts/view-components/marquee3/com-vyom-vyomlib-inspector-marquee3-behavior.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><select ng-model=\"MBehavior\" ng-options=\"x for x in names\"></select>"
  );


  $templateCache.put('scripts/view-components/marquee3/com-vyom-vyomlib-inspector-marquee3-color-picker-select.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div class=\"input-group\"><input colorpicker=\"hex\" type=\"text\" ng-model=\"hexPickerColor\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"rx-editor-header__button rx-editor-header__button_save rx-editor-header__button_divider-before d-button d-button_primary d-button_small\" ng-click=\"saveColor();\" ng-disabled=\"false\">Use Color</button></span></div>"
  );


  $templateCache.put('scripts/view-components/marquee3/com-vyom-vyomlib-inspector-marquee3-direction.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><select ng-model=\"Mdirect\" ng-options=\"x for x in names\"></select>"
  );


  $templateCache.put('scripts/view-components/marquee3/com-vyom-vyomlib-inspector-marquee3-mbgcolor.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<select ng-model=\"HChange\" ng-options=\"x for x in names\"></select><!-- <select ng-model=\"MBgcolor\">\n" +
    "    <option value=\"{{x}}\" class=\"w3-container w3-{{x}}\" ng-repeat=\"x in names\">\n" +
    "        {{x}}\n" +
    "    </option>\n" +
    "</select>--></label>"
  );


  $templateCache.put('scripts/view-components/marquee3/com-vyom-vyomlib-marquee3-design.directive.html',
    "<span class=\"d-icon-arrow_right_brackets\" style=\"font-size: 100px;text-align: center\"></span>"
  );


  $templateCache.put('scripts/view-components/marquee3/com-vyom-vyomlib-marquee3.directive.html',
    "<!DOCTYPE html><html><head></head><body><div align=\"{{MAllignment}}\"><marquee width=\"{{MWidth}}\" direction=\"{{MDirection}}\" direction=\"{{MDirection}}\" scrollamount=\"{{MSpeed}}\" behavior=\"{{MBehavior}}\" loop=\"infinite\" class=\"vy_silver w3-container w3-{{MBGColor}}\" scrolldelay=\"100\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\"><table height=\"{{MHeight}}\" class=\"w3-text-white\"><tr><td ng-repeat=\"x in mydata\"><span ng-if=\"FieldID1Title||x[FieldID1]\">{{FieldID1Title}} : {{fromhtml(FieldID1,x[FieldID1])}} </span><span ng-if=\"(FieldID1Title||x[FieldID1])&&(FieldID2Title||x[FieldID2])\">,</span><!-- {{fromhtml(FieldID2,x[FieldID2])}} --> <span ng-if=\"FieldID2Title||x[FieldID2]\">{{FieldID2Title}}: {{fromhtml(FieldID2,x[FieldID2])}} </span><span ng-if=\"((FieldID1Title||x[FieldID1])||(FieldID2Title||x[FieldID2]))&&(FieldID3Title||x[FieldID3])\">,</span> <span ng-if=\"FieldID3Title||x[FieldID3]\">{{FieldID3Title}} : {{fromhtml(FieldID3,x[FieldID3])}}</span> <span ng-if=\"((FieldID1Title||x[FieldID1])||(FieldID2Title||x[FieldID2])||(FieldID3Title||x[FieldID3]))&&(FieldID4Title||x[FieldID4])\">,</span> <span ng-if=\"FieldID4Title||x[FieldID4]\">{{FieldID4Title}} : {{fromhtml(FieldID4,x[FieldID4])}} </span><span>{{Separator}}</span></td></tr></table></marquee></div></body></html>"
  );


  $templateCache.put('scripts/view-components/menubaradv/com-vyom-vyomlib-menubaradv-design.directive.html',
    "<img src=\"/com.vyom.vyomlib/resources/kanban1/dist/menubarimage.png\" width=\"1002\" height=\"38\">"
  );


  $templateCache.put('scripts/view-components/menubaradv/com-vyom-vyomlib-menubaradv.directive.html',
    "<html><head><!-- <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\"> --><!-- <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script> --><!-- <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\"\r" +
    "\n" +
    "        rel=\"stylesheet\" /> --><!-- <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script> --><!-- <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script> --><script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css\"><!-- <link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/menubar/menu2.css\">\" --><style>.modal {\r" +
    "\n" +
    "            display: none;\r" +
    "\n" +
    "            /* Hidden by default */\r" +
    "\n" +
    "            position: fixed;\r" +
    "\n" +
    "            /* Stay in place */\r" +
    "\n" +
    "            z-index: 1;\r" +
    "\n" +
    "            /* Sit on top */\r" +
    "\n" +
    "            padding-top: 100px;\r" +
    "\n" +
    "            /* Location of the box */\r" +
    "\n" +
    "            left: 0;\r" +
    "\n" +
    "            top: 0;\r" +
    "\n" +
    "            width: 100%;\r" +
    "\n" +
    "            /* Full width */\r" +
    "\n" +
    "            height: 100%;\r" +
    "\n" +
    "            /* Full height */\r" +
    "\n" +
    "            overflow: auto;\r" +
    "\n" +
    "            /* Enable scroll if needed */\r" +
    "\n" +
    "            background-color: rgb(0, 0, 0);\r" +
    "\n" +
    "            /* Fallback color */\r" +
    "\n" +
    "            background-color: rgba(0, 0, 0, 0.4);\r" +
    "\n" +
    "            /* Black w/ opacity */\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        /* Modal Content */\r" +
    "\n" +
    "        .modal-contentCase {\r" +
    "\n" +
    "            background-color: #fefefe;\r" +
    "\n" +
    "            margin: auto;\r" +
    "\n" +
    "            width: 35%;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        /* The Close Button */\r" +
    "\n" +
    "        .close {\r" +
    "\n" +
    "            color: #aaaaaa;\r" +
    "\n" +
    "            float: right;\r" +
    "\n" +
    "            font-size: 28px;\r" +
    "\n" +
    "            font-weight: bold;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        .close:hover,\r" +
    "\n" +
    "        .close:focus {\r" +
    "\n" +
    "            color: #000;\r" +
    "\n" +
    "            text-decoration: none;\r" +
    "\n" +
    "            cursor: pointer;\r" +
    "\n" +
    "        }</style></head><body><div class=\"container\" style=\"width: 1750px; padding-left: 0px\"><nav class=\"navbar navbar-icon-top navbar-default\" style=\"margin-bottom: 5px; border-bottom: groove\"><div class=\"container-fluid\"><!-- Brand and toggle get grouped for better mobile display --><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" style=\"font-size: 33px;\r" +
    "\n" +
    "                color: #2a265f;\r" +
    "\n" +
    "                font-weight: bold\">My Application Dashboard</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li class=\"active\"><a href=\"#\">All Cases <span class=\"sr-only\">(current)</span></a></li></ul><form class=\"navbar-form navbar-left\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"INC Number\" id=\"number\"></div><button type=\"submit\" id=\"searchCase\" class=\"btn btn-default\">Submit</button></form><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"#\"><i class=\"fa fa-fire\"><span class=\"badge badge-danger\">11</span> </i>My Activity</a></li><li><!-- <i class=\"fa fa-user-circle-o\"></i> --> <button id=\"myBtn\" class=\"btn btn-success\" style=\"margin-top: 20px\">Quick Case</button></li></ul></div><!-- /.navbar-collapse --><!-- new ticket modal --><div id=\"myModal\" class=\"modal\"><!-- Modal content --><div class=\"modal-contentCase\"><div class=\"modal-header\"><h5 class=\"modal-title\">Quick Case</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" style=\"margin:  -3rem 0 -2rem -2rem\"><span aria-hidden=\"true\">×</span></button></div><div class=\"modal-body p-4\" id=\"result\"><div id=\"myForm1\"><div class=\"form-container\"><label><b>Requestor</b></label><input type=\"text\" id=\"searchTxt\" placeholder=\"Requestor\" name=\"email1\" required><label><b>Summary</b></label><input type=\"text\" placeholder=\"Enter Summary\" name=\"psw1\" required></div></div></div><div class=\"modal-footer\"><button class=\"btn btn-success\" id=\"CreateCase\">Create Quick Case</button></div></div></div><!-- modal end --></div><!-- /container-fluid --></nav></div><script>// $('#myModal').removeClass('modal fade in');\r" +
    "\n" +
    "        // Get the modal\r" +
    "\n" +
    "        var modal = document.getElementById(\"myModal\");\r" +
    "\n" +
    "\r" +
    "\n" +
    "        // Get the button that opens the modal\r" +
    "\n" +
    "        var btn = document.getElementById(\"myBtn\");\r" +
    "\n" +
    "\r" +
    "\n" +
    "        // Get the <span> element that closes the modal\r" +
    "\n" +
    "        var span = document.getElementsByClassName(\"close\")[0];\r" +
    "\n" +
    "\r" +
    "\n" +
    "        // When the user clicks the button, open the modal \r" +
    "\n" +
    "        btn.onclick = function () {\r" +
    "\n" +
    "            modal.style.display = \"block\";\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        // When the user clicks on <span> (x), close the modal\r" +
    "\n" +
    "        span.onclick = function () {\r" +
    "\n" +
    "            modal.style.display = \"none\";\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        // When the user clicks anywhere outside of the modal, close it\r" +
    "\n" +
    "        window.onclick = function (event) {\r" +
    "\n" +
    "            if (event.target == modal) {\r" +
    "\n" +
    "                modal.style.display = \"none\";\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "        }</script></body></html>"
  );


  $templateCache.put('scripts/view-components/mypageadv/com-vyom-vyomlib-mypageadv-design.directive.html',
    "<h1>dragdrop</h1>"
  );


  $templateCache.put('scripts/view-components/mypageadv/com-vyom-vyomlib-mypageadv.directive.html',
    "<html><head><script src=\"/com.vyom.vyomlib/resources/mypageadv/mypageadv2.js\"></script></head><body><h1>FlagstoneJS <span class=\"yellow\">4.0.0</span><span class=\"slogan\">Dynamic &#38; responsive tiling</span></h1><p class=\"quick-info\"><span class=\"yellow\">12.5 KB</span> | No dependencies | Loaded with options</p><div class=\"adjust\"><table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody><tr><td>margin:</td><td><input type=\"number\" min=\"0\" max=\"1000\" disabled=\"disabled\" id=\"adjust-margin\"></td></tr><tr><td>bedPadding:</td><td><input type=\"number\" min=\"0\" max=\"1000\" value=\"10\" id=\"adjust-bed-padding\"></td></tr><tr><td>stonesMargin:</td><td><input type=\"number\" min=\"0\" max=\"1000\" value=\"10\" id=\"adjust-stones-margin\"></td></tr><tr><td>minWidth:</td><td><input type=\"number\" min=\"0\" max=\"1000\" value=\"280\" id=\"adjust-min-width\"></td></tr><tr><td>maxColumns:</td><td><input type=\"number\" min=\"0\" max=\"1000\" value=\"5\" id=\"adjust-max-columns\"></td></tr><tr><td>dragAndDrop:</td><td><input type=\"checkbox\" checked=\"checked\" id=\"adjust-drag-and-drop\"></td></tr><tr><td>dropCallback:</td><td><textarea id=\"adjust-drop-callback\">function(dragElem, targetElem) {\r" +
    "\n" +
    "    return true;\r" +
    "\n" +
    "  }</textarea></td></tr><tr><td>callback:</td><td><textarea id=\"adjust-callback\">function(elem, index) {\r" +
    "\n" +
    "    if (index === 3) {\r" +
    "\n" +
    "      elem.classList.add('highlight');\r" +
    "\n" +
    "    } else {\r" +
    "\n" +
    "      elem.classList.remove('highlight');\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "  }</textarea></td></tr></tbody><tfoot><tr><td><button class=\"apply-adjustments\">Apply</button></td><td></td></tr></tfoot></table><div class=\"toggle-widget\"><p>Toggle Adjust Widget</p><button>&#x21D5;</button></div></div><button class=\"add-card\">Inject a card</button><article style=\"visibility:hidden\"><section class=\"flagstone-drag-handle\"><h2>1</h2><button class=\"flagstone-remove\">&#215;</button><p class=\"p-animate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p><button class=\"toggle-more show-more flagstone-resize-height\">Show More</button> <button class=\"toggle-more show-less flagstone-resize-height\">Show Less</button></section><section class=\"flagstone-drag-handle\"><h2>2</h2><button class=\"flagstone-remove\">&#215;</button><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p><img src=\"http://placebear.com/160/160\" alt=\"\" style=\"float:left;width:80px;margin:10px 10px 10px 0\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p></section><section class=\"flagstone-drag-handle\"><h2>3</h2><button class=\"flagstone-remove\">&#215;</button> <img src=\"http://placebear.com/260/80\" alt=\"\" id=\"change-my-source\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></section><section class=\"flagstone-drag-handle\"><h2>4</h2><button class=\"flagstone-remove\">&#215;</button><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Lorem ipsum dolor sit amet hic cupiditate sapiente placeat temporibus.</p></section><section class=\"flagstone-drag-handle\"><h2>5</h2><button class=\"flagstone-remove\">&#215;</button><p>Lorem ipsum dolor sit amet. Hic cupiditate sapiente placeat temporibus, placeat temporibus, fugiat eos.</p></section><section class=\"flagstone-drag-handle\"><h2>6</h2><button class=\"flagstone-remove\">&#215;</button><p>Lorem ipsum dolor sit amet. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p></section><section class=\"flagstone-drag-handle\"><h2>7</h2><button class=\"flagstone-remove\">&#215;</button><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus. Accusamus ducimus unde amet quam omnis.</p></section><section class=\"flagstone-drag-handle\"><h2>8</h2><button class=\"flagstone-remove\">&#215;</button><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quibusdam placeat dolorum natus voluptatum reiciendis cupiditate, cum veritatis accusamus labore consectetur ab amet, sit commodi laudantium beatae molestiae iste repellendus.</p></section><section class=\"flagstone-drag-handle\"><h2>9</h2><button class=\"flagstone-remove\">&#215;</button><p>Lorem ipsum dolor sit amet.</p></section><section class=\"flagstone-drag-handle\"><h2>10</h2><button class=\"flagstone-remove\">&#215;</button><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p></section><section class=\"flagstone-drag-handle\"><h2>11</h2><button class=\"flagstone-remove\">&#215;</button><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.</p></section></article><!-- <article>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>1</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>2</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p>\r" +
    "\n" +
    "    <img src=\"http://placebear.com/160/160\" alt=\"\" style=\"float:left;width:80px;margin:10px 10px 10px 0;\"/>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>3</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <img src=\"http://placebear.com/260/80\" alt=\"\" />\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>4</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Lorem ipsum dolor sit amet hic cupiditate sapiente placeat temporibus.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>5</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet. Hic cupiditate sapiente placeat temporibus, placeat temporibus, fugiat eos.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>6</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>7</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus. Accusamus ducimus unde amet quam omnis.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>8</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quibusdam placeat dolorum natus voluptatum reiciendis cupiditate, cum veritatis accusamus labore consectetur ab amet, sit commodi laudantium beatae molestiae iste repellendus.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>9</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>10</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus unde amet quam omnis aliquid aliquam culpa, explicabo ut officia illum doloremque debitis, fugiat eos. Hic cupiditate sapiente placeat temporibus.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "  <section>\r" +
    "\n" +
    "    <h2>11</h2>\r" +
    "\n" +
    "    <button class=\"flagstone-remove\">&#215;</button>\r" +
    "\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.</p>\r" +
    "\n" +
    "  </section>\r" +
    "\n" +
    "</article> --><div style=\"position:absolute;z-index:9999;top:0;right:0;display:block;width:100px;height:100px;border-radius:50% 0 50% 50%;padding:2px;color:#fff;box-shadow:inset 0 0 15px 0 #000;background:#333;font-family:'Georgia',sans-serif;font-size:14px;text-align:center\"><p style=\"margin-top:10px\"><span style=\"display:block\">On</span><a href=\"https://github.com/depthdev\" target=\"_blank\" style=\"display:block;color:#08f\">Github</a><span style=\"display:block\">and</span><a href=\"http://depthdev.com/\" target=\"_blank\" style=\"color:#08f\">Depth</a></p></div><script>// Download plugin from https://github.com/depthdev/flagstonejs\r" +
    "\n" +
    "\r" +
    "\n" +
    "/*\r" +
    "\n" +
    "  FlagstoneJS v4.0.0\r" +
    "\n" +
    "  (c) 2015-2018 Depth Development. http://depthdev.com\r" +
    "\n" +
    "  License: MIT\r" +
    "\n" +
    "*/\r" +
    "\n" +
    "!function(e,t){\"use strict\";e.flagstone=function(n,r){function a(n,r){function a(){for(var e=0,t=k.length;e<t;e++)Math.random()<q&&k.splice(e,0,!1)}function o(){L.style.visibility=\"hidden\"}function s(){L.style.visibility=\"visible\"}function i(){var t=[w],n=0,r=O.length;for(M=[];n<r;n++){if(n<w)k[n]?(k[n].style.transform=\"translate(\"+(A*n+(n?C*n+E:E))+\"px,\"+E+\"px)\",Z&&(k[n].style.height=k[n].style.width),t[n]=O[n]+E,ae(k[n],n),M.push([k[n]])):w>1&&(t[n]=A+E);else{var a=Math.min.apply(null,t),o=t.indexOf(a);k[n]?(k[n].style.transform=\"translate(\"+(A*o+(o?C*o+E:E))+\"px,\"+(a+C)+\"px)\",Z&&(k[n].style.height=k[n].style.width),t[o]+=O[n]+C,ae(k[n],n),M[o].push(k[n])):w>1&&(t[o]+=A+C)}b=(Math.max.apply(null,t)||O[0]+E)+E,L.style.height=b+\"px\"}e.setTimeout(s)}function l(t){if(k.length){y=L.offsetWidth,y<T+(E?2*E:0)&&(y=T),D=Math.floor(y/T),w=D>x?x:D,A=y/w-(C*(w-1)+2*E)/w,O=[];for(var n=0,r=k.length;n<r;n++)k[n]&&(k[n].style.width=A+\"px\",k[n].style.marginTop=\"0px\"),O.push(Z||!k[n]?A:k[n].offsetHeight);y===L.offsetWidth||t?i():l(!0),t||e.setTimeout(function(){l(!0)},W)}}function g(t){if(\"keydown\"!==t.type||13===t.keyCode||32===t.keyCode){for(var n=t.target;n&&!n.classList.contains(B);)n=n.parentElement;L.removeChild(n),e.MutationObserver||!oe&&!se||de()}}function d(t){\"keydown\"===t.type&&13!==t.keyCode&&32!==t.keyCode||e.setTimeout(l,Q)}function c(t){function n(){for(var t=0,n=M.length,r=0,a=0;t<n&&!g;t++)for(r=0,a=M[t].length;r<a;r++)g&&(i.push(M[t][r]),l.push(e.parseInt(M[t][r].style.marginTop,10)||0)),M[t][r]===o&&(g=!0)}function r(){for(var t=0,n=w,a=[];t<n;t++){var o=M[t][M[t].length-1],s=e.parseInt(o.style.transform.match(/\\d+px/)[0],10)+(e.parseInt(o.style.marginTop,10)||0)+o.offsetHeight+E;a.push(s)}var i=Math.max.apply(null,a);L.style.height=i+\"px\",V=e[($?\"request\":\"cancel\")+\"AnimationFrame\"](r)}function a(){function t(){for(var r=o.offsetHeight+s,g=r-a,d=0;d<n;d++)i[d].style.marginTop=g+l[d]+\"px\";te=e[(ne?\"request\":\"cancel\")+\"AnimationFrame\"](t)}var n=i.length,a=e.parseInt(i[0].style.transform.match(/\\d+px/)[0],10)-C+l[0];ne=!0,te=e.requestAnimationFrame(t),re=e.setTimeout(function(){ne=!1,e.cancelAnimationFrame(te)},U),$=!0,V=e.requestAnimationFrame(r),ee=e.setTimeout(function(){$=!1,e.cancelAnimationFrame(V)},U)}for(var o=t;o&&!o.classList.contains(B);)o=o.parentElement;var s=e.parseInt(o.style.transform.match(/\\d+px/)[0],10)+(e.parseInt(o.style.marginTop,10)||0),i=[],l=[],g=!1;return n(),$=!1,e.cancelAnimationFrame(V),e.clearTimeout(ee),ne=!1,e.cancelAnimationFrame(te),e.clearTimeout(re),i.length?void a():($=!0,V=e.requestAnimationFrame(r),void(ee=e.setTimeout(function(){$=!1,e.cancelAnimationFrame(V)},U)))}function m(e){\"keydown\"===e.type&&13!==e.keyCode&&32!==e.keyCode||c(e.target)}function f(){e.clearTimeout(le),le=e.setTimeout(l,Y)}function v(){e.clearTimeout(ge),ge=e.setTimeout(de)}function u(){e.removeEventListener(\"resize\",f),t.head.removeChild(t.getElementById(\"flagstone-\"+S+\"-styles\"))}function h(e){e.margin||0===e.margin?(E=e.margin,C=e.margin):(E=e.bedPadding||E,C=e.stonesMargin||C),T=e.minWidth||T,x=e.maxColumns||x,G=e.dragAndDrop===!0||e.dragAndDrop===!1?e.dragAndDrop:G,K=e.dropCallback||K,ae=e.callback||ae,de()}var S=e.flagstone.index,p=r||{},L=n?\"string\"==typeof n?t.querySelector(n):n:t.getElementsByClassName(\"flagstone\")[0],E=p.margin||0===p.margin?p.margin:p.bedPadding||0===p.bedPadding?p.bedPadding:10,y=0,b=0,T=p.minWidth||280,x=p.maxColumns||5,D=0,w=0,k=[],C=p.margin||0===p.margin?p.margin:p.stonesMargin||0===p.stonesMargin?p.stonesMargin:10,A=y/w-C*(w+1)/w,O=[],M=[],B=\"flagstone-\"+S+\"-bed__stone\",F=p.flow,z=p.direction?p.direction.toLowerCase():\"left\",I=p.assignReverseZIndexes,P=p.random,q=p.spaceFrequency||.4,N=p.space,W=p.animationDuration||0,H=p.animationDuration/1e3,R=p.animationTimingFunction||\"linear\",_=p.heightAnimationDuration||0,X=p.heightAnimationDuration/1e3,j=p.heightAnimationTimingFunction||\"linear\",Y=p.resizeDelay||0===p.resizeDelay?p.resizeDelay:250,Z=p.square,G=p.dragAndDrop,J=p.dragAndDropAutoDelay,K=p.dropCallback||function(){return!0},Q=p.eventResetDelay||0,U=p.eventResizeHeightDuration||0,V=null,$=!1,ee=null,te=null,ne=!1,re=null,ae=p.callback||function(){},oe=p.watch!==!1,se=p.watchAll,ie=p.watchImages!==!1,le=null,ge=null,de=null,ce={targetElem:null,dragStone:null,targetStone:null,targetStoneOverLeft:0,autoDropTimer:null,autoDrop:function(){ce.targetStone&&ce.targetStone.classList.contains(B)&&(ce.targetStoneOverLeft?ce.dragStone!==ce.targetStone.previousElementSibling&&(ce.targetStone.parentElement.insertBefore(ce.dragStone,ce.targetStone),ce.targetStone.classList.remove(\"flagstone-left\"),ce.targetStone.classList.remove(\"flagstone-dragover\")):ce.dragStone!==ce.targetStone.nextElementSibling&&(ce.targetStone.parentElement.insertBefore(ce.dragStone,ce.targetStone.nextElementSibling),ce.targetStone.classList.remove(\"flagstone-right\"),ce.targetStone.classList.remove(\"flagstone-dragover\")),e.clearTimeout(ce.autoDropTimer),ce.autoDropTimer=e.setTimeout(ce.autoDrop,J))},clear:function(){ce.dragStone&&(ce.dragStone.classList.remove(\"flagstone-drag\"),ce.dragStone=null),ce.targetStone&&(ce.targetStoneOverLeft=0,ce.targetStone.classList.remove(\"flagstone-dragover\"),ce.targetStone.classList.remove(\"flagstone-left\"),ce.targetStone.classList.remove(\"flagstone-right\"),ce.targetStone=null),L.classList.remove(\"flagstone-dragover\")},getTargetElem:function(e){for(ce.targetElem=e.target instanceof HTMLElement?e.target:e.target.parentElement;ce.targetElem&&!ce.targetElem.classList.contains(\"flagstone-drag-handle\");)ce.targetElem=ce.targetElem.parentElement;if(ce.targetElem)for(ce.dragStone=ce.targetElem;ce.dragStone&&!ce.dragStone.classList.contains(B);)ce.dragStone=ce.dragStone.parentElement},mouseDown:function(e){ce.getTargetElem(e)},dragStart:function(e){return!!ce.targetElem&&(ce.dragStone.classList.add(\"flagstone-drag\"),void(e.dataTransfer&&e.dataTransfer.setData(\"text\",this.id)))},touchStart:function(e){ce.getTargetElem(e),ce.dragStart(e)},dragEnter:function(t){t.preventDefault(),t.stopPropagation(),this!==ce.dragStone&&this!==ce.targetStone&&this!==L&&(e.clearTimeout(ce.autoDropTimer),ce.autoDropTimer=e.setTimeout(ce.autoDrop,J))},touchMove:function(e){if(!ce.dragStone)return!1;e.preventDefault(),e.stopPropagation();for(var n=t.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY),r=n;r&&!r.classList.contains(B);)r=r.parentElement;r?(L.classList.remove(\"flagstone-dragover\"),ce.targetStoneOverLeft=r.getBoundingClientRect().left+r.offsetWidth/2>e.touches[0].clientX,ce.targetStone&&ce.targetStone!==r&&(ce.targetStone.classList.remove(\"flagstone-dragover\"),ce.targetStone.classList.remove(\"flagstone-left\"),ce.targetStone.classList.remove(\"flagstone-right\")),ce.targetStone=r,ce.targetStone.classList.contains(\"flagstone-lock\")||(ce.targetStone.classList.add(\"flagstone-dragover\"),ce.targetStoneOverLeft?(ce.targetStone.classList.remove(\"flagstone-right\"),ce.targetStone.classList.add(\"flagstone-left\")):(ce.targetStone.classList.remove(\"flagstone-left\"),ce.targetStone.classList.add(\"flagstone-right\")))):n===L&&(ce.targetStone.classList.remove(\"flagstone-dragover\"),ce.targetStone.classList.remove(\"flagstone-left\"),ce.targetStone.classList.remove(\"flagstone-right\"),L.classList.add(\"flagstone-dragover\"),ce.targetStone=L)},dragOver:function(e){return!!ce.dragStone&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=\"move\",void(this!==ce.dragStone&&this.classList.contains(B)?(ce.targetStone=this,ce.targetStone.classList.add(\"flagstone-dragover\"),ce.targetStoneOverLeft=this.getBoundingClientRect().left+this.offsetWidth/2>e.clientX,ce.targetStoneOverLeft?(ce.targetStone.classList.remove(\"flagstone-right\"),ce.targetStone.classList.add(\"flagstone-left\")):(ce.targetStone.classList.remove(\"flagstone-left\"),ce.targetStone.classList.add(\"flagstone-right\")),this.classList.remove(\"flagstone-dragover\"),ce.targetStone!==L&&L.classList.remove(\"flagstone-dragover\")):this===L&&this.classList.add(\"flagstone-dragover\")))},dragEnd:function(){ce.clear()},touchEnd:function(){ce.dragStone&&ce.targetStone&&!ce.targetStone.classList.contains(\"flagstone-lock\")&&K(ce.dropStone,ce.targetStone)&&(ce.targetStone===L?L.appendChild(ce.dragStone):ce.targetStoneOverLeft?L.insertBefore(ce.dragStone,ce.targetStone):L.insertBefore(ce.dragStone,ce.targetStone.nextElementSibling)),ce.clear()},dragLeave:function(){ce.targetStone&&(ce.targetStone.classList.remove(\"flagstone-dragover\"),ce.targetStone.classList.remove(\"flagstone-left\"),ce.targetStone.classList.remove(\"flagstone-right\"),L.classList.remove(\"flagstone-dragover\"))},drop:function(t){if(!ce.dragStone)return!1;if(t.stopPropagation(),e.clearTimeout(ce.autoDropTimer),ce.dragStone!==this&&(this.classList.contains(B)||this===L)){if(ce.targetStone=this,ce.targetStone===L){if(!K(ce.dragStone,ce.targetStone))return ce.clear(),!1;ce.targetStone.appendChild(ce.dragStone)}else if(ce.targetStoneOverLeft){if(!K(ce.dragStone,ce.targetStone))return ce.clear(),!1;ce.targetStone.parentElement.insertBefore(ce.dragStone,ce.targetStone)}else{if(!K(ce.dragStone,ce.targetStone.nextElementSibling))return ce.clear(),!1;ce.targetStone.parentElement.insertBefore(ce.dragStone,ce.targetStone.nextElementSibling)}ce.clear(),e.MutationObserver||!oe&&!se||de()}return!1}};return de=function(){k=Array.prototype.slice.call(L.children);for(var t=0,n=k.length;t<n;t++)k[t].classList.add(B),I&&(k[t].style.zIndex=n-t);if(ie)for(var r=L.getElementsByTagName(\"img\"),o=0,s=r.length;o<s;o++)r[o].naturalWidth||(r[o].removeEventListener(\"load\",l),r[o].addEventListener(\"load\",l),r[o].removeEventListener(\"error\",l),r[o].addEventListener(\"error\",l));for(t=0;t<n;t++)k[t].removeAttribute(\"draggable\"),k[t].removeEventListener(\"mousedown\",ce.mouseDown),k[t].removeEventListener(\"dragstart\",ce.dragStart),k[t].removeEventListener(\"touchstart\",ce.touchStart),k[t].removeEventListener(\"touchmove\",ce.touchMove),k[t].removeEventListener(\"dragover\",ce.dragOver),k[t].removeEventListener(\"dragleave\",ce.dragLeave),k[t].removeEventListener(\"dragend\",ce.dragEnd),k[t].removeEventListener(\"touchend\",ce.touchEnd),k[t].removeEventListener(\"drop\",ce.drop),k[t].removeEventListener(\"touchend\",ce.drop),k[t].removeEventListener(\"dragenter\",ce.dragEnter);if(L.removeEventListener(\"dragover\",ce.dragOver),L.removeEventListener(\"drop\",ce.drop),G){for(t=0;t<n;t++)k[t].classList.contains(\"flagstone-lock\")||(k[t].setAttribute(\"draggable\",\"true\"),k[t].addEventListener(\"mousedown\",ce.mouseDown),k[t].addEventListener(\"dragstart\",ce.dragStart),k[t].addEventListener(\"touchstart\",ce.touchStart),k[t].addEventListener(\"touchmove\",ce.touchMove),k[t].addEventListener(\"dragover\",ce.dragOver),k[t].addEventListener(\"dragleave\",ce.dragLeave),k[t].addEventListener(\"dragend\",ce.dragEnd),k[t].addEventListener(\"touchend\",ce.touchEnd),k[t].addEventListener(\"drop\",ce.drop),k[t].addEventListener(\"touchend\",ce.drop),J&&k[t].addEventListener(\"dragenter\",ce.dragEnter),k[t].getElementsByClassName(\"flagstone-drag-handle\").length||k[t].classList.add(\"flagstone-drag-handle\"));L.addEventListener(\"dragover\",ce.dragOver),L.addEventListener(\"drop\",ce.drop)}(P||N)&&(P&&k.sort(function(){return.5-Math.random()}),N&&a());var i=L.getElementsByClassName(\"flagstone-remove\");for(t=0,n=i.length;t<n;t++)i[t].removeEventListener(\"click\",g),i[t].addEventListener(\"click\",g),i[t].removeEventListener(\"keydown\",g),i[t].addEventListener(\"keydown\",g);for(i=L.getElementsByClassName(\"flagstone-reset\"),t=0,n=i.length;t<n;t++)i[t].removeEventListener(\"click\",d),i[t].addEventListener(\"click\",d),i[t].removeEventListener(\"keydown\",d),i[t].addEventListener(\"keydown\",d);for(i=L.getElementsByClassName(\"flagstone-resize-height\"),t=0,n=i.length;t<n;t++)i[t].removeEventListener(\"click\",m),i[t].addEventListener(\"click\",m),i[t].removeEventListener(\"keydown\",m),i[t].addEventListener(\"keydown\",m);l(),e.setTimeout(function(){l(!0)},W)},function(){if(o(),L.classList.add(\"flagstone-\"+S+\"-bed\"),!t.getElementById(\"flagstone-\"+S+\"-styles\")){var n=\".flagstone-\"+S+\"-bed{box-sizing:border-box;list-style-type:none;overflow:hidden;position:relative;min-width:\"+(T+2*E)+\"px;}\",r=\".flagstone-\"+S+\"-bed__stone{box-sizing:border-box;position:absolute;top:0px;\"+z+\":0px;margin:0;}\",a=\".flagstone-\"+S+\"-bed__stone{transition:transform \"+H+\"s \"+R+(F?\",width \"+H+\"s \"+R:\"\")+(_?\",height \"+X+\"s \"+j:\"\")+\";}\",s=n+r+a,i=t.createElement(\"style\");i.type=\"text/css\",i.id=\"flagstone-\"+S+\"-styles\",i.appendChild(t.createTextNode(s)),t.head.appendChild(i)}if(de(),e.removeEventListener(\"resize\",f),e.addEventListener(\"resize\",f),e.MutationObserver&&(oe||se)){var l=new e.MutationObserver(v);se&&ie?l.observe(L,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[\"src\"]}):l.observe(L,{childList:!0,subtree:se})}}(),{adjust:h,destroy:u,resizeHeight:c,hide:o,reset:f,hardReset:de}}return e.flagstone.index++,new a(n,r)},e.flagstone.index=-1}(window,document);</script></body></html>"
  );


  $templateCache.put('scripts/view-components/pwidget/com-vyom-vyomlib-pwidget-design.directive.html',
    "<h5>No Edit</h5>"
  );


  $templateCache.put('scripts/view-components/pwidget/com-vyom-vyomlib-pwidget.directive.html',
    "<html><head><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"/com.vyom.vyomlib/resources/pwidget3/css/myPage.css\"></head><body><!-----------------temp table-------><div class=\"container\"><div class=\"row\"><div class=\"widgetTable\"><table id=\"mytable\" class=\"grid-table\" style=\"table-layout: fixed; width: 100%\"><tr><td><div id=\"Profile\"><div id=\"profileWidgetTD\"><div class=\"widget panelbox\"><div class=\"profile\"><p class=\"profile-image\" style=\"text-align:center\"><img src=\"/com.vyom.vyomlib/resources/pwidget3/images/icons/personicon.png\" align=\"middle\" style=\"border-radius: 50%\"></p><h3 align=\"center\" style=\"color: black\" class=\"name\">{{CurrentUserFullName}}</h3><p style=\"text-align:center; font-size: 10px\" class=\"des\">Software Engineer<br>Delhi Gurgaon</p><p class=\"profile-details\" style=\"text-align:center; font-size: 11px\"><b>Email: </b>{{rxCurrentUser.getemailAddress()}}<br><b>Phone: </b>9865785432</p></div></div></div></div></td><td><div id=\"VmWare\"><div id=\"ER1\" class=\"panelbox ER\"><!--ER HTML--><div class=\"ER-main\"><img alt=\"suggestion_icon\" class=\"img-responsive icons custom-widet\" src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/016-web-management.png\" width=\"40px\"><p class=\"request-title\">VmWare <a id=\"ERReport\" href=\"#\"><i class=\"fa fa-file-excel-o ERadmin\" title=\"ER Reports\" aria-hidden=\"true\"></i> </a><a id=\"ERadminconsole\" href=\"#\"><i class=\"fa fa fa-user-o ERadminconsole\" title=\"Admin Console\" aria-hidden=\"true\"></i></a></p><hr style=\"height:2px; color:grey\"><div id=\"ER\"><div class=\"ERhexbox\"><div class=\"requestDetails\"><b class=\"b\">Details:</b><div class=\"description\"><table class=\"table table-striped table-hover custom-table\"><thead><th>ID</th><th>Name</th><th>Description</th></thead><tbody><tr ng-repeat=\"m in vmData\"><td>{{$index+1}}</td><td><a href=\"\">{{m[vmNameId]}}</a></td><td>{{m[vmDescId]}}</td></tr></tbody></table></div><div class=\"request-button-bottom\"><button class=\"btn btn-primary\" style=\"margin-left: 10px;margin-right: 5px\">Request</button> <button class=\"btn btn-warning\" style=\"margin-left: 5px;margin-right: 5px\">Refresh</button> <button class=\"btn btn-success\" style=\"margin-left: 5px;margin-right: 5px\">Launch</button> <button class=\"btn btn-danger\" style=\"margin-left: 5px;margin-right: 5px\">Release</button></div></div></div><div class=\"RequestButtons\"><div class=\"large-image\"><img src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/016-web-management.png\"></div><div class=\"buttons\"><div class=\"count\"><div class=\"active\"><b>03</b><br>Active</div><br><div class=\"disabled\"><b>12</b><br>Disabled</div></div></div></div></div></div><!--ER HTML--></div></div></td><td><div id=\"Shared Folder Access\"><div id=\"ER1\" class=\"panelbox ER\"><!--ER HTML--><div class=\"ER-main\"><img alt=\"suggestion_icon\" class=\"img-responsive icons custom-widet\" src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/024-ads.png\" width=\"40px\"><p class=\"request-title\">Shared Folder Access <a id=\"ERReport\" href=\"#\"><i class=\"fa fa-file-excel-o ERadmin\" title=\"ER Reports\" aria-hidden=\"true\"></i> </a><a id=\"ERadminconsole\" href=\"#\"><i class=\"fa fa fa-user-o ERadminconsole\" title=\"Admin Console\" aria-hidden=\"true\"></i></a></p><hr style=\"height:2px; color:grey\"><div id=\"ER\"><div class=\"ERhexbox\"><div class=\"requestDetails\"><b class=\"b\">Folder Name:</b> <a href=\"#\"><p class=\"description1\">Unix</p></a><b class=\"b\">Type:</b><p>public</p><div class=\"request-keywords\"><b class=\"b\">Description:</b><br><p>Unable to access</p></div><div class=\"request-keywords\"><b class=\"b\">Access Type:</b><p>classic</p></div></div></div><div class=\"RequestButtons\"><div class=\"large-image\"><img src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/024-ads.png\"></div><div class=\"buttons\"><button class=\"btn btn-success\">Release</button><br><button class=\"btn btn-success\">Backup</button><br><button class=\"btn btn-success\">Share</button></div></div></div></div><!--ER HTML--></div></div></td></tr><tr><td><div id=\"Jira\"><div id=\"ER1\" class=\"panelbox ER\"><!--ER HTML--><div class=\"ER-main\"><img alt=\"suggestion_icon\" class=\"img-responsive icons custom-widet\" src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/jira.png\" width=\"40px\"><p class=\"request-title\">Jira <a id=\"ERReport\" href=\"#\"><i class=\"fa fa-file-excel-o ERadmin\" title=\"ER Reports\" aria-hidden=\"true\"></i> </a><a id=\"ERadminconsole\" href=\"#\"><i class=\"fa fa fa-user-o ERadminconsole\" title=\"Admin Console\" aria-hidden=\"true\"></i></a></p><hr style=\"height:2px; color:grey\"><div id=\"ER\"><div class=\"ERhexbox\"><div class=\"requestDetails\"><b class=\"b\">Projects assigned:</b><div class=\"description1 project-assigned\"><ul class=\"poject-assigned\"><a href=\"#\"><li>Windows Phone App</li></a><a href=\"#\"><li>New Web Applicaion</li></a><a href=\"#\"><li>Android Resrvation</li></a><a href=\"#\"><li>Project 4</li></a></ul></div><b class=\"b\">Issues assigned:</b><div class=\"description1 project-assigned\"><ul class=\"poject-assigned\"><a href=\"#\"><li>Email Exchange Server</li></a><a href=\"#\"><li>Database Down</li></a><a href=\"#\"><li>Unable to access folder</li></a><a href=\"#\"><li>Issue 4</li></a></ul></div></div></div><div class=\"RequestButtons\"><div class=\"large-image\"><img src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/jira.png\"></div><div class=\"buttons\"><button class=\"btn btn-success\">Request</button><br><button class=\"btn btn-success\">Assign</button><br><button class=\"btn btn-success\">Launch</button></div></div></div></div><!--ER HTML--></div></div></td><td><div id=\"Box Enterprise\"><div id=\"ER1\" class=\"panelbox ER\"><!--ER HTML--><div class=\"ER-main\"><img alt=\"suggestion_icon\" class=\"img-responsive icons custom-widet\" src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/008-marketing-strategy.png\" width=\"40px\"><p class=\"request-title\">Box Enterprise<!--                            <span class=\"glyphicon glyphicon-pencil glyphicon-icon\"></span>--><!--\r" +
    "\n" +
    "                            <a id=\"erhelp\" href=\"#\" >\r" +
    "\n" +
    "                                <i class=\"fa fa-question-circle ERhelp\" title=\"Ask for Help\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "--> <a id=\"ERReport\" href=\"#\"><i class=\"fa fa-file-excel-o ERadmin\" title=\"ER Reports\" aria-hidden=\"true\"></i> </a><a id=\"ERadminconsole\" href=\"#\"><i class=\"fa fa fa-user-o ERadminconsole\" title=\"Admin Console\" aria-hidden=\"true\"></i></a></p><hr style=\"height:2px; color:grey\"><div id=\"ER\"><div class=\"ERhexbox\"><div class=\"requestDetails\"><b class=\"b\">Details:</b><p class=\"description1\">Description and Details of the Service will appear in this section of the widget.</p><b class=\"b\">Status:</b><p>Scheduled for Approval</p><div class=\"request-keywords\"><b class=\"b\">Keywords:</b><br><button class=\"btn btn-primary\" style=\"margin-left: 10px\">VmWare</button> <button class=\"btn btn-success\">VirtualBox</button> <button class=\"btn btn-warning\">Virtual</button> <button class=\"btn btn-danger\">VM</button></div></div></div><div class=\"RequestButtons\"><div class=\"large-image\"><img src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/008-marketing-strategy.png\"></div><div class=\"buttons\"><button class=\"btn btn-success\">Request</button><br><button class=\"btn btn-success\">Release</button><br><button class=\"btn btn-success\">Launch</button></div></div></div></div><!--ER HTML--></div></div></td><td><div id=\"Widget 1\"><div id=\"ER1\" class=\"panelbox ER\"><!--ER HTML--><div class=\"ER-main\"><img alt=\"suggestion_icon\" class=\"img-responsive icons custom-widet\" src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/023-target-1.png\" width=\"40px\"><p class=\"request-title\">Widget 1 <a id=\"ERReport\" href=\"#\"><i class=\"fa fa-file-excel-o ERadmin\" title=\"ER Reports\" aria-hidden=\"true\"></i> </a><a id=\"ERadminconsole\" href=\"#\"><i class=\"fa fa fa-user-o ERadminconsole\" title=\"Admin Console\" aria-hidden=\"true\"></i></a></p><hr style=\"height:2px; color:grey\"><div id=\"ER\"><div class=\"ERhexbox\"><div class=\"requestDetails\"><b class=\"b\">Details:</b><p class=\"description1\">Description and Details of the Service will appear in this section of the widget.</p><b class=\"b\">Status:</b><p>Scheduled for Approval</p><div class=\"request-keywords\"><b class=\"b\">Keywords:</b><br><button class=\"btn btn-primary\" style=\"margin-left: 10px\">VmWare</button> <button class=\"btn btn-success\">VirtualBox</button> <button class=\"btn btn-warning\">Virtual</button> <button class=\"btn btn-danger\">VM</button></div></div></div><div class=\"RequestButtons\"><div class=\"large-image\"><img src=\"/com.vyom.vyomlib/resources/pwidget3/images/png/023-target-1.png\"></div><div class=\"buttons\"><button class=\"btn btn-success\">Request</button><br><button class=\"btn btn-success\">Release</button><br><button class=\"btn btn-success\">Launch</button></div></div></div></div><!--ER HTML--></div></div></td></tr></table></div></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/registration/com-vyom-vyomlib-registration-design.directive.html',
    "<h3>This is test vc</h3>"
  );


  $templateCache.put('scripts/view-components/registration/com-vyom-vyomlib-registration.directive.html',
    "<!doctype html>\r" +
    "\n" +
    "<html lang=\"en\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "<head>\r" +
    "\n" +
    "    <meta charset=\"utf-8\" />\r" +
    "\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\r" +
    "\n" +
    "    <title>Material Bootstrap</title>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\r" +
    "\n" +
    "    <meta name=\"viewport\" content=\"width=device-width\" />\r" +
    "\n" +
    "    <!-- bootstrap-min.css -->\r" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"\r" +
    "\n" +
    "        integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\r" +
    "\n" +
    "    <!-- <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"assets/img/apple-icon.png\" />\r" +
    "\n" +
    "    <link rel=\"icon\" type=\"image/png\" href=\"assets/img/favicon.png\" /> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!--     Fonts and icons     -->\r" +
    "\n" +
    "    <link rel=\"stylesheet\" type=\"text/css\"\r" +
    "\n" +
    "        href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons\" />\r" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- CSS Files -->\r" +
    "\n" +
    "    <!-- <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\" /> -->\r" +
    "\n" +
    "    <!-- <link href=\"assets/css/material-bootstrap-wizard.css\" rel=\"stylesheet\" /> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- CSS Just for demo purpose, don't include it in your project -->\r" +
    "\n" +
    "    <!-- <link href=\"assets/css/demo.css\" rel=\"stylesheet\" /> -->\r" +
    "\n" +
    "</head>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<body>\r" +
    "\n" +
    "    <div class=\"image-container set-full-height\"\r" +
    "\n" +
    "        style=\"background-image: url('/com.vyom.vyomlib/resources/wizard_reg/images/wizard-book.jpg')\">\r" +
    "\n" +
    "        <!--   Creative Tim Branding   -->\r" +
    "\n" +
    "        <!-- <a href=\"http://creative-tim.com\">\r" +
    "\n" +
    "            <div class=\"logo-container\">\r" +
    "\n" +
    "                <div class=\"logo\">\r" +
    "\n" +
    "                    <img src=\"assets/img/new_logo.png\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"brand\">\r" +
    "\n" +
    "                    Creative Tim\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </a> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--  Made With Material Kit  -->\r" +
    "\n" +
    "        <!-- <a href=\"http://demos.creative-tim.com/material-kit/index.html?ref=material-bootstrap-wizard\"\r" +
    "\n" +
    "            class=\"made-with-mk\">\r" +
    "\n" +
    "            <div class=\"brand\">MK</div>\r" +
    "\n" +
    "            <div class=\"made-with\">Made with <strong>Material Kit</strong></div>\r" +
    "\n" +
    "        </a> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--   Big container   -->\r" +
    "\n" +
    "        <div class=\"container\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-sm-12\">\r" +
    "\n" +
    "                    <!--      Wizard container        -->\r" +
    "\n" +
    "                    <div class=\"wizard-container\">\r" +
    "\n" +
    "                        <div class=\"card wizard-card\" data-color=\"green\" id=\"wizard\">\r" +
    "\n" +
    "                            <form action=\"\" method=\"\">\r" +
    "\n" +
    "                                <!--        You can switch \" data-color=\"blue\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"purple\"             -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"wizard-header\">\r" +
    "\n" +
    "                                    <h3 class=\"wizard-title\">\r" +
    "\n" +
    "                                        Onboard a New User\r" +
    "\n" +
    "                                    </h3>\r" +
    "\n" +
    "                                    <h5>This information will let us know more about you.</h5>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"wizard-navigation\">\r" +
    "\n" +
    "                                    <ul class=\"nav nav-pills\">\r" +
    "\n" +
    "                                        <li style=\"width:33% !important\"><a href=\"#details\"\r" +
    "\n" +
    "                                                data-toggle=\"tab\">Account</a></li>\r" +
    "\n" +
    "                                        <li style=\"width:33% !important\"><a href=\"#captain\"\r" +
    "\n" +
    "                                                data-toggle=\"tab\">Vertical</a></li>\r" +
    "\n" +
    "                                        <li style=\"width:33% !important\"><a href=\"#description\" data-toggle=\"tab\">\r" +
    "\n" +
    "                                                Details</a>\r" +
    "\n" +
    "                                        </li>\r" +
    "\n" +
    "                                    </ul>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"tab-content\">\r" +
    "\n" +
    "                                    <div class=\"tab-pane\" id=\"details\">\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <div class=\"col-sm-12\">\r" +
    "\n" +
    "                                                <h4 class=\"info-text\"> Let's start with the basic details.</h4>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                                <div class=\"input-group\">\r" +
    "\n" +
    "                                                    <span class=\"input-group-addon\">\r" +
    "\n" +
    "                                                        <i class=\"material-icons\">email</i>\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                    <div class=\"form-group label-floating\">\r" +
    "\n" +
    "                                                        <label class=\"control-label\">Your Email</label>\r" +
    "\n" +
    "                                                        <input name=\"name\" type=\"text\" class=\"form-control\">\r" +
    "\n" +
    "                                                    </div>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                <div class=\"input-group\">\r" +
    "\n" +
    "                                                    <span class=\"input-group-addon\">\r" +
    "\n" +
    "                                                        <i class=\"material-icons\">lock_outline</i>\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                    <div class=\"form-group label-floating\">\r" +
    "\n" +
    "                                                        <label class=\"control-label\">Your Password</label>\r" +
    "\n" +
    "                                                        <input name=\"name2\" type=\"password\" class=\"form-control\">\r" +
    "\n" +
    "                                                    </div>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                                <div class=\"form-group label-floating\">\r" +
    "\n" +
    "                                                    <label class=\"control-label\">Country</label>\r" +
    "\n" +
    "                                                    <select class=\"form-control\">\r" +
    "\n" +
    "                                                        <option disabled=\"\" selected=\"\"></option>\r" +
    "\n" +
    "                                                        <option value=\"Afghanistan\"> Afghanistan </option>\r" +
    "\n" +
    "                                                        <option value=\"Albania\"> Albania </option>\r" +
    "\n" +
    "                                                        <option value=\"Algeria\"> Algeria </option>\r" +
    "\n" +
    "                                                        <option value=\"American Samoa\"> American Samoa </option>\r" +
    "\n" +
    "                                                        <option value=\"Andorra\"> Andorra </option>\r" +
    "\n" +
    "                                                        <option value=\"Angola\"> Angola </option>\r" +
    "\n" +
    "                                                        <option value=\"Anguilla\"> Anguilla </option>\r" +
    "\n" +
    "                                                        <option value=\"Antarctica\"> Antarctica </option>\r" +
    "\n" +
    "                                                        <option value=\"...\">...</option>\r" +
    "\n" +
    "                                                    </select>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"form-group label-floating\">\r" +
    "\n" +
    "                                                    <label class=\"control-label\">Company Name</label>\r" +
    "\n" +
    "                                                    <select class=\"form-control\">\r" +
    "\n" +
    "                                                        <option disabled=\"\" selected=\"\"></option>\r" +
    "\n" +
    "                                                        <option value=\"Afghanistan\">\r" +
    "\n" +
    "                                                            < $100 </option>\r" +
    "\n" +
    "                                                        <option value=\"Albania\"> $100 - $499 </option>\r" +
    "\n" +
    "                                                        <option value=\"Algeria\"> $499 - $999 </option>\r" +
    "\n" +
    "                                                        <option value=\"American Samoa\"> $999+ </option>\r" +
    "\n" +
    "                                                    </select>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"tab-pane\" id=\"captain\">\r" +
    "\n" +
    "                                        <h4 class=\"info-text\">Select your vertical </h4>\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <div class=\"col-sm-10 col-sm-offset-1\">\r" +
    "\n" +
    "                                                <div class=\"col-sm-4\">\r" +
    "\n" +
    "                                                    <div class=\"choice\" data-toggle=\"wizard-radio\" rel=\"tooltip\"\r" +
    "\n" +
    "                                                        title=\"Select this option your vertical is Finance.\">\r" +
    "\n" +
    "                                                        <input type=\"radio\" name=\"job\" value=\"Design\">\r" +
    "\n" +
    "                                                        <div class=\"icon\" style=\"display: block;\">\r" +
    "\n" +
    "                                                            <i class=\"fa fa-dollar\"></i>\r" +
    "\n" +
    "                                                        </div>\r" +
    "\n" +
    "                                                        <h6>Finance</h6>\r" +
    "\n" +
    "                                                    </div>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"col-sm-4\">\r" +
    "\n" +
    "                                                    <div class=\"choice\" data-toggle=\"wizard-radio\" rel=\"tooltip\"\r" +
    "\n" +
    "                                                        title=\"Select this option your vertical is HR.\">\r" +
    "\n" +
    "                                                        <input type=\"radio\" name=\"job\" value=\"Code\">\r" +
    "\n" +
    "                                                        <div class=\"icon\" style=\"display: block;\">\r" +
    "\n" +
    "                                                            <i class=\"fa fa-user\"></i>\r" +
    "\n" +
    "                                                        </div>\r" +
    "\n" +
    "                                                        <h6>HR</h6>\r" +
    "\n" +
    "                                                    </div>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                                <div class=\"col-sm-4\">\r" +
    "\n" +
    "                                                    <div class=\"choice\" data-toggle=\"wizard-radio\" rel=\"tooltip\"\r" +
    "\n" +
    "                                                        title=\"Select this option your vertical is IT.\">\r" +
    "\n" +
    "                                                        <input type=\"radio\" name=\"job\" value=\"Code\">\r" +
    "\n" +
    "                                                        <div class=\"icon\" style=\"display: block;\">\r" +
    "\n" +
    "                                                            <i class=\"material-icons\">business</i>\r" +
    "\n" +
    "                                                        </div>\r" +
    "\n" +
    "                                                        <h6>IT</h6>\r" +
    "\n" +
    "                                                    </div>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"tab-pane\" id=\"description\">\r" +
    "\n" +
    "                                        <div class=\"row\" style=\"display: block;\">\r" +
    "\n" +
    "                                            <h4 class=\"info-text\"> Drop us a small description.</h4>\r" +
    "\n" +
    "                                            <div class=\"col-sm-6 col-sm-offset-1\">\r" +
    "\n" +
    "                                                <div class=\"form-group\">\r" +
    "\n" +
    "                                                    <label>User description</label>\r" +
    "\n" +
    "                                                    <textarea class=\"form-control\" placeholder=\"\" rows=\"6\"></textarea>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <!-- <div class=\"col-sm-4\">\r" +
    "\n" +
    "                                                <div class=\"form-group\">\r" +
    "\n" +
    "                                                    <label class=\"control-label\">Description</label>\r" +
    "\n" +
    "                                                    <p class=\"description\">Your Description</p>\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "                                            </div> -->\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"wizard-footer\">\r" +
    "\n" +
    "                                    <div class=\"pull-right\">\r" +
    "\n" +
    "                                        <input type='button' class='btn btn-next btn-fill btn-success btn-wd'\r" +
    "\n" +
    "                                            name='next' value='Next' />\r" +
    "\n" +
    "                                        <input type='button' class='btn btn-finish btn-fill btn-success btn-wd'\r" +
    "\n" +
    "                                            name='finish' value='Finish' />\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"pull-left\">\r" +
    "\n" +
    "                                        <input type='button' class='btn btn-previous btn-fill btn-default btn-wd'\r" +
    "\n" +
    "                                            name='previous' value='Previous' />\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <!-- <div class=\"clearfix\"></div> -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </form>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div> <!-- wizard container -->\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div> <!-- row -->\r" +
    "\n" +
    "        </div> <!--  big container -->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</body>\r" +
    "\n" +
    "<!--   Core JS Files   -->\r" +
    "\n" +
    "<script src=\"/com.vyom.vyomlib/resources/wizard_reg/js/jquery-2.2.4.min.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "<!-- <script src=\"assets/js/jquery-2.2.4.min.js\" type=\"text/javascript\"></script> -->\r" +
    "\n" +
    "<script src=\"/com.vyom.vyomlib/resources/wizard_reg/js/bootstrap.min.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "<!-- <script src=\"assets/js/bootstrap.min.js\" type=\"text/javascript\"></script> -->\r" +
    "\n" +
    "<script src=\"/com.vyom.vyomlib/resources/wizard_reg/js/jquery.bootstrap.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "<!-- <script src=\"assets/js/jquery.bootstrap.js\" type=\"text/javascript\"></script> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--  Plugin for the Wizard -->\r" +
    "\n" +
    "<script src=\"/com.vyom.vyomlib/resources/wizard_reg/js/material-bootstrap-wizard.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- <script src=\"assets/js/material-bootstrap-wizard.js\"></script> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--  More information about jquery.validate here: http://jqueryvalidation.org/	 -->\r" +
    "\n" +
    "<script src=\"/com.vyom.vyomlib/resources/wizard_reg/js/jquery.validate.min.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "<!-- <script src=\"assets/js/jquery.validate.min.js\"></script> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "</html>"
  );


  $templateCache.put('scripts/view-components/simple-widget/com-vyom-vyomlib-simple-widget-design.directive.html',
    "<h3>Simple Widget</h3>"
  );


  $templateCache.put('scripts/view-components/simple-widget/com-vyom-vyomlib-simple-widget.directive.html',
    "<!-- <div ng-style=\"{'background-color': displayColor, height: displayHeight, width: displayWidth, color: displayFontColor, font-family: displayFont}\">\r" +
    "\n" +
    "    {{displayOP}}    \r" +
    "\n" +
    "</div> --><!-- style=\"width:300px; margin:35px auto; border:black;\" --><html><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><head><title></title><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js\"></script><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css\"></head><body><div class=\"body1\"><!-- <div id=\"ex1\" class=\"modal modal-dialog \" style=\"width: 100%;height: 100%;max-width: 100%;max-height: 100%;border: none;\">\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <iframe ng-src=\"{{URL1}}\" src=\"{{URL1}}\" style=\"width:100%;height: 100%;border: none;\"></iframe>\r" +
    "\n" +
    "        <a href=\"#ex1\" rel=\"modal:close\" class=\"close-modal \">Close</a>\r" +
    "\n" +
    "    </div> --><div class=\"hover\"><span>More Details</span><!-- <a href=\"#ex1\" class=\"social-link\" rel=\"modal:open\" target=\"_blank\"> --> <a class=\"social-link\" ng-click=\"ViewButton()\" target=\"_blank\"><!-- <i class=\"fa fa-twitter\"></i></a> --> <i class=\"fa fa-th-list\" style=\"font-size:18px\"></i></a> <a href=\"https://codepen.io/joshuaward/\" class=\"social-link\" target=\"_blank\"><i class=\"fa fa-codepen\" style=\"font-size:18px\"></i></a> <a href=\"https://github.com/akshaypatwa/\" class=\"social-link\" target=\"_blank\"><i class=\"fa fa-tachometer\" style=\"font-size:18px\"></i></a> <a href=\"https://github.com/akshaypatwa\" class=\"social-link\" target=\"_blank\"><i class=\"fa fa-github\" style=\"font-size:18px\"></i></a></div></div></body></html><!-- div.hover\r" +
    "\n" +
    "span Hover Me\r" +
    "\n" +
    "a.social-link(href=\"https://twitter.com/twitter\" target=\"_blank\")\r" +
    "\n" +
    "i.fab.fa-twitter\r" +
    "\n" +
    "a.social-link(href=\"https://codepen.io/joshuaward/\" target=\"_blank\")\r" +
    "\n" +
    "i.fab.fa-codepen\r" +
    "\n" +
    "a.social-link(href=\"https://www.instagram.com/joshuaward/\" target=\"_blank\")\r" +
    "\n" +
    "i.fab.fa-instagram\r" +
    "\n" +
    "a.social-link(href=\"https://github.com/joshuaward\" target=\"_blank\")\r" +
    "\n" +
    "i.fab.fa-github -->"
  );


  $templateCache.put('scripts/view-components/test-vc1/com-vyom-vyomlib-test-vc1-design.directive.html',
    "<h3>Hierarchy1</h3>"
  );


  $templateCache.put('scripts/view-components/test-vc1/com-vyom-vyomlib-test-vc1.directive.html',
    "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame\r" +
    "\n" +
    "		Remove this if you use the .htaccess --><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,minimum-scale=1\"><title>jQuery Stiff Chart Plugin Demo</title><link href=\"https://www.jqueryscript.net/css/jquerysctipttop.css\" rel=\"stylesheet\" type=\"text/css\"><style>body { background-color:#fafafa; font-family:'Roboto';}\r" +
    "\n" +
    "		    button {background-color:#fafafa; font-family:'Roboto';}\r" +
    "\n" +
    "		    button:active,button.onclick {background-color:#3498db; font-family:'Roboto';}\r" +
    "\n" +
    "		    button {  outline: 0px; border:0px; }\r" +
    "\n" +
    "            \r" +
    "\n" +
    "		    .ilearnright {\r" +
    "\n" +
    "		    	/*width: 34%;*/\r" +
    "\n" +
    "		    	/*margin-right: 15%;*/\r" +
    "\n" +
    "		    	float:right;\r" +
    "\n" +
    "		    }\r" +
    "\n" +
    "		    .ilearnleft {\r" +
    "\n" +
    "		    	/*width: 66%;*/\r" +
    "\n" +
    "		    	float:left;\r" +
    "\n" +
    "		    	padding-top: 10px;\r" +
    "\n" +
    "		    }\r" +
    "\n" +
    "		    .overlay {\r" +
    "\n" +
    "		    		bottom: 0;\r" +
    "\n" +
    "		    		left: 0;\r" +
    "\n" +
    "		    		position: fixed;\r" +
    "\n" +
    "		    		right: 0;\r" +
    "\n" +
    "		    		top: 0;\r" +
    "\n" +
    "		    		background-color: #000;\r" +
    "\n" +
    "		    		opacity: .45;\r" +
    "\n" +
    "		    }\r" +
    "\n" +
    "        \r" +
    "\n" +
    "		    .titletext\r" +
    "\n" +
    "		    {\r" +
    "\n" +
    "		    	font-size: 25px;\r" +
    "\n" +
    "		    	padding: 12px 20px 12px 40px;\r" +
    "\n" +
    "		    	color:#b8860b;/*!Important*/\r" +
    "\n" +
    "		    }</style><style>* {\r" +
    "\n" +
    "              box-sizing: border-box;\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "\r" +
    "\n" +
    "            #myTable {\r" +
    "\n" +
    "              border-collapse: collapse;\r" +
    "\n" +
    "              width: 100%;\r" +
    "\n" +
    "              border: 1px solid #ddd;\r" +
    "\n" +
    "              font-size: 14px;	\r" +
    "\n" +
    "              /*background-color:#ffffff47;*/\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "            #myTable th {\r" +
    "\n" +
    "              cursor: pointer;\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "\r" +
    "\n" +
    "            #myTable th, #myTable td {\r" +
    "\n" +
    "              text-align: left;\r" +
    "\n" +
    "              padding: 12px;\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "            #myTable th {\r" +
    "\n" +
    "              background-color:#005293; /*#3498db;*/\r" +
    "\n" +
    "              color:white;	\r" +
    "\n" +
    "              background-clip: none;\r" +
    "\n" +
    "              border-top-color: #005293;\r" +
    "\n" +
    "              border-right-color: initial;\r" +
    "\n" +
    "              border-left-color: initial;\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "\r" +
    "\n" +
    "             #myTable td:last-child{\r" +
    "\n" +
    "              border-bottom-right-radius: 8px;\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "\r" +
    "\n" +
    "            #myTable th:last-child  {\r" +
    "\n" +
    "                border-top-right-radius: 8px;\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "            #myTable th:nth-child(1)  {\r" +
    "\n" +
    "                border-top-left-radius: 8px;\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "\r" +
    "\n" +
    "            #myTable tr {\r" +
    "\n" +
    "              border-bottom: 1px solid #ddd;\r" +
    "\n" +
    "              border-radius: 8px;\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "\r" +
    "\n" +
    "            #myTable tr.header, #myTable tr:hover {\r" +
    "\n" +
    "              background-color: #f1f1f1;\r" +
    "\n" +
    "            }</style><script>function sortTable(n) {\r" +
    "\n" +
    "            var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;\r" +
    "\n" +
    "            table = document.getElementById(\"myTable\");\r" +
    "\n" +
    "            switching = true;\r" +
    "\n" +
    "            //Set the sorting direction to ascending:\r" +
    "\n" +
    "            dir = \"asc\"; \r" +
    "\n" +
    "            /*Make a loop that will continue until\r" +
    "\n" +
    "            no switching has been done:*/\r" +
    "\n" +
    "            while (switching) {\r" +
    "\n" +
    "                //start by saying: no switching is done:\r" +
    "\n" +
    "                switching = false;\r" +
    "\n" +
    "                rows = table.rows;\r" +
    "\n" +
    "                /*Loop through all table rows (except the\r" +
    "\n" +
    "                first, which contains table headers):*/\r" +
    "\n" +
    "                for (i = 1; i < (rows.length - 1); i++) {\r" +
    "\n" +
    "                //start by saying there should be no switching:\r" +
    "\n" +
    "                shouldSwitch = false;\r" +
    "\n" +
    "                /*Get the two elements you want to compare,\r" +
    "\n" +
    "                one from current row and one from the next:*/\r" +
    "\n" +
    "                x = rows[i].getElementsByTagName(\"TD\")[n];\r" +
    "\n" +
    "                y = rows[i + 1].getElementsByTagName(\"TD\")[n];\r" +
    "\n" +
    "                /*check if the two rows should switch place,\r" +
    "\n" +
    "                based on the direction, asc or desc:*/\r" +
    "\n" +
    "                if (dir == \"asc\") {\r" +
    "\n" +
    "                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {\r" +
    "\n" +
    "                    //if so, mark as a switch and break the loop:\r" +
    "\n" +
    "                    shouldSwitch= true;\r" +
    "\n" +
    "                    break;\r" +
    "\n" +
    "                    }\r" +
    "\n" +
    "                } else if (dir == \"desc\") {\r" +
    "\n" +
    "                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {\r" +
    "\n" +
    "                    //if so, mark as a switch and break the loop:\r" +
    "\n" +
    "                    shouldSwitch = true;\r" +
    "\n" +
    "                    break;\r" +
    "\n" +
    "                    }\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                if (shouldSwitch) {\r" +
    "\n" +
    "                /*If a switch has been marked, make the switch\r" +
    "\n" +
    "                and mark that a switch has been done:*/\r" +
    "\n" +
    "                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);\r" +
    "\n" +
    "                switching = true;\r" +
    "\n" +
    "                //Each time a switch is done, increase this count by 1:\r" +
    "\n" +
    "                switchcount ++;      \r" +
    "\n" +
    "                } else {\r" +
    "\n" +
    "                /*If no switching has been done AND the direction is \"asc\",\r" +
    "\n" +
    "                set the direction to \"desc\" and run the while loop again.*/\r" +
    "\n" +
    "                if (switchcount == 0 && dir == \"asc\") {\r" +
    "\n" +
    "                    dir = \"desc\";\r" +
    "\n" +
    "                    switching = true;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "            }</script></head><body style=\"background-color: white\"><div class=\"row\"><div class=\"col-sm-12\"><script src=\"https://code.jquery.com/jquery-3.1.1.min.js\"></script><script src=\"/com.vyom.vyomlib/resources/hierarchy/js/stiffchart.js\"></script><script>$(document).ready(function() {\r" +
    "\n" +
    "					  $('#your-chart-name').stiffChart({\r" +
    "\n" +
    "						\r" +
    "\n" +
    "					  });\r" +
    "\n" +
    "					});</script><script type=\"text/javascript\">var _gaq = _gaq || [];\r" +
    "\n" +
    "					  _gaq.push(['_setAccount', 'UA-36251023-1']);\r" +
    "\n" +
    "					  _gaq.push(['_setDomainName', 'jqueryscript.net']);\r" +
    "\n" +
    "					  _gaq.push(['_trackPageview']);\r" +
    "\n" +
    "\r" +
    "\n" +
    "					  (function() {\r" +
    "\n" +
    "						var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\r" +
    "\n" +
    "						ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\r" +
    "\n" +
    "						var s = document.getElementsByTagName('script')[0]; \r" +
    "\n" +
    "						s.parentNode.insertBefore(ga, s);\r" +
    "\n" +
    "					  })();</script><!-- <div class=\"text-center titletext\" style=\"margin-top:20px;margin-bottom:-10px;\">					\r" +
    "\n" +
    "                    <p style=\"font-size: 58px; font-family:sans-serif; color:cornflowerblue\">BCFC</p><br>\r" +
    "\n" +
    "                </div> --><div class=\"chart-container\"><div id=\"your-chart-name\"><div class=\"stiff-chart-inner\"><div class=\"stiff-chart-level\" data-level=\"01\"><div class=\"stiff-main-parent\"><ul><li data-parent=\"a\"><div id=\"coma\" class=\"the-chart\" onclick=\"document.getElementById('piechartdefault').innerHTML='';document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\"><!-- onclick=\"selectcompany(this.id)\"> --> <img src=\"/com.vyom.vyomlib/resources/hierarchy/images/stats_area_chart.png\" alt=\"\"><br><p style=\"font-size: 18px; font-family:sans-serif\">Bahrain Credit</p></div></li><li data-parent=\"b\"><div id=\"comb\" class=\"the-chart\" onclick=\"document.getElementById('piechartdefault').innerHTML='';document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\"><img src=\"/com.vyom.vyomlib/resources/hierarchy/images/3d_file.png\" alt=\"\"><br><p style=\"font-size: 18px; font-family:sans-serif\">TAC</p></div></li><li data-parent=\"c\"><div id=\"comc\" class=\"the-chart\" onclick=\"document.getElementById('piechartdefault').innerHTML='';document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\"><img src=\"/com.vyom.vyomlib/resources/hierarchy/images/service_waste_disposal.png\" alt=\"\"><br><p style=\"font-size: 18px; font-family:sans-serif\">TCL</p></div></li><!-- <li data-parent=\"d\" onclick=\"document.getElementById('piechartdefault').innerHTML='';document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">\r" +
    "\n" +
    "                            <div id=\"comd\" class=\"the-chart\">\r" +
    "\n" +
    "                                <img src=\"../../com.vyomlabs.new/resources/images/1.jpg\" alt=\"\"><br>\r" +
    "\n" +
    "                                <p style=\"font-size: 18px; font-family:sans-serif\">TRESCO</p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                          </li>\r" +
    "\n" +
    "                          <li data-parent=\"e\" onclick=\"document.getElementById('piechartdefault').innerHTML='';document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">\r" +
    "\n" +
    "                            <div id=\"come\" class=\"the-chart\">\r" +
    "\n" +
    "                                <img src=\"images1/stats_pie_chart.png\" alt=\"\"><br>\r" +
    "\n" +
    "                                <p style=\"font-size: 18px; font-family:sans-serif\">TISCO</p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                          </li>\r" +
    "\n" +
    "                          <li data-parent=\"f\" onclick=\"document.getElementById('piechartdefault').innerHTML='';document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">\r" +
    "\n" +
    "                            <div id=\"comf\" class=\"the-chart\">\r" +
    "\n" +
    "                                <img src=\"images1/positioning.png\" alt=\"\">\r" +
    "\n" +
    "                                <p style=\"font-size: 18px; font-family:sans-serif\">NMC</p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                          </li> --></ul></div></div><div class=\"stiff-chart-level\" data-level=\"02\"><div class=\"stiff-child\" data-child-from=\"a\"><ul><li data-parent=\"a01\" id=\"deptInitiatives\"><div class=\"the-chart\" id=\"Initiatives\" onclick=\"selectcompany(this.id,'Initiatives')\"><p style=\"font-size:17px; font-family: sans-serif\">Initiatives &nbsp; <img src=\"/com.vyom.vyomlib/resources/hierarchy/images/calendar1.png\" alt=\"Initiatives\"></p></div></li><li data-parent=\"a02\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\"><p style=\"font-size:17px; font-family: sans-serif\">Projects &nbsp; <img src=\"/com.vyom.vyomlib/resources/hierarchy/images/deal.png\" alt=\"\"></p></div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"02\"><div class=\"stiff-child\" data-child-from=\"b\"><ul><li data-parent=\"b01\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">Dept 1</div></li><li data-parent=\"b02\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">Dept 2</div></li><li data-parent=\"b03\"><div class=\"the-chart\">Dept 3</div></li><li data-parent=\"b04\"><div class=\"the-chart\">Dept 4</div></li><li data-parent=\"b05\"><div class=\"the-chart\">Dept 5</div></li><li data-parent=\"b06\"><div class=\"the-chart\">Dept 6</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"02\"><div class=\"stiff-child\" data-child-from=\"c\"><ul><li data-parent=\"c01\"><div class=\"the-chart\" id=\"comcdept1\" onclick=\"selectcompany(this.id,'change')\">Dept 1</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"03\"><div class=\"stiff-child\" data-child-from=\"a01\"><ul><li data-parent=\"a0101\"><div class=\"the-chart\" id=\"InitiativesNewBuilding\" onclick=\"selectcompany(this.id,'InitiativesNewBuilding')\"><p style=\"font-size:14px; font-family: sans-serif\">New Building &nbsp; <img src=\"/com.vyom.vyomlib/resources/hierarchy/images/bank.png\" alt=\"Initiatives\"></p></div></li><li data-parent=\"a0102\"><div class=\"the-chart\" id=\"InitiativesNewBranch\" onclick=\"selectcompany(this.id,'InitiativesNewBranch')\"><p style=\"font-size:14px; font-family: sans-serif\">New Branch &nbsp; <img src=\"/com.vyom.vyomlib/resources/hierarchy/images/key.png\" alt=\"New Branch\"></p></div></li><li data-parent=\"a0103\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\"><p style=\"font-size:14px; font-family: sans-serif\">Credit Card &nbsp; &nbsp;&nbsp;&nbsp; <img src=\"/com.vyom.vyomlib/resources/hierarchy/images/credit-card.png\" alt=\"New Credit Card\"></p></div></li><li data-parent=\"a0104\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\"><p style=\"font-size:14px; font-family: sans-serif\">System &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src=\"/com.vyom.vyomlib/resources/hierarchy/images/settings.png\" alt=\"System Replacement\"></p></div></li><li data-parent=\"a0105\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\"><p style=\"font-size:14px; font-family: sans-serif\">TISCO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src=\"/com.vyom.vyomlib/resources/hierarchy/images/earth-globe.png\" alt=\"TISCO\"></p></div></li><li data-parent=\"a0106\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\"><p style=\"font-size:14px; font-family: sans-serif\">NMC &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <img src=\"/com.vyom.vyomlib/resources/hierarchy/images/download.png\" alt=\"NMC\"></p></div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"04\"><div class=\"stiff-child\" data-child-from=\"a0101\"><ul><li data-parent=\"a010101\"><div class=\"the-chart\" id=\"InitiativesNewBuildingMeetings\" onclick=\"selectcompany(this.id,'InitiativesNewBuildingMeetings')\">Meetings</div></li><li data-parent=\"a010102\"><div class=\"the-chart\" id=\"InitiativesNewBuildingMinutesOfMeetings\" onclick=\"selectcompany(this.id,'InitiativesNewBuildingMinutesOfMeetings')\">Minutes of Meetings</div></li><li data-parent=\"a010103\"><div class=\"the-chart\" id=\"InitiativesNewBuildingProjects\" onclick=\"selectcompany(this.id,'InitiativesNewBuildingProjects')\">Projects</div></li><li data-parent=\"a010104\"><div class=\"the-chart\" id=\"InitiativesNewBuildingApprovals\" onclick=\"selectcompany(this.id,'InitiativesNewBuildingApprovals')\">Approvals</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"03\"><div class=\"stiff-child\" data-child-from=\"a02\"><ul><li data-parent=\"a0201\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">New Building</div></li><li data-parent=\"a0202\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">New Building DC-IT</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"04\"><div class=\"stiff-child\" data-child-from=\"a010103\"><ul><li data-parent=\"a020101\"><div class=\"the-chart\" id=\"InitiativesNewBuildingProjectsNewbuildingAdmin\" onclick=\"selectcompany(this.id,'InitiativesNewBuildingProjectsNewbuildingAdmin')\">New Building Admin</div></li><li data-parent=\"a020102\"><a style=\"text-decoration: none;color: inherit\" href=\"https://201911080406190633.my.salesforce.com/a652v000000Ptke\" target=\"_blank\"><div class=\"the-chart\" id=\"InitiativesNewBuildingProjectsNewBuldingDCIT\" onclick=\"selectcompany(this.id,'InitiativesNewBuildingProjectsNewBuldingDCIT')\">New Building DC-IT</div></a></li><li data-parent=\"a020103\"><div class=\"the-chart\" id=\"InitiativesNewBuildingProjectsNewBuildingemployeesHR\" onclick=\"selectcompany(this.id,'InitiativesNewBuildingProjectsNewBuildingemployeesHR')\">New Building Employees-HR</div></li><li data-parent=\"a020104\"><div class=\"the-chart\" id=\"InitiativesNewBuildingProjectsNewBuildingInfoSecurity\" onclick=\"selectcompany(this.id,'InitiativesNewBuildingProjectsNewBuildingInfoSecurity')\">New Building Security-Information Security</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"04\"><div class=\"stiff-child\" data-child-from=\"a020102\"><ul><li data-parent=\"a020201\"><div class=\"the-chart\" id=\"InitiativesNewBranchProjectsNewBranchITProjectPlan\" onclick=\"selectcompany(this.id,'InitiativesNewBranchProjectsNewBranchITProjectPlan')\">Project Plan</div></li><li data-parent=\"a020202\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">Project Tasks</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"05\"><div class=\"stiff-child\" data-child-from=\"a020201\"><ul><li data-parent=\"a02020101\"><div class=\"the-chart\" id=\"ProjectTasks1\" onclick=\"selectcompany(this.id,'task')\">Project Tasks</div></li><li data-parent=\"a02020102\"><div class=\"the-chart\" id=\"ChangeRequests1\" onclick=\"selectcompany(this.id,'change')\">Change Requests</div></li><li data-parent=\"a02020103\"><div class=\"the-chart\" id=\"HelpDeskTickets1\" onclick=\"selectcompany(this.id,'incident')\">Help Desk Tickets</div></li><li data-parent=\"a02020104\"><div class=\"the-chart\" id=\"Incidentsreporting1\" onclick=\"selectcompany(this.id,'incident')\">Incident Reporting</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"04\"><div class=\"stiff-child\" data-child-from=\"a0102\"><ul><li data-parent=\"a010201\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">Meetings</div></li><li data-parent=\"a010202\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">Minutes of Meetings</div></li><li data-parent=\"a010203\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">Projects</div></li><li data-parent=\"a010204\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">Approvals</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"04\"><div class=\"stiff-child\" data-child-from=\"a010203\"><ul><li data-parent=\"a01020301\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">New Branch Admin</div></li><li data-parent=\"a01020302\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">New Branch-IT</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"04\"><div class=\"stiff-child\" data-child-from=\"a01020302\"><ul><li data-parent=\"a0102030201\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">Project Plan</div></li><li data-parent=\"a0102030202\"><div class=\"the-chart\" onclick=\"document.getElementById('piechart').innerHTML='';document.getElementById('json').innerHTML='';\">Project Tasks</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"05\"><div class=\"stiff-child\" data-child-from=\"a0102030201\"><ul><li data-parent=\"a010203020101\"><div class=\"the-chart\" id=\"ProjectTasks2\" onclick=\"selectcompany(this.id,'task')\">Project Tasks</div></li><li data-parent=\"a010203020102\"><div class=\"the-chart\" id=\"ChangeRequests2\" onclick=\"selectcompany(this.id,'change')\">Change Requests</div></li><li data-parent=\"a010203020103\"><div class=\"the-chart\" id=\"HelpDeskTickets2\" onclick=\"selectcompany(this.id,'incident')\">Help Desk Tickets</div></li><li data-parent=\"a010203020104\"><div class=\"the-chart\" id=\"Incidentsreporting2\" onclick=\"selectcompany(this.id,'incident')\">Incident Reporting</div></li></ul></div></div><div class=\"stiff-chart-level\" data-level=\"03\"><div class=\"stiff-child\" data-child-from=\"b01\"><ul><li data-parent=\"b0101\"><div class=\"the-chart\" id=\"combdept1\" onclick=\"selectcompany(this.id,'task')\">Dept 1</div></li></ul></div></div></div></div></div></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/topheader/com-vyom-vyomlib-inspector-topheader-bgcolor.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<select ng-model=\"HChange\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/topheader/com-vyom-vyomlib-topheader-design.directive.html',
    "<h4>Custom Header Component</h4>"
  );


  $templateCache.put('scripts/view-components/topheader/com-vyom-vyomlib-topheader.directive.html',
    "<!DOCTYPE html><html><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>@font-face {\r" +
    "\n" +
    "  font-family: 'Ericfont';\r" +
    "\n" +
    "  src: url('/com.vyom.vyomlib/resources/Fonts/UTM Ericsson Capital.ttf') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r" +
    "\n" +
    "   url('/com.vyom.vyomlib/resources/Fonts/UTM Ericsson Capital.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */\r" +
    "\n" +
    "}   \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "body {font-family: Arial;}\r" +
    "\n" +
    "\r" +
    "\n" +
    "/* Style the tab */\r" +
    "\n" +
    ".tab {\r" +
    "\n" +
    "  overflow: hidden;\r" +
    "\n" +
    "  border: 1px solid #ccc;\r" +
    "\n" +
    "   background-color: #022461;\r" +
    "\n" +
    "  \r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "/* Style the buttons inside the tab */\r" +
    "\n" +
    ".tab button {\r" +
    "\n" +
    "   background-color: #022461;\r" +
    "\n" +
    "  float: left;\r" +
    "\n" +
    "  border: none;\r" +
    "\n" +
    "  outline: none;\r" +
    "\n" +
    "  cursor: pointer;\r" +
    "\n" +
    "  padding: 4px 12px;\r" +
    "\n" +
    "  transition: 0.3s;\r" +
    "\n" +
    "  font-size: 30px;\r" +
    "\n" +
    "  color:white;\r" +
    "\n" +
    "/*  font-family:Comic Sans MS;*/\r" +
    "\n" +
    "    font-family: {{cfg.font}};\r" +
    "\n" +
    "\r" +
    "\n" +
    "}\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .tab button1 {\r" +
    "\n" +
    "  background-color: #022461;\r" +
    "\n" +
    "  float: left;\r" +
    "\n" +
    "  border: none;\r" +
    "\n" +
    "  outline: none;\r" +
    "\n" +
    "  cursor: pointer;\r" +
    "\n" +
    "  padding: 12px 16px;\r" +
    "\n" +
    "  transition: 0.3s;\r" +
    "\n" +
    "  font-size: 20px;\r" +
    "\n" +
    "  color:white;\r" +
    "\n" +
    "  font-family:Calibri;\r" +
    "\n" +
    "  \r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "/* Create an active/current tablink class */\r" +
    "\n" +
    ".tab button.active {\r" +
    "\n" +
    "  background-color: #ccc;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "/* Style the tab content */\r" +
    "\n" +
    ".tabcontent {\r" +
    "\n" +
    "  display: none;\r" +
    "\n" +
    "  padding: 6px 12px;\r" +
    "\n" +
    "  border: 1px solid #ccc;\r" +
    "\n" +
    "  border-top: none;\r" +
    "\n" +
    "}</style></head><body><div class=\"tab w3-{{bgcolor}}\"><button class=\"tablinks w3-{{bgcolor}}\" ng-if=\"cfg.toggleicon=== '1' ? false : true\"><img src=\"/com.vyom.vyomlib/resources/images/img/eric4.png\" class=\"tablinks\" alt=\"\"></button> <button class=\"tablinks w3-{{bgcolor}}\">{{cfg.text}}</button> <button class=\"tablinks w3-{{bgcolor}}\"><!--    <a href=\"{{cfg.hyperlink}}\">{{cfg.appname}}</a>--><button1 class=\"w3-{{bgcolor}}\"><a href=\"{{cfg.hyperlink}}\">{{cfg.appname}}</a></button1></button></div></body></html>"
  );


  $templateCache.put('scripts/view-components/vc10/com-vyom-vyomlib-vc10-design.directive.html',
    "<span class=\"d-icon-server_web_node\" style=\"font-size: 100px;text-align: center\"></span>"
  );


  $templateCache.put('scripts/view-components/vc10/com-vyom-vyomlib-vc10.directive.html',
    "<!DOCTYPE HTML><html><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"keywords\" content=\"Shoppy Responsive web vyomlib, Bootstrap Web vyomlibs, Flat Web vyomlibs, Android Compatible web vyomlib, \r" +
    "\n" +
    "Smartphone Compatible web vyomlib, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design\"><script type=\"application/x-javascript\">addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }</script><!-- jQuery (necessary for Bootstrap's JavaScript plugins) --><link href=\"/com.vyom.vyomlib/resources/homepage/css/bootstrap.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"><!-- Custom Theme files --><link href=\"/com.vyom.vyomlib/resources/homepage/css/style.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"><!--js--><script src=\"/com.vyom.vyomlib/resources/homepage/js/jquery-2.1.1.min.js\"></script><!--icons-css--><link href=\"/com.vyom.vyomlib/resources/homepage/css/font-awesome.css\" rel=\"stylesheet\"><!--Google Fonts--><link href=\"//fonts.googleapis.com/css?family=Carrois+Gothic\" rel=\"stylesheet\" type=\"text/css\"><link href=\"//fonts.googleapis.com/css?family=Work+Sans:400,500,600\" rel=\"stylesheet\" type=\"text/css\"><!--static chart--><script src=\"/com.vyom.vyomlib/resources/homepage/js/Chart.min.js\"></script><!--//charts--><!-- geo chart --><script src=\"//cdn.jsdelivr.net/modernizr/2.8.3/modernizr.min.js\" type=\"text/javascript\"></script><!--    <script>window.modernizr || document.write('<script src=\"lib/modernizr/modernizr-custom.js\"><\\/script>')</script>--><!--    <script src=\"lib/html5shiv/html5shiv.js\"></script>--><!--floating window --><style>.float{\r" +
    "\n" +
    "	position:fixed;\r" +
    "\n" +
    "	width:60px;\r" +
    "\n" +
    "	height:60px;\r" +
    "\n" +
    "	bottom:40px;\r" +
    "\n" +
    "	right:40px;\r" +
    "\n" +
    "	background-color:white;\r" +
    "\n" +
    "	color:black;\r" +
    "\n" +
    "	border-radius:50px;\r" +
    "\n" +
    "	text-align:center;\r" +
    "\n" +
    "	box-shadow: 2px 2px 3px #999;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".my-float{\r" +
    "\n" +
    "	margin-top:22px;\r" +
    "\n" +
    "}</style><!--skycons-icons--><script src=\"/com.vyom.vyomlib/resources/homepage/js/skycons.js\"></script><!--//skycons-icons--></head><body><div class=\"page-container\"><div class=\"\"><div class=\"mother-grid-inner\"><!--inner block start here--><div class=\"inner-block\" style=\"padding-top: 20px\"><!--climate start here--><div class=\"climate\"><div class=\"col-md-4 climate-grids\" style=\"margin-left: 100px\"><div class=\"climate-grid1\"><div class=\"climate-gd1-top\"><div class=\"col-md-6 climate-gd1top-left\"><h4>Details</h4><h3>MyIT Alerts</h3><p>Incidents:</p><p>Changes:</p><p>Subscriptions:</p></div><div class=\"col-md-6 climate-gd1top-right\" style=\"text-align-last: center\"><span class=\"clime-icon\"><span class=\"clime-icon\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i class=\"fa fa-camera-retro fa-3x\"></i><figure class=\"icons\"><!--\r" +
    "\n" +
    "								<canvas id=\"partly-cloudy-day\" width=\"64\" height=\"64\">\r" +
    "\n" +
    "								</canvas>\r" +
    "\n" +
    "--></figure><script>var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "								  list  = [\r" +
    "\n" +
    "									\"clear-night\", \"partly-cloudy-day\",\r" +
    "\n" +
    "									\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "									\"fog\"\r" +
    "\n" +
    "								  ],\r" +
    "\n" +
    "								  i;\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  for(i = list.length; i--; )\r" +
    "\n" +
    "								icons.set(list[i], list[i]);\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  icons.play();</script></span><br><p>{{rxConfiguration.propertiesByName.incidents | comVyomVyomlibMyFilter}}</p><p>{{rxConfiguration.propertiesByName.changes | comVyomVyomlibMyFilter}}</p><p>{{rxConfiguration.propertiesByName.subscribers | comVyomVyomlibMyFilter}}</p></span></div><div class=\"clearfix\"></div></div><div class=\"climate-gd1-bottom\"><div class=\"col-md-4 cloudy1\"><h4>{{rxConfiguration.propertiesByName.country1label | comVyomVyomlibMyFilter}}</h4><!--                        <i class=\"fa fa-camera-retro fa-3x\"></i>--><!--                            <i class=\"fa fa-bar-chart fa-2x\"></i>--> <i class=\"fa fa-globe fa-3x\" style=\"color:white\"><!-- icon --></i><figure class=\"icons\"><!--\r" +
    "\n" +
    "							<canvas id=\"sleet\" width=\"58\" height=\"58\">\r" +
    "\n" +
    "							</canvas>\r" +
    "\n" +
    "--></figure><script>var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "									  list  = [\r" +
    "\n" +
    "										\"clear-night\", \"clear-day\",\r" +
    "\n" +
    "										\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "										\"fog\"\r" +
    "\n" +
    "									  ],\r" +
    "\n" +
    "									  i;\r" +
    "\n" +
    "	\r" +
    "\n" +
    "								  for(i = list.length; i--; )\r" +
    "\n" +
    "									icons.set(list[i], list[i]);\r" +
    "\n" +
    "	\r" +
    "\n" +
    "								  icons.play();</script><h3>{{rxConfiguration.propertiesByName.country1value | comVyomVyomlibMyFilter}}</h3></div><div class=\"col-md-4 cloudy1\"><h4>{{rxConfiguration.propertiesByName.country2label | comVyomVyomlibMyFilter}}</h4><i class=\"fa fa-globe fa-3x\" style=\"color:white\"><!-- icon --></i><figure class=\"icons\"><!--					<canvas id=\"cloudy\" width=\"58\" height=\"58\"></canvas>--></figure><script>var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "								  list  = [\r" +
    "\n" +
    "									\"clear-night\", \"cloudy\",\r" +
    "\n" +
    "									\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "									\"fog\"\r" +
    "\n" +
    "								  ],\r" +
    "\n" +
    "								  i;\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  for(i = list.length; i--; )\r" +
    "\n" +
    "								icons.set(list[i], list[i]);\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  icons.play();</script><h3>{{rxConfiguration.propertiesByName.country2value | comVyomVyomlibMyFilter}}</h3></div><div class=\"col-md-4 cloudy1\"><h4>{{rxConfiguration.propertiesByName.country3label | comVyomVyomlibMyFilter}}</h4><i class=\"fa fa-globe fa-3x\" style=\"color:white\"><!-- icon --></i><figure class=\"icons\"><!--							<canvas id=\"snow\" width=\"58\" height=\"58\"></canvas>--></figure><script>var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "								  list  = [\r" +
    "\n" +
    "									\"clear-night\", \"clear-day\",\r" +
    "\n" +
    "									\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "									\"fog\"\r" +
    "\n" +
    "								  ],\r" +
    "\n" +
    "								  i;\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  for(i = list.length; i--; )\r" +
    "\n" +
    "								icons.set(list[i], list[i]);\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  icons.play();</script><h3>{{rxConfiguration.propertiesByName.country3value | comVyomVyomlibMyFilter}}</h3></div><div class=\"clearfix\"></div></div></div></div><div class=\"col-md-4 climate-grids\" style=\"margin-left: 184px\"><div class=\"climate-grid3\" style=\"width: 548px\"><div class=\"popular-brand\"><!--Change block--><div class=\"market-update-block clr-block-2\" ng-click=\"callAction('Iaction')\"><!--End of Change block--><!--\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                <div class=\"market-update-block clr-block-2\" >\r" +
    "\n" +
    "--><div class=\"col-md-8 market-update-left\"><!--					<h3>{{incidents}}</h3>--><!--                     <h3>22</h3>--><h3>{{rxConfiguration.propertiesByName.incidents | comVyomVyomlibMyFilter}}</h3><h4>Incident Management</h4><p>Restoring normal service operations.</p></div><div class=\"col-md-4 market-update-right\"><i class=\"fa fa-eye\"></i></div><div class=\"clearfix\"></div></div></div><div class=\"popular-follow\"><div class=\"market-update-block clr-block-3\" ng-click=\"callAction('Caction')\"><!--End of Change block  --><!--\r" +
    "\n" +
    "           \r" +
    "\n" +
    "                    <div class=\"market-update-block clr-block-3\" >\r" +
    "\n" +
    "--><div class=\"col-md-8 market-update-left\"><!--						<h3>{{changes}}</h3> --><!--                        <h3>15</h3>--><h3>{{rxConfiguration.propertiesByName.changes | comVyomVyomlibMyFilter}}</h3><h4>Change Management</h4><p>planning,scheduling & tracking changes</p></div><div class=\"col-md-4 market-update-right\"><i class=\"fa fa-cubes\" style=\"font-size:48px\"></i></div><div class=\"clearfix\"></div></div></div></div></div><div class=\"clearfix\"></div></div><!--climate end here--></div><!--inner block end here--></div></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/vc12/com-vyom-vyomlib-vc12-design.directive.html',
    "<h5>onWindowsLoad-Multiple Process</h5>"
  );


  $templateCache.put('scripts/view-components/vc12/com-vyom-vyomlib-vc12.directive.html',
    ""
  );


  $templateCache.put('scripts/view-components/vc13/com-vyom-vyomlib-inspector-vc13-bcolor.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:<div class=\"input-group\"><input colorpicker=\"hex\" type=\"text\" ng-model=\"hexPickerColor\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"rx-editor-header__button rx-editor-header__button_save rx-editor-header__button_divider-before d-button d-button_primary d-button_small\" ng-click=\"saveColor();\" ng-disabled=\"false\">Use Color</button></span></div></label>"
  );


  $templateCache.put('scripts/view-components/vc13/com-vyom-vyomlib-inspector-vc13-bsize.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:<rzslider rz-slider-model=\"minSliderValue\" rz-slider-options=\"slider_all_options.options\"></rzslider></label>"
  );


  $templateCache.put('scripts/view-components/vc13/com-vyom-vyomlib-inspector-vc13-btextcolor.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:<div class=\"input-group\"><input colorpicker=\"hex\" type=\"text\" ng-model=\"hexPickerColor\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"rx-editor-header__button rx-editor-header__button_save rx-editor-header__button_divider-before d-button d-button_primary d-button_small\" ng-click=\"saveColor();\" ng-disabled=\"false\">Use Color</button></span></div></label>"
  );


  $templateCache.put('scripts/view-components/vc13/com-vyom-vyomlib-vc13-design.directive.html',
    "<div class=\"click-button\"><button type=\"button\" class=\"d-button d-button_secondary d-button_small\">ActionButton</button></div>"
  );


  $templateCache.put('scripts/view-components/vc13/com-vyom-vyomlib-vc13.directive.html',
    "<style>.button {\r" +
    "\n" +
    "\r" +
    "\n" +
    "  border: none;\r" +
    "\n" +
    "  padding: 15px 32px;\r" +
    "\n" +
    "  text-align: center;\r" +
    "\n" +
    "  text-decoration: none;\r" +
    "\n" +
    "  display: inline-block;\r" +
    "\n" +
    "  margin: 4px 2px;\r" +
    "\n" +
    "  cursor: pointer;\r" +
    "\n" +
    "}</style><button type=\"button\" ng-click=\"clickButton()\" class=\"{{buttonStyle.icon}}\" style=\"{{buttonStyle.style}}\">{{buttonlabel}}</button>"
  );


  $templateCache.put('scripts/view-components/vc15/com-vyom-vyomlib-vc15-design.directive.html',
    "<h6>onWindowsLoad-Action</h6>"
  );


  $templateCache.put('scripts/view-components/vc15/com-vyom-vyomlib-vc15.directive.html',
    ""
  );


  $templateCache.put('scripts/view-components/vc17/com-vyom-vyomlib-inspector-vc17-bgcolor.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<div class=\"input-group\"><input colorpicker=\"hex\" type=\"text\" ng-model=\"hexPickerColor\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"rx-editor-header__button rx-editor-header__button_save rx-editor-header__button_divider-before d-button d-button_primary d-button_small\" ng-click=\"saveColor();\" ng-disabled=\"false\">Use Color</button></span></div></label>"
  );


  $templateCache.put('scripts/view-components/vc17/com-vyom-vyomlib-inspector-vc17-bgcolor2.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<select ng-model=\"HChange\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/vc17/com-vyom-vyomlib-inspector-vc17-icheckbox.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<select ng-model=\"HIncident\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/vc17/com-vyom-vyomlib-inspector-vc17-icon.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide change details</rx-tooltip>{{options.label}}:<select ng-model=\"HChange\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/vc17/com-vyom-vyomlib-vc17-design.directive.html',
    "<span class=\"d-icon-ellipsis_horizontal_bottom\" style=\"font-size: 100px;text-align: center\"></span>"
  );


  $templateCache.put('scripts/view-components/vc17/com-vyom-vyomlib-vc17.directive.html',
    "<!DOCTYPE HTML><html><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"keywords\" content=\"Shoppy Responsive web vyomlib, Bootstrap Web vyomlibs, Flat Web vyomlibs, Android Compatible web vyomlib, \r" +
    "\n" +
    "Smartphone Compatible web vyomlib, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design\"><script type=\"application/x-javascript\">addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }</script><!-- jQuery (necessary for Bootstrap's JavaScript plugins) --><link href=\"/com.vyom.vyomlib/resources/homepage/css/bootstrap.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"><!-- Custom Theme files --><link href=\"/com.vyom.vyomlib/resources/homepage/css/style.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"><!--js--><script src=\"/com.vyom.vyomlib/resources/homepage/js/jquery-2.1.1.min.js\"></script><!--icons-css--><link href=\"/com.vyom.vyomlib/resources/homepage/css/font-awesome.css\" rel=\"stylesheet\"><!--Google Fonts--><link href=\"//fonts.googleapis.com/css?family=Carrois+Gothic\" rel=\"stylesheet\" type=\"text/css\"><link href=\"//fonts.googleapis.com/css?family=Work+Sans:400,500,600\" rel=\"stylesheet\" type=\"text/css\"><!--static chart--><script src=\"/com.vyom.vyomlib/resources/homepage/js/Chart.min.js\"></script><style>i.glyphicon {\r" +
    "\n" +
    "    display: block;\r" +
    "\n" +
    "    text-align: center;\r" +
    "\n" +
    "    margin-bottom: -0.5em;\r" +
    "\n" +
    "    font-size: 1.5em;\r" +
    "\n" +
    "    color: #337AB7;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "    .centered {\r" +
    "\n" +
    "  position: absolute;\r" +
    "\n" +
    "  top: 149px;\r" +
    "\n" +
    "  left: 135px;\r" +
    "\n" +
    "  transform: translate(-50%, -50%);\r" +
    "\n" +
    "  font-size: 14px;\r" +
    "\n" +
    "}</style></head><body><div class=\"page-container\" style=\"top:12px\"><div class=\"mother-grid-inner\"><div class=\"blockwidth inner-block\" style=\"padding-top: 20px;padding-bottom: 20px\"><!--climate start here--><div class=\"climate\"><div class=\"col-md-4 climate-grids\" style=\"padding-bottom: 0px\"><div class=\"boost-icons-list\"><ul><li ng-click=\"redirecturl(Url1)\"><br><i class=\"glyphicon glyphicon-{{Icon1}}\" aria-hidden=\"true\"></i><br><a href=\"\" target=\"_blank\">{{Title1}}</a></li><li ng-click=\"redirecturl(Url2)\"><br><i class=\"glyphicon glyphicon-{{Icon2}}\" aria-hidden=\"true\"></i><br><a href=\"{{Url2}}\" target=\"_blank\">{{Title2}}</a></li><li ng-click=\"redirecturl(Url3)\"><br><i class=\"glyphicon glyphicon-{{Icon3}}\" aria-hidden=\"true\"></i><br><a href=\"{{Url3}}\" target=\"_blank\">{{Title3}}</a></li><li ng-click=\"redirecturl(Url4)\"><br><i class=\"glyphicon glyphicon-{{Icon4}}\" aria-hidden=\"true\"></i><br><a href=\"{{Url4}}\" target=\"_blank\">{{Title4}}</a></li></ul><div class=\"clearfix\"></div></div></div><div class=\"col-md-4 climate-grids\"><div class=\"climate-grid3\"><div class=\"popular-brand\"><div class=\"col-md-6 popular-bran-left\" style=\"padding-bottom: 1px;height: 156.8px\"><h4>{{Slot1Title}}</h4><br><h6>{{Slot1Notes}}</h6></div><div class=\"col-md-6 popular-bran-right w3-{{Slot1ClickBGColor}}\"><a href=\"{{Slot1ClickURL}}\"><h3>Click</h3></a></div><div class=\"clearfix\"></div></div><div class=\"popular-follow\" style=\"height:171px\"><div class=\"col-md-6 popular-follo-left w3-{{Slot2NotesBGColor}}\" style=\"height: 112px;padding-top: 22px;height: 117.6px;padding-bottom: 148px\"><p>{{Slot2Notes}}</p></div><div class=\"col-md-6 popular-follo-right\"><h4>{{Slot2Title}}</h4><h5>{{rxConfiguration.propertiesByName.Slot2Followers | comVyomVyomlibMyFilter}}</h5></div><div class=\"clearfix\"></div></div></div></div><div class=\"col-md-4 climate-grids\"><div class=\"climate-grid3\" style=\"margin-top:100px\"><a href=\"{{URL}}\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/Vyomlabs.png\" style=\"width: 270px\"><!--<h4 class=\"centered\">{{subTitle}}</h4> --></a><div class=\"clearfix\"></div></div></div><div class=\"clearfix\"></div></div><!--climate end here--></div><!--inner block end here--></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/vc19/com-vyom-vyomlib-inspector-vc19-bgcolor.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<!--<select  ng-model=\"HChange\" ng-options=\"x for x in names\">\n" +
    "</select>--><select ng-model=\"HChange\"><option value=\"{{x}}\" class=\"w3-container w3-{{x}}\" ng-repeat=\"x in names\">{{x}}</option></select></label>"
  );


  $templateCache.put('scripts/view-components/vc19/com-vyom-vyomlib-inspector-vc19-icon.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide change details</rx-tooltip>{{options.label}}:<select ng-model=\"HChange\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/vc19/com-vyom-vyomlib-inspector-vc19-size.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide change details</rx-tooltip>{{options.label}}:<select ng-model=\"HChange\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/vc19/com-vyom-vyomlib-vc19-design.directive.html',
    "<span class=\"d-icon-field_custom\" style=\"font-size: 100px;text-align: center\"></span>"
  );


  $templateCache.put('scripts/view-components/vc19/com-vyom-vyomlib-vc19.directive.html',
    "<!DOCTYPE HTML><html><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"keywords\" content=\"Shoppy Responsive web vyomlib, Bootstrap Web vyomlibs, Flat Web vyomlibs, Android Compatible web vyomlib, \r" +
    "\n" +
    "Smartphone Compatible web vyomlib, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design\"><script type=\"application/x-javascript\">addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }</script><!-- jQuery (necessary for Bootstrap's JavaScript plugins) --><link href=\"/com.vyom.vyomlib/resources/homepage/css/bootstrap.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"><!-- Custom Theme files --><link href=\"/com.vyom.vyomlib/resources/homepage/css/style.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"><!--js--><script src=\"/com.vyom.vyomlib/resources/homepage/js/jquery-2.1.1.min.js\"></script><!--icons-css--><link href=\"/com.vyom.vyomlib/resources/homepage/css/font-awesome.css\" rel=\"stylesheet\"><!--Google Fonts--><link href=\"//fonts.googleapis.com/css?family=Carrois+Gothic\" rel=\"stylesheet\" type=\"text/css\"><link href=\"//fonts.googleapis.com/css?family=Work+Sans:400,500,600\" rel=\"stylesheet\" type=\"text/css\"><!--static chart--><script src=\"/com.vyom.vyomlib/resources/homepage/js/Chart.min.js\"></script><!-- w3.css---><link href=\"/com.vyom.vyomlib/resources/css/w3.css\" rel=\"stylesheet\"><style>i.glyphicon {\r" +
    "\n" +
    "    display: block;\r" +
    "\n" +
    "    text-align: center;\r" +
    "\n" +
    "    margin-bottom: -0.5em;\r" +
    "\n" +
    "    font-size: 1.5em;\r" +
    "\n" +
    "    color: white;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "a\r" +
    "\n" +
    "{\r" +
    "\n" +
    "   color: white;     \r" +
    "\n" +
    "}\r" +
    "\n" +
    ".centered {\r" +
    "\n" +
    "  position: absolute;\r" +
    "\n" +
    "  top: 149px;\r" +
    "\n" +
    "  left: 135px;\r" +
    "\n" +
    "  transform: translate(-50%, -50%);\r" +
    "\n" +
    "  font-size: 14px;\r" +
    "\n" +
    "}</style></head><body><div class=\"page-container\"><div class=\"mother-grid-inner\"><!--climate start here--><div class=\"climate\"><div class=\"col-md-{{Size}}\"><div class=\"boost-icons-list\"><ul><li ng-click=\"redirecturl(Url)\" class=\"w3-container w3-{{BGcolor}}\"><!-- style=\"background: \" --><br><i class=\"glyphicon glyphicon-{{Icon}}\" aria-hidden=\"true\"></i><br><a href=\"\" target=\"_blank\">{{Title}}</a></li></ul><div class=\"clearfix\"></div></div></div><div class=\"clearfix\"></div></div><!--climate end here--></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/vc7/com-vyom-vyomlib-vc7-design.directive.html',
    "<h5>HomePage</h5>"
  );


  $templateCache.put('scripts/view-components/vc7/com-vyom-vyomlib-vc7.directive.html',
    "<!--Author: W3layouts\r" +
    "\n" +
    "Author URL: http://w3layouts.com\r" +
    "\n" +
    "License: Creative Commons Attribution 3.0 Unported\r" +
    "\n" +
    "License URL: http://creativecommons.org/licenses/by/3.0/\r" +
    "\n" +
    "--><!DOCTYPE HTML><html><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"keywords\" content=\"Shoppy Responsive web vyomlib, Bootstrap Web vyomlibs, Flat Web vyomlibs, Android Compatible web vyomlib, \r" +
    "\n" +
    "Smartphone Compatible web vyomlib, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design\"><script type=\"application/x-javascript\">addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }</script><!-- jQuery (necessary for Bootstrap's JavaScript plugins) --><link href=\"/com.vyom.vyomlib/resources/homepage/css/bootstrap.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"><!-- Custom Theme files --><link href=\"/com.vyom.vyomlib/resources/homepage/css/style.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"><!--js--><script src=\"/com.vyom.vyomlib/resources/homepage/js/jquery-2.1.1.min.js\"></script><!--icons-css--><link href=\"/com.vyom.vyomlib/resources/homepage/css/font-awesome.css\" rel=\"stylesheet\"><!--Google Fonts--><link href=\"//fonts.googleapis.com/css?family=Carrois+Gothic\" rel=\"stylesheet\" type=\"text/css\"><link href=\"//fonts.googleapis.com/css?family=Work+Sans:400,500,600\" rel=\"stylesheet\" type=\"text/css\"><!--static chart--><script src=\"/com.vyom.vyomlib/resources/homepage/js/Chart.min.js\"></script><!--//charts--><!-- geo chart --><!--   <script src=\"//cdn.jsdelivr.net/modernizr/2.8.3/modernizr.min.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "    <script>window.modernizr || document.write('<script src=\"lib/modernizr/modernizr-custom.js\"><\\/script>')</script>--><!--<script src=\"lib/html5shiv/html5shiv.js\"></script>--><!-- Chartinator  --><!--   <script src=\"/com.vyom.vyomlib/resources/homepage/js/chartinator.js\" ></script>\r" +
    "\n" +
    "    <script type=\"text/javascript\">\r" +
    "\n" +
    "        jQuery(function ($) {\r" +
    "\n" +
    "\r" +
    "\n" +
    "            var chart3 = $('#geoChart').chartinator({\r" +
    "\n" +
    "                tableSel: '.geoChart',\r" +
    "\n" +
    "\r" +
    "\n" +
    "                columns: [{role: 'tooltip', type: 'string'}],\r" +
    "\n" +
    "         \r" +
    "\n" +
    "                colIndexes: [2],\r" +
    "\n" +
    "             \r" +
    "\n" +
    "                rows: [\r" +
    "\n" +
    "                    ['China - 2015'],\r" +
    "\n" +
    "                    ['Colombia - 2015'],\r" +
    "\n" +
    "                    ['France - 2015'],\r" +
    "\n" +
    "                    ['Italy - 2015'],\r" +
    "\n" +
    "                    ['Japan - 2015'],\r" +
    "\n" +
    "                    ['Kazakhstan - 2015'],\r" +
    "\n" +
    "                    ['Mexico - 2015'],\r" +
    "\n" +
    "                    ['Poland - 2015'],\r" +
    "\n" +
    "                    ['Russia - 2015'],\r" +
    "\n" +
    "                    ['Spain - 2015'],\r" +
    "\n" +
    "                    ['Tanzania - 2015'],\r" +
    "\n" +
    "                    ['Turkey - 2015']],\r" +
    "\n" +
    "              \r" +
    "\n" +
    "                ignoreCol: [2],\r" +
    "\n" +
    "              \r" +
    "\n" +
    "                chartType: 'GeoChart',\r" +
    "\n" +
    "              \r" +
    "\n" +
    "                chartAspectRatio: 1.5,\r" +
    "\n" +
    "             \r" +
    "\n" +
    "                chartZoom: 1.75,\r" +
    "\n" +
    "             \r" +
    "\n" +
    "                chartOffset: [-12,0],\r" +
    "\n" +
    "             \r" +
    "\n" +
    "                chartOptions: {\r" +
    "\n" +
    "                  \r" +
    "\n" +
    "                    width: null,\r" +
    "\n" +
    "                 \r" +
    "\n" +
    "                    backgroundColor: '#fff',\r" +
    "\n" +
    "                 \r" +
    "\n" +
    "                    datalessRegionColor: '#F5F5F5',\r" +
    "\n" +
    "               \r" +
    "\n" +
    "                    region: 'world',\r" +
    "\n" +
    "                  \r" +
    "\n" +
    "                    resolution: 'countries',\r" +
    "\n" +
    "                 \r" +
    "\n" +
    "                    legend: 'none',\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    colorAxis: {\r" +
    "\n" +
    "                       \r" +
    "\n" +
    "                        colors: ['#679CCA', '#337AB7']\r" +
    "\n" +
    "                    },\r" +
    "\n" +
    "                    tooltip: {\r" +
    "\n" +
    "                     \r" +
    "\n" +
    "                        trigger: 'focus',\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        isHtml: true\r" +
    "\n" +
    "                    }\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "\r" +
    "\n" +
    "               \r" +
    "\n" +
    "            });                       \r" +
    "\n" +
    "        });\r" +
    "\n" +
    "    </script>--><!--geo chart--><!--skycons-icons--><script src=\"/com.vyom.vyomlib/resources/homepage/js/skycons.js\"></script><!--//skycons-icons--><script>function display()\r" +
    "\n" +
    "{\r" +
    "\n" +
    "var arr=displayC.split(\",\"); \r" +
    "\n" +
    "    console.log(arr);\r" +
    "\n" +
    "if(arr.includes(\"1\"))\r" +
    "\n" +
    "    {\r" +
    "\n" +
    "        document.getElementById(\"secCol\").style.display=\"none\";\r" +
    "\n" +
    "        \r" +
    "\n" +
    "    }\r" +
    "\n" +
    " if (arr.includes(\"2\"))\r" +
    "\n" +
    "    {\r" +
    "\n" +
    "        document.getElementById(\"thirdCol\").style.display=\"none\";\r" +
    "\n" +
    "        \r" +
    "\n" +
    "    } \r" +
    "\n" +
    " if (arr.includes(\"3\"))\r" +
    "\n" +
    "    {\r" +
    "\n" +
    "        document.getElementById(\"fourthCol\").style.display=\"none\";\r" +
    "\n" +
    "        \r" +
    "\n" +
    "    } \r" +
    "\n" +
    "}</script></head><body onload=\"display()\"><div class=\"page-container\"><div class=\"\"><div class=\"mother-grid-inner\"><!--header start here--><!-- 	<div class=\"header-main\">\r" +
    "\n" +
    "					<div class=\"header-left\">\r" +
    "\n" +
    "							<div class=\"logo-name\">\r" +
    "\n" +
    "									 <a href=\"/com.vyom.vyomlib/resources/homepage/index.html\"> <h1>Shoppy</h1>  --><!--<img id=\"logo\" src=\"\" alt=\"Logo\"/>\r" +
    "\n" +
    "								  </a> 								\r" +
    "\n" +
    "							</div>--><!--search-box--><!-- <div class=\"search-box\">\r" +
    "\n" +
    "									<form>\r" +
    "\n" +
    "										<input type=\"text\" placeholder=\"Search...\" required=\"\">	\r" +
    "\n" +
    "										<input type=\"submit\" value=\"\">	--><!-- 	</form>\r" +
    "\n" +
    "								</div> --><!--//end-search-box--><!-- <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "						 </div>\r" +
    "\n" +
    "						 <div class=\"header-right\">\r" +
    "\n" +
    "							<div class=\"profile_details_left\"> --><!--notifications of menu start --><!-- <ul class=\"nofitications-dropdown\">\r" +
    "\n" +
    "									<li class=\"dropdown head-dpdn\">\r" +
    "\n" +
    "										<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-envelope\"></i><span class=\"badge\">3</span></a>\r" +
    "\n" +
    "										<ul class=\"dropdown-menu\">\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_header\">\r" +
    "\n" +
    "													<h3>You have 3 new messages</h3>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "											   <div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p4.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li class=\"odd\"><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p2.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor </p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											  <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "											   <div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p3.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_bottom\">\r" +
    "\n" +
    "													<a href=\"#\">See all messages</a>\r" +
    "\n" +
    "												</div> \r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "										</ul>\r" +
    "\n" +
    "									</li>\r" +
    "\n" +
    "									<li class=\"dropdown head-dpdn\">\r" +
    "\n" +
    "										<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-bell\"></i><span class=\"badge blue\">3</span></a>\r" +
    "\n" +
    "										<ul class=\"dropdown-menu\">\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_header\">\r" +
    "\n" +
    "													<h3>You have 3 new notification</h3>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p5.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											  <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											 </a></li>\r" +
    "\n" +
    "											 <li class=\"odd\"><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p6.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											 </a></li>\r" +
    "\n" +
    "											 <li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p7.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											 </a></li>\r" +
    "\n" +
    "											 <li>\r" +
    "\n" +
    "												<div class=\"notification_bottom\">\r" +
    "\n" +
    "													<a href=\"#\">See all notifications</a>\r" +
    "\n" +
    "												</div> \r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "										</ul>\r" +
    "\n" +
    "									</li>	\r" +
    "\n" +
    "									<li class=\"dropdown head-dpdn\">\r" +
    "\n" +
    "										<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-tasks\"></i><span class=\"badge blue1\">9</span></a>\r" +
    "\n" +
    "										<ul class=\"dropdown-menu\">\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_header\">\r" +
    "\n" +
    "													<h3>You have 8 pending task</h3>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"task-info\">\r" +
    "\n" +
    "													<span class=\"task-desc\">Database update</span><span class=\"percentage\">40%</span>\r" +
    "\n" +
    "													<div class=\"clearfix\"></div>	\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "												<div class=\"progress progress-striped active\">\r" +
    "\n" +
    "													<div class=\"bar yellow\" style=\"width:40%;\"></div>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"task-info\">\r" +
    "\n" +
    "													<span class=\"task-desc\">Dashboard done</span><span class=\"percentage\">90%</span>\r" +
    "\n" +
    "												   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "												<div class=\"progress progress-striped active\">\r" +
    "\n" +
    "													 <div class=\"bar green\" style=\"width:90%;\"></div>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"task-info\">\r" +
    "\n" +
    "													<span class=\"task-desc\">Mobile App</span><span class=\"percentage\">33%</span>\r" +
    "\n" +
    "													<div class=\"clearfix\"></div>	\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"progress progress-striped active\">\r" +
    "\n" +
    "													 <div class=\"bar red\" style=\"width: 33%;\"></div>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"task-info\">\r" +
    "\n" +
    "													<span class=\"task-desc\">Issues fixed</span><span class=\"percentage\">80%</span>\r" +
    "\n" +
    "												   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "												<div class=\"progress progress-striped active\">\r" +
    "\n" +
    "													 <div class=\"bar  blue\" style=\"width: 80%;\"></div>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_bottom\">\r" +
    "\n" +
    "													<a href=\"#\">See all pending tasks</a>\r" +
    "\n" +
    "												</div> \r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "										</ul>\r" +
    "\n" +
    "									</li>	\r" +
    "\n" +
    "								</ul>\r" +
    "\n" +
    "								<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "							</div>  --><!--notification menu end --><!-- 		<div class=\"profile_details\">		\r" +
    "\n" +
    "								<ul>\r" +
    "\n" +
    "									<li class=\"dropdown profile_details_drop\">\r" +
    "\n" +
    "										<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r" +
    "\n" +
    "											<div class=\"profile_img\">	\r" +
    "\n" +
    "												<span class=\"prfil-img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p1.png\" alt=\"\"> </span> \r" +
    "\n" +
    "												<div class=\"user-name\">\r" +
    "\n" +
    "													<p>Malorum</p>\r" +
    "\n" +
    "													<span>Administrator</span>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "												<i class=\"fa fa-angle-down lnr\"></i>\r" +
    "\n" +
    "												<i class=\"fa fa-angle-up lnr\"></i>\r" +
    "\n" +
    "												<div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											</div>	\r" +
    "\n" +
    "										</a>\r" +
    "\n" +
    "										<ul class=\"dropdown-menu drp-mnu\">\r" +
    "\n" +
    "											<li> <a href=\"#\"><i class=\"fa fa-cog\"></i> Settings</a> </li> \r" +
    "\n" +
    "											<li> <a href=\"#\"><i class=\"fa fa-user\"></i> Profile</a> </li> \r" +
    "\n" +
    "											<li> <a href=\"#\"><i class=\"fa fa-sign-out\"></i> Logout</a> </li>\r" +
    "\n" +
    "										</ul>\r" +
    "\n" +
    "									</li>\r" +
    "\n" +
    "								</ul>\r" +
    "\n" +
    "							</div>\r" +
    "\n" +
    "							<div class=\"clearfix\"> </div>				\r" +
    "\n" +
    "						</div>\r" +
    "\n" +
    "				     <div class=\"clearfix\"> </div>	\r" +
    "\n" +
    "				</div>   --><!--heder end here--><!-- script-for sticky-nav --><script>$(document).ready(function() {\r" +
    "\n" +
    "			 var navoffeset=$(\".header-main\").offset().top;\r" +
    "\n" +
    "			 $(window).scroll(function(){\r" +
    "\n" +
    "				var scrollpos=$(window).scrollTop(); \r" +
    "\n" +
    "				if(scrollpos >=navoffeset){\r" +
    "\n" +
    "					$(\".header-main\").addClass(\"fixed\");\r" +
    "\n" +
    "				}else{\r" +
    "\n" +
    "					$(\".header-main\").removeClass(\"fixed\");\r" +
    "\n" +
    "				}\r" +
    "\n" +
    "			 });\r" +
    "\n" +
    "			 \r" +
    "\n" +
    "		});</script><!-- /script-for sticky-nav --><!--inner block start here--><div class=\"inner-block\"><!--market updates updates--><div class=\"market-updates\"><div class=\"col-md-4 market-update-gd\"><!--\r" +
    "\n" +
    "Change block                \r" +
    "\n" +
    "				<div class=\"market-update-block clr-block-1\" ng-click=\"callAction('Saction')\">\r" +
    "\n" +
    "                \r" +
    "\n" +
    "End of Change block\r" +
    "\n" +
    "--><div class=\"market-update-block clr-block-1\"><div class=\"col-md-8 market-update-left\"><!--						<h3>{{subscribers}}</h3>--><h3>33</h3><h4>Manage Subscription</h4><p>Subscribe MYIT Alerts & get notification on mail.</p></div><div class=\"col-md-4 market-update-right\"><i class=\"fa fa-thumbs-o-up\" style=\"font-size:48px\"></i></div><div class=\"clearfix\"></div></div></div><div class=\"col-md-4 market-update-gd\"><!---------------- \r" +
    "\n" +
    "Change block\r" +
    "\n" +
    "				<div class=\"market-update-block clr-block-2\" ng-click=\"callAction('Iaction')\">\r" +
    "\n" +
    "End of Change block\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                \r" +
    "\n" +
    "                 --><div class=\"market-update-block clr-block-2\"><div class=\"col-md-8 market-update-left\"><!--					<h3>{{incidents}}</h3>--><h3>22</h3><h4>Incident Management</h4><p>restoring normal service operation as quickly as possible.</p></div><div class=\"col-md-4 market-update-right\"><i class=\"fa fa-eye\"></i></div><div class=\"clearfix\"></div></div></div><div class=\"col-md-4 market-update-gd\"><!------------------ \r" +
    "\n" +
    "Change block  \r" +
    "\n" +
    "				<div class=\"market-update-block clr-block-3\" ng-click=\"callAction('Caction')\">\r" +
    "\n" +
    "End of Change block  \r" +
    "\n" +
    "                \r" +
    "\n" +
    "       ----------------------><div class=\"market-update-block clr-block-3\"><div class=\"col-md-8 market-update-left\"><!--						<h3>{{changes}}</h3>--><h3>15</h3><h4>Change Management</h4><p>planning,scheduling & tracking changes</p></div><div class=\"col-md-4 market-update-right\"><i class=\"fa fa-cubes\" style=\"font-size:48px\"></i></div><div class=\"clearfix\"></div></div></div><div class=\"clearfix\"></div></div><!--market updates end here--><!--mainpage chit-chating--><div class=\"chit-chat-layer1\"><div class=\"col-md-6 chit-chat-layer1-left\"><div class=\"work-progres\"><div class=\"chit-chat-heading\">Incident/Outages</div><div class=\"table-responsive\"><table class=\"table table-hover\"><thead><tr><th>#</th><th>IncidentID</th><th>Summary</th><th>Status</th></tr></thead><tbody><tr ng-repeat=\"x in mydata\"><td>{{$index+1}}</td><td>{{x['1']}}</td><td>{{x['8']}}</td><td><span class=\"label label-danger\">{{x['7']}}</span></td></tr><!--  <tr>\r" +
    "\n" +
    "                                  <td>2</td>\r" +
    "\n" +
    "                                  <td>Twitter</td>\r" +
    "\n" +
    "                                  <td>Evan</td>                               \r" +
    "\n" +
    "                                                                  \r" +
    "\n" +
    "                                  <td><span class=\"label label-success\">completed</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-success\">100%</span></td>\r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                              <tr>\r" +
    "\n" +
    "                                  <td>3</td>\r" +
    "\n" +
    "                                  <td>Google</td>\r" +
    "\n" +
    "                                  <td>John</td>                                \r" +
    "\n" +
    "                                  \r" +
    "\n" +
    "                                  <td><span class=\"label label-warning\">in progress</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-warning\">75%</span></td>\r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                              <tr>\r" +
    "\n" +
    "                                  <td>4</td>\r" +
    "\n" +
    "                                  <td>LinkedIn</td>\r" +
    "\n" +
    "                                  <td>Danial</td>                                 \r" +
    "\n" +
    "                                                             \r" +
    "\n" +
    "                                  <td><span class=\"label label-info\">in progress</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-info\">65%</span></td>\r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                              <tr>\r" +
    "\n" +
    "                                  <td>5</td>\r" +
    "\n" +
    "                                  <td>Tumblr</td>\r" +
    "\n" +
    "                                  <td>David</td>                                \r" +
    "\n" +
    "                                                                 \r" +
    "\n" +
    "                                  <td><span class=\"label label-warning\">in progress</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-danger\">95%</span></td>\r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                              <tr>\r" +
    "\n" +
    "                                  <td>6</td>\r" +
    "\n" +
    "                                  <td>Tesla</td>\r" +
    "\n" +
    "                                  <td>Mickey</td>                                  \r" +
    "\n" +
    "                                                             \r" +
    "\n" +
    "                                  <td><span class=\"label label-info\">in progress</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-success\">95%</span></td>\r" +
    "\n" +
    "                              </tr>--></tbody></table></div></div></div><div class=\"col-md-6 chit-chat-layer1-rit\" id=\"secCol\"><div class=\"geo-chart\"><section id=\"charts1\" class=\"charts\"><div class=\"wrapper-flex\"><table id=\"myTable\" class=\"geoChart tableChart data-table col-table\" style=\"display:none\"><caption>Student Nationalities Table</caption><tr><th scope=\"col\" data-type=\"string\">Country</th><th scope=\"col\" data-type=\"number\">Number of Students</th><th scope=\"col\" data-role=\"annotation\">Annotation</th></tr><tr><td>China</td><td align=\"right\">20</td><td align=\"right\">20</td></tr><tr><td>Colombia</td><td align=\"right\">5</td><td align=\"right\">5</td></tr><tr><td>France</td><td align=\"right\">3</td><td align=\"right\">3</td></tr><tr><td>Italy</td><td align=\"right\">1</td><td align=\"right\">1</td></tr><tr><td>Japan</td><td align=\"right\">18</td><td align=\"right\">18</td></tr><tr><td>Kazakhstan</td><td align=\"right\">1</td><td align=\"right\">1</td></tr><tr><td>Mexico</td><td align=\"right\">1</td><td align=\"right\">1</td></tr><tr><td>Poland</td><td align=\"right\">1</td><td align=\"right\">1</td></tr><tr><td>Russia</td><td align=\"right\">11</td><td align=\"right\">11</td></tr><tr><td>Spain</td><td align=\"right\">2</td><td align=\"right\">2</td></tr><tr><td>Tanzania</td><td align=\"right\">1</td><td align=\"right\">1</td></tr><tr><td>Turkey</td><td align=\"right\">2</td><td align=\"right\">2</td></tr></table><div class=\"col geo_main\"><h3 id=\"geoChartTitle\">World Market</h3><div id=\"geoChart\" class=\"chart\"></div></div></div><!-- .wrapper-flex --></section></div></div><div class=\"clearfix\"></div></div><!--main page chit chating end here--><!--main page chart start here--><div class=\"main-page-charts\"><div class=\"main-page-chart-layer1\"><div class=\"col-md-6 chart-layer1-left\" id=\"thirdCol\"><div class=\"glocy-chart\"><div class=\"span-2c\"><h3 class=\"tlt\">Sales Analytics</h3><canvas id=\"bar\" height=\"300\" width=\"400\" style=\"width: 400px; height: 300px\"></canvas><script>var barChartData = {\r" +
    "\n" +
    "                            labels : [\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"jul\"],\r" +
    "\n" +
    "                            datasets : [\r" +
    "\n" +
    "                                {\r" +
    "\n" +
    "                                    fillColor : \"#FC8213\",\r" +
    "\n" +
    "                                    data : [65,59,90,81,56,55,40]\r" +
    "\n" +
    "                                },\r" +
    "\n" +
    "                                {\r" +
    "\n" +
    "                                    fillColor : \"#337AB7\",\r" +
    "\n" +
    "                                    data : [28,48,40,19,96,27,100]\r" +
    "\n" +
    "                                }\r" +
    "\n" +
    "                            ]\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        };\r" +
    "\n" +
    "                            new Chart(document.getElementById(\"bar\").getContext(\"2d\")).Bar(barChartData);</script></div></div></div><div class=\"col-md-6 chart-layer1-right\" id=\"fourthCol\"><div class=\"content-main revenue\"><h3>Total Revenue</h3><canvas id=\"radar\" height=\"300\" width=\"300\" style=\"width: 300px; height: 300px\"></canvas><script>var radarChartData = {\r" +
    "\n" +
    "								labels : [\"\",\"\",\"\",\"\",\"\",\"\",\"\"],\r" +
    "\n" +
    "								datasets : [\r" +
    "\n" +
    "									{\r" +
    "\n" +
    "										fillColor : \"rgba(104, 174, 0, 0.83)\",\r" +
    "\n" +
    "										strokeColor : \"#68ae00\",\r" +
    "\n" +
    "										pointColor : \"#68ae00\",\r" +
    "\n" +
    "										pointStrokeColor : \"#fff\",\r" +
    "\n" +
    "										data : [65,59,90,81,56,55,40]\r" +
    "\n" +
    "									},\r" +
    "\n" +
    "									{\r" +
    "\n" +
    "										fillColor : \"rgba(236, 133, 38, 0.82)\",\r" +
    "\n" +
    "										strokeColor : \"#ec8526\",\r" +
    "\n" +
    "										pointColor : \"#ec8526\",\r" +
    "\n" +
    "										pointStrokeColor : \"#fff\",\r" +
    "\n" +
    "										data : [28,48,40,19,96,27,100]\r" +
    "\n" +
    "									}\r" +
    "\n" +
    "								]\r" +
    "\n" +
    "								\r" +
    "\n" +
    "							};\r" +
    "\n" +
    "							new Chart(document.getElementById(\"radar\").getContext(\"2d\")).Radar(radarChartData);</script></div><!--<div class=\"user-marorm\">\r" +
    "\n" +
    "			<div class=\"malorum-top\">				\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"malorm-bottom\">\r" +
    "\n" +
    "				<span class=\"malorum-pro\"> </span>\r" +
    "\n" +
    "			     <h4>unde omnis iste</h4>\r" +
    "\n" +
    "				 <h2>Melorum</h2>\r" +
    "\n" +
    "				<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising.</p>\r" +
    "\n" +
    "				<ul class=\"malorum-icons\">\r" +
    "\n" +
    "					<li><a href=\"#\"><i class=\"fa fa-facebook\"> </i>\r" +
    "\n" +
    "						<div class=\"tooltip\"><span>Facebook</span></div>\r" +
    "\n" +
    "					</a></li>\r" +
    "\n" +
    "					<li><a href=\"#\"><i class=\"fa fa-twitter\"> </i>\r" +
    "\n" +
    "						<div class=\"tooltip\"><span>Twitter</span></div>\r" +
    "\n" +
    "					</a></li>\r" +
    "\n" +
    "					<li><a href=\"#\"><i class=\"fa fa-google-plus\"> </i>\r" +
    "\n" +
    "						<div class=\"tooltip\"><span>Google</span></div>\r" +
    "\n" +
    "					</a></li>\r" +
    "\n" +
    "				</ul>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		   </div>\r" +
    "\n" +
    "		</div>--><div class=\"clearfix\"></div></div></div><!--main page chart layer2--><div class=\"chart-layer-2\"><!--<div class=\"col-md-6 chart-layer2-right\">\r" +
    "\n" +
    "			<div class=\"prograc-blocks\">--><!--Progress bars--><!--   <div class=\"home-progres-main\">\r" +
    "\n" +
    "	           <h3>Total Sales</h3>\r" +
    "\n" +
    "	         </div>\r" +
    "\n" +
    "	        <div class='bar_group'>\r" +
    "\n" +
    "					<div class='bar_group__bar thin' label='Rating' show_values='true' tooltip='true' value='343'></div>\r" +
    "\n" +
    "					<div class='bar_group__bar thin' label='Quality' show_values='true' tooltip='true' value='235'></div>\r" +
    "\n" +
    "					<div class='bar_group__bar thin' label='Amount' show_values='true' tooltip='true' value='550'></div>\r" +
    "\n" +
    "					<div class='bar_group__bar thin' label='Farming' show_values='true' tooltip='true' value='456'></div>\r" +
    "\n" +
    "		    </div>\r" +
    "\n" +
    "				<script src=\"js/bars.js\"></script>--><!--//Progress bars--><!-- </div>\r" +
    "\n" +
    "	</div>--><div class=\"col-md-6 chart-layer2-left\"><!--- code  --></div><div class=\"clearfix\"></div></div><!--climate start here--><!-- <div class=\"climate\">\r" +
    "\n" +
    "	<div class=\"col-md-4 climate-grids\">\r" +
    "\n" +
    "		<div class=\"climate-grid1\">\r" +
    "\n" +
    "			<div class=\"climate-gd1-top\">\r" +
    "\n" +
    "				<div class=\"col-md-6 climate-gd1top-left\">\r" +
    "\n" +
    "					<h4>Aprill 6-wed</h4>\r" +
    "\n" +
    "					<h3>12:30<span class=\"timein-pms\">PM</span></h3>				\r" +
    "\n" +
    "					<p>Humidity:</p>					\r" +
    "\n" +
    "					<p>Sunset:</p>\r" +
    "\n" +
    "					<p>Sunrise:</p>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<div class=\"col-md-6 climate-gd1top-right\">\r" +
    "\n" +
    "					  <span class=\"clime-icon\"> \r" +
    "\n" +
    "					  	<figure class=\"icons\">\r" +
    "\n" +
    "								<canvas id=\"partly-cloudy-day\" width=\"64\" height=\"64\">\r" +
    "\n" +
    "								</canvas>\r" +
    "\n" +
    "							</figure>\r" +
    "\n" +
    "						<script>\r" +
    "\n" +
    "							 var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "								  list  = [\r" +
    "\n" +
    "									\"clear-night\", \"partly-cloudy-day\",\r" +
    "\n" +
    "									\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "									\"fog\"\r" +
    "\n" +
    "								  ],\r" +
    "\n" +
    "								  i;\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  for(i = list.length; i--; )\r" +
    "\n" +
    "								icons.set(list[i], list[i]);\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  icons.play();\r" +
    "\n" +
    "						</script>					  \r" +
    "\n" +
    "				   </span>					\r" +
    "\n" +
    "					  <p>88%</p>					\r" +
    "\n" +
    "					  <p>5:40PM</p>\r" +
    "\n" +
    "					   <p>6:30AM</p>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"climate-gd1-bottom\">\r" +
    "\n" +
    "				<div class=\"col-md-4 cloudy1\">\r" +
    "\n" +
    "						<h4>Hongkong</h4>\r" +
    "\n" +
    "						  <figure class=\"icons\">\r" +
    "\n" +
    "							<canvas id=\"sleet\" width=\"58\" height=\"58\">\r" +
    "\n" +
    "							</canvas>\r" +
    "\n" +
    "					       </figure>\r" +
    "\n" +
    "					       <script>\r" +
    "\n" +
    "								 var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "									  list  = [\r" +
    "\n" +
    "										\"clear-night\", \"clear-day\",\r" +
    "\n" +
    "										\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "										\"fog\"\r" +
    "\n" +
    "									  ],\r" +
    "\n" +
    "									  i;\r" +
    "\n" +
    "	\r" +
    "\n" +
    "								  for(i = list.length; i--; )\r" +
    "\n" +
    "									icons.set(list[i], list[i]);\r" +
    "\n" +
    "	\r" +
    "\n" +
    "								  icons.play();\r" +
    "\n" +
    "							</script>\r" +
    "\n" +
    "						<h3>10c</h3>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div class=\"col-md-4 cloudy1\">\r" +
    "\n" +
    "						<h4>UK</h4>\r" +
    "\n" +
    "						<figure class=\"icons\">\r" +
    "\n" +
    "					<canvas id=\"cloudy\" width=\"58\" height=\"58\"></canvas>\r" +
    "\n" +
    "				</figure>					\r" +
    "\n" +
    "					<script>\r" +
    "\n" +
    "							 var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "								  list  = [\r" +
    "\n" +
    "									\"clear-night\", \"cloudy\",\r" +
    "\n" +
    "									\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "									\"fog\"\r" +
    "\n" +
    "								  ],\r" +
    "\n" +
    "								  i;\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  for(i = list.length; i--; )\r" +
    "\n" +
    "								icons.set(list[i], list[i]);\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  icons.play();\r" +
    "\n" +
    "						</script>\r" +
    "\n" +
    "						<h3>6c</h3>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div class=\"col-md-4 cloudy1\">\r" +
    "\n" +
    "						<h4>USA</h4>\r" +
    "\n" +
    "						<figure class=\"icons\">\r" +
    "\n" +
    "							<canvas id=\"snow\" width=\"58\" height=\"58\">\r" +
    "\n" +
    "							</canvas>\r" +
    "\n" +
    "						</figure>\r" +
    "\n" +
    "				        <script>\r" +
    "\n" +
    "							 var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "								  list  = [\r" +
    "\n" +
    "									\"clear-night\", \"clear-day\",\r" +
    "\n" +
    "									\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "									\"fog\"\r" +
    "\n" +
    "								  ],\r" +
    "\n" +
    "								  i;\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  for(i = list.length; i--; )\r" +
    "\n" +
    "								icons.set(list[i], list[i]);\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  icons.play();\r" +
    "\n" +
    "						</script>\r" +
    "\n" +
    "						<h3>10c</h3>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"col-md-4 climate-grids\">\r" +
    "\n" +
    "		<div class=\"climate-grid2\">\r" +
    "\n" +
    "			<span class=\"shoppy-rate\"><h4>$180</h4></span>\r" +
    "\n" +
    "			<ul>\r" +
    "\n" +
    "				<li> <i class=\"fa fa-credit-card\"> </i> </li>\r" +
    "\n" +
    "				<li> <i class=\"fa fa-usd\"> </i> </li>\r" +
    "\n" +
    "			</ul>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "		<div class=\"shoppy\">\r" +
    "\n" +
    "		<h3>Those Who Hate Shopping?</h3>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"col-md-4 climate-grids\">\r" +
    "\n" +
    "		<div class=\"climate-grid3\">\r" +
    "\n" +
    "			<div class=\"popular-brand\">\r" +
    "\n" +
    "				<div class=\"col-md-6 popular-bran-left\">\r" +
    "\n" +
    "				     <h3>Popular</h3>\r" +
    "\n" +
    "				     <h4>Brand of this month</h4>\r" +
    "\n" +
    "				     <p> Duis aute irure  in reprehenderit.</p>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<div class=\"col-md-6 popular-bran-right\">\r" +
    "\n" +
    "					<h3>Polo</h3>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			  <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"popular-follow\">\r" +
    "\n" +
    "				<div class=\"col-md-6 popular-follo-left\">\r" +
    "\n" +
    "					<p>Lorem ipsum dolor sit amet, adipiscing elit.</p>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<div class=\"col-md-6 popular-follo-right\">\r" +
    "\n" +
    "					<h4>Follower</h4>\r" +
    "\n" +
    "					<h5>2892</h5>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			  <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "</div>--><!--climate end here--></div><!--inner block end here--></div></div><!--slider menu--><!--  <div class=\"sidebar-menu\">\r" +
    "\n" +
    "		  	<div class=\"logo\"> <a href=\"#\" class=\"sidebar-icon\"> <span class=\"fa fa-bars\"></span> </a> <a href=\"#\"> <span id=\"logo\" ></span> \r" +
    "\n" +
    "			      <img id=\"logo\" src=\"\" alt=\"Logo\"/>\r" +
    "\n" +
    "			  </a> </div>		  \r" +
    "\n" +
    "		    <div class=\"menu\">\r" +
    "\n" +
    "		      <ul id=\"menu\" >\r" +
    "\n" +
    "		        <li id=\"menu-home\" ><a href=\"index.html\"><i class=\"fa fa-tachometer\"></i><span>Dashboard</span></a></li>\r" +
    "\n" +
    "		        <li><a href=\"#\"><i class=\"fa fa-cogs\"></i><span>Components</span><span class=\"fa fa-angle-right\" style=\"float: right\"></span></a>\r" +
    "\n" +
    "		          <ul>\r" +
    "\n" +
    "		            <li><a href=\"grids.html\">Grids</a></li>\r" +
    "\n" +
    "		            <li><a href=\"portlet.html\">Portlets</a></li>		            \r" +
    "\n" +
    "		          </ul>\r" +
    "\n" +
    "		        </li>\r" +
    "\n" +
    "		        <li id=\"menu-comunicacao\" ><a href=\"#\"><i class=\"fa fa-book nav_icon\"></i><span>Element</span><span class=\"fa fa-angle-right\" style=\"float: right\"></span></a>\r" +
    "\n" +
    "		          <ul id=\"menu-comunicacao-sub\" >\r" +
    "\n" +
    "		            <li id=\"menu-mensagens\" style=\"width: 120px\" ><a href=\"buttons.html\">Buttons</a>		              \r" +
    "\n" +
    "		            </li>\r" +
    "\n" +
    "		            <li id=\"menu-arquivos\" ><a href=\"typography.html\">Typography</a></li>\r" +
    "\n" +
    "		            <li id=\"menu-arquivos\" ><a href=\"icons.html\">Icons</a></li>\r" +
    "\n" +
    "		          </ul>\r" +
    "\n" +
    "		        </li>\r" +
    "\n" +
    "		          <li><a href=\"maps.html\"><i class=\"fa fa-map-marker\"></i><span>Maps</span></a></li>\r" +
    "\n" +
    "		        <li id=\"menu-academico\" ><a href=\"#\"><i class=\"fa fa-file-text\"></i><span>Pages</span><span class=\"fa fa-angle-right\" style=\"float: right\"></span></a>\r" +
    "\n" +
    "		          <ul id=\"menu-academico-sub\" >\r" +
    "\n" +
    "		          	 <li id=\"menu-academico-boletim\" ><a href=\"login.html\">Login</a></li>\r" +
    "\n" +
    "		            <li id=\"menu-academico-avaliacoes\" ><a href=\"signup.html\">Sign Up</a></li>		           \r" +
    "\n" +
    "		          </ul>\r" +
    "\n" +
    "		        </li>\r" +
    "\n" +
    "		        \r" +
    "\n" +
    "		        <li><a href=\"charts.html\"><i class=\"fa fa-bar-chart\"></i><span>Charts</span></a></li>\r" +
    "\n" +
    "		        <li><a href=\"#\"><i class=\"fa fa-envelope\"></i><span>Mailbox</span><span class=\"fa fa-angle-right\" style=\"float: right\"></span></a>\r" +
    "\n" +
    "		        	 <ul id=\"menu-academico-sub\" >\r" +
    "\n" +
    "			            <li id=\"menu-academico-avaliacoes\" ><a href=\"inbox.html\">Inbox</a></li>\r" +
    "\n" +
    "			            <li id=\"menu-academico-boletim\" ><a href=\"inbox-details.html\">Compose email</a></li>\r" +
    "\n" +
    "		             </ul>\r" +
    "\n" +
    "		        </li>\r" +
    "\n" +
    "		         <li><a href=\"#\"><i class=\"fa fa-cog\"></i><span>System</span><span class=\"fa fa-angle-right\" style=\"float: right\"></span></a>\r" +
    "\n" +
    "		         	 <ul id=\"menu-academico-sub\" >\r" +
    "\n" +
    "			            <li id=\"menu-academico-avaliacoes\" ><a href=\"404.html\">404</a></li>\r" +
    "\n" +
    "			            <li id=\"menu-academico-boletim\" ><a href=\"blank.html\">Blank</a></li>\r" +
    "\n" +
    "		             </ul>\r" +
    "\n" +
    "		         </li>\r" +
    "\n" +
    "		         <li><a href=\"#\"><i class=\"fa fa-shopping-cart\"></i><span>E-Commerce</span><span class=\"fa fa-angle-right\" style=\"float: right\"></span></a>\r" +
    "\n" +
    "		         	<ul id=\"menu-academico-sub\" >\r" +
    "\n" +
    "			            <li id=\"menu-academico-avaliacoes\" ><a href=\"product.html\">Product</a></li>\r" +
    "\n" +
    "			            <li id=\"menu-academico-boletim\" ><a href=\"price.html\">Price</a></li>\r" +
    "\n" +
    "		             </ul>\r" +
    "\n" +
    "		         </li>\r" +
    "\n" +
    "		      </ul>\r" +
    "\n" +
    "		    </div>\r" +
    "\n" +
    "	 </div>\r" +
    "\n" +
    "	<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "</div>--><!--slide bar menu end here--><script>var toggle = true;\r" +
    "\n" +
    "            \r" +
    "\n" +
    "$(\".sidebar-icon\").click(function() {                \r" +
    "\n" +
    "  if (toggle)\r" +
    "\n" +
    "  {\r" +
    "\n" +
    "    $(\".page-container\").addClass(\"sidebar-collapsed\").removeClass(\"sidebar-collapsed-back\");\r" +
    "\n" +
    "    $(\"#menu span\").css({\"position\":\"absolute\"});\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "  else\r" +
    "\n" +
    "  {\r" +
    "\n" +
    "    $(\".page-container\").removeClass(\"sidebar-collapsed\").addClass(\"sidebar-collapsed-back\");\r" +
    "\n" +
    "    setTimeout(function() {\r" +
    "\n" +
    "      $(\"#menu span\").css({\"position\":\"relative\"});\r" +
    "\n" +
    "    }, 400);\r" +
    "\n" +
    "  }               \r" +
    "\n" +
    "                toggle = !toggle;\r" +
    "\n" +
    "            });</script><!--scrolling js--><script src=\"/com.vyom.vyomlib/resources/homepage/js/jquery.nicescroll.js\"></script><script src=\"/com.vyom.vyomlib/resources/homepage/js/scripts.js\"></script><!--//scrolling js--><script src=\"/com.vyom.vyomlib/resources/homepage/js/bootstrap.js\"></script><!-- mother grid end here--></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/vc9/com-vyom-vyomlib-inspector-vc9-ccheckbox.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide change details</rx-tooltip>{{options.label}}:<select ng-model=\"HChange\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/vc9/com-vyom-vyomlib-inspector-vc9-icheckbox.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<select ng-model=\"HIncident\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/vc9/com-vyom-vyomlib-inspector-vc9-scheckbox.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\">select checkbox to hide incident details</rx-tooltip>{{options.label}}:<select ng-model=\"HSubscriber\" ng-options=\"x for x in names\"></select></label>"
  );


  $templateCache.put('scripts/view-components/vc9/com-vyom-vyomlib-vc9-design.directive.html',
    "<span class=\"d-icon-server_web_node\" style=\"font-size: 100px;text-align: center\"></span>"
  );


  $templateCache.put('scripts/view-components/vc9/com-vyom-vyomlib-vc9.directive.html',
    "<!DOCTYPE HTML>\r" +
    "\n" +
    "<html>\r" +
    "\n" +
    "<head>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r" +
    "\n" +
    "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r" +
    "\n" +
    "<meta name=\"keywords\" content=\"Shoppy Responsive web vyomlib, Bootstrap Web vyomlibs, Flat Web vyomlibs, Android Compatible web vyomlib, \r" +
    "\n" +
    "Smartphone Compatible web vyomlib, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design\" />\r" +
    "\n" +
    "<script type=\"application/x-javascript\"> addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>\r" +
    "\n" +
    "<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r" +
    "\n" +
    "<link href=\"/com.vyom.vyomlib/resources/homepage/css/bootstrap.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\">\r" +
    "\n" +
    "<!-- Custom Theme files -->\r" +
    "\n" +
    "<link href=\"/com.vyom.vyomlib/resources/homepage/css/style.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"/>\r" +
    "\n" +
    "<!--js-->\r" +
    "\n" +
    "<script src=\"/com.vyom.vyomlib/resources/homepage/js/jquery-2.1.1.min.js\"></script> \r" +
    "\n" +
    "<!--icons-css-->\r" +
    "\n" +
    "<link href=\"/com.vyom.vyomlib/resources/homepage/css/font-awesome.css\" rel=\"stylesheet\"> \r" +
    "\n" +
    "<!--Google Fonts-->\r" +
    "\n" +
    "<link href='//fonts.googleapis.com/css?family=Carrois+Gothic' rel='stylesheet' type='text/css'>\r" +
    "\n" +
    "<link href='//fonts.googleapis.com/css?family=Work+Sans:400,500,600' rel='stylesheet' type='text/css'>\r" +
    "\n" +
    "<!--static chart-->\r" +
    "\n" +
    "<script src=\"/com.vyom.vyomlib/resources/homepage/js/Chart.min.js\"></script>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "<!--//charts-->\r" +
    "\n" +
    "<!-- geo chart -->\r" +
    "\n" +
    " <script src=\"//cdn.jsdelivr.net/modernizr/2.8.3/modernizr.min.js\" type=\"text/javascript\"></script>\r" +
    "\n" +
    "<!--    <script>window.modernizr || document.write('<script src=\"lib/modernizr/modernizr-custom.js\"><\\/script>')</script>-->\r" +
    "\n" +
    "<!--    <script src=\"lib/html5shiv/html5shiv.js\"></script>-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--floating window -->\r" +
    "\n" +
    "    <style>\r" +
    "\n" +
    "     .float{\r" +
    "\n" +
    "	position:fixed;\r" +
    "\n" +
    "	width:60px;\r" +
    "\n" +
    "	height:60px;\r" +
    "\n" +
    "	bottom:40px;\r" +
    "\n" +
    "	right:40px;\r" +
    "\n" +
    "	background-color:white;\r" +
    "\n" +
    "	color:black;\r" +
    "\n" +
    "	border-radius:50px;\r" +
    "\n" +
    "	text-align:center;\r" +
    "\n" +
    "	box-shadow: 2px 2px 3px #999;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    ".my-float{\r" +
    "\n" +
    "	margin-top:22px;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "           </style>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "     <!-- Chartinator  -->\r" +
    "\n" +
    "<script src=\"/com.vyom.vyomlib/resources/homepage/js/chartinator.js\" ></script>\r" +
    "\n" +
    "    <script type=\"text/javascript\">\r" +
    "\n" +
    "        jQuery(function ($) {\r" +
    "\n" +
    "\r" +
    "\n" +
    "            var chart3 = $('#geoChart').chartinator({\r" +
    "\n" +
    "                tableSel: '.geoChart',\r" +
    "\n" +
    "\r" +
    "\n" +
    "                columns: [{role: 'tooltip', type: 'string'}],\r" +
    "\n" +
    "         \r" +
    "\n" +
    "                colIndexes: [2],\r" +
    "\n" +
    "             \r" +
    "\n" +
    "                rows: [\r" +
    "\n" +
    "                    ['China - 2015'],\r" +
    "\n" +
    "                    ['Colombia - 2015'],\r" +
    "\n" +
    "                    ['France - 2015'],\r" +
    "\n" +
    "                    ['Italy - 2015'],\r" +
    "\n" +
    "                    ['Japan - 2015'],\r" +
    "\n" +
    "                    ['Kazakhstan - 2015'],\r" +
    "\n" +
    "                    ['Mexico - 2015'],\r" +
    "\n" +
    "                    ['Poland - 2015'],\r" +
    "\n" +
    "                    ['India - 2019'],\r" +
    "\n" +
    "                    ['Spain - 2015'],\r" +
    "\n" +
    "                    ['Tanzania - 2015'],\r" +
    "\n" +
    "                    ['Turkey - 2015']],\r" +
    "\n" +
    "              \r" +
    "\n" +
    "                ignoreCol: [2],\r" +
    "\n" +
    "              \r" +
    "\n" +
    "                chartType: 'GeoChart',\r" +
    "\n" +
    "              \r" +
    "\n" +
    "                chartAspectRatio: 1.5,\r" +
    "\n" +
    "             \r" +
    "\n" +
    "                chartZoom: 0,\r" +
    "\n" +
    "             \r" +
    "\n" +
    "                chartOffset: [-12,0],\r" +
    "\n" +
    "             \r" +
    "\n" +
    "                chartOptions: {\r" +
    "\n" +
    "                  \r" +
    "\n" +
    "                    width: null,\r" +
    "\n" +
    "                 \r" +
    "\n" +
    "                    backgroundColor: '#fff',\r" +
    "\n" +
    "                 \r" +
    "\n" +
    "                    datalessRegionColor: '#F5F5F5',\r" +
    "\n" +
    "               \r" +
    "\n" +
    "                    region: 'world',\r" +
    "\n" +
    "                  \r" +
    "\n" +
    "                    resolution: 'countries',\r" +
    "\n" +
    "                 \r" +
    "\n" +
    "                    legend: 'none',\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    colorAxis: {\r" +
    "\n" +
    "                       \r" +
    "\n" +
    "                        colors: ['#679CCA', '#337AB7']\r" +
    "\n" +
    "                    },\r" +
    "\n" +
    "                    tooltip: {\r" +
    "\n" +
    "                     \r" +
    "\n" +
    "                        trigger: 'focus',\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        isHtml: true\r" +
    "\n" +
    "                    }\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "\r" +
    "\n" +
    "               \r" +
    "\n" +
    "            });                       \r" +
    "\n" +
    "        });\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "<!--geo chart-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--skycons-icons-->\r" +
    "\n" +
    "<script src=\"/com.vyom.vyomlib/resources/homepage/js/skycons.js\"></script>\r" +
    "\n" +
    "<!--//skycons-icons-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "<script>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "function hideWidget()\r" +
    "\n" +
    "    {\r" +
    "\n" +
    "        \r" +
    "\n" +
    "       if(HideIncident == 'true') \r" +
    "\n" +
    "           {\r" +
    "\n" +
    "               console.log(\"enter in function2\"+HideIncident);\r" +
    "\n" +
    "               document.getElementById(\"incidentW1\").style.display=\"none\";\r" +
    "\n" +
    "               document.getElementById(\"incidentW2\").style.display=\"none\";\r" +
    "\n" +
    "           }\r" +
    "\n" +
    "        if(HideChange == 'true') \r" +
    "\n" +
    "           {\r" +
    "\n" +
    "              \r" +
    "\n" +
    "               document.getElementById(\"changeW1\").style.display=\"none\";\r" +
    "\n" +
    "            \r" +
    "\n" +
    "           }\r" +
    "\n" +
    "        if(HideSubscriber == 'true') \r" +
    "\n" +
    "           {\r" +
    "\n" +
    "               \r" +
    "\n" +
    "               document.getElementById(\"subscriberW1\").style.display=\"none\";\r" +
    "\n" +
    "               \r" +
    "\n" +
    "           }\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "//function display()\r" +
    "\n" +
    "//{\r" +
    "\n" +
    "//var arr=displayC.split(\",\"); \r" +
    "\n" +
    "//    console.log(arr);\r" +
    "\n" +
    "//if(arr.includes(\"1\"))\r" +
    "\n" +
    "//    {\r" +
    "\n" +
    "//        document.getElementById(\"secCol\").style.display=\"none\";\r" +
    "\n" +
    "//        \r" +
    "\n" +
    "//    }\r" +
    "\n" +
    "// if (arr.includes(\"2\"))\r" +
    "\n" +
    "//    {\r" +
    "\n" +
    "//        document.getElementById(\"thirdCol\").style.display=\"none\";\r" +
    "\n" +
    "//        \r" +
    "\n" +
    "//    } \r" +
    "\n" +
    "// if (arr.includes(\"3\"))\r" +
    "\n" +
    "//    {\r" +
    "\n" +
    "//        document.getElementById(\"fourthCol\").style.display=\"none\";\r" +
    "\n" +
    "//        \r" +
    "\n" +
    "//    } \r" +
    "\n" +
    "//}\r" +
    "\n" +
    "\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "</head>\r" +
    "\n" +
    "<body onload=\"display()\">\r" +
    "\n" +
    "   \r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"page-container\">	\r" +
    "\n" +
    "   <div class=\"\">\r" +
    "\n" +
    "	   <div class=\"mother-grid-inner\">\r" +
    "\n" +
    "           \r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "           \r" +
    "\n" +
    "               <div>\r" +
    "\n" +
    "        <h1>{{subscribers}}</h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "   \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "           \r" +
    "\n" +
    "           \r" +
    "\n" +
    "           \r" +
    "\n" +
    "           \r" +
    "\n" +
    "           \r" +
    "\n" +
    "            <!--header start here-->\r" +
    "\n" +
    "<!--				<div class=\"header-main\">\r" +
    "\n" +
    "					<div class=\"header-left\">\r" +
    "\n" +
    "							<div class=\"logo-name\">\r" +
    "\n" +
    "									 <a href=\"/com.vyom.vyomlib/resources/homepage/index.html\"> \r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                                <h1>MyIT Alerts</h1> \r" +
    "\n" +
    "                                 <img id=\"logo\" src=\"\" alt=\"Logo\"/>\r" +
    "\n" +
    "								  </a> 								\r" +
    "\n" +
    "							</div>\r" +
    "\n" +
    "  -->                      \r" +
    "\n" +
    "							<!--search-box-->\r" +
    "\n" +
    "<!--           \r" +
    "\n" +
    "								<div class=\"search-box\">\r" +
    "\n" +
    "									<form>\r" +
    "\n" +
    "										<input type=\"text\" placeholder=\"Search...\" required=\"\">	\r" +
    "\n" +
    "										<input type=\"submit\" value=\"\">\r" +
    "\n" +
    "									</form>\r" +
    "\n" +
    "								</div>\r" +
    "\n" +
    "                            <!--//end-search-box-->\r" +
    "\n" +
    "                      \r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "						<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "						 </div>\r" +
    "\n" +
    "						 <div class=\"header-right\">\r" +
    "\n" +
    "							<div class=\"profile_details_left\">\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                                <!--notifications of menu start -->\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "							<ul class=\"nofitications-dropdown\">\r" +
    "\n" +
    "									<li class=\"dropdown head-dpdn\">\r" +
    "\n" +
    "										<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-envelope\"></i><span class=\"badge\">3</span></a>\r" +
    "\n" +
    "										<ul class=\"dropdown-menu\">\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_header\">\r" +
    "\n" +
    "													<h3>You have 3 new messages</h3>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "											   <div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p4.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li class=\"odd\"><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p2.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor </p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											  <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "											   <div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p3.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_bottom\">\r" +
    "\n" +
    "													<a href=\"#\">See all messages</a>\r" +
    "\n" +
    "												</div> \r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "										</ul>\r" +
    "\n" +
    "									</li>\r" +
    "\n" +
    "									<li class=\"dropdown head-dpdn\">\r" +
    "\n" +
    "										<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-bell\"></i><span class=\"badge blue\">3</span></a>\r" +
    "\n" +
    "										<ul class=\"dropdown-menu\">\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_header\">\r" +
    "\n" +
    "													<h3>You have 3 new notification</h3>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p5.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											  <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											 </a></li>\r" +
    "\n" +
    "											 <li class=\"odd\"><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p6.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											 </a></li>\r" +
    "\n" +
    "											 <li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"user_img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p7.png\" alt=\"\"></div>\r" +
    "\n" +
    "											   <div class=\"notification_desc\">\r" +
    "\n" +
    "												<p>Lorem ipsum dolor</p>\r" +
    "\n" +
    "												<p><span>1 hour ago</span></p>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											 </a></li>\r" +
    "\n" +
    "											 <li>\r" +
    "\n" +
    "												<div class=\"notification_bottom\">\r" +
    "\n" +
    "													<a href=\"#\">See all notifications</a>\r" +
    "\n" +
    "												</div> \r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "										</ul>\r" +
    "\n" +
    "									</li>	\r" +
    "\n" +
    "									<li class=\"dropdown head-dpdn\">\r" +
    "\n" +
    "										<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-tasks\"></i><span class=\"badge blue1\">9</span></a>\r" +
    "\n" +
    "										<ul class=\"dropdown-menu\">\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_header\">\r" +
    "\n" +
    "													<h3>You have 8 pending task</h3>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"task-info\">\r" +
    "\n" +
    "													<span class=\"task-desc\">Database update</span><span class=\"percentage\">40%</span>\r" +
    "\n" +
    "													<div class=\"clearfix\"></div>	\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "												<div class=\"progress progress-striped active\">\r" +
    "\n" +
    "													<div class=\"bar yellow\" style=\"width:40%;\"></div>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"task-info\">\r" +
    "\n" +
    "													<span class=\"task-desc\">Dashboard done</span><span class=\"percentage\">90%</span>\r" +
    "\n" +
    "												   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "												<div class=\"progress progress-striped active\">\r" +
    "\n" +
    "													 <div class=\"bar green\" style=\"width:90%;\"></div>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"task-info\">\r" +
    "\n" +
    "													<span class=\"task-desc\">Mobile App</span><span class=\"percentage\">33%</span>\r" +
    "\n" +
    "													<div class=\"clearfix\"></div>	\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											   <div class=\"progress progress-striped active\">\r" +
    "\n" +
    "													 <div class=\"bar red\" style=\"width: 33%;\"></div>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li><a href=\"#\">\r" +
    "\n" +
    "												<div class=\"task-info\">\r" +
    "\n" +
    "													<span class=\"task-desc\">Issues fixed</span><span class=\"percentage\">80%</span>\r" +
    "\n" +
    "												   <div class=\"clearfix\"></div>	\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "												<div class=\"progress progress-striped active\">\r" +
    "\n" +
    "													 <div class=\"bar  blue\" style=\"width: 80%;\"></div>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "											</a></li>\r" +
    "\n" +
    "											<li>\r" +
    "\n" +
    "												<div class=\"notification_bottom\">\r" +
    "\n" +
    "													<a href=\"#\">See all pending tasks</a>\r" +
    "\n" +
    "												</div> \r" +
    "\n" +
    "											</li>\r" +
    "\n" +
    "										</ul>\r" +
    "\n" +
    "									</li>	\r" +
    "\n" +
    "								</ul>\r" +
    "\n" +
    "								<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "							</div>  \r" +
    "\n" +
    "-->\r" +
    "\n" +
    "						<!--notification menu end -->\r" +
    "\n" +
    "                              \r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "						<div class=\"profile_details\">		\r" +
    "\n" +
    "								<ul>\r" +
    "\n" +
    "									<li class=\"dropdown profile_details_drop\">\r" +
    "\n" +
    "										<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r" +
    "\n" +
    "											<div class=\"profile_img\">	\r" +
    "\n" +
    "												<span class=\"prfil-img\"><img src=\"/com.vyom.vyomlib/resources/homepage/images/p1.png\" alt=\"\"> </span> \r" +
    "\n" +
    "												<div class=\"user-name\">\r" +
    "\n" +
    "													<p>Malorum</p>\r" +
    "\n" +
    "													<span>Administrator</span>\r" +
    "\n" +
    "												</div>\r" +
    "\n" +
    "												<i class=\"fa fa-angle-down lnr\"></i>\r" +
    "\n" +
    "												<i class=\"fa fa-angle-up lnr\"></i>\r" +
    "\n" +
    "												<div class=\"clearfix\"></div>	\r" +
    "\n" +
    "											</div>	\r" +
    "\n" +
    "										</a>\r" +
    "\n" +
    "										<ul class=\"dropdown-menu drp-mnu\">\r" +
    "\n" +
    "											<li> <a href=\"#\"><i class=\"fa fa-cog\"></i> Settings</a> </li> \r" +
    "\n" +
    "											<li> <a href=\"#\"><i class=\"fa fa-user\"></i> Profile</a> </li> \r" +
    "\n" +
    "											<li> <a href=\"#\"><i class=\"fa fa-sign-out\"></i> Logout</a> </li>\r" +
    "\n" +
    "										</ul>\r" +
    "\n" +
    "									</li>\r" +
    "\n" +
    "								</ul>\r" +
    "\n" +
    "							</div>\r" +
    "\n" +
    "							<div class=\"clearfix\"> </div>				\r" +
    "\n" +
    "						</div>\r" +
    "\n" +
    "				     <div class=\"clearfix\"> </div>	\r" +
    "\n" +
    "				</div> \r" +
    "\n" +
    "-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--heder end here-->\r" +
    "\n" +
    "<!-- script-for sticky-nav -->\r" +
    "\n" +
    "		<script>\r" +
    "\n" +
    "		$(document).ready(function() {\r" +
    "\n" +
    "			 var navoffeset=$(\".header-main\").offset().top;\r" +
    "\n" +
    "			 $(window).scroll(function(){\r" +
    "\n" +
    "				var scrollpos=$(window).scrollTop(); \r" +
    "\n" +
    "				if(scrollpos >=navoffeset){\r" +
    "\n" +
    "					$(\".header-main\").addClass(\"fixed\");\r" +
    "\n" +
    "				}else{\r" +
    "\n" +
    "					$(\".header-main\").removeClass(\"fixed\");\r" +
    "\n" +
    "				}\r" +
    "\n" +
    "			 });\r" +
    "\n" +
    "			 \r" +
    "\n" +
    "		});\r" +
    "\n" +
    "		</script>\r" +
    "\n" +
    "		<!-- /script-for sticky-nav -->\r" +
    "\n" +
    "<!--inner block start here-->\r" +
    "\n" +
    "<div class=\"inner-block\" style=\"padding-top: 20px;\">\r" +
    "\n" +
    "<!--market updates updates-->\r" +
    "\n" +
    "	 <div class=\"market-updates\">\r" +
    "\n" +
    "			<div class=\"col-md-4 market-update-gd\" id=\"subscriberW1\">\r" +
    "\n" +
    "                \r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--Change block                -->\r" +
    "\n" +
    "				<div class=\"market-update-block clr-block-1\" ng-click=\"callAction('Saction')\">\r" +
    "\n" +
    "                \r" +
    "\n" +
    "<!--End of Change block-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                \r" +
    "\n" +
    "<!--                <div class=\"market-update-block clr-block-1\" >-->\r" +
    "\n" +
    "					<div class=\"col-md-8 market-update-left\">\r" +
    "\n" +
    "<!--						<h3>{{subscribers}}</h3>-->\r" +
    "\n" +
    "<!--                        <h3>33</h3>-->\r" +
    "\n" +
    "                        <h3>{{rxConfiguration.propertiesByName.subscribers | comVyomVyomlibMyFilter}}</h3>\r" +
    "\n" +
    "						<h4>Manage Subscription</h4>\r" +
    "\n" +
    "						<p>Subscribe MYIT Alerts.</p>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div class=\"col-md-4 market-update-right\">\r" +
    "\n" +
    "						<i class=\"fa fa-thumbs-o-up\" style=\"font-size:48px;\"> </i>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				  <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"col-md-4 market-update-gd\" id=\"incidentW1\">\r" +
    "\n" +
    "                \r" +
    "\n" +
    "            \r" +
    "\n" +
    "<!--Change block-->\r" +
    "\n" +
    "				<div class=\"market-update-block clr-block-2\" ng-click=\"callAction('Iaction')\" >\r" +
    "\n" +
    "<!--End of Change block-->\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                \r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                <div class=\"market-update-block clr-block-2\" >\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                    \r" +
    "\n" +
    "				 <div class=\"col-md-8 market-update-left\">\r" +
    "\n" +
    "<!--					<h3>{{incidents}}</h3>-->\r" +
    "\n" +
    "<!--                     <h3>22</h3>-->\r" +
    "\n" +
    "                     <h3>{{rxConfiguration.propertiesByName.incidents | comVyomVyomlibMyFilter}}</h3>\r" +
    "\n" +
    "					<h4>Incident Management</h4>\r" +
    "\n" +
    "					<p>Restoring normal service operations.</p>\r" +
    "\n" +
    "				  </div>\r" +
    "\n" +
    "					<div class=\"col-md-4 market-update-right\">\r" +
    "\n" +
    "						<i class=\"fa fa-eye\"> </i>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				  <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"col-md-4 market-update-gd\" id=\"changeW1\">\r" +
    "\n" +
    "                \r" +
    "\n" +
    "               \r" +
    "\n" +
    "<!--Change block  -->\r" +
    "\n" +
    "				<div class=\"market-update-block clr-block-3\" ng-click=\"callAction('Caction')\">\r" +
    "\n" +
    "<!--End of Change block  -->\r" +
    "\n" +
    "                \r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "           \r" +
    "\n" +
    "                    <div class=\"market-update-block clr-block-3\" >\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                    \r" +
    "\n" +
    "					<div class=\"col-md-8 market-update-left\">\r" +
    "\n" +
    "<!--						<h3>{{changes}}</h3> -->\r" +
    "\n" +
    "<!--                        <h3>15</h3>-->\r" +
    "\n" +
    "                        <h3>{{rxConfiguration.propertiesByName.changes | comVyomVyomlibMyFilter}}</h3>\r" +
    "\n" +
    "						<h4>Change Management</h4>\r" +
    "\n" +
    "						<p>planning,scheduling & tracking changes </p>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div class=\"col-md-4 market-update-right\">\r" +
    "\n" +
    "						<i class=\"fa fa-cubes\" style=\"font-size:48px;\"> </i>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				  <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		   <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "<!--market updates end here-->\r" +
    "\n" +
    "<!--mainpage chit-chating-->\r" +
    "\n" +
    "<div class=\"chit-chat-layer1\">\r" +
    "\n" +
    "	<div class=\"col-md-6 chit-chat-layer1-left\" id=\"incidentW2\">\r" +
    "\n" +
    "               <div class=\"work-progres\" style=\"  height: 400px; overflow-y: scroll;\" >\r" +
    "\n" +
    "                            <div class=\"chit-chat-heading\">\r" +
    "\n" +
    "                                  Incident/Outages\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"table-responsive\">\r" +
    "\n" +
    "                                <table class=\"table table-hover\">\r" +
    "\n" +
    "                                  <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                      <th>#</th>\r" +
    "\n" +
    "                                      <th>IncidentID</th>\r" +
    "\n" +
    "                                      <th>Summary</th>                                   \r" +
    "\n" +
    "                                                                        \r" +
    "\n" +
    "                                      <th>Status</th>\r" +
    "\n" +
    "                                  </tr>\r" +
    "\n" +
    "                              </thead>\r" +
    "\n" +
    "                              <tbody>\r" +
    "\n" +
    "<!--Change block-->\r" +
    "\n" +
    "                                <tr ng-repeat=\"x in mydata\">\r" +
    "\n" +
    "                                  <td>{{$index+1}}</td>\r" +
    "\n" +
    "                                  <td>{{x['1']}}</td>\r" +
    "\n" +
    "                                  <td>{{x['8']}}</td>                               \r" +
    "\n" +
    "                                  <td><span class=\"label label-danger\">{{x['7']}}</span></td>\r" +
    "\n" +
    "                                 \r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "<!--End of Change block-->\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                  <td>1</td>\r" +
    "\n" +
    "                                  <td>INC000000092</td>\r" +
    "\n" +
    "                                  <td>Email Service</td>                               \r" +
    "\n" +
    "                                  <td><span class=\"label label-success\">In Progress</span></td>\r" +
    "\n" +
    "                                 \r" +
    "\n" +
    "                              </tr>   \r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                  <td>2</td>\r" +
    "\n" +
    "                                  <td>INC000000093</td>\r" +
    "\n" +
    "                                  <td>Database</td>                               \r" +
    "\n" +
    "                                  <td><span class=\"label label-success\">In Progress</span></td>\r" +
    "\n" +
    "                                 \r" +
    "\n" +
    "                              </tr> <tr>\r" +
    "\n" +
    "                                  <td>3</td>\r" +
    "\n" +
    "                                  <td>INC000000094</td>\r" +
    "\n" +
    "                                  <td>Email Service</td>                               \r" +
    "\n" +
    "                                  <td><span class=\"label label-success\">In Progress</span></td>\r" +
    "\n" +
    "                                 \r" +
    "\n" +
    "                              </tr>   \r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                  <td>4</td>\r" +
    "\n" +
    "                                  <td>INC000000095</td>\r" +
    "\n" +
    "                                  <td>Database</td>                               \r" +
    "\n" +
    "                                  <td><span class=\"label label-success\">In Progress</span></td>\r" +
    "\n" +
    "                                 \r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                                                                </tr> <tr>\r" +
    "\n" +
    "                                  <td>5</td>\r" +
    "\n" +
    "                                  <td>INC000000096</td>\r" +
    "\n" +
    "                                  <td>Email Service</td>                               \r" +
    "\n" +
    "                                  <td><span class=\"label label-success\">In Progress</span></td>\r" +
    "\n" +
    "                                 \r" +
    "\n" +
    "                              </tr>   \r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                  <td>6</td>\r" +
    "\n" +
    "                                  <td>INC000000097</td>\r" +
    "\n" +
    "                                  <td>Database</td>                               \r" +
    "\n" +
    "                                  <td><span class=\"label label-success\">In Progress</span></td>\r" +
    "\n" +
    "                                 \r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                                  \r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                  <td>5</td>\r" +
    "\n" +
    "                                  <td>INC000000098</td>\r" +
    "\n" +
    "                                  <td>Internet Service</td>                               \r" +
    "\n" +
    "                                  <td><span class=\"label label-danger\">Closed</span></td>\r" +
    "\n" +
    "                                 \r" +
    "\n" +
    "                              </tr>  \r" +
    "\n" +
    "                                  \r" +
    "\n" +
    "-->\r" +
    "\n" +
    "                                  \r" +
    "\n" +
    "                            <!--  <tr>\r" +
    "\n" +
    "                                  <td>2</td>\r" +
    "\n" +
    "                                  <td>Twitter</td>\r" +
    "\n" +
    "                                  <td>Evan</td>                               \r" +
    "\n" +
    "                                                                  \r" +
    "\n" +
    "                                  <td><span class=\"label label-success\">completed</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-success\">100%</span></td>\r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                              <tr>\r" +
    "\n" +
    "                                  <td>3</td>\r" +
    "\n" +
    "                                  <td>Google</td>\r" +
    "\n" +
    "                                  <td>John</td>                                \r" +
    "\n" +
    "                                  \r" +
    "\n" +
    "                                  <td><span class=\"label label-warning\">in progress</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-warning\">75%</span></td>\r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                              <tr>\r" +
    "\n" +
    "                                  <td>4</td>\r" +
    "\n" +
    "                                  <td>LinkedIn</td>\r" +
    "\n" +
    "                                  <td>Danial</td>                                 \r" +
    "\n" +
    "                                                             \r" +
    "\n" +
    "                                  <td><span class=\"label label-info\">in progress</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-info\">65%</span></td>\r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                              <tr>\r" +
    "\n" +
    "                                  <td>5</td>\r" +
    "\n" +
    "                                  <td>Tumblr</td>\r" +
    "\n" +
    "                                  <td>David</td>                                \r" +
    "\n" +
    "                                                                 \r" +
    "\n" +
    "                                  <td><span class=\"label label-warning\">in progress</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-danger\">95%</span></td>\r" +
    "\n" +
    "                              </tr>\r" +
    "\n" +
    "                              <tr>\r" +
    "\n" +
    "                                  <td>6</td>\r" +
    "\n" +
    "                                  <td>Tesla</td>\r" +
    "\n" +
    "                                  <td>Mickey</td>                                  \r" +
    "\n" +
    "                                                             \r" +
    "\n" +
    "                                  <td><span class=\"label label-info\">in progress</span></td>\r" +
    "\n" +
    "                                  <td><span class=\"badge badge-success\">95%</span></td>\r" +
    "\n" +
    "                              </tr>-->\r" +
    "\n" +
    "                          </tbody>\r" +
    "\n" +
    "                      </table>\r" +
    "\n" +
    "                  </div>\r" +
    "\n" +
    "             </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    <!------- Geo Chart hide----------------->\r" +
    "\n" +
    "     <div class=\"col-md-6 chit-chat-layer1-rit\" id=\"secCol\" >    	\r" +
    "\n" +
    "      	  <div class=\"geo-chart\" style=\"  height: 400px;\">\r" +
    "\n" +
    "              \r" +
    "\n" +
    "\r" +
    "\n" +
    "				<section id=\"charts1\" class=\"charts\">\r" +
    "\n" +
    "				<div class=\"wrapper-flex\">\r" +
    "\n" +
    "				\r" +
    "\n" +
    "				    <table id=\"myTable\" class=\"geoChart tableChart data-table col-table\" style=\"display:none;\">\r" +
    "\n" +
    "				        <caption>Subscriber</caption>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <th scope=\"col\" data-type=\"string\">Country</th>\r" +
    "\n" +
    "				            <th scope=\"col\" data-type=\"number\">Number of Subscribers</th>\r" +
    "\n" +
    "				            <th scope=\"col\" data-role=\"annotation\">Annotation</th>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>China</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>Colombia</td>\r" +
    "\n" +
    "				            <td align=\"right\">5</td>\r" +
    "\n" +
    "				            <td align=\"right\">5</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>France</td>\r" +
    "\n" +
    "				            <td align=\"right\">3</td>\r" +
    "\n" +
    "				            <td align=\"right\">3</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>Italy</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>Japan</td>\r" +
    "\n" +
    "				            <td align=\"right\">18</td>\r" +
    "\n" +
    "				            <td align=\"right\">18</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>Kazakhstan</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>Mexico</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>Poland</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>India</td>\r" +
    "\n" +
    "				            <td align=\"right\">11</td>\r" +
    "\n" +
    "				            <td align=\"right\">11</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>Spain</td>\r" +
    "\n" +
    "				            <td align=\"right\">2</td>\r" +
    "\n" +
    "				            <td align=\"right\">2</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>Tanzania</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				            <td align=\"right\">1</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				        <tr>\r" +
    "\n" +
    "				            <td>Turkey</td>\r" +
    "\n" +
    "				            <td align=\"right\">2</td>\r" +
    "\n" +
    "				            <td align=\"right\">2</td>\r" +
    "\n" +
    "				        </tr>\r" +
    "\n" +
    "				\r" +
    "\n" +
    "				    </table>\r" +
    "\n" +
    "				\r" +
    "\n" +
    "				    <div class=\"col geo_main\">\r" +
    "\n" +
    "				         <h3 id=\"geoChartTitle\">World Market</h3>\r" +
    "\n" +
    "				        <div id=\"geoChart\" class=\"chart\"> </div>\r" +
    "\n" +
    "				    </div>\r" +
    "\n" +
    "				\r" +
    "\n" +
    "				\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				</section>			\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "      </div> \r" +
    "\n" +
    "     <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!--main page chit chating end here-->\r" +
    "\n" +
    "<!--main page chart start here-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "       \r" +
    "\n" +
    "<div class=\"main-page-charts\">\r" +
    "\n" +
    "   <div class=\"main-page-chart-layer1\">\r" +
    "\n" +
    "		<div class=\"col-md-6 chart-layer1-left\" id=\"thirdCol\"> \r" +
    "\n" +
    "        <!--    <div class=\"prograc-blocks\">\r" +
    "\n" +
    "		     Progress bars\r" +
    "\n" +
    "      <div class=\"home-progres-main\">\r" +
    "\n" +
    "	           <h3>Total Sales</h3>\r" +
    "\n" +
    "	         </div>\r" +
    "\n" +
    "	        <div class='bar_group'>\r" +
    "\n" +
    "					<div class='bar_group__bar thin' label='New' show_values='true' tooltip='true' value='{{statusValue[0]}}' style=\"width:{{statusValue[0]}}%;margin-bottom: 40px;\"></div>\r" +
    "\n" +
    "					<div class='bar_group__bar thin' label='Assigned' show_values='true' tooltip='true' value='{{statusValue[1]}}' style=\"width:{{statusValue[1]}}%;margin-bottom: 40px;\"></div>\r" +
    "\n" +
    "					<div class='bar_group__bar thin' label='Fixed' show_values='true' tooltip='true' value='{{statusValue[2]}}' style=\"width:{{statusValue[2]}}%;margin-bottom: 40px;\"></div>\r" +
    "\n" +
    "					<div class='bar_group__bar thin' label='Rejected' show_values='true' tooltip='true' value='{{statusValue[3]}}' style=\"width:{{statusValue[3]}}%;margin-bottom: 40px;\"></div>\r" +
    "\n" +
    "                    <div class='bar_group__bar thin' label='Closed' show_values='true' tooltip='true' value='{{statusValue[4]}}' style=\"width:{{statusValue[4]}}%;margin-bottom: 40px;\"></div>\r" +
    "\n" +
    "		    </div>\r" +
    "\n" +
    "				<script src=\"/com.vyom.vyomlib/resources/homepage/js/bars.js\"></script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	      <!--//Progress bars\r" +
    "\n" +
    "	     </div>-->\r" +
    "\n" +
    "		\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "		 <div class=\"col-md-6 chart-layer1-right\" id=\"fourthCol\"> \r" +
    "\n" +
    "             <!--	<div class=\"content-main revenue\">			\r" +
    "\n" +
    "					<h3>Total Revenue</h3>\r" +
    "\n" +
    "					<canvas id=\"radar\" height=\"400\" width=\"300\" style=\"width: 300px; height: 400px;\"></canvas>\r" +
    "\n" +
    "						<script>\r" +
    "\n" +
    "							var radarChartData = {\r" +
    "\n" +
    "								labels : [\"\",\"\",\"\",\"\",\"\",\"\",\"\"],\r" +
    "\n" +
    "								datasets : [\r" +
    "\n" +
    "									{\r" +
    "\n" +
    "										fillColor : \"rgba(104, 174, 0, 0.83)\",\r" +
    "\n" +
    "										strokeColor : \"#68ae00\",\r" +
    "\n" +
    "										pointColor : \"#68ae00\",\r" +
    "\n" +
    "										pointStrokeColor : \"#fff\",\r" +
    "\n" +
    "										data : [65,59,90,81,56,55,40]\r" +
    "\n" +
    "									},\r" +
    "\n" +
    "									{\r" +
    "\n" +
    "										fillColor : \"rgba(236, 133, 38, 0.82)\",\r" +
    "\n" +
    "										strokeColor : \"#ec8526\",\r" +
    "\n" +
    "										pointColor : \"#ec8526\",\r" +
    "\n" +
    "										pointStrokeColor : \"#fff\",\r" +
    "\n" +
    "										data : [28,48,40,19,96,27,100]\r" +
    "\n" +
    "									}\r" +
    "\n" +
    "								]\r" +
    "\n" +
    "								\r" +
    "\n" +
    "							};\r" +
    "\n" +
    "							new Chart(document.getElementById(\"radar\").getContext(\"2d\")).Radar(radarChartData);\r" +
    "\n" +
    "						</script>\r" +
    "\n" +
    "		</div> -->\r" +
    "\n" +
    "             \r" +
    "\n" +
    "			<!--<div class=\"user-marorm\">\r" +
    "\n" +
    "			<div class=\"malorum-top\">				\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"malorm-bottom\">\r" +
    "\n" +
    "				<span class=\"malorum-pro\"> </span>\r" +
    "\n" +
    "			     <h4>unde omnis iste</h4>\r" +
    "\n" +
    "				 <h2>Melorum</h2>\r" +
    "\n" +
    "				<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising.</p>\r" +
    "\n" +
    "				<ul class=\"malorum-icons\">\r" +
    "\n" +
    "					<li><a href=\"#\"><i class=\"fa fa-facebook\"> </i>\r" +
    "\n" +
    "						<div class=\"tooltip\"><span>Facebook</span></div>\r" +
    "\n" +
    "					</a></li>\r" +
    "\n" +
    "					<li><a href=\"#\"><i class=\"fa fa-twitter\"> </i>\r" +
    "\n" +
    "						<div class=\"tooltip\"><span>Twitter</span></div>\r" +
    "\n" +
    "					</a></li>\r" +
    "\n" +
    "					<li><a href=\"#\"><i class=\"fa fa-google-plus\"> </i>\r" +
    "\n" +
    "						<div class=\"tooltip\"><span>Google</span></div>\r" +
    "\n" +
    "					</a></li>\r" +
    "\n" +
    "				</ul>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		   </div>\r" +
    "\n" +
    "		</div>-->\r" +
    "\n" +
    "	 <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    " </div>\r" +
    "\n" +
    "<!--main page chart layer2-->\r" +
    "\n" +
    " <div class=\"chart-layer-2\">\r" +
    "\n" +
    "	<!--\r" +
    "\n" +
    "	<div class=\"col-md-6 chart-layer2-right\">\r" +
    "\n" +
    "				<div class=\"glocy-chart\">\r" +
    "\n" +
    "			<div class=\"span-2c\">  \r" +
    "\n" +
    "                        <h3 class=\"tlt\">Incident Analytics</h3>\r" +
    "\n" +
    "                        <canvas id=\"bar\" height=\"300\" width=\"400\" style=\"width: 400px; height: 300px;\"></canvas>\r" +
    "\n" +
    "                        <script>\r" +
    "\n" +
    "                            var statusValue=[];\r" +
    "\n" +
    "                            console.log($scope.mydata);\r" +
    "\n" +
    "                            var barChartData = {\r" +
    "\n" +
    "                            labels : [\"New\",\"Assigned\",\"Fixed\",\"Rejected\",\"Closed\"],\r" +
    "\n" +
    "                            datasets : [\r" +
    "\n" +
    "                                {\r" +
    "\n" +
    "                                    fillColor : \"#FC8213\",\r" +
    "\n" +
    "                                    data :  $scope.mydata;\r" +
    "\n" +
    "                                  //  data : [12,11,0,0,0,0,0]\r" +
    "\n" +
    "                                   \r" +
    "\n" +
    "                                }/*,\r" +
    "\n" +
    "                                {\r" +
    "\n" +
    "                                    fillColor : \"#337AB7\",\r" +
    "\n" +
    "                                    data : [12,0,0,0,0,0,0]\r" +
    "\n" +
    "                                }*/\r" +
    "\n" +
    "                            ]\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        };\r" +
    "\n" +
    "                            new Chart(document.getElementById(\"bar\").getContext(\"2d\")).Bar(barChartData);\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </script>\r" +
    "\n" +
    "                    </div> 			  		   			\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "	</div>-->\r" +
    "\n" +
    "	<div class=\"col-md-6 chart-layer2-left\">\r" +
    "\n" +
    "	<!--- code  -->\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "  <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--climate start here-->\r" +
    "\n" +
    " <div class=\"climate\">\r" +
    "\n" +
    "	<div class=\"col-md-4 climate-grids\">\r" +
    "\n" +
    "		<div class=\"climate-grid1\">\r" +
    "\n" +
    "			<div class=\"climate-gd1-top\">\r" +
    "\n" +
    "				<div class=\"col-md-6 climate-gd1top-left\">\r" +
    "\n" +
    "					<h4>   Details</h4>\r" +
    "\n" +
    "					<h3>MyIT Alerts</h3>				\r" +
    "\n" +
    "					<p>Incidents:</p>					\r" +
    "\n" +
    "					<p>Changes:</p>\r" +
    "\n" +
    "					<p>Subscriptions:</p>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<div class=\"col-md-6 climate-gd1top-right\" style=\"text-align-last: center;\">\r" +
    "\n" +
    "					  <span class=\"clime-icon\"> <span class=\"clime-icon\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <i class=\"fa fa-camera-retro fa-3x\"></i>\r" +
    "\n" +
    "					  	<figure class=\"icons\">\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "								<canvas id=\"partly-cloudy-day\" width=\"64\" height=\"64\">\r" +
    "\n" +
    "								</canvas>\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "							</figure>\r" +
    "\n" +
    "						<script>\r" +
    "\n" +
    "							 var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "								  list  = [\r" +
    "\n" +
    "									\"clear-night\", \"partly-cloudy-day\",\r" +
    "\n" +
    "									\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "									\"fog\"\r" +
    "\n" +
    "								  ],\r" +
    "\n" +
    "								  i;\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  for(i = list.length; i--; )\r" +
    "\n" +
    "								icons.set(list[i], list[i]);\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  icons.play();\r" +
    "\n" +
    "						</script>					  \r" +
    "\n" +
    "				   </span>	\r" +
    "\n" +
    "                          <br>\r" +
    "\n" +
    "					  <p>{{rxConfiguration.propertiesByName.incidents | comVyomVyomlibMyFilter}}</p>					\r" +
    "\n" +
    "					  <p>{{rxConfiguration.propertiesByName.changes | comVyomVyomlibMyFilter}}</p>\r" +
    "\n" +
    "					   <p>{{rxConfiguration.propertiesByName.subscribers | comVyomVyomlibMyFilter}}</p>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"climate-gd1-bottom\">\r" +
    "\n" +
    "				<div class=\"col-md-4 cloudy1\">\r" +
    "\n" +
    "						<h4>Hongkong</h4>\r" +
    "\n" +
    "<!--                        <i class=\"fa fa-camera-retro fa-3x\"></i>-->\r" +
    "\n" +
    "<!--                            <i class=\"fa fa-bar-chart fa-2x\"></i>-->\r" +
    "\n" +
    "                    <i class=\"fa fa-globe fa-3x\" style=\"color:white;\"><!-- icon --></i>\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "						  <figure class=\"icons\">\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "							<canvas id=\"sleet\" width=\"58\" height=\"58\">\r" +
    "\n" +
    "							</canvas>\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "					       </figure>\r" +
    "\n" +
    "					       <script>\r" +
    "\n" +
    "								 var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "									  list  = [\r" +
    "\n" +
    "										\"clear-night\", \"clear-day\",\r" +
    "\n" +
    "										\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "										\"fog\"\r" +
    "\n" +
    "									  ],\r" +
    "\n" +
    "									  i;\r" +
    "\n" +
    "	\r" +
    "\n" +
    "								  for(i = list.length; i--; )\r" +
    "\n" +
    "									icons.set(list[i], list[i]);\r" +
    "\n" +
    "	\r" +
    "\n" +
    "								  icons.play();\r" +
    "\n" +
    "							</script>\r" +
    "\n" +
    "						<h3>11</h3>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div class=\"col-md-4 cloudy1\">\r" +
    "\n" +
    "						<h4>UK</h4>\r" +
    "\n" +
    "                        <i class=\"fa fa-globe fa-3x\" style=\"color:white;\"><!-- icon --></i>\r" +
    "\n" +
    "                        \r" +
    "\n" +
    "						<figure class=\"icons\">\r" +
    "\n" +
    "<!--					<canvas id=\"cloudy\" width=\"58\" height=\"58\"></canvas>-->\r" +
    "\n" +
    "				</figure>					\r" +
    "\n" +
    "					<script>\r" +
    "\n" +
    "							 var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "								  list  = [\r" +
    "\n" +
    "									\"clear-night\", \"cloudy\",\r" +
    "\n" +
    "									\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "									\"fog\"\r" +
    "\n" +
    "								  ],\r" +
    "\n" +
    "								  i;\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  for(i = list.length; i--; )\r" +
    "\n" +
    "								icons.set(list[i], list[i]);\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  icons.play();\r" +
    "\n" +
    "						</script>\r" +
    "\n" +
    "						<h3>14</h3>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div class=\"col-md-4 cloudy1\">\r" +
    "\n" +
    "						<h4>USA</h4>\r" +
    "\n" +
    "                        <i class=\"fa fa-globe fa-3x\" style=\"color:white;\"><!-- icon --></i>\r" +
    "\n" +
    "                   \r" +
    "\n" +
    "						<figure class=\"icons\">\r" +
    "\n" +
    "<!--							<canvas id=\"snow\" width=\"58\" height=\"58\"></canvas>-->\r" +
    "\n" +
    "						</figure>\r" +
    "\n" +
    "				        <script>\r" +
    "\n" +
    "							 var icons = new Skycons({\"color\": \"#fff\"}),\r" +
    "\n" +
    "								  list  = [\r" +
    "\n" +
    "									\"clear-night\", \"clear-day\",\r" +
    "\n" +
    "									\"partly-cloudy-night\", \"cloudy\", \"rain\", \"sleet\", \"snow\", \"wind\",\r" +
    "\n" +
    "									\"fog\"\r" +
    "\n" +
    "								  ],\r" +
    "\n" +
    "								  i;\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  for(i = list.length; i--; )\r" +
    "\n" +
    "								icons.set(list[i], list[i]);\r" +
    "\n" +
    "\r" +
    "\n" +
    "							  icons.play();\r" +
    "\n" +
    "						</script>\r" +
    "\n" +
    "						<h3>12</h3>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"col-md-4 climate-grids\">\r" +
    "\n" +
    "        <div class=\"boost-icons-list\">\r" +
    "\n" +
    "					<ul>\r" +
    "\n" +
    "                        <li ng-click=\"redirecturl(url1)\"><br>	<i class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></i><br>\r" +
    "\n" +
    "                      <a href=\"{{url1}}\" target=\"_blank\">    </a></li>\r" +
    "\n" +
    "                        <li ng-click=\"redirecturl(url2)\"><br><i class=\"glyphicon glyphicon-asterisk\" aria-hidden=\"true\"></i>  <br> <a href=\"{{url2}}\" target=\"_blank\">    </a></li>\r" +
    "\n" +
    "						<li ng-click=\"redirecturl(url3)\"><br><i class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></i><br>\r" +
    "\n" +
    "                           <a href=\"{{url3}}\" target=\"_blank\">  </a></li>\r" +
    "\n" +
    "						<li ng-click=\"redirecturl(url4)\"> <br><i class=\"glyphicon glyphicon-euro\" aria-hidden=\"true\"></i><br>\r" +
    "\n" +
    "                            <a href=\"{{url4}}\" target=\"_blank\"> </a></li>\r" +
    "\n" +
    "					</ul>\r" +
    "\n" +
    "					<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"col-md-4 climate-grids\">\r" +
    "\n" +
    "		<div class=\"climate-grid3\">\r" +
    "\n" +
    "			<div class=\"popular-brand\">\r" +
    "\n" +
    "				<div class=\"col-md-6 popular-bran-left\">\r" +
    "\n" +
    "				     <h3></h3>\r" +
    "\n" +
    "				     <h4>Ericsson Global Services</h4>\r" +
    "\n" +
    "                    <br>\r" +
    "\n" +
    "                    <h5>West Gate Business Park, Corp H3, Bulevardul Iuliu Maniu 197, București</h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<div class=\"col-md-6 popular-bran-right\">\r" +
    "\n" +
    "                    <a href=https://www.google.com/maps/dir/18.5713009,73.7712419/ericsson+bucharest+romania/@26.0055421,12.6315864,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40b200e47c0ddfcb:0x7f7b86105cfe2aca!2m2!1d25.9868508!2d44.4334329?hl=en-GB>\r" +
    "\n" +
    "					<h3>Click</h3>\r" +
    "\n" +
    "                    </a>    \r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			  <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"popular-follow\">\r" +
    "\n" +
    "				<div class=\"col-md-6 popular-follo-left\">\r" +
    "\n" +
    "					<p>For more details and help on our services, you can visit our website   </p>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<div class=\"col-md-6 popular-follo-right\">\r" +
    "\n" +
    "					<h4>Followers</h4>\r" +
    "\n" +
    "					<h5>2892</h5>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			  <div class=\"clearfix\"> </div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "   \r" +
    "\n" +
    "	<div class=\"clearfix\"> </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!--climate end here-->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!--inner block end here-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "\r" +
    "\n" +
    "           \r" +
    "\n" +
    "</body>\r" +
    "\n" +
    "</html>                     "
  );

}]);
