const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.projectGet = (data) => {
  const schema = Joi.object({
    id: Joi.objectId(),
  });

  return schema.validate(data);
};

module.exports.projectCreate = (data) => {
  const schema = Joi.object({
    userId: Joi.objectId().required(),
    name: Joi.string().min(3).required(),
  });

  return schema.validate({
    userId: data.headers.user_id,
    name: data.body.name,
  });
};
