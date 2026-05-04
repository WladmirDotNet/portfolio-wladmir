# Portfolio - Wladmir Bonazza

Portfolio interativo e altamente dinâmico construído com Next.js 14, React, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utilitário
- **Framer Motion** - Animações avançadas
- **tsParticles** - Background de partículas interativas
- **next-themes** - Dark/Light mode
- **Lucide React** - Ícones modernos

## 🎨 Recursos

- ✨ Animações avançadas (parallax, 3D tilt, scroll reveal)
- 🌓 Dark/Light mode com transição suave
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada
- 🎯 SEO friendly
- 🔥 Partículas interativas no hero
- 💫 Typing effect no nome
- 📊 Contadores animados
- 🎴 Cards com efeitos 3D
- 📍 Timeline animada

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 📁 Estrutura

```
portfolio-wladmir/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── Hero/             # Seção hero com partículas
│   ├── About/            # Sobre mim
│   ├── Skills/           # Competências técnicas
│   ├── Experience/       # Timeline de experiências
│   ├── Projects/         # Projetos pessoais
│   ├── Differentials/    # Diferenciais
│   ├── Contact/          # Contato e idiomas
│   ├── Navigation/       # Menu responsivo
│   ├── ThemeToggle/      # Toggle dark/light
│   └── Footer/           # Rodapé
├── data/                  # Dados estruturados
│   └── curriculum.ts     # Dados do currículo
├── hooks/                 # Custom hooks
│   └── useScrollAnimation.ts
└── public/               # Assets estáticos
```

## 🎯 Deploy

O site pode ser facilmente deployado em:

- **Vercel** (recomendado - deploy automático com Git)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages**

## 📝 Personalização

Os dados do currículo estão centralizados em `data/curriculum.ts`. Edite esse arquivo para atualizar as informações.

### Tema (paleta)

Os tokens globais de tema ficam em `app/globals.css` (`:root` e `.dark`).
Para ajustar a identidade visual, altere principalmente `--primary`, `--ring` e utilitários globais como `.glow` e `.gradient-text`.

### Testes automatizados

```bash
npm run test
```

O teste `test/theme-colors.test.ts` valida os tokens principais e efeitos de glow da paleta.

## 🌟 Features Destacadas

1. **Hero Épico**: Background com partículas que reagem ao mouse + typing effect
2. **Contadores Animados**: Stats com animação de contagem
3. **Timeline Interativa**: Experiências em timeline vertical animada
4. **Cards 3D**: Projetos com efeito tilt 3D ao hover
5. **Scroll Animations**: Elementos aparecem suavemente ao scrollar
6. **Theme Toggle**: Troca suave entre dark e light mode

---

**Desenvolvido com paixão por tecnologia desde os 8 anos de idade** 💻
