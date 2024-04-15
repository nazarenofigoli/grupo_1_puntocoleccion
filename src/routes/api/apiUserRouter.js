const express = require('express');
const router = express.Router();
const { create, getAllUsers, updateUser, deleteUser, getUserById } = require("../../controllers/api/apiUserController");

router
  .post("/users", create) // Crear un nuevo usuario
  .get("/users", getAllUsers) // Obtener todos los usuarios
  .get("/users/:id", getUserById) // Obtener un usuario por su ID
  .put("/users/:id", updateUser) // Actualizar un usuario por su ID
  .delete("/users/:id", deleteUser); // Eliminar un usuario por su ID

module.exports = router;
