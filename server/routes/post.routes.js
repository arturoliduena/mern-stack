const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
const passport = require('passport');
const PostController = require('../controllers/post.controller');

// Get all Posts
router.route('/').get(PostController.getPosts);

// Get one post by cuid
router.route('/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/').post(passport.authenticate('jwt', { session: false }), upload.single('file'), PostController.addPost);

// Delete a post by cuid
router.route('/:cuid').delete(passport.authenticate('jwt', { session: false }),PostController.deletePost);

module.exports = router;
