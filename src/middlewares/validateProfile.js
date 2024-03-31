const { check } = require("express-validator");

const validateProfile = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre no puede estar vacío")
    .bail()
    .isLength({ min: 4 })
    .withMessage("El nombre debe tener al menos 4 caracteres"),
  check("apellido")
    .notEmpty()
    .withMessage("El apellido no puede estar vacío")
    .bail()
    .isLength({ min: 4 })
    .withMessage("El apellido debe tener al menos 4 caracteres"),
  check("fecha_nacimiento")
    .notEmpty()
    .withMessage("Debe proporcionar una fecha de nacimiento")
    .bail(),
  check("edad")
    .notEmpty()
    .withMessage("Debe proporcionar una edad")
    .bail()
    .isInt({ min: 0 })
    .withMessage("La edad debe ser un número entero positivo"),
];

module.exports = validateProfile;

