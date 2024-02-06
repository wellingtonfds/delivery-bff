import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsNumber, IsStrongPassword } from "class-validator";

@InputType()
export class CreateUserInput {

    @Field()
    name: string

    @Field()
    @IsEmail()
    email: string

    @Field()
    @IsStrongPassword()
    password: string

    @Field(() => Int)
    @IsNumber()
    companyId: bigint

}