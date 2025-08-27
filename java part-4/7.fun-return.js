/*  Functions / funções

    Função void (vazia), não retorna nada.
    Função return, retorna um valor para quem chamou a função
*/

// function sum(value, value2) { // void
//     console.log(value + value2)
// }

// function sum(value, value2) { 
//     const result = value + value2
//     return result
// }

// const myResult = sum(10, 20)
// console.log(myResult + " resultado")



/* 
    Calcula Desconto:
    Todos os produtos acima de R$ 30,00 tem desconto de 10%.

*/

// Resultado feito por mim
const cart = [10, 244, 99, 2, 20, 33, 250];

const resultado = cart.reduce((acc, preco) => {
  acc.totalSemDesconto += preco;

  if (preco > 30) {
    const comDesconto = preco * 0.9;
    acc.totalComDesconto += comDesconto;
    acc.economia += preco - comDesconto;
  } else {
    acc.totalComDesconto += preco;
    // sem economia nesse caso
  }

  return acc;
}, {
  totalSemDesconto: 0,
  totalComDesconto: 0,
  economia: 0
});

console.log(`💰 Total sem desconto:     R$ ${resultado.totalSemDesconto.toFixed(2)}`);
console.log(`✅ Total com desconto:     R$ ${resultado.totalComDesconto.toFixed(2)}`);
console.log(`🎉 Economia obtida:        R$ ${resultado.economia.toFixed(2)}`);
//----------------------------------------------------
// Resultado feito pelo rodolfo

// const cart = [10, 244, 99, 2, 20, 33, 250]
// let finalValueWithDiscount = 0

// /* 

//     R$ 250,00 // 7%    -> R$ 17,50
//     250 * 7 -> 1750 / 100
// */

// function calculateDiscount(price, discount) {
//     const result = (price * discount) / 100
//     return result
// }

// cart.forEach(value => {
//     if (value > 30) {
//         const discount = calculateDiscount(value, 10)
//         finalValueWithDiscount = finalValueWithDiscount + (value - discount)
//     } else {
//         finalValueWithDiscount += value
//     }
// });

// console.log(`O valor final da compra foi de R$ ${finalValueWithDiscount},
//     porém você teve desconto, e irá pagar apenas R$ ${finalValueWithDiscount.toFixed(2)},
//     você economizou ${finalValueWithDiscount}`)

