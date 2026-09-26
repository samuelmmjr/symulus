# 🗄 Modelo de Dados

# Symulus MVP

---

# Status do Documento

**Versão:** 1.1

**Status:** Documento oficial do modelo de dados MVP

**Alteração:** Ajuste do modelo de autenticação conforme decisão técnica
utilizando Supabase Auth.

---

# 1. Objetivo

Este documento define a estrutura de dados oficial da Symulus MVP.

O modelo considera:

- fluxo do usuário;
- requisitos funcionais;
- arquitetura técnica;
- estratégia de IA/RAG;
- expansão para múltiplas certificações.

Objetivos:

- geração de simulados;
- armazenamento de questões;
- rastreabilidade do conteúdo oficial;
- acompanhamento de desempenho;
- recomendações inteligentes.

---

# 2. Visão Geral do Modelo

Fluxo principal:

```text
Certificação
      |
      ↓
Syllabus Oficial
      |
      ↓
Base de Conhecimento (RAG)
      |
      ↓
Questões
      |
      ↓
Simulados
      |
      ↓
Respostas
      |
      ↓
Desempenho
      |
      ↓
Recomendações IA
```

---

# 3. Entidades Principais

## Users

Representa os usuários cadastrados.

A autenticação é realizada utilizando **Supabase Auth**.

A tabela `users` representa o perfil da aplicação.

Relacionamento:

`users.id = auth.users.id`

## Campos

Campo Tipo Descrição

---

id UUID Identificador relacionado ao Supabase Auth
name VARCHAR Nome do usuário
email VARCHAR Email
created_at TIMESTAMP Data criação
updated_at TIMESTAMP Última atualização

---

# 4. Decisões de Modelagem

## Autenticação

A autenticação é responsabilidade do Supabase Auth.

A aplicação não armazena senhas.

## Simulado visitante

Usuários não autenticados podem realizar simulados.

Por isso:

`simulation.user_id = NULL permitido`

## IA

A IA não é fonte de verdade.

O banco deve armazenar:

- origem;
- contexto utilizado;
- versão do documento.

---

# 5. Status

Modelo aprovado para:

- definição de API;
- criação do banco;
- desenvolvimento do MVP.
