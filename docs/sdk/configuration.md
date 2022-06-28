---
id: configuration
title: Configuração
---

### Conceituação

Após instalado a SDK no projeto, será disponibilizado algumas funções na window.

A primeira que precisamos utilizar é a função **"ChatPluginPlay.init"**. Essa função deve ser chamada sempre que você quiser que o chat se inicie e esteja preparado para utilização do cliente.

## Iniciar Chat

Para iniciar o chat, é necessário informar o atributo **accountId**, esse atributo é o identificador da conta do cliente. Caso você não tenha o accountId, basta criar na sessão de <a href="/account/create-account">criação de conta.</a>

### Objeto de configuração

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| accountId | string | Identificador da conta do cliente |
| enableFloatingButton | boolean | Define se o botão flutuante do chat deve aparecer ao iniciar |

## Exemplo de app.js

```javascript
ChatPluginPlay.init({
  accountId: '32133-31232-312321-312312-312312',
  enableFloatingButton: true,
});
```
