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
// navbar-shopping-cart  product-detail
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleproductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  productDetail.classList.add("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add("inactive");
  }

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}