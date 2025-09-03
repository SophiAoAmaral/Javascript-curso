function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;

  this.andar = function(){
    return 'andou pelo objeto'
  }
}



Pessoa.prototype.andar = function(){
  return this.nome + ' andou';
}


Pessoa.prototype.nadar = function(){
  return this.nome + ' nadou';
}//isso funciona igua se eu criasse dentro da function com this.abraçar = function()return


const andre = new Pessoa('andre', 20)


const pais = 'Brasil'

const cidade = new String('Rio')

const lisataAnimais =['Cachorro', 'Gato',  'Cavalo'];


const lista = document.querySelector('li')
// Transforma em uma array
const listaArray = Array.prototype.slice.call

//transforma em array de uma forma mais simples

const listaArray2 = Array.from(lista);


const Carro = {
  marca:'Ford',
  preco:2000,
  andar(){
    return true
  }
}