import { inject, injectable } from 'tsyringe';
import { IUserDTO } from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class UpdateUserFavoriteProductsService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: number, data: Partial<IUserDTO>): Promise<void> {
    await this.userRepository.updateWithRelations(id, data);
  }
}
