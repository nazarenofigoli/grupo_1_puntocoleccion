const fs = require("fs");
const path = require("path");

const db = require('../database/models')


const indexControllers = {
  index: (req, res) => {
    db.Product.findAll({
      where: { subcategoria_id: 1 },
      include: [
        {model: db.Imageproduct,
        limit: 2}]})
      .then ((result) => {tendenciasYOfertas = result})
    db.Product.findAll({  
      where: { subcategoria_id: 2 },
      include: [{
        model: db.Imageproduct,
        limit: 1}]})
        .then ((result) => {destacados=result;
        res.render('index', {title: 'Punto Coleccion',tendenciasYOfertas,destacados, usuario: req.session.user}) 
      
    })
    .catch((err) => console.log(err))
}
}
module.exports = indexControllers;

