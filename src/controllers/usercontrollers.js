const path = require('path');
const fs = require('fs');

const userControllers = {
    login: (req,res)=>  res.render('./users/login', {title:'Login'}),
    registro: (req,res)=>  res.render('./users/registro', {title:'Registro'}),

    createUsers:(req,res)=> {
        console.log(req.body);
        res.redirect('/users/login')
    },
    
    createLogueo:(req,res)=> {
        console.log(req.body);
        res.send('/users/registro')
    }
}



module.exports = userControllers;