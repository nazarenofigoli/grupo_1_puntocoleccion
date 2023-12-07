const path = require('path');
const fs = require('fs');

const userControllers = {
<<<<<<< HEAD
    login: (req,res)=>  res.render( 'login',{title:'Login'}),
    registro: (req,res)=>  res.render('registro', {title:'Registro'})
=======
    login: (req,res)=>  res.render('login', {title:'Login'}),
    registro: (req,res)=>  res.render('registro', {title:'Registro'}),
>>>>>>> 12887b08c2e7156aea1a2189ce9e060d2e70f1b5

    createUsers:(req,res)=> {
        console.log(req.body);
        res.redirect('/')
    },
    
    createLogueo:(req,res)=> {
        console.log(req.body);
        res.redirect('/')
    }
}



module.exports = userControllers;