// shopping cart management functions

let cart = [];

// Add to cart function
function addToCart(item, quantity) {
    const existingItem = cart.find(i => i.item === item);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ item, quantity });
    }
}

// Remove from cart function
function removeFromCart(item) {
    cart = cart.filter(i => i.item !== item);
}

// Update quantity function
function updateQuantity(item, quantity) {
    const existingItem = cart.find(i => i.item === item);
    if (existingItem) {
        existingItem.quantity = quantity;
    }
}

// Calculate total function
function calculateTotal(prices) {
    return cart.reduce((total, currentItem) => {
        return total + (prices[currentItem.item] * currentItem.quantity || 0);
    }, 0);
}

// Exporting functions
module.exports = { addToCart, removeFromCart, updateQuantity, calculateTotal };