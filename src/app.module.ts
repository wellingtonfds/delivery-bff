import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CompanyModule } from './company/company.module';
import { DatabaseModule } from "./database/database.module";
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductModule } from "./product/product.module";
import { BigIntScalar } from "./scalars";
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, ProductModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      introspection: true,
      resolvers: { BigInt: BigIntScalar },

    }),
    UserModule,
    CompanyModule,
    ProductCategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
