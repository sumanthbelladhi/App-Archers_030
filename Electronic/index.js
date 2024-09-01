const data = {
  products: [
    {
      id: "p1",
      series: "Privia",
      model: "PX-S7000BK",
      price: "₹1,99,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S1BK/assets/CT-S1BK_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A premium digital piano with high-quality sound, a sleek design, and advanced features for professional musicians.",
    },
    {
      id: "p2",
      series: "Celviano",
      model: "AP-710",
      price: "₹1,85,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S200RD/assets/CT-S200RD_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A sophisticated digital piano featuring grand piano sound, rich tones, and advanced functionality for serious pianists.",
    },
  ],
};

// Parse price function
function parsePrice(price) {
  return parseFloat(price.replace(/₹|,/g, ''));
}

// Sort products based on selected criteria
function sortProducts() {
  const sortValue = document.getElementById('sort').value;

  if (sortValue === 'price-asc') {
    data.products.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortValue === 'price-desc') {
    data.products.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  displayProducts();
}

// Display products in the product container
function displayProducts() {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';

  data.products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.model;

    const productDetails = document.createElement('div');
    productDetails.className = 'details';

    const productName = document.createElement('h4');
    productName.textContent = product.model;

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;

    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);

    const favoriteIcon = document.createElement('div');
    favoriteIcon.className = 'favorite-icon';
    favoriteIcon.innerHTML = product.isFavourite
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-heart"></i>';
      favoriteIcon.onclick = (event) => {
        event.stopPropagation(); // Prevent click event from triggering the product click event
        toggleFavorite(product.id);
      };
  
      productCard.appendChild(productImage);
      productCard.appendChild(productDetails);
      productCard.appendChild(favoriteIcon);
  
      // Redirect to the product page on click
      productCard.addEventListener('click', () => {
        window.location.href = `product.html?id=${product.id}`;
      });

    productContainer.appendChild(productCard);
  });
}

// Toggle favorite status of a product
function toggleFavorite(productId) {
  const product = data.products.find(p => p.id === productId);
  product.isFavourite = !product.isFavourite;
  updateLocalStorage(product);
  displayProducts();
}

// Update localStorage with the new favorite status
function updateLocalStorage(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (product.isFavourite) {
    cart.push(product);
  } else {
    cart = cart.filter(p => p.id !== product.id);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

window.onload = displayProducts;
