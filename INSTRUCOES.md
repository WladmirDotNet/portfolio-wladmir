# 🚀 Instruções de Instalação e Uso

## Comandante, seu portfolio está pronto!

### 📦 Instalação

```bash
cd /Users/wladmirbonazza/Documents/Sources/beCash/BecashCursor/Playgroud/portfolio-wladmir

# Instalar dependências
npm install

# Se houver erro, tente:
npm install --legacy-peer-deps
```

### 🏃 Executar em Desenvolvimento

```bash
npm run dev
```

O site estará disponível em: `http://localhost:3000`

### 🏗️ Build para Produção

```bash
npm run build
npm start
```

### 📤 Deploy

#### Vercel (Recomendado - Gratuito e Automático)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Deploy automático!

#### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npm run export
```

#### AWS (S3 + CloudFront)

```bash
npm run build
# Upload da pasta .next/static e public para S3
# Configure CloudFront distribution
```

## 🎨 Recursos Implementados

### ✨ Animações
- Partículas interativas no hero (reagem ao mouse)
- Typing effect no nome
- Contadores animados
- Scroll reveal (elementos aparecem ao scrollar)
- Cards com efeito 3D tilt
- Timeline animada
- Progress bars animadas
- Transições suaves entre páginas

### 🌓 Temas
- Dark mode (padrão)
- Light mode
- Toggle suave entre temas
- Botão fixo no canto superior direito

### 📱 Responsividade
- Mobile-first design
- Menu hamburger em dispositivos móveis
- Touch-friendly
- Adaptado para tablets e desktops

### 🎯 Seções

1. **Hero** - Nome com typing effect + partículas animadas
2. **Sobre** - Contadores de impacto + resumo profissional
3. **Competências** - Grid de skills com cards expansíveis
4. **Experiência** - Timeline vertical animada
5. **Projetos** - Cards 3D com hover effect
6. **Diferenciais** - Cards com ícones animados
7. **Contato** - Links sociais + idiomas

## 🔧 Personalização

### Atualizar Dados

Edite o arquivo `data/curriculum.ts` para atualizar qualquer informação do currículo.

### Cores

Edite `tailwind.config.ts` para mudar o esquema de cores.

### Animações

Ajuste as animações em `app/globals.css` e nos componentes individuais.

## 🐛 Troubleshooting

### Erro de instalação

```bash
# Limpe o cache
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Erro de build

```bash
# Verifique se todas as dependências estão instaladas
npm install
npm run build
```

### Partículas não aparecem

Certifique-se de que o JavaScript está habilitado no navegador.

## 📊 Performance

- Lazy loading de componentes
- Code splitting automático
- Otimização de imagens
- Preload de fontes
- Minimal bundle size

## 🎯 Próximos Passos Sugeridos

1. Adicionar foto profissional em `public/images/profile.jpg`
2. Conectar com Google Analytics
3. Adicionar meta tags Open Graph para compartilhamento
4. Configurar domínio personalizado
5. Adicionar animações Lottie (opcional)
6. Implementar formulário de contato com backend

---

**Seu portfolio foi criado com as melhores práticas de desenvolvimento!** 💪

Preparado para impressionar o Well e toda a equipe! 🎖️
