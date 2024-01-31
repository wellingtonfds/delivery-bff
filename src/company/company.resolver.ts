import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CompanyCreateDTO } from "src/dto/company-create.dto";
import { CompanyData } from "src/types/company.dto";
import { CompanyService } from './company.service';


@Resolver()
export class CompanyResolver {

    constructor(private companyService: CompanyService) { }

    @Mutation(() => CompanyData, { nullable: true })
    public async createCompany(@Args('companyCreate') companyCreate: CompanyCreateDTO): Promise<CompanyData> {
        console.log('companyCreate', companyCreate)
        const company = await this.companyService.createOrUpdate(companyCreate)
        return company
    }

}