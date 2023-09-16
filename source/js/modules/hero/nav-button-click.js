const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const nav = document.querySelector('.main-nav');
const navButton = document.querySelector('.main-nav__toggle');
const programsList = document.querySelector('.site-list__button--programs');
const newsList = document.querySelector('.site-list__button--news');
const programsButton = document.querySelector('.site-list__toggle--programs');
const newsButton = document.querySelector('.site-list__toggle--news');

const navButtonClick = () => {
  navButton.addEventListener('click', function () {
    nav.classList.toggle('main-nav--opened');
    overlay.classList.toggle('overlay--opened');
    body.classList.toggle('menu--opened');
  });

  overlay.addEventListener('click', function () {
    nav.classList.toggle('main-nav--opened');
    overlay.classList.toggle('overlay--opened');
    body.classList.toggle('menu--opened');
  });

  programsButton.addEventListener('click', function () {
    programsList.classList.toggle('site-list__button--opened');
  });

  newsButton.addEventListener('click', function () {
    newsList.classList.toggle('site-list__button--opened');
  });
};

export {navButtonClick};