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
function addToCart(productName, price) {
    const existingItem = cartItem.find((item) => item.name === productName);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        const product = {
            name: productName,
            price: price,
            quantity: 1, // Default to 1
        };
        cartItem.push(product);
    }

    // Update the cart display
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeCartItem(index) {
    cartItem.splice(index, 1); // Remove the item at the specified index
    updateCartDisplay();
}

// Function to increase the quantity of an item
function increaseQuantity(index) {
    const item = cartItem[index];
    item.quantity = (item.quantity || 1) + 1; // Default to 1 if quantity is not set
    updateCartDisplay();
}

// Function to decrease the quantity of an item
function decreaseQuantity(index) {
    const item = cartItem[index];
    if (item.quantity && item.quantity > 1) {
        item.quantity--;
        updateCartDisplay();
    }
}

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

        // Create a div for quantity control
        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('quantity-control');

        // Create buttons for increasing and decreasing quantity
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

        // Create a button to remove the item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeCartItem(i);
        });

        // Append the image, product details, quantity div, and remove button to the list item
        listItem.appendChild(productImage);
        listItem.appendChild(productDetails);
        listItem.appendChild(quantityDiv);
        listItem.appendChild(removeButton);

        // Append the list item to the cart list
        cartList.appendChild(listItem);

        // Calculate and update the cart count and total cost
        cartCount += item.quantity || 1; // Default to 1 if quantity is not set
        totalCost += item.price * (item.quantity || 1); // Default to 1 if quantity is not set
    }

    // Display cart count and total cost
    document.querySelector('.cart-count').textContent = cartCount;
    document.querySelector('.total-cost').textContent = `$${totalCost.toFixed(2)}`;
}

// ... (rest of your code)

// Initial call to updateCartDisplay to populate the cart when the page loads
updateCartDisplay();
