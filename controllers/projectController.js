const createError = require('http-errors');
const User = require('../models/user');
const Project = require('../models/project');

class projectController {
  async get(req, res) {
    try {
      if (typeof req.params.id !== 'undefined') {
        const user = await Project.find({ _id: req.params.id })
          .populate('user')
          .exec();

        if (user.length) {
          return res.json({ result: 'success', data: user });
        }

        return res
          .status(404)
          .json({ result: 'fail', message: 'Project not found' });
      }

      return res.json({ result: 'success', data: await User.find().exec() });
    } catch (e) {
      throw createError(400, e.toString());
    }
  }

  async create(req, res) {
    try {
      const user = await User.findOne({ _id: req.headers.user_id }).exec();

      if (!user) {
        return res
          .status(404)
          .json({ result: 'fail', message: 'User not found' });
      }

      const project = await Project.create({
        name: req.body.name,
        user: req.headers.user_id,
      });

      res.status(201).json({
        result: 'success',
        message: 'Project created',
        data: project,
      });
    } catch (e) {
      throw createError(400, e.toString());
    }
  }
}

module.exports = new projectController();
