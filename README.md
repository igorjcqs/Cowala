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

### 1.1 [Fibonacci.js 🧮](https://github.com/igorjcqs/Cowala/blob/master/Algorithms/fibonacci.js)

Participants must create a function that always takes a number as an argument, and must return an array with the N elements of the Fibonacci sequence.
```jsx
💡 Ex: When passing 6 as an argument, it should return: [0, 1, 1, 2, 3, 5].
```

### 1.2 [Classificador.js 📋](https://github.com/igorjcqs/Cowala/blob/master/Algorithms/classificador.js)

Participants must create a function that always receives an array of objects with the following properties:

```jsx
- souEu(itsMe): Boolean
- responsavel(responsible): Boolean
- nome(name): String
```

And organize objects in the same way as a WhatsApp group and return an array of names, in the following order:

1. You (property souEu: “true”)
2. Responsibles (property responsible: “true” in alphabetic order)
3. Not Responsibles (listed in alphabetical order)

### 1.3 [Faxina.js 🧹](https://github.com/igorjcqs/Cowala/blob/master/Algorithms/faxina.js)

Participants must create a function that always takes an object as an argument and returns it excluding properties with no value.
```jsx
💡 Ex: {"fizz": "buzz", "foo": null, "bar": 42} will return {"fizz": "buzz", "bar": 42}
```

### 1.4 [Validade.js 📆](https://github.com/igorjcqs/Cowala/blob/master/Algorithms/validade.js)

Participants must create a function that takes a date and a string. This string is the validity. You should return indicating whether it is expired or not.
```jsx
💡 Ex: ("2021-11-17T20:40:09.503Z", "10d") return false; ("2021-12-10T00:00:00.000Z", "180d") return true.
```

### 1.5 [Molduras.js 🖼️](https://github.com/igorjcqs/Cowala/blob/master/Algorithms/molduras.js)

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
Ex: (1, 3)

+
-
+
```

### 2. [Market list 🛒](https://github.com/igorjcqs/Cowala/tree/master/Backend-%231)

Participants must create a CRUD in memory (list as database) that has the 5 methods listed below:

```jsx
- CREATE - Create an item in the market list, the model created have a name, a price and an id.
Example: [{ id: 1, item: rice, price: 1.50}];
- UPDATE - Update the price of an item. The item must be found through its id;
- READ-ALL - List all items in the market list;
- READ-ONE - List a single item. The item to be listed is searched by its id;
- DELETE - Deletes an item from the list. The item to be deleted is searched by its id;
```

### 3. [Currency conversion 💵](https://github.com/igorjcqs/Cowala/tree/master/Backend-%232)

Participants must create an in-memory CRUD (list as database) that have the 5 methods listed below. The difference from the previous exercise is that the information for the crud will come from an [External API](https://docs.awesomeapi.com.br/api-de-moedas).

```jsx
- CREATE - Create a record in the database containing the submitted amount, the converted amount, the original currency and the conversion currency.
Exemple: [{ id: 1, originalCurrency: BRL, conversionCurrency: USD, valueSended: 10, convertedValue: 50 }]
- READ-ALL - List all conversion registrys;
- READ-ONE - List a single conversion registry. The registry to be listed is searched by its id;
- DELETE - Deletes an conversion registry from the list. The registry to be deleted is searched by its id;
```

## 🚀 Usage

### Prerequisites

```jsx
- node >= 17.3.0
- yarn >= 1.22.15
- git >= 2.31.1
```

### Install

Clone the project repository with:
```jsx
git clone https://github.com/igorjcqs/Cowala
```
Access project folder with:
```jsx
cd PROJECT_YOU_WANT_TO_START
```
Install all dependecies with:
```jsx
yarn 
```
Rename ```.env.local``` to ```.env```, replace ```SERVER_PORT``` and ```DATABASE_URL``` with your preferred values:
### Run test project
```jsx
yarn dev
```
### Build
```jsx
yarn build
```
### Run builded project
```jsx
yarn start
```

## Author

👤 **Igor Jacques**
- Twitter: [@jcqs0](https://twitter.com/jcqs0)
- Instagram: [@jcqs0](https://instagram.com/jcqs0)
- Github: [@igorjcqs](https://github.com/igorjcqs)

## 🤝 Show your support

Please ⭐️ this repository if this project helped you!

## 📝 License

Copyright © 2022 [Igor Jacques](https://github.com/igorjcqs). </br>
This project is [MIT](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE) licensed.
