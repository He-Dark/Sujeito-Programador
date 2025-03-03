//FIND, faz uma busca em uma lista e devolve o primeiro item encontrado referente a busca

// let listagem = [5, 3, "Jose", 2, "Matheus", "Jose"]

// let busca = listagem.find((item) => {
//     //CONDIÇÃO para verificar
//     if (item === "Jose") {
//         return console.log("ITEM ENCONTRADO COM SUCESSO")
//     }
// })

// console.log(busca);


// FILTER

let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador"];

let resultado = palavras.filter((item) =>{
    return item.length >= 5;
})

console.log(resultado);
