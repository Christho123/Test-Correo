import validarCorreo from './validador.js';

document.getElementById('formRegistro').addEventListener('submit', function (e) {
  e.preventDefault();

  const correo = document.getElementById('correo').value;
  const errorMsg = document.getElementById('error');

  if (validarCorreo(correo)) {
    errorMsg.textContent = "";
    alert("Correo válido: " + correo);
  } else {
    errorMsg.textContent = "El correo debe terminar en @gmail.com";
  }
});