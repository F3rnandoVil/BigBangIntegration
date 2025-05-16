export function luhn(numero) {
    // Limpiar el número de entrada

    let numeroLimpiado = numero.toString().replace(/\D/g, ''); // Eliminar caracteres no numéricos
  
    if (numeroLimpiado.length === 0) {
      return false; // No hay números para verificar
    }
  
    // Obtener el número de dígitos
    const cantidadDigitos = numeroLimpiado.length;
    let suma = 0;
  
    // Procesar el número desde el final
    for (let i = cantidadDigitos - 1; i >= 0; i--) {
      let digito = parseInt(numeroLimpiado[i]);
  
      if (i % 2 === 0) { // Posiciones pares (contando desde la derecha)
        digito *= 2;
        if (digito > 9) {
          digito -= 9;
        }
      }
  
      suma += digito;
    }

    console.log(`Suma total: ${suma}`);
  
    return suma % 10 === 0;
  }