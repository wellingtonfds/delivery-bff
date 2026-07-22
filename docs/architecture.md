# Arquitetura do delivery-bff

## Visão geral

O `delivery-bff` é uma aplicação NestJS que expõe uma API GraphQL para o domínio de delivery. A aplicação usa Prisma Client para acessar PostgreSQL, com modelos definidos em `prisma/schema.prisma`.

Fluxo principal de uma operação GraphQL:

```text
Cliente GraphQL
  -> Resolver NestJS
  -> Service do domínio
  -> Repository Prisma
  -> Prisma Client
  -> PostgreSQL
```

## Bootstrap da aplicação

Arquivo: `src/main.ts`

Responsabilidades:

- Criar a aplicação NestJS a partir de `AppModule`.
- Registrar `ValidationPipe` global.
- Habilitar CORS com `origin: true`.
- Registrar `PrismaClientExceptionFilter` como filtro global.
- Iniciar HTTP server na porta `3000`.

## Módulo raiz

Arquivo: `src/app.module.ts`

Responsabilidades:

- Registrar módulos de domínio.
- Configurar GraphQL com Apollo Driver.
- Habilitar schema GraphQL gerado automaticamente com `autoSchemaFile: true`.
- Registrar resolver customizado para `BigInt`.

Módulos importados atualmente:

- `DatabaseModule`
- `ProductModule`
- `UserModule`
- `ProductCategoryModule`
- `OrderModule`
- `GraphQLModule`

## Camadas

### Resolver

Resolvers recebem operações GraphQL, extraem argumentos e chamam services.

Exemplo atual:

- `src/product/product.resolver.ts`
- `src/product/category/category.resolver.ts`
- `src/user/user.resolver.ts`
- `src/order/order.resolver.ts`

### Service

Services concentram orquestração e regras de aplicação. Eles devem transformar DTOs em payloads adequados para o repository e coordenar dependências do domínio.

Exemplo atual:

- `src/product/product.service.ts`
- `src/product/category/category.service.ts`
- `src/user/user.service.ts`
- `src/order/order.service.ts`

### Repository

Repositories encapsulam o acesso ao Prisma Client. Eles são providers NestJS e fazem conexão no ciclo `onModuleInit`.

Exemplos atuais:

- `src/product/product.repository.ts`
- `src/product/category/category.repository.ts`
- `src/user/user.repository.ts`
- `src/database/repository/repository.ts`

### DatabaseModule

Arquivo: `src/database/database.module.ts`

Responsabilidades:

- Registrar repositories como providers.
- Exportar repositories para os módulos de domínio.

## GraphQL

A configuração GraphQL fica em `src/app.module.ts`:

```ts
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: true,
  sortSchema: true,
  introspection: true,
  resolvers: { BigInt: BigIntScalar },
})
```

Com `autoSchemaFile: true`, o schema GraphQL é derivado dos decorators dos resolvers, DTOs e object types. Ao criar ou alterar operações GraphQL, mantenha decorators e tipos alinhados com o contrato esperado pelo cliente.

## Prisma e PostgreSQL

Arquivo: `prisma/schema.prisma`

O datasource usa PostgreSQL e lê a conexão de `DATABASE_URL`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

O Prisma Client é gerado pelo script:

```bash
yarn prepare
```

## Modelo de domínio atual

Modelos Prisma principais:

- `Company`: empresa/loja, com configurações, contatos, categorias de produto e usuários.
- `CompanyContact`: contatos da empresa.
- `CompanyConfig`: configuração visual da empresa.
- `ProductCategory`: categoria de produto vinculada a uma empresa.
- `Product`: produto vinculado a uma categoria.
- `ProductQuestion`: associação entre produto e perguntas/opções.
- `Question`: pergunta configurável para produto.
- `Option`: opção de resposta/pergunta, podendo ter valor e desconto.
- `Response`: resposta de usuário vinculada a uma opção.
- `User`: usuário, opcionalmente vinculado a uma empresa.

Enums:

- `ResponseQuestionType`: `QUANTITATIVE`, `BOOLEAN`, `TEXT`.
- `CompanyContactType`: `PHONE`, `EMAIL`, `WHATAPP`, `TELEGRAN`.

## Mapa de diretórios

```text
src/
  app.controller.ts
  app.module.ts
  app.service.ts
  main.ts
  scalars.ts
  brand/
  database/
    database.module.ts
    repository/
      repository.ts
  dto/
  filter/
    prisma-exception.filter.ts
  order/
  product/
    category/
    dto/
  shared/
    validate/
  types/
  user/
prisma/
  schema.prisma
  migrations/
```

## Padrão para novas funcionalidades

1. Identifique o módulo de domínio ou crie um novo módulo NestJS.
2. Defina DTOs/inputs GraphQL para entrada e saída.
3. Implemente o resolver para o contrato GraphQL.
4. Implemente o service para regras e orquestração.
5. Implemente ou estenda repository para acesso Prisma.
6. Registre providers e imports no módulo correspondente.
7. Se houver mudança de persistência, altere `prisma/schema.prisma` e gere migration.
8. Execute validação com testes/build relevantes.

## Regras de arquitetura

As regras de arquitetura versionadas ficam em `docs/rules/architecture.md`.

Quando uma decisão arquitetural mudar, mantenha esta documentação e as regras alinhadas.

## Validação operacional

Comandos úteis:

```bash
yarn run test
yarn run build
```

Para mudanças TypeScript, execute também:

```bash
yarn run lint
```

Depois de alterar schema Prisma:

```bash
yarn prepare
```
