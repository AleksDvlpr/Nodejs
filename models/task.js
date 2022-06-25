const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  description: String,
  user_id: Number,
  project_id: Number,
});

const Task = mongoose.model('Task', schema);

module.exports = Task;
