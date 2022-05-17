import { productRoutes } from '@modules/product/infra/http/routes/product.routes';
import { userRoutes } from '@modules/user/infra/http/routes/user.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/products', productRoutes);


export { routes };

