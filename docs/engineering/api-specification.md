# 🔌 Especificação de APIs

# Symulus

## Status do Documento

**Versão:** 1.0

**Status:** Documento oficial para desenvolvimento MVP

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

```
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

---

## Formato

JSON

---

## Base URL

Exemplo:

```
https://api.symulus.com/v1
```

---

# 3. Autenticação

## Método

JWT Token

Fluxo:

```
Usuário realiza login

        ↓

Backend valida dados

        ↓

Gera token JWT

        ↓

Frontend utiliza token nas chamadas
```

---

# 4. Módulo Usuários

## 4.1 Criar conta

### Endpoint

```
POST /users/register
```

---

## Request

```
{
 "name":"Samuel",
 "email":"samuel@email.com",
 "password":"123456"
}
```

---

## Response

```
{
 "id":"uuid",
 "name":"Samuel",
 "email":"samuel@email.com"
}
```

---

## Regras

- email deve ser único;
- senha deve ser armazenada criptografada.

---

# 4.2 Login

### Endpoint

```
POST /users/login
```

---

Request:

```
{
 "email":"samuel@email.com",
 "password":"123456"
}
```

---

Response:

```
{
 "access_token":"jwt_token",
 "user": {
   "id":"uuid",
   "name":"Samuel"
 }
}
```

---

# 5. Certificações

## Listar certificações

### Endpoint

```
GET /certifications
```

---

Response:

```
[
 {
  "id":"uuid",
  "name":"ISTQB CTFL",
  "status":"ACTIVE"
 }
]
```

---

# 6. Simulados

## Criar simulado

Responsável por iniciar uma preparação.

### Endpoint

```
POST /simulations
```

---

Request:

```
{
 "certification_id":"uuid",
 "quantity":5,
 "difficulty":"medium"
}
```

---

Backend:

1. identifica certificação;
2. busca contexto no RAG;
3. solicita geração da IA;
4. cria simulado.

---

Response:

```
{
 "simulation_id":"uuid",
 "total_questions":5
}
```

---

# 7. Questões

## Buscar questões do simulado

### Endpoint

```
GET /simulations/{id}/questions
```

---

Response:

```
[
 {
  "id":"uuid",
  "question":"Qual princípio de teste...",

  "options":[
    {
      "id":"1",
      "text":"Alternativa A"
    }
  ]
 }
]
```

---

Importante:

A resposta correta não deve ser enviada antes do usuário responder.

---

# 8. Responder questão

### Endpoint

```
POST /answers
```

---

Request:

```
{
 "simulation_question_id":"uuid",
 "selected_option_id":"uuid"
}
```

---

Response:

```
{
 "correct":true,

 "explanation":"Segundo o syllabus..."

 "source":"Chapter 1.3"
}
```

---

# 9. Finalizar Simulado

### Endpoint

```
POST /simulations/{id}/finish
```

---

Response:

```
{
 "score":85,

 "correct_answers":17,

 "total_questions":20
}
```

---

# 10. Resultado do Usuário

## Consultar desempenho

### Endpoint

```
GET /users/{id}/performance
```

---

Response:

```
{
 "certification":"ISTQB CTFL",

 "progress":72,

 "strengths":["Fundamentals"
 ],

 "weaknesses":["Testing Techniques"
 ]
}
```

---

# 11. Recomendações IA

## Buscar recomendações

### Endpoint

```
GET /users/{id}/recommendations
```

---

Response:

```
[
 {
  "topic":"Boundary Value Analysis",

  "message":"Recomendamos revisar capítulo 4"
 }
]
```

---

# 12. APIs internas de IA

Essas APIs não serão expostas ao usuário.

---

# Gerar questões

Endpoint interno:

```
POST /ai/generate-question
```

---

Request:

```
{
 "certification":"ISTQB CTFL",

 "topic":"Testing Techniques",

 "difficulty":"medium",

 "quantity":5
}
```

---

Response:

```
{
 "questions":[]
}
```

---

# 13. Fluxo completo de um simulado

```
Usuário

 ↓

POST /simulations

 ↓

Backend

 ↓

Busca syllabus

 ↓

RAG

 ↓

IA gera questões

 ↓

Salva banco

 ↓

Retorna questões

 ↓

Usuário responde

 ↓

POST /answers

 ↓

Resultado

 ↓

Atualiza desempenho
```

---

# 14. Tratamento de erros

Padrão:

```
{
 "error":
 {
  "code":"INVALID_REQUEST",

  "message":"Dados inválidos"
 }
}
```

---

# 15. Segurança

Requisitos:

- validar autenticação;
- limitar chamadas;
- proteger endpoints internos da IA;
- validar permissões.

---

# 16. Escopo MVP

## APIs obrigatórias

✅ Cadastro

✅ Login

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

A API da Symulus deve permitir:

```
Usuário
  ↓
Escolhe certificação
  ↓
Recebe simulado inteligente
  ↓
Responde questões
  ↓
Recebe análise
  ↓
Evolui sua preparação
```

---

## Próximo documento recomendado

Agora temos:

✅ Produto

✅ UX

✅ Design

✅ Arquitetura

✅ IA/RAG

✅ Modelo de Dados

✅ APIs