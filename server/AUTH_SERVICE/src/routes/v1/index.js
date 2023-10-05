const express = require("express");
const { UserController } = require("../../controllers/index");
const { AuthValidate } = require("../../middlewares/index");
const router = express.Router();

router.post("/signup",AuthValidate.validateUserAuth,UserController.create);
router.delete("/users/:id",UserController.destroy);
router.get("/users/:id",UserController.getById);
router.post("/login",AuthValidate.validateUserAuth,UserController.login);
router.get("/isAuthenticated",UserController.isAuthenticated);
router.get("/isAdmin",UserController.isAdmin);

module.exports = router;

