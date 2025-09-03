// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function People(nome, idade){

  this.nome = nome,
  this.idade = idade
  this.andar = function(){
    console.log(this.nome + 'Andou')
  }
}
  


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
//function People2(){
//  this.name = 'nome'
//  this.idade = 0
//}

//const joao = new People2();
//joao.name = "João";
//joao.idade = 19;


//const maria =  new People2();
//maria.name = "Maria"
//maria.idade = 25

//const bruno = new People2();
//bruno.name = "Bruno"
//bruno.idade = 15

const joao = new People('Joao', 20)
const bruno = new People('Bruno', 15)
const maria = new People('Maria', 15)
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe){//metodo q vai receber a classe e adicionar uma classe
    elementList.forEach((element) =>{
      element.classList.add(classe)
    })
  }

}
const listaItems = new Dom('li')
listaItems.addClass('ativar')

const ul = new Dom('ul')


ul.addClass('ativar-ul')