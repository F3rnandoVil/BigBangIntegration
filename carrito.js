document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');

    const cartItems = [
        {
            producto: 'Producto 1',
            descripcion: 'Descripción del Producto 1',
            cantidad: 1,
            precio: 10.00
        },
        {
            producto: 'Producto 2',
            descripcion: 'Descripción del Producto 2',
            cantidad: 2,
            precio: 20.00
        },
        {
            producto: 'Producto 3',
            descripcion: 'Descripción del Producto 3',
            cantidad: 1,
            precio: 30.00
        }
    ];

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div>${item.producto}</div>
                <div>${item.descripcion}</div>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <input type="number" value="${item.cantidad}" min="1" readonly>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <div>$${item.precio.toFixed(2)}</div>
                <button class="cart-item-remove" onclick="removeItem(${index})">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    window.increaseQuantity = function(index) {
        cartItems[index].cantidad += 1;
        renderCartItems();
    };

    window.decreaseQuantity = function(index) {
        if (cartItems[index].cantidad > 1) {
            cartItems[index].cantidad -= 1;
            renderCartItems();
        }
    };

    window.removeItem = function(index) {
        cartItems.splice(index, 1);
        renderCartItems();
    };

    window.proceedToCheckout = function() {
        alert('Procediendo al pago...');
    };

    renderCartItems();
});