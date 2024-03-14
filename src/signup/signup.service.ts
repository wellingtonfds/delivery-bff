import { Injectable } from '@nestjs/common';
import { CompanyRepository } from 'src/database/repository/company.repository';
import { SingUpInput } from './input/signup.input';

@Injectable()
export class SignupService {

    constructor(private companyRepository: CompanyRepository) { }


    public async createAccount({ companyName, email, name, password }: SingUpInput): Promise<void> {

        await this.companyRepository.create({
            name: companyName,
            users: {
                create: {
                    name,
                    email,
                    password
                }
            }
        })
    }

}
