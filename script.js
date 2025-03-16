let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product');
        addToCart(productId);
    });
});

function addToCart(productId) {
    // Проверяем, есть ли уже товар в корзине
    if (!cart.includes(productId)) {
        cart.push(productId);
        updateCart();
    }
}

function updateCart() {
    // Обновляем количество товаров в корзине
    document.getElementById('cart-count').textContent = cart.length;

    // Отображаем товары в корзине
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // очищаем список
    cart.forEach(productId => {
        const listItem = document.createElement('li');
        listItem.textContent = `Товар: ${productId}`;
        cartItemsList.appendChild(listItem);
    });
}
