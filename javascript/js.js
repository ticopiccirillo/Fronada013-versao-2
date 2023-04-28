const btnMobile = document.getElementById('btn-mobile') ;
btnMobile.addEventListener('click', toggleMenu) ;
btnMobile.addEventListener('Touchstart', toggleMenu) ;

function toggleMenu(event) 
{
    if(event.type === 'touchstart') event.preventDefaul;
const nav = document.getElementById('nav') ;
nav.classList.toggle('active')
};