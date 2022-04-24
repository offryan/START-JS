function ConverterTemperatura() {

    let grausC;
    let grausF;

    grausC = parseInt(prompt("Digite a temperatura em Celsius"));
    grausF = (9 * grausC + 160) / 5;

    document.write("A temperatura em Fahrenheit é: " + grausF)

    //alert
}