const express = require('express');
const projectController = require('../controllers/projectController');
const {
  projectGetValidate,
  projectPostValidate,
} = require('../middleware/project');

const router = express.Router();

router.get('/project/:id', projectGetValidate, projectController.get);
router.post('/project', projectPostValidate, projectController.create);

module.exports = router;
