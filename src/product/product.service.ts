import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../database/repository/product.repository';


@Injectable()
export class ProductService {

    constructor(private readonly appService: ProductRepository) { }

    getHello(): string {
        return 'Hello World! Product'
    }

    async getList() {
        const response = await this.appService.findAll()
        return response
    }

    async create() {
        const response = await this.appService.create({
            name: 'test',
            value: 10,
            discount: 0,
            discountUntil: new Date(),
            quantity: 100,
            sku: '123123123123',
            brand: 'teste'
        })
    }
}
