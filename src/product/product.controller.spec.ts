import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductRepository } from '../database/repository/product.repository';
import { Product } from '../database/schemas/product';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';


describe('ProductController', () => {
  let appController: ProductController
  let productService: ProductService
  let productRepository: ProductRepository

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService, ProductRepository, {
        provide: getModelToken(Product.name),
        useValue: new Product()
      }],
    }).compile()

    appController = app.get<ProductController>(ProductController)
    productService = app.get<ProductService>(ProductService)
    productRepository = app.get<ProductRepository>(ProductRepository)

  })

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await appController.getHello()).toBe('Hello World! Product')
    })

    it('should return "itens"', async () => {
      const list = [
        {
          name: "test",
          value: 10,
          discount: 0,
          discountUntil: new Date("2023-11-09T00:50:52.340Z"),
          quantity: 100,
          sku: "123123123123",
          brand: "teste",
          createdAt: new Date("2023-11-09T00:50:52.344Z"),
          updatedAt: new Date("2023-11-09T00:50:52.344Z"),
        }
      ]
      jest.spyOn(productService, 'getList').mockImplementation(async () => list)
      expect(await appController.getList()).toBe(list)
    })
  })
})
