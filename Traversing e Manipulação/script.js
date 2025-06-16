const tabmenu = document.querySelectorAll('.jstabmenu li');
const tabContent= document.querySelectorAll('js-tabcontent section');

function activeTab(index){
    tabContent.forEach((content)=>{
        content.classList.remove('ativo')
    }//quando e passar um numero ele remove da outra
        
    )
    tabContent[index].classList.add('ativo');
}

tabmenu.forEach((itemMenu, index)=>{
    itemMenu.addEventListener('click', function(){
        activeTab(index)
    })
})