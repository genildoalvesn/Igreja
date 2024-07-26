#!/bin/bash

# Verifica se estamos em um diretório Git
if [ ! -d ".git" ]; then
    echo "Este script deve ser executado no diretório de um repositório Git."
    exit 1
fi

# Verifica o status do Git
status=$(git status --porcelain)

if [ -z "$status" ]; then
    echo "Não há alterações para fazer o pull."
    exit 0
fi

# Verifica conflitos de merge
conflicts=$(echo "$status" | grep "^UU")

if [ -z "$conflicts" ]; then
    echo "Não há conflitos de merge."
    exit 0
fi

echo "Resolvendo conflitos de merge..."

# Resolvendo conflitos automaticamente
# Aqui, vamos simplesmente escolher a versão local em conflitos
# Para versões mais sofisticadas, ajustes são necessários
for file in $(echo "$conflicts" | awk '{print $2}'); do
    echo "Resolvendo conflito em $file"
    # Adiciona a versão local
    git checkout --ours "$file"
    git add "$file"
done

# Faz um commit com a resolução de conflitos
git commit -m "Resolvendo conflitos de merge automaticamente"

# Atualiza a branch local
git pull origin master

echo "Conflitos resolvidos e branch atualizada."
