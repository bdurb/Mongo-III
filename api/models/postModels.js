// creating a variable called mongoose that requires the mongoose library.
const mongoose = require('mongoose');

// setting up the Schema for Posts using mongoose.Schema.
const PostSchema = new mongoose.Schema ({
  _parent: {
    type: Number,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    
  }
})