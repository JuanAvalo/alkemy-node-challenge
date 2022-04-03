const express = require('express');
const router = express.Router();
const tokenHandler = require('../middleware/is-auth')


const charactersController = require('../controllers/charactersController');

router.get('/characters/:id',tokenHandler.verifyToken, charactersController.getCharacterById);

router.get('/characters',tokenHandler.verifyToken, charactersController.getCharacters);

router.post('/characters',tokenHandler.verifyToken, charactersController.postCharacter);

router.post('/characters/:id',tokenHandler.verifyToken, charactersController.postCharacterById);

router.delete('/characters/:id',tokenHandler.verifyToken, charactersController.deleteCharacter);

module.exports = router;