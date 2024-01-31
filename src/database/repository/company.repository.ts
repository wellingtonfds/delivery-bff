import { Injectable, OnModuleInit } from "@nestjs/common";
import { Company, Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class CompanyRepository extends PrismaClient implements OnModuleInit {




    async onModuleInit() {
        await this.$connect()
    }

    async create(data: Prisma.CompanyCreateInput): Promise<Company> {
        console.log('data', data)
        const company = await this.company.create({ data })
        console.log('company', company)
        return company
    }

}