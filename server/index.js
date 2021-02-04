const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const app = express();
const apiPort = 3000;
const db = require('./db');
const posts = require('./routes/post.routes');
const users = require('./routes/user.routes');
const favorites = require('./routes/favorites.routes');
const auth = require('./auth');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
passport.use('login', auth.loginStrategy);
passport.use('signup', auth.signupStrategy);
passport.use(auth.jwtStrategy);

app.use('/posts', posts);
app.use('/users', users);
app.use('/favorites', favorites);

// Handle errors.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
