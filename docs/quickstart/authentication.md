---
id: authentication
title: Autenticação e Segurança
---

## O que é e para que serve?

Não é difícil imaginar que para comunicação entre API’s vamos precisar estabelecer um protocolo de segurança entre as partes, ou seja entre o Plug Chat e sua aplicação, todas as interações com nossa API precisará ser autenticada por um token enviado sempre na header da chamada.

---

## Token nas chamadas

Em todas chamadas que será feita, será necessário informar o atributo **Authorization** na **Headers** da chamada. <br /> Seguindo as boas práticas utilizamos o padrão **Bearer**, então sua chamada deve ficar parecida com:

| Atributos     |  Tipo  | Descrição                        |
| :------------ | :----: | :------------------------------- |
| Authorization | string | Bearer [SEU TOKEN DE INTEGRADOR] |

## Como consigo meu token?

Atualmente a API de integração é voltada a Software House que já possua um sistema e queira embutir um chat de atendimento via Whatsapp aos seus clientes. O processo passa por uma análise qualificativa feita pela nossa propria equipe. Caso queira solicitar se increver como partner, preencha o formulário: https://forms.gle/6NEovChmYgzVqLqQ7

---

:::important

Nunca compartilhe o seu token com ninguém e por medidas de segurança nunca faça a chamada para nossa api diretamente do seu frontend, pois seu token ficará visivel, utilize sempre seu backend para interagir com nós.
