import Joi from 'joi';

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8)
});

export default loginUserSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
