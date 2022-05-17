import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repositories/IProductRepository';

@injectable()
export class DeleteProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute(id: number, userId: number): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!(product && product.userId === userId)) {
      throw new Error('Product invalid');
    }
    await this.productRepository.delete(id);
  }
}
