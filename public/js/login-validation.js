window.addEventListener('load', function() {
    const formLogin = document.querySelector("form.formulario__general");
    const userEmail = document.querySelector("[name=email]");
    const userPass = document.querySelector("[name=password]");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    formLogin.addEventListener('submit', function (e) {
        let errores = [];

        if (userEmail.value.length === 0) {
            errores.push("Debe proporcionar un correo electrónico");
        } else if (!regex.test(userEmail.value)) {
            errores.push("El formato del correo electrónico no es válido");
        }

        if (userPass.value.length === 0) {
            errores.push("La contraseña no puede estar vacía");
        } else if (userPass.value.length < 4) {
            errores.push("La contraseña no puede tener menos de 4 caracteres");
        }

        if (errores.length > 0) {
            e.preventDefault();
            const ulErrores = document.querySelector("div.errores ul");
            ulErrores.innerHTML = '';

            for (let i = 0; i < errores.length; i++) {
                const li = document.createElement('li');
                li.textContent = errores[i];
                ulErrores.appendChild(li);
            }
        }
    });

    const passwordInput = document.querySelector('input[name="password"]');
    const togglePasswordIcon = document.querySelector('.fa-eye-slash');

    togglePasswordIcon.addEventListener('click', function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordIcon.classList.remove('fa-eye-slash');
            togglePasswordIcon.classList.add('fa-eye');
        } else {
            passwordInput.type = "password";
            togglePasswordIcon.classList.remove('fa-eye');
            togglePasswordIcon.classList.add('fa-eye-slash');
        }
    });
});
