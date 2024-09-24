import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';


@Injectable()
export class ProductService {

    constructor(private readonly productRepository: ProductRepository) { }

    public async create(createData: CreateProductDto): Promise<Product> {

        const payload = {
            ...createData,
            category: {
                connect: { id: createData.productCategoryId }
            },
            publish: createData.publish ? new Date() : null
        }
        delete payload.productCategoryId
        const response = await this.productRepository.create(payload)

        return response
    }

    public async update(updateData: UpdateProductDto): Promise<Product> {

        const response = await this.productRepository
        return null

    }
}
