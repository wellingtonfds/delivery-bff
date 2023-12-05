import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
    constructor(private readonly appService: ProductService) { }

    @Get('/product')
    getHello(): string {
        return this.appService.getHello()
    }

    @Get('/product/list')
    async getList(): Promise<any> {
        const list = await this.appService.getList()
        console.log('list', list)
        return list

    }

    @Post('/product')
    async createProduct(): Promise<any> {
        return await this.appService.create()
    }
}
