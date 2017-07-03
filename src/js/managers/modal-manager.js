// wallet modal component
// const walletButton = document.querySelector('[data-component="wallet-modal"]');
// if (walletButton != null) {
//   const walletModal = new Modal(document.querySelector('.wallet-download-modal--hidden'), 'wallet-download-modal');
//   window.openWalletModal = walletModal.open.bind(walletModal);
//   walletButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     window.openWalletModal();
//   });
// }


import Modal from '../components/modal';

export default class ModalManager {

  static initWalletModals() {
    const modals = document.querySelectorAll('[data-modal]');

    if (modals.length < 1){
      return undefined;
    }

    modals.forEach((modal, index) => {
      console.log(modal.getAttribute("data-btn-type"));

      new Modal(modal);
    });
   }
 }
