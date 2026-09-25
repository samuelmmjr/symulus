# 🚀 Symulus

## Plataforma Inteligente de Preparação para Certificações

---

# 📌 Sobre o Projeto

A **Symulus** é uma plataforma SaaS inteligente de preparação para certificações profissionais.

O objetivo é transformar conteúdos oficiais de certificações em experiências personalizadas de aprendizado utilizando Inteligência Artificial.

A plataforma permite que profissionais:

- realizem simulados inteligentes;
- pratiquem questões baseadas no syllabus oficial;
- recebam explicações contextualizadas;
- acompanhem sua evolução;
- identifiquem pontos de melhoria.

---

# 🎯 Visão do Produto

A Symulus não é apenas um banco de questões.

A proposta é funcionar como um **mentor inteligente de preparação para certificações**.

O produto combina:

```text
Conteúdo Oficial
        +
Inteligência Artificial
        +
Análise de Desempenho
        +
Evolução Personalizada
```

---

# 🧩 Primeiro Produto

## Symulus CTFL

Primeira certificação suportada:

**ISTQB Certified Tester Foundation Level (CTFL)**

A escolha do CTFL permite validar o modelo do produto através de:

- syllabus oficial estruturado;
- público-alvo definido;
- conteúdo adequado para MVP;
- alta aderência ao mercado de tecnologia.

---

# 💡 Proposta de Valor

> Experimente gratuitamente um simulado inteligente baseado no syllabus da sua certificação. Cadastre-se para acompanhar sua evolução.

---

# 👤 Público-Alvo

Profissionais de tecnologia buscando certificações:

- QA Engineers;
- Analistas de Testes;
- Desenvolvedores;
- Profissionais buscando evolução de carreira.

---

# 🏗 Arquitetura Geral

Visão simplificada:

```text
                    Usuário

                       ↓

              Frontend Web

                       ↓

               Backend API

                       ↓

        ┌──────────────┼──────────────┐

        ↓              ↓              ↓

    Database          IA             Auth

    PostgreSQL        RAG            Usuário
```

---

# 🛠 Stack Tecnológica

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI

---

## Backend

- Node.js
- TypeScript
- REST API

---

## Banco de Dados

- PostgreSQL

Possível utilização:

- Supabase

---

## Inteligência Artificial

Arquitetura:

**RAG (Retrieval Augmented Generation)**

A IA utiliza conteúdos oficiais como fonte para gerar:

- questões;
- explicações;
- análises de desempenho;
- recomendações.

Fluxo:

```text
Syllabus Oficial

        ↓

Processamento

        ↓

Base Vetorial

        ↓

Busca Contextual

        ↓

IA Generativa

        ↓

Questões e Insights
```

---

# 📚 Documentação do Projeto

A documentação completa está organizada em:

```
/docs
```

Estrutura:

```
docs/

├── product/
│   ├── product-overview.md
│   ├── product-vision.md
│   ├── requirements.md
│   ├── functional-specification.md
│   └── mvp-plan.md
│
├── design/
│   ├── brand-identity.md
│   ├── design-system.md
│   ├── ux-flow-wireframes.md
│   └── user-journey.md
│
├── engineering/
│   ├── architecture.md
│   ├── database-model.md
│   └── api-specification.md
│
├── ai/
│   ├── ai-rag-strategy.md
│   └── ai-development-guide.md
│
└── assets/
    └── logo.png
```

---

# 🗂 Estrutura do Projeto

```
symulus/

├── README.md

├── docs/

├── frontend/

├── backend/

├── database/

└── ai/
```

---

# 🚦 Status do Projeto

## Fase atual

🟡 MVP Development Planning

---

## Concluído

✅ Nome e posicionamento da marca  
✅ Identidade visual  
✅ Visão do produto  
✅ Jornada do usuário  
✅ UX/UI MVP  
✅ Design System  
✅ Arquitetura inicial  
✅ Estratégia IA/RAG  
✅ Modelo de dados  
✅ Especificação de APIs  
✅ Guia de desenvolvimento com IA

---

# 🎯 Objetivo do MVP

Construir uma primeira versão funcional capaz de:

1. Apresentar a plataforma;
2. Permitir um simulado gratuito sem cadastro;
3. Gerar questões baseadas no syllabus CTFL;
4. Corrigir respostas;
5. Apresentar explicações;
6. Permitir cadastro;
7. Registrar evolução do usuário.

---

# 🔐 Princípios do Produto

## Conteúdo confiável

A IA deve utilizar fontes oficiais da certificação.

---

## IA controlada

A inteligência artificial deve complementar o conhecimento, não substituir a fonte oficial.

---

## Experiência simples

O usuário deve conseguir iniciar sua preparação rapidamente.

---

## Evolução contínua

A plataforma deve mostrar:

- onde o usuário está;
- onde precisa melhorar;
- qual próximo passo seguir.

---

# 🤖 Desenvolvimento com IA

A Symulus será desenvolvida utilizando ferramentas de Inteligência Artificial.

Antes de implementar qualquer funcionalidade:

1. Consultar os documentos em `/docs`;
2. Seguir a arquitetura definida;
3. Respeitar o Design System;
4. Evitar alterações fora do escopo do MVP;
5. Manter código simples, organizado e escalável.

Documento principal para agentes de IA:

```
docs/ai/ai-development-guide.md
```

---

# 📍 Próximos Passos

1. Organizar estrutura inicial do projeto;
2. Configurar frontend;
3. Configurar backend;
4. Configurar banco de dados;
5. Implementar autenticação;
6. Integrar IA/RAG;
7. Construir fluxo completo de simulado.

---

# 📄 Licença

Projeto em fase de desenvolvimento.
