---
id: get-account
title: Pegar dados da conta
---

## Método

`GET` https://api.plugchat.com.br/integrator/account/[ID_DA_CONTA]/

---

## Conceituação

Neste método você pode pegar os dados salvos de uma conta.

---

:::caution Sobre a URL da API

Observe que a URL da API é composta pelo id da conta do cliente, o mesmo retornado na criação da conta.

:::

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-- | :-- |
| externalId | string | Um identificador único do cliente na sua base de dados, usado para que você consiga vincular e identificar o cliente durante a integração |
| name | string | Nome do cliente ou da empresa dele |
| active | boolean | Informa se a empresa está ativa ou não, usado caso você queira bloquear o cliente por um tempo |
| onStartAttendance | string | Você pode configurar uma URL de webhook para receber informações sempre que um atendimento for iniciado. |
| onFinishAttendance | string | Você pode configurar uma URL de webhook para receber informações sempre que um atendimento for finalizado. |
| onReceiveMessage | string | Configure a URL para receber informação sempre que receber uma nova mensagem. |
| onSendingMessage | string | Configure a URL para receber informação sempre que enviar uma nova mensagem. |
| onMessageStatus | string | Configure a URL para receber informação sempre que uma mensagem for recebida, lida ou executada. |

Exemplo

```json
{
  "name": "exemplo de cliente",
  "externalId": "123",
  "active": true,
  "onStartAttendance": null,
  "onFinishAttendance": null,
  "onReceiveMessage": null,
  "onSendingMessage": null,
  "onMessageStatus": null
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/get-account.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
