
/* 

document -> HTML

getElementById -> Trás UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elementos com essa TAG
gatElementByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar


Alterando e Acessando textos

textContent -> pega todo o conteudo // element.textContent -> SÓ HTML
innerText -> pega APENAS o texto // element.innerText -> LEVA EM CONTA O CSS
innerHTML -> permite adicionar HTML e texto // element.innerHTML -> TRÁS TUDO -> Permite adicionar HTML

*/
/*   

Eventos

*/

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector("#main-button")

function troqueiValor(){
    console.log("Troquei o valor")
}

select.addEventListener("change", troqueiValor)
