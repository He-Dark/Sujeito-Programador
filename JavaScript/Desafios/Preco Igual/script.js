// 3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:​

// const products = [ 
// { name: 'Maça', price: 2.5 }, 
// { name: 'Coca cola', price: 8 }, 
// { name: 'Guarana', price: 5 }, 
// { name: 'Chocolate', price: 20 } 
// ];

// const busca = products.find((item) => {
//     if(item.price === 20){
//         console.log(item);
//     }
    
// });

// 3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?

const products = [ 
    { name: 'Maça', price: 2.5 }, 
    { name: 'Coca cola', price: 8 }, 
    { name: 'Guarana', price: 5 }, 
    { name: 'Chocolate', price: 20 } 
];

let busca = products.filter((item) => {
    return item.price < 8;
});

console.log(busca)