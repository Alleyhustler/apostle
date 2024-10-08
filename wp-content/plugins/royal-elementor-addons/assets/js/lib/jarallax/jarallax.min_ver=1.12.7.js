/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.7
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(t,e,n){!function(e){e="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};t.exports=e}.call(this,n(4))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},,,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var t=n(2),t=n.n(t),i=n(3),a=n(12);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o,l=i.window.jarallax;i.window.jarallax=a.default,i.window.jarallax.noConflict=function(){return i.window.jarallax=l,this},void 0!==i.jQuery&&((n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=a.default.apply(i.window,t);return"object"!==r(o)?o:this}).constructor=a.default.constructor,o=i.jQuery.fn.jarallax,i.jQuery.fn.jarallax=n,i.jQuery.fn.jarallax.noConflict=function(){return i.jQuery.fn.jarallax=o,this}),t()(function(){Object(a.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,t,n){"use strict";n.r(t);var o=n(2),o=n.n(o),f=n(3);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var o,i,a=[],r=!0,l=!1;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){l=!0,i=e}finally{try{r||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r,g,u=f.window.navigator,p=-1<u.userAgent.indexOf("MSIE ")||-1<u.userAgent.indexOf("Trident/")||-1<u.userAgent.indexOf("Edge/"),l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u.userAgent),d=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function m(){g=l?(!r&&document.body&&((r=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(r)),(r?r.clientHeight:0)||f.window.innerHeight||document.documentElement.clientHeight):f.window.innerHeight||document.documentElement.clientHeight}m(),f.window.addEventListener("resize",m),f.window.addEventListener("orientationchange",m),f.window.addEventListener("load",m),o()(function(){m()});var y=[];function b(){y.length&&(y.forEach(function(e,t){var n=e.instance,o=e.oldData,i=n.$item.getBoundingClientRect(),e={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:f.window.innerWidth,wndH:g},i=!o||o.wndW!==e.wndW||o.wndH!==e.wndH||o.width!==e.width||o.height!==e.height,o=i||!o||o.top!==e.top||o.bottom!==e.bottom;y[t].oldData=e,i&&n.onResize(),o&&n.onScroll()}),f.window.requestAnimationFrame(b))}var h=0,v=function(){function l(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var n=this;n.instanceID=h,h+=1,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o,i,a=n.$item.dataset||{},r={};Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(r[t]=a[e])}),n.options=n.extend({},n.defaults,r,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp&&(o=n.options.disableParallax,n.options.disableParallax=function(){return o.test(u.userAgent)}),"function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp&&(i=n.options.disableVideo,n.options.disableVideo=function(){return i.test(u.userAgent)}),"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});t=n.options.elementInViewport;(t=t&&"object"===c(t)&&void 0!==t.length?s(t,1)[0]:t)instanceof Element||(t=null),n.options.elementInViewport=t,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(u.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}var e,t,n;return e=l,(t=[{key:"css",value:function(t,n){return"string"==typeof n?f.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&d&&(n[d]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n=n||{},Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){n[e]=o[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:f.window.innerWidth||document.documentElement.clientWidth,height:g,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return(t=t&&"string"==typeof t?e.$item.querySelector(t):t)instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return d&&!this.options.disableParallax()}},{key:"init",value:function(){var e,t=this,n={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},o={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};t.options.keepImg||((e=t.$item.getAttribute("style"))&&t.$item.setAttribute("data-jarallax-original-styles",e),!t.image.useImgTag||(e=t.image.$item.getAttribute("style"))&&t.image.$item.setAttribute("data-jarallax-original-styles",e)),"static"===t.css(t.$item,"position")&&t.css(t.$item,{position:"relative"}),"auto"===t.css(t.$item,"z-index")&&t.css(t.$item,{zIndex:0}),t.image.$container=document.createElement("div"),t.css(t.image.$container,n),t.css(t.image.$container,{"z-index":t.options.zIndex}),p&&t.css(t.image.$container,{opacity:.9999}),t.image.$container.setAttribute("id","jarallax-container-".concat(t.instanceID)),t.$item.appendChild(t.image.$container),t.image.useImgTag?o=t.extend({"object-fit":t.options.imgSize,"object-position":t.options.imgPosition,"font-family":"object-fit: ".concat(t.options.imgSize,"; object-position: ").concat(t.options.imgPosition,";"),"max-width":"none"},n,o):(t.image.$item=document.createElement("div"),t.image.src&&(o=t.extend({"background-position":t.options.imgPosition,"background-size":t.options.imgSize,"background-repeat":t.options.imgRepeat,"background-image":t.image.bgImage||'url("'.concat(t.image.src,'")')},n,o))),"opacity"!==t.options.type&&"scale"!==t.options.type&&"scale-opacity"!==t.options.type&&1!==t.options.speed||(t.image.position="absolute"),"fixed"===t.image.position&&(n=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(t.$item).filter(function(e){var t=f.window.getComputedStyle(e),e=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return e&&"none"!==e||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}),t.image.position=n.length?"absolute":"fixed"),o.position=t.image.position,t.css(t.image.$item,o),t.image.$container.appendChild(t.image.$item),t.onResize(),t.onScroll(!0),t.options.onInit&&t.options.onInit.call(t),"none"!==t.css(t.$item,"background-image")&&t.css(t.$item,{"background-image":"none"}),t.addToParallaxList()}},{key:"addToParallaxList",value:function(){y.push({instance:this}),1===y.length&&f.window.requestAnimationFrame(b)}},{key:"removeFromParallaxList",value:function(){var n=this;y.forEach(function(e,t){e.instance.instanceID===n.instanceID&&y.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,n=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),n?e.$item.setAttribute("style",n):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",n):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,n;"fixed"===this.image.position&&(t=(n=(e=this).image.$container.getBoundingClientRect()).width,n=n.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),n="#jarallax-container-".concat(e.instanceID," {\n            clip: rect(0 ").concat(t,"px ").concat(n,"px 0);\n            clip: rect(0, ").concat(t,"px, ").concat(n,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=n:e.$clipStyles.innerHTML=n)}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,o=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return i&&(o<0?(a=o*Math.max(n,g),g<n&&(a-=o*(n-g))):a=o*(n+g),1<o?r=Math.abs(a-g):o<0?r=a/o+Math.abs(a):r+=(g-n)*(1-o),a/=2),e.parallaxScrollDistance=a,l=i?(g-r)/2:(n-r)/2,e.css(e.image.$item,{height:"".concat(r,"px"),marginTop:"".concat(l,"px"),left:"fixed"===e.image.position?"".concat(t.left,"px"):"0",width:"".concat(t.width,"px")}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,n,o,i,a,r,l,s=this,c=s.$item.getBoundingClientRect(),u=c.top,p=c.height,d={},m=c;s.options.elementInViewport&&(m=s.options.elementInViewport.getBoundingClientRect()),s.isElementInViewport=0<=m.bottom&&0<=m.right&&m.top<=g&&m.left<=f.window.innerWidth,(e||s.isElementInViewport)&&(t=Math.max(0,u),n=Math.max(0,p+u),o=Math.max(0,-u),i=Math.max(0,u+p-g),a=Math.max(0,p-(u+p-g)),r=Math.max(0,-u+g-p),m=1-(g-u)/(g+p)*2,e=1,p<g?e=1-(o||i)/p:n<=g?e=n/g:a<=g&&(e=a/g),"opacity"!==s.options.type&&"scale-opacity"!==s.options.type&&"scroll-opacity"!==s.options.type||(d.transform="translate3d(0,0,0)",d.opacity=e),"scale"!==s.options.type&&"scale-opacity"!==s.options.type||(l=1,s.options.speed<0?l-=s.options.speed*e:l+=s.options.speed*(1-e),d.transform="scale(".concat(l,") translate3d(0,0,0)")),"scroll"!==s.options.type&&"scroll-opacity"!==s.options.type||(l=s.parallaxScrollDistance*m,"absolute"===s.image.position&&(l-=u),d.transform="translate3d(0,".concat(l,"px,0)")),s.css(s.image.$item,d),s.options.onScroll&&s.options.onScroll.call(s,{section:c,beforeTop:t,beforeTopEnd:n,afterTop:o,beforeBottom:i,beforeBottomEnd:a,afterBottom:r,visiblePercent:e,fromViewportCenter:m}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&a(e.prototype,t),n&&a(e,n),l}(),o=function(e,t){for(var n,o=(e=("object"===("undefined"==typeof HTMLElement?"undefined":c(HTMLElement))?e instanceof HTMLElement:e&&"object"===c(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)?[e]:e).length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;i<o;i+=1)if("object"===c(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new v(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e};o.constructor=v,t.default=o}]);