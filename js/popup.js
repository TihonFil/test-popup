let linkLogin = document.querySelector(".header__button");
let popupLogin = document.querySelector(".popup-write");
let closeLogin = document.querySelector(".popup-button__close");
let loginLogin = document.querySelector(".popup__name");
let emailLogin = document.querySelector(".popup__email");
let formLogin = document.querySelector(".popup-write__form");

let isStorageSupport = true;
let storage = "";

try {
   storage = localStorage.getItem("name");
} catch (err) {
   isStorageSupport = false;
}


linkLogin.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupLogin.classList.toggle("modal-show");

   if (storage) {
      loginLogin.value = storage;
      emailLogin.focus();
   } else {
      loginLogin.focus();
   }
});

closeLogin.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupLogin.classList.remove("modal-show");
   popupLogin.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      if (popupLogin.classList.contains("modal-show")) {
         evt.preventDefault();
         popupLogin.classList.remove("modal-show");
         popupLogin.classList.remove("modal-error");
      }
   }
});

formLogin.addEventListener("submit", function (evt) {
   if (!loginLogin.value || !emailLogin.value) {
      evt.preventDefault();
      popupLogin.classList.remove("modal-error");
      popupLogin.offsetWidth = popupLogin.offsetWidth;//хак, чтобы анимация ошибки отрабатывала несколько раз, если форма не валидна.
      popupLogin.classList.add("modal-error");
   } else {
      if (isStorageSupport) {
      localStorage.setItem("name", loginLogin.value);
      }
   }
});


