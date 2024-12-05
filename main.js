(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"3ec29521-859f-4293-af83-93da763723f5","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(e,t){var n=e.querySelector(".".concat(t.name,"-error"));t.classList.remove("popup__input_type_error"),n.textContent="",n.classList.remove("popup__error_visible")}function r(e,t){e.some((function(e){return!e.validity.valid}))?(t.setAttribute("disabled",!0),t.classList.add("popup__button_disabled")):(t.removeAttribute("disabled"),t.classList.remove("popup__button_disabled"))}function o(e){var t=Array.from(e.querySelectorAll(".popup__input")),o=e.querySelector(".popup__button");t.forEach((function(t){return n(e,t)})),r(t,o)}function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function a(e){e.classList.remove("popup_is-opened"),document.addEventListener("keydown",i)}function i(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&a(t)}}function u(e){e.target.classList.contains("popup")&&a(e.target)}function l(n,r,o,a,i){var u=document.querySelector("#card-template").content.cloneNode(!0).querySelector(".card"),l=u.querySelector(".card__image"),s=u.querySelector(".card__title"),d=u.querySelector(".card__delete-button"),p=u.querySelector(".card__like-button"),f=u.querySelector(".card__like-count");return l.src=n.link,l.alt=n.name,s.textContent=n.name,f.textContent=n.likes.length,n.likes.some((function(e){return e._id===i}))&&p.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(){var r;(p.classList.contains("card__like-button_is-active")?(r=n._id,fetch("".concat(e.baseUrl,"/cards/").concat(r,"/likes"),{method:"DELETE",headers:e.headers}).then(t)):function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n,"/likes"),{method:"PUT",headers:e.headers}).then(t)}(n._id)).then((function(e){p.classList.toggle("card__like-button_is-active"),f.textContent=e.likes.length})).catch((function(e){return console.error("Ошибка обновления лайка: ".concat(e))}))})),n.owner&&n.owner._id!==i?d.style.display="none":d.addEventListener("click",(function(){var r;(r=n._id,fetch("".concat(e.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:e.headers}).then(t)).then((function(){u.remove()})).catch((function(e){return console.error("Ошибка удаления карточки: ".concat(e))}))})),l.addEventListener("click",(function(){r.src=n.link,r.alt=n.name,o.textContent=n.name,c(a)})),u}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d,p=document.querySelector(".places__list"),f=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_new-card"),_=document.querySelector(".popup_type_avatar"),v=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),h=document.querySelector(".profile__image-edit-button"),b=document.querySelectorAll(".popup__close"),S=document.querySelector(".popup_type_image"),q=S.querySelector(".popup__image"),E=S.querySelector(".popup__caption"),L=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),g=document.querySelector(".profile__image"),A=document.forms["edit-profile"],C=A.elements.name,x=A.elements.description,w=document.forms["new-place"],U=document.forms["update-avatar"],j=w.elements["place-name"],T=w.elements.link,D=U.elements.avatar;Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];d=o._id,L.textContent=o.name,k.textContent=o.about,g.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){var t=l(e,q,E,S,d);p.append(t)}))})).catch((function(e){console.error("Ошибка загрузки данных: ".concat(e))})),v.addEventListener("click",(function(){C.value=L.textContent,x.value=k.textContent,o(A),c(f)})),A.addEventListener("submit",(function(e){e.preventDefault(),L.textContent=C.value,k.textContent=x.value,a(f)})),y.addEventListener("click",(function(){w.reset(),o(w),c(m)})),w.addEventListener("submit",(function(n){var r;n.preventDefault(),(r={name:j.value,link:T.value},fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r.name,link:r.link})}).then(t)).then((function(e){var t=l(e,q,E,S,d);p.prepend(t),a(m),w.reset()})).catch((function(e){return console.error("Ошибка добавления карточки: ".concat(e))}))})),h.addEventListener("click",(function(){U.reset(),o(U),c(_)})),U.addEventListener("submit",(function(n){var r;n.preventDefault(),(r=D.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){g.style.backgroundImage="url(".concat(e.avatar,")"),a(_)})).catch((function(e){return console.error("Ошибка обновления аватара: ".concat(e))}))})),b.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return a(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",u)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),o=e.querySelector(".popup__button");r(t,o),t.forEach((function(c){c.addEventListener("input",(function(){!function(e,t){t.validity.valid?n(e,t):function(e,t,n){var r=e.querySelector(".".concat(t.name,"-error"));t.classList.add("popup__input_type_error"),r.textContent=n,r.classList.add("popup__error_visible")}(e,t,t.validationMessage)}(e,c),r(t,o)}))}))}(e),e.addEventListener("reset",(function(){o(e)}))}))})();