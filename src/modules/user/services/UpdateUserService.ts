import { inject, injectable } from 'tsyringe';
import { IUserDTO } from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number, data: Partial<IUserDTO>): Promise<void> {
    if (data.email) {
      const emailAlreadyExists = await this.userRepository.findByEmail(
        data.email
      );
      if (emailAlreadyExists) {
        throw new Error('Email already registered');
      }
    }

    await this.userRepository.update(id, data);
  }
}
