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


function updateFavicon() {
  var FAVICON_PNG = document.querySelector('link[type="image/png"]');
  var FAVICON_SVG = document.querySelector('link[type="image/svg+xml"]');
  var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkMode) {
    FAVICON_PNG.href = "/favicon-dark.png";
    FAVICON_SVG.href = "/favicon-dark.svg";
  } else {
    FAVICON_PNG.href = "/favicon-light.png";
    FAVICON_SVG.href = "/favicon-light.svg";
  }
} // Обновляем фавиконку при загрузке страницы


updateFavicon(); // Обновляем фавиконку при изменении темы
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

var mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
mediaQueryList.addListener(updateFavicon); // =====================================================

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
}

var postSliders = document.querySelectorAll(".post-slider");

if (postSliders[0]) {
  postSliders.forEach(function (slider) {
    slider = new Splide(slider, {
      arrowPath: "M27.6151 7.51706L39.4551 18.7517C40.1816 19.4411 40.1816 20.5589 39.4551 21.2483L27.6151 32.4829C26.8885 33.1724 25.7105 33.1724 24.984 32.4829C24.2575 31.7935 24.2575 30.6757 24.984 29.9863L33.648 21.7653H0V18.2346H33.648L24.984 10.0136C24.2575 9.32423 24.2575 8.20647 24.984 7.51706C25.7105 6.82765 26.8885 6.82765 27.6151 7.51706Z",
      breakpoints: {
        425: {
          arrows: false
        }
      }
    }).mount();
  });
} // =================================================


var cerificatesGallery = document.querySelector(".gallery-certificates");

if (cerificatesGallery) {
  baguetteBox.run(".gallery", {
    noScrollbars: true,
    fullScreen: false
  });
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


var toc = document.querySelector(".toc__navigation");

if (toc) {
  var currentURL = document.location.href.replace(/#.*$/, "");
  var tocLinks = toc.querySelectorAll(".toc__navigation a");

  for (var i = 0; i < tocLinks.length; i++) {
    var link = tocLinks[i];

    if (!link.getAttribute("href").match(/^#/)) {
      continue;
    }

    link.setAttribute("href", currentURL + link.getAttribute("href"));
  }
} // =================================================