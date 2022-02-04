const createError = require('http-errors');
const { User } = require('../models/index');

class userController {
  async get(req, res) {
    try {
      if (typeof req.params.id !== 'undefined') {
        const user = await User.getUser(req.params.id);

        if (user.length) {
          res.json({ result: 'success', data: user });
          return;
        }

        res.status(404).json({ result: 'fail', message: 'User not found' });
        return;
      }

      res.json({ result: 'success', data: await User.findAll() });
    } catch (e) {
      throw createError(400, e.toString());
    }
  }

  async create(req, res) {
    try {
      const user = await User.createUser(req.body);

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
      let user = await User.getUserByPk(req.params.id);

      user = await User.updateUser(user, req.body);

      res.status(201).json({
        result: 'success',
        message: 'User data updated',
        data: user,
      });
    } catch (e) {
      if (e === 404) {
        res.status(404).json({ result: 'fail', message: 'User not found' });
        return;
      }

      res.status(400).json({ result: 'fail', message: e.toString() });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.getUserByPk(req.params.id);

      await user.destroy();

      res.json({
        result: 'success',
        message: 'User deleted',
      });
    } catch (e) {
      if (e === 404) {
        res.status(404).json({ result: 'fail', message: 'User not found' });
        return;
      }

      res.status(400).json({ result: 'fail', message: e.toString() });
    }
  }
}

module.exports = new userController();
