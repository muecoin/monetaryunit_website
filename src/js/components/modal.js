export default class Modal {

  constructor(modal) {
    this.element = modal;
    this.overlay = this.element;
    this.selector = this.element.classList[0].replace("--hidden", "");

    this.closeButton = this.element.querySelector('.' + this.selector + '__close');

    this.closeButton.addEventListener('click', this.close.bind(this));
    this.overlay.addEventListener('click', e => {
      if (e.srcElement.id === this.overlay.id) {
        this.close();
      }
    });

    // init the buttons - find the buttons that will trigger this modal searching for this modals data-modal-i
    // inside a buttons data-modal-target
    // data-modal-target - on the button
    // data-modal-id - on the modal
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
