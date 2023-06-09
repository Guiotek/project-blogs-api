const express = require('express');
const loginController = require('../controllers/login.controller');
const loginMiddleware = require('../middlewares/login.middleware');

const router = express.Router();

router.post('/login', loginMiddleware, loginController.authLogin);

module.exports = router;