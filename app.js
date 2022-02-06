const express = require('express');
const sequelize = require('./util/db');

//Routes
const charactersRoutes = require('./routes/charactersRoutes');
const moviesRoutes = require('./routes/moviesRoutes');

//Models
const Character = require('./models/characters');
const Genre = require('./models/genres');
const Movie = require('./models/movies');
const MovieCharacter = require('./models/movies-characters');
const MovieGenre = require('./models/movies-genres');

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(charactersRoutes);
app.use(moviesRoutes);

Character.belongsToMany(Movie, {through: MovieCharacter});
Movie.belongsToMany(Character, {through: MovieCharacter});
Genre.belongsToMany(Movie, {through: MovieGenre});
Movie.belongsToMany(Genre, {through: MovieGenre});

sequelize.sync() 
.then(() => {    
    app.listen(3000)
})
.catch(err => console.log(err));