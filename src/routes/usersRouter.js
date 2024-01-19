var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/usercontrollers.js');
const validateRegister = require('../middlewares/validateRegister.js');
const validateLogin = require('../middlewares/validateLogin.js');
const validateUsers = require('../middlewares/validateUser.js');

router.get('/login', userControllers.login);
router.post('/login',validateLogin,userControllers.createLogueo);
router.get('/registro', userControllers.registro);
router.post('/registro',validateRegister, userControllers.createUsers);
router.get('/profile', validateUsers, userControllers.profile);
router.put('/profile',validateUsers,userControllers.updateProfile);



module.exports = router;
