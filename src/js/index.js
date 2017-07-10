import '../sass/index.scss';
import Navigation from './components/navigation';
// import managers
import AccordionManager from './managers/accordion-manager';
import ModalManager from './managers/modal-manager';
import ScrollingManager from './managers/scrolling-manager';
import FixedHeaderManager from './managers/fixed-header-manager';

const init = () => {
  // nav component
  const nav = new Navigation();
  nav.start();
  // Initialise Modals
  ModalManager.initModals();
  // Initialise Accordians
  AccordionManager.initAccordions();
  // Initialise Scrolling
  ScrollingManager.initScrolling();
  // Initialise Fixed Header
  FixedHeaderManager.initFixedHeader();
}

// prevent page from automatically jumping on load when hash present and add smooth scrolling
ScrollingManager.hijackPageLoadHashJump();

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
