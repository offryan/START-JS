function ManipularCampo() {
    let corFundo = document.getElementById('txtCorFundo').value;
    let corFonte = document.getElementById('txtCorFonte').value;
    let tamanhoFonte = document.getElementById('txtTamanhoFonte').value;
    let Texto = document.getElementById('txTexto')

    document.getElementById('dvQuadrado').style.backgroundColor = corFundo;
    document.getElementById('dvQuadrado').style.color = corFonte;
    document.getElementById('dvQuadrado').style.fontSize = tamanhoFonte + "px";
    document.getElementById('dvQuadrado').innerHTML = Texto;
}