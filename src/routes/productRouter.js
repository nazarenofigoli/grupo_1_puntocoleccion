var express = require('express');
var router = express.Router();

const productControllers = require('../controllers/productcontrollers');

router.get('/detalleP', productControllers.detalleP);
router.get('/carrito', productControllers.carrito);
router.get('/updateproduct/:id',productControllers.update)
router.put('/updateproduct/:id',productControllers.editar)
router.get('/dashboard',productControllers.dashboard);
router.get('/cargaDeProducto', productControllers.cargaDeProducto);
router.post('/cargaDeProducto', productControllers.crearProducto);

module.exports = router;