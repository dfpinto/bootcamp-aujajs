// exemplo 1 de import. importa todas as funções e dá nome ao "pacote"
import * as nb from './numbers.js';

// exemplo 2 de import nomeando quais funções disponíveis eu desejo usar aqui 
// (somente funções exportáveis)
import {sum, exp} from './numbers.js';

// exemplo 3 de import. importa uma classe podendo renomeá-la por causa da cláusula export default
// outra vanagem é que o default exporta uma única coisa (classe)
import Prod from './product.js';

console.log(nb.sum(3,4));
console.log(nb.exp(3, 2));

console.log(sum(3,4));
console.log(exp(3, 2));

const p1 = new Prod("Mouse", 50.0, 4);
console.log(p1.total());