function mostrarFuncao() {
    let opcao = document.getElementById("menu").value;
    let area = document.getElementById("area");
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    switch (opcao) {
        case "1":
        case "2":
            area.innerHTML = `
                <input type="number" id="n1" placeholder="Número 1">
                <input type="number" id="n2" placeholder="Número 2">
                <input type="number" id="n3" placeholder="Número 3">
                <button onclick="executar(${opcao})">Calcular</button>
            `;
            break;

        case "3":
            area.innerHTML = `
                <input type="text" id="texto" placeholder="Digite uma palavra ou frase">
                <button onclick="executar(3)">Verificar</button>
            `;
            break;

        case "4":
            area.innerHTML = `
                <input type="text" id="p1" placeholder="Palavra 1">
                <input type="text" id="p2" placeholder="Palavra 2">
                <button onclick="executar(4)">Verificar</button>
            `;
            break;

        case "5":
            area.innerHTML = `
                <input type="date" id="data">
                <button onclick="executar(5)">Verificar</button>
            `;
            break;

        default:
            area.innerHTML = "";
    }
}

function executar(opcao) {
    let res = document.getElementById("resultado");

    if (opcao == 1) {
        let n1 = Number(document.getElementById("n1").value);
        let n2 = Number(document.getElementById("n2").value);
        let n3 = Number(document.getElementById("n3").value);

        let maior = Math.max(n1, n2, n3);
        res.innerHTML = `Maior número: ${maior}`;
    }

    if (opcao == 2) {
        let nums = [
            Number(document.getElementById("n1").value),
            Number(document.getElementById("n2").value),
            Number(document.getElementById("n3").value)
        ];

        nums.sort((a, b) => a - b);
        res.innerHTML = `Ordem crescente: ${nums.join(", ")}`;
    }

    if (opcao == 3) {
        let texto = document.getElementById("texto").value
            .toLowerCase()
            .replace(/\s/g, "");

        let invertido = texto.split("").reverse().join("");

        res.innerHTML = (texto === invertido)
            ? "É um palíndromo"
            : "Não é um palíndromo";
    }

    if (opcao == 4) {
        let p1 = document.getElementById("p1").value;
        let p2 = document.getElementById("p2").value;

        if (!p1 || !p2) {
            res.innerHTML = "Erro";
            return;
        }

        res.innerHTML = p1.includes(p2)
            ? "É um subconjunto"
            : "Não é um subconjunto";
    }

    if (opcao == 5) {
        let valor = document.getElementById("data").value;

        let partes = valor.split("-");
        let data = new Date(partes[0], partes[1] - 1, partes[2]);

        let dias = [
            "Domingo", "Segunda-feira", "Terça-feira",
            "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
        ];

        res.innerHTML = `Dia da semana: ${dias[data.getDay()]}`;
    }
}