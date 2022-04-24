function VerificarCapacidadeElevador() {

    let peso = 0;
    let pesoTotal = 0;
    let qtdPessoas = 0;

    while (pesoTotal <= 800) {

        peso = parseFloat(prompt("Digite o peso da pessoa:"));

        pesoTotal += peso;
        qtdPessoas++;
    }
    alert("Qtde de Pessoas: " + qtdPessoas);
    alert("Peso Total: " + pesoTotal);
}