const { body } = require('express-validator');
const bcrypt = require("bcryptjs");
const db = require('../database/models');

const validateLogin = [
    body('email')
        .notEmpty().withMessage("El campo no puede estar vacío").bail()
        .isEmail().withMessage("El valor ingresado debe tener el formato de un correo electrónico").bail()
        .custom(value => {
            return db.User.findOne({ where: { email: value } })
                .then(user => {
                    if (!user) {
                        return Promise.reject("Credenciales Inválidas");
                    }
                });
        }),
    body('password')
        .notEmpty().withMessage("El campo no puede estar vacío").bail()
        .custom((value, { req }) => {
            
            return db.User.findOne({ where: { email: req.body.email } })
                .then(user => {
                    console.log (user.dataValues.password)
                    console.log (user.password)
                    console.log (bcrypt.compareSync(value, user.dataValues.password))
                    if (!bcrypt.compareSync(value, user.dataValues.password)) {
                    return  Promise.reject("Credenciales Inválidas");
                    }
                })
                .catch(error => {
                    console.error(error);
                    return Promise.reject("Error de autenticación");
                });
        })
]

module.exports = validateLogin;