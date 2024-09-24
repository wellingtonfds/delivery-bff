import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';


describe('ProductService', () => {
    let service: ProductService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductService, ProductRepository],
        }).compile();

        service = module.get<ProductService>(ProductService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should be create a product', () => {
        const createData: CreateProductDto = new CreateProductDto()
        createData.productCategoryId = BigInt(1)
        createData.name = 'Test Product'
        createData.value = 10.99
        createData.discount = 0.2
        createData.description = 'Test Product Description'
        createData.smallDescription = 'Test Product Small Description'
        createData.discountUntil = new Date()
        createData.quantity = 100
        createData.sku = 'TEST-123'
        createData.publish = true
        jest.spyOn(service, 'create').mockResolvedValue({
            id: BigInt(1),
            name: createData.name,
            value: new Decimal(createData.value),
            discount: new Decimal(createData.discount),
            description: createData.description,
            smallDescription: createData.smallDescription,
            discountUntil: createData.discountUntil,
            photo: '',
            thumb: '',
            quantity: createData.quantity,
            publish: new Date(),
            categoryId: createData.productCategoryId,
            createdAt: new Date(),
            updatedAt: new Date(),
            category: {
                id: createData.productCategoryId,
                name: ''
            }
        } as unknown as Product)

        service.create(createData).then(product => {
            expect(product).toBeDefined()
        })
    })

    it('should be update a product', () => {
        const createData: UpdateProductDto = new UpdateProductDto()
        createData.productCategoryId = BigInt(1)
        createData.name = 'Test Product'
        createData.value = 10.99
        createData.discount = 0.2
        createData.description = 'Test Product Description'
        createData.smallDescription = 'Test Product Small Description'
        createData.discountUntil = new Date()
        createData.quantity = 100
        createData.sku = 'TEST-123'
        createData.publish = true
        jest.spyOn(service, 'update').mockResolvedValue({
            id: BigInt(1),
            name: createData.name,
            value: new Decimal(createData.value),
            discount: new Decimal(createData.discount),
            description: createData.description,
            smallDescription: createData.smallDescription,
            discountUntil: createData.discountUntil,
            photo: '',
            thumb: '',
            quantity: createData.quantity,
            publish: new Date(),
            categoryId: createData.productCategoryId,
            createdAt: new Date(),
            updatedAt: new Date(),
            category: {
                id: createData.productCategoryId,
                name: ''
            }
        } as unknown as Product)

        service.create(createData).then(product => {
            expect(product).toBeDefined()
        })
    })
});
