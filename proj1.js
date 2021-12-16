// Grab Modal elements from DOM and put them into variables

const modalContainer = document.querySelector('.home-button__container');

const modalButton = document.querySelector('.home-button__modal');

const modalOffButton = document.querySelector('.home-button__Off');

//Eventlistener for opening Modal

modalButton.addEventListener('click', function(event) {
  event.preventDefault();
  modalContainer.style.display = 'block';
  // console.log('Hi');
})

//Eventlistener for closing modal by clicking x

modalOffButton.addEventListener('click', function() {
  modalContainer.style.display = 'none';
  // console.log('k');
})
