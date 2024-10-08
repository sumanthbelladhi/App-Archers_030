import data from './fetch.js';
//cart

document.getElementById("cart").onclick = function() {
    this.style.cursor = "pointer";
    window.location.href = "./cart.html"
}

//search

let searchInput = document.getElementsByClassName("search-input")[0];

searchInput.onclick = function(event) {
    this.style.width = "300px";
    document.getElementById("links").style.display = "none";
    event.stopPropagation();
};

document.onclick = function() {
    searchInput.style.width = "initial";
    document.getElementById("links").style.display = "block";
};

console.log(data);
var flattenedArray;
var favData = [];

if (data && data.data && Array.isArray(data.data)) {
    const detailedproducts = data.data;
    console.log(detailedproducts);
    const updateddetailedProducts = detailedproducts.map(product => {
        if (product.productAssetList && product.productAssetList.path) {
            product.productAssetList.path = baseUrl + product.productAssets.path;
        }

        favData.push({ "product": product.productAssets, "id": product.index, "title": product.productName, "prices": product.dispPrice, "p": product.listPrice });

        return { "product": product.productAssetList, "id": product.index, "title": product.productName, "price": product.dispPrice };
    });
    console.log(updateddetailedProducts);
    flattenedArray = updateddetailedProducts.flat(Infinity);
    console.log(flattenedArray);
}

const url = new URL(window.location.href);
const id = Number(url.searchParams.get('id'));
const baseUrl = "https://www.casio.com";
var images;
var title;
var dispPrice;
let result = flattenedArray.filter(ele => ele.id == id)
result.forEach(ele => {
    images = ele.product;
    title = ele.title;
    dispPrice = ele.price;
})
favData = favData.filter(ele => ele.id === id)

let h = document.createElement("h1");
h.textContent = title;
let mrp = document.createElement("small")
mrp.textContent = "MRP";
let price = document.createElement("h3")
price.textContent = dispPrice;
let btn1 = document.createElement("button")
btn1.innerText = "Click To Buy"
let btn2 = document.createElement("button")
btn2.innerText = "Favourite"

btn2.onclick = function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    favData[0].product.path = "https://www.casio.com" + favData[0].product.path;
    if (!cart.some(item => item.id === id)) {
        cart.push(favData[0]);
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        alert("This item is already in your favorites.")
    }
    this.style.backgroundColor = "Black";
    this.style.color = "white";
    console.log('Button clicked, style changed');

}


let p1 = document.createElement("p")
p1.innerText = "Soak up the sparkle and shine of life at a summer beach resort with an all-white shimmery G-SHOCK."
let p2 = document.createElement("p")
p2.innerText = "We start with a pure white base and finish the dial and index marks in a silvery vapor deposition to make these watches shine like the sun reflecting off the ocean. "
let p3 = document.createElement("p")
p3.innerText = "A gleaming silvery fashion accessory to be adored — the perfect sun-kissed timepiece to get your summer started!"
document.getElementById("second").append(h, mrp, price, btn1, btn2, p1, p2, p3)


images.forEach(ele => {
    let img = document.createElement("img");
    ele.path = baseUrl + ele.path;
    img.src = ele.path
    document.getElementById("first").append(img)
});

let h1 = document.getElementById("hamburger");
let isMenuVisible = false;

h1.addEventListener("click", function() {
    if (isMenuVisible) {
        h1.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        document.getElementById("links").classList.add("remove");
        document.getElementById("links").classList.remove("show");

        isMenuVisible = false;
    } else {
        h1.innerHTML = `<i class="fa-solid fa-xmark fa-lg"></i>`;
        document.getElementById("links").classList.add("show");
        document.getElementById("links").classList.remove("remove");

        isMenuVisible = true;
    }
});