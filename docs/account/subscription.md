---
id: subscription
title: Criar ou atualizar assinatura
---

## Método

`POST` https://api.plugchat.com.br/integrator/account/[ID_DA_CONTA]/subscription

---

## Conceituação

Este método permite você criar ou atualizar uma assinatura do seu cliente.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| operators | number | Quantidade de operadores que essa conta vai utilizar. Obs: mínimo de 2 |

---

## Request Body

```json
{
  "operators": 3
}
```

---

## Response

### 200

| Atributos | Tipo    | Descrição                   |
| :-------- | :------ | :-------------------------- |
| id        | string  | Identificador da assinatura |
| quantity  | number  | Quantidade de operadores    |
| status    | boolean | Status da assinatura        |

Exemplo

```json
{
  "id": "9B0075XSA324768FB812DABXS",
  "quantity": 3,
  "status": "active"
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/create-subscription.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
