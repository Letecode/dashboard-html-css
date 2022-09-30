let menuToggle = document.querySelector('.menu-toggle')
let sidemenu = document.querySelector('.sidemenu')


menuToggle.addEventListener('click', function(e){
    sidemenu.classList.toggle('d-none')
})