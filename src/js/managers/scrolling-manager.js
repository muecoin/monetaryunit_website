import { forEach } from 'lodash';
import Scroller from '../components/scroller';

export default class ScrollingManager {

  static initScrolling() {
   const scrollButtons = document.querySelectorAll('[data-jump-to]');

   if (scrollButtons.length < 1){
     return undefined;
   }

   forEach(scrollButtons, (button) => {
     new Scroller(button, false);
   });
  }

}
