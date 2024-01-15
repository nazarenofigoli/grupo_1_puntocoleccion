const { body} = require('express-validator');
const bcrypt = require('bcrypt');


const validateLogin = [
    body('email')
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isEmail().withMessage("El valor ingresado debe tener el formato de un correo electrónico").bail()
    .custom(value => {
        console.log("value:", value);
        const user = users.find(elemento => elemento.email == value);
        if (!user) {
            throw new Error("El usuario no existe");
        }
        return true;
    }),
body('password')
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .custom((value, { req }) => {
        console.log("password:", value);
        const user = users.find(elemento => elemento.email == req.body.email);
        console.log("user:", user);

        if (!user || !bcrypt.compareSync(value, user.password)) {
            throw new Error("La contraseña no es correcta");
        }
        return true;
    })
];

module.exports = validateLogin;