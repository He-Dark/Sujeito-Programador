
// Desconstruir um Objeto

let pessoa = {
    nome: "Adriano",
    sobrenome: "Gomes",
    empresa: "Sujeito Programador",
    cargo: "Programador FullStack"
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

// let nome = "TESTE";

// const { nome:nomePessoa, cargo, empresa, sobrenome } = pessoa; // é se ele tivesse criado uma variável com nome e cargo

// console.log("Nome da Pessoa " + nomePessoa)
// console.log(sobrenome)

// console.log(empresa)
// console.log(cargo)

// Desconstruit um Array

let nomes = ["Matheus", "Lucas", "Henrique"];


// let {0:matheus, 2:henrique} = nomes;
// console.log(matheus)
// console.log(henrique)

let [primeironome, segundonome] = nomes; // está pegando pela posição do item
console.log(primeironome)