import { Module } from '@nestjs/common';
import { CompanyRepository } from './repository/company.repository';
import { ProductRepository } from './repository/product.repository';

@Module({
    imports: [],
    providers: [ProductRepository, CompanyRepository],
    exports: [ProductRepository, CompanyRepository]
})
export class DatabaseModule { }
