---
id: config-ura
title: Configurar URA
---

## Método

`POST` https://api.plugchat.com.br/integrator/account/[ID_DA_CONTA]/ura

---

## Conceituação

Este método permite você configurar alguns comportamentos da URA e suas mensagens automáticas.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| active | boolean | Define se a URA está ativada ou não |
| ignoreGeral | boolean | Define se a URA deve ignorar o departamento Geral e não apresentar ao cliente como uma opção |
| ignoreGroups | boolean | Define se a URA deve ignorar mensagens de grupos |
| welcomeMessage | string | Mensagem inicial que a URA responderá assim que o usuário enviar a primeira mensagem |
| departmentMessage | string | Mensagem que aparecerá para que o usuário escolha o departamento que deseja atendimento |

---

## Request Body

```json
{
  "active": true,
  "ignoreGeral": true,
  "ignoreGroups": true,
  "welcomeMessage": "Olá {senderName}, bem-vindo ao nosso atendimento",
  "departmentMessage": "Para melhor te atender, com qual departamento você deseja falar?"
}
```

:::caution Sobre variáveis

Observe que na configuração da mensagem, você pode complementar a mensagem com o nome do cliente que enviou a mensagem, para isso basta utilizar a variável **{senderName}** entre chaves. Isso deixa sua mensagem mais agradável e personalizada.

:::

---

## Response

### 200

| Atributos | Tipo    | Descrição                                       |
| :-------- | :------ | :---------------------------------------------- |
| success   | boolean | informa se a configuração teve succeso ou falha |

Exemplo

```json
{
  "success": true
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/config-ura.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
