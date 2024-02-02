import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { CompanyData } from "src/types/company.dto";
import { CompanyService } from './company.service';
import { CompanyCreateInput } from "./input/company-create.input";


@Resolver()
export class CompanyResolver {

    constructor(private companyService: CompanyService) { }

    @Mutation(() => CompanyData, { nullable: true })
    public async createCompany(@Args('companyCreate') companyCreate: CompanyCreateInput): Promise<CompanyData> {
        const company = await this.companyService.createOrUpdate(companyCreate)
        return company
    }

}