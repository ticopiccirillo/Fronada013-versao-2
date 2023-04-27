const btnMobile = document.getElementById('btn-mobile') ;
btnMobile.addEventListener('click', toggleMenu) ;
btnMobile.addEventListener('Touchstart', toggleMenu) ;

function toggleMenu(event) 
{
    if(event.type === 'touchstart') event.preventDefaul;
const nav = document.getElementById('nav') ;
nav.classList.toggle('active')
}


//Funções scroll
const menuItens = document.querySelectorAll('#menu a');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

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
    windouw.scroll({
        top: to,
        behavior: "smooth",
    });
};


