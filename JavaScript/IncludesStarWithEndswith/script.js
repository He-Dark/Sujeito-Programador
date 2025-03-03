
// includes, starWith, endsWith

let nomes = ["Matheus", "Lucas", "Jose"];

console.log(nomes.includes("Maria")); //includes vai devolver resultado booleano true ou false. É case sensitive, "A" para "a" são diferentes

if(nomes.includes("Matheus")){
    console.log("ESTA NA LISTA")
}else{
    console.log("NÃO ESTÁ NA LISTA")
}

// StarsWith

let nome = "Matheus";
    console.log(nome.startsWith("Mat")); // startsWith: Verifica se começa com a palavra escolhida. Também é case sensitive

// EndsWith

    console.log(nome.endsWith("eus")); // endWith: Verifica o final da palavra.