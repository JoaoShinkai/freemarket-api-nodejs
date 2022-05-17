import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { getRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

export class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create(data: IProductDTO): Promise<void> {
    await this.repository.save(data);
  }

  async find(): Promise<IProductDTO[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<IProductDTO | undefined> {
    return this.repository.findOne(id, { relations: ['user'] });
  }

  async findByUser(userId: number): Promise<IProductDTO[]> {
    return this.repository.find({ userId });
  }

  async update(id: number, data: Partial<IProductDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
