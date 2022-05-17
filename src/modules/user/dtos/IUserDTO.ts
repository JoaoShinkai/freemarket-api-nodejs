import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IUserDTO extends IDefaultDTO {
  firstName: string;

  secondName: string;

  cpf: string;

  state: string;

  city: string;

  postalCode: string;

  street: string;

  number: string;

  district: string;

  phone: string;

  email: string;

  password: string;

  birthDate: Date;
}
