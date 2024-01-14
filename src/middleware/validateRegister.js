const { check } = require('express-validator');


const validateRegister = [
    check('nombre')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 4 }).withMessage('El nombre debe tener al menos 4 caracteres'),
    check('apellido')
        .notEmpty().withMessage('Debes completar el apellido').bail()
        .isLength({ min: 4 }).withMessage('El apellido debe tener al menos 4 caracteres'),
    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
    check('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres'),
        
    check('password1')
        .custom ((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error('Las contraseñas deben ser iguales');
            }
            return true;

        }),
];

module.exports = validateRegister;