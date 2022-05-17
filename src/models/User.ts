import bcrypt from 'bcryptjs';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Product from './Product';

@Entity('users')
class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column()
    cpf: string;

    @Column()
    birthDate: Date;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    postalCode: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    district: string;

    @Column()
    phone: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @OneToMany(type => Product, user => User)
    products: Product[];

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password, 8);
    }

}

export default User;