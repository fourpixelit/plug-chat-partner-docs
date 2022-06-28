---
id: chat-interaction
title: Interação com chat
---

### Conceituação

É possível você manipular o chat apartir da sua aplicação, como por exemplo abrir o chat, fechar o chat ou abrir focado em uma conversa com uma mensagem pré-definida.

## Abrir modal do chat

Chamar este método sem passar um objeto de configuração, faz com que o modal do atendimento seja aberto.

```javascript
ChatPluginPlay.openChat();
```

## Abrir em uma conversa

Você pode abrir o modal de atendimento focado em uma conversa.

```javascript
ChatPluginPlay.openChat({
  phone: '554499999999',
});
```

| Atributos |  Tipo  | Descrição                                |
| :-------- | :----: | :--------------------------------------- |
| phone     | string | Número do chat que você deseja conversar |

## Abrir com uma mensagem

```javascript
ChatPluginPlay.openChat({
  phone: '554499999999',
  message: 'Olá, tudo bem?',
});
```

| Atributos |  Tipo  | Descrição                                             |
| :-------- | :----: | :---------------------------------------------------- |
| phone     | string | Número do chat que você deseja conversar              |
| message   | string | Mensagem que deve vir preenchida na input de conversa |

## Fechar modal do chat

Chamar este método sempre que quiser fechar o modal de atendimento.

```javascript
ChatPluginPlay.closeChat();
```
