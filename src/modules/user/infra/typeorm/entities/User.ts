import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { IUserDTO } from '@modules/user/dtos/IUserDTO';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User extends DefaultEntity implements IUserDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'second_name' })
  secondName: string;

  @Column()
  cpf: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column({ name: 'postal_code' })
  postalCode: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  district: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @OneToMany(() => Product, () => User)
  products: Product[];
}
