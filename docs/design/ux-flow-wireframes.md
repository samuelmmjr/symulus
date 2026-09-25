# 🎨 UX Flow & Wireframes

# Symulus MVP

---

# 1. Objetivo

Definir a experiência visual e o fluxo de navegação da primeira versão da Symulus.

O foco do MVP é:

> Permitir que um usuário experimente um simulado inteligente sem cadastro e, após perceber valor, crie uma conta para acompanhar sua evolução.
> 

---

# 2. Princípios de UX

## 1. Valor antes do cadastro

O usuário deve conseguir testar a plataforma antes de fornecer dados.

---

## 2. Foco no aprendizado

A interface deve reduzir distrações e priorizar:

- questão;
- resposta;
- explicação;
- evolução.

---

## 3. Confiança

O usuário deve saber:

- de onde veio a questão;
- qual capítulo do syllabus foi utilizado;
- por que a resposta está correta.

---

## 4. Progresso visível

O usuário deve perceber evolução.

Exemplo:

```
Antes:
"Será que estou preparado?"

Depois:
"Meu desempenho está em 82% e sei quais tópicos revisar."
```

---

# 3. Fluxo Principal de Telas

```
                    LANDING PAGE
                         |
                         ↓
              Selecionar Certificação
                         |
                         ↓
              Configurar Simulado
                         |
                         ↓
                   Questões
                         |
                         ↓
                    Resultado
                         |
                         ↓
                   Criar Conta
                         |
                         ↓
                   Dashboard
```

---

# 4. Wireframe 01 — Landing Page

## Objetivo

Apresentar valor e incentivar primeiro teste.

---

## Estrutura

### Header

Logo:

```
◇ Symulus
```

Menu:

- Certificações
- Como funciona
- Sobre

Botões:

```
Entrar
Criar conta
```

---

## Hero

Título:

> Prepare-se para sua certificação com inteligência.
> 

Subtítulo:

> Simulados inteligentes gerados a partir do syllabus oficial da sua prova.
> 

CTA principal:

🟣 **Experimentar gratuitamente**

CTA secundário:

Ver certificações

---

## Elementos de confiança

Cards:

```
🤖 IA baseada no conteúdo oficial

📚 Syllabus como fonte principal

📈 Evolução personalizada
```

---

# 5. Wireframe 02 — Seleção de Certificação

## Objetivo

Usuário escolhe o exame.

---

Tela:

```
Qual certificação você está preparando?

[ ISTQB CTFL ]

Em breve:

[ Scrum ]
[ AWS ]
[ Azure ]
```

---

# 6. Wireframe 03 — Configuração do Simulado

## Objetivo

Personalizar experiência.

---

Campos:

```
Certificação:

ISTQB CTFL

Quantidade:

○ 5 questões
○ 10 questões
○ 20 questões

Conteúdo:

○ Todos os capítulos
○ Selecionar capítulo

Dificuldade:

○ Fácil
○ Médio
○ Difícil

[ Gerar Simulado ]
```

---

# 7. Wireframe 04 — Tela de Questão

## Objetivo

Simular experiência real da prova.

---

Estrutura:

```
ISTQB CTFL

Questão 03/05

██████░░░░

Qual das alternativas representa
um objetivo do teste?

A)
B)
C)
D)

[Responder]
```

---

Após responder:

```
Resposta correta ✓

Explicação:

Segundo o syllabus,
o objetivo principal é...

Fonte:
Capítulo 1.2
```

---

# 8. Wireframe 05 — Resultado

## Objetivo

Criar percepção de valor.

---

Tela:

```
Resultado do Simulado

80%

4/5 respostas corretas

Você domina:

✓ Fundamentos

Revisar:

⚠ Técnicas de teste

[ Criar conta e acompanhar evolução ]
```

---

# 9. Wireframe 06 — Cadastro

## Objetivo

Converter visitante.

---

Mensagem:

> Continue sua preparação acompanhando sua evolução.
> 

Campos:

```
Nome

Email

Senha

[Criar conta]
```

---

Benefícios:

✓ Histórico

✓ Desempenho por assunto

✓ Novos simulados personalizados

---

# 10. Wireframe 07 — Dashboard

## Objetivo

Área principal do usuário.

---

Topo:

```
Olá, Samuel 👋

ISTQB CTFL
```

---

Cards:

## Progresso

```
Preparação

65%
```

---

## Desempenho

```
Último simulado

85%
```

---

## Pontos de atenção

```
Revisar:

- Técnicas de teste
- Testes estáticos
```

---

Botão:

```
Novo Simulado
```

---

# 11. Direção visual para o Stitch

Prompt base:

```
Crie uma interface SaaS premium para a Symulus, uma plataforma inteligente de preparação para certificações profissionais.

A identidade visual deve utilizar:
- azul profundo;
- roxo tecnológico;
- branco;
- estilo moderno semelhante a plataformas SaaS.

O produto utiliza IA para gerar simulados baseados no syllabus oficial.

Criar telas:
1. Landing page
2. Seleção de certificação
3. Configuração de simulado
4. Tela de questões
5. Resultado
6. Cadastro
7. Dashboard

Público:
profissionais de tecnologia buscando certificações.

Estilo:
profissional, confiável, tecnológico e educacional.
```

---

## Próxima etapa depois desta

Após gerar as telas no Stitch, eu seguiria para:

# 🏗️ Arquitetura Técnica — Symulus MVP

Definir:

- frontend;
- backend;
- banco;
- IA;
- RAG;
- fluxo de geração das questões;
- APIs.