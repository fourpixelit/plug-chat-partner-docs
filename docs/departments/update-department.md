---
id: update-department
title: Atualizar departamento
---

## Método

`PUT` https://api.plugchat.com.br/integrator/account/[ID_DA_CONTA]/departments

---

## Conceituação

Neste método você atualizar um departamento, observe que na body precisa ser informado o "id" do departamento a ser atualizado.

---

:::caution Sobre a URL da API

Observe que a URL da API é composta pelo id da conta do cliente, o mesmo retornado na criação da conta, isso é necessário para que o Plug Chat atualize o departamento corretamente.

:::

## Atributos

### Obrigatórios

| Atributos |  Tipo   | Descrição                                   |
| :-------- | :-----: | :------------------------------------------ |
| id        | string  | Id do departamento a ser atualizado         |
| name      | string  | Nome do departamento                        |
| active    | boolean | Informa se o departamento está ativo ou não |

---

## Request Body

```json
{
  "id": "421312-41232-412321-412312-412312",
  "name": "Comercial",
  "active": true
}
```

---

## Response

### 200

| Atributos | Tipo    | Descrição                                      |
| :-------- | :------ | :--------------------------------------------- |
| success   | boolean | Informa se a atualização teve succeso ou falha |
| id        | string  | Identificador do departamento atualizado       |

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

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/update-department.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
