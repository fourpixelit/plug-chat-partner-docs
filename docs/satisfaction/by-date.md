---
id: by-date
title: Por Data
---

## Método

`POST` https://api.plugchat.com.br/integrator/account/[ID_DA_CONTA]/satisfaction/by-date

---

## Conceituação

Neste método você pode listar as pesquisas de satisfação através de um filtro de data.

---

:::caution Sobre a URL da API

Observe que a URL da API é composta pelo id da conta do cliente, o mesmo retornado na criação da conta,

:::

## Request Body

### Atributos

| Atributos |  Tipo  | Descrição    |
| :-------- | :----: | :----------- |
| start     | number | Data inicial |
| end       | number | Data final   |

```json
{
  "start": 3445645645456777,
  "end": 3445645645456452
}
```

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-- | :-- |
| attendanceNumber | number | Número do atendimento |
| customer | customer | Informações do cliente |
| startTime | number | Data e horário que o atendimento foi iniciado |
| endTime | number | Data e horário que o atendimento foi finalizado |
| startBy | string | Id do operador que iniciou o atendimento |
| finishBy | string | Id do operador que finalizou o atendimento |
| id | string | ID do atendimento |
| operatorReport | string | Relato que o operador gravou no atendimento |
| operators | {} | Operadores que participaram do atendimento |
| operatorsData | operatorsData | Dados dos operadores |
| ratingObservation | string | Observação que o cliente deixou sobre o atendimento |
| ratingValue | number | Nota do atendimento dado pelo cliente |
| requestTime | number | Data e hora que o cliente chamou o atendimento |
| status | string | Status do atendimento |

### Customer

| Atributos | Tipo   | Descrição           |
| :-------- | :----- | :------------------ |
| name      | string | Nome do cliente     |
| phone     | string | Telefone do cliente |

### operatorsData

| Atributos | Tipo   | Descrição        |
| :-------- | :----- | :--------------- |
| id        | string | Id do operador   |
| name      | string | Nome do operador |

Exemplo

```json
{
  "success": true,
  "data": [
    {
      "attendanceNumber": 1954,
      "customer": {
        "name": "Cliente",
        "phone": "554499999999"
      },
      "startTime": 1697562382149,
      "endTime": 1697563312191,
      "startBy": "ewryerthyretrtertdsgfhgrt",
      "finishBy": "adfdfshdfgjghghjghtj",
      "id": "sdfhfghfghjegthjerghr",
      "operatorReport": "relato do operador",
      "operators": {
        "asdfsgdfgdfghfghfrgdefrgter": true
      },
      "operatorsData": [
        {
          "id": "waeetefrwrtyrtwywrtrewer",
          "name": "Operador"
        }
      ],
      "ratingObservation": "Observação",
      "ratingValue": 5,
      "requestTime": 1697562382149,
      "status": "FINISH"
    }
  ]
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/satisfaction-by-date.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
