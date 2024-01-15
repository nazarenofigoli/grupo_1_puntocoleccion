var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/usercontrollers');
const validateLogin = require('../middlewares/validateLogin');

router.get('/login', userControllers.login);
router.get('/registro', userControllers.registro);

router.post('/login', validateLogin, userControllers.createLogueo);
router.post('/registro', userControllers.createUsers);

module.exports = router;