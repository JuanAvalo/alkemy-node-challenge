const express = require('express');
const router = express.Router();
const tokenHandler = require('../middleware/is-auth')

const authControllers = require('../controllers/authControllers');

router.post('/auth/signup', authControllers.postSignUp);

router.post('/auth/login', authControllers.postLogin);

router.post('/auth/logout',tokenHandler.verifyToken, authControllers.postLogout);

module.exports = router;