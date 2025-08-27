/* 

Operadores lógicos

&&  ->  E  -> Pessoa Exigente / Pessoa Obediente
    true && true = true
    true && false = false
    false && false = false

||  ->  Ou -> Tanto Faz / Filho Espertinho
    true || true = true
    true || false = true
    false || false = false

!   -> Negação
    !true = false
    !false = true

*/

const digitarASenha = true
const digitarOToken = true
const numeroDaConta = true

if( ! (digitarASenha && digitarOToken && numeroDaConta)  ){
    console.log("Logado com sucesso")
} else {
    console.log("Autenticação FALHOU")
}