const prompt = require("prompt-sync")();
//parênteses indicam que estamos executando a funcao prompt sync.
//Ao fazer isso, a função retorna um valor que é uma nova função que pode ser usada para criar prompts.
function saudacao(nome) {
  console.log("Oi " + nome);
}
function entradaNome(callback) {
  let nome = prompt("Digite seu nome: ");
  callback(nome); // chamando a funcao callback (saudação)
}
entradaNome(saudacao);
//obter o nome do usuário através de uma caixa de dialogo e em seguida chamar a função de retorno
//(callback) fornecendo como parâmetro, passando o nome digitado como argumento.
