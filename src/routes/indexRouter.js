const express = require('express');
const router = express.Router();
const indexControllers = require('../controllers/indexcontrollers');


/* GET home page. */
router.get('/', indexControllers.index);


module.exports = router;
