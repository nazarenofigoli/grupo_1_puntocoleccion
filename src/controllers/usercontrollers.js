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
                password: bcrypt.hashSync(req.body.password)
            }
        
        users.push(user);
        newUsers = JSON.stringify(users);
        fs.writeFileSync(path.join(__dirname, '../database/users.json'), newUsers , 'utf-8');
        res.redirect('/')
        }
        else {
            res.send(errors.mapped())

        }

        



        }
    ,

    createLogueo:(req,res)=> {
        console.log(req.body);
        res.redirect('/users/registro')
    }
}



module.exports = userControllers;