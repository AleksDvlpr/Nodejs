const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get(['/users', '/users/:id'], userController.get);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.patch('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;
