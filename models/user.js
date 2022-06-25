const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  profession: String,
});

// eslint-disable-next-line func-names
schema.methods.updateUser = async function (data) {
  this.name = data.name || this.name;
  this.age = data.age || this.age;
  this.profession = data.profession || this.profession;
  this.save();
};

const User = mongoose.model('User', schema);

module.exports = User;
