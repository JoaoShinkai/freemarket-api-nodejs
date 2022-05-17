import createProductSchema from '@modules/product/schemas/createProduct.schema';
import updateProductSchema from '@modules/product/schemas/updateProduct.schema';
import userAuth from '@shared/infra/http/middlewares/userAuth';
import { celebrate, Segments } from 'celebrate';
import Router from 'express';
import { ProductController } from '../controllers/ProductController';

const productRoutes = Router();
const productController = new ProductController();

productRoutes.post(
  '/',
  userAuth,
  [celebrate({ [Segments.BODY]: createProductSchema })],
  productController.create
);
productRoutes.get('/', productController.list);
productRoutes.get('/my-products', userAuth, productController.listByUser);
productRoutes.get('/:id', productController.listById);
productRoutes.delete('/:id', userAuth, productController.delete);
productRoutes.put(
  '/:id',
  userAuth,
  [celebrate({ [Segments.BODY]: updateProductSchema })],
  productController.update
);

export { productRoutes };
