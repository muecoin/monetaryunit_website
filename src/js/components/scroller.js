import jump from 'jump.js'

export default class Scroller {
  constructor(element, immediatelyScroll){
    if (!immediatelyScroll) {
      this.button = element;
      this.scrollTarget = this.button.getAttribute('data-jump-to');
      this.addScrollEvent();
    } else {
      this.scrollTarget = element;
      this.scroll();
    }
  }

  addScrollEvent() {
      this.button.addEventListener('click', this.buttonScroll.bind(this));
  }

  buttonScroll(e) {
    // check if link element is on this page
    const isTargetPresentOnPage = document.querySelector(this.scrollTarget);
    // if present then prevent link and scroll
    if (isTargetPresentOnPage != null){
      e.preventDefault();
      this.scroll();
    }
  }

  scroll() {
    jump(this.scrollTarget);
  }
}
