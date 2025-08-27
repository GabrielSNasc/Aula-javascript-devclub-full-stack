/* 
Operadores Ternário

? if (se)
: else (se não)
&& (if sem else)

*/

const salary = 2000

// if(salary < 3000) {
//     console.log("O colaborador e Junior")
// } else if(salary >= 3000 && salary < 10000) {
//     console.log("Ele é Senior")
// } else {
//     console.log("Ele é diretor")
// }

//IF salary < 3000 && console.log("O colaborador e Junior")

// IF/ELSE -> salary < 3000 ? console.log("O colaborador e Junior") : console.log("Ele e Senior")

// ELSE IF
salary < 3000 ? console.log("O colaborador e Junior") : salary >= 3000 && salary < 10000 ? console.log("Ele é Senior") : console.log("Ele é diretor")