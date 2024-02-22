import { Injectable, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient, ProductCategory } from "@prisma/client";

@Injectable()
export class ProductCategoryRepository extends PrismaClient implements OnModuleInit {


    async onModuleInit() {
        await this.$connect()
    }

    async create(data: Prisma.ProductCategoryCreateInput): Promise<ProductCategory> {

        const product = await this.productCategory.create({ data })
        return product
    }

}