import { Injectable } from '@nestjs/common';

import { Company } from '@prisma/client';
import { CompanyRepository } from 'src/database/repository/company.repository';
import { CompanyCreateInput } from './input/company-create.input';


@Injectable()
export class CompanyService {

    constructor(private companyRepository: CompanyRepository) { }

    async createOrUpdate(createData: CompanyCreateInput): Promise<Company> {

        const hasCompany = await this.companyRepository.findByCNPJ(createData.cnpj)
        if (hasCompany) {
            throw new Error("CNPJ já está cadastrado, qualquer dúvida entrar em contato com suporte")
        }

        return await this.companyRepository.create({
            ...createData
        })
    }
}