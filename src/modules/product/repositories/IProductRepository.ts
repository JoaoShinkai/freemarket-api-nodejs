import { IProductDTO } from '../dtos/IProductDTO';

export interface IProductRepository {
  create(data: IProductDTO): Promise<void>;
  find(): Promise<IProductDTO[]>;
  findById(id: number): Promise<IProductDTO | undefined>;
  findByUser(userId: number): Promise<IProductDTO[]>;
  update(id: number, data: Partial<IProductDTO>): Promise<void>;
  delete(id: number): Promise<void>;
}
