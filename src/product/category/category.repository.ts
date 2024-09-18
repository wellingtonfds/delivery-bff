import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient, ProductCategory } from "@prisma/client";

@Injectable()
export class ProductCategoryRepository extends PrismaClient implements OnModuleInit {


    async onModuleInit() {
        await this.$connect()
    }

    async create(): Promise<ProductCategory> {

        // const product = await this.productCategory.create()
        // return product
        return null
    }

}