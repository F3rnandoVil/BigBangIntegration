document.getElementById('paymentForm').addEventListener('submit', function(event) {
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
    const expiry = new Date(`${year}-${month}`);
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
    window.location.href = '/productos.html';
});