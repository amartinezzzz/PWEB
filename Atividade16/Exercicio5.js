let eventos = require("events"); //Atribuição da classe EventEmitter a uma variavel
let EmissorEventos = eventos.EventEmitter;
// O emissor de eventos, encontra-se na propriedade EventEmitter
let ee = new EmissorEventos();
// ou criando direto sem a variavel intermediária
// let ee = new eventos.EventEmitter();
// mas da forma anterior é uma boa pratica

// É registrado um ouvinte (listener) para o eventos 'dados'.
// Quando esse evento acontecer executar a funcao passada como argumento
ee.on("dados", function (fecha) {
  console.log(fecha);
});

// Emissão do evento somente uma vez
ee.emit("dados", "primeira vez " + Date.now());

// Emissão do evento a cada 500 milissegundos;
setInterval(function () {
  ee.emit("dados", Date.now());
}, 500);
