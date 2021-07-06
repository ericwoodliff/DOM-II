// Your code goes here

// assigning classes 
let navClass = document.getElementsByClassName('main-navigation');
let navIndividual = document.getElementsByClassName('nav-link')


for (i = 0; i < navIndividual.length; i++) {
    navIndividual[i].style.border = '1px solid red';
  }

for (i = 0; i < navClass.length; i++) {
    navClass[i].style.border = '1px solid orange';
  }


window.addEventListener('load', event => {
    console.log(`${event.type} happened`)
})



