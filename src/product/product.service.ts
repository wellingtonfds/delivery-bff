import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../database/repository/product.repository';


@Injectable()
export class ProductService {

    constructor(private readonly appService: ProductRepository) { }

    getHello(): string {
        return 'Hello World! Product'
    }

    // async createOrUpdate(createData): Promise<Company> {

    //     const hasCompany = await this.companyRepository.findByCNPJ(createData.cnpj)
    //     if (hasCompany?.id) {
    //         throw new Error("CNPJ já está cadastrado, qualquer dúvida entrar em contato com suporte")
    //     }

    //     const returnData = await this.companyRepository.create({
    //         ...createData
    //     })

    //     return returnData
    // }


    async create() {
        // const response = await this.appService.createProduct({
        //     name: 'test',
        //     value: 10,
        //     discount: 0,
        //     discountUntil: new Date(),
        //     quantity: 100,
        //     sku: '123123123123',
        //     brand: 'teste'
        // })
    }
}
