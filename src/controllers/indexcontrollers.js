const fs = require("fs");
const path = require("path");

const db = require('../database/models')


const indexControllers = {
  index: (req, res) => {
  const tendenciasYOfertas = db.Product.findAll({where: { subcategoria_id: 1 },include: [{model: db.Imageproduct,limit: 1}]}).catch(err => console.log(err))
  const destacados = db.Product.findAll({ where: { subcategoria_id: 2 }, include: [{ model: db.Imageproduct,limit: 1}]}).catch(err => console.log(err))
  Promise.all([tendenciasYOfertas,destacados]).then(([tendenciasYOfertas,destacados])=>{
    res.render('index', {title: 'Punto Coleccion',tendenciasYOfertas,destacados, usuario: req.session.user}) 
  
  })
  }
    
}

module.exports = indexControllers;

