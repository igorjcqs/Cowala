/*
---------------------------------------------------------------------------------------------------------------

Crie uma função que sempre recebe uma array de objetos com as seguintes propriedades:

- souEu: bool
- responsavel: bool
- nome: str

Você deve organizar os objetos da mesma maneira de um grupo de WhatsaApp e retornar um array, na seguinte ordem:

1. Você (propriedade souEu: “true”)
2. Responsáveis (propriedade responsavel: “true” e listados em ordem alfabética)
3. Não responsáveis (listados em ordem alfabética)

---------------------------------------------------------------------------------------------------------------
*/

var peapleList = [
  { souEu: true, responsavel: false, nome: "Igor Jacques" },
  { souEu: false, responsavel: true, nome: "Rodrigo Guimarães" },
  { souEu: false, responsavel: true, nome: "Wilgner Lopes" },
  { souEu: false, responsavel: true, nome: "Victor Assis" },
  { souEu: false, responsavel: true, nome: "Bia Goulart" },
  { souEu: false, responsavel: true, nome: "Alexandr Alcoforado" },
  { souEu: false, responsavel: true, nome: "Nayara Rebelo" },
  { souEu: false, responsavel: true, nome: "Timóteo Goulão" },
  { souEu: false, responsavel: true, nome: "Oliver Anhaia" },
  { souEu: false, responsavel: true, nome: "Sérgio Prates" },
  { souEu: false, responsavel: true, nome: "Jamie Milheirão" },
  { souEu: false, responsavel: false, nome: "Emilly Castilho" },
  { souEu: false, responsavel: true, nome: "Daisi Canto" },
  { souEu: false, responsavel: false, nome: "Haniela Couto" },
  { souEu: false, responsavel: false, nome: "Levi Trindade" },
  { souEu: false, responsavel: false, nome: "Matthias Goulart" },
  { souEu: false, responsavel: false, nome: "Ayaan Vilarinho" },
  { souEu: false, responsavel: false, nome: "Yangchen Moreno" },
  { souEu: false, responsavel: false, nome: "Lourenço Resende" },
  { souEu: false, responsavel: false, nome: "Pietra Landim" },
  { souEu: false, responsavel: false, nome: "Dina Quesado" },
  { souEu: false, responsavel: false, nome: "Eric Meneses" },
  { souEu: false, responsavel: false, nome: "Helton Montenegro" },
  { souEu: false, responsavel: false, nome: "Ilídio Malheiro" },
  { souEu: false, responsavel: false, nome: "Rafaella Seixas" },
  { souEu: false, responsavel: false, nome: "Suri Amaral" },
  { souEu: false, responsavel: false, nome: "Aliana Vilanova" },
  { souEu: false, responsavel: false, nome: "Alice Parreir" },
  { souEu: false, responsavel: false, nome: "Eshal Pacheco" },
  { souEu: false, responsavel: false, nome: "Jacyara Marques" },
  { souEu: false, responsavel: false, nome: "Claúdio Cirne" },
];

function getMe(peapleList) {
  if(!Array.isArray(peapleList)) return "O parametro enviado na função deve ser uma array.";

  for(i = 0; i < peapleList.length; i++) {
    if(peapleList[i]['souEu'] == true) {
      return peapleList[i].nome;
    }
  }
}

function getResponsible(peapleList) {
  var array = [];

  if(!Array.isArray(peapleList)) return "O parametro enviado na função deve ser uma array.";

  for(i = 0; i < peapleList.length; i++) {
    if(peapleList[i]['responsavel'] == true) {
      array.push(peapleList[i].nome);
    }
  }

  return array.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }).join(', ');
}

function getNotResponsible(peapleList) {
  var array = [];

  if(!Array.isArray(peapleList)) return "O parametro enviado na função deve ser uma array.";

  for(i = 0; i < peapleList.length; i++) {
    if(peapleList[i]['responsavel'] == false) {
      array.push(peapleList[i].nome);
    }
  }

  return array.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }).join(', ');
}

console.log("X-----------------------------------------------------------X");
console.log(" ");
console.log("Eu: " + getMe(peapleList));
console.log(" ");
console.log("Responsáveis: " + getResponsible(peapleList));
console.log(" ");
console.log("Não responsáveis: " + getNotResponsible(peapleList));
console.log(" ");
console.log("X-----------------------------------------------------------X");