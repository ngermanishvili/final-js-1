
let navigElements = document.getElementById('idnavbar');
let burgerElements = document.getElementById('idburger');
let navAnimation = document.querySelector('.burgBar')
let sideMenu = document.querySelector('.side-menu');

burgerElements.addEventListener('click', function(){
    navigElements.classList.toggle('visible');
    navAnimation.classList.toggle('activeBurgerBar');
    sideMenu.classList.toggle('active');
})

const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('active');
  });
});

