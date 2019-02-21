---
layout: post
title: "SOLID"
date: 2019-02-21 11:45:00
image: '/assets/img/'
description: 'Cinco princípios fundamentais da programação orientada a objetos.'
main-class: 'dev'
color: '#cf4647'
tags:
- desenvolvimento
- OOP
categories:
twitter_text: 'Introdução ao SOLID.'
introduction: 'Introdução ao SOLID, os cinco princípios fundamentais da programação orientada a objetos.'
comments: true
---

Fala galera, tudo beleza? Hoje vou introduzir um tópico muito importante na área do desenvolvimento de software orientado a objetos. 
O **SOLID** é um acrônimo das cinco primeiras letras dos princípios identificados por [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) 
(conhecido amplamente como Uncle Bob) com o objetivo de auxiliar na criação de projetos de software mais compreensíveis, flexíveis e de fácil manutenção. 

Os princípios, apesar de serem identificados pelo Uncle Bob, foram cunhados sob o acrônimo SOLID pelo [Michael Feathers](https://twitter.com/mfeathers) após 
notar que eles poderiam ser combinados de maneira a formar esta palavra. 

### Definições
E então, quem são eles e o que significam? Vamos lá:

- **SRP** - **S**ingle **R**esponsibility **P**rinciple ou Princípio da Responsabilidade Única.

> Uma classe deve ter um, e apenas um, motivo para mudar.

- **OCP** - **O**pen/**C**losed **P**rinciple ou Princípio do Aberto/Fechado

> Suas classes devem ser abertas para extensão e fechadas para modificação.

- **LSP** - **L**iskov **S**ubstitution **P**rinciple ou Princípio de Substituição de Liskov

> Classes base devem ser substituíveis pelas classes derivadas.

- **ISP** - **I**nterface **S**egregation **P**rinciple ou Princípio da Segregação de Interface

> Muitas interfaces especializadas são melhores que uma única interface generalizada.

- **DIP** - **D**ependency **I**nversion **P**rinciple ou Princípio da Inversão de Dependência

> Dependa de uma abstração, não de uma implementação.

### E por que esses princípios são importantes?
Ao seguir estes princípios temos vários benefícios, citarei alguns para exemplificar e te animar a querer saber tudo sobre eles:
- Contribui para o entendimento geral do software, facilitando a manutenção.
- Aumenta o poder da reusabilidade.
- Torna o código mais testável.
- Permite a inclusão de novas features de maneira mais simplificada.

E muitos outros benefícios que serão aprendidos ao longo de cada um dos princípios.

### Mas, se é tão bom assim, por que uma quantidade considerável de softwares ainda não o seguem?
O grande desafio fica por conta de que, apesar de relativamente simples, os princípios não são tão fáceis de serem seguidos. Há a 
necessidade dos desenvolvedores sempre pensarem claramente a respeito dos princípios ao realizar qualquer mudança no código. Tudo isso,
acrescido de uma possível pressão que a equipe de desenvolvimento poderia estar sofrendo, seria uma receita típica para causar [dívidas
técnicas](https://en.wikipedia.org/wiki/Technical_debt) ao longo do projeto, mas este é um outro tópico que pretendo abordar no futuro. :)

### Conclusão
Bom, espero que eu tenha sido claro ao apresentar uma visão geral do SOLID e os pontos do porque ele seja de fundamental importância para
qualquer profissional da área de desenvolvimento. Sendo assim, te convido para os próximos posts desta série, onde
abordarei cada um dos princípios de forma isolada. Minha recomendação é que você os aplicasse e treinasse, discutindo
os pontos de maior interesse aqui mesmo no blog, pois garanto que valerá muito a pena!

Qualquer dúvida, crítica, elogio ou sugestão, ficarei extremamente feliz de discutir na seção de comentários logo abaixo. Até a próxima, valeu!