const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/user.auth');

const router = express.Router();

router.post('/user');
router.get('/user', authMiddleware, userController.getAll);

module.exports = router;