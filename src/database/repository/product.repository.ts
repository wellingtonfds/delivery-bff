import { Injectable, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class ProductRepository extends PrismaClient implements OnModuleInit {


    async onModuleInit() {
        await this.$connect()
    }

    async find(where?: Prisma.productWhereUniqueInput) {
        return this.product.findMany({ where })

    }


    async list(skip: number = 0, take: number = 10, where?: Prisma.productWhereUniqueInput) {
        return this.product.findMany({ skip, take, where })

    }

    async createProduct(data: Prisma.productCreateInput) {
        return this.product.create({ data })
    }



}