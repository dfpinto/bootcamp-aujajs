function ola(){
  console.log("Olá!");
}

function ola2(nome){
  console.log("Olá "+nome+"!")
}

//setTimeout(ola, 3000);
//setTimeout(()=>{ola2("Dirley"), 3000}, 3000);

setTimeout(() => {
  ola2("João");
  setTimeout(()=>{
    ola2("Pedro");
    setTimeout(() => {
      ola2("Tiago");
    }, 2000);
  },2000);
}, 2000);

console.log("A");
console.log("B");
