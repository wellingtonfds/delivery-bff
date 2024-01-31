import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';

@Module({
    providers: [CompanyResolver, CompanyService],
    imports: [DatabaseModule]
})
export class CompanyModule { }
