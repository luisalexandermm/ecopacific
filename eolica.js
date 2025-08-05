// Función: Mostrar secciones con efecto al hacer scroll
const secciones = document.querySelectorAll(".fade-in");

function mostrarSecciones() {
  const trigger = window.innerHeight * 0.85;

  secciones.forEach(seccion => {
    const top = seccion.getBoundingClientRect().top;

    if (top < trigger) {
      seccion.classList.add("visible");
    } else {
      seccion.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", mostrarSecciones);
window.addEventListener("load", mostrarSecciones);

// Crear y mostrar botón de volver arriba
const botonArriba = document.createElement("button");
botonArriba.textContent = "↑";
botonArriba.id = "boton-arriba";
document.body.appendChild(botonArriba);

// Estilo básico para el botón (puedes mover esto al CSS si prefieres)
botonArriba.style.position = "fixed";
botonArriba.style.bottom = "30px";
botonArriba.style.right = "30px";
botonArriba.style.padding = "10px 15px";
botonArriba.style.backgroundColor = "#00b4d8";
botonArriba.style.color = "#fff";
botonArriba.style.border = "none";
botonArriba.style.borderRadius = "50%";
botonArriba.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
botonArriba.style.cursor = "pointer";
botonArriba.style.fontSize = "18px";
botonArriba.style.zIndex = "1000";
botonArriba.style.display = "none";
botonArriba.style.transition = "opacity 0.3s ease";

// Mostrar/Ocultar botón al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botonArriba.style.display = "block";
    botonArriba.style.opacity = "1";
  } else {
    botonArriba.style.opacity = "0";
    setTimeout(() => {
      botonArriba.style.display = "none";
    }, 300);
  }
});

// Función de volver arriba
botonArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});