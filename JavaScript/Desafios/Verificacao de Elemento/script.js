// 2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 

const numeros = [5, 10, 15, 30, 50];

const busca = numeros.find(item => item === 0);
    if(busca){
        console.log(`Correto!! existe ${busca} na lista!`)
    }else{
        console.log(`Parece que esse produto não existe.`)
    }
    
