// JavaScript functions for navigation, product filtering, search functionality, and page interactions

// Navigation functions
function navigateToPage(page) {
    window.location.href = page;
}

// Product filtering function
function filterProducts(products, criteria) {
    return products.filter(product => {
        return Object.keys(criteria).every(key => {
            return product[key] === criteria[key];
        });
    });
}

// Search functionality
function searchProducts(products, searchTerm) {
    return products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

// Page interactions
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Example usage:
// const products = [...];
// const filteredProducts = filterProducts(products, { category: 'electronics' });
// const searchedProducts = searchProducts(products, 'phone');
// navigateToPage('checkout.html');
// toggleModal('myModal');