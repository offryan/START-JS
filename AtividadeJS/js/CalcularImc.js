function CalcularImc() {

    let nome;
    let peso;
    let altura;


    nome = prompt("Digite seu nome: ");
    
    peso = parseFloat(prompt("Digite seu peso: " ));
    
    altura = parseFloat(prompt("Digite sua altura: " ));
    
    imc = peso / (altura * altura)

    
    if (imc < 18.5) {
        document.write(nome + "<hr>" + "Você está Abaixo do Peso")


    } else if (imc <= 24.9) {
        document.write(nome + "<hr>" + "Você está com o Peso Normal")

    } else if (imc <= 29.9) {
        document.write(nome + "<br>" + "Você está com Sobre Peso")



    }

    else if (imc <= 34.9) {
        document.write(nome + "<hr>" + "Você está com Obesidade Grau 1")


    }

    else if (imc <= 39.9) {
        document.write(nome + "<hr>" + "Você está com Obesidade Grau 2")


    } else {
        document.write(nome + "<hr>" + "Você está com Obesidade Grau 3 ")
    }

   

}