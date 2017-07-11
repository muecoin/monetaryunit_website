import preventScroll from 'prevent-scroll';

export default class Modal {

  constructor(modal, index) {
    this.overlay = modal;
    console.log(this.overlay.classList[0]);
    this.selector = this.overlay.classList[0].replace("--hidden", "");
    this.closeButton = this.overlay.querySelector('.' + this.selector + '__close');
    this.closeButton.addEventListener('click', this.close.bind(this));
    this.addOverlayEvents();
    // get the data modal id
    this.dataModalId = this.overlay.getAttribute('data-modal-id');
    // get all data-modal-target's with same value
    this.modalTarget = '[data-modal-target="' + this.dataModalId + '"]';
    // store reference to all buttons relating to this modal
    this.buttons = document.querySelectorAll(this.modalTarget);
    // add button events for all relevant buttons on the page
    this.addButtonEvents();
  }

  addOverlayEvents() {
    this.overlay.addEventListener('click', e => {
      if (e.srcElement.id === this.overlay.id) {
        this.close();
      }
    });
  }

  addButtonEvents(){
    this.buttons.forEach((button, index) => {
      button.addEventListener('click', this.open.bind(this));
    });
  }

  open(e) {
    e.preventDefault();
    console.log('open');
    preventScroll.on();
    this.overlay.classList.add(this.selector);
    this.overlay.classList.remove(this.selector + '--hidden');
  }

  close() {
    console.log('close');
    preventScroll.off();
    this.overlay.classList.add(this.selector + '--hidden');
    this.overlay.classList.remove(this.selector);
  }
}
