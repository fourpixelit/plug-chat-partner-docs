---
id: delete-department
title: Excluir departamento
---

## Método

`DELETE` https://www.plugchat.com.br/api/integrator/account/[ID_DA_CONTA]/departments/[ID_DO_DEPARTAMENTO]

---

## Conceituação

Este método permite você apagar um departamento de uma conta, é importante falar que quando um departamento é excluido, todos os chats que estavam vinculado ao ele é transferido para o departamento Geral.

---

:::caution Sobre a URL da API

Observe que a URL da API é composta pelo ID da conta do cliente e pelo ID do departamento a ser excluido, o mesmo retornado na criação da conta e criação de departamento, isso é necessário para que o Plug Chat identifique corretamente os registros.

:::

## Response

### 200

| Atributos | Tipo    | Descrição                                  |
| :-------- | :------ | :----------------------------------------- |
| success   | boolean | Informa se a deleção teve succeso ou falha |

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

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/delete-department.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
