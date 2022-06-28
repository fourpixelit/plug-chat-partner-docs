---
id: customization
title: Personalização
---

### Conceituação

A personalização é utilizada para que você consiga aplicar sua identidade visual ao chat como logo, icone e cores.

Essas configurações devem ser informadas ao iniciar o chat, então complementa o objeto de configuração do passo anterior.

## Alterando Tema

Você pode iniciar o chat informando o atributo **theme**.

```javascript
ChatPluginPlay.init({
  accountId: '32133-31232-312321-312312-312312',
  enableFloatingButton: true,
  theme: 'light',
});
```

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| accountId | string | Identificador da conta do cliente |
| enableFloatingButton | boolean | Define se o botão flutuante do chat deve aparecer ao iniciar |
| theme | string | Tema do chat, opções disponíveis são "light" ou "dark" |

## Personalizar botão flutuante

Mude a cor do fundo e do ícone do botão flutuante utilizando os atributos **floatingButtonColor** e **floatingIconColor**

```javascript
ChatPluginPlay.init({
  accountId: '32133-31232-312321-312312-312312',
  enableFloatingButton: true,
  floatingButtonColor: '#6e2bbb',
  floatingIconColor: '#fff',
});
```

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| accountId | string | Identificador da conta do cliente |
| enableFloatingButton | boolean | Define se o botão flutuante do chat deve aparecer ao iniciar |
| floatingButtonColor | string | Cor do fundo do botão flutuante |
| floatingIconColor | string | Cor do ícone do botão flutuante |

## Cores e logo

Também é possível aplicar sua identidade visual

```javascript
ChatPluginPlay.init({
  accountId: '32133-31232-312321-312312-312312',
  enableFloatingButton: true,
  appName: 'Kigi Chat',
  appIcon: 'https://www.plugchat.com.br/white-label/plug-chat/logo.png',
  appLogo: 'https://www.plugchat.com.br/white-label/plug-chat/plug-blue.png',
  appPrimaryColor: '#455CC7',
});
```

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| accountId | string | Identificador da conta do cliente |
| enableFloatingButton | boolean | Define se o botão flutuante do chat deve aparecer ao iniciar |
| appName | string | Nome da aplicação utilizada em alertas e copyright |
| appIcon | string | Ícone da aplicação utiliza no favicon, login e tela de carregamento |
| appLogo | string | Logo maior da aplicaçaão, utilizada na página inicial |
| appPrimaryColor | string | Cor primária da aplicação, aceita hexadecial, rgba e variáveis css |
