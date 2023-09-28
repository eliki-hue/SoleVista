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


//  let cartCount =0;
//  let totalCost =0;
 
// function updateCartDisplay() {
//     const cartList = document.querySelector('.cartlist');
//     cartList.innerHTML = ''; // Clear the existing cart list

//     for (let i = 0; i < cartItem.length; i++) {
//         const item = cartItem[i];
//         const listItem = document.createElement('li');

//         // Create an image element and set its attributes
//         const productImage = document.createElement('img');
//         productImage.src = `images/${item.image}`; // Assuming there is an 'image' property in your 'cartItem' objects
//         productImage.alt = item.name;

//         // Create a div element for the product details
//         const productDetails = document.createElement('div');
//         productDetails.classList.add('product-details');
//         productDetails.innerHTML = `
//             <div class="product-name">${item.name}</div>
//             <div class="product-price">$${item.price}</div>
//         `;
//         // Calculate and update the cart count and total cost
//         cartCount++;
//         totalCost += item.price;
//         // Create a button to remove the item
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';
//         removeButton.addEventListener('click', () => {
//             removeCartItem(i);
//         });

//         // Append the image, product details, and remove button to the list item
//         listItem.appendChild(productImage);
//         listItem.appendChild(productDetails);
//         listItem.appendChild(removeButton);

//         // Append the list item to the cart list
//         cartList.appendChild(listItem);
//     }

//     // Display cart count and total cost
//     document.querySelector('.cart-count').textContent = cartCount;
//     document.querySelector('.total-cost').textContent = `$${totalCost.toFixed(2)}`;
// }

function removeCartItem(index) {
    cartItem.splice(index, 1); // Remove the item at the specified index
    updateCartDisplay(); // Update the cart display after removal
}


// ... (previous code)

// Function to update the cart display, count, and total cost
function updateCartDisplay() {
    const cartList = document.querySelector('.cartlist');
    cartList.innerHTML = ''; // Clear the existing cart list

    let cartCount = 0; // Initialize cart count
    let totalCost = 0; // Initialize total cost

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
            <div class="product-price">$${item.price.toFixed(2)}</div>
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

        // Calculate and update the cart count and total cost
        cartCount++;
        totalCost += item.price;
    }

    // Display cart count and total cost
    document.querySelector('.cart-count-1').textContent = cartCount;
    document.querySelector('.cart-count').textContent = cartCount;
    document.querySelector('.total-cost').textContent = `$${totalCost.toFixed(2)}`;
}

// ... (rest of your code, including addToCart and removeCartItem functions)

// Initial call to updateCartDisplay to populate the cart when the page loads
updateCartDisplay();

// m-pesa intergration

const axios = require('axios');

const mpesaEndpoint = 'YOUR_MPESA_API_ENDPOINT';
const apiKey = 'YOUR_API_KEY';

const paymentData = {
    amount: '10', // Amount to be paid
    phoneNumber: 'PHONE_NUMBER', // Customer's phone number
    // Other required parameters
};

axios.post(mpesaEndpoint, paymentData, {
    headers: {
        Authorization: `Bearer ${apiKey}`,
    },
})
    .then((response) => {
        // Handle the response from M-Pesa API, which may include a payment URL or payment details
        console.log(response.data);
    })
    .catch((error) => {
        // Handle any errors that occur during the payment request
        console.error(error);
    });





