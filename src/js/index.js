import '../sass/index.scss';
import $ from 'jquery';

import Navigation from './navigation';

const init = () => {
  const nav = new Navigation();
  nav.start();
}

const initHome = () => {
  // modal initialised
}

const contentHome = () => {
  //
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
