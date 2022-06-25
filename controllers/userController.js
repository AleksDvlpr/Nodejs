const createError = require('http-errors');
const User = require('../models/user');

class userController {
  async get(req, res) {
    try {
      if (typeof req.params.id !== 'undefined') {
        const user = await User.find({ _id: req.params.id }).exec();

        if (user.length) {
          return res.json({ result: 'success', data: user });
        }

        return res
          .status(404)
          .json({ result: 'fail', message: 'User not found' });
      }

      return res.json({ result: 'success', data: await User.find().exec() });
    } catch (e) {
      throw createError(400, e.toString());
    }
  }

  async create(req, res) {
    try {
      const data = req.body;

      const user = await User.create({
        name: data.name,
        age: data.age,
        profession: data.profession,
      });

      res.status(201).json({
        result: 'success',
        message: 'User created',
        data: user,
      });
    } catch (e) {
      throw createError(400, e.toString());
    }
  }

  async update(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id }).exec();

      if (!user) {
        return res
          .status(404)
          .json({ result: 'fail', message: 'User not found' });
      }

      await user.updateUser(req.body);

      return res.status(200).json({
        result: 'success',
        message: 'User data updated',
        data: user,
      });
    } catch (e) {
      return res.status(400).json({ result: 'fail', message: e.toString() });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id }).exec();

      if (!user) {
        return res
          .status(404)
          .json({ result: 'fail', message: 'User not found' });
      }

      await user.remove();

      return res.json({
        result: 'success',
        message: 'User deleted',
      });
    } catch (e) {
      return res.status(400).json({ result: 'fail', message: e.toString() });
    }
  }
}

module.exports = new userController();
