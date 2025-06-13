const menu = document.querySelector('.menu');
//console.log(menu.classList);

menu.classList.add('ativo')
menu.classList.remove('azul')
menu.classList.toggle('azul')

 const animais = document.querySelector('.animais');
 console.log(animais.attributes.class);  

 const img= document.querySelector('img')
;

 console.log(img.getAttribute('alt'));

 img.setAttribute('alt', ' É uma raposa');

  const possuiAlt = img.hasAttribute('alt');
  console.log(possuiAlt)

   