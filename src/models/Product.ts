import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import User from './User';

@Entity('products')
export default class Product{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
    price: number;

    @Column()
    image: string;

    @Column()
    description: string;

    @Column()
    userId: number;

    @ManyToOne(type => User, products => Product)
    user: User;

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updatedAt: Date;
}
