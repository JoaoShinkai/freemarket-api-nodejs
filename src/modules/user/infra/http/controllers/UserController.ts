import { CreateUserService } from '@modules/user/services/CreateUserService';
import { DeleteUserService } from '@modules/user/services/DeleteUserService';
import { ListUserByIdService } from '@modules/user/services/ListUserByIdService';
import { ListUserFavoriteProductsService } from '@modules/user/services/ListUserFavoriteProductsService';
import { ListUserService } from '@modules/user/services/ListUserService';
import { LoginUserService } from '@modules/user/services/LoginUserService';
import { UpdateUserFavoriteProductsService } from '@modules/user/services/UpdateUserFavoriteProductsService';
import { UpdateUserService } from '@modules/user/services/UpdateUserService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;

      const createUserService = container.resolve(CreateUserService);

      res.status(201).json(await createUserService.execute(data));
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async listById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const listUserByIdService = container.resolve(ListUserByIdService);
      const user = await listUserByIdService.execute(Number(id));

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const listUserService = container.resolve(ListUserService);
      const users = await listUserService.execute();

      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  async listFavorites(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const listUserFavoriteProductsService = container.resolve(
        ListUserFavoriteProductsService
      );
      const users = await listUserFavoriteProductsService.execute(Number(id));

      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const deleteUserService = container.resolve(DeleteUserService);

      res.status(200).json(await deleteUserService.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateUserService = container.resolve(UpdateUserService);

      res.status(200).json(await updateUserService.execute(Number(id), data));
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const loginUserService = container.resolve(LoginUserService);

      res.status(200).json(await loginUserService.execute(email, password));
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }

  async updateFavoriteProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateUserFavoriteProductsService = container.resolve(
        UpdateUserFavoriteProductsService
      );

      res
        .status(200)
        .json(
          await updateUserFavoriteProductsService.execute(Number(id), data)
        );
    } catch (err) {
      next(err);
    }
  }
}
