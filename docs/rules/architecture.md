# Regras de arquitetura do delivery-bff

Use estas regras ao alterar código TypeScript, GraphQL, Prisma ou documentação de arquitetura do `delivery-bff`.

Este documento é agnóstico de ferramenta: qualquer agente, editor ou colaborador pode usar as mesmas regras.

## Fontes de verdade

- `docs/architecture.md`: visão arquitetural do projeto.
- `AGENT.md`: instruções operacionais para agentes e colaboradores.
- `docs/guides/initialization-architecture.md`: guia de inicialização e arquitetura.
- `prisma/schema.prisma`: modelos, relações, enums e datasource do banco.
- `src/app.module.ts`: módulos registrados e configuração GraphQL.
- `src/main.ts`: bootstrap, pipes, CORS, filtros e porta HTTP.

## Fluxo arquitetural

Preserve o fluxo principal:

```text
Cliente GraphQL
  -> Resolver NestJS
  -> Service do domínio
  -> Repository Prisma
  -> Prisma Client
  -> PostgreSQL
```

## Regras por camada

### Resolver

- Resolvers definem o contrato GraphQL.
- Resolvers extraem argumentos e chamam services.
- Não coloque regra de negócio ou acesso direto ao Prisma em resolvers.
- Mantenha decorators de `@nestjs/graphql` alinhados com os DTOs/inputs.

### Service

- Services concentram regra de aplicação e orquestração.
- Services transformam DTOs em payloads adequados para repositories.
- Não duplique lógica entre resolver e repository quando ela pertence ao service.

### Repository

- Repositories encapsulam acesso ao Prisma Client.
- Repositories devem expor operações persistentes claras para o service.
- Não espalhe chamadas diretas ao Prisma fora da camada de repository sem uma decisão explícita do projeto.

### Prisma

- `prisma/schema.prisma` guia nomes, relações e tipos persistidos.
- Mudanças em persistência devem considerar schema, migration e geração do Prisma Client.
- Depois de alterar schema Prisma, rode `yarn prepare` quando for validar a mudança.

## Regras gerais

- Não edite `dist/` manualmente.
- Não crie DTOs, imports, providers ou APIs sem confirmar se já existem no repo.
- Registre providers e imports no módulo NestJS correto.
- Mantenha `docs/architecture.md`, `AGENT.md`, `docs/guides/initialization-architecture.md` e este documento alinhados quando uma decisão arquitetural mudar.
- Não inclua segredos reais em documentação, testes ou fixtures.

## Validação

Para mudanças de documentação/regras, revise:

```bash
git diff --check
git diff
```

Para mudanças de código, execute comandos relevantes:

```bash
yarn run test
yarn run build
```

Quando mexer em TypeScript, execute também:

```bash
yarn run lint
```

`yarn run lint` usa `--fix`; revise o diff depois de executar.
