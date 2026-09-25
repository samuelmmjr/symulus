# 🖥️ Screen Specifications — Symulus MVP

## Objetivo

Este documento descreve as especificações funcionais e visuais das telas principais da Symulus MVP.

Cada tela possui:

- objetivo;
- usuário esperado;
- componentes;
- ações disponíveis;
- regras de comportamento;
- referência visual.

As imagens de referência estão disponíveis em:

```
docs/design/screens/
```

---

# 1. Landing Page

## Referência visual

```
screens/landing-page.png
```

---

## Objetivo

Apresentar a Symulus para novos usuários e permitir que iniciem um simulado gratuito sem necessidade de cadastro.

---

## Usuário

Visitante não autenticado.

---

## Componentes

### Header

Elementos:

- Logo Symulus;
- navegação principal;
- botão de login/cadastro.

---

### Hero Section

Objetivo:

Apresentar a proposta principal do produto.

Conteúdo:

- título principal;
- descrição;
- CTA principal.

CTA:

```
Experimentar gratuitamente
```

---

### Benefícios

Apresentar os principais diferenciais:

- baseado no syllabus oficial;
- inteligência artificial;
- acompanhamento de evolução.

---

### Certificações disponíveis

Exibir certificações disponíveis.

MVP:

```
ISTQB CTFL
```

---

## Ações

Usuário pode:

- iniciar simulado gratuito;
- criar conta;
- realizar login.

---

## Regras

- Usuário visitante pode iniciar um simulado limitado.
- Cadastro não deve ser obrigatório para primeira experiência.

---

# 2. Seleção de Certificação

## Referência visual

```
screens/certification-selection.png
```

---

## Objetivo

Permitir que o usuário escolha qual certificação deseja estudar.

---

## Usuário

Visitante ou usuário autenticado.

---

## Componentes

### Certification Cards

Cada card deve apresentar:

- nome da certificação;
- descrição;
- status;
- botão de seleção.

---

## MVP

Certificação disponível:

```
ISTQB CTFL
```

---

## Estados

### Disponível

Usuário pode iniciar.

---

### Em breve

Usuário visualiza, mas não inicia.

---

## Ações

Usuário seleciona uma certificação.

---

# 3. Configuração do Simulado

## Referência visual

```
screens/simulation-config.png
```

---

## Objetivo

Permitir que o usuário configure sua experiência de simulado.

---

## Componentes

### Quantidade de questões

Opções:

- 5 questões;
- 10 questões;
- 20 questões.

---

### Dificuldade

Opções:

- Fácil;
- Médio;
- Difícil.

---

### Botão principal

```
Iniciar Simulado
```

---

## Regras

Para usuário visitante:

- limite gratuito aplicado.

Para usuário autenticado:

- histórico será salvo.

---

# 4. Tela de Questão

## Referência visual

```
screens/question-screen.png
```

---

## Objetivo

Permitir que o usuário responda questões geradas pela Symulus.

---

## Componentes

### Cabeçalho

Exibe:

- certificação;
- progresso;
- número da questão.

Exemplo:

```
Questão 3 de 10
```

---

### Enunciado

Apresenta:

- pergunta;
- contexto.

---

### Alternativas

Formato:

- A;
- B;
- C;
- D.

---

### Navegação

Ações:

- próxima questão;
- voltar questão anterior.

---

## Regras

- Resposta correta não deve ser exibida antes da submissão.
- Usuário deve selecionar uma alternativa antes de avançar.

---

# 5. Resultado do Simulado

## Referência visual

```
screens/result-screen.png
```

---

## Objetivo

Apresentar o desempenho após conclusão.

---

## Componentes

### Resultado geral

Exibir:

- percentual de acerto;
- quantidade de respostas corretas;
- quantidade de erros.

---

### Análise inicial

Apresentar:

- pontos fortes;
- pontos de melhoria.

---

### CTA

Usuário deve ser incentivado a:

- criar conta;
- continuar evolução.

---

## Regras

Usuário visitante:

- recebe resultado;
- é convidado a criar conta.

Usuário autenticado:

- resultado é salvo.

---

# 6. Cadastro

## Referência visual

```
screens/onboarding.png
```

---

## Objetivo

Converter visitante em usuário cadastrado.

---

## Campos

Obrigatórios:

- nome;
- email;
- senha.

---

## Benefícios apresentados

- salvar histórico;
- acompanhar evolução;
- receber recomendações.

---

# 7. Dashboard do Usuário

## Referência visual

```
screens/dashboard.png
```

---

## Objetivo

Centralizar informações de evolução do usuário.

---

## Componentes

### Resumo de desempenho

Exibir:

- média geral;
- simulados realizados;
- progresso.

---

### Certificação atual

Mostrar:

- certificação estudada;
- nível de preparação.

---

### Histórico

Exibir:

- últimos simulados;
- resultados.

---

### Recomendações IA

Exibir:

- assuntos para revisar;
- próximos passos.

---

# 8. Dashboard de Evolução Diagnóstica

## Referência visual

```
screens/progress-dashboard.png
```

---

## Objetivo

Mostrar análise detalhada do desempenho.

---

## Componentes

### Desempenho por assunto

Exemplo:

```
Fundamentos de Teste     85%

Técnicas de Teste        60%

Gerenciamento de Teste   75%
```

---

### Pontos fortes

Áreas dominadas pelo usuário.

---

### Pontos de melhoria

Áreas recomendadas pela IA.

---

## Recomendação IA

Exemplo:

```
Recomendamos revisar:
Capítulo 4 - Técnicas de Teste
```

---

# 9. Princípios Gerais das Telas

Todas as telas devem seguir:

## Design System

Consultar:

```
docs/design/design-system.md
```

---

## Responsividade

Suporte:

- Desktop;
- Tablet;
- Mobile.

---

## Consistência

Manter:

- mesmos componentes;
- mesmas cores;
- mesma hierarquia visual.

---

## IA como elemento de valor

A inteligência artificial deve aparecer como:

- orientação;
- análise;
- suporte ao aprendizado.

Não apenas como geração automática de perguntas.

---

# 10. Ordem de Implementação

Prioridade MVP:

1. Landing Page
2. Seleção de certificação
3. Configuração do simulado
4. Tela de questão
5. Resultado
6. Cadastro
7. Dashboard
8. Evolução diagnóstica

```

```
