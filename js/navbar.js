

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


fetch('db/card.json')
  .then(response => response.json())
  .then(data => {
    // data is the parsed JSON object containing the list of users
    // create a new array with the first 4 elements of the original array
    const users = data.data.slice(0, 4);
    // iterate through the list of users and create card elements for each
    const cardContainer = document.querySelector('.card-container');
    users.forEach(user => {
      // create a card element
      const card = document.createElement('div');
      card.classList.add('card');
      // set the user's name and avatar
      card.innerHTML = `
        <img src="${user.img}" />
        <div class="card-info">
          <h6>${user.first_name} ${user.last_name}</h6>
          <span>${user.tittle_job}</span> 
          <div class="social-icon">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      `;
      // append the card element to the container
      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error(error);
  });

