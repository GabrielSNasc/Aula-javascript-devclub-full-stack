/* 
    IF(SE)
    Else (Se Não)
    Else if 
*/

const temperature = 40

if(temperature === 36) {
    console.log("você está saudavel")
} else if(temperature > 36 && temperature <= 40){
    console.log("Está com febre")
} else if(temperature > 40 ){
    console.log("Está com MUITA febre")
} else {
    console.log("Está com hipotermia")
}