const mongoose = require('mongoose');
const User = require('../models/userModels');
const STATUS_USER_ERROR = 422;

// Create User
const createUser = (req, res) => {
  // grab username and password from client request
  const { username, password } = req.body;
  const user = new User({ username, password });
  // save user to db
  user.save()
  // if successful, send saved user back
  .then((user) => {
    res.json(user);
  })
  // if not, catch any error
  .catch((err) => {
    res.status(STATUS_USER_ERROR);
    res.json(err);
  });
};
module.exports = {
  createUser,
};
