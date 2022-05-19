import { AuthController } from '@modules/auth/AuthController';
import { UserController } from '@modules/user/infra/http/controllers/UserController';
import createUserSchema from '@modules/user/schemas/createUser.schema';
import loginUserSchema from '@modules/user/schemas/loginUser.schema';
import updateUserSchema from '@modules/user/schemas/updateUser.schema';
import updateUserFavoriteProductsSchema from '@modules/user/schemas/updateUserFavoriteProducts.schema';
import userAuth from '@shared/infra/http/middlewares/userAuth';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';

const userRoutes = Router();
const userController = new UserController();
const authController = new AuthController();

userRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createUserSchema })],
  userController.create
);

userRoutes.get('/', userAuth, userController.list);
userRoutes.get('/:id', userAuth, userController.listById);
userRoutes.delete('/:id', userAuth, userController.delete);
userRoutes.put(
  '/:id',
  userAuth,
  [celebrate({ [Segments.BODY]: updateUserSchema })],
  userController.update
);
userRoutes.put(
  '/:id/products/favorites',
  userAuth,
  [celebrate({ [Segments.BODY]: updateUserFavoriteProductsSchema })],
  userController.updateFavoriteProducts
);
userRoutes.post(
  '/auth',
  [celebrate({ [Segments.BODY]: loginUserSchema })],
  userController.login
);

userRoutes.post('/session-validate', userAuth, authController.VerifyToken);

export { userRoutes };
