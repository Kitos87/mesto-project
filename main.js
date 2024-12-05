(()=>{"use strict";function e(e,t){var n=e.querySelector(".".concat(t.name,"-error"));t.classList.remove("popup__input_type_error"),n.textContent="",n.classList.remove("popup__error_visible")}function t(e,t){e.some((function(e){return!e.validity.valid}))?(t.setAttribute("disabled",!0),t.classList.add("popup__button_disabled")):(t.removeAttribute("disabled"),t.classList.remove("popup__button_disabled"))}function n(n){var o=Array.from(n.querySelectorAll(".popup__input")),r=n.querySelector(".popup__button");o.forEach((function(t){return e(n,t)})),t(o,r)}function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function r(e){e.classList.remove("popup_is-opened"),document.addEventListener("keydown",c)}function c(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&r(t)}}function a(e){e.target.classList.contains("popup")&&r(e.target)}function u(e,t,n,r){var c=document.querySelector("#card-template").content.cloneNode(!0),a=c.querySelector(".card__image"),u=c.querySelector(".card__title"),i=c.querySelector(".card__like-button");return a.src=e.link,a.alt=e.name,u.textContent=e.name,i.addEventListener("click",(function(){i.classList.toggle("card__like-button_is-active")})),function(e){e.querySelector(".card__delete-button").addEventListener("click",(function(e){var t;null===(t=e.target.closest(".places__item"))||void 0===t||t.remove()}))}(c),a.addEventListener("click",(function(){t.src=e.link,t.alt=e.name,n.textContent=e.name,o(r)})),c}var i={baseUrl:"https://nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"3ec29521-859f-4293-af83-93da763723f5","Content-Type":"application/json"}};function s(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var l=document.querySelector(".places__list"),d=document.querySelector(".popup_type_edit"),p=document.querySelector(".popup_type_new-card"),f=document.querySelector(".profile__edit-button"),_=document.querySelector(".profile__add-button"),m=document.querySelectorAll(".popup__close"),v=document.querySelector(".popup_type_image"),y=v.querySelector(".popup__image"),h=v.querySelector(".popup__caption"),b=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),q=document.querySelector(".profile__image"),L=document.forms["edit-profile"],E=L.elements.name,k=L.elements.description,g=document.forms["new-place"],C=g.elements["place-name"],A=g.elements.link;fetch("".concat(i.baseUrl,"/users/me"),{headers:i.headers}).then(s).then((function(e){b.textContent=e.name,S.textContent=e.about,q.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){console.error("Ошибка при загрузке данных пользователя: ".concat(e))})),fetch("".concat(i.baseUrl,"/cards"),{headers:i.headers}).then(s).then((function(e){e.forEach((function(e){var t=u(e,y,h,v);l.append(t)}))})).catch((function(e){console.error("Ошибка при загрузке карточек: ".concat(e))})),f.addEventListener("click",(function(){E.value=b.textContent,k.value=S.textContent,n(L),o(d)})),L.addEventListener("submit",(function(e){var t;e.preventDefault(),(t={name:E.value,about:k.value},fetch("".concat(i.baseUrl,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify(t)}).then(s)).then((function(e){b.textContent=e.name,S.textContent=e.about,r(d)})).catch((function(e){console.error("Ошибка при обновлении данных профиля: ".concat(e))}))})),_.addEventListener("click",(function(){g.reset(),n(g),o(p)})),g.addEventListener("submit",(function(e){var t;e.preventDefault(),(t={name:C.value,link:A.value},fetch("".concat(i.baseUrl,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify(t)}).then(s)).then((function(e){var t=u(e,y,h,v);l.prepend(t),r(p)})).catch((function(e){console.error("Ошибка при добавлении новой карточки: ".concat(e))}))})),m.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return r(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",a)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(o){o.addEventListener("submit",(function(e){e.preventDefault()})),function(n){var o=Array.from(n.querySelectorAll(".popup__input")),r=n.querySelector(".popup__button");t(o,r),o.forEach((function(c){c.addEventListener("input",(function(){!function(t,n){n.validity.valid?e(t,n):function(e,t,n){var o=e.querySelector(".".concat(t.name,"-error"));t.classList.add("popup__input_type_error"),o.textContent=n,o.classList.add("popup__error_visible")}(t,n,n.validationMessage)}(n,c),t(o,r)}))}))}(o),o.addEventListener("reset",(function(){n(o)}))}))})();