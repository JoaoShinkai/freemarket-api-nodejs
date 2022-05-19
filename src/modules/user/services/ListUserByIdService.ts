import { inject, injectable } from 'tsyringe';
import { IUserDTO } from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class ListUserByIdService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number): Promise<Partial<IUserDTO> | undefined> {
    const user = await this.userRepository.findById(id);
    const newUser: Partial<IUserDTO | undefined> = user;
    if (newUser !== undefined) {
      delete newUser.password;
    }
    return newUser;
  }
}
