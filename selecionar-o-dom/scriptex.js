// Retorne no console todas as imagens do site
const animaisIMG = document.querySelectorAll('.animais img');
console.log(animaisIMG);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemAnimais = document.querySelectorAll('img[src^="img/imagens"');
console.log(imagemAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelectorAll('.animais-descricao h2');
console.log(primeiroh2[0]);
// Selecione o último p do site
const ultimoP =document.querySelectorAll('body p:last-child');
console.log(ultimoP.length);
console.log(ultimoP[6]);
