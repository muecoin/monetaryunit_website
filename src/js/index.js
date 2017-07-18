import '../sass/index.scss';
// import managers
import NavigationManager from './managers/navigation-manager';
import AccordionManager from './managers/accordion-manager';
import ModalManager from './managers/modal-manager';
import ScrollingManager from './managers/scrolling-manager';
import FixedHeaderManager from './managers/fixed-header-manager';

const init = () => {
  // Initialise Navigation
  NavigationManager.initNavigation();
  // Initialise Modals
  ModalManager.initModals();
  // Initialise Accordians
  AccordionManager.initAccordions();
  // Initialise Scrolling
  ScrollingManager.initScrolling();
  // Initialise Fixed Header
}

document.addEventListener("DOMContentLoaded", (event) => {
  init();
});
