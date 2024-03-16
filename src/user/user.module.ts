import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    providers: [UserService, UserResolver],
    imports: [DatabaseModule],
    exports: [UserService]
})
export class UserModule { }
