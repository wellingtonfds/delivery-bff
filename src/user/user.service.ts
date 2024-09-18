import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from "./input/create-user.input";
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {


    constructor(private userRepository: UserRepository) { }


    public async createUser(createUserData: CreateUserInput): Promise<User> {

        const saltOrRounds = 10;
        const password = await bcrypt.hash(createUserData.password, saltOrRounds);
        const user = await this.userRepository.create({ ...createUserData, password })
        return user

    }


    async findByEmail(email: string) {
        return this.userRepository.findByEmail(email)
    }
}
