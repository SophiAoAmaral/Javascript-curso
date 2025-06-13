const listaAnimais = document.querySelector(".animais-lista");

const raposah2 = document.querySelector('h2');
const h2letf= raposah2.offsetLeft

const react = raposah2.getBoundingClientRect()
console.log(react.height)

if(react.top <0){
    console.log('Passou do elemento')
}else{
    console.log('ANTES DO ELEMENTO')
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerHeight,
    window.outerWidth,
   


);
const small = window.matchMedia('(max-width:600px)')
.matches;

if(small){

    console.log('Usuario MObile')
}else{
    console.log('Usuario Desktop')
};
