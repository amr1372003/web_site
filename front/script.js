


document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector('.toggle');
    const navItems = document.querySelectorAll('.nav-item');

    toggle.addEventListener('click', () => {
        navItems.forEach(item => item.classList.toggle('active'));
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(item => item.classList.remove('active'));
        });
    });

    const products = {
        "product1": {
            "name": "عمرو حسن",
            "availability": "متوافر",
            "description": "شنملايلام رمهعنصلا هكصمىرمه",
            "image": "th.jpeg"
        },
        "product2": {
            "name": "Product 2",
            "description": "Description for product 2.",
            "availability": "Out of stock",
            "image": "th.jpeg"
        },
        "product3": {
            "name": "Product 3",
            "description": "Description for product 3.",
            "availability": "In stock",
            "image": "th.jpeg"
        },
        "product4": {
            "name": "Product 4",
            "description": "Description for product 4.",
            "availability": "Out of stock",
            "image": "th.jpeg"
        },
        "product5": {
            "name": "Product 5",
            "description": "Description for product 5.",
            "availability": "In stock",
            "image": "th.jpeg"
        },
        "product6": {
            "name": "Product 6",
            "description": "Description for product 6.",
            "availability": "Out of stock",
            "image": "th.jpeg"
        },
        "product7": {
            "name": "Product 7",
            "description": "Description for product 7.",
            "availability": "In stock",
            "image": "th.jpeg"
        },
        "product8": {
            "name": "Product 8",
            "description": "Description for product 8.",
            "availability": "Out of stock",
            "image": "th.jpeg"
        }
    };

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        suggestions.innerHTML = '';

        if (query.length > 0) {
            suggestions.style.display = 'block';
            const filteredProducts = Object.keys(products).filter(key => products[key].name.toLowerCase().includes(query));
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(key => {
                    const product = products[key];
                    const suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('suggestion-item');
                    suggestionItem.textContent = product.name;
                    suggestionItem.addEventListener('click', () => {
                        const productId = key;
                        window.location.href = `product.html?product_id=${productId}`;
                    });
                    suggestions.appendChild(suggestionItem);
                });
            } else {
                const noResultItem = document.createElement('div');
                noResultItem.classList.add('suggestion-item');
                noResultItem.textContent = "لا يوجد منتج بهذا الاسم";
                suggestions.appendChild(noResultItem);
            }
        } else {
            suggestions.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !suggestions.contains(event.target)) {
            suggestions.style.display = 'none';
        }
    });

    function getProductIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('product_id');
    }

    const productId = getProductIdFromUrl();
    const product = products[productId];

    // Update product details only if the product is found
    if (product) {
        const productNameElement = document.getElementById("product-name");
        const productAvailabilityElement = document.getElementById("product-availability");
        const productDescriptionElement = document.getElementById("product-description");
        const productImageElement = document.getElementById("product-image");
        const productNotFoundElement = document.getElementById("product");

        if (productNameElement) {
            productNameElement.textContent = product.name;
        } else {
            console.error("Element with id 'product-name' not found.");
        }

        if (productAvailabilityElement) {
            productAvailabilityElement.textContent = product.availability;
            productAvailabilityElement.style.color = (product.availability === "متوافر" || product.availability === "In stock") ? "green" : "red";
        } else {
            console.error("Element with id 'product-availability' not found.");
        }

        if (productDescriptionElement) {
            productDescriptionElement.textContent = product.description;
        } else {
            console.error("Element with id 'product-description' not found.");
        }

        if (productImageElement) {
            productImageElement.src = product.image;
        } else {
            console.error("Element with id 'product-image' not found.");
        }

        document.title = product.name + " - Product Details";
    } else {
        // Handle case where product is not found
        if (productNotFoundElement) {
            productNotFoundElement.textContent = "Product not found";
        } else {
            console.error("Element with id 'product' not found.");
        }
    }
});
