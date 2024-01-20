const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'),'utf-8'));

const userControllers = {
    login: (req,res)=>  res.render('./users/login', {title:'Login'}),
    registro: (req,res)=>  res.render('./users/registro', {title:'Registro', usuario:req.session.user}),
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
            res.render('./users/registro', {errors:errors.mapped(), old:req.body, title:'Registro', usuario:req.session.user})
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

    },
    profile: (req,res)=> {
        const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'),'utf-8'));
        const user = users.find(elemento => elemento.id == req.session.user.id);
        res.render('./users/profile', {title:'Perfil Usuario',usuario:req.session.user , user})
    },
    updateProfile: (req,res) => {
        const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'),'utf-8'));
        const id= req.session.user.id;
        console.log(id);
        const {nombre,apellido} = req.body;
        console.log(nombre);
        const nuevoArray = users.map(user => {
            console.log(user.id+": "+JSON.stringify(user))
            if(user.id == id){
            user.nombre = nombre.trim();
            user.apellido =apellido.trim();
            }
            return user;
        });
        console.log("nuevo array: "+JSON.stringify(nuevoArray));
        const json = JSON.stringify(nuevoArray);
        fs.writeFileSync(path.join(__dirname,"../database/users.json"),json,"utf-8");
        const update = nuevoArray.find(elemento.id==id);
        req.session.user = update;
        console.log(req.session.user);
        res.redirect('/users/profile');
    }

}

module.exports = userControllers;