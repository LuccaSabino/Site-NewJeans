const nav = document.querySelector('.navbar')

function activeScroll(){
    nav.classList.toggle('ativo',scrollY > 0)
}

window.addEventListener('scroll', activeScroll)