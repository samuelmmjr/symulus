# 🏗️ Symulus — Technical Decisions

## Objetivo

Este documento registra as principais decisões técnicas do projeto Symulus.

Ele serve como referência para:

- desenvolvimento humano;
- desenvolvimento assistido por IA;
- revisão arquitetural;
- manutenção futura.

Qualquer alteração relevante deve ser avaliada antes de modificar a implementação.

---

# 1. Arquitetura Geral

## Modelo

A Symulus seguirá uma arquitetura SaaS em camadas:

```
Usuário

↓

Frontend Web

↓

Backend API

↓

Banco de Dados

↓

Serviços de Inteligência Artificial
```

---

# 2. Estrutura do Projeto

## Monorepo

O projeto utilizará estrutura monorepo:

```
symulus/

├── frontend/
├── backend/
├── database/
├── docs/
├── README.md
├── .env.example
└── docker-compose.yml
```

---

# 3. Frontend

## Stack definida

Tecnologias:

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- Shadcn/UI;
- Lucide Icons.

---

## Responsabilidades

O frontend será responsável por:

- interface do usuário;
- navegação;
- experiência do simulado;
- consumo das APIs;
- gerenciamento de estado visual.

---

## Estrutura esperada

```
frontend/src/

├── app/
├── components/
├── features/
├── hooks/
├── services/
├── types/
└── utils/
```

---

## Organização por domínio

Funcionalidades devem ser agrupadas por contexto:

```
features/

├── authentication/

├── certification/

├── simulation/

├── dashboard/

└── performance/
```

---

# 4. Backend

## Stack definida

Tecnologias:

- Node.js;
- TypeScript;
- Fastify;
- REST API;
- Prisma ORM.

---

## Motivos

A escolha considera:

- produtividade para MVP;
- arquitetura simples;
- boa organização por módulos;
- facilidade de manutenção.

---

## Estrutura esperada

```
backend/src/

├── modules/
│
├── shared/
│
├── config/
│
└── database/
```

---

# 5. Organização dos Módulos Backend

O backend será organizado por domínio.

Estrutura:

```
modules/

├── users/

├── certifications/

├── questions/

├── simulations/

├── answers/

├── performance/

└── ai/
```

Cada módulo deve possuir:

```
module/

├── controller.ts

├── service.ts

├── repository.ts

├── routes.ts

└── types.ts
```

---

# 6. Banco de Dados

## Tecnologia

Banco principal:

```
PostgreSQL
```

Infra inicial:

```
Supabase PostgreSQL
```

---

## ORM

Utilizar:

```
Prisma
```

---

## Autenticação

A autenticação será responsabilidade do:

```
Supabase Auth
```

A aplicação não armazenará senha.

---

## Modelo de usuário

Tabela:

```
users
```

Campos:

```
id UUID

name

email

created_at

updated_at
```

O campo:

```
users.id
```

deve estar relacionado ao:

```
auth.users.id
```

do Supabase.

---

# 7. Inteligência Artificial

## Princípio

A IA deve ser sempre baseada em conteúdo oficial.

Regra:

> A inteligência gera, o conhecimento oficial valida.

---

## Local do código

```
backend/src/modules/ai/
```

---

## Responsabilidades

O módulo de IA será responsável por:

- ingestão do syllabus;
- processamento de conteúdo;
- geração de questões;
- geração de explicações;
- análise de desempenho;
- recomendações.

---

## RAG

Fluxo:

```
Syllabus

↓

Extração

↓

Chunks

↓

Embeddings

↓

Vector Store

↓

Busca contextual

↓

LLM

↓

Resultado validado
```

---

# 8. Banco Vetorial

Decisão inicial:

```
pgvector no PostgreSQL
```

Motivos:

- reduz complexidade;
- mantém dados no mesmo ambiente;
- adequado para MVP.

---

# 9. Autenticação

## Solução

Supabase Auth.

Método inicial:

```
Email + senha
```

Futuro:

- Google;
- LinkedIn.

---

# 10. APIs

## Padrão

REST API utilizando JSON.

---

## Regras

APIs devem:

- possuir validação de entrada;
- retornar erros padronizados;
- utilizar autenticação quando necessário;
- possuir documentação atualizada.

---

## Formato de erro

Exemplo:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Mensagem explicativa"
  }
}
```

---

# 11. Ambientes

Serão considerados:

## Local

Desenvolvimento individual.

---

## Homologação

Validação antes da publicação.

---

## Produção

Ambiente dos usuários finais.

---

# 12. Variáveis de Ambiente

Informações sensíveis nunca devem ser versionadas.

Exemplo:

```
.env
```

Nunca armazenar:

- chaves de API;
- tokens;
- senhas;
- credenciais.

Utilizar:

```
.env.example
```

como referência.

---

# 13. Padrões de Código

## Idioma

Código:

```
Inglês
```

Interface:

```
Português Brasil
```

---

## Nomenclatura

### Componentes React

PascalCase:

```
QuestionCard.tsx
```

---

### Variáveis e funções

camelCase:

```
getUserPerformance()
```

---

### Arquivos

kebab-case:

```
api-client.ts
```

---

# 14. Regras para Desenvolvimento com IA

Antes de criar código, a IA deve:

1. Ler documentação relacionada;
2. Seguir arquitetura definida;
3. Não criar novas tecnologias sem aprovação;
4. Evitar duplicação de funcionalidades;
5. Explicar alterações relevantes.

---

# 15. Ordem Técnica de Implementação

## Fase 1 — Fundação

Criar:

- estrutura monorepo;
- frontend Next.js;
- backend Fastify;
- Prisma;
- banco;
- configuração ambiente.

---

## Fase 2 — Produto Principal

Criar:

- landing;
- certificação CTFL;
- simulado;
- resultado.

---

## Fase 3 — Usuário

Criar:

- autenticação;
- histórico;
- dashboard.

---

## Fase 4 — IA/RAG

Criar:

- ingestão syllabus;
- embeddings;
- geração assistida;
- recomendações.

---

# 16. Decisão Final

A Symulus deve priorizar:

- simplicidade;
- velocidade de validação;
- arquitetura escalável;
- qualidade do conteúdo.

A IA é uma ferramenta de aceleração, mas todas as decisões devem permanecer alinhadas à visão do produto.
