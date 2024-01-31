import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductController } from './product.controller';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ProductController],
    providers: [ProductService, ProductResolver]
})
export class ProductModule { }
