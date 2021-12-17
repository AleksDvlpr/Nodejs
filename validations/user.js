const Joi = require('joi')

module.exports.userGet = (data) => {
  const schema = Joi.object({
    id: Joi.number().integer(),
  })

  return schema.validate(data)
}

module.exports.userCreate = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().integer().max(100).required(),
    profession: Joi.string().required(),
  })

  return schema.validate(data)
}

module.exports.userUpdate = (data) => {
  const input = {
    id: data.params.id,
    name: data.body.name,
    age: data.body.age,
    profession: data.body.profession,
  }

  let schema;

  if (data.method === 'PATCH') {
    schema = Joi.object({
      id: Joi.number().integer().required(),
      name: Joi.string().min(3),
      age: Joi.number().integer().max(100),
      profession: Joi.string(),
    })
  } else if (data.method === 'PUT') {
    schema = Joi.object({
      id: Joi.number().integer().required(),
      name: Joi.string().min(3).required(),
      age: Joi.number().integer().max(100).required(),
      profession: Joi.string().required(),
    })
  }

  return schema.validate(input)
}

module.exports.userDelete = (data) => {
  const schema = Joi.object({
    id: Joi.number().integer().required(),
  })

  return schema.validate(data)
}
