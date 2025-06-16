// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const LinksInternos = document.querySelectorAll('a[href^="#"]');

function AddClass(event){
    event.preventDefault();
    LinksInternos.forEach((item)=>{
        item.classList.remove('ativo')
    })
    event.currentTarget.classList.toggle('ativo');
}
 LinksInternos.forEach((links)=>{
links.addEventListener('click', AddClass)
 })

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const Elementos = document.querySelectorAll('body *');
 
function TodosOsElementos(event){

    
    console.log(event.currentTarget)}
Elementos.forEach((elemento) =>{
    elemento.addEventListener('click', TodosOsElementos);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/* event.currentTarget.remove()*/

 
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function AumentaTexto(event){
    if(event.key === 't'){
        /**DOCUMENTEELEMENT ESTOU FALANDO DIRETAMENTE COM O HTML */
        document.documentElement.classList.toggle('letraaumentada');
    }

}


window.addEventListener('keydown', AumentaTexto);