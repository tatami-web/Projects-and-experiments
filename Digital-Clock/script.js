// Get the clock element
const reloj = document.getElementById('hora');

// Get the button to change the background
const cambiarFondo = document.getElementById('cambiar-fondo');

// Function to display the current time
function mostrarHora() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  reloj.textContent = `${hora}:${minutos}:${segundos}`;
}

// Function to change the background
function cambiarFondoPagina() {
  const fondo = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${fondo}`;
}

// Display the current time every second
setInterval(mostrarHora, 1000);

// Add event to the button to change the background
cambiarFondo.addEventListener('click', cambiarFondoPagina);
