// Obtiene el botón usando su id
const emailButton = document.getElementById("emailButton");

// Añadir un evento de clic al botón
emailButton.addEventListener("click", function() {
    // Usamos el protocolo mailto para abrir la aplicación de correo
    window.location.href = "mailto:delpuertodaniel@hotmail.com?subject=Consulta desde mi Portfolio&body=Escribe tu mensaje aquí...";
});
