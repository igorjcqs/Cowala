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

### 1.1 [Fibonacci.js 🧮]

Participants must create a function that always takes a number as an argument, and must return an array with the N elements of the Fibonacci sequence.
```
💡 Ex.: ao passar 6 como argumento, deve retornar: [0, 1, 1, 2, 3, 5].
```

### 1.2 [Classificador.js 📋](https://github.com/igorjcqs/Challenges/tree/Spring-Boot-CRUD)

Participants must create a function that always receives an array of objects with the following properties:

```javascript
- souEu(itsMe): Boolean
- responsavel(responsible): Boolean
- nome(name): String
```

And organize objects in the same way as a WhatsApp group and return an array of names, in the following order:

1. You (property souEu: “true”)
2. Responsibles (property responsible: “true” in alphabetic order)
3. Not Responsibles (listed in alphabetical order)

### 1.3 [Faxina.js 🧹](https://github.com/igorjcqs/Challenges/tree/Spring-Boot-CRUD)

Participants must create a function that always takes an object as an argument and returns it excluding properties with no value.
```
💡 Ex.: {"fizz": "buzz", "foo": null, "bar": 42} will return {"fizz": "buzz", "bar": 42}
```

### 1.4 [Validade.js 📆](https://github.com/igorjcqs/Challenges/tree/Spring-Boot-CRUD)

Participants must create a function that takes a date and a string. This string is the validity. You should return indicating whether it is expired or not.
```
💡 Ex: ("2021-11-17T20:40:09.503Z", "10d") return false; ("2021-12-10T00:00:00.000Z", "180d") return true.
```

### 1.5 [Molduras.js 🖼️](https://github.com/igorjcqs/Challenges/tree/Spring-Boot-CRUD)

Participants must create a function that takes two numbers greater than zero and displays a frame with those dimensions on the screen (console).

```jsx
Ex: (9, 6)

+-------+
-       -
-       -
-       -
-       -
+-------+
```

```jsx
*Ex: (1, 3)
+
-
+*
```

### 2. Market list 🛒

Participants must create a CRUD in memory (list as database) that has the 5 methods listed below:

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
