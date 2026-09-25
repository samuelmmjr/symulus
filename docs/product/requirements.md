# 📋 Requisitos do Produto

# Simulus MVP

## 1. Visão geral

### Objetivo

Desenvolver uma plataforma de simulados inteligentes utilizando IA generativa, capaz de criar questões baseadas exclusivamente no syllabus oficial de certificações profissionais.

O sistema permitirá que usuários realizem simulados gratuitos sem cadastro e, posteriormente, criem uma conta para acompanhar seu progresso.

---

# 2. Perfis de usuário

## 2.1 Visitante

Usuário sem autenticação.

Permissões:

- acessar a plataforma;
- selecionar certificação disponível;
- realizar simulado gratuito;
- responder questões;
- visualizar resultado.

Restrições:

- quantidade limitada de questões;
- sem histórico;
- sem acompanhamento de evolução.

---

## 2.2 Usuário cadastrado

Usuário autenticado.

Permissões:

- realizar simulados;
- salvar histórico;
- acompanhar desempenho;
- visualizar evolução;
- acessar recomendações.

---

# 3. Requisitos Funcionais

## RF001 — Exibir apresentação do produto

**Descrição:**

O sistema deve apresentar a proposta da plataforma ao usuário.

**Critérios de aceite:**

- Deve exibir a mensagem principal:
"Experimente gratuitamente um simulado inteligente baseado no syllabus da sua certificação."
- Deve disponibilizar opção de iniciar simulado gratuito.
- Deve disponibilizar opção de cadastro.

---

# RF002 — Permitir acesso sem cadastro

**Descrição:**

O sistema deve permitir que visitantes utilizem uma versão limitada da plataforma sem criar conta.

**Critérios:**

- Usuário não autenticado consegue iniciar um simulado.
- Sistema não deve exigir email ou senha.
- Sistema deve aplicar limitações do modo visitante.

---

# RF003 — Selecionar certificação

**Descrição:**

O usuário deve selecionar a certificação desejada.

Exemplo:

- ISTQB Foundation.

Critérios:

- Sistema deve apresentar certificações disponíveis.
- Usuário deve selecionar apenas certificações cadastradas.

---

# RF004 — Configurar simulado

**Descrição:**

O usuário deve poder definir parâmetros do simulado.

Critérios:

Permitir selecionar:

- quantidade de questões;
- capítulo/tópico;
- nível de dificuldade.

Para visitante:

- limitar opções disponíveis.

---

# RF005 — Gerar questões utilizando IA

**Descrição:**

O sistema deve gerar questões utilizando exclusivamente o conteúdo disponível no syllabus.

Critérios:

- Questões devem estar relacionadas ao material oficial.
- Sistema deve evitar informações externas.
- Cada questão deve possuir referência ao conteúdo utilizado.

---

# RF006 — Apresentar questão

**Descrição:**

O sistema deve apresentar as questões ao usuário.

Critérios:

Exibir:

- enunciado;
- alternativas;
- número da questão;
- progresso do simulado.

---

# RF007 — Registrar resposta

**Descrição:**

O sistema deve permitir que o usuário responda cada questão.

Critérios:

- usuário seleciona alternativa;
- sistema registra resposta;
- sistema impede avanço sem resposta.

---

# RF008 — Corrigir questão

**Descrição:**

O sistema deve informar se a resposta está correta.

Critérios:

Apresentar:

- resposta correta;
- resposta selecionada;
- explicação baseada no syllabus.

---

# RF009 — Apresentar resultado

**Descrição:**

O sistema deve apresentar o desempenho após conclusão.

Critérios:

Exibir:

- percentual de acerto;
- quantidade de acertos;
- quantidade de erros;
- assuntos com dificuldade.

---

# RF010 — Solicitar cadastro após experiência gratuita

**Descrição:**

Após o simulado gratuito, o sistema deve incentivar o cadastro.

Critérios:

Exibir:

- convite para criar conta;
- benefícios do cadastro.

---

# RF011 — Criar conta

**Descrição:**

Usuário deve poder criar uma conta.

Critérios:

Campos:

- nome;
- email;
- senha.

---

# RF012 — Salvar histórico

**Descrição:**

Usuários cadastrados devem ter seus resultados armazenados.

Critérios:

Salvar:

- certificação;
- data;
- resultado;
- questões respondidas.

---

# RF013 — Exibir evolução

**Descrição:**

Usuário cadastrado deve visualizar seu progresso.

Critérios:

Exibir:

- simulados realizados;
- percentual médio;
- evolução por assunto.

---

# 4. Requisitos Não Funcionais

## RNF001 — Desempenho

O sistema deve responder às ações principais em até 3 segundos em condições normais.

---

## RNF002 — Disponibilidade

A aplicação deve possuir disponibilidade adequada para acesso dos usuários.

---

## RNF003 — Segurança

O sistema deve:

- proteger dados dos usuários;
- armazenar senhas utilizando criptografia;
- controlar acesso às informações.

---

## RNF004 — Responsividade

A aplicação deve funcionar em:

- desktop;
- tablet;
- smartphone.

---

## RNF005 — Escalabilidade

A arquitetura deve permitir aumento de usuários e certificações futuras.

---

## RNF006 — Confiabilidade do conteúdo

As questões geradas pela IA devem ser baseadas no conteúdo oficial cadastrado.

---

## RNF007 — Auditoria

O sistema deve permitir identificar:

- qual syllabus originou a questão;
- qual versão do material foi utilizada.

---

## RNF008 — Usabilidade

O usuário deve conseguir iniciar um simulado gratuito sem necessidade de treinamento prévio.