const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
});

const Project = mongoose.model('Project', schema);

module.exports = Project;
