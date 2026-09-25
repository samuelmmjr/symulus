# 🏗️ Project Structure — Symulus

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

A Symulus será organizada em três principais áreas:

```
symulus/

├── frontend/
├── backend/
├── database/
│
├── docs/
│
├── README.md
└── .env.example
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

```
frontend/

├── src/
│
│── app/
│
│── components/
│
│── features/
│
│── hooks/
│
│── services/
│
│── types/
│
│── utils/
│
└── styles/
```

---

# 3. Organização do Frontend

## app/

Responsável pelas páginas e rotas.

Exemplo:

```
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

Exemplo:

```
components/

├── Button

├── Card

├── Header

├── Sidebar

└── ProgressChart
```

---

## features/

Organização por domínio.

Cada funcionalidade deve conter seus próprios componentes e regras.

Exemplo:

```
features/

├── authentication/

├── certification/

├── simulation/

├── dashboard/

└── recommendations/
```

---

## services/

Comunicação com APIs.

Exemplo:

```
services/

├── api.ts

├── auth.service.ts

├── simulation.service.ts
```

---

# 4. Backend

## Responsabilidade

Responsável pelas regras de negócio, APIs, autenticação e integração com IA.

Tecnologias:

- Node.js;
- TypeScript;
- REST API.

---

## Estrutura esperada

```
backend/

├── src/
│
├── modules/
│
├── shared/
│
├── config/
│
└── database/
```

---

# 5. Organização do Backend

## modules/

O backend deve ser organizado por domínio.

Exemplo:

```
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

## Responsabilidade

Armazenar dados persistentes da aplicação.

Tecnologia:

- PostgreSQL.

---

Estrutura:

```
database/

├── migrations/

├── seeds/

└── schema/
```

---

## Regras

Toda alteração de estrutura deve ser feita através de migrations.

Não alterar banco manualmente em produção.

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

```
backend/modules/ai/

├── rag/

├── prompts/

├── services/

└── providers/
```

---

## RAG

Fluxo:

```
Syllabus

↓

Processamento

↓

Embeddings

↓

Vector Database

↓

Context Retrieval

↓

LLM

↓

Resposta
```

---

# 8. Documentação

Toda documentação deve permanecer em:

```
docs/
```

Estrutura:

```
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

1. Ler documentação relacionada;
2. Identificar módulo afetado;
3. Respeitar padrões existentes;
4. Evitar criar estruturas paralelas;
5. Documentar mudanças relevantes.

---

# 10. Convenções de Código

## Nomes

Utilizar:

- inglês para código;
- português apenas para textos exibidos ao usuário.

Exemplo:

Correto:

```
simulationResult
```

Evitar:

```
resultadoSimulado
```

---

## Componentes React

Utilizar PascalCase.

Exemplo:

```
QuestionCard.tsx
```

---

## Funções e variáveis

Utilizar camelCase.

Exemplo:

```
getUserPerformance()
```

---

## Arquivos

Utilizar kebab-case quando aplicável.

Exemplo:

```
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

```
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

A IA deve auxiliar a implementação, mas todas as decisões devem permanecer alinhadas:

- visão do produto;
- arquitetura;
- design system;
- modelo de dados;
- requisitos do MVP.
