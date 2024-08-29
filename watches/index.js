const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let interValid = null;


document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        interValid = setInterval(nextSlide, 5000);
        // console.log(interValid)
    }
}
// Slider Function
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide")
}


//previous
function prevSlide() {
    // clearInterval(interValid)
    slideIndex++;
    showSlide(slideIndex)

}
//next
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex)

}

// for second carousel effect

// Image Slider
const slides1 = document.querySelectorAll(".slides1 img");
let slideIndex1 = 0;
let interValid1 = null;

document.addEventListener("DOMContentLoaded", initializeSlider1);

function initializeSlider1() {
    if (slides1.length > 0) {
        slides1[slideIndex1].classList.add("displaySlide1");
        interValid1 = setInterval(nextSlide1, 5000); // Changed nextSlide to nextSlide1
    }
}

// Slider Function
function showSlide1(index1) {
    if (index1 >= slides1.length) {
        slideIndex1 = 0;
    } else if (index1 < 0) {
        slideIndex1 = slides1.length - 1;
    }
    slides1.forEach((slide1) => {
        slide1.classList.remove("displaySlide1");
    });
    slides1[slideIndex1].classList.add("displaySlide1");
}

// Previous
function prevSlide1() {
    slideIndex1--; // Corrected from increment to decrement
    showSlide1(slideIndex1);
}

// Next
function nextSlide1() {
    slideIndex1++;
    showSlide1(slideIndex1);
}


// Images:

import data from './fetch.js';

const baseUrl = "https://www.casio.com";
var prices = [];

if (data && data.data && Array.isArray(data.data)) {
    const products = data.data;

    const updatedProducts = products.map(product => {
        if (product.productAssets && product.productAssets.path) {
            product.productAssets.path = baseUrl + product.productAssets.path;
        }
        prices.push(product.dispPrice)
        return { "product": product.productAssets, "id": product.index, "title": product.productName };
    });
    console.log(products);
    const flattenedArray = updatedProducts.flat(Infinity);
    console.log(flattenedArray);
    console.log(prices);
    display(flattenedArray)
}

function display(arr) {
    let container = document.getElementById("container");
    var i = 0;
    arr.forEach(ele => {
        let card = document.createElement("div");
        card.setAttribute("id", "card");

        card.onclick = function() {
            window.location.href = `./pageinfo.html?id=${ele.id}`
        }

        let New = document.createElement("div");
        New.className = "badge-new";
        New.innerText = "NEW";

        let favorite = document.createElement("div");
        favorite.className = "favorite-icon";
        favorite.innerHTML = `<i class="fa-regular fa-heart"></i>`;

        favorite.onclick = function() { favorite.innerHTML = `<i class="fa-solid fa-heart"></i>` }

        let img = document.createElement("img");
        img.src = ele.product.path;

        let brand = document.createElement("p");
        brand.innerText = "G-SHOCK";


        let title = document.createElement("h2");
        title.innerText = ele.title;



        let MRP = document.createElement("small")
        MRP.classList.add("mrp")
        MRP.innerText = "MRP"


        let price = document.createElement("small")
        price.innerText = prices[i]
        i += 1

        card.append(New, favorite, img, brand, title, MRP, price);
        container.append(card);
    });
}