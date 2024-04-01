const { check } = require("express-validator");

const validateProduct = [
    check("nombre")
      .notEmpty()
      .withMessage("Debes completar el nombre del producto")
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
        .withMessage("Selecciona una Categoría"),
    check("precio")
        .notEmpty()
        .withMessage("Ingrese el Precio")
        .bail()
        .isNumeric()
        .withMessage("Debe contener un valor númerico"),
    check("stock")
      .notEmpty()
      .withMessage("Ingrese el Stock")
      .bail()
      .isInt( {min:1})
      .withMessage("Debe contener un valor númerico")
      
      
  ];
  
  module.exports = validateProduct;