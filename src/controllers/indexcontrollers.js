const path = require('path');

const indexControllers = {
    
    index: (req,res)=> { res.render('index', {title:'Punto Coleccion'})}
    
}





module.exports = indexControllers;

