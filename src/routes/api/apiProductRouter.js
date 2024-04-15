const express = require('express');
const router = express.Router();
const { create, all, update, destroy, getProduct , allcategories } = require("../../controllers/api/apiProductController");

router.get ('/allcategories',allcategories)
router.get('/all', all); // Obtener todos los productos
router.get('/:id', getProduct); // Obtener un producto por su ID
router.post('/create', create); // Crear un nuevo producto
router.put('/update/:id', update); // Actualizar un producto por su ID
router.delete('/destroy/:id', destroy); // Eliminar un producto por su ID

module.exports = router;
