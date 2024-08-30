//cart
document.getElementById("cart").onclick = function() {
    this.style.cursor = "pointer";
    window.location.href = "/App-Archers_030/watches/cart.html"
}
const data = {
    "products": [{
            "series": "Privia",
            "model": "PX-S7000BK",
            "price": "₹1,99,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S1BK/assets/CT-S1BK_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "Celviano",
            "model": "AP-710",
            "price": "₹1,85,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S200RD/assets/CT-S200RD_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "CDP",
            "model": "CDP-S150",
            "price": "₹45,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S200WE/assets/CT-S200WE_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "LK",
            "model": "LK-S250",
            "price": "₹15,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S400/assets/CT-S400_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "CT-S",
            "model": "CT-S300",
            "price": "₹8,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/sa-8/sa-80/assets/sa-80-img01.png.transform/product-panel/image.png",
            "isFavourite": true
        },
        {
            "series": "Privia",
            "model": "PX-870",
            "price": "₹1,49,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/sa-8/sa-81/assets/sa-81-img01.png.transform/product-panel/image.png",
            "isFavourite": false
        },
        {
            "series": "Celviano",
            "model": "GP-510",
            "price": "₹2,59,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PXS/px-s7000bk/assets/px-s7000bk-main01.png.transform/product-panel/image.png",
            "isFavourite": true
        },
        {
            "series": "CDP",
            "model": "CDP-S350",
            "price": "₹55,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PXS/px-s7000we/assets/px-s7000we-main01.png.transform/product-panel/image.png",
            "isFavourite": false
        },
        {
            "series": "LK",
            "model": "LK-265",
            "price": "₹12,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PXS/px-s5000bk/assets/px-s5000-main01.png.transform/product-panel/image.png",
            "isFavourite": true
        },
        {
            "series": "CT-S",
            "model": "CT-S200",
            "price": "₹7,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/sa5/sa-50/assets/SA-50-img01.png.transform/product-panel/image.png",
            "isFavourite": false
        },
        {
            "series": "Privia",
            "model": "PX-160",
            "price": "₹89,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/ct-s1000v/assets/ct-s1000v-main01.png.transform/product-panel/image.png",
            "isFavourite": true
        },
        {
            "series": "Celviano",
            "model": "AP-470",
            "price": "₹1,75,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s360bk/assets/CDP-S360-main01.png.transform/product-panel/image.png",
            "isFavourite": false
        },
        {
            "series": "CDP",
            "model": "CDP-S100",
            "price": "₹35,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s160bk/assets/CDP-S160BK_main04.png.transform/product-panel/image.png",
            "isFavourite": true
        },
        {
            "series": "LK",
            "model": "LK-136",
            "price": "₹10,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s160rd/assets/CDP-S160RD.png.transform/product-panel/image.png",
            "isFavourite": false
        },
        {
            "series": "CT-S",
            "model": "CT-S1",
            "price": "₹9,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CD/CDP/cdp-s110bk/assets/CDP-S110BK_main04.png.transform/product-panel/image.png",
            "isFavourite": true
        },
        {
            "series": "Privia",
            "model": "PX-770",
            "price": "₹1,29,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PXS/px-s1100bk/assets/PX-S1100BK_main01.png.transform/product-panel/image.png",
            "isFavourite": false
        },
        {
            "series": "Celviano",
            "model": "AP-270",
            "price": "₹1,59,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/A/AP/AP2/AP-270BK/assets/AP-270BK_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "CDP",
            "model": "CDP-S350WE",
            "price": "₹57,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PXS/px-s3100bk/assets/PX-S3100BK_main01.png.transform/product-panel/image.png",
            "isFavourite": false
        },
        {
            "series": "LK",
            "model": "LK-280",
            "price": "₹14,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S1WE/assets/CT-S1WE_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "CT-S",
            "model": "CT-S410",
            "price": "₹11,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S1RD/assets/CT-S1RD_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "Privia",
            "model": "PX-160GD",
            "price": "₹91,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S300/assets/CT-S300_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "Celviano",
            "model": "AP-650M",
            "price": "₹2,05,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S100/assets/CT-S100_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "CDP",
            "model": "CDP-S360",
            "price": "₹59,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X700/assets/CT-X700_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "LK",
            "model": "LK-265K2",
            "price": "₹92,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/A/AP/AP4/AP-470BK/assets/AP-470BK_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "CT-S",
            "model": "CT-S500",
            "price": "₹1,10,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/A/AP/AP2/AP-270BK/assets/AP-270BK_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "Privia",
            "model": "PX-S1000",
            "price": "₹1,19,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/A/AP/AP2/AP-270BK/assets/AP-270BK_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "Celviano",
            "model": "GP-310",
            "price": "₹2,29,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PX7/PX-770BK/assets/PX-770BK_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "CDP",
            "model": "CDP-S150WE",
            "price": "₹47,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/P/PX/PX8/PX-870BK/assets/PX-870BK_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "LK",
            "model": "LK-170",
            "price": "₹11,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTK/CTK-2550/assets/CTK-2550_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "CT-S",
            "model": "CT-S190",
            "price": "₹9,495",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTK/CTK-3500/assets/CTK-3500_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "Privia",
            "model": "PX-350M",
            "price": "₹1,35,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/W/WK/WK6/WK-6600/assets/WK-6600_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "Celviano",
            "model": "AP-470BN",
            "price": "₹1,78,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-78/assets/SA-78_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "CDP",
            "model": "CDP-S100BK",
            "price": "₹38,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTK/CTK-240/assets/CTK-240_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "LK",
            "model": "LK-91TV",
            "price": "₹3,495",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA4/SA-46/assets/SA-46_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "CT-S",
            "model": "CT-S200BK",
            "price": "₹4,495",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-76/assets/SA-76_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "Privia",
            "model": "PX-160BK",
            "price": "₹2,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA4/SA-47/assets/SA-47_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "Celviano",
            "model": "AP-470WH",
            "price": "₹1,77,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-76/assets/SA-76_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "CDP",
            "model": "CDP-S360BK",
            "price": "₹6,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-77/assets/SA-77_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "LK",
            "model": "LK-44TV",
            "price": "₹2,495",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA4/SA-47/assets/SA-47_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "CT-S",
            "model": "CT-S1BK",
            "price": "₹3,495",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-77/assets/SA-77_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "Privia",
            "model": "PX-S3000",
            "price": "₹5,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/S/SA/SA7/SA-77/assets/SA-77_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "Celviano",
            "model": "GP-310BK",
            "price": "₹31,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/W/WK/WK7/WK-7600/assets/WK-7600_Seq1.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "CDP",
            "model": "CDP-S350BK",
            "price": "₹56,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X8000IN/assets/CT-X8000IN_F.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "LK",
            "model": "LK-265BK",
            "price": "₹14,495",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X870IN/assets/CT-X870IN_F.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        },
        {
            "series": "CT-S",
            "model": "CT-S400",
            "price": "₹11,495",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTX/CT-X9000IN/assets/CT-X9000IN_F.jpg.transform/product-panel/image.jpg",
            "isFavourite": true
        },
        {
            "series": "Privia",
            "model": "PX-870BK",
            "price": "₹5,995",
            "image": "https://www.casio.com/content/dam/casio/product-info/locales/in/en/emi/product/C/CT/CTS/CT-S195/assets/cts195_mainimage.jpg.transform/product-panel/image.jpg",
            "isFavourite": false
        }
    ]
};
let searchInput = document.getElementsByClassName("search-input")[0];

searchInput.onclick = function(event) {
    this.style.width = "400px";
    document.getElementById("links").style.display = "none";
    event.stopPropagation();
};

document.onclick = function() {
    searchInput.style.width = "initial";
    document.getElementById("links").style.display = "block";
};

function displayProducts(products) {
    const container = document.getElementById('product-container');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.model}">
            <h2>${product.series} - ${product.model}</h2>
            <p>${product.price}</p>
        `;

        container.appendChild(productCard);
    });
}

displayProducts(data.products);