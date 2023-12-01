import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRepository } from './repository/product.repository';
import { Product, ProductSchema } from './schemas/product';

@Module({
    imports: [
        MongooseModule.forRoot("mongodb://localhost:27017"),
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductSchema },
            { name: Product.name, schema: ProductSchema }
            { name: Product.name, schema: ProductSchema }
            { name: Product.name, schema: ProductSchema }
        ])
    ],
    providers: [ProductRepository],
    exports: [ProductRepository]
})
export class DatabaseModule { }
