import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { ProductRepository } from '../database/repository/product.repository';
import { CreateProductInput } from './input/create-product.input';


@Injectable()
export class ProductService {

    constructor(private readonly appService: ProductRepository) { }

    getHello(): string {
        return 'Hello World! Product'
    }

    async create(createData: CreateProductInput): Promise<Product> {

        const response = await this.appService.create({
            ...createData,
            publish: createData.publish ? new Date() : null
        })

        return response
    }
}
