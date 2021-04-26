(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"body {\r\n  margin: 0;\r\n  background-color: #373737;\r\n}\r\n\r\n.menu,\r\n.locations {\r\n  font-family: 'Oswald', sans-serif;\r\n  display: grid;\r\n  margin: 100px;\r\n  grid-template-columns: auto auto auto;\r\n  grid-gap: 60px;\r\n  color: #fff;\r\n}\r\n\r\n.menu-item,\r\n.contact {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  color: #fff;\r\n}\r\n\r\n.name {\r\n  font-size: 50px;\r\n}\r\n\r\n.dish {\r\n  margin-top: 20px;\r\n}\r\n\r\n.price {\r\n  font-size: 40px;\r\n}\r\n\r\n.description {\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 25px;\r\n}\r\n\r\n.hello {\r\n  color: red;\r\n}\r\n\r\n.nav-bar {\r\n  background-color: #212121;\r\n  color: #fff;\r\n  font-family: 'Oswald', sans-serif;\r\n}\r\n\r\n.nav-content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title {\r\n  margin: 16px;\r\n  font-size: 30px;\r\n}\r\n\r\nli {\r\n  display: inline;\r\n  margin: 25px;\r\n  font-size: 25px;\r\n}\r\n\r\n.active {\r\n  border-bottom: 5px solid white;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.landing-text {\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  margin-top: 30px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.instructions {\r\n  font-family: 'Oswald', sans-serif;\r\n  font-size: 20px;\r\n  margin: 50px;\r\n}\r\n\r\n.lading-title,\r\n.header {\r\n  font-size: 50px;\r\n  font-weight: 500;\r\n  margin: auto;\r\n  font-family: 'Oswald', sans-serif;\r\n}\r\n\r\n.landing-description {\r\n  font-size: 40px;\r\n  margin: auto;\r\n  margin-top: 30px;\r\n  font-family: 'Dancing Script', cursive;\r\n}\r\n\r\n.land-image {\r\n  margin-top: 40px;\r\n  width: 60%;\r\n}\r\n",""]);const a=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var o=[].concat(e[c]);r&&i[o[0]]||(t&&(o[2]?o[2]="".concat(t," and ").concat(o[2]):o[2]=t),n.push(o))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],o=n.base?c[0]+n.base:c[0],d=t[o]||0,l="".concat(o," ").concat(d);t[o]=d+1;var u=s(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:h(p,n),references:1}),r.push(l)}return r}function o(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,i);else{var a=document.createTextNode(i),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(a,s[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,i=t.media,a=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(e,n){var t,r,i;if(n.singleton){var a=f++;t=m||(m=o(n)),r=u.bind(null,t,a,!1),i=u.bind(null,t,a,!0)}else t=o(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=s(t[r]);a[i].references--}for(var o=c(e,n),d=0;d<t.length;d++){var l=s(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=o}}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const i="./images/41f2436ab2946fde57487f693594fc2d.png",a=[];class s{constructor(e,n,t,r){switch(this.name=e,this.price=n,t){case"BBQ":this.image=i;break;case"CHIPOTLE":this.image="./images/bcb8bab7a7868bf027eed0e2ea7e861b.png";break;case"MANGO-HABANERO":this.image="./images/28c399ca61bfb97206330472aef290f6.png";break;case"MANGO":this.image="./images/dcb175a4cf5b3be386bbb49b826e63d9.png";break;case"HONEY":this.image="./images/d9e8889402b2397c9be85942b20432b0.png";break;case"VEGGIES":this.image="./images/8d274ef764c749be52fa9ec5ed36f3fd.png";break;default:this.image=i}this.description=r}}a.push(new s("BBQ++","$45.30","BBQ","Enjot the classic, with C++ sauce")),a.push(new s("Chipotle.js","$48.30","CHIPOTLE","With our special spicy js sauce")),a.push(new s("Mango-habanero","$44.30","HABANERO","The perfect sweet spicy bundle")),a.push(new s("Mango","$44.30","MANGO","Simple and tasty (no dependencys required)")),a.push(new s("Honey Mustard","$44.30","HONEY","Weird combination, some people like it")),a.push(new s("Veggies","$12.30","VEGGIES","The prefect complement to bundle your meal"));const c=[];class o{constructor(e,n,t){this.name=e,this.address=n,this.phone=t}}c.push(new o("Boneless Ny","232 West 29th Street, 10001-5201, Nueva York, EE. UU.","812-855-328")),c.push(new o("Boneless Columbus","80 Columbus Circle At 60th Street, 10023, Nueva York, EE. UU.","812-428-511")),c.push(new o("Boneless Madison","Madison Avenue at 77th street, 10075, Nueva York, EE. UU.","812-855-521"));const d=document.getElementById("content");function l(){d.innerHTML=""}function u(e){d.appendChild(function(e){const n=document.createElement("nav"),t=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("ul"),c=document.createElement("li"),o=document.createElement("li"),d=document.createElement("li");switch(n.setAttribute("class","nav-bar"),t.setAttribute("class","nav-content"),r.setAttribute("class","title"),i.setAttribute("class","fas fa-drumstick-bite"),a.setAttribute("class","nav-elements"),r.setAttribute("id","home"),c.setAttribute("id","menu"),e){case"menu":c.setAttribute("class","active");break;case"locations":o.setAttribute("class","active");break;case"contact":d.setAttribute("class","active")}return r.appendChild(i),r.innerHTML+=" Boneles.js",o.setAttribute("id","locations"),d.setAttribute("id","contact"),c.innerHTML="Menu",o.innerHTML="Locations",d.innerHTML="Contact",s.appendChild(c),s.appendChild(o),s.appendChild(d),a.appendChild(s),t.appendChild(r),t.appendChild(a),n.appendChild(t),n}(e)),b.eventListener()}function p(){l(),u(),d.appendChild(function(e){const n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("img");return n.setAttribute("class","landing-page"),t.setAttribute("class","landing-text"),r.setAttribute("class","lading-title"),i.setAttribute("class","landing-description"),a.setAttribute("class","img-container"),s.setAttribute("class","land-image"),s.setAttribute("src",e),i.innerHTML="  Enjoy the chiken coreated by the best coders in the matrix, quality of every line of code in bite by bite",r.innerHTML="The best chiken in the Matrix",t.appendChild(r),t.appendChild(i),a.appendChild(s),n.appendChild(t),n.appendChild(a),n}("./images/eeb92e2cdcee5d819003a676f91a2f08.png"))}function m(){l(),u("menu"),d.appendChild(function(){const e=document.createElement("div");e.setAttribute("class","menu");for(let n=0;n<a.length;n+=1){const t=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),s=document.createElement("img"),c=document.createElement("div"),o=document.createElement("div");t.setAttribute("class","menu-item"),r.setAttribute("class","name"),i.setAttribute("class","dish"),c.setAttribute("class","price"),o.setAttribute("class","description"),s.setAttribute("src",a[n].image),r.innerHTML=a[n].name,c.innerHTML=a[n].price,o.innerHTML=a[n].description,i.appendChild(s),t.appendChild(r),t.appendChild(i),t.appendChild(c),t.appendChild(o),e.append(t)}return e}())}function f(){l(),u("locations"),d.appendChild(function(){const e=document.createElement("div");e.setAttribute("class","locations");for(let n=0;n<c.length;n+=1){const t=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");t.setAttribute("class","location"),r.setAttribute("class","name"),i.setAttribute("class","address"),a.setAttribute("class","phone"),r.innerHTML=c[n].name,i.innerHTML=c[n].address,a.innerHTML=c[n].phone,t.appendChild(r),t.appendChild(i),t.appendChild(a),e.append(t)}return e}())}function h(){l(),u("contact"),d.appendChild(function(){const e=document.createElement("div");e.setAttribute("class","contact");const n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),i=document.createElement("img");return n.setAttribute("class","header"),t.setAttribute("class","instructions"),i.setAttribute("src","./images/bd46ea942ea0e290fe588505fb79fbf4.jpg"),n.innerHTML="Order online",t.innerHTML="Now you can order online, in a few secconds a console will pop up and an Agent will contact you to take your order",r.appendChild(i),e.appendChild(n),e.appendChild(t),e.appendChild(r),e}())}const b={init(){p(),this.eventListener()},eventListener(){document.getElementById("home").addEventListener("click",p,!1),document.getElementById("menu").addEventListener("click",m,!1),document.getElementById("locations").addEventListener("click",f,!1),document.getElementById("contact").addEventListener("click",h,!1)}};b.init()})()})();