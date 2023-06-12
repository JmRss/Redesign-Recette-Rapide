const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenuImg = document.querySelector('#menu-btn img');
const toggledMenu = document.querySelector('#toggled-menu');
const menuLinks = document.querySelector('#main-nav ul a');

const containerFlip = document.querySelector('.container-flip');
const containerFlip2 = document.querySelector('.container-flip-2');
const containerFlip3 = document.querySelector('.container-flip-3');
const containerFlip4 = document.querySelector('.container-flip-4');
const containerFlip5 = document.querySelector('.container-flip-5');

const flipActive = document.querySelector('.flip_card');
const flipActive2 = document.querySelector('.flip_card-2');
const flipActive3 = document.querySelector('.flip_card-3');
const flipActive4 = document.querySelector('.flip_card-4');
const flipActive5 = document.querySelector('.flip_card-5');

const scrollTop = document.querySelector('.arrow');

////event navbar responsive /////
toggleMenuBtn.addEventListener('click', toggleNav);

/// function navbar ///
function toggleNav() {
  toggledMenu.classList.toggle('-translate-y-full');

  if (toggledMenu.classList.contains('-translate-y-full')) {
    toggleMenuImg.setAttribute('src', 'assets/menu.svg');
    toggleMenuBtn.setAttribute('aria-expanded', 'false');
  } else {
    toggleMenuImg.setAttribute('src', 'assets/cross.svg');
    toggleMenuBtn.setAttribute('aria-expanded', 'true');
  }
}

////button scroll to top////
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

///event margin flip card ///
containerFlip.addEventListener('click', changeMargin);
containerFlip2.addEventListener('click', changeMargin2);
containerFlip3.addEventListener('click', changeMargin3);
containerFlip4.addEventListener('click', changeMargin4);
containerFlip5.addEventListener('click', changeMargin5);

// Écouteur d'événement pour les clics sur le document
document.addEventListener('click', function (event) {
  // Vérifie si l'élément cliqué est en dehors du body ou dans le body
  if (
    !event.target.closest('.container') ||
    event.target.closest('.container')
  ) {
    containerFlip.classList.remove('container-height');
    containerFlip2.classList.remove('container-height');
    containerFlip3.classList.remove('container-height');
    containerFlip4.classList.remove('container-height');
    containerFlip5.classList.remove('container-height');

    flipActive.classList.remove('flip_card--active');
    flipActive2.classList.remove('flip_card--active');
    flipActive3.classList.remove('flip_card--active');
    flipActive4.classList.remove('flip_card--active');
    flipActive5.classList.remove('flip_card--active');
  }
});
///////add margin-bottom to card when flip /////
function changeMargin(event) {
  containerFlip.classList.toggle('container-height');
  flipActive.classList.toggle('flip_card--active');
  event.stopPropagation();
}
function changeMargin2(event) {
  containerFlip2.classList.toggle('container-height');
  flipActive2.classList.toggle('flip_card--active');
  event.stopPropagation();
}
function changeMargin3(event) {
  containerFlip3.classList.toggle('container-height');
  flipActive3.classList.toggle('flip_card--active');
  event.stopPropagation();
}
function changeMargin4(event) {
  containerFlip4.classList.toggle('container-height');
  flipActive4.classList.toggle('flip_card--active');
  event.stopPropagation();
}
function changeMargin5(event) {
  containerFlip5.classList.toggle('container-height');
  flipActive5.classList.toggle('flip_card--active');
  event.stopPropagation();
}
