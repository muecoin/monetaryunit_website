export default class Modal {

  constructor(overlay, selector) {
    this.overlay = overlay;
    const closeButton = overlay.querySelector(selector + '__close');
    closeButton.addEventListener('click', this.close.bind(this));
    overlay.addEventListener('click', e => {
      if (e.srcElement.id === this.overlay.id) {
        this.close();
      }
    });
  }

  open() {
    this.overlay.classList.add(selector);
    this.overlay.classList.remove(selector + '--hidden');
  }

  close() {
    this.overlay.classList.add(selector + '--hidden');
    this.overlay.classList.remove(selector);
  }
}
