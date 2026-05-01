#!/bin/bash

while true
do
  git add .

  if git diff --cached --quiet; then
    echo "Nenhuma alteração para enviar..."
  else
    git commit -m "auto update"
    git push
    echo "Push feito com sucesso!"
  fi

  sleep 60
done