// REST: valores passados com virgula são transformados em array (lista => array)

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(2, 3, 10, 5);

console.log(result1);

const result2 = Math.max(2, 3, 10, 5);

console.log(result2);

// SPREAD: valor passado como array é transformado em uma lista cujos valores são separados 
//         por virgula (array => lista)

const result3 = Math.max(4, 7, 2);

console.log(result3);

const myNumbers = [2, 3, 10, 5];

//const result4 = Math.max(myNumbers); // Nao funciona

const result4 = Math.max(...myNumbers);

console.log(result4);

// SPREAD: clonagem de objeto 

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item };

// não apenas clona como também adiciona mais um atributo
const cloneItemPlus = { ...item, weigth: 10 };