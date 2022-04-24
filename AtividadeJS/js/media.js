function CalcularMedia() {
    
    let nota1, nota2, media;

    nota1 = parseFloat(prompt("Digite a Nota 1:"));
    nota2 = parseFloat(prompt("Digite a Nota 2:"));

    console.log(typeof(nota1))
    console.log(typeof (nota2))

    media = (nota1 + nota2) / 2;

    if (media >= 7) {
        alert("Média: " + media);
        alert("Aprovado!");
    } else if (media >= 5) {
        alert("Média: " + media);
        alert("Recuperação!");
  } else {
    alert("Média: " + media);
    alert("Reprovado!");
}
}