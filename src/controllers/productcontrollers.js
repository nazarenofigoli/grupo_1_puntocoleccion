const fs = require("fs");
const path = require("path");
const db = require ('../database/models')
const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8");
// const products = JSON.parse(json);

const productControllers = {
  detail: (req,res)=> {
    db.Product.findByPk(req.params.id, 
      {include: [
        {
          model: db.Imageproduct,
          limit: 3,
        },
        {
          model: db.Category,
        },
      ],
      }) 
      .then ((result) => {product=result; res.render ('products/detalleP', {title:product.name, product, usuario:req.session.user})})
  },
    
    listadoproductos: (req,res)=> {
    db.Product.findAll({ 
        include: [{
        model: db.Imageproduct,
        limit: 1}]})
        .then ((result) => {products=result;
        res.render('products/productos',{title:'Todos los productos',products, usuario:req.session.user})})    
},
  

    carrito: (req,res)=>  res.render('products/carrito', {title:'Carrito', usuario:req.session.user}),

    update: (req,res)=> {
        const {id} = req.params;
        const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8");
        const products = JSON.parse(json);
        const product = products.find(producto => producto.id == parseInt(id));
        res.render('products/cargaDeProducto',{title: product.nombre, product});
    
    }
    ,
    editar: (req, res) => {
    const {id}= req.params;
    const leer = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
    const products = JSON.parse(leer);
      console.log(id);
      const {nombre,descripcion,precio,marca,categoria} = req.body;
      console.log(nombre);
      const nuevoArray = products.map(product => {
        console.log(product.id+": "+JSON.stringify(product))
        if(product.id == parseInt(id)){
          product.nombre = nombre.trim();
          product.descripcion =descripcion.trim();
          product.precio = +precio;
          product.marca = marca.trim();
          product.categoria = categoria.trim();
          product.imagen = req.file ? req.file.filename : product.imagen;
        }
        return product;
      });
      console.log("nuevo array: "+JSON.stringify(nuevoArray));
      const json = JSON.stringify(nuevoArray);
          
      fs.writeFileSync(path.join(__dirname,"../database/product.json"),json,"utf-8");
      res.redirect('/products/dashboard');
    },
    cargaDeProducto:(req,res)=>  res.render('products/cargaDeProducto', {title:'Carga de producto', product: null, usuario:req.session.user}),
    
    dashboard:(req, res) => {
    db.Product.findAll({
      include: [
        {
        model: db.Imageproduct,
        limit: 1,
        },
        {
        model: db.Category,
        },
        {
          model: db.Brand,
        },
      ],
    })
    .then ((result)=> {products=result;res.render('products/dashboard',{title:"Dashboard",products, usuario:req.session.user})})
    
  },
    
    crearProducto: (req,res)=> {
    const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
    const products = JSON.parse(json);
    
    const product ={

      id: products[products.length - 1].id  + 1,
      nombre: req.body.nombre.trim(),
      descripcion: req.body.descripcion,
      precio: +req.body.precio,
      categoria: req.body.categoria.trim(),
      marca: req.body.marca.trim(),
      imagen: req.file ? req.file.filename : "naruto.jpg"
    } 
      
      products.push(product);
      const nuevoArray = JSON.stringify(products);
      fs.writeFileSync(path.join(__dirname,"../database/product.json"),nuevoArray,"utf-8");
      res.redirect("/products/dashboard")
  
      
    },
  
    productDelete: (req, res) => {
		const { id } = req.params;
    const leer = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
    const products = JSON.parse(leer);
		const nuevoArray = products.filter(product => product.id !== parseInt(id));
		const json = JSON.stringify(nuevoArray);
		fs.writeFileSync(path.join(__dirname,"../database/product.json"), json, "utf-8");
		res.redirect("/products/dashboard");
	}

}

module.exports = productControllers;