# 🤖 AI Development Guide — Symulus

## Objetivo deste documento

Este documento define as diretrizes para desenvolvimento da Symulus utilizando ferramentas de Inteligência Artificial.

Ele serve como guia para agentes de programação como:

- Cursor;
- Claude Code;
- GitHub Copilot;
- outras ferramentas de desenvolvimento assistido por IA.

Antes de criar ou modificar qualquer código, a IA deve consultar a documentação existente em `/docs`.

---

# 1. Contexto do Projeto

## Produto

Symulus é uma plataforma SaaS inteligente de preparação para certificações profissionais.

O objetivo é permitir que profissionais realizem simulados baseados em conteúdos oficiais de certificações e acompanhem sua evolução utilizando Inteligência Artificial.

---

## Primeiro Produto

### Symulus CTFL

Certificação inicial:

**ISTQB Certified Tester Foundation Level**

A plataforma deve utilizar o syllabus oficial como fonte principal de conhecimento.

---

# 2. Princípios de Desenvolvimento

## 2.1 Seguir a documentação existente

Antes de implementar qualquer funcionalidade:

Consultar:

```
/docs
```

Documentos principais:

- Product Vision;
- Requirements;
- Functional Specification;
- Design System;
- Architecture;
- Database Model;
- API Specification;
- AI/RAG Strategy.

---

## 2.2 Não alterar decisões arquiteturais sem validação

A IA não deve substituir tecnologias definidas sem justificar:

- motivo da mudança;
- impacto;
- alternativas consideradas.

---

## 2.3 Priorizar simplicidade

O objetivo atual é construir um MVP.

Evitar:

- complexidade prematura;
- abstrações desnecessárias;
- funcionalidades fora do escopo.

---

## 2.4 Código preparado para evolução

Mesmo sendo MVP, o código deve permitir:

- novas certificações;
- novos módulos;
- evolução da IA;
- crescimento da base de usuários.

---

# 3. Stack Oficial

## Frontend

Tecnologias:

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- Shadcn/UI.

---

## Backend

Tecnologias:

- Node.js;
- TypeScript;
- REST API.

---

## Banco de Dados

Tecnologia:

- PostgreSQL.

Possível serviço:

- Supabase.

---

## Inteligência Artificial

Arquitetura:

- RAG (Retrieval Augmented Generation).

Objetivo:

Gerar conteúdo utilizando documentos oficiais.

---

# 4. Estrutura do Projeto

Manter organização:

```
symulus/

├── frontend/

├── backend/

├── database/

├── ai/

├── docs/

└── README.md
```

---

# 5. Diretrizes de Frontend

## Componentização

Criar componentes reutilizáveis.

Exemplo:

```
components/

├── Button

├── Card

├── Input

├── Modal

├── ProgressCard

└── AIInsightCard
```

---

## Design System

Toda interface deve seguir:

- cores oficiais;
- tipografia;
- espaçamento;
- componentes definidos.

Consultar:

```
docs/design-system.md
```

---

## Responsividade

Toda tela deve funcionar em:

- Desktop;
- Tablet;
- Mobile.

---

# 6. Diretrizes de Backend

## Organização

Separar responsabilidades:

```
backend/

├── controllers/

├── services/

├── repositories/

├── models/

├── routes/

└── utils/
```

---

## Regras de negócio

Não colocar regras diretamente nas rotas.

Fluxo esperado:

```
Controller

↓

Service

↓

Repository

↓

Database
```

---

# 7. Diretrizes de Banco de Dados

Antes de criar tabelas:

Consultar:

```
docs/database-model.md
```

Não criar estruturas duplicadas.

---

Toda entidade deve possuir:

- identificador único;
- timestamps;
- relacionamentos definidos.

---

# 8. Diretrizes para Inteligência Artificial

## Regra principal

A IA da Symulus deve utilizar o syllabus oficial como fonte.

Não criar respostas baseadas apenas no conhecimento geral do modelo.

---

## Fluxo esperado:

```
Syllabus Oficial

↓

Processamento

↓

Base Vetorial

↓

Busca Contextual

↓

LLM

↓

Resposta
```

---

## Geração de questões

Toda questão deve possuir:

- certificação;
- capítulo;
- tópico;
- dificuldade;
- fonte utilizada;
- explicação.

---

# 9. Qualidade de Código

Toda implementação deve considerar:

## Legibilidade

Preferir:

- nomes claros;
- funções pequenas;
- código simples.

---

## Manutenção

Evitar:

- código duplicado;
- lógica espalhada;
- dependências desnecessárias.

---

## Testes

Criar testes para funcionalidades críticas:

Prioridade:

1. Regras de negócio;
2. APIs;
3. Integrações IA;
4. Componentes principais.

---

# 10. Processo de Desenvolvimento com IA

Antes de implementar:

## Etapa 1

Entender o requisito.

---

## Etapa 2

Verificar documentos relacionados.

---

## Etapa 3

Planejar alteração.

---

## Etapa 4

Implementar.

---

## Etapa 5

Validar impacto.

---

## Etapa 6

Documentar mudanças relevantes.

---

# 11. Escopo MVP

A IA deve priorizar:

## Obrigatório

- Landing Page;
- Cadastro;
- Login;
- Seleção de certificação;
- Simulado gratuito;
- Geração de questões;
- Correção;
- Resultado;
- Histórico;
- Dashboard básico.

---

## Não implementar neste momento

- Pagamentos;
- Comunidade;
- Ranking;
- Gamificação avançada;
- Múltiplos planos;
- Marketplace.

---

# 12. Padrão de Comunicação

Ao sugerir alterações, a IA deve informar:

## O que será alterado

Exemplo:

"Adicionar autenticação de usuário."

---

## Arquivos impactados

Exemplo:

```
frontend/login/page.tsx

backend/auth/service.ts
```

---

## Possíveis impactos

Exemplo:

"Essa alteração afeta o fluxo de cadastro."

---

# 13. Critério de Sucesso

Uma implementação é considerada adequada quando:

- segue a documentação;
- respeita arquitetura;
- mantém padrão visual;
- possui código organizado;
- não cria complexidade desnecessária;
- atende ao objetivo do MVP.

---

# 14. Regra Final para Agentes de IA

Antes de implementar qualquer funcionalidade:

Pergunte:

1. Essa funcionalidade está no escopo do MVP?
2. Existe documentação relacionada?
3. Está alinhada à arquitetura definida?
4. Existe impacto em dados ou APIs?
5. Existe uma solução mais simples?

A Symulus deve evoluir como um produto real, não apenas como um protótipo gerado automaticamente.
