const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const { all } = require("../routes/indexRouter");
const { Op } = require("sequelize");

const productControllers = {
  detail: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: [
        {
          model: db.Imageproduct,
          limit: 3,
        },
        {
          model: db.Category,
        },
      ],
    }).then((result) => {
      product = result;
      res.render("products/detalleP", {
        title: product.name,
        product,
        usuario: req.session.user,
      });
    });
  },

  listadoproductos: (req, res) => {
    db.Product.findAll({
      include: [
        {
          model: db.Imageproduct,
          limit: 1,
        },
      ],
    }).then((result) => {
      products = result;
      res.render("products/productos", {
        title: "Todos los productos",
        products,
        usuario: req.session.user,
      });
    });
  },

  carrito : async (req, res) => {
    try {
        const carrito = await db.Cart.findAll({
            include: [
                { association: "Product", include: [{ association: "Imageproducts" }] },
                { association: "User" }, 
            ], where: {usuario_id: req.session.user.id}
        });
        const total= carrito.reduce ((acum, current) => acum + (parseInt(current.Product.precio)*current.cantidad), 0)
      res.render("products/carrito", {
      title: "Carrito",
      carrito,
      total,
      usuario: req.session.user,
    })
  } 
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error interno del servidor" });
}
},


  update: (req, res) => {
    const brands = db.Brand.findAll().catch((err) => console.log(err));
    const categories = db.Category.findAll().catch((err) => console.log(err));
    const product = db.Product.findByPk(req.params.id).catch((err) =>
      console.log(err)
    );

    Promise.all([brands, categories, product]).then(
      ([brands, categories, product]) => {
        console.log("products: dentro del then");
        res.render("products/actualizarproducto", {
          title: product.nombre,
          product,
          categories,
          brands,
          usuario: req.session.user
        });
      }
    );

    
  },
  all: (req, res) => {
    db.Product.findAll().then((resp) => {
      res.send(resp);
    });
  },

  editar: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((response) =>
        db.Product.update(
          {
            categoria_id: req.body.categoria.trim(),
            marca_id: req.body.marca.trim(),
            nombre: req.body.nombre.trim(),
            descripcion: req.body.descripcion.trim(),
            precio: req.body.precio,
            stock: req.body.stock,
            updatedAt: new Date(),
          },
          {
            where: { id: req.params.id },
          }
        )
      )

      .then((response) => res.redirect("/products/dashboard"));
  },

  cargaDeProducto: (req, res) => {
    const categoriesPromise = db.Category.findAll({ attributes: ["id", "nombre"] }).catch((err) => console.log(err));
    const brandsPromise = db.Brand.findAll({ attributes: ["id", "nombre"] }).catch((err) => console.log(err));
    const subcategoriesPromise = db.Subcategory.findAll({ attributes: ["id", "nombre"] }).catch((err) => console.log(err));

    Promise.all([categoriesPromise, brandsPromise, subcategoriesPromise])
        .then(([categories, brands, subcategories]) => {
            res.render("./products/cargaDeProducto", {
                title: "Carga de producto",
                product: null,
                brands,
                categories,
                subcategories,
                usuario: req.session.user,
            });
        })
        .catch((err) => {
            console.log(err);
            // Handle error response here if needed
            res.status(500).send("Internal Server Error");
        });
},
  dashboard: (req, res) => {
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
    }).then((result) => {
      products = result;
      res.render("./products/dashboard", {
        title: "Dashboard",
        products,
        usuario: req.session.user,
      });
    });
  },

  crearProducto: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Product.create({
        subcategoria_id: req.body.subcategoria,
        categoria_id: req.body.categoria,
        marca_id: req.body.marca,
        nombre: req.body.nombre.trim(),
        descripcion: req.body.descripcion.trim(),
        precio: req.body.precio,
        stock: req.body.stock,
        descuento: null,
        createdAt: new Date(),
        updateAt: new Date(),
      }).then((product) => {
        let imageFiles = req.files.slice(0, 3); 
        
        let imagePromises = imageFiles.map((imageFile) => {
          return db.Imageproduct.create({
            imagen: imageFile.filename,
            producto_id: product.id,
            createdAt: new Date(),
            updateAt: new Date(),
          });
        });
  
        Promise.all(imagePromises)
          .then(() => {
            res.redirect("/products/dashboard");
          })
          .catch((error) => {
            console.error("Error al crear imágenes:", error);
            res.status(500).send("Error interno del servidor");
          });
      });
    } else {
      db.Category.findAll({ attributes: ["id", "nombre"] })
        .then((categories) => {
          return db.Brand.findAll({ attributes: ["id", "nombre"] }).then(
            (brands) => {
              res.render("./products/cargaDeProducto", {
                title: "Carga de producto",
                product: null,
                errors: errors.mapped(),
                brands,
                categories,
                usuario: req.session.user,
              });
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  
  productDelete: (req, res) => {
    const { id } = req.params;
    db.Product.destroy({ where: { id } })
      .then(() => {
        res.redirect("/products/dashboard");
      })
      .catch((error) => {
        console.log("Error al eliminar el producto:", error);
      });
  },

  listCategory: (req, res) => {
      db.Category.findAll({
        include: [
          { association: "Products", include: [{ association: "Imageproducts" }] }
        ],
        where: { nombre: req.params.category }
      }).then((response) => {
        const categories = response; 
        // res.send (categories)
        res.render("./products/categorias", { title: `Punto Coleccion ${categories[0].nombre}`, categories, usuario:req.session.user });
      }).catch((error) => {
        console.log("Error al obtener Categorias", error);
      });
  },
  listBrands: (req, res) => {
    db.Brand.findAll({
      include: [
        { association: "Products", include: [{ association: "Imageproducts" }] }
      ],
      where: { nombre: req.params.brand }
    }).then((response) => {
      const brands = response; // Define brands aquí
      // res.send (brands)
      res.render("./products/brands", { title: `Punto Coleccion ${brands[0].nombre}`, brands, usuario: req.session.user });
    }).catch((error) => {
      console.log("Error al obtener marcas", error);
    });
}, 
search : (req,res)=> {
  const busqueda = req.query.keywords;
  
  db.Product.findAll({
    where: {
      nombre: {[Op.substring]:busqueda}
    }, include: [
      {
        association: "Imageproducts",
      },
    ]
  }).then((response) => { 
    
    products = response
    // res.send(products)
    res.render("./products/search", { title: `Punto Coleccion`, products, busqueda, usuario: req.session.user });
  }).catch((error) => {
    console.log("Error al obtener busqueda", error);
  });
}

  

  }



module.exports = productControllers;

