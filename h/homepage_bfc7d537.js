!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/wp-content/themes/freshbooks/dist/",t(t.s=2)}({"+pD9":function(e,t,n){"use strict";(function(e){function n(e){return"/which-version?path=%2F"+encodeURIComponent(e)}function i(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}!function(){for(var e=0,t=document.domain,n=t.split("."),i="_gd"+(new Date).getTime();e<n.length-1&&-1==document.cookie.indexOf(i+"="+i);)t=n.slice(-1-++e).join("."),document.cookie=i+"="+i+";domain="+t+";";document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+t+";"}();t.a=function(){if(!i("fb_platform")){var t=["addons-new","addons","support","api","developers"];e.each(t,function(){e("a[href='"+window.location.href+this+"']").attr("href",n(this))}),e(document.body).not(".support-page,.tax-support_categories,.support-template-default").find("a[href='https://support.freshbooks.com/']").attr("href",n("https://support.freshbooks.com"))}}}).call(t,n("0iPh"))},"/dM+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=n("0iPh"),i=(n.n(t),n("TJYN")),o=n("kurF"),r=n("y42z"),s=n("Lmh9"),a=n("dxQz"),c=new i.a({common:o.a});e(document).ready(function(){c.loadEvents(),Object(r.a)(),Object(s.a)(),Object(a.a)()})}.call(t,n("0iPh"))},"0iPh":function(e,t){e.exports=jQuery},2:function(e,t,n){n("5537"),e.exports=n("/dM+")},"45Iz":function(e,t,n){var i,o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(r,a){"object"===s(t)&&void 0!==e?e.exports=a():(i=a,void 0!==(o="function"==typeof i?i.call(t,n,t,e):i)&&(e.exports=o))}(0,function(){"use strict";function e(e,t,n){return!(f(e,t,n)||p(e,t,n)||h(e,t,n)||m(e,t,n))}function t(e,t,n){var i=t._settings;!n&&a(e)||(T(i.callback_enter,e),k.indexOf(e.tagName)>-1&&(G(e,t),S(e,i.class_loading)),R(e,t),s(e),T(i.callback_set,e))}var n=function(){return{elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_enter:null,callback_finish:null,to_webp:!1}},i=function(e,t){return e.getAttribute("data-"+t)},o=function(e,t,n){var i="data-"+t;null!==n?e.setAttribute(i,n):e.removeAttribute(i)},s=function(e){return o(e,"was-processed","true")},a=function(e){return"true"===i(e,"was-processed")},c=function(e){return e.filter(function(e){return!a(e)})},l=function(e,t){return e.filter(function(e){return e!==t})},u=function(e){return e.getBoundingClientRect().top+window.pageYOffset-e.ownerDocument.documentElement.clientTop},f=function(e,t,n){return(t===window?window.innerHeight+window.pageYOffset:u(t)+t.offsetHeight)<=u(e)-n},d=function(e){return e.getBoundingClientRect().left+window.pageXOffset-e.ownerDocument.documentElement.clientLeft},h=function(e,t,n){var i=window.innerWidth;return(t===window?i+window.pageXOffset:d(t)+i)<=d(e)-n},p=function(e,t,n){return(t===window?window.pageYOffset:u(t))>=u(e)+n+e.offsetHeight},m=function(e,t,n){return(t===window?window.pageXOffset:d(t))>=d(e)+n+e.offsetWidth},v=function(e,t){var n,i=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:i}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:i})}window.dispatchEvent(n)},g=function(e,t){return t?e.replace(/\.(jpe?g|png)/gi,".webp"):e},_="undefined"!=typeof window,y=_&&!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),w=_&&"classList"in document.createElement("p"),b=_&&function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")}(),S=function(e,t){w?e.classList.add(t):e.className+=(e.className?" ":"")+t},C=function(e,t){w?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},E=function(e,t,n,o){for(var r,s=0;r=e.children[s];s+=1)if("SOURCE"===r.tagName){var a=i(r,n);L(r,t,a,o)}},L=function(e,t,n,i){n&&e.setAttribute(t,g(n,i))},D=function(e,t){var n=b&&t.to_webp,o=i(e,t.data_src),r=i(e,t.data_bg);if(o){var s=g(o,n);e.style.backgroundImage='url("'+s+'")'}if(r){var a=g(r,n);e.style.backgroundImage=a}},O={IMG:function(e,t){var n=b&&t.to_webp,o=t.data_srcset,r=e.parentNode;r&&"PICTURE"===r.tagName&&E(r,"srcset",o,n);var s=i(e,t.data_sizes);L(e,"sizes",s);var a=i(e,o);L(e,"srcset",a,n);var c=i(e,t.data_src);L(e,"src",c,n)},IFRAME:function(e,t){var n=i(e,t.data_src);L(e,"src",n)},VIDEO:function(e,t){var n=t.data_src,o=i(e,n);E(e,"src",n),L(e,"src",o),e.load()}},R=function(e,t){var n=t._settings,i=e.tagName,o=O[i];if(o)return o(e,n),t._updateLoadingCount(1),void(t._elements=l(t._elements,e));D(e,n)},T=function(e,t){e&&e(t)},U=function(e,t,n){e.addEventListener(t,n)},A=function(e,t,n){e.removeEventListener(t,n)},P=function(e,t,n){U(e,"load",t),U(e,"loadeddata",t),U(e,"error",n)},M=function(e,t,n){A(e,"load",t),A(e,"loadeddata",t),A(e,"error",n)},N=function(e,t,n){var i=n._settings,o=t?i.class_loaded:i.class_error,r=t?i.callback_load:i.callback_error,s=e.target;C(s,i.class_loading),S(s,o),T(r,s),n._updateLoadingCount(-1)},G=function(e,t){var n=function n(o){N(o,!0,t),M(e,n,i)},i=function i(o){N(o,!1,t),M(e,n,i)};P(e,n,i)},k=["IMG","IFRAME","VIDEO"],B=function(e,t){for(;t.length;)e.splice(t.pop(),1)},x=function(e){this._settings=r({},n(),e),this._loadingCount=0,this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};return x.prototype={_loopThroughElements:function(t){var n=this._settings,i=this._elements,o=i?i.length:0,r=void 0,s=[],a=this._isFirstLoop;if(a&&(this._isFirstLoop=!1),0!==o){for(r=0;r<o;r++){var c=i[r];n.skip_invisible&&null===c.offsetParent||(t||e(c,n.container,n.threshold))&&(a&&S(c,n.class_initial),this.load(c),s.push(r))}B(i,s)}else this._stopScrollHandler()},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},_updateLoadingCount:function(e){this._loadingCount+=e,0===this._elements.length&&0===this._loadingCount&&T(this._settings.callback_finish)},handleScroll:function(){var e=this._settings.throttle;if(0!==e){var t=Date.now(),n=e-(t-this._previousLoopTime);n<=0||n>e?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=t,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),n))}else this._loopThroughElements()},loadAll:function(){this._loopThroughElements(!0)},update:function(e){var t=this._settings,n=e||this._queryOriginNode.querySelectorAll(t.elements_selector);this._elements=c(Array.prototype.slice.call(n)),y?this.loadAll():(this._loopThroughElements(),this._startScrollHandler())},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},load:function(e,n){t(e,this,n)}},_&&function(e,t){if(t)if(t.length)for(var n,i=0;n=t[i];i+=1)v(e,n);else v(e,t)}(x,window.lazyLoadOptions),x})},5537:function(e,t){},"9p2S":function(e,t,n){"use strict";(function(e){function i(){e(window).on("load",function(){var e=document.querySelector("#inline-form-hero"),t=e.dataset.tl;Object(o.a)("fb_web_promo","lp"+t)})}t.a=i;var o=n("r7VU")}).call(t,n("0iPh"))},Hqmh:function(e,t,n){"use strict";(function(e){t.a=function(){e(".footer-top-level").on("click",function(t){t.preventDefault(),e(this).toggleClass("display-mobile-dropdown"),e(this).next(".footer-sub-links").slideToggle(400)})}}).call(t,n("0iPh"))},JG45:function(e,t,n){"use strict";(function(e){t.a=function(){var t=window.location.href,n=document.referrer,i="landing_url="+encodeURIComponent(t)+"&referring_url="+encodeURIComponent(n);if("undefined"==typeof deferTracking||!deferTracking){e.ajax({type:"POST",url:"https://www.freshbooks.com/wp-content/themes/freshbooks/resources/_track/marketing.php",data:i,xhrFields:{withCredentials:!0},dataType:"json"})}}}).call(t,n("0iPh"))},LMQS:function(e,t,n){"use strict";function i(e){console&&console.warn&&console.warn(e)}function o(){o.init.call(this)}function r(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function s(e,t,n,o){var s,a,c;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(a=e._events,void 0===a?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),c=a[t]),void 0===c)c=a[t]=n,++e._eventsCount;else if("function"==typeof c?c=a[t]=o?[n,c]:[c,n]:o?c.unshift(n):c.push(n),(s=r(e))>0&&c.length>s&&!c.warned){c.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=c.length,i(l)}return e}function a(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,v(this.listener,this.target,e))}function c(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=a.bind(i);return o.listener=n,i.wrapFn=o,o}function l(e,t,n){var i=e._events;if(void 0===i)return[];var o=i[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?h(o):f(o,o.length)}function u(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function f(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function d(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function h(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}var p,m="object"==typeof Reflect?Reflect:null,v=m&&"function"==typeof m.apply?m.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};p=m&&"function"==typeof m.ownKeys?m.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var g=Number.isNaN||function(e){return e!==e};e.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var _=10;Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return _},set:function(e){if("number"!=typeof e||e<0||g(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");_=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||g(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return r(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var r;if(t.length>0&&(r=t[0]),r instanceof Error)throw r;var s=new Error("Unhandled error."+(r?" ("+r.message+")":""));throw s.context=r,s}var a=o[e];if(void 0===a)return!1;if("function"==typeof a)v(a,this,t);else for(var c=a.length,l=f(a,c),n=0;n<c;++n)v(l[n],this,t);return!0},o.prototype.addListener=function(e,t){return s(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return s(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,c(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,c(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,i,o,r,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,r=n.length-1;r>=0;r--)if(n[r]===t||n[r].listener===t){s=n[r].listener,o=r;break}if(o<0)return this;0===o?n.shift():d(n,o),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,r=Object.keys(n);for(i=0;i<r.length;++i)"removeListener"!==(o=r[i])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},o.prototype.listeners=function(e){return l(this,e,!0)},o.prototype.rawListeners=function(e){return l(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):u.call(e,t)},o.prototype.listenerCount=u,o.prototype.eventNames=function(){return this._eventsCount>0?p(this._events):[]}},Lmh9:function(e,t,n){"use strict";(function(e){t.a=function(){function t(){var t=e(".features .slide").length,n=parseInt(e(".slide:visible").attr("data-target"),0);1===n?(e(".left-arrow").hide(),e(".right-arrow").show()):n===t?(e(".right-arrow").hide(),e(".left-arrow").show()):(e(".left-arrow").show(),e(".right-arrow").show())}e(".tab").click(function(n){n.preventDefault(),e(".tab").removeClass("active"),e(this).addClass("active");var i=e(this).data("target"),o=e('.slide[data-target="'+i+'"]');e(".slide").hide(),e(o).show(),t()}),e(".left-arrow").click(function(){var n=e(".slide:visible");n.prev().show(),n.hide();var i=e(".tab.active");i.prev().addClass("active"),i.removeClass("active"),t()}),e(".right-arrow").click(function(){var n=e(".slide:visible");n.next().show(),n.hide();var i=e(".tab.active");i.next().addClass("active"),i.removeClass("active"),t()})}}).call(t,n("0iPh"))},OzrG:function(e,t,n){"use strict";e.exports=function(){var e=n("LMQS"),t={};return t.createDomain=t.create=function(){function t(e){n.emit("error",e)}var n=new e.EventEmitter;return n.add=function(e){e.on("error",t)},n.remove=function(e){e.removeListener("error",t)},n.bind=function(e){return function(){var n=Array.prototype.slice.call(arguments);try{e.apply(null,n)}catch(e){t(e)}}},n.intercept=function(e){return function(n){if(n)t(n);else{var i=Array.prototype.slice.call(arguments,1);try{e.apply(null,i)}catch(n){t(n)}}}},n.run=function(e){try{e()}catch(e){t(e)}return this},n.dispose=function(){return this.removeAllListeners(),this},n.enter=n.exit=function(){return this},n},t}.call(this)},QJRV:function(e,t,n){"use strict";t.a={BD:"BDT",BE:"EUR",BF:"XOF",BG:"BGN",BA:"BAM",BB:"BBD",WF:"XPF",BL:"EUR",BM:"BMD",BN:"BND",BO:"BOB",BH:"BHD",BI:"BIF",BJ:"XOF",BT:"BTN",JM:"JMD",BV:"NOK",BW:"BWP",WS:"WST",BQ:"USD",BR:"BRL",BS:"BSD",JE:"GBP",BY:"BYR",BZ:"BZD",RU:"RUB",RW:"RWF",RS:"RSD",TL:"USD",RE:"EUR",TM:"TMT",TJ:"TJS",RO:"RON",TK:"NZD",GW:"XOF",GU:"USD",GT:"GTQ",GS:"GBP",GR:"EUR",GQ:"XAF",GP:"EUR",JP:"JPY",GY:"GYD",GG:"GBP",GF:"EUR",GE:"GEL",GD:"XCD",GB:"GBP",GA:"XAF",SV:"USD",GN:"GNF",GM:"GMD",GL:"DKK",GI:"GIP",GH:"GHS",OM:"OMR",TN:"TND",JO:"JOD",HR:"HRK",HT:"HTG",HU:"HUF",HK:"HKD",HN:"HNL",HM:"AUD",VE:"VEF",PR:"USD",PS:"ILS",PW:"USD",PT:"EUR",SJ:"NOK",PY:"PYG",IQ:"IQD",PA:"PAB",PF:"XPF",PG:"PGK",PE:"PEN",PK:"PKR",PH:"PHP",PN:"NZD",PL:"PLN",PM:"EUR",ZM:"ZMK",EH:"MAD",EE:"EUR",EG:"EGP",ZA:"ZAR",EC:"USD",IT:"EUR",VN:"VND",SB:"SBD",ET:"ETB",SO:"SOS",ZW:"ZWL",SA:"SAR",ES:"EUR",ER:"ERN",ME:"EUR",MD:"MDL",MG:"MGA",MF:"EUR",MA:"MAD",MC:"EUR",UZ:"UZS",MM:"MMK",ML:"XOF",MO:"MOP",MN:"MNT",MH:"USD",MK:"MKD",MU:"MUR",MT:"EUR",MW:"MWK",MV:"MVR",MQ:"EUR",MP:"USD",MS:"XCD",MR:"MRO",IM:"GBP",UG:"UGX",TZ:"TZS",MY:"MYR",MX:"MXN",IL:"ILS",FR:"EUR",IO:"USD",SH:"SHP",FI:"EUR",FJ:"FJD",FK:"FKP",FM:"USD",FO:"DKK",NI:"NIO",NL:"EUR",NO:"NOK",NA:"NAD",VU:"VUV",NC:"XPF",NE:"XOF",NF:"AUD",NG:"NGN",NZ:"NZD",NP:"NPR",NR:"AUD",NU:"NZD",CK:"NZD",XK:"EUR",CI:"XOF",CH:"CHF",CO:"COP",CN:"CNY",CM:"XAF",CL:"CLP",CC:"AUD",CA:"CAD",CG:"XAF",CF:"XAF",CD:"CDF",CZ:"CZK",CY:"EUR",CX:"AUD",CR:"CRC",CW:"ANG",CV:"CVE",CU:"CUP",SZ:"SZL",SY:"SYP",SX:"ANG",KG:"KGS",KE:"KES",SS:"SSP",SR:"SRD",KI:"AUD",KH:"KHR",KN:"XCD",KM:"KMF",ST:"STD",SK:"EUR",KR:"KRW",SI:"EUR",KP:"KPW",KW:"KWD",SN:"XOF",SM:"EUR",SL:"SLL",SC:"SCR",KZ:"KZT",KY:"KYD",SG:"SGD",SE:"SEK",SD:"SDG",DO:"DOP",DM:"XCD",DJ:"DJF",DK:"DKK",VG:"USD",DE:"EUR",YE:"YER",DZ:"DZD",US:"USD",UY:"UYU",YT:"EUR",UM:"USD",LB:"LBP",LC:"XCD",LA:"LAK",TV:"AUD",TW:"TWD",TT:"TTD",TR:"TRY",LK:"LKR",LI:"CHF",LV:"EUR",TO:"TOP",LT:"LTL",LU:"EUR",LR:"LRD",LS:"LSL",TH:"THB",TF:"EUR",TG:"XOF",TD:"XAF",TC:"USD",LY:"LYD",VA:"EUR",VC:"XCD",AE:"AED",AD:"EUR",AG:"XCD",AF:"AFN",AI:"XCD",VI:"USD",IS:"ISK",IR:"IRR",AM:"AMD",AL:"ALL",AO:"AOA",AQ:"",AS:"USD",AR:"ARS",AU:"AUD",AT:"EUR",AW:"AWG",IN:"INR",AX:"EUR",AZ:"AZN",IE:"EUR",ID:"IDR",UA:"UAH",QA:"QAR",MZ:"MZN"}},TJYN:function(e,t,n){"use strict";var i=n("ssPr"),o=function(e){this.routes=e};o.prototype.fire=function(e,t,n){void 0===t&&(t="init"),""!==e&&this.routes[e]&&"function"==typeof this.routes[e][t]&&this.routes[e][t](n)},o.prototype.loadEvents=function(){var e=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(i.a).forEach(function(t){e.fire(t),e.fire(t,"finalize")}),this.fire("common","finalize")},t.a=o},ZbsS:function(e,t,n){"use strict";(function(e){function i(){Object(o.e)()&&e(".smartbanner").length>0&&(localStorage.getItem("hasDismissedAndroidBanner")||(e(".smartbanner").removeClass("hide"),e(".smartbanner-close").on("click",function(t){t.preventDefault(),e(".smartbanner").addClass("hide"),localStorage.setItem("hasDismissedAndroidBanner",!0)})))}t.a=i;var o=n("r7VU")}).call(t,n("0iPh"))},brNN:function(e,t,n){"use strict";(function(e){t.a=function(){e(".item-toggle").on("click",function(t){t.preventDefault();var n=e(this).data("target"),i=e("."+n);i.hasClass("active")?(i.removeClass("active"),e(this).removeClass("active")):(i.addClass("active"),e(this).addClass("active"))}),e(".mobile_nav > li:first-child").addClass("active"),e(".mobile_nav > li.menu-item-has-children > a").on("click",function(t){t.preventDefault(),e(this).parent().toggleClass("active")})}}).call(t,n("0iPh"))},dxQz:function(e,t,n){"use strict";(function(e){t.a=function(){window.onload=function(){function t(){window.pageYOffset>=i?(n.classList.add("sticky"),o.classList.add("nudge")):(n.classList.remove("sticky"),o.classList.remove("nudge"))}var n=document.getElementsByClassName("sticky-overview-nav")[0],i=n.offsetTop,o=document.getElementsByClassName("pillars")[0];e(".sticky-overview-nav").hasClass("sticky-nav-hidden")||(e(".sticky-overview-nav").on("click","a",function(){e("li > a.active").removeClass("active"),e(this).addClass("active")}),t(),window.onscroll=function(){t()})}}}).call(t,n("0iPh"))},kurF:function(e,t,n){"use strict";(function(e){var i=n("brNN"),o=n("Hqmh"),r=n("nXJG"),s=n("r7VU"),a=n("ZbsS"),c=n("+pD9"),l=n("JG45"),u=n("45Iz"),f=n.n(u),d=n("OzrG");n.n(d);t.a={init:function(){Object(c.a)(),Object(a.a)(),Object(i.a)(),Object(o.a)(),Object(r.a)(),Object(l.a)(),window.createCookie=s.a,window.eraseCookie=s.b,window.readCookie=s.i,window.getElOffset=s.c;var t=e("html");Object(s.g)()?Object(s.e)()?t.addClass("android"):Object(s.f)()&&t.addClass("ios"):e('a[href^="tel:"]').each(function(){e(this).removeAttr("href")}),window.lazyLoadInstance=new f.a({elements_selector:".lazy",skip_invisible:!1})},finalize:function(){}}}).call(t,n("0iPh"))},nXJG:function(e,t,n){"use strict";(function(e){t.a=function(){e(document).on("click","a[href^='#']:not(a[href='#'])",function(t){t.preventDefault();var n=0,i=e(this.hash.replace(/\./g,"\\.")),o=window.lazyLoadInstance;if(i.length){o&&"function"==typeof o.loadAll&&o.loadAll();var r=e(".fixed-nav,.sticky-bar-classic,.sticky-bar-nfb,.banner-sticky"),s=i.data("scroll-offset")||(r.length?r.outerHeight():0);n=i.offset().top-s,e("body,html").animate({scrollTop:n},1e3)}})}}).call(t,n("0iPh"))},r7VU:function(e,t,n){"use strict";(function(e){n.d(t,"h",function(){return i}),n.d(t,"j",function(){return o}),n.d(t,"f",function(){return r}),n.d(t,"e",function(){return s}),n.d(t,"g",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"i",function(){return u}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return d});var i=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},o={isValidEmail:function(t){return t.match(/@.*[.]/)&&!function(){return-1!==e.trim(t).indexOf(" ")}()},isValidCompany:function(e){return!!e.match(/[a-z0-9]/i)},resetSubmitButtonStyle:function(){e("button").removeClass("button-disabled"),e(".button-primary-text").removeClass("is-transparent"),e("button").removeAttr("disabled")},IE8PlaceholderFix:function(t){e(".input-company",t).focus(),e(".input-email",t).focus().blur()},invalidCompanyMessage:"Your company name is required",invalidEmailMessage:"Your email address is required"},r=function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},s=function(){return/Android/i.test(navigator.userAgent)},a=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},c=function(e){void 0===e&&(e={});for(var t,n=[],i=window.location.search.substring(1).split("&"),o=0;o<i.length;o+=1)t=i[o].split("="),n.push(t[0]),t.length>1&&(n[t[0]]=e.decode?decodeURIComponent(t[1]):t[1]);return n},l=function(e,t,n){var i="",o=function(){for(var e=0,t=document.domain,n=t.split("."),i="_gd"+(new Date).getTime();e<n.length-1&&-1===document.cookie.indexOf(i+"="+i);)t=n.slice(-1-(e+=1)).join("."),document.cookie=i+"="+i+";domain="+t+";";return document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+t+";",t}();if(n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),i="; expires="+r.toGMTString()}document.cookie=e+"="+t+i+";domain="+o+";path=/"},u=function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i+=1){var o=n[i].trim();if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null},f=function(e){l(e,"",-1)},d=function(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset-document.documentElement.clientTop,left:t.left+window.pageXOffset-document.documentElement.clientLeft}}}).call(t,n("0iPh"))},ssPr:function(e,t,n){"use strict";t.a=function(e){return""+e.charAt(0).toLowerCase()+e.replace(/[\W_]/g,"|").split("|").map(function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)}).join("").slice(1)}},y42z:function(e,t,n){"use strict";(function(e){var i=n("QJRV"),o=n("9p2S"),r=n("r7VU");t.a=function(){function t(e,t,n,o){return!(!o.length>0)&&({init:function(){this.form=o,this.email=this.form.find("input[name='email']"),this.password=this.form.find("input[name='password']"),this.submitButton=this.form.find("button[type='submit']"),this.form.on("submit",e.proxy(this.sendRequest,this)),this.form.on("focus",this.loadGeoInfo()),this.isValid=!1},sendRequest:function(t){t.preventDefault();var i="";if(null!==Object(r.i)("fb_landing_url")){var o=decodeURIComponent(Object(r.i)("fb_landing_url")).match("[?&]ref=([^&#]*)");o&&o.length&&(i=o[1])}if(null!==Object(r.i)("fb_landing_url")){var s=decodeURIComponent(Object(r.i)("fb_landing_url")).match("[?&]ref=([^&#]*)");s&&s.length&&(i=s[1])}this.loadGeoInfo(),this.form.find("input").removeClass("error"),this.form.find(".fieldset").removeClass("error"),this.form.find(".error-general").hide(),this.submitButton.addClass("loading");var a=n.querySelector("#inline-form-hero"),c=a.dataset.ep,l=JSON.stringify({email:this.email.val(),id:this.email.val(),password:this.password.val(),landing_url:decodeURIComponent(Object(r.i)("fb_landing_url")),provisioner:"magnum",send_confirmation_notification:!0,visitor_id:Object(r.i)("fb_visitor_id"),access_token:null,capacity:null,country:this.country||"United States",currencyCode:this.currency||"USD",optimizely_buckets:Object(r.i)("optimizely_buckets"),optimizely_user_id:Object(r.i)("optimizely_user_id"),referralid:i,referring_url:decodeURIComponent(Object(r.i)("fb_referral_url")),web_promo:Object(r.i)("fb_web_promo"),skip_business:!1,skip_system:!1});e.ajax({url:c,type:"POST",data:l,contentType:"application/json; charset=utf-8",dataType:"json",success:e.proxy(this.success,this),error:e.proxy(this.error,this)})},success:function(e){this.growSumoReferral(this.email.val()),this.sendOptimizelySignUpEvent();var n=t;(t.dataLayer||[]).push({event:"smux.account.signup"}),n.location="https://my.freshbooks.com/#/unverified?email="+e.response.access_token+"&email="+this.email.val()},error:function(e){this.submitButton.removeClass("loading");var t=JSON.parse(e.responseText),n=this;t.error_description.replace("Validation failed:","").split(",").forEach(function(e){-1!==e.search(/email/i)?(n.form.find("input[type=email]").addClass("error"),n.form.find(".fieldset-email .server-message").text(e)):-1!==e.search(/password/i)?(n.form.find("input[type=password]").addClass("error"),n.form.find(".fieldset-password .server-message").text(e)):n.form.find(".error-general").show().text(e)})},loadGeoInfo:function(){var t,n=this;e.get("/wp-json/wp/v2/geo-location/get-data",function(e){t=e}).then(function(){n.country=t.country_name,n.currency=i.a[t.country]})},growSumoReferral:function(e){if(void 0!==t.growsumo){var n=t.growsumo;n.data.name=e,n.data.email="https://www.freshbooks.com/wp-content/themes/freshbooks/dist/scripts/anonymous@freshbooks.com",n.data.customer_key=e,n.createSignup()}},sendOptimizelySignUpEvent:function(){t.optimizely=t.optimizely||[],t.optimizely.push({type:"event",eventName:"smux_account_signup"})}}.init(),!0)}e(document).ready(function(){Object(o.a)(),new t(e,window,document,e("#inline-form-hero")),new t(e,window,document,e("#inline-form-body")),e(".inline-form-hero .fieldset-email").click(function(){e(".inline-form-hero .fieldset-password").slideDown()}),e(".fieldset input").focus(function(){e(this).removeClass("error")})})}}).call(t,n("0iPh"))}});