---
id: list-operator
title: Listar operadores
---

## Método

`GET` https://www.plugchat.com.br/api/integrator/account/[ID_DA_CONTA]/operators

---

## Conceituação

Neste método você pode listar todos os operadores de uma conta

---

:::caution Sobre a URL da API

Observe que a URL da API é composta pelo id da conta do cliente, o mesmo retornado na criação da conta, isso é necessário para que o Plug Chat crie o departamento na conta correta do seu cliente.

:::

## Response

### 200

| Atributos   | Tipo                 | Descrição                   |
| :---------- | :------------------- | :-------------------------- |
| name        | string               | Nome do operador            |
| id          | string               | Identificador do operador   |
| createdAt   | timestamp in seconds | Data de criação do operador |
| active      | boolean              | Se está ativo ou não        |
| accessToken | string               | Token de acesso ao chat     |

Exemplo

```json
[
  {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ8.eyJhY2NvdW50SWQiOiIyMTRkNjk03243205YmU4LTRmM2MtODA1My0xNDAzNTdmMTdhYTUiLCJvcGVyYXRvcklkIjoiOTBkNjNhYTMtMmZiMS00ZTdlLThlM2QtZjJhZTJj23jhuDkwIiwiaWF0IjoxNjU2NDI3MjY1LCJleHAiOjE2ODc5ODQxOTF9.EzoCzs_FZ7Lbuag03g2BHW709jJTZ12tFyv-xj3hiuyb",
    "id": "90d63aa3-2fb1-4e7e-8e3d-f2ae2cb23890",
    "name": "Operador 001",
    "active": true,
    "departments": ["421312-41232-412321-412312-412312"],
    "createdAt": 1656427265615
  }
]
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/list-operator.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
