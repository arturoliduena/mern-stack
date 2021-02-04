const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../controllers/user.controller');

// Create a new User
router.route('/signup').post(passport.authenticate('signup', { session: false }), UserController.loginUser);

// login a user
router.route('/login').post(passport.authenticate('login', { session: false }), UserController.loginUser);

// Get one User by token
router.route('/me').get(passport.authenticate('jwt', { session: false }), UserController.getUser);

// Get one user by id
router.route('/user/:id').get(() => UserController.getUser);

// Delete a user by id
router.route('/user/:id').delete(() => UserController.deleteUser);

// Get all Users
router.route('/').get(passport.authenticate('jwt', { session: false }), UserController.getUsers);

module.exports = router;
