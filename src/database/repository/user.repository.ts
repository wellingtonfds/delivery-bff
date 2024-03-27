import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { Repository } from "./repository";

@Injectable()
export class UserRepository extends Repository {

    async create(data: Prisma.UserCreateInput): Promise<User> {

        const user = await this.user.create({ data })
        return user
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.user.findFirst({
            where: {
                email: {
                    equals: email
                }
            }
        })
        return user
    }

}