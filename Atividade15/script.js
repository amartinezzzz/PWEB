function validarForm() {

    const form = document.forms["meuForm"];

    const nome = form.elements["nome"].value;
    const email = form.elements["email"].value;
    const comentario = form.elements["comentario"].value;
    const radios = form.elements["pesquisa"];

    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    if (email === "") {
        alert("Digite um email válido.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    let selecionado = false;
    let valor = "";

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selecionado = true;
            valor = radios[i].value;
        }
    }

    if (!selecionado) {
        alert("Responda a pesquisa!");
        return false;
    }

    if (valor === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à esta página!");
    }

    return true;
}