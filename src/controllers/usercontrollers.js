const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

const userControllers = {
  login: (req, res) => res.render("./users/login", { title: "Login" }),

  registro: (req, res) =>
    res.render("./users/registro", {
      title: "Registro",
      usuario: req.session.user,
    }),

  logout: (req, res) => {
    req.session.destroy();
    if (req.cookies.user) {
      res.clearCookie("user");
      res.clearCookie("remember");
    }
    res.redirect("/");
  },

  createUsers: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.User.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        rol: req.body.rol ? req.body.rol : "user",
        fechaNaciento: null,
        edad: null,
        genero: null,
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((response) => res.redirect("/"));
    } else {
      res.render("./users/registro", {
        errors: errors.mapped(),
        old: req.body,
        title: "Registro",
        usuario: req.session.user,
      });
    }
  },
  createLogueo: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.User.findOne({ where: { email: req.body.email } }).then((result) => {
        req.session.user = result;
        if (req.body.remember === "true") {
          res.cookie("user", result, { maxAge: 1000 * 60 * 15 });
          res.cookie("rememberMe", "true", { maxAge: 1000 * 60 * 15 });
        }

        res.redirect("/");
      });
    } else {
      res.render("./users/login", { errors: errors.mapped(), title: "Login" });
    }
  },
  profile: (req, res) => {
    db.User.findByPk(req.session.user.id).then((result) => {
      user = result;
      res.render("./users/profile", {
        title: "Perfil Usuario",
        usuario: req.session.user,
        user,
      });
    })
    
  },
  updateProfile: (req, res) => { 
    let errors = validationResult(req); 
    if (errors.isEmpty()) {
      db.User.findByPk(req.session.user.id)
      .then((response) =>
        db.User.update(
          {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rol: req.body.rol ? req.body.rol : "user",
            fechaNaciento: req.body.fecha_nacimiento,
            edad: req.body.edad,
            genero: req.body.genero,
            avatar: null,
            updatedAt: new Date(),
          },
          {
            where: { id: req.session.user.id },
          }
        )
      )
      .then((response) => { 
        db.User.findOne({ where: { email: req.session.user.email } }).then((result) => {
        req.session.user = result,
        res.redirect("/")});
  })}
    else {
      db.User.findByPk(req.session.user.id).then((result) => {
        user = result;})
      res.render ("./users/profile", {title: "Perfil Usuario", usuario: req.session.user, user } )
    }    
},
getAllUser: (req, res) => {
  db.User.findAll().then((result) => {
    users = result;
    res.render("./users/usuario", {
      title: "Total de Usuarios",
      users,
      usuario: req.session.user,
    });
  });
},

deleteUser: (req, res) => {
  const { id } = req.params;
  db.User.destroy({ where: { id } })
    .then(() => {
      res.redirect("/users/all");
    })
    .catch((error) => {
      console.log("Error al eliminar el usuario:", error);
      res.status(500).send("Error interno del servidor");
    });
},
}
module.exports = userControllers;
