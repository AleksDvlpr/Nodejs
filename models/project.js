const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = Schema({
  name: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Project = mongoose.model('Project', schema);

module.exports = Project;
