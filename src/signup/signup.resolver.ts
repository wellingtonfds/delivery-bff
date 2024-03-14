import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { SingUpInput } from "./input/signup.input";
import { SignupService } from "./signup.service";

@Resolver()
export class SignUpResolver {
    constructor(private signUpService: SignupService) { }


    @Mutation(() => String, { nullable: true })
    public async signUp(@Args('signUpData') singUpInput: SingUpInput): Promise<string> {
        await this.signUpService.createAccount(singUpInput)
        return 'ok'
    }

}