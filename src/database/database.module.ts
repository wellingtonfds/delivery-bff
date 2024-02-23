import { Module } from '@nestjs/common';
import { CompanyRepository } from './repository/company.repository';
import { ProductCategoryRepository } from './repository/product-category.repository';
import { ProductRepository } from './repository/product.repository';
import { UserRepository } from './repository/user.repository';

@Module({
    imports: [],
    providers: [ProductRepository, CompanyRepository, UserRepository, ProductCategoryRepository],
    exports: [ProductRepository, CompanyRepository, UserRepository, ProductCategoryRepository]
})
export class DatabaseModule { }
