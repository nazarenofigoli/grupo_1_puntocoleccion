const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/product.json"),"utf-8")
const products = JSON.parse(json);
const db = require('../database/models')


const indexControllers = {
  index: (req, res) => {
    db.Product.findOne ( { where : {subcategoria_id: 1}}) 
        .then ((result) => {tendenciasYOfetas= result} )
    db.Product.findOne ( { where : {subcategoria_id: 2}}) 
        .then ((result) => {destacados= result} )    
    
    res.render('index', {title: 'Punto Coleccion',tendenciasYOfetas, destacados , usuario:req.session.user});
  }
};


module.exports = indexControllers;

