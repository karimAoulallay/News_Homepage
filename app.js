//----------------- navigation

const navBtn = document.getElementById("navbar-btn");
const navMenu = document.getElementById("primary-navigation");

navBtn.addEventListener("click", (e) => {
  let isOpened = navBtn.getAttribute("aria-expanded") == "true";

  if (isOpened) {
    navBtn.setAttribute("aria-expanded", "false");
    // change button icon to burger
    navBtn.querySelector("img").src = "images/icon-menu.svg";

    // active overlay
    document.getElementById("overlay").classList.toggle("hidden");

    // stop page scrolling
    document.body.style.overflow = "visible";
  } else {
    navBtn.setAttribute("aria-expanded", "true");
    // change button icon to cross
    navBtn.querySelector("img").src = "images/icon-menu-close.svg";

    // deactive ovrelay
    document.getElementById("overlay").classList.toggle("hidden");

    // start page scrolling
    document.body.style.overflow = "hidden";
  }
});
