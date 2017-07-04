import Modal from '../components/modal';

export default class ModalManager {

  static initModals() {
    const modals = document.querySelectorAll('[data-modal]');

    if (modals.length < 1){
      return undefined;
    }

    modals.forEach((modal, index) => {
      new Modal(modal, index);
    });
   }
 }
