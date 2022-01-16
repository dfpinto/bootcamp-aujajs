/*
Promise recebe uma função f como argumento.
Esta função f por sua vez recebe como argumento duas funções g e h (opcional).
Se durante a execução da lógica da função f, a função g for chamada com 
o argumento P (opcional), então o estado da promise mudará para "fulfilled" (resolvida), 
e o resultado da promise será o valor P.
Se durante a execução da lógica da função f, a função h for chamada com 
o argumento Q (opcional), então o estado da promise mudará para "rejected" (rejeitada), 
e o resultado da promise será o valor Q.
O método then de uma promise recebe como argumento uma função, e executa esta 
função passando o valor P para ela, quando a promise for resolvida.
O método catch de uma promise recebe como argumento uma função, e execute esta 
função passando o valor Q para ela, quando a promise for rejeitada.
As promises são assíncronas.
*/

function f(g, h) {
  setTimeout(() => {
      if (10 < 0) {
          g("P");
      }
      else {
          h("Q");
      }            
  }, 3000);
}

const minhaPromise = new Promise(f);

minhaPromise
  .then(valor => {
      console.log("Resolveu com o valor " + valor);
  })
  .catch(valor => {
      console.log("Rejeitada com o valor " + valor);
  });

console.log(minhaPromise);