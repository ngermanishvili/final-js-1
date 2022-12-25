let navigElements = document.getElementById('idnavbar');
let burgerElements = document.getElementById('idburger');
let navAnimation = document.querySelector('.burgBar')
let sideMenu = document.querySelector('.side-menu');

burgerElements.addEventListener('click', function(){
    navigElements.classList.toggle('visible');
    navAnimation.classList.toggle('activeBurgerBar');
    sideMenu.classList.toggle('active');
})

