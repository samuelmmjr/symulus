# 🚀 Symulus MVP — Product Decisions

## Objetivo

Este documento registra as principais decisões tomadas para o desenvolvimento do MVP da Symulus.

O objetivo é reduzir ambiguidades durante a implementação e garantir alinhamento entre:

- Produto;
- Design;
- Engenharia;
- Inteligência Artificial.

Estas decisões devem ser consideradas como referência para desenvolvimento.

---

# 1. Escopo do MVP

## Certificação inicial

Decisão:

```
ISTQB Certified Tester Foundation Level (CTFL)
```

Motivo:

- syllabus estruturado;
- público de tecnologia definido;
- conteúdo adequado para validar o produto.

---

# 2. Estratégia de Entrada do Usuário

## Modelo definido

A Symulus seguirá o princípio:

> Entregar valor antes de solicitar cadastro.

---

## Usuário visitante

O visitante poderá:

- acessar a landing page;
- escolher CTFL;
- realizar um simulado gratuito;
- visualizar resultado e explicações.

Limitações:

- 5 questões;
- sem histórico persistido;
- sem acompanhamento de evolução.

---

## Usuário cadastrado

Após cadastro, terá acesso a:

- histórico de simulados;
- evolução de desempenho;
- dashboard;
- recomendações personalizadas.

---

# 3. Fluxo Principal do MVP

Fluxo definido:

```
Landing Page

↓

Escolha da certificação

↓

Configuração do simulado

↓

Simulado gratuito

↓

Resultado

↓

Cadastro

↓

Dashboard
```

---

# 4. Modelo de Simulado

## Experiência escolhida

O MVP seguirá uma experiência próxima ao formato de prova.

Fluxo:

```
Responder questões

↓

Finalizar simulado

↓

Receber resultado
```

---

## Correção

Decisão:

A correção será apresentada após conclusão do simulado.

O resultado apresentará:

- percentual de acertos;
- respostas corretas;
- respostas incorretas;
- explicações;
- referência ao syllabus.

---

## Feedback imediato

Não será utilizado no primeiro MVP.

Possível evolução futura:

Modo aprendizado com explicação após cada resposta.

---

# 5. Estratégia de Questões

## MVP inicial

As questões não serão geradas em tempo real durante a utilização.

Fluxo:

```
Syllabus oficial

↓

IA gera questões

↓

Validação

↓

Banco de questões

↓

Usuário realiza simulado
```

---

## Motivos

Essa decisão reduz:

- latência;
- custo de IA;
- risco de questões inadequadas;
- dependência do provedor de LLM.

---

# 6. Uso da Inteligência Artificial

A IA será utilizada como apoio ao produto.

Princípio:

> A inteligência gera, o conhecimento oficial valida.

---

## Responsabilidades da IA no MVP

A IA será utilizada para:

- auxiliar criação de questões;
- gerar explicações;
- analisar desempenho;
- sugerir pontos de revisão.

---

## Restrições

A IA:

- não será fonte de conhecimento;
- deve utilizar o syllabus como referência;
- deve manter rastreabilidade da origem do conteúdo.

---

# 7. Autenticação

## Decisão

Utilizar:

```
Supabase Auth
```

---

## Motivos

- implementação mais rápida;
- segurança integrada;
- suporte JWT;
- reduz código proprietário.

---

## Métodos iniciais

MVP:

- email;
- senha.

Futuro:

- Google;
- LinkedIn.

---

# 8. Arquitetura de IA

## Documentação

Local:

```
docs/ai/
```

---

## Implementação

Local:

```
backend/src/modules/ai/
```

---

## Fluxo

```
Syllabus

↓

Processamento

↓

Embeddings

↓

Vector Store

↓

Busca contextual

↓

LLM

↓

Resultado validado
```

---

# 9. Banco de Dados

Principais entidades:

```
Users

Certifications

Syllabus Documents

Syllabus Chapters

Knowledge Chunks

Questions

Question Options

Simulations

Simulation Questions

Answers

User Performance

AI Recommendations
```

---

# 10. Fora do MVP

Não serão implementados inicialmente:

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

# 11. Prioridade de Desenvolvimento

Ordem definida:

## Fase 1 — Fundação

- configuração frontend;
- configuração backend;
- banco de dados;
- ambiente.

---

## Fase 2 — Experiência principal

- landing page;
- seleção CTFL;
- configuração do simulado;
- execução do simulado;
- resultado.

---

## Fase 3 — Usuário

- cadastro;
- autenticação;
- histórico;
- dashboard.

---

## Fase 4 — Inteligência Artificial

- processamento do syllabus;
- RAG;
- geração assistida;
- recomendações.

---

# 12. Princípios Técnicos

Toda implementação deve:

- seguir documentação existente;
- respeitar o Design System;
- evitar complexidade desnecessária;
- priorizar MVP funcional;
- manter possibilidade de evolução futura.

---

# Status

Documento aprovado para orientar o desenvolvimento inicial da Symulus MVP.
