/*
---------------------------------------------------------------------------------------------------------------

Crie uma função que recebe uma data e uma string. Essa string é a validade.
Você deve retornar indicando se está expirado ou não.

💡 Ex: ("2021-11-17T20:40:09.503Z", "10d") retorna false; ("2021-12-10T00:00:00.000Z", "180d") retorna true.

---------------------------------------------------------------------------------------------------------------
*/

var validade = new Date(Date.UTC(2022, 0, 18, 13, 26, 0));

function checkValidate(date, string) {
    var validateTime = string.replace(/\D/g, '');

    if(string.match('a')) {
        const date1 = new Date();
        const date2 = new Date(date.getTime());

        date2.setFullYear(date2.getFullYear() + validateTime)

        if(date1.getTime() > date2.getTime()) {
            return true;
        } else {
            return false;
        }
    } else if(string.match('mo')) {
        const date1 = new Date();
        const date2 = new Date(date.getTime());

        date2.setMonth(date2.getMonth() + validateTime)

        if(date1.getTime() > date2.getTime()) {
            return true;
        } else {
            return false;
        }
    } else if(string.match('d')) {
        const date1 = new Date();
        const date2 = new Date(date.getTime());

        date2.setDate(date2.getDate() + validateTime)

        if(date1.getTime() > date2.getTime()) {
            return true;
        } else {
            return false;
        }
    } else if(string.match('h')) {
        const date1 = new Date();
        const date2 = new Date(date.getTime());

        date2.setHours(date2.getHours() + validateTime)

        if(date1.getTime() > date2.getTime()) {
            return true;
        } else {
            return false;
        }
    } else if(string.match('m')) {
        const date1 = new Date();
        const date2 = new Date(date.getTime());

        date2.setMinutes(date2.getMinutes() + validateTime)

        if(date1.getTime() > date2.getTime()) {
            return true;
        } else {
            return false;
        }
    } else if(string.match('s')) {
        const date1 = new Date();
        const date2 = new Date(date.getTime());

        date2.setSeconds(date2.getSeconds() + validateTime)

        if(date1.getTime() > date2.getTime()) {
            return true;
        } else {
            return false;
        }
    }
}

console.log("X-----------------------------------------------------------X");
console.log(" ");
console.log("Validade status: " + checkValidate(validade, '1s'));
console.log(" ");
console.log("X-----------------------------------------------------------X");