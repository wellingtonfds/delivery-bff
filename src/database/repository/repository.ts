import { OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

export abstract class Repository extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect()
    }

}