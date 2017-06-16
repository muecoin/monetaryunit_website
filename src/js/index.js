import '../sass/index.scss';
import $ from 'jquery';

import myplugin from './my-plugin';

const init = () => {
  initHome();
  contentHome();
}

const initHome = () => {
  myplugin();
}

const contentHome = () => {
  console.log();
}

$(document).ready(init);
