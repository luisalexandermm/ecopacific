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
 document.addEventListener('DOMContentLoaded', () => {
   // Datos de ejemplo para el gráfico
   const datosConsumo = {
     labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
     datasets: [{
       label: 'Consumo Energético (kWh)',
       data: [120, 150, 180, 200, 170, 160],
       backgroundColor: 'rgba(75, 192, 192, 0.2)',
       borderColor: 'rgba(75, 192, 192, 1)',
       borderWidth: 1
     }]
   };

   // Configuración del gráfico
   const config = {
     type: 'bar',
     data: datosConsumo,
     options: {
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   };

   // Renderizar el gráfico en el contenedor
   const ctx = document.getElementById('grafico-consumo').getContext('2d');
   new Chart(ctx, config);
 });