const { v4: uuidv4 } = require('uuid');
var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");
const validateAdmin = require("../middlewares/validateAdmin.js");
const validateUsers = require("../middlewares/validateUser.js");
const validateProduct = require ("../middlewares/validateProduct.js");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/img/productos"));
  },
  filename: (req, file, cb) => {
    const newFileName = uuidv4() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage });

const productControllers = require("../controllers/productcontrollers");

router
  .get("/search", productControllers.search)
  .get("/", productControllers.listadoproductos)
  .get("/categorias/:category",productControllers.listCategory)
  .get("/marcas/:brand",productControllers.listBrands)
  .get("/detail/:id", productControllers.detail)
  .get("/carrito", validateUsers, productControllers.carrito)
  .get("/updateproduct/:id", validateAdmin, productControllers.update)
  .put("/updateproduct/:id", validateAdmin, upload.single("imagen"), productControllers.editar )
  .get("/dashboard", validateAdmin, productControllers.dashboard)
  .get("/loadproduct", validateAdmin, productControllers.cargaDeProducto)
  .post("/loadproduct", validateAdmin, upload.array('imagenes', 3), productControllers.crearProducto)
  .delete("/delete/:id", validateAdmin, productControllers.productDelete);

module.exports = router;
