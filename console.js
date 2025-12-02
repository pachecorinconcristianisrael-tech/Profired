
  // Mostrar modal
  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }

  // Cerrar modal
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  // Cerrar al hacer clic fuera del contenido
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Asignar eventos a botones
  document.querySelector('.login-btn').onclick = () => openModal('loginModal');
  document.querySelector('.chat-bubble').onclick = () => openModal('helpModal');

function iniciarSesion(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Lista de usuarios válidos
  const usuarios = [
    { correo: "paco@gmail.com", contraseña: "123456" }
  ];

  const usuarioValido = usuarios.find(u => u.correo === email && u.contraseña === password);

  if (usuarioValido) {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioValido));
    window.location.href = "inicio.html"; // Redirige al archivo de inicio
  } else {
    alert("Correo o contraseña incorrectos.");
  }
}
