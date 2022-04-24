function aposentadoria() {

    let Nome;
    let anoAtual;
    let AnoAdmissao;
    let AnoNascimento;
    let TempoDeTrabalho;
    let aposentadoria;
    let idade;

    Nome = document.getElementById("txtNome").value;
    console.log('puta8' + Nome);
    anoAtual = document.getElementById("txtAno").value;
    AnoAdmissao = document.getElementById("txtAnoAdmissao").value;
    AnoNascimento = document.getElementById("txtAnoNascimento").value;


    TempoDeTrabalho = anoAtual - AnoAdmissao
    idade = anoAtual - AnoNascimento

    document.getElementById("txtIdade").value = idade;
    document.getElementById("txtTrab").value = TempoDeTrabalho;

    //calcular

    if (idade >= 65) {
        aposentadoria = true;


    } else if (TempoDeTrabalho >= 30) {
        aposentadoria = true;

    } else

        if ((idade >= 60) && (TempoDeTrabalho >= 25)) {
            aposentadoria = true;

        } else {
            aposentadoria = true;
        }






    document.getElementById("txtNome").value = Nome;

    document.getElementById("txtIdade").value = idade;

    document.getElementById("txtTrab").value = TempoDeTrabalho;

    document.getElementById("txtResult").value = aposentadoria;



}

function resultado() {

    let Nome;
    let anoAtual;
    let AnoAdmissao;
    let AnoNascimento;

    let TempoDeTrabalho;
    let aposentadoria;
    let idade;

    Nome = document.getElementById("txtNome").value;
    anoAtual = document.getElementById("txtAno").value;
    AnoAdmissao = document.getElementById("txtAnoAdmissao").value;
    AnoNascimento = document.getElementById("txtAnoNascimento").value;


    TempoDeTrabalho = anoAtual - AnoAdmissao
    idade = anoAtual - AnoNascimento

    document.getElementById("txtTrab").value = TempoDeTrabalho;
    document.getElementById("txtIdade").value = idade;


    //calcular

    if (idade >= 65) {
        aposentadoria = true;


    } else if (TempoDeTrabalho >= 30) {
        aposentadoria = true;

    } else

        if ((idade >= 60) && (TempoDeTrabalho >= 25)) {
            aposentadoria = true;

        } else {
            aposentadoria = false;
        }


    if (aposentadoria = true) {

        aposentadoria = document.write("Pode Aposentar!");

    } else {
        aposentadoria = document.write("Não pode Aposentar!");
    }

}