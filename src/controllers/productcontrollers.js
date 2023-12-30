const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
const products = JSON.parse(json);


const productControllers = {
    detalleP: (req,res)=>  res.render('products/detalleP', {title:'Detalle de producto'}),
    carrito: (req,res)=>  res.render('products/carrito', {title:'Carrito'}),
    update: (req,res)=> {
        const {id} = req.params;
        const product = products.find(producto => producto.id == parseInt(id));
        res.render('products/cargaDeProducto',{title: product.nombre, product});
    
    }
    ,
    editar: (req, res) => {
      const {id}= req.params;
      console.log(id);
      const {nombre,descripcion,precio,marca,categoria} = req.body;
      console.log(nombre);
      const nuevoArray = products.map(product => {
        console.log(product.id+": "+JSON.stringify(product))
        if(product.id == parseInt(id)){
          product.nombre = nombre.trim();
          product.descripcion =descripcion.trim();
          product.precio = precio;
          product.marca = marca.trim();
          product.categoria = categoria.trim();
          product.imagen = req.file ? req.file.filename : product.imagen;
        }
        return product;
      });
      console.log("nuevo array: "+JSON.stringify(nuevoArray));
      const json = JSON.stringify(nuevoArray);
          
      fs.writeFileSync(path.join(__dirname,"../database/product.json"),json,"utf-8");
      res.redirect('/product/dashboard');
    },
    cargaDeProducto:(req,res)=>  res.render('products/cargaDeProducto', {title:'cargaDeProducto', product: null}),
    crearProducto: (req,res)=> {

      const product ={

      id: products.length  + 1,
      nombre: req.body.nombre.trim(),
      descripcion: req.body.descripcion,
      precio: +req.body.precio,
      categoria: req.body.categoria.trim(),
      marca: req.body.marca.trim(),
      imagen: req.file ? req.file.filename : "naruto.jpg"
    } 
      
      products.push(product);
      const json = JSON.stringify(products);
      fs.writeFileSync(path.join(__dirname,"../database/product.json"),json,"utf-8");
      res.redirect("/product/dashboard")
  
      
    },
    dashboard:(req, res) => {
        res.render('products/dashboard',{title:"Dashboard",products});
    },
}



module.exports = productControllers;