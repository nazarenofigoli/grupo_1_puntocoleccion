const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
const products = JSON.parse(json);


const indexControllers = {
    index: (req, res) => {
      const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
    const products = JSON.parse(json);
      const tendenciasYOfetas = products.filter(product => product.categoria === "Tendencia y oferta");
      const destacados = products.filter(product => product.categoria === "Destacados");
      res.render('index', {title: 'Punto Coleccion',tendenciasYOfetas, destacados , usuario:req.session.user});
    }
  };



module.exports = indexControllers;

