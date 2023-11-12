let grid = document.querySelector(".products");
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{ void
    addElement(grid.json)});

function addElement(appendin, value){
    let div=document.createElement('div');
    div.className="item justify-self-center";
    
    let {image, title, category, price} = value;
    div.innerHTML = `<img src="$(image)" class="bg-cover imag" alt="img1">
    <div class="text-center py-3 ">
        <h1 class="text-lg title">$(title)</h1>
        <a href="#" class="block"><span class="text-sm text-red-500">$(Category)</span></a>
        <span class="block py-3">$ <span class="text-md">612.2</span></span>
        <button class="border-2 px-8 py-1 bg-pink-400  rounded-md text-white">Buy Now</button>
    </div>`
    
    appendin.appendChild(div);
}
