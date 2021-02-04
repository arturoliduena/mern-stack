const express = require('express');
const router = express.Router();
const passport = require('passport');
const FavController = require('../controllers/fav.controller');

// Get Favs
router.route('/').get(passport.authenticate('jwt', { session: false }), FavController.getFavs);

// Add a new fav
router.route('/:cuid').post(passport.authenticate('jwt', { session: false }), FavController.addFav);

// Delete a fav by id
router.route('/:cuid').delete(passport.authenticate('jwt', { session: false }),FavController.deleteFav);

module.exports = router;
