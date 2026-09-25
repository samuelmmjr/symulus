# 🛠️ Plano de Construção MVP

# Symulus

## 1. Objetivo do MVP

Construir a primeira versão funcional da Symulus capaz de:

- apresentar a plataforma;
- permitir um simulado gratuito;
- gerar questões baseadas no syllabus CTFL;
- corrigir respostas;
- apresentar análise de desempenho;
- permitir cadastro e acompanhamento.

---

# 2. Fases de Construção

## Fase 1 — Fundação do Produto

Objetivo:

Criar a base técnica e visual.

Entregas:

- projeto frontend;
- identidade visual aplicada;
- estrutura de navegação;
- componentes principais;
- banco de dados inicial.

---

## Fase 2 — Landing Page

Entregas:

Tela:

- apresentação da Symulus;
- proposta de valor;
- certificações disponíveis;
- CTA para simulado gratuito.

Critério de conclusão:

Usuário consegue entender o produto e iniciar um simulado.

---

## Fase 3 — Motor de Simulados

Entregas:

- seleção CTFL;
- configuração do simulado;
- apresentação das questões;
- respostas;
- correção.

---

## Fase 4 — Inteligência Artificial

Entregas:

- ingestão do syllabus;
- base de conhecimento;
- geração de questões;
- explicação das respostas.

Fluxo:

```
Syllabus PDF
      ↓
Processamento
      ↓
Base vetorial
      ↓
IA gera questão
      ↓
Usuário responde
      ↓
IA explica
```

---

## Fase 5 — Usuário e Evolução

Entregas:

- cadastro;
- login;
- histórico;
- dashboard;
- progresso.

---

# 3. Funcionalidades MVP

## Landing

Prioridade: Alta

- Logo Symulus
- Apresentação
- CTA gratuito

---

## Simulado gratuito

Prioridade: Alta

- 5 questões;
- sem cadastro;
- resultado.

---

## Cadastro

Prioridade: Média

- criar conta;
- salvar histórico.

---

## Dashboard

Prioridade: Média

- desempenho;
- evolução;
- recomendações.

---

## IA

Prioridade: Alta

- gerar questões;
- explicar respostas.

---

# 4. Ordem de Construção

Eu seguiria esta ordem:

```
1. Design System
        ↓
2. Frontend base
        ↓
3. Landing Page
        ↓
4. Banco de dados
        ↓
5. Cadastro/Login
        ↓
6. Simulado manual funcionando
        ↓
7. IA integrada
        ↓
8. Dashboard
```

---

# 5. Documentos que a IA precisará receber

Para desenvolver, os documentos mais importantes serão:

## Contexto do Produto

✅ Product Vision

## Identidade

✅ Brand Identity

## Interface

✅ Design System

✅ Frames Stitch

## Regras

✅ Requisitos do Produto

## Dados

✅ Modelo de Dados

---

# O que eu manteria do modelo tradicional?

Eu ainda criaria algo parecido com User Stories, mas simplificado.

Exemplo:

## Funcionalidade: Simulado

**Objetivo:**

O usuário deve conseguir realizar um simulado baseado no syllabus CTFL.

**Fluxo esperado:**

1. Selecionar certificação.
2. Escolher quantidade de questões.
3. Responder perguntas.
4. Receber resultado.

**Resultado esperado:**

Usuário entende seu nível de preparação.