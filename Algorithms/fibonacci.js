/*
---------------------------------------------------------------------------------------------------------------

Crie uma função que sempre recebe um número como argumento,
e deve retornar uma array com os N elementos da sequência de Fibonacci.

💡 Ex.: ao passar 6 como argumento, deve retornar: [0, 1, 1, 2, 3, 5].

---------------------------------------------------------------------------------------------------------------
*/

var argument = 6;

function fibonacci(n) {
  var prev = 1;
  var curr = 1;
  var array = [0, 1, 1];

  if (isNaN(n)) return "O parametro enviado na função deve ser um número.";
  if (n < 3) return 1;

  for (let i = 2; i < n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
    array.push(next);
  }

  return "- Sequence: " + array;
}

console.log("X-----------------------------------------------------------X");
console.log(" ");
console.log(fibonacci(argument));
console.log(" ");
console.log("X-----------------------------------------------------------X");