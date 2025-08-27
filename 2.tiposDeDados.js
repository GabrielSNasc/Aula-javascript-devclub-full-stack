/*
Tipos de Dados

1. string -> Textos.
*/

const texto1 = "textos com aspas duplas"
const texto2 = 'textos com aspas simples'
const texto3 = `textos com crase` // Template Literals ou Template String




////////////////////////////////////////// PARTE 2 --> Teplate Strings


const myAge = 30
const myCar = `Audi`

const myString = `Minha idade é ${myAge}, to ficando velho.
Mas pelo menos to andando de ${myCar}

` // Template Literals / Template String



////////////////////////////////////////// PARTE 3 --> Numbers

/*
Tipos de Dados

1. String -> Textos.
2. Numbers -> Números
*/

const number1 = 32 / 2




////////////////////////////////////////// PARTE 4 --> Boolean

/*
Tipos de Dados

1. String -> Textos.
2. Numbers -> Números
3. Boolean -> Boleano
*/

true

false

////////////////////////////////////////// PARTE 5 --> Object

/*
Tipos de Dados

1. String -> Textos.
2. Numbers -> Números
3. Boolean -> Boleano
4. Object -> Objetos
*/

const Gabriel = {
    name: "Gabriel",
    age: 20,
    address: {
        street: "Rua dos Bobos",
        number: 7,
        city: "São Paulo",
        state: "SP",
        country: "Brasil"
    }
}

Gabriel.address.number = 10

console.log(Gabriel)
console.log(Gabriel.name) // Pegar a informação que desejar
console.log(Gabriel.address.city) // usando o "." pode navegar e pegar as informações que desejar



////////////////////////////////////////// PARTE 6 --> Null e Undefined

/*
Tipos de Dados

1. String -> Textos.
2. Numbers -> Números
3. Boolean -> Boleano
4. Object -> Objetos
5. Null ee Undefined
*/

const user = {
    nome: "Gabriel",
    idade: 30,
    nomeDoConjuge: null,
    id: null,
}


////////////////////////////////////////// PARTE 7 --> Array

/*
Tipos de Dados

1. String -> Textos.
2. Numbers -> Números
3. Boolean -> Boleano
4. Object -> Objetos
5. Null ee Undefined


Estrutura de Dados

1.Array
*/

const users = [{
    nome: "Gabriel",
    idade: 20,
    nomeDoConjuge: null,
    id: null,
},
{
    nome:"Luara",
    idade: 23,
    nomeDoConjuge: null,
    id: null,
},
]





