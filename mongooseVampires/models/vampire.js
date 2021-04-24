const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  // add your code here to set up your schema
  name: {type: String, required: true, unique: true},
  title: {type: String},
  dob: {type: Date, default: Date.now()},
  hair_color: {type: String, default: 'Blonde'},
  eye_color: {type: String},
  loves: [{type: String}],
  location: {type: String},
  gender: {type: String},
  victims: {type: Number, min: 1}
});

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;