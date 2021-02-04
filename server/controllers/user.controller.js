const User = require('../models/user');
const auth = require('../auth');

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
const getUsers = async (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users });
  });
};

/**
 * Get user
 * @param req
 * @param res
 * @returns void
 */
const getUser = async (req, res) => {
  try {
    const user = req.user
    const token = auth.getToken(req);
    if (!user || !token) {
      return res.json({ user: null, token: null, authorized: false, message: 'Unauthorized', error: null });
    }
    return res.json({ user, token, authorized: true, message: 'authorized', error: null });

  } catch (error) {
    return console.error(error);
  }
};

/**
 * Login a user
 * @param req
 * @param res
 * @returns void
 */
const loginUser = async (req, res) => {
  req.login(
    req.user,
    { session: false },
    async (error) => {
      if (error) return next(error);
      const token = auth.createToken(req.user);
      return res.json({ user: req.user, token, authorized: true, message: 'Signup successful', error: null });
    }
  );
};

module.exports = {
  getUsers,
  getUser,
  loginUser,
};
