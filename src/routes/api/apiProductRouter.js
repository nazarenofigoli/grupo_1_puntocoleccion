const express = require('express');
const router = express.Router();
const {create,all,update,destroy,getProduct} = require("../../controllers/api/apiProductController");

router
.get('/all', all)
.get('/product/:id', getProduct)
.post('/product', create)
.put('/product/:id', update)
.delete('/product/:id', destroy)


module.exports = router;