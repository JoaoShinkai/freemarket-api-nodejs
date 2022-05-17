import Joi from 'joi';

const updateUserSchema = Joi.object({
  firstName: Joi.string(),
  secondName: Joi.string(),
  cpf: Joi.string(),
  state: Joi.string().max(2).min(2),
  city: Joi.string(),
  postalCode: Joi.string(),
  street: Joi.string(),
  number: Joi.string(),
  district: Joi.string(),
  phone: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().min(8),
  birthDate: Joi.date()
});

export default updateUserSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
