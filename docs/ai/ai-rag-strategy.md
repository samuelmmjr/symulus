# 🤖 Estratégia de IA / RAG

# Symulus MVP

## 1. Visão Geral

A Symulus utiliza Inteligência Artificial com arquitetura **RAG (Retrieval Augmented Generation)** para gerar simulados personalizados baseados em conteúdos oficiais de certificações.

O objetivo é combinar:

```
Conteúdo oficial da certificação
              +
Busca inteligente de contexto
              +
Modelo de IA generativa
              =
Questões confiáveis e contextualizadas
```

---

# 2. Objetivo da IA na Symulus

A IA deve atuar como um:

> **Mentor inteligente de preparação para certificações.**
> 

Ela não deve apenas gerar perguntas.

Ela deve:

- criar questões;
- explicar conceitos;
- identificar dificuldades;
- recomendar revisões;
- acompanhar evolução.

---

# 3. Princípio Fundamental da IA

## Fonte antes da geração

A IA nunca deve responder baseada apenas no conhecimento geral do modelo.

Fluxo obrigatório:

```
Usuário solicita simulado

        ↓

Sistema identifica certificação

        ↓

Busca conteúdo oficial relacionado

        ↓

Envia contexto para IA

        ↓

IA gera resposta baseada nesse contexto
```

---

# 4. Arquitetura RAG

## Visão geral

```
                 SYLLABUS OFICIAL

                       ↓

              Processamento do documento

                       ↓

                 Fragmentação (Chunks)

                       ↓

                 Geração de Embeddings

                       ↓

              Banco Vetorial (Vector DB)

                       ↓

                 Recuperação Contextual

                       ↓

                    LLM

                       ↓

             Questão / Explicação / Análise
```

---

# 5. Pipeline de Conhecimento

## Etapa 1 — Ingestão do Material

Entrada:

Exemplo:

```
ISTQB CTFL Syllabus PDF
```

Processamento:

- leitura do documento;
- extração de texto;
- identificação de capítulos;
- limpeza do conteúdo.

---

Resultado:

Documento estruturado:

```
{
 "certification":"ISTQB CTFL",
 "version":"4.0",
 "chapter":"Chapter 1",
 "topic":"Fundamentals of Testing",
 "content":"..."
}
```

---

# 6. Fragmentação (Chunking)

O documento não deve ser enviado inteiro para a IA.

Ele deve ser dividido em partes menores.

Exemplo:

Syllabus:

```
Capítulo 1
   |
   ├── 1.1 What is Testing
   ├── 1.2 Why Testing is Necessary
   ├── 1.3 Testing Principles
```

Cada fragmento terá:

- conteúdo;
- capítulo;
- tópico;
- referência.

---

Exemplo:

```
{
"text":"Testing is a process that evaluates..."

"chapter":"1.1"

"source":"ISTQB CTFL 4.0"
}
```

---

# 7. Embeddings

## Objetivo

Transformar texto em representação matemática para busca semântica.

Exemplo:

Pergunta:

> "Qual o objetivo principal do teste?"
> 

O sistema encontra conteúdos relacionados mesmo que as palavras sejam diferentes.

---

Fluxo:

```
Texto
 ↓
Embedding Model
 ↓
Vetor
 ↓
Banco Vetorial
```

---

# 8. Banco Vetorial

Responsável por armazenar os conteúdos indexados.

Opções para MVP:

## Supabase Vector

ou

## Pinecone

ou

## ChromaDB local

---

Estrutura:

```
Knowledge Base

ID

Certification

Chapter

Topic

Content

Embedding

Source
```

---

# 9. Geração de Questões

## Fluxo

```
Usuário:

"Gere um simulado CTFL com 5 questões"

↓

Sistema busca conteúdos relevantes

↓

IA recebe contexto

↓

IA gera questões

↓

Validação

↓

Questões exibidas
```

---

# 10. Prompt Base da Symulus

Exemplo:

```
Você é o assistente oficial da Symulus.

Sua função é criar questões de certificações profissionais.

Regras:

1. Utilize somente o conteúdo fornecido.
2. Não invente informações.
3. Cada questão deve possuir referência ao syllabus.
4. Crie alternativas plausíveis.
5. Informe resposta correta e explicação.

Contexto:

{conteudo_relevante}

Crie uma questão de nível {dificuldade}.
```

---

# 11. Estrutura da Questão

Toda questão gerada deve possuir:

```
{
"id":"",
"certification":"ISTQB CTFL",
"chapter":"Chapter 4",
"topic":"Test Techniques",

"question":"Texto da questão",

"options":
["A","B","C","D"
],

"correct_answer":"B",

"explanation":"Explicação baseada no syllabus",

"difficulty":"medium",

"source":"CTFL Syllabus 4.0"
}
```

---

# 12. Controle de Qualidade das Questões

Antes de disponibilizar:

A questão deve passar por validações:

---

## Validação de fonte

Existe referência no syllabus?

Sim → continua

Não → rejeita

---

## Validação de resposta

A alternativa correta está claramente suportada?

---

## Validação de dificuldade

A questão está adequada ao nível?

---

## Validação de duplicidade

Evitar questões repetidas.

---

# 13. Análise das Respostas

A IA também será utilizada após o usuário responder.

Exemplo:

Usuário errou:

```
Questão:
Boundary Value Analysis

Resposta:
A

Correta:
C
```

IA:

```
Você confundiu duas técnicas de teste.

Recomendo revisar:

Capítulo 4.2
Boundary Value Analysis.
```

---

# 14. Personalização da Jornada

Com histórico:

A IA pode gerar:

## Diagnóstico

Exemplo:

```
Seu desempenho:

Fundamentos:
90%

Técnicas:
55%

Processo:
80%
```

---

## Recomendação

Exemplo:

```
Próximo simulado recomendado:

Técnicas de teste
Nível intermediário
10 questões
```

---

# 15. Guardrails da IA

Para evitar problemas:

## Regra 1

Nunca responder sem contexto do syllabus.

---

## Regra 2

Sempre informar fonte.

---

## Regra 3

Separar:

Conteúdo oficial:

"Segundo o syllabus..."

Opinião explicativa:

"Uma forma simples de entender é..."

---

## Regra 4

Registrar versão do material utilizado.

Exemplo:

```
ISTQB CTFL
Version 4.0
```

---

# 16. Evolução futura da IA

## MVP

IA gera questões.

---

## Versão 2

IA cria plano de estudos.

---

## Versão 3

IA atua como tutor:

Usuário pergunta:

"Explique testes estáticos."

IA responde:

- baseada no syllabus;
- adaptada ao nível do usuário.

---

# 17. Decisões Técnicas MVP

| Item | Decisão |
| --- | --- |
| Arquitetura | RAG |
| Fonte | Syllabus oficial |
| Embeddings | Modelo de embeddings |
| Vector DB | Supabase Vector inicialmente |
| LLM | Modelo generativo |
| Controle | Referência obrigatória |
| Saída | JSON estruturado |

---

# 18. Resumo Executivo

A IA da Symulus será construída com o princípio:

> **A inteligência gera, mas o conhecimento oficial valida.**
> 

A diferença da Symulus para um gerador comum de perguntas:

| Gerador comum | Symulus |
| --- | --- |
| Perguntas genéricas | Questões baseadas no syllabus |
| Sem rastreabilidade | Fonte identificada |
| Sem evolução | Análise personalizada |
| Apenas teste | Preparação inteligente |