import { Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UserData {

    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string

    @Field(() => Date)
    createAt: Date

    @Field(() => Date)
    updateAt: Date



}