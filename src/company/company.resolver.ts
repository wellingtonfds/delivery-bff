import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { CompanyData } from "src/types/company.dto";
import { CompanyService } from './company.service';
import { CreateCompanyInput } from "./input/create-company.input";



@Resolver()
export class CompanyResolver {

    constructor(private companyService: CompanyService) { }

    @Mutation(() => CompanyData, { nullable: true })
    public async createCompany(@Args('createCompany') companyCreate: CreateCompanyInput): Promise<CompanyData> {

        const cnpj = companyCreate.cnpj.replace(/\D/g, "");
        const company = await this.companyService.createOrUpdate({ ...companyCreate, cnpj })
        return company
    }

}