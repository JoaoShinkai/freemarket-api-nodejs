import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product extends DefaultEntity implements IProductDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, () => Product)
  user: User;
}
