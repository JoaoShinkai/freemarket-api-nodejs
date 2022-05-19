import Joi from 'joi';

const updateUserFavoriteProductSchema = Joi.object({
  favorites: Joi.array().items(
    Joi.object({
      id: Joi.number().positive()
    })
  )
});

export default updateUserFavoriteProductSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
