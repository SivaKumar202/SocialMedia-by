const express = require('express');
const router = express.Router();
const {sayhello, registerUser, loginUser, updateUser, getUserProfile } = require('../controllers/userController');

router.get("/sayhello",sayhello);
router.post("/register",registerUser);
router.post("/loginUser",loginUser);
router.put('/update/:id',updateUser);
router.get('/profile/:id',getUserProfile)

module.exports = router;