import { Injectable } from '@nestjs/common';
import { ProductCategory } from '@prisma/client';
import { ProductCategoryRepository } from 'src/database/repository/product-category.repository';
import { CreateProductCategoryInput } from './input/create-product-category';

@Injectable()
export class ProductCategoryService {

    constructor(private repository: ProductCategoryRepository) { }

    async create(createData: CreateProductCategoryInput): Promise<ProductCategory> {

        console.log('createData', createData)
        let payload = {
            ...createData,
            company: {
                connect: { id: createData.companyId }
            }

        }
        delete payload.companyId
        const response = await this.repository.create(payload)

        return response
    }
}
