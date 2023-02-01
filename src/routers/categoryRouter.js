const express = require('express');
const categoryController = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/user.auth');

const router = express.Router();

router.get('/categories', authMiddleware, categoryController.getAll);
router.post('/categories', authMiddleware, categoryController.create);

module.exports = router;