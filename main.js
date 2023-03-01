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

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}
