const { check } = require("express-validator");

const validateProduct = [
    check("nombre")
      .notEmpty()
      .withMessage("Debes completar el nombre")
      .bail()
      .isLength({ min: 4 })
      .withMessage("El nombre debe tener al menos 4 caracteres"),
    check("descripcion")
      .notEmpty()
      .withMessage("Descripcion del producto obligatoria")
      .bail()
      .isLength({ min: 20 })
      .withMessage("La descripcion del producto debe contar con un mínimo de 20 carácteres"),
    check("marca")
      .notEmpty()
      .withMessage("Selecciona una Marca"),
    check("categoria")
        .notEmpty()
        .withMessage("Selecciona una Marca"),
    
      
      
  ];
  
  module.exports = validateProduct;