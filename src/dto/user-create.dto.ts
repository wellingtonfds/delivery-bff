import { Field, InputType, ObjectType } from "@nestjs/graphql"

@InputType()
export class UserCreateDTO {

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string

}