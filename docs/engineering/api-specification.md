# 🔌 Especificação de APIs

# Symulus

## Status do Documento

**Versão:** 1.1

**Status:** Documento oficial para desenvolvimento MVP

**Alteração:** Atualização do fluxo de autenticação e simulação conforme
decisões técnicas do projeto.

---

# 1. Visão Geral

A API da Symulus será responsável por:

- gerenciamento de usuários;
- certificações;
- simulados;
- questões;
- respostas;
- desempenho;
- integração com IA.

Arquitetura:

```text
Frontend Web

     ↓

API Backend

     ↓

Serviços internos

     ↓

Banco PostgreSQL
+
Serviço IA/RAG
```

---

# 2. Padrão da API

## Arquitetura

REST API

## Formato

JSON

## Base URL

Exemplo:

```text
https://api.symulus.com/v1
```

---

# 3. Autenticação

A autenticação da aplicação é realizada utilizando **Supabase Auth**.

A API Backend não gerencia:

- cadastro de senha;
- armazenamento de senha;
- geração própria de tokens.

Fluxo:

```text
Usuário

↓

Frontend utiliza Supabase Auth

↓

Supabase valida identidade

↓

Frontend recebe JWT

↓

JWT enviado para API Backend

↓

Backend valida token

↓

Acesso aos recursos protegidos
```

---

# 4. Módulo Usuários

O backend mantém apenas o perfil da aplicação.

A identidade do usuário é originada pelo Supabase Auth.

Relacionamento:

```text
users.id = auth.users.id
```

---

# 4.1 Criar perfil de usuário

### Endpoint

```text
POST /users/profile
```

---

## Request

```json
{
  "name": "Samuel",
  "email": "samuel@email.com"
}
```

---

## Response

```json
{
  "id": "uuid",
  "name": "Samuel",
  "email": "samuel@email.com"
}
```

---

# 4.2 Consultar usuário

### Endpoint

```text
GET /users/{id}
```

---

# 5. Certificações

## Listar certificações

### Endpoint

```text
GET /certifications
```

---

Response:

```json
[
  {
    "id": "uuid",
    "name": "ISTQB CTFL",
    "status": "ACTIVE"
  }
]
```

---

# 6. Simulados

## Criar simulado

Responsável por iniciar uma preparação utilizando questões previamente
validadas.

### Endpoint

```text
POST /simulations
```

---

Request:

```json
{
  "certification_id": "uuid",
  "quantity": 5,
  "difficulty": "medium"
}
```

---

Backend:

1.  identifica certificação;
2.  busca questões aprovadas;
3.  cria simulado;
4.  retorna questões disponíveis.

---

A IA não gera questões durante a execução do simulado.

O fluxo de geração ocorre previamente:

```text
Syllabus oficial

↓

Processamento do conteúdo

↓

IA gera questões

↓

Validação

↓

Banco de questões

↓

Simulados
```

---

Response:

```json
{
  "simulation_id": "uuid",
  "total_questions": 5
}
```

---

# 7. Questões

## Buscar questões do simulado

### Endpoint

```text
GET /simulations/{id}/questions
```

---

Response:

```json
[
  {
    "id": "uuid",
    "question": "Qual princípio de teste...",
    "options": [
      {
        "id": "uuid",
        "text": "Alternativa A"
      }
    ]
  }
]
```

---

Importante:

A resposta correta nunca deve ser enviada antes do usuário responder.

---

# 8. Responder questão

### Endpoint

```text
POST /answers
```

---

Request:

```json
{
  "simulation_question_id": "uuid",
  "selected_option_id": "uuid"
}
```

---

Response:

```json
{
  "correct": true,
  "explanation": "Segundo o syllabus...",
  "source": "Chapter 1.3"
}
```

---

# 9. Finalizar Simulado

### Endpoint

```text
POST /simulations/{id}/finish
```

---

Response:

```json
{
  "score": 85,
  "correct_answers": 17,
  "total_questions": 20
}
```

---

# 10. Resultado do Usuário

## Consultar desempenho

### Endpoint

```text
GET /users/{id}/performance
```

---

Response:

```json
{
  "certification": "ISTQB CTFL",
  "progress": 72,
  "strengths": ["Fundamentals"],
  "weaknesses": ["Testing Techniques"]
}
```

---

# 11. Recomendações IA

## Buscar recomendações

### Endpoint

```text
GET /users/{id}/recommendations
```

---

Response:

```json
[
  {
    "topic": "Boundary Value Analysis",
    "message": "Recomendamos revisar capítulo 4"
  }
]
```

---

# 12. APIs internas de IA

Estas APIs não são expostas ao usuário final.

São utilizadas para processamento interno.

---

# Gerar questões

Endpoint interno:

```text
POST /ai/generate-question
```

---

Responsabilidade:

- utilizar syllabus oficial;
- utilizar contexto RAG;
- gerar questões;
- armazenar referência da fonte.

---

# 13. Fluxo completo de um simulado

```text
Usuário

↓

Escolhe certificação

↓

POST /simulations

↓

Backend busca questões aprovadas

↓

Retorna simulado

↓

Usuário responde

↓

POST /answers

↓

Resultado

↓

Atualiza desempenho

↓

Gera recomendações
```

---

# 14. Tratamento de erros

Padrão:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Dados inválidos"
  }
}
```

---

# 15. Segurança

Requisitos:

- validar JWT do Supabase Auth;
- limitar chamadas;
- proteger endpoints internos da IA;
- validar permissões.

---

# 16. Escopo MVP

## APIs obrigatórias

✅ Perfil de usuário

✅ Certificações

✅ Criar simulado

✅ Buscar questões

✅ Responder questões

✅ Resultado

✅ Desempenho

---

## Futuro

⏳ Pagamento

⏳ Assinatura Premium

⏳ Comunidade

⏳ Ranking

⏳ Plano de estudos IA

---

# Resumo

A API da Symulus permite:

```text
Usuário

↓

Escolhe certificação

↓

Realiza simulado inteligente

↓

Responde questões

↓

Recebe análise

↓

Evolui sua preparação
```

---

# Status

Documento alinhado com:

- Supabase Auth;
- Prisma ORM;
- PostgreSQL;
- arquitetura RAG;
- modelo de dados MVP.
