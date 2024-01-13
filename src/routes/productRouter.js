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
router.get('/detail/:id', productControllers.detail);
router.get('/carrito', productControllers.carrito);
router.get('/updateproduct/:id',productControllers.update)
router.put('/updateproduct/:id',upload.single('imagen'),productControllers.editar)
router.get('/dashboard',productControllers.dashboard);
router.get('/loadproduct', productControllers.cargaDeProducto);
router.post('/loadproduct', upload.single('imagen'), productControllers.crearProducto);
router.delete('/delete/:id', productControllers.productDelete);

module.exports = router;