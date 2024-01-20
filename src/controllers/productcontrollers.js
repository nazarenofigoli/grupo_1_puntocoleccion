const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
const products = JSON.parse(json);



const productControllers = {
    detail: (req,res)=>  {
    const {id} = req.params;
		
		const product = products.find (product => product.id == id);
		res.render ('products/detalleP', {title:product.name, product, usuario:req.session.user})
    },

    listadoproductos: (req,res)=> res.render('products/productos',{title: 'Todos los productos',products, usuario:req.session.user}),
    
    carrito: (req,res)=>  res.render('products/carrito', {title:'Carrito', usuario:req.session.user}),

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
      res.redirect('/products/dashboard');
    },
    cargaDeProducto:(req,res)=>  res.render('products/cargaDeProducto', {title:'Carga de producto', product: null, usuario:req.session.user}),
    crearProducto: (req,res)=> {
    
    
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
      const json = JSON.stringify(products);
      fs.writeFileSync(path.join(__dirname,"../database/product.json"),json,"utf-8");
      res.redirect("/products/dashboard")
  
      
    },
  
    dashboard:(req, res) => {
        const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
        const products = JSON.parse(json);
        res.render('products/dashboard',{title:"Dashboard",products, usuario:req.session.user});
    },
    productDelete: (req, res) => {
		const { id } = req.params;
		const nuevoArray = products.filter(product => product.id !== parseInt(id));
		const json = JSON.stringify(nuevoArray);
		fs.writeFileSync(path.join(__dirname,"../database/product.json"), json, "utf-8");
		res.redirect("/products/dashboard");
	}

}

module.exports = productControllers;