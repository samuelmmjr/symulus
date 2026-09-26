# 🏗️ Project Structure --- Symulus

## Objetivo

Este documento define a organização estrutural do projeto Symulus.

O objetivo é estabelecer padrões para:

- organização de código;
- separação de responsabilidades;
- escalabilidade;
- manutenção;
- desenvolvimento assistido por Inteligência Artificial.

Toda implementação deve respeitar esta estrutura.

---

# 1. Estrutura Geral do Projeto

A Symulus será organizada em áreas principais:

```text
symulus/

├── frontend/
├── backend/
├── docs/
├── README.md
└── .env.example
```

O banco de dados e suas migrations serão gerenciados pelo backend
utilizando Prisma ORM.

A estrutura oficial de persistência:

```text
backend/

├── prisma/
│
├── src/
│
└── prisma.config.ts
```

---

# 2. Frontend

## Responsabilidade

Responsável pela interface da aplicação e experiência do usuário.

Tecnologias definidas:

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- Shadcn/UI.

---

## Estrutura esperada

```text
frontend/

├── src/

├── app/

├── components/

├── features/

├── hooks/

├── services/

├── types/

├── utils/

└── styles/
```

---

# 3. Organização do Frontend

## app/

Responsável pelas páginas e rotas.

Exemplo:

```text
app/

├── page.tsx
├── login/
├── signup/
├── simulation/
└── dashboard/
```

---

## components/

Componentes reutilizáveis.

---

## features/

Organização por domínio.

Exemplo:

```text
features/

├── authentication/
├── certification/
├── simulation/
├── dashboard/
└── recommendations/
```

---

# 4. Backend

## Responsabilidade

Responsável pelas regras de negócio, APIs, autenticação e integração com
IA.

Tecnologias:

- Node.js;
- TypeScript;
- Fastify;
- REST API;
- Prisma ORM.

---

## Estrutura esperada

```text
backend/

├── src/

│   ├── modules/

│   ├── shared/

│   ├── config/

│   └── database/

│
├── prisma/

│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
└── prisma.config.ts
```

---

# 5. Organização do Backend

## modules/

O backend deve ser organizado por domínio.

Exemplo:

```text
modules/

├── users/

├── certifications/

├── simulations/

├── questions/

├── answers/

├── performance/

└── ai/
```

---

Cada módulo deve possuir:

```text
module/

├── controller.ts

├── service.ts

├── repository.ts

├── routes.ts

└── types.ts
```

---

# 6. Banco de Dados

## Responsabilidade

Armazenar dados persistentes da aplicação.

Tecnologia:

- PostgreSQL;
- Supabase PostgreSQL.

ORM:

- Prisma.

---

## Estrutura

O gerenciamento do banco pertence ao backend.

```text
backend/

└── prisma/

    ├── schema.prisma

    ├── migrations/

    └── seed.ts
```

---

## Regras

Toda alteração estrutural deve ser feita através de migrations Prisma.

Não alterar banco manualmente em produção.

Exemplo:

```bash
npx prisma migrate dev
```

---

# 7. Camada de Inteligência Artificial

## Responsabilidade

Gerenciar:

- geração de questões;
- processamento de syllabus;
- busca contextual;
- recomendações.

---

Estrutura:

```text
backend/src/modules/ai/

├── rag/

├── prompts/

├── services/

└── providers/
```

---

# 8. Documentação

Toda documentação deve permanecer em:

```text
docs/
```

Estrutura:

```text
docs/

├── product/

├── design/

├── engineering/

├── ai/

└── assets/
```

---

# 9. Regras para Desenvolvimento com IA

Antes de criar código:

1.  Ler documentação relacionada;
2.  Identificar módulo afetado;
3.  Respeitar padrões existentes;
4.  Evitar criar estruturas paralelas;
5.  Documentar mudanças relevantes.

---

# 10. Convenções de Código

## Nomes

Utilizar:

- inglês para código;
- português apenas para textos exibidos ao usuário.

---

## Componentes React

Utilizar PascalCase.

Exemplo:

```text
QuestionCard.tsx
```

---

## Funções e variáveis

Utilizar camelCase.

Exemplo:

```text
getUserPerformance()
```

---

## Arquivos

Utilizar kebab-case quando aplicável.

Exemplo:

```text
api-client.ts
```

---

# 11. Ambiente

Configurações sensíveis devem utilizar variáveis de ambiente.

Nunca armazenar:

- chaves de API;
- senhas;
- tokens.

Exemplo:

```text
.env

DATABASE_URL=
AI_API_KEY=
```

---

# 12. Critérios de Qualidade

Toda implementação deve buscar:

- código simples;
- baixo acoplamento;
- componentes reutilizáveis;
- testes quando aplicável;
- documentação atualizada.

---

# 13. Evolução Futura

A estrutura deve permitir expansão para:

- novas certificações;
- novos módulos de aprendizado;
- novos modelos de IA;
- planos premium;
- recursos colaborativos.

---

# 14. Regra Final

A Symulus deve ser desenvolvida como um produto escalável.

A IA deve auxiliar a implementação, mas todas as decisões devem
permanecer alinhadas:

- visão do produto;
- arquitetura;
- design system;
- modelo de dados;
- requisitos do MVP.
