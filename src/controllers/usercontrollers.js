const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');


const userControllers = {
    login: (req,res)=>  res.render('./users/login', {title:'Login'}),
    registro: (req,res)=>  res.render('./users/registro', {title:'Registro'}),

    
    createUsers:(req,res)=> {
        let errors = validationResult(req);
        console.log(req.body);
        res.send({ errors: errors.mapped()})

    },

    createLogueo:(req,res)=> {
        console.log(req.body);
        res.redirect('/')
    }
}



module.exports = userControllers;