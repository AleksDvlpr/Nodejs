const { projectGet, projectCreate } = require('../validations/project');

module.exports.projectGetValidate = (req, res, next) => {
  const { error } = projectGet(req.params);
  if (error) throw new Error(error);
  next();
};

module.exports.projectPostValidate = (req, res, next) => {
  const { error } = projectCreate(req);
  if (error) throw new Error(error);
  next();
};
