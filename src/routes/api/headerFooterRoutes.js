const express = require('express');
const router = express.Router();
const { getHeader, getFooter } = require('../../controllers/api/headerFooterController');

// Ruta para obtener el header
router.get('/header', getHeader);
// Ruta para obtener el footer
router.get('/footer', getFooter);

module.exports = router;
