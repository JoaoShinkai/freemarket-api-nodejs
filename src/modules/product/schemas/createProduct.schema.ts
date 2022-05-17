import Joi from 'joi';

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  userId: Joi.number().required()
});

export default createProductSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
