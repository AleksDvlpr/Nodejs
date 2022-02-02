const createError = require('http-errors');
const Users = require('../models/users');
// const User = require('../models/User');

class userController {
  get(req, res) {
    try {
      if (typeof req.params.id !== 'undefined') {
        const user = Users.findOne(req.params.id);
        if (user) {
          res.json({ result: 'success', data: user });
          return;
        }

        res.status(404).json({ result: 'fail', message: 'User not found' });
        return;
      }

      res.json({ result: 'success', data: JSON.parse(Users.find()) });
    } catch (e) {
      throw createError(400, e.toString());
    }
  }

  create(req, res) {
    try {
      const { users } = JSON.parse(Users.find());

      /**
       * получим следующий id, который присвоим новой записи.
       * В боевых условиях можно было бы генерировать uuid, но в данном случае используем числовой id, чтобы
       * можно было использовать его в get-запросах для получения конкретной записи пользователя
       */
      const ids = users.map((a) => a.id);
      req.body.id = ids.length ? Math.max.apply(null, ids) + 1 : 1;

      if (Users.save(users, req.body)) {
        res.status(201).json({
          result: 'success',
          message: 'User created',
          data: JSON.parse(Users.find()),
        });
      }
    } catch (e) {
      throw createError(400, e.toString());
    }
  }

  update(req, res) {
    try {
      const { users } = JSON.parse(Users.find());

      if (users.some((a) => a.id === +req.params.id) === false) {
        throw 404;
      }

      Object.keys(users).forEach((key) => {
        if (users[key].id === +req.params.id) {
          if (typeof req.body.name !== 'undefined') {
            users[key].name = req.body.name;
          }
          if (typeof req.body.age !== 'undefined') {
            users[key].age = +req.body.age;
          }
          if (typeof req.body.profession !== 'undefined') {
            users[key].profession = req.body.profession;
          }

          if (Users.save(users)) {
            res.status(201).json({
              result: 'success',
              message: 'User data updated',
              data: JSON.parse(Users.find()),
            });
          }
        }
      });
    } catch (e) {
      if (e === 404) {
        res.status(404).json({ result: 'fail', message: 'User not found' });
        return;
      }

      res.status(400).json({ result: 'fail', message: e.toString() });
    }
  }

  delete(req, res) {
    try {
      let { users } = JSON.parse(Users.find());

      if (users.some((a) => a.id === +req.params.id) === false) throw 404;

      users = Users.delete(users, req.params.id);

      if (Users.save(users)) {
        res.json({
          result: 'success',
          message: 'User deleted',
          data: JSON.parse(Users.find()),
        });
      }
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
