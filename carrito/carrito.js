document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            const totalPrice = item.precio * item.cantidad;
            cartItem.innerHTML = `
                <div>${item.producto}</div>
                <div>${item.descripcion}</div>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <input type="number" value="${item.cantidad}" min="1" readonly>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <div>$${totalPrice.toFixed(2)}</div>
                <button class="cart-item-remove" onclick="removeItem(${index})">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    window.increaseQuantity = function(index) {
        cartItems[index].cantidad += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCartItems();
    };

    window.decreaseQuantity = function(index) {
        if (cartItems[index].cantidad > 1) {
            cartItems[index].cantidad -= 1;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCartItems();
        }
    };

    window.removeItem = function(index) {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCartItems();
    };

    window.proceedToCheckout = function() {
        // Guarda los datos actuales en localStorage antes de ir al pago
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        window.location.href = "../pagos/pagoVista.html";
    };

    renderCartItems();
});