const express = require('express');
const router = express.Router();
const { create, all, update, destroy, getProduct , allcategories, lastProduct, addCart, removeCart } = require("../../controllers/api/apiProductController");

router
.post ('/addCart', addCart)
.delete('/removeCart/:id', removeCart)
.get ('/lastProduct', lastProduct)
.get ('/allcategories',allcategories)
.get('/all', all)
.get('/:id', getProduct)
.post('/create', create)
.put('/update/:id', update)
.delete('/destroy/:id', destroy)

module.exports = router;
