const express = require('express');
const router = express.Router();
const {sayhello} = require('../controllers/userController');
const {user} = require('../controllers/userController');
const {registerUser} = require("../controllers/userController")

router.get("/sayhello",sayhello);
router.post("/register",registerUser);

module.exports = router;