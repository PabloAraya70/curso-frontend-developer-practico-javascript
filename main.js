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
const cardsContainer = document.querySelector('.cards-container');
const productDetailx = document.querySelector('.product-detailx');
const productDetailClose = document.querySelector('.product-detail-close');
const productList = [];

addProduct();
renderProducts(productList);

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleproductDetail);
productDetailClose.addEventListener('click', hideProductDetailx)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  productDetail.classList.add("inactive");
  productDetailx.classList.add("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add("inactive");
    productDetailx.classList.add("inactive");
  }

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailx.classList.add("inactive");
}

function renderProducts (arr) {
    for (product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const img = document.createElement("img");
        img.setAttribute("src", product.image);
        img.setAttribute("alt", product.name);
        img.addEventListener("click", showproductDetailx);
        productCard.appendChild(img);
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        productCard.appendChild(productInfo);
        const productInfoDiv = document.createElement("div");
        productInfo.appendChild(productInfoDiv);
        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerText = "$" + product.price;
        productInfoDiv.appendChild(productInfoPrice);
        const productInfoName = document.createElement("p");
        productInfoName.innerText = product.name;
        productInfoDiv.appendChild(productInfoName);
        const productInfoFigure = document.createElement("figure");
        productInfo.appendChild(productInfoFigure);
        const productInfoFigureImg = document.createElement("img");
        productInfoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
        productInfoFigure.appendChild(productInfoFigureImg);
        
        cardsContainer.appendChild(productCard)
    }    
}

function addProduct() {
    for (let i = 0; i < 10; i++) {
        productList.push({
            name: "Bike" + i,
            price: 120 + i,
            image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        });
    }
}

function showproductDetailx() {
    productDetailx.classList.remove('inactive');
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetail.classList.add("inactive");
}

function hideProductDetailx() {
    productDetailx.classList.add('inactive');
}