import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../database/repository/product.repository';


@Injectable()
export class ProductService {

    constructor(private readonly appService: ProductRepository) { }

    getHello(): string {
        return 'Hello World! Product'
    }



    async create() {
        // const response = await this.appService.createProduct({
        //     name: 'test',
        //     value: 10,
        //     discount: 0,
        //     discountUntil: new Date(),
        //     quantity: 100,
        //     sku: '123123123123',
        //     brand: 'teste'
        // })
    }
}
