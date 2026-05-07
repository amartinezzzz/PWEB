function Retangulo(x, y) {
  this.base = x;
  this.altura = y;
  this.calcularArea = function () {
    return this.base * this.altura;
  };
}

function calcularArea() {
  const base = parseFloat(document.getElementById('base').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    alert('Informe valores válidos para base e altura!');
    return;
  }

  const retangulo = new Retangulo(base, altura);
  const area = retangulo.calcularArea();

  const el = document.getElementById('res1');
  el.innerHTML = `
    🔷 <b>Objeto Retangulo criado:</b><br>
    <span>base:</span> ${retangulo.base}<br>
    <span>altura:</span> ${retangulo.altura}<br>
    <span>área calculada:</span> <b style="color:#ffd700">${area}</b>
  `;
  el.style.display = 'block';
}


class Conta {
  constructor(nome, banco, numero, saldo) {
    this._nome = nome;
    this._banco = banco;
    this._numero = numero;
    this._saldo = saldo;
  }

  get nome() { return this._nome; }
  set nome(v) { this._nome = v; }

  get banco() { return this._banco; }
  set banco(v) { this._banco = v; }

  get numero() { return this._numero; }
  set numero(v) { this._numero = v; }

  get saldo() { return this._saldo; }
  set saldo(v) { this._saldo = v; }
}

class Corrente extends Conta {
  constructor(nome, banco, numero, saldo, saldoEspecial) {
    super(nome, banco, numero, saldo);
    this._saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() { return this._saldoEspecial; }
  set saldoEspecial(v) { this._saldoEspecial = v; }
}

class Poupanca extends Conta {
  constructor(nome, banco, numero, saldo, juros, dataVencimento) {
    super(nome, banco, numero, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
  }

  get juros() { return this._juros; }
  set juros(v) { this._juros = v; }

  get dataVencimento() { return this._dataVencimento; }
  set dataVencimento(v) { this._dataVencimento = v; }
}

function criarCorrente() {
  const nome = document.getElementById('c-nome').value.trim();
  const banco = document.getElementById('c-banco').value.trim();
  const numero = document.getElementById('c-numero').value.trim();
  const saldo = parseFloat(document.getElementById('c-saldo').value);
  const saldoEsp = parseFloat(document.getElementById('c-saldoEsp').value);

  if (!nome || !banco || !numero || isNaN(saldo) || isNaN(saldoEsp)) {
    alert('Preencha todos os campos!');
    return;
  }

  const cc = new Corrente(nome, banco, numero, saldo, saldoEsp);

  const el = document.getElementById('res2');
  el.innerHTML = `
    🏦 <b>Objeto Corrente criado:</b><br>
    <span>nome:</span> ${cc.nome}<br>
    <span>banco:</span> ${cc.banco}<br>
    <span>número da conta:</span> ${cc.numero}<br>
    <span>saldo:</span> R$ ${cc.saldo.toFixed(2)}<br>
    <span>saldo especial:</span> R$ ${cc.saldoEspecial.toFixed(2)}
  `;
  el.style.display = 'block';
}

function criarPoupanca() {
  const nome = document.getElementById('p-nome').value.trim();
  const banco = document.getElementById('p-banco').value.trim();
  const numero = document.getElementById('p-numero').value.trim();
  const saldo = parseFloat(document.getElementById('p-saldo').value);
  const juros = parseFloat(document.getElementById('p-juros').value);
  const venc = document.getElementById('p-vencimento').value;

  if (!nome || !banco || !numero || isNaN(saldo) || isNaN(juros) || !venc) {
    alert('Preencha todos os campos!');
    return;
  }

  const cp = new Poupanca(nome, banco, numero, saldo, juros, venc);

  const el = document.getElementById('res3');
  el.innerHTML = `
    💰 <b>Objeto Poupança criado:</b><br>
    <span>nome:</span> ${cp.nome}<br>
    <span>banco:</span> ${cp.banco}<br>
    <span>número da conta:</span> ${cp.numero}<br>
    <span>saldo:</span> R$ ${cp.saldo.toFixed(2)}<br>
    <span>juros:</span> ${cp.juros}% a.m.<br>
    <span>data de vencimento:</span> ${cp.dataVencimento}
  `;
  el.style.display = 'block';
}


function switchTab(name, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}
