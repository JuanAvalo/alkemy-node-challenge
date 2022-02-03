const Character = require('../models/characters');
const Movie = require('../models/movies');


getCharacters = (req, res) => {
    Character.findAll({
        attributes  : ["name", "imageUrl"]
    })
    .then(characters => {
        return res.send(characters)
    })
    .catch(err => res.sendStatus(401).send(err));
}

getCharacterDetail = (req, res) => {
    const id = req.params.id;
    Character.findByPk(id, {
        include: [{
            model: Movie,
            attributes: ["title"],
            through: {
                attributes: []
            }            
        }]
    })
    .then(character => {
        return res.send(character);
    })
    .catch(err => response.sendStatus(401).send(err))
}


module.exports = {
    getCharacters,
    getCharacterDetail
}