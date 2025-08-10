const express = require('express');
const router = express.Router();
const {sayhello, registerUser, loginUser, updateUser } = require('../controllers/userController');

router.get("/sayhello",sayhello);
router.post("/register",registerUser);
router.post("/loginUser",loginUser);
router.put('/update/:id',updateUser)

module.exports = router;