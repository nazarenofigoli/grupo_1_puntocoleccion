window.addEventListener('load', function() {
    const formProfile = document.querySelector("form.registro_main_formulario_account");
    const userName = document.querySelector("[name=nombre]");
    const userLastName = document.querySelector("[name=apellido]");
    const userDateOfBirth = document.querySelector("[name=fecha_nacimiento]");
    const userAge = document.querySelector("[name=edad]");
    const regex = /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/
    console.log (userName, userDateOfBirth)
    
    formProfile.addEventListener('submit', function (e) {
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
            console.log (userDateOfBirth.value, regex.test(userDateOfBirth))
        if (!regex.test(userDateOfBirth.value)) {
            errores.push('Debe proporcionar una fecha de nacimiento');
            
        } 

        if (userAge.value === "") {
            errores.push('Debe proporcionar una edad');
        
        } else if (userAge.value < 0) {
            errores.push('La edad no puede ser negativa');
        
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

