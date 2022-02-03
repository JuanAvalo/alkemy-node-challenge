const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/db');

//Routes
const charactersRoutes = require('./routes/charactersRoutes');

//Models
const Character = require('./models/characters');
const Genre = require('./models/genres');
const Movie = require('./models/movies');

//Controllers
const charactersController = require('./controllers/charactersController');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(charactersRoutes);

Character.belongsToMany(Movie, {through: 'movie-character'});
Movie.belongsToMany(Character, {through: 'movie-character'});
Genre.belongsToMany(Movie, {through: 'movie-genre'});
Movie.belongsToMany(Genre, {through: 'movie-genre'});


sequelize.sync() 
.then( result => {
    //console.log(result)
    app.listen(3000)
})
.catch(err => console.log(err));