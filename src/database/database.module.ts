import { Module } from '@nestjs/common';
import { ProductCategoryRepository } from '../product/category/category.repository';
import { ProductRepository } from '../product/product.repository';
import { UserRepository } from '../user/user.repository';

@Module({
    imports: [],
    providers: [ProductRepository, UserRepository, ProductCategoryRepository],
    exports: [ProductRepository, UserRepository, ProductCategoryRepository]
})
export class DatabaseModule { }
