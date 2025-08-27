function obterTexto() {
    return document.getElementById('meuInput').value;
}

function atualizarParagrafo(texto) {
    document.getElementById('meuParagrafo').innerText = texto;
}

function aoClicarBotao() {
    const texto = obterTexto();
    atualizarParagrafo(texto);
}

document.getElementById('meuBotao').addEventListener('click', aoClicarBotao);