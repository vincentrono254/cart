let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Quartz waterproof",
    tag: "Quartzwaterproof",
    price: 12500,
    incart: 0,
  },
  {
    name: "Leather Strap",
    tag: "Leather Strap",
    price: 13000,
    incart: 0,
  },
  {
    name: "Deffrun A0546",
    tag: "greytsshirt",
    price: 22000,
    incart: 0,
  },
  {
    name: "Black Dial",
    tag: "BlackDial",
    price: 12000,
    incart: 0,
  },
  {
    name: "T-classic PRX",
    tag: "T-classicPRX",
    price: 25000,
    incart: 0,
  },
  {
    name: "Golden Chronograph",
    tag: "GoldenChronograph",
    price: 16700,
    incart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}
// local storage
function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}
function setItems(product) {}
onLoadCartNumbers();
