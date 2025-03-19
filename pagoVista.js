document.addEventListener('DOMContentLoaded', () => {
    const resumenContainer = document.getElementById('resumen-items');

    // Obtén datos desde localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    let subtotalGeneral = 0;

    cartItems.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        subtotalGeneral += subtotal;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.producto}</td>
            <td>${item.descripcion}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td>$${subtotal.toFixed(2)}</td>
        `;
        resumenContainer.appendChild(tr);
    });

    const iva = subtotalGeneral * 0.16;
    const total = subtotalGeneral + iva;

    document.getElementById('subtotal').textContent = `$${subtotalGeneral.toFixed(2)}`;
    document.getElementById('iva').textContent = `$${iva.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
});

function confirmarPago() {
    window.location.href = '/pagoTarjeta.html';
}