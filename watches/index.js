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

                return product;
            });

            console.log(updatedProducts);
        } else {
            console.error("Unexpected data format", data);
        }
    })
    .catch(error => console.error("Error fetching data:", error));