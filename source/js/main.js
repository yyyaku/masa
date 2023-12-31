import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initAutofocusModalInput} from './modules/modals/init-autofocus-modal-input';
import {Form} from './modules/form-validate/form';
import {initAccordions} from './modules/accordions/init-accordion';
import {navButtonClick} from './modules/hero/nav-button-click';
import {initSliderHero} from './modules/sliders/init-slider-hero';
import {initSliderPrograms} from './modules/sliders/init-slider-programs';
import {newsButtonClick} from './modules/news/news-button-сlick';
import {initSliderNews, initSliderControlsNews, initSliderControllerNews} from './modules/sliders/init-slider-news';
import {initSliderReviews} from './modules/sliders/init-slider-reviews';
import {map} from './modules/map/map';
import {CustomSelect} from './modules/select/custom-select';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initAutofocusModalInput();
    const form = new Form();
    window.form = form;
    form.init();
    initAccordions();
    navButtonClick();
    initSliderHero();
    initSliderPrograms();
    initSliderControlsNews();
    initSliderNews();
    initSliderControllerNews();
    newsButtonClick();
    initSliderReviews();
    map();
    const select = new CustomSelect();
    select.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
