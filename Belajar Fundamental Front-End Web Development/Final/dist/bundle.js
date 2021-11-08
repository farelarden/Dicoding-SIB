(()=>{"use strict";var n={286:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},372:n=>{n.exports=function(n){return n[1]}},982:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(372),o=e.n(t),i=e(286),a=e.n(i)()(o());a.push([n.id,"body{\r\n    font-family: 'Montserrat', sans-serif;\r\n    overflow-x: hidden;\r\n    scroll-behavior: smooth;\r\n   \r\n}\r\n#Title{\r\n    margin-right: 25rem;\r\n}\r\n\r\n#Title{\r\n    color:white;\r\n    margin-top:40px;\r\n    font-size:35px;\r\n    padding-right:180px;\r\n    text-transform: uppercase;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\nmain {\r\n    max-width: 800px;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding: 16px;\r\n}\r\n\r\narticle{\r\n    border-style: solid;\r\n    border-width: 5px;\r\n    border-color: white;\r\n    margin: 15px;\r\n    padding: 15px;\r\n}\r\nbutton {\r\n    background-color: #6ACFF6;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin-top:30px;\r\n    margin-bottom:40px;\r\n    cursor: pointer;\r\n    margin-left: 40px;\r\n    width: 80%;\r\n    font-size: 20px;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\nbutton:hover {\r\n    background-color: #2ebff4;\r\n}\r\n.nav-div{\r\n    background-color:#181818;\r\n    padding: 0px;\r\n    margin: -12px;\r\n    overflow-y: hidden;\r\n    align-items: center;\r\n    text-align: center;\r\n    align-content: center;\r\n}\r\n\r\np{\r\n    margin-left:30px;\r\n}\r\nimg{\r\n    width:200px;\r\n}\r\nimage{\r\n    margin-left:60px;\r\n    margin-top: 20px;\r\n   \r\n}\r\nh1{\r\n    margin-top:35px;\r\n    margin-left: 600px;\r\n}\r\n#Title2{\r\n    font-size:30px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    padding-top:-60px;\r\n    text-align: center;\r\n}\r\n.cafe_div{\r\n    background-color: rgba(24,24, 24, 1);\r\n    padding-top: 2px;\r\n    width:50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    color:white;\r\n    margin-left: 230px;\r\n    margin-top:35px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n}\r\n\r\n::-webkit-scrollbar {\r\n   width: 0;  \r\n   background: transparent; \r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n   background: #FF0000;\r\n}\r\n\r\n.hide-me {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transform: scale(.75);\r\n}\r\n\r\n.EnoughList{\r\n    background-color: #eb5749;\r\n}\r\n\r\n.EnoughList:hover{\r\n    background-color: #dc483a;\r\n}\r\n\r\nimage-figure{\r\n    margin-left:60px;\r\n    margin-top:20px;\r\n}",""]);const c=a},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],s=t.base?u[0]+t.base:u[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var f=e(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)r[f].references++,r[f].updater(d);else{var m=o(d,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var u=t(n,o),s=0;s<i.length;s++){var l=e(i[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=u}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),u=e.n(c),s=e(216),l=e.n(s),p=e(589),f=e.n(p),d=e(982),m={};function h(n){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(n)}function g(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function y(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function b(n,r){if(r&&("object"===h(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function v(n){var r="function"==typeof Map?new Map:void 0;return v=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,t)}function t(){return x(n,arguments,E(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),T(t,n)},v(n)}function x(n,r,e){return x=w()?Reflect.construct:function(n,r,e){var t=[null];t.push.apply(t,r);var o=new(Function.bind.apply(n,t));return e&&T(o,e.prototype),o},x.apply(null,arguments)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function T(n,r){return T=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},T(n,r)}function E(n){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},E(n)}m.styleTagTransform=f(),m.setAttributes=u(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),r()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals;var S=1,O=document.getElementById("CafeRecommendations"),k=document.getElementById("btn");k.addEventListener("click",(function(){var n=new XMLHttpRequest;n.open("GET","https://raw.githubusercontent.com/farelarden/Dicoding-SIB/main/Belajar%20Fundamental%20Front-End%20Web%20Development/JSON%20File/Cafe-"+S+".json"),n.onload=function(){var r=JSON.parse(n.responseText);j(r)},n.send(),++S>5&&(k.classList.add("EnoughList"),alert("There are enough recommendations"))}));var j=function(n){for(var r="",e=0;e<n.length;e++)r+="<p>"+n[e].name+" is a "+n[e].rating+" Star Cafe. <br> Located in "+n[e].lokasi+".<br> With their signature drink "+n[e].Favorit,r+=".</p>";O.insertAdjacentHTML("beforeend",r)},M=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&T(n,r)}(a,n);var r,e,t,o,i=(r=a,e=w(),function(){var n,t=E(r);if(e){var o=E(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return b(this,n)});function a(){return g(this,a),i.apply(this,arguments)}return t=a,(o=[{key:"connectedCallback",value:function(){this.src=this.getAttribute("src")||null,this.innerHTML='\n      <figure>\n        <img src="'.concat(this.src,'">\n      </figure>\n    ')}}])&&y(t.prototype,o),a}(v(HTMLElement));customElements.define("image-figure",M)})()})();