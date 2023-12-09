const path = require('path');
const fs = require('fs');

const userControllers = {
    login: (req,res)=>  res.render('login', {title:'Login'}),
    registro: (req,res)=>  res.render('registro', {title:'Registro'}),

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