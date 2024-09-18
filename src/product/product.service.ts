import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';


@Injectable()
export class ProductService {

    constructor(private readonly appService: ProductRepository) { }

    public async create(createData: CreateProductDto): Promise<Product> {

        const payload = {
            ...createData,
            category: {
                connect: { id: createData.productCategoryId }
            },
            publish: createData.publish ? new Date() : null
        }
        delete payload.productCategoryId
        const response = await this.appService.create(payload)

        return response
    }
}
