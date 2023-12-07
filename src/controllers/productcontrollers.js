const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
const products = JSON.parse(json);

const productControllers = {
    detalleP: (req,res)=>  res.render('detalleP', {title:''}),
    carrito: (req,res)=>  res.render('carrito', {title:'Carrito'}),


    dashboard:(req, res) => {
        const products = ["id","nombre","imagen","sticker"];
        console.log(propiedades);
        res.render('dashboard', { title: "Dashboard", products, propiedades });
    },
}



module.exports = productControllers;