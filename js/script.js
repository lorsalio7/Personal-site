"use strict";

var themeToggleButton = document.querySelector(".theme-button");
var toggleSwitchSlider = document.querySelector(".theme-button__switch-slider");
var page = document.querySelector("html");
var darkThemeUse = localStorage.getItem("dark-theme");

if (darkThemeUse === "true") {
  setDarkTheme();
} else {
  setLightTheme();
}

themeToggleButton.addEventListener("click", switchTheme);

function switchTheme() {
  darkThemeUse = localStorage.getItem("dark-theme");

  if (darkThemeUse !== "true") {
    setDarkTheme();
  } else if (darkThemeUse === "true") {
    setLightTheme();
  }
}

function setDarkTheme() {
  page.classList.add("dark-theme");
  toggleSwitchSlider.classList.add("theme-button__switch-slider--active");
  localStorage.setItem("dark-theme", "true");
}

function setLightTheme() {
  page.classList.remove("dark-theme");
  toggleSwitchSlider.classList.remove("theme-button__switch-slider--active");
  localStorage.setItem("dark-theme", "false");
} // =====================================================


var technologySlider = document.querySelector(".technology-slider");

if (technologySlider) {
  technologySlider = new Splide(technologySlider, {
    type: "loop",
    arrows: false,
    mediaQuery: 'max',
    autoScroll: {
      speed: 1
    },
    perPage: 5,
    pagination: false,
    breakpoints: {
      600: {
        perPage: 4
      },
      425: {
        perPage: 3
      }
    }
  }).mount(window.splide.Extensions);
} // =================================================


var prevNextReverse = document.querySelector(".prev-next__article--reverse");
var prevNextContainer = document.querySelector(".prev-next__container");

if (prevNextContainer) {
  if (prevNextContainer.children.length === 1 && prevNextReverse) {
    prevNextReverse.style.borderBottom = "none";
  }
}

var footerYear = document.querySelector(".main-footer__year");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
} // =================================================