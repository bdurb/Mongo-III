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

// Login User
const getUser = (req, res) => {
  // get username and password from client
  const { username, password } = req.body;

  // find the user the client has asked for
  User.findOne(({ username, password }) => {

  }).exec()
  .then((user) => {
    res.json(user);
  })
  // if not, catch any error
  .catch((err) => {
    res.status(STATUS_USER_ERROR);
    res.json(err);
  });
};

/*********************************************************************
<LOGIN USER>

CLIENT => '/'
  Our root route is a simple login page. This login form will hit 
  submit a POST request to find a user in the DB and send that 
  response back to the client. `Note` We are storing the user's _id in 
  `localstorage`. and using it to submit more data throughout the app.

API => POST /login
  This route will be responsible for looking at the same type of 
  object as above, but this time instead of using `save` you'll need 
  to find the user in the DB an send it back to the client.

**********************************************************************
<CREATE USER>

CLIENT => '/create-user'
  This route has a create user form. This create user for will hit 
  `/new-user'` and add a user to the DB

API => POST /new-user
  The object that the client is sending is
  `{username: foo, password: bar}`. You'll need to implement the 
  controller to handle this user object.

**********************************************************************
<GET ALL POSTS>

CLIENT => '/posts'
  This route will display all of the blog posts in the DB. Just the 
  title will be shown. Each post will be a link to a 'single' blog 
  post page.

API => GET /posts
  This route will return all of the blog posts you have stored in 
  your database. All we're concerned about here is the blog title and 
  the blog ID. Those are the only neccessary fields you'll need to 
  send back to the client. The client is using the data like this, 
  so at minimum you'll need to return out an array of objects like so:

EXAMPLE =>
  posts: [
    {title: 'This is a fake post', _id: '325kjlljh'},
    {title: 'This is another fake post', _id: '234sdjlk'}
  ],

**********************************************************************
<GET SPECIFIC POST>

CLIENT => '/posts:id'
this route will take the user to the single blog post page. You can 
add comments on this page to a blog post.

API => GET /posts/:id
  This get Post by Id end point should return an object of a single 
  post's data:
  
EXAMPLE =>
  post: {
    title: 'This is a fake blog post title',
    author: {
      name: 'Jen Urso'
      _id: '2lkj3j23,
    },
    _id: '234lj23kjh',
    content: 'This is some classy fake content',
    comments: [
      {text:'This is a class comment', author: 'Stanley Yelnats'},
    ]
  },

**********************************************************************
<CREATE NEW POST>

CLIENT => '/new-post'
  This route will allow the user to create a new blog post. A title 
  and content are given and sent up to the Server.

API => POST /new-post
  This route will take in a new blog post object and save it to the 
  database. You'll need set this up to take an array of comments that 
  can be `referenced` users by `ObjectId`. `/new-post` will also need 
  a `reference` to the author (user) of the post:

EXAMPLE =>
  {
    title: 'This is a fake blog post title',
    author: {
      name: 'Jen Urso'
      _id: '2lkj3j23,
    },
    _id: '234lj23kjh',
    content: 'This is some classy fake content',
    comments: [
      {text:'This is a class comment', author: 'Stanley Yelnats'},
    ]
  }

**********************************************************************
<ADD COMMENT TO POST>

API => PUT/UPDATE /posts/:id
  Your main concern with this `PUT/UPDATE` is to add a comment to the 
  array of comments on a single blog post. You'll need to pull off 
  the ID of the post from the route params to query for the post data.
  The data coming into this `PUT` should look like this:

EXAMPLE =>
  {text:'This is a class comment', author: 'AuthorId(ObjectId)'}

**********************************************************************
<TODOS>

WHAT? =>
  You'll need implement the following routes/models/controllers in 
  order for things to start to come together
  
HOW? =>
  You will want to start with the Models. You'll have a User Schema 
  and Post Schema to implement.

*********************************************************************/
module.exports = {
  createUser,
  getUser,
};
