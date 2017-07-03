import '../sass/index.scss';

import Navigation from './components/navigation';

// import managers
import AccordionManager from './managers/accordion-manager';
import ModalManager from './managers/modal-manager';


const init = () => {

  // nav component
  const nav = new Navigation();
  nav.start();


  // video modal component
  // const videoButton = document.querySelector('[data-component="video-modal"]');
  //   if (videoButton != null) {
  //     const videoModal = new Modal(document.querySelector('.video-modal--hidden'), 'video-modal');
  //     window.openVideoModal = videoModal.open.bind(videoModal);
  //     videoButton.addEventListener('click', function(event) {
  //       event.preventDefault();
  //       window.openVideoModal();
  //     });
  //   }
  // }

  // Initialise Modals
  ModalManager.initWalletModals();
  //ModalManager.initWhyBuyMueModal();
  // Initalise Accordians
  AccordionManager.initAccordions();
}


document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
