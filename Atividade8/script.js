let idades = [];
let sexos = [];
let opinioes = [];

function adicionar() {
    let idade = Number(document.getElementById("idade").value);
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let opiniao = Number(document.getElementById("opiniao").value);

    if (!idade || !sexo) {
        alert("Preencha todos os campos!");
        return;
    }

    idades.push(idade);
    sexos.push(sexo.value);
    opinioes.push(opiniao);

    alert("Resposta adicionada!");

    document.getElementById("idade").value = "";
    document.querySelectorAll('input[name="sexo"]').forEach(r => r.checked = false);
}

function calcular() {
    let total = idades.length;

    if (total === 0) {
        alert("Nenhum dado inserido!");
        return;
    }

    let somaIdade = idades.reduce((a, b) => a + b, 0);
    let media = somaIdade / total;

    let maior = Math.max(...idades);
    let menor = Math.min(...idades);

    let pessimo = opinioes.filter(o => o === 1).length;

    let otimoBom = opinioes.filter(o => o === 4 || o === 3).length;
    let porcentagem = (otimoBom / total) * 100;

    let mulheres = sexos.filter(s => s === "feminino").length;
    let homens = sexos.filter(s => s === "masculino").length;
    let outros = sexos.filter(s => s === "outros").length;

    document.getElementById("resultado").innerHTML = `
        <p><b>Média das idades:</b> ${media.toFixed(2)}</p>
        <p><b>Maior idade:</b> ${maior}</p>
        <p><b>Menor idade:</b> ${menor}</p>
        <p><b>Quantidade que respondeu péssimo:</b> ${pessimo}</p>
        <p><b>Porcentagem ótimo/bom:</b> ${porcentagem.toFixed(2)}%</p>
        <p><b>Mulheres:</b> ${mulheres}</p>
        <p><b>Homens:</b> ${homens}</p>
        <p><b>Outros:</b> ${outros}</p>
    `;
}