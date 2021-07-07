// function FuncaoSoma(parametro) {
//     let soma = 1 + parametro
//     return soma
// }

// console.log(FuncaoSoma(3))

// console.log(FuncaoSoma('oi'))

function Multiplicacao(a , b) {
    return a * b
}

// function Divisao(a , b) {
//     if (b == 0) {
//         return 'Não foi possível realizar a divisão por zero'
//     }
//     return a / b
// }

// console.log(Multiplicacao(3 , 9))
// console.log(Divisao(1 , 0))
// console.log(Divisao(1000 , 10))

// function SemRetornoSemParam() {
//     console.log('ex 3')
// }

// SemRetornoSemParam()

function FuncaoComFuncao(a) {
    for (var i = 0; i <= 10; i++){
        console.log(Multiplicacao(i , a))
    }
}

FuncaoComFuncao(7)