const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.post("/api/user/register", userController.register);
router.post("/api/user/login", userController.loginUser);
router.post("/api/user/logout", userController.logout);
router.put("/api/user/update", userController.updateUser);
router.delete("/api/user/delete", userController.deleteUser);

module.exports = router;