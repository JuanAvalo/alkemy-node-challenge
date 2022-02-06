const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies/:id', moviesController.getMovieById);

router.get('/movies', moviesController.getMovies);

router.post('/movies', moviesController.postMovie);

router.post('/movies/:id', moviesController.postMovieById)

router.delete('/movies/:id', moviesController.deleteMovie)

module.exports = router;