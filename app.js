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
            <button onclick="addToCart('${value.image}','${value.name}', ${value.price})">Add to Cart</button>
        </div>
        `;
        list.appendChild(newDiv);
    })
}

addProduct()

// Initialize an empty shopping cart
const cartItem = [];

// Function to add a product to the cart
function addToCart(image,productName, price) {
    const product = {
        
        image:image,
        name: productName,
        price: price,
    };

    cartItem.push(product);

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
// function updateCartDisplay() {
//     const cartList = document.querySelector('.cartlist');
//     cartList.innerHTML = ''; // Clear the existing cart list

//     for (const item of cartItem) {
//         const listItem = document.createElement('li');
//         listItem.innerText = `<img src="${item.image}"/> ${item.name} - $${item.price}`;
//         cartList.appendChild(listItem);
//         console.log("added")
//     }
// }


// ... (previous code)

// Function to update the cart display
// function updateCartDisplay() {
//     const cartList = document.querySelector('.cartlist');
//     cartList.innerHTML = ''; // Clear the existing cart list

//     for (const item of cartItem) {
//         const listItem = document.createElement('li');
        
//         // Create an image element and set its attributes
//         const productImage = document.createElement('img');
//         productImage.src = `images/${item.image}`; // Assuming there is an 'image' property in your 'cartItem' objects
//         productImage.alt = item.name;
        
//         // Create a div element for the product details
//         const productDetails = document.createElement('div');
//         productDetails.classList.add('product-details');
//         productDetails.innerHTML = `
//         <div>
//             <div class="product-name">${item.name}</div>
//             <div class="product-price">$${item.price}</div>
//         </div>
//         <button onclick=removeCartItem>remove</button>
//         `;
        
//         // Append the image and product details to the list item
//         listItem.appendChild(productImage);
//         listItem.appendChild(productDetails);
        
//         // Append the list item to the cart list
//         cartList.appendChild(listItem);
//     }
// }

// ... (rest of the code)
function updateCartDisplay() {
    const cartList = document.querySelector('.cartlist');
    cartList.innerHTML = ''; // Clear the existing cart list

    for (let i = 0; i < cartItem.length; i++) {
        const item = cartItem[i];
        const listItem = document.createElement('li');

        // Create an image element and set its attributes
        const productImage = document.createElement('img');
        productImage.src = `images/${item.image}`; // Assuming there is an 'image' property in your 'cartItem' objects
        productImage.alt = item.name;

        // Create a div element for the product details
        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details');
        productDetails.innerHTML = `
            <div class="product-name">${item.name}</div>
            <div class="product-price">$${item.price}</div>
        `;

        // Create a button to remove the item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeCartItem(i);
        });

        // Append the image, product details, and remove button to the list item
        listItem.appendChild(productImage);
        listItem.appendChild(productDetails);
        listItem.appendChild(removeButton);

        // Append the list item to the cart list
        cartList.appendChild(listItem);
    }
}

function removeCartItem(index) {
    cartItem.splice(index, 1); // Remove the item at the specified index
    updateCartDisplay(); // Update the cart display after removal
}




