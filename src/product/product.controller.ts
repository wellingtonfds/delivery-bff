import { Controller, Get } from '@nestjs/common';
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


    }
}
