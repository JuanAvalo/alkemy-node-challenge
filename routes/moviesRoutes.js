const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const tokenHandler = require('../middleware/is-auth')


router.get('/movies/:id',tokenHandler.verifyToken, moviesController.getMovieById);

router.get('/movies',tokenHandler.verifyToken, moviesController.getMovies);

router.post('/movies',tokenHandler.verifyToken, moviesController.postMovie);

router.post('/movies/:id',tokenHandler.verifyToken, moviesController.postMovieById)

router.delete('/movies/:id',tokenHandler.verifyToken, moviesController.deleteMovie)

module.exports = router;