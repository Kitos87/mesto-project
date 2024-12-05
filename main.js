(()=>{"use strict";function e(e,t){var n=e.querySelector(".".concat(t.name,"-error"));t.classList.remove("popup__input_type_error"),n.textContent="",n.classList.remove("popup__error_visible")}function t(e,t){e.some((function(e){return!e.validity.valid}))?(t.setAttribute("disabled",!0),t.classList.add("popup__button_disabled")):(t.removeAttribute("disabled"),t.classList.remove("popup__button_disabled"))}function n(n){var r=Array.from(n.querySelectorAll(".popup__input")),o=n.querySelector(".popup__button");r.forEach((function(t){return e(n,t)})),t(r,o)}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function o(e){e.classList.remove("popup_is-opened"),document.addEventListener("keydown",c)}function c(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&o(t)}}function a(e){e.target.classList.contains("popup")&&o(e.target)}var u=function(e,t){var n=document.querySelector("#card-template").content.cloneNode(!0),o=n.querySelector(".card__image"),c=n.querySelector(".card__title"),a=n.querySelector(".card__like-button"),u=n.querySelector(".card__delete-button"),i=n.querySelector(".card__like-counter"),l=document.querySelector(".popup_type_image"),s=l.querySelector(".popup__image"),d=l.querySelector(".popup__caption");return o.src=e.link,o.alt=e.name,c.textContent=e.name,i.textContent=e.likes.length,e.owner._id!==t&&u.remove(),a.addEventListener("click",(function(){var t=a.classList.contains("card__like-button_is-active");toggleLike(e._id,t).then((function(e){i.textContent=e.likes.length,a.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.error(e)}))})),u.addEventListener("click",(function(){deleteCard(e._id).then((function(){n.remove()})).catch((function(e){return console.error(e)}))})),o.addEventListener("click",(function(){s.src=e.link,s.alt=e.name,d.textContent=e.name,r(l)})),n},i={baseUrl:"https://nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"3ec29521-859f-4293-af83-93da763723f5","Content-Type":"application/json"}},l=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d,p=document.querySelector(".places__list"),f=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_new-card"),_=(document.querySelector(".popup_type_image"),document.querySelector(".popup_type_avatar")),v=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),h=document.querySelector(".profile__avatar-edit"),b=document.querySelectorAll(".popup__close"),S=document.querySelector(".popup__button"),q=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),g=document.querySelector(".profile__image"),E=document.forms["edit-profile"],k=null==E?void 0:E.elements.name,C=null==E?void 0:E.elements.description,x=document.forms["new-place"],A=null==x?void 0:x.elements["place-name"],w=null==x?void 0:x.elements.link,O=document.forms["update-avatar"],j=null==O?void 0:O.elements.avatar;document.addEventListener("DOMContentLoaded",(function(){Promise.all([fetch("".concat(i.baseUrl,"/users/me"),{headers:i.headers}).then(l),fetch("".concat(i.baseUrl,"/cards"),{headers:i.headers}).then(l)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];d=o._id,q.textContent=o.name,L.textContent=o.about,g.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){var t=u(e,d);p.append(t)}))})).catch((function(e){return console.error("Ошибка загрузки данных: ".concat(e))})),null==E||E.addEventListener("submit",(function(e){var t;e.preventDefault(),S.textContent="Сохранение...",(t={name:k.value,about:C.value},fetch("".concat(i.baseUrl,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify(t)}).then(l)).then((function(e){q.textContent=e.name,L.textContent=e.about,o(f)})).catch((function(e){return console.error("Ошибка обновления профиля: ".concat(e))})).finally((function(){S.textContent="Сохранить"}))})),null==x||x.addEventListener("submit",(function(e){var t;e.preventDefault(),S.textContent="Создание...",(t={name:A.value,link:w.value},fetch("".concat(i.baseUrl,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify(t)}).then(l)).then((function(e){var t=u(e,d);p.prepend(t),o(m)})).catch((function(e){return console.error("Ошибка добавления карточки: ".concat(e))})).finally((function(){S.textContent="Создать"}))})),null==O||O.addEventListener("submit",(function(e){var t;e.preventDefault(),S.textContent="Сохранение...",(t=j.value,fetch("".concat(i.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:i.headers,body:JSON.stringify({avatar:t})}).then(l)).then((function(e){g.style.backgroundImage="url(".concat(e.avatar,")"),o(_)})).catch((function(e){return console.error("Ошибка обновления аватара: ".concat(e))})).finally((function(){S.textContent="Сохранить"}))})),v.addEventListener("click",(function(){E&&(k.value=q.textContent,C.value=L.textContent,n(E),r(f))})),y.addEventListener("click",(function(){x&&(x.reset(),n(x),r(m))})),null==h||h.addEventListener("click",(function(){O&&(O.reset(),n(O),r(_))})),b.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){o(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",a)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(r){r.addEventListener("submit",(function(e){e.preventDefault()})),function(n){var r=Array.from(n.querySelectorAll(".popup__input")),o=n.querySelector(".popup__button");t(r,o),r.forEach((function(c){c.addEventListener("input",(function(){!function(t,n){n.validity.valid?e(t,n):function(e,t,n){var r=e.querySelector(".".concat(t.name,"-error"));t.classList.add("popup__input_type_error"),r.textContent=n,r.classList.add("popup__error_visible")}(t,n,n.validationMessage)}(n,c),t(r,o)}))}))}(r),r.addEventListener("reset",(function(){n(r)}))}))}))})();