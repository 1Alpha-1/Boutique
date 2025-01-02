let cart = [];
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartCountElement = document.getElementById('cart-count');
const closeCartButton = document.getElementById('close-cart');
const checkoutButton = document.getElementById('checkout-button');

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));

        addToCart(productName, productPrice);
    });
});

cartButton.addEventListener('click', () => {
    displayCart();
});

closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

checkoutButton.addEventListener('click', () => {
    alert('Thank you for your purchase! Screenshot the item(s) and send it to me via +233509419901 on WhatpApp or tap on the send buttom below and send it via email.');
    cart = []; // Clear the cart after checkout
    updateCartCount(); // Update the cart count
    displayCart(); // Refresh the cart display
});

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
}

function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

function displayCart() {
    cartModal.style.display = 'block';
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: $${totalPrice}`;
}