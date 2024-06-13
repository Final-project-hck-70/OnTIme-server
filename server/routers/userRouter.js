const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.get("/profile/me", UserController.getLoggedInUser);

module.exports = router;
