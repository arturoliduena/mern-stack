const User = require('../models/user');

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
getFavs = async (req, res) => {
  const user_id = req.user.id

  User.findOne({ _id: user_id }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ favorites: user.favorites });
  });
};

/**
 * Save a fav
 * @param req
 * @param res
 * @returns void
 */
addFav = async (req, res) => {
  const user_id = req.user.id;
  const cuid = req.params.cuid;

  let user = await User.findOne({ _id: user_id });
  user.favorites = [...new Set([...user.favorites, cuid])];
  await user.save();
  return getFavs(req, res);
};

/**
 * Delete a Fav
 * @param req
 * @param res
 * @returns void
 */
deleteFav = async (req, res) => {
  const user_id = req.user.id;
  const cuid = req.params.cuid;

  let user = await User.findOne({ _id: user_id });

  const favorites = [...user.favorites];

  const index = favorites.indexOf(cuid);
  if (index > -1) {
    favorites.splice(index, 1);
  }
  user.favorites = favorites;
  await user.save();
  return getFavs(req, res);
};

module.exports = {
  getFavs,
  addFav,
  deleteFav,
};
