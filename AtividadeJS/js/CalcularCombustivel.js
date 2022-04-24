function combustivel() {

    let temp;
    let velocidade;
    let distancia;
    let consumo;
    let kmPorLitro;


    kmPorLitro = 12;

    temp = prompt("Informe o tempo gasto na viagem: ");

    velocidade = parseFloat(prompt("Informe a velocidade média: "));

    distancia = temp * velocidade
    consumo = distancia / kmPorLitro


    document.write("Distância Percorrida: " + distancia)   
    document.write("<hr>" + "Consumo de Combustível: " + consumo)
}