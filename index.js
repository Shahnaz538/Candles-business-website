
// Sample product data
const products = [
    { name: 'Natural Beeswax Candle', price: 5300, category: 'beeswaxcandle', image: 'c1_beeswaxCandle.jpeg' },
    { name: 'Woodwick Fireside Petite Candle', price: 1200, category: 'woodwick', image: 'woodwick_p3.webp' },
    { name: 'WoodWick', price: 4450, category: 'woodwick', image: 'Woodwick_p1.jpeg' },
    { name: 'Sweet Grass Farm | Soy Candle', price: 523.99, category: 'soycandle', image: 'c3 soy candle.webp' },
    { name: 'Birthday Sparkling candle', price: 250, category: 'Sparklers', image: 'c3.jpg' },
    { name: 'Luxury Scented Candle', price: 4999, category: 'ScentedCandle', image: 'Scented Candle2.webp' },
    { name: 'Honey candle 100% pure', price: 600, category: 'beeswaxcandle', image: 'c1_Honeycandles.jpeg' },
    { name: 'Ww Wood Wick Petal Harmony', price: 3999, category: 'woodwick', image: 'Woodwick_p2.jpeg' },
    { name: 'Trick Birthday candles | Re-light themselves', price: 1.5, category: 'trickcandle', image: 'trick.jpg' },
    { name: 'Sydney Hale Candle Mystical Flame', price: 2399, category: 'ScentedCandle', image: 'Scented Candle.png' },
    { name: 'Outdoor Citronella Candle Fields Serenity', price: 500, category: 'citronella', image: 'Citronella Candle.jpeg' },
    { name: 'Perfumed Gel Candle by Georgean', price: 2000, category: 'GelCandle', image: 'Gel Candle.jpeg' },
    { name: 'Floating Candle Tranquil Lotus  Breeze Radiance', price: 899, category: 'floatingCandle', image: 'Floating .jpg' },
    { name: 'Sparkeling Candle | set of 3 Orchid Glow', price: 360, category: 'Sparklers', image: 'sparklers.png' },
    { name: 'Spiced orange scented candle Dream Flicker', price: 399, category: 'ScentedCandle', image: 'Scented Candle3.jpg' },
    { name: 'Big Dipper Wax Works BessWax', price: 589, category: 'beeswaxcandle', image: 'Beeswax.jpeg' },
    { name: 'Magic Candles | Trick candles set', price: 399, category: 'trickcandle', image: 'c5.jpeg' },
    { name: 'Fresh Lemongrass Citronella | Natural insect repellant', price:1000, category: 'citronella', image: 'Citronella Candle.webp' },
    { name: 'Fresh collection scented candle Grove Essence', price: 900, category: 'ScentedCandle', image: 'Scented Candle4.jpeg' },
    { name: 'French Lavendar and Vanilla Woods Glow', price: 3500, category: 'citronella', image: 'Citronella Candle3.webp' },
    { name: 'Container candle | Large Glass Jar', price: 730, category: 'ContainerCandle', image: 'Container Candle.jpeg' },
    { name: 'Ocean Luxury Gel candle | Amber Serenity ', price: 1000, category: 'GelCandle', image: 'Gel candle.webp' },
    { name: 'Gel Candle Home Decor for indoor', price: 5000, category: 'GelCandle', image: 'Gel Candle.jpg' },
    { name: 'Beeswax Container candle with wodden lid', price: 738, category: 'ContainerCandle', image: 'Beeswax-Container-Candle.webp' },
    
    
];


function showAllCategories() {
    const productListContainer = document.getElementById('product-list');

    productListContainer.innerHTML = '';

    displayProducts(products);
}


function filterProducts(selectedCategory) {
    const productListContainer = document.getElementById('product-list');

    productListContainer.innerHTML = '';


    const filteredProducts = products.filter(product => product.category === selectedCategory);
    displayProducts(filteredProducts);
}


function displayProducts(productsToDisplay) {
    const productListContainer = document.getElementById('product-list');

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('bg-white', 'p-4', 'rounded-md', 'shadow-md', 'hover:opacity-20', 'transition-opacity', 'product-card', 'relative');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="mb-2 rounded-md  mx-auto h-72 w-84 imgh">
            <h3 class="text-lg text-[#305f72] mb-2" style="font-family:'Ubuntu', sans-serif">${product.name}</h3>
            <p class="text-[#D5AE61] font-bold" style="font-family:'Ubuntu', sans-serif">Rs.${product.price}</p>
            <div class="product-content >
            <a href="#" class="text-[#305F72] text-center absolute">
                <img src="eye.png" alt="" class="m-2 h-6 w-6">
                <a href="#"><img src="heart.png" alt="" class="m-2 h-5 w-5"></a>
            </a>
            </div>
        `;
        productListContainer.appendChild(productCard);
    });
}

displayProducts(products);
