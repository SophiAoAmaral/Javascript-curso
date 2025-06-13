


const Linkinterno= document.querySelector('[href^="#')
console.log(Linkinterno)

//primeira tag com a classanimal
const animais = document.querySelector('.animais');
// primeira tag com id contato
const contato = document.querySelector('#contato');
//seleciona a class animal lista e a uultima li com essa class
const ultimoItem = document.querySelector('.animais-lista li:last-child');
//seleciona a primeira href que comecça com https://
const linkCSS = document.querySelector('[href^="https://"]');
//selecionaprimeiro u do docymento
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

const animaisIMG= document.querySelectorAll('.animais img');
console.log(animaisIMG)


const gridSection = document.getElementsByClassName('grid-section');


primeiroUl.classList.add('grid-section')