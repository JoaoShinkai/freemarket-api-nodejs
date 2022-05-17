import { inject, injectable } from 'tsyringe';
import { IProductDTO } from '../dtos/IProductDTO';
import { IProductRepository } from '../repositories/IProductRepository';

@injectable()
export class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute(
    id: number,
    data: Partial<IProductDTO>,
    userId: number
  ): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!(product && product.userId === userId)) {
      throw new Error('Product invalid');
    }
    await this.productRepository.update(id, data);
  }
}
