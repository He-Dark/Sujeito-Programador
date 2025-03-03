

// let verificarNumero = (numero) => {
//     let resultado
//     if(numero > 0){
//         resultado = `Esse número é Positivo: ${numero}`
//     }else if(numero < 0){
//         resultado = `Esse número é Negativo: ${numero}`
//     }else{
//         resultado = `Esse número é Igual a Zero: ${numero}`
//     }

//     console.log(resultado)
// }

// verificarNumero(-1)

function checkNumber(num){
    if (num < 0) {
        return 'Negativo';
    } else if (num > 0) {
        return 'Positivo';
    } else {
        return 'Zero';
    }
}

console.log(checkNumber(-20))
console.log(checkNumber(40))