const mongoose = require('mongoose');

const fruitsDataSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  options: [{
    Large: String,
    Medium: String,
    Small: String
  }],
  description: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('fruits', fruitsDataSchema);
