---
id: install
title: Instalação
---

### Conceituação

A instalação do SDK é basica e funciona por meio da importação de um script disponibilizado por nós através de um CDN.

Para isso, basta inserir um script na tag **HEAD** do seu projeto, para que os recursos do chat sejam carregados com prioridade.

### Script da SDK

```html
<script src="https://plugchat.com.br/sdk/index.js"></script>
```

### Exemplo de HTML

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minha aplicação</title>

    <!-- importação da SDK do plug chat -->
    <script src="https://plugchat.com.br/sdk/index.js"></script>
  </head>
  <body>
    <h1>Exemplo de uma aplicação</h1>

    <!-- script da sua aplicação -->
    <script async src="app.js"></script>
  </body>
</html>
```
