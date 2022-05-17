import { getRepository } from 'typeorm';
import User from '../../../models/User';

export class FindUserByIdService{
    async execute(id: number){
        const repo = getRepository(User);
        const user = await repo.findOne({where: {id: id}});

        if(user){
            return user;
        }

        throw Error('Usuário não encontrado');
    }
}