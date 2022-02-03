const Character = require('../models/characters');


getCharacters = (req, res) => {
    Character.findAll()
    .then(characters => {
        return res.send(characters);
    })
    .catch(err => res.sendStatus(401).send(err));
}


module.exports = {
    getCharacters
}