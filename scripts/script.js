"use strict!";

// select elements
let btnHero = document.querySelector(".btn-hero");
let btnPortfolio = document.querySelector(".btn-portfolio");
let hero = document.querySelector(".hero");
let portfolio = document.querySelector(".portfolio");
let overlay = document.querySelector(".overlay");
let project = document.querySelectorAll(".project");
let modal = document.querySelectorAll(".modal");
let btnCloseModal = document.querySelectorAll(".close-modal");
let loadingScreen = document.querySelector(".loading-screen");
let profileDescription = document.querySelector(".profile-description");

// typing effect after loading screen
// starting conditions
let loadingScreenRemoved = false;
let profileDescriptionText = "Front-end ninja in training";
let counter = 0;

// remove loading screen
let removeLoadingScreen = function () {
  loadingScreen.remove();
  loadingScreenRemoved = true;

  // start typing effect
  if (loadingScreenRemoved) {
    function typingEffect() {
      // add second profession in the profile description
      if (counter < profileDescriptionText.length) {
        profileDescription.innerHTML += profileDescriptionText.charAt(counter);
        counter++;
        setTimeout(typingEffect, 100);
      }
    }
    setTimeout(typingEffect, 1000);
  }
};
setTimeout(removeLoadingScreen, 2000);

// scroll to hero section
btnHero.addEventListener("click", function () {
  hero.scrollIntoView();
});

// scroll to portfolio section
btnPortfolio.addEventListener("click", function () {
  portfolio.scrollIntoView();
});

// view the modals
for (let i = 0; i < modal.length; i++) {
  // function for opening modals
  let openModal = function () {
    modal[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  // function for closing modals
  let closeModal = function () {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  };

  // when a project is clicked
  project[i].addEventListener("click", openModal);

  // when the close button in a modal is clicked
  btnCloseModal[i].addEventListener("click", closeModal);

  // when the area outside a modal is clicked
  overlay.addEventListener("click", closeModal);

  // when the escape key is pressed
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}
