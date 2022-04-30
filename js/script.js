function isMobileDevice() { 
    if( navigator.userAgent.match(/iPhone/i) ||
     navigator.userAgent.match(/webOS/i) ||
     navigator.userAgent.match(/Android/i) ||
     navigator.userAgent.match(/iPad/i) ||
     navigator.userAgent.match(/iPod/i) ||
     navigator.userAgent.match(/BlackBerry/i) ||
     navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

/* Menu mobile */
var nav = document.getElementById('nav');
var burger = document.getElementById('burger');
var body = document.querySelector('body');
var links = document.querySelectorAll('.header__menu-links');
var cards = document.querySelectorAll('.cards');



function toggleNav() {
    nav.classList.toggle('nav__open');
    body.classList.toggle('noScroll');
}

burger.addEventListener('click', toggleNav);

links.forEach(function (link) {
    link.addEventListener('click', toggleNav);
})

function showCard() {

    let txts = this.querySelectorAll('.service__card-textOff');
    let logoService = this.querySelectorAll('.logo-service');

    txts.forEach(item => {
        item.classList.toggle('card-textOn');
    })
    logoService.forEach(item => {
        item.classList.toggle('logo-off');
    })
}

cards.forEach(function (card) {
    if (isMobileDevice()){
        card.addEventListener('click', showCard);
    }
})













