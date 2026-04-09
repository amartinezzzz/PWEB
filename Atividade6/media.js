var nome = prompt("Digite o nome do aluno: ");
var nota1 = parseFloat(prompt("Digite a 1ª nota: "));
var nota2 = parseFloat(prompt("Digite a 2ª nota: "));
var nota3 = parseFloat(prompt("Digite a 3ª nota: "));
var nota4 = parseFloat(prompt("DIgite a 4ª nota: "));

var media = (nota1 + nota2 + nota3 + nota4)/4;

alert("A média aritmética é: " + media.toFixed(2));