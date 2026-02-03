# 🚀 Deploy no GitHub Pages

## Passo a Passo Completo

### 1️⃣ Criar Repositório no GitHub

```bash
# No diretório do projeto
cd /Users/wladmirbonazza/Documents/Sources/beCash/BecashCursor/Playgroud/portfolio-wladmir

# Inicializar Git
git init
git add .
git commit -m "Initial commit: Portfolio Wladmir Bonazza"

# Criar repositório no GitHub
gh repo create portfolio-wladmir --public --source=. --remote=origin

# Ou criar manualmente em https://github.com/new
# Depois conectar:
# git remote add origin https://github.com/WladmirDotNet/portfolio-wladmir.git

# Push inicial
git branch -M main
git push -u origin main
```

### 2️⃣ Configurar GitHub Pages

1. Acesse: `https://github.com/WladmirDotNet/portfolio-wladmir/settings/pages`
2. Em **Source**, selecione: `GitHub Actions`
3. Pronto! O workflow vai fazer deploy automaticamente

### 3️⃣ Aguardar Deploy

- Acesse: `https://github.com/WladmirDotNet/portfolio-wladmir/actions`
- Aguarde o workflow "Deploy to GitHub Pages" completar
- Seu site estará em: `https://wladmirdotnet.github.io/portfolio-wladmir/`

### 4️⃣ Atualizar o Site

Sempre que fizer mudanças:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O GitHub Actions fará deploy automático em ~2 minutos!

---

## ⚙️ Configurações Já Aplicadas

✅ `next.config.ts` - Configurado para export estático
✅ `.github/workflows/deploy.yml` - Workflow de deploy automático
✅ `.nojekyll` - Necessário para GitHub Pages

---

## 🌐 URLs

Após o deploy, seu portfolio estará disponível em:

- **GitHub Pages**: `https://wladmirdotnet.github.io/portfolio-wladmir/`
- **Domínio personalizado** (opcional): Configure em Settings > Pages > Custom domain

---

## 🎯 Domínio Personalizado (Opcional)

Se quiser usar um domínio tipo `wladmirbonazza.dev`:

1. Compre o domínio (Registro.br, GoDaddy, Namecheap)
2. Configure DNS:
   ```
   Type: CNAME
   Name: www
   Value: wladmirdotnet.github.io
   ```
3. No GitHub: Settings > Pages > Custom domain: `www.wladmirbonazza.dev`
4. Marque "Enforce HTTPS"

---

## ✅ Checklist

- [ ] Criar repositório no GitHub
- [ ] Push do código
- [ ] Configurar GitHub Pages (Source: GitHub Actions)
- [ ] Aguardar primeiro deploy
- [ ] Testar o site online
- [ ] (Opcional) Configurar domínio personalizado

---

## 🔄 Comandos Úteis

```bash
# Testar build local
npm run build

# Ver o resultado do build
cd out && npx serve

# Limpar cache
rm -rf .next out
npm run build
```

---

**Seu portfolio estará no ar em minutos!** 🚀

Soldado Doninha às ordens! 🪖
