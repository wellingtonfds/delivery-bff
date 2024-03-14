import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { SignUpResolver } from './signup.resolver';
import { SignupService } from './signup.service';

@Module({
    providers: [SignUpResolver, SignupService],
    imports: [DatabaseModule]
})
export class SignupModule { }
