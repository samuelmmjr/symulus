# 🚀 Symulus

## Plataforma Inteligente de Preparação para Certificações

---

## 📌 Sobre o Projeto

A **Symulus** é uma plataforma SaaS EdTech de preparação inteligente para certificações profissionais.

O produto não é apenas um banco de questões. A proposta é funcionar como um **mentor inteligente de preparação**, combinando:

- conteúdo oficial das certificações;
- simulados personalizados;
- inteligência artificial;
- análise de desempenho;
- evolução contínua.

A Symulus ajuda profissionais a transformar estudo disperso em uma preparação estruturada, alinhada ao conteúdo oficial da certificação.

---

# 🎯 Visão do Produto

A preparação para certificações normalmente envolve:

- grande volume de conteúdo;
- dificuldade para identificar pontos de melhoria;
- simulados genéricos;
- materiais fora do escopo oficial.

A Symulus resolve esse problema utilizando o syllabus oficial como fonte de conhecimento e aplicando inteligência para orientar a evolução do usuário.

---

# 💡 Proposta de Valor

> Experimente gratuitamente um simulado inteligente baseado no syllabus da sua certificação. Cadastre-se para acompanhar sua evolução.

---

# 🏆 Primeiro Produto

## Symulus CTFL

Primeira certificação suportada:

**ISTQB Certified Tester Foundation Level (CTFL)**

A CTFL foi escolhida para validar o MVP devido a:

- syllabus estruturado;
- público de tecnologia definido;
- alinhamento com profissionais de QA;
- escopo adequado para validação inicial.

---

# 🚀 Objetivo do MVP

O MVP tem como objetivo validar o fluxo completo de preparação.

Fluxo principal:

```
Usuário acessa a plataforma

↓

Escolhe certificação CTFL

↓

Realiza simulado gratuito

↓

Recebe resultado e explicações

↓

Cria conta

↓

Acompanha evolução
```

---

## Funcionalidades do MVP

### Landing Page

Apresentação da proposta da Symulus.

---

### Simulado gratuito

Usuário visitante pode:

- escolher CTFL;
- responder 5 questões;
- visualizar resultado;
- receber explicações.

O cadastro não é obrigatório para primeira experiência.

---

### Cadastro

Usuários cadastrados poderão:

- salvar histórico;
- acompanhar desempenho;
- acessar dashboard;
- receber recomendações.

---

### Dashboard

Permite acompanhar:

- evolução;
- histórico de simulados;
- desempenho por assunto;
- recomendações.

---

# 🤖 Inteligência Artificial

A Symulus utiliza Inteligência Artificial baseada em **RAG (Retrieval Augmented Generation)**.

Princípio:

> A inteligência gera, o conhecimento oficial valida.

---

## Estratégia no MVP

A IA não participa da geração de questões durante o simulado.

O fluxo é:

```
Syllabus oficial

↓

Processamento do conteúdo

↓

Geração assistida de questões

↓

Validação

↓

Banco de questões

↓

Simulado do usuário
```

---

A IA será utilizada para:

- criação assistida de questões;
- geração de explicações;
- análise de desempenho;
- recomendações de estudo.

A fonte de verdade permanece sendo o conteúdo oficial da certificação.

---

# 🏗 Arquitetura

A Symulus utiliza arquitetura monorepo:

```
symulus/

├── frontend/
├── backend/
├── database/
├── docs/
└── README.md
```

---

# 🖥 Frontend

Tecnologias:

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- Shadcn/UI.

Responsável por:

- interface;
- experiência do usuário;
- fluxo de simulados;
- dashboard.

---

# ⚙ Backend

Tecnologias:

- Node.js;
- TypeScript;
- Fastify;
- REST API;
- Prisma ORM.

Responsável por:

- regras de negócio;
- APIs;
- autenticação;
- processamento dos simulados.

---

# 🗄 Banco de Dados

Tecnologias:

- PostgreSQL;
- Supabase.

Principais entidades:

- usuários;
- certificações;
- syllabus;
- questões;
- simulados;
- respostas;
- desempenho.

---

# 🔐 Autenticação

A autenticação será realizada utilizando:

```
Supabase Auth
```

Método inicial:

- email;
- senha.

A aplicação não armazena senhas próprias.

---

# 🎨 Design System

A identidade visual segue:

- Navy `#0B1026`
- Purple `#6D4AFF`
- Blue `#3B82F6`
- Fundo `#F8FAFC`

Princípios:

- tecnologia;
- confiança;
- inteligência;
- clareza.

Documentação:

```
docs/design/
```

---

# 📚 Estrutura da Documentação

```
docs/

├── product/
│   ├── product-overview.md
│   ├── product-vision.md
│   ├── requirements.md
│   ├── functional-specification.md
│   ├── user-journey.md
│   └── mvp-decisions.md
│
├── design/
│   ├── brand-identity.md
│   ├── design-system.md
│   ├── ux-flow-wireframes.md
│   ├── screen-specifications.md
│   └── screens/
│
├── engineering/
│   ├── architecture.md
│   ├── database-model.md
│   ├── api-specification.md
│   ├── project-structure.md
│   └── technical-decisions.md
│
└── ai/
    ├── ai-rag-strategy.md
    └── ai-development-guide.md
```

---

# 🤖 Desenvolvimento Assistido por IA

A Symulus utiliza ferramentas de Inteligência Artificial durante o desenvolvimento.

Antes de implementar qualquer funcionalidade, agentes devem consultar:

1. `README.md`
2. documentação em `/docs`
3. `docs/engineering/technical-decisions.md`

Decisões técnicas documentadas possuem prioridade sobre interpretações próprias dos agentes.

---

# 🚫 Fora do MVP

Não fazem parte da primeira versão:

- pagamentos;
- planos premium;
- comunidade;
- ranking;
- gamificação;
- marketplace;
- múltiplas certificações;
- tutor conversacional;
- plano de estudos automático.

---

# 📍 Status do Projeto

## Fase atual

🟡 MVP Development Planning

---

## Próximas etapas

1. Configuração do ambiente;
2. Criação do frontend;
3. Criação do backend;
4. Configuração do banco;
5. Implementação do fluxo de simulado;
6. Autenticação;
7. Dashboard;
8. Integração IA/RAG.

---

# 📄 Licença

Projeto em fase de desenvolvimento.
