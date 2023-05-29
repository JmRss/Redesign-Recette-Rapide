const text = document.querySelector('.text_appear');
const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenuImg = document.querySelector('#menu-btn img');
const toggledMenu = document.querySelector('#toggled-menu');
const menuLinks = document.querySelector('#main-nav ul a');
const cardContainer = document.querySelector('.card-container');

const body = document.querySelector('.container');
const card = document.querySelector('.card');
const card2 = document.querySelector('.card--2');
const card3 = document.querySelector('.card--3');
const card4 = document.querySelector('.card--4');
const card5 = document.querySelector('.card--5');

////event navbar responsive /////
toggleMenuBtn.addEventListener('click', toggleNav);

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
if (text) {
  //// text appear /////
  new Typewriter(text, {
    //animation loop
    loop: true,
    deleteSpeed: 20,
  })
    .changeDelay(50)
    .typeString('Cuisinez :<span style="color: #97F03F">  équilibré,</span>')
    .pauseFor(500)
    .deleteChars(10)
    .typeString('<span style="color: #44FCEA">facilement,</span>')
    .pauseFor(500)
    .deleteChars(11)
    .typeString('<span style="color: #FF6B00">rapidement</strong> !!!</span>')
    .pauseFor(2000)
    .start();
}
///// event hover card, change height ////
cardContainer.addEventListener('mouseover', function () {
  cardContainer.style.height = '1000px';
});
cardContainer.addEventListener('mouseout', function () {
  cardContainer.style.height = '384px';
});
