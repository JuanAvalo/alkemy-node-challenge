const express = require('express');
const router = express.Router();

const authControllers = require('../controllers/authControllers');

//router.post('/auth/login', authControllers.postLogin);

router.post('/auth/signup', authControllers.postSignUp);

router.post('/auth/login', authControllers.postLogin)

module.exports = router;