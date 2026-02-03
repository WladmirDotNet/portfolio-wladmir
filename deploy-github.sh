#!/bin/bash

echo "🎖️ Soldado Doninha iniciando deploy do portfolio!"
echo "================================================"
echo ""

# Ir para o diretório do projeto
cd "$(dirname "$0")"

echo "📁 Diretório atual: $(pwd)"
echo ""

# Verificar se já é um repo git
if [ -d .git ]; then
    echo "⚠️  Git já inicializado. Pulando..."
else
    echo "🔧 Inicializando Git..."
    git init
    git add .
    git commit -m "Portfolio Wladmir Bonazza - Site interativo com Next.js"
    echo "✅ Git inicializado!"
fi

echo ""
echo "📤 Criando repositório no GitHub..."
echo "   (Vai abrir no browser para confirmar)"
echo ""

# Criar repositório usando gh CLI
gh repo create portfolio-wladmir \
    --public \
    --source=. \
    --remote=origin \
    --push \
    --description="Portfolio interativo de Wladmir Bonazza - Software Architect | +30 anos de tecnologia"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Repositório criado com sucesso!"
    echo ""
    echo "🎯 PRÓXIMO PASSO:"
    echo "   1. Acesse: https://github.com/WladmirDotNet/portfolio-wladmir/settings/pages"
    echo "   2. Em 'Source', selecione: 'GitHub Actions'"
    echo "   3. Aguarde ~2 minutos"
    echo "   4. Seu site estará em: https://wladmirdotnet.github.io/portfolio-wladmir/"
    echo ""
    echo "🎖️ Missão cumprida, Comandante!"
else
    echo ""
    echo "⚠️  Erro ao criar repositório."
    echo "   Verifique se já existe ou crie manualmente em:"
    echo "   https://github.com/new"
fi
