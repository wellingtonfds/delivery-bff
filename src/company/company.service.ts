import { Injectable } from '@nestjs/common';

import { Company } from '@prisma/client';
import { CompanyRepository } from 'src/database/repository/company.repository';
import { CreateCompanyInput } from './input/create-company.input';


@Injectable()
export class CompanyService {

    constructor(private companyRepository: CompanyRepository) { }

    async createOrUpdate(createData: CreateCompanyInput): Promise<Company> {

        const hasCompany = await this.companyRepository.findByCNPJ(createData.cnpj)
        if (hasCompany) {
            throw new Error("CNPJ já está cadastrado, qualquer dúvida entrar em contato com suporte")
        }

        return await this.companyRepository.create({
            ...createData
        })
    }
}