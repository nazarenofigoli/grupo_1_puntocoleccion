const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
const products = JSON.parse(json);


const productControllers = {
    detalleP: (req,res)=>  res.render('products/detalleP', {title:'Detalle de producto'}),
    carrito: (req,res)=>  res.render('products/carrito', {title:'Carrito'}),
    update: (req,res)=> res.render ('products/updateproduct',{title:'Editar Producto'}),
    cargaDeProducto:  (req,res)=>  res.render('products/cargaDeProducto', {title:'cargaDeProducto'}),

    dashboard:(req, res) => {
        res.render('products/dashboard',{title:"Dashboard",products});
    },
}



module.exports = productControllers;