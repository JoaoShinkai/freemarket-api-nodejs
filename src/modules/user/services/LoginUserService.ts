import bcrypt from 'bcryptjs';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { IUserDTO } from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

interface ILoginUser {
  user: Partial<IUserDTO>;
  token: string;
}

@injectable()
export class LoginUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(email: string, pass: string): Promise<ILoginUser> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email and/or password is invalid');
    }

    const isValidPassword = await bcrypt.compare(pass, user.password);

    if (!isValidPassword) {
      throw new Error('Email and/or password is invalid');
    }

    const token = jwt.sign(
      {
        id: user.id,
        firstName: user.firstName,
        secondName: user.secondName,
        email: user.email
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d'
      }
    );

    const newUser: Partial<IUserDTO> = user;

    delete newUser.password;

    return { user: newUser, token };
  }
}
