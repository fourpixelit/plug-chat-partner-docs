---
id: magic-login
title: Login automático
---

### Conceituação

Quando você iniciou o chat de atendimento, você informou o atributo **accountId** que faz referência a conta do cliente. <br /> Porém ao iniciar o chat o operador vai precisar ficar logando a todo momento, isso acontece porque ao iniciar não informamos qual o operador que está acessando.

## Obter token do operador

Para iniciar o chat já conectado a um operador, você vai precisar informar o **accessToken** do operador. Esse token é retornado toda vez que você <a href="/operators/create-operator">cria um novo operador</a> ou <a href="/operators/update-operator">atualiza um operador</a>

## Iniciando chat com operador

Ao chamar o método **ChatPluginPlay.init**, nas configuracões informadas por parâmetro, você pode informar o token do operador pelo atributo **operatorAccessToken**.

```javascript
ChatPluginPlay.init({
  accountId: '32133-31232-312321-312312-312312',
  enableFloatingButton: true,
  operatorAccessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV....',
});
```

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| accountId | string | Identificador da conta do cliente |
| enableFloatingButton | boolean | Define se o botão flutuante do chat deve aparecer ao iniciar |
| operatorAccessToken | string | Token do operador que deve vir logado, obtenha o token <a href="/operators/create-operator">criando</a> ou <a href="/operators/update-operator">atualizando</a> um operador |
