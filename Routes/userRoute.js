const express = require('express');
const router = express.Router();
const {sayhello} = require('../controllers/userController');
const {registerUser} = require("../controllers/userController");
const {loginUser} = require('../controllers/userController');

router.get("/sayhello",sayhello);
router.post("/register",registerUser);
router.post("/loginUser",loginUser)

module.exports = router;