const numeros = [1, 3, 5, 7, 0, 9];
console.log(`Numeros Ordenados: ${numeros.sort()}`);

// Removendo primeiro item desta lista
console.log(`Item removido: ${numeros.shift()}`);

// Invertendo a ordem da lista
console.log(`Nova ordem: ${numeros.reverse()}`);

// Adicionando um novo numero na lista
numeros.push(8);
console.log(numeros);