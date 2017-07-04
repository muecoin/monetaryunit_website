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

  static hijackPageLoadHashJump() {
    let target = window.location.hash;
    const isHashPresent = (target.length > 1) ? true : false;

    if (isHashPresent){
      target = target.replace('#', '');
      const targetScrollElement = document.querySelector('[data-hash-target="' + target + '"]');
      new Scroller(targetScrollElement, true);
    }
  }
}
