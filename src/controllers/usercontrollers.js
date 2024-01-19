const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'),'utf-8'));

const userControllers = {
    login: (req,res)=>  res.render('./users/login', {title:'Login'}),
    registro: (req,res)=>  res.render('./users/registro', {title:'Registro'}),
    createUsers:(req,res)=> {
        
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            const user = {
                id: users[users.length - 1].id + 1 ,
                nombre: req.body.nombre,
                apellido : req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
                rol: req.body.rol ? req.body.rol : "user"
            }
        users.push(user);
        newUsers = JSON.stringify(users);
        fs.writeFileSync(path.join(__dirname, '../database/users.json'), newUsers , 'utf-8');
        res.redirect('/')
        }
        else {
            res.render('./users/registro', {errors:errors.mapped(), old:req.body, title:'Registro'})
        }
    }
    ,

    createLogueo:(req,res)=> {
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            const user = users.find(elemento => elemento.email == req.body.email);
            req.session.user = user;
            if(req.body.remember == "true") {
                res.cookie('user',user,{maxAge: 1000 * 60 * 15 });
                res.cookie('rememberMe',"true", {maxAge: 1000 * 60 * 15 });
              }
            res.redirect('/')

        }

        else {
            res.render('./users/login', {errors:errors.mapped(), title:"Login"})
        }

    }

}

module.exports = userControllers;