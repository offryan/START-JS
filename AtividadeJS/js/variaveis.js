function LendoDados() {
    //declarando variaveis
    //let ou var
    //tipo de dados String, Number, Boolean, object...

    let nome;
    //let idade;

    //atribuição no js usa-se o "="
    nome = prompt("Digite o seu nome:");
    let idade = parseInt(prompt("Digite a sua idade:"))

    console.log(nome)

    console.log(typeof (nome));

    console.log(idade);
    console.log(typeof (idade));

    document.write(nome + " " + idade);

}