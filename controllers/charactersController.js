const Character = require('../models/characters');
const Movie = require('../models/movies');
const { Op } = require('sequelize');


getCharacters = (req, res) => {
    const { name, age, weight, movies } = req.query

    const characterFilters = {};
    if (name) {
        characterFilters.name = {
            [Op.like]: `${name}%`
        }
    }
    if (age) { characterFilters.age = age }
    if (weight) { characterFilters.weight = weight }

    const movieFilters = {};
    if (movies) { movieFilters.id = movies }
    
    console.log(characterFilters)
    Character.findAll({
        attributes  : ["name", "imageUrl"],
        where: characterFilters,
        include: [{
            model: Movie,
            where: movieFilters,
            attributes: []
        }]                
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