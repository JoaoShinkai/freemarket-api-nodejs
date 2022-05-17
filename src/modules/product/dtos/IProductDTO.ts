import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IProductDTO extends IDefaultDTO {
  name: string;
  image: string;
  description: string;
  price: number;
  userId: number;
}
