import '../sass/index.scss';

import Navigation from './navigation';
import Modal from './modal';

const init = () => {
  const nav = new Navigation();
  nav.start();
  const walletModal = new Modal(document.querySelector('.wallet-download-modal--hidden'), 'wallet-download-modal');
  console.log(walletModal);
  const videoModal = new Modal(document.querySelector('.video-modal--hidden'), 'video-modal');
  window.openWalletModal = walletModal.open.bind(walletModal);
  window.openVideoModal = videoModal.open.bind(videoModal);
  initHome();
}

const initHome = () => {
  const openButton = document.querySelector('.get-started__wallet-download');
  openButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.openWalletModal();
  });

  const openVideoButton = document.querySelector('.hero__actions-btn-why-mue');
  openVideoButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.openVideoModal();
  });
}

const contentHome = () => {
  //
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
