# 🗄 Modelo de Dados

# Symulus MVP

---

# Status do Documento

**Versão:** 1.0

**Status:** Documento oficial do modelo de dados MVP

**Substitui:** Modelo de Dados Inicial (Discovery)

---

# 1. Objetivo

Este documento define a estrutura de dados oficial da Symulus MVP.

O modelo foi elaborado considerando:

- fluxo do usuário;
- requisitos funcionais;
- arquitetura técnica;
- estratégia de IA/RAG;
- necessidade de expansão para múltiplas certificações.

O objetivo é suportar:

- geração de simulados;
- armazenamento de questões;
- rastreabilidade do conteúdo oficial;
- acompanhamento de desempenho;
- recomendações inteligentes.

---

# 2. Visão Geral do Modelo

A estrutura principal segue o fluxo:

```
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

## 3.1 Users

Representa os usuários cadastrados na plataforma.

### Objetivo

Armazenar informações de acesso e identificação.

### Campos

| Campo | Tipo | Descrição |
| --- | --- | --- |
| id | UUID | Identificador único |
| name | VARCHAR | Nome do usuário |
| email | VARCHAR | Email |
| password_hash | VARCHAR | Senha criptografada |
| created_at | TIMESTAMP | Data criação |
| updated_at | TIMESTAMP | Última atualização |

---

# 3.2 Certifications

Representa as certificações disponíveis.

Exemplo:

- ISTQB CTFL
- AWS
- Scrum

### Campos

| Campo | Tipo | Descrição |
| --- | --- | --- |
| id | UUID | Identificador |
| name | VARCHAR | Nome da certificação |
| provider | VARCHAR | Organização responsável |
| description | TEXT | Descrição |
| status | ENUM | Active / Coming Soon |
| created_at | TIMESTAMP | Data criação |

---

# 3.3 Syllabus Documents

Armazena os documentos oficiais utilizados pela IA.

Exemplo:

ISTQB CTFL Syllabus 4.0.

### Campos

| Campo | Tipo | Descrição |
| --- | --- | --- |
| id | UUID | Identificador |
| certification_id | FK | Certificação relacionada |
| title | VARCHAR | Nome do documento |
| version | VARCHAR | Versão oficial |
| file_url | VARCHAR | Local do arquivo |
| status | ENUM | Active / Archived |
| created_at | TIMESTAMP | Data criação |

---

# 3.4 Syllabus Chapters

Representa os capítulos do syllabus.

Exemplo:

Capítulo 4 — Test Techniques.

### Campos

| Campo | Tipo | Descrição |
| --- | --- | --- |
| id | UUID | Identificador |
| syllabus_id | FK | Documento origem |
| chapter_number | VARCHAR | Número capítulo |
| title | VARCHAR | Nome |
| content | TEXT | Conteúdo resumido |

---

# 3.5 Knowledge Chunks

Tabela específica para IA/RAG.

Representa os fragmentos utilizados pela busca semântica.

### Campos

| Campo | Tipo | Descrição |
| --- | --- | --- |
| id | UUID | Identificador |
| chapter_id | FK | Capítulo origem |
| content | TEXT | Texto indexado |
| embedding | VECTOR | Representação vetorial |
| metadata | JSONB | Informações adicionais |
| created_at | TIMESTAMP | Data criação |

---

# 3.6 Questions

Representa as questões utilizadas nos simulados.

Podem ser:

- geradas por IA;
- cadastradas manualmente.

### Campos

| Campo | Tipo | Descrição |
| --- | --- | --- |
| id | UUID | Identificador |
| certification_id | FK | Certificação |
| chapter_id | FK | Referência syllabus |
| question_text | TEXT | Enunciado |
| difficulty | ENUM | Easy/Medium/Hard |
| generation_type | ENUM | AI/Manual |
| source_reference | VARCHAR | Origem no syllabus |
| created_at | TIMESTAMP | Data criação |

---

# 3.7 Question Options

Representa as alternativas.

### Campos

| Campo | Tipo | Descrição |
| --- | --- | --- |
| id | UUID | Identificador |
| question_id | FK | Questão |
| option_text | TEXT | Alternativa |
| is_correct | BOOLEAN | Indica resposta correta |

---

# 3.8 Simulations

Representa cada simulado realizado.

Permite simulado:

- visitante;
- usuário cadastrado.

### Campos

| Campo | Tipo | Descrição |
| --- | --- | --- |
| id | UUID | Identificador |
| user_id | FK Nullable | Usuário |
| certification_id | FK | Certificação |
| total_questions | INTEGER | Quantidade |
| score | DECIMAL | Resultado |
| status | ENUM | Started/Completed |
| started_at | TIMESTAMP | Início |
| finished_at | TIMESTAMP | Finalização |

---

# 3.9 Simulation Questions

Relaciona questões utilizadas em um simulado.

### Campos

| Campo | Tipo |
| --- | --- |
| id | UUID |
| simulation_id | FK |
| question_id | FK |
| order_number | INTEGER |

---

# 3.10 Answers

Armazena as respostas dos usuários.

### Campos

| Campo | Tipo |
| --- | --- |
| id | UUID |
| simulation_question_id | FK |
| selected_option_id | FK |
| is_correct | BOOLEAN |
| answered_at | TIMESTAMP |

---

# 3.11 User Performance

Armazena evolução por assunto.

### Campos

| Campo | Tipo |
| --- | --- |
| id | UUID |
| user_id | FK |
| certification_id | FK |
| topic | VARCHAR |
| accuracy_percentage | DECIMAL |
| total_questions | INTEGER |
| updated_at | TIMESTAMP |

---

# 3.12 AI Recommendations

Armazena recomendações personalizadas.

### Campos

| Campo | Tipo |
| --- | --- |
| id | UUID |
| user_id | FK |
| certification_id | FK |
| related_topic | VARCHAR |
| recommendation_text | TEXT |
| created_at | TIMESTAMP |

---

# 3.13 AI Generation Logs

Controle e auditoria da IA.

### Campos

| Campo | Tipo |
| --- | --- |
| id | UUID |
| question_id | FK |
| model | VARCHAR |
| prompt_version | VARCHAR |
| context_used | TEXT |
| created_at | TIMESTAMP |

---

# 4. Relacionamentos

```
USER
 |
 | 1:N
 |
