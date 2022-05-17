import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Product from '../../models/Product';
import User from '../../models/User';

class ProductController{
    async list(req: Request, res: Response){
        const repo = getRepository(Product);

        const products = await repo.find();

        return res.json(products);
    }

    async create(req: Request, res: Response){
        const { name, image, description, price } = req.body;
        const userId = req.userId;

        const repo = getRepository(Product);
        const userRepo = getRepository(User);

        const user = await userRepo.findOne({
            where: {
                id: userId
            }
        })

        if(!userId){
            return res.sendStatus(401);
        }

        var product = repo.create({
            name,
            image,
            description,
            price,
            user
        })

        await repo.save(product);

        return res.json(product);
    }

    async update(req: Request, res: Response){
        var {id, name, image, description, price} = req.body;
        var userId = req.userId;

        const productRepo = getRepository(Product);

        const product = await productRepo.findOne({
            where: {
                id: id,
                userId: userId
            }
            //relations: ['user']
        })

        if(!product){
            return res.sendStatus(401);
        }

        const newProduct = {...product,
            name: name || product.name,
            image: image || product.image,
            description: description || product.description,
            price: price || product.price
        }

        try{
            await productRepo.update({id: id}, newProduct);

            res.status(200).send();
        }catch(err){
            res.status(500).send();
        }

    }

}

export default new ProductController();