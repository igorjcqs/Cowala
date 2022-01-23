<div align="center">
  <img src="https://i.imgur.com/i0XewhV.png" style="width: 30%;">
</div>

<h1 align="center">Welcome to Cowala backend test 🐨</h1>
<p align="center">
  <a href="https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-green.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/jcqs0">
    <img alt="Twitter: jcqs0" src="https://img.shields.io/twitter/follow/jcqs0.svg?style=social" target="_blank" />
  </a>
</p>

## 🗣 About
This is a Koala Software backend test project, where participants received 3 challenges, which are:

## 1. Algorithms
### 1.1 Fibonacci.js

Create a function that always takes a number as an argument, and must return an array with the N elements of the Fibonacci sequence.
```
💡 Ex.: ao passar 6 como argumento, deve retornar: [0, 1, 1, 2, 3, 5].
```

### 2. Market list 🛒

Participants must have a CRUD in memory (list as database) that has the 5 methods listed below:

- CREATE - Create an item in the market list, the model created have a name, a price and an id. Example: [{ id: 1, item: rice, price: 1.50}];
- UPDATE - Update the price of an item. The item must be found through its id;
- READ-ALL - List all items in the market list;
- READ-ONE - List a single item. The item is searched by its id;
- DELETE - Deletes an item from the list. The item to be deleted is searched by its id;

### 3. Criando um CRUD de uma lista de conversão de moedas consumindo uma api externa

Você deve criar um CRUD em memoria (lista como banco de dados) que tenham os 5 metodos listados abaixo. A diferença do exercicio anterior é que as informações para o crud virão de uma API Externa:  [https://economia.awesomeapi.com.br/last/USD-BRL](https://economia.awesomeapi.com.br/last/USD-BRL)

- CREATE - Deve ser possivel criar um registro no banco de dados contendo o valor enviado, o valor convertido, a moeda original e a moeda da conversão. Exemplo: [{ id:1, moedaOriginal: BRL, moedaDaConversão: USD, valorEnviado: 10, valorConvertido: 50 }]
- READ-ALL - Deve ser possivel lista todos registros de conversão feitos
- READ-ONE - Deve ser possivel lista um registro de conversão buscando pelo ID da conversão
- DELETE - Deve ser possivel deletar um registro de conversão
