let pai = 'humberto'
let filho = 'humberto'
let idadePai = 19
let idadeFilho = 1

if (pai == filho) {
    console.log('Pai e filho tem o mesmo nome.')
} 

if (idadePai >= 18) {
    console.log(`A idade ${idadePai} é maior ou igual a 18`)
} 

if (idadeFilho < 18 ) {
    console.log(`A idade ${idadeFilho} é menor que 18`)
}

// Diferença entre operador de comparação por valor apenas para comparação de valor e tipo
let inteiro = 10;
let string  = '10';
// == Compara apenas se os valores são iguais
if (inteiro == string) { 
    console.log(`${inteiro} = ${string}`)
}
// === Compara se os valores e os tipos são diferentes
if (inteiro !== string) { 
    console.log(`${typeof inteiro} - ${inteiro} diferente ${typeof string} - ${string}`)
}