// creating a variable called mongoose that requires the mongoose library.
const mongoose = require('mongoose');

// setting up the Schema for Posts using mongoose.Schema.
const PostSchema = new mongoose.Schema ({

  title: {
    type: String,
    required: true,
  },
  author: {
    name: String,
    _id: { type: String, ref: 'User' },

  },
  content: String,
  comments: [
    {text: String, author: String},
  ]
})
