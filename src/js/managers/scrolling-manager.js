import Scroller from '../components/scroller';

export default class ScrollingManager {

  static initScrolling() {
   const scrollButtons = document.querySelectorAll('[data-jump-to]');

   if (scrollButtons.length < 1){
     return undefined;
   }

   scrollButtons.forEach((button) => {
     new Scroller(button, false);
   });
  }

}
