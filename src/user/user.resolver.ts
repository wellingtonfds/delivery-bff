import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./input/create-user.input";
import { UserService } from "./user.service";



@Resolver()
export class UserResolver {

    constructor(private userService: UserService) { }

    @Mutation(() => String, { nullable: true })
    public async createUser(@Args('createUser') createUser: CreateUserInput): Promise<string> {
        console.log('createUser', createUser)
        const user = await this.userService.createUser(createUser)
        console.log('return user', user)
        return 'ok'
    }

}