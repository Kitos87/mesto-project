(()=>{"use strict";function e(e,t){var n=e.querySelector(".".concat(t.name,"-error"));t.classList.remove("popup__input_type_error"),n.textContent="",n.classList.remove("popup__error_visible")}function t(e,t){e.some((function(e){return!e.validity.valid}))?(t.setAttribute("disabled",!0),t.classList.add("popup__button_disabled")):(t.removeAttribute("disabled"),t.classList.remove("popup__button_disabled"))}function n(n){var r=Array.from(n.querySelectorAll(".popup__input")),o=n.querySelector(".popup__button");r.forEach((function(t){return e(n,t)})),t(r,o)}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function o(e){e.classList.remove("popup_is-opened"),document.addEventListener("keydown",c)}function c(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&o(t)}}function a(e){e.target.classList.contains("popup")&&o(e.target)}var i={baseUrl:"https://nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"3ec29521-859f-4293-af83-93da763723f5","Content-Type":"application/json"}};function u(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function s(e,t,n,o,c){var a,s=(null===(a=document.querySelector("#card-template"))||void 0===a?void 0:a.content).cloneNode(!0),l=s.querySelector(".card__image"),p=s.querySelector(".card__title"),d=s.querySelector(".card__delete-button");return l.src=e.link,l.alt=e.name,p.textContent=e.name,e.owner._id!==t?d.remove():d.addEventListener("click",(function(){!function(e,t){(function(e){return u("".concat(i.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:i.headers})})(e).then((function(){t.remove()})).catch((function(e){console.error("Ошибка удаления карточки: ".concat(e))}))}(e._id,s)})),l.addEventListener("click",(function(){n.src=e.link,n.alt=e.name,o.textContent=e.name,r(c)})),s}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([u("".concat(i.baseUrl,"/users/me"),{headers:i.headers}),u("".concat(i.baseUrl,"/cards"),{headers:i.headers})]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1],a=o._id;S.textContent=o.name,k.textContent=o.about,c.forEach((function(e){var t=s(e,a,h,b,_);p.append(t)}))})).catch((function(e){console.error("Ошибка загрузки данных: ".concat(e))}));var p=document.querySelector(".places__list"),d=document.querySelector(".popup_type_edit"),f=document.querySelector(".popup_type_new-card"),m=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),y=document.querySelectorAll(".popup__close"),_=document.querySelector(".popup_type_image"),h=_.querySelector(".popup__image"),b=_.querySelector(".popup__caption"),S=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),E=document.forms["edit-profile"],q=E.elements.name,L=E.elements.description,g=document.forms["new-place"],x=g.elements["place-name"],A=g.elements.link;[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=s(e,h,b,_);p.append(t)})),m.addEventListener("click",(function(){q.value=S.textContent,L.value=k.textContent,n(E),r(d)})),E.addEventListener("submit",(function(e){e.preventDefault(),S.textContent=q.value,k.textContent=L.value,o(d)})),v.addEventListener("click",(function(){g.reset(),n(g),r(f)})),g.addEventListener("submit",(function(e){e.preventDefault();var t=s({name:x.value,link:A.value},h,b,_);p.prepend(t),o(f)})),y.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return o(t)}))})),y.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return o(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",a)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(r){r.addEventListener("submit",(function(e){e.preventDefault()})),function(n){var r=Array.from(n.querySelectorAll(".popup__input")),o=n.querySelector(".popup__button");t(r,o),r.forEach((function(c){c.addEventListener("input",(function(){!function(t,n){n.validity.valid?e(t,n):function(e,t,n){var r=e.querySelector(".".concat(t.name,"-error"));t.classList.add("popup__input_type_error"),r.textContent=n,r.classList.add("popup__error_visible")}(t,n,n.validationMessage)}(n,c),t(r,o)}))}))}(r),r.addEventListener("reset",(function(){n(r)}))}))})();