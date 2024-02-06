import { Module } from '@nestjs/common';
import { CompanyRepository } from './repository/company.repository';
import { ProductRepository } from './repository/product.repository';
import { UserRepository } from './repository/user.repository';

@Module({
    imports: [],
    providers: [ProductRepository, CompanyRepository, UserRepository],
    exports: [ProductRepository, CompanyRepository, UserRepository]
})
export class DatabaseModule { }
