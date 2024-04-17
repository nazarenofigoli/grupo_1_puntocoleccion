const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../../database/models");

const userController = {
  create: async (req, res) => {
    const errors = validationResult(req);
    try {
      if (errors.isEmpty()) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await db.User.create({
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          email: req.body.email,
          password: hashedPassword,
          rol: req.body.rol ? req.body.rol : "user",
          fechaNaciento: null,
          edad: null,
          genero: null,
          avatar: null,
        });
        res.status(201).json(user);
      } else {
        res.status(400).json({ errors: errors.array() });
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await db.User.findAll({
        attributes: ["id", "nombre", "apellido","email", "rol"],limit:5
      });
      const countUsers = await db.User.count();
      res.json({
        count:countUsers,
        users: users,
      });
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  updateUser: async (req, res) => {
    const userId = req.params.id;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await db.User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      await user.update(req.body);
      res.json(user);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await db.User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      await user.destroy();
      res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await db.User.findByPk(userId, {
        attributes: { exclude: ["password"] },
      });
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error al obtener usuario por ID:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};

module.exports = userController;
