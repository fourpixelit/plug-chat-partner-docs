---
id: create-operator
title: Criar operador
---

## Método

`POST` https://www.plugchat.com.br/api/integrator/account/[ID_DA_CONTA]/operators

---

## Conceituação

Neste método você criar um novo operador de chat e vincular a departamentos, caso tenha dúvidas de onde pegar os IDS dos departamentos, você pode utilizar a API de listar departamentos.

Observe também que ao criar um operador é retornado o atributo **accessToken**, esse token é importante ser armazenado do seu lado, para que quando o cliente fizer login no seu sistema, automaticamente faça login no chat de atendimento sem a necessidade de digitar login e senha do operador.

---

:::caution Sobre a URL da API

Observe que a URL da API é composta pelo id da conta do cliente, o mesmo retornado na criação da conta, isso é necessário para que o Plug Chat crie o operador na conta correta do seu cliente.

:::

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| name | string | Nome do operador |
| active | boolean | Informa se o operador está ativo ou não |
| departments | string[] | Lista de IDS dos departamentos que o operador possui acesso |

---

## Request Body

```json
{
  "name": "Operador 001",
  "active": true,
  "departments": ["421312-41232-412321-412312-412312"]
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-- | :-- |
| success | boolean | Informa se a criação teve succeso ou falha |
| id | string | Identificador do operador criado |
| accessToken | string | Token de acesso ao chat que pode ser utilizado na SDK para que não seja necessário o operador fazer login a todo momento. |

Exemplo

```json
{
  "success": true,
  "id": "621312-41232-612321-612312-612312",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ8.eyJhY2NvdW50SWQiOiIyMTRkNjk03243205YmU4LTRmM2MtODA1My0xNDAzNTdmMTdhYTUiLCJvcGVyYXRvcklkIjoiOTBkNjNhYTMtMmZiMS00ZTdlLThlM2QtZjJhZTJj23jhuDkwIiwiaWF0IjoxNjU2NDI3MjY1LCJleHAiOjE2ODc5ODQxOTF9.EzoCzs_FZ7Lbuag03g2BHW709jJTZ12tFyv-xj3hiuyb"
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/create-operator.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
