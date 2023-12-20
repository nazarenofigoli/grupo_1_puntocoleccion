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
        const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
        const products = JSON.parse(json);
        res.render('products/dashboard',{title:"Dashboard",products});
    },


    productDelete: (req, res) => {
		const { id } = req.params;
		const nuevoArray = products.filter((product) => product.id !== parseInt(id));
		const json = JSON.stringify(nuevoArray);
		fs.writeFileSync(path.join(__dirname,"../database/product.json"), json, "utf-8");
		res.redirect("/product/dashboard");
	}}



module.exports = productControllers;