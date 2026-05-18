function transformarTexto() {
    const texto = document.getElementById("texto").value;
    const opcoes = document.getElementsByName("opcao");
    let resultado = "";

    let opcaoSelecionada = "";

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            opcaoSelecionada = opcoes[i].value;
        }
    }

    if (texto === "") {
        alert("Digite um texto!");
        return;
    }

    if (opcaoSelecionada === "") {
        alert("Selecione uma opção!");
        return;
    }

    if (opcaoSelecionada === "maiuscula") {
        resultado = texto.toUpperCase();
    } else {
        resultado = texto.toLowerCase();
    }

    document.getElementById("resultado").innerText = resultado;
}