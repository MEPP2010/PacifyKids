// Validar el formulario de inicio de sesión
function validateForm(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  // Simulación básica de credenciales válidas
  if (username === "admin" && password === "1234") {
      // Redirige a la página principal
      window.location.href = "index.html";
  } else {
      // Muestra un mensaje de error
      errorMessage.style.display = "block";
  }
}
