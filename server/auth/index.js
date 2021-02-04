const jwt = require('jsonwebtoken');
const localStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/user');
const JWT_KEY = 'TOP_SECRET';

const signupStrategy = new localStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      const user = await UserModel.create({ email, password });
      return done(null, { email: user.email, id: user._id });
    } catch (error) {
      done(error);
    }
  }
);

const loginStrategy = new localStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'User not found' });
      }

      const validate = await user.isValidPassword(password);

      if (!validate) {
        return done(null, false, { message: 'Wrong Password or email' });
      }

      return done(null, { email: user.email, id: user._id }, { message: 'Logged in Successfully' });
    } catch (error) {
      return done(error);
    }
  }
);

const createToken = user => {
  const body = { id: user.id, email: user.email };
  const token = jwt.sign({ user: body }, JWT_KEY);
  return token;
}

const getToken = req => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
    return req.headers.authorization.split(' ')[1];
  } else {
    return ''
  }
};

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_KEY,
};

const jwtStrategy = new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await UserModel.findOne({ email: jwt_payload.user.email });
    if (!user) {
      return done(null, false, { message: 'User not found' });
    }
    return done(null, { email: user.email, id: user._id });
  } catch (error) {
    done(error);
  }
});

module.exports = {
  signupStrategy,
  loginStrategy,
  jwtStrategy,
  createToken,
  getToken,
};
