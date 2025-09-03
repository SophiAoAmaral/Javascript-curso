//const Dom = {
//  selector: 'li',
//  element() {
 //   return document.querySelector(this.selector);
//  },
//  ativar() {
//    const elementoSelecionado = this.element();
//    elementoSelecionado.classList.add("ativar");
//  }
//}


//Dom.ativar()



//Dom.selector = 'ul'
//Dom.ativar()
function Dom (selector) {

  this.element = function(){
    return document.querySelector(selector);
  }
  this.ativar = function(){
    this.element().classList.add('ativar')
  }

}

const li = new Dom('li')
li.ativar()

const h1 = new Dom('h1')
h1.ativar()

const liLast= new Dom('li:last-child')
liLast.ativar()