/* 
    Estrutura de Repetição - LOOP
        - FOR IN
*/

const users = { name: 'Rodolfo', age: 33, street: "Rua dos Bobos"}

// users.name -> Rodolfo
// users['name'] -> Rodolfo

for (const key in users) {
    console.log(`${key} : ${users[key]}`)
}