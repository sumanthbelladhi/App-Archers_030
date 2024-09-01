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
p1.innerText = "Key Features"
let p2 = document.createElement("p")
p2.innerText = "- 10 + 2 digits"
let p3 = document.createElement("p")
p3.innerText = "- Multi-replay (Quick and easy recall of previously executed formulas for editing and re-execution)"
let p4 = document.createElement("p")
p4.innerText = "- Integration/differential calculations"
let p5 = document.createElement("p")
p5.innerText = "- Matrix and Vector calculations"
document.getElementById("second").append(h, mrp, price, btn1, btn2, p1, p2, p3, p4, p5)


images.forEach(ele => {
    let img = document.createElement("img");
    ele.path = baseUrl + ele.product;
    img.src = ele.path
    document.getElementById("first").append(img)
});