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

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;

