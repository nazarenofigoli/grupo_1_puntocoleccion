const express = require('express');
const router = express.Router();
const { create, getAllUsers, updateUser, deleteUser, getUserById } = require("../../controllers/api/apiUserController");

router
 
  .get("/all", getAllUsers) // Obtener todos los usuarios
  .get("/:id", getUserById) // Obtener un usuario por su ID
  .post("/create", create) // Crear un nuevo usuario
  .put("/update/:id", updateUser) // Actualizar un usuario por su ID
  .delete("/destroy/:id", deleteUser); // Eliminar un usuario por su ID

module.exports = router;
