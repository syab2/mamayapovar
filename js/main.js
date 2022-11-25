/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={971:()=>{!function(){let t=1;const e=document.querySelector(".ingredient").querySelector(".ingredient__list"),n=document.querySelector(".ingredient__btn"),o=document.querySelectorAll(".ingredient-item__delete");n.addEventListener("click",(n=>{n.preventDefault(),t++,e.innerHTML+=`\n\t\t\t<div class="ingredient-item" id="ingredient-${t}">\n\t\t\t<input type="text" name="ingredient-name-${t}" class="input  ingredient-item__input  ingredient-item__input--name" placeholder="Название ингредиента" autocomplete="off" required>\n\t\t\t<input type="number" name="ingredient-amount-${t}" class="input  ingredient-item__input  ingredient-item__input--amount" value="1" min="1" max="5000" autocomplete="off" required>\n\t\t\t<div class="select  ingredient-item__select">\n\t\t\t\t<select name="ingredient-measure-${t}" aria-label="Единица измерения" required>\n\t\t\t\t\t<option>Ед. измерения</option>\n\t\t\t\t\t<option>шт</option>\n\t\t\t\t\t<option>г</option>\n\t\t\t\t\t<option>кг</option>\n\t\t\t\t\t<option>мл</option>\n\t\t\t\t\t<option>л</option>\n\t\t\t\t\t<option>столовая ложка</option>\n\t\t\t\t\t<option>чайная ложка</option>\n\t\t\t\t\t<option>стакан</option>\n\t\t\t\t</select>\n\t\t\t\t<svg class="icon  select__icon" aria-hidden="true" focusable="false">\n\t\t\t\t\t<use href="img/sprite.svg#chevron-down"/>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<a class="btn-reset  ingredient-item__delete" aria-label="Удалить ингредиент">\n\t\t\t\t<svg class="icon  icon--16  ingredient-item__icon" aria-hidden="true" focusable="false">\n\t\t\t\t\t<use href="img/sprite.svg#cross" />\n\t\t\t\t</svg>\n\t\t\t</a>\n\t\t</div>\n    `})),o.forEach((e=>{e.addEventListener("click",(n=>{let o=e.parentNode;return o.parentNode.removeChild(o),t--,!1}))}))}()},338:()=>{!function(){var t,e,n;const o=null===(t=document)||void 0===t?void 0:t.querySelector("[data-menu-profile-toggle]"),i=null===(e=document)||void 0===e?void 0:e.querySelector("[data-menu-profile]"),a=null===(n=document)||void 0===n?void 0:n.querySelectorAll("[data-menu-profile-link]");o&&(null==o||o.addEventListener("click",(t=>{null==i||i.classList.toggle("active"),null!=i&&i.classList.contains("active")?(null==o||o.setAttribute("aria-expanded","true"),null==o||o.setAttribute("aria-label","Закрыть меню")):(null==o||o.setAttribute("aria-expanded","false"),null==o||o.setAttribute("aria-label","Открыть меню"))})),window.addEventListener("click",(t=>{const e=t.target;e.closest("[data-menu-profile-toggle]")||e.closest("[data-menu-profile]")||(null==o||o.setAttribute("aria-expanded","false"),null==o||o.setAttribute("aria-label","Открыть меню"),i.classList.remove("active"))})),null==a||a.forEach((t=>{t.addEventListener("click",(()=>{null==o||o.setAttribute("aria-expanded","false"),null==o||o.setAttribute("aria-label","Открыть меню"),i.classList.remove("active")}))})))}()},598:()=>{function t(t){var e=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function s(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function r(t){e=!1}function c(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(a(t.activeElement)&&s(t.activeElement),e=!0)}),!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",(function(t){"hidden"===document.visibilityState&&(n&&(e=!0),c())}),!0),c(),t.addEventListener("focus",(function(t){var n,o,r;a(t.target)&&(e||(o=(n=t.target).type,"INPUT"===(r=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===r&&!n.readOnly||n.isContentEditable))&&s(t.target)}),!0),t.addEventListener("blur",(function(t){var e;a(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(e=t.target).hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added")))}),!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)},2:function(t,e,n){var o,i;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),o=this;do{for(e=n.length;0<=--e&&n.item(e)!==o;);}while(e<0&&(o=o.parentElement));return o}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-t)),a=window.setTimeout((function(){e(o+i)}),i);return t=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),i=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,o=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},o=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,i=-1,a="",s=n.charCodeAt(0);++i<o;){if(0===(e=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=e&&e<=31||127==e||0===i&&48<=e&&e<=57||1===i&&48<=e&&e<=57&&45===s?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e,n,o){0===e&&document.body.focus(),o||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))},s=function(e,n,o,i){if(n.emitEvents&&"function"==typeof t.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:o,toggle:i}});document.dispatchEvent(a)}};return function(r,c){var d,l,u,m,h={cancelScroll:function(t){cancelAnimationFrame(m),m=null,t||s("scrollCancel",d)},animateScroll:function(o,r,c){h.cancelScroll();var l=n(d||e,c||{}),p="[object Number]"===Object.prototype.toString.call(o),f=p||!o.tagName?null:o;if(p||f){var v=t.pageYOffset;l.header&&!u&&(u=document.querySelector(l.header));var g,y,b,E,w,L,S,A,C=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(u),O=p?o:function(e,n,o,a){var s=0;if(e.offsetParent)for(;s+=e.offsetTop,e=e.offsetParent;);return s=Math.max(s-n-o,0),a&&(s=Math.min(s,i()-t.innerHeight)),s}(f,C,parseInt("function"==typeof l.offset?l.offset(o,r):l.offset,10),l.clip),q=O-v,_=i(),x=0,T=(g=q,b=(y=l).speedAsDuration?y.speed:Math.abs(g/1e3*y.speed),y.durationMax&&b>y.durationMax?y.durationMax:y.durationMin&&b<y.durationMin?y.durationMin:parseInt(b,10)),k=function(e){var n,i,c;E||(E=e),x+=e-E,L=v+q*(i=w=1<(w=0===T?0:x/T)?1:w,"easeInQuad"===(n=l).easing&&(c=i*i),"easeOutQuad"===n.easing&&(c=i*(2-i)),"easeInOutQuad"===n.easing&&(c=i<.5?2*i*i:(4-2*i)*i-1),"easeInCubic"===n.easing&&(c=i*i*i),"easeOutCubic"===n.easing&&(c=--i*i*i+1),"easeInOutCubic"===n.easing&&(c=i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1),"easeInQuart"===n.easing&&(c=i*i*i*i),"easeOutQuart"===n.easing&&(c=1- --i*i*i*i),"easeInOutQuart"===n.easing&&(c=i<.5?8*i*i*i*i:1-8*--i*i*i*i),"easeInQuint"===n.easing&&(c=i*i*i*i*i),"easeOutQuint"===n.easing&&(c=1+--i*i*i*i*i),"easeInOutQuint"===n.easing&&(c=i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i),n.customEasing&&(c=n.customEasing(i)),c||i),t.scrollTo(0,Math.floor(L)),function(e,n){var i=t.pageYOffset;if(e==n||i==n||(v<n&&t.innerHeight+i)>=_)return h.cancelScroll(!0),a(o,n,p),s("scrollStop",l,o,r),!(m=E=null)}(L,O)||(m=t.requestAnimationFrame(k),E=e)};0===t.pageYOffset&&t.scrollTo(0,0),S=o,A=l,p||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?a(o,Math.floor(O),!1):(s("scrollStart",l,o,r),h.cancelScroll(!0),t.requestAnimationFrame(k))}}},p=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(r))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(d.ignore)&&l.hostname===t.location.hostname&&l.pathname===t.location.pathname&&/#/.test(l.href)){var n,i;try{n=o(decodeURIComponent(l.hash))}catch(e){n=o(l.hash)}if("#"===n){if(!d.topOnEmptyHash)return;i=document.documentElement}else i=document.querySelector(n);(i=i||"#top"!==n?i:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(d),h.animateScroll(i,l))}},f=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(d)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(o(history.state.anchor)))||h.animateScroll(e,null,{updateURL:!1})}};return h.destroy=function(){d&&(document.removeEventListener("click",p,!1),t.removeEventListener("popstate",f,!1),h.cancelScroll(),m=u=l=d=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),d=n(e,c||{}),u=d.header?document.querySelector(d.header):null,document.addEventListener("click",p,!1),d.updateURL&&d.popstate&&t.addEventListener("popstate",f,!1)}(),h}}(i)}.apply(e,[]),void 0===o||(t.exports=o)}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t;n(598),window,document,document.documentElement,document.body;const e=document.querySelector(".sidebar-tree__item--tab"),o=null===(t=document)||void 0===t?void 0:t.querySelector(".header").offsetHeight;document.querySelector(":root").style.setProperty("--header-height",`${o}px`),n(338),new class{constructor(t){this.options=Object.assign({isOpen:()=>{},isClose:()=>{}},t),this.modal=document.querySelector(".graph-modal"),this.speed=300,this.animation="fade",this._reOpen=!1,this._nextContainer=!1,this.modalContainer=!1,this.isOpen=!1,this.previousActiveElement=!1,this._focusElements=["a[href]","input","select","textarea","button","iframe","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],this._fixBlocks=document.querySelectorAll(".fix-block"),this.events()}events(){this.modal&&(document.addEventListener("click",function(t){const e=t.target.closest("[data-graph-path]");if(e){let t=e.dataset.graphPath,n=e.dataset.graphAnimation,o=e.dataset.graphSpeed;return this.animation=n||"fade",this.speed=o?parseInt(o):300,this._nextContainer=document.querySelector(`[data-graph-target="${t}"]`),void this.open()}t.target.closest(".js-modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(t){27==t.keyCode&&this.isOpen&&this.close(),9==t.which&&this.isOpen&&this.focusCatch(t)}.bind(this)),document.addEventListener("click",function(t){t.target.classList.contains("graph-modal")&&t.target.classList.contains("is-open")&&this.close()}.bind(this)))}open(t){if(this.previousActiveElement=document.activeElement,this.isOpen)return this.reOpen=!0,void this.close();this.modalContainer=this._nextContainer,t&&(this.modalContainer=document.querySelector(`[data-graph-target="${t}"]`)),this.modalContainer.scrollTo(0,0),this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.modal.classList.add("is-open"),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.disableScroll(),this.modalContainer.classList.add("graph-modal-open"),this.modalContainer.classList.add(this.animation),setTimeout((()=>{this.options.isOpen(this),this.modalContainer.classList.add("animate-open"),this.isOpen=!0,this.focusTrap()}),this.speed)}close(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("graph-modal-open"),this.enableScroll(),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.options.isClose(this),this.isOpen=!1,this.focusTrap(),this.reOpen&&(this.reOpen=!1,this.open()))}focusCatch(t){const e=this.modalContainer.querySelectorAll(this._focusElements),n=Array.prototype.slice.call(e),o=n.indexOf(document.activeElement);t.shiftKey&&0===o&&(n[n.length-1].focus(),t.preventDefault()),t.shiftKey||o!==n.length-1||(n[0].focus(),t.preventDefault())}focusTrap(){const t=this.modalContainer.querySelectorAll(this._focusElements);this.isOpen?t.length&&t[0].focus():this.previousActiveElement.focus()}disableScroll(){let t=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=t,document.body.style.top=-t+"px"}enableScroll(){let t=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scrollTo({top:t,left:0}),document.body.removeAttribute("data-position")}lockPadding(){let t=window.innerWidth-document.body.offsetWidth+"px";this._fixBlocks.forEach((e=>{e.style.paddingRight=t})),document.body.style.paddingRight=t}unlockPadding(){this._fixBlocks.forEach((t=>{t.style.paddingRight="0px"})),document.body.style.paddingRight="0px"}},n(971);var i=n(2);if(new(n.n(i)())('a[href*="#"]',{header:".header",updateURL:!1,offset:150}),e){const a=document.querySelectorAll("fieldset[id]");function s(){const t=window.pageYOffset;a.forEach((e=>{const n=e.offsetHeight+40,i=e.offsetTop-o-205,s=e.getAttribute("id"),r=a[0].getAttribute("id"),c=a[a.length-2].getAttribute("id"),d=a[a.length-1].getAttribute("id");window.scrollY+1>=document.documentElement.scrollHeight-document.documentElement.clientHeight?(document.querySelector(".sidebar a[href*="+d+"]").parentElement.classList.add("active"),document.querySelector(".sidebar a[href*="+c+"]").parentElement.classList.remove("active"),document.querySelector(".sidebar a[href*="+r+"]").parentElement.classList.remove("active")):t>i&&t<=i+n?document.querySelector(".sidebar a[href*="+s+"]").parentElement.classList.add("active"):document.querySelector(".sidebar a[href*="+s+"]").parentElement.classList.remove("active")}))}window.addEventListener("scroll",s)}})()})();