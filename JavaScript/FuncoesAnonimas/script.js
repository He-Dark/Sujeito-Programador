// Funções Anônimas

function somar(a, b){
    let total = a + b;
    return console.log(total);
}

// somar(10,30);

let subtrair = (valor1, valor2) => { 
    let total = valor1 - valor2; 
    console.log("Animal " + total);
}
// subtrair(60,30);


let numeros = [1, 3, 5, 10];
    numeros.map((item) => {
//vai toda a lógica do .map    
    console.log(item)
})