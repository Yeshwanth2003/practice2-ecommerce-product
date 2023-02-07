let nav = document.querySelector("nav");
let navButton = document.querySelector("#navButton");
let navClose = document.querySelector("#nav-close");
let cartButton = document.querySelector("#cartDiv");
let cartClose = document.querySelector("#cartClose");
let cartBox = document.querySelector("#cartBox");
let noOfItem = document.querySelector("#quantity");
let addCart = document.querySelector("#add");
let popCart = document.querySelector("#pop");
let cartBody = document.querySelector("#cartBody");
let noOfItemInCart = document.querySelector("#noOfItemInCart");
let imgDetailedview = document.querySelector("#imageDetailedViewMain");
let overallImg = document.querySelector("#overallImg");
let detailedImageViewClose = document.querySelector(".closeImageView");
let addToCart = document.querySelector("#addToCart");

(() => {
  imgDetailedview.appendChild(overallImg.cloneNode(true));
})();
let thumbniles = document.querySelectorAll("#thumbniles");
let displayImage = document.querySelectorAll("#displayImage");

const cartList = [];

let noOfItems = 0;
noOfItem.innerText = noOfItems;

addCart.onclick = () => {
  noOfItems++;
  noOfItem.innerText = noOfItems;
  noOfItemInCart.innerHTML = noOfItems;
  noOfItemInCart.classList.remove("is-cart-item-displayed");
};
popCart.onclick = () => {
  if (noOfItems == 0) {
    noOfItemInCart.classList.add("is-cart-item-displayed");
    return;
  }
  noOfItems--;
  noOfItem.innerText = noOfItems;
  noOfItemInCart.innerHTML = noOfItems;
};

function thumbnileOperation(event) {
  let src = event.target.src;
  displayImage[0].src = src;
  displayImage[1].src = src;

  for (var i = 0; i < thumbniles.length; i++) {
    thumbniles[i].classList.remove("thumbnile-choosen");
  }
  event.target.classList.add("thumbnile-choosen");
}

function cartHandler() {
  cartBox.classList.toggle("cartDisplay");
  if (cartList.length === 0) {
    let JSXnoItem = `<div class="cartNoItem">
                     <p>Your cart is empty.</p>
                     </div>`;

    cartBody.innerHTML = JSXnoItem;
  } else {
    let itemDiv = `<div id="itemDiv">`;
    cartList.forEach((elem) => {
      let list = `<div id="eachItem">
                      <img src=${elem.image} id="listImg">
                      <div id ="listDes">
                      <p id="listName">${elem.name}</p>
                      <p id="listPrice">${elem.noOfSelected}x${
        elem.price
      } <span>${"\u0024"}${elem.price * elem.noOfSelected}</span></p>
                      </div>
                      </div>`;
      itemDiv += list;
    });
    let button = `<div id="cartListButton"><button>Checkout</button></div></div>`;
    itemDiv += button;
    console.log(itemDiv);
    cartBody.innerHTML = itemDiv;
  }
}

function handleNavBar() {
  nav.classList.toggle("nav-hidden");
}

function handleDetailedImageView(element) {
  document
    .querySelector(".imageDetailedView")
    .classList.toggle("isImageDetailedViewDisplayed");
}

function addToCartFunction() {
  const obj = {
    image: displayImage[0].src,
    name: document.querySelector("#productHeading").innerText,
    noOfSelected: noOfItems,
    price: parseInt(document.querySelector("#cPrice").innerText.substring(1)),
  };
  if (obj.noOfSelected === 0) return;
  cartList.push(obj);
  cartBox.classList.add("cartDisplay");
}

for (var i = 0; i < thumbniles.length; i++) {
  thumbniles[i].addEventListener("click", thumbnileOperation);
}

cartButton.addEventListener("click", cartHandler);
cartClose.addEventListener("click", cartHandler);
navClose.addEventListener("click", handleNavBar);
navButton.addEventListener("click", handleNavBar);
detailedImageViewClose.addEventListener("click", handleDetailedImageView);
displayImage[0].addEventListener("click", handleDetailedImageView);
addToCart.addEventListener("click", addToCartFunction);
