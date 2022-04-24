function SomarPares() {

    let nro = 0;
    let somaPares = 0;

    do {

        nro = parseInt(prompt("Digite um número inteiro"));

        if (nro % 2 == 0) {
            somaPares += nro
        }
        console.log(nro);
    } while (nro != 99)

    alert("A soma dos pares: " + somaPares);

}