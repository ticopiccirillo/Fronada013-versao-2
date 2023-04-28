const btnMobile = document.getElementById('btn-mobile') ;
btnMobile.addEventListener('click', toggleMenu) ;
btnMobile.addEventListener('Touchstart', toggleMenu) ;

function toggleMenu(event) 
{
    if(event.type === 'touchstart') event.preventDefaul;
const nav = document.getElementById('nav') ;
nav.classList.toggle('active')
}


/*const menuLinks = document.querySelectorAll('.menu a[herf^="#"]');

function scrollToSection (event) {
    event.preventDefaul();
    const element = event.target;
    const id = element.getAttribute("href");
    console.log(id);
}
menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});*/

//Funções scroll
//Identificar o click no menu
//verificar o item quw foi clicado e fazer referencia ao alvo
//verificar a distancia entre o alvo e o topo
//animar o scroll ate o alvo

const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event.target) {
    console.log('clicou');
};    

item.addEventListener('click', scrollToIdOnClick);
});

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 100;

    scrollToPosition(to);
    }

function scrollToPosition(){
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}
