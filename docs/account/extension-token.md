---
id: extension-token
title: Token de conexão via extensão
---

## Método

`GET` https://api.plugchat.com.br/integrator/account/[ID_DA_CONTA]/extension-token

---

## Conceituação

Neste método você pode gerar um código de conexão para vincular o WhatsApp da conta através da extensão de navegador **Whats Conector** (Z-API), sem a necessidade de ler o QR Code.

O código retornado deve ser digitado na extensão e possui um tempo de validade. Após expirar, basta chamar novamente este método para gerar um novo código.

---

:::caution Sobre a URL da API

Observe que a URL da API é composta pelo id da conta do cliente, o mesmo retornado na criação da conta.

:::

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-- | :-- |
| token | string | Código de conexão que deve ser digitado na extensão Whats Conector |
| expiresAt | number | Data/hora de expiração do código em milissegundos (epoch). Após esse instante, gere um novo código |

Exemplo

```json
{
  "token": "AB12CD",
  "expiresAt": 1751385600000
}
```

### 404

Retornado quando a conta não é encontrada para o seu integrador ou quando a conta ainda não possui uma instância de WhatsApp associada.

```json
{
  "reason": "entity not found"
}
```

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja verifique se você enviou o GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/fourpixelit/plug-chat-partner-docs/main/json-examples/extension-token.json&targets=all" frameBorder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
