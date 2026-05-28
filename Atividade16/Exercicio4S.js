const fs = require("fs"); // carregando módulo filesystem
const data = fs.readFileSync("file.txt");
//a execução é bloqueada aqui até o arqiovo ser lido
console.log(data.toString());
