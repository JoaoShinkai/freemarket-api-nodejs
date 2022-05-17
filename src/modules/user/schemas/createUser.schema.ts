import Joi from 'joi';

const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  secondName: Joi.string().required(),
  cpf: Joi.string().required(),
  state: Joi.string().max(2).min(2).required(),
  city: Joi.string().required(),
  postalCode: Joi.string().required(),
  street: Joi.string().required(),
  number: Joi.string().required(),
  district: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  birthDate: Joi.date().required()
});
export default createUserSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
