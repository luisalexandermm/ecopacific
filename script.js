// Ejecutar el código una vez que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  /** ==============================
   *  ANÁLISIS DE CONSUMO DEL FORMULARIO
   *  ==============================
   *  Este bloque gestiona la interacción del formulario que permite
   *  al usuario ingresar su consumo mensual en kWh y le muestra un
   *  mensaje personalizado según su nivel de consumo.
   */
  const formulario = document.getElementById('formulario');
  const resultadoDiv = document.getElementById('resultado');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el envío tradicional del formulario

    const kwh = document.getElementById('kwh').value.trim();

    if (!isNaN(kwh) && kwh !== '') {
      const consumo = parseFloat(kwh);
      let mensaje = '';

      // Evaluamos el nivel de consumo e indicamos un mensaje
      if (consumo <= 100) {
        mensaje = 'Tu consumo es bajo. ¡Excelente! 🌱';
      } else if (consumo <= 300) {
        mensaje = 'Tu consumo es moderado. Puedes mejorar ⚡';
      } else {
        mensaje = 'Tu consumo es alto. Considera opciones renovables 🌍';
      }

      // Mostramos el mensaje con efecto de animación (opcional)
      resultadoDiv.textContent = `Consumo mensual: ${consumo} kWh. ${mensaje}`;
      resultadoDiv.style.opacity = 0;
      setTimeout(() => {
        resultadoDiv.style.opacity = 1;
        resultadoDiv.style.transition = "opacity 0.5s ease-in";
      }, 100);
    } else {
      resultadoDiv.textContent = 'Por favor ingresa un valor válido.';
    }
  });


  /** ==============================
   *  GRÁFICO DE BARRAS CON CHART.JS
   *  ==============================
   *  Este bloque genera un gráfico de barras que muestra el consumo
   *  energético en kWh a lo largo de varios meses como ejemplo.
   */
  const datosConsumo = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
      label: 'Consumo Energético (kWh)',
      data: [120, 150, 180, 200, 170, 160],
      backgroundColor: [
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: datosConsumo,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'kWh'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.parsed.y} kWh`;
            }
          }
        }
      }
    }
  };

  const ctx = document.getElementById('grafico-consumo').getContext('2d');
  new Chart(ctx, config);

});