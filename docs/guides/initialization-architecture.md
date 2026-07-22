# Guia de inicialização e arquitetura

Use este guia para iniciar trabalho no `delivery-bff`, orientar onboarding ou explicar a arquitetura atual do projeto.

Este documento é agnóstico de ferramenta: qualquer agente, editor ou colaborador pode seguir os mesmos passos.

## Quando usar

Use quando a tarefa envolver:

- setup local do `delivery-bff`;
- onboarding de agente ou colaborador;
- explicação de arquitetura, módulos ou fluxo de dados;
- NestJS, GraphQL, Prisma, PostgreSQL, DTOs, resolvers, services ou repositories;
- revisão de documentação de inicialização ou arquitetura.

## Contexto rápido

Arquivos de entrada obrigatórios para entender o projeto:

1. `README.md` — onboarding e comandos principais.
2. `AGENT.md` — instruções operacionais para agentes e colaboradores.
3. `docs/architecture.md` — visão arquitetural.
4. `docs/rules/architecture.md` — regras arquiteturais agnósticas de ferramenta.
5. `package.json` — scripts e dependências.
6. `prisma/schema.prisma` — modelos e datasource.
7. `src/main.ts` — bootstrap HTTP/NestJS.
8. `src/app.module.ts` — GraphQL e módulos registrados.

## Inicialização local

1. Confirme o estado do repo:

   ```bash
   git status --short
   git branch --show-current
   ```

2. Instale dependências:

   ```bash
   yarn install
   ```

3. Configure `.env` com `DATABASE_URL`:

   ```bash
   DATABASE_URL="postgresql://USER:***@HOST:PORT/DATABASE?schema=public"
   ```

4. Gere Prisma Client:

   ```bash
   yarn prepare
   ```

5. Inicie em desenvolvimento:

   ```bash
   yarn run start:dev
   ```

A aplicação deve escutar na porta `3000`.

## Mapa de arquitetura

Fluxo principal:

```text
Cliente GraphQL
  -> Resolver NestJS
  -> Service do domínio
  -> Repository Prisma
  -> Prisma Client
  -> PostgreSQL
```

Camadas:

- Resolver: contrato GraphQL e extração de argumentos.
- Service: regras de aplicação, transformação de DTOs e orquestração.
- Repository: acesso Prisma e operações persistentes.
- Prisma schema: modelos, relações, enums e datasource PostgreSQL.

Módulos registrados no `AppModule`:

- `DatabaseModule`
- `ProductModule`
- `UserModule`
- `ProductCategoryModule`
- `OrderModule`
- `GraphQLModule`

## Regras de desenvolvimento

- Leia arquivos relevantes antes de editar; não assuma formatos de DTOs, repositories ou models.
- Não edite `dist/` manualmente.
- Não adicione segredos reais em documentação, testes ou fixtures.
- Respeite o padrão NestJS existente: `module`, `resolver`, `service`, `repository`, `dto` e `input`.
- Use `prisma/schema.prisma` como referência para nomes, relações e tipos persistidos.
- Mantenha `docs/architecture.md`, `AGENT.md`, `docs/guides/initialization-architecture.md` e `docs/rules/architecture.md` alinhados quando uma decisão arquitetural mudar.
- Se alterar persistência, planeje schema/migration e gere Prisma Client.
- Se rodar `yarn run lint`, revise o diff depois: o script usa `--fix`.

## Tarefas comuns

### Explicar a arquitetura

1. Leia `docs/architecture.md`.
2. Confirme `src/app.module.ts` e `src/main.ts` para evitar documentação desatualizada.
3. Use o fluxo Resolver -> Service -> Repository -> Prisma -> PostgreSQL como estrutura da explicação.
4. Cite caminhos concretos quando falar de módulos.

### Criar funcionalidade em módulo existente

1. Leia o resolver, service, repository e DTOs do módulo.
2. Confira os models relacionados em `prisma/schema.prisma`.
3. Implemente na camada correta:
   - contrato GraphQL no resolver/DTO;
   - regra no service;
   - persistência no repository.
4. Registre providers/imports no module se necessário.
5. Valide com testes e build.

### Atualizar documentação

1. Atualize `README.md` para onboarding e comandos.
2. Atualize `docs/architecture.md` para arquitetura e fluxo de dados.
3. Atualize `AGENT.md` quando mudar convenções operacionais.
4. Atualize `docs/rules/architecture.md` quando mudar regras arquiteturais aplicáveis ao código.
5. Mantenha somente informações permanentes ou decisões já confirmadas do projeto.

## Checklist de verificação

- [ ] `README.md`, `AGENT.md` e `docs/architecture.md` foram consultados quando relevantes.
- [ ] `docs/rules/architecture.md` foi consultado quando a tarefa envolve arquitetura ou código TypeScript/Prisma.
- [ ] `package.json` foi usado como fonte de verdade para scripts.
- [ ] `prisma/schema.prisma` foi consultado para qualquer mudança de domínio persistido.
- [ ] Nenhum segredo real foi lido, impresso ou versionado.
- [ ] `dist/` não foi editado manualmente.
- [ ] Comandos relevantes foram executados ou o blocker foi descrito.
- [ ] `git diff` foi revisado antes da entrega.
