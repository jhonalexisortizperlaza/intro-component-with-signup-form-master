let boton = document.querySelector('.submit')

function validarFormulario() {
    // Obtener valores del formulario
    let nombre = document.querySelector('.nombre').value;
    let apellido = document.querySelector('.apellido').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;

    // Validar campos (puedes agregar más condiciones según tus necesidades)
    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return false; // Evitar que el formulario se envíe
    }

    if (apellido.trim() === '') {
        alert('Por favor, ingresa tu apellido.');
        return false; // Evitar que el formulario se envíe
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false; // Evitar que el formulario se envíe
    }

    if (password.trim() === '') {
        alert('Por favor, ingresa tu contraseña.');
        return false; // Evitar que el formulario se envíe
    }

    // Puedes agregar más validaciones según tus necesidades

    // Si todo está bien, permitir que el formulario se envíe
    return true;
}

boton.addEventListener('click', () => {
    validarFormulario()
})