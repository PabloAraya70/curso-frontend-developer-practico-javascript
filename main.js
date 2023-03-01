// const menuEmail = document.getElementsByClassName("navbar-email");
// const desktopMenu = document.getElementsByClassName("desktop-menu");

// menuEmail.item(0).addEventListener("click", toggleDesktopMenu)

// function toggleDesktopMenu() {
//     if (desktopMenu.item(0).style.display == "block") {
//         desktopMenu.item(0).style.display = ""
//     } else {
//         desktopMenu.item(0).style.display = "block"
//     }
// }

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
  }