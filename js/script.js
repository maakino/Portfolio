/* Menu mobile */
var nav = document.getElementById('nav');
var burger = document.getElementById('burger');
var body = document.querySelector('body');
var links = document.querySelectorAll('.header__menu-links')

function toggleNav(){
    nav.classList.toggle('nav__open');
    body.classList.toggle('noScroll');
}

burger.addEventListener('click',toggleNav);

links.forEach(function(link){
    link.addEventListener('click',toggleNav);
})




