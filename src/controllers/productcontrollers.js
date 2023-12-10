const path = require('path');


const productControllers = {
    detalleP: (req,res)=>  res.render('detalleP', {title:''}),
    carrito: (req,res)=>  res.render('product/carrito', {title:'Carrito'}),
    update: (req,res)=> res.render ('products/updateproduct',{title:'Editar Producto'}),
    cargaDeProducto:  (req,res)=>  res.render('product/cargaDeProducto', {title:'cargaDeProducto'}),

}



module.exports = productControllers;