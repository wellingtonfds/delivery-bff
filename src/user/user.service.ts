import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../database/repository/user.repository';
import { CreateUserInput } from "./input/create-user.input";

@Injectable()
export class UserService {


    constructor(private userRepository: UserRepository) { }

    public async createUser(createUserData: CreateUserInput): Promise<User> {

        const saltOrRounds = 10;
        const password = await bcrypt.hash(createUserData.password, saltOrRounds);
        const user = await this.userRepository.create({ ...createUserData, password })
        return user

    }
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string) {
        return this.users.find(user => user.username === username);
    }
}
