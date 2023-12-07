const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
const products = JSON.parse(json);

const productControllers = {
    detalleP: (req,res)=>  res.render('detalleP', {title:''}),
    carrito: (req,res)=>  res.render('carrito', {title:'Carrito'}),


    dashboard:(req, res) => {
        const propiedades = [,"nombre","imagen","marca","precio","descripcion"];
        res.render('products/dashboard', { title: "Dashboard" });
    }, 
}



module.exports = productControllers;