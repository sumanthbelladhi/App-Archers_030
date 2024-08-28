<<<<<<< HEAD
=======

// Image Slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let interValid = null;


document.addEventListener("DOMContentLoaded" ,initializeSlider)
function initializeSlider(){
   if(slides.length > 0){
      slides[slideIndex].classList.add("displaySlide");
      interValid = setInterval(nextSlide,5000);
      // console.log(interValid)
   }
}
// Slider Function
function showSlide(index){
   if(index >= slides.length){
      slideIndex = 0;
   }else if(index < 0){
      slideIndex = slides.length - 1;
   }
   slides.forEach(slide =>{
      slide.classList.remove("displaySlide");
   });
   slides[slideIndex].classList.add("displaySlide")
}


//previous
function prevSlide(){
   // clearInterval(interValid)
   slideIndex++;
   showSlide(slideIndex)

}
//next
function nextSlide(){
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

//end second carousel
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://www.casio.com/content/casio/locales/in/en/products/watches/gshock/jcr:content/root/responsivegrid/container/product_panel_list_f.products.json";
const baseUrl = "https://www.casio.com";

fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => {
        if (data && data.data && Array.isArray(data.data)) {
            const products = data.data;

            const updatedProducts = products.map(product => {
                if (product.productAssets && product.productAssets.path) {
                    product.productAssets.path = baseUrl + product.productAssets.path;
                }

                if (product.productAssetList && Array.isArray(product.productAssetList)) {
                    product.productAssetList = product.productAssetList.map(asset => {
                        if (asset.path) {
                            asset.path = baseUrl + asset.path;
                        }
                        return asset;
                    });
                }

                return product.productAssetList;
            });

            console.log(updatedProducts);
        } else {
            console.error("Unexpected data format", data);
        }
    })
    .catch(error => console.error("Error fetching data:", error)
>>>>>>> ffd0fc75d6862e41b49eeaf4193b023207423a8f
