import { Injectable } from '@nestjs/common';
import { ProductCategory } from '@prisma/client';
import { ProductCategoryRepository } from './category.repository';
import { CreateProductCategoryInput } from './input/create-category';

@Injectable()
export class ProductCategoryService {

    constructor(private repository: ProductCategoryRepository) { }

    async create(createData: CreateProductCategoryInput): Promise<ProductCategory> {



        return null
    }
}
