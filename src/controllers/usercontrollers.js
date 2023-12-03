const path = require('path');

const userControllers = {
    login: (req,res)=>  res.render('login', {title:'Login'}),
    registro: (req,res)=>  res.render('registro', {title:'Registro'})

}



module.exports = userControllers;