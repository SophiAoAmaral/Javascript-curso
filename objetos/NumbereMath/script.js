console.log(Number.isNaN(NaN))
console.log(Number.isNaN(4+5))

console.log(Number.isInteger(10))//verifica se o numero é intero
console.log(Number.isInteger(1.3))//false


//parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

console.log(parseFloat('1231231.2131'))//transfoorma num numero se tiver qualquer caractere na frentee ele exibe NaN
console.log(parseInt('100.21 reasis'))//tira tudo que for decimal pois quer um numero inteiro

//n.toFixed(decimais)
//Arredonda o número com base no total de casas decimais do argumento.
const preco = 2.99;
 console.log(preco.toFixed());//vai arredondar p 3

const carro = 100.455
console.log(carro.toFixed(2));//100.46

const preco2 = 1499.49
console.log(preco2.toFixed());//1499

//n.toString(radix)
//Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const preco3 = 2.99;
preco3.toString(10); // '2.99'

//n.toLocaleString(lang, options);
//Formata o número de acordo com a língua e opções passadas.

let valor = 48.49
valor = valor.toLocaleString('pt-BR', {style:"currency", currency:'BRL'})
console.log(valor)


//Math
//É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

console.log(Math.PI)
console.log(Math.abs(8-9))//retorna o valor absoluto, ou seja, transforma negativo em positivo.
console.log(Math.ceil(38.98))//ceil() arredonda para cima, retornando sempre uma integral e floor para baixo.
console.log(Math.floor(4.989))

console.log(Math.round(4.5))// arredonda para o número integral mais próximo.

console.log(Math.max(1,32,55,65,32,56))//max() retorna o maior número de uma lista de argumentos,
console.log(Math.min(8,1,2,3,4))// min() o menor número

//random() um número aleatório 

const aleatório = Math.random() *10;//de 0 a 10;
//para nao dar numeros quebrados adicionar o math floor

const aleatorios = Math.floor(Math.random()*10)
console.log(aleatorios);

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;
