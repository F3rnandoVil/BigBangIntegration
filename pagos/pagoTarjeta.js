import { luhn } from './utils/luhn.js';

document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardholderName = document.getElementById('cardholderName').value;

    // Validación número de tarjeta (16 dígitos numéricos)
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      alert('El número de tarjeta debe tener exactamente 16 dígitos.');
      return;
    } else {
      // Validación Luhn
      if (!luhn(cardNumber)) {
        alert('El número de tarjeta no es válido.');
        return;
      }
    }

    // Validación nombre del titular (solo letras)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(cardholderName)) {
      alert('El nombre del titular debe contener solo letras.');
      return;
    }

    // Validación fecha de expiración (formato MM/YY)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
      alert('La fecha de expiración debe estar en formato MM/YY.');
      return;
    }

    const [month, year] = expiryDate.split('/');
    const fullYear = parseInt('20' + year, 10); // Convierte '25' en 2025
    const expiry = new Date(fullYear, parseInt(month, 10), 0, 23, 59, 59); // Último día del mes
    const now = new Date();
    if (expiry < now) {
      alert('La tarjeta ha expirado.');
      return;
    }

    // Validación CVV (exactamente 3 dígitos)
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      alert('El CVV debe tener exactamente 3 dígitos.');
      return;
    }

    const paymentData = {
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
      cardholderName: cardholderName,
      saveCard: document.getElementById('saveCard').checked
    };

    console.log('Datos de pago:', paymentData);
    alert('Pago procesado con éxito');
    window.location.href = '/catalogos/front.html';
});