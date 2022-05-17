import { CreateProductService } from '@modules/product/services/CreateProductService';
import { DeleteProductService } from '@modules/product/services/DeleteProductService';
import { ListByIdProductService } from '@modules/product/services/ListByIdProductService';
import { ListByUserProductService } from '@modules/product/services/ListByUserProductService';
import { ListProductService } from '@modules/product/services/ListProductService';
import { UpdateProductService } from '@modules/product/services/UpdateProductService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class ProductController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body;

      const createProductService = container.resolve(CreateProductService);

      res.status(201).json(await createProductService.execute(data));
    } catch (err) {
      next(err);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const listProductService = container.resolve(ListProductService);

      res.status(200).json(await listProductService.execute());
    } catch (err) {
      next(err);
    }
  }

  async listById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const listByIdProductService = container.resolve(ListByIdProductService);

      res.status(200).json(await listByIdProductService.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }

  async listByUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { userId } = req;
      const listByUserProductService = container.resolve(
        ListByUserProductService
      );

      res
        .status(200)
        .json(await listByUserProductService.execute(Number(userId)));
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { userId } = req;

      const deleteProductService = container.resolve(DeleteProductService);

      res
        .status(200)
        .json(await deleteProductService.execute(Number(id), Number(userId)));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;
      const { userId } = req;

      const updateProductService = container.resolve(UpdateProductService);
      res
        .status(200)
        .json(
          await updateProductService.execute(Number(id), data, Number(userId))
        );
    } catch (err) {
      next(err);
    }
  }
}
