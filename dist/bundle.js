(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),a=t.n(r),i=t(645),o=t.n(i),c=t(667),d=t.n(c),s=new URL(t(629),t.b),l=o()(a()),p=d()(s);l.push([n.id,`body {\n  background: linear-gradient(to bottom, #6db3d6 0%, #426ea7 100%);\n  height: 100vh;\n  margin: 0;\n  font-family: "Gabarito", cursive;\n  background: hsla(186, 33%, 94%, 1);\n  background-repeat: no-repeat;\n\n  background: linear-gradient(\n    90deg,\n    hsla(186, 33%, 94%, 1) 0%,\n    hsla(216, 41%, 79%, 1) 100%\n  );\n\n  background: -moz-linear-gradient(\n    90deg,\n    hsla(186, 33%, 94%, 1) 0%,\n    hsla(216, 41%, 79%, 1) 100%\n  );\n\n\n}\n\nh1 {\n  font-weight: 100;\n  color: #274066;\n\n}\n\n.content {\n  height: 100%;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.locationwrapper {\n  width: 100%;\n}\n.location {\n  color: white;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  /* box-shadow: 0px 0px 30px rgba(18, 148, 235, 0.753); */\n\n  > h1 {\n    margin: 0;\n  }\n}\n\n.weathercontent {\n  flex: 1;\n\n  width: 100%;\n  display: none;\n  justify-content: center;\n  align-items: center;\n\n\n  @media (max-width: 840px) {\n    padding: 10px 0;\n\n  }\n}\n\n.weathercards {\n  display: none;\n  justify-content: center;\n  width: 100%;\n  gap: 10%;\n  margin: 10px 0;\n  @media (max-width: 840px) {\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n}\n\n.search {\n  font-size: 1.2rem;\n  margin: 1.2rem 0;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.searchicon {\n  height: 100%;\n  border: 2px solid white;\n  width: 40px;\n  border-radius: 0 20px 20px 0;\n  background-color: white;\n  cursor: pointer;\n  > img {\n    height: 100%;\n    width: 90%;\n  }\n}\n\n\n\n.footer {\n  font-size: 1.2rem;\n  display: flex;\n  width: 100%;\n  background-color: #91b0df;\n  justify-content: center;\n  /* align-items: center; */\n \n}\n\n.weathercard {\n  background-color: white;\n  height: 430px;\n  width: 300px;\n  border-radius: 10px;\n  background: rgba(183, 200, 216, 0.26);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(2px);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center ;\n  align-items: center;\n}\n\n.weatherinfo {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px 0;\n  gap: 10px;\n  > img {\n    width: 130px;\n    height: 130px;\n    filter: drop-shadow(1px 1px 10px rgba(107, 107, 107, 0.589));\n  }\n}\n\n.temp {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.temperatureHigh {\n  font-size: 4rem;\n  margin: 0;\n}\n\n.temperatureLow {\n  font-size: 2rem;\n  margin: 0;\n}\n\n.chanceinfo {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 10px;\n}\n\n.chance {\n  border-radius: 10px;\n  background-color: rgba(240, 248, 255, 0.753);\n  display: flex;\n  justify-content: space-between;\n  margin: 0 10px;\n  padding: 5px;\n  gap: 40px;\n  > p {\n    display: inline;\n    margin: 0;\n    padding: 0 5px;\n  }\n}\n\n#searchbar {\n  border: 1px solid white;\n  border-radius: 20px 0 0 20px;\n  width: 30%;\n  font-size: 1rem;\n  height: 100%;\n  padding-left: 10px;\n  text-align: none;\n  outline: 2px;\n  @media {\n    width: 40%;\n  }\n}\n\n#searchbar {\n  border: 1px solid white;\n  border-radius: 20px 0 0 20px;\n  width: 30%;\n  font-size: 1rem;\n  height: 100%;\n  padding-left: 10px;\n  text-align: none;\n  outline: 2px;\n  @media {\n    width: 40%;\n  }\n}\n\n\n#searchbar.error {\n  background-color: rgba(252, 146, 146, 0.774);\n}\n\n#searchbar:placeholder-shown {\n  text-align: center;\n}\n#searchbar:focus {\n  text-align: left;\n  border-color: rgb(198, 216, 216);\n}\n#searchbar:focus-visible:placeholder-shown::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.weathercard.sun::before {\n  content: "";\n  position: absolute;\n  background-color: rgba(255, 246, 246, 0.13);\n  height: 100%;\n  width: 60px;\n  transform: skewX(-30deg);\n  left: -180px;\n}\n\n.weathercard.sun::before {\n  animation: shine 7s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes shine {\n  0% {\n    left: -180px;\n  }\n  20% {\n    left: 150%;\n  }\n  100% {\n    left: 150%;\n  }\n}\n\n.weathercard.rain::before {\n  content: "";\n  position: absolute;\n  background-image: url(${p});\n  top: 0;\n  left: 0;\n  width: 150%;\n  height: 150%;\n  animation: rain 8s linear infinite;\n}\n\n@keyframes rain {\n  0% {\n    opacity: 0%;\n    left: -100px;\n    top: -100px;\n  }\n\n  5% {\n    opacity: 100%;\n  }\n  40%,\n  100% {\n    left: 0px;\n    top: 0px;\n    opacity: 0%;\n  }\n}\n\n.weathercard.storm::before {\n  content: "";\n  position: absolute;\n  background-image: url(${p});\n  top: 0;\n  left: 0;\n  width: 150%;\n  height: 150%;\n  animation: storm 8s linear infinite;\n}\n\n@keyframes storm {\n  0% {\n    opacity: 0%;\n    left: -100px;\n    top: -100px;\n  }\n\n  5% {\n    opacity: 100%;\n  }\n  10% {\n    background-color: rgba(255, 255, 255, 0.575);\n  }\n  12% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  15% {\n    background-color: rgba(255, 255, 255, 0.575);\n  }\n  17% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  40%,\n  100% {\n    left: 0px;\n    top: 0px;\n    opacity: 0%;\n  }\n}\n\n.weathercard.cloud::before {\n  content: "";\n  position: absolute;\n\n  top: 0;\n  left: 0;\n  width: 150%;\n  height: 150%;\n  animation: cloud 7s infinite;\n}\n\n@keyframes cloud {\n  0% {\n    backdrop-filter: blur(0px);\n  }\n  50% {\n    backdrop-filter: blur(90px);\n    background-color: rgba(240, 255, 255, 0.589);\n  }\n  100% {\n    backdrop-filter: blur(0px);\n  }\n}\n\n.day {\n  width: 100%;\n  display: flex;\n  z-index: 1;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.527);\n  > p {\n    text-align: center;\n    margin: 0;\n  }\n}\n\n\n.loader{\n  width: 75px;\n  height: 75px;\n}\n\n.spinner{\n  animation: spinner 1.5s linear infinite;\n}\n\n@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.errormessage{\n    display: none;\n    background-color: rgb(255, 255, 255);\n    position: absolute;\n    top: 75px;\n    text-align: center;\n    border: 4px solid rgba(255, 255, 0, 0.733);\n    padding: 5px 20px;\n    border-radius: 20px;\n}\n\n.unitToggler{\n  display: flex;\n  align-items: center;\n  position: fixed;\n  bottom: 50px;\n  padding: 0px 30px;\n  background: white;\n  border-radius: 20px;\n}\n\n.toggleInput{\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap:10px;\n  font-size: 2.0rem;\n}\n\n\n/*silder toggler from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch*/\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.creditsdiv{\n  position: relative;\n  border: 2px solid black;\n  border-radius: 7px;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(255, 253, 253, 0.719);\n  margin: 2px 0px;\n}\n\n#hoverarrow{\n  padding: 5px;\n  width: 20px;\n  height: 20px;\n}\n\n\n.creditsdiv:hover .credits{\n  display: flex;\n}\n\n.creditsdiv:hover .creditwrapper{\n  display: flex;\n}\n\n.credits{\n  background-color: #ffffff;\n  position: absolute;\n  bottom: 20px;\n  padding: 20px;\n  text-align: center;\n  display: none;\n  flex-direction: column;\n  gap:5px;\n  border-radius: 10px;\n  border: 3px solid black;\n}\n\n.credits:hover{\n  display: flex;\n}\n\n.creditwrapper:hover .credits{\n  display: flex;\n}\n\n.creditwrapper{\n  position: absolute;\n  display: none;\n  justify-content: center;\n  bottom: 20px;\n  width: 300%;\n  height: 100%;\n}`,""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=a(h,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var d=r(n,a),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},629:(n,e,t)=>{n.exports=t.p+"8bf9ae6515a8cb8801f4.png"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{class n{constructor(n,e,t,r,a,i,o){this.date=n,this.avgTemperature=e,this.minTemperature=t,this.condition=r,this.chanceRain=a,this.percipitation=i,this.avghumidity=o}}const e=t.p+"0b43f5c98c23439dcf48.png",r=t.p+"cfc1c8ddf2b3bcb98cec.png",a=t.p+"a6d0b7d87d2022baaf47.png",i=t.p+"2e2bdf64864088b35a2f.png";var o=t(379),c=t.n(o),d=t(795),s=t.n(d),l=t(569),p=t.n(l),u=t(565),h=t.n(u),f=t(216),m=t.n(f),g=t(589),x=t.n(g),b=t(890),y={};y.styleTagTransform=x(),y.setAttributes=h(),y.insert=p().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=m(),c()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const w=t.p+"fb33b006dd56733dd60b.svg";let v="C";const k=document.querySelector("#searchbar"),C=document.querySelector(".searchicon"),E=document.querySelector(".weathercards"),L=document.querySelector(".weathercontent"),S=document.querySelector("#currentLocation"),T=document.querySelector(".errormessage"),j=/^([A-Za-z](-?|,?\s?))+$/,q=document.querySelector("#unit");let M=[];function _(){document.querySelectorAll(".loader").forEach((n=>n.remove())),L.querySelectorAll(".weathercard").forEach((n=>n.remove()))}function z(){let n=k.value;return 0!==n.length&&j.test(n)?(T.style.display="none",k.classList.remove("error"),!0):(T.style.display="block",k.classList.add("error"),!1)}q.addEventListener("click",(function(n){if(n.stopPropagation(),v=1==q.checked?"F":"C",M.length>0){let n=0;L.querySelectorAll(".weathercard").forEach((e=>{e.querySelector(".temperatureHigh").textContent=M[n].avgTemperature[v]+" °"+v,e.querySelector(".temperatureLow").textContent=M[n].minTemperature[v]+" °"+v,n++}))}})),k.oninput=z,C.addEventListener("click",(async function(t){k.value,z(k.value)&&(M=await async function(t){!function(){let n=document.createElement("div");n.classList.add("loader");let e=document.createElement("img");e.classList.add("spinner"),e.src=w,n.appendChild(e),"none"===L.style.display||""===L.style.display?(E.style.display="flex",L.style.display="flex",E.appendChild(n)):L.querySelectorAll(".weathercard").forEach((e=>{let t=e.classList[e.classList.length-1];for(e.classList.remove(t);e.firstChild;)e.removeChild(e.firstChild);e.appendChild(n.cloneNode(!0))}))}();try{let o=await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${t}&key=2dc0747a20414ce69b1212419231010&days=3`),c=await o.json(),d=`${c.location.name}, ${c.location.country}`;S.textContent=d;let s=[];return c.forecast.forecastday.forEach((e=>{let t,r=e.day.condition.code;t=1e3===r?"sun":r>=1063&&r<=1072||r>=1150&&r<=1264?"rain":r>=1273&&r<=1282?"storm":"cloud",s.push(new n(e.date,{C:Math.trunc(e.day.maxtemp_c),F:Math.trunc(e.day.maxtemp_f)},{C:Math.trunc(e.day.mintemp_c),F:Math.trunc(e.day.mintemp_f)},t,e.day.daily_chance_of_rain,e.day.totalprecip_mm,e.day.avghumidity))})),_(),s.forEach((n=>{E.appendChild(function(n,t){const o={sun:e,cloud:a,rain:r,storm:i};let c=new Date(n.date).getDay(),d=document.createElement("div");d.classList.add("weathercard");let s=document.createElement("div");s.classList.add("day");let l=document.createElement("p");l.textContent=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][c],s.appendChild(l),d.appendChild(s);let p=document.createElement("div");p.classList.add("weatherinfo"),d.classList.add(n.condition);let u=document.createElement("img");u.src=o[n.condition],u.alt=n.condition,p.appendChild(u);let h=document.createElement("div");h.classList.add("temp");let f=document.createElement("p");f.classList.add("temperatureHigh"),f.textContent=n.avgTemperature[t]+" °"+t;let m=document.createElement("p");m.classList.add("temperatureLow"),m.textContent=n.minTemperature[t]+" °"+t,h.appendChild(f),h.appendChild(m),p.appendChild(h);let g=document.createElement("div");g.classList.add("chanceWrapper");let x=document.createElement("div");x.classList.add("chanceinfo");let b=document.createElement("div");b.classList.add("chance");let y=document.createElement("div");y.classList.add("chance");let w=document.createElement("div");w.classList.add("chance");let v=document.createElement("p");v.textContent="Chance of Rain";let k=document.createElement("p");k.textContent=n.chanceRain+"%",b.appendChild(v),b.appendChild(k),x.appendChild(b);let C=document.createElement("p");C.textContent="Precipitation";let E=document.createElement("p");E.textContent=n.percipitation+"mm",y.appendChild(C),y.appendChild(E),x.appendChild(y);let L=document.createElement("p");L.textContent="Humidity";let S=document.createElement("p");return S.textContent=n.avghumidity+"%",w.appendChild(L),w.appendChild(S),x.appendChild(w),g.appendChild(x),p.appendChild(g),d.appendChild(p),d}(n,v))})),s}catch(n){_(),L.style.display="none",S.textContent="Please Enter a Valid Location",T.style.display="block",k.classList.add("error")}}(k.value),console.log(M))}))})()})();