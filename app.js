let list = document.querySelector('.list');
let cart = document.querySelector('.cart-card')
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');

openShopping.addEventListener('click', ()=>{
    // body.classList.add('active')
    cart.style.display='block'
})

closeShopping.addEventListener('click', ()=>{
    // body.classList.remove('active')
    cart.style.display='none'
})

let products = [
    {
        id:1,
        name :'product name 1',
        image:'bulb.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'comp.jpeg',
        price:3000
    },
    {
        id:1,
        name :'product name 1',
        image:'bulb.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'comp.jpeg',
        price:3000
    },
    {
        id:4,
        name :'product name 4',
        image:'scroll.jpeg',
        price:4000
    },
    {
        id:1,
        name :'product name 1',
        image:'bulb.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'comp.jpeg',
        price:3000
    },
    {
        id:1,
        name :'product name 1',
        image:'bulb.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'comp.jpeg',
        price:3000
    },
    {
        id:3,
        name :'product name 3',
        image:'comp.jpeg',
        price:3000
    },
    {
        id:4,
        name :'product name 4',
        image:'scroll.jpeg',
        price:4000
    },
    {
        id:1,
        name :'product name 1',
        image:'bulb.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'comp.jpeg',
        price:3000
    },
    {
        id:1,
        name :'product name 1',
        image:'bulb.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'comp.jpeg',
        price:3000
    },
]

function addProduct(){
    products.forEach((value, key)=>{
        let newDiv =document.createElement('div')
        newDiv.classList.add('item');
        newDiv.innerHTML=`
        <img src='images/${value.image}'/>
        <div class="title">${value.name}</div>
        <div class="price">Price: Ksh. ${value.price.toLocaleString()}</div>
        <div class="card-body">
            <button onclick="addToCart(${key})">Add to Cart</button>
        </div>
        `;
        list.appendChild(newDiv);
    })
}

addProduct()



