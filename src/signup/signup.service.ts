import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CompanyRepository } from 'src/database/repository/company.repository';
import { SingUpInput } from './input/signup.input';

@Injectable()
export class SignupService {

    constructor(private companyRepository: CompanyRepository) { }


    public async createAccount({ companyName, email, name, password }: SingUpInput): Promise<void> {
        const saltOrRounds = 10;
        const passwordCrypt = await bcrypt.hash(password, saltOrRounds);
        await this.companyRepository.create({
            name: companyName,
            users: {
                create: {
                    name,
                    email,
                    password: passwordCrypt
                }
            }
        })
    }

}
