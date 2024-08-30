// Image Slider

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

//cart
document.getElementById("cart").onclick = function() {
    this.style.cursor = "pointer";
    window.location.href = "/App-Archers_030/watches/cart.html"
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