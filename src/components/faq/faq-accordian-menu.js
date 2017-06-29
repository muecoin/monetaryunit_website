import React from 'react';

export default () => (
  <div className="faq-accordian-menu">
    <section className="faq-accordion-menu__container">
      <div className="faq -accordion-menu">
        <dl>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" className="faq-accordion-menu__title js-accordionTrigger">First Accordion heading</a>
          </dt>
          <dd className="faq-accordion-menu__item faq-accordion-menu__item--is-collapsed" id="accordion1" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">Lorem ipsum dolor sit amet, consectetur <a href="https://www.google.com">Test</a>adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris. </p>
            <p className="faq-accordion-menu__paragraph">Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.</p>
          </dd>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion2" aria-expanded="false" aria-controls="accordion2" className="faq-accordion-menu__title js-accordionTrigger">
              Second Accordion heading</a>
          </dt>
          <dd className="faq-accordion-menu__item accordionItem faq-accordion-menu__item--is-collapsed" id="accordion2" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris. </p>
            <p className="faq-accordion-menu__paragraph">Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.</p>
          </dd>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion3" aria-expanded="false" aria-controls="accordion3" className="faq-accordion-menu__title js-accordionTrigger">
              Third Accordion heading
            </a>
          </dt>
          <dd className="faq-accordion-menu__item accordionItem faq-accordion-menu__item--is-collapsed" id="accordion3" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris. </p>
            <p className="faq-accordion-menu__paragraph">Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.</p>
          </dd>
        </dl>
      </div>
    </section>
  </div>
)
