import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';


@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [ProductService, ProductResolver]
})
export class ProductModule { }
