import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
