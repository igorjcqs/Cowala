/*
---------------------------------------------------------------------------------------------------------------

Crie uma função que recebe dois números maiores que zero e exibe na tela (console) uma moldura com essas dimensões.

Ex: (9, 6)

+-------+
-       -
-       -
-       -
-       -
+-------+

---------------------------------------------------------------------------------------------------------------
*/

var widthSize = 0;
var heightSize = 0;

function buildWidth(width) {
    var widthArray = [];
    widthSize = width;

    if(width == 1) {
        widthArray.push('+');
    } else if(width > 1) {
        widthArray.push('+');
        for(i = 0; i < width-2; i++) {
            widthArray.push('-')
        }
        widthArray.push('+');
    } else if(width < 1) {
        return 'A largura precisa ser igual ou maior que 1.'
    }

    return JSON.stringify(Object.values(widthArray).join(''));
}

function buildHeight(height) {
    var heightArray = [];
    heightSize = height;

    if(height == 1) {
        heightArray.push('|');
    } else if(height > 1) {
        heightArray.push('|');
        for(i = 0; i < widthSize-2; i++) {
            heightArray.push(' ')
        }
        heightArray.push('|');
    } else if(height < 1) {
        return 'A altura precisa ser igual ou maior que 1.'
    }


    return JSON.stringify(Object.values(heightArray).join(''));
}

function repeatHeight(heightBuilded) {
    var value = '';

    for(i = 0; i < heightSize; i++) {
        if(i != heightSize) {
            value += heightBuilded + "\n"
        }
    }

    return value.slice(0, -1);
}

//

function frame(width, height) {
    if(isNaN(width)) return 'A largura precisa ser um número.';
    if(isNaN(height)) return 'A altura precisa ser um número.';

    return buildWidth(width).replaceAll('"',"") +
        "\n" +
        repeatHeight(buildHeight(height).replaceAll('"',"")) +
        "\n" +
        buildWidth(width).replaceAll('"',"");
}

console.log("X-----------------------------------------------------------X");
console.log(" ");
console.log("Frame loaded: ");
console.log(frame(9, 6))
console.log(" ");
console.log("X-----------------------------------------------------------X");