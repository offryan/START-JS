function VerificarIdade() {

    let idade;
    let nome;

    nome = prompt("Digite seu nome");
    idade = parseInt(prompt("Digite sua idade"));

    if (idade >= 16) {
        alert(nome + " Pode votar!");
    }

    if (idade >= 18) {
        alert(nome + " Pode dirigir!");
    }

}