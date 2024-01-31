import { Injectable } from '@nestjs/common';
import { CompanyRepository } from 'src/database/repository/company.repository';
import { CompanyCreateDTO } from 'src/dto/company-create.dto';


@Injectable()
export class CompanyService {

    constructor(private companyRepository: CompanyRepository) { }

    async createOrUpdate(createData: CompanyCreateDTO) {
        return await this.companyRepository.create({
            ...createData
        })
    }
}