const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://www.casio.com/content/casio/locales/in/en/products/watches/gshock/jcr:content/root/responsivegrid/container/product_panel_list_f.products.json";
const baseUrl = "https://www.casio.com";

fetch(proxyUrl + targetUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data && data.data && Array.isArray(data.data)) {
            const products = data.data;
            displayProducts(products);
        } else {
            console.error("Unexpected data format", data);
        }
    })
    .catch(error => console.error("Error fetching data:", error));

function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
    
    products.forEach(product => {
        if (product.productAssets && product.productAssets.path) {
            const card = document.createElement("div");
            card.className = "card";

            // Update product image path
            const imageUrl = baseUrl + product.productAssets.path;

            // Create card content
            card.innerHTML = `
                <img src="${imageUrl}" alt="${product.productDisplayName}">
                <h2>${product.productDisplayName}</h2>
                <p>${product.productDescription || "No description available."}</p>
                <div class="price">Price: ${product.price ? product.price : "N/A"}</div>
            `;

            productContainer.appendChild(card);
        }
    });
}
