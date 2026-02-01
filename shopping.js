
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        category: "Electronics",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        name: "Cotton T-Shirt",
        price: 499,
        category: "Fashion",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        name: "Coffee Mug",
        price: 349,
        category: "Home",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        name: "JEE Mains",
        price: 1999,
        category: "Books",
        rating: 4.7,
        image: "https://tse3.mm.bing.net/th/id/OIP.M3glLUPQ44VAX13LpvkHbQHaDI?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 5,
        name: "Smart Watch",
        price: 3999,
        category: "Electronics",
        rating: 3.9,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        name: "Sneakers",
        price: 1299,
        category: "Fashion",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 7,
        name: "Desk Lamp",
        price: 899,
        category: "Home",
        rating: 4.1,
        image: "https://tse1.mm.bing.net/th/id/OIP.WjKvFZrdHqiVro3YamlyRwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 8,
        name: "Mouse",
        price: 1499,
        category: "Electronics",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 9,
        name: "Sports Shoe",
        price: 2499,
        category: "Fashion",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 10,
        name: "Harry Potter Books",
        price: 2499,
        category: "Books",
        rating: 4.3,
        image: "https://th.bing.com/th/id/OIP.KlmVmdmIkssNM7DlTUowtQHaFT?w=259&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 11,
        name: "Apple Monitor",
        price: 24999,
        category: "Electronics",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 12,
        name: "Jacket",
        price: 2999,
        category: "Fashion",
        rating: 4.5,
        image: "https://i5.walmartimages.com/seo/Manxivoo-Winter-Jackets-for-Men-Men-s-Winter-Jacket-Lined-Thick-Jackets-Removable-Hood-Work-Coat-with-Cargo-Pockets-Mens-Jacket-Khaki-XL_7408578a-4612-4b21-9a9e-61704662e854.f7e7192656646c5a1fc2edcdf677344d.jpeg"
    },
    {
        id: 13,
        name: "Throw Pillow",
        price: 599,
        category: "Home",
        rating: 3.8,
        image: "https://i5.walmartimages.com/asr/1da8e77a-5b81-4759-bd9f-2ec038323aca_1.0116914b8287717e0b1a67f1042e187e.jpeg"
    },
    {
        id: 14,
        name: "The Psychology of Money Book",
        price: 650,
        category: "Books",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 15,
        name: "JBL Speaker",
        price: 2999,
        category: "Electronics",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 16,
        name: "Sunglasses",
        price: 799,
        category: "Fashion",
        rating: 3.7,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 17,
        name: "Plant Pot",
        price: 450,
        category: "Home",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 18,
        name: "Story Book",
        price: 599,
        category: "Books",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 19,
        name: "Laptop Stand",
        price: 1299,
        category: "Electronics",
        rating: 4.4,
        image: "https://www.themodestman.com/wp-content/uploads/2023/06/Brocoon-Laptop-Stand-1024x1024.jpg"
    },
    {
        id: 20,
        name: "Wall Clock",
        price: 999,
        category: "Home",
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 21,
        name: "ipad",
        price: 28999,
        category: "Electronics",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 22,
        name: "Wool Scarf",
        price: 799,
        category: "Fashion",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 23,
        name: "Glass Vase",
        price: 649,
        category: "Home",
        rating: 4.5,
        image: "https://i.pinimg.com/736x/37/29/bf/3729bf9ea8db302be53fbca78a2225b5.jpg"
    },
    {
        id: 24,
        name: "Mystery Novel KIT",
        price: 1350,
        category: "Books",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 25,
        name: "DSLR Camera",
        price: 35000,
        category: "Electronics",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 26,
        name: "Leather Belt",
        price: 899,
        category: "Fashion",
        rating: 4.1,
        image: "https://tse3.mm.bing.net/th/id/OIP.FWlZFVpYskXvKAzBJCKE3gHaEm?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 27,
        name: "Blanket",
        price: 1499,
        category: "Home",
        rating: 4.7,
        image: "https://i5.walmartimages.com/seo/Bedding-Fleece-Blanket-Queen-Size-90x90-inch-Luxury-Bed-Blanket-Fuzzy-Soft-Blanket-Microfiber-Camel_ac49996e-ec03-47ce-9fc7-083916db188c.0693d53bb702a6f226409047d26c5571.jpeg?odnHeight=424&odnWidth=424&odnBg=FFFFFF"
    },
    {
        id: 28,
        name: "Note Book",
        price: 499,
        category: "Books",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 29,
        name: "Drone Camera",
        price: 15999,
        category: "Electronics",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 30,
        name: "Hat",
        price: 599,
        category: "Fashion",
        rating: 4.2,
        image: "https://th.bing.com/th/id/OIP.nQ_JXC6GQrIk8Cl5Qk0abwHaE8?w=295&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    }
];

const productContainer = document.getElementById('productContainer');
const categoryFilter = document.getElementById('categoryFilter');
const sortOrder = document.getElementById('sortOrder');

function renderProducts(data) {
    productContainer.innerHTML = ""; 

    if (data.length === 0) {
        productContainer.innerHTML = "<p>No products found.</p>";
        return;
    }

    data.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3>${product.name}</h3>
                <div class="product-details">
                    <span class="price">₹${product.price.toLocaleString('en-IN')}</span>
                    <span class="rating">★ ${product.rating}</span>
                </div>
            </div>
        `;
        productContainer.appendChild(card);
    });
}

function updateDisplay() {
    let filteredData = [...products];

    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        filteredData = filteredData.filter(product => product.category === selectedCategory);
    }

    const selectedSort = sortOrder.value;

    if (selectedSort === 'price-asc') {
        filteredData.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price-desc') {
        filteredData.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'name-asc') {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === 'name-desc') {
        filteredData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (selectedSort === 'rating-asc') {
        filteredData.sort((a, b) => a.rating - b.rating);
    } else if (selectedSort === 'rating-desc') {
        filteredData.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(filteredData);
}

categoryFilter.addEventListener('change', updateDisplay);
sortOrder.addEventListener('change', updateDisplay);

renderProducts(products);