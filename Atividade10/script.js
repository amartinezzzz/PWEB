var altura = prompt("Digite a altura: ");
var peso = prompt("Digite o peso: ");

    var imc = peso / (Math.pow(altura,2));
    if (imc < 18.5){
        alert("Classificação: Magreza");
    }
    else if (imc < 25.0){
        alert("Classificação: Normal");
    }
    else if(imc < 30.0){
        alert("Classificação: Sobrepeso \nObesidade Grau I");
    }
    else if (imc < 40){
        alert("Classificação: Obesidade \nObesidade Grau II");
    }
    else {
        alert("Classificação: Obesidade Grave \nObesidade Grau III");
    }