//Variavel com Var
var alturaVar = 8;
var comprimentoVar = 9;
var areaVar = alturaVar * comprimentoVar;

console.log("A area é:", areaVar);

//Variavel com Let
let formaLet = "circulo";
let alturaLet = 15;
let comprimentoLet = 15;
let areaLet;

if (formaLet === "circulo") {
  areaLet = alturaLet * comprimentoLet;
} else {
  areaLet = (alturaLet * comprimentoLet) / 2;
}

console.log("A area do", formaLet, "é:", areaLet);

//Variavel com Const
const formaConst = "quadrado";
const alturaConst = 5;
const comprimentoConst = 5;
let areaConst;

if (formaConst === "triangulo") {
  areaConst = alturaConst * comprimentoConst;
} else {
  areaConst = (alturaConst * comprimentoConst) / 2;
}

console.log("A area do", formaConst, "é:", areaConst);
