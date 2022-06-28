---
id: create-department
title: Criar departamento
---

## Método

`POST` https://www.plugchat.com.br/api/integrator/account/[ID_DA_CONTA]/departments

---

## Conceituação

Neste método você criar departamentos para separar contextos dos chats.

---

:::caution Sobre a URL da API

Observe que a URL da API é composta pelo id da conta do cliente, o mesmo retornado na criação da conta, isso é necessário para que o Plug Chat crie o departamento na conta correta do seu cliente.

:::

## Atributos

### Obrigatórios

| Atributos |  Tipo   | Descrição                                   |
| :-------- | :-----: | :------------------------------------------ |
| name      | string  | Nome do departamento                        |
| active    | boolean | Informa se o departamento está ativo ou não |

---

## Request Body

```json
{
  "name": "Suporte",
  "active": true
}
```

---

## Response

### 200

| Atributos | Tipo    | Descrição                                  |
| :-------- | :------ | :----------------------------------------- |
| success   | boolean | Informa se a criação teve succeso ou falha |
| id        | string  | Identificador do departamento criado       |

Exemplo

```json
{
  "success": true,
  "id": "421312-41232-412321-412312-412312"
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/create-department.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
