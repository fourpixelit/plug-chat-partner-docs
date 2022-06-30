---
id: list-department
title: Listar departamentos
---

## Método

`GET` https://api.plugchat.com.br/integrator/account/[ID_DA_CONTA]/departments

---

## Conceituação

Neste método você pode listar todos os departamentos de uma conta

---

:::caution Sobre a URL da API

Observe que a URL da API é composta pelo id da conta do cliente, o mesmo retornado na criação da conta, isso é necessário para que o Plug Chat crie o departamento na conta correta do seu cliente.

:::

## Response

### 200

| Atributos | Tipo                 | Descrição                       |
| :-------- | :------------------- | :------------------------------ |
| name      | string               | Nome do departamento            |
| id        | string               | Identificador do departamento   |
| createdAt | timestamp in seconds | Data de criação do departamento |
| active    | boolean              | Se está ativo ou não            |

Exemplo

```json
[
  {
    "name": "Geral",
    "id": "24324343-2c0c-41dd-21db-2fb489ef9cc2",
    "createdAt": 1655327397887,
    "active": true
  },
  {
    "name": "Suporte",
    "id": "421312-41232-412321-412312-412312",
    "createdAt": 1656425152699,
    "active": true
  }
]
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/list-department.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
