# 🏗 Arquitetura Técnica

# Symulus MVP

## 1. Visão Geral da Arquitetura

A Symulus será construída como uma aplicação SaaS moderna composta por:

- Interface web responsiva;
- Backend responsável pelas regras de negócio;
- Banco de dados para armazenamento;
- Camada de Inteligência Artificial;
- Sistema de autenticação;
- Base de conhecimento das certificações.

Arquitetura:

```
                 Usuário
                    |
                    ↓
            Frontend Web
          (Next.js / React)
                    |
                    ↓
              Backend API
             (Node.js)
                    |
        ┌───────────┼───────────┐
        ↓           ↓           ↓
    Banco       Serviço IA   Autenticação
 PostgreSQL      RAG          Usuário
```

---

# 2. Stack Tecnológica Inicial

## Frontend

### Tecnologia

**Next.js + React + TypeScript**

Motivos:

- excelente para aplicações SaaS;
- boa performance;
- fácil integração com IA;
- comunidade forte.

---

## Estilização

### Tailwind CSS

Motivos:

- desenvolvimento rápido;
- fácil aplicação do Design System;
- compatível com ferramentas de IA.

---

## Componentes

### Shadcn/UI

Uso:

- botões;
- cards;
- inputs;
- dashboards;
- modais.

Motivo:

Permite criar interfaces profissionais rapidamente.

---

# 3. Backend

## Tecnologia

**Node.js + TypeScript**

Responsabilidades:

- autenticação;
- gerenciamento de usuários;
- simulados;
- resultados;
- comunicação com IA.

---

Estrutura:

```
Backend API

├── Users
├── Certifications
├── Questions
├── Simulations
├── Answers
├── Performance
└── AI Service
```

---

# 4. Banco de Dados

## Tecnologia

PostgreSQL

Motivo:

- relacional;
- confiável;
- adequado para histórico e métricas.

---

## Principais entidades

```
User

Certification

Syllabus

Question

Simulation

Answer

Performance

Recommendation
```

---

# 5. Arquitetura de IA

Esse é o principal diferencial da Symulus.

A abordagem recomendada:

# RAG (Retrieval Augmented Generation)

---

## Por que RAG?

Porque queremos evitar que a IA invente conteúdo.

Fluxo:

```
Syllabus Oficial PDF

        ↓

Processamento do documento

        ↓

Base vetorial

        ↓

Busca dos conteúdos relevantes

        ↓

IA gera questão

        ↓

Usuário responde
```

---

# 6. Base de Conhecimento

Cada certificação terá uma base própria.

Exemplo:

```
Certification:

ISTQB CTFL

        ↓

Syllabus 4.0

        ↓

Capítulos

        ↓

Tópicos

        ↓

Conteúdo indexado
```

---

# 7. Geração de Questões com IA

Fluxo:

```
Usuário solicita simulado

        ↓

Sistema identifica certificação

        ↓

Busca conteúdo relevante

        ↓

IA gera questões

        ↓

Validação

        ↓

Entrega ao usuário
```

---

## Estrutura de uma questão gerada

```
{
 "certification":"ISTQB CTFL",
 "topic":"Testing Fundamentals",
 "question":"...",
 "options": [],
 "correctAnswer":"B",
 "explanation":"...",
 "source":"Chapter 1.2",
 "difficulty":"medium"
}
```

---

# 8. Autenticação

## MVP

Opções:

- Email e senha;
- Google Login.

---

Dados armazenados:

- usuário;
- histórico;
- progresso.

---

# 9. Hospedagem Inicial

Para MVP:

## Frontend

Possível:

- Vercel

---

## Backend

Possível:

- Render;
- Railway;
- Fly.io.

---

## Banco

Possível:

- Supabase PostgreSQL.

---

## IA

Inicialmente:

- API de modelo LLM;
- ou modelos com camada gratuita quando possível.

---

# 10. Segurança

Requisitos iniciais:

- autenticação segura;
- senha criptografada;
- proteção de APIs;
- controle de acesso.

---

# 11. Ambientes

Criar:

## Desenvolvimento

Uso local.

---

## Homologação

Testes antes de publicação.

---

## Produção

Usuários reais.

---

# 12. Estrutura Inicial do Projeto

```
symulus/

├── frontend/
│
├── backend/
│
├── database/
│
├── ai/
│
├── docs/
│
└── README.md
```

---

# 13. Princípios Técnicos

## Simplicidade primeiro

MVP não deve ter arquitetura complexa.

---

## Escalabilidade futura

A estrutura deve permitir:

- novas certificações;
- novos modelos IA;
- novos tipos de estudo.

---

## IA controlada

A IA deve sempre utilizar fontes confiáveis.

---

# Decisões Técnicas MVP

| Item | Decisão |
| --- | --- |
| Frontend | Next.js + TypeScript |
| UI | Tailwind + Shadcn |
| Backend | Node.js |
| Banco | PostgreSQL |
| IA | RAG |
| Auth | Supabase/Auth |
| Deploy | Vercel + Supabase |