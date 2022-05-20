import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class ListUserFavoriteProductsService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number): Promise<IProductDTO[]> {
    return this.userRepository.findFavoriteProducts(id);
  }
}
