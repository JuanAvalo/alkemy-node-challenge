const express = require('express');
const router = express.Router();

const charactersController = require('../controllers/charactersController');

// router.post('/postCharacter', charactersController.postAddCharacter);

router.get('/characters/:id', charactersController.getCharacterDetail);

router.get('/characters', charactersController.getCharacters);



module.exports = router;