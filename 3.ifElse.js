/*  Controlador de Fluxo
        - IF(Se)
        - Else(Se não)
    
        
    Operadores de Coparação
        > maior que
        < menor que
        == igual que    
*/
const notaDoAluno = 10
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){
    // O QUE SERÁ EXECUTADO, SE O IF FOR VERDADEIRO
    console.log("Parabéns, você passou de ano")
}else {
    // SE O IF FOR FALSO, ELE ENTRA AQUI
    console.log("Você foi reprovado")
}