// Ejecutar el código una vez que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  /** ==============================
   *  ANÁLISIS DE CONSUMO DEL FORMULARIO
   *  ============================== */
  const formulario = document.getElementById('formulario');
  const resultadoDiv = document.getElementById('resultado');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const kwh = document.getElementById('kwh').value.trim();

    if (!isNaN(kwh) && kwh !== '') {
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
   *  DATOS HISTÓRICOS DE ENERGÍA RENOVABLE
   *  ============================== */
  const datosHistoricos = [
    ["Año", "Consumo (TWh)"],
    ["1965", 120], ["1970", 150], ["1975", 180], ["1980", 210],
    ["1985", 260], ["1990", 320], ["1995", 400], ["2000", 520],
    ["2005", 700], ["2010", 950], ["2015", 1500], ["2016", 1650],
    ["2017", 1820], ["2018", 2000], ["2019", 2150], ["2020", 2300],
    ["2021", 2500], ["2022", 2700]
  ];

  // Mostrar datos en tabla
  const thead = document.querySelector("#dataTable thead");
  const tbody = document.querySelector("#dataTable tbody");

  thead.innerHTML = "<tr>" + datosHistoricos[0].map(h => `<th>${h}</th>`).join("") + "</tr>";
  tbody.innerHTML = datosHistoricos.slice(1).map(fila =>
    "<tr>" + fila.map(celda => `<td>${celda}</td>`).join("") + "</tr>"
  ).join("");

  // Crear gráfico con Chart.js
  const años = datosHistoricos.slice(1).map(f => f[0]);
  const valores = datosHistoricos.slice(1).map(f => f[1]);

  const ctx = document.getElementById('consumoChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: años,
      datasets: [{
        label: 'Consumo de Energía Renovable (TWh)',
        data: valores,
        borderColor: '#00b4d8',
        backgroundColor: 'rgba(0, 180, 216, 0.2)',
        borderWidth: 2,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#3a0ca3'
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1500,
        easing: 'easeInOutQuart'
      },
      plugins: {
        legend: {
          labels: {
            color: '#333',
            font: { size: 14 }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#333' },
          grid: { color: '#ddd' }
        },
        y: {
          ticks: { color: '#333' },
          grid: { color: '#ddd' }
        }
      }
    }
  });

});
// Código para eolica navbar
 window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header"); // tu header
    const headerBottom = header.offsetTop + header.offsetHeight;

    if (window.scrollY >= headerBottom) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
  // Código para bio navbar
    window.addEventListener("scroll", function () {
    const nav = document.querySelector(".biomasa-nav");
    const header = document.querySelector(".energia-header.biomasa");
    const headerBottom = header.offsetTop + header.offsetHeight;

    if (window.scrollY >= headerBottom) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
// Código para geotermica navbar
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".geotermica-nav");
    const header = document.querySelector(".energia-header.geotermica");
    const headerBottom = header.offsetTop + header.offsetHeight;

    if (window.scrollY >= headerBottom) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
// Código para hidraulik navbar
// Fija la barra solo cuando pasas su posición inicial, 
// sin permitir que suba por encima del header.
document.addEventListener('DOMContentLoaded', () => {  
  const nav = document.querySelector('.hidraulica-nav');
  const header = document.querySelector('header.energia-header.hidraulica') || document.querySelector('header');
  if (!nav) return;

  // Calcula el punto a partir del cual la nav debe fijarse
  const computeThreshold = () => {
    const headerH = header ? header.getBoundingClientRect().height : 0;

    // Medir la posición natural de la nav en el flujo (sin "fija")
    const estabaFija = nav.classList.contains('fija');
    if (estabaFija) nav.classList.remove('fija');

    const startY = nav.getBoundingClientRect().top + window.scrollY;

    if (estabaFija) nav.classList.add('fija');

    // La nav se fijará cuando el scroll supere su posición inicial menos la altura del header
    return Math.max(startY - headerH, 0);
  };

  let thresholdY = computeThreshold();

  const onScroll = () => {
    if (window.scrollY >= thresholdY) {
      nav.classList.add('fija');     // queda fija a top:120px (según tu CSS)
    } else {
      nav.classList.remove('fija');  // vuelve a su posición original
    }
  };

  // Inicializa estado
  onScroll();

  // Listeners
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    thresholdY = computeThreshold();
    onScroll();
  });
}); 