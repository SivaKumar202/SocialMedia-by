const express = require('express')
const router = express.Router();
const {createPost, getposts, likepost} = require('../controllers/postController');

router.post('/create-post',createPost)
router.get('/', getposts)
router.post('/likePost/:postId',likepost)

module.exports = router