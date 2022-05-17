import { ProductRepository } from '@modules/product/infra/typeorm/repositories/ProductRepository';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository
);
