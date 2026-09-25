# 📋 Especificação Funcional

# Symulus MVP

---

## 1. Visão Geral

### Objetivo

Desenvolver uma plataforma de preparação para certificações que permite ao usuário realizar simulados inteligentes baseados no syllabus oficial.

---

# 2. Módulos do MVP

A Symulus será dividida inicialmente em:

```
Symulus MVP

├── Landing Page
├── Simulado Gratuito
├── Motor de Questões
├── Inteligência Artificial
├── Cadastro/Login
├── Dashboard
└── Histórico de Desempenho
```

---

# 3. Módulo 1 — Landing Page

## Objetivo

Apresentar a proposta de valor e permitir que o usuário inicie um simulado sem cadastro.

---

## Funcionalidades

### Exibir informações:

- Logo Symulus;
- proposta de valor;
- certificações disponíveis;
- benefícios.

---

## Ações

Usuário pode:

- iniciar simulado gratuito;
- criar conta;
- acessar login.

---

## Regra

O usuário não precisa estar autenticado para iniciar o primeiro simulado.

---

# 4. Módulo 2 — Seleção de Certificação

## Objetivo

Permitir escolher qual certificação deseja estudar.

---

## MVP

Disponível:

✅ ISTQB CTFL

Futuro:

- AWS;
- Scrum;
- Azure;
- DevOps.

---

# 5. Módulo 3 — Simulado

## Objetivo

Permitir que o usuário responda questões geradas a partir do syllabus.

---

## Fluxo

```
Seleciona certificação

↓

Define quantidade de questões

↓

Sistema gera simulado

↓

Usuário responde

↓

Sistema calcula resultado
```

---

## Configurações

Quantidade:

- 5 questões (gratuito);
- 10 questões;
- 20 questões.

---

# 6. Módulo 4 — Questões

## Estrutura da questão

Cada questão deve possuir:

```
ID

Pergunta

Alternativas

Resposta correta

Explicação

Capítulo do syllabus

Nível de dificuldade

Tema
```

---

## Exemplo

```
Pergunta:

Qual técnica utiliza grupos equivalentes?

Alternativas:

A
B
C
D

Resposta:

B

Explicação:

Segundo o syllabus...

Referência:

Capítulo 4
```

---

# 7. Módulo 5 — Inteligência Artificial

## Objetivo

Gerar conteúdo inteligente baseado no material oficial.

---

## Responsabilidades da IA

### Geração:

- criar perguntas;
- criar alternativas;
- definir dificuldade.

---

### Análise:

- explicar respostas;
- identificar lacunas;
- sugerir revisão.

---

## Regra principal

A IA nunca deve gerar conteúdo fora da base oficial do syllabus.

---

# 8. Módulo 6 — Resultado

## Objetivo

Mostrar desempenho e incentivar evolução.

---

## Exibir:

- percentual de acerto;
- questões corretas;
- assuntos dominados;
- assuntos para revisar.

---

## Conversão

Após resultado:

Mostrar:

> Continue sua evolução criando uma conta gratuita.
> 

---

# 9. Módulo 7 — Usuário

## Cadastro

Campos:

- nome;
- email;
- senha.

Futuro:

- Google;
- LinkedIn.

---

# 10. Módulo 8 — Dashboard

## Objetivo

Acompanhar evolução.

---

Exibir:

- progresso;
- histórico;
- média;
- recomendações IA.

---

# 11. Regras de Negócio MVP

## RN001

Usuário visitante pode realizar um simulado gratuito.

---

## RN002

Usuário cadastrado pode salvar histórico.

---

## RN003

Questões devem possuir referência ao syllabus.

---

## RN004

Resultado deve ser calculado automaticamente.

---

## RN005

IA deve utilizar somente conteúdo autorizado.

---

# 12. Critérios de Aceitação Macro

O MVP estará pronto quando:

✅ Usuário acessar sem cadastro

✅ Escolher CTFL

✅ Realizar 5 questões

✅ Receber resultado

✅ Criar conta

✅ Visualizar histórico

✅ IA conseguir gerar novas questões baseadas no syllabus