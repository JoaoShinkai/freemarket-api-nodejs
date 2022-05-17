import Joi from 'joi';

const updateProductSchema = Joi.object({
  name: Joi.string(),
  image: Joi.string(),
  description: Joi.string(),
  price: Joi.number()
});

export default updateProductSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
