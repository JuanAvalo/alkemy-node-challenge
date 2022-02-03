const express = require('express');
const router = express.Router();

const charactersController = require('../controllers/charactersController');

// router.post('/postCharacter', charactersController.postAddCharacter);
router.get('/characters', charactersController.getCharacters);

module.exports = router;