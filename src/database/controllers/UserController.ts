import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import User from '../../models/User';
dotenv.config();


class UserController{
    

    async create(req: Request, res: Response){
        const repo = getRepository(User);

        const {firstName, secondName, cpf, state, city, postalCode, street, number, district, phone, email, password, birthDate} = req.body;

        const emailExists = await repo.findOne({
            where: {
                email: email
            }
        })

        if(emailExists){
            return res.sendStatus(409);
        }

        const user = repo.create({
            firstName,
            secondName,
            cpf,
            state,
            city,
            postalCode,
            street,
            number,
            district,
            phone,
            email,
            password,
            birthDate
        })

        await repo.save(user);

        return res.json(user);
    }

    async list(req: Request, res: Response){
        const repo = getRepository(User);
        var users = await repo.find();

        return res.json(users);
    }

    async findById(req: Request, res: Response){
        const id = req.params.id;
        
    }

    async login(req: Request, res: Response){
        var { email } = req.body;
        var pass = req.body.password;

        var repo = getRepository(User);

        var user = await repo.findOne({
            where: {
                email: email
            }
        })

        if(user){
            var passIsValid = bcrypt.compare(pass, user.password);
            if(!passIsValid){
                return res.sendStatus(401);
            }

            const token = jwt.sign({id: user.id}, process.env.JWT_SECRET as string , { expiresIn: '1d' });

            const {password, ...newUser} = user; //Retira a propriedade "Password" do objeto user e salva o retorno em newUser

            return res.json({
                newUser,
                token
            })

        } else {
            return res.sendStatus(401);
        }
    }
}

export default new UserController();