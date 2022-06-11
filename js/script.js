function isMobileDevice() {
    if (navigator.userAgent.match(/iPhone/i)||
        navigator.userAgent.match(/webOS/i)||
        navigator.userAgent.match(/Android/i)||
        navigator.userAgent.match(/iPad/i)||
        navigator.userAgent.match(/iPod/i)||
        navigator.userAgent.match(/BlackBerry/i)||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}
/* Menu mobile */
var nav=document.getElementById('nav');
var burger=document.getElementById('burger');
var body=document.querySelector('body');
var links=document.querySelectorAll('.header__menu-links');
var cards=document.querySelectorAll('.js-card');
var header=document.querySelector('#header');
const dialogs=document.querySelectorAll('.js-popin');
const btn=document.querySelector('.js-btn');

function toggleNav() {
    nav.classList.toggle('nav__open');
    body.classList.toggle('nav-open');
    header.classList.toggle('nobckg');
}
burger.addEventListener('click', toggleNav);

links.forEach(function (link) {
    link.addEventListener('click', toggleNav);
})

function showCard() {
    dialogs.forEach((dialog) => {
        dialog.style.display="block"
    })
    const title=this.getAttribute("alt");
    let src=this.getAttribute("src");
    src='img/portfolio/full-size/'+src.substring(src.lastIndexOf('/')+1);
    body.classList.add('noScroll');
    dialogs.forEach(function (dialog) {
        dialog.setAttribute("open", "true");
        const titleElement=dialog.querySelector('.js-title');
        titleElement.innerHTML=title;
        const srcElement=dialog.querySelector('.js-img');
        srcElement.setAttribute("src", src);
    })

}
cards.forEach(function (card) {
    card.addEventListener('click', showCard)
})


function closePopin() {
    dialogs.forEach(function (dialog) {
        dialog.removeAttribute("open");
        body.classList.remove('noScroll');
        dialog.style.display="";
    })
};
btn.addEventListener('click', closePopin);

/* formulaire de contact */
var form=document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status=document.getElementById("my-form-status");
    var data=new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML="Merci de votre message";
            status.classList.add('succes');
            form.reset()
        } else {
            status.classList.add('error');
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML=data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML="Oops! Il y a eu un problème lors de la soumission de votre formulaire"

                }
            })
        }
    }).catch(error => {
        status.classList.add('error');
        status.innerHTML="Oops! Il y a eu un problème lors de la soumission de votre formulaire"
    });
}
form.addEventListener("submit", handleSubmit)


















