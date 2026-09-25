# 🎨 Design System

# Symulus

## 1. Visão Geral

O Design System da Symulus define os padrões visuais e componentes utilizados na plataforma.

O objetivo é garantir uma experiência:

- consistente;
- profissional;
- moderna;
- intuitiva;
- alinhada ao posicionamento da marca.

A identidade deve transmitir:

> Inteligência + Confiança + Evolução.
> 

---

# 2. Fundamentos da Marca

## Conceito visual

O símbolo da Symulus representa um diamante.

Significado:

```
Conteúdo bruto
      ↓
Conhecimento estruturado
      ↓
Preparação inteligente
      ↓
Certificação conquistada
```

A interface deve refletir essa ideia:

- clareza;
- evolução;
- progresso;
- precisão.

---

# 3. Paleta de Cores

## Cores Primárias

---

## Symulus Navy

HEX:

```
#0B1026
```

Uso:

- header;
- fundos escuros;
- áreas institucionais;
- elementos premium.

Representa:

- confiança;
- profissionalismo;
- tecnologia.

---

## Symulus Purple

HEX:

```
#6D4AFF
```

Uso:

- CTA principal;
- destaque de IA;
- estados ativos.

Representa:

- inteligência;
- inovação;
- criatividade.

---

## Symulus Blue

HEX:

```
#3B82F6
```

Uso:

- indicadores;
- progresso;
- gráficos.

Representa:

- evolução;
- aprendizado.

---

# 4. Cores Neutras

## Branco

HEX:

```
#FFFFFF
```

Uso:

- fundos;
- cards;
- áreas de leitura.

---

## Gray Background

HEX:

```
#F8FAFC
```

Uso:

- áreas secundárias;
- separações.

---

## Gray Text

HEX:

```
#64748B
```

Uso:

- textos auxiliares;
- descrições.

---

## Dark Text

HEX:

```
#111827
```

Uso:

- títulos;
- textos principais.

---

# 5. Gradientes

Uso restrito.

## Symulus Intelligence Gradient

```
#6D4AFF → #3B82F6
```

Aplicação:

- elementos de IA;
- destaques;
- banners especiais.

Evitar usar em todos os componentes.

---

# 6. Tipografia

## Fonte Principal

# Inter

Motivos:

- moderna;
- excelente leitura;
- adequada para SaaS;
- boa em telas pequenas.

---

# Hierarquia

## Heading 1

Uso:

Títulos principais.

Exemplo:

> Prepare-se para sua certificação.
> 

Configuração:

```
Font:
Inter Bold

Size:
48px Desktop

36px Mobile
```

---

## Heading 2

Uso:

Seções.

```
32px
SemiBold
```

---

## Body

Uso:

Textos.

```
16px
Regular
```

---

## Small Text

Uso:

Informações auxiliares.

```
14px
Regular
```

---

# 7. Espaçamento

Sistema baseado em múltiplos de 4.

## Escala:

```
4px
8px
12px
16px
24px
32px
48px
64px
```

---

# 8. Botões

## Primary Button

Uso:

Ações principais.

Exemplo:

"Experimentar gratuitamente"

Características:

- fundo roxo;
- texto branco;
- bordas arredondadas.

---

Estados:

Normal:

```
Background:
#6D4AFF
```

Hover:

```
Background:
#5B3FE0
```

Disabled:

```
Opacity:
50%
```

---

## Secondary Button

Uso:

Ações alternativas.

Exemplo:

"Ver certificações"

Características:

- fundo transparente;
- borda;
- texto navy.

---

# 9. Cards

Utilizados em:

- certificações;
- dashboard;
- resultados.

Características:

```
Background:
#FFFFFF

Border:
#E5E7EB

Radius:
16px

Padding:
24px
```

---

# 10. Componentes Principais

## Certification Card

Uso:

Mostrar certificações disponíveis.

Elementos:

- ícone;
- nome;
- descrição;
- progresso;
- CTA.

Exemplo:

```
ISTQB CTFL

Certified Tester Foundation Level

75% preparado

[Continuar]
```

---

# Question Card

Uso:

Tela de simulado.

Elementos:

- número;
- pergunta;
- alternativas;
- referência do syllabus.

---

# Progress Card

Uso:

Dashboard.

Mostrar:

- percentual;
- evolução;
- objetivo.

---

# AI Insight Card

Componente exclusivo Symulus.

Uso:

Mostrar recomendações da IA.

Exemplo:

```
🤖 Symulus AI

Você possui dificuldade em
Boundary Value Analysis.

Recomendamos revisar:
Capítulo 4.2
```

---

# 11. Ícones

Estilo:

- outline;
- minimalista;
- moderno.

Preferência:

Lucide Icons.

Uso:

- navegação;
- indicadores;
- status.

---

# 12. Bordas e Sombras

## Border Radius

Padrão:

```
12px
```

Cards grandes:

```
16px
```

Botões:

```
12px
```

---

## Sombras

Uso moderado.

Evitar aparência pesada.

Padrão:

```
Shadow:
0 4px 12px rgba(0,0,0,0.08)
```

---

# 13. Estados da Interface

Todo componente deve possuir:

## Loading

Exemplo:

Skeleton loading.

---

## Empty State

Exemplo:

```
Você ainda não realizou nenhum simulado.

Comece sua preparação agora.
```

---

## Error State

Mensagem clara:

```
Não conseguimos gerar seu simulado.
Tente novamente.
```

---

## Success State

Exemplo:

```
Simulado concluído!

Seu desempenho:
85%
```

---

# 14. Responsividade

A Symulus deve funcionar em:

## Desktop

Prioridade:

- dashboard;
- análise;
- gráficos.

---

## Mobile

Prioridade:

- simulado;
- respostas;
- progresso.

---

# 15. Princípios de Interface

## Menos distração

O usuário está estudando.

---

## Informação útil

Toda informação deve ajudar a evolução.

---

## Clareza

Sempre mostrar:

- onde estou;
- meu progresso;
- próximo passo.

---

## Inteligência visível

A IA deve aparecer como orientação, não apenas como geradora de perguntas.

---

# Resumo do Design System

| Item | Definição |
| --- | --- |
| Marca | Symulus |
| Estilo | SaaS premium educacional |
| Fonte | Inter |
| Cor principal | Navy |
| Cor IA | Purple |
| Cor evolução | Blue |
| Ícone | Diamante |
| Border radius | 12-16px |
| Grid | 4px |
| Componentes-chave | Cards, Progress, AI Insights |

---

## Próximo passo recomendado

Agora que temos:

✅ Produto

✅ Marca

✅ Jornada

✅ UX

✅ Design System