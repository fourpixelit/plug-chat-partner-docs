---
id: sdk-destroy
title: Destruir chat
---

### Conceituação

Esse método foi criado pensando nas aplicações desenvolvidas em **SPA(Single-page application)**.

Geralmente em aplicações SPA, ao trocar de tela a aplicação não é carregada novamente, então todo componente criado em um determinado momento precisa ser destruído.

## Destruindo chat

Imagine um cenário onde ao fazer o login na sua aplicação você inicie o chat, como visto na sessão de <a href="/sdk/configuration#iniciar-chat">Iniciar Chat</a>, concorda que ao fazer o logout, você teria que parar a execução do chat? É nesse momento que você deve utilizar o método destroy.

```javascript
ChatPluginPlay.destroy();
```
