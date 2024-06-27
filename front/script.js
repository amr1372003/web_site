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

document.addEventListener("DOMContentLoaded", function() {
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
        },"product3": {
            "name": "Product 3",
            "description": "Description for product 3.",
            "availability": "In stock",
            "image": "th.jpeg"
        },
        "product4": {
            "name": "Product 4",
            "description": "Description for product 2.",
            "availability": "Out of stock",
            "image": "th.jpeg"
        },"product5": {
            "name": "Product 5",
            "description": "Description for product 1.",
            "availability": "In stock",
            "image": "th.jpeg"
        },
        "product6": {
            "name": "Product 6",
            "description": "Description for product 2.",
            "availability": "Out of stock",
            "image": "th.jpeg"
        },"product7": {
            "name": "Product 7",
            "description": "Description for product 1.",
            "availability": "In stock",
            "image": "th.jpeg"
        },
        "product8": {
            "name": "Product 8",
            "description": "Description for product 2.",
            "availability": "Out of stock",
            "image": "th.jpeg"
        }

      // Add more products as needed
    };

    function getProductIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('product_id');
    }

    const productId = getProductIdFromUrl();
    const product = products[productId];

    if (product) {
        document.title = product.name + " - Product Details";
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-availability").textContent = product.availability;
        if (product.availability === "متوافر" || product.availability === "In stock") {
            document.getElementById("product-availability").style.color = "green";
        } else {
            document.getElementById("product-availability").style.color = "red";
        }
    } else {
        document.getElementById("product").innerHTML = "<p>Product not found</p>";
    }
});



/*new*/

/*end of new*/