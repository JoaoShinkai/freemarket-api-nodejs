interface ICreateProductService{
    name: string;
    image: string;
    description: string;
    price: number;
    userId: number;
}

export class CreateProductService{
    async execute({name, image, description, price, userId}: ICreateProductService){

    }
}