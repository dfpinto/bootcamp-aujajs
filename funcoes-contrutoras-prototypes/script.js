const p1 = {
    nome: "Computador",
    quantidade : 20,
    valor : 8000.0
}

const Produto = function(nome, quantidade, valor) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.valor = valor;

    // Será instanciada toda vez que um produto for criado.
    // Se a função interna tiver o mesmo nome de uma função externa, então a interna será acionada.
    // Para acionar uma função externa com mesmo nome use:
    // Produto.prototype.label.call(p2)
    this.teste = function(){
        console.log("teste interno");
    }

    this.label = function() {
        return "Label interno: Produto " + this.nome + ", quantidade: "+ this.quantidade + " e valor: "+this.valor.toFixed(2);
    }
}

// função será instanciada apenas 1 vez
Produto.prototype.total = function() {
    return this.quantidade * this.valor;
}

Produto.prototype.adicionar = function(quantidade) {
    this.quantidade += quantidade;
}

Produto.prototype.remover = function(quantidade) {

    if(this.quantidade > quantidade){
        this.quantidade -= quantidade;
    }
}

Produto.prototype.label = function() {
    return "Label externo: Produto " + this.nome + ", quantidade: "+ this.quantidade + " e valor: "+this.valor.toFixed(2);
}

const p2 = new Produto("Monitor", 10, 800.0);
const p3 = new Produto("Mouse", 4, 50.0);

console.log("Total p2: "+p2.total());
console.log("Total p3: "+p3.total());