const express = require("express");
const { registerUser, loginUser, getUsers } = require("../controllers/userController")

//initialize the router
const router = express.Router();

//define the routes for the controllers
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/getusers", getUsers);
module.exports = router;