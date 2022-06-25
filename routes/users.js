const express = require('express');
const userController = require('../controllers/userController');
const {
  userGetValidate,
  userPostValidate,
  userUpdateValidate,
  userDeleteValidate,
} = require('../middleware/user');

const router = express.Router();

router.get(['/users', '/users/:id'], userGetValidate, userController.get);
router.post('/users', userPostValidate, userController.create);
router.patch('/users/:id', userUpdateValidate, userController.update);
router.delete('/users/:id', userDeleteValidate, userController.delete);

module.exports = router;
