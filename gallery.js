document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const viewCartButton = document.getElementById('view-cart');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');
    const cartCount = document.getElementById('cart-count');
    
    const cart = [];
    
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = {
                name: `Product ${index + 1}`,
                price: index === 0 ? 10 : 15,
            };
    
            cart.push(product);
            updateCart();
        });
    });
    
    viewCartButton.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    checkoutButton.addEventListener('click', () => {
        alert('DELIVERED TO YOU AS SOON AS POSSIBLE');
    });
    
    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
    
        cart.forEach((item) => {
            const li = document.createElement('li');
            li.innerText = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });
    
        cartTotal.innerText = total;
        cartCount.innerText = cart.length;
    }
});
