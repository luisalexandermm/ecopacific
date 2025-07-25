// Escucha el envío del formulario
document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario');
  const resultadoDiv = document.getElementById('resultado');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir recarga de página

    const kwhInput = document.getElementById('kwh');
    const kwhValor = parseFloat(kwhInput.value);

    // Validar entrada
    if (isNaN(kwhValor) || kwhValor <= 0) {
      resultadoDiv.textContent = 'Por favor ingresa un valor válido de kWh.';
      resultadoDiv.style.color = '#c0392b'; // Rojo
      return;
    }

    // Calcular y generar mensaje personalizado
    let mensaje = '';
    let color = '#2c3e50';

    if (kwhValor <= 100) {
      mensaje = '💚 Tu consumo es bajo. ¡Excelente! Estás ayudando al planeta.';
      color = '#27ae60'; // Verde
    } else if (kwhValor <= 300) {
      mensaje = '⚡ Tu consumo es moderado. Puedes mejorar con energías renovables.';
      color = '#f39c12'; // Amarillo/Naranja
    } else {
      mensaje = '🌍 Tu consumo es alto. Considera paneles solares u otras soluciones sostenibles.';
      color = '#e74c3c'; // Rojo
    }

    resultadoDiv.textContent = `🔌 Consumo mensual: ${kwhValor} kWh. ${mensaje}`;
    resultadoDiv.style.color = color;
    resultadoDiv.style.fontWeight = 'bold';
  });
});