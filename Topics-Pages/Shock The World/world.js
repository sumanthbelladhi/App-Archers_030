
// Image Slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let interValid = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        interValid = setInterval(nextSlide, 5000); // Changed nextSlide to nextSlide1
    }
}

// Slider Function
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

// Previous
function prevSlide() {
    slideIndex--; // Corrected from increment to decrement
    showSlide(slideIndex);
}

// Next
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// ----------------------------------------


// JavaScript for the second carousel with sliding effect

const slides2 = document.querySelectorAll(".slides2 img");
const slidesContainer2 = document.querySelector(".slides2");
let slideIndex2 = 0;
let interValid2 = null;

document.addEventListener("DOMContentLoaded", initializeSlider2);

function initializeSlider2() {
    if (slides2.length > 0) {
        updateSlidePosition2();
        interValid2 = setInterval(nextSlide2, 3000);
    }
}

function updateSlidePosition2() {
    slidesContainer2.style.transform = `translateX(-${slideIndex2 * 100}%)`;
}

// Previous slide function
function prevSlide2() {
    slideIndex2--;
    if (slideIndex2 < 0) {
        slideIndex2 = slides2.length-1;
    }
    updateSlidePosition2();
}

// Next slide function
function nextSlide2() {
    slideIndex2++;
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0; 
    }
    updateSlidePosition2();
}
// ----------------------------------------


// JavaScript for the second carousel with sliding effect

const slides3 = document.querySelectorAll(".slides3 img");
const slidesContainer3 = document.querySelector(".slides3");
let slideIndex3 = 0;
let interValid3 = null;

document.addEventListener("DOMContentLoaded", initializeSlider3);

function initializeSlider3() {
    if (slides3.length > 0) {
        updateSlidePosition3();
        interValid3 = setInterval(nextSlide3, 3000);
    }
}

function updateSlidePosition3() {
    slidesContainer3.style.transform = `translateX(-${slideIndex3 * 100}%)`;
}

// Previous slide function
function prevSlide3() {
    slideIndex3--;
    if (slideIndex3 < 0) {
        slideIndex3 = slides3.length-1;
    }
    updateSlidePosition2();
}

// Next slide function
function nextSlide3() {
    slideIndex3++;
    if (slideIndex3 >= slides3.length) {
        slideIndex3 = 0; 
    }
    updateSlidePosition3();
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const links = document.getElementById('links');
    let isMenuVisible = false;

    hamburger.addEventListener('click', function () {
        if (isMenuVisible) {
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            links.classList.add('remove');
            links.classList.remove('show');
            isMenuVisible = false;
        } else {
            hamburger.innerHTML = '<i class="fa-solid fa-xmark fa-lg"></i>';
            links.classList.remove('remove');
            links.classList.add('show');
            isMenuVisible = true;
        }
    });
});
