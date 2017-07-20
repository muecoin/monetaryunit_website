import { forEach } from 'lodash';

const click = 'ontouchstart' in window ? 'touchstart' : 'click';

export default class Accordion {
  constructor(accordionElement, index){
    this.accordionElement = accordionElement;
    this.accordionIndex = index;
    this.accordionToggles = accordionElement.querySelectorAll('[data-accordion-trigger]'),
    this.switchAccordion,
    this.touchSupported = ('ontouchstart' in window),
    this.bindHandlers();
    this.initialise();
  }

  bindHandlers() {
    this.switchAccordion = this.switchAccordion.bind(this);
  }

  initialise() {
    forEach(this.accordionToggles, (toggle) => {
      toggle.addEventListener(click, this.switchAccordion, false);
    });
  }

  skipClickDelay(e){
    e.preventDefault();
    e.target.click();
  }

  setAriaAttr(el, ariaType, newProperty){
    el.setAttribute(ariaType, newProperty);
  }

  setAccordionAria(el1, el2, expanded){
    switch(expanded) {
        case "true":
        	this.setAriaAttr(el1, 'aria-expanded', 'true');
        	this.setAriaAttr(el2, 'aria-hidden', 'false');
        	break;
        case "false":
        	this.setAriaAttr(el1, 'aria-expanded', 'false');
        	this.setAriaAttr(el2, 'aria-hidden', 'true');
        	break;
        default:
        break;
    }
  }

  switchAccordion(e) {
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains('is-collapsed')) {
      this.setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
      this.setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('faq-accordion-menu__title--active');
    thisAnswer.classList.toggle('faq-accordion-menu__item--is-collapsed');
    thisAnswer.classList.toggle('animateIn');
  }
}
