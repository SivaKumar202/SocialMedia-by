const express = require('express');
const router = express.Router();
const {sayhello} = require('../controllers/userController');
const {user} = require('../controllers/userController');

router.get("/sayhello",sayhello);
router.get('/user',user)

module.exports = router;