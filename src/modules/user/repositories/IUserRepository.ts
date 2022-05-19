import { IUserDTO } from '../dtos/IUserDTO';

export interface IUserRepository {
  create(data: IUserDTO): Promise<void>;
  find(): Promise<IUserDTO[]>;
  findById(id: number): Promise<IUserDTO | undefined>;
  findByEmail(email: string): Promise<IUserDTO | undefined>;
  update(id: number, data: Partial<IUserDTO>): Promise<void>;
  updateWithRelations(id: number, data: Partial<IUserDTO>): Promise<void>;
  delete(id: number): Promise<void>;
  hashPassword(password: string): Promise<string>;
}
