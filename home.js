document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const links = document.getElementById('links');
    let isMenuVisible = false;

    hamburger.addEventListener('click', function() {
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


// JavaScript for the second carousel with sliding effect

const slides1 = document.querySelectorAll(".slides1 img");
const slidesContainer1 = document.querySelector(".slides1");
let slideIndex1 = 0;
let interValid1 = null;

document.addEventListener("DOMContentLoaded", initializeSlider1);

function initializeSlider1() {
    if (slides1.length > 0) {
        updateSlidePosition1();
        interValid1 = setInterval(nextSlide1, 3000);
    }
}

function updateSlidePosition1() {
    slidesContainer1.style.transform = `translateX(-${slideIndex1 * 100}%)`;
}

// Previous slide function
function prevSlide1() {
    slideIndex1--;
    if (slideIndex1 < 0) {
        slideIndex1 = slides1.length - 1;
    }
    updateSlidePosition1();
}

// Next slide function
function nextSlide1() {
    slideIndex1++;
    if (slideIndex1 >= slides1.length) {
        slideIndex1 = 0;
    }
    updateSlidePosition1();
}


//Second carousel effect

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
        slideIndex2 = slides2.length - 1;
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



//Third carousel effect

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
        slideIndex3 = slides3.length - 1;
    }
    updateSlidePosition3();
}

// Next slide function
function nextSlide3() {
    slideIndex3++;
    if (slideIndex3 >= slides3.length) {
        slideIndex3 = 0;
    }
    updateSlidePosition3();
}

// Fourth carousel------------------------------

const slides4 = document.querySelectorAll(".slides4 img");
let slideIndex4 = 0;
let interValid4 = null;

document.addEventListener("DOMContentLoaded", initializeSlider4);

function initializeSlider4() {
    if (slides4.length > 0) {
        slides4[slideIndex4].classList.add("displaySlide4");
        interValid4 = setInterval(nextSlide4, 3000);
    }
}

// Slider Function
function showSlide4(index4) {
    if (index4 >= slides4.length) {
        slideIndex4 = 0;
    } else if (index4 < 0) {
        slideIndex4 = slides4.length - 1;
    }
    slides4.forEach((slide4) => {
        slide4.classList.remove("displaySlide4");
    });
    slides4[slideIndex4].classList.add("displaySlide4");
}

// Previous
function prevSlide4() {
    slideIndex4--;
    showSlide4(slideIndex4);
}

// Next
function nextSlide4() {
    slideIndex4++;
    showSlide4(slideIndex4);
}


document.addEventListener('DOMContentLoaded', function() {
    let h1 = document.getElementById('hamburger');
    let isMenuVisible = false;

    h1.addEventListener('click', function() {
        if (isMenuVisible) {
            h1.innerHTML = '<i class="fa-solid fa-bars"></i>';
            document.getElementById('links').classList.add('remove');
            document.getElementById('links').classList.remove('show');
            isMenuVisible = false;
        } else {
            h1.innerHTML = '<i class="fa-solid fa-xmark fa-lg"></i>';
            document.getElementById('links').classList.add('show');
            document.getElementById('links').classList.remove('remove');
            isMenuVisible = true;
        }
    });
});