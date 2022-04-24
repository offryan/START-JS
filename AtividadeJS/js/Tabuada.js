function Tabuada() {

    let nro;

    nro = parseInt(prompt("Digite um número para saber a tabuada: "));

    if (nro > 0 && nro <= 10) {

        for (let cont = 0; cont <= 10; cont++) {

            document.write(nro + " x " + cont + " = " + (nro * cont) + "<br>");

        }
    } else {
        alert("Número invalido");
    }

}