// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoas(nome, idade, sobrenome){
  this.nome = nome;
  this.idade = idade;
  this.sobrenome = sobrenome




}
// Crie um método no protótipo que retorne
// o nome completo da pessoa
const sophia = new Pessoas("Sophia", 19 , "Oliveira")
Pessoas.prototype.nomeCompleto = function(){

  return 'Ola ' + this.nome + this.sobrenome
}


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;//HTMLLIElement
li.click;//function
li.innerText;//texto  string
li.value;//number
li.hidden;//boolean
li.offsetLeft;//Number
li.click();//undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;

//retorna uma string falando o nome de boolean
