# AGENT.md

Instruções para agentes e colaboradores trabalhando no `delivery-bff`.

## Contexto do projeto

Este repositório é uma API/BFF NestJS com GraphQL, Prisma e PostgreSQL. A aplicação sobe na porta `3000`, usa `ValidationPipe`, CORS habilitado e filtro global para exceções Prisma.

Arquitetura principal:

- `src/main.ts`: bootstrap da aplicação.
- `src/app.module.ts`: módulo raiz, GraphQL e módulos de domínio.
- `src/database/`: providers de repositories baseados em Prisma Client.
- `src/product/`, `src/product/category/`, `src/user/`, `src/order/`: módulos de domínio.
- `prisma/schema.prisma`: fonte de verdade do modelo de dados.
- `docs/architecture.md`: visão de arquitetura do projeto.

## Guias do projeto

Antes de iniciar tarefas de setup, onboarding ou arquitetura, consulte o guia versionado do projeto:

- `docs/guides/initialization-architecture.md`

Use esse guia quando a tarefa envolver:

- inicialização local do projeto;
- onboarding de agente ou colaborador;
- explicação ou alteração de arquitetura;
- NestJS, GraphQL, Prisma, DTOs, resolvers, services ou repositories.

Para tarefas de arquitetura, consulte também:

- `docs/rules/architecture.md`
- `docs/architecture.md`
- `prisma/schema.prisma`
- `src/app.module.ts`
- `src/main.ts`

## Antes de editar

1. Confira o estado atual:

   ```bash
   git status --short
   git branch --show-current
   ```

2. Leia os arquivos relevantes antes de alterar código:

   - `package.json`
   - `prisma/schema.prisma`
   - `src/app.module.ts`
   - `src/main.ts`
   - arquivos do módulo que será alterado

3. Trace símbolos até definição e usos. Não invente DTOs, imports, providers ou APIs que não existem no repositório.

## Convenções de implementação

- Use os padrões NestJS existentes: `module`, `resolver`, `service`, `repository`, `dto` e `input`.
- Regras de negócio e orquestração ficam em services.
- Acesso ao banco fica em repositories usando Prisma Client.
- O schema Prisma deve guiar nomes, relações e tipos persistidos.
- Validações de entrada devem ser feitas com DTOs/decorators compatíveis com `class-validator` e `@nestjs/graphql`.
- Não edite arquivos em `dist/` manualmente; eles são saída de build.
- Não logue dados sensíveis.
- Não leia, copie ou versione segredos reais de `.env`.
- Não altere `yarn.lock` sem necessidade real da tarefa.

## Inicialização local

```bash
yarn install
```

Configure `.env` com:

```bash
DATABASE_URL="postgresql://USER:***@HOST:PORT/DATABASE?schema=public"
```

Gere o Prisma Client:

```bash
yarn prepare
```

Suba em desenvolvimento:

```bash
yarn run start:dev
```

## Comandos de validação

Para documentação apenas, revise o diff:

```bash
git diff
```

Para alterações de código, rode os comandos relevantes:

```bash
yarn run test
yarn run build
```

Quando mexer em TypeScript, rode também:

```bash
yarn run lint
```

Observação: `yarn run lint` usa `--fix`, portanto pode modificar arquivos. Revise o diff após executar.

## Checklist antes de finalizar

- [ ] Arquivos relevantes foram lidos antes da alteração.
- [ ] `dist/` não foi editado manualmente.
- [ ] Nenhum segredo foi adicionado.
- [ ] DTOs, resolvers, services e repositories seguem o padrão existente.
- [ ] `prisma/schema.prisma` foi considerado para mudanças de persistência.
- [ ] Testes/build relevantes foram executados ou o motivo de não executar foi registrado.
- [ ] `git diff` foi revisado.
