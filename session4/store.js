let mobile = [
  {
    productId: 1,
    brand: "Samsung",
    model: "Galaxy s25",
    image: "https://m.media-amazon.com/images/I/61D3EdXKG5L._AC_UY218_.jpg",
    descreption:
      "Samsung Galaxy S25 5G AI Smartphone (Silver Shadow clr, 12GB RAM, 256GB Storage), 50MP Camera with Galaxy AI",
    price: 800,
  },
  {
    productId: 2,
    brand: "Apple",
    model: "iphone 16",
    image:
      "https://m.media-amazon.com/images/I/61s1P+29yoL._AC_UY327_FMwebp_QL65_.jpg",
    descreption:
      "Apple iPhone 16 Pro Max 1 TB SSD : 5G mobile phone with camera , 4K 120 Dolby Vision and a big bow in battery life",
    price: 850,
  },
  {
    productId: 3,
    brand: "Redmagic",
    model: "10 pro",
    image:
      "https://m.media-amazon.com/images/I/61JRfJfAKpL._AC_UY327_FMwebp_QL65_.jpg",
    descreption:
      " REDMAGIC 10 Pro 144Hz Gaming Phone , 5G Android Smartphone , 16GB RAM + 512GB ROM , Snapdragon 8  Elite ",
    price: 700,
  },
  {
    productId: 4,
    brand: "Nothing",
    model: "3a",
    image:
      "https://m.media-amazon.com/images/I/71mGhWd34TL._AC_UL480_FMwebp_QL65_.jpg",
    descreption:
      "Nothing Phone (3a) Pro 256 GB - mobile phone with 50 MP periscope camera, 50 MP front camera - Grey and white",
    price: 580,
  },
];

const con = document.getElementById("container");

for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `
    <div class="item">
        <img src=${mobile[i].image} >
        <div class="data">
            <h1>${mobile[i].brand}</h1>
            <p class="desc">${mobile[i].descreption}</p>
            <p class="price">$ ${mobile[i].price}</p>
            <button onclick="cart(${mobile[i].productId})">Add to cart </button>
        </div>
    </div>
    `;
}

let arr = [];

function cart(proid) {
  if (localStorage.length == 0) {
    arr = [];
  }
  arr.push(mobile[proid - 1]);
  localStorage.setItem("cartdata", JSON.stringify(arr));
}
