const IMAGENS = {
  fechada: 'janelaFechada.jpeg',
  aberta:  'janelaAberta.jpeg',
  quebrada:'janelaQuebrada.jpeg'
};

const imgJanela  = document.getElementById('janela');
const titulo     = document.getElementById('titulo');
const estadoEl   = document.getElementById('estado');
const frame      = document.querySelector('.window-frame');
const glow       = document.getElementById('glow');

let estadoAtual = 'fechada';


function abrirJanela() {
  if (estadoAtual === 'quebrada') return; 

  estadoAtual = 'aberta';
  imgJanela.src = IMAGENS.aberta;

  titulo.textContent  = 'A Janela está Aberta';
  estadoEl.textContent = '🪟 Janela Aberta';
  estadoEl.className   = 'estado aberta';

  frame.classList.remove('quebrada-frame');
  frame.classList.add('aberta-frame');

  glow.classList.remove('visible-red');
  glow.classList.add('visible-green');
}

function fecharJanela() {
  if (estadoAtual === 'quebrada') return; 

  estadoAtual = 'fechada';
  imgJanela.src = IMAGENS.fechada;

  titulo.textContent  = 'Abra a Janela';
  estadoEl.textContent = '🔒 Janela Fechada';
  estadoEl.className   = 'estado fechada';

  frame.classList.remove('aberta-frame', 'quebrada-frame');

  glow.classList.remove('visible-green', 'visible-red');
}

function quebrarJanela() {
  estadoAtual = 'quebrada';
  imgJanela.src = IMAGENS.quebrada;

  titulo.textContent  = 'A Janela está Quebrada!';
  estadoEl.textContent = '💥 Janela Quebrada';
  estadoEl.className   = 'estado quebrada';

  frame.classList.remove('aberta-frame');
  frame.classList.remove('quebrada-frame');
  void frame.offsetWidth; // força reflow
  frame.classList.add('quebrada-frame');

  glow.classList.remove('visible-green');
  glow.classList.add('visible-red');
}
