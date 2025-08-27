/* 
    REDUCE
     - Retorna um valor ( pode ser um novo array, um objeto, string, number, etc.)
     - Aceita 4 parâmetros
        - acumulador
        - valor atual
        - index
        - array completo
*/

const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 100)






const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Satya Nadella',
        foundedOn: 1975,
    },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    {
        name: 'Facebook',
        marketValue: 383,
        CEO: 'Mark Zuckerberg',
        foundedOn: 2004,
    },
    { name: 'Spotify', marketValue: 30, CEO: 'Danniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]


const cart = [
    { productName: 'Abóbora', pricePerKg: 5, Kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55, Kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2, Kg: 2 },
    { productName: 'Abacate', pricePerKg: 5.4, Kg: 1.67 },
    { productName: 'Morango', pricePerKg: 11.9, Kg: 3 },
]

const finalValue = cart.reduce((acc, value) => {
    const result = value.pricePerKg * value.Kg
    return acc + result
}, 0)



const phone = [
    { productName: 'iPhone', price: 5000, quantity: 1 },
    { productName: 'Samsung', price: 3500, quantity: 2 },
    { productName: 'Xiomi', price: 1200, quantity: 1 },
]

const totalDaCompra = phone.reduce( (acc, value) => {
    const resultado = value.price * value.quantity
    return acc + resultado
}, 0)

console.log(` O valor Total da sua compra e: ${totalDaCompra}`)