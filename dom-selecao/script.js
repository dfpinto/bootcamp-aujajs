const item1 = document.querySelector("li");

// por algum motivo o chrome ora apresenta os dados no console de forma estruturada/detalhada
// ora apresenta apenas o html
console.log(item1);
console.log(item1.outerHTML);
console.log(item1.innerHTML);

// acessando um elemento html
const items = document.querySelectorAll("li");

console.log(items);
// acessando via dados globais, dataset ou custom data attributes (data*)
// o colchete é usado para selecionar um atributo do html
const card1 = document.querySelector('[data-product-id="32"]')

console.log(card1);

// inluindo o elemento parágrafo
const paragrafo = document.createElement("p");
paragrafo.innerHTML = "Descrição";
card1.appendChild(paragrafo);

// incluindo uma nova classe no elemento card1
card1.classList.add("super-border");

// acessando pelo nome da classe (css)
const cards = document.querySelectorAll(".card");
//const cards = document.getElementsByClassName("card");

console.log(cards);

// convertendo um arraylike (parecido com array) em um array do js
Array.from(cards).map(item => {
  console.log(item.innerHTML);
});

// idem usando spread
[...cards].map(item => {
  console.log(item.innerHTML);
});