var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/usercontrollers');

router.get('/login', userControllers.login);
router.get('/registro', userControllers.registro);


module.exports = router;
