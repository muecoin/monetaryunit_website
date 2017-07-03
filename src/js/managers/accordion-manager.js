import Accordion from '../components/accordion';

export default class AccordionManager {

  static initAccordions() {
   const accordions = document.querySelectorAll('[data-accordion]');

   if (accordions.length < 1){
     return undefined;
   }

   accordions.forEach((accordion, index) => {
     new Accordion(accordion, index);
   });
  }
}
