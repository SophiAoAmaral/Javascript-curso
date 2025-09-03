const comida = 'Pizza';//devolve uma string
const agua = new String('agua');//devolve um objeto

console.log(comida.length)
console.log(agua.length)

console.log(agua[1])

const frase =' a Melhor comida';

console.log(frase[frase.length -1])//devolve a ulltima letra
console.log(frase.charAt())

//str.charAt(n)
// Retorna o caracter de acordo com o index de (n).
const linguagem = 'JavaScript';


linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

//str.concat(str2, str3, ...)
//Concatena as strings e retorna o resultado.
const frase2 = 'A melhor linguagem é ';
const linguagem2 = 'JavaScript';

const fraseCoompleta = frase2.concat(linguagem, '!!')

//ou

const fraseFinal = frase2 + linguagem2

//str.includes(search, position)
//Procura pela string exata dentro de outra string. A procura é case sensitive.
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true  lista frutas tem a fruta escrita???
fruta.includes(listaFrutas); // false

//str.endsWith(search) e str.startsWith(search)  Procura pela string exata dentro de outra string. A procura é case sensitive.

console.log(fruta.endsWith('nana')); // true
console.log(fruta.startsWith('Ba')); // true
console.log(fruta.startsWith('na')); // false



//str.slice(start, end)
//Corta a string de acordo com os valores de start e end.

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep   (da onde começa, ate onde termina)
console.log(transacao2.slice(0, 3)); // Dep
console.log(transacao3.slice(0, 3)); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi


//str.indexOf(search) e str.lastIndexOf(search)
//Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3
