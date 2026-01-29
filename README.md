# Player Two API

Projeto base em **NestJS** com:

- Prisma ORM (PostgreSQL)
- Autenticação JWT
- Paginação
- Documentação Swagger

## Requisitos

- Node.js 18+
- PostgreSQL

## Configuração

1. Copie as variáveis de ambiente:

```bash
cp .env.example .env
```

2. Ajuste o `DATABASE_URL` e o `JWT_SECRET` no `.env`.

3. Gere o cliente Prisma e rode as migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

## Executar o projeto

```bash
npm install
npm run start:dev
```

## Swagger

A documentação fica disponível em:

```
http://localhost:3000/docs
```

## Rotas iniciais

- `GET /api/health` — health check.
- `GET /api/items?page=1&limit=10` — exemplo de paginação.
- `POST /api/auth/login` — gera token JWT.

## Observações sobre autenticação

- O login está configurado para validar email e senha na tabela `User`.
- Armazene senhas com hash (ex.: bcrypt) antes de usar em produção.
