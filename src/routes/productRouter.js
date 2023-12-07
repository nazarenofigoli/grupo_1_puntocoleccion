var express = require('express');
var router = express.Router();
const productControllers = 
require('../controllers/productcontrollers');

router.get('/detalleP', productControllers.detalleP);
router.get('/carrito', productControllers.carrito);


router.get('/dashboard',productControllers.dashboard);

module.exports = router;