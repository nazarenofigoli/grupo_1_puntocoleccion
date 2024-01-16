var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/usercontrollers.js');
const validateRegister = require('../middlewares/validateRegister.js');
const validateLogin = require('../middlewares/validateLogin.js');

router.get('/login', userControllers.login);
router.get('/registro', userControllers.registro);
router.post('/registro',validateRegister, userControllers.createUsers);
router.post('/login',validateLogin,userControllers.createLogueo);



module.exports = router;
