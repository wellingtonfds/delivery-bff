import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "../schemas/product";

@Injectable()
export class ProductRepository {

    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    async create(createCatDto: ProductDto): Promise<Product> {
        const createdCat = new this.productModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

}