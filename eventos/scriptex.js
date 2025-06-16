const img = document.querySelector('img')

function callback(event){
     console.log(event)
}


img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
    /*mosrta exatamente onde e cliquei*/ 
    console.log(event.target)
    /*mostra onde cliquei sem muitos detalhes apenas o componente que engloba*/
    console.log(event.currentTarget);
    /*tipo do evento*/
    console.log(event.type) 
}
animaisLista.addEventListener('click', callbackLista);


const linkExterno = document.querySelector('a[href^="http"');
function handleLinkexterno(event){
    /* Nao deixa onavegador fazer coisas padraoes no exemplo ele nao deixa ir ao link externo*/
    event.preventDefault;
    console.log('clicou')
}

linkExterno.addEventListener('clicl', handleLinkexterno)

/*O this faz referencia exatamente ao elemento que esta associado se esta a uma imagem ira mostrar a imagem
console.log(this) posso usar os atributos normais no this exemplo getatributteclaass e adicionar uma classe*/


const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.tyoe, event);
}

h1.addEventListener('click', handleEvent);
/*quando passar o mouse por cima sem clicar*/
h1.addEventListener('mouseenter', handleEvent);
/* cada movimento que eu dou exibe no console podendo travar*/
h1.addEventListener('mousemove', handleEvent);

/*um evento geral quando eu der scroll na pagina exibe*/
window.addEventListener('scroll', handleEvent);

/*um evento geral quando eu diminiur a pagina exibe*/
window.addEventListener('resize', handleEvent)

/*um evento geral quando clicar uma tecla qualquer pagina exibe ou executa a função*/
window.addEventListener('keydown', handleEvent)



function handleKeyboard(event){
    if(event.key === 'a'){
        /*o toggle faz com q se eu clicar e ja existir ele exclua a class ja o add so adiciona para falar com body so fazer isso */
        document.body.classList.toggle('azul');
    }else(event.key === 'r')
        document.body.classList.toggle('red')

    }

window.addEventListener('keydown', handleKeyboard);

/*se tiver uma lista de elementos teremos que utlizar foreach para criar um looping e percorrer todos*/
const imgs = document.querySelectorAll('img');
function handleImg(event){
    /*me mostra o atriuto src de cada imagem que eu clicar */
    console.log(event.target.getAttribute('src'))
}

imgs.forEach((img) =>{
    img.addEventListener('click', handleImg)
})