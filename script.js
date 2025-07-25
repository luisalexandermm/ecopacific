document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario');
  const resultadoDiv = document.getElementById('resultado');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const kwh = document.getElementById('kwh').value;

    if (!isNaN(kwh) && kwh.trim() !== '') {
      const consumo = parseFloat(kwh);
      let mensaje = '';

      if (consumo <= 100) {
        mensaje = 'Tu consumo es bajo. ¡Excelente! 🌱';
      } else if (consumo <= 300) {
        mensaje = 'Tu consumo es moderado. Puedes mejorar ⚡';
      } else {
        mensaje = 'Tu consumo es alto. Considera opciones renovables 🌍';
      }

      resultadoDiv.textContent = `Consumo mensual: ${consumo} kWh. ${mensaje}`;
    } else {
      resultadoDiv.textContent = 'Por favor ingresa un valor válido.';
    }
  });
});