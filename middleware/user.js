const {
  userGet,
  userCreate,
  userUpdate,
  userDelete,
} = require('../validations/user');

module.exports.userGetValidate = (req, res, next) => {
  const { error } = userGet(req.params);
  if (error) throw new Error(error);
  next();
};

module.exports.userPostValidate = (req, res, next) => {
  const { error } = userCreate(req.body);
  if (error) throw new Error(error);
  next();
};

module.exports.userUpdateValidate = (req, res, next) => {
  const { error } = userUpdate(req);
  if (error) throw new Error(error);
  next();
};

module.exports.userDeleteValidate = (req, res, next) => {
  const { error } = userDelete(req.params);
  if (error) throw new Error(error);
  next();
};