SIMULATION
 |
 | N:N
 |
QUESTION

CERTIFICATION
 |
 | 1:N
 |
SYLLABUS_DOCUMENT
 |
 | 1:N
 |
SYLLABUS_CHAPTER
 |
 | 1:N
 |
KNOWLEDGE_CHUNK

QUESTION
 |
 | 1:N
 |
QUESTION_OPTION

USER
 |
 | 1:N
 |
AI_RECOMMENDATION
```

---

# 5. Escopo MVP

## Obrigatório

✅ Users

✅ Certifications

✅ Syllabus Documents

✅ Syllabus Chapters

✅ Knowledge Chunks

✅ Questions

✅ Question Options

✅ Simulations

✅ Answers

✅ User Performance

---

## Futuro

⏳ AI Generation Logs

⏳ User Goals

⏳ Plano de estudos automático

⏳ Ranking/comunidade

---

# 6. Decisões de Modelagem

## Visitante pode realizar simulado

Por isso:

```
simulation.user_id = NULL permitido
```

---

## Questões precisam ter rastreabilidade

Por isso:

Toda questão deve possuir:

- certificação;
- capítulo;
- referência do syllabus.

---

## IA não é fonte de verdade

O banco deve armazenar:

- origem;
- contexto utilizado;
- versão do documento.

---

# 7. Status

Modelo aprovado para:

- definição de API;
- criação do banco;
- desenvolvimento do MVP.

---