/*
---------------------------------------------------------------------------------------------------------------

Crie uma função que sempre recebe um objeto como argumento
e retorna-o excluindo as propriedades sem valor.

💡 Ex.: {"fizz": "buzz", "foo": null, "bar": 42} deve retornar {"fizz": "buzz", "bar": 42}

---------------------------------------------------------------------------------------------------------------
*/

const object = {
    "Igor": "Jacques",
    "foo": null,
    "Rodrigo": "Guimarães",
    "Wilgner": "Lopes",
    "Victor": "Assis",
    "fizz": null,
    "foo2": null,
    "gabriel": "toledo",
    "lincoln": "law",
    "foo3": null,
    "last": "dance",
    "foo4": null,
}

function clear(object) {
    Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(object).filter(predicate));
    var newObject = Object.filter(object, ([name, value]) => value != null);

    return newObject;
}

console.log("X-----------------------------------------------------------X");
console.log(" ");
console.log("Cleared object: ");
console.log(" ");
console.log(clear(object));
console.log(" ");
console.log("X-----------------------------------------------------------X");