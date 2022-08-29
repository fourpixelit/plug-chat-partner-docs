---
id: cancel-subscription
title: Cancelar assinatura
---

## Método

`POST` https://api.plugchat.com.br/integrator/account/[ID_DA_CONTA]/cancel-subscription

---

## Conceituação

Este método permite você cancelar a assinatura do seu cliente. Não é necessário informar nenhum dado no corpo da requisição.

---

## Response

### 200

| Atributos | Tipo    | Descrição                                       |
| :-------- | :------ | :---------------------------------------------- |
| success   | boolean | informa se o cancelamento teve succeso ou falha |

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

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/cancel-subscription.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
