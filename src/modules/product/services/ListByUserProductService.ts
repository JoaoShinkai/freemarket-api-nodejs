import { inject, injectable } from 'tsyringe';
import { IProductDTO } from '../dtos/IProductDTO';
import { IProductRepository } from '../repositories/IProductRepository';

@injectable()
export class ListByUserProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute(userId: number): Promise<IProductDTO[]> {
    return this.productRepository.findByUser(userId);
  }
}
