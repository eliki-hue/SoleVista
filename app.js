let list = document.querySelector('.list');
let cart = document.querySelector('.cart-card')
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');

openShopping.addEventListener('click', ()=>{
    // body.classList.add('active')
    cart.style.display='block';
    // cart.style.'z-index'="9999";
})

closeShopping.addEventListener('click', ()=>{
    // body.classList.remove('active')
    cart.style.display='none'
})




let products = [
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/1.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/3.jpeg',
        price:3000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/17.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/4.jpeg',
        price:3000
    },
    {
        id:4,
        name :'product name 4',
        image:'../images/shoes/5.jpeg',
        price:4000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/5.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/6.jpeg',
        price:3000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/7.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/8.jpeg',
        price:3000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/9.jpeg',
        price:3000
    },
    {
        id:4,
        name :'product name 4',
        image:'../images/shoes/10.jpeg',
        price:4000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/11.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/13.jpeg',
        price:3000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/14.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/15.jpeg',
        price:3000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/16.jpeg',
        price:3000
    },
    {
        id:4,
        name :'product name 4',
        image:'../images/shoes/17.jpeg',
        price:4000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/18.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/19.jpeg',
        price:3000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/20.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/21.jpeg',
        price:3000
    },
    {
        id:4,
        name :'product name 4',
        image:'../images/shoes/22.jpeg',
        price:4000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/23.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/24.jpeg',
        price:3000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/25.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/2.jpeg',
        price:3000
    },
    {
        id:1,
        name :'product name 1',
        image:'../images/shoes/23.jpeg',
        price:1000
    },
    {
        id:3,
        name :'product name 3',
        image:'../images/shoes/24.jpeg',
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


// Update the addToCart function to check for existing items in the cart
function addToCart(image, productName, price) {
    const product = {
        image: image,
        name: productName,
        price: price,
    };

    // Check if the same product already exists in the cart
    const existingProduct = cartItem.find(item => item.image === image && item.name === productName && item.price === price);

    if (existingProduct) {
        // Increment the quantity if the product exists
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        // Add the product to the cart
        cartItem.push(product);
    }

    // Update the cart display
    updateCartDisplay();
}

addProduct()

// Initialize an empty shopping cart
const cartItem = [];

// Function to add a product to the cart
// function addToCart(image,productName, price) {
//     const product = {
        
//         image:image,
//         name: productName,
//         price: price,
//     };

//     cartItem.push(product);

//     // Update the cart display
//     updateCartDisplay();
// }


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
        productImage.src = `images/${item.image}`;
        productImage.alt = item.name;

        // Create a div for quantity control
        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('quantity-control');

        // // Create buttons for increasing and decreasing quantity
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.addEventListener('click', () => {
            increaseQuantity(i);
        });

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.addEventListener('click', () => {
            decreaseQuantity(i);
        });


        // Create a span to display the quantity
        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = item.quantity || 1; // Default to 1 if quantity is not set

        // Append the buttons and quantity span to the quantity div
        quantityDiv.appendChild(decreaseButton);
        quantityDiv.appendChild(quantitySpan);
        quantityDiv.appendChild(increaseButton);

        // Create a div element for the product details
        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details');
        productDetails.innerHTML = `
            <div class="product-name">${item.name}</div>
            <div class="product-price">$${(item.price * (item.quantity || 1)).toFixed(2)}</div>
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
        listItem.appendChild(quantityDiv);
        listItem.appendChild(removeButton);

        // Append the list item to the cart list
        cartList.appendChild(listItem);

        // Update the cart count and total cost
        cartCount += item.quantity || 1; // Default to 1 if quantity is not set
        totalCost += item.price * (item.quantity || 1); // Default to 1 if quantity is not set
    }

    // Display cart count and total cost
    document.querySelector('.cart-count-1').textContent = cartCount;
    document.querySelector('.cart-count').textContent = cartCount;
    document.querySelector('.total-cost').textContent = `Ksh.${totalCost.toFixed(2)}`;
}

// Function to increase the quantity of an item in the cart
function increaseQuantity(index) {
    cartItem[index].quantity = (cartItem[index].quantity || 1) + 1;
    updateCartDisplay();
}

// Function to decrease the quantity of an item in the cart
function decreaseQuantity(index) {
    if (cartItem[index].quantity > 1) {
        cartItem[index].quantity -= 1;
    } else {
        // Remove the item if the quantity becomes 0
        cartItem.splice(index, 1);
    }
    updateCartDisplay();
}
// Initial call to updateCartDisplay to populate the cart when the page loads
updateCartDisplay();

// m-pesa intergration

// const axios = require('axios');

// const mpesaEndpoint = 'YOUR_MPESA_API_ENDPOINT';
// const apiKey = 'YOUR_API_KEY';

// const paymentData = {
//     amount: '10', // Amount to be paid
//     phoneNumber: 'PHONE_NUMBER', // Customer's phone number
//     // Other required parameters
// };

// axios.post(mpesaEndpoint, paymentData, {
//     headers: {
//         Authorization: `Bearer ${apiKey}`,
//     },
// })
//     .then((response) => {
//         // Handle the response from M-Pesa API, which may include a payment URL or payment details
//         console.log(response.data);
//     })
//     .catch((error) => {
//         // Handle any errors that occur during the payment request
//         console.error(error);
//     });





