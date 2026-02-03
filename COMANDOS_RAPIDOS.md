# ⚡ Comandos Rápidos - Deploy GitHub Pages

## 🎯 Opção 1: Comandos Rápidos (Recomendado)

Execute estes comandos na ordem:

```bash
cd /Users/wladmirbonazza/Documents/Sources/beCash/BecashCursor/Playgroud/portfolio-wladmir

# 1. Inicializar Git
git init
git add .
git commit -m "Portfolio Wladmir Bonazza - Site interativo com Next.js"

# 2. Criar repo no GitHub (vai abrir no browser para confirmar)
gh repo create portfolio-wladmir --public --source=. --remote=origin --push

# 3. Pronto! Agora configure GitHub Pages:
# Acesse: https://github.com/WladmirDotNet/portfolio-wladmir/settings/pages
# Em "Source", selecione: "GitHub Actions"
# O deploy será automático!
```

**Seu site ficará em:**
`https://wladmirdotnet.github.io/portfolio-wladmir/`

---

## 🎯 Opção 2: Criar Repo Manualmente

```bash
cd /Users/wladmirbonazza/Documents/Sources/beCash/BecashCursor/Playgroud/portfolio-wladmir

# 1. Inicializar Git
git init
git add .
git commit -m "Portfolio Wladmir Bonazza - Site interativo com Next.js"

# 2. Criar repositório em: https://github.com/new
#    Nome: portfolio-wladmir
#    Tipo: Public
#    NÃO marque "Initialize with README"

# 3. Conectar com o remote
git remote add origin https://github.com/WladmirDotNet/portfolio-wladmir.git
git branch -M main
git push -u origin main

# 4. Configurar GitHub Pages:
# https://github.com/WladmirDotNet/portfolio-wladmir/settings/pages
# Source: GitHub Actions
```

---

## 🔄 Atualizar o Site Depois

Sempre que fizer mudanças:

```bash
cd /Users/wladmirbonazza/Documents/Sources/beCash/BecashCursor/Playgroud/portfolio-wladmir

git add .
git commit -m "Descrição da mudança"
git push

# Deploy automático em ~2 minutos!
```

---

## ✅ Verificar Deploy

1. Acesse: `https://github.com/WladmirDotNet/portfolio-wladmir/actions`
2. Aguarde o workflow "Deploy to GitHub Pages" completar (símbolo verde ✓)
3. Acesse: `https://wladmirdotnet.github.io/portfolio-wladmir/`

---

## 🌐 Domínio Personalizado (Opcional)

Se quiser algo como `wladmir.dev`:

1. Compre o domínio (Registro.br ~R$ 40/ano)
2. Configure no DNS do domínio:
   ```
   Type: CNAME
   Name: www
   Value: wladmirdotnet.github.io
   ```
3. No GitHub: Settings > Pages > Custom domain: `www.wladmir.dev`
4. Aguarde propagação DNS (~30 min)

---

## 🎖️ Nota do Soldado Doninha

Comandante, tudo está configurado! 

Escolha a **Opção 1** (com `gh repo create`) que é mais rápida!

Depois de executar os comandos, seu portfolio estará NO AR para o mundo ver! 🌎

Se o Well ver esse portfolio, vai querer promover você E eu para Cabo! 🪖
