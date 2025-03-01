// Lista de Produtos

let listaProdutos = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(`Listando todos os Produtos: ${listaProdutos}`);
// Mostrando quantos produtos tem na lista
console.log(`Quantidade Produtos: ${listaProdutos.length}`);
// Tirando o item Mouse da Lista
listaProdutos.splice(2,1)
// Retornando a lista atualizada
console.log(`${listaProdutos}`);

// Procurando algum determinado produto na lista:
const findProduto = listaProdutos.find(p => p === "Computador");
if (findProduto) {
    console.log(`Correto!! existe ${findProduto} na sua lista!`);
}else{
    console.log('Parece que esse produto não existe');
}

// Removendo o segundo item da lista
listaProdutos.splice(1,1);
console.log(`Meus Produtos: ${listaProdutos}`);



