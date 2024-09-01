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
    {
      id: "p3",
      series: "CDP",
      model: "CDP-S150",
      price: "₹45,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S200WE/assets/CT-S200WE_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "An entry-level digital piano with a compact design, a range of sounds, and easy-to-use features for beginners.",
    },
    {
      id: "p4",
      series: "LK",
      model: "LK-S250",
      price: "₹15,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S400/assets/CT-S400_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A lighted keyboard suitable for beginners with educational features, making learning piano fun and interactive.",
    },
    {
      id: "p5",
      series: "CT-S",
      model: "CT-S300",
      price: "₹8,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/sa-8/sa-80/assets/sa-80-img01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A compact and affordable keyboard with a variety of sounds and rhythms, ideal for home use and practice.",
    },
    {
      id: "p6",
      series: "Privia",
      model: "PX-870",
      price: "₹1,49,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/sa-8/sa-81/assets/sa-81-img01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A digital piano with realistic piano feel, high-quality sound, and an elegant design suitable for any setting.",
    },
    {
      id: "p7",
      series: "Celviano",
      model: "GP-510",
      price: "₹2,59,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PXS/px-s7000bk/assets/px-s7000bk-main01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A high-end digital grand piano offering an authentic grand piano experience with premium sound and features.",
    },
    {
      id: "p8",
      series: "CDP",
      model: "CDP-S350",
      price: "₹55,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PXS/px-s7000we/assets/px-s7000we-main01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A versatile digital piano with a wide range of sounds, suitable for both beginners and advanced players.",
    },
    {
      id: "p9",
      series: "LK",
      model: "LK-265",
      price: "₹12,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s160rd/assets/CDP-S160RD.png.transform/main-visual-sp/image.png",
      isFavourite: false,
      description:
        "An educational keyboard with light-up keys and built-in songs, designed to make learning piano engaging and effective.",
    },
    {
      id: "p10",
      series: "CT-S",
      model: "CT-S200",
      price: "₹7,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/sa-5/sa-50/assets/SA-50-img01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A beginner-friendly keyboard with a compact design and essential features, perfect for new players and casual use.",
    },
    {
      id: "p11",
      series: "Privia",
      model: "PX-160",
      price: "₹89,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/ct-s1000v/assets/ct-s1000v-main01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A digital piano known for its high-quality sound, authentic feel, and durability, ideal for both practice and performance.",
    },
    {
      id: "p12",
      series: "Celviano",
      model: "AP-470",
      price: "₹1,75,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s360bk/assets/CDP-S360-main01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A premium digital piano with advanced features, offering a grand piano sound and a luxurious design.",
    },
    {
      id: "p13",
      series: "CDP",
      model: "CDP-S100",
      price: "₹35,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s160bk/assets/CDP-S160BK_main04.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A compact and affordable digital piano with a variety of sounds, perfect for beginners and home practice.",
    },
    {
      id: "p14",
      series: "LK",
      model: "LK-136",
      price: "₹10,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s160rd/assets/CDP-S160RD.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A lighted keyboard with educational features and a variety of sounds, designed for easy learning and practice.",
    },
    {
      id: "p15",
      series: "CT-S",
      model: "CT-S1",
      price: "₹9,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s110bk/assets/CDP-S110BK_main04.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A modern keyboard with a compact design and a range of sound options, great for home use and practice.",
    },
    {
      id: "p16",
      series: "Privia",
      model: "PX-770",
      price: "₹1,29,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PXS/px-s1100bk/assets/PX-S1100BK_main01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A stylish digital piano with an authentic feel, rich sound, and advanced features for a premium playing experience.",
    },
    {
      id: "p17",
      series: "Celviano",
      model: "AP-270",
      price: "₹1,59,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s150bk/assets/CDP-S150BK_main01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A digital piano with a realistic grand piano sound and feel, designed for both performance and practice.",
    },
    {
      id: "p18",
      series: "CDP",
      model: "CDP-S150",
      price: "₹45,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PXS/px-s3100bk/assets/px-s3100bk-main01.png.transform/product-panel/image.png",
      isFavourite: false,
      description:
        "A versatile digital piano with a wide range of sounds and a compact design, suitable for various playing styles.",
    },

    {
      id: "p19",
      series: "LK",
      model: "LK-170",
      price: "₹11,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTK/CTK-2550/assets/CTK-2550_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A versatile digital piano with a wide range of sounds and a compact design, suitable for various playing styles.",
    },
    {
      id: "p20",
      series: "CT-S",
      model: "CT-S190",
      price: "₹9,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTK/CTK-3500/assets/CTK-3500_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A versatile digital piano with a wide range of sounds and a compact design, suitable for various playing styles.",
    },
    {
      id: "p21",
      series: "Privia",
      model: "PX-350M",
      price: "₹1,35,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s160rd/assets/CDP-S160RD.png.transform/main-visual-sp/image.png",
      isFavourite:false,
      description:
        "A versatile digital piano with a wide range of sounds and a compact design, suitable for various playing styles.",
    },
    {
      id: "p22",
      series: "Celviano",
      model: "AP-470BN",
      price: "₹1,78,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-78/assets/SA-78_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A versatile digital piano with a wide range of sounds and a compact design, suitable for various playing styles.",
    },
    {
      id: "p23",
      series: "CDP",
      model: "CDP-S100BK",
      price: "₹38,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTK/CTK-240/assets/CTK-240_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A versatile digital piano with a wide range of sounds and a compact design, suitable for various playing styles.",
    },
    {
      id: "p24",
      series: "LK",
      model: "LK-91TV",
      price: "₹3,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA4/SA-46/assets/SA-46_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A basic lighted keyboard suitable for beginners with a simple interface and essential features for learning.",
    },
    {
      id: "p25",
      series: "CT-S",
      model: "CT-S200BK",
      price: "₹4,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-76/assets/SA-76_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A compact keyboard with a range of sounds and rhythms, ideal for beginners and home practice.",
    },
    {
      id: "p26",
      series: "Privia",
      model: "PX-160BK",
      price: "₹2,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA4/SA-47/assets/SA-47_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A digital piano with high-quality sound and a realistic feel, designed for beginner to intermediate players.",
    },
    {
      id: "p27",
      series: "Celviano",
      model: "AP-470WH",
      price: "₹1,77,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-76/assets/SA-76_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A premium digital piano with an elegant white finish, offering exceptional sound quality and advanced features.",
    },
    {
      id: "p28",
      series: "CDP",
      model: "CDP-S360BK",
      price: "₹6,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-77/assets/SA-77_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A compact and affordable digital piano with a range of sound options, suitable for home practice.",
    },
    {
      id: "p29",
      series: "LK",
      model: "LK-44TV",
      price: "₹2,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA4/SA-47/assets/SA-47_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A basic lighted keyboard with essential features for beginners, making learning piano engaging and accessible.",
    },
    {
      id: "p30",
      series: "CT-S",
      model: "CT-S1BK",
      price: "₹3,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-77/assets/SA-77_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A modern and compact keyboard with a range of sounds and a sleek design, perfect for both beginners and advanced players.",
    },
    {
      id: "p31",
      series: "Privia",
      model: "PX-S3000",
      price: "₹5,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-77/assets/SA-77_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A sophisticated digital piano with a wide range of sounds and features, designed for musicians looking for versatility and quality.",
    },
    {
      id: "p32",
      series: "Celviano",
      model: "GP-310BK",
      price: "₹31,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/W/WK/WK7/WK-7600/assets/WK-7600_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A high-end digital grand piano offering premium sound quality and an authentic grand piano experience.",
    },
    {
      id: "p33",
      series: "CDP",
      model: "CDP-S350BK",
      price: "₹56,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X8000IN/assets/CT-X8000IN_F.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A versatile digital piano with a wide range of features and sounds, ideal for various playing styles and practice.",
    },
    {
      id: "p34",
      series: "LK",
      model: "LK-265BK",
      price: "₹14,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X870IN/assets/CT-X870IN_F.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A comprehensive lighted keyboard with advanced features, suitable for learners and enthusiasts who want a more interactive experience.",
    },
    {
      id: "p35",
      series: "CT-S",
      model: "CT-S400",
      price: "₹11,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X9000IN/assets/CT-X9000IN_F.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A compact and powerful keyboard with a range of sounds and features, ideal for home use and practice.",
    },
    {
      id: "p36",
      series: "Privia",
      model: "PX-870BK",
      price: "₹5,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S195/assets/cts195_mainimage.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A high-quality digital piano offering an authentic piano experience with advanced features and a modern design.",
    },
    {
      id: "p37",
      series: "CT-S",
      model: "CT-S1BK",
      price: "₹3,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-77/assets/SA-77_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A compact keyboard with a modern design and essential features for beginners. Ideal for practice and learning.",
    },
    {
      id: "p38",
      series: "Privia",
      model: "PX-S3000",
      price: "₹5,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-77/assets/SA-77_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A versatile digital piano offering a range of sounds and features, suitable for various musical styles and advanced practice.",
    },
    {
      id: "p39",
      series: "Celviano",
      model: "GP-310BK",
      price: "₹31,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/W/WK/WK7/WK-7600/assets/WK-7600_Seq1.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A high-quality digital grand piano providing an authentic grand piano experience with superior sound and touch.",
    },
    {
      id: "p40",
      series: "CDP",
      model: "CDP-S350BK",
      price: "₹56,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X8000IN/assets/CT-X8000IN_F.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A feature-rich digital piano with a wide array of sounds and functionality, designed for both home use and performance.",
    },
    {
      id: "p41",
      series: "LK",
      model: "LK-265BK",
      price: "₹14,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X870IN/assets/CT-X870IN_F.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A lighted keyboard with advanced features and a range of sounds, perfect for both beginners and enthusiasts looking for interactive learning.",
    },
    {
      id: "p42",
      series: "CT-S",
      model: "CT-S400",
      price: "₹11,495",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X9000IN/assets/CT-X9000IN_F.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A powerful and compact keyboard with an extensive range of sounds and features, suitable for home practice and performance.",
    },
    {
      id: "p43",
      series: "Privia",
      model: "PX-870BK",
      price: "₹5,995",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S195/assets/cts195_mainimage.jpg.transform/product-panel/image.jpg",
      isFavourite: false,
      description:
        "A high-performance digital piano offering realistic sound and touch, designed for those seeking an authentic piano experience.",
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
