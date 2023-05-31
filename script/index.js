const text = document.querySelector('.text_appear');
const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenuImg = document.querySelector('#menu-btn img');
const toggledMenu = document.querySelector('#toggled-menu');
const menuLinks = document.querySelector('#main-nav ul a');
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
