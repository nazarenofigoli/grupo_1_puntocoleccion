var express = require('express');
var router = express.Router();
const path = require('path');
const multer= require ('multer');
const validateAdmin = require('../middlewares/validateAdmin.js')
const validateUsers = require('../middlewares/validateUser.js');

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
router.get('/carrito',validateUsers, productControllers.carrito);
router.get('/updateproduct/:id',validateAdmin,productControllers.update)
router.put('/updateproduct/:id',validateAdmin, upload.single('imagen'),productControllers.editar)
router.get('/dashboard',validateAdmin, productControllers.dashboard);
router.get('/loadproduct',validateAdmin, productControllers.cargaDeProducto);
router.post('/loadproduct',validateAdmin, upload.single('imagen'), productControllers.crearProducto);
router.delete('/delete/:id',validateAdmin, productControllers.productDelete);

module.exports = router;