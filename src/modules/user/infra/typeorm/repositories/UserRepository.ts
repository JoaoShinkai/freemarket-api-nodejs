import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import bcryptjs from 'bcryptjs';
import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

@injectable()
export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: IUserDTO): Promise<void> {
    await this.repository.save(data);
  }

  async find(): Promise<IUserDTO[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<IUserDTO | undefined> {
    return this.repository.findOne(id);
  }

  async findByEmail(email: string): Promise<IUserDTO | undefined> {
    return this.repository.findOne({ email });
  }

  async update(id: number, data: Partial<IUserDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcryptjs.genSalt(8);
    const hashedPass = await bcryptjs.hashSync(password, salt);
    return hashedPass;
  }
}
