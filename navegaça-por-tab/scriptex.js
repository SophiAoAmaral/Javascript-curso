//const h1 = document.querySelector('h1');
//h1.innerHTML = '<p>Novo titulo</p>'  /*Adiciona esse texto no h1 mas muda para um paragrafo */
//h1.innerText='<p>Novo titulo</p>'/*Adiciona esse texto no h1 */


const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement);/*Mostra o elemento pai do q eu informei */
console.log(lista.parentElement.parentElement);/*Mostra o elemento pai do pai q eu informei */
console.log(lista.nextElementSibling);/*Mostra o prooximo elemento */
console.log(lista.previousElementSibling);/*Mostra o  elemento anterior */
console.log(lista.children);/*Mostra os fihos do elemento */
console.log(lista.children[5]);/*Mostra o filho q eu colocar */
lista.firstChild; // primeiro node child 
console.log(lista.childNodes); // todos os node child que sao os espaços comentarios etc


console.log(lista.querySelectorAll('li')); // todas as LI's
console.log(lista.querySelector('li:last-child')); // último filho

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = document.querySelector('.titulo');



//lista.appendChild(titulo);/*ele vai colocar o titulo como o ultimo filho da lista */
/*coloco primeiro para onde quero mover, o primeiro parametro e oq quero mover e o ultimo e o elemento que quero que o primeiro fica antes dele o ultimo elemento tem q ser filho do para onde quero mover isso é obrigatorio*/
//contato.insertBefore(animais, titulo);
//contato.replaceChild(lista, titulo); // substitui titulo por lista
//contato.removeChild(titulo); // remove titulo de contato

//Podemos criar novos elementos com o método createElement()

const novoh1 = document.createElement('h1');
novoh1.innerText ='Novo Titulo';
novoh1.classList.add('titulo');
//insere apos o titulo
titulo.appendChild(novoh1);

//Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);
//true sinaliza para incluir os filhos false nao leva
cloneh1.classList.add('azul');
//adicionei apenas mno clone

faq.appendChild(cloneh1);