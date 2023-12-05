import { Module } from '@nestjs/common';
import { ProductRepository } from './repository/product.repository';

@Module({
    imports: [],
    providers: [ProductRepository],
    exports: [ProductRepository]
})
export class DatabaseModule { }
