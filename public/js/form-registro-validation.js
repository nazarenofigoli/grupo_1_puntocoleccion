window.addEventListener('load', function() {
    const formRegistro = document.querySelector("form.registro_main_formulario_account");    
    const userName = document.querySelector("[name=nombre]");
    const userLastName = document.querySelector("[name=apellido]");
    const userEmail = document.querySelector("[name=email]");
    const userPass = document.querySelector("[name=password]");
    const userPass1 = document.querySelector("[name=password1]");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    
    formRegistro.addEventListener('submit', function (e) { 
        let errores = [];

        if (userName.value.length === 0) {
            errores.push('El nombre no puede estar vacío');
        } else if (userName.value.length < 4) {
            errores.push('El nombre no puede tener menos de 4 caracteres');
        }

        if (userLastName.value.length === 0) {
            errores.push('El apellido no puede estar vacío');
        } else if (userLastName.value.length < 4) {
            errores.push('El apellido no puede tener menos de 4 caracteres');
        }
        if (userEmail.value.length == 0) {
            errores.push ("Debe proporcional un email")
        }
        else if (!regex.test(userEmail.value)){
            errores.push ("El formato del email no es valido")
        }
        if (userPass.value.length === 0) {
            errores.push('La contraseña no puede estar vacía');
        } else if (userPass.value.length < 4) {
            errores.push('La contraseña no puede tener menos de 4 caracteres');
        }

        if (userPass.value !== userPass1.value) {
            errores.push('Las contraseñas no son iguales');
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
});
