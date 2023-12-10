var express = require ('express');
var router = express.Router();
const userControllers = require('../controllers/usercontrollers');

router.get('/login', userControllers.login);
router.get('/registro', userControllers.registro);
router.post('/registro', userControllers.createUsers);
router.post('/login', userControllers.createLogueo);


module.exports = router;
