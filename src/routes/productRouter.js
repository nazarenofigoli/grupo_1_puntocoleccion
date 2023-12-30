var express = require('express');
var router = express.Router();
const path = require('path');
const multer= require ('multer');

const storage = multer.diskStorage ({
        destination: (req,file,cb) => {
            cb(null,path.join (__dirname, '../../public/img/productos'))
        },
        filename: (req,file,cb) => {
            const newFileName = Date.now() + path.extname(file.originalname);
            cb (null, newFileName)
        }
});

const upload = multer ({storage})

const productControllers = require('../controllers/productcontrollers');

router.get('/', productControllers.listadoproductos);
router.get('/detalleP/:id', productControllers.detalleP);
router.get('/carrito', productControllers.carrito);
router.get('/updateproduct/:id',productControllers.update)
router.put('/updateproduct/:id',upload.single('imagen'),productControllers.editar)
router.get('/dashboard',productControllers.dashboard);
router.get('/cargaDeProducto', productControllers.cargaDeProducto);
router.post('/cargaDeProducto', upload.single('imagen'), productControllers.crearProducto);
router.post('/cargaDeProducto', productControllers.cargaDeProducto);
router.delete('/delete/:id', productControllers.productDelete);

module.exports = router;