# 🏗️ Symulus --- Technical Decisions

## Objetivo

Este documento registra as principais decisões técnicas do projeto
Symulus.

Ele serve como referência para:

- desenvolvimento humano;
- desenvolvimento assistido por IA;
- revisão arquitetural;
- manutenção futura.

Qualquer alteração relevante deve ser avaliada antes de modificar a
implementação.

---

# Database Naming Convention

## Objetivo

Definir padrões de nomenclatura para estruturas relacionadas ao banco de
dados, garantindo consistência entre PostgreSQL, Prisma ORM e código da
aplicação.

---

## Tabelas

As tabelas do PostgreSQL devem utilizar:

    snake_case

Exemplos:

Correto:

```sql
user_performance
question_options
syllabus_documents
```

Evitar:

```sql
UserPerformance
QuestionOptions
syllabusDocuments
```

---

## Colunas

As colunas do banco devem utilizar:

    snake_case

Exemplos:

```sql
created_at
updated_at
certification_id
question_text
```

---

## Modelos Prisma

Os modelos Prisma devem utilizar:

    PascalCase

Exemplos:

```prisma
model User {}

model Certification {}

model QuestionOption {}
```

---

## Campos Prisma

Os campos dentro do Prisma devem utilizar:

    camelCase

Exemplos:

```prisma
createdAt
updatedAt
certificationId
questionText
```

Quando necessário, utilizar o mapeamento Prisma:

```prisma
createdAt DateTime @map("created_at")
```

---

## Chaves Primárias

Todas as entidades devem utilizar:

    UUID

Como padrão:

```text
id UUID
```

---

## Chaves Estrangeiras

Relacionamentos devem utilizar:

    nomeDaEntidadeId

Exemplo:

```text
user_id
certification_id
question_id
```

---

## Timestamps

Toda entidade persistida deve possuir:

```text
created_at
updated_at
```

Quando aplicável.

---

## Convenção Geral

Regra:

    Banco PostgreSQL → snake_case

    Prisma → camelCase/PascalCase

    Código TypeScript → camelCase/PascalCase

Objetivo:

- manter padrão SQL;
- facilitar integração ORM;
- evitar inconsistências entre camadas.

---

# Status

Esta decisão deve ser aplicada em:

- schema Prisma;
- migrations;
- consultas SQL;
- documentação técnica.
