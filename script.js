// // Sample product data
// const products = [
//     { name: 'Laptop', category: 'electronics' },
//     { name: 'T-shirt', category: 'clothing' },
//     { name: 'Books', category: 'education' },
//     { name: 'Pen', category: 'education' },
//     // Add more products with different categories
// ];

// // Function to dynamically display products based on the selected category
// function filterProducts() {
//     const selectedCategory = document.getElementById('category').value;
//     const productListContainer = document.getElementById('product-list');

//     // Clear the existing product list
//     productListContainer.innerHTML = '';

//     // Filter and display products based on the selected category
//     if (selectedCategory === 'all') {
//         displayProducts(products);
//     } else {
//         const filteredProducts = products.filter(product => product.category === selectedCategory);
//         displayProducts(filteredProducts);
//     }
// }

// // Function to display products dynamically
// function displayProducts(productsToDisplay) {
//     const productListContainer = document.getElementById('product-list');

//     productsToDisplay.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.classList.add('bg-white', 'p-4', 'rounded-md', 'shadow-md');
//         productCard.innerHTML = `<h3 class="text-lg font-semibold mb-2">${product.name}</h3><p>Category: ${product.category}</p>`;
//         productListContainer.appendChild(productCard);
//     });
// }

// // Initial display of all products
// displayProducts(products);


let products ={
    data:[
        {
        productName: "HoneySHape Piller Candle",
        Category:"Piller Candle",
        price:"$20",
        image:"p1.webp",
        
        },
        {
        productName: "Birthday SParkeling Candle",
        Category:"Sainted Candle",
        price:"$20",
        image:"right.png",
        
        },
        {
        productName: "Beige Piller Candle",
        Category:"Tea light Candle",
        price:"$20",
        image:"sec 3.jpg",
        
        },
],
};
for(let i of products.data){
    //Creating card
    let card = document.createElement("div");
    card.classList.add("add", "i.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //conatiner
    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("productname");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
//price 
let price = document.createElement("h6");
price.innerText =i.price;
container.appendChild("$" + price);

    card.appendChild(e)
    document.getElementById("products").appendChild(card);
}