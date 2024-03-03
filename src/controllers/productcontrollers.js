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
      const brands = db.Brand.findAll().catch(err => console.log(err))
      const categories = db.Category.findAll().catch(err => console.log(err))
      const product = db.Product.findByPk(req.params.id).catch(err => console.log(err))
  
      Promise.all([brands,categories,product]).then(([brands,categories,product])=>{
        console.log("products: dentro del then");
        res.render('products/actualizarproducto',{title: product.nombre, product, categories, brands})
      })
  
      console.log("Despues del promise all");
    },
    all:(req,res)=>{
      db.Product.findAll().then(resp => {
        res.send(resp)
      })
    }
    ,
    editar: (req, res) => {
      db.Product.findByPk(req.params.id)
      .then((response) =>
          db.Product.update(
          {
          categoria_id: req.body.categoria.trim(), 
          marca_id: req.body.marca.trim(),   
          nombre: req.body.nombre.trim(),
          descripcion :req.body.descripcion.trim(),
          precio: req.body.precio,
          updatedAt: new Date(),  
        },
          {
            where: {id:req.params.id},
          }
          )
      )

      .then((response) => res.redirect('/products/dashboard'));

    },

    cargaDeProducto:(req,res)=> {
      db.Category.findAll({ attributes: ['id', 'nombre'] })
      .then(categories => {
          return db.Brand.findAll({ attributes: ['id', 'nombre'] })
              .then(brands => {
              // res.send ([{categories},{brands}])
              res.render('products/cargaDeProducto', {title:'Carga de producto', product: null,brands, categories, usuario:req.session.user})
              });
      })
      .catch(err => {
          console.log(err);
  
    })
        
    },
    
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
    db.Product.create ({
    categoria_id: req.body.categoria,
    marca_id: req.body.marca,  
    nombre: req.body.nombre.trim(),
    descripcion: req.body.descripcion.trim(),
    precio: req.body.precio,
    stock: req.body.stock,
    descuento:null,
    createdAt: new Date,
    updateAt: new Date,  
  }).then (response => {
    console.log("ESTO ES EL RESPONSE:", response);
    db.Imageproduct.create({imagen:req.file.filename, 
      producto_id: response.id,
      createdAt: new Date,
      updateAt: new Date }).then (()=>{res.redirect("/products/dashboard")
    })
  })
  },
  productDelete: (req, res) => {
      const { id } = req.params;
      db.Product.destroy({ where: { id } })
          .then(() => {
              res.redirect("/products/dashboard");
          })
          .catch(error => {
              console.log("Error al eliminar el producto:", error);
          });
  }
}

module.exports = productControllers;