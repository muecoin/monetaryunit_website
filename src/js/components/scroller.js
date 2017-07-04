import jump from 'jump.js'

export default class Scroller {
  constructor(button){
    this.button = button;
    this.scrollTarget = this.button.getAttribute('data-jump-to');
    this.addScrollEvent();
  }

  addScrollEvent() {
      this.button.addEventListener('click', this.scroll.bind(this));
  }

  scroll(e) {
    e.preventDefault();
    jump(this.scrollTarget);
  }
}
