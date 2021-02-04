const Post = require('../models/post');
const cuid = require('cuid');
const slug = require('limax');
const sanitizeHtml = require('sanitize-html');
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'dldduww2p',
  api_key: '147569142874776',
  api_secret: 'Sf3zjVA0IRN-BHgCsAe1BnEGUMM'
});
/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
getPosts = async (req, res) => {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
};

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
addPost = async (req, res) => {
  const user_id = req.user.id
  const { name, title, content } = req.body;
  const { file } = req;
  if (!name || !title || !content) {
    return res.status(403).end();
  }
  let image_url;
  if(file){
    try {
      // File upload 
      const image = await cloudinary.uploader.upload(file.path, { tags: 'post_image' })
      image_url = image.url;
    } catch (error) {
      console.warn(error);
    }

  }
  const newPost = new Post({
    name,
    title,
    content,
    image_url,
    user_id,
  });

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return getPosts(req, res)
  });
};

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
getPost = async (req, res) => {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
};

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
deletePost = async (req, res) => {
  const user_id = req.user.id;
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      return res.status(500).send(err);
    }
    if(user_id != post.user_id){
      return res.status(401)
    };

    post.remove(() => {
      return getPosts(req, res)
    });
  });
};

module.exports = {
  getPosts,
  addPost,
  getPost,
  deletePost
};
