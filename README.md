# delivery-bff

BFF/API para um domínio de delivery, construída com NestJS, GraphQL, Prisma e PostgreSQL.

O projeto expõe resolvers GraphQL para módulos como produtos, categorias, usuários e pedidos. O acesso ao banco é feito com Prisma Client, usando o schema em `prisma/schema.prisma` como fonte de verdade do modelo relacional.

## Stack

- Node.js
- NestJS 10
- Apollo GraphQL
- Prisma 5
- PostgreSQL
- Jest
- ESLint + Prettier
- Yarn para desenvolvimento local

## Pré-requisitos

- Node.js compatível com o projeto.
- Yarn instalado.
- PostgreSQL disponível.
- Variável `DATABASE_URL` configurada para o Prisma.

## Inicialização local

1. Instale as dependências:

   ```bash
   yarn install
   ```

2. Crie um arquivo `.env` local com a conexão do PostgreSQL:

   ```bash
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
   ```

3. Gere o Prisma Client:

   ```bash
   yarn prepare
   ```

4. Inicie em modo desenvolvimento:

   ```bash
   yarn run start:dev
   ```

A aplicação sobe em `http://localhost:3000` conforme `src/main.ts`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `yarn run build` | Compila o projeto com `nest build`. |
| `yarn run format` | Formata arquivos TypeScript em `src/` e `test/`. |
| `yarn run start` | Inicia a aplicação com `nest start`. |
| `yarn run start:dev` | Gera Prisma Client e inicia com watch mode. |
| `yarn run start:debug` | Inicia com debug e watch mode. |
| `yarn run start:prod` | Executa `node dist/main`. |
| `yarn run lint` | Executa ESLint com auto-fix. |
| `yarn run test` | Executa os testes unitários com Jest. |
| `yarn run test:watch` | Executa Jest em watch mode. |
| `yarn run test:cov` | Executa Jest com cobertura. |
| `yarn run test:e2e` | Executa testes e2e com `test/jest-e2e.json`. |
| `yarn run prepare` | Executa `npx prisma generate`. |

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `DATABASE_URL` | Sim | URL de conexão PostgreSQL usada pelo Prisma em `prisma/schema.prisma`. |

Não versione arquivos com segredos reais, como `.env` com credenciais de produção.

## Estrutura do projeto

```text
src/
  app.module.ts                 # Módulo raiz da aplicação
  main.ts                       # Bootstrap NestJS, CORS, pipes e filtros globais
  database/                     # Módulo de repositories e base Prisma
  filter/                       # Filtros globais de exceção
  product/                      # Produto e categoria de produto
  user/                         # Usuários
  order/                        # Pedidos
  shared/                       # Utilitários compartilhados
  types/                        # Tipos GraphQL/DTOs compartilhados
prisma/
  schema.prisma                 # Modelos e datasource Prisma
  migrations/                   # Migrations do banco
```

Para detalhes de arquitetura, veja `docs/architecture.md`.

## Prisma e banco de dados

O datasource Prisma usa PostgreSQL:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Depois de alterar `prisma/schema.prisma`, gere novamente o client:

```bash
yarn prepare
```

## GraphQL

O GraphQL é configurado em `src/app.module.ts` com `GraphQLModule.forRoot` e `autoSchemaFile: true`. O schema é gerado automaticamente a partir dos resolvers, DTOs e decorators do NestJS GraphQL.

## Validação antes de abrir PR

Execute ao menos:

```bash
yarn run test
yarn run build
```

Quando a tarefa envolve código TypeScript, execute também:

```bash
yarn run lint
```

Revise o diff antes de finalizar:

```bash
git diff
```
