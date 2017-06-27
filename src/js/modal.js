export default class Modal {

  constructor(overlay, selector) {
    this.selector = selector;
    this.overlay = overlay;
    const closeButton = overlay.querySelector('.' + this.selector + '__close');

    closeButton.addEventListener('click', this.close.bind(this));
    overlay.addEventListener('click', e => {
      if (e.srcElement.id === this.overlay.id) {
        this.close();
      }
    });
  }

  open() {
    console.log('open');
    this.overlay.classList.add(this.selector);
    this.overlay.classList.remove(this.selector + '--hidden');
  }

  close() {
    console.log('close');
    this.overlay.classList.add(this.selector + '--hidden');
    this.overlay.classList.remove(this.selector);
  }
}
