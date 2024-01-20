var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/usercontrollers.js');
const validateRegister = require('../middlewares/validateRegister.js');
const validateLogin = require('../middlewares/validateLogin.js');


router.get('/login', userControllers.login);
router.post('/login',validateLogin,userControllers.createLogueo);
router.get('/registro', userControllers.registro);
router.post('/registro',validateRegister, userControllers.createUsers);
router.get('/profile', userControllers.profile);
router.put('/profile',userControllers.updateProfile);



module.exports = router;
