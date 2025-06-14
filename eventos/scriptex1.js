//seleciona a primeira imagem
const img = document.querySelector('img');

//funçao que sera passada para add event lister
//adicionando um paramentro event mostra varios parametros na tela
function callback(event){
    console.log(event)
}

//primeiro o evento, segundo nome daa function
img.addEventListener('click',callback )

const imagensLista= document.querySelector('.animais-lista')

function callbackLista(event){
    
//currentTarget mostra o elemento que cliquei
    console.log(event.currentTarget)
    console.log(event.target)
    //exatemente onde eu cliquei
    console.log(event.type)
    //mostra o tipo de evento que esta acontecendo
}

imagensLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){
    event.preventDefault()
    //nao permite q o browser faça as coisas basicas dele ex:quando clicar num link nao ir para a proxima parte
    //retorna o href certinho que ira ser executado/linkado
    console.log(this.getAttribute('href'));
    console.log('Clicou')}

linkExterno.addEventListener('click', handleLinkExterno);

//A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado. 

const h1 = document.querySelector('h1')
function handleEvent(event){
    console.log(event.type, event)
}
h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);

//cada movimento de mouse ele apita no console ininitamente
h1.addEventListener('mousemove', handleEvent);
h1.addEventListener('resize', handleEvent);
//apertar alguma tecla do teclado
h1.addEventListener('keydown', handleEvent);
//podemos criar varias coisas ex colocar em full screen ou adicionar alguma coisa

function handleKeybord(event){
    if (event.key  === 'p')
    //se clicar p ira mudar p PINK ou 
        document.body.classList.toggle('pink');
    else(event.key === 'v')
    // se clicar V ira mudar para RED
        document.body.classList.toggle('vermelho');
    }
//window pq ira alterar a tela do conteudo
window.addEventListener('keydown', handleKeybord)


//para selecionar mais de um elemento temos que criar im lopping

const imgs = document.querySelectorAll('img');
function handleImg (event){
    const src = event.currentTarget.getAttribute('src');
    console.log(src);

}

imgs.forEach((img))=>{
    img.addEventListener('click', handleImg)
}
