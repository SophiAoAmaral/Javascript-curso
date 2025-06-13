// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraimg = document.querySelector('img');
const imgtop = primeiraimg.offsetTop
console.log(imgtop)

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');

imgs.forEach((imagem)=>{
    console.log(imagem.offsetWidth)
})


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach((link)=>{
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth> 48 && linkHeight >48){
        console.log(link , 'Possui boa acessibilidade')
    }else{
        console.log(link, 'Não possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia('(max-width:730px)').matches

if(browser){
    const menu = document.querySelector('menu');
    menu.classList.add('menu-mobile')
}