var express = require('express');
var router = express.Router();

const productControllers = require('../controllers/productcontrollers');

router.get('/', productControllers.listadoproductos);
router.get('/detalleP/:id', productControllers.detalleP);
router.get('/carrito', productControllers.carrito);
router.get('/updateproduct',productControllers.update)
router.get('/dashboard',productControllers.dashboard);
router.get('/cargaDeProducto', productControllers.cargaDeProducto);
router.post('/cargaDeProducto', productControllers.cargaDeProducto);
router.delete('/delete/:id', productControllers.productDelete);

module.exports = router;