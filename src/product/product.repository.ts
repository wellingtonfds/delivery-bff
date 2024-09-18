import { Injectable, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient, Product } from "@prisma/client";

@Injectable()
export class ProductRepository extends PrismaClient implements OnModuleInit {


    async onModuleInit() {
        await this.$connect()
    }

    async create(data: Prisma.ProductCreateInput): Promise<Product> {

        const product = await this.product.create({ data })
        return product
    }

}