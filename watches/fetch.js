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
                return product.productAssets;
            });

            const flattenedArray = updatedProducts.flat(Infinity);

            console.log(flattenedArray);

        } else {
            console.error("Unexpected data format", data);
        }
    })
    .catch(error => console.error("Error fetching data:", error));