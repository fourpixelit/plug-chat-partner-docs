---
id: create-account
title: Criar conta
---

## Método

`POST` https://api.plugchat.com.br/integrator/account

---

## Conceituação

Este método permite você criar uma conta para seu cliente.

Ao criar por padrão também é criado um departamento padrão com nome de departamento "Geral".

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| externalId | string | Um identificador único do cliente na sua base de dados, usado para que você consiga vincular e identificar o cliente durante a integração |
| name | string | Nome do cliente ou da empresa dele |
| active | boolean | Informa se a empresa está ativa ou não, usado caso você queira bloquear o cliente por um tempo |

### Opcionais

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| sessionName | string | Você pode definir um nome que será visivel apenas no whatsapp no momento da leitura do QRCode. |
| onFinishAttendance | string | Você pode configurar uma URL de webhook para receber informações sempre que um atendimento for finalizado. |

---

## Request Body

```json
{
  "externalId": "123",
  "name": "Meu Cliente 001",
  "active": true
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-- | :-- |
| success | boolean | informa se a criação teve succeso ou falha |
| accountId | string | identificador da conta do cliente no plug chat, é importante você armazenar essa informação do seu lado |
| externalId | string | Identificador informado por você na criação da conta |

Exemplo

```json
{
  "success": true,
  "accountId": "32133-31232-312321-312312-312312",
  "externalId": "123"
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/create-account.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
