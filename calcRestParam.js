// ========= CALCULO DE MEDIA (REST PARAM.) ===========

// PASSO 1 - Fazer a função com o parâmetro rest
// PASSO 2 - Declarar uma variavel para somar todos os numeros
// PASSO 3 - Fazer um laço de repetição para passar por cada item do array de parametros rest
// PASSO 4 - Pegar o tamanho do array e utilizar como divisor
// PASSO 5 - Retornar o valor final

const averageCalculator = function(...values){
    if(values.length <= 0) return 'The field can not be empty'

    let sum = 0;
    let divider = values.length;
    let result = 0;

    for(let value of values){
        sum += value;
    }

    result = sum / divider

    return result.toFixed(2)
}

const average = averageCalculator(2, 7)
console.log(average)