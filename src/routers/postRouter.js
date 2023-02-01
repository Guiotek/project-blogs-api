const express = require('express');
const postController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/user.auth');

const router = express.Router();

router.get('/post', authMiddleware, postController.getAll);
router.get('/post/:id', authMiddleware, postController.getOne);

module.exports = router;