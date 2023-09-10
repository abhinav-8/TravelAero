const express = require("express");

const { UserController } = require("../../controllers/index");

const router = express.Router();

router.post("/signup",UserController.create);
router.delete("/users/:id",UserController.destroy);
router.get("/users/:id",UserController.getById);
router.post("/login",UserController.login);

module.exports = router;