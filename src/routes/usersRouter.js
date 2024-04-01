var express = require("express");
var router = express.Router();
const userControllers = require("../controllers/usercontrollers.js");
const validateRegister = require("../middlewares/validateRegister.js");
const validateLogin = require("../middlewares/validateLogin.js");
const validateProfile = require("../middlewares/validateProfile.js")

router
  .get("/login", userControllers.login)
  .post("/login", validateLogin, userControllers.createLogueo)
  .get("/registro", userControllers.registro)
  .post("/registro", validateRegister, userControllers.createUsers)
  .get("/profile", userControllers.profile)
  .put("/profile",validateProfile, userControllers.updateProfile)
  .get("/logout", userControllers.logout);

module.exports = router;
