const express = require('express');
const router = express.Router();

const charactersController = require('../controllers/charactersController');

router.get('/characters/:id', charactersController.getCharacterById);

router.get('/characters', charactersController.getCharacters);

router.post('/characters', charactersController.postCharacter);

router.post('/characters/:id', charactersController.postCharacterById);

router.delete('/characters/:id', charactersController.deleteCharacter);

module.exports = router;