// Duplique o menu e adicione ele em copy
const menu =document.querySelector('.menu');
const copy =document.querySelector('.copy');

const novomenu = menu.cloneNode(true)

copy.appendChild(novomenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
 console.log(primeiroDt.nextElementSibling)


// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
