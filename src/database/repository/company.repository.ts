import { Injectable, OnModuleInit } from "@nestjs/common";
import { Company, Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class CompanyRepository extends PrismaClient implements OnModuleInit {
    d

    async onModuleInit() {
        await this.$connect()
    }

    async create(data: Prisma.CompanyCreateInput): Promise<Company> {

        const company = await this.company.create({ data })
        return company
    }

    async findByCNPJ(cnpj: string) {
        return this.company.findUnique({
            where: {
                cnpj
            }
        })
    }

}